
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


describe('SegmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Segment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"count":{"a":true,"h":"Count","n":"count","r":false,"sh":"The number of items in the user segment.","t":"`$INTEGER`","key$":"count","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The time the segment was created.","t":"`$INTEGER`","key$":"created_at","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier representing the segment.","t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the segment.","t":"`$STRING`","key$":"name","index$":3},"person_type":{"a":true,"h":"Person Type","n":"person_type","r":false,"sh":"Type of the contact: contact (lead) or user.","t":"`$STRING`","key$":"person_type","index$":4},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of object.","t":"`$STRING`","key$":"type","index$":5},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"sh":"The time the segment was updated.","t":"`$INTEGER`","key$":"updated_at","index$":6}},"id":{"field":"id","name":"id"},"name":"segment","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /segments","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":true,"k":"query","n":"include_count","or":"include_count","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"GET","o":"/segments","q":{"exist":["include_count","intercom_version"]},"r":{},"s":[{"lit":"segments"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /segments/{segment_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"id","or":"segment_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/segments/{segment_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"segment_id":"id"}},"s":[{"lit":"segments"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"segment","name__orig":"segment","Name":"Segment","name_":"segment","name-":"segment","NAME":"SEGMENT","index$":72}, {"active":true,"entity":"segment","key$":"BasicSegmentFlow","kind":"basic","name":"BasicSegmentFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"segment_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"segment_ref01","srcdatavar":"segment_ref01_data","suffix":"_dt0"},"m":{"id":"segment01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-segment_ref01"}}],"index$":1}]}, 'Segment', {"GET /segments":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"include_count","in":"query","required":false,"description":"It includes the count of contacts that belong to each segment.","example":true,"schema":{"type":"boolean"},"index$":1}]},"GET /segments/{segment_id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"segment_id","in":"path","required":true,"description":"The unique identified of a given segment.","example":"123","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let segment_ref01_data = Object.values(setup.data.existing.segment)[0]

    // LIST
    const segment_ref01_ent = client.Segment()
    const segment_ref01_match = {}

    const segment_ref01_list = (await segment_ref01_ent.list(segment_ref01_match)).map((e) => e.data())


    // LOAD
    const segment_ref01_match_dt0 = {}
    segment_ref01_match_dt0.id = segment_ref01_data.id
    const segment_ref01_data_dt0 = (await segment_ref01_ent.load(segment_ref01_match_dt0)).data()
    assert(segment_ref01_data_dt0.id === segment_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/segment/SegmentTestData.json')

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
    ['segment01','segment02','segment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_SEGMENT_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_SEGMENT_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_SEGMENT_ENTID']
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
  
