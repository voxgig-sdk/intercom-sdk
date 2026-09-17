

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


describe('WhatsappMessageStatusEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.WhatsappMessageStatus()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'whatsapp_message_status.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"details","req":false,"short":"Detailed error information","type":"`$STRING`","index$":0},{"active":true,"name":"message","req":false,"short":"Error message","type":"`$STRING`","index$":1}],"name":"whatsapp_message_status","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"message_id","orig":"message_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /messages/whatsapp/status","json":"{\"operationId\":\"RetrieveWhatsAppMessageStatus\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The WhatsApp message ID to check status for\",\"in\":\"query\",\"name\":\"message_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Failed message with error\":{\"value\":{\"conversation_id\":\"123456789\",\"created_at\":1734537980,\"error\":{\"details\":\"Recipient phone number not on WhatsApp\",\"message\":\"Message delivery failed\"},\"message_id\":\"wamid_abc123\",\"status\":\"failed\",\"template_name\":\"appointment_reminder\",\"type\":\"broadcast_outbound\",\"updated_at\":1734538000}},\"Successful response\":{\"value\":{\"conversation_id\":\"123456789\",\"created_at\":1734537980,\"message_id\":\"wamid_abc123\",\"status\":\"delivered\",\"template_name\":\"appointment_reminder\",\"type\":\"broadcast_outbound\",\"updated_at\":1734538000}}},\"schema\":{\"description\":\"The delivery status of a specific WhatsApp message.\",\"properties\":{\"conversation_id\":{\"description\":\"ID of the conversation\",\"example\":\"123456789\",\"type\":\"string\"},\"created_at\":{\"description\":\"Creation timestamp\",\"example\":1734537980,\"type\":\"integer\"},\"error\":{\"description\":\"Error details, present only when status is \\\"failed\\\"\",\"nullable\":true,\"properties\":{\"details\":{\"description\":\"Detailed error information\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"},\"message_id\":{\"description\":\"The WhatsApp message ID\",\"example\":\"wamid_abc123\",\"type\":\"string\"},\"status\":{\"description\":\"Current delivery status of the message\",\"enum\":[\"sent\",\"delivered\",\"read\",\"failed\"],\"example\":\"delivered\",\"type\":\"string\"},\"template_name\":{\"description\":\"Name of the WhatsApp template used\",\"example\":\"appointment_reminder\",\"type\":\"string\"},\"type\":{\"description\":\"Event type\",\"example\":\"broadcast_outbound\",\"type\":\"string\"},\"updated_at\":{\"description\":\"Last update timestamp\",\"example\":1734538000,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"missing message_id\":{\"value\":{\"message\":\"message_id is required\",\"request_id\":\"a1b2c3d4-e5f6-7890-abcd-ef1234567890\",\"type\":\"error\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Bad request - missing required parameters\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"8b2e4c6f-1234-5678-9abc-def012345678\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Message not found\":{\"value\":{\"errors\":[{\"code\":\"whatsapp_message_not_found\",\"message\":\"Whatsapp message not found\"}],\"request_id\":\"c4d5e6f7-8901-2345-6789-abcdef012345\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"WhatsApp message not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/messages/whatsapp/status","segments":[{"lit":"messages"},{"lit":"whatsapp"},{"lit":"status"}],"select":{"exist":["intercom_version","message_id"]},"transform":{"req":"`reqdata`","res":"`body.error`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"whatsapp_message_status","name__orig":"whatsapp_message_status","Name":"WhatsappMessageStatus","name_":"whatsapp_message_status","name-":"whatsapp-message-status","NAME":"WHATSAPP_MESSAGE_STATUS","index$":86}, {"active":true,"entity":"whatsapp_message_status","key$":"BasicWhatsappMessageStatusFlow","kind":"basic","name":"BasicWhatsappMessageStatusFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"whatsapp_message_status_ref01","srcdatavar":"whatsapp_message_status_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-whatsapp_message_status_ref01"}}],"index$":0}]}, 'WhatsappMessageStatus')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let whatsapp_message_status_ref01_data = Object.values(setup.data.existing.whatsapp_message_status)[0] as any

    // LOAD
    const whatsapp_message_status_ref01_ent = client.WhatsappMessageStatus()
    const whatsapp_message_status_ref01_match_dt0: any = {}
    const whatsapp_message_status_ref01_data_dt0 = (await whatsapp_message_status_ref01_ent.load(whatsapp_message_status_ref01_match_dt0)).data()
    assert(null != whatsapp_message_status_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/whatsapp_message_status/WhatsappMessageStatusTestData.json')

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
    ['whatsapp_message_status01','whatsapp_message_status02','whatsapp_message_status03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_WHATSAPP_MESSAGE_STATUS_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_WHATSAPP_MESSAGE_STATUS_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_WHATSAPP_MESSAGE_STATUS_ENTID']
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
  
