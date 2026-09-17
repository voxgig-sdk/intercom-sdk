
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


describe('BannerDismissEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.BannerDismiss()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"dismissed","req":false,"short":"Whether the banner view is dismissed.","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"type","req":false,"short":"String representing the object's type.","type":"`$STRING`","index$":2},{"active":true,"name":"view_id","req":false,"short":"The id of the dismissed banner view.","type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"banner_dismiss","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"contact_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"id","orig":"view_id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /contacts/{id}/banners/{view_id}/dismiss","json":"{\"operationId\":\"dismissContactBanner\",\"parameters\":[{\"description\":\"The unique identifier of a contact.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The `view_id` of the banner to dismiss, as returned by the list banners endpoint.\",\"in\":\"path\",\"name\":\"view_id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"dismissed\":true,\"type\":\"banner_dismiss\",\"view_id\":\"645719311\"}}},\"schema\":{\"description\":\"The result of dismissing a banner for a contact.\",\"properties\":{\"dismissed\":{\"description\":\"Whether the banner view is dismissed.\",\"example\":true,\"type\":\"boolean\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `banner_dismiss`.\",\"example\":\"banner_dismiss\",\"type\":\"string\"},\"view_id\":{\"description\":\"The id of the dismissed banner view.\",\"example\":\"645719311\",\"type\":\"string\"}},\"title\":\"Banner Dismiss\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Banner view not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Resource Not Found\"}],\"request_id\":\"57055cde-3d0d-4c67-b5c9-b20b80340bf0\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Banner view not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/contacts/{id}/banners/{view_id}/dismiss","rename":{"param":{"id":"contact_id","view_id":"id"}},"segments":[{"lit":"contacts"},{"var":"contact_id"},{"lit":"banners"},{"var":"id"},{"lit":"dismiss"}],"select":{"exist":["contact_id","id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["contact"]]},"key$":"banner_dismiss","name__orig":"banner_dismiss","Name":"BannerDismiss","name_":"banner_dismiss","name-":"banner-dismiss","NAME":"BANNER_DISMISS","index$":14}, {"active":true,"entity":"banner_dismiss","key$":"BasicBannerDismissFlow","kind":"basic","name":"BasicBannerDismissFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"banner_dismiss_ref01"},"match":{"contact_id":"contact01","view_id":"view01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'BannerDismiss')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const banner_dismiss_ref01_ent = client.BannerDismiss()
    let banner_dismiss_ref01_data = setup.data.new.banner_dismiss['banner_dismiss_ref01']
    banner_dismiss_ref01_data['contact_id'] = setup.idmap['contact01']
    banner_dismiss_ref01_data['view_id'] = setup.idmap['view01']

    banner_dismiss_ref01_data = (await banner_dismiss_ref01_ent.create(banner_dismiss_ref01_data)).data()
    assert(null != banner_dismiss_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/banner_dismiss/BannerDismissTestData.json')

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
    ['banner_dismiss01','banner_dismiss02','banner_dismiss03','contact01','contact02','contact03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_BANNER_DISMISS_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_BANNER_DISMISS_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_BANNER_DISMISS_ENTID']
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
  
