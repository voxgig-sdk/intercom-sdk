

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


describe('DataEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Data()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'data.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"created_at_after","req":true,"short":"The start date that you request data for.","type":"`$INTEGER`","index$":0},{"active":true,"name":"created_at_before","req":true,"short":"The end date that you request data for.","type":"`$INTEGER`","index$":1},{"active":true,"name":"download_expires_at","req":false,"short":"The time after which you will not be able to access the data.","type":"`$STRING`","index$":2},{"active":true,"name":"download_url","req":false,"short":"The location where you can download your data.","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"job_identifier","req":false,"short":"The identifier for your job.","type":"`$STRING`","index$":5},{"active":true,"name":"status","req":false,"short":"The current state of your job.","type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"data","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"POST /export/content/data","json":"{\"operationId\":\"createDataExport\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"summary\":\"successful\",\"value\":{\"created_at_after\":1734519776,\"created_at_before\":1734537776}}},\"schema\":{\"description\":\"Request for creating a data export\",\"properties\":{\"created_at_after\":{\"description\":\"The start date that you request data for. It must be formatted as a unix timestamp.\",\"example\":1527811200,\"type\":\"integer\"},\"created_at_before\":{\"description\":\"The end date that you request data for. It must be formatted as a unix timestamp.\",\"example\":1527811200,\"type\":\"integer\"}},\"required\":[\"created_at_after\",\"created_at_before\"],\"title\":\"Create Data Export Request\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"download_expires_at\":\"\",\"download_url\":\"\",\"job_identifier\":\"al9w983lwu88w1fd\",\"status\":\"pending\"}}},\"schema\":{\"description\":\"The data export API is used to export message delivery and engagement statistics for outbound content (Emails, Posts, Custom Bots, Surveys, Tours, Series, and more) sent in a given timeframe. The exported data includes who received each message, when they received it, and how they engaged with it (opens, clicks, replies, completions, dismissals, unsubscribes, and bounces).\",\"properties\":{\"download_expires_at\":{\"description\":\"The time after which you will not be able to access the data.\",\"example\":\"1674917488\",\"type\":\"string\"},\"download_url\":{\"description\":\"The location where you can download your data.\",\"example\":\"https://api.intercom.test/download/messages/data/example\",\"type\":\"string\"},\"job_identifier\":{\"description\":\"The identifier for your job.\",\"example\":\"orzzsbd7hk67xyu\",\"type\":\"string\"},\"status\":{\"description\":\"The current state of your job.\",\"enum\":[\"pending\",\"in_progress\",\"failed\",\"completed\",\"no_data\",\"canceled\"],\"example\":\"pending\",\"type\":\"string\"}},\"title\":\"Data Export\",\"type\":\"object\"}}},\"description\":\"successful\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/export/content/data","segments":[{"lit":"export"},{"lit":"content"},{"lit":"data"}],"select":{"exist":["intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"job_identifier","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /download/content/data/{job_identifier}","json":"{\"operationId\":\"downloadDataExport\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"job_identifier\",\"in\":\"path\",\"name\":\"job_identifier\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"successful\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/download/content/data/{job_identifier}","rename":{"param":{"job_identifier":"id"}},"segments":[{"lit":"download"},{"lit":"content"},{"lit":"data"},{"var":"id"}],"select":{"exist":["id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"job_identifier","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /export/content/data/{job_identifier}","json":"{\"operationId\":\"getDataExport\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"job_identifier\",\"in\":\"path\",\"name\":\"job_identifier\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"download_expires_at\":\"\",\"download_url\":\"\",\"job_identifier\":\"braxwk3j039t6txy\",\"status\":\"pending\"}}},\"schema\":{\"description\":\"The data export API is used to export message delivery and engagement statistics for outbound content (Emails, Posts, Custom Bots, Surveys, Tours, Series, and more) sent in a given timeframe. The exported data includes who received each message, when they received it, and how they engaged with it (opens, clicks, replies, completions, dismissals, unsubscribes, and bounces).\",\"properties\":{\"download_expires_at\":{\"description\":\"The time after which you will not be able to access the data.\",\"example\":\"1674917488\",\"type\":\"string\"},\"download_url\":{\"description\":\"The location where you can download your data.\",\"example\":\"https://api.intercom.test/download/messages/data/example\",\"type\":\"string\"},\"job_identifier\":{\"description\":\"The identifier for your job.\",\"example\":\"orzzsbd7hk67xyu\",\"type\":\"string\"},\"status\":{\"description\":\"The current state of your job.\",\"enum\":[\"pending\",\"in_progress\",\"failed\",\"completed\",\"no_data\",\"canceled\"],\"example\":\"pending\",\"type\":\"string\"}},\"title\":\"Data Export\",\"type\":\"object\"}}},\"description\":\"successful\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/export/content/data/{job_identifier}","rename":{"param":{"job_identifier":"id"}},"segments":[{"lit":"export"},{"lit":"content"},{"lit":"data"},{"var":"id"}],"select":{"exist":["id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"data","name__orig":"data","Name":"Data","name_":"data","name-":"data","NAME":"DATA","index$":36}, {"active":true,"entity":"data","key$":"BasicDataFlow","kind":"basic","name":"BasicDataFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"data_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"data_ref01","srcdatavar":"data_ref01_data","suffix":"_dt0"},"match":{"id":"data01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-data_ref01"}}],"index$":1}]}, 'Data')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const data_ref01_ent = client.Data()
    let data_ref01_data = setup.data.new.data['data_ref01']

    data_ref01_data = (await data_ref01_ent.create(data_ref01_data)).data()
    assert(null != data_ref01_data.id)


    // LOAD
    const data_ref01_match_dt0: any = {}
    data_ref01_match_dt0.id = data_ref01_data.id
    const data_ref01_data_dt0 = (await data_ref01_ent.load(data_ref01_match_dt0)).data()
    assert(data_ref01_data_dt0.id === data_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/data/DataTestData.json')

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
    ['data01','data02','data03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_DATA_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_DATA_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_DATA_ENTID']
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
  
