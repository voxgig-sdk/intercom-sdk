
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"created_at","req":false,"short":"The time the event occurred as a UTC Unix timestamp","type":"`$INTEGER`","index$":0},{"active":true,"name":"email","req":false,"short":"An email address for your user.","type":"`$STRING`","index$":1},{"active":true,"name":"event_name","req":false,"short":"The name of the event that occurred.","type":"`$STRING`","index$":2},{"active":true,"name":"event_summaries","req":false,"short":"A list of event summaries for the user.","type":"`$OBJECT`","index$":3},{"active":true,"name":"id","req":false,"short":"The unique identifier for the contact (lead or user) which is given by Intercom.","type":"`$STRING`","index$":4},{"active":true,"name":"metadata","req":false,"short":"Optional metadata about the event.","type":"`$OBJECT`","index$":5},{"active":true,"name":"user_id","req":false,"short":"Your identifier for the user.","type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"data_event","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"POST /events","json":"{\"operationId\":\"createDataEvent\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"anyOf\":[{\"required\":[\"event_name\",\"created_at\",\"id\"],\"title\":\"id required\"},{\"required\":[\"event_name\",\"created_at\",\"user_id\"],\"title\":\"user_id required\"},{\"required\":[\"event_name\",\"created_at\",\"email\"],\"title\":\"email required\"}],\"description\":\"\",\"properties\":{\"created_at\":{\"description\":\"The time the event occurred as a UTC Unix timestamp\",\"example\":1671028894,\"format\":\"date-time\",\"type\":\"integer\"},\"email\":{\"description\":\"An email address for your user. An email should only be used where your application uses email to uniquely identify users.\",\"example\":\"frodo.baggins@example.com\",\"type\":\"string\"},\"event_name\":{\"description\":\"The name of the event that occurred. This is presented to your App's admins when filtering and creating segments - a good event name is typically a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`.\",\"example\":\"invited-friend\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the contact (lead or user) which is given by Intercom.\",\"example\":\"8a88a590-e1c3-41e2-a502-e0649dbf721c\",\"type\":\"string\"},\"metadata\":{\"additionalProperties\":{\"type\":\"string\"},\"description\":\"Optional metadata about the event.\",\"example\":{\"invite_code\":\"ADDAFRIEND\"},\"type\":\"object\"},\"user_id\":{\"description\":\"Your identifier for the user.\",\"example\":\"314159\",\"type\":\"string\"}},\"title\":\"Create Data Event Request\",\"type\":\"object\"}}}},\"responses\":{\"202\":{\"description\":\"successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"212c8206-e7a6-44c8-8f27-5f0ad7f1d243\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/events","segments":[{"lit":"events"}],"select":{"exist":["intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"POST /events/summaries","json":"{\"operationId\":\"dataEventSummaries\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"You can send a list of event summaries for a user. Each event summary should contain the event name, the time the event occurred, and the number of times the event occurred. The event name should be a past tense \\\"verb-noun\\\" combination, to improve readability, for example `updated-plan`.\",\"properties\":{\"event_summaries\":{\"description\":\"A list of event summaries for the user. Each event summary should contain the event name, the time the event occurred, and the number of times the event occurred. The event name should be a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`.\",\"properties\":{\"count\":{\"description\":\"The number of times the event occurred.\",\"example\":1,\"type\":\"integer\"},\"event_name\":{\"description\":\"The name of the event that occurred. A good event name is typically a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`.\",\"example\":\"invited-friend\",\"type\":\"string\"},\"first\":{\"description\":\"The first time the event was sent\",\"example\":1671028894,\"format\":\"date-time\",\"type\":\"integer\"},\"last\":{\"description\":\"The last time the event was sent\",\"example\":1671028894,\"format\":\"date-time\",\"type\":\"integer\"}},\"type\":\"object\"},\"user_id\":{\"description\":\"Your identifier for the user.\",\"example\":\"314159\",\"type\":\"string\"}},\"title\":\"Create Data Event Summaries Request\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"description\":\"successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"7a7d8425-2c1b-46ab-8133-c043fc1e5711\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/events/summaries","segments":[{"lit":"events"},{"lit":"summaries"}],"select":{"exist":["intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"data_event","name__orig":"data_event","Name":"DataEvent","name_":"data_event","name-":"data-event","NAME":"DATA_EVENT","index$":41}, {"active":true,"entity":"data_event","key$":"BasicDataEventFlow","kind":"basic","name":"BasicDataEventFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"data_event_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'DataEvent')
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
  
