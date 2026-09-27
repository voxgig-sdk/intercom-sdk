

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"attributes":{"a":true,"h":"Attributes","n":"attributes","r":false,"sh":"Custom attributes defined for this workflow.","t":"`$ARRAY`","key$":"attributes","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"When the workflow was created.","t":"`$STRING`","key$":"created_at","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The description of the workflow.","t":"`$STRING`","key$":"description","index$":2},"embedded_rules":{"a":true,"h":"Embedded Rules","n":"embedded_rules","r":false,"sh":"Rules embedded within the workflow steps.","t":"`$ARRAY`","key$":"embedded_rules","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier for the workflow.","t":"`$STRING`","key$":"id","index$":4},"preferred_devices":{"a":true,"h":"Preferred Devices","n":"preferred_devices","r":false,"sh":"The preferred devices for this workflow.","t":"`$ARRAY`","key$":"preferred_devices","index$":5},"snapshot":{"a":true,"h":"Snapshot","n":"snapshot","r":false,"sh":"The current snapshot of workflow steps and configuration.","t":"`$OBJECT`","key$":"snapshot","index$":6},"state":{"a":true,"h":"State","n":"state","r":false,"sh":"The current state of the workflow.","t":"`$STRING`","key$":"state","index$":7},"target_channels":{"a":true,"h":"Target Channels","n":"target_channels","r":false,"sh":"The channels this workflow targets.","t":"`$ARRAY`","key$":"target_channels","index$":8},"targeting":{"a":true,"h":"Targeting","n":"targeting","r":false,"sh":"The targeting rules for this workflow.","t":"`$OBJECT`","key$":"targeting","index$":9},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"The title of the workflow.","t":"`$STRING`","key$":"title","index$":10},"trigger_type":{"a":true,"h":"Trigger Type","n":"trigger_type","r":false,"sh":"The type of trigger that starts this workflow.","t":"`$STRING`","key$":"trigger_type","index$":11},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"sh":"When the workflow was last updated.","t":"`$STRING`","key$":"updated_at","index$":12}},"id":{"field":"id","name":"id"},"name":"workflow","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /export/workflows/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"12345","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/export/workflows/{id}","q":{"exist":["id","intercom_version"]},"r":{},"s":[{"lit":"export"},{"lit":"workflows"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.workflow`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"workflow","name__orig":"workflow","Name":"Workflow","name_":"workflow","name-":"workflow","NAME":"WORKFLOW","index$":88}, {"active":true,"entity":"workflow","key$":"BasicWorkflowFlow","kind":"basic","name":"BasicWorkflowFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"workflow_ref01","srcdatavar":"workflow_ref01_data","suffix":"_dt0"},"m":{"id":"workflow01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-workflow_ref01"}}],"index$":0}]}, 'Workflow', {"GET /export/workflows/{id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"id","in":"path","description":"The unique identifier for the workflow","required":true,"schema":{"type":"string","example":"12345"},"index$":1}]}})
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
  
