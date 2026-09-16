

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ContactEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Contact()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'contact.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"created_at","req":false,"type":"`$INTEGER`","index$":0},{"active":true,"name":"email","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"phone","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"role","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"updated_at","req":false,"type":"`$INTEGER`","index$":6}],"id":{"field":"id","name":"id"},"name":"contact","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /contacts","json":"{\"operationId\":\"createContact\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"email\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"role\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"created_at\":{\"type\":\"integer\"},\"email\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"role\":{\"type\":\"string\"},\"updated_at\":{\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"The created contact\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/contacts","segments":[{"lit":"contacts"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /contacts","json":"{\"operationId\":\"listContacts\",\"parameters\":[{\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"created_at\":{\"type\":\"integer\"},\"email\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"role\":{\"type\":\"string\"},\"updated_at\":{\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"A page of contacts\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/contacts","segments":[{"lit":"contacts"}],"select":{"exist":["per_page"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /contacts/{id}","json":"{\"operationId\":\"getContact\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"created_at\":{\"type\":\"integer\"},\"email\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"role\":{\"type\":\"string\"},\"updated_at\":{\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"The requested contact\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/contacts/{id}","segments":[{"lit":"contacts"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"DELETE /contacts/{id}","json":"{\"operationId\":\"deleteContact\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Deleted\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/contacts/{id}","segments":[{"lit":"contacts"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"PUT /contacts/{id}","json":"{\"operationId\":\"updateContact\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"email\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"role\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"created_at\":{\"type\":\"integer\"},\"email\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"role\":{\"type\":\"string\"},\"updated_at\":{\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"The updated contact\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/contacts/{id}","segments":[{"lit":"contacts"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"contact","name__orig":"contact","Name":"Contact","name_":"contact","name-":"contact","NAME":"CONTACT","index$":0}, {"active":true,"entity":"contact","key$":"BasicContactFlow","kind":"basic","name":"BasicContactFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"contact_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"contact_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"contact_ref01","srcdatavar":"contact_ref01_data","suffix":"_up0","textfield":"email"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-contact_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"contact_ref01","srcdatavar":"contact_ref01_data","suffix":"_dt0"},"match":{"id":"contact01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-contact_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"contact_ref01","suffix":"_rm0"},"match":{"id":"contact01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"contact_ref01"}}],"index$":5}]}, 'Contact')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const contact_ref01_ent = client.Contact()
    let contact_ref01_data = setup.data.new.contact['contact_ref01']

    contact_ref01_data = (await contact_ref01_ent.create(contact_ref01_data)).data()
    assert(null != contact_ref01_data.id)


    // LIST
    const contact_ref01_match: any = {}

    const contact_ref01_list = (await contact_ref01_ent.list(contact_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(contact_ref01_list, { id: contact_ref01_data.id })))


    // UPDATE
    const contact_ref01_data_up0: any = {}
    contact_ref01_data_up0.id = contact_ref01_data.id

    const contact_ref01_markdef_up0 = { name: 'email', value: 'Mark01-contact_ref01_' + setup.now }
    ;(contact_ref01_data_up0 as any)[contact_ref01_markdef_up0.name] = contact_ref01_markdef_up0.value

    const contact_ref01_resdata_up0 = (await contact_ref01_ent.update(contact_ref01_data_up0)).data()
    assert(contact_ref01_resdata_up0.id === contact_ref01_data_up0.id)

    assert((contact_ref01_resdata_up0 as any)[contact_ref01_markdef_up0.name] === contact_ref01_markdef_up0.value)


    // LOAD
    const contact_ref01_match_dt0: any = {}
    contact_ref01_match_dt0.id = contact_ref01_data.id
    const contact_ref01_data_dt0 = (await contact_ref01_ent.load(contact_ref01_match_dt0)).data()
    assert(contact_ref01_data_dt0.id === contact_ref01_data.id)


    // REMOVE
    const contact_ref01_match_rm0: any = { id: contact_ref01_data.id }
    await contact_ref01_ent.remove(contact_ref01_match_rm0)
  

    // LIST
    const contact_ref01_match_rt0: any = {}

    const contact_ref01_list_rt0 = (await contact_ref01_ent.list(contact_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(contact_ref01_list_rt0, { id: contact_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/contact/ContactTestData.json')

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
    ['contact01','contact02','contact03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_CONTACT_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_CONTACT_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_CONTACT_ENTID']
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
  
