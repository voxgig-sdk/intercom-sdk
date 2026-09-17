
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


describe('CompanyAttachedSegmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.CompanyAttachedSegment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"count","req":false,"short":"The number of items in the user segment.","type":"`$INTEGER`","index$":0},{"active":true,"name":"created_at","req":false,"short":"The time the segment was created.","type":"`$INTEGER`","index$":1},{"active":true,"name":"id","req":false,"short":"The unique identifier representing the segment.","type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"short":"The name of the segment.","type":"`$STRING`","index$":3},{"active":true,"name":"person_type","req":false,"short":"Type of the contact: contact (lead) or user.","type":"`$STRING`","index$":4},{"active":true,"name":"type","req":false,"short":"The type of object.","type":"`$STRING`","index$":5},{"active":true,"name":"updated_at","req":false,"short":"The time the segment was updated.","type":"`$INTEGER`","index$":6}],"id":{"field":"id","name":"id"},"name":"company_attached_segment","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"5f4d3c1c-7b1b-4d7d-a97e-6095715c6632","kind":"param","name":"id","orig":"company_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /companies/{company_id}/segments","json":"{\"operationId\":\"ListAttachedSegmentsForCompanies\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the company which is given by Intercom\",\"example\":\"5f4d3c1c-7b1b-4d7d-a97e-6095715c6632\",\"in\":\"path\",\"name\":\"company_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful\":{\"value\":{\"data\":[],\"type\":\"list\"}}},\"schema\":{\"description\":\"A list of Segment Objects\",\"properties\":{\"data\":{\"description\":\"An array containing Segment Objects\",\"items\":{\"description\":\"A segment is a group of your contacts defined by the rules that you set.\",\"properties\":{\"count\":{\"description\":\"The number of items in the user segment. It's returned when `include_count=true` is included in the request.\",\"example\":3,\"nullable\":true,\"type\":\"integer\"},\"created_at\":{\"description\":\"The time the segment was created.\",\"example\":1394621988,\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier representing the segment.\",\"example\":\"56203d253cba154d39010062\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the segment.\",\"example\":\"Active\",\"type\":\"string\"},\"person_type\":{\"description\":\"Type of the contact: contact (lead) or user.\",\"enum\":[\"contact\",\"user\"],\"example\":\"contact\",\"type\":\"string\"},\"type\":{\"description\":\"The type of object.\",\"enum\":[\"segment\"],\"example\":\"segment\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time the segment was updated.\",\"example\":1394622004,\"type\":\"integer\"}},\"title\":\"Segment\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of object - `list`\",\"enum\":[\"list\"],\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Company Attached Segments\",\"type\":\"object\"}}},\"description\":\"Successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"91f04dce-5759-4d80-981e-f598ec989d1a\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Company Not Found\":{\"value\":{\"errors\":[{\"code\":\"company_not_found\",\"message\":\"Company Not Found\"}],\"request_id\":\"de5d939e-77fb-46d7-a3b9-f34199d9f25a\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Company Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/companies/{company_id}/segments","rename":{"param":{"company_id":"id"}},"segments":[{"lit":"companies"},{"var":"id"},{"lit":"segments"}],"select":{"exist":["id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"company_attached_segment","name__orig":"company_attached_segment","Name":"CompanyAttachedSegment","name_":"company_attached_segment","name-":"company-attached-segment","NAME":"COMPANY_ATTACHED_SEGMENT","index$":19}, {"active":true,"entity":"company_attached_segment","key$":"BasicCompanyAttachedSegmentFlow","kind":"basic","name":"BasicCompanyAttachedSegmentFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"company_id":"company01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"company_attached_segment_ref01"}}],"index$":0}]}, 'CompanyAttachedSegment')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let company_attached_segment_ref01_data = Object.values(setup.data.existing.company_attached_segment)[0]

    // LIST
    const company_attached_segment_ref01_ent = client.CompanyAttachedSegment()
    const company_attached_segment_ref01_match = {}
    company_attached_segment_ref01_match['company_id'] = setup.idmap['company01']

    const company_attached_segment_ref01_list = (await company_attached_segment_ref01_ent.list(company_attached_segment_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/company_attached_segment/CompanyAttachedSegmentTestData.json')

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
    ['company_attached_segment01','company_attached_segment02','company_attached_segment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_COMPANY_ATTACHED_SEGMENT_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_COMPANY_ATTACHED_SEGMENT_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_COMPANY_ATTACHED_SEGMENT_ENTID']
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
  
