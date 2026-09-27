
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


describe('DataEventEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.DataEvent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"The time the event occurred as a UTC Unix timestamp","t":"`$INTEGER`","key$":"created_at","index$":0},"email":{"a":true,"h":"Email","n":"email","r":false,"sh":"An email address for your user.","t":"`$STRING`","key$":"email","index$":1},"event_name":{"a":true,"h":"Event Name","n":"event_name","r":false,"sh":"The name of the event that occurred.","t":"`$STRING`","key$":"event_name","index$":2},"event_summaries":{"a":true,"h":"Event Summaries","n":"event_summaries","r":false,"sh":"A list of event summaries for the user.","t":"`$OBJECT`","key$":"event_summaries","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier for the contact (lead or user) which is given by Intercom.","t":"`$STRING`","key$":"id","index$":4},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Optional metadata about the event.","t":"`$OBJECT`","key$":"metadata","index$":5},"user_id":{"a":true,"h":"User Id","n":"user_id","r":false,"sh":"Your identifier for the user.","t":"`$STRING`","key$":"user_id","index$":6}},"id":{"field":"id","name":"id"},"name":"data_event","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /events","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/events","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"events"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /events/summaries","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/events/summaries","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"events"},{"lit":"summaries"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"data_event","name__orig":"data_event","Name":"DataEvent","name_":"data_event","name-":"data-event","NAME":"DATA_EVENT","index$":42}, {"active":true,"entity":"data_event","key$":"BasicDataEventFlow","kind":"basic","name":"BasicDataEventFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"data_event_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'DataEvent', {"POST /events":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"","type":"object","title":"Create Data Event Request","properties":{"event_name":{"type":"string","description":"The name of the event that occurred. This is presented to your App's admins when filtering and creating segments - a good event name is typically a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`.","example":"invited-friend","key$":"event_name"},"created_at":{"type":"integer","format":"date-time","description":"The time the event occurred as a UTC Unix timestamp","example":1671028894,"key$":"created_at"},"user_id":{"type":"string","description":"Your identifier for the user.","example":"314159","key$":"user_id"},"id":{"type":"string","description":"The unique identifier for the contact (lead or user) which is given by Intercom.","example":"8a88a590-e1c3-41e2-a502-e0649dbf721c","key$":"id"},"email":{"type":"string","description":"An email address for your user. An email should only be used where your application uses email to uniquely identify users.","example":"frodo.baggins@example.com","key$":"email"},"metadata":{"type":"object","description":"Optional metadata about the event.","additionalProperties":{"type":"string"},"example":{"invite_code":"ADDAFRIEND"},"key$":"metadata"}},"anyOf":[{"title":"id required","required":["event_name","created_at","id"]},{"title":"user_id required","required":["event_name","created_at","user_id"]},{"title":"email required","required":["event_name","created_at","email"]}],"x-ref":"#/components/schemas/create_data_event_request","index$":1}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"POST /events/summaries":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"You can send a list of event summaries for a user. Each event summary should contain the event name, the time the event occurred, and the number of times the event occurred. The event name should be a past tense \"verb-noun\" combination, to improve readability, for example `updated-plan`.","type":"object","title":"Create Data Event Summaries Request","properties":{"user_id":{"type":"string","description":"Your identifier for the user.","example":"314159","key$":"user_id"},"event_summaries":{"type":"object","description":"A list of event summaries for the user. Each event summary should contain the event name, the time the event occurred, and the number of times the event occurred. The event name should be a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`.","properties":{"event_name":{"type":"string","description":"The name of the event that occurred. A good event name is typically a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`.","example":"invited-friend"},"count":{"type":"integer","description":"The number of times the event occurred.","example":1},"first":{"type":"integer","format":"date-time","description":"The first time the event was sent","example":1671028894},"last":{"type":"integer","format":"date-time","description":"The last time the event was sent","example":1671028894}},"key$":"event_summaries"}},"x-ref":"#/components/schemas/create_data_event_summaries_request","index$":1}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const data_event_ref01_ent = client.DataEvent()
    let data_event_ref01_data = setup.data.new.data_event['data_event_ref01']

    data_event_ref01_data = (await data_event_ref01_ent.create(data_event_ref01_data)).data()
    assert(null != data_event_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/data_event/DataEventTestData.json')

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
    ['data_event01','data_event02','data_event03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_DATA_EVENT_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_DATA_EVENT_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_DATA_EVENT_ENTID']
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
  
