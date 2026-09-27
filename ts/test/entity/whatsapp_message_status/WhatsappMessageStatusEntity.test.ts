

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"details":{"a":true,"h":"Details","n":"details","r":false,"sh":"Detailed error information","t":"`$STRING`","key$":"details","index$":0},"message":{"a":true,"h":"Message","n":"message","r":false,"sh":"Error message","t":"`$STRING`","key$":"message","index$":1}},"name":"whatsapp_message_status","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /messages/whatsapp/status","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"message_id","or":"message_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/messages/whatsapp/status","q":{"exist":["intercom_version","message_id"]},"r":{},"s":[{"lit":"messages"},{"lit":"whatsapp"},{"lit":"status"}],"t":{"req":"`reqdata`","res":"`body.error`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"whatsapp_message_status","name__orig":"whatsapp_message_status","Name":"WhatsappMessageStatus","name_":"whatsapp_message_status","name-":"whatsapp-message-status","NAME":"WHATSAPP_MESSAGE_STATUS","index$":86}, {"active":true,"entity":"whatsapp_message_status","key$":"BasicWhatsappMessageStatusFlow","kind":"basic","name":"BasicWhatsappMessageStatusFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"whatsapp_message_status_ref01","srcdatavar":"whatsapp_message_status_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-whatsapp_message_status_ref01"}}],"index$":0}]}, 'WhatsappMessageStatus', {"GET /messages/whatsapp/status":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"message_id","in":"query","required":true,"description":"The WhatsApp message ID to check status for","schema":{"type":"string"},"index$":1}]}})
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
  
