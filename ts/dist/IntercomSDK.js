"use strict";
// Intercom Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.IntercomSDK = exports.IntercomEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const ActivityLogEntity_1 = require("./entity/ActivityLogEntity");
const ActivityLogEventTypeEntity_1 = require("./entity/ActivityLogEventTypeEntity");
const ActivityLogListEntity_1 = require("./entity/ActivityLogListEntity");
const AdminEntity_1 = require("./entity/AdminEntity");
const AdminWithAppEntity_1 = require("./entity/AdminWithAppEntity");
const AiCallEntity_1 = require("./entity/AiCallEntity");
const AiContentEntity_1 = require("./entity/AiContentEntity");
const ArticleEntity_1 = require("./entity/ArticleEntity");
const ArticleSearchEntity_1 = require("./entity/ArticleSearchEntity");
const ArticleVersionEntity_1 = require("./entity/ArticleVersionEntity");
const ArticleVersionListEntity_1 = require("./entity/ArticleVersionListEntity");
const AudienceEntity_1 = require("./entity/AudienceEntity");
const AwayStatusReasonEntity_1 = require("./entity/AwayStatusReasonEntity");
const BannerEntity_1 = require("./entity/BannerEntity");
const BannerDismissEntity_1 = require("./entity/BannerDismissEntity");
const BrandEntity_1 = require("./entity/BrandEntity");
const CallEntity_1 = require("./entity/CallEntity");
const CompanyEntity_1 = require("./entity/CompanyEntity");
const CompanyAttachedContactEntity_1 = require("./entity/CompanyAttachedContactEntity");
const CompanyAttachedSegmentEntity_1 = require("./entity/CompanyAttachedSegmentEntity");
const CompanyListEntity_1 = require("./entity/CompanyListEntity");
const CompanyScrollEntity_1 = require("./entity/CompanyScrollEntity");
const ContactEntity_1 = require("./entity/ContactEntity");
const ContactAttachedCompanyEntity_1 = require("./entity/ContactAttachedCompanyEntity");
const ContactListEntity_1 = require("./entity/ContactListEntity");
const ContactSegmentEntity_1 = require("./entity/ContactSegmentEntity");
const ContentEntity_1 = require("./entity/ContentEntity");
const ContentImportSourceEntity_1 = require("./entity/ContentImportSourceEntity");
const ContentSearchEntity_1 = require("./entity/ContentSearchEntity");
const ContentSnippetEntity_1 = require("./entity/ContentSnippetEntity");
const ConversationEntity_1 = require("./entity/ConversationEntity");
const ConversationAttributeEntity_1 = require("./entity/ConversationAttributeEntity");
const ConversationAttributeListEntity_1 = require("./entity/ConversationAttributeListEntity");
const ConversationListEntity_1 = require("./entity/ConversationListEntity");
const ConversationParticipantEntity_1 = require("./entity/ConversationParticipantEntity");
const CustomObjectInstanceEntity_1 = require("./entity/CustomObjectInstanceEntity");
const DataEntity_1 = require("./entity/DataEntity");
const DataAttributeEntity_1 = require("./entity/DataAttributeEntity");
const DataConnectorEntity_1 = require("./entity/DataConnectorEntity");
const DataConnectorExecutionResultEntity_1 = require("./entity/DataConnectorExecutionResultEntity");
const DataConnectorExecutionResultListEntity_1 = require("./entity/DataConnectorExecutionResultListEntity");
const DataEventEntity_1 = require("./entity/DataEventEntity");
const DataEventSummaryEntity_1 = require("./entity/DataEventSummaryEntity");
const DataExportEntity_1 = require("./entity/DataExportEntity");
const DeletedEntity_1 = require("./entity/DeletedEntity");
const DeletedArticleObjectEntity_1 = require("./entity/DeletedArticleObjectEntity");
const DeletedCompanyObjectEntity_1 = require("./entity/DeletedCompanyObjectEntity");
const DeletedDataConnectorObjectEntity_1 = require("./entity/DeletedDataConnectorObjectEntity");
const DeletedInternalArticleObjectEntity_1 = require("./entity/DeletedInternalArticleObjectEntity");
const DeletedObjectEntity_1 = require("./entity/DeletedObjectEntity");
const EmailEntity_1 = require("./entity/EmailEntity");
const ExternalPageEntity_1 = require("./entity/ExternalPageEntity");
const FinAgentEntity_1 = require("./entity/FinAgentEntity");
const HandlingEventEntity_1 = require("./entity/HandlingEventEntity");
const HelpCenterEntity_1 = require("./entity/HelpCenterEntity");
const InternalArticleEntity_1 = require("./entity/InternalArticleEntity");
const InternalArticleSearchEntity_1 = require("./entity/InternalArticleSearchEntity");
const IpAllowlistEntity_1 = require("./entity/IpAllowlistEntity");
const JobEntity_1 = require("./entity/JobEntity");
const MacroEntity_1 = require("./entity/MacroEntity");
const MergeHistoryEntity_1 = require("./entity/MergeHistoryEntity");
const MessageEntity_1 = require("./entity/MessageEntity");
const NewsItemEntity_1 = require("./entity/NewsItemEntity");
const NewsfeedEntity_1 = require("./entity/NewsfeedEntity");
const NoteEntity_1 = require("./entity/NoteEntity");
const OfficeHourEntity_1 = require("./entity/OfficeHourEntity");
const OfficeHoursExceptionEntity_1 = require("./entity/OfficeHoursExceptionEntity");
const OfficeHoursScheduleEntity_1 = require("./entity/OfficeHoursScheduleEntity");
const PaginatedEntity_1 = require("./entity/PaginatedEntity");
const PhoneSwitchEntity_1 = require("./entity/PhoneSwitchEntity");
const ReportingDataEntity_1 = require("./entity/ReportingDataEntity");
const ReportingDataExportEntity_1 = require("./entity/ReportingDataExportEntity");
const SegmentEntity_1 = require("./entity/SegmentEntity");
const SideConversationEntity_1 = require("./entity/SideConversationEntity");
const SubscriptionEntity_1 = require("./entity/SubscriptionEntity");
const SubscriptionTypeEntity_1 = require("./entity/SubscriptionTypeEntity");
const TagEntity_1 = require("./entity/TagEntity");
const TeamEntity_1 = require("./entity/TeamEntity");
const TeamMetricListEntity_1 = require("./entity/TeamMetricListEntity");
const TicketEntity_1 = require("./entity/TicketEntity");
const TicketListEntity_1 = require("./entity/TicketListEntity");
const TicketReplyEntity_1 = require("./entity/TicketReplyEntity");
const TicketStateEntity_1 = require("./entity/TicketStateEntity");
const TicketTypeEntity_1 = require("./entity/TicketTypeEntity");
const TicketTypeAttributeEntity_1 = require("./entity/TicketTypeAttributeEntity");
const VisitorEntity_1 = require("./entity/VisitorEntity");
const WhatsappMessageStatusEntity_1 = require("./entity/WhatsappMessageStatusEntity");
const WhatsappMessageStatusListEntity_1 = require("./entity/WhatsappMessageStatusListEntity");
const WorkflowEntity_1 = require("./entity/WorkflowEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const IntercomEntityBase_1 = require("./IntercomEntityBase");
Object.defineProperty(exports, "IntercomEntityBase", { enumerable: true, get: function () { return IntercomEntityBase_1.IntercomEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class IntercomSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('IntercomSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path `direct` uses, with the
    // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report a
    // failed query as ok.
    //
    // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('IntercomSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('IntercomSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.ActivityLog().list()` / `client.ActivityLog().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActivityLog(entopts) {
        const self = this;
        return new ActivityLogEntity_1.ActivityLogEntity(self, entopts);
    }
    // Entity access: `client.ActivityLogEventType().list()` / `client.ActivityLogEventType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActivityLogEventType(entopts) {
        const self = this;
        return new ActivityLogEventTypeEntity_1.ActivityLogEventTypeEntity(self, entopts);
    }
    // Entity access: `client.ActivityLogList().list()` / `client.ActivityLogList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActivityLogList(entopts) {
        const self = this;
        return new ActivityLogListEntity_1.ActivityLogListEntity(self, entopts);
    }
    // Entity access: `client.Admin().list()` / `client.Admin().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Admin(entopts) {
        const self = this;
        return new AdminEntity_1.AdminEntity(self, entopts);
    }
    // Entity access: `client.AdminWithApp().list()` / `client.AdminWithApp().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminWithApp(entopts) {
        const self = this;
        return new AdminWithAppEntity_1.AdminWithAppEntity(self, entopts);
    }
    // Entity access: `client.AiCall().list()` / `client.AiCall().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiCall(entopts) {
        const self = this;
        return new AiCallEntity_1.AiCallEntity(self, entopts);
    }
    // Entity access: `client.AiContent().list()` / `client.AiContent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiContent(entopts) {
        const self = this;
        return new AiContentEntity_1.AiContentEntity(self, entopts);
    }
    // Entity access: `client.Article().list()` / `client.Article().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Article(entopts) {
        const self = this;
        return new ArticleEntity_1.ArticleEntity(self, entopts);
    }
    // Entity access: `client.ArticleSearch().list()` / `client.ArticleSearch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ArticleSearch(entopts) {
        const self = this;
        return new ArticleSearchEntity_1.ArticleSearchEntity(self, entopts);
    }
    // Entity access: `client.ArticleVersion().list()` / `client.ArticleVersion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ArticleVersion(entopts) {
        const self = this;
        return new ArticleVersionEntity_1.ArticleVersionEntity(self, entopts);
    }
    // Entity access: `client.ArticleVersionList().list()` / `client.ArticleVersionList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ArticleVersionList(entopts) {
        const self = this;
        return new ArticleVersionListEntity_1.ArticleVersionListEntity(self, entopts);
    }
    // Entity access: `client.Audience().list()` / `client.Audience().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Audience(entopts) {
        const self = this;
        return new AudienceEntity_1.AudienceEntity(self, entopts);
    }
    // Entity access: `client.AwayStatusReason().list()` / `client.AwayStatusReason().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AwayStatusReason(entopts) {
        const self = this;
        return new AwayStatusReasonEntity_1.AwayStatusReasonEntity(self, entopts);
    }
    // Entity access: `client.Banner().list()` / `client.Banner().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Banner(entopts) {
        const self = this;
        return new BannerEntity_1.BannerEntity(self, entopts);
    }
    // Entity access: `client.BannerDismiss().list()` / `client.BannerDismiss().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BannerDismiss(entopts) {
        const self = this;
        return new BannerDismissEntity_1.BannerDismissEntity(self, entopts);
    }
    // Entity access: `client.Brand().list()` / `client.Brand().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Brand(entopts) {
        const self = this;
        return new BrandEntity_1.BrandEntity(self, entopts);
    }
    // Entity access: `client.Call().list()` / `client.Call().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Call(entopts) {
        const self = this;
        return new CallEntity_1.CallEntity(self, entopts);
    }
    // Entity access: `client.Company().list()` / `client.Company().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Company(entopts) {
        const self = this;
        return new CompanyEntity_1.CompanyEntity(self, entopts);
    }
    // Entity access: `client.CompanyAttachedContact().list()` / `client.CompanyAttachedContact().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CompanyAttachedContact(entopts) {
        const self = this;
        return new CompanyAttachedContactEntity_1.CompanyAttachedContactEntity(self, entopts);
    }
    // Entity access: `client.CompanyAttachedSegment().list()` / `client.CompanyAttachedSegment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CompanyAttachedSegment(entopts) {
        const self = this;
        return new CompanyAttachedSegmentEntity_1.CompanyAttachedSegmentEntity(self, entopts);
    }
    // Entity access: `client.CompanyList().list()` / `client.CompanyList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CompanyList(entopts) {
        const self = this;
        return new CompanyListEntity_1.CompanyListEntity(self, entopts);
    }
    // Entity access: `client.CompanyScroll().list()` / `client.CompanyScroll().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CompanyScroll(entopts) {
        const self = this;
        return new CompanyScrollEntity_1.CompanyScrollEntity(self, entopts);
    }
    // Entity access: `client.Contact().list()` / `client.Contact().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Contact(entopts) {
        const self = this;
        return new ContactEntity_1.ContactEntity(self, entopts);
    }
    // Entity access: `client.ContactAttachedCompany().list()` / `client.ContactAttachedCompany().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContactAttachedCompany(entopts) {
        const self = this;
        return new ContactAttachedCompanyEntity_1.ContactAttachedCompanyEntity(self, entopts);
    }
    // Entity access: `client.ContactList().list()` / `client.ContactList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContactList(entopts) {
        const self = this;
        return new ContactListEntity_1.ContactListEntity(self, entopts);
    }
    // Entity access: `client.ContactSegment().list()` / `client.ContactSegment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContactSegment(entopts) {
        const self = this;
        return new ContactSegmentEntity_1.ContactSegmentEntity(self, entopts);
    }
    // Entity access: `client.Content().list()` / `client.Content().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Content(entopts) {
        const self = this;
        return new ContentEntity_1.ContentEntity(self, entopts);
    }
    // Entity access: `client.ContentImportSource().list()` / `client.ContentImportSource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContentImportSource(entopts) {
        const self = this;
        return new ContentImportSourceEntity_1.ContentImportSourceEntity(self, entopts);
    }
    // Entity access: `client.ContentSearch().list()` / `client.ContentSearch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContentSearch(entopts) {
        const self = this;
        return new ContentSearchEntity_1.ContentSearchEntity(self, entopts);
    }
    // Entity access: `client.ContentSnippet().list()` / `client.ContentSnippet().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContentSnippet(entopts) {
        const self = this;
        return new ContentSnippetEntity_1.ContentSnippetEntity(self, entopts);
    }
    // Entity access: `client.Conversation().list()` / `client.Conversation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Conversation(entopts) {
        const self = this;
        return new ConversationEntity_1.ConversationEntity(self, entopts);
    }
    // Entity access: `client.ConversationAttribute().list()` / `client.ConversationAttribute().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConversationAttribute(entopts) {
        const self = this;
        return new ConversationAttributeEntity_1.ConversationAttributeEntity(self, entopts);
    }
    // Entity access: `client.ConversationAttributeList().list()` / `client.ConversationAttributeList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConversationAttributeList(entopts) {
        const self = this;
        return new ConversationAttributeListEntity_1.ConversationAttributeListEntity(self, entopts);
    }
    // Entity access: `client.ConversationList().list()` / `client.ConversationList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConversationList(entopts) {
        const self = this;
        return new ConversationListEntity_1.ConversationListEntity(self, entopts);
    }
    // Entity access: `client.ConversationParticipant().list()` / `client.ConversationParticipant().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConversationParticipant(entopts) {
        const self = this;
        return new ConversationParticipantEntity_1.ConversationParticipantEntity(self, entopts);
    }
    // Entity access: `client.CustomObjectInstance().list()` / `client.CustomObjectInstance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomObjectInstance(entopts) {
        const self = this;
        return new CustomObjectInstanceEntity_1.CustomObjectInstanceEntity(self, entopts);
    }
    // Entity access: `client.Data().list()` / `client.Data().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Data(entopts) {
        const self = this;
        return new DataEntity_1.DataEntity(self, entopts);
    }
    // Entity access: `client.DataAttribute().list()` / `client.DataAttribute().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DataAttribute(entopts) {
        const self = this;
        return new DataAttributeEntity_1.DataAttributeEntity(self, entopts);
    }
    // Entity access: `client.DataConnector().list()` / `client.DataConnector().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DataConnector(entopts) {
        const self = this;
        return new DataConnectorEntity_1.DataConnectorEntity(self, entopts);
    }
    // Entity access: `client.DataConnectorExecutionResult().list()` / `client.DataConnectorExecutionResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DataConnectorExecutionResult(entopts) {
        const self = this;
        return new DataConnectorExecutionResultEntity_1.DataConnectorExecutionResultEntity(self, entopts);
    }
    // Entity access: `client.DataConnectorExecutionResultList().list()` / `client.DataConnectorExecutionResultList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DataConnectorExecutionResultList(entopts) {
        const self = this;
        return new DataConnectorExecutionResultListEntity_1.DataConnectorExecutionResultListEntity(self, entopts);
    }
    // Entity access: `client.DataEvent().list()` / `client.DataEvent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DataEvent(entopts) {
        const self = this;
        return new DataEventEntity_1.DataEventEntity(self, entopts);
    }
    // Entity access: `client.DataEventSummary().list()` / `client.DataEventSummary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DataEventSummary(entopts) {
        const self = this;
        return new DataEventSummaryEntity_1.DataEventSummaryEntity(self, entopts);
    }
    // Entity access: `client.DataExport().list()` / `client.DataExport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DataExport(entopts) {
        const self = this;
        return new DataExportEntity_1.DataExportEntity(self, entopts);
    }
    // Entity access: `client.Deleted().list()` / `client.Deleted().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Deleted(entopts) {
        const self = this;
        return new DeletedEntity_1.DeletedEntity(self, entopts);
    }
    // Entity access: `client.DeletedArticleObject().list()` / `client.DeletedArticleObject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeletedArticleObject(entopts) {
        const self = this;
        return new DeletedArticleObjectEntity_1.DeletedArticleObjectEntity(self, entopts);
    }
    // Entity access: `client.DeletedCompanyObject().list()` / `client.DeletedCompanyObject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeletedCompanyObject(entopts) {
        const self = this;
        return new DeletedCompanyObjectEntity_1.DeletedCompanyObjectEntity(self, entopts);
    }
    // Entity access: `client.DeletedDataConnectorObject().list()` / `client.DeletedDataConnectorObject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeletedDataConnectorObject(entopts) {
        const self = this;
        return new DeletedDataConnectorObjectEntity_1.DeletedDataConnectorObjectEntity(self, entopts);
    }
    // Entity access: `client.DeletedInternalArticleObject().list()` / `client.DeletedInternalArticleObject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeletedInternalArticleObject(entopts) {
        const self = this;
        return new DeletedInternalArticleObjectEntity_1.DeletedInternalArticleObjectEntity(self, entopts);
    }
    // Entity access: `client.DeletedObject().list()` / `client.DeletedObject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeletedObject(entopts) {
        const self = this;
        return new DeletedObjectEntity_1.DeletedObjectEntity(self, entopts);
    }
    // Entity access: `client.Email().list()` / `client.Email().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Email(entopts) {
        const self = this;
        return new EmailEntity_1.EmailEntity(self, entopts);
    }
    // Entity access: `client.ExternalPage().list()` / `client.ExternalPage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ExternalPage(entopts) {
        const self = this;
        return new ExternalPageEntity_1.ExternalPageEntity(self, entopts);
    }
    // Entity access: `client.FinAgent().list()` / `client.FinAgent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FinAgent(entopts) {
        const self = this;
        return new FinAgentEntity_1.FinAgentEntity(self, entopts);
    }
    // Entity access: `client.HandlingEvent().list()` / `client.HandlingEvent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    HandlingEvent(entopts) {
        const self = this;
        return new HandlingEventEntity_1.HandlingEventEntity(self, entopts);
    }
    // Entity access: `client.HelpCenter().list()` / `client.HelpCenter().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    HelpCenter(entopts) {
        const self = this;
        return new HelpCenterEntity_1.HelpCenterEntity(self, entopts);
    }
    // Entity access: `client.InternalArticle().list()` / `client.InternalArticle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InternalArticle(entopts) {
        const self = this;
        return new InternalArticleEntity_1.InternalArticleEntity(self, entopts);
    }
    // Entity access: `client.InternalArticleSearch().list()` / `client.InternalArticleSearch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InternalArticleSearch(entopts) {
        const self = this;
        return new InternalArticleSearchEntity_1.InternalArticleSearchEntity(self, entopts);
    }
    // Entity access: `client.IpAllowlist().list()` / `client.IpAllowlist().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IpAllowlist(entopts) {
        const self = this;
        return new IpAllowlistEntity_1.IpAllowlistEntity(self, entopts);
    }
    // Entity access: `client.Job().list()` / `client.Job().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Job(entopts) {
        const self = this;
        return new JobEntity_1.JobEntity(self, entopts);
    }
    // Entity access: `client.Macro().list()` / `client.Macro().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Macro(entopts) {
        const self = this;
        return new MacroEntity_1.MacroEntity(self, entopts);
    }
    // Entity access: `client.MergeHistory().list()` / `client.MergeHistory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MergeHistory(entopts) {
        const self = this;
        return new MergeHistoryEntity_1.MergeHistoryEntity(self, entopts);
    }
    // Entity access: `client.Message().list()` / `client.Message().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Message(entopts) {
        const self = this;
        return new MessageEntity_1.MessageEntity(self, entopts);
    }
    // Entity access: `client.NewsItem().list()` / `client.NewsItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NewsItem(entopts) {
        const self = this;
        return new NewsItemEntity_1.NewsItemEntity(self, entopts);
    }
    // Entity access: `client.Newsfeed().list()` / `client.Newsfeed().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Newsfeed(entopts) {
        const self = this;
        return new NewsfeedEntity_1.NewsfeedEntity(self, entopts);
    }
    // Entity access: `client.Note().list()` / `client.Note().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Note(entopts) {
        const self = this;
        return new NoteEntity_1.NoteEntity(self, entopts);
    }
    // Entity access: `client.OfficeHour().list()` / `client.OfficeHour().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OfficeHour(entopts) {
        const self = this;
        return new OfficeHourEntity_1.OfficeHourEntity(self, entopts);
    }
    // Entity access: `client.OfficeHoursException().list()` / `client.OfficeHoursException().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OfficeHoursException(entopts) {
        const self = this;
        return new OfficeHoursExceptionEntity_1.OfficeHoursExceptionEntity(self, entopts);
    }
    // Entity access: `client.OfficeHoursSchedule().list()` / `client.OfficeHoursSchedule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OfficeHoursSchedule(entopts) {
        const self = this;
        return new OfficeHoursScheduleEntity_1.OfficeHoursScheduleEntity(self, entopts);
    }
    // Entity access: `client.Paginated().list()` / `client.Paginated().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Paginated(entopts) {
        const self = this;
        return new PaginatedEntity_1.PaginatedEntity(self, entopts);
    }
    // Entity access: `client.PhoneSwitch().list()` / `client.PhoneSwitch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PhoneSwitch(entopts) {
        const self = this;
        return new PhoneSwitchEntity_1.PhoneSwitchEntity(self, entopts);
    }
    // Entity access: `client.ReportingData().list()` / `client.ReportingData().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReportingData(entopts) {
        const self = this;
        return new ReportingDataEntity_1.ReportingDataEntity(self, entopts);
    }
    // Entity access: `client.ReportingDataExport().list()` / `client.ReportingDataExport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReportingDataExport(entopts) {
        const self = this;
        return new ReportingDataExportEntity_1.ReportingDataExportEntity(self, entopts);
    }
    // Entity access: `client.Segment().list()` / `client.Segment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Segment(entopts) {
        const self = this;
        return new SegmentEntity_1.SegmentEntity(self, entopts);
    }
    // Entity access: `client.SideConversation().list()` / `client.SideConversation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SideConversation(entopts) {
        const self = this;
        return new SideConversationEntity_1.SideConversationEntity(self, entopts);
    }
    // Entity access: `client.Subscription().list()` / `client.Subscription().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Subscription(entopts) {
        const self = this;
        return new SubscriptionEntity_1.SubscriptionEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionType().list()` / `client.SubscriptionType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionType(entopts) {
        const self = this;
        return new SubscriptionTypeEntity_1.SubscriptionTypeEntity(self, entopts);
    }
    // Entity access: `client.Tag().list()` / `client.Tag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Tag(entopts) {
        const self = this;
        return new TagEntity_1.TagEntity(self, entopts);
    }
    // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Team(entopts) {
        const self = this;
        return new TeamEntity_1.TeamEntity(self, entopts);
    }
    // Entity access: `client.TeamMetricList().list()` / `client.TeamMetricList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamMetricList(entopts) {
        const self = this;
        return new TeamMetricListEntity_1.TeamMetricListEntity(self, entopts);
    }
    // Entity access: `client.Ticket().list()` / `client.Ticket().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Ticket(entopts) {
        const self = this;
        return new TicketEntity_1.TicketEntity(self, entopts);
    }
    // Entity access: `client.TicketList().list()` / `client.TicketList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TicketList(entopts) {
        const self = this;
        return new TicketListEntity_1.TicketListEntity(self, entopts);
    }
    // Entity access: `client.TicketReply().list()` / `client.TicketReply().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TicketReply(entopts) {
        const self = this;
        return new TicketReplyEntity_1.TicketReplyEntity(self, entopts);
    }
    // Entity access: `client.TicketState().list()` / `client.TicketState().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TicketState(entopts) {
        const self = this;
        return new TicketStateEntity_1.TicketStateEntity(self, entopts);
    }
    // Entity access: `client.TicketType().list()` / `client.TicketType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TicketType(entopts) {
        const self = this;
        return new TicketTypeEntity_1.TicketTypeEntity(self, entopts);
    }
    // Entity access: `client.TicketTypeAttribute().list()` / `client.TicketTypeAttribute().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TicketTypeAttribute(entopts) {
        const self = this;
        return new TicketTypeAttributeEntity_1.TicketTypeAttributeEntity(self, entopts);
    }
    // Entity access: `client.Visitor().list()` / `client.Visitor().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Visitor(entopts) {
        const self = this;
        return new VisitorEntity_1.VisitorEntity(self, entopts);
    }
    // Entity access: `client.WhatsappMessageStatus().list()` / `client.WhatsappMessageStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WhatsappMessageStatus(entopts) {
        const self = this;
        return new WhatsappMessageStatusEntity_1.WhatsappMessageStatusEntity(self, entopts);
    }
    // Entity access: `client.WhatsappMessageStatusList().list()` / `client.WhatsappMessageStatusList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WhatsappMessageStatusList(entopts) {
        const self = this;
        return new WhatsappMessageStatusListEntity_1.WhatsappMessageStatusListEntity(self, entopts);
    }
    // Entity access: `client.Workflow().list()` / `client.Workflow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Workflow(entopts) {
        const self = this;
        return new WorkflowEntity_1.WorkflowEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new IntercomSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return IntercomSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Intercom' };
    }
    toString() {
        return 'Intercom ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.IntercomSDK = IntercomSDK;
const SDK = IntercomSDK;
exports.SDK = SDK;
//# sourceMappingURL=IntercomSDK.js.map