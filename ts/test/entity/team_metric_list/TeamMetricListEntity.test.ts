

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"team_metric_list","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"42","kind":"param","name":"id","orig":"team_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1800,"kind":"query","name":"idle_threshold","orig":"idle_threshold","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /teams/{team_id}/metrics","json":"{\"operationId\":\"getTeamMetrics\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier of the team to retrieve metrics for. Use `GET /teams` to list available team IDs.\",\"example\":\"42\",\"in\":\"path\",\"name\":\"team_id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The number of seconds after which an open conversation is considered idle. Clamped to the range 1–86400. Defaults to 1800 (30 minutes).\",\"in\":\"query\",\"name\":\"idle_threshold\",\"required\":false,\"schema\":{\"default\":1800,\"example\":1800,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful_response\":{\"value\":{\"data\":[{\"admin_id\":\"123\",\"idle\":2,\"open\":5,\"snoozed\":1,\"type\":\"team_metric\"},{\"admin_id\":\"456\",\"idle\":0,\"open\":3,\"snoozed\":2,\"type\":\"team_metric\"}],\"type\":\"team_metric.list\"}}},\"schema\":{\"description\":\"A list of team metrics.\",\"properties\":{\"data\":{\"items\":{\"description\":\"Per-admin activity metrics within a team.\",\"properties\":{\"admin_id\":{\"description\":\"The unique identifier for the admin.\",\"example\":\"123\",\"type\":\"string\"},\"idle\":{\"description\":\"The number of idle conversations assigned to the admin. A conversation is idle when it has been open and waiting for an admin reply longer than the idle_threshold.\",\"example\":2,\"type\":\"integer\"},\"open\":{\"description\":\"The number of open conversations assigned to the admin.\",\"example\":5,\"type\":\"integer\"},\"snoozed\":{\"description\":\"The number of snoozed conversations assigned to the admin.\",\"example\":1,\"type\":\"integer\"},\"type\":{\"example\":\"team_metric\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"example\":\"team_metric.list\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"12a938a3-314e-4939-b773-5cd45738bd21\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"examples\":{\"feature_disabled\":{\"value\":{\"errors\":[{\"code\":\"api_plan_restricted\",\"message\":\"Real-time monitoring is not enabled for your workspace.\"}],\"request_id\":\"req-456\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Feature not enabled\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"team_not_found\":{\"value\":{\"errors\":[{\"code\":\"team_not_found\",\"message\":\"Team not found\"}],\"request_id\":\"req-789\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Team not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/teams/{team_id}/metrics","rename":{"param":{"team_id":"id"}},"segments":[{"lit":"teams"},{"var":"id"},{"lit":"metrics"}],"select":{"$action":"metrics","exist":["id","idle_threshold","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"team_metric_list","name__orig":"team_metric_list","Name":"TeamMetricList","name_":"team_metric_list","name-":"team-metric-list","NAME":"TEAM_METRIC_LIST","index$":78}, {"active":true,"entity":"team_metric_list","key$":"BasicTeamMetricListFlow","kind":"basic","name":"BasicTeamMetricListFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"team_id":"team01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"team_metric_list_ref01"}}],"index$":0}]}, 'TeamMetricList')
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
    ['team_metric_list01','team_metric_list02','team_metric_list03'],
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
  
