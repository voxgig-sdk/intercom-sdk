

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


describe('TeamMetricListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.TeamMetricList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'team_metric_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"team_metric_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /teams/{team_id}/metrics","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"42","k":"param","n":"id","or":"team_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1800,"k":"query","n":"idle_threshold","or":"idle_threshold","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/teams/{team_id}/metrics","q":{"$action":"metrics","exist":["id","idle_threshold","intercom_version"]},"r":{"param":{"team_id":"id"}},"s":[{"lit":"teams"},{"var":"id"},{"lit":"metrics"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"team_metric_list","name__orig":"team_metric_list","Name":"TeamMetricList","name_":"team_metric_list","name-":"team-metric-list","NAME":"TEAM_METRIC_LIST","index$":78}, {"active":true,"entity":"team_metric_list","key$":"BasicTeamMetricListFlow","kind":"basic","name":"BasicTeamMetricListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"team_id":"team01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"team_metric_list_ref01"}}],"index$":0}]}, 'TeamMetricList', {"GET /teams/{team_id}/metrics":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"team_id","in":"path","required":true,"description":"The unique identifier of the team to retrieve metrics for. Use `GET /teams` to list available team IDs.","example":"42","schema":{"type":"string"},"index$":1},{"name":"idle_threshold","in":"query","required":false,"description":"The number of seconds after which an open conversation is considered idle. Clamped to the range 1–86400. Defaults to 1800 (30 minutes).","schema":{"type":"integer","default":1800,"example":1800},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let team_metric_list_ref01_data = Object.values(setup.data.existing.team_metric_list)[0] as any

    // LIST
    const team_metric_list_ref01_ent = client.TeamMetricList()
    const team_metric_list_ref01_match: any = {}
    team_metric_list_ref01_match['team_id'] = setup.idmap['team01']

    const team_metric_list_ref01_list = (await team_metric_list_ref01_ent.list(team_metric_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/team_metric_list/TeamMetricListTestData.json')

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
    ['team_metric_list01','team_metric_list02','team_metric_list03','team01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_TEAM_METRIC_LIST_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_TEAM_METRIC_LIST_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_TEAM_METRIC_LIST_ENTID']
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
  
