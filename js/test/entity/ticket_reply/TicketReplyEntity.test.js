
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


describe('TicketReplyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.TicketReply()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"attachments","req":false,"short":"A list of attachments for the part.","type":"`$ARRAY`","index$":0},{"active":true,"name":"author","req":false,"short":"The author that wrote or triggered the part.","type":"`$OBJECT`","index$":1},{"active":true,"name":"body","req":false,"short":"The message body, which may contain HTML.","type":"`$STRING`","index$":2},{"active":true,"format":"date-time","name":"created_at","req":false,"short":"The time the note was created.","type":"`$INTEGER`","index$":3},{"active":true,"name":"id","req":false,"short":"The id representing the part.","type":"`$STRING`","index$":4},{"active":true,"name":"part_type","req":false,"short":"Type of the part","type":"`$STRING`","index$":5},{"active":true,"name":"redacted","req":false,"short":"Whether or not the ticket part has been redacted.","type":"`$BOOLEAN`","index$":6},{"active":true,"name":"skip_notifications","req":false,"short":"Option to disable notifications when replying to a Ticket.","type":"`$BOOLEAN`","index$":7},{"active":true,"name":"type","req":false,"short":"Always ticket_part","type":"`$STRING`","index$":8},{"active":true,"format":"date-time","name":"updated_at","req":false,"short":"The last time the note was updated.","type":"`$INTEGER`","index$":9}],"id":{"field":"id","name":"id"},"name":"ticket_reply","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"123","kind":"param","name":"id","orig":"ticket_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /tickets/{ticket_id}/reply","json":"{\"operationId\":\"replyTicket\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"in\":\"path\",\"name\":\"ticket_id\",\"required\":true,\"schema\":{\"description\":\"The id of the ticket to target.\\n{% admonition type=\\\"info\\\" name=\\\"Not the Inbox ticket ID\\\" %}\\nThis is the internal `id` field from the API response, not the `ticket_id` displayed in the Intercom Inbox (e.g., #12345). Use the `id` value from the ticket object returned by the API.\\n{% /admonition %}\\n\",\"example\":\"123\",\"title\":\"Ticket ID\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"admin_note_cross_post_reply\":{\"summary\":\"Admin note reply with cross-post to linked conversations\",\"value\":{\"admin_id\":991267943,\"body\":\"This note will be cross-posted to all linked conversations.\",\"cross_post\":true,\"message_type\":\"note\",\"type\":\"admin\"}},\"admin_note_reply\":{\"summary\":\"Admin note reply\",\"value\":{\"admin_id\":991267943,\"body\":\"<html> <body>  <h2>An Unordered HTML List</h2>  <ul>   <li>Coffee</li>   <li>Tea</li>   <li>Milk</li> </ul>    <h2>An Ordered HTML List</h2>  <ol>   <li>Coffee</li>   <li>Tea</li>   <li>Milk</li> </ol>   </body> </html>\",\"message_type\":\"note\",\"type\":\"admin\"}},\"admin_quick_reply_reply\":{\"summary\":\"Admin quick_reply reply\",\"value\":{\"admin_id\":991267948,\"message_type\":\"quick_reply\",\"reply_options\":[{\"text\":\"Yes\",\"uuid\":\"0df48b85-9a93-4c66-a167-753eff0baaec\"},{\"text\":\"No\",\"uuid\":\"4f0b5145-4193-4b4f-8cad-ce19478a3938\"}],\"type\":\"admin\"}},\"not_found\":{\"summary\":\"Not found\",\"value\":{\"body\":\"Thanks again :)\",\"intercom_user_id\":\"6762f2a41bb69f9f2193bc4c\",\"message_type\":\"comment\",\"type\":\"user\"}},\"user_reply\":{\"summary\":\"User reply\",\"value\":{\"body\":\"Thanks again :)\",\"intercom_user_id\":\"6762f2971bb69f9f2193bc49\",\"message_type\":\"comment\",\"type\":\"user\"}}},\"schema\":{\"oneOf\":[{\"oneOf\":[{\"allOf\":[{\"properties\":{\"attachment_urls\":{\"description\":\"A list of image URLs that will be added as attachments. You can include up to 10 URLs.\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"maxItems\":10,\"title\":\"Attachment URLs\",\"type\":\"array\"},\"body\":{\"description\":\"The text body of the comment.\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time the reply was created. If not provided, the current time will be used.\",\"example\":1590000000,\"type\":\"integer\"},\"message_type\":{\"enum\":[\"comment\"],\"type\":\"string\"},\"reply_options\":{\"description\":\"The quick reply selection the contact wishes to respond with. These map to buttons displayed in the Messenger UI if sent by a bot, or the reply options sent by an Admin via the API.\",\"items\":{\"properties\":{\"text\":{\"description\":\"The text of the chosen reply option.\",\"type\":\"string\"},\"uuid\":{\"description\":\"The unique identifier for the quick reply option selected.\",\"format\":\"uuid\",\"type\":\"string\"}},\"required\":[\"text\",\"uuid\"],\"title\":\"Quick Reply Option\",\"type\":\"object\"},\"title\":\"Contact Quick Reply\",\"type\":\"array\"},\"type\":{\"enum\":[\"user\"],\"type\":\"string\"}},\"required\":[\"message_type\",\"type\",\"body\"],\"title\":\"Contact Reply Base Object\",\"type\":\"object\"}],\"description\":\"Payload of the request to reply on behalf of a contact using their `intercom_user_id`\",\"properties\":{\"intercom_user_id\":{\"description\":\"The identifier for the contact as given by Intercom.\",\"type\":\"string\"}},\"required\":[\"intercom_user_id\"],\"title\":\"Intercom User ID\",\"type\":\"object\"},{\"allOf\":[{\"properties\":{\"$ref\":\"#/requestBody/content/application~1json/schema/oneOf/0/oneOf/0/allOf/0/properties\"},\"required\":{\"$ref\":\"#/requestBody/content/application~1json/schema/oneOf/0/oneOf/0/allOf/0/required\"},\"title\":\"Contact Reply Base Object\",\"type\":\"object\"}],\"description\":\"Payload of the request to reply on behalf of a contact using their `user_id`\",\"properties\":{\"user_id\":{\"description\":\"The external_id you have defined for the contact.\",\"type\":\"string\"}},\"required\":[\"user_id\"],\"title\":\"User ID\",\"type\":\"object\"},{\"allOf\":[{\"properties\":{\"$ref\":\"#/requestBody/content/application~1json/schema/oneOf/0/oneOf/0/allOf/0/properties\"},\"required\":{\"$ref\":\"#/requestBody/content/application~1json/schema/oneOf/0/oneOf/0/allOf/0/required\"},\"title\":\"Contact Reply Base Object\",\"type\":\"object\"}],\"description\":\"Payload of the request to reply on behalf of a contact using their `email`\",\"properties\":{\"email\":{\"description\":\"The email you have defined for the user.\",\"type\":\"string\"}},\"required\":[\"email\"],\"title\":\"Email\",\"type\":\"object\"}],\"title\":\"Contact Reply on ticket\"},{\"description\":\"Payload of the request to reply on behalf of an admin\",\"properties\":{\"admin_id\":{\"description\":\"The id of the admin who is authoring the comment.\",\"example\":\"3156780\",\"type\":\"string\"},\"attachment_files\":{\"description\":\"A list of files that will be added as attachments. You can include up to 10 files. If both attachment_files and attachment_urls are provided, attachment_files takes precedence.\",\"items\":{\"description\":\"Properties of the attachment files in a conversation part\",\"properties\":{\"content_type\":{\"description\":\"The content type of the file\",\"example\":\"application/json\",\"type\":\"string\"},\"data\":{\"description\":\"The base64 encoded file data.\",\"example\":\"ewogICJ0ZXN0IjogMQp9\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the file.\",\"example\":\"test.json\",\"type\":\"string\"}},\"title\":\"Conversation attachment files\",\"type\":\"object\"},\"maxItems\":10,\"type\":\"array\"},\"attachment_urls\":{\"description\":\"A list of image URLs that will be added as attachments. You can include up to 10 URLs.\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"maxItems\":10,\"type\":\"array\"},\"body\":{\"description\":\"The text body of the reply. Notes accept some HTML formatting. Must be present for comment and note message types.\",\"example\":\"Hello there!\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time the reply was created. If not provided, the current time will be used.\",\"example\":1590000000,\"type\":\"integer\"},\"cross_post\":{\"description\":\"If set to true, the note will be cross-posted to all linked conversations. Only applicable to note message types on back-office tickets.\",\"example\":true,\"type\":\"boolean\"},\"message_type\":{\"enum\":[\"comment\",\"note\",\"quick_reply\"],\"example\":\"comment\",\"type\":\"string\"},\"reply_options\":{\"description\":\"The quick reply options to display. Must be present for quick_reply message types.\",\"items\":{\"properties\":{\"text\":{\"description\":\"The text to display in this quick reply option.\",\"type\":\"string\"},\"uuid\":{\"description\":\"A unique identifier for this quick reply option. This value will be available within the metadata of the comment ticket part that is created when a user clicks on this reply option.\",\"format\":\"uuid\",\"type\":\"string\"}},\"required\":[\"text\",\"uuid\"],\"title\":\"Quick Reply Option\",\"type\":\"object\"},\"title\":\"Quick Reply Options\",\"type\":\"array\"},\"type\":{\"enum\":[\"admin\"],\"example\":\"admin\",\"type\":\"string\"}},\"required\":[\"message_type\",\"type\",\"admin_id\"],\"title\":\"Admin Reply on ticket\",\"type\":\"object\"}],\"properties\":{\"skip_notifications\":{\"description\":\"Option to disable notifications when replying to a Ticket.\",\"example\":true,\"type\":\"boolean\"}}}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Admin note reply\":{\"value\":{\"app_package_code\":\"test-integration\",\"attachments\":[],\"author\":{\"email\":\"admin419@email.com\",\"id\":\"991267943\",\"name\":\"Ciaran419 Lee\",\"type\":\"admin\"},\"body\":\"<h2>An Unordered HTML List</h2>\\n<ul>\\n<li>Coffee</li>\\n<li>Tea</li>\\n<li>Milk</li>\\n</ul>\\n<h2>An Ordered HTML List</h2>\\n<ol>\\n<li>Coffee</li>\\n<li>Tea</li>\\n<li>Milk</li>\\n</ol>\",\"created_at\":1734537884,\"id\":\"156\",\"part_type\":\"note\",\"redacted\":false,\"type\":\"ticket_part\",\"updated_at\":1734537884}},\"Admin quick_reply reply\":{\"value\":{\"attachments\":[],\"author\":{\"email\":\"admin423@email.com\",\"id\":\"991267948\",\"name\":\"Ciaran423 Lee\",\"type\":\"admin\"},\"created_at\":1734537890,\"id\":\"158\",\"part_type\":\"quick_reply\",\"redacted\":false,\"type\":\"ticket_part\",\"updated_at\":1734537890}}},\"schema\":{\"description\":\"A Ticket Part representing a note, comment, or quick_reply on a ticket\",\"properties\":{\"attachments\":{\"description\":\"A list of attachments for the part.\",\"items\":{\"description\":\"The file attached to a part\",\"properties\":{\"content_type\":{\"description\":\"The content type of the attachment\",\"example\":\"image/png\",\"type\":\"string\"},\"filesize\":{\"description\":\"The size of the attachment\",\"example\":100,\"type\":\"integer\"},\"height\":{\"description\":\"The height of the attachment\",\"example\":100,\"type\":\"integer\"},\"name\":{\"description\":\"The name of the attachment\",\"example\":\"example.png\",\"type\":\"string\"},\"type\":{\"description\":\"The type of attachment\",\"example\":\"upload\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of the attachment\",\"example\":\"https://picsum.photos/200/300\",\"type\":\"string\"},\"width\":{\"description\":\"The width of the attachment\",\"example\":100,\"type\":\"integer\"}},\"title\":\"Part attachment\",\"type\":\"object\"},\"title\":\"Ticket part attachments\",\"type\":\"array\"},\"author\":{\"description\":\"The author that wrote or triggered the part. Can be a bot, admin, team or user.\",\"properties\":{\"email\":{\"description\":\"The email of the author\",\"example\":\"operator+abcd1234@intercom.io\",\"format\":\"email\",\"type\":\"string\"},\"id\":{\"description\":\"The id of the author\",\"example\":\"274\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the author\",\"example\":\"Operator\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type of the author\",\"enum\":[\"admin\",\"bot\",\"team\",\"user\"],\"example\":\"admin\",\"type\":\"string\"}},\"title\":\"Ticket part author\",\"type\":\"object\"},\"body\":{\"description\":\"The message body, which may contain HTML.\",\"example\":\"<p>Okay!</p>\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time the note was created.\",\"example\":1663597223,\"format\":\"date-time\",\"type\":\"integer\"},\"id\":{\"description\":\"The id representing the part.\",\"example\":\"3\",\"type\":\"string\"},\"part_type\":{\"description\":\"Type of the part\",\"enum\":[\"note\",\"comment\",\"quick_reply\"],\"example\":\"note\",\"type\":\"string\"},\"redacted\":{\"description\":\"Whether or not the ticket part has been redacted.\",\"example\":false,\"type\":\"boolean\"},\"type\":{\"description\":\"Always ticket_part\",\"enum\":[\"ticket_part\"],\"example\":\"ticket_part\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The last time the note was updated.\",\"example\":1663597260,\"format\":\"date-time\",\"type\":\"integer\"}},\"title\":\"A Ticket Part representing a note, comment, or quick_reply on a ticket\",\"type\":\"object\"}}},\"description\":\"Admin Reply to send Quick Reply Options\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"User reply\":{\"value\":{\"errors\":[{\"code\":\"parameter_mismatch\",\"message\":\"User replies are not allowed on Backoffice tickets\"}],\"request_id\":\"603ce1da-f2bf-4641-a1ee-d1f13ebf9172\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"User reply\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"ed4305b3-4364-4fab-9f8d-e07e9a8190ab\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Resource Not Found\"}],\"request_id\":\"24561472-06a4-41b2-aca2-97b3ccd9ca19\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/tickets/{ticket_id}/reply","rename":{"param":{"ticket_id":"id"}},"segments":[{"lit":"tickets"},{"var":"id"},{"lit":"reply"}],"select":{"exist":["id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"ticket_reply","name__orig":"ticket_reply","Name":"TicketReply","name_":"ticket_reply","name-":"ticket-reply","NAME":"TICKET_REPLY","index$":81}, {"active":true,"entity":"ticket_reply","key$":"BasicTicketReplyFlow","kind":"basic","name":"BasicTicketReplyFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"ticket_reply_ref01"},"match":{"ticket_id":"ticket01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'TicketReply')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ticket_reply_ref01_ent = client.TicketReply()
    let ticket_reply_ref01_data = setup.data.new.ticket_reply['ticket_reply_ref01']
    ticket_reply_ref01_data['ticket_id'] = setup.idmap['ticket01']

    ticket_reply_ref01_data = (await ticket_reply_ref01_ent.create(ticket_reply_ref01_data)).data()
    assert(null != ticket_reply_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/ticket_reply/TicketReplyTestData.json')

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
    ['ticket_reply01','ticket_reply02','ticket_reply03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_TICKET_REPLY_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_TICKET_REPLY_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_TICKET_REPLY_ENTID']
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
  
