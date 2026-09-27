

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('MessageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Message()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'message.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"bcc":{"a":true,"h":"Bcc","n":"bcc","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"bcc","index$":0},"body":{"a":true,"h":"Body","n":"body","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The message body, which may contain HTML.","t":"`$STRING`","key$":"body","index$":1},"cc":{"a":true,"h":"Cc","n":"cc","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"cc","index$":2},"conversation_id":{"a":true,"h":"Conversation Id","n":"conversation_id","r":false,"sh":"The associated conversation_id","t":"`$STRING`","key$":"conversation_id","index$":3},"create_conversation_without_contact_reply":{"a":true,"h":"Create Conversation Without Contact Reply","n":"create_conversation_without_contact_reply","r":false,"sh":"Whether a conversation should be opened in the inbox for the message without the contact replying.","t":"`$BOOLEAN`","key$":"create_conversation_without_contact_reply","index$":4},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","op":{"create":{"req":false,"type":"`$INTEGER`"}},"r":true,"sh":"The time the conversation was created.","t":"`$INTEGER`","key$":"created_at","index$":5},"from":{"a":true,"h":"From","n":"from","r":true,"sh":"The sender of the message.","t":"`$OBJECT`","key$":"from","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The id representing the message.","t":"`$STRING`","key$":"id","index$":7},"message_type":{"a":true,"h":"Message Type","n":"message_type","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The type of message that was sent.","t":"`$STRING`","key$":"message_type","index$":8},"subject":{"a":true,"h":"Subject","n":"subject","r":false,"sh":"The subject of the message.","t":"`$STRING`","key$":"subject","index$":9},"template":{"a":true,"h":"Template","n":"template","r":false,"sh":"The style of the outgoing message.","t":"`$STRING`","key$":"template","index$":10},"to":{"a":true,"h":"To","n":"to","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"to","index$":11},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of the message","t":"`$STRING`","key$":"type","index$":12}},"id":{"field":"id","name":"id"},"name":"message","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /messages","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/messages","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"messages"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"message","name__orig":"message","Name":"Message","name_":"message","name-":"message","NAME":"MESSAGE","index$":61}, {"active":true,"entity":"message","key$":"BasicMessageFlow","kind":"basic","name":"BasicMessageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"message_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Message', {"POST /messages":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"You can create a message","type":"object","title":"Create Message Request Payload","nullable":true,"properties":{"message_type":{"type":"string","description":"The kind of message being created. Values: `in_app`, `email` or `whatsapp`.","enum":["in_app","email","whatsapp"],"example":"in_app","key$":"message_type"},"subject":{"type":"string","description":"The title of the email.","example":"Thanks for everything","key$":"subject"},"body":{"type":"string","description":"The content of the message. HTML and plaintext are supported.","example":"Hello there","key$":"body"},"template":{"type":"string","description":"The style of the outgoing message. Possible values `plain` or `personal`.","example":"plain","key$":"template"},"from":{"type":"object","description":"The sender of the message. If not provided, the default sender will be used.","properties":{"type":{"type":"string","description":"Always `admin`.","enum":["admin"],"example":"admin"},"id":{"type":"integer","description":"The identifier for the admin which is given by Intercom.","example":394051}},"required":["type","id"],"key$":"from"},"to":{"oneOf":[{"type":"object","title":"Recipient","description":"A recipient of a message","properties":{"type":{},"id":{}},"required":["type","id"],"x-ref":"#/components/schemas/recipient"},{"type":"array","description":"The recipients of the message.","items":{"type":"object","title":"Recipient","description":"A recipient of a message","properties":{},"required":[],"x-ref":"#/components/schemas/recipient"},"example":[{},{}]}],"key$":"to"},"cc":{"oneOf":[{"type":"object","title":"Recipient","description":"A recipient of a message","properties":{"type":{},"id":{}},"required":["type","id"],"x-ref":"#/components/schemas/recipient"},{"type":"array","description":"The CC recipients of the message.","items":{"type":"object","title":"Recipient","description":"A recipient of a message","properties":{},"required":[],"x-ref":"#/components/schemas/recipient"},"example":[{}]}],"key$":"cc"},"bcc":{"oneOf":[{"type":"object","title":"Recipient","description":"A recipient of a message","properties":{"type":{},"id":{}},"required":["type","id"],"x-ref":"#/components/schemas/recipient"},{"type":"array","description":"The BCC recipients of the message.","items":{"type":"object","title":"Recipient","description":"A recipient of a message","properties":{},"required":[],"x-ref":"#/components/schemas/recipient"},"example":[{}]}],"key$":"bcc"},"created_at":{"type":"integer","description":"The time the message was created. If not provided, the current time will be used.","example":1590000000,"key$":"created_at"},"create_conversation_without_contact_reply":{"type":"boolean","description":"Whether a conversation should be opened in the inbox for the message without the contact replying. Defaults to false if not provided.","default":false,"example":true,"key$":"create_conversation_without_contact_reply"}},"anyOf":[{"title":"message_type: `email`.","required":["message_type","subject","body","template","from","to"]},{"title":"message_type: `inapp`.","required":["message_type","body","from","to"]},{"title":"message_type: `whatsapp`.","required":["message_type","template","components","from","to"]}],"x-ref":"#/components/schemas/create_message_request","index$":1},"examples":{"user_message_created":{"summary":"user message created","value":{"from":{"type":"user","id":"6762f2341bb69f9f2193bc17"},"body":"heyy","referer":"https://twitter.com/bob"}},"lead_message_created":{"summary":"lead message created","value":{"from":{"type":"lead","id":"6762f2371bb69f9f2193bc18"},"body":"heyy","referer":"https://twitter.com/bob"}},"admin_message_created":{"summary":"admin message created","value":{"from":{"type":"admin","id":"991267816"},"to":[{"type":"user","id":"6762f2391bb69f9f2193bc19"},{"type":"lead","id":"6762f23c1bb69f9f2193bc1b"},{"type":"user","id":"6762f23d1bb69f9f2193bc1c"}],"cc":[{"type":"user","id":"6762f23e1bb69f9f2193bc1d"},{"type":"user","id":"6762f23f1bb69f9f2193bc1e"}],"bcc":[{"type":"user","id":"6762f23e1bb69f9f2193bc2f"}],"message_type":"conversation","body":"heyy"}},"admin_whatsapp_message_created":{"summary":"admin whatsapp message created","value":{"from":{"type":"admin","id":"991267817"},"to":{"phone":5547999998888,"name":"John Doe"},"message_type":"whatsapp","components":[{"type":"BODY","parameters":[{}]}],"template":"keep_live","locale":"en"}},"no_body_supplied_for_message":{"summary":"No body supplied for message","value":{"from":{"type":"admin","id":"991267818"},"to":{"type":"user","id":"6762f23b1bb69f9f2193bc1a"},"message_type":"inapp","body":null,"subject":"heyy"}},"no_subject_supplied_for_email_message":{"summary":"No subject supplied for email message","value":{"from":{"type":"admin","id":"991267819"},"to":{"type":"user","user_id":"70"},"message_type":"email","body":"hey there"}},"no_body_supplied_for_email_message":{"summary":"No body supplied for email message","value":{"from":{"type":"admin","id":"991267820"},"to":{"type":"user","id":"6762f23d1bb69f9f2193bc1c"},"message_type":"email","body":null,"subject":"heyy"}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const message_ref01_ent = client.Message()
    let message_ref01_data = setup.data.new.message['message_ref01']

    message_ref01_data = (await message_ref01_ent.create(message_ref01_data)).data()
    assert(null != message_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/message/MessageTestData.json')

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
    ['message01','message02','message03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_MESSAGE_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_MESSAGE_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_MESSAGE_ENTID']
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
  
