

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


describe('SideConversationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.SideConversation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'side_conversation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"conversation_parts":{"a":true,"h":"Conversation Parts","n":"conversation_parts","r":false,"sh":"The conversation parts (messages) in this side conversation.","t":"`$ARRAY`","union":{"branches":6,"count":1,"depth":3},"key$":"conversation_parts","index$":0},"side_conversation_id":{"a":true,"h":"Side Conversation Id","n":"side_conversation_id","r":false,"sh":"The unique identifier for the side conversation.","t":"`$STRING`","key$":"side_conversation_id","index$":1},"total_count":{"a":true,"h":"Total Count","n":"total_count","r":false,"sh":"The total number of conversation parts in this side conversation.","t":"`$INTEGER`","key$":"total_count","index$":2}},"name":"side_conversation","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /conversations/{id}/side_conversations","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"conversation_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":25,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/conversations/{id}/side_conversations","q":{"exist":["conversation_id","intercom_version","page","per_page"]},"r":{"param":{"id":"conversation_id"}},"s":[{"lit":"conversations"},{"var":"conversation_id"},{"lit":"side_conversations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.conversation"]]},"key$":"side_conversation","name__orig":"side_conversation","Name":"SideConversation","name_":"side_conversation","name-":"side-conversation","NAME":"SIDE_CONVERSATION","index$":73}, {"active":true,"entity":"side_conversation","key$":"BasicSideConversationFlow","kind":"basic","name":"BasicSideConversationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"conversation_id":"conversation01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"side_conversation_ref01"}}],"index$":0}]}, 'SideConversation', {"GET /conversations/{id}/side_conversations":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"id","in":"path","required":true,"description":"The identifier for the conversation as given by Intercom.","example":"123","schema":{"type":"string"},"index$":1},{"name":"page","in":"query","required":false,"description":"The page number of results to return (starting from 1).","schema":{"type":"integer","default":1},"index$":2},{"name":"per_page","in":"query","required":false,"description":"The number of side conversations to return per page (max 50).","schema":{"type":"integer","default":25,"maximum":50},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let side_conversation_ref01_data = Object.values(setup.data.existing.side_conversation)[0] as any

    // LIST
    const side_conversation_ref01_ent = client.SideConversation()
    const side_conversation_ref01_match: any = {}
    side_conversation_ref01_match['conversation_id'] = setup.idmap['conversation01']

    const side_conversation_ref01_list = (await side_conversation_ref01_ent.list(side_conversation_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/side_conversation/SideConversationTestData.json')

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
    ['side_conversation01','side_conversation02','side_conversation03','conversation01','conversation02','conversation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_SIDE_CONVERSATION_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_SIDE_CONVERSATION_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_SIDE_CONVERSATION_ENTID']
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
  
