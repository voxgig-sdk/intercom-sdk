

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


describe('DataConnectorExecutionResultEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.DataConnectorExecutionResult()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'data_connector_execution_result.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"conversation_id":{"a":true,"h":"Conversation Id","n":"conversation_id","r":false,"sh":"The conversation associated with this execution, if any.","t":"`$STRING`","key$":"conversation_id","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"The time the execution occurred.","t":"`$STRING`","key$":"created_at","index$":1},"data_connector_id":{"a":true,"h":"Data Connector Id","n":"data_connector_id","r":false,"sh":"The unique identifier of the data connector that produced this result.","t":"`$STRING`","key$":"data_connector_id","index$":2},"error_message":{"a":true,"h":"Error Message","n":"error_message","r":false,"sh":"A human-readable error message.","t":"`$STRING`","key$":"error_message","index$":3},"error_type":{"a":true,"h":"Error Type","n":"error_type","r":false,"sh":"The type of error that occurred, if any.","t":"`$STRING`","key$":"error_type","index$":4},"execution_time_ms":{"a":true,"h":"Execution Time Ms","n":"execution_time_ms","r":false,"sh":"The execution time in milliseconds.","t":"`$INTEGER`","key$":"execution_time_ms","index$":5},"http_method":{"a":true,"h":"Http Method","n":"http_method","r":false,"sh":"The HTTP method used for the request.","t":"`$STRING`","key$":"http_method","index$":6},"http_status":{"a":true,"h":"Http Status","n":"http_status","r":false,"sh":"The HTTP status code returned by the external API.","t":"`$INTEGER`","key$":"http_status","index$":7},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier for the execution result.","t":"`$STRING`","key$":"id","index$":8},"raw_response_body":{"a":true,"h":"Raw Response Body","n":"raw_response_body","r":false,"sh":"The raw (unmapped) response body.","t":"`$STRING`","key$":"raw_response_body","index$":9},"request_body":{"a":true,"h":"Request Body","n":"request_body","r":false,"sh":"The request body sent to the external API.","t":"`$STRING`","key$":"request_body","index$":10},"request_url":{"a":true,"h":"Request Url","n":"request_url","r":false,"sh":"The request URL.","t":"`$STRING`","key$":"request_url","index$":11},"response_body":{"a":true,"h":"Response Body","n":"response_body","r":false,"sh":"The response body from the external API.","t":"`$STRING`","key$":"response_body","index$":12},"source_id":{"a":true,"h":"Source Id","n":"source_id","r":false,"sh":"The identifier of the source that triggered this execution.","t":"`$STRING`","key$":"source_id","index$":13},"source_type":{"a":true,"h":"Source Type","n":"source_type","r":false,"sh":"The type of source that triggered this execution.","t":"`$STRING`","key$":"source_type","index$":14},"success":{"a":true,"h":"Success","n":"success","r":false,"sh":"Whether the execution was successful.","t":"`$BOOLEAN`","key$":"success","index$":15},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of object - `data_connector.execution`.","t":"`$STRING`","key$":"type","index$":16}},"id":{"field":"id","name":"id"},"name":"data_connector_execution_result","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /data_connectors/{data_connector_id}/execution_results/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"12345","k":"param","n":"data_connector_id","or":"data_connector_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"99001","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/data_connectors/{data_connector_id}/execution_results/{id}","q":{"exist":["data_connector_id","id","intercom_version"]},"r":{},"s":[{"lit":"data_connectors"},{"var":"data_connector_id"},{"lit":"execution_results"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.data_connector"]]},"key$":"data_connector_execution_result","name__orig":"data_connector_execution_result","Name":"DataConnectorExecutionResult","name_":"data_connector_execution_result","name-":"data-connector-execution-result","NAME":"DATA_CONNECTOR_EXECUTION_RESULT","index$":40}, {"active":true,"entity":"data_connector_execution_result","key$":"BasicDataConnectorExecutionResultFlow","kind":"basic","name":"BasicDataConnectorExecutionResultFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"data_connector_execution_result_ref01","srcdatavar":"data_connector_execution_result_ref01_data","suffix":"_dt0"},"m":{"data_connector_id":"data_connector01","id":"data_connector_execution_result01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-data_connector_execution_result_ref01"}}],"index$":0}]}, 'DataConnectorExecutionResult', {"GET /data_connectors/{data_connector_id}/execution_results/{id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"data_connector_id","in":"path","required":true,"description":"The unique identifier for the data connector.","schema":{"type":"string","example":"12345"},"index$":1},{"name":"id","in":"path","required":true,"description":"The unique identifier for the execution result.","schema":{"type":"string","example":"99001"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let data_connector_execution_result_ref01_data = Object.values(setup.data.existing.data_connector_execution_result)[0] as any

    // LOAD
    const data_connector_execution_result_ref01_ent = client.DataConnectorExecutionResult()
    const data_connector_execution_result_ref01_match_dt0: any = {}
    data_connector_execution_result_ref01_match_dt0.id = data_connector_execution_result_ref01_data.id
    const data_connector_execution_result_ref01_data_dt0 = (await data_connector_execution_result_ref01_ent.load(data_connector_execution_result_ref01_match_dt0)).data()
    assert(data_connector_execution_result_ref01_data_dt0.id === data_connector_execution_result_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/data_connector_execution_result/DataConnectorExecutionResultTestData.json')

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
    ['data_connector_execution_result01','data_connector_execution_result02','data_connector_execution_result03','data_connector01','data_connector02','data_connector03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_DATA_CONNECTOR_EXECUTION_RESULT_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_DATA_CONNECTOR_EXECUTION_RESULT_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_DATA_CONNECTOR_EXECUTION_RESULT_ENTID']
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
  
