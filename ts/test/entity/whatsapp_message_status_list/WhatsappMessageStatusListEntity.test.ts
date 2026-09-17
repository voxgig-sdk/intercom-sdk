

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


describe('WhatsappMessageStatusListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.WhatsappMessageStatusList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'whatsapp_message_status_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"conversation_id","req":true,"short":"ID of the conversation","type":"`$STRING`","index$":0},{"active":true,"name":"created_at","req":true,"short":"Creation timestamp","type":"`$INTEGER`","index$":1},{"active":true,"name":"id","req":true,"short":"Event ID","type":"`$STRING`","index$":2},{"active":true,"name":"status","req":true,"short":"Current status of the message","type":"`$STRING`","index$":3},{"active":true,"name":"template_name","req":false,"short":"Name of the WhatsApp template used","type":"`$STRING`","index$":4},{"active":true,"name":"type","req":true,"short":"Event type","type":"`$STRING`","index$":5},{"active":true,"name":"updated_at","req":true,"short":"Last update timestamp","type":"`$INTEGER`","index$":6},{"active":true,"name":"whatsapp_message_id","req":true,"short":"WhatsApp's message identifier","type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"whatsapp_message_status_list","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"query":[{"active":true,"example":50,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"ruleset_id","orig":"ruleset_id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"starting_after","orig":"starting_after","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /messages/status","json":"{\"operationId\":\"getWhatsAppMessageStatus\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the set of messages to check status for\",\"in\":\"query\",\"name\":\"ruleset_id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of results per page (default 50, max 100)\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"schema\":{\"default\":50,\"maximum\":100,\"type\":\"integer\"}},{\"description\":\"Cursor for pagination, used to fetch the next page of results\",\"in\":\"query\",\"name\":\"starting_after\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"events\":[{\"conversation_id\":\"conv_123\",\"created_at\":1734537980,\"id\":\"event_1\",\"status\":\"delivered\",\"template_name\":\"appointment_reminder\",\"type\":\"broadcast_outbound\",\"updated_at\":1734538000,\"user_id\":\"user_123\",\"whatsapp_message_id\":\"wamid_123\"},{\"conversation_id\":\"conv_456\",\"created_at\":1734537970,\"id\":\"event_2\",\"status\":\"sent\",\"template_name\":\"order_update\",\"type\":\"broadcast_outbound\",\"updated_at\":1734538010,\"user_id\":\"user_456\",\"whatsapp_message_id\":\"wamid_456\"}],\"pages\":{\"next\":{\"starting_after\":\"abc123\"},\"per_page\":50,\"total_pages\":3,\"type\":\"pages\"},\"ruleset_id\":12345,\"total_count\":125,\"type\":\"list\"}}},\"schema\":{\"properties\":{\"events\":{\"items\":{\"properties\":{\"conversation_id\":{\"description\":\"ID of the conversation\",\"type\":\"string\"},\"created_at\":{\"description\":\"Creation timestamp\",\"type\":\"integer\"},\"id\":{\"description\":\"Event ID\",\"type\":\"string\"},\"status\":{\"description\":\"Current status of the message\",\"enum\":[\"sent\",\"delivered\",\"read\",\"failed\"],\"type\":\"string\"},\"template_name\":{\"description\":\"Name of the WhatsApp template used\",\"type\":\"string\"},\"type\":{\"description\":\"Event type\",\"enum\":[\"broadcast_outbound\"],\"type\":\"string\"},\"updated_at\":{\"description\":\"Last update timestamp\",\"type\":\"integer\"},\"whatsapp_message_id\":{\"description\":\"WhatsApp's message identifier\",\"type\":\"string\"}},\"required\":[\"id\",\"conversation_id\",\"status\",\"type\",\"created_at\",\"updated_at\",\"whatsapp_message_id\"],\"type\":\"object\"},\"type\":\"array\"},\"pages\":{\"properties\":{\"next\":{\"description\":\"Information for fetching next page (null if no more pages)\",\"nullable\":true,\"properties\":{\"starting_after\":{\"description\":\"Cursor for the next page\",\"type\":\"string\"}},\"type\":\"object\"},\"per_page\":{\"description\":\"Number of results per page\",\"type\":\"integer\"},\"total_pages\":{\"description\":\"Total number of pages\",\"type\":\"integer\"},\"type\":{\"enum\":[\"pages\"],\"type\":\"string\"}},\"required\":[\"type\",\"per_page\",\"total_pages\"],\"type\":\"object\"},\"ruleset_id\":{\"description\":\"The provided ruleset ID\",\"type\":\"string\"},\"total_count\":{\"description\":\"Total number of events\",\"type\":\"integer\"},\"type\":{\"enum\":[\"list\"],\"type\":\"string\"}},\"required\":[\"type\",\"ruleset_id\",\"pages\",\"total_count\",\"events\"],\"type\":\"object\"}}},\"description\":\"Successful response\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"missing ruleset_id\":{\"value\":{\"message\":\"ruleset_id is required\",\"request_id\":\"req_123\",\"type\":\"error\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Bad request - missing required parameters\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"d7997515-cd92-4fe4-966c-cb1f4bdda1d4\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"examples\":{\"API plan restricted\":{\"value\":{\"errors\":[{\"code\":\"api_plan_restricted\",\"message\":\"Active subscription needed.\"}],\"request_id\":\"591a0c2f-78b3-41bb-bfa7-f1fae15107b0\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"API plan restricted\"},\"500\":{\"content\":{\"application/json\":{\"examples\":{\"server error\":{\"value\":{\"message\":\"Request failed due to an internal error. Please reach out to support\",\"request_id\":\"591a0c2f-78b3-41bb-bfa7-f1fae15107b2\",\"type\":\"error\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/messages/status","segments":[{"lit":"messages"},{"lit":"status"}],"select":{"exist":["intercom_version","per_page","ruleset_id","starting_after"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"whatsapp_message_status_list","name__orig":"whatsapp_message_status_list","Name":"WhatsappMessageStatusList","name_":"whatsapp_message_status_list","name-":"whatsapp-message-status-list","NAME":"WHATSAPP_MESSAGE_STATUS_LIST","index$":87}, {"active":true,"entity":"whatsapp_message_status_list","key$":"BasicWhatsappMessageStatusListFlow","kind":"basic","name":"BasicWhatsappMessageStatusListFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"whatsapp_message_status_list_ref01"}}],"index$":0}]}, 'WhatsappMessageStatusList')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let whatsapp_message_status_list_ref01_data = Object.values(setup.data.existing.whatsapp_message_status_list)[0] as any

    // LIST
    const whatsapp_message_status_list_ref01_ent = client.WhatsappMessageStatusList()
    const whatsapp_message_status_list_ref01_match: any = {}

    const whatsapp_message_status_list_ref01_list = (await whatsapp_message_status_list_ref01_ent.list(whatsapp_message_status_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/whatsapp_message_status_list/WhatsappMessageStatusListTestData.json')

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
    ['whatsapp_message_status_list01','whatsapp_message_status_list02','whatsapp_message_status_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_WHATSAPP_MESSAGE_STATUS_LIST_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_WHATSAPP_MESSAGE_STATUS_LIST_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_WHATSAPP_MESSAGE_STATUS_LIST_ENTID']
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
  
