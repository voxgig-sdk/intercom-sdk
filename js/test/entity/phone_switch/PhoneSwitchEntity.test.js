
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


describe('PhoneSwitchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.PhoneSwitch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"custom_attributes","req":false,"short":"An object containing the different custom attributes associated to the conversation as key-value pairs.","type":"`$OBJECT`","union":{"branches":4,"count":2,"depth":3},"index$":0},{"active":true,"name":"phone","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger.","type":"`$STRING`","index$":1},{"active":true,"name":"type","req":false,"type":"`$STRING`","index$":2}],"name":"phone_switch","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"POST /phone_call_redirects","json":"{\"operationId\":\"createPhoneSwitch\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"bad_request_-_exception_sending_sms\":{\"summary\":\"bad request - exception sending sms\",\"value\":{\"custom_attributes\":{\"issue_type\":\"Billing\",\"priority\":\"High\"},\"phone\":\"+353832345678\"}},\"bad_request_-_invalid_number\":{\"summary\":\"bad request - invalid number\",\"value\":{\"custom_attributes\":{\"issue_type\":\"Billing\",\"priority\":\"High\"},\"phone\":\"+353832345678\"}},\"successful\":{\"summary\":\"successful\",\"value\":{\"custom_attributes\":{\"issue_type\":\"Billing\",\"priority\":\"High\"},\"phone\":\"+353832345678\"}},\"unprocessable_entity\":{\"summary\":\"unprocessable entity\",\"value\":{\"custom_attributes\":{\"issue_type\":\"Billing\",\"priority\":\"High\"},\"phone\":\"+40241100100\"}}},\"schema\":{\"description\":\"You can create an phone switch\",\"nullable\":true,\"properties\":{\"custom_attributes\":{\"additionalProperties\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"integer\"},{\"oneOf\":[{\"description\":\"A date and time following the ISO8601 notation.\",\"format\":\"date-time\",\"title\":\"string\",\"type\":\"string\"},{\"description\":\"A date and time as UNIX timestamp notation.\",\"title\":\"integer\",\"type\":\"integer\"}]},{\"description\":\"The list of associated custom object instances for a given reference attribute on the parent object.\",\"properties\":{\"instances\":{\"description\":\"The list of associated custom object instances for a given reference attribute on the parent object.\",\"items\":{\"description\":\"A Custom Object Instance represents an instance of a custom object type. This allows you to create and set custom attributes to store data about your customers that is not already captured by Intercom. The parent object includes recommended default attributes and you can add your own custom attributes.\",\"nullable\":true,\"properties\":{\"created_at\":{\"description\":\"The time the attribute was created as a UTC Unix timestamp\",\"example\":1671028894,\"format\":\"date-time\",\"type\":\"integer\"},\"custom_attributes\":{\"additionalProperties\":{\"type\":\"string\"},\"description\":\"The custom attributes you have set on the custom object instance.\",\"type\":\"object\"},\"external_created_at\":{\"description\":\"The time when the Custom Object instance was created in the external system it originated from.\",\"example\":1571672154,\"format\":\"date-time\",\"nullable\":true,\"type\":\"integer\"},\"external_id\":{\"description\":\"The id you have defined for the custom object instance.\",\"example\":\"0001d1c1e65a7a19e9f59ae2\",\"type\":\"string\"},\"external_updated_at\":{\"description\":\"The time when the Custom Object instance was last updated in the external system it originated from.\",\"example\":1571672154,\"format\":\"date-time\",\"nullable\":true,\"type\":\"integer\"},\"id\":{\"description\":\"The Intercom defined id representing the custom object instance.\",\"example\":16032025,\"type\":\"string\"},\"type\":{\"description\":\"The identifier of the custom object type that defines the structure of the custom object instance.\",\"example\":\"Order\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time the attribute was last updated as a UTC Unix timestamp\",\"example\":1671028894,\"format\":\"date-time\",\"type\":\"integer\"}},\"title\":\"Custom Object Instance\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"example\":\"order.list\",\"type\":\"string\"}},\"title\":\"Custom Object Instances\",\"type\":\"object\"}]},\"description\":\"An object containing the different custom attributes associated to the conversation as key-value pairs. For relationship attributes the value will be a list of custom object instance models. System-defined attributes such as \\\"CX Score rating\\\" and \\\"CX Score explanation\\\" may also be included.\",\"example\":{\"CX Score explanation\":\"The conversation was resolved quickly and the customer expressed satisfaction with the outcome.\",\"CX Score rating\":4,\"end_date_timestamp\":1677923174,\"monthly_spend\":155.5,\"paid_subscriber\":true,\"start_date_iso8601\":\"2023-03-04T09:46:14Z\",\"team_mates\":9},\"title\":\"Custom Attributes\",\"type\":\"object\"},\"phone\":{\"description\":\"Phone number in E.164 format, that will receive the SMS to continue the conversation in the Messenger.\",\"example\":\"+1 1234567890\",\"type\":\"string\"}},\"required\":[\"phone\"],\"title\":\"Create Phone Switch Request Payload\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"type\":\"phone_call_redirect\",\"url\":\"http://via.intercom.io/msgr/1add3dd1-a75e-4a96-96fd-984d16aba059\"}}},\"schema\":{\"description\":\"Phone Switch Response\",\"nullable\":true,\"properties\":{\"phone\":{\"description\":\"Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger.\",\"example\":\"+1 1234567890\",\"type\":\"string\"},\"type\":{\"default\":\"phone_call_redirect\",\"description\":\"\",\"enum\":[\"phone_call_redirect\"],\"example\":\"phone_call_redirect\",\"type\":\"string\"}},\"title\":\"Phone Switch\",\"type\":\"object\"}}},\"description\":\"successful\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"bad request - exception sending sms\":{\"value\":{\"error_key\":\"sms_failed\",\"message\":\"SMS was not sent due to an unknown error\"}},\"bad request - invalid number\":{\"value\":{\"error_key\":\"invalid_phone_number\",\"message\":\"Invalid phone number\"}}}}},\"description\":\"bad request - invalid number\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"e1ed4f34-9477-492a-8ddb-22f10af39734\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"422\":{\"content\":{\"application/json\":{\"examples\":{\"unprocessable entity\":{\"value\":{\"error_key\":\"some_error\"}}}}},\"description\":\"unprocessable entity\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/phone_call_redirects","segments":[{"lit":"phone_call_redirects"}],"select":{"exist":["intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"phone_switch","name__orig":"phone_switch","Name":"PhoneSwitch","name_":"phone_switch","name-":"phone-switch","NAME":"PHONE_SWITCH","index$":69}, {"active":true,"entity":"phone_switch","key$":"BasicPhoneSwitchFlow","kind":"basic","name":"BasicPhoneSwitchFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"phone_switch_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'PhoneSwitch')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const phone_switch_ref01_ent = client.PhoneSwitch()
    let phone_switch_ref01_data = setup.data.new.phone_switch['phone_switch_ref01']

    phone_switch_ref01_data = (await phone_switch_ref01_ent.create(phone_switch_ref01_data)).data()
    assert(null != phone_switch_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/phone_switch/PhoneSwitchTestData.json')

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
    ['phone_switch01','phone_switch02','phone_switch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_PHONE_SWITCH_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_PHONE_SWITCH_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_PHONE_SWITCH_ENTID']
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
  
