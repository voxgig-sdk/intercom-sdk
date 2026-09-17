

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


describe('InternalArticleSearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.InternalArticleSearch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'internal_article_search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"data","req":false,"short":"An object containing the results of the search.","type":"`$OBJECT`","index$":0},{"active":true,"name":"pages","req":false,"short":"Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.","type":"`$OBJECT`","index$":1},{"active":true,"name":"total_count","req":false,"short":"The total number of Internal Articles matching the search query","type":"`$INTEGER`","index$":2},{"active":true,"name":"type","req":false,"short":"The type of the object - `list`.","type":"`$STRING`","index$":3}],"name":"internal_article_search","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"query":[{"active":true,"example":123,"kind":"query","name":"folder_id","orig":"folder_id","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /internal_articles/search","json":"{\"operationId\":\"searchInternalArticles\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The ID of the folder to search in.\",\"example\":123,\"in\":\"query\",\"name\":\"folder_id\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Search successful\":{\"value\":{\"data\":{\"internal_articles\":[{\"author_id\":991266252,\"body\":\"Body of the Article\",\"id\":\"55\",\"locale\":\"en\",\"owner_id\":991266252}]},\"pages\":{\"page\":1,\"per_page\":10,\"total_pages\":1,\"type\":\"pages\"},\"total_count\":1,\"type\":\"list\"}}},\"schema\":{\"description\":\"The results of an Internal Article search\",\"properties\":{\"data\":{\"description\":\"An object containing the results of the search.\",\"properties\":{\"internal_articles\":{\"description\":\"An array of Internal Article objects\",\"items\":{\"allOf\":[{\"description\":\"The data returned about your internal articles when you list them.\",\"properties\":{\"ai_chatbot_availability\":{\"description\":\"Whether the internal article is available for AI Chatbot (Fin).\",\"example\":true,\"type\":\"boolean\"},\"ai_copilot_availability\":{\"description\":\"Whether the internal article is available for AI Copilot.\",\"example\":true,\"type\":\"boolean\"},\"ai_sales_agent_availability\":{\"description\":\"Whether the internal article is available for AI Sales Agent.\",\"example\":true,\"type\":\"boolean\"},\"audience_ids\":{\"description\":\"The list of audience IDs this internal article is targeted to for Fin AI Agent. Empty array means no audience targeting is set.\",\"example\":[1,2],\"items\":{\"type\":\"integer\"},\"nullable\":true,\"type\":\"array\"},\"author_id\":{\"description\":\"The id of the author of the article.\",\"example\":\"5017691\",\"type\":\"integer\"},\"body\":{\"description\":\"The body of the article in HTML.\",\"example\":\"Default language body in html\",\"nullable\":true,\"type\":\"string\"},\"body_markdown\":{\"description\":\"The body of the article in markdown.\",\"example\":\"# Internal Guide\\n\\nBody of the article in markdown\\n\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time when the article was created.\",\"example\":1672928359,\"format\":\"date-time\",\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier for the article which is given by Intercom.\",\"example\":\"6871119\",\"type\":\"string\"},\"locale\":{\"description\":\"The default locale of the article.\",\"type\":\"string\"},\"owner_id\":{\"description\":\"The id of the owner of the article.\",\"example\":\"5017691\",\"type\":\"integer\"},\"title\":{\"description\":\"The title of the article.\",\"type\":\"string\"},\"type\":{\"default\":\"internal_article\",\"description\":\"The type of object - `internal_article`.\",\"enum\":[\"internal_article\"],\"example\":\"internal_article\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time when the article was last updated.\",\"example\":1672928610,\"format\":\"date-time\",\"type\":\"integer\"}},\"title\":\"Internal Articles\",\"type\":\"object\"}],\"description\":\"The Internal Articles API is a central place to gather all information and take actions on your internal articles.\",\"title\":\"Internal Article\",\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"pages\":{\"description\":\"Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.\\nA \\\"cursor\\\" or pointer is used to keep track of the current position in the result set, allowing the API to return the data in small chunks or \\\"pages\\\" as needed.\\n\",\"nullable\":true,\"properties\":{\"next\":{\"nullable\":true,\"properties\":{\"per_page\":{\"description\":\"The number of results to fetch per page.\",\"example\":2,\"type\":\"integer\"},\"starting_after\":{\"description\":\"The cursor to use in the next request to get the next page of results.\",\"example\":\"your-cursor-from-response\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Pagination: Starting After\",\"type\":\"object\"},\"page\":{\"description\":\"The current page\",\"example\":1,\"type\":\"integer\"},\"per_page\":{\"description\":\"Number of results per page\",\"example\":2,\"type\":\"integer\"},\"total_pages\":{\"description\":\"Total number of pages\",\"example\":13,\"type\":\"integer\"},\"type\":{\"description\":\"the type of object `pages`.\",\"enum\":[\"pages\"],\"example\":\"pages\",\"type\":\"string\"}},\"title\":\"Cursor based pages\",\"type\":\"object\"},\"total_count\":{\"description\":\"The total number of Internal Articles matching the search query\",\"example\":5,\"type\":\"integer\"},\"type\":{\"description\":\"The type of the object - `list`.\",\"enum\":[\"list\"],\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Internal Article Search Response\",\"type\":\"object\"}}},\"description\":\"Search successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"c70746a8-a5b2-4772-afba-1a4b487ea75d\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/internal_articles/search","segments":[{"lit":"internal_articles"},{"lit":"search"}],"select":{"exist":["folder_id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"internal_article_search","name__orig":"internal_article_search","Name":"InternalArticleSearch","name_":"internal_article_search","name-":"internal-article-search","NAME":"INTERNAL_ARTICLE_SEARCH","index$":56}, {"active":true,"entity":"internal_article_search","key$":"BasicInternalArticleSearchFlow","kind":"basic","name":"BasicInternalArticleSearchFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"internal_article_search_ref01","srcdatavar":"internal_article_search_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-internal_article_search_ref01"}}],"index$":0}]}, 'InternalArticleSearch')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let internal_article_search_ref01_data = Object.values(setup.data.existing.internal_article_search)[0] as any

    // LOAD
    const internal_article_search_ref01_ent = client.InternalArticleSearch()
    const internal_article_search_ref01_match_dt0: any = {}
    const internal_article_search_ref01_data_dt0 = (await internal_article_search_ref01_ent.load(internal_article_search_ref01_match_dt0)).data()
    assert(null != internal_article_search_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/internal_article_search/InternalArticleSearchTestData.json')

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
    ['internal_article_search01','internal_article_search02','internal_article_search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_INTERNAL_ARTICLE_SEARCH_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_INTERNAL_ARTICLE_SEARCH_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_INTERNAL_ARTICLE_SEARCH_ENTID']
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
  
