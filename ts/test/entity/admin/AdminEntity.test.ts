

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


describe('AdminEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Admin()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"avatar":{"a":true,"fo":"uri","h":"Avatar","n":"avatar","r":false,"sh":"Image for the associated team or teammate","t":"`$STRING`","key$":"avatar","index$":0},"away_mode_enabled":{"a":true,"h":"Away Mode Enabled","n":"away_mode_enabled","r":false,"sh":"Identifies if this admin is currently set in away mode.","t":"`$BOOLEAN`","key$":"away_mode_enabled","index$":1},"away_mode_reassign":{"a":true,"h":"Away Mode Reassign","n":"away_mode_reassign","r":false,"sh":"Identifies if this admin is set to automatically reassign new conversations to the apps default inbox.","t":"`$BOOLEAN`","key$":"away_mode_reassign","index$":2},"away_status_reason_id":{"a":true,"h":"Away Status Reason Id","n":"away_status_reason_id","r":false,"sh":"The unique identifier of the away status reason","t":"`$INTEGER`","key$":"away_status_reason_id","index$":3},"email":{"a":true,"h":"Email","n":"email","r":false,"sh":"The email of the admin.","t":"`$STRING`","key$":"email","index$":4},"has_inbox_seat":{"a":true,"h":"Has Inbox Seat","n":"has_inbox_seat","r":false,"sh":"Identifies if this admin has a paid inbox seat to restrict/allow features that require them.","t":"`$BOOLEAN`","key$":"has_inbox_seat","index$":5},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The id representing the admin.","t":"`$STRING`","key$":"id","index$":6},"job_title":{"a":true,"h":"Job Title","n":"job_title","r":false,"sh":"The job title of the admin.","t":"`$STRING`","key$":"job_title","index$":7},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the admin.","t":"`$STRING`","key$":"name","index$":8},"role":{"a":true,"h":"Role","n":"role","r":false,"sh":"The role assigned to this admin.","t":"`$OBJECT`","key$":"role","index$":9},"team_ids":{"a":true,"h":"Team Ids","n":"team_ids","r":false,"sh":"This object represents the avatar associated with the admin.","t":"`$ARRAY`","key$":"team_ids","index$":10},"team_priority_level":{"a":true,"h":"Team Priority Level","n":"team_priority_level","r":false,"sh":"Admin priority levels for teams","t":"`$OBJECT`","key$":"team_priority_level","index$":11},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"String representing the object's type.","t":"`$STRING`","key$":"type","index$":12}},"id":{"field":"id","name":"id"},"name":"admin","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /admins","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":true,"k":"query","n":"display_avatar","or":"display_avatar","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"GET","o":"/admins","q":{"exist":["display_avatar","intercom_version"]},"r":{},"s":[{"lit":"admins"}],"t":{"req":"`reqdata`","res":"`body.admins`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /admins/{admin_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":123,"k":"param","n":"id","or":"admin_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/admins/{admin_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"admin_id":"id"}},"s":[{"lit":"admins"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /admins/{admin_id}/away","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"admin_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PUT","o":"/admins/{admin_id}/away","q":{"$action":"away","exist":["id","intercom_version"]},"r":{"param":{"admin_id":"id"}},"s":[{"lit":"admins"},{"var":"id"},{"lit":"away"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"admin","name__orig":"admin","Name":"Admin","name_":"admin","name-":"admin","NAME":"ADMIN","index$":3}, {"active":true,"entity":"admin","key$":"BasicAdminFlow","kind":"basic","name":"BasicAdminFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"admin_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"admin_ref01","srcdatavar":"admin_ref01_data","suffix":"_up0","textfield":"avatar"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-admin_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"admin_ref01","srcdatavar":"admin_ref01_data","suffix":"_dt0"},"m":{"id":"admin01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-admin_ref01"}}],"index$":2}]}, 'Admin', {"GET /admins":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"display_avatar","in":"query","required":false,"description":"If set to true, the response will include the admin's avatar object containing the image URL. Defaults to false.","example":true,"schema":{"type":"boolean"},"index$":1}]},"GET /admins/{admin_id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"admin_id","in":"path","required":true,"description":"The unique identifier of a given admin","example":123,"schema":{"type":"integer"},"index$":1}]},"PUT /admins/{admin_id}/away":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["away_mode_enabled","away_mode_reassign"],"properties":{"away_mode_enabled":{"type":"boolean","description":"Set to \"true\" to change the status of the admin to away.","example":true,"default":true},"away_mode_reassign":{"type":"boolean","description":"Set to \"true\" to assign any new conversation replies to your default inbox.","example":false,"default":false},"away_status_reason_id":{"type":"integer","description":"The unique identifier of the away status reason","example":12345}}},"examples":{"successful_response":{"summary":"Successful response","value":{"away_mode_enabled":true,"away_mode_reassign":true,"away_status_reason_id":12345}},"admin_not_found":{"summary":"Admin not found","value":{"away_mode_enabled":true,"away_mode_reassign":true}},"unauthorized":{"summary":"Unauthorized","value":{"away_mode_enabled":true,"away_mode_reassign":true}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"admin_id","in":"path","required":true,"description":"The unique identifier of a given admin","schema":{"type":"integer"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let admin_ref01_data = Object.values(setup.data.existing.admin)[0] as any

    // LIST
    const admin_ref01_ent = client.Admin()
    const admin_ref01_match: any = {}

    const admin_ref01_list = (await admin_ref01_ent.list(admin_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const admin_ref01_data_up0: any = {}
    admin_ref01_data_up0.id = admin_ref01_data.id

    const admin_ref01_markdef_up0 = { name: 'avatar', value: 'Mark01-admin_ref01_' + setup.now }
    ;(admin_ref01_data_up0 as any)[admin_ref01_markdef_up0.name] = admin_ref01_markdef_up0.value

    const admin_ref01_resdata_up0 = (await admin_ref01_ent.update(admin_ref01_data_up0)).data()
    assert(admin_ref01_resdata_up0.id === admin_ref01_data_up0.id)

    assert((admin_ref01_resdata_up0 as any)[admin_ref01_markdef_up0.name] === admin_ref01_markdef_up0.value)


    // LOAD
    const admin_ref01_match_dt0: any = {}
    admin_ref01_match_dt0.id = admin_ref01_data.id
    const admin_ref01_data_dt0 = (await admin_ref01_ent.load(admin_ref01_match_dt0)).data()
    assert(admin_ref01_data_dt0.id === admin_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/admin/AdminTestData.json')

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
    ['admin01','admin02','admin03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_ADMIN_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_ADMIN_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_ADMIN_ENTID']
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
  
