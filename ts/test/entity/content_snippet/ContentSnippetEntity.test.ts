

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


describe('ContentSnippetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.ContentSnippet()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'content_snippet.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"ai_chatbot_availability":{"a":true,"h":"Ai Chatbot Availability","n":"ai_chatbot_availability","r":false,"sh":"Whether the content snippet is available for AI Chatbot (Fin).","t":"`$BOOLEAN`","key$":"ai_chatbot_availability","index$":0},"ai_copilot_availability":{"a":true,"h":"Ai Copilot Availability","n":"ai_copilot_availability","r":false,"sh":"Whether the content snippet is available for AI Copilot.","t":"`$BOOLEAN`","key$":"ai_copilot_availability","index$":1},"ai_sales_agent_availability":{"a":true,"h":"Ai Sales Agent Availability","n":"ai_sales_agent_availability","r":false,"sh":"Whether the content snippet is available for AI Sales Agent.","t":"`$BOOLEAN`","key$":"ai_sales_agent_availability","index$":2},"audience_ids":{"a":true,"h":"Audience Ids","n":"audience_ids","r":false,"sh":"The list of audience IDs this content snippet is targeted to for Fin AI Agent.","t":"`$ARRAY`","key$":"audience_ids","index$":3},"body_markdown":{"a":true,"h":"Body Markdown","n":"body_markdown","r":false,"sh":"The body of the content snippet in markdown.","t":"`$STRING`","key$":"body_markdown","index$":4},"chatbot_availability":{"a":true,"de":true,"h":"Chatbot Availability","n":"chatbot_availability","r":false,"sh":"Deprecated.","t":"`$INTEGER`","key$":"chatbot_availability","index$":5},"copilot_availability":{"a":true,"de":true,"h":"Copilot Availability","n":"copilot_availability","r":false,"sh":"Deprecated.","t":"`$INTEGER`","key$":"copilot_availability","index$":6},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The time the snippet was created as a UNIX timestamp.","t":"`$INTEGER`","key$":"created_at","index$":7},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier for the content snippet.","t":"`$STRING`","key$":"id","index$":8},"json_blocks":{"a":true,"h":"Json Blocks","n":"json_blocks","r":false,"sh":"The content blocks that make up the body of the snippet.","t":"`$ARRAY`","key$":"json_blocks","index$":9},"locale":{"a":true,"h":"Locale","n":"locale","r":false,"sh":"The locale of the content snippet.","t":"`$STRING`","key$":"locale","index$":10},"title":{"a":true,"h":"Title","n":"title","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The title of the content snippet.","t":"`$STRING`","key$":"title","index$":11},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"String representing the object's type.","t":"`$STRING`","key$":"type","index$":12},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"sh":"The time the snippet was last updated as a UNIX timestamp.","t":"`$INTEGER`","key$":"updated_at","index$":13}},"id":{"field":"id","name":"id"},"name":"content_snippet","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /content_snippets","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/content_snippets","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"content_snippets"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /content_snippets","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/content_snippets","q":{"exist":["intercom_version","page","per_page"]},"r":{},"s":[{"lit":"content_snippets"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /content_snippets/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/content_snippets/{id}","q":{"exist":["id","intercom_version"]},"r":{},"s":[{"lit":"content_snippets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /content_snippets/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/content_snippets/{id}","q":{"exist":["id","intercom_version"]},"r":{},"s":[{"lit":"content_snippets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /content_snippets/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/content_snippets/{id}","q":{"exist":["id","intercom_version"]},"r":{},"s":[{"lit":"content_snippets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"content_snippet","name__orig":"content_snippet","Name":"ContentSnippet","name_":"content_snippet","name-":"content-snippet","NAME":"CONTENT_SNIPPET","index$":30}, {"active":true,"entity":"content_snippet","key$":"BasicContentSnippetFlow","kind":"basic","name":"BasicContentSnippetFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"content_snippet_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"content_snippet_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"content_snippet_ref01","srcdatavar":"content_snippet_ref01_data","suffix":"_up0","textfield":"body_markdown"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-content_snippet_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"content_snippet_ref01","srcdatavar":"content_snippet_ref01_data","suffix":"_dt0"},"m":{"id":"content_snippet01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-content_snippet_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"content_snippet_ref01","suffix":"_rm0"},"m":{"id":"content_snippet01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"content_snippet_ref01"}}],"index$":5}]}, 'ContentSnippet', {"POST /content_snippets":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"title":"Create Content Snippet Request","type":"object","description":"The request payload for creating a content snippet. You must provide either `json_blocks` or `body_markdown` for the snippet content — they are mutually exclusive.","nullable":false,"required":["title"],"properties":{"title":{"type":"string","description":"The title of the content snippet.","maxLength":255,"example":"How to reset your password","key$":"title"},"json_blocks":{"type":"array","description":"The content blocks that make up the body of the snippet. Mutually exclusive with `body_markdown`.","items":{"type":"object"},"example":[{"type":"paragraph","text":"Navigate to Settings > Security > Reset password."}],"key$":"json_blocks"},"body_markdown":{"type":"string","description":"The content of the snippet in markdown. An alternative to `json_blocks` — you can provide content as markdown instead of structured blocks. Mutually exclusive with `json_blocks`.","example":"# Hello\n\nSome content.\n","key$":"body_markdown"},"locale":{"type":"string","description":"The locale of the content snippet. Defaults to `en`.","default":"en","example":"en","key$":"locale"},"audience_ids":{"type":"array","nullable":true,"description":"The list of audience IDs to target this content snippet to for Fin AI Agent. Pass an empty array or omit the field for no audience targeting. Unknown audience IDs return a `404` error with no partial commit.","items":{"type":"integer"},"example":[1,2],"key$":"audience_ids"},"ai_chatbot_availability":{"type":"boolean","description":"Whether the content snippet should be available for AI Chatbot (Fin). Defaults to false.","default":false,"example":true,"key$":"ai_chatbot_availability"},"ai_copilot_availability":{"type":"boolean","description":"Whether the content snippet should be available for AI Copilot. Defaults to false.","default":false,"example":true,"key$":"ai_copilot_availability"},"ai_sales_agent_availability":{"type":"boolean","description":"Whether the content snippet should be available for AI Sales Agent. Defaults to false.","default":false,"example":true,"key$":"ai_sales_agent_availability"}},"x-ref":"#/components/schemas/content_snippet_create_request","index$":1},"examples":{"Create a content snippet":{"value":{"title":"How to reset your password","json_blocks":[{"type":"paragraph","text":"Navigate to Settings > Security > Reset password."}],"locale":"en","audience_ids":[1,2]}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /content_snippets":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"page","in":"query","required":false,"description":"The page of results to fetch.","schema":{"type":"integer","example":1},"index$":1},{"name":"per_page","in":"query","required":false,"description":"The number of results to return per page. Max value of 50.","schema":{"type":"integer","example":20},"index$":2}]},"GET /content_snippets/{id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"id","in":"path","required":true,"description":"The unique identifier for the content snippet.","schema":{"type":"string","example":"123"},"index$":1}]},"DELETE /content_snippets/{id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"id","in":"path","required":true,"description":"The unique identifier for the content snippet.","schema":{"type":"string","example":"123"},"index$":1}]},"PUT /content_snippets/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"title":"Update Content Snippet Request","type":"object","description":"The request payload for updating a content snippet. All fields are optional — only provided fields will be updated. `json_blocks` and `body_markdown` are mutually exclusive.","nullable":false,"properties":{"title":{"type":"string","description":"The title of the content snippet.","maxLength":255,"example":"How to reset your password","key$":"title"},"json_blocks":{"type":"array","description":"The content blocks that make up the body of the snippet. Mutually exclusive with `body_markdown`.","items":{"type":"object"},"example":[{"type":"paragraph","text":"Navigate to Settings > Security > Reset password."}],"key$":"json_blocks"},"body_markdown":{"type":"string","description":"The content of the snippet in markdown. An alternative to `json_blocks` — you can provide content as markdown instead of structured blocks. Mutually exclusive with `json_blocks`.","example":"## Updated heading\n\nNew content.\n","key$":"body_markdown"},"locale":{"type":"string","description":"The locale of the content snippet.","example":"en","key$":"locale"},"audience_ids":{"type":"array","nullable":true,"description":"The list of audience IDs to target this content snippet to for Fin AI Agent. Omitting the field leaves existing audience memberships unchanged (PATCH semantics). Pass `[]` to clear all audience memberships. Unknown audience IDs return a `404` error with no partial commit.","items":{"type":"integer"},"example":[1,2],"key$":"audience_ids"},"ai_chatbot_availability":{"type":"boolean","description":"Whether the content snippet should be available for AI Chatbot (Fin).","example":true,"key$":"ai_chatbot_availability"},"ai_copilot_availability":{"type":"boolean","description":"Whether the content snippet should be available for AI Copilot.","example":true,"key$":"ai_copilot_availability"},"ai_sales_agent_availability":{"type":"boolean","description":"Whether the content snippet should be available for AI Sales Agent.","example":true,"key$":"ai_sales_agent_availability"}},"x-ref":"#/components/schemas/content_snippet_update_request","index$":1},"examples":{"Update a content snippet":{"value":{"title":"How to reset your password (updated)","json_blocks":[{"type":"paragraph","text":"Go to Settings > Security > Reset password and follow the steps."}],"audience_ids":[1,2]}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"id","in":"path","required":true,"description":"The unique identifier for the content snippet.","schema":{"type":"string","example":"123"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const content_snippet_ref01_ent = client.ContentSnippet()
    let content_snippet_ref01_data = setup.data.new.content_snippet['content_snippet_ref01']

    content_snippet_ref01_data = (await content_snippet_ref01_ent.create(content_snippet_ref01_data)).data()
    assert(null != content_snippet_ref01_data.id)


    // LIST
    const content_snippet_ref01_match: any = {}

    const content_snippet_ref01_list = (await content_snippet_ref01_ent.list(content_snippet_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(content_snippet_ref01_list, { id: content_snippet_ref01_data.id })))


    // UPDATE
    const content_snippet_ref01_data_up0: any = {}
    content_snippet_ref01_data_up0.id = content_snippet_ref01_data.id

    const content_snippet_ref01_markdef_up0 = { name: 'body_markdown', value: 'Mark01-content_snippet_ref01_' + setup.now }
    ;(content_snippet_ref01_data_up0 as any)[content_snippet_ref01_markdef_up0.name] = content_snippet_ref01_markdef_up0.value

    const content_snippet_ref01_resdata_up0 = (await content_snippet_ref01_ent.update(content_snippet_ref01_data_up0)).data()
    assert(content_snippet_ref01_resdata_up0.id === content_snippet_ref01_data_up0.id)

    assert((content_snippet_ref01_resdata_up0 as any)[content_snippet_ref01_markdef_up0.name] === content_snippet_ref01_markdef_up0.value)


    // LOAD
    const content_snippet_ref01_match_dt0: any = {}
    content_snippet_ref01_match_dt0.id = content_snippet_ref01_data.id
    const content_snippet_ref01_data_dt0 = (await content_snippet_ref01_ent.load(content_snippet_ref01_match_dt0)).data()
    assert(content_snippet_ref01_data_dt0.id === content_snippet_ref01_data.id)


    // REMOVE
    const content_snippet_ref01_match_rm0: any = { id: content_snippet_ref01_data.id }
    await content_snippet_ref01_ent.remove(content_snippet_ref01_match_rm0)
  

    // LIST
    const content_snippet_ref01_match_rt0: any = {}

    const content_snippet_ref01_list_rt0 = (await content_snippet_ref01_ent.list(content_snippet_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(content_snippet_ref01_list_rt0, { id: content_snippet_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/content_snippet/ContentSnippetTestData.json')

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
    ['content_snippet01','content_snippet02','content_snippet03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_CONTENT_SNIPPET_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_CONTENT_SNIPPET_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_CONTENT_SNIPPET_ENTID']
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
  
