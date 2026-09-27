

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


describe('ConversationListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.ConversationList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'conversation_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"conversations":{"a":true,"h":"Conversations","n":"conversations","r":false,"sh":"The list of conversation objects","t":"`$ARRAY`","union":{"branches":4,"count":2,"depth":6},"key$":"conversations","index$":0},"pages":{"a":true,"h":"Pages","n":"pages","r":false,"sh":"Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.","t":"`$OBJECT`","key$":"pages","index$":1},"pagination":{"a":true,"h":"Pagination","n":"pagination","r":false,"t":"`$OBJECT`","key$":"pagination","index$":2},"query":{"a":true,"h":"Query","n":"query","r":true,"t":"`$ANY`","union":{"branches":4,"count":4,"depth":7},"key$":"query","index$":3},"total_count":{"a":true,"h":"Total Count","n":"total_count","r":false,"sh":"A count of the total number of objects.","t":"`$INTEGER`","key$":"total_count","index$":4},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Always conversation.list","t":"`$STRING`","key$":"type","index$":5}},"name":"conversation_list","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /conversations/search","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":true,"k":"query","n":"include_monitor","or":"include_monitor","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":true,"k":"query","n":"include_scorecard","or":"include_scorecard","r":false,"t":"`$BOOLEAN`","index$":1}]},"k":"http","m":"POST","o":"/conversations/search","q":{"exist":["include_monitor","include_scorecard","intercom_version"]},"r":{},"s":[{"lit":"conversations"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"conversation_list","name__orig":"conversation_list","Name":"ConversationList","name_":"conversation_list","name-":"conversation-list","NAME":"CONVERSATION_LIST","index$":34}, {"active":true,"entity":"conversation_list","key$":"BasicConversationListFlow","kind":"basic","name":"BasicConversationListFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"conversation_list_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ConversationList', {"POST /conversations/search":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"Search using Intercoms Search APIs.","type":"object","title":"Search data","properties":{"query":{"oneOf":[{"title":"Single filter search request","description":"Search using Intercoms Search APIs with a single filter.","type":"object","properties":{"field":{},"operator":{},"value":{}},"x-ref":"#/components/schemas/single_filter_search_request"},{"title":"multiple filter search request","description":"Search using Intercoms Search APIs with more than one filter.","type":"object","properties":{"operator":{},"value":{}},"x-ref":"#/components/schemas/multiple_filter_search_request"}],"key$":"query"},"pagination":{"title":"Pagination: Starting After","type":"object","nullable":true,"properties":{"per_page":{"description":"The number of results to fetch per page.","example":2,"type":"integer"},"starting_after":{"description":"The cursor to use in the next request to get the next page of results.","example":"your-cursor-from-response","nullable":true,"type":"string"}},"x-ref":"#/components/schemas/starting_after_paging","key$":"pagination"}},"required":["query"],"x-ref":"#/components/schemas/search_request","index$":1},"examples":{"successful":{"summary":"successful","value":{"query":{"operator":"AND","value":[{"field":"created_at","operator":">","value":"1306054154"}]},"pagination":{"per_page":5}}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"include_monitors","in":"query","required":false,"description":"If set to true, the response will include a `monitor_evaluations` array on each conversation with any QA monitor results that flagged it.","example":true,"schema":{"type":"boolean","default":false},"index$":1},{"name":"include_scorecards","in":"query","required":false,"description":"If set to true, the response will include a `scorecards` array on each conversation with any QA scorecard results.","example":true,"schema":{"type":"boolean","default":false},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const conversation_list_ref01_ent = client.ConversationList()
    let conversation_list_ref01_data = setup.data.new.conversation_list['conversation_list_ref01']

    conversation_list_ref01_data = (await conversation_list_ref01_ent.create(conversation_list_ref01_data)).data()
    assert(null != conversation_list_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/conversation_list/ConversationListTestData.json')

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
    ['conversation_list01','conversation_list02','conversation_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_CONVERSATION_LIST_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_CONVERSATION_LIST_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_CONVERSATION_LIST_ENTID']
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
  
