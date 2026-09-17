
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


describe('BannerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Banner()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"action","req":false,"short":"The action a contact can take on the banner, or `null` when the banner has no action.","type":"`$OBJECT`","index$":0},{"active":true,"name":"body","req":false,"short":"The banner's body content as HTML.","type":"`$STRING`","index$":1},{"active":true,"name":"client_targeting","req":false,"short":"Reserved for future use.","type":"`$ARRAY`","index$":2},{"active":true,"format":"timestamp","name":"created_at","req":false,"short":"The time the contact's view of this banner was created.","type":"`$INTEGER`","index$":3},{"active":true,"name":"id","req":false,"short":"The id of the banner.","type":"`$STRING`","index$":4},{"active":true,"name":"position","req":false,"short":"Where the banner is positioned.","type":"`$STRING`","index$":5},{"active":true,"name":"show_dismiss_button","req":false,"short":"Whether the banner should display a dismiss control.","type":"`$BOOLEAN`","index$":6},{"active":true,"name":"style","req":false,"short":"How the banner is displayed.","type":"`$STRING`","index$":7},{"active":true,"name":"title","req":false,"short":"The banner's title.","type":"`$STRING`","index$":8},{"active":true,"name":"type","req":false,"short":"String representing the object's type.","type":"`$STRING`","index$":9},{"active":true,"name":"view_id","req":false,"short":"The id of the contact's view of this banner.","type":"`$STRING`","index$":10}],"id":{"field":"id","name":"id"},"name":"banner","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"contact_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /contacts/{id}/banners","json":"{\"operationId\":\"listContactBanners\",\"parameters\":[{\"description\":\"The unique identifier of a contact.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"data\":[{\"action\":{\"client_targeting\":null,\"created_at\":1780580493},\"body\":\"<p class=\\\"no-margin\\\">Hi there!</p>\",\"id\":\"486517\",\"position\":\"top\",\"show_dismiss_button\":true,\"style\":\"inline\",\"title\":\"Hi there\",\"type\":\"banner\",\"view_id\":\"645719311\"}],\"type\":\"list\"}}},\"schema\":{\"description\":\"A list of banners a contact currently matches.\",\"properties\":{\"data\":{\"description\":\"An array of banners.\",\"items\":{\"description\":\"A banner the contact currently matches, with the content and view identifier needed to display and dismiss it.\",\"properties\":{\"action\":{\"description\":\"The action a contact can take on the banner, or `null` when the banner has\\nno action. The fields present depend on `type`:\\n`url` (`label`, `target`), `reaction` (`reaction_set`),\\n`email_collector`, or `product_tour` (`tour_id`, `tour_url`).\\n\",\"nullable\":true,\"properties\":{\"label\":{\"description\":\"For `url` actions, the label shown on the action link or button.\",\"example\":\"Learn more\",\"nullable\":true,\"type\":\"string\"},\"reaction_set\":{\"description\":\"For `reaction` actions, the reactions a contact can choose from.\",\"items\":{\"properties\":{\"index\":{\"description\":\"The reaction's position in the set.\",\"example\":0,\"type\":\"integer\"},\"unicode_emoticon\":{\"description\":\"The reaction's unicode emoji.\",\"example\":\"👍\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"target\":{\"description\":\"For `url` actions, the URL the contact is sent to.\",\"example\":\"https://www.intercom.com/pricing\",\"nullable\":true,\"type\":\"string\"},\"tour_id\":{\"description\":\"For `product_tour` actions, the id of the product tour to launch.\",\"example\":\"12345\",\"nullable\":true,\"type\":\"string\"},\"tour_url\":{\"description\":\"For `product_tour` actions, the URL that launches the product tour.\",\"example\":\"https://app.intercom.com/tours/12345\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The kind of action. One of `url`, `reaction`, `email_collector`, or `product_tour`.\",\"example\":\"url\",\"type\":\"string\"}},\"type\":\"object\"},\"body\":{\"description\":\"The banner's body content as HTML.\",\"example\":\"<p class=\\\"no-margin\\\">Hi there!</p>\",\"nullable\":true,\"type\":\"string\"},\"client_targeting\":{\"description\":\"Reserved for future use. Always `null` in the current version — banners\\nthat depend on client-side targeting rules (such as page URL or time on\\npage) are not returned by this endpoint.\\n\",\"items\":{\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"created_at\":{\"description\":\"The time the contact's view of this banner was created.\",\"example\":1780580493,\"format\":\"timestamp\",\"type\":\"integer\"},\"id\":{\"description\":\"The id of the banner.\",\"example\":\"486517\",\"type\":\"string\"},\"position\":{\"description\":\"Where the banner is positioned.\",\"example\":\"top\",\"type\":\"string\"},\"show_dismiss_button\":{\"description\":\"Whether the banner should display a dismiss control.\",\"example\":true,\"type\":\"boolean\"},\"style\":{\"description\":\"How the banner is displayed.\",\"example\":\"inline\",\"type\":\"string\"},\"title\":{\"description\":\"The banner's title. `null` when the banner has no title.\",\"example\":\"Hi there\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `banner`.\",\"example\":\"banner\",\"type\":\"string\"},\"view_id\":{\"description\":\"The id of the contact's view of this banner. Pass this to the dismiss endpoint to record a dismissal.\",\"example\":\"645719311\",\"type\":\"string\"}},\"title\":\"Banner\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `list`.\",\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Banner List\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Contact not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"User Not Found\"}],\"request_id\":\"57055cde-3d0d-4c67-b5c9-b20b80340bf0\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Contact not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/contacts/{id}/banners","rename":{"param":{"id":"contact_id"}},"segments":[{"lit":"contacts"},{"var":"contact_id"},{"lit":"banners"}],"select":{"exist":["contact_id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["contact"]]},"key$":"banner","name__orig":"banner","Name":"Banner","name_":"banner","name-":"banner","NAME":"BANNER","index$":13}, {"active":true,"entity":"banner","key$":"BasicBannerFlow","kind":"basic","name":"BasicBannerFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"contact_id":"contact01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"banner_ref01"}}],"index$":0}]}, 'Banner')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let banner_ref01_data = Object.values(setup.data.existing.banner)[0]

    // LIST
    const banner_ref01_ent = client.Banner()
    const banner_ref01_match = {}
    banner_ref01_match['contact_id'] = setup.idmap['contact01']

    const banner_ref01_list = (await banner_ref01_ent.list(banner_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/banner/BannerTestData.json')

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
    ['banner01','banner02','banner03','contact01','contact02','contact03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_BANNER_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_BANNER_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_BANNER_ENTID']
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
  
