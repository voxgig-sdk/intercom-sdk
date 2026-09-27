

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


describe('MacroEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Macro()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'macro.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"available_on":{"a":true,"h":"Available On","n":"available_on","r":false,"sh":"Where the macro is available for use.","t":"`$ARRAY`","key$":"available_on","index$":0},"body":{"a":true,"h":"Body","n":"body","r":false,"sh":"The body of the macro in HTML format with placeholders transformed to XML-like format.","t":"`$STRING`","key$":"body","index$":1},"body_text":{"a":true,"h":"Body Text","n":"body_text","r":false,"sh":"The plain text version of the macro body with original Intercom placeholder format.","t":"`$STRING`","key$":"body_text","index$":2},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"The time the macro was created in ISO 8601 format.","t":"`$STRING`","key$":"created_at","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier for the macro.","t":"`$STRING`","key$":"id","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the macro.","t":"`$STRING`","key$":"name","index$":5},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"String representing the object's type.","t":"`$STRING`","key$":"type","index$":6},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"sh":"The time the macro was last updated in ISO 8601 format.","t":"`$STRING`","key$":"updated_at","index$":7},"visible_to":{"a":true,"h":"Visible To","n":"visible_to","r":false,"sh":"Who can view this macro.","t":"`$STRING`","key$":"visible_to","index$":8},"visible_to_team_ids":{"a":true,"h":"Visible To Team Ids","n":"visible_to_team_ids","r":false,"sh":"The team IDs that can view this macro when visible_to is set to specific_teams.","t":"`$ARRAY`","key$":"visible_to_team_ids","index$":9}},"id":{"field":"id","name":"id"},"name":"macro","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /macros","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":"WzE3MTk0OTM3NTcuMCwgIjEyMyJd","k":"query","n":"starting_after","or":"starting_after","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":1719474966,"k":"query","n":"updated_since","or":"updated_since","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/macros","q":{"exist":["intercom_version","per_page","starting_after","updated_since"]},"r":{},"s":[{"lit":"macros"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /macros/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/macros/{id}","q":{"exist":["id","intercom_version"]},"r":{},"s":[{"lit":"macros"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"macro","name__orig":"macro","Name":"Macro","name_":"macro","name-":"macro","NAME":"MACRO","index$":59}, {"active":true,"entity":"macro","key$":"BasicMacroFlow","kind":"basic","name":"BasicMacroFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"macro_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"macro_ref01","srcdatavar":"macro_ref01_data","suffix":"_dt0"},"m":{"id":"macro01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-macro_ref01"}}],"index$":1}]}, 'Macro', {"GET /macros":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"per_page","in":"query","schema":{"type":"integer","minimum":1,"maximum":150,"default":50},"description":"The number of results per page","example":50,"index$":1},{"name":"starting_after","in":"query","schema":{"type":"string"},"description":"Base64-encoded cursor containing [updated_at, id] for pagination","example":"WzE3MTk0OTM3NTcuMCwgIjEyMyJd","index$":2},{"name":"updated_since","in":"query","schema":{"type":"integer","format":"int64"},"description":"Unix timestamp to filter macros updated after this time","example":1719474966,"index$":3}]},"GET /macros/{id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"id","in":"path","required":true,"description":"The unique identifier of the macro","schema":{"type":"string"},"example":"123","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let macro_ref01_data = Object.values(setup.data.existing.macro)[0] as any

    // LIST
    const macro_ref01_ent = client.Macro()
    const macro_ref01_match: any = {}

    const macro_ref01_list = (await macro_ref01_ent.list(macro_ref01_match)).map((e: any) => e.data())


    // LOAD
    const macro_ref01_match_dt0: any = {}
    macro_ref01_match_dt0.id = macro_ref01_data.id
    const macro_ref01_data_dt0 = (await macro_ref01_ent.load(macro_ref01_match_dt0)).data()
    assert(macro_ref01_data_dt0.id === macro_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/macro/MacroTestData.json')

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
    ['macro01','macro02','macro03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_MACRO_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_MACRO_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_MACRO_ENTID']
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
  
