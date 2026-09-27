
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived":{"a":true,"h":"Archived","n":"archived","r":false,"sh":"Whether the ticket state is archived","t":"`$BOOLEAN`","key$":"archived","index$":0},"category":{"a":true,"h":"Category","n":"category","r":false,"sh":"The category of the ticket state","t":"`$STRING`","key$":"category","index$":1},"external_label":{"a":true,"h":"External Label","n":"external_label","r":false,"sh":"The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal.","t":"`$STRING`","key$":"external_label","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The id of the ticket state","t":"`$STRING`","key$":"id","index$":3},"internal_label":{"a":true,"h":"Internal Label","n":"internal_label","r":false,"sh":"The state the ticket is currently in, in a human readable form - visible in Intercom","t":"`$STRING`","key$":"internal_label","index$":4},"ticket_types":{"a":true,"h":"Ticket Types","n":"ticket_types","r":false,"sh":"A list of ticket types associated with a given ticket state.","t":"`$OBJECT`","key$":"ticket_types","index$":5},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"String representing the object's type.","t":"`$STRING`","key$":"type","index$":6}},"id":{"field":"id","name":"id"},"name":"ticket_state","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /ticket_states","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/ticket_states","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"ticket_states"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"ticket_state","name__orig":"ticket_state","Name":"TicketState","name_":"ticket_state","name-":"ticket-state","NAME":"TICKET_STATE","index$":82}, {"active":true,"entity":"ticket_state","key$":"BasicTicketStateFlow","kind":"basic","name":"BasicTicketStateFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"ticket_state_ref01"}}],"index$":0}]}, 'TicketState', {"GET /ticket_states":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]}})
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
  
