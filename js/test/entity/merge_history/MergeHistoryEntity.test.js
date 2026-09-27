
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


describe('MergeHistoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.MergeHistory()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"merged_at":{"a":true,"fo":"date-time","h":"Merged At","n":"merged_at","r":false,"sh":"(Unix timestamp in seconds) The time when the merge occurred.","t":"`$INTEGER`","key$":"merged_at","index$":0},"source_contact_id":{"a":true,"h":"Source Contact Id","n":"source_contact_id","r":false,"sh":"The Intercom ID of the contact that was merged into this contact.","t":"`$STRING`","key$":"source_contact_id","index$":1},"source_contact_role":{"a":true,"h":"Source Contact Role","n":"source_contact_role","r":false,"sh":"The role of the contact that was merged in.","t":"`$STRING`","key$":"source_contact_role","index$":2},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of object.","t":"`$STRING`","key$":"type","index$":3}},"name":"merge_history","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /contacts/{id}/merge_history","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"63a07ddf05a32042dffac965","k":"param","n":"contact_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/contacts/{id}/merge_history","q":{"exist":["contact_id","cursor","intercom_version","order","per_page"]},"r":{"param":{"id":"contact_id"}},"s":[{"lit":"contacts"},{"var":"contact_id"},{"lit":"merge_history"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.contact"]]},"key$":"merge_history","name__orig":"merge_history","Name":"MergeHistory","name_":"merge_history","name-":"merge-history","NAME":"MERGE_HISTORY","index$":60}, {"active":true,"entity":"merge_history","key$":"BasicMergeHistoryFlow","kind":"basic","name":"BasicMergeHistoryFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"contact_id":"contact01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"merge_history_ref01"}}],"index$":0}]}, 'MergeHistory', {"GET /contacts/{id}/merge_history":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"id","in":"path","description":"The id of the contact to fetch merge history for.","example":"63a07ddf05a32042dffac965","required":true,"schema":{"type":"string"},"index$":1},{"name":"cursor","in":"query","description":"A cursor for pagination. Pass the `next_cursor` value from a previous response to fetch the next page.","required":false,"schema":{"type":"string"},"index$":2},{"name":"per_page","in":"query","description":"The number of results to return per page (default 50, max 150).","required":false,"schema":{"type":"integer","default":50,"minimum":1,"maximum":150},"index$":3},{"name":"order","in":"query","description":"The order to return results in. Defaults to descending.","required":false,"schema":{"type":"string","enum":["asc","desc"]},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let merge_history_ref01_data = Object.values(setup.data.existing.merge_history)[0]

    // LIST
    const merge_history_ref01_ent = client.MergeHistory()
    const merge_history_ref01_match = {}
    merge_history_ref01_match['contact_id'] = setup.idmap['contact01']

    const merge_history_ref01_list = (await merge_history_ref01_ent.list(merge_history_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/merge_history/MergeHistoryTestData.json')

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
    ['merge_history01','merge_history02','merge_history03','contact01','contact02','contact03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_MERGE_HISTORY_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_MERGE_HISTORY_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_MERGE_HISTORY_ENTID']
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
  
