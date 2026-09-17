
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


describe('CompanyScrollEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.CompanyScroll()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"app_id","req":false,"short":"The Intercom defined code of the workspace the company is associated to.","type":"`$STRING`","index$":0},{"active":true,"name":"company_id","req":false,"short":"The company id you have defined for the company.","type":"`$STRING`","index$":1},{"active":true,"name":"created_at","req":false,"short":"The time the company was added in Intercom.","type":"`$INTEGER`","index$":2},{"active":true,"name":"custom_attributes","req":false,"short":"The custom attributes you have set on the company.","type":"`$OBJECT`","index$":3},{"active":true,"name":"id","req":false,"short":"The Intercom defined id representing the company.","type":"`$STRING`","index$":4},{"active":true,"name":"industry","req":false,"short":"The industry that the company operates in.","type":"`$STRING`","index$":5},{"active":true,"name":"last_request_at","req":false,"short":"The time the company last recorded making a request.","type":"`$INTEGER`","index$":6},{"active":true,"name":"monthly_spend","req":false,"short":"How much revenue the company generates for your business.","type":"`$INTEGER`","index$":7},{"active":true,"name":"name","req":false,"short":"The name of the company.","type":"`$STRING`","index$":8},{"active":true,"name":"notes","req":false,"short":"The list of notes associated with the company","type":"`$OBJECT`","index$":9},{"active":true,"name":"plan","req":false,"type":"`$OBJECT`","index$":10},{"active":true,"name":"remote_created_at","req":false,"short":"The time the company was created by you.","type":"`$INTEGER`","index$":11},{"active":true,"name":"segments","req":false,"short":"The list of segments associated with the company","type":"`$OBJECT`","index$":12},{"active":true,"name":"session_count","req":false,"short":"How many sessions the company has recorded.","type":"`$INTEGER`","index$":13},{"active":true,"name":"size","req":false,"short":"The number of employees in the company.","type":"`$INTEGER`","index$":14},{"active":true,"name":"tags","req":false,"short":"The list of tags associated with the company","type":"`$OBJECT`","index$":15},{"active":true,"name":"type","req":false,"short":"Value is `company`","type":"`$STRING`","index$":16},{"active":true,"name":"updated_at","req":false,"short":"The last time the company was updated.","type":"`$INTEGER`","index$":17},{"active":true,"name":"user_count","req":false,"short":"The number of users in the company.","type":"`$INTEGER`","index$":18},{"active":true,"name":"website","req":false,"short":"The URL for the company website.","type":"`$STRING`","index$":19}],"id":{"field":"id","name":"id"},"name":"company_scroll","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"scroll_param","orig":"scroll_param","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /companies/scroll","json":"{\"operationId\":\"scrollOverAllCompanies\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"\",\"in\":\"query\",\"name\":\"scroll_param\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful\":{\"value\":{\"data\":[{\"app_id\":\"this_is_an_id193_that_should_be_at_least_\",\"company_id\":\"remote_companies_scroll_2\",\"created_at\":1734537367,\"custom_attributes\":{},\"id\":\"6762f0971bb69f9f2193bb2b\",\"monthly_spend\":0,\"name\":\"IntercomQATest1\",\"plan\":{},\"remote_created_at\":1734537367,\"segments\":{\"segments\":[],\"type\":\"segment.list\"},\"session_count\":0,\"tags\":{\"tags\":[],\"type\":\"tag.list\"},\"type\":\"company\",\"updated_at\":1734537367,\"user_count\":4}],\"pages\":null,\"scroll_param\":\"69352cd2-ab5b-42ac-b004-a13d4e55e9b0\",\"total_count\":null,\"type\":\"list\"}}},\"schema\":{\"description\":\"Companies allow you to represent organizations using your product. Each company will have its own description and be associated with contacts. You can fetch, create, update and list companies.\",\"nullable\":true,\"properties\":{\"data\":{\"items\":{\"description\":\"Companies allow you to represent organizations using your product. Each company will have its own description and be associated with contacts. You can fetch, create, update and list companies.\",\"properties\":{\"app_id\":{\"description\":\"The Intercom defined code of the workspace the company is associated to.\",\"example\":\"ecahpwf5\",\"type\":\"string\"},\"company_id\":{\"description\":\"The company id you have defined for the company.\",\"example\":\"6\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time the company was added in Intercom.\",\"example\":1663597223,\"type\":\"integer\"},\"custom_attributes\":{\"additionalProperties\":{\"type\":\"string\"},\"description\":\"The custom attributes you have set on the company.\",\"example\":{\"monthly_spend\":155.5,\"paid_subscriber\":true,\"team_mates\":9},\"type\":\"object\"},\"id\":{\"description\":\"The Intercom defined id representing the company.\",\"example\":\"531ee472cce572a6ec000006\",\"type\":\"string\"},\"industry\":{\"description\":\"The industry that the company operates in.\",\"example\":\"Software\",\"type\":\"string\"},\"last_request_at\":{\"description\":\"The time the company last recorded making a request.\",\"example\":1663597223,\"type\":\"integer\"},\"monthly_spend\":{\"description\":\"How much revenue the company generates for your business.\",\"example\":100,\"type\":\"integer\"},\"name\":{\"description\":\"The name of the company.\",\"example\":\"Blue Sun\",\"type\":\"string\"},\"notes\":{\"description\":\"The list of notes associated with the company\",\"properties\":{\"notes\":{\"items\":{\"description\":\"Notes allow you to annotate and comment on companies.\",\"properties\":{\"author\":{\"description\":\"Optional. Represents the Admin that created the note.\",\"nullable\":true,\"properties\":{\"avatar\":{\"description\":\"Image for the associated team or teammate\",\"example\":\"https://picsum.photos/200/300\",\"format\":\"uri\",\"nullable\":true,\"type\":\"string\"},\"away_mode_enabled\":{\"description\":\"Identifies if this admin is currently set in away mode.\",\"example\":false,\"type\":\"boolean\"},\"away_mode_reassign\":{\"description\":\"Identifies if this admin is set to automatically reassign new conversations to the apps default inbox.\",\"example\":false,\"type\":\"boolean\"},\"away_status_reason_id\":{\"description\":\"The unique identifier of the away status reason\",\"example\":12345,\"nullable\":true,\"type\":\"integer\"},\"email\":{\"description\":\"The email of the admin.\",\"example\":\"jdoe@example.com\",\"type\":\"string\"},\"has_inbox_seat\":{\"description\":\"Identifies if this admin has a paid inbox seat to restrict/allow features that require them.\",\"example\":true,\"type\":\"boolean\"},\"id\":{\"description\":\"The id representing the admin.\",\"example\":\"1295\",\"type\":\"string\"},\"job_title\":{\"description\":\"The job title of the admin.\",\"example\":\"Associate\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the admin.\",\"example\":\"Joe Example\",\"type\":\"string\"},\"role\":{\"description\":\"The role assigned to this admin. Only present if the admin has a role assigned.\",\"nullable\":true,\"properties\":{\"id\":{\"description\":\"The id of the role.\",\"example\":\"1\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the role.\",\"example\":\"Support Agent\",\"type\":\"string\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `role`.\",\"example\":\"role\",\"type\":\"string\"}},\"type\":\"object\"},\"team_ids\":{\"description\":\"This object represents the avatar associated with the admin.\",\"example\":[814865],\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"team_priority_level\":{\"description\":\"Admin priority levels for teams\",\"nullable\":true,\"properties\":{\"primary_team_ids\":{\"description\":\"The primary team ids for the team\",\"example\":[814865],\"items\":{\"type\":\"integer\"},\"nullable\":true,\"type\":\"array\"},\"secondary_team_ids\":{\"description\":\"The secondary team ids for the team\",\"example\":[493881],\"items\":{\"type\":\"integer\"},\"nullable\":true,\"type\":\"array\"}},\"title\":\"Team Priority Level\",\"type\":\"object\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `admin`.\",\"example\":\"admin\",\"type\":\"string\"}},\"title\":\"Admin\",\"type\":\"object\"},\"body\":{\"description\":\"The body text of the note.\",\"example\":\"<p>Text for the note.</p>\",\"type\":\"string\"},\"company\":{\"description\":\"Represents the company that the note was created about.\",\"nullable\":true,\"properties\":{\"id\":{\"description\":\"The id of the company.\",\"example\":\"6329bd9ffe4e2e91dac76188\",\"type\":\"string\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `company`.\",\"example\":\"company\",\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"description\":\"The time the note was created.\",\"example\":1674589321,\"format\":\"timestamp\",\"type\":\"integer\"},\"id\":{\"description\":\"The id of the note.\",\"example\":\"17495962\",\"type\":\"string\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `note`.\",\"example\":\"note\",\"type\":\"string\"}},\"title\":\"Company Note\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of the object\",\"enum\":[\"note.list\"],\"type\":\"string\"}},\"type\":\"object\"},\"plan\":{\"properties\":{\"id\":{\"description\":\"The id of the plan\",\"example\":\"269315\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the plan\",\"example\":\"Pro\",\"type\":\"string\"},\"type\":{\"description\":\"Value is always \\\"plan\\\"\",\"example\":\"plan\",\"type\":\"string\"}},\"type\":\"object\"},\"remote_created_at\":{\"description\":\"The time the company was created by you.\",\"example\":1663597223,\"type\":\"integer\"},\"segments\":{\"description\":\"The list of segments associated with the company\",\"properties\":{\"segments\":{\"items\":{\"description\":\"A segment is a group of your contacts defined by the rules that you set.\",\"properties\":{\"count\":{\"description\":\"The number of items in the user segment. It's returned when `include_count=true` is included in the request.\",\"example\":3,\"nullable\":true,\"type\":\"integer\"},\"created_at\":{\"description\":\"The time the segment was created.\",\"example\":1394621988,\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier representing the segment.\",\"example\":\"56203d253cba154d39010062\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the segment.\",\"example\":\"Active\",\"type\":\"string\"},\"person_type\":{\"description\":\"Type of the contact: contact (lead) or user.\",\"enum\":[\"contact\",\"user\"],\"example\":\"contact\",\"type\":\"string\"},\"type\":{\"description\":\"The type of object.\",\"enum\":[\"segment\"],\"example\":\"segment\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time the segment was updated.\",\"example\":1394622004,\"type\":\"integer\"}},\"title\":\"Segment\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of the object\",\"enum\":[\"segment.list\"],\"type\":\"string\"}},\"type\":\"object\"},\"session_count\":{\"description\":\"How many sessions the company has recorded.\",\"example\":100,\"type\":\"integer\"},\"size\":{\"description\":\"The number of employees in the company.\",\"example\":100,\"type\":\"integer\"},\"tags\":{\"description\":\"The list of tags associated with the company\",\"properties\":{\"tags\":{\"items\":{\"description\":\"A tag allows you to label your contacts, companies, and conversations and list them using that tag.\",\"properties\":{\"id\":{\"description\":\"The id of the tag\",\"example\":\"123456\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the tag\",\"example\":\"Test tag\",\"type\":\"string\"},\"type\":{\"description\":\"value is \\\"tag\\\"\",\"example\":\"tag\",\"type\":\"string\"}},\"title\":\"Tag\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of the object\",\"enum\":[\"tag.list\"],\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"description\":\"Value is `company`\",\"enum\":[\"company\"],\"example\":\"company\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The last time the company was updated.\",\"example\":1663597223,\"type\":\"integer\"},\"user_count\":{\"description\":\"The number of users in the company.\",\"example\":100,\"type\":\"integer\"},\"website\":{\"description\":\"The URL for the company website.\",\"example\":\"https://www.intercom.com\",\"type\":\"string\"}},\"title\":\"Company\",\"type\":\"object\"},\"type\":\"array\"},\"pages\":{\"description\":\"Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.\\nA \\\"cursor\\\" or pointer is used to keep track of the current position in the result set, allowing the API to return the data in small chunks or \\\"pages\\\" as needed.\\n\",\"nullable\":true,\"properties\":{\"next\":{\"nullable\":true,\"properties\":{\"per_page\":{\"description\":\"The number of results to fetch per page.\",\"example\":2,\"type\":\"integer\"},\"starting_after\":{\"description\":\"The cursor to use in the next request to get the next page of results.\",\"example\":\"your-cursor-from-response\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Pagination: Starting After\",\"type\":\"object\"},\"page\":{\"description\":\"The current page\",\"example\":1,\"type\":\"integer\"},\"per_page\":{\"description\":\"Number of results per page\",\"example\":2,\"type\":\"integer\"},\"total_pages\":{\"description\":\"Total number of pages\",\"example\":13,\"type\":\"integer\"},\"type\":{\"description\":\"the type of object `pages`.\",\"enum\":[\"pages\"],\"example\":\"pages\",\"type\":\"string\"}},\"title\":\"Cursor based pages\",\"type\":\"object\"},\"scroll_param\":{\"description\":\"The scroll parameter to use in the next request to fetch the next page of results.\",\"example\":\"25b649f7-4d33-4ef6-88f5-60e5b8244309\",\"type\":\"string\"},\"total_count\":{\"description\":\"The total number of companies\",\"example\":100,\"nullable\":true,\"type\":\"integer\"},\"type\":{\"description\":\"The type of object - `list`\",\"enum\":[\"list\"],\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Company Scroll\",\"type\":\"object\"}}},\"description\":\"Successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"ca269b05-8c42-4615-a28d-7df0eb1687c5\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/companies/scroll","segments":[{"lit":"companies"},{"lit":"scroll"}],"select":{"exist":["intercom_version","scroll_param"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"company_scroll","name__orig":"company_scroll","Name":"CompanyScroll","name_":"company_scroll","name-":"company-scroll","NAME":"COMPANY_SCROLL","index$":21}, {"active":true,"entity":"company_scroll","key$":"BasicCompanyScrollFlow","kind":"basic","name":"BasicCompanyScrollFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"company_scroll_ref01"}}],"index$":0}]}, 'CompanyScroll')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let company_scroll_ref01_data = Object.values(setup.data.existing.company_scroll)[0]

    // LIST
    const company_scroll_ref01_ent = client.CompanyScroll()
    const company_scroll_ref01_match = {}

    const company_scroll_ref01_list = (await company_scroll_ref01_ent.list(company_scroll_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/company_scroll/CompanyScrollTestData.json')

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
    ['company_scroll01','company_scroll02','company_scroll03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_COMPANY_SCROLL_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_COMPANY_SCROLL_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_COMPANY_SCROLL_ENTID']
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
  
