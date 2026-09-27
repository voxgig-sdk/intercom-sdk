
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


describe('ConversationParticipantEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.ConversationParticipant()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"conversation_participant","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /conversations/{conversation_id}/customers","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"id","or":"conversation_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/conversations/{conversation_id}/customers","q":{"$action":"customers","exist":["id","intercom_version"]},"r":{"param":{"conversation_id":"id"}},"s":[{"lit":"conversations"},{"var":"id"},{"lit":"customers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /conversations/{conversation_id}/customers/{contact_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"contact_id","or":"contact_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"123","k":"param","n":"conversation_id","or":"conversation_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/conversations/{conversation_id}/customers/{contact_id}","q":{"exist":["contact_id","conversation_id","intercom_version"]},"r":{},"s":[{"lit":"conversations"},{"var":"conversation_id"},{"lit":"customers"},{"var":"contact_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.conversation"]]},"key$":"conversation_participant","name__orig":"conversation_participant","Name":"ConversationParticipant","name_":"conversation_participant","name-":"conversation-participant","NAME":"CONVERSATION_PARTICIPANT","index$":35}, {"active":true,"entity":"conversation_participant","key$":"BasicConversationParticipantFlow","kind":"basic","name":"BasicConversationParticipantFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"conversation_participant_ref01"},"m":{"conversation_id":"conversation01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"conversation_participant_ref01","suffix":"_rm0"},"m":{"conversation_id":"conversation01","id":"conversation_participant01"},"o":"remove","s":[],"v":[],"index$":1}]}, 'ConversationParticipant', {"POST /conversations/{conversation_id}/customers":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"title":"Assign Conversation Request","type":"object","description":"Payload of the request to assign a conversation","properties":{"admin_id":{"type":"string","description":"The `id` of the admin who is adding the new participant.","example":"12345"},"customer":{"type":"object","oneOf":[{"title":"Intercom User ID","properties":{"intercom_user_id":{},"customer":{}},"required":["intercom_user_id"]},{"title":"User ID","properties":{"user_id":{},"customer":{}},"required":["user_id"]},{"title":"Email","properties":{"email":{},"customer":{}},"required":["email"]}]}},"x-ref":"#/components/schemas/attach_contact_to_conversation_request"},"examples":{"attach_a_contact_to_a_conversation":{"summary":"Attach a contact to a conversation","value":{"admin_id":991267731,"customer":{"intercom_user_id":"6762f19b1bb69f9f2193bbd4"}}},"not_found":{"summary":"Not found","value":{"admin_id":991267733,"customer":{"intercom_user_id":"6762f19e1bb69f9f2193bbd5"}}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"conversation_id","in":"path","required":true,"description":"The identifier for the conversation as given by Intercom.","example":"123","schema":{"type":"string"},"index$":1}]},"DELETE /conversations/{conversation_id}/customers/{contact_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"properties":{"admin_id":{"type":"string","description":"The `id` of the admin who is performing the action.","example":"5017690"}},"required":["admin_id"],"x-ref":"#/components/schemas/detach_contact_from_conversation_request"},"examples":{"detach_a_contact_from_a_group_conversation":{"summary":"Detach a contact from a group conversation","value":{"admin_id":991267739}},"conversation_not_found":{"summary":"Conversation not found","value":{"admin_id":991267742}},"contact_not_found":{"summary":"Contact not found","value":{"admin_id":991267745}},"last_customer":{"summary":"Last customer","value":{"admin_id":991267748}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"conversation_id","in":"path","required":true,"description":"The identifier for the conversation as given by Intercom.","example":"123","schema":{"type":"string"},"index$":1},{"name":"contact_id","in":"path","required":true,"description":"The identifier for the contact as given by Intercom.","example":"123","schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const conversation_participant_ref01_ent = client.ConversationParticipant()
    let conversation_participant_ref01_data = setup.data.new.conversation_participant['conversation_participant_ref01']
    conversation_participant_ref01_data['conversation_id'] = setup.idmap['conversation01']

    conversation_participant_ref01_data = (await conversation_participant_ref01_ent.create(conversation_participant_ref01_data)).data()
    assert(null != conversation_participant_ref01_data.id)


    // REMOVE
    const conversation_participant_ref01_match_rm0 = {}
    conversation_participant_ref01_match_rm0.id = conversation_participant_ref01_data.id
    await conversation_participant_ref01_ent.remove(conversation_participant_ref01_match_rm0)
  

  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conversation_participant/ConversationParticipantTestData.json')

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
    ['conversation_participant01','conversation_participant02','conversation_participant03','conversation01','conversation02','conversation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_CONVERSATION_PARTICIPANT_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_CONVERSATION_PARTICIPANT_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_CONVERSATION_PARTICIPANT_ENTID']
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
  
