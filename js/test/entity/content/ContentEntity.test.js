
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { IntercomSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('ContentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Content()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"content","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"POST /content/bulk_actions","json":"{\"operationId\":\"bulkContentActions\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"delete\":{\"summary\":\"Delete content across types\",\"value\":{\"action\":\"delete\",\"content_ids\":[{\"id\":\"12345678\",\"type\":\"article_content\"},{\"id\":\"12345679\",\"type\":\"internal_article\"},{\"id\":\"12345680\",\"type\":\"content_snippet\"}]}},\"publish\":{\"summary\":\"Publish articles\",\"value\":{\"action\":\"publish\",\"content_ids\":[{\"id\":\"12345678\",\"type\":\"article_content\"},{\"id\":\"12345679\",\"type\":\"article_content\"}]}},\"set_audience\":{\"summary\":\"Add and remove segments\",\"value\":{\"action\":\"set_audience\",\"audience\":{\"add_segment_ids\":[100],\"remove_segment_ids\":[200]},\"content_ids\":[{\"id\":\"12345678\",\"type\":\"article_content\"}]}},\"set_availability\":{\"summary\":\"Toggle Fin AI Agent on, Copilot off\",\"value\":{\"action\":\"set_availability\",\"availability\":{\"ai_agent\":true,\"copilot\":false},\"content_ids\":[{\"id\":\"12345678\",\"type\":\"article_content\"}]}},\"unpublish\":{\"summary\":\"Unpublish articles\",\"value\":{\"action\":\"unpublish\",\"content_ids\":[{\"id\":\"12345678\",\"type\":\"article_content\"}]}},\"update_tags\":{\"summary\":\"Apply and remove tags on an article\",\"value\":{\"action\":\"update_tags\",\"content_ids\":[{\"id\":\"12345678\",\"type\":\"article\"}],\"tags\":{\"add_tag_ids\":[100],\"remove_tag_ids\":[200]}}}},\"schema\":{\"properties\":{\"action\":{\"description\":\"The bulk action to perform. Allowed `content_ids[].type` values vary per action:\\n  * `publish`, `unpublish`: `article_content`\\n  * `delete`: `article_content`, `content_snippet`, `file_source_content`, `internal_article`\\n  * `set_availability`, `set_audience`: `article_content`, `content_snippet`, `external_content`, `file_source_content`, `internal_article`\\n  * `update_tags`: `article` (the parent Article id, not `article_content`), `content_snippet`, `external_content`, `file_source_content`, `internal_article`\\n\",\"enum\":[\"publish\",\"unpublish\",\"delete\",\"set_availability\",\"set_audience\",\"update_tags\"],\"example\":\"publish\",\"type\":\"string\"},\"audience\":{\"description\":\"Required when `action` is `set_audience`. Manages segment membership.\",\"properties\":{\"add_segment_ids\":{\"description\":\"Segment IDs to assign to the selected content.\",\"example\":[100],\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"remove_all\":{\"description\":\"When `true`, removes all segments from the selected content.\",\"example\":false,\"type\":\"boolean\"},\"remove_segment_ids\":{\"description\":\"Segment IDs to remove from the selected content.\",\"example\":[200],\"items\":{\"type\":\"integer\"},\"type\":\"array\"}},\"type\":\"object\"},\"availability\":{\"description\":\"Required when `action` is `set_availability`. Each field is optional — only the\\nproperties present in the request are toggled.\\n\",\"properties\":{\"ai_agent\":{\"description\":\"Toggle Fin AI Agent availability.\",\"type\":\"boolean\"},\"copilot\":{\"description\":\"Toggle Copilot availability.\",\"type\":\"boolean\"},\"sales_agent\":{\"description\":\"Toggle Sales Agent availability.\",\"type\":\"boolean\"}},\"type\":\"object\"},\"content_ids\":{\"description\":\"Up to 1,000 content items to apply the action to.\",\"items\":{\"properties\":{\"id\":{\"example\":\"12345678\",\"type\":\"string\"},\"type\":{\"enum\":[\"article\",\"article_content\",\"content_snippet\",\"external_content\",\"file_source_content\",\"internal_article\"],\"example\":\"article_content\",\"type\":\"string\"}},\"required\":[\"type\",\"id\"],\"type\":\"object\"},\"maxItems\":1000,\"type\":\"array\"},\"tags\":{\"description\":\"Required when `action` is `update_tags`. Applies and/or removes existing tags.\\nSupply at least one of `add_tag_ids` / `remove_tag_ids`. At most 100 distinct tag IDs\\nmay be supplied across `add_tag_ids` and `remove_tag_ids` combined. Tag IDs must\\nreference existing, non-archived tags; exceeding the limit or referencing unknown or\\narchived IDs is rejected with `parameter_invalid` (HTTP 422).\\n\",\"properties\":{\"add_tag_ids\":{\"description\":\"Tag IDs to apply to the selected content.\",\"example\":[100],\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"remove_tag_ids\":{\"description\":\"Tag IDs to remove from the selected content.\",\"example\":[200],\"items\":{\"type\":\"integer\"},\"type\":\"array\"}},\"type\":\"object\"}},\"required\":[\"action\",\"content_ids\"],\"title\":\"Content Bulk Action Request Payload\",\"type\":\"object\"}}},\"required\":true},\"responses\":{\"202\":{\"content\":{\"application/json\":{\"examples\":{\"Queued\":{\"summary\":\"Queued\",\"value\":{\"status\":\"queued\",\"type\":\"content_bulk_action\"}}},\"schema\":{\"description\":\"Phase 1 envelope returned immediately after the request is enqueued. A future\\nPreview release will replace this with a polling-friendly job resource that\\nsurfaces progress and per-item results (updated, unchanged, skipped, failed).\\n\",\"properties\":{\"status\":{\"example\":\"queued\",\"type\":\"string\"},\"type\":{\"example\":\"content_bulk_action\",\"type\":\"string\"}},\"title\":\"Content Bulk Action Response Envelope\",\"type\":\"object\"}}},\"description\":\"Accepted — work has been enqueued\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"2e760b85-9020-471b-89dc-f579ec8a0104\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Forbidden — token is missing the `write_content` OAuth scope\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Invalid action, content_ids, or action-specific parameters\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/content/bulk_actions","segments":[{"lit":"content"},{"lit":"bulk_actions"}],"select":{"$action":"bulk_action","exist":["intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"content","name__orig":"content","Name":"Content","name_":"content","name-":"content","NAME":"CONTENT","index$":26}, {"active":true,"entity":"content","key$":"BasicContentFlow","kind":"basic","name":"BasicContentFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"content_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Content')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const content_ref01_ent = client.Content()
    let content_ref01_data = setup.data.new.content['content_ref01']

    content_ref01_data = (await content_ref01_ent.create(content_ref01_data)).data()
    assert(null != content_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/content/ContentTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = IntercomSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['content01','content02','content03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_CONTENT_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_CONTENT_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_CONTENT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new IntercomSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.INTERCOM_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.INTERCOM_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
