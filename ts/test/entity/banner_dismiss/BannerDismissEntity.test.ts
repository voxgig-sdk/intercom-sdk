

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


describe('BannerDismissEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.BannerDismiss()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'banner_dismiss.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"dismissed":{"a":true,"h":"Dismissed","n":"dismissed","r":false,"sh":"Whether the banner view is dismissed.","t":"`$BOOLEAN`","key$":"dismissed","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"String representing the object's type.","t":"`$STRING`","key$":"type","index$":2},"view_id":{"a":true,"h":"View Id","n":"view_id","r":false,"sh":"The id of the dismissed banner view.","t":"`$STRING`","key$":"view_id","index$":3}},"id":{"field":"id","name":"id"},"name":"banner_dismiss","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /contacts/{id}/banners/{view_id}/dismiss","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"contact_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"view_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/contacts/{id}/banners/{view_id}/dismiss","q":{"exist":["contact_id","id","intercom_version"]},"r":{"param":{"id":"contact_id","view_id":"id"}},"s":[{"lit":"contacts"},{"var":"contact_id"},{"lit":"banners"},{"var":"id"},{"lit":"dismiss"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.contact"]]},"key$":"banner_dismiss","name__orig":"banner_dismiss","Name":"BannerDismiss","name_":"banner_dismiss","name-":"banner-dismiss","NAME":"BANNER_DISMISS","index$":14}, {"active":true,"entity":"banner_dismiss","key$":"BasicBannerDismissFlow","kind":"basic","name":"BasicBannerDismissFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"banner_dismiss_ref01"},"m":{"contact_id":"contact01","view_id":"view01"},"o":"create","s":[],"v":[],"index$":0}]}, 'BannerDismiss', {"POST /contacts/{id}/banners/{view_id}/dismiss":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"description":"The unique identifier of a contact.","schema":{"type":"string"},"index$":0},{"name":"view_id","in":"path","required":true,"description":"The `view_id` of the banner to dismiss, as returned by the list banners endpoint.","schema":{"type":"string"},"index$":1},{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const banner_dismiss_ref01_ent = client.BannerDismiss()
    let banner_dismiss_ref01_data = setup.data.new.banner_dismiss['banner_dismiss_ref01']
    banner_dismiss_ref01_data['contact_id'] = setup.idmap['contact01']
    banner_dismiss_ref01_data['view_id'] = setup.idmap['view01']

    banner_dismiss_ref01_data = (await banner_dismiss_ref01_ent.create(banner_dismiss_ref01_data)).data()
    assert(null != banner_dismiss_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/banner_dismiss/BannerDismissTestData.json')

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
    ['banner_dismiss01','banner_dismiss02','banner_dismiss03','contact01','contact02','contact03','view01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_BANNER_DISMISS_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_BANNER_DISMISS_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_BANNER_DISMISS_ENTID']
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
  
