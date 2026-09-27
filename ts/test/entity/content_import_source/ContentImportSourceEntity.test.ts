

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


describe('ContentImportSourceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.ContentImportSource()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'content_import_source.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"apply_audience_to_existing_content":{"a":true,"h":"Apply Audience To Existing Content","n":"apply_audience_to_existing_content","r":false,"sh":"When true, the audience will be applied to all existing external pages belonging to this content import source.","t":"`$BOOLEAN`","key$":"apply_audience_to_existing_content","index$":0},"audience_ids":{"a":true,"h":"Audience Ids","n":"audience_ids","r":false,"sh":"The unique identifiers for the audiences associated with this content import source.","t":"`$ARRAY`","key$":"audience_ids","index$":1},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"The time when the content import source was created.","t":"`$INTEGER`","key$":"created_at","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier for the content import source which is given by Intercom.","t":"`$INTEGER`","key$":"id","index$":3},"last_synced_at":{"a":true,"fo":"date-time","h":"Last Synced At","n":"last_synced_at","r":true,"sh":"The time when the content import source was last synced.","t":"`$INTEGER`","key$":"last_synced_at","index$":4},"status":{"a":true,"h":"Status","n":"status","op":{"create":{"req":false,"type":"`$STRING`"},"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The status of the content import source.","t":"`$STRING`","key$":"status","index$":5},"sync_behavior":{"a":true,"h":"Sync Behavior","n":"sync_behavior","r":true,"sh":"If you intend to create or update External Pages via the API, this should be set to `api`.","t":"`$STRING`","key$":"sync_behavior","index$":6},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Always external_page","t":"`$STRING`","key$":"type","index$":7},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"The time when the content import source was last updated.","t":"`$INTEGER`","key$":"updated_at","index$":8},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"The URL of the root of the external source.","t":"`$STRING`","key$":"url","index$":9}},"id":{"field":"id","name":"id"},"name":"content_import_source","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /ai/content_import_sources","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/ai/content_import_sources","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"ai"},{"lit":"content_import_sources"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /ai/content_import_sources","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/ai/content_import_sources","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"ai"},{"lit":"content_import_sources"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /ai/content_import_sources/{source_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"source_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/ai/content_import_sources/{source_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"source_id":"id"}},"s":[{"lit":"ai"},{"lit":"content_import_sources"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /ai/content_import_sources/{source_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"source_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/ai/content_import_sources/{source_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"source_id":"id"}},"s":[{"lit":"ai"},{"lit":"content_import_sources"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"content_import_source","name__orig":"content_import_source","Name":"ContentImportSource","name_":"content_import_source","name-":"content-import-source","NAME":"CONTENT_IMPORT_SOURCE","index$":28}, {"active":true,"entity":"content_import_source","key$":"BasicContentImportSourceFlow","kind":"basic","name":"BasicContentImportSourceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"content_import_source_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"content_import_source_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"content_import_source_ref01","srcdatavar":"content_import_source_ref01_data","suffix":"_up0","textfield":"status"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-content_import_source_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"content_import_source_ref01","srcdatavar":"content_import_source_ref01_data","suffix":"_dt0"},"m":{"id":"content_import_source01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-content_import_source_ref01"}}],"index$":3}]}, 'ContentImportSource', {"POST /ai/content_import_sources":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"title":"Create Content Import Source Payload","type":"object","description":"You can add an Content Import Source to your Fin Content Library.","nullable":false,"properties":{"sync_behavior":{"type":"string","description":"If you intend to create or update External Pages via the API, this should be set to `api`.","enum":["api"],"example":"api","key$":"sync_behavior"},"status":{"type":"string","description":"The status of the content import source.","enum":["active","deactivated"],"default":"active","example":"active","key$":"status"},"url":{"type":"string","description":"The URL of the content import source.","example":"https://help.example.com","key$":"url"},"audience_ids":{"nullable":true,"description":"The unique identifiers for the audiences to associate with this content import source. Can be a single integer or an array of integers.","example":[5678],"oneOf":[{"type":"integer"},{"type":"array","items":{"type":"integer"}}],"key$":"audience_ids"}},"required":["sync_behavior","url"],"x-ref":"#/components/schemas/create_content_import_source_request","index$":1},"examples":{"successful":{"summary":"successful","value":{"sync_behavior":"api","url":"https://www.example.com"}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /ai/content_import_sources":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /ai/content_import_sources/{source_id}":{"protocol":"http","parameters":[{"name":"source_id","in":"path","description":"The unique identifier for the content import source which is given by Intercom.","required":true,"schema":{"type":"string"},"index$":0},{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":1}]},"PUT /ai/content_import_sources/{source_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"title":"Create Content Import Source Payload","type":"object","description":"You can modify a Content Import Source of your Fin Content Library.","nullable":false,"properties":{"sync_behavior":{"type":"string","description":"If you intend to create or update External Pages via the API, this should be set to `api`. You can not change the value to or from api.","enum":["api","automated","manual"],"example":"api","key$":"sync_behavior"},"status":{"type":"string","description":"The status of the content import source.","enum":["active","deactivated"],"default":"active","example":"active","key$":"status"},"url":{"type":"string","description":"The URL of the content import source. This may only be different from the existing value if the sync behavior is API.","example":"https://help.example.com","key$":"url"},"audience_ids":{"nullable":true,"description":"The unique identifiers for the audiences to associate with this content import source. Can be a single integer or an array of integers. Set to null or an empty array to remove all audiences.","example":[5678],"oneOf":[{"type":"integer"},{"type":"array","items":{"type":"integer"}}],"key$":"audience_ids"},"apply_audience_to_existing_content":{"type":"boolean","description":"When true, the audience will be applied to all existing external pages belonging to this content import source.","default":false,"example":false,"key$":"apply_audience_to_existing_content"}},"required":["sync_behavior","url"],"x-ref":"#/components/schemas/update_content_import_source_request","index$":1},"examples":{"successful":{"summary":"successful","value":{"sync_behavior":"api","url":"https://www.example.com"}}}}}},"parameters":[{"name":"source_id","in":"path","description":"The unique identifier for the content import source which is given by Intercom.","required":true,"schema":{"type":"string"},"index$":0},{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const content_import_source_ref01_ent = client.ContentImportSource()
    let content_import_source_ref01_data = setup.data.new.content_import_source['content_import_source_ref01']

    content_import_source_ref01_data = (await content_import_source_ref01_ent.create(content_import_source_ref01_data)).data()
    assert(null != content_import_source_ref01_data.id)


    // LIST
    const content_import_source_ref01_match: any = {}

    const content_import_source_ref01_list = (await content_import_source_ref01_ent.list(content_import_source_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(content_import_source_ref01_list, { id: content_import_source_ref01_data.id })))


    // UPDATE
    const content_import_source_ref01_data_up0: any = {}
    content_import_source_ref01_data_up0.id = content_import_source_ref01_data.id

    const content_import_source_ref01_markdef_up0 = { name: 'status', value: 'Mark01-content_import_source_ref01_' + setup.now }
    ;(content_import_source_ref01_data_up0 as any)[content_import_source_ref01_markdef_up0.name] = content_import_source_ref01_markdef_up0.value

    const content_import_source_ref01_resdata_up0 = (await content_import_source_ref01_ent.update(content_import_source_ref01_data_up0)).data()
    assert(content_import_source_ref01_resdata_up0.id === content_import_source_ref01_data_up0.id)

    assert((content_import_source_ref01_resdata_up0 as any)[content_import_source_ref01_markdef_up0.name] === content_import_source_ref01_markdef_up0.value)


    // LOAD
    const content_import_source_ref01_match_dt0: any = {}
    content_import_source_ref01_match_dt0.id = content_import_source_ref01_data.id
    const content_import_source_ref01_data_dt0 = (await content_import_source_ref01_ent.load(content_import_source_ref01_match_dt0)).data()
    assert(content_import_source_ref01_data_dt0.id === content_import_source_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/content_import_source/ContentImportSourceTestData.json')

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
    ['content_import_source01','content_import_source02','content_import_source03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_CONTENT_IMPORT_SOURCE_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_CONTENT_IMPORT_SOURCE_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_CONTENT_IMPORT_SOURCE_ENTID']
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
  
