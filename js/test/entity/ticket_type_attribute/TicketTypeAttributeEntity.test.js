
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


describe('TicketTypeAttributeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.TicketTypeAttribute()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allow_multiple_values":{"a":true,"h":"Allow Multiple Values","n":"allow_multiple_values","r":false,"sh":"Whether the attribute allows multiple files to be attached to it (only applicable to file attributes)","t":"`$BOOLEAN`","key$":"allow_multiple_values","index$":0},"archived":{"a":true,"h":"Archived","n":"archived","r":false,"sh":"Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets)","t":"`$BOOLEAN`","key$":"archived","index$":1},"data_type":{"a":true,"h":"Data Type","n":"data_type","r":true,"sh":"The data type of the attribute","t":"`$STRING`","key$":"data_type","index$":2},"description":{"a":true,"h":"Description","n":"description","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The description of the attribute presented to the teammate or contact","t":"`$STRING`","key$":"description","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"list_items":{"a":true,"h":"List Items","n":"list_items","r":false,"sh":"A comma delimited list of items for the attribute value (only applicable to list attributes)","t":"`$STRING`","key$":"list_items","index$":5},"multiline":{"a":true,"h":"Multiline","n":"multiline","r":false,"sh":"Whether the attribute allows multiple lines of text (only applicable to string attributes)","t":"`$BOOLEAN`","key$":"multiline","index$":6},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The name of the ticket type attribute","t":"`$STRING`","key$":"name","index$":7},"required_to_create":{"a":true,"h":"Required To Create","n":"required_to_create","r":false,"sh":"Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox.","t":"`$BOOLEAN`","key$":"required_to_create","index$":8},"required_to_create_for_contacts":{"a":true,"h":"Required To Create For Contacts","n":"required_to_create_for_contacts","r":false,"sh":"Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger.","t":"`$BOOLEAN`","key$":"required_to_create_for_contacts","index$":9},"visible_on_create":{"a":true,"h":"Visible On Create","n":"visible_on_create","r":false,"sh":"Whether the attribute is visible to teammates when creating a ticket in Inbox.","t":"`$BOOLEAN`","key$":"visible_on_create","index$":10},"visible_to_contacts":{"a":true,"h":"Visible To Contacts","n":"visible_to_contacts","r":false,"sh":"Whether the attribute is visible to contacts when creating a ticket in Messenger.","t":"`$BOOLEAN`","key$":"visible_to_contacts","index$":11}},"id":{"field":"id","name":"id"},"name":"ticket_type_attribute","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /ticket_types/{ticket_type_id}/attributes","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"ticket_type_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/ticket_types/{ticket_type_id}/attributes","q":{"exist":["id","intercom_version"]},"r":{"param":{"ticket_type_id":"id"}},"s":[{"lit":"ticket_types"},{"var":"id"},{"lit":"attributes"}],"t":{"req":"`reqdata`","res":"`body.input_options`"},"index$":0}],"key$":"create"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /ticket_types/{ticket_type_id}/attributes/{attribute_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"attribute_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"ticket_type_id","or":"ticket_type_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/ticket_types/{ticket_type_id}/attributes/{attribute_id}","q":{"exist":["id","intercom_version","ticket_type_id"]},"r":{"param":{"attribute_id":"id"}},"s":[{"lit":"ticket_types"},{"var":"ticket_type_id"},{"lit":"attributes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.input_options`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.ticket_type"]]},"key$":"ticket_type_attribute","name__orig":"ticket_type_attribute","Name":"TicketTypeAttribute","name_":"ticket_type_attribute","name-":"ticket-type-attribute","NAME":"TICKET_TYPE_ATTRIBUTE","index$":84}, {"active":true,"entity":"ticket_type_attribute","key$":"BasicTicketTypeAttributeFlow","kind":"basic","name":"BasicTicketTypeAttributeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ticket_type_attribute_ref01"},"m":{"ticket_type_id":"ticket_type01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"ticket_type_id":"ticket_type01"},"i":{"ref":"ticket_type_attribute_ref01","srcdatavar":"ticket_type_attribute_ref01_data","suffix":"_up0","textfield":"data_type"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ticket_type_attribute_ref01"}}],"v":[],"index$":1}]}, 'TicketTypeAttribute', {"POST /ticket_types/{ticket_type_id}/attributes":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"You can create a Ticket Type Attribute","type":"object","title":"Create Ticket Type Attribute Request Payload","properties":{"name":{"type":"string","description":"The name of the ticket type attribute","example":"Bug Priority","key$":"name"},"description":{"type":"string","description":"The description of the attribute presented to the teammate or contact","example":"Priority level of the bug","key$":"description"},"data_type":{"type":"string","description":"The data type of the attribute","enum":["string","list","integer","decimal","boolean","datetime","files"],"example":"string","key$":"data_type"},"required_to_create":{"type":"boolean","description":"Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox.","default":false,"example":false,"key$":"required_to_create"},"required_to_create_for_contacts":{"type":"boolean","description":"Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger.","default":false,"example":false,"key$":"required_to_create_for_contacts"},"visible_on_create":{"type":"boolean","description":"Whether the attribute is visible to teammates when creating a ticket in Inbox.","default":true,"example":true,"key$":"visible_on_create"},"visible_to_contacts":{"type":"boolean","description":"Whether the attribute is visible to contacts when creating a ticket in Messenger.","default":true,"example":true,"key$":"visible_to_contacts"},"multiline":{"type":"boolean","description":"Whether the attribute allows multiple lines of text (only applicable to string attributes)","example":false,"key$":"multiline"},"list_items":{"type":"string","description":"A comma delimited list of items for the attribute value (only applicable to list attributes)","example":"Low Priority,Medium Priority,High Priority","key$":"list_items"},"allow_multiple_values":{"type":"boolean","description":"Whether the attribute allows multiple files to be attached to it (only applicable to file attributes)","example":false,"key$":"allow_multiple_values"}},"required":["name","description","data_type"],"x-ref":"#/components/schemas/create_ticket_type_attribute_request","index$":1},"examples":{"ticket_type_attribute_created":{"summary":"Ticket Type Attribute created","value":{"name":"Attribute Title","description":"Attribute Description","data_type":"string","required_to_create":false}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"ticket_type_id","in":"path","required":true,"description":"The unique identifier for the ticket type which is given by Intercom.","schema":{"type":"string"},"index$":1}]},"PUT /ticket_types/{ticket_type_id}/attributes/{attribute_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"You can update a Ticket Type Attribute","type":"object","title":"Update Ticket Type Attribute Request Payload","properties":{"name":{"type":"string","description":"The name of the ticket type attribute","example":"Bug Priority","key$":"name"},"description":{"type":"string","description":"The description of the attribute presented to the teammate or contact","example":"Priority level of the bug","key$":"description"},"required_to_create":{"type":"boolean","description":"Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox.","default":false,"example":false,"key$":"required_to_create"},"required_to_create_for_contacts":{"type":"boolean","description":"Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger.","default":false,"example":false,"key$":"required_to_create_for_contacts"},"visible_on_create":{"type":"boolean","description":"Whether the attribute is visible to teammates when creating a ticket in Inbox.","default":true,"example":true,"key$":"visible_on_create"},"visible_to_contacts":{"type":"boolean","description":"Whether the attribute is visible to contacts when creating a ticket in Messenger.","default":true,"example":true,"key$":"visible_to_contacts"},"multiline":{"type":"boolean","description":"Whether the attribute allows multiple lines of text (only applicable to string attributes)","example":false,"key$":"multiline"},"list_items":{"type":"string","description":"A comma delimited list of items for the attribute value (only applicable to list attributes)","example":"Low Priority,Medium Priority,High Priority","key$":"list_items"},"allow_multiple_values":{"type":"boolean","description":"Whether the attribute allows multiple files to be attached to it (only applicable to file attributes)","example":false,"key$":"allow_multiple_values"},"archived":{"type":"boolean","description":"Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets)","example":false,"key$":"archived"}},"x-ref":"#/components/schemas/update_ticket_type_attribute_request","index$":1},"examples":{"ticket_type_attribute_updated":{"summary":"Ticket Type Attribute updated","value":{"description":"New Attribute Description"}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"ticket_type_id","in":"path","required":true,"description":"The unique identifier for the ticket type which is given by Intercom.","schema":{"type":"string"},"index$":1},{"name":"attribute_id","in":"path","required":true,"description":"The unique identifier for the ticket type attribute which is given by Intercom.","schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ticket_type_attribute_ref01_ent = client.TicketTypeAttribute()
    let ticket_type_attribute_ref01_data = setup.data.new.ticket_type_attribute['ticket_type_attribute_ref01']
    ticket_type_attribute_ref01_data['ticket_type_id'] = setup.idmap['ticket_type01']

    ticket_type_attribute_ref01_data = (await ticket_type_attribute_ref01_ent.create(ticket_type_attribute_ref01_data)).data()
    assert(null != ticket_type_attribute_ref01_data.id)


    // UPDATE
    const ticket_type_attribute_ref01_data_up0 = {}
    ticket_type_attribute_ref01_data_up0.id = ticket_type_attribute_ref01_data.id
    ticket_type_attribute_ref01_data_up0 ['ticket_type_id'] = setup.idmap['ticket_type_id']

    const ticket_type_attribute_ref01_markdef_up0 = { name: 'data_type', value: 'Mark01-ticket_type_attribute_ref01_' + setup.now }
    ticket_type_attribute_ref01_data_up0 [ticket_type_attribute_ref01_markdef_up0.name] = ticket_type_attribute_ref01_markdef_up0.value

    const ticket_type_attribute_ref01_resdata_up0 = (await ticket_type_attribute_ref01_ent.update(ticket_type_attribute_ref01_data_up0)).data()
    assert(ticket_type_attribute_ref01_resdata_up0.id === ticket_type_attribute_ref01_data_up0.id)

    assert(ticket_type_attribute_ref01_resdata_up0[ticket_type_attribute_ref01_markdef_up0.name] === ticket_type_attribute_ref01_markdef_up0.value)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/ticket_type_attribute/TicketTypeAttributeTestData.json')

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
    ['ticket_type_attribute01','ticket_type_attribute02','ticket_type_attribute03','ticket_type01','ticket_type02','ticket_type03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_TICKET_TYPE_ATTRIBUTE_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_TICKET_TYPE_ATTRIBUTE_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_TICKET_TYPE_ATTRIBUTE_ENTID']
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
  
