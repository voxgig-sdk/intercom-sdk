

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


describe('TicketEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Ticket()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ticket.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"admin_assignee_id":{"a":true,"h":"Admin Assignee Id","n":"admin_assignee_id","r":false,"sh":"The id representing the admin assigned to the ticket.","t":"`$INTEGER`","key$":"admin_assignee_id","index$":0},"attributes":{"a":true,"h":"Attributes","n":"attributes","r":false,"sh":"The attributes set on the ticket.","t":"`$OBJECT`","union":{"branches":4,"count":1,"depth":1},"key$":"attributes","index$":1},"category":{"a":true,"h":"Category","n":"category","r":false,"sh":"Category of the Ticket.","t":"`$STRING`","key$":"category","index$":2},"contacts":{"a":true,"h":"Contacts","n":"contacts","r":false,"sh":"The list of contacts affected by a ticket.","t":"`$OBJECT`","key$":"contacts","index$":3},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"The time the ticket was created as a UTC Unix timestamp.","t":"`$INTEGER`","key$":"created_at","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier for the ticket which is given by Intercom.","t":"`$STRING`","key$":"id","index$":5},"is_shared":{"a":true,"h":"Is Shared","n":"is_shared","r":false,"sh":"Whether or not the ticket is shared with the customer.","t":"`$BOOLEAN`","key$":"is_shared","index$":6},"linked_objects":{"a":true,"h":"Linked Objects","n":"linked_objects","r":false,"sh":"An object containing metadata about linked conversations and linked tickets.","t":"`$OBJECT`","key$":"linked_objects","index$":7},"open":{"a":true,"h":"Open","n":"open","r":false,"sh":"Whether or not the ticket is open.","t":"`$BOOLEAN`","key$":"open","index$":8},"previous_ticket_state_id":{"a":true,"h":"Previous Ticket State Id","n":"previous_ticket_state_id","r":false,"sh":"The ID of the previous ticket state from the most recent state change.","t":"`$STRING`","key$":"previous_ticket_state_id","index$":9},"skip_notifications":{"a":true,"h":"Skip Notifications","n":"skip_notifications","r":false,"sh":"Option to disable notifications when a Ticket is created.","t":"`$BOOLEAN`","key$":"skip_notifications","index$":10},"snoozed_until":{"a":true,"fo":"date-time","h":"Snoozed Until","n":"snoozed_until","r":false,"sh":"The time the ticket will be snoozed until as a UTC Unix timestamp.","t":"`$INTEGER`","key$":"snoozed_until","index$":11},"team_assignee_id":{"a":true,"h":"Team Assignee Id","n":"team_assignee_id","r":false,"sh":"The id representing the team assigned to the ticket.","t":"`$INTEGER`","key$":"team_assignee_id","index$":12},"ticket_attributes":{"a":true,"h":"Ticket Attributes","n":"ticket_attributes","r":false,"sh":"An object containing the different attributes associated to the ticket as key-value pairs.","t":"`$OBJECT`","union":{"branches":5,"count":1,"depth":1},"key$":"ticket_attributes","index$":13},"ticket_id":{"a":true,"h":"Ticket Id","n":"ticket_id","r":false,"sh":"The ID of the Ticket used in the Intercom Inbox and Messenger.","t":"`$STRING`","key$":"ticket_id","index$":14},"ticket_parts":{"a":true,"h":"Ticket Parts","n":"ticket_parts","r":false,"sh":"A list of Ticket Part objects for each note and event in the ticket.","t":"`$OBJECT`","union":{"branches":2,"count":2,"depth":9},"key$":"ticket_parts","index$":15},"ticket_state":{"a":true,"h":"Ticket State","n":"ticket_state","r":false,"sh":"A ticket state, used to define the state of a ticket.","t":"`$OBJECT`","key$":"ticket_state","index$":16},"ticket_state_id":{"a":true,"h":"Ticket State Id","n":"ticket_state_id","r":false,"sh":"The ID of the ticket state associated with the ticket type.","t":"`$STRING`","key$":"ticket_state_id","index$":17},"ticket_type":{"a":true,"h":"Ticket Type","n":"ticket_type","r":false,"sh":"A ticket type, used to define the data fields to be captured in a ticket.","t":"`$OBJECT`","key$":"ticket_type","index$":18},"ticket_type_id":{"a":true,"h":"Ticket Type Id","n":"ticket_type_id","r":true,"sh":"The ID of the type of ticket you want to convert the conversation to","t":"`$STRING`","key$":"ticket_type_id","index$":19},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Always ticket","t":"`$STRING`","key$":"type","index$":20},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"sh":"The last time the ticket was updated as a UTC Unix timestamp.","t":"`$INTEGER`","key$":"updated_at","index$":21}},"id":{"field":"id","name":"id"},"name":"ticket","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /conversations/{conversation_id}/convert","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":123,"k":"param","n":"conversation_id","or":"conversation_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/conversations/{conversation_id}/convert","q":{"exist":["conversation_id","intercom_version"]},"r":{},"s":[{"lit":"conversations"},{"var":"conversation_id"},{"lit":"convert"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /tickets/{ticket_id}/change_type","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"ticket_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/tickets/{ticket_id}/change_type","q":{"$action":"change_type","exist":["id","intercom_version"]},"r":{"param":{"ticket_id":"id"}},"s":[{"lit":"tickets"},{"var":"id"},{"lit":"change_type"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /tickets","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/tickets","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"tickets"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /tickets/{ticket_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"ticket_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/tickets/{ticket_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"ticket_id":"id"}},"s":[{"lit":"tickets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /tickets/{ticket_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"ticket_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/tickets/{ticket_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"ticket_id":"id"}},"s":[{"lit":"tickets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /tickets/{ticket_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"ticket_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/tickets/{ticket_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"ticket_id":"id"}},"s":[{"lit":"tickets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.conversation"]]},"key$":"ticket","name__orig":"ticket","Name":"Ticket","name_":"ticket","name-":"ticket","NAME":"TICKET","index$":79}, {"active":true,"entity":"ticket","key$":"BasicTicketFlow","kind":"basic","name":"BasicTicketFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ticket_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"ticket_ref01","srcdatavar":"ticket_ref01_data","suffix":"_up0","textfield":"category"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ticket_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"ticket_ref01","srcdatavar":"ticket_ref01_data","suffix":"_dt0"},"m":{"id":"ticket01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ticket_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"ticket_ref01","suffix":"_rm0"},"m":{"id":"ticket01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'Ticket', {"POST /conversations/{conversation_id}/convert":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"You can convert a Conversation to a Ticket","type":"object","title":"Convert Ticket Request Payload","properties":{"ticket_type_id":{"type":"string","description":"The ID of the type of ticket you want to convert the conversation to","example":"1234","key$":"ticket_type_id"},"ticket_state_id":{"type":"string","description":"The ID of the ticket state associated with the ticket type.","key$":"ticket_state_id"},"attributes":{"title":"Ticket Attributes","type":"object","description":"The attributes set on the ticket. When setting the default title and description attributes, the attribute keys that should be used are `_default_title_` and `_default_description_`. When setting ticket type attributes of the list attribute type, the key should be the attribute name and the value of the attribute should be the list item id, obtainable by [listing the ticket type](ref:get_ticket-types). For example, if the ticket type has an attribute called `priority` of type `list`, the key should be `priority` and the value of the attribute should be the guid of the list item (e.g. `de1825a0-0164-4070-8ca6-13e22462fa7e`).","additionalProperties":{"anyOf":[{"type":"string","nullable":true},{"type":"number"},{"type":"boolean"},{"type":"array"}]},"example":{"_default_title_":"Found a bug","_default_description_":"The button is not working"},"x-ref":"#/components/schemas/ticket_request_custom_attributes","key$":"attributes"}},"required":["ticket_type_id"],"x-ref":"#/components/schemas/convert_conversation_to_ticket_request","index$":1},"examples":{"successful":{"summary":"successful","value":{"ticket_type_id":"53"}},"bad_request":{"summary":"Bad request","value":{"ticket_type_id":"54"}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"conversation_id","in":"path","required":true,"description":"The id of the conversation to target","example":123,"schema":{"type":"integer"},"index$":1}]},"POST /tickets/{ticket_id}/change_type":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"title":"Change Ticket Type Request","description":"You can change the type of a Ticket","type":"object","properties":{"ticket_type_id":{"type":"string","description":"The ID of the new ticket type. Must be in the same category as the current type.","example":"1234"},"ticket_state_id":{"type":"string","description":"The ID of the ticket state for the new ticket type.","example":"5678"},"ticket_attributes":{"type":"object","description":"The attributes to set on the ticket for the new type. Attributes matching by name and type are transferred automatically from the old type; values provided here override the transferred values.","example":{"_default_title_":"example","_default_description_":"having a problem"}}},"required":["ticket_type_id","ticket_state_id"],"x-ref":"#/components/schemas/change_ticket_type_request"},"examples":{"successful_response":{"summary":"Successful response","value":{"ticket_type_id":"1234","ticket_state_id":"5678"}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"ticket_id","in":"path","required":true,"description":"The unique identifier for the ticket which is given by Intercom.","schema":{"type":"string"},"index$":1}]},"POST /tickets":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"description":"You can create a Ticket","type":"object","title":"Create Ticket Request Payload","properties":{"ticket_type_id":{"type":"string","description":"The ID of the type of ticket you want to create","example":"1234"},"contacts":{"type":"array","description":"The list of contacts (users or leads) affected by this ticket. Currently only one is allowed","items":{"type":"object","oneOf":[]},"example":[{}]},"conversation_to_link_id":{"type":"string","description":"The ID of the conversation you want to link to the ticket. Here are the valid ways of linking two tickets:\n - conversation | back-office ticket\n - customer tickets | non-shared back-office ticket\n - conversation | tracker ticket\n - customer ticket | tracker ticket","example":"1234"},"company_id":{"type":"string","description":"The ID of the company that the ticket is associated with. The unique identifier for the company which is given by Intercom","example":"5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"},"created_at":{"type":"integer","description":"The time the ticket was created. If not provided, the current time will be used.","example":1590000000},"ticket_attributes":{"title":"Ticket Attributes","type":"object","description":"The attributes set on the ticket. When setting the default title and description attributes, the attribute keys that should be used are `_default_title_` and `_default_description_`. When setting ticket type attributes of the list attribute type, the key should be the attribute name and the value of the attribute should be the list item id, obtainable by [listing the ticket type](ref:get_ticket-types). For example, if the ticket type has an attribute called `priority` of type `list`, the key should be `priority` and the value of the attribute should be the guid of the list item (e.g. `de1825a0-0164-4070-8ca6-13e22462fa7e`).","additionalProperties":{"anyOf":[]},"example":{"_default_title_":"Found a bug","_default_description_":"The button is not working"},"x-ref":"#/components/schemas/ticket_request_custom_attributes"},"assignment":{"type":"object","properties":{"admin_assignee_id":{},"team_assignee_id":{}}}},"required":["ticket_type_id","contacts"],"x-ref":"#/components/schemas/create_ticket_request"}],"properties":{"skip_notifications":{"type":"boolean","description":"Option to disable notifications when a Ticket is created.","example":true,"key$":"skip_notifications"}},"index$":1},"examples":{"successful_response":{"summary":"Successful response","value":{"ticket_type_id":88,"contacts":[{"id":"6762f2d81bb69f9f2193bc54"}],"ticket_attributes":{"_default_title_":"example","_default_description_":"there is a problem"}}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /tickets/{ticket_id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"ticket_id","in":"path","required":true,"description":"The unique identifier for the ticket which is given by Intercom.\n{% admonition type=\"info\" name=\"Not the Inbox ticket ID\" %}\nThis is the internal `id` field from the API response, not the `ticket_id` displayed in the Intercom Inbox (e.g., #12345). Use the `id` value from the ticket object returned by the API.\n{% /admonition %}\n","schema":{"type":"string"},"index$":1}]},"DELETE /tickets/{ticket_id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"ticket_id","in":"path","required":true,"description":"The unique identifier for the ticket which is given by Intercom.\n{% admonition type=\"info\" name=\"Not the Inbox ticket ID\" %}\nThis is the internal `id` field from the API response, not the `ticket_id` displayed in the Intercom Inbox (e.g., #12345). Use the `id` value from the ticket object returned by the API.\n{% /admonition %}\n","schema":{"type":"string"},"index$":1}]},"PUT /tickets/{ticket_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"description":"You can update a Ticket","type":"object","title":"Update Ticket Request Payload","properties":{"ticket_attributes":{"type":"object","description":"The attributes set on the ticket.","example":{"_default_title_":"example","_default_description_":"having a problem"}},"ticket_state_id":{"type":"string","description":"The ID of the ticket state associated with the ticket type.","example":"123"},"company_id":{"type":"string","description":"The ID of the company that the ticket is associated with. The unique identifier for the company which is given by Intercom. Set to nil to remove company.","example":"5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"},"open":{"type":"boolean","description":"Specify if a ticket is open. Set to false to close a ticket. Closing a ticket will also unsnooze it.","example":true},"is_shared":{"type":"boolean","description":"Specify whether the ticket is visible to users.","example":true},"snoozed_until":{"type":"integer","format":"timestamp","description":"The time you want the ticket to reopen.","example":1673609604},"admin_id":{"type":"integer","description":"The ID of the admin performing ticket update. Needed for workflows execution and attributing actions to specific admins.","example":123},"assignee_id":{"type":"string","description":"The ID of the admin or team to which the ticket is assigned. Set this 0 to unassign it.","example":"123"}},"x-ref":"#/components/schemas/update_ticket_request"}],"properties":{"skip_notifications":{"type":"boolean","description":"Option to disable notifications when a Ticket is updated.","example":true,"key$":"skip_notifications"}},"index$":1},"examples":{"successful_response":{"summary":"Successful response","value":{"ticket_attributes":{"_default_title_":"example","_default_description_":"there is a problem"},"admin_id":991268011,"assignee_id":991268013,"open":true,"snoozed_until":1673609604,"ticket_state_id":8498}},"admin_not_found":{"summary":"Admin not found","value":{"ticket_attributes":{"_default_title_":"example","_default_description_":"there is a problem"},"admin_id":991268011,"assignee_id":991268013,"ticket_state_id":8506}},"assignee_not_found":{"summary":"Assignee not found","value":{"ticket_attributes":{"_default_title_":"example","_default_description_":"there is a problem"},"admin_id":991268011,"assignee_id":991268013,"ticket_state_id":8514}},"ticket_state_id_is_not_valid_or_is_not_associated_with_the_ticket_type":{"summary":"Ticket state id is not valid or is not associated with the ticket type.","value":{"ticket_state_id":0}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"ticket_id","in":"path","required":true,"description":"The unique identifier for the ticket which is given by Intercom.\n{% admonition type=\"info\" name=\"Not the Inbox ticket ID\" %}\nThis is the internal `id` field from the API response, not the `ticket_id` displayed in the Intercom Inbox (e.g., #12345). Use the `id` value from the ticket object returned by the API.\n{% /admonition %}\n","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ticket_ref01_ent = client.Ticket()
    let ticket_ref01_data = setup.data.new.ticket['ticket_ref01']

    ticket_ref01_data = (await ticket_ref01_ent.create(ticket_ref01_data)).data()
    assert(null != ticket_ref01_data.id)


    // UPDATE
    const ticket_ref01_data_up0: any = {}
    ticket_ref01_data_up0.id = ticket_ref01_data.id

    const ticket_ref01_markdef_up0 = { name: 'category', value: 'Mark01-ticket_ref01_' + setup.now }
    ;(ticket_ref01_data_up0 as any)[ticket_ref01_markdef_up0.name] = ticket_ref01_markdef_up0.value

    const ticket_ref01_resdata_up0 = (await ticket_ref01_ent.update(ticket_ref01_data_up0)).data()
    assert(ticket_ref01_resdata_up0.id === ticket_ref01_data_up0.id)

    assert((ticket_ref01_resdata_up0 as any)[ticket_ref01_markdef_up0.name] === ticket_ref01_markdef_up0.value)


    // LOAD
    const ticket_ref01_match_dt0: any = {}
    ticket_ref01_match_dt0.id = ticket_ref01_data.id
    const ticket_ref01_data_dt0 = (await ticket_ref01_ent.load(ticket_ref01_match_dt0)).data()
    assert(ticket_ref01_data_dt0.id === ticket_ref01_data.id)


    // REMOVE
    const ticket_ref01_match_rm0: any = { id: ticket_ref01_data.id }
    await ticket_ref01_ent.remove(ticket_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ticket/TicketTestData.json')

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
    ['ticket01','ticket02','ticket03','conversation01','conversation02','conversation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_TICKET_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_TICKET_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_TICKET_ENTID']
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
  
