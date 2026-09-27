
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


describe('FinAgentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.FinAgent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"attachments":{"a":true,"h":"Attachments","n":"attachments","r":false,"sh":"An array of attachments to include with the message.","t":"`$ARRAY`","key$":"attachments","index$":0},"conversation":{"a":true,"h":"Conversation","n":"conversation","r":false,"sh":"Conversation-related attribute errors.","t":"`$OBJECT`","key$":"conversation","index$":1},"conversation_id":{"a":true,"h":"Conversation Id","n":"conversation_id","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The external ID of the rated conversation.","t":"`$STRING`","key$":"conversation_id","index$":2},"conversation_metadata":{"a":true,"h":"Conversation Metadata","n":"conversation_metadata","r":false,"sh":"Metadata about the conversation, including history and attributes.","t":"`$OBJECT`","key$":"conversation_metadata","index$":3},"message":{"a":true,"h":"Message","n":"message","r":true,"sh":"A message exchanged within a Fin Agent conversation.","t":"`$OBJECT`","key$":"message","index$":4},"rating":{"a":true,"h":"Rating","n":"rating","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The rating now recorded on the conversation.","t":"`$STRING`","key$":"rating","index$":5},"remark":{"a":true,"h":"Remark","n":"remark","r":false,"sh":"Optional free-text comment the user left alongside the rating.","t":"`$STRING`","key$":"remark","index$":6},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"The result of the submission.","t":"`$STRING`","key$":"status","index$":7},"user":{"a":true,"h":"User","n":"user","op":{"create":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"User-related attribute errors.","t":"`$OBJECT`","key$":"user","index$":8}},"name":"fin_agent","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /fin/csat","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/fin/csat","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"fin"},{"lit":"csat"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /fin/reply","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/fin/reply","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"fin"},{"lit":"reply"}],"t":{"req":"`reqdata`","res":"`body.errors`"},"index$":1},{"a":true,"co":{"id":"POST /fin/start","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/fin/start","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"fin"},{"lit":"start"}],"t":{"req":"`reqdata`","res":"`body.errors`"},"index$":2}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"fin_agent","name__orig":"fin_agent","Name":"FinAgent","name_":"fin_agent","name-":"fin-agent","NAME":"FIN_AGENT","index$":52}, {"active":true,"entity":"fin_agent","key$":"BasicFinAgentFlow","kind":"basic","name":"BasicFinAgentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"fin_agent_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'FinAgent', {"POST /fin/csat":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"conversation_id":{"type":"string","description":"Your external conversation ID — the same ID you started the conversation with, and the one echoed on the `csat_requested` event.","example":"ext-123","key$":"conversation_id"},"rating":{"type":"string","enum":["terrible","bad","ok","good","amazing"],"description":"The rating the user selected — one of the `key` values from the `csat_requested` event's options.","example":"amazing","key$":"rating"},"remark":{"type":"string","description":"Optional free-text comment the user left alongside the rating. Can be added to an already-rated survey, but only once — the rating locks after a remark is recorded.","example":"Fin solved my problem in seconds.","key$":"remark"}},"required":["conversation_id","rating"],"index$":1},"examples":{"Submit a rating":{"value":{"conversation_id":"ext-123","rating":"amazing"}},"Submit a rating with a remark":{"value":{"conversation_id":"ext-123","rating":"amazing","remark":"Fin solved my problem in seconds."}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"POST /fin/reply":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"conversation_id":{"type":"string","description":"The ID of the conversation.","example":"123456","key$":"conversation_id"},"message":{"title":"Fin Agent Message","type":"object","description":"A message exchanged within a Fin Agent conversation.","x-tags":["Fin Agent"],"properties":{"author":{"type":"string","enum":["user","agent","fin"],"description":"The author that created the message.","example":"user"},"body":{"type":"string","description":"The body of the message. Accepts both plain text and HTML format.\nWhen sending a message to Fin, this should contain the user's message.\nFin's response will be returned as HTML.\n","example":"How can I see my account details?"},"timestamp":{"type":"string","format":"date-time","description":"The timestamp when the message was created.\nUsed to deduplicate messages sent within a 5 minute window.\nIdeally should include milliseconds for higher precision.\n","example":"2025-01-24T10:01:20.000Z"},"timestamp_ms":{"type":"string","format":"date-time","description":"The timestamp when the message was created, with millisecond precision.\nOnly present in webhook event responses (fin_replied).\n","example":"2025-01-24T10:01:20.456Z"}},"required":["author","body","timestamp"],"x-ref":"#/components/schemas/fin_agent_message","key$":"message"},"user":{"title":"Fin Agent User","type":"object","description":"A user object representing the user in a Fin Agent conversation.","x-tags":["Fin Agent"],"properties":{"id":{"type":"string","description":"The ID of the user. This value will be used to uniquely identify the user\nduring a conversation with Fin. Maps to the user_id field on the Intercom User object.\n","example":"123456"},"name":{"type":"string","description":"The name of the user.","example":"John Doe"},"email":{"type":"string","format":"email","description":"The email of the user.","example":"john.doe@example.com"},"attributes":{"type":"object","description":"A hash of attributes associated with the user.\nAttributes can be used by Fin to target content and responses.\nLimit to 10 attributes.\n","additionalProperties":true,"example":{"plan_type":"Pro","subscription_status":"active"}}},"required":["id"],"x-ref":"#/components/schemas/fin_agent_user","key$":"user"},"attachments":{"type":"array","description":"An array of attachments to include with the message. Maximum of 10 attachments.","maxItems":10,"items":{"title":"Fin Agent Attachment","type":"object","description":"An attachment object representing a file or URL attachment included with a message.\nAttachments can be used to provide additional context to Fin.\nMaximum of 10 attachments per request.\n","x-tags":["Fin Agent"],"properties":{"type":{"type":"string","enum":[],"description":"The type of attachment.","example":"url"},"url":{"type":"string","format":"uri","description":"The URL of the attachment. Required when type is 'url'. Must be publicly accessible.","example":"https://example.com/document.pdf"},"name":{"type":"string","description":"The name of the file. Required when type is 'file'.","example":"screenshot.png"},"content_type":{"type":"string","description":"The MIME type of the file. Required when type is 'file'.","example":"image/png"},"data":{"type":"string","format":"byte","description":"Base64-encoded file data. Required when type is 'file'.","example":"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk..."}},"required":["type"],"x-ref":"#/components/schemas/fin_agent_attachment"},"key$":"attachments"}},"required":["conversation_id","message","user"],"index$":1},"examples":{"Basic reply":{"value":{"conversation_id":"123456","message":{"author":"user","body":"Here's the information you requested.","timestamp":"2025-01-24T09:01:00.000Z"},"user":{"id":"123456","name":"John Doe","email":"john.doe@example.com"}}},"Reply with attachments":{"value":{"conversation_id":"123456","message":{"author":"user","body":"Here's the invoice you asked for.","timestamp":"2025-01-24T09:01:00.000Z"},"user":{"id":"123456","name":"John Doe","email":"john.doe@example.com"},"attachments":[{"type":"url","url":"https://example.com/invoice.pdf"}]}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"POST /fin/start":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"conversation_id":{"type":"string","description":"The ID of the conversation that is calling Fin via this API.","example":"ext-123","key$":"conversation_id"},"message":{"title":"Fin Agent Message","type":"object","description":"A message exchanged within a Fin Agent conversation.","x-tags":["Fin Agent"],"properties":{"author":{"type":"string","enum":["user","agent","fin"],"description":"The author that created the message.","example":"user"},"body":{"type":"string","description":"The body of the message. Accepts both plain text and HTML format.\nWhen sending a message to Fin, this should contain the user's message.\nFin's response will be returned as HTML.\n","example":"How can I see my account details?"},"timestamp":{"type":"string","format":"date-time","description":"The timestamp when the message was created.\nUsed to deduplicate messages sent within a 5 minute window.\nIdeally should include milliseconds for higher precision.\n","example":"2025-01-24T10:01:20.000Z"},"timestamp_ms":{"type":"string","format":"date-time","description":"The timestamp when the message was created, with millisecond precision.\nOnly present in webhook event responses (fin_replied).\n","example":"2025-01-24T10:01:20.456Z"}},"required":["author","body","timestamp"],"x-ref":"#/components/schemas/fin_agent_message","key$":"message"},"user":{"title":"Fin Agent User","type":"object","description":"A user object representing the user in a Fin Agent conversation.","x-tags":["Fin Agent"],"properties":{"id":{"type":"string","description":"The ID of the user. This value will be used to uniquely identify the user\nduring a conversation with Fin. Maps to the user_id field on the Intercom User object.\n","example":"123456"},"name":{"type":"string","description":"The name of the user.","example":"John Doe"},"email":{"type":"string","format":"email","description":"The email of the user.","example":"john.doe@example.com"},"attributes":{"type":"object","description":"A hash of attributes associated with the user.\nAttributes can be used by Fin to target content and responses.\nLimit to 10 attributes.\n","additionalProperties":true,"example":{"plan_type":"Pro","subscription_status":"active"}}},"required":["id"],"x-ref":"#/components/schemas/fin_agent_user","key$":"user"},"attachments":{"type":"array","description":"An array of attachments to include with the message. Maximum of 10 attachments.","maxItems":10,"items":{"title":"Fin Agent Attachment","type":"object","description":"An attachment object representing a file or URL attachment included with a message.\nAttachments can be used to provide additional context to Fin.\nMaximum of 10 attachments per request.\n","x-tags":["Fin Agent"],"properties":{"type":{"type":"string","enum":[],"description":"The type of attachment.","example":"url"},"url":{"type":"string","format":"uri","description":"The URL of the attachment. Required when type is 'url'. Must be publicly accessible.","example":"https://example.com/document.pdf"},"name":{"type":"string","description":"The name of the file. Required when type is 'file'.","example":"screenshot.png"},"content_type":{"type":"string","description":"The MIME type of the file. Required when type is 'file'.","example":"image/png"},"data":{"type":"string","format":"byte","description":"Base64-encoded file data. Required when type is 'file'.","example":"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk..."}},"required":["type"],"x-ref":"#/components/schemas/fin_agent_attachment"},"key$":"attachments"},"conversation_metadata":{"title":"Fin Agent Conversation Metadata","type":"object","description":"Metadata about the conversation, including history and attributes.","x-tags":["Fin Agent"],"properties":{"history":{"type":"array","description":"An array of previous messages in the conversation before Fin is initialized.\nThis data provides context to Fin and helps generate a better answer.\nLimit to the last 10 messages.\n","maxItems":10,"items":{"title":"Fin Agent Message","type":"object","description":"A message exchanged within a Fin Agent conversation.","x-tags":[],"properties":{},"required":[],"x-ref":"#/components/schemas/fin_agent_message"}},"attributes":{"type":"object","description":"A hash of attributes associated with the conversation.\nThese attributes can be used by Fin to provide more contextual responses.\nLimit to 10 attributes.\n","additionalProperties":true,"example":{"priority_level":"high","department":"sales"}}},"x-ref":"#/components/schemas/fin_agent_conversation_metadata","key$":"conversation_metadata"}},"required":["conversation_id","message","user"],"index$":1},"examples":{"Basic request":{"value":{"conversation_id":"ext-123","message":{"author":"user","body":"How can I see my account details?","timestamp":"2025-01-24T10:01:20.000Z"},"user":{"id":"123456","name":"John Doe","email":"john.doe@example.com"}}},"Request with conversation history":{"value":{"conversation_id":"ext-123","message":{"author":"user","body":"How can I see my account details?","timestamp":"2025-01-24T10:01:20.000Z"},"user":{"id":"123456","name":"John Doe","email":"john.doe@example.com","attributes":{"plan_type":"Pro","subscription_status":"active"}},"conversation_metadata":{"history":[{"author":"user","body":"I need help","timestamp":"2025-01-24T10:00:01Z"},{"author":"agent","body":"What do you need help with?","timestamp":"2025-01-24T10:01:00Z"}],"attributes":{"priority_level":"high","department":"sales"}}}},"Request with attachments":{"value":{"conversation_id":"ext-123","message":{"author":"user","body":"Here is a screenshot of the issue","timestamp":"2025-01-24T10:01:20.000Z"},"user":{"id":"123456","name":"John Doe","email":"john.doe@example.com"},"attachments":[{"type":"url","url":"https://example.com/document.pdf"},{"type":"file","name":"screenshot.png","content_type":"image/png","data":"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk..."}]}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const fin_agent_ref01_ent = client.FinAgent()
    let fin_agent_ref01_data = setup.data.new.fin_agent['fin_agent_ref01']

    fin_agent_ref01_data = (await fin_agent_ref01_ent.create(fin_agent_ref01_data)).data()
    assert(null != fin_agent_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/fin_agent/FinAgentTestData.json')

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
    ['fin_agent01','fin_agent02','fin_agent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_FIN_AGENT_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_FIN_AGENT_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_FIN_AGENT_ENTID']
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
  
