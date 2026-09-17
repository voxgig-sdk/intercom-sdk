package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/intercom-sdk/go/utility/struct"
)

type IntercomSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewIntercomSDK(options map[string]any) *IntercomSDK {
	sdk := &IntercomSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *IntercomSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *IntercomSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *IntercomSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *IntercomSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *IntercomSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *IntercomSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *IntercomSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("IntercomSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *IntercomSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *IntercomSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("IntercomSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// ActivityLog returns a ActivityLog entity bound to this client.
// Idiomatic usage: client.ActivityLog(nil).List(nil, nil) or
// client.ActivityLog(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ActivityLog(data map[string]any) IntercomEntity {
	return NewActivityLogEntityFunc(sdk, data)
}


// ActivityLogEventType returns a ActivityLogEventType entity bound to this client.
// Idiomatic usage: client.ActivityLogEventType(nil).List(nil, nil) or
// client.ActivityLogEventType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ActivityLogEventType(data map[string]any) IntercomEntity {
	return NewActivityLogEventTypeEntityFunc(sdk, data)
}


// ActivityLogList returns a ActivityLogList entity bound to this client.
// Idiomatic usage: client.ActivityLogList(nil).List(nil, nil) or
// client.ActivityLogList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ActivityLogList(data map[string]any) IntercomEntity {
	return NewActivityLogListEntityFunc(sdk, data)
}


// Admin returns a Admin entity bound to this client.
// Idiomatic usage: client.Admin(nil).List(nil, nil) or
// client.Admin(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Admin(data map[string]any) IntercomEntity {
	return NewAdminEntityFunc(sdk, data)
}


// AdminWithApp returns a AdminWithApp entity bound to this client.
// Idiomatic usage: client.AdminWithApp(nil).List(nil, nil) or
// client.AdminWithApp(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) AdminWithApp(data map[string]any) IntercomEntity {
	return NewAdminWithAppEntityFunc(sdk, data)
}


// AiCall returns a AiCall entity bound to this client.
// Idiomatic usage: client.AiCall(nil).List(nil, nil) or
// client.AiCall(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) AiCall(data map[string]any) IntercomEntity {
	return NewAiCallEntityFunc(sdk, data)
}


// AiContent returns a AiContent entity bound to this client.
// Idiomatic usage: client.AiContent(nil).List(nil, nil) or
// client.AiContent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) AiContent(data map[string]any) IntercomEntity {
	return NewAiContentEntityFunc(sdk, data)
}


// Article returns a Article entity bound to this client.
// Idiomatic usage: client.Article(nil).List(nil, nil) or
// client.Article(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Article(data map[string]any) IntercomEntity {
	return NewArticleEntityFunc(sdk, data)
}


// ArticleSearch returns a ArticleSearch entity bound to this client.
// Idiomatic usage: client.ArticleSearch(nil).List(nil, nil) or
// client.ArticleSearch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ArticleSearch(data map[string]any) IntercomEntity {
	return NewArticleSearchEntityFunc(sdk, data)
}


// ArticleVersion returns a ArticleVersion entity bound to this client.
// Idiomatic usage: client.ArticleVersion(nil).List(nil, nil) or
// client.ArticleVersion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ArticleVersion(data map[string]any) IntercomEntity {
	return NewArticleVersionEntityFunc(sdk, data)
}


// ArticleVersionList returns a ArticleVersionList entity bound to this client.
// Idiomatic usage: client.ArticleVersionList(nil).List(nil, nil) or
// client.ArticleVersionList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ArticleVersionList(data map[string]any) IntercomEntity {
	return NewArticleVersionListEntityFunc(sdk, data)
}


// Audience returns a Audience entity bound to this client.
// Idiomatic usage: client.Audience(nil).List(nil, nil) or
// client.Audience(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Audience(data map[string]any) IntercomEntity {
	return NewAudienceEntityFunc(sdk, data)
}


// AwayStatusReason returns a AwayStatusReason entity bound to this client.
// Idiomatic usage: client.AwayStatusReason(nil).List(nil, nil) or
// client.AwayStatusReason(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) AwayStatusReason(data map[string]any) IntercomEntity {
	return NewAwayStatusReasonEntityFunc(sdk, data)
}


// Banner returns a Banner entity bound to this client.
// Idiomatic usage: client.Banner(nil).List(nil, nil) or
// client.Banner(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Banner(data map[string]any) IntercomEntity {
	return NewBannerEntityFunc(sdk, data)
}


// BannerDismiss returns a BannerDismiss entity bound to this client.
// Idiomatic usage: client.BannerDismiss(nil).List(nil, nil) or
// client.BannerDismiss(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) BannerDismiss(data map[string]any) IntercomEntity {
	return NewBannerDismissEntityFunc(sdk, data)
}


// Brand returns a Brand entity bound to this client.
// Idiomatic usage: client.Brand(nil).List(nil, nil) or
// client.Brand(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Brand(data map[string]any) IntercomEntity {
	return NewBrandEntityFunc(sdk, data)
}


// Call returns a Call entity bound to this client.
// Idiomatic usage: client.Call(nil).List(nil, nil) or
// client.Call(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Call(data map[string]any) IntercomEntity {
	return NewCallEntityFunc(sdk, data)
}


// Company returns a Company entity bound to this client.
// Idiomatic usage: client.Company(nil).List(nil, nil) or
// client.Company(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Company(data map[string]any) IntercomEntity {
	return NewCompanyEntityFunc(sdk, data)
}


// CompanyAttachedContact returns a CompanyAttachedContact entity bound to this client.
// Idiomatic usage: client.CompanyAttachedContact(nil).List(nil, nil) or
// client.CompanyAttachedContact(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) CompanyAttachedContact(data map[string]any) IntercomEntity {
	return NewCompanyAttachedContactEntityFunc(sdk, data)
}


// CompanyAttachedSegment returns a CompanyAttachedSegment entity bound to this client.
// Idiomatic usage: client.CompanyAttachedSegment(nil).List(nil, nil) or
// client.CompanyAttachedSegment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) CompanyAttachedSegment(data map[string]any) IntercomEntity {
	return NewCompanyAttachedSegmentEntityFunc(sdk, data)
}


// CompanyList returns a CompanyList entity bound to this client.
// Idiomatic usage: client.CompanyList(nil).List(nil, nil) or
// client.CompanyList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) CompanyList(data map[string]any) IntercomEntity {
	return NewCompanyListEntityFunc(sdk, data)
}


// CompanyScroll returns a CompanyScroll entity bound to this client.
// Idiomatic usage: client.CompanyScroll(nil).List(nil, nil) or
// client.CompanyScroll(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) CompanyScroll(data map[string]any) IntercomEntity {
	return NewCompanyScrollEntityFunc(sdk, data)
}


// Contact returns a Contact entity bound to this client.
// Idiomatic usage: client.Contact(nil).List(nil, nil) or
// client.Contact(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Contact(data map[string]any) IntercomEntity {
	return NewContactEntityFunc(sdk, data)
}


// ContactAttachedCompany returns a ContactAttachedCompany entity bound to this client.
// Idiomatic usage: client.ContactAttachedCompany(nil).List(nil, nil) or
// client.ContactAttachedCompany(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ContactAttachedCompany(data map[string]any) IntercomEntity {
	return NewContactAttachedCompanyEntityFunc(sdk, data)
}


// ContactList returns a ContactList entity bound to this client.
// Idiomatic usage: client.ContactList(nil).List(nil, nil) or
// client.ContactList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ContactList(data map[string]any) IntercomEntity {
	return NewContactListEntityFunc(sdk, data)
}


// ContactSegment returns a ContactSegment entity bound to this client.
// Idiomatic usage: client.ContactSegment(nil).List(nil, nil) or
// client.ContactSegment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ContactSegment(data map[string]any) IntercomEntity {
	return NewContactSegmentEntityFunc(sdk, data)
}


// Content returns a Content entity bound to this client.
// Idiomatic usage: client.Content(nil).List(nil, nil) or
// client.Content(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Content(data map[string]any) IntercomEntity {
	return NewContentEntityFunc(sdk, data)
}


// ContentImportSource returns a ContentImportSource entity bound to this client.
// Idiomatic usage: client.ContentImportSource(nil).List(nil, nil) or
// client.ContentImportSource(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ContentImportSource(data map[string]any) IntercomEntity {
	return NewContentImportSourceEntityFunc(sdk, data)
}


// ContentSearch returns a ContentSearch entity bound to this client.
// Idiomatic usage: client.ContentSearch(nil).List(nil, nil) or
// client.ContentSearch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ContentSearch(data map[string]any) IntercomEntity {
	return NewContentSearchEntityFunc(sdk, data)
}


// ContentSnippet returns a ContentSnippet entity bound to this client.
// Idiomatic usage: client.ContentSnippet(nil).List(nil, nil) or
// client.ContentSnippet(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ContentSnippet(data map[string]any) IntercomEntity {
	return NewContentSnippetEntityFunc(sdk, data)
}


// Conversation returns a Conversation entity bound to this client.
// Idiomatic usage: client.Conversation(nil).List(nil, nil) or
// client.Conversation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Conversation(data map[string]any) IntercomEntity {
	return NewConversationEntityFunc(sdk, data)
}


// ConversationAttribute returns a ConversationAttribute entity bound to this client.
// Idiomatic usage: client.ConversationAttribute(nil).List(nil, nil) or
// client.ConversationAttribute(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ConversationAttribute(data map[string]any) IntercomEntity {
	return NewConversationAttributeEntityFunc(sdk, data)
}


// ConversationAttributeList returns a ConversationAttributeList entity bound to this client.
// Idiomatic usage: client.ConversationAttributeList(nil).List(nil, nil) or
// client.ConversationAttributeList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ConversationAttributeList(data map[string]any) IntercomEntity {
	return NewConversationAttributeListEntityFunc(sdk, data)
}


// ConversationList returns a ConversationList entity bound to this client.
// Idiomatic usage: client.ConversationList(nil).List(nil, nil) or
// client.ConversationList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ConversationList(data map[string]any) IntercomEntity {
	return NewConversationListEntityFunc(sdk, data)
}


// ConversationParticipant returns a ConversationParticipant entity bound to this client.
// Idiomatic usage: client.ConversationParticipant(nil).List(nil, nil) or
// client.ConversationParticipant(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ConversationParticipant(data map[string]any) IntercomEntity {
	return NewConversationParticipantEntityFunc(sdk, data)
}


// CustomObjectInstance returns a CustomObjectInstance entity bound to this client.
// Idiomatic usage: client.CustomObjectInstance(nil).List(nil, nil) or
// client.CustomObjectInstance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) CustomObjectInstance(data map[string]any) IntercomEntity {
	return NewCustomObjectInstanceEntityFunc(sdk, data)
}


// Data returns a Data entity bound to this client.
// Idiomatic usage: client.Data(nil).List(nil, nil) or
// client.Data(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Data(data map[string]any) IntercomEntity {
	return NewDataEntityFunc(sdk, data)
}


// DataAttribute returns a DataAttribute entity bound to this client.
// Idiomatic usage: client.DataAttribute(nil).List(nil, nil) or
// client.DataAttribute(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) DataAttribute(data map[string]any) IntercomEntity {
	return NewDataAttributeEntityFunc(sdk, data)
}


// DataConnector returns a DataConnector entity bound to this client.
// Idiomatic usage: client.DataConnector(nil).List(nil, nil) or
// client.DataConnector(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) DataConnector(data map[string]any) IntercomEntity {
	return NewDataConnectorEntityFunc(sdk, data)
}


// DataConnectorExecutionResult returns a DataConnectorExecutionResult entity bound to this client.
// Idiomatic usage: client.DataConnectorExecutionResult(nil).List(nil, nil) or
// client.DataConnectorExecutionResult(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) DataConnectorExecutionResult(data map[string]any) IntercomEntity {
	return NewDataConnectorExecutionResultEntityFunc(sdk, data)
}


// DataConnectorExecutionResultList returns a DataConnectorExecutionResultList entity bound to this client.
// Idiomatic usage: client.DataConnectorExecutionResultList(nil).List(nil, nil) or
// client.DataConnectorExecutionResultList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) DataConnectorExecutionResultList(data map[string]any) IntercomEntity {
	return NewDataConnectorExecutionResultListEntityFunc(sdk, data)
}


// DataEvent returns a DataEvent entity bound to this client.
// Idiomatic usage: client.DataEvent(nil).List(nil, nil) or
// client.DataEvent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) DataEvent(data map[string]any) IntercomEntity {
	return NewDataEventEntityFunc(sdk, data)
}


// DataEventSummary returns a DataEventSummary entity bound to this client.
// Idiomatic usage: client.DataEventSummary(nil).List(nil, nil) or
// client.DataEventSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) DataEventSummary(data map[string]any) IntercomEntity {
	return NewDataEventSummaryEntityFunc(sdk, data)
}


// DataExport returns a DataExport entity bound to this client.
// Idiomatic usage: client.DataExport(nil).List(nil, nil) or
// client.DataExport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) DataExport(data map[string]any) IntercomEntity {
	return NewDataExportEntityFunc(sdk, data)
}


// Deleted returns a Deleted entity bound to this client.
// Idiomatic usage: client.Deleted(nil).List(nil, nil) or
// client.Deleted(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Deleted(data map[string]any) IntercomEntity {
	return NewDeletedEntityFunc(sdk, data)
}


// DeletedArticleObject returns a DeletedArticleObject entity bound to this client.
// Idiomatic usage: client.DeletedArticleObject(nil).List(nil, nil) or
// client.DeletedArticleObject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) DeletedArticleObject(data map[string]any) IntercomEntity {
	return NewDeletedArticleObjectEntityFunc(sdk, data)
}


// DeletedCompanyObject returns a DeletedCompanyObject entity bound to this client.
// Idiomatic usage: client.DeletedCompanyObject(nil).List(nil, nil) or
// client.DeletedCompanyObject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) DeletedCompanyObject(data map[string]any) IntercomEntity {
	return NewDeletedCompanyObjectEntityFunc(sdk, data)
}


// DeletedDataConnectorObject returns a DeletedDataConnectorObject entity bound to this client.
// Idiomatic usage: client.DeletedDataConnectorObject(nil).List(nil, nil) or
// client.DeletedDataConnectorObject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) DeletedDataConnectorObject(data map[string]any) IntercomEntity {
	return NewDeletedDataConnectorObjectEntityFunc(sdk, data)
}


// DeletedInternalArticleObject returns a DeletedInternalArticleObject entity bound to this client.
// Idiomatic usage: client.DeletedInternalArticleObject(nil).List(nil, nil) or
// client.DeletedInternalArticleObject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) DeletedInternalArticleObject(data map[string]any) IntercomEntity {
	return NewDeletedInternalArticleObjectEntityFunc(sdk, data)
}


// DeletedObject returns a DeletedObject entity bound to this client.
// Idiomatic usage: client.DeletedObject(nil).List(nil, nil) or
// client.DeletedObject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) DeletedObject(data map[string]any) IntercomEntity {
	return NewDeletedObjectEntityFunc(sdk, data)
}


// Email returns a Email entity bound to this client.
// Idiomatic usage: client.Email(nil).List(nil, nil) or
// client.Email(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Email(data map[string]any) IntercomEntity {
	return NewEmailEntityFunc(sdk, data)
}


// ExternalPage returns a ExternalPage entity bound to this client.
// Idiomatic usage: client.ExternalPage(nil).List(nil, nil) or
// client.ExternalPage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ExternalPage(data map[string]any) IntercomEntity {
	return NewExternalPageEntityFunc(sdk, data)
}


// FinAgent returns a FinAgent entity bound to this client.
// Idiomatic usage: client.FinAgent(nil).List(nil, nil) or
// client.FinAgent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) FinAgent(data map[string]any) IntercomEntity {
	return NewFinAgentEntityFunc(sdk, data)
}


// HandlingEvent returns a HandlingEvent entity bound to this client.
// Idiomatic usage: client.HandlingEvent(nil).List(nil, nil) or
// client.HandlingEvent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) HandlingEvent(data map[string]any) IntercomEntity {
	return NewHandlingEventEntityFunc(sdk, data)
}


// HelpCenter returns a HelpCenter entity bound to this client.
// Idiomatic usage: client.HelpCenter(nil).List(nil, nil) or
// client.HelpCenter(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) HelpCenter(data map[string]any) IntercomEntity {
	return NewHelpCenterEntityFunc(sdk, data)
}


// InternalArticle returns a InternalArticle entity bound to this client.
// Idiomatic usage: client.InternalArticle(nil).List(nil, nil) or
// client.InternalArticle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) InternalArticle(data map[string]any) IntercomEntity {
	return NewInternalArticleEntityFunc(sdk, data)
}


// InternalArticleSearch returns a InternalArticleSearch entity bound to this client.
// Idiomatic usage: client.InternalArticleSearch(nil).List(nil, nil) or
// client.InternalArticleSearch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) InternalArticleSearch(data map[string]any) IntercomEntity {
	return NewInternalArticleSearchEntityFunc(sdk, data)
}


// IpAllowlist returns a IpAllowlist entity bound to this client.
// Idiomatic usage: client.IpAllowlist(nil).List(nil, nil) or
// client.IpAllowlist(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) IpAllowlist(data map[string]any) IntercomEntity {
	return NewIpAllowlistEntityFunc(sdk, data)
}


// Job returns a Job entity bound to this client.
// Idiomatic usage: client.Job(nil).List(nil, nil) or
// client.Job(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Job(data map[string]any) IntercomEntity {
	return NewJobEntityFunc(sdk, data)
}


// Macro returns a Macro entity bound to this client.
// Idiomatic usage: client.Macro(nil).List(nil, nil) or
// client.Macro(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Macro(data map[string]any) IntercomEntity {
	return NewMacroEntityFunc(sdk, data)
}


// MergeHistory returns a MergeHistory entity bound to this client.
// Idiomatic usage: client.MergeHistory(nil).List(nil, nil) or
// client.MergeHistory(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) MergeHistory(data map[string]any) IntercomEntity {
	return NewMergeHistoryEntityFunc(sdk, data)
}


// Message returns a Message entity bound to this client.
// Idiomatic usage: client.Message(nil).List(nil, nil) or
// client.Message(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Message(data map[string]any) IntercomEntity {
	return NewMessageEntityFunc(sdk, data)
}


// NewsItem returns a NewsItem entity bound to this client.
// Idiomatic usage: client.NewsItem(nil).List(nil, nil) or
// client.NewsItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) NewsItem(data map[string]any) IntercomEntity {
	return NewNewsItemEntityFunc(sdk, data)
}


// Newsfeed returns a Newsfeed entity bound to this client.
// Idiomatic usage: client.Newsfeed(nil).List(nil, nil) or
// client.Newsfeed(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Newsfeed(data map[string]any) IntercomEntity {
	return NewNewsfeedEntityFunc(sdk, data)
}


// Note returns a Note entity bound to this client.
// Idiomatic usage: client.Note(nil).List(nil, nil) or
// client.Note(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Note(data map[string]any) IntercomEntity {
	return NewNoteEntityFunc(sdk, data)
}


// OfficeHour returns a OfficeHour entity bound to this client.
// Idiomatic usage: client.OfficeHour(nil).List(nil, nil) or
// client.OfficeHour(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) OfficeHour(data map[string]any) IntercomEntity {
	return NewOfficeHourEntityFunc(sdk, data)
}


// OfficeHoursException returns a OfficeHoursException entity bound to this client.
// Idiomatic usage: client.OfficeHoursException(nil).List(nil, nil) or
// client.OfficeHoursException(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) OfficeHoursException(data map[string]any) IntercomEntity {
	return NewOfficeHoursExceptionEntityFunc(sdk, data)
}


// OfficeHoursSchedule returns a OfficeHoursSchedule entity bound to this client.
// Idiomatic usage: client.OfficeHoursSchedule(nil).List(nil, nil) or
// client.OfficeHoursSchedule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) OfficeHoursSchedule(data map[string]any) IntercomEntity {
	return NewOfficeHoursScheduleEntityFunc(sdk, data)
}


// Paginated returns a Paginated entity bound to this client.
// Idiomatic usage: client.Paginated(nil).List(nil, nil) or
// client.Paginated(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Paginated(data map[string]any) IntercomEntity {
	return NewPaginatedEntityFunc(sdk, data)
}


// PhoneSwitch returns a PhoneSwitch entity bound to this client.
// Idiomatic usage: client.PhoneSwitch(nil).List(nil, nil) or
// client.PhoneSwitch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) PhoneSwitch(data map[string]any) IntercomEntity {
	return NewPhoneSwitchEntityFunc(sdk, data)
}


// ReportingData returns a ReportingData entity bound to this client.
// Idiomatic usage: client.ReportingData(nil).List(nil, nil) or
// client.ReportingData(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ReportingData(data map[string]any) IntercomEntity {
	return NewReportingDataEntityFunc(sdk, data)
}


// ReportingDataExport returns a ReportingDataExport entity bound to this client.
// Idiomatic usage: client.ReportingDataExport(nil).List(nil, nil) or
// client.ReportingDataExport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) ReportingDataExport(data map[string]any) IntercomEntity {
	return NewReportingDataExportEntityFunc(sdk, data)
}


// Segment returns a Segment entity bound to this client.
// Idiomatic usage: client.Segment(nil).List(nil, nil) or
// client.Segment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Segment(data map[string]any) IntercomEntity {
	return NewSegmentEntityFunc(sdk, data)
}


// SideConversation returns a SideConversation entity bound to this client.
// Idiomatic usage: client.SideConversation(nil).List(nil, nil) or
// client.SideConversation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) SideConversation(data map[string]any) IntercomEntity {
	return NewSideConversationEntityFunc(sdk, data)
}


// Subscription returns a Subscription entity bound to this client.
// Idiomatic usage: client.Subscription(nil).List(nil, nil) or
// client.Subscription(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Subscription(data map[string]any) IntercomEntity {
	return NewSubscriptionEntityFunc(sdk, data)
}


// SubscriptionType returns a SubscriptionType entity bound to this client.
// Idiomatic usage: client.SubscriptionType(nil).List(nil, nil) or
// client.SubscriptionType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) SubscriptionType(data map[string]any) IntercomEntity {
	return NewSubscriptionTypeEntityFunc(sdk, data)
}


// Tag returns a Tag entity bound to this client.
// Idiomatic usage: client.Tag(nil).List(nil, nil) or
// client.Tag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Tag(data map[string]any) IntercomEntity {
	return NewTagEntityFunc(sdk, data)
}


// Team returns a Team entity bound to this client.
// Idiomatic usage: client.Team(nil).List(nil, nil) or
// client.Team(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Team(data map[string]any) IntercomEntity {
	return NewTeamEntityFunc(sdk, data)
}


// TeamMetricList returns a TeamMetricList entity bound to this client.
// Idiomatic usage: client.TeamMetricList(nil).List(nil, nil) or
// client.TeamMetricList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) TeamMetricList(data map[string]any) IntercomEntity {
	return NewTeamMetricListEntityFunc(sdk, data)
}


// Ticket returns a Ticket entity bound to this client.
// Idiomatic usage: client.Ticket(nil).List(nil, nil) or
// client.Ticket(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Ticket(data map[string]any) IntercomEntity {
	return NewTicketEntityFunc(sdk, data)
}


// TicketList returns a TicketList entity bound to this client.
// Idiomatic usage: client.TicketList(nil).List(nil, nil) or
// client.TicketList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) TicketList(data map[string]any) IntercomEntity {
	return NewTicketListEntityFunc(sdk, data)
}


// TicketReply returns a TicketReply entity bound to this client.
// Idiomatic usage: client.TicketReply(nil).List(nil, nil) or
// client.TicketReply(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) TicketReply(data map[string]any) IntercomEntity {
	return NewTicketReplyEntityFunc(sdk, data)
}


// TicketState returns a TicketState entity bound to this client.
// Idiomatic usage: client.TicketState(nil).List(nil, nil) or
// client.TicketState(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) TicketState(data map[string]any) IntercomEntity {
	return NewTicketStateEntityFunc(sdk, data)
}


// TicketType returns a TicketType entity bound to this client.
// Idiomatic usage: client.TicketType(nil).List(nil, nil) or
// client.TicketType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) TicketType(data map[string]any) IntercomEntity {
	return NewTicketTypeEntityFunc(sdk, data)
}


// TicketTypeAttribute returns a TicketTypeAttribute entity bound to this client.
// Idiomatic usage: client.TicketTypeAttribute(nil).List(nil, nil) or
// client.TicketTypeAttribute(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) TicketTypeAttribute(data map[string]any) IntercomEntity {
	return NewTicketTypeAttributeEntityFunc(sdk, data)
}


// Visitor returns a Visitor entity bound to this client.
// Idiomatic usage: client.Visitor(nil).List(nil, nil) or
// client.Visitor(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Visitor(data map[string]any) IntercomEntity {
	return NewVisitorEntityFunc(sdk, data)
}


// WhatsappMessageStatus returns a WhatsappMessageStatus entity bound to this client.
// Idiomatic usage: client.WhatsappMessageStatus(nil).List(nil, nil) or
// client.WhatsappMessageStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) WhatsappMessageStatus(data map[string]any) IntercomEntity {
	return NewWhatsappMessageStatusEntityFunc(sdk, data)
}


// WhatsappMessageStatusList returns a WhatsappMessageStatusList entity bound to this client.
// Idiomatic usage: client.WhatsappMessageStatusList(nil).List(nil, nil) or
// client.WhatsappMessageStatusList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) WhatsappMessageStatusList(data map[string]any) IntercomEntity {
	return NewWhatsappMessageStatusListEntityFunc(sdk, data)
}


// Workflow returns a Workflow entity bound to this client.
// Idiomatic usage: client.Workflow(nil).List(nil, nil) or
// client.Workflow(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IntercomSDK) Workflow(data map[string]any) IntercomEntity {
	return NewWorkflowEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *IntercomSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewIntercomSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
