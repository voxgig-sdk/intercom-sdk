
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


describe('HandlingEventEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.HandlingEvent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"reason":{"a":true,"h":"Reason","n":"reason","r":false,"sh":"Optional reason for the event (e.g., \"Paused\", \"Away\")","t":"`$STRING`","key$":"reason","index$":0},"teammate":{"a":true,"h":"Teammate","n":"teammate","r":true,"sh":"A reference to a teammate","t":"`$OBJECT`","key$":"teammate","index$":1},"timestamp":{"a":true,"fo":"date-time","h":"Timestamp","n":"timestamp","r":true,"sh":"ISO8601 timestamp when the event occurred","t":"`$STRING`","key$":"timestamp","index$":2},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of handling event","t":"`$STRING`","key$":"type","index$":3}},"name":"handling_event","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /conversations/{id}/handling_events","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"conversation_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/conversations/{id}/handling_events","q":{"exist":["conversation_id","intercom_version"]},"r":{"param":{"id":"conversation_id"}},"s":[{"lit":"conversations"},{"var":"conversation_id"},{"lit":"handling_events"}],"t":{"req":"`reqdata`","res":"`body.handling_events`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.conversation"]]},"key$":"handling_event","name__orig":"handling_event","Name":"HandlingEvent","name_":"handling_event","name-":"handling-event","NAME":"HANDLING_EVENT","index$":53}, {"active":true,"entity":"handling_event","key$":"BasicHandlingEventFlow","kind":"basic","name":"BasicHandlingEventFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"conversation_id":"conversation01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"handling_event_ref01"}}],"index$":0}]}, 'HandlingEvent', {"GET /conversations/{id}/handling_events":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"id","in":"path","required":true,"description":"The identifier for the conversation as given by Intercom.","example":"123","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let handling_event_ref01_data = Object.values(setup.data.existing.handling_event)[0]

    // LIST
    const handling_event_ref01_ent = client.HandlingEvent()
    const handling_event_ref01_match = {}
    handling_event_ref01_match['conversation_id'] = setup.idmap['conversation01']

    const handling_event_ref01_list = (await handling_event_ref01_ent.list(handling_event_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/handling_event/HandlingEventTestData.json')

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
    ['handling_event01','handling_event02','handling_event03','conversation01','conversation02','conversation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_HANDLING_EVENT_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_HANDLING_EVENT_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_HANDLING_EVENT_ENTID']
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
  
