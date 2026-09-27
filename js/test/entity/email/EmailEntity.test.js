
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


describe('EmailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Email()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"brand_id":{"a":true,"h":"Brand Id","n":"brand_id","r":false,"sh":"Associated brand identifier","t":"`$STRING`","key$":"brand_id","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"Unix timestamp of creation","t":"`$INTEGER`","key$":"created_at","index$":1},"domain":{"a":true,"h":"Domain","n":"domain","r":false,"sh":"Domain portion of the email address","t":"`$STRING`","key$":"domain","index$":2},"email":{"a":true,"h":"Email","n":"email","r":false,"sh":"Full sender email address","t":"`$STRING`","key$":"email","index$":3},"forwarded_email_last_received_at":{"a":true,"fo":"date-time","h":"Forwarded Email Last Received At","n":"forwarded_email_last_received_at","r":false,"sh":"Unix timestamp of last forwarded email received (null if never)","t":"`$INTEGER`","key$":"forwarded_email_last_received_at","index$":4},"forwarding_enabled":{"a":true,"h":"Forwarding Enabled","n":"forwarding_enabled","r":false,"sh":"Whether email forwarding is active","t":"`$BOOLEAN`","key$":"forwarding_enabled","index$":5},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique email setting identifier","t":"`$STRING`","key$":"id","index$":6},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of object","t":"`$STRING`","key$":"type","index$":7},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"sh":"Unix timestamp of last modification","t":"`$INTEGER`","key$":"updated_at","index$":8},"verified":{"a":true,"h":"Verified","n":"verified","r":false,"sh":"Whether the email address has been verified","t":"`$BOOLEAN`","key$":"verified","index$":9}},"id":{"field":"id","name":"id"},"name":"email","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /emails","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/emails","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"emails"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /emails/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/emails/{id}","q":{"exist":["id","intercom_version"]},"r":{},"s":[{"lit":"emails"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"email","name__orig":"email","Name":"Email","name_":"email","name-":"email","NAME":"EMAIL","index$":50}, {"active":true,"entity":"email","key$":"BasicEmailFlow","kind":"basic","name":"BasicEmailFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"email_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"email_ref01","srcdatavar":"email_ref01_data","suffix":"_dt0"},"m":{"id":"email01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-email_ref01"}}],"index$":1}]}, 'Email', {"GET /emails":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /emails/{id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"id","in":"path","required":true,"description":"The unique identifier of the email setting","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let email_ref01_data = Object.values(setup.data.existing.email)[0]

    // LIST
    const email_ref01_ent = client.Email()
    const email_ref01_match = {}

    const email_ref01_list = (await email_ref01_ent.list(email_ref01_match)).map((e) => e.data())


    // LOAD
    const email_ref01_match_dt0 = {}
    email_ref01_match_dt0.id = email_ref01_data.id
    const email_ref01_data_dt0 = (await email_ref01_ent.load(email_ref01_match_dt0)).data()
    assert(email_ref01_data_dt0.id === email_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/email/EmailTestData.json')

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
    ['email01','email02','email03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_EMAIL_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_EMAIL_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_EMAIL_ENTID']
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
  
