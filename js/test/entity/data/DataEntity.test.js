
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

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at_after":{"a":true,"h":"Created At After","n":"created_at_after","r":true,"sh":"The start date that you request data for.","t":"`$INTEGER`","key$":"created_at_after","index$":0},"created_at_before":{"a":true,"h":"Created At Before","n":"created_at_before","r":true,"sh":"The end date that you request data for.","t":"`$INTEGER`","key$":"created_at_before","index$":1},"download_expires_at":{"a":true,"h":"Download Expires At","n":"download_expires_at","r":false,"sh":"The time after which you will not be able to access the data.","t":"`$STRING`","key$":"download_expires_at","index$":2},"download_url":{"a":true,"h":"Download Url","n":"download_url","r":false,"sh":"The location where you can download your data.","t":"`$STRING`","key$":"download_url","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"job_identifier":{"a":true,"h":"Job Identifier","n":"job_identifier","r":false,"sh":"The identifier for your job.","t":"`$STRING`","key$":"job_identifier","index$":5},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"The current state of your job.","t":"`$STRING`","key$":"status","index$":6}},"id":{"field":"id","name":"id"},"name":"data","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /export/content/data","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/export/content/data","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"export"},{"lit":"content"},{"lit":"data"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /download/content/data/{job_identifier}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"job_identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/download/content/data/{job_identifier}","q":{"exist":["id","intercom_version"]},"r":{"param":{"job_identifier":"id"}},"s":[{"lit":"download"},{"lit":"content"},{"lit":"data"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /export/content/data/{job_identifier}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"job_identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/export/content/data/{job_identifier}","q":{"exist":["id","intercom_version"]},"r":{"param":{"job_identifier":"id"}},"s":[{"lit":"export"},{"lit":"content"},{"lit":"data"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"data","name__orig":"data","Name":"Data","name_":"data","name-":"data","NAME":"DATA","index$":37}, {"active":true,"entity":"data","key$":"BasicDataFlow","kind":"basic","name":"BasicDataFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"data_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"data_ref01","srcdatavar":"data_ref01_data","suffix":"_dt0"},"m":{"id":"data01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-data_ref01"}}],"index$":1}]}, 'Data', {"POST /export/content/data":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"Request for creating a data export","type":"object","title":"Create Data Export Request","properties":{"created_at_after":{"type":"integer","description":"The start date that you request data for. It must be formatted as a unix timestamp.","example":1527811200,"key$":"created_at_after"},"created_at_before":{"type":"integer","description":"The end date that you request data for. It must be formatted as a unix timestamp.","example":1527811200,"key$":"created_at_before"}},"required":["created_at_after","created_at_before"],"x-ref":"#/components/schemas/create_data_exports_request","index$":1},"examples":{"successful":{"summary":"successful","value":{"created_at_after":1734519776,"created_at_before":1734537776}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /download/content/data/{job_identifier}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"job_identifier","in":"path","description":"job_identifier","required":true,"schema":{"type":"string"},"index$":1}]},"GET /export/content/data/{job_identifier}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"job_identifier","in":"path","description":"job_identifier","required":true,"schema":{"type":"string"},"index$":1}]}})
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
    const data_ref01_match_dt0 = {}
    data_ref01_match_dt0.id = data_ref01_data.id
    const data_ref01_data_dt0 = (await data_ref01_ent.load(data_ref01_match_dt0)).data()
    assert(data_ref01_data_dt0.id === data_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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
  
