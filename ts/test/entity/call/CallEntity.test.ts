

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


describe('CallEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Call()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'call.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"admin_id":{"a":true,"h":"Admin Id","n":"admin_id","r":false,"sh":"The id of the admin associated with the call, if any.","t":"`$STRING`","key$":"admin_id","index$":0},"answered_at":{"a":true,"h":"Answered At","n":"answered_at","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"answered_at","index$":1},"call_type":{"a":true,"h":"Call Type","n":"call_type","r":false,"sh":"The type of call.","t":"`$STRING`","key$":"call_type","index$":2},"contact_id":{"a":true,"h":"Contact Id","n":"contact_id","r":false,"sh":"The id of the contact associated with the call, if any.","t":"`$STRING`","key$":"contact_id","index$":3},"conversation_id":{"a":true,"h":"Conversation Id","n":"conversation_id","r":false,"sh":"The id of the conversation associated with the call, if any.","t":"`$STRING`","key$":"conversation_id","index$":4},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"created_at","index$":5},"direction":{"a":true,"h":"Direction","n":"direction","r":false,"sh":"The direction of the call.","t":"`$STRING`","key$":"direction","index$":6},"ended_at":{"a":true,"h":"Ended At","n":"ended_at","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"ended_at","index$":7},"ended_reason":{"a":true,"h":"Ended Reason","n":"ended_reason","r":false,"sh":"The reason for the call end, if applicable.","t":"`$STRING`","key$":"ended_reason","index$":8},"fin_recording_url":{"a":true,"fo":"uri","h":"Fin Recording Url","n":"fin_recording_url","r":false,"sh":"API URL to the AI Agent (Fin) call recording if available.","t":"`$STRING`","key$":"fin_recording_url","index$":9},"fin_transcription_url":{"a":true,"fo":"uri","h":"Fin Transcription Url","n":"fin_transcription_url","r":false,"sh":"API URL to the AI Agent (Fin) call transcript if available.","t":"`$STRING`","key$":"fin_transcription_url","index$":10},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The id of the call.","t":"`$STRING`","key$":"id","index$":11},"initiated_at":{"a":true,"h":"Initiated At","n":"initiated_at","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"initiated_at","index$":12},"phone":{"a":true,"h":"Phone","n":"phone","r":false,"sh":"The phone number involved in the call, in E.164 format.","t":"`$STRING`","key$":"phone","index$":13},"recording_url":{"a":true,"fo":"uri","h":"Recording Url","n":"recording_url","r":false,"sh":"API URL to download or redirect to the call recording if available.","t":"`$STRING`","key$":"recording_url","index$":14},"state":{"a":true,"h":"State","n":"state","r":false,"sh":"The current state of the call.","t":"`$STRING`","key$":"state","index$":15},"transcription_url":{"a":true,"fo":"uri","h":"Transcription Url","n":"transcription_url","r":false,"sh":"API URL to download or redirect to the call transcript if available.","t":"`$STRING`","key$":"transcription_url","index$":16},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"String representing the object's type.","t":"`$STRING`","key$":"type","index$":17},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"updated_at","index$":18}},"id":{"field":"id","name":"id"},"name":"call","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /calls/search","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/calls/search","q":{"$action":"search","exist":["intercom_version"]},"r":{},"s":[{"lit":"calls"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /calls","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":25,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/calls","q":{"exist":["intercom_version","page","per_page"]},"r":{},"s":[{"lit":"calls"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /calls/{call_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"call_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/calls/{call_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"call_id":"id"}},"s":[{"lit":"calls"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /calls/{call_id}/recording","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"call_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/calls/{call_id}/recording","q":{"$action":"recording","exist":["id","intercom_version"]},"r":{"param":{"call_id":"id"}},"s":[{"lit":"calls"},{"var":"id"},{"lit":"recording"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /calls/{call_id}/transcript","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"call_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/calls/{call_id}/transcript","q":{"$action":"transcript","exist":["id","intercom_version"]},"r":{"param":{"call_id":"id"}},"s":[{"lit":"calls"},{"var":"id"},{"lit":"transcript"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /fin_voice/phone_number/{phone_number}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"phone_number","or":"phone_number","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/fin_voice/phone_number/{phone_number}","q":{"exist":["phone_number"]},"r":{},"s":[{"lit":"fin_voice"},{"lit":"phone_number"},{"var":"phone_number"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"call","name__orig":"call","Name":"Call","name_":"call","name-":"call","NAME":"CALL","index$":16}, {"active":true,"entity":"call","key$":"BasicCallFlow","kind":"basic","name":"BasicCallFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"call_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"call_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"call_ref01","srcdatavar":"call_ref01_data","suffix":"_dt0"},"m":{"id":"call01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-call_ref01"}}],"index$":2}]}, 'Call', {"POST /calls/search":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["conversation_ids"],"properties":{"conversation_ids":{"type":"array","description":"A list of conversation ids to fetch calls for. Maximum 20.","minItems":1,"maxItems":20,"items":{"type":"string"}}}},"examples":{"example":{"value":{"conversation_ids":["64619700005694","64619700005695"]}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /calls":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"page","in":"query","required":false,"description":"The page of results to fetch. Defaults to first page","example":1,"schema":{"type":"integer"},"index$":1},{"name":"per_page","in":"query","required":false,"description":"How many results to display per page. Defaults to 25. Max 25.","example":25,"schema":{"type":"integer"},"index$":2}]},"GET /calls/{call_id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"call_id","in":"path","required":true,"description":"The id of the call to retrieve","schema":{"type":"string"},"index$":1}]},"GET /calls/{call_id}/recording":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"call_id","in":"path","required":true,"description":"The id of the call","schema":{"type":"string"},"index$":1}]},"GET /calls/{call_id}/transcript":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"call_id","in":"path","required":true,"description":"The id of the call","schema":{"type":"string"},"index$":1}]},"GET /fin_voice/phone_number/{phone_number}":{"protocol":"http","parameters":[{"name":"phone_number","in":"path","required":true,"description":"Phone number in E.164 format","schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const call_ref01_ent = client.Call()
    let call_ref01_data = setup.data.new.call['call_ref01']

    call_ref01_data = (await call_ref01_ent.create(call_ref01_data)).data()
    assert(null != call_ref01_data.id)


    // LIST
    const call_ref01_match: any = {}

    const call_ref01_list = (await call_ref01_ent.list(call_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(call_ref01_list, { id: call_ref01_data.id })))


    // LOAD
    const call_ref01_match_dt0: any = {}
    call_ref01_match_dt0.id = call_ref01_data.id
    const call_ref01_data_dt0 = (await call_ref01_ent.load(call_ref01_match_dt0)).data()
    assert(call_ref01_data_dt0.id === call_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/call/CallTestData.json')

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
    ['call01','call02','call03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_CALL_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_CALL_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_CALL_ENTID']
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
  
