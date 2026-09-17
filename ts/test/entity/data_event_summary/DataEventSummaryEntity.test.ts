

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { IntercomSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('DataEventSummaryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.DataEventSummary()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'data_event_summary.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"count","req":false,"short":"The number of times the event was sent","type":"`$INTEGER`","index$":0},{"active":true,"name":"description","req":false,"short":"The description of the event","type":"`$STRING`","index$":1},{"active":true,"name":"first","req":false,"short":"The first time the event was sent","type":"`$STRING`","index$":2},{"active":true,"name":"last","req":false,"short":"The last time the event was sent","type":"`$STRING`","index$":3},{"active":true,"name":"name","req":false,"short":"The name of the event","type":"`$STRING`","index$":4}],"name":"data_event_summary","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"filter","orig":"filter","reqd":true,"type":"`$OBJECT`","index$":0},{"active":true,"kind":"query","name":"summary","orig":"summary","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"kind":"query","name":"type","orig":"type","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /events","json":"{\"operationId\":\"lisDataEvents\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"explode\":true,\"in\":\"query\",\"name\":\"filter\",\"required\":true,\"schema\":{\"oneOf\":[{\"additionalProperties\":false,\"properties\":{\"user_id\":{\"type\":\"string\"}},\"required\":[\"user_id\"],\"title\":\"user_id query parameter\"},{\"additionalProperties\":false,\"properties\":{\"intercom_user_id\":{\"type\":\"string\"}},\"required\":[\"intercom_user_id\"],\"title\":\"intercom_user_id query parameter\"},{\"additionalProperties\":false,\"properties\":{\"email\":{\"type\":\"string\"}},\"required\":[\"email\"],\"title\":\"email query parameter\"}],\"type\":\"object\"},\"style\":\"form\"},{\"description\":\"The value must be user\",\"in\":\"query\",\"name\":\"type\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"summary flag\",\"in\":\"query\",\"name\":\"summary\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"email\":\"user26@email.com\",\"events\":[],\"intercom_user_id\":\"6762f22b1bb69f9f2193bc12\",\"pages\":{\"next\":\"http://api.intercom.test/events?next page\"},\"type\":\"event.summary\",\"user_id\":\"3ecf64d0-9ed1-4e9f-88e1-da7d6e6782f3\"}}},\"schema\":{\"description\":\"This will return a summary of data events for the App.\",\"properties\":{\"email\":{\"description\":\"The email address of the user\",\"example\":\"Sam.Sung@example.com\",\"type\":\"string\"},\"events\":{\"description\":\"A summary of data events\",\"items\":{\"description\":\"This will return a summary of a data event for the App.\",\"nullable\":true,\"properties\":{\"count\":{\"description\":\"The number of times the event was sent\",\"example\":1,\"type\":\"integer\"},\"description\":{\"description\":\"The description of the event\",\"example\":\"A user placed an order\",\"type\":\"string\"},\"first\":{\"description\":\"The first time the event was sent\",\"example\":\"2014-01-16T23:12:21.000+00:00\",\"type\":\"string\"},\"last\":{\"description\":\"The last time the event was sent\",\"example\":\"2014-01-16T23:12:21.000+00:00 \",\"type\":\"string\"},\"name\":{\"description\":\"The name of the event\",\"example\":\"placed-order\",\"type\":\"string\"}},\"title\":\"Data Event Summary Item\",\"type\":\"object\"},\"type\":\"array\"},\"intercom_user_id\":{\"description\":\"The Intercom user ID of the user\",\"example\":\"63a0979a5eeebeaf28dd56ba\",\"type\":\"string\"},\"type\":{\"description\":\"The type of the object\",\"enum\":[\"event.summary\"],\"example\":\"event.summary\",\"type\":\"string\"},\"user_id\":{\"description\":\"The user ID of the user\",\"example\":\"62b997f288e14803c5006932\",\"type\":\"string\"}},\"title\":\"Data Event Summary\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"e6f50446-be4a-40ac-8c8d-6fb91e1040fd\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/events","segments":[{"lit":"events"}],"select":{"exist":["filter","intercom_version","summary","type"]},"transform":{"req":"`reqdata`","res":"`body.events`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"data_event_summary","name__orig":"data_event_summary","Name":"DataEventSummary","name_":"data_event_summary","name-":"data-event-summary","NAME":"DATA_EVENT_SUMMARY","index$":42}, {"active":true,"entity":"data_event_summary","key$":"BasicDataEventSummaryFlow","kind":"basic","name":"BasicDataEventSummaryFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"data_event_summary_ref01"}}],"index$":0}]}, 'DataEventSummary')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let data_event_summary_ref01_data = Object.values(setup.data.existing.data_event_summary)[0] as any

    // LIST
    const data_event_summary_ref01_ent = client.DataEventSummary()
    const data_event_summary_ref01_match: any = {}

    const data_event_summary_ref01_list = (await data_event_summary_ref01_ent.list(data_event_summary_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/data_event_summary/DataEventSummaryTestData.json')

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
    ['data_event_summary01','data_event_summary02','data_event_summary03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_DATA_EVENT_SUMMARY_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_DATA_EVENT_SUMMARY_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_DATA_EVENT_SUMMARY_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
