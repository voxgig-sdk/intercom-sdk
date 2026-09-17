

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"conversation_id","req":false,"short":"The conversation associated with this execution, if any.","type":"`$STRING`","index$":0},{"active":true,"format":"date-time","name":"created_at","req":false,"short":"The time the execution occurred.","type":"`$STRING`","index$":1},{"active":true,"name":"data_connector_id","req":false,"short":"The unique identifier of the data connector that produced this result.","type":"`$STRING`","index$":2},{"active":true,"name":"error_message","req":false,"short":"A human-readable error message.","type":"`$STRING`","index$":3},{"active":true,"name":"error_type","req":false,"short":"The type of error that occurred, if any.","type":"`$STRING`","index$":4},{"active":true,"name":"execution_time_ms","req":false,"short":"The execution time in milliseconds.","type":"`$INTEGER`","index$":5},{"active":true,"name":"http_method","req":false,"short":"The HTTP method used for the request.","type":"`$STRING`","index$":6},{"active":true,"name":"http_status","req":false,"short":"The HTTP status code returned by the external API.","type":"`$INTEGER`","index$":7},{"active":true,"name":"id","req":false,"short":"The unique identifier for the execution result.","type":"`$STRING`","index$":8},{"active":true,"name":"raw_response_body","req":false,"short":"The raw (unmapped) response body.","type":"`$STRING`","index$":9},{"active":true,"name":"request_body","req":false,"short":"The request body sent to the external API.","type":"`$STRING`","index$":10},{"active":true,"name":"request_url","req":false,"short":"The request URL.","type":"`$STRING`","index$":11},{"active":true,"name":"response_body","req":false,"short":"The response body from the external API.","type":"`$STRING`","index$":12},{"active":true,"name":"source_id","req":false,"short":"The identifier of the source that triggered this execution.","type":"`$STRING`","index$":13},{"active":true,"name":"source_type","req":false,"short":"The type of source that triggered this execution.","type":"`$STRING`","index$":14},{"active":true,"name":"success","req":false,"short":"Whether the execution was successful.","type":"`$BOOLEAN`","index$":15},{"active":true,"name":"type","req":false,"short":"The type of object - `data_connector.execution`.","type":"`$STRING`","index$":16}],"id":{"field":"id","name":"id"},"name":"data_connector_execution_result","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"12345","kind":"param","name":"data_connector_id","orig":"data_connector_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"99001","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /data_connectors/{data_connector_id}/execution_results/{id}","json":"{\"operationId\":\"showDataConnectorExecutionResult\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the data connector.\",\"in\":\"path\",\"name\":\"data_connector_id\",\"required\":true,\"schema\":{\"example\":\"12345\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the execution result.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"99001\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"conversation_id\":\"8001\",\"created_at\":\"2026-02-10T18:15:32Z\",\"data_connector_id\":\"12345\",\"execution_time_ms\":150,\"http_method\":\"post\",\"http_status\":200,\"id\":\"99001\",\"raw_response_body\":\"{\\\"ok\\\": true}\",\"request_body\":\"{\\\"channel\\\": \\\"#alerts\\\", \\\"text\\\": \\\"Conversation updated\\\"}\",\"request_url\":\"https://api.example.com/webhook\",\"response_body\":\"{\\\"ok\\\": true}\",\"source_id\":\"5001\",\"source_type\":\"workflow\",\"success\":true,\"type\":\"data_connector.execution\"}}},\"schema\":{\"description\":\"An execution result from a data connector HTTP request.\",\"properties\":{\"conversation_id\":{\"description\":\"The conversation associated with this execution, if any.\",\"example\":\"8001\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time the execution occurred.\",\"example\":\"2026-02-10T18:15:32Z\",\"format\":\"date-time\",\"type\":\"string\"},\"data_connector_id\":{\"description\":\"The unique identifier of the data connector that produced this result.\",\"example\":\"12345\",\"type\":\"string\"},\"error_message\":{\"description\":\"A human-readable error message. Query parameters, userinfo, and fragments in URLs are redacted.\",\"example\":\"Connection refused\",\"nullable\":true,\"type\":\"string\"},\"error_type\":{\"description\":\"The type of error that occurred, if any.\",\"enum\":[\"request_configuration_error\",\"faraday_error\",\"3rd_party_error\",\"response_mapping_error\",\"token_refresh_error\",\"fin_action_response_formatting_error\",\"fin_action_identity_verification_error\",\"email_verification_error\",\"non_fin_standalone_action_identity_verification_error\",\"request_validation_error\",\"client_side_action_error\"],\"example\":\"3rd_party_error\",\"nullable\":true,\"type\":\"string\"},\"execution_time_ms\":{\"description\":\"The execution time in milliseconds.\",\"example\":245,\"nullable\":true,\"type\":\"integer\"},\"http_method\":{\"description\":\"The HTTP method used for the request.\",\"enum\":[\"get\",\"post\",\"put\",\"delete\",\"patch\"],\"example\":\"post\",\"type\":\"string\"},\"http_status\":{\"description\":\"The HTTP status code returned by the external API.\",\"example\":200,\"nullable\":true,\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier for the execution result.\",\"example\":\"99001\",\"type\":\"string\"},\"raw_response_body\":{\"description\":\"The raw (unmapped) response body.\",\"example\":\"{\\\"status\\\": \\\"ok\\\"}\",\"nullable\":true,\"type\":\"string\"},\"request_body\":{\"description\":\"The request body sent to the external API.\",\"example\":\"{\\\"message\\\": \\\"hello\\\"}\",\"nullable\":true,\"type\":\"string\"},\"request_url\":{\"description\":\"The request URL. Query parameters, userinfo, and fragments are redacted.\",\"example\":\"https://api.example.com/webhook\",\"nullable\":true,\"type\":\"string\"},\"response_body\":{\"description\":\"The response body from the external API.\",\"example\":\"{\\\"status\\\": \\\"ok\\\"}\",\"nullable\":true,\"type\":\"string\"},\"source_id\":{\"description\":\"The identifier of the source that triggered this execution.\",\"example\":\"5001\",\"nullable\":true,\"type\":\"string\"},\"source_type\":{\"description\":\"The type of source that triggered this execution.\",\"enum\":[\"custom_bot\",\"inbound_custom_bot\",\"button_custom_bot\",\"answer\",\"workflow\",\"saved_reply\",\"triggerable_custom_bot\",\"inbox\",\"fin\"],\"example\":\"workflow\",\"nullable\":true,\"type\":\"string\"},\"success\":{\"description\":\"Whether the execution was successful.\",\"example\":true,\"type\":\"boolean\"},\"type\":{\"description\":\"The type of object - `data_connector.execution`.\",\"enum\":[\"data_connector.execution\"],\"example\":\"data_connector.execution\",\"type\":\"string\"}},\"title\":\"Data Connector Execution Result\",\"type\":\"object\"}}},\"description\":\"successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"test-uuid-replacement\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Data connector not found\":{\"value\":{\"errors\":[{\"code\":\"data_connector_not_found\",\"message\":\"Data connector not found\"}],\"request_id\":\"test-uuid-replacement\",\"type\":\"error.list\"}},\"Execution result not found\":{\"value\":{\"errors\":[{\"code\":\"execution_result_not_found\",\"message\":\"Execution result not found\"}],\"request_id\":\"test-uuid-replacement\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Execution result not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/data_connectors/{data_connector_id}/execution_results/{id}","segments":[{"lit":"data_connectors"},{"var":"data_connector_id"},{"lit":"execution_results"},{"var":"id"}],"select":{"exist":["data_connector_id","id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["data_connector"]]},"key$":"data_connector_execution_result","name__orig":"data_connector_execution_result","Name":"DataConnectorExecutionResult","name_":"data_connector_execution_result","name-":"data-connector-execution-result","NAME":"DATA_CONNECTOR_EXECUTION_RESULT","index$":39}, {"active":true,"entity":"data_connector_execution_result","key$":"BasicDataConnectorExecutionResultFlow","kind":"basic","name":"BasicDataConnectorExecutionResultFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"data_connector_execution_result_ref01","srcdatavar":"data_connector_execution_result_ref01_data","suffix":"_dt0"},"match":{"data_connector_id":"data_connector01","id":"data_connector_execution_result01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-data_connector_execution_result_ref01"}}],"index$":0}]}, 'DataConnectorExecutionResult')
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
  
