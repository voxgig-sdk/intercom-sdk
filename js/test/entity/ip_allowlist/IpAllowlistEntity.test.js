
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


describe('IpAllowlistEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.IpAllowlist()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"enabled","req":false,"short":"Whether the IP allowlist is enabled for the workspace.","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"ip_allowlist","req":false,"short":"List of allowed IP addresses and/or IP ranges in CIDR notation.","type":"`$ARRAY`","index$":1},{"active":true,"name":"type","req":false,"short":"String representing the object's type.","type":"`$STRING`","index$":2}],"name":"ip_allowlist","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /ip_allowlist","json":"{\"operationId\":\"getIpAllowlist\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful\":{\"value\":{\"enabled\":true,\"ip_allowlist\":[\"192.168.1.0/24\",\"10.0.0.1\"],\"type\":\"ip_allowlist\"}}},\"schema\":{\"description\":\"IP allowlist settings for the workspace.\",\"properties\":{\"enabled\":{\"description\":\"Whether the IP allowlist is enabled for the workspace.\",\"example\":true,\"type\":\"boolean\"},\"ip_allowlist\":{\"description\":\"List of allowed IP addresses and/or IP ranges in CIDR notation.\\nExamples:\\n- Single IP: `192.168.0.1`\\n- IP range: `192.168.0.1/24` (allows 192.168.0.0 - 192.168.0.255)\\n\",\"example\":[\"192.168.1.0/24\",\"10.0.0.1\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `ip_allowlist`.\",\"example\":\"ip_allowlist\",\"type\":\"string\"}},\"title\":\"IP Allowlist\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"a1b2c3d4-e5f6-7890-abcd-ef1234567890\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/ip_allowlist","segments":[{"lit":"ip_allowlist"}],"select":{"exist":["intercom_version"]},"transform":{"req":"`reqdata`","res":"`body.ip_allowlist`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"PUT /ip_allowlist","json":"{\"operationId\":\"updateIpAllowlist\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"summary\":\"Enable IP allowlist\",\"value\":{\"enabled\":true,\"ip_allowlist\":[\"192.168.1.0/24\",\"10.0.0.1\"]}}},\"schema\":{\"description\":\"IP allowlist settings for the workspace.\",\"properties\":{\"enabled\":{\"description\":\"Whether the IP allowlist is enabled for the workspace.\",\"example\":true,\"type\":\"boolean\"},\"ip_allowlist\":{\"description\":\"List of allowed IP addresses and/or IP ranges in CIDR notation.\\nExamples:\\n- Single IP: `192.168.0.1`\\n- IP range: `192.168.0.1/24` (allows 192.168.0.0 - 192.168.0.255)\\n\",\"example\":[\"192.168.1.0/24\",\"10.0.0.1\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `ip_allowlist`.\",\"example\":\"ip_allowlist\",\"type\":\"string\"}},\"title\":\"IP Allowlist\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful\":{\"value\":{\"enabled\":true,\"ip_allowlist\":[\"192.168.1.0/24\",\"10.0.0.1\"],\"type\":\"ip_allowlist\"}}},\"schema\":{\"description\":\"IP allowlist settings for the workspace.\",\"properties\":{\"enabled\":{\"description\":\"Whether the IP allowlist is enabled for the workspace.\",\"example\":true,\"type\":\"boolean\"},\"ip_allowlist\":{\"description\":\"List of allowed IP addresses and/or IP ranges in CIDR notation.\\nExamples:\\n- Single IP: `192.168.0.1`\\n- IP range: `192.168.0.1/24` (allows 192.168.0.0 - 192.168.0.255)\\n\",\"example\":[\"192.168.1.0/24\",\"10.0.0.1\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `ip_allowlist`.\",\"example\":\"ip_allowlist\",\"type\":\"string\"}},\"title\":\"IP Allowlist\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"a1b2c3d4-e5f6-7890-abcd-ef1234567890\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"422\":{\"content\":{\"application/json\":{\"examples\":{\"Lockout Protection\":{\"value\":{\"errors\":[{\"code\":\"parameter_invalid\",\"message\":\"Your IP (1.2.3.4) is not on the allowlist. Saving would lock you out of this workspace.\"}],\"request_id\":\"a1b2c3d4-e5f6-7890-abcd-ef1234567890\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Validation error\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/ip_allowlist","segments":[{"lit":"ip_allowlist"}],"select":{"exist":["intercom_version"]},"transform":{"req":{"ip_allowlist":"`reqdata`"},"res":"`body.ip_allowlist`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"ip_allowlist","name__orig":"ip_allowlist","Name":"IpAllowlist","name_":"ip_allowlist","name-":"ip-allowlist","NAME":"IP_ALLOWLIST","index$":57}, {"active":true,"entity":"ip_allowlist","key$":"BasicIpAllowlistFlow","kind":"basic","name":"BasicIpAllowlistFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"ip_allowlist_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"ip_allowlist_ref01","srcdatavar":"ip_allowlist_ref01_data","suffix":"_up0","textfield":"type"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ip_allowlist_ref01"}}],"valid":[],"index$":1}]}, 'IpAllowlist')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ip_allowlist_ref01_data = Object.values(setup.data.existing.ip_allowlist)[0]

    // LIST
    const ip_allowlist_ref01_ent = client.IpAllowlist()
    const ip_allowlist_ref01_match = {}

    const ip_allowlist_ref01_list = (await ip_allowlist_ref01_ent.list(ip_allowlist_ref01_match)).map((e) => e.data())


    // UPDATE
    const ip_allowlist_ref01_data_up0 = {}

    const ip_allowlist_ref01_markdef_up0 = { name: 'type', value: 'Mark01-ip_allowlist_ref01_' + setup.now }
    ip_allowlist_ref01_data_up0 [ip_allowlist_ref01_markdef_up0.name] = ip_allowlist_ref01_markdef_up0.value

    const ip_allowlist_ref01_resdata_up0 = (await ip_allowlist_ref01_ent.update(ip_allowlist_ref01_data_up0)).data()
    assert(null != ip_allowlist_ref01_resdata_up0)

    assert(ip_allowlist_ref01_resdata_up0[ip_allowlist_ref01_markdef_up0.name] === ip_allowlist_ref01_markdef_up0.value)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/ip_allowlist/IpAllowlistTestData.json')

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
    ['ip_allowlist01','ip_allowlist02','ip_allowlist03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_IP_ALLOWLIST_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_IP_ALLOWLIST_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_IP_ALLOWLIST_ENTID']
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
  
