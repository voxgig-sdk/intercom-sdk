

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


describe('CompanyAttachedSegmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.CompanyAttachedSegment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'company_attached_segment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"count":{"a":true,"h":"Count","n":"count","r":false,"sh":"The number of items in the user segment.","t":"`$INTEGER`","key$":"count","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The time the segment was created.","t":"`$INTEGER`","key$":"created_at","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier representing the segment.","t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the segment.","t":"`$STRING`","key$":"name","index$":3},"person_type":{"a":true,"h":"Person Type","n":"person_type","r":false,"sh":"Type of the contact: contact (lead) or user.","t":"`$STRING`","key$":"person_type","index$":4},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of object.","t":"`$STRING`","key$":"type","index$":5},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"sh":"The time the segment was updated.","t":"`$INTEGER`","key$":"updated_at","index$":6}},"id":{"field":"id","name":"id"},"name":"company_attached_segment","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /companies/{company_id}/segments","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"5f4d3c1c-7b1b-4d7d-a97e-6095715c6632","k":"param","n":"id","or":"company_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/companies/{company_id}/segments","q":{"exist":["id","intercom_version"]},"r":{"param":{"company_id":"id"}},"s":[{"lit":"companies"},{"var":"id"},{"lit":"segments"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"company_attached_segment","name__orig":"company_attached_segment","Name":"CompanyAttachedSegment","name_":"company_attached_segment","name-":"company-attached-segment","NAME":"COMPANY_ATTACHED_SEGMENT","index$":20}, {"active":true,"entity":"company_attached_segment","key$":"BasicCompanyAttachedSegmentFlow","kind":"basic","name":"BasicCompanyAttachedSegmentFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"company_id":"company01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"company_attached_segment_ref01"}}],"index$":0}]}, 'CompanyAttachedSegment', {"GET /companies/{company_id}/segments":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"company_id","in":"path","required":true,"description":"The unique identifier for the company which is given by Intercom","example":"5f4d3c1c-7b1b-4d7d-a97e-6095715c6632","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let company_attached_segment_ref01_data = Object.values(setup.data.existing.company_attached_segment)[0] as any

    // LIST
    const company_attached_segment_ref01_ent = client.CompanyAttachedSegment()
    const company_attached_segment_ref01_match: any = {}
    company_attached_segment_ref01_match['company_id'] = setup.idmap['company01']

    const company_attached_segment_ref01_list = (await company_attached_segment_ref01_ent.list(company_attached_segment_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/company_attached_segment/CompanyAttachedSegmentTestData.json')

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
    ['company_attached_segment01','company_attached_segment02','company_attached_segment03','company01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_COMPANY_ATTACHED_SEGMENT_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_COMPANY_ATTACHED_SEGMENT_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_COMPANY_ATTACHED_SEGMENT_ENTID']
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
  
