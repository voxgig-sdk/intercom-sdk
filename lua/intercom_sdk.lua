-- Intercom SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("intercom_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local IntercomSDK = {}
IntercomSDK.__index = IntercomSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

IntercomSDK._make_feature = _make_feature


function IntercomSDK.new(options)
  local self = setmetatable({}, IntercomSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function IntercomSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function IntercomSDK:get_utility()
  return Utility.copy(self._utility)
end


function IntercomSDK:get_root_ctx()
  return self._rootctx
end


function IntercomSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function IntercomSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function IntercomSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function IntercomSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "IntercomSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function IntercomSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function IntercomSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "IntercomSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:ActivityLog():list() / client:ActivityLog():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ActivityLog(data)
  local EntityMod = require("entity.activity_log_entity")
  if data == nil then
    if self._activity_log == nil then
      self._activity_log = EntityMod.new(self, nil)
    end
    return self._activity_log
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActivityLogEventType():list() / client:ActivityLogEventType():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ActivityLogEventType(data)
  local EntityMod = require("entity.activity_log_event_type_entity")
  if data == nil then
    if self._activity_log_event_type == nil then
      self._activity_log_event_type = EntityMod.new(self, nil)
    end
    return self._activity_log_event_type
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActivityLogList():list() / client:ActivityLogList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ActivityLogList(data)
  local EntityMod = require("entity.activity_log_list_entity")
  if data == nil then
    if self._activity_log_list == nil then
      self._activity_log_list = EntityMod.new(self, nil)
    end
    return self._activity_log_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Admin():list() / client:Admin():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Admin(data)
  local EntityMod = require("entity.admin_entity")
  if data == nil then
    if self._admin == nil then
      self._admin = EntityMod.new(self, nil)
    end
    return self._admin
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminWithApp():list() / client:AdminWithApp():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:AdminWithApp(data)
  local EntityMod = require("entity.admin_with_app_entity")
  if data == nil then
    if self._admin_with_app == nil then
      self._admin_with_app = EntityMod.new(self, nil)
    end
    return self._admin_with_app
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiCall():list() / client:AiCall():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:AiCall(data)
  local EntityMod = require("entity.ai_call_entity")
  if data == nil then
    if self._ai_call == nil then
      self._ai_call = EntityMod.new(self, nil)
    end
    return self._ai_call
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AiContent():list() / client:AiContent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:AiContent(data)
  local EntityMod = require("entity.ai_content_entity")
  if data == nil then
    if self._ai_content == nil then
      self._ai_content = EntityMod.new(self, nil)
    end
    return self._ai_content
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Article():list() / client:Article():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Article(data)
  local EntityMod = require("entity.article_entity")
  if data == nil then
    if self._article == nil then
      self._article = EntityMod.new(self, nil)
    end
    return self._article
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ArticleSearch():list() / client:ArticleSearch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ArticleSearch(data)
  local EntityMod = require("entity.article_search_entity")
  if data == nil then
    if self._article_search == nil then
      self._article_search = EntityMod.new(self, nil)
    end
    return self._article_search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ArticleVersion():list() / client:ArticleVersion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ArticleVersion(data)
  local EntityMod = require("entity.article_version_entity")
  if data == nil then
    if self._article_version == nil then
      self._article_version = EntityMod.new(self, nil)
    end
    return self._article_version
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ArticleVersionList():list() / client:ArticleVersionList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ArticleVersionList(data)
  local EntityMod = require("entity.article_version_list_entity")
  if data == nil then
    if self._article_version_list == nil then
      self._article_version_list = EntityMod.new(self, nil)
    end
    return self._article_version_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Audience():list() / client:Audience():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Audience(data)
  local EntityMod = require("entity.audience_entity")
  if data == nil then
    if self._audience == nil then
      self._audience = EntityMod.new(self, nil)
    end
    return self._audience
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AwayStatusReason():list() / client:AwayStatusReason():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:AwayStatusReason(data)
  local EntityMod = require("entity.away_status_reason_entity")
  if data == nil then
    if self._away_status_reason == nil then
      self._away_status_reason = EntityMod.new(self, nil)
    end
    return self._away_status_reason
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Banner():list() / client:Banner():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Banner(data)
  local EntityMod = require("entity.banner_entity")
  if data == nil then
    if self._banner == nil then
      self._banner = EntityMod.new(self, nil)
    end
    return self._banner
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BannerDismiss():list() / client:BannerDismiss():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:BannerDismiss(data)
  local EntityMod = require("entity.banner_dismiss_entity")
  if data == nil then
    if self._banner_dismiss == nil then
      self._banner_dismiss = EntityMod.new(self, nil)
    end
    return self._banner_dismiss
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Brand():list() / client:Brand():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Brand(data)
  local EntityMod = require("entity.brand_entity")
  if data == nil then
    if self._brand == nil then
      self._brand = EntityMod.new(self, nil)
    end
    return self._brand
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Call():list() / client:Call():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Call(data)
  local EntityMod = require("entity.call_entity")
  if data == nil then
    if self._call == nil then
      self._call = EntityMod.new(self, nil)
    end
    return self._call
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Company():list() / client:Company():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Company(data)
  local EntityMod = require("entity.company_entity")
  if data == nil then
    if self._company == nil then
      self._company = EntityMod.new(self, nil)
    end
    return self._company
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CompanyAttachedContact():list() / client:CompanyAttachedContact():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:CompanyAttachedContact(data)
  local EntityMod = require("entity.company_attached_contact_entity")
  if data == nil then
    if self._company_attached_contact == nil then
      self._company_attached_contact = EntityMod.new(self, nil)
    end
    return self._company_attached_contact
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CompanyAttachedSegment():list() / client:CompanyAttachedSegment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:CompanyAttachedSegment(data)
  local EntityMod = require("entity.company_attached_segment_entity")
  if data == nil then
    if self._company_attached_segment == nil then
      self._company_attached_segment = EntityMod.new(self, nil)
    end
    return self._company_attached_segment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CompanyList():list() / client:CompanyList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:CompanyList(data)
  local EntityMod = require("entity.company_list_entity")
  if data == nil then
    if self._company_list == nil then
      self._company_list = EntityMod.new(self, nil)
    end
    return self._company_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CompanyScroll():list() / client:CompanyScroll():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:CompanyScroll(data)
  local EntityMod = require("entity.company_scroll_entity")
  if data == nil then
    if self._company_scroll == nil then
      self._company_scroll = EntityMod.new(self, nil)
    end
    return self._company_scroll
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Contact():list() / client:Contact():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Contact(data)
  local EntityMod = require("entity.contact_entity")
  if data == nil then
    if self._contact == nil then
      self._contact = EntityMod.new(self, nil)
    end
    return self._contact
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContactAttachedCompany():list() / client:ContactAttachedCompany():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ContactAttachedCompany(data)
  local EntityMod = require("entity.contact_attached_company_entity")
  if data == nil then
    if self._contact_attached_company == nil then
      self._contact_attached_company = EntityMod.new(self, nil)
    end
    return self._contact_attached_company
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContactList():list() / client:ContactList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ContactList(data)
  local EntityMod = require("entity.contact_list_entity")
  if data == nil then
    if self._contact_list == nil then
      self._contact_list = EntityMod.new(self, nil)
    end
    return self._contact_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContactSegment():list() / client:ContactSegment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ContactSegment(data)
  local EntityMod = require("entity.contact_segment_entity")
  if data == nil then
    if self._contact_segment == nil then
      self._contact_segment = EntityMod.new(self, nil)
    end
    return self._contact_segment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Content():list() / client:Content():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Content(data)
  local EntityMod = require("entity.content_entity")
  if data == nil then
    if self._content == nil then
      self._content = EntityMod.new(self, nil)
    end
    return self._content
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContentImportSource():list() / client:ContentImportSource():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ContentImportSource(data)
  local EntityMod = require("entity.content_import_source_entity")
  if data == nil then
    if self._content_import_source == nil then
      self._content_import_source = EntityMod.new(self, nil)
    end
    return self._content_import_source
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContentSearch():list() / client:ContentSearch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ContentSearch(data)
  local EntityMod = require("entity.content_search_entity")
  if data == nil then
    if self._content_search == nil then
      self._content_search = EntityMod.new(self, nil)
    end
    return self._content_search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContentSnippet():list() / client:ContentSnippet():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ContentSnippet(data)
  local EntityMod = require("entity.content_snippet_entity")
  if data == nil then
    if self._content_snippet == nil then
      self._content_snippet = EntityMod.new(self, nil)
    end
    return self._content_snippet
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Conversation():list() / client:Conversation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Conversation(data)
  local EntityMod = require("entity.conversation_entity")
  if data == nil then
    if self._conversation == nil then
      self._conversation = EntityMod.new(self, nil)
    end
    return self._conversation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationAttribute():list() / client:ConversationAttribute():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ConversationAttribute(data)
  local EntityMod = require("entity.conversation_attribute_entity")
  if data == nil then
    if self._conversation_attribute == nil then
      self._conversation_attribute = EntityMod.new(self, nil)
    end
    return self._conversation_attribute
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationAttributeList():list() / client:ConversationAttributeList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ConversationAttributeList(data)
  local EntityMod = require("entity.conversation_attribute_list_entity")
  if data == nil then
    if self._conversation_attribute_list == nil then
      self._conversation_attribute_list = EntityMod.new(self, nil)
    end
    return self._conversation_attribute_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationList():list() / client:ConversationList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ConversationList(data)
  local EntityMod = require("entity.conversation_list_entity")
  if data == nil then
    if self._conversation_list == nil then
      self._conversation_list = EntityMod.new(self, nil)
    end
    return self._conversation_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationParticipant():list() / client:ConversationParticipant():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ConversationParticipant(data)
  local EntityMod = require("entity.conversation_participant_entity")
  if data == nil then
    if self._conversation_participant == nil then
      self._conversation_participant = EntityMod.new(self, nil)
    end
    return self._conversation_participant
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomObjectInstance():list() / client:CustomObjectInstance():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:CustomObjectInstance(data)
  local EntityMod = require("entity.custom_object_instance_entity")
  if data == nil then
    if self._custom_object_instance == nil then
      self._custom_object_instance = EntityMod.new(self, nil)
    end
    return self._custom_object_instance
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Data():list() / client:Data():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Data(data)
  local EntityMod = require("entity.data_entity")
  if data == nil then
    if self._data == nil then
      self._data = EntityMod.new(self, nil)
    end
    return self._data
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DataAttribute():list() / client:DataAttribute():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:DataAttribute(data)
  local EntityMod = require("entity.data_attribute_entity")
  if data == nil then
    if self._data_attribute == nil then
      self._data_attribute = EntityMod.new(self, nil)
    end
    return self._data_attribute
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DataConnector():list() / client:DataConnector():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:DataConnector(data)
  local EntityMod = require("entity.data_connector_entity")
  if data == nil then
    if self._data_connector == nil then
      self._data_connector = EntityMod.new(self, nil)
    end
    return self._data_connector
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DataConnectorExecutionResult():list() / client:DataConnectorExecutionResult():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:DataConnectorExecutionResult(data)
  local EntityMod = require("entity.data_connector_execution_result_entity")
  if data == nil then
    if self._data_connector_execution_result == nil then
      self._data_connector_execution_result = EntityMod.new(self, nil)
    end
    return self._data_connector_execution_result
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DataConnectorExecutionResultList():list() / client:DataConnectorExecutionResultList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:DataConnectorExecutionResultList(data)
  local EntityMod = require("entity.data_connector_execution_result_list_entity")
  if data == nil then
    if self._data_connector_execution_result_list == nil then
      self._data_connector_execution_result_list = EntityMod.new(self, nil)
    end
    return self._data_connector_execution_result_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DataEvent():list() / client:DataEvent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:DataEvent(data)
  local EntityMod = require("entity.data_event_entity")
  if data == nil then
    if self._data_event == nil then
      self._data_event = EntityMod.new(self, nil)
    end
    return self._data_event
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DataEventSummary():list() / client:DataEventSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:DataEventSummary(data)
  local EntityMod = require("entity.data_event_summary_entity")
  if data == nil then
    if self._data_event_summary == nil then
      self._data_event_summary = EntityMod.new(self, nil)
    end
    return self._data_event_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DataExport():list() / client:DataExport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:DataExport(data)
  local EntityMod = require("entity.data_export_entity")
  if data == nil then
    if self._data_export == nil then
      self._data_export = EntityMod.new(self, nil)
    end
    return self._data_export
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Deleted():list() / client:Deleted():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Deleted(data)
  local EntityMod = require("entity.deleted_entity")
  if data == nil then
    if self._deleted == nil then
      self._deleted = EntityMod.new(self, nil)
    end
    return self._deleted
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeletedArticleObject():list() / client:DeletedArticleObject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:DeletedArticleObject(data)
  local EntityMod = require("entity.deleted_article_object_entity")
  if data == nil then
    if self._deleted_article_object == nil then
      self._deleted_article_object = EntityMod.new(self, nil)
    end
    return self._deleted_article_object
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeletedCompanyObject():list() / client:DeletedCompanyObject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:DeletedCompanyObject(data)
  local EntityMod = require("entity.deleted_company_object_entity")
  if data == nil then
    if self._deleted_company_object == nil then
      self._deleted_company_object = EntityMod.new(self, nil)
    end
    return self._deleted_company_object
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeletedDataConnectorObject():list() / client:DeletedDataConnectorObject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:DeletedDataConnectorObject(data)
  local EntityMod = require("entity.deleted_data_connector_object_entity")
  if data == nil then
    if self._deleted_data_connector_object == nil then
      self._deleted_data_connector_object = EntityMod.new(self, nil)
    end
    return self._deleted_data_connector_object
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeletedInternalArticleObject():list() / client:DeletedInternalArticleObject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:DeletedInternalArticleObject(data)
  local EntityMod = require("entity.deleted_internal_article_object_entity")
  if data == nil then
    if self._deleted_internal_article_object == nil then
      self._deleted_internal_article_object = EntityMod.new(self, nil)
    end
    return self._deleted_internal_article_object
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeletedObject():list() / client:DeletedObject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:DeletedObject(data)
  local EntityMod = require("entity.deleted_object_entity")
  if data == nil then
    if self._deleted_object == nil then
      self._deleted_object = EntityMod.new(self, nil)
    end
    return self._deleted_object
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Email():list() / client:Email():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Email(data)
  local EntityMod = require("entity.email_entity")
  if data == nil then
    if self._email == nil then
      self._email = EntityMod.new(self, nil)
    end
    return self._email
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ExternalPage():list() / client:ExternalPage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ExternalPage(data)
  local EntityMod = require("entity.external_page_entity")
  if data == nil then
    if self._external_page == nil then
      self._external_page = EntityMod.new(self, nil)
    end
    return self._external_page
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FinAgent():list() / client:FinAgent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:FinAgent(data)
  local EntityMod = require("entity.fin_agent_entity")
  if data == nil then
    if self._fin_agent == nil then
      self._fin_agent = EntityMod.new(self, nil)
    end
    return self._fin_agent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:HandlingEvent():list() / client:HandlingEvent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:HandlingEvent(data)
  local EntityMod = require("entity.handling_event_entity")
  if data == nil then
    if self._handling_event == nil then
      self._handling_event = EntityMod.new(self, nil)
    end
    return self._handling_event
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:HelpCenter():list() / client:HelpCenter():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:HelpCenter(data)
  local EntityMod = require("entity.help_center_entity")
  if data == nil then
    if self._help_center == nil then
      self._help_center = EntityMod.new(self, nil)
    end
    return self._help_center
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InternalArticle():list() / client:InternalArticle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:InternalArticle(data)
  local EntityMod = require("entity.internal_article_entity")
  if data == nil then
    if self._internal_article == nil then
      self._internal_article = EntityMod.new(self, nil)
    end
    return self._internal_article
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InternalArticleSearch():list() / client:InternalArticleSearch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:InternalArticleSearch(data)
  local EntityMod = require("entity.internal_article_search_entity")
  if data == nil then
    if self._internal_article_search == nil then
      self._internal_article_search = EntityMod.new(self, nil)
    end
    return self._internal_article_search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IpAllowlist():list() / client:IpAllowlist():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:IpAllowlist(data)
  local EntityMod = require("entity.ip_allowlist_entity")
  if data == nil then
    if self._ip_allowlist == nil then
      self._ip_allowlist = EntityMod.new(self, nil)
    end
    return self._ip_allowlist
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Job():list() / client:Job():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Job(data)
  local EntityMod = require("entity.job_entity")
  if data == nil then
    if self._job == nil then
      self._job = EntityMod.new(self, nil)
    end
    return self._job
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Macro():list() / client:Macro():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Macro(data)
  local EntityMod = require("entity.macro_entity")
  if data == nil then
    if self._macro == nil then
      self._macro = EntityMod.new(self, nil)
    end
    return self._macro
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MergeHistory():list() / client:MergeHistory():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:MergeHistory(data)
  local EntityMod = require("entity.merge_history_entity")
  if data == nil then
    if self._merge_history == nil then
      self._merge_history = EntityMod.new(self, nil)
    end
    return self._merge_history
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Message():list() / client:Message():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Message(data)
  local EntityMod = require("entity.message_entity")
  if data == nil then
    if self._message == nil then
      self._message = EntityMod.new(self, nil)
    end
    return self._message
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NewsItem():list() / client:NewsItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:NewsItem(data)
  local EntityMod = require("entity.news_item_entity")
  if data == nil then
    if self._news_item == nil then
      self._news_item = EntityMod.new(self, nil)
    end
    return self._news_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Newsfeed():list() / client:Newsfeed():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Newsfeed(data)
  local EntityMod = require("entity.newsfeed_entity")
  if data == nil then
    if self._newsfeed == nil then
      self._newsfeed = EntityMod.new(self, nil)
    end
    return self._newsfeed
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Note():list() / client:Note():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Note(data)
  local EntityMod = require("entity.note_entity")
  if data == nil then
    if self._note == nil then
      self._note = EntityMod.new(self, nil)
    end
    return self._note
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OfficeHour():list() / client:OfficeHour():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:OfficeHour(data)
  local EntityMod = require("entity.office_hour_entity")
  if data == nil then
    if self._office_hour == nil then
      self._office_hour = EntityMod.new(self, nil)
    end
    return self._office_hour
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OfficeHoursException():list() / client:OfficeHoursException():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:OfficeHoursException(data)
  local EntityMod = require("entity.office_hours_exception_entity")
  if data == nil then
    if self._office_hours_exception == nil then
      self._office_hours_exception = EntityMod.new(self, nil)
    end
    return self._office_hours_exception
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OfficeHoursSchedule():list() / client:OfficeHoursSchedule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:OfficeHoursSchedule(data)
  local EntityMod = require("entity.office_hours_schedule_entity")
  if data == nil then
    if self._office_hours_schedule == nil then
      self._office_hours_schedule = EntityMod.new(self, nil)
    end
    return self._office_hours_schedule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Paginated():list() / client:Paginated():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Paginated(data)
  local EntityMod = require("entity.paginated_entity")
  if data == nil then
    if self._paginated == nil then
      self._paginated = EntityMod.new(self, nil)
    end
    return self._paginated
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PhoneSwitch():list() / client:PhoneSwitch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:PhoneSwitch(data)
  local EntityMod = require("entity.phone_switch_entity")
  if data == nil then
    if self._phone_switch == nil then
      self._phone_switch = EntityMod.new(self, nil)
    end
    return self._phone_switch
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReportingData():list() / client:ReportingData():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ReportingData(data)
  local EntityMod = require("entity.reporting_data_entity")
  if data == nil then
    if self._reporting_data == nil then
      self._reporting_data = EntityMod.new(self, nil)
    end
    return self._reporting_data
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReportingDataExport():list() / client:ReportingDataExport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:ReportingDataExport(data)
  local EntityMod = require("entity.reporting_data_export_entity")
  if data == nil then
    if self._reporting_data_export == nil then
      self._reporting_data_export = EntityMod.new(self, nil)
    end
    return self._reporting_data_export
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Segment():list() / client:Segment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Segment(data)
  local EntityMod = require("entity.segment_entity")
  if data == nil then
    if self._segment == nil then
      self._segment = EntityMod.new(self, nil)
    end
    return self._segment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SideConversation():list() / client:SideConversation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:SideConversation(data)
  local EntityMod = require("entity.side_conversation_entity")
  if data == nil then
    if self._side_conversation == nil then
      self._side_conversation = EntityMod.new(self, nil)
    end
    return self._side_conversation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Subscription():list() / client:Subscription():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Subscription(data)
  local EntityMod = require("entity.subscription_entity")
  if data == nil then
    if self._subscription == nil then
      self._subscription = EntityMod.new(self, nil)
    end
    return self._subscription
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionType():list() / client:SubscriptionType():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:SubscriptionType(data)
  local EntityMod = require("entity.subscription_type_entity")
  if data == nil then
    if self._subscription_type == nil then
      self._subscription_type = EntityMod.new(self, nil)
    end
    return self._subscription_type
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Tag():list() / client:Tag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Tag(data)
  local EntityMod = require("entity.tag_entity")
  if data == nil then
    if self._tag == nil then
      self._tag = EntityMod.new(self, nil)
    end
    return self._tag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Team():list() / client:Team():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Team(data)
  local EntityMod = require("entity.team_entity")
  if data == nil then
    if self._team == nil then
      self._team = EntityMod.new(self, nil)
    end
    return self._team
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamMetricList():list() / client:TeamMetricList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:TeamMetricList(data)
  local EntityMod = require("entity.team_metric_list_entity")
  if data == nil then
    if self._team_metric_list == nil then
      self._team_metric_list = EntityMod.new(self, nil)
    end
    return self._team_metric_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Ticket():list() / client:Ticket():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Ticket(data)
  local EntityMod = require("entity.ticket_entity")
  if data == nil then
    if self._ticket == nil then
      self._ticket = EntityMod.new(self, nil)
    end
    return self._ticket
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TicketList():list() / client:TicketList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:TicketList(data)
  local EntityMod = require("entity.ticket_list_entity")
  if data == nil then
    if self._ticket_list == nil then
      self._ticket_list = EntityMod.new(self, nil)
    end
    return self._ticket_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TicketReply():list() / client:TicketReply():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:TicketReply(data)
  local EntityMod = require("entity.ticket_reply_entity")
  if data == nil then
    if self._ticket_reply == nil then
      self._ticket_reply = EntityMod.new(self, nil)
    end
    return self._ticket_reply
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TicketState():list() / client:TicketState():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:TicketState(data)
  local EntityMod = require("entity.ticket_state_entity")
  if data == nil then
    if self._ticket_state == nil then
      self._ticket_state = EntityMod.new(self, nil)
    end
    return self._ticket_state
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TicketType():list() / client:TicketType():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:TicketType(data)
  local EntityMod = require("entity.ticket_type_entity")
  if data == nil then
    if self._ticket_type == nil then
      self._ticket_type = EntityMod.new(self, nil)
    end
    return self._ticket_type
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TicketTypeAttribute():list() / client:TicketTypeAttribute():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:TicketTypeAttribute(data)
  local EntityMod = require("entity.ticket_type_attribute_entity")
  if data == nil then
    if self._ticket_type_attribute == nil then
      self._ticket_type_attribute = EntityMod.new(self, nil)
    end
    return self._ticket_type_attribute
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Visitor():list() / client:Visitor():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Visitor(data)
  local EntityMod = require("entity.visitor_entity")
  if data == nil then
    if self._visitor == nil then
      self._visitor = EntityMod.new(self, nil)
    end
    return self._visitor
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WhatsappMessageStatus():list() / client:WhatsappMessageStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:WhatsappMessageStatus(data)
  local EntityMod = require("entity.whatsapp_message_status_entity")
  if data == nil then
    if self._whatsapp_message_status == nil then
      self._whatsapp_message_status = EntityMod.new(self, nil)
    end
    return self._whatsapp_message_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WhatsappMessageStatusList():list() / client:WhatsappMessageStatusList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:WhatsappMessageStatusList(data)
  local EntityMod = require("entity.whatsapp_message_status_list_entity")
  if data == nil then
    if self._whatsapp_message_status_list == nil then
      self._whatsapp_message_status_list = EntityMod.new(self, nil)
    end
    return self._whatsapp_message_status_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Workflow():list() / client:Workflow():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IntercomSDK:Workflow(data)
  local EntityMod = require("entity.workflow_entity")
  if data == nil then
    if self._workflow == nil then
      self._workflow = EntityMod.new(self, nil)
    end
    return self._workflow
  end
  return EntityMod.new(self, data)
end




function IntercomSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = IntercomSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return IntercomSDK
