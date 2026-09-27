
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


describe('ActivityLogEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.ActivityLog()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"activity_description":{"a":true,"h":"Activity Description","n":"activity_description","r":false,"sh":"A sentence or two describing the activity.","t":"`$STRING`","key$":"activity_description","index$":0},"activity_type":{"a":true,"h":"Activity Type","n":"activity_type","r":false,"t":"`$STRING`","key$":"activity_type","index$":1},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"The time the activity was created.","t":"`$INTEGER`","key$":"created_at","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The id representing the activity.","t":"`$STRING`","key$":"id","index$":3},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Additional data provided about Admin activity.","t":"`$OBJECT`","key$":"metadata","index$":4},"performed_by":{"a":true,"h":"Performed By","n":"performed_by","r":false,"sh":"Details about the Admin involved in the activity.","t":"`$OBJECT`","key$":"performed_by","index$":5}},"id":{"field":"id","name":"id"},"name":"activity_log","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /admins/activity_logs","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"1677253093","k":"query","n":"created_at_after","or":"created_at_after","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"1677861493","k":"query","n":"created_at_before","or":"created_at_before","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/admins/activity_logs","q":{"exist":["created_at_after","created_at_before","intercom_version"]},"r":{},"s":[{"lit":"admins"},{"lit":"activity_logs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"activity_log","name__orig":"activity_log","Name":"ActivityLog","name_":"activity_log","name-":"activity-log","NAME":"ACTIVITY_LOG","index$":0}, {"active":true,"entity":"activity_log","key$":"BasicActivityLogFlow","kind":"basic","name":"BasicActivityLogFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"activity_log_ref01"}}],"index$":0}]}, 'ActivityLog', {"GET /admins/activity_logs":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"created_at_after","in":"query","required":true,"description":"The start date that you request data for. It must be formatted as a UNIX timestamp.","example":"1677253093","schema":{"type":"string"},"index$":1},{"name":"created_at_before","in":"query","required":false,"description":"The end date that you request data for. It must be formatted as a UNIX timestamp.","example":"1677861493","schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let activity_log_ref01_data = Object.values(setup.data.existing.activity_log)[0]

    // LIST
    const activity_log_ref01_ent = client.ActivityLog()
    const activity_log_ref01_match = {}

    const activity_log_ref01_list = (await activity_log_ref01_ent.list(activity_log_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/activity_log/ActivityLogTestData.json')

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
    ['activity_log01','activity_log02','activity_log03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_ACTIVITY_LOG_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_ACTIVITY_LOG_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_ACTIVITY_LOG_ENTID']
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
  
