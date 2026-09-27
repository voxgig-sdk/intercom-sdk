
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


describe('PaginatedEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Paginated()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":false,"sh":"An array of Objects","t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":1},"key$":"data","index$":0},"pages":{"a":true,"h":"Pages","n":"pages","r":false,"sh":"Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.","t":"`$OBJECT`","key$":"pages","index$":1},"total_count":{"a":true,"h":"Total Count","n":"total_count","r":false,"sh":"A count of the total number of objects.","t":"`$INTEGER`","key$":"total_count","index$":2},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of object","t":"`$STRING`","key$":"type","index$":3}},"name":"paginated","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /news/newsfeeds/{newsfeed_id}/items","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"newsfeed_id","or":"newsfeed_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/news/newsfeeds/{newsfeed_id}/items","q":{"exist":["intercom_version","newsfeed_id"]},"r":{},"s":[{"lit":"news"},{"lit":"newsfeeds"},{"var":"newsfeed_id"},{"lit":"items"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.newsfeed"]]},"key$":"paginated","name__orig":"paginated","Name":"Paginated","name_":"paginated","name-":"paginated","NAME":"PAGINATED","index$":68}, {"active":true,"entity":"paginated","key$":"BasicPaginatedFlow","kind":"basic","name":"BasicPaginatedFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"newsfeed_id":"newsfeed01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"paginated_ref01"}}],"index$":0}]}, 'Paginated', {"GET /news/newsfeeds/{newsfeed_id}/items":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"newsfeed_id","in":"path","required":true,"description":"The unique identifier for the news feed item which is given by Intercom.","example":"123","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let paginated_ref01_data = Object.values(setup.data.existing.paginated)[0]

    // LIST
    const paginated_ref01_ent = client.Paginated()
    const paginated_ref01_match = {}
    paginated_ref01_match['newsfeed_id'] = setup.idmap['newsfeed01']

    const paginated_ref01_list = (await paginated_ref01_ent.list(paginated_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/paginated/PaginatedTestData.json')

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
    ['paginated01','paginated02','paginated03','newsfeed01','newsfeed02','newsfeed03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_PAGINATED_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_PAGINATED_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_PAGINATED_ENTID']
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
  
