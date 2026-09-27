
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


describe('AwayStatusReasonEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.AwayStatusReason()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The Unix timestamp when the status reason was created","t":"`$INTEGER`","key$":"created_at","index$":0},"deleted":{"a":true,"h":"Deleted","n":"deleted","r":false,"sh":"Whether the status reason has been soft deleted","t":"`$BOOLEAN`","key$":"deleted","index$":1},"emoji":{"a":true,"h":"Emoji","n":"emoji","r":false,"sh":"The emoji associated with the status reason","t":"`$STRING`","key$":"emoji","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier for the away status reason","t":"`$STRING`","key$":"id","index$":3},"label":{"a":true,"h":"Label","n":"label","r":false,"sh":"The display text for the away status reason","t":"`$STRING`","key$":"label","index$":4},"order":{"a":true,"h":"Order","n":"order","r":false,"sh":"The display order of the status reason","t":"`$INTEGER`","key$":"order","index$":5},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":6},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"sh":"The Unix timestamp when the status reason was last updated","t":"`$INTEGER`","key$":"updated_at","index$":7}},"id":{"field":"id","name":"id"},"name":"away_status_reason","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /away_status_reasons","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/away_status_reasons","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"away_status_reasons"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"away_status_reason","name__orig":"away_status_reason","Name":"AwayStatusReason","name_":"away_status_reason","name-":"away-status-reason","NAME":"AWAY_STATUS_REASON","index$":12}, {"active":true,"entity":"away_status_reason","key$":"BasicAwayStatusReasonFlow","kind":"basic","name":"BasicAwayStatusReasonFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"away_status_reason_ref01"}}],"index$":0}]}, 'AwayStatusReason', {"GET /away_status_reasons":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let away_status_reason_ref01_data = Object.values(setup.data.existing.away_status_reason)[0]

    // LIST
    const away_status_reason_ref01_ent = client.AwayStatusReason()
    const away_status_reason_ref01_match = {}

    const away_status_reason_ref01_list = (await away_status_reason_ref01_ent.list(away_status_reason_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/away_status_reason/AwayStatusReasonTestData.json')

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
    ['away_status_reason01','away_status_reason02','away_status_reason03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_AWAY_STATUS_REASON_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_AWAY_STATUS_REASON_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_AWAY_STATUS_REASON_ENTID']
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
  
