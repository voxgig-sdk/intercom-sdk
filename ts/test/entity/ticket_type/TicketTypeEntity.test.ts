

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { IntercomSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('TicketTypeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.TicketType()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ticket_type.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived":{"a":true,"h":"Archived","n":"archived","r":false,"sh":"Whether the ticket type is archived or not.","t":"`$BOOLEAN`","key$":"archived","index$":0},"category":{"a":true,"h":"Category","n":"category","r":false,"sh":"Category of the Ticket Type.","t":"`$STRING`","key$":"category","index$":1},"created_at":{"a":true,"fo":"timestamp","h":"Created At","n":"created_at","r":false,"sh":"The date and time the ticket type was created.","t":"`$INTEGER`","key$":"created_at","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The description of the ticket type","t":"`$STRING`","key$":"description","index$":3},"icon":{"a":true,"h":"Icon","n":"icon","r":false,"sh":"The icon of the ticket type","t":"`$STRING`","key$":"icon","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The id representing the ticket type.","t":"`$STRING`","key$":"id","index$":5},"is_internal":{"a":true,"h":"Is Internal","n":"is_internal","r":false,"sh":"Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers.","t":"`$BOOLEAN`","key$":"is_internal","index$":6},"name":{"a":true,"h":"Name","n":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The name of the ticket type","t":"`$STRING`","key$":"name","index$":7},"ticket_states":{"a":true,"h":"Ticket States","n":"ticket_states","r":false,"sh":"A list of ticket states associated with a given ticket type.","t":"`$OBJECT`","key$":"ticket_states","index$":8},"ticket_type_attributes":{"a":true,"h":"Ticket Type Attributes","n":"ticket_type_attributes","r":false,"sh":"A list of attributes associated with a given ticket type.","t":"`$OBJECT`","key$":"ticket_type_attributes","index$":9},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"String representing the object's type.","t":"`$STRING`","key$":"type","index$":10},"updated_at":{"a":true,"fo":"timestamp","h":"Updated At","n":"updated_at","r":false,"sh":"The date and time the ticket type was last updated.","t":"`$INTEGER`","key$":"updated_at","index$":11},"workspace_id":{"a":true,"h":"Workspace Id","n":"workspace_id","r":false,"sh":"The id of the workspace that the ticket type belongs to.","t":"`$STRING`","key$":"workspace_id","index$":12}},"id":{"field":"id","name":"id"},"name":"ticket_type","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /ticket_types","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/ticket_types","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"ticket_types"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /ticket_types","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/ticket_types","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"ticket_types"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /ticket_types/{ticket_type_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"ticket_type_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/ticket_types/{ticket_type_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"ticket_type_id":"id"}},"s":[{"lit":"ticket_types"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /ticket_types/{ticket_type_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"ticket_type_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/ticket_types/{ticket_type_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"ticket_type_id":"id"}},"s":[{"lit":"ticket_types"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"ticket_type","name__orig":"ticket_type","Name":"TicketType","name_":"ticket_type","name-":"ticket-type","NAME":"TICKET_TYPE","index$":83}, {"active":true,"entity":"ticket_type","key$":"BasicTicketTypeFlow","kind":"basic","name":"BasicTicketTypeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ticket_type_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"ticket_type_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"ticket_type_ref01","srcdatavar":"ticket_type_ref01_data","suffix":"_up0","textfield":"category"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ticket_type_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"ticket_type_ref01","srcdatavar":"ticket_type_ref01_data","suffix":"_dt0"},"m":{"id":"ticket_type01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ticket_type_ref01"}}],"index$":3}]}, 'TicketType', {"POST /ticket_types":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"The request payload for creating a ticket type.\n  You can copy the `icon` property for your ticket type from [Twemoji Cheatsheet](https://twemoji-cheatsheet.vercel.app/)\n","type":"object","title":"Create Ticket Type Request Payload","nullable":true,"properties":{"name":{"type":"string","description":"The name of the ticket type.","example":"Bug","key$":"name"},"description":{"type":"string","description":"The description of the ticket type.","example":"Used for tracking bugs","key$":"description"},"category":{"type":"string","description":"Category of the Ticket Type.","enum":["Customer","Back-office","Tracker"],"example":"Customer","key$":"category"},"icon":{"type":"string","description":"The icon of the ticket type.","example":"🐞","default":"🎟️","key$":"icon"},"is_internal":{"type":"boolean","description":"Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers. This is currently a limited attribute.","example":false,"default":false,"key$":"is_internal"}},"required":["name"],"x-ref":"#/components/schemas/create_ticket_type_request","index$":1},"examples":{"ticket_type_created":{"summary":"Ticket type created","value":{"name":"Customer Issue","description":"Customer Report Template","icon":"🎟️","category":"Customer"}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /ticket_types":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /ticket_types/{ticket_type_id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"ticket_type_id","in":"path","required":true,"description":"The unique identifier for the ticket type which is given by Intercom.","schema":{"type":"string"},"index$":1}]},"PUT /ticket_types/{ticket_type_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"The request payload for updating a ticket type.\nYou can copy the `icon` property for your ticket type from [Twemoji Cheatsheet](https://twemoji-cheatsheet.vercel.app/)\n","type":"object","title":"Update Ticket Type Request Payload","nullable":true,"properties":{"name":{"type":"string","description":"The name of the ticket type.","example":"Bug","key$":"name"},"description":{"type":"string","description":"The description of the ticket type.","example":"A bug has been occured","key$":"description"},"category":{"type":"string","description":"Category of the Ticket Type.","enum":["Customer","Back-office","Tracker"],"example":"Customer","key$":"category"},"icon":{"type":"string","description":"The icon of the ticket type.","example":"🐞","default":"🎟️","key$":"icon"},"archived":{"type":"boolean","description":"The archived status of the ticket type.","example":false,"key$":"archived"},"is_internal":{"type":"boolean","description":"Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers. This is currently a limited attribute.","example":false,"default":false,"key$":"is_internal"}},"x-ref":"#/components/schemas/update_ticket_type_request","index$":1},"examples":{"ticket_type_updated":{"summary":"Ticket type updated","value":{"name":"Bug Report 2"}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"ticket_type_id","in":"path","required":true,"description":"The unique identifier for the ticket type which is given by Intercom.","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ticket_type_ref01_ent = client.TicketType()
    let ticket_type_ref01_data = setup.data.new.ticket_type['ticket_type_ref01']

    ticket_type_ref01_data = (await ticket_type_ref01_ent.create(ticket_type_ref01_data)).data()
    assert(null != ticket_type_ref01_data.id)


    // LIST
    const ticket_type_ref01_match: any = {}

    const ticket_type_ref01_list = (await ticket_type_ref01_ent.list(ticket_type_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(ticket_type_ref01_list, { id: ticket_type_ref01_data.id })))


    // UPDATE
    const ticket_type_ref01_data_up0: any = {}
    ticket_type_ref01_data_up0.id = ticket_type_ref01_data.id

    const ticket_type_ref01_markdef_up0 = { name: 'category', value: 'Mark01-ticket_type_ref01_' + setup.now }
    ;(ticket_type_ref01_data_up0 as any)[ticket_type_ref01_markdef_up0.name] = ticket_type_ref01_markdef_up0.value

    const ticket_type_ref01_resdata_up0 = (await ticket_type_ref01_ent.update(ticket_type_ref01_data_up0)).data()
    assert(ticket_type_ref01_resdata_up0.id === ticket_type_ref01_data_up0.id)

    assert((ticket_type_ref01_resdata_up0 as any)[ticket_type_ref01_markdef_up0.name] === ticket_type_ref01_markdef_up0.value)


    // LOAD
    const ticket_type_ref01_match_dt0: any = {}
    ticket_type_ref01_match_dt0.id = ticket_type_ref01_data.id
    const ticket_type_ref01_data_dt0 = (await ticket_type_ref01_ent.load(ticket_type_ref01_match_dt0)).data()
    assert(ticket_type_ref01_data_dt0.id === ticket_type_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ticket_type/TicketTypeTestData.json')

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
    ['ticket_type01','ticket_type02','ticket_type03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_TICKET_TYPE_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_TICKET_TYPE_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_TICKET_TYPE_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
