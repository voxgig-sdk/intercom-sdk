

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"conversation_id":{"a":true,"h":"Conversation Id","n":"conversation_id","r":true,"sh":"ID of the conversation","t":"`$STRING`","key$":"conversation_id","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"sh":"Creation timestamp","t":"`$INTEGER`","key$":"created_at","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Event ID","t":"`$STRING`","key$":"id","index$":2},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of the message","t":"`$STRING`","key$":"status","index$":3},"template_name":{"a":true,"h":"Template Name","n":"template_name","r":false,"sh":"Name of the WhatsApp template used","t":"`$STRING`","key$":"template_name","index$":4},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Event type","t":"`$STRING`","key$":"type","index$":5},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":true,"sh":"Last update timestamp","t":"`$INTEGER`","key$":"updated_at","index$":6},"whatsapp_message_id":{"a":true,"h":"Whatsapp Message Id","n":"whatsapp_message_id","r":true,"sh":"WhatsApp's message identifier","t":"`$STRING`","key$":"whatsapp_message_id","index$":7}},"id":{"field":"id","name":"id"},"name":"whatsapp_message_status_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /messages/status","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"ruleset_id","or":"ruleset_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/messages/status","q":{"exist":["intercom_version","per_page","ruleset_id","starting_after"]},"r":{},"s":[{"lit":"messages"},{"lit":"status"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"whatsapp_message_status_list","name__orig":"whatsapp_message_status_list","Name":"WhatsappMessageStatusList","name_":"whatsapp_message_status_list","name-":"whatsapp-message-status-list","NAME":"WHATSAPP_MESSAGE_STATUS_LIST","index$":87}, {"active":true,"entity":"whatsapp_message_status_list","key$":"BasicWhatsappMessageStatusListFlow","kind":"basic","name":"BasicWhatsappMessageStatusListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"whatsapp_message_status_list_ref01"}}],"index$":0}]}, 'WhatsappMessageStatusList', {"GET /messages/status":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"ruleset_id","in":"query","required":true,"description":"The unique identifier for the set of messages to check status for","schema":{"type":"string"},"index$":1},{"name":"per_page","in":"query","required":false,"description":"Number of results per page (default 50, max 100)","schema":{"type":"integer","default":50,"maximum":100},"index$":2},{"name":"starting_after","in":"query","required":false,"description":"Cursor for pagination, used to fetch the next page of results","schema":{"type":"string"},"index$":3}]}})
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
  
