
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


describe('SideConversationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.SideConversation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"conversation_parts","req":false,"short":"The conversation parts (messages) in this side conversation.","type":"`$ARRAY`","union":{"branches":6,"count":1,"depth":3},"index$":0},{"active":true,"name":"side_conversation_id","req":false,"short":"The unique identifier for the side conversation.","type":"`$STRING`","index$":1},{"active":true,"name":"total_count","req":false,"short":"The total number of conversation parts in this side conversation.","type":"`$INTEGER`","index$":2}],"name":"side_conversation","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"123","kind":"param","name":"conversation_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":25,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /conversations/{id}/side_conversations","json":"{\"operationId\":\"listSideConversations\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The identifier for the conversation as given by Intercom.\",\"example\":\"123\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The page number of results to return (starting from 1).\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"The number of side conversations to return per page (max 50).\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"schema\":{\"default\":25,\"maximum\":50,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"pages\":{\"page\":1,\"per_page\":25,\"total_pages\":1,\"type\":\"pages\"},\"side_conversations\":[{\"conversation_parts\":[{\"author\":{\"email\":\"jane@example.com\",\"id\":\"123\",\"name\":\"Jane Example\",\"type\":\"admin\"},\"body\":\"<p>Internal note about this issue</p>\",\"created_at\":1663597223,\"id\":\"789\",\"part_type\":\"comment\",\"type\":\"conversation_part\",\"updated_at\":1663597223}],\"side_conversation_id\":\"456\",\"total_count\":1}],\"total_count\":1,\"type\":\"side_conversation.list\"}}},\"schema\":{\"description\":\"A paginated list of side conversations for a conversation.\",\"properties\":{\"pages\":{\"description\":\"Pagination metadata.\",\"properties\":{\"page\":{\"description\":\"The current page number.\",\"example\":1,\"type\":\"integer\"},\"per_page\":{\"description\":\"The number of results per page.\",\"example\":25,\"type\":\"integer\"},\"total_pages\":{\"description\":\"The total number of pages.\",\"example\":1,\"type\":\"integer\"},\"type\":{\"enum\":[\"pages\"],\"example\":\"pages\",\"type\":\"string\"}},\"type\":\"object\"},\"side_conversations\":{\"description\":\"An array of side conversation objects.\",\"items\":{\"description\":\"A side conversation with its conversation parts.\",\"properties\":{\"conversation_parts\":{\"description\":\"The conversation parts (messages) in this side conversation.\",\"items\":{\"description\":\"A Conversation Part represents a message in the conversation.\",\"properties\":{\"app_package_code\":{\"description\":\"The app package code if this part was created via API. null if the part was not created via API.\",\"example\":\"test-integration\",\"nullable\":true,\"type\":\"string\"},\"assigned_to\":{\"description\":\"The assignee this conversation_part assigned the conversation to, as a reference whose `type` is `admin`, `team` or `bot`. When the part unassigned the conversation, `type` is `nobody_admin` and `id` is `null`. Null when the part did not change the assignment, or when the assignee has since been deleted.\",\"nullable\":true,\"properties\":{\"id\":{\"description\":\"\",\"example\":\"1a2b3c\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"\",\"example\":\"contact\",\"type\":\"string\"}},\"title\":\"Reference\",\"type\":\"object\"},\"attachments\":{\"description\":\"A list of attachments for the part.\",\"items\":{\"description\":\"The file attached to a part\",\"properties\":{\"content_type\":{\"description\":\"The content type of the attachment\",\"example\":\"image/png\",\"type\":\"string\"},\"filesize\":{\"description\":\"The size of the attachment\",\"example\":100,\"type\":\"integer\"},\"height\":{\"description\":\"The height of the attachment\",\"example\":100,\"type\":\"integer\"},\"name\":{\"description\":\"The name of the attachment\",\"example\":\"example.png\",\"type\":\"string\"},\"type\":{\"description\":\"The type of attachment\",\"example\":\"upload\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of the attachment\",\"example\":\"https://picsum.photos/200/300\",\"type\":\"string\"},\"width\":{\"description\":\"The width of the attachment\",\"example\":100,\"type\":\"integer\"}},\"title\":\"Part attachment\",\"type\":\"object\"},\"title\":\"Conversation part attachments\",\"type\":\"array\"},\"author\":{\"description\":\"The object who initiated the conversation, which can be a Contact, Admin or Team. Bots and campaigns send messages on behalf of Admins or Teams. For Twitter, this will be blank.\",\"properties\":{\"email\":{\"description\":\"The email of the author\",\"example\":\"operator+abcd1234@intercom.io\",\"format\":\"email\",\"type\":\"string\"},\"from_ai_agent\":{\"description\":\"If this conversation part was sent by the AI Agent\",\"example\":true,\"type\":\"boolean\"},\"id\":{\"description\":\"The id of the author\",\"example\":\"274\",\"type\":\"string\"},\"is_ai_answer\":{\"description\":\"If this conversation part body was generated by the AI Agent\",\"example\":false,\"type\":\"boolean\"},\"name\":{\"description\":\"The name of the author\",\"example\":\"Operator\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type of the author\",\"example\":\"admin\",\"type\":\"string\"}},\"title\":\"Conversation part author\",\"type\":\"object\"},\"body\":{\"description\":\"The message body, which may contain HTML. For Twitter, this will show a generic message regarding why the body is obscured. In webhook payloads for API version 2.15+, this field returns plain text.\",\"example\":\"<p>Okay!</p>\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time the conversation part was created.\",\"example\":1663597223,\"format\":\"date-time\",\"type\":\"integer\"},\"email_message_metadata\":{\"description\":\"Contains metadata if the message was sent as an email\",\"nullable\":true,\"properties\":{\"email_address_headers\":{\"description\":\"A list of an email address headers.\",\"items\":{\"description\":\"Contains data for an email address header for a conversation part that was sent as an email.\",\"properties\":{\"email_address\":{\"description\":\"The email address\",\"example\":\"jdoe@example.com\",\"type\":\"string\"},\"name\":{\"description\":\"The name associated with the email address\",\"example\":\"Joe Example\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type of email address header\",\"example\":\"from\",\"type\":\"string\"}},\"title\":\"Email Address Header\",\"type\":\"object\"},\"title\":\"Email Address Headers\",\"type\":\"array\"},\"message_id\":{\"description\":\"The unique identifier for the email message as specified in the Message-ID header\",\"example\":\"<CADKw7xrXzqSn8v3mP8K8Q8yZ6K8Q8yZ6@mail.gmail.com>\",\"nullable\":true,\"type\":\"string\"},\"subject\":{\"description\":\"The subject of the email\",\"example\":\"Question about my order\",\"type\":\"string\"}},\"title\":\"Email Message Metadata\",\"type\":\"object\"},\"event_details\":{\"anyOf\":[{\"description\":\"Contains details about the workflow that was triggered and any Custom Data Attributes (CDAs) that were modified during the workflow execution for conversation part type <code>conversation_attribute_updated_by_workflow</code>.\",\"properties\":{\"attribute\":{\"properties\":{\"name\":{\"description\":\"Name of the CDA updated\",\"example\":\"flight_category\",\"type\":\"string\"}},\"type\":\"object\"},\"value\":{\"properties\":{\"name\":{\"description\":\"Value of the CDA updated\",\"example\":\"vip_status\",\"type\":\"string\"}},\"type\":\"object\"},\"workflow\":{\"properties\":{\"name\":{\"description\":\"Name of the workflow\",\"example\":\"Workflow 1\",\"type\":\"string\"}},\"type\":\"object\"}},\"title\":\"Part type - conversation_attribute_updated_by_workflow\",\"type\":\"object\"},{\"description\":\"Contains details about Custom Data Attributes (CDAs) that were modified by an admin (operator) for conversation part type <code>conversation_attribute_updated_by_admin</code>.\",\"properties\":{\"attribute\":{\"properties\":{\"name\":{\"description\":\"Name of the CDA updated\",\"example\":\"jira_issue_key\",\"type\":\"string\"}},\"type\":\"object\"},\"value\":{\"properties\":{\"name\":{\"description\":\"Current value of the CDA updated\",\"example\":\"PROJ-007\",\"type\":\"string\"},\"previous\":{\"description\":\"Previous value of the CDA\",\"example\":\"PROJ-006\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"title\":\"Part type - conversation_attribute_updated_by_admin\",\"type\":\"object\"},{\"description\":\"Contains details about Custom Data Attributes (CDAs) that were modified by a user for conversation part type <code>conversation_attribute_updated_by_user</code>.\",\"properties\":{\"attribute\":{\"properties\":{\"name\":{\"description\":\"Name of the CDA updated\",\"example\":\"Priority\",\"type\":\"string\"}},\"type\":\"object\"},\"value\":{\"properties\":{\"name\":{\"description\":\"Current value of the CDA updated\",\"example\":\"High\",\"type\":\"string\"},\"previous\":{\"description\":\"Previous value of the CDA (null for older events)\",\"example\":\"Medium\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"title\":\"Part type - conversation_attribute_updated_by_user\",\"type\":\"object\"},{\"description\":\"Contains details about name of the action that was initiated for conversation part type <code>custom_action_started</code>.\",\"properties\":{\"action\":{\"properties\":{\"name\":{\"description\":\"Name of the action\",\"example\":\"Jira Create Issue\",\"type\":\"string\"}},\"type\":\"object\"}},\"title\":\"Part type - custom_action_started\",\"type\":\"object\"},{\"description\":\"Contains details about final status of the completed action for conversation part type <code>custom_action_finished</code>.\",\"properties\":{\"action\":{\"properties\":{\"name\":{\"description\":\"Name of the action\",\"example\":\"Jira Create Issue\",\"type\":\"string\"},\"result\":{\"description\":\"Status of the action\",\"enum\":[\"success\",\"failed\"],\"example\":\"success\",\"type\":\"string\"}},\"type\":\"object\"}},\"title\":\"Part type - custom_action_finished\",\"type\":\"object\"},{\"description\":\"Contains details about name of the workflow for conversation part type <code>operator_workflow_event</code>.\",\"properties\":{\"event\":{\"properties\":{\"result\":{\"description\":\"Result of the workflow event\",\"example\":\"Finsihed waiting\",\"type\":\"string\"},\"type\":{\"description\":\"Type of the workflow event initiated\",\"example\":\"wait_finished\",\"type\":\"string\"}},\"type\":\"object\"},\"workflow\":{\"properties\":{\"name\":{\"description\":\"The name of the workflow\",\"example\":\"Custom Bot 1\",\"type\":\"string\"}},\"type\":\"object\"}},\"title\":\"Part type - operator_workflow_event\",\"type\":\"object\"}],\"nullable\":true,\"title\":\"Event details of Workflow & actions\",\"type\":\"object\"},\"external_id\":{\"description\":\"The external id of the conversation part\",\"example\":\"abcd1234\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"The id representing the conversation part.\",\"example\":\"3\",\"type\":\"string\"},\"metadata\":{\"description\":\"Metadata for a conversation part\",\"nullable\":true,\"properties\":{\"quick_reply_options\":{\"description\":\"The quick reply options sent by the Admin or bot, presented in this conversation part.\",\"items\":{\"allOf\":[{\"properties\":{\"text\":{\"description\":\"The text to display in this quick reply option.\",\"type\":\"string\"},\"uuid\":{\"description\":\"A unique identifier for this quick reply option. This value will be available within the metadata of the comment conversation part that is created when a user clicks on this reply option.\",\"format\":\"uuid\",\"type\":\"string\"}},\"required\":[\"text\",\"uuid\"],\"title\":\"Quick Reply Option\",\"type\":\"object\"}],\"properties\":{\"translations\":{\"description\":\"The translations for the quick reply option.\",\"example\":{\"en\":\"Hello\",\"fr\":\"Bonjour\"},\"nullable\":true,\"type\":\"object\"}}},\"type\":\"array\"},\"quick_reply_uuid\":{\"description\":\"The unique identifier for the quick reply option that was clicked by the end user.\",\"example\":\"123e4567-e89b-12d3-a456-426614174000\",\"format\":\"uuid\",\"type\":\"string\"}},\"title\":\"Conversation Part Metadata\",\"type\":\"object\"},\"notified_at\":{\"description\":\"The time the user was notified with the conversation part.\",\"example\":1663597260,\"format\":\"date-time\",\"type\":\"integer\"},\"part_type\":{\"description\":\"The type of conversation part.\",\"example\":\"comment\",\"type\":\"string\"},\"redacted\":{\"description\":\"Whether or not the conversation part has been redacted.\",\"example\":false,\"type\":\"boolean\"},\"state\":{\"description\":\"Indicates the current state of conversation when the conversation part was created.\",\"enum\":[\"open\",\"closed\",\"snoozed\"],\"example\":\"open\",\"type\":\"string\"},\"tags\":{\"description\":\"A list of tags objects associated with the conversation part.\",\"items\":{\"description\":\"A tag allows you to label your contacts, companies, and conversations and list them using that tag.\",\"properties\":{\"id\":{\"description\":\"The id of the tag\",\"example\":\"123456\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the tag\",\"example\":\"Test tag\",\"type\":\"string\"},\"type\":{\"description\":\"value is \\\"tag\\\"\",\"example\":\"tag\",\"type\":\"string\"}},\"title\":\"Tag\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"type\":{\"description\":\"Always conversation_part\",\"example\":\"conversation_part\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The last time the conversation part was updated.\",\"example\":1663597260,\"format\":\"date-time\",\"type\":\"integer\"}},\"title\":\"Conversation Part\",\"type\":\"object\"},\"type\":\"array\"},\"side_conversation_id\":{\"description\":\"The unique identifier for the side conversation.\",\"example\":\"456\",\"type\":\"string\"},\"total_count\":{\"description\":\"The total number of conversation parts in this side conversation.\",\"example\":1,\"type\":\"integer\"}},\"title\":\"Side Conversation Summary\",\"type\":\"object\"},\"type\":\"array\"},\"total_count\":{\"description\":\"The total number of side conversations.\",\"example\":1,\"type\":\"integer\"},\"type\":{\"description\":\"The type of the response object.\",\"enum\":[\"side_conversation.list\"],\"example\":\"side_conversation.list\",\"type\":\"string\"}},\"title\":\"Side Conversation List\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Conversation not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/conversations/{id}/side_conversations","rename":{"param":{"id":"conversation_id"}},"segments":[{"lit":"conversations"},{"var":"conversation_id"},{"lit":"side_conversations"}],"select":{"exist":["conversation_id","intercom_version","page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["conversation"]]},"key$":"side_conversation","name__orig":"side_conversation","Name":"SideConversation","name_":"side_conversation","name-":"side-conversation","NAME":"SIDE_CONVERSATION","index$":73}, {"active":true,"entity":"side_conversation","key$":"BasicSideConversationFlow","kind":"basic","name":"BasicSideConversationFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"conversation_id":"conversation01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"side_conversation_ref01"}}],"index$":0}]}, 'SideConversation')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let side_conversation_ref01_data = Object.values(setup.data.existing.side_conversation)[0]

    // LIST
    const side_conversation_ref01_ent = client.SideConversation()
    const side_conversation_ref01_match = {}
    side_conversation_ref01_match['conversation_id'] = setup.idmap['conversation01']

    const side_conversation_ref01_list = (await side_conversation_ref01_ent.list(side_conversation_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/side_conversation/SideConversationTestData.json')

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
    ['side_conversation01','side_conversation02','side_conversation03','conversation01','conversation02','conversation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_SIDE_CONVERSATION_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_SIDE_CONVERSATION_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_SIDE_CONVERSATION_ENTID']
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
  
