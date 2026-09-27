

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


describe('CustomObjectInstanceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.CustomObjectInstance()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_object_instance.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"t":"`$INTEGER`","key$":"created_at","index$":0},"custom_attributes":{"a":true,"h":"Custom Attributes","n":"custom_attributes","r":false,"sh":"The custom attributes which are set for the Custom Object instance.","t":"`$OBJECT`","key$":"custom_attributes","index$":1},"data":{"a":true,"h":"Data","n":"data","r":false,"sh":"An array of Custom Object Instance objects.","t":"`$ARRAY`","key$":"data","index$":2},"external_created_at":{"a":true,"fo":"date-time","h":"External Created At","n":"external_created_at","r":false,"sh":"The time when the Custom Object instance was created in the external system it originated from.","t":"`$STRING`","key$":"external_created_at","index$":3},"external_id":{"a":true,"h":"External Id","n":"external_id","r":false,"sh":"A unique identifier for the Custom Object instance in the external system it originated from.","t":"`$STRING`","key$":"external_id","index$":4},"external_updated_at":{"a":true,"fo":"date-time","h":"External Updated At","n":"external_updated_at","r":false,"sh":"The time when the Custom Object instance was last updated in the external system it originated from.","t":"`$STRING`","key$":"external_updated_at","index$":5},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":6},"pages":{"a":true,"h":"Pages","n":"pages","r":false,"sh":"The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests.","t":"`$OBJECT`","key$":"pages","index$":7},"total_count":{"a":true,"h":"Total Count","n":"total_count","r":false,"sh":"A count of the total number of custom object instances.","t":"`$INTEGER`","key$":"total_count","index$":8},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of the object - `list`.","t":"`$STRING`","key$":"type","index$":9},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"t":"`$INTEGER`","key$":"updated_at","index$":10}},"id":{"field":"id","name":"id","parts":["custom_object_type_identifier","custom_object_instance_id"],"sep":"/"},"name":"custom_object_instance","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /custom_object_instances/{custom_object_type_identifier}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"Order","k":"param","n":"id","or":"custom_object_type_identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/custom_object_instances/{custom_object_type_identifier}","q":{"exist":["id","intercom_version"]},"r":{"param":{"custom_object_type_identifier":"id"}},"s":[{"lit":"custom_object_instances"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.custom_attributes`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /custom_object_instances/{custom_object_type_identifier}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"Order","k":"param","n":"id","or":"custom_object_type_identifier","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"external_id","or":"external_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"references_contact_id","or":"references_contact_id","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"references_conversation_id","or":"references_conversation_id","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/custom_object_instances/{custom_object_type_identifier}","q":{"exist":["external_id","id","intercom_version","page","per_page","references_contact_id","references_conversation_id"]},"r":{"param":{"custom_object_type_identifier":"id"}},"s":[{"lit":"custom_object_instances"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /custom_object_instances/{custom_object_type_identifier}/{custom_object_instance_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"custom_object_instance_id","or":"custom_object_instance_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"Order","k":"param","n":"custom_object_type_identifier","or":"custom_object_type_identifier","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/custom_object_instances/{custom_object_type_identifier}/{custom_object_instance_id}","q":{"exist":["custom_object_instance_id","custom_object_type_identifier","intercom_version"]},"r":{},"s":[{"lit":"custom_object_instances"},{"var":"custom_object_type_identifier"},{"var":"custom_object_instance_id"}],"t":{"req":"`reqdata`","res":"`body.custom_attributes`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /custom_object_instances/{custom_object_type_identifier}/{custom_object_instance_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"custom_object_instance_id","or":"custom_object_instance_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"Order","k":"param","n":"custom_object_type_identifier","or":"custom_object_type_identifier","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/custom_object_instances/{custom_object_type_identifier}/{custom_object_instance_id}","q":{"exist":["custom_object_instance_id","custom_object_type_identifier","intercom_version"]},"r":{},"s":[{"lit":"custom_object_instances"},{"var":"custom_object_type_identifier"},{"var":"custom_object_instance_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /custom_object_instances/{custom_object_type_identifier}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"Order","k":"param","n":"id","or":"custom_object_type_identifier","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"external_id","or":"external_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/custom_object_instances/{custom_object_type_identifier}","q":{"exist":["external_id","id","intercom_version"]},"r":{"param":{"custom_object_type_identifier":"id"}},"s":[{"lit":"custom_object_instances"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"custom_object_instance","name__orig":"custom_object_instance","Name":"CustomObjectInstance","name_":"custom_object_instance","name-":"custom-object-instance","NAME":"CUSTOM_OBJECT_INSTANCE","index$":36}, {"active":true,"entity":"custom_object_instance","key$":"BasicCustomObjectInstanceFlow","kind":"basic","name":"BasicCustomObjectInstanceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"custom_object_instance_ref01"},"m":{"custom_object_type_identifier":"custom_object_typeentifier01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"custom_object_instance_ref01","srcdatavar":"custom_object_instance_ref01_data","suffix":"_dt0"},"m":{"custom_object_type_identifier":"custom_object_typeentifier01","id":"custom_object_instance01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_object_instance_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"custom_object_instance_ref01","suffix":"_rm0"},"m":{"id":"custom_object_instance01"},"o":"remove","s":[],"v":[],"index$":2}]}, 'CustomObjectInstance', {"POST /custom_object_instances/{custom_object_type_identifier}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"Payload to create or update a Custom Object instance","type":"object","title":"Create Or Update Custom Object Instance Request Payload","properties":{"external_id":{"type":"string","description":"A unique identifier for the Custom Object instance in the external system it originated from.","key$":"external_id"},"external_created_at":{"type":"integer","format":"date-time","nullable":true,"description":"The time when the Custom Object instance was created in the external system it originated from.","example":1571672154,"key$":"external_created_at"},"external_updated_at":{"type":"integer","format":"date-time","nullable":true,"description":"The time when the Custom Object instance was last updated in the external system it originated from.","example":1571672154,"key$":"external_updated_at"},"custom_attributes":{"type":"object","nullable":true,"description":"The custom attributes which are set for the Custom Object instance.","additionalProperties":{"type":"string"},"key$":"custom_attributes"}},"x-ref":"#/components/schemas/create_or_update_custom_object_instance_request","index$":1},"examples":{"successful":{"summary":"successful","value":{"external_id":"123","external_created_at":1392036272,"external_updated_at":1392036272,"custom_attributes":{"order_number":"ORDER-12345","total_amount":99.99}}}}}}},"parameters":[{"name":"custom_object_type_identifier","in":"path","description":"The unique identifier of the custom object type that defines the structure of the custom object instance.","example":"Order","required":true,"schema":{"type":"string"},"index$":0},{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":1}]},"GET /custom_object_instances/{custom_object_type_identifier}":{"protocol":"http","parameters":[{"name":"custom_object_type_identifier","in":"path","description":"The unique identifier of the custom object type that defines the structure of the custom object instance.","example":"Order","required":true,"schema":{"type":"string"},"index$":0},{"name":"references_contact_id","in":"query","required":false,"description":"Return instances associated with the given contact ID.","schema":{"type":"string"},"index$":1},{"name":"references_conversation_id","in":"query","required":false,"description":"Return instances associated with the given conversation ID.","schema":{"type":"string"},"index$":2},{"name":"external_id","in":"query","required":false,"description":"Return the single instance with this external ID. When provided, the response is a single object rather than a list.","schema":{"type":"string"},"index$":3},{"name":"page","in":"query","required":false,"description":"Page number of results to fetch.","schema":{"type":"integer"},"index$":4},{"name":"per_page","in":"query","required":false,"description":"Number of results per page. Maximum 150.","schema":{"type":"integer","maximum":150},"index$":5},{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":6}]},"GET /custom_object_instances/{custom_object_type_identifier}/{custom_object_instance_id}":{"protocol":"http","parameters":[{"name":"custom_object_type_identifier","in":"path","description":"The unique identifier of the custom object type that defines the structure of the custom object instance.","example":"Order","required":true,"schema":{"type":"string"},"index$":0},{"name":"custom_object_instance_id","in":"path","description":"The id or external_id of the custom object instance","required":true,"schema":{"type":"string"},"index$":1},{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":2}]},"DELETE /custom_object_instances/{custom_object_type_identifier}/{custom_object_instance_id}":{"protocol":"http","parameters":[{"name":"custom_object_type_identifier","in":"path","description":"The unique identifier of the custom object type that defines the structure of the custom object instance.","example":"Order","required":true,"schema":{"type":"string"},"index$":0},{"name":"custom_object_instance_id","in":"path","description":"The Intercom defined id of the custom object instance","required":true,"schema":{"type":"string"},"index$":1},{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":2}]},"DELETE /custom_object_instances/{custom_object_type_identifier}":{"protocol":"http","parameters":[{"name":"custom_object_type_identifier","in":"path","description":"The unique identifier of the custom object type that defines the structure of the custom object instance.","example":"Order","required":true,"schema":{"type":"string"},"index$":0},{"name":"external_id","in":"query","style":"form","required":true,"schema":{"type":"string","description":"The unique identifier for the instance in the external system it originated from.","title":"Find by external_id","properties":{"external_id":{"type":"string"}},"required":["external_id"]},"index$":1},{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_object_instance_ref01_ent = client.CustomObjectInstance()
    let custom_object_instance_ref01_data = setup.data.new.custom_object_instance['custom_object_instance_ref01']
    custom_object_instance_ref01_data['custom_object_type_identifier'] = setup.idmap['custom_object_typeentifier01']

    custom_object_instance_ref01_data = (await custom_object_instance_ref01_ent.create(custom_object_instance_ref01_data)).data()
    assert(null != custom_object_instance_ref01_data.id)


    // LOAD
    const custom_object_instance_ref01_match_dt0: any = {}
    custom_object_instance_ref01_match_dt0.id = custom_object_instance_ref01_data.id
    const custom_object_instance_ref01_data_dt0 = (await custom_object_instance_ref01_ent.load(custom_object_instance_ref01_match_dt0)).data()
    assert(custom_object_instance_ref01_data_dt0.id === custom_object_instance_ref01_data.id)


    // REMOVE
    const custom_object_instance_ref01_match_rm0: any = { id: custom_object_instance_ref01_data.id }
    await custom_object_instance_ref01_ent.remove(custom_object_instance_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom_object_instance/CustomObjectInstanceTestData.json')

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
    ['custom_object_instance01','custom_object_instance02','custom_object_instance03','custom_object_typeentifier01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_CUSTOM_OBJECT_INSTANCE_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_CUSTOM_OBJECT_INSTANCE_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_CUSTOM_OBJECT_INSTANCE_ENTID']
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
  
