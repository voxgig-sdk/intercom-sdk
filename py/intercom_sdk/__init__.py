# Intercom SDK

from intercom_sdk.utility.voxgig_struct import voxgig_struct as vs
from intercom_sdk.core.utility_type import IntercomUtility
from intercom_sdk.core.spec import IntercomSpec
from intercom_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from intercom_sdk.utility import register

# Load features
from intercom_sdk.feature.base_feature import IntercomBaseFeature
from intercom_sdk.features import _has_feature, _make_feature


class IntercomSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = IntercomUtility()
        self._utility = utility

        from intercom_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return IntercomUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = IntercomSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "IntercomSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("IntercomSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def ActivityLog(self, data=None) -> "ActivityLogEntity":
        """Entity factory: client.ActivityLog().list() / client.ActivityLog().load({"id": ...})."""
        from intercom_sdk.entity.activity_log_entity import ActivityLogEntity
        return ActivityLogEntity(self, data)


    def ActivityLogEventType(self, data=None) -> "ActivityLogEventTypeEntity":
        """Entity factory: client.ActivityLogEventType().list() / client.ActivityLogEventType().load({"id": ...})."""
        from intercom_sdk.entity.activity_log_event_type_entity import ActivityLogEventTypeEntity
        return ActivityLogEventTypeEntity(self, data)


    def ActivityLogList(self, data=None) -> "ActivityLogListEntity":
        """Entity factory: client.ActivityLogList().list() / client.ActivityLogList().load({"id": ...})."""
        from intercom_sdk.entity.activity_log_list_entity import ActivityLogListEntity
        return ActivityLogListEntity(self, data)


    def Admin(self, data=None) -> "AdminEntity":
        """Entity factory: client.Admin().list() / client.Admin().load({"id": ...})."""
        from intercom_sdk.entity.admin_entity import AdminEntity
        return AdminEntity(self, data)


    def AdminWithApp(self, data=None) -> "AdminWithAppEntity":
        """Entity factory: client.AdminWithApp().list() / client.AdminWithApp().load({"id": ...})."""
        from intercom_sdk.entity.admin_with_app_entity import AdminWithAppEntity
        return AdminWithAppEntity(self, data)


    def AiCall(self, data=None) -> "AiCallEntity":
        """Entity factory: client.AiCall().list() / client.AiCall().load({"id": ...})."""
        from intercom_sdk.entity.ai_call_entity import AiCallEntity
        return AiCallEntity(self, data)


    def AiContent(self, data=None) -> "AiContentEntity":
        """Entity factory: client.AiContent().list() / client.AiContent().load({"id": ...})."""
        from intercom_sdk.entity.ai_content_entity import AiContentEntity
        return AiContentEntity(self, data)


    def Article(self, data=None) -> "ArticleEntity":
        """Entity factory: client.Article().list() / client.Article().load({"id": ...})."""
        from intercom_sdk.entity.article_entity import ArticleEntity
        return ArticleEntity(self, data)


    def ArticleSearch(self, data=None) -> "ArticleSearchEntity":
        """Entity factory: client.ArticleSearch().list() / client.ArticleSearch().load({"id": ...})."""
        from intercom_sdk.entity.article_search_entity import ArticleSearchEntity
        return ArticleSearchEntity(self, data)


    def ArticleVersion(self, data=None) -> "ArticleVersionEntity":
        """Entity factory: client.ArticleVersion().list() / client.ArticleVersion().load({"id": ...})."""
        from intercom_sdk.entity.article_version_entity import ArticleVersionEntity
        return ArticleVersionEntity(self, data)


    def ArticleVersionList(self, data=None) -> "ArticleVersionListEntity":
        """Entity factory: client.ArticleVersionList().list() / client.ArticleVersionList().load({"id": ...})."""
        from intercom_sdk.entity.article_version_list_entity import ArticleVersionListEntity
        return ArticleVersionListEntity(self, data)


    def Audience(self, data=None) -> "AudienceEntity":
        """Entity factory: client.Audience().list() / client.Audience().load({"id": ...})."""
        from intercom_sdk.entity.audience_entity import AudienceEntity
        return AudienceEntity(self, data)


    def AwayStatusReason(self, data=None) -> "AwayStatusReasonEntity":
        """Entity factory: client.AwayStatusReason().list() / client.AwayStatusReason().load({"id": ...})."""
        from intercom_sdk.entity.away_status_reason_entity import AwayStatusReasonEntity
        return AwayStatusReasonEntity(self, data)


    def Banner(self, data=None) -> "BannerEntity":
        """Entity factory: client.Banner().list() / client.Banner().load({"id": ...})."""
        from intercom_sdk.entity.banner_entity import BannerEntity
        return BannerEntity(self, data)


    def BannerDismiss(self, data=None) -> "BannerDismissEntity":
        """Entity factory: client.BannerDismiss().list() / client.BannerDismiss().load({"id": ...})."""
        from intercom_sdk.entity.banner_dismiss_entity import BannerDismissEntity
        return BannerDismissEntity(self, data)


    def Brand(self, data=None) -> "BrandEntity":
        """Entity factory: client.Brand().list() / client.Brand().load({"id": ...})."""
        from intercom_sdk.entity.brand_entity import BrandEntity
        return BrandEntity(self, data)


    def Call(self, data=None) -> "CallEntity":
        """Entity factory: client.Call().list() / client.Call().load({"id": ...})."""
        from intercom_sdk.entity.call_entity import CallEntity
        return CallEntity(self, data)


    def Company(self, data=None) -> "CompanyEntity":
        """Entity factory: client.Company().list() / client.Company().load({"id": ...})."""
        from intercom_sdk.entity.company_entity import CompanyEntity
        return CompanyEntity(self, data)


    def CompanyAttachedContact(self, data=None) -> "CompanyAttachedContactEntity":
        """Entity factory: client.CompanyAttachedContact().list() / client.CompanyAttachedContact().load({"id": ...})."""
        from intercom_sdk.entity.company_attached_contact_entity import CompanyAttachedContactEntity
        return CompanyAttachedContactEntity(self, data)


    def CompanyAttachedSegment(self, data=None) -> "CompanyAttachedSegmentEntity":
        """Entity factory: client.CompanyAttachedSegment().list() / client.CompanyAttachedSegment().load({"id": ...})."""
        from intercom_sdk.entity.company_attached_segment_entity import CompanyAttachedSegmentEntity
        return CompanyAttachedSegmentEntity(self, data)


    def CompanyList(self, data=None) -> "CompanyListEntity":
        """Entity factory: client.CompanyList().list() / client.CompanyList().load({"id": ...})."""
        from intercom_sdk.entity.company_list_entity import CompanyListEntity
        return CompanyListEntity(self, data)


    def CompanyScroll(self, data=None) -> "CompanyScrollEntity":
        """Entity factory: client.CompanyScroll().list() / client.CompanyScroll().load({"id": ...})."""
        from intercom_sdk.entity.company_scroll_entity import CompanyScrollEntity
        return CompanyScrollEntity(self, data)


    def Contact(self, data=None) -> "ContactEntity":
        """Entity factory: client.Contact().list() / client.Contact().load({"id": ...})."""
        from intercom_sdk.entity.contact_entity import ContactEntity
        return ContactEntity(self, data)


    def ContactAttachedCompany(self, data=None) -> "ContactAttachedCompanyEntity":
        """Entity factory: client.ContactAttachedCompany().list() / client.ContactAttachedCompany().load({"id": ...})."""
        from intercom_sdk.entity.contact_attached_company_entity import ContactAttachedCompanyEntity
        return ContactAttachedCompanyEntity(self, data)


    def ContactList(self, data=None) -> "ContactListEntity":
        """Entity factory: client.ContactList().list() / client.ContactList().load({"id": ...})."""
        from intercom_sdk.entity.contact_list_entity import ContactListEntity
        return ContactListEntity(self, data)


    def ContactSegment(self, data=None) -> "ContactSegmentEntity":
        """Entity factory: client.ContactSegment().list() / client.ContactSegment().load({"id": ...})."""
        from intercom_sdk.entity.contact_segment_entity import ContactSegmentEntity
        return ContactSegmentEntity(self, data)


    def Content(self, data=None) -> "ContentEntity":
        """Entity factory: client.Content().list() / client.Content().load({"id": ...})."""
        from intercom_sdk.entity.content_entity import ContentEntity
        return ContentEntity(self, data)


    def ContentImportSource(self, data=None) -> "ContentImportSourceEntity":
        """Entity factory: client.ContentImportSource().list() / client.ContentImportSource().load({"id": ...})."""
        from intercom_sdk.entity.content_import_source_entity import ContentImportSourceEntity
        return ContentImportSourceEntity(self, data)


    def ContentSearch(self, data=None) -> "ContentSearchEntity":
        """Entity factory: client.ContentSearch().list() / client.ContentSearch().load({"id": ...})."""
        from intercom_sdk.entity.content_search_entity import ContentSearchEntity
        return ContentSearchEntity(self, data)


    def ContentSnippet(self, data=None) -> "ContentSnippetEntity":
        """Entity factory: client.ContentSnippet().list() / client.ContentSnippet().load({"id": ...})."""
        from intercom_sdk.entity.content_snippet_entity import ContentSnippetEntity
        return ContentSnippetEntity(self, data)


    def Conversation(self, data=None) -> "ConversationEntity":
        """Entity factory: client.Conversation().list() / client.Conversation().load({"id": ...})."""
        from intercom_sdk.entity.conversation_entity import ConversationEntity
        return ConversationEntity(self, data)


    def ConversationAttribute(self, data=None) -> "ConversationAttributeEntity":
        """Entity factory: client.ConversationAttribute().list() / client.ConversationAttribute().load({"id": ...})."""
        from intercom_sdk.entity.conversation_attribute_entity import ConversationAttributeEntity
        return ConversationAttributeEntity(self, data)


    def ConversationAttributeList(self, data=None) -> "ConversationAttributeListEntity":
        """Entity factory: client.ConversationAttributeList().list() / client.ConversationAttributeList().load({"id": ...})."""
        from intercom_sdk.entity.conversation_attribute_list_entity import ConversationAttributeListEntity
        return ConversationAttributeListEntity(self, data)


    def ConversationList(self, data=None) -> "ConversationListEntity":
        """Entity factory: client.ConversationList().list() / client.ConversationList().load({"id": ...})."""
        from intercom_sdk.entity.conversation_list_entity import ConversationListEntity
        return ConversationListEntity(self, data)


    def ConversationParticipant(self, data=None) -> "ConversationParticipantEntity":
        """Entity factory: client.ConversationParticipant().list() / client.ConversationParticipant().load({"id": ...})."""
        from intercom_sdk.entity.conversation_participant_entity import ConversationParticipantEntity
        return ConversationParticipantEntity(self, data)


    def CustomObjectInstance(self, data=None) -> "CustomObjectInstanceEntity":
        """Entity factory: client.CustomObjectInstance().list() / client.CustomObjectInstance().load({"id": ...})."""
        from intercom_sdk.entity.custom_object_instance_entity import CustomObjectInstanceEntity
        return CustomObjectInstanceEntity(self, data)


    def Data(self, data=None) -> "DataEntity":
        """Entity factory: client.Data().list() / client.Data().load({"id": ...})."""
        from intercom_sdk.entity.data_entity import DataEntity
        return DataEntity(self, data)


    def DataAttribute(self, data=None) -> "DataAttributeEntity":
        """Entity factory: client.DataAttribute().list() / client.DataAttribute().load({"id": ...})."""
        from intercom_sdk.entity.data_attribute_entity import DataAttributeEntity
        return DataAttributeEntity(self, data)


    def DataConnector(self, data=None) -> "DataConnectorEntity":
        """Entity factory: client.DataConnector().list() / client.DataConnector().load({"id": ...})."""
        from intercom_sdk.entity.data_connector_entity import DataConnectorEntity
        return DataConnectorEntity(self, data)


    def DataConnectorExecutionResult(self, data=None) -> "DataConnectorExecutionResultEntity":
        """Entity factory: client.DataConnectorExecutionResult().list() / client.DataConnectorExecutionResult().load({"id": ...})."""
        from intercom_sdk.entity.data_connector_execution_result_entity import DataConnectorExecutionResultEntity
        return DataConnectorExecutionResultEntity(self, data)


    def DataConnectorExecutionResultList(self, data=None) -> "DataConnectorExecutionResultListEntity":
        """Entity factory: client.DataConnectorExecutionResultList().list() / client.DataConnectorExecutionResultList().load({"id": ...})."""
        from intercom_sdk.entity.data_connector_execution_result_list_entity import DataConnectorExecutionResultListEntity
        return DataConnectorExecutionResultListEntity(self, data)


    def DataEvent(self, data=None) -> "DataEventEntity":
        """Entity factory: client.DataEvent().list() / client.DataEvent().load({"id": ...})."""
        from intercom_sdk.entity.data_event_entity import DataEventEntity
        return DataEventEntity(self, data)


    def DataEventSummary(self, data=None) -> "DataEventSummaryEntity":
        """Entity factory: client.DataEventSummary().list() / client.DataEventSummary().load({"id": ...})."""
        from intercom_sdk.entity.data_event_summary_entity import DataEventSummaryEntity
        return DataEventSummaryEntity(self, data)


    def DataExport(self, data=None) -> "DataExportEntity":
        """Entity factory: client.DataExport().list() / client.DataExport().load({"id": ...})."""
        from intercom_sdk.entity.data_export_entity import DataExportEntity
        return DataExportEntity(self, data)


    def Deleted(self, data=None) -> "DeletedEntity":
        """Entity factory: client.Deleted().list() / client.Deleted().load({"id": ...})."""
        from intercom_sdk.entity.deleted_entity import DeletedEntity
        return DeletedEntity(self, data)


    def DeletedArticleObject(self, data=None) -> "DeletedArticleObjectEntity":
        """Entity factory: client.DeletedArticleObject().list() / client.DeletedArticleObject().load({"id": ...})."""
        from intercom_sdk.entity.deleted_article_object_entity import DeletedArticleObjectEntity
        return DeletedArticleObjectEntity(self, data)


    def DeletedCompanyObject(self, data=None) -> "DeletedCompanyObjectEntity":
        """Entity factory: client.DeletedCompanyObject().list() / client.DeletedCompanyObject().load({"id": ...})."""
        from intercom_sdk.entity.deleted_company_object_entity import DeletedCompanyObjectEntity
        return DeletedCompanyObjectEntity(self, data)


    def DeletedDataConnectorObject(self, data=None) -> "DeletedDataConnectorObjectEntity":
        """Entity factory: client.DeletedDataConnectorObject().list() / client.DeletedDataConnectorObject().load({"id": ...})."""
        from intercom_sdk.entity.deleted_data_connector_object_entity import DeletedDataConnectorObjectEntity
        return DeletedDataConnectorObjectEntity(self, data)


    def DeletedInternalArticleObject(self, data=None) -> "DeletedInternalArticleObjectEntity":
        """Entity factory: client.DeletedInternalArticleObject().list() / client.DeletedInternalArticleObject().load({"id": ...})."""
        from intercom_sdk.entity.deleted_internal_article_object_entity import DeletedInternalArticleObjectEntity
        return DeletedInternalArticleObjectEntity(self, data)


    def DeletedObject(self, data=None) -> "DeletedObjectEntity":
        """Entity factory: client.DeletedObject().list() / client.DeletedObject().load({"id": ...})."""
        from intercom_sdk.entity.deleted_object_entity import DeletedObjectEntity
        return DeletedObjectEntity(self, data)


    def Email(self, data=None) -> "EmailEntity":
        """Entity factory: client.Email().list() / client.Email().load({"id": ...})."""
        from intercom_sdk.entity.email_entity import EmailEntity
        return EmailEntity(self, data)


    def ExternalPage(self, data=None) -> "ExternalPageEntity":
        """Entity factory: client.ExternalPage().list() / client.ExternalPage().load({"id": ...})."""
        from intercom_sdk.entity.external_page_entity import ExternalPageEntity
        return ExternalPageEntity(self, data)


    def FinAgent(self, data=None) -> "FinAgentEntity":
        """Entity factory: client.FinAgent().list() / client.FinAgent().load({"id": ...})."""
        from intercom_sdk.entity.fin_agent_entity import FinAgentEntity
        return FinAgentEntity(self, data)


    def HandlingEvent(self, data=None) -> "HandlingEventEntity":
        """Entity factory: client.HandlingEvent().list() / client.HandlingEvent().load({"id": ...})."""
        from intercom_sdk.entity.handling_event_entity import HandlingEventEntity
        return HandlingEventEntity(self, data)


    def HelpCenter(self, data=None) -> "HelpCenterEntity":
        """Entity factory: client.HelpCenter().list() / client.HelpCenter().load({"id": ...})."""
        from intercom_sdk.entity.help_center_entity import HelpCenterEntity
        return HelpCenterEntity(self, data)


    def InternalArticle(self, data=None) -> "InternalArticleEntity":
        """Entity factory: client.InternalArticle().list() / client.InternalArticle().load({"id": ...})."""
        from intercom_sdk.entity.internal_article_entity import InternalArticleEntity
        return InternalArticleEntity(self, data)


    def InternalArticleSearch(self, data=None) -> "InternalArticleSearchEntity":
        """Entity factory: client.InternalArticleSearch().list() / client.InternalArticleSearch().load({"id": ...})."""
        from intercom_sdk.entity.internal_article_search_entity import InternalArticleSearchEntity
        return InternalArticleSearchEntity(self, data)


    def IpAllowlist(self, data=None) -> "IpAllowlistEntity":
        """Entity factory: client.IpAllowlist().list() / client.IpAllowlist().load({"id": ...})."""
        from intercom_sdk.entity.ip_allowlist_entity import IpAllowlistEntity
        return IpAllowlistEntity(self, data)


    def Job(self, data=None) -> "JobEntity":
        """Entity factory: client.Job().list() / client.Job().load({"id": ...})."""
        from intercom_sdk.entity.job_entity import JobEntity
        return JobEntity(self, data)


    def Macro(self, data=None) -> "MacroEntity":
        """Entity factory: client.Macro().list() / client.Macro().load({"id": ...})."""
        from intercom_sdk.entity.macro_entity import MacroEntity
        return MacroEntity(self, data)


    def MergeHistory(self, data=None) -> "MergeHistoryEntity":
        """Entity factory: client.MergeHistory().list() / client.MergeHistory().load({"id": ...})."""
        from intercom_sdk.entity.merge_history_entity import MergeHistoryEntity
        return MergeHistoryEntity(self, data)


    def Message(self, data=None) -> "MessageEntity":
        """Entity factory: client.Message().list() / client.Message().load({"id": ...})."""
        from intercom_sdk.entity.message_entity import MessageEntity
        return MessageEntity(self, data)


    def NewsItem(self, data=None) -> "NewsItemEntity":
        """Entity factory: client.NewsItem().list() / client.NewsItem().load({"id": ...})."""
        from intercom_sdk.entity.news_item_entity import NewsItemEntity
        return NewsItemEntity(self, data)


    def Newsfeed(self, data=None) -> "NewsfeedEntity":
        """Entity factory: client.Newsfeed().list() / client.Newsfeed().load({"id": ...})."""
        from intercom_sdk.entity.newsfeed_entity import NewsfeedEntity
        return NewsfeedEntity(self, data)


    def Note(self, data=None) -> "NoteEntity":
        """Entity factory: client.Note().list() / client.Note().load({"id": ...})."""
        from intercom_sdk.entity.note_entity import NoteEntity
        return NoteEntity(self, data)


    def OfficeHour(self, data=None) -> "OfficeHourEntity":
        """Entity factory: client.OfficeHour().list() / client.OfficeHour().load({"id": ...})."""
        from intercom_sdk.entity.office_hour_entity import OfficeHourEntity
        return OfficeHourEntity(self, data)


    def OfficeHoursException(self, data=None) -> "OfficeHoursExceptionEntity":
        """Entity factory: client.OfficeHoursException().list() / client.OfficeHoursException().load({"id": ...})."""
        from intercom_sdk.entity.office_hours_exception_entity import OfficeHoursExceptionEntity
        return OfficeHoursExceptionEntity(self, data)


    def OfficeHoursSchedule(self, data=None) -> "OfficeHoursScheduleEntity":
        """Entity factory: client.OfficeHoursSchedule().list() / client.OfficeHoursSchedule().load({"id": ...})."""
        from intercom_sdk.entity.office_hours_schedule_entity import OfficeHoursScheduleEntity
        return OfficeHoursScheduleEntity(self, data)


    def Paginated(self, data=None) -> "PaginatedEntity":
        """Entity factory: client.Paginated().list() / client.Paginated().load({"id": ...})."""
        from intercom_sdk.entity.paginated_entity import PaginatedEntity
        return PaginatedEntity(self, data)


    def PhoneSwitch(self, data=None) -> "PhoneSwitchEntity":
        """Entity factory: client.PhoneSwitch().list() / client.PhoneSwitch().load({"id": ...})."""
        from intercom_sdk.entity.phone_switch_entity import PhoneSwitchEntity
        return PhoneSwitchEntity(self, data)


    def ReportingData(self, data=None) -> "ReportingDataEntity":
        """Entity factory: client.ReportingData().list() / client.ReportingData().load({"id": ...})."""
        from intercom_sdk.entity.reporting_data_entity import ReportingDataEntity
        return ReportingDataEntity(self, data)


    def ReportingDataExport(self, data=None) -> "ReportingDataExportEntity":
        """Entity factory: client.ReportingDataExport().list() / client.ReportingDataExport().load({"id": ...})."""
        from intercom_sdk.entity.reporting_data_export_entity import ReportingDataExportEntity
        return ReportingDataExportEntity(self, data)


    def Segment(self, data=None) -> "SegmentEntity":
        """Entity factory: client.Segment().list() / client.Segment().load({"id": ...})."""
        from intercom_sdk.entity.segment_entity import SegmentEntity
        return SegmentEntity(self, data)


    def SideConversation(self, data=None) -> "SideConversationEntity":
        """Entity factory: client.SideConversation().list() / client.SideConversation().load({"id": ...})."""
        from intercom_sdk.entity.side_conversation_entity import SideConversationEntity
        return SideConversationEntity(self, data)


    def Subscription(self, data=None) -> "SubscriptionEntity":
        """Entity factory: client.Subscription().list() / client.Subscription().load({"id": ...})."""
        from intercom_sdk.entity.subscription_entity import SubscriptionEntity
        return SubscriptionEntity(self, data)


    def SubscriptionType(self, data=None) -> "SubscriptionTypeEntity":
        """Entity factory: client.SubscriptionType().list() / client.SubscriptionType().load({"id": ...})."""
        from intercom_sdk.entity.subscription_type_entity import SubscriptionTypeEntity
        return SubscriptionTypeEntity(self, data)


    def Tag(self, data=None) -> "TagEntity":
        """Entity factory: client.Tag().list() / client.Tag().load({"id": ...})."""
        from intercom_sdk.entity.tag_entity import TagEntity
        return TagEntity(self, data)


    def Team(self, data=None) -> "TeamEntity":
        """Entity factory: client.Team().list() / client.Team().load({"id": ...})."""
        from intercom_sdk.entity.team_entity import TeamEntity
        return TeamEntity(self, data)


    def TeamMetricList(self, data=None) -> "TeamMetricListEntity":
        """Entity factory: client.TeamMetricList().list() / client.TeamMetricList().load({"id": ...})."""
        from intercom_sdk.entity.team_metric_list_entity import TeamMetricListEntity
        return TeamMetricListEntity(self, data)


    def Ticket(self, data=None) -> "TicketEntity":
        """Entity factory: client.Ticket().list() / client.Ticket().load({"id": ...})."""
        from intercom_sdk.entity.ticket_entity import TicketEntity
        return TicketEntity(self, data)


    def TicketList(self, data=None) -> "TicketListEntity":
        """Entity factory: client.TicketList().list() / client.TicketList().load({"id": ...})."""
        from intercom_sdk.entity.ticket_list_entity import TicketListEntity
        return TicketListEntity(self, data)


    def TicketReply(self, data=None) -> "TicketReplyEntity":
        """Entity factory: client.TicketReply().list() / client.TicketReply().load({"id": ...})."""
        from intercom_sdk.entity.ticket_reply_entity import TicketReplyEntity
        return TicketReplyEntity(self, data)


    def TicketState(self, data=None) -> "TicketStateEntity":
        """Entity factory: client.TicketState().list() / client.TicketState().load({"id": ...})."""
        from intercom_sdk.entity.ticket_state_entity import TicketStateEntity
        return TicketStateEntity(self, data)


    def TicketType(self, data=None) -> "TicketTypeEntity":
        """Entity factory: client.TicketType().list() / client.TicketType().load({"id": ...})."""
        from intercom_sdk.entity.ticket_type_entity import TicketTypeEntity
        return TicketTypeEntity(self, data)


    def TicketTypeAttribute(self, data=None) -> "TicketTypeAttributeEntity":
        """Entity factory: client.TicketTypeAttribute().list() / client.TicketTypeAttribute().load({"id": ...})."""
        from intercom_sdk.entity.ticket_type_attribute_entity import TicketTypeAttributeEntity
        return TicketTypeAttributeEntity(self, data)


    def Visitor(self, data=None) -> "VisitorEntity":
        """Entity factory: client.Visitor().list() / client.Visitor().load({"id": ...})."""
        from intercom_sdk.entity.visitor_entity import VisitorEntity
        return VisitorEntity(self, data)


    def WhatsappMessageStatus(self, data=None) -> "WhatsappMessageStatusEntity":
        """Entity factory: client.WhatsappMessageStatus().list() / client.WhatsappMessageStatus().load({"id": ...})."""
        from intercom_sdk.entity.whatsapp_message_status_entity import WhatsappMessageStatusEntity
        return WhatsappMessageStatusEntity(self, data)


    def WhatsappMessageStatusList(self, data=None) -> "WhatsappMessageStatusListEntity":
        """Entity factory: client.WhatsappMessageStatusList().list() / client.WhatsappMessageStatusList().load({"id": ...})."""
        from intercom_sdk.entity.whatsapp_message_status_list_entity import WhatsappMessageStatusListEntity
        return WhatsappMessageStatusListEntity(self, data)


    def Workflow(self, data=None) -> "WorkflowEntity":
        """Entity factory: client.Workflow().list() / client.Workflow().load({"id": ...})."""
        from intercom_sdk.entity.workflow_entity import WorkflowEntity
        return WorkflowEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "IntercomSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from intercom_sdk.entity.activity_log_entity import ActivityLogEntity
    from intercom_sdk.entity.activity_log_event_type_entity import ActivityLogEventTypeEntity
    from intercom_sdk.entity.activity_log_list_entity import ActivityLogListEntity
    from intercom_sdk.entity.admin_entity import AdminEntity
    from intercom_sdk.entity.admin_with_app_entity import AdminWithAppEntity
    from intercom_sdk.entity.ai_call_entity import AiCallEntity
    from intercom_sdk.entity.ai_content_entity import AiContentEntity
    from intercom_sdk.entity.article_entity import ArticleEntity
    from intercom_sdk.entity.article_search_entity import ArticleSearchEntity
    from intercom_sdk.entity.article_version_entity import ArticleVersionEntity
    from intercom_sdk.entity.article_version_list_entity import ArticleVersionListEntity
    from intercom_sdk.entity.audience_entity import AudienceEntity
    from intercom_sdk.entity.away_status_reason_entity import AwayStatusReasonEntity
    from intercom_sdk.entity.banner_entity import BannerEntity
    from intercom_sdk.entity.banner_dismiss_entity import BannerDismissEntity
    from intercom_sdk.entity.brand_entity import BrandEntity
    from intercom_sdk.entity.call_entity import CallEntity
    from intercom_sdk.entity.company_entity import CompanyEntity
    from intercom_sdk.entity.company_attached_contact_entity import CompanyAttachedContactEntity
    from intercom_sdk.entity.company_attached_segment_entity import CompanyAttachedSegmentEntity
    from intercom_sdk.entity.company_list_entity import CompanyListEntity
    from intercom_sdk.entity.company_scroll_entity import CompanyScrollEntity
    from intercom_sdk.entity.contact_entity import ContactEntity
    from intercom_sdk.entity.contact_attached_company_entity import ContactAttachedCompanyEntity
    from intercom_sdk.entity.contact_list_entity import ContactListEntity
    from intercom_sdk.entity.contact_segment_entity import ContactSegmentEntity
    from intercom_sdk.entity.content_entity import ContentEntity
    from intercom_sdk.entity.content_import_source_entity import ContentImportSourceEntity
    from intercom_sdk.entity.content_search_entity import ContentSearchEntity
    from intercom_sdk.entity.content_snippet_entity import ContentSnippetEntity
    from intercom_sdk.entity.conversation_entity import ConversationEntity
    from intercom_sdk.entity.conversation_attribute_entity import ConversationAttributeEntity
    from intercom_sdk.entity.conversation_attribute_list_entity import ConversationAttributeListEntity
    from intercom_sdk.entity.conversation_list_entity import ConversationListEntity
    from intercom_sdk.entity.conversation_participant_entity import ConversationParticipantEntity
    from intercom_sdk.entity.custom_object_instance_entity import CustomObjectInstanceEntity
    from intercom_sdk.entity.data_entity import DataEntity
    from intercom_sdk.entity.data_attribute_entity import DataAttributeEntity
    from intercom_sdk.entity.data_connector_entity import DataConnectorEntity
    from intercom_sdk.entity.data_connector_execution_result_entity import DataConnectorExecutionResultEntity
    from intercom_sdk.entity.data_connector_execution_result_list_entity import DataConnectorExecutionResultListEntity
    from intercom_sdk.entity.data_event_entity import DataEventEntity
    from intercom_sdk.entity.data_event_summary_entity import DataEventSummaryEntity
    from intercom_sdk.entity.data_export_entity import DataExportEntity
    from intercom_sdk.entity.deleted_entity import DeletedEntity
    from intercom_sdk.entity.deleted_article_object_entity import DeletedArticleObjectEntity
    from intercom_sdk.entity.deleted_company_object_entity import DeletedCompanyObjectEntity
    from intercom_sdk.entity.deleted_data_connector_object_entity import DeletedDataConnectorObjectEntity
    from intercom_sdk.entity.deleted_internal_article_object_entity import DeletedInternalArticleObjectEntity
    from intercom_sdk.entity.deleted_object_entity import DeletedObjectEntity
    from intercom_sdk.entity.email_entity import EmailEntity
    from intercom_sdk.entity.external_page_entity import ExternalPageEntity
    from intercom_sdk.entity.fin_agent_entity import FinAgentEntity
    from intercom_sdk.entity.handling_event_entity import HandlingEventEntity
    from intercom_sdk.entity.help_center_entity import HelpCenterEntity
    from intercom_sdk.entity.internal_article_entity import InternalArticleEntity
    from intercom_sdk.entity.internal_article_search_entity import InternalArticleSearchEntity
    from intercom_sdk.entity.ip_allowlist_entity import IpAllowlistEntity
    from intercom_sdk.entity.job_entity import JobEntity
    from intercom_sdk.entity.macro_entity import MacroEntity
    from intercom_sdk.entity.merge_history_entity import MergeHistoryEntity
    from intercom_sdk.entity.message_entity import MessageEntity
    from intercom_sdk.entity.news_item_entity import NewsItemEntity
    from intercom_sdk.entity.newsfeed_entity import NewsfeedEntity
    from intercom_sdk.entity.note_entity import NoteEntity
    from intercom_sdk.entity.office_hour_entity import OfficeHourEntity
    from intercom_sdk.entity.office_hours_exception_entity import OfficeHoursExceptionEntity
    from intercom_sdk.entity.office_hours_schedule_entity import OfficeHoursScheduleEntity
    from intercom_sdk.entity.paginated_entity import PaginatedEntity
    from intercom_sdk.entity.phone_switch_entity import PhoneSwitchEntity
    from intercom_sdk.entity.reporting_data_entity import ReportingDataEntity
    from intercom_sdk.entity.reporting_data_export_entity import ReportingDataExportEntity
    from intercom_sdk.entity.segment_entity import SegmentEntity
    from intercom_sdk.entity.side_conversation_entity import SideConversationEntity
    from intercom_sdk.entity.subscription_entity import SubscriptionEntity
    from intercom_sdk.entity.subscription_type_entity import SubscriptionTypeEntity
    from intercom_sdk.entity.tag_entity import TagEntity
    from intercom_sdk.entity.team_entity import TeamEntity
    from intercom_sdk.entity.team_metric_list_entity import TeamMetricListEntity
    from intercom_sdk.entity.ticket_entity import TicketEntity
    from intercom_sdk.entity.ticket_list_entity import TicketListEntity
    from intercom_sdk.entity.ticket_reply_entity import TicketReplyEntity
    from intercom_sdk.entity.ticket_state_entity import TicketStateEntity
    from intercom_sdk.entity.ticket_type_entity import TicketTypeEntity
    from intercom_sdk.entity.ticket_type_attribute_entity import TicketTypeAttributeEntity
    from intercom_sdk.entity.visitor_entity import VisitorEntity
    from intercom_sdk.entity.whatsapp_message_status_entity import WhatsappMessageStatusEntity
    from intercom_sdk.entity.whatsapp_message_status_list_entity import WhatsappMessageStatusListEntity
    from intercom_sdk.entity.workflow_entity import WorkflowEntity
