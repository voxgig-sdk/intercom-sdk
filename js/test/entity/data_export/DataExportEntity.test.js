
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { IntercomSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('DataExportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.DataExport()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"download_expires_at","req":false,"short":"The time after which you will not be able to access the data.","type":"`$STRING`","index$":0},{"active":true,"name":"download_url","req":false,"short":"The location where you can download your data.","type":"`$STRING`","index$":1},{"active":true,"name":"job_identifier","req":false,"short":"The identifier for your job.","type":"`$STRING`","index$":2},{"active":true,"name":"status","req":false,"short":"The current state of your job.","type":"`$STRING`","index$":3}],"name":"data_export","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"job_identifier","orig":"job_identifier","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /export/cancel/{job_identifier}","json":"{\"operationId\":\"cancelDataExport\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"job_identifier\",\"in\":\"path\",\"name\":\"job_identifier\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"download_expires_at\":\"\",\"download_url\":\"\",\"job_identifier\":\"v134nyc2bku9hj91\",\"status\":\"canceled\"}}},\"schema\":{\"description\":\"The data export API is used to export message delivery and engagement statistics for outbound content (Emails, Posts, Custom Bots, Surveys, Tours, Series, and more) sent in a given timeframe. The exported data includes who received each message, when they received it, and how they engaged with it (opens, clicks, replies, completions, dismissals, unsubscribes, and bounces).\",\"properties\":{\"download_expires_at\":{\"description\":\"The time after which you will not be able to access the data.\",\"example\":\"1674917488\",\"type\":\"string\"},\"download_url\":{\"description\":\"The location where you can download your data.\",\"example\":\"https://api.intercom.test/download/messages/data/example\",\"type\":\"string\"},\"job_identifier\":{\"description\":\"The identifier for your job.\",\"example\":\"orzzsbd7hk67xyu\",\"type\":\"string\"},\"status\":{\"description\":\"The current state of your job.\",\"enum\":[\"pending\",\"in_progress\",\"failed\",\"completed\",\"no_data\",\"canceled\"],\"example\":\"pending\",\"type\":\"string\"}},\"title\":\"Data Export\",\"type\":\"object\"}}},\"description\":\"successful\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/export/cancel/{job_identifier}","segments":[{"lit":"export"},{"lit":"cancel"},{"var":"job_identifier"}],"select":{"exist":["intercom_version","job_identifier"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["cancel"]]},"key$":"data_export","name__orig":"data_export","Name":"DataExport","name_":"data_export","name-":"data-export","NAME":"DATA_EXPORT","index$":43}, {"active":true,"entity":"data_export","key$":"BasicDataExportFlow","kind":"basic","name":"BasicDataExportFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"data_export_ref01"},"match":{"job_identifier":"jobentifier01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'DataExport')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const data_export_ref01_ent = client.DataExport()
    let data_export_ref01_data = setup.data.new.data_export['data_export_ref01']
    data_export_ref01_data['job_identifier'] = setup.idmap['jobentifier01']

    data_export_ref01_data = (await data_export_ref01_ent.create(data_export_ref01_data)).data()
    assert(null != data_export_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/data_export/DataExportTestData.json')

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
    ['data_export01','data_export02','data_export03','cancel01','cancel02','cancel03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_DATA_EXPORT_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_DATA_EXPORT_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_DATA_EXPORT_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  
