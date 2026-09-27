

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


describe('ContactSegmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.ContactSegment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'contact_segment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"count":{"a":true,"h":"Count","n":"count","r":false,"sh":"The number of items in the user segment.","t":"`$INTEGER`","key$":"count","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The time the segment was created.","t":"`$INTEGER`","key$":"created_at","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier representing the segment.","t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the segment.","t":"`$STRING`","key$":"name","index$":3},"person_type":{"a":true,"h":"Person Type","n":"person_type","r":false,"sh":"Type of the contact: contact (lead) or user.","t":"`$STRING`","key$":"person_type","index$":4},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of object.","t":"`$STRING`","key$":"type","index$":5},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"sh":"The time the segment was updated.","t":"`$INTEGER`","key$":"updated_at","index$":6}},"id":{"field":"id","name":"id"},"name":"contact_segment","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /contacts/{contact_id}/segments","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"63a07ddf05a32042dffac965","k":"param","n":"id","or":"contact_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/contacts/{contact_id}/segments","q":{"exist":["id","intercom_version"]},"r":{"param":{"contact_id":"id"}},"s":[{"lit":"contacts"},{"var":"id"},{"lit":"segments"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"contact_segment","name__orig":"contact_segment","Name":"ContactSegment","name_":"contact_segment","name-":"contact-segment","NAME":"CONTACT_SEGMENT","index$":26}, {"active":true,"entity":"contact_segment","key$":"BasicContactSegmentFlow","kind":"basic","name":"BasicContactSegmentFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"contact_id":"contact01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"contact_segment_ref01"}}],"index$":0}]}, 'ContactSegment', {"GET /contacts/{contact_id}/segments":{"protocol":"http","parameters":[{"name":"contact_id","in":"path","description":"The unique identifier for the contact which is given by Intercom","example":"63a07ddf05a32042dffac965","required":true,"schema":{"type":"string"},"index$":0},{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let contact_segment_ref01_data = Object.values(setup.data.existing.contact_segment)[0] as any

    // LIST
    const contact_segment_ref01_ent = client.ContactSegment()
    const contact_segment_ref01_match: any = {}
    contact_segment_ref01_match['contact_id'] = setup.idmap['contact01']

    const contact_segment_ref01_list = (await contact_segment_ref01_ent.list(contact_segment_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/contact_segment/ContactSegmentTestData.json')

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
    ['contact_segment01','contact_segment02','contact_segment03','contact01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_CONTACT_SEGMENT_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_CONTACT_SEGMENT_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_CONTACT_SEGMENT_ENTID']
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
  
