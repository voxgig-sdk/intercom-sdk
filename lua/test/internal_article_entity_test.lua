-- InternalArticle entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("intercom_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("InternalArticleEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:InternalArticle(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = internal_article_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "internal_article." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set INTERCOM_TEST_INTERNAL_ARTICLE_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local internal_article_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.internal_article")))
    local internal_article_ref01_data = nil
    if #internal_article_ref01_data_raw > 0 then
      internal_article_ref01_data = helpers.to_map(internal_article_ref01_data_raw[1][2])
    end

    -- UPDATE
    local internal_article_ref01_ent = client:InternalArticle(nil)
    local internal_article_ref01_data_up0_up = {
      id = internal_article_ref01_data["id"],
    }

    local internal_article_ref01_markdef_up0_name = "body"
    local internal_article_ref01_markdef_up0_value = "Mark01-internal_article_ref01_" .. tostring(setup.now)
    internal_article_ref01_data_up0_up[internal_article_ref01_markdef_up0_name] = internal_article_ref01_markdef_up0_value

    local internal_article_ref01_resdata_up0_result, err = internal_article_ref01_ent:update(internal_article_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local internal_article_ref01_resdata_up0 = helpers.to_map(type(internal_article_ref01_resdata_up0_result) == 'table' and internal_article_ref01_resdata_up0_result.data_get and internal_article_ref01_resdata_up0_result:data_get() or internal_article_ref01_resdata_up0_result)
    assert.is_not_nil(internal_article_ref01_resdata_up0)
    assert.are.equal(internal_article_ref01_resdata_up0["id"], internal_article_ref01_data_up0_up["id"])
    assert.are.equal(internal_article_ref01_resdata_up0[internal_article_ref01_markdef_up0_name], internal_article_ref01_markdef_up0_value)

    -- LOAD
    local internal_article_ref01_match_dt0 = {
      id = internal_article_ref01_data["id"],
    }
    local internal_article_ref01_data_dt0_loaded, err = internal_article_ref01_ent:load(internal_article_ref01_match_dt0, nil)
    assert.is_nil(err)
    local internal_article_ref01_data_dt0_load_result = helpers.to_map(type(internal_article_ref01_data_dt0_loaded) == 'table' and internal_article_ref01_data_dt0_loaded.data_get and internal_article_ref01_data_dt0_loaded:data_get() or internal_article_ref01_data_dt0_loaded)
    assert.is_not_nil(internal_article_ref01_data_dt0_load_result)
    assert.are.equal(internal_article_ref01_data_dt0_load_result["id"], internal_article_ref01_data["id"])

  end)
end)

function internal_article_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/internal_article/InternalArticleTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read internal_article test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "internal_article01", "internal_article02", "internal_article03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("INTERCOM_TEST_INTERNAL_ARTICLE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["INTERCOM_TEST_INTERNAL_ARTICLE_ENTID"] = idmap,
    ["INTERCOM_TEST_LIVE"] = "FALSE",
    ["INTERCOM_TEST_EXPLAIN"] = "FALSE",
    ["INTERCOM_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["INTERCOM_TEST_INTERNAL_ARTICLE_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["INTERCOM_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["INTERCOM_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["INTERCOM_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["INTERCOM_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
