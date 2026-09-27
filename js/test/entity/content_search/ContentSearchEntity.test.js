
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


describe('ContentSearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.ContentSearch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":false,"sh":"The list of matched content items.","t":"`$ARRAY`","key$":"data","index$":0},"pages":{"a":true,"h":"Pages","n":"pages","r":false,"sh":"Pagination metadata, including links to neighbouring pages.","t":"`$OBJECT`","key$":"pages","index$":1},"total_count":{"a":true,"h":"Total Count","n":"total_count","r":false,"sh":"Total number of results matching the query.","t":"`$INTEGER`","key$":"total_count","index$":2},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Always `list`.","t":"`$STRING`","key$":"type","index$":3}},"name":"content_search","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /content/search","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"1,2,3","k":"query","n":"any_tag_id","or":"any_tag_id","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"ex":"article,snippet","k":"query","n":"content_type","or":"content_type","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"ex":"on","k":"query","n":"copilot_state","or":"copilot_state","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":1677253093,"k":"query","n":"created_at_after","or":"created_at_after","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":1677861493,"k":"query","n":"created_at_before","or":"created_at_before","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"ex":"991267464,991267465","k":"query","n":"created_by_id","or":"created_by_id","r":false,"t":"`$ARRAY`","index$":5},{"a":true,"ex":"on","k":"query","n":"fin_sales_state","or":"fin_sales_state","r":false,"t":"`$STRING`","index$":6},{"a":true,"ex":"on","k":"query","n":"fin_service_state","or":"fin_service_state","r":false,"t":"`$STRING`","index$":7},{"a":true,"ex":"folder","k":"query","n":"folder_entity_type","or":"folder_entity_type","r":false,"t":"`$STRING`","index$":8},{"a":true,"ex":"10,20","k":"query","n":"folder_id","or":"folder_id","r":false,"t":"`$ARRAY`","index$":9},{"a":true,"ex":"991267464,991267465","k":"query","n":"last_updated_by_id","or":"last_updated_by_id","r":false,"t":"`$ARRAY`","index$":10},{"a":true,"ex":"en,fr","k":"query","n":"locale","or":"locale","r":false,"t":"`$ARRAY`","index$":11},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":12},{"a":true,"ex":10,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":13},{"a":true,"ex":"billing","k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":14},{"a":true,"ex":"published,draft","k":"query","n":"state","or":"state","r":false,"t":"`$ARRAY`","index$":15},{"a":true,"ex":"1,2,3","k":"query","n":"tag_id","or":"tag_id","r":false,"t":"`$ARRAY`","index$":16},{"a":true,"ex":"IN","k":"query","n":"tag_operator","or":"tag_operator","r":false,"t":"`$STRING`","index$":17},{"a":true,"ex":1677253093,"k":"query","n":"updated_at_after","or":"updated_at_after","r":false,"t":"`$INTEGER`","index$":18},{"a":true,"ex":1677861493,"k":"query","n":"updated_at_before","or":"updated_at_before","r":false,"t":"`$INTEGER`","index$":19}]},"k":"http","m":"GET","o":"/content/search","q":{"exist":["any_tag_id","content_type","copilot_state","created_at_after","created_at_before","created_by_id","fin_sales_state","fin_service_state","folder_entity_type","folder_id","intercom_version","last_updated_by_id","locale","page","per_page","query","state","tag_id","tag_operator","updated_at_after","updated_at_before"]},"r":{},"s":[{"lit":"content"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"content_search","name__orig":"content_search","Name":"ContentSearch","name_":"content_search","name-":"content-search","NAME":"CONTENT_SEARCH","index$":29}, {"active":true,"entity":"content_search","key$":"BasicContentSearchFlow","kind":"basic","name":"BasicContentSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"content_search_ref01"}}],"index$":0}]}, 'ContentSearch', {"GET /content/search":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"query","in":"query","required":false,"description":"A free-text search term matched against the title and body of each content item. When omitted, returns the most recent content items.","example":"billing","schema":{"type":"string","maxLength":500},"index$":1},{"name":"page","in":"query","required":false,"description":"The page number to fetch. Defaults to 1. Values below 1 are clamped to 1.","example":1,"schema":{"type":"integer","default":1,"minimum":1},"index$":2},{"name":"per_page","in":"query","required":false,"description":"Number of results per page. Defaults to 10. Maximum 50.","example":10,"schema":{"type":"integer","default":10,"minimum":1,"maximum":50},"index$":3},{"name":"states","in":"query","required":false,"description":"Filter by publication state. Accepts a comma-separated list or repeated params.","example":"published,draft","schema":{"type":"array","items":{"type":"string","enum":["published","draft"]}},"style":"form","explode":false,"index$":4},{"name":"locales","in":"query","required":false,"description":"Filter by locale codes (e.g. `en`, `fr`, `de`). Accepts a comma-separated list or repeated params.","example":"en,fr","schema":{"type":"array","items":{"type":"string"}},"style":"form","explode":false,"index$":5},{"name":"tag_ids","in":"query","required":false,"description":"Filter by tag IDs. Pairs with `tag_operator` to control match semantics. Accepts a comma-separated list or repeated params.","example":"1,2,3","schema":{"type":"array","items":{"type":"integer"}},"style":"form","explode":false,"index$":6},{"name":"tag_operator","in":"query","required":false,"description":"Match operator paired with `tag_ids`. `IN` returns content matching any of the given tags; `NIN` excludes content matching any of them.","example":"IN","schema":{"type":"string","enum":["IN","NIN"]},"index$":7},{"name":"any_tag_ids","in":"query","required":false,"description":"Filter by tag IDs using OR semantics — returns content matching any of the given tags. Alternative to `tag_ids` + `tag_operator`. Accepts a comma-separated list or repeated params.","example":"1,2,3","schema":{"type":"array","items":{"type":"integer"}},"style":"form","explode":false,"index$":8},{"name":"folder_ids","in":"query","required":false,"description":"Filter by folder IDs. Must be sent together with `folder_entity_type`. Accepts a comma-separated list or repeated params.","example":"10,20","schema":{"type":"array","items":{"type":"integer"}},"style":"form","explode":false,"index$":9},{"name":"folder_entity_type","in":"query","required":false,"description":"Required when `folder_ids` is provided. Identifies the entity type the folder IDs refer to.","example":"folder","schema":{"type":"string","enum":["folder"]},"index$":10},{"name":"content_types","in":"query","required":false,"description":"Restrict the search to specific content types. When provided, this REPLACES the default content type set rather than filtering on top of it. Accepts a comma-separated list or repeated params.","example":"article,snippet","schema":{"type":"array","items":{"type":"string","enum":["snippet","external_content","file_source_content","internal_article","article"]}},"style":"form","explode":false,"index$":11},{"name":"copilot_state","in":"query","required":false,"description":"Filter by whether the content is enabled for Copilot.","example":"on","schema":{"type":"string","enum":["on","off"]},"index$":12},{"name":"fin_service_state","in":"query","required":false,"description":"Filter by whether the content is enabled for Fin AI Agent (customer-facing service).","example":"on","schema":{"type":"string","enum":["on","off"]},"index$":13},{"name":"fin_sales_state","in":"query","required":false,"description":"Filter by whether the content is enabled for Fin Sales Agent.","example":"on","schema":{"type":"string","enum":["on","off"]},"index$":14},{"name":"created_by_ids","in":"query","required":false,"description":"Filter by the admin IDs that created the content. Accepts a comma-separated list or repeated params.","example":"991267464,991267465","schema":{"type":"array","items":{"type":"integer"}},"style":"form","explode":false,"index$":15},{"name":"last_updated_by_ids","in":"query","required":false,"description":"Filter by the admin IDs that last updated the content. Accepts a comma-separated list or repeated params.","example":"991267464,991267465","schema":{"type":"array","items":{"type":"integer"}},"style":"form","explode":false,"index$":16},{"name":"created_at_after","in":"query","required":false,"description":"Return content created at or after this time. Unix epoch seconds.","example":1677253093,"schema":{"type":"integer"},"index$":17},{"name":"created_at_before","in":"query","required":false,"description":"Return content created at or before this time. Unix epoch seconds.","example":1677861493,"schema":{"type":"integer"},"index$":18},{"name":"updated_at_after","in":"query","required":false,"description":"Return content last updated at or after this time. Unix epoch seconds.","example":1677253093,"schema":{"type":"integer"},"index$":19},{"name":"updated_at_before","in":"query","required":false,"description":"Return content last updated at or before this time. Unix epoch seconds.","example":1677861493,"schema":{"type":"integer"},"index$":20}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let content_search_ref01_data = Object.values(setup.data.existing.content_search)[0]

    // LIST
    const content_search_ref01_ent = client.ContentSearch()
    const content_search_ref01_match = {}

    const content_search_ref01_list = (await content_search_ref01_ent.list(content_search_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/content_search/ContentSearchTestData.json')

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
    ['content_search01','content_search02','content_search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_CONTENT_SEARCH_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_CONTENT_SEARCH_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_CONTENT_SEARCH_ENTID']
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
  
