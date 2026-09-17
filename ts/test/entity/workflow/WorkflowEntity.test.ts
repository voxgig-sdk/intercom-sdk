

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


describe('WorkflowEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Workflow()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'workflow.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"attributes","req":false,"short":"Custom attributes defined for this workflow.","type":"`$ARRAY`","index$":0},{"active":true,"format":"date-time","name":"created_at","req":false,"short":"When the workflow was created.","type":"`$STRING`","index$":1},{"active":true,"name":"description","req":false,"short":"The description of the workflow.","type":"`$STRING`","index$":2},{"active":true,"name":"embedded_rules","req":false,"short":"Rules embedded within the workflow steps.","type":"`$ARRAY`","index$":3},{"active":true,"name":"id","req":false,"short":"The unique identifier for the workflow.","type":"`$STRING`","index$":4},{"active":true,"name":"preferred_devices","req":false,"short":"The preferred devices for this workflow.","type":"`$ARRAY`","index$":5},{"active":true,"name":"snapshot","req":false,"short":"The current snapshot of workflow steps and configuration.","type":"`$OBJECT`","index$":6},{"active":true,"name":"state","req":false,"short":"The current state of the workflow.","type":"`$STRING`","index$":7},{"active":true,"name":"target_channels","req":false,"short":"The channels this workflow targets.","type":"`$ARRAY`","index$":8},{"active":true,"name":"targeting","req":false,"short":"The targeting rules for this workflow.","type":"`$OBJECT`","index$":9},{"active":true,"name":"title","req":false,"short":"The title of the workflow.","type":"`$STRING`","index$":10},{"active":true,"name":"trigger_type","req":false,"short":"The type of trigger that starts this workflow.","type":"`$STRING`","index$":11},{"active":true,"format":"date-time","name":"updated_at","req":false,"short":"When the workflow was last updated.","type":"`$STRING`","index$":12}],"id":{"field":"id","name":"id"},"name":"workflow","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"12345","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /export/workflows/{id}","json":"{\"operationId\":\"exportWorkflow\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the workflow\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"12345\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"app_id\":12345,\"export_version\":\"1.0\",\"exported_at\":\"2026-01-26T12:00:00Z\",\"workflow\":{\"attributes\":[],\"created_at\":\"2025-06-15T10:30:00Z\",\"description\":\"A workflow that handles customer inquiries\",\"embedded_rules\":[],\"id\":\"67890\",\"preferred_devices\":[\"desktop\",\"mobile\"],\"snapshot\":{},\"state\":\"live\",\"target_channels\":[\"chat\"],\"targeting\":{},\"title\":\"My Workflow\",\"trigger_type\":\"inbound_conversation\",\"updated_at\":\"2026-01-20T14:45:00Z\"}}}},\"schema\":{\"description\":\"A workflow export containing the complete workflow configuration.\",\"properties\":{\"app_id\":{\"description\":\"The workspace identifier.\",\"example\":12345,\"type\":\"integer\"},\"export_version\":{\"description\":\"The version of the export format.\",\"example\":\"1.0\",\"type\":\"string\"},\"exported_at\":{\"description\":\"The timestamp when the export was generated.\",\"example\":\"2026-01-26T12:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"workflow\":{\"description\":\"The workflow configuration.\",\"properties\":{\"attributes\":{\"description\":\"Custom attributes defined for this workflow.\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"created_at\":{\"description\":\"When the workflow was created.\",\"example\":\"2025-06-15T10:30:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the workflow.\",\"example\":\"A workflow that handles customer inquiries\",\"nullable\":true,\"type\":\"string\"},\"embedded_rules\":{\"description\":\"Rules embedded within the workflow steps.\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique identifier for the workflow.\",\"example\":\"67890\",\"type\":\"string\"},\"preferred_devices\":{\"description\":\"The preferred devices for this workflow.\",\"example\":[\"desktop\",\"mobile\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"snapshot\":{\"description\":\"The current snapshot of workflow steps and configuration.\",\"nullable\":true,\"type\":\"object\"},\"state\":{\"description\":\"The current state of the workflow.\",\"enum\":[\"live\",\"draft\",\"paused\"],\"example\":\"live\",\"type\":\"string\"},\"target_channels\":{\"description\":\"The channels this workflow targets.\",\"example\":[\"chat\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"targeting\":{\"description\":\"The targeting rules for this workflow.\",\"nullable\":true,\"type\":\"object\"},\"title\":{\"description\":\"The title of the workflow.\",\"example\":\"My Workflow\",\"type\":\"string\"},\"trigger_type\":{\"description\":\"The type of trigger that starts this workflow.\",\"example\":\"inbound_conversation\",\"type\":\"string\"},\"updated_at\":{\"description\":\"When the workflow was last updated.\",\"example\":\"2026-01-20T14:45:00Z\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}},\"title\":\"Workflow Export\",\"type\":\"object\"}}},\"description\":\"Workflow exported successfully\"},\"403\":{\"content\":{\"application/json\":{\"examples\":{\"Feature not available\":{\"value\":{\"errors\":[{\"code\":\"api_plan_restricted\",\"message\":\"Workflow export is not available for this app\"}],\"request_id\":\"d92f7e84-5c31-4a2b-b8e6-9f4c3d2a1b0e\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Workflow export is not available for this app\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Workflow not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Workflow not found\"}],\"request_id\":\"b3c8c472-8478-4f10-a29e-a23dbf921c46\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/403/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/403/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Workflow not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/export/workflows/{id}","segments":[{"lit":"export"},{"lit":"workflows"},{"var":"id"}],"select":{"exist":["id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body.workflow`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"workflow","name__orig":"workflow","Name":"Workflow","name_":"workflow","name-":"workflow","NAME":"WORKFLOW","index$":88}, {"active":true,"entity":"workflow","key$":"BasicWorkflowFlow","kind":"basic","name":"BasicWorkflowFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"workflow_ref01","srcdatavar":"workflow_ref01_data","suffix":"_dt0"},"match":{"id":"workflow01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-workflow_ref01"}}],"index$":0}]}, 'Workflow')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let workflow_ref01_data = Object.values(setup.data.existing.workflow)[0] as any

    // LOAD
    const workflow_ref01_ent = client.Workflow()
    const workflow_ref01_match_dt0: any = {}
    workflow_ref01_match_dt0.id = workflow_ref01_data.id
    const workflow_ref01_data_dt0 = (await workflow_ref01_ent.load(workflow_ref01_match_dt0)).data()
    assert(workflow_ref01_data_dt0.id === workflow_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/workflow/WorkflowTestData.json')

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
    ['workflow01','workflow02','workflow03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_WORKFLOW_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_WORKFLOW_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_WORKFLOW_ENTID']
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
  
