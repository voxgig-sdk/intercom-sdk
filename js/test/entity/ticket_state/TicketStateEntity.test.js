
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


describe('TicketStateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.TicketState()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archived","req":false,"short":"Whether the ticket state is archived","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"category","req":false,"short":"The category of the ticket state","type":"`$STRING`","index$":1},{"active":true,"name":"external_label","req":false,"short":"The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal.","type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"short":"The id of the ticket state","type":"`$STRING`","index$":3},{"active":true,"name":"internal_label","req":false,"short":"The state the ticket is currently in, in a human readable form - visible in Intercom","type":"`$STRING`","index$":4},{"active":true,"name":"ticket_types","req":false,"short":"A list of ticket types associated with a given ticket state.","type":"`$OBJECT`","index$":5},{"active":true,"name":"type","req":false,"short":"String representing the object's type.","type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"ticket_state","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /ticket_states","json":"{\"operationId\":\"listTicketStates\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"data\":[{\"archived\":false,\"category\":\"submitted\",\"external_label\":\"Submitted\",\"id\":\"8269\",\"internal_label\":\"Submitted\",\"ticket_types\":{\"data\":[{\"archived\":false,\"category\":\"Back-office\",\"description\":\"my ticket type description is awesome.\",\"icon\":\"🦁\",\"id\":\"55\",\"is_internal\":false,\"name\":\"my-ticket-type-3\",\"type\":\"ticket_type\"},{\"archived\":false,\"category\":\"Back-office\",\"description\":\"my ticket type description is awesome.\",\"icon\":\"🦁\",\"id\":\"56\",\"is_internal\":false,\"name\":\"my-ticket-type-4\",\"type\":\"ticket_type\"},{\"archived\":false,\"category\":\"Back-office\",\"description\":\"my ticket type description is awesome.\",\"icon\":\"🦁\",\"id\":\"58\",\"is_internal\":false,\"name\":\"my-ticket-type-6\",\"type\":\"ticket_type\"}],\"type\":\"list\"},\"type\":\"ticket_state\"},{\"archived\":false,\"category\":\"in_progress\",\"external_label\":\"In progress\",\"id\":\"8270\",\"internal_label\":\"In progress\",\"ticket_types\":{\"data\":[{\"archived\":false,\"category\":\"Back-office\",\"description\":\"my ticket type description is awesome.\",\"icon\":\"🦁\",\"id\":\"55\",\"is_internal\":false,\"name\":\"my-ticket-type-3\",\"type\":\"ticket_type\"},{\"archived\":false,\"category\":\"Back-office\",\"description\":\"my ticket type description is awesome.\",\"icon\":\"🦁\",\"id\":\"56\",\"is_internal\":false,\"name\":\"my-ticket-type-4\",\"type\":\"ticket_type\"},{\"archived\":false,\"category\":\"Back-office\",\"description\":\"my ticket type description is awesome.\",\"icon\":\"🦁\",\"id\":\"58\",\"is_internal\":false,\"name\":\"my-ticket-type-6\",\"type\":\"ticket_type\"}],\"type\":\"list\"},\"type\":\"ticket_state\"},{\"archived\":false,\"category\":\"waiting_on_customer\",\"external_label\":\"Waiting on you\",\"id\":\"8271\",\"internal_label\":\"Waiting on customer\",\"ticket_types\":{\"data\":[{\"archived\":false,\"category\":\"Back-office\",\"description\":\"my ticket type description is awesome.\",\"icon\":\"🦁\",\"id\":\"55\",\"is_internal\":false,\"name\":\"my-ticket-type-3\",\"type\":\"ticket_type\"},{\"archived\":false,\"category\":\"Back-office\",\"description\":\"my ticket type description is awesome.\",\"icon\":\"🦁\",\"id\":\"56\",\"is_internal\":false,\"name\":\"my-ticket-type-4\",\"type\":\"ticket_type\"},{\"archived\":false,\"category\":\"Back-office\",\"description\":\"my ticket type description is awesome.\",\"icon\":\"🦁\",\"id\":\"58\",\"is_internal\":false,\"name\":\"my-ticket-type-6\",\"type\":\"ticket_type\"}],\"type\":\"list\"},\"type\":\"ticket_state\"},{\"archived\":false,\"category\":\"resolved\",\"external_label\":\"Resolved\",\"id\":\"8272\",\"internal_label\":\"Resolved\",\"ticket_types\":{\"data\":[{\"archived\":false,\"category\":\"Back-office\",\"description\":\"my ticket type description is awesome.\",\"icon\":\"🦁\",\"id\":\"55\",\"is_internal\":false,\"name\":\"my-ticket-type-3\",\"type\":\"ticket_type\"},{\"archived\":false,\"category\":\"Back-office\",\"description\":\"my ticket type description is awesome.\",\"icon\":\"🦁\",\"id\":\"56\",\"is_internal\":false,\"name\":\"my-ticket-type-4\",\"type\":\"ticket_type\"},{\"archived\":false,\"category\":\"Back-office\",\"description\":\"my ticket type description is awesome.\",\"icon\":\"🦁\",\"id\":\"58\",\"is_internal\":false,\"name\":\"my-ticket-type-6\",\"type\":\"ticket_type\"}],\"type\":\"list\"},\"type\":\"ticket_state\"},{\"archived\":false,\"category\":\"submitted\",\"external_label\":\"User label\",\"id\":\"8273\",\"internal_label\":\"Admin label 1\",\"ticket_types\":{\"data\":[{\"archived\":false,\"category\":\"Back-office\",\"description\":\"my ticket type description is awesome.\",\"icon\":\"🦁\",\"id\":\"55\",\"is_internal\":false,\"name\":\"my-ticket-type-3\",\"type\":\"ticket_type\"},{\"archived\":false,\"category\":\"Back-office\",\"description\":\"my ticket type description is awesome.\",\"icon\":\"🦁\",\"id\":\"56\",\"is_internal\":false,\"name\":\"my-ticket-type-4\",\"type\":\"ticket_type\"}],\"type\":\"list\"},\"type\":\"ticket_state\"},{\"archived\":false,\"category\":\"submitted\",\"external_label\":\"User label\",\"id\":\"8274\",\"internal_label\":\"Admin label 2\",\"ticket_types\":{\"data\":[{\"archived\":false,\"category\":\"Back-office\",\"description\":\"my ticket type description is awesome.\",\"icon\":\"🦁\",\"id\":\"58\",\"is_internal\":false,\"name\":\"my-ticket-type-6\",\"type\":\"ticket_type\"}],\"type\":\"list\"},\"type\":\"ticket_state\"}],\"type\":\"list\"}}},\"schema\":{\"description\":\"A list of ticket states associated with a given ticket type.\",\"properties\":{\"data\":{\"description\":\"A list of ticket states associated with a given ticket type.\",\"items\":{\"description\":\"A ticket state, used to define the state of a ticket.\",\"nullable\":true,\"properties\":{\"archived\":{\"description\":\"Whether the ticket state is archived\",\"example\":false,\"type\":\"boolean\"},\"category\":{\"description\":\"The category of the ticket state\",\"enum\":[\"submitted\",\"in_progress\",\"waiting_on_customer\",\"resolved\"],\"example\":\"in_progress\",\"type\":\"string\"},\"external_label\":{\"description\":\"The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal.\",\"example\":\"In Progress\",\"type\":\"string\"},\"id\":{\"description\":\"The id of the ticket state\",\"example\":\"12\",\"type\":\"string\"},\"internal_label\":{\"description\":\"The state the ticket is currently in, in a human readable form - visible in Intercom\",\"example\":\"With Dev Team\",\"type\":\"string\"},\"ticket_types\":{\"description\":\"A list of ticket types associated with a given ticket state.\",\"properties\":{\"data\":{\"description\":\"A list of ticket type attributes associated with a given ticket type.\",\"items\":{\"description\":\"A ticket type, used to define the data fields to be captured in a ticket.\",\"nullable\":true,\"properties\":{\"archived\":{\"description\":\"Whether the ticket type is archived or not.\",\"example\":false,\"type\":\"boolean\"},\"category\":{\"description\":\"Category of the Ticket Type.\",\"enum\":[\"Customer\",\"Back-office\",\"Tracker\"],\"example\":\"Customer\",\"type\":\"string\"},\"created_at\":{\"description\":\"The date and time the ticket type was created.\",\"format\":\"timestamp\",\"type\":\"integer\"},\"description\":{\"description\":\"The description of the ticket type\",\"example\":\"A bug that has been reported.\",\"type\":\"string\"},\"icon\":{\"description\":\"The icon of the ticket type\",\"example\":\"🐞\",\"type\":\"string\"},\"id\":{\"description\":\"The id representing the ticket type.\",\"example\":\"1295\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the ticket type\",\"example\":\"Bug\",\"type\":\"string\"},\"ticket_states\":{\"description\":\"A list of ticket states associated with a given ticket type.\",\"properties\":{\"data\":{\"description\":\"A list of ticket states associated with a given ticket type.\",\"items\":{\"description\":\"A ticket state, used to define the state of a ticket.\",\"nullable\":true,\"properties\":{\"category\":{\"description\":\"The category of the ticket state\",\"enum\":[\"submitted\",\"in_progress\",\"waiting_on_customer\",\"resolved\"],\"example\":\"in_progress\",\"type\":\"string\"},\"external_label\":{\"description\":\"The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal.\",\"example\":\"In Progress\",\"type\":\"string\"},\"id\":{\"description\":\"The id of the ticket state\",\"example\":\"12\",\"type\":\"string\"},\"internal_label\":{\"description\":\"The state the ticket is currently in, in a human readable form - visible in Intercom\",\"example\":\"With Dev Team\",\"type\":\"string\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `ticket_state`.\",\"example\":\"ticket_state\",\"type\":\"string\"}},\"title\":\"Ticket State\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `list`.\",\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Ticket States\",\"type\":\"object\"},\"ticket_type_attributes\":{\"description\":\"A list of attributes associated with a given ticket type.\",\"properties\":{\"ticket_type_attributes\":{\"description\":\"A list of ticket type attributes associated with a given ticket type.\",\"items\":{\"description\":\"Ticket type attribute, used to define each data field to be captured in a ticket.\",\"nullable\":true,\"properties\":{\"archived\":{\"description\":\"Whether the ticket type attribute is archived or not.\",\"example\":false,\"type\":\"boolean\"},\"created_at\":{\"description\":\"The date and time the ticket type attribute was created.\",\"format\":\"timestamp\",\"type\":\"integer\"},\"data_type\":{\"description\":\"The type of the data attribute (allowed values: \\\"string list integer decimal boolean datetime files\\\")\",\"example\":\"string\",\"type\":\"string\"},\"default\":{\"description\":\"Whether the attribute is built in or not.\",\"example\":true,\"type\":\"boolean\"},\"description\":{\"description\":\"The description of the ticket type attribute\",\"example\":\"Bug title.\",\"type\":\"string\"},\"id\":{\"description\":\"The id representing the ticket type attribute.\",\"example\":\"1\",\"type\":\"string\"},\"input_options\":{\"description\":\"Input options for the attribute\",\"example\":\"multiline: true\",\"type\":\"object\"},\"name\":{\"description\":\"The name of the ticket type attribute\",\"example\":\"Title\",\"type\":\"string\"},\"order\":{\"description\":\"The order of the attribute against other attributes\",\"example\":1,\"type\":\"integer\"},\"required_to_create\":{\"default\":false,\"description\":\"Whether the attribute is required or not for teammates.\",\"example\":false,\"type\":\"boolean\"},\"required_to_create_for_contacts\":{\"default\":false,\"description\":\"Whether the attribute is required or not for contacts.\",\"example\":false,\"type\":\"boolean\"},\"ticket_type_id\":{\"description\":\"The id of the ticket type that the attribute belongs to.\",\"example\":42,\"type\":\"integer\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `ticket_type_attribute`.\",\"example\":\"ticket_type_attribute\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The date and time the ticket type attribute was last updated.\",\"format\":\"timestamp\",\"type\":\"integer\"},\"visible_on_create\":{\"default\":true,\"description\":\"Whether the attribute is visible or not to teammates.\",\"example\":false,\"type\":\"boolean\"},\"visible_to_contacts\":{\"default\":true,\"description\":\"Whether the attribute is visible or not to contacts.\",\"example\":false,\"type\":\"boolean\"},\"workspace_id\":{\"description\":\"The id of the workspace that the ticket type attribute belongs to.\",\"example\":\"ecahpwf5\",\"type\":\"string\"}},\"title\":\"Ticket Type Attribute\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `ticket_type_attributes.list`.\",\"type\":\"string\"}},\"title\":\"Ticket Type Attributes\",\"type\":\"object\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `ticket_type`.\",\"example\":\"ticket_type\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The date and time the ticket type was last updated.\",\"format\":\"timestamp\",\"type\":\"integer\"},\"workspace_id\":{\"description\":\"The id of the workspace that the ticket type belongs to.\",\"example\":\"ecahpwf5\",\"type\":\"string\"}},\"title\":\"Ticket Type\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `list`.\",\"example\":\"list\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `ticket_state`.\",\"example\":\"ticket_state\",\"type\":\"string\"}},\"title\":\"Ticket State\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `list`.\",\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Ticket States\",\"type\":\"object\"}}},\"description\":\"successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"5e0bd231-7307-42e6-a6ee-babf05bd163b\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/ticket_states","segments":[{"lit":"ticket_states"}],"select":{"exist":["intercom_version"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"ticket_state","name__orig":"ticket_state","Name":"TicketState","name_":"ticket_state","name-":"ticket-state","NAME":"TICKET_STATE","index$":82}, {"active":true,"entity":"ticket_state","key$":"BasicTicketStateFlow","kind":"basic","name":"BasicTicketStateFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"ticket_state_ref01"}}],"index$":0}]}, 'TicketState')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ticket_state_ref01_data = Object.values(setup.data.existing.ticket_state)[0]

    // LIST
    const ticket_state_ref01_ent = client.TicketState()
    const ticket_state_ref01_match = {}

    const ticket_state_ref01_list = (await ticket_state_ref01_ent.list(ticket_state_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/ticket_state/TicketStateTestData.json')

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
    ['ticket_state01','ticket_state02','ticket_state03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_TICKET_STATE_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_TICKET_STATE_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_TICKET_STATE_ENTID']
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
  
