

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


describe('BrandEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Brand()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'brand.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"Unix timestamp of brand creation","t":"`$INTEGER`","key$":"created_at","index$":0},"default_address_settings_id":{"a":true,"h":"Default Address Settings Id","n":"default_address_settings_id","r":false,"sh":"Default email settings ID for this brand","t":"`$STRING`","key$":"default_address_settings_id","index$":1},"help_center_id":{"a":true,"h":"Help Center Id","n":"help_center_id","r":false,"sh":"Associated help center identifier","t":"`$STRING`","key$":"help_center_id","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique brand identifier.","t":"`$STRING`","key$":"id","index$":3},"is_default":{"a":true,"h":"Is Default","n":"is_default","r":false,"sh":"Whether this is the workspace's default brand","t":"`$BOOLEAN`","key$":"is_default","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Display name of the brand","t":"`$STRING`","key$":"name","index$":5},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of object","t":"`$STRING`","key$":"type","index$":6},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"sh":"Unix timestamp of last modification","t":"`$INTEGER`","key$":"updated_at","index$":7}},"id":{"field":"id","name":"id"},"name":"brand","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /brands","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/brands","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"brands"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /brands/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/brands/{id}","q":{"exist":["id","intercom_version"]},"r":{},"s":[{"lit":"brands"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"brand","name__orig":"brand","Name":"Brand","name_":"brand","name-":"brand","NAME":"BRAND","index$":15}, {"active":true,"entity":"brand","key$":"BasicBrandFlow","kind":"basic","name":"BasicBrandFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"brand_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"brand_ref01","srcdatavar":"brand_ref01_data","suffix":"_dt0"},"m":{"id":"brand01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-brand_ref01"}}],"index$":1}]}, 'Brand', {"GET /brands":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /brands/{id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"id","in":"path","required":true,"description":"The unique identifier of the brand","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let brand_ref01_data = Object.values(setup.data.existing.brand)[0] as any

    // LIST
    const brand_ref01_ent = client.Brand()
    const brand_ref01_match: any = {}

    const brand_ref01_list = (await brand_ref01_ent.list(brand_ref01_match)).map((e: any) => e.data())


    // LOAD
    const brand_ref01_match_dt0: any = {}
    brand_ref01_match_dt0.id = brand_ref01_data.id
    const brand_ref01_data_dt0 = (await brand_ref01_ent.load(brand_ref01_match_dt0)).data()
    assert(brand_ref01_data_dt0.id === brand_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/brand/BrandTestData.json')

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
    ['brand01','brand02','brand03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_BRAND_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_BRAND_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_BRAND_ENTID']
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
  
