

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


describe('SubscriptionTypeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.SubscriptionType()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'subscription_type.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"consent_type":{"a":true,"h":"Consent Type","n":"consent_type","r":false,"sh":"Describes the type of consent.","t":"`$STRING`","key$":"consent_type","index$":0},"content_types":{"a":true,"h":"Content Types","n":"content_types","r":false,"sh":"The message types that this subscription supports - can contain `email` or `sms_message`.","t":"`$ARRAY`","key$":"content_types","index$":1},"default_translation":{"a":true,"h":"Default Translation","n":"default_translation","r":false,"sh":"A translation object contains the localised details of a subscription type.","t":"`$OBJECT`","key$":"default_translation","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier representing the subscription type.","t":"`$STRING`","key$":"id","index$":3},"state":{"a":true,"h":"State","n":"state","r":false,"sh":"The state of the subscription type.","t":"`$STRING`","key$":"state","index$":4},"translations":{"a":true,"h":"Translations","n":"translations","r":false,"sh":"An array of translations objects with the localised version of the subscription type in each available locale within your translation settings.","t":"`$ARRAY`","key$":"translations","index$":5},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of the object - subscription","t":"`$STRING`","key$":"type","index$":6}},"id":{"field":"id","name":"id"},"name":"subscription_type","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /subscription_types","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/subscription_types","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"subscription_types"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"subscription_type","name__orig":"subscription_type","Name":"SubscriptionType","name_":"subscription_type","name-":"subscription-type","NAME":"SUBSCRIPTION_TYPE","index$":75}, {"active":true,"entity":"subscription_type","key$":"BasicSubscriptionTypeFlow","kind":"basic","name":"BasicSubscriptionTypeFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"subscription_type_ref01"}}],"index$":0}]}, 'SubscriptionType', {"GET /subscription_types":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let subscription_type_ref01_data = Object.values(setup.data.existing.subscription_type)[0] as any

    // LIST
    const subscription_type_ref01_ent = client.SubscriptionType()
    const subscription_type_ref01_match: any = {}

    const subscription_type_ref01_list = (await subscription_type_ref01_ent.list(subscription_type_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/subscription_type/SubscriptionTypeTestData.json')

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
    ['subscription_type01','subscription_type02','subscription_type03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_SUBSCRIPTION_TYPE_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_SUBSCRIPTION_TYPE_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_SUBSCRIPTION_TYPE_ENTID']
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
  
