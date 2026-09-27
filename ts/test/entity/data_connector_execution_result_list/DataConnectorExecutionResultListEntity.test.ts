

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


describe('DataConnectorExecutionResultListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.DataConnectorExecutionResultList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'data_connector_execution_result_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"data_connector_execution_result_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /data_connectors/{data_connector_id}/execution_results","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"12345","k":"param","n":"id","or":"data_connector_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"end_t","or":"end_t","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"error_type","or":"error_type","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"include_body","or":"include_body","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":10,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"start_t","or":"start_t","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"success","or":"success","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/data_connectors/{data_connector_id}/execution_results","q":{"$action":"execution_results","exist":["end_t","error_type","id","include_body","intercom_version","per_page","start_t","starting_after","success"]},"r":{"param":{"data_connector_id":"id"}},"s":[{"lit":"data_connectors"},{"var":"id"},{"lit":"execution_results"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"data_connector_execution_result_list","name__orig":"data_connector_execution_result_list","Name":"DataConnectorExecutionResultList","name_":"data_connector_execution_result_list","name-":"data-connector-execution-result-list","NAME":"DATA_CONNECTOR_EXECUTION_RESULT_LIST","index$":41}, {"active":true,"entity":"data_connector_execution_result_list","key$":"BasicDataConnectorExecutionResultListFlow","kind":"basic","name":"BasicDataConnectorExecutionResultListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"data_connector_id":"data_connector01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"data_connector_execution_result_list_ref01"}}],"index$":0}]}, 'DataConnectorExecutionResultList', {"GET /data_connectors/{data_connector_id}/execution_results":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"data_connector_id","in":"path","required":true,"description":"The unique identifier for the data connector.","schema":{"type":"string","example":"12345"},"index$":1},{"name":"per_page","in":"query","required":false,"description":"The number of results per page (1-30, default 10).","schema":{"type":"integer","default":10,"minimum":1,"maximum":30},"index$":2},{"name":"starting_after","in":"query","required":false,"description":"Cursor for pagination. Use the value from `pages.next.starting_after` in a previous response.","schema":{"type":"string"},"index$":3},{"name":"success","in":"query","required":false,"description":"Filter by success status. Use `true`, `false`, or omit for all.","schema":{"type":"string","enum":["true","false"]},"index$":4},{"name":"error_type","in":"query","required":false,"description":"Filter by error type.","schema":{"type":"string","enum":["request_configuration_error","faraday_error","3rd_party_error","response_mapping_error","token_refresh_error","fin_action_response_formatting_error","fin_action_identity_verification_error","email_verification_error","non_fin_standalone_action_identity_verification_error","request_validation_error","client_side_action_error"]},"index$":5},{"name":"start_ts","in":"query","required":false,"description":"Unix timestamp for start of time range (default 1 hour ago).","schema":{"type":"integer"},"index$":6},{"name":"end_ts","in":"query","required":false,"description":"Unix timestamp for end of time range (default now).","schema":{"type":"integer"},"index$":7},{"name":"include_bodies","in":"query","required":false,"description":"Include request/response bodies in the response (default false).","schema":{"type":"string","enum":["true","false"]},"index$":8}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let data_connector_execution_result_list_ref01_data = Object.values(setup.data.existing.data_connector_execution_result_list)[0] as any

    // LIST
    const data_connector_execution_result_list_ref01_ent = client.DataConnectorExecutionResultList()
    const data_connector_execution_result_list_ref01_match: any = {}
    data_connector_execution_result_list_ref01_match['data_connector_id'] = setup.idmap['data_connector01']

    const data_connector_execution_result_list_ref01_list = (await data_connector_execution_result_list_ref01_ent.list(data_connector_execution_result_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/data_connector_execution_result_list/DataConnectorExecutionResultListTestData.json')

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
    ['data_connector_execution_result_list01','data_connector_execution_result_list02','data_connector_execution_result_list03','data_connector01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_DATA_CONNECTOR_EXECUTION_RESULT_LIST_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_DATA_CONNECTOR_EXECUTION_RESULT_LIST_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_DATA_CONNECTOR_EXECUTION_RESULT_LIST_ENTID']
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
  
