

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


describe('TeamEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Team()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'team.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"admin_ids":{"a":true,"h":"Admin Ids","n":"admin_ids","r":false,"sh":"The list of admin IDs that are a part of the team.","t":"`$ARRAY`","key$":"admin_ids","index$":0},"admin_priority_level":{"a":true,"h":"Admin Priority Level","n":"admin_priority_level","r":false,"sh":"Admin priority levels for the team","t":"`$OBJECT`","key$":"admin_priority_level","index$":1},"assignment_limit":{"a":true,"h":"Assignment Limit","n":"assignment_limit","r":false,"sh":"The assignment limit for the team.","t":"`$INTEGER`","key$":"assignment_limit","index$":2},"distribution_method":{"a":true,"h":"Distribution Method","n":"distribution_method","r":false,"sh":"Describes how assignments are distributed among the team members","t":"`$STRING`","key$":"distribution_method","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The id of the team","t":"`$STRING`","key$":"id","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the team","t":"`$STRING`","key$":"name","index$":5},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Value is always \"team\"","t":"`$STRING`","key$":"type","index$":6}},"id":{"field":"id","name":"id"},"name":"team","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /teams","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/teams","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"teams"}],"t":{"req":"`reqdata`","res":"`body.teams`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /teams/{team_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"id","or":"team_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/teams/{team_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"team_id":"id"}},"s":[{"lit":"teams"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"team","name__orig":"team","Name":"Team","name_":"team","name-":"team","NAME":"TEAM","index$":77}, {"active":true,"entity":"team","key$":"BasicTeamFlow","kind":"basic","name":"BasicTeamFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"team_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"team_ref01","srcdatavar":"team_ref01_data","suffix":"_dt0"},"m":{"id":"team01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-team_ref01"}}],"index$":1}]}, 'Team', {"GET /teams":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /teams/{team_id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"team_id","in":"path","required":true,"description":"The unique identifier of a given team.","example":"123","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let team_ref01_data = Object.values(setup.data.existing.team)[0] as any

    // LIST
    const team_ref01_ent = client.Team()
    const team_ref01_match: any = {}

    const team_ref01_list = (await team_ref01_ent.list(team_ref01_match)).map((e: any) => e.data())


    // LOAD
    const team_ref01_match_dt0: any = {}
    team_ref01_match_dt0.id = team_ref01_data.id
    const team_ref01_data_dt0 = (await team_ref01_ent.load(team_ref01_match_dt0)).data()
    assert(team_ref01_data_dt0.id === team_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/team/TeamTestData.json')

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
    ['team01','team02','team03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_TEAM_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_TEAM_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_TEAM_ENTID']
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
  
