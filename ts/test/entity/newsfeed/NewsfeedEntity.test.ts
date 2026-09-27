

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


describe('NewsfeedEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Newsfeed()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'newsfeed.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"timestamp","h":"Created At","n":"created_at","r":false,"sh":"Timestamp for when the newsfeed was created.","t":"`$INTEGER`","key$":"created_at","index$":0},"data":{"a":true,"h":"Data","n":"data","r":false,"sh":"An array of Objects","t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":1},"key$":"data","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier for the newsfeed which is given by Intercom.","t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the newsfeed.","t":"`$STRING`","key$":"name","index$":3},"pages":{"a":true,"h":"Pages","n":"pages","r":false,"sh":"Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.","t":"`$OBJECT`","key$":"pages","index$":4},"total_count":{"a":true,"h":"Total Count","n":"total_count","r":false,"sh":"A count of the total number of objects.","t":"`$INTEGER`","key$":"total_count","index$":5},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of object.","t":"`$STRING`","key$":"type","index$":6},"updated_at":{"a":true,"fo":"timestamp","h":"Updated At","n":"updated_at","r":false,"sh":"Timestamp for when the newsfeed was last updated.","t":"`$INTEGER`","key$":"updated_at","index$":7}},"id":{"field":"id","name":"id"},"name":"newsfeed","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /news/newsfeeds","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/news/newsfeeds","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"news"},{"lit":"newsfeeds"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /news/newsfeeds/{newsfeed_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"id","or":"newsfeed_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/news/newsfeeds/{newsfeed_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"newsfeed_id":"id"}},"s":[{"lit":"news"},{"lit":"newsfeeds"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"newsfeed","name__orig":"newsfeed","Name":"Newsfeed","name_":"newsfeed","name-":"newsfeed","NAME":"NEWSFEED","index$":63}, {"active":true,"entity":"newsfeed","key$":"BasicNewsfeedFlow","kind":"basic","name":"BasicNewsfeedFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"newsfeed_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"newsfeed_ref01","srcdatavar":"newsfeed_ref01_data","suffix":"_dt0"},"m":{"id":"newsfeed01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-newsfeed_ref01"}}],"index$":1}]}, 'Newsfeed', {"GET /news/newsfeeds":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /news/newsfeeds/{newsfeed_id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"newsfeed_id","in":"path","required":true,"description":"The unique identifier for the news feed item which is given by Intercom.","example":"123","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let newsfeed_ref01_data = Object.values(setup.data.existing.newsfeed)[0] as any

    // LIST
    const newsfeed_ref01_ent = client.Newsfeed()
    const newsfeed_ref01_match: any = {}

    const newsfeed_ref01_list = (await newsfeed_ref01_ent.list(newsfeed_ref01_match)).map((e: any) => e.data())


    // LOAD
    const newsfeed_ref01_match_dt0: any = {}
    newsfeed_ref01_match_dt0.id = newsfeed_ref01_data.id
    const newsfeed_ref01_data_dt0 = (await newsfeed_ref01_ent.load(newsfeed_ref01_match_dt0)).data()
    assert(newsfeed_ref01_data_dt0.id === newsfeed_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/newsfeed/NewsfeedTestData.json')

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
    ['newsfeed01','newsfeed02','newsfeed03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_NEWSFEED_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_NEWSFEED_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_NEWSFEED_ENTID']
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
  
