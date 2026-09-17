
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


describe('NewsfeedEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Newsfeed()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"timestamp","name":"created_at","req":false,"short":"Timestamp for when the newsfeed was created.","type":"`$INTEGER`","index$":0},{"active":true,"name":"id","req":false,"short":"The unique identifier for the newsfeed which is given by Intercom.","type":"`$STRING`","index$":1},{"active":true,"name":"name","req":false,"short":"The name of the newsfeed.","type":"`$STRING`","index$":2},{"active":true,"name":"type","req":false,"short":"The type of object.","type":"`$STRING`","index$":3},{"active":true,"format":"timestamp","name":"updated_at","req":false,"short":"Timestamp for when the newsfeed was last updated.","type":"`$INTEGER`","index$":4}],"id":{"field":"id","name":"id"},"name":"newsfeed","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"123","kind":"param","name":"id","orig":"newsfeed_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /news/newsfeeds/{newsfeed_id}","json":"{\"operationId\":\"retrieveNewsfeed\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the news feed item which is given by Intercom.\",\"example\":\"123\",\"in\":\"path\",\"name\":\"newsfeed_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"created_at\":1734537815,\"id\":\"72\",\"name\":\"Visitor Feed\",\"type\":\"newsfeed\",\"updated_at\":1734537815}}},\"schema\":{\"description\":\"A newsfeed is a collection of news items, targeted to a specific audience.\\n\\nNewsfeeds currently cannot be edited through the API, please refer to [this article](https://www.intercom.com/help/en/articles/6362267-getting-started-with-news) to set up your newsfeeds in Intercom.\\n\",\"properties\":{\"created_at\":{\"description\":\"Timestamp for when the newsfeed was created.\",\"example\":1674917488,\"format\":\"timestamp\",\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier for the newsfeed which is given by Intercom.\",\"example\":\"12312\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the newsfeed. This name will never be visible to your users.\",\"example\":\"My Newsfeed\",\"type\":\"string\"},\"type\":{\"description\":\"The type of object.\",\"enum\":[\"newsfeed\"],\"example\":\"newsfeed\",\"type\":\"string\"},\"updated_at\":{\"description\":\"Timestamp for when the newsfeed was last updated.\",\"example\":1674917488,\"format\":\"timestamp\",\"type\":\"integer\"}},\"title\":\"Newsfeed\",\"type\":\"object\"}}},\"description\":\"successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"6d9a1bf5-aa08-4c93-a61a-5a21130b6553\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/news/newsfeeds/{newsfeed_id}","rename":{"param":{"newsfeed_id":"id"}},"segments":[{"lit":"news"},{"lit":"newsfeeds"},{"var":"id"}],"select":{"exist":["id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"newsfeed","name__orig":"newsfeed","Name":"Newsfeed","name_":"newsfeed","name-":"newsfeed","NAME":"NEWSFEED","index$":63}, {"active":true,"entity":"newsfeed","key$":"BasicNewsfeedFlow","kind":"basic","name":"BasicNewsfeedFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"newsfeed_ref01","srcdatavar":"newsfeed_ref01_data","suffix":"_dt0"},"match":{"id":"newsfeed01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-newsfeed_ref01"}}],"index$":0}]}, 'Newsfeed')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let newsfeed_ref01_data = Object.values(setup.data.existing.newsfeed)[0]

    // LOAD
    const newsfeed_ref01_ent = client.Newsfeed()
    const newsfeed_ref01_match_dt0 = {}
    newsfeed_ref01_match_dt0.id = newsfeed_ref01_data.id
    const newsfeed_ref01_data_dt0 = (await newsfeed_ref01_ent.load(newsfeed_ref01_match_dt0)).data()
    assert(newsfeed_ref01_data_dt0.id === newsfeed_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/newsfeed/NewsfeedTestData.json')

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
    ['newsfeed01','newsfeed02','newsfeed03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_NEWSFEED_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_NEWSFEED_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_NEWSFEED_ENTID']
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
  
