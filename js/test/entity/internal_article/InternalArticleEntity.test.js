
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { IntercomSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('InternalArticleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.InternalArticle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"ai_chatbot_availability","req":false,"short":"Whether the internal article is available for AI Chatbot (Fin).","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"ai_copilot_availability","req":false,"short":"Whether the internal article is available for AI Copilot.","type":"`$BOOLEAN`","index$":1},{"active":true,"name":"ai_sales_agent_availability","req":false,"short":"Whether the internal article is available for AI Sales Agent.","type":"`$BOOLEAN`","index$":2},{"active":true,"name":"audience_ids","req":false,"short":"The list of audience IDs this internal article is targeted to for Fin AI Agent.","type":"`$ARRAY`","index$":3},{"active":true,"name":"author_id","req":false,"short":"The id of the author of the article.","type":"`$INTEGER`","index$":4},{"active":true,"name":"body","req":false,"short":"The body of the article in HTML.","type":"`$STRING`","index$":5},{"active":true,"name":"body_markdown","req":false,"short":"The body of the article in markdown.","type":"`$STRING`","index$":6},{"active":true,"format":"date-time","name":"created_at","req":false,"short":"The time when the article was created.","type":"`$INTEGER`","index$":7},{"active":true,"name":"id","req":false,"short":"The unique identifier for the article which is given by Intercom.","type":"`$STRING`","index$":8},{"active":true,"name":"locale","req":false,"short":"The default locale of the article.","type":"`$STRING`","index$":9},{"active":true,"name":"owner_id","req":false,"short":"The id of the owner of the article.","type":"`$INTEGER`","index$":10},{"active":true,"name":"title","req":false,"short":"The title of the article.","type":"`$STRING`","index$":11},{"active":true,"name":"type","req":false,"short":"The type of object - `internal_article`.","type":"`$STRING`","index$":12},{"active":true,"format":"date-time","name":"updated_at","req":false,"short":"The time when the article was last updated.","type":"`$INTEGER`","index$":13}],"id":{"field":"id","name":"id"},"name":"internal_article","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":123,"kind":"param","name":"id","orig":"internal_article_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /internal_articles/{internal_article_id}","json":"{\"operationId\":\"retrieveInternalArticle\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the article which is given by Intercom.\",\"example\":123,\"in\":\"path\",\"name\":\"internal_article_id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Internal article found\":{\"value\":{\"author_id\":991266252,\"body\":\"Body of the Article\",\"id\":\"45\",\"locale\":\"en\",\"owner_id\":991266252}}},\"schema\":{\"allOf\":[{\"description\":\"The data returned about your internal articles when you list them.\",\"properties\":{\"ai_chatbot_availability\":{\"description\":\"Whether the internal article is available for AI Chatbot (Fin).\",\"example\":true,\"type\":\"boolean\"},\"ai_copilot_availability\":{\"description\":\"Whether the internal article is available for AI Copilot.\",\"example\":true,\"type\":\"boolean\"},\"ai_sales_agent_availability\":{\"description\":\"Whether the internal article is available for AI Sales Agent.\",\"example\":true,\"type\":\"boolean\"},\"audience_ids\":{\"description\":\"The list of audience IDs this internal article is targeted to for Fin AI Agent. Empty array means no audience targeting is set.\",\"example\":[1,2],\"items\":{\"type\":\"integer\"},\"nullable\":true,\"type\":\"array\"},\"author_id\":{\"description\":\"The id of the author of the article.\",\"example\":\"5017691\",\"type\":\"integer\"},\"body\":{\"description\":\"The body of the article in HTML.\",\"example\":\"Default language body in html\",\"nullable\":true,\"type\":\"string\"},\"body_markdown\":{\"description\":\"The body of the article in markdown.\",\"example\":\"# Internal Guide\\n\\nBody of the article in markdown\\n\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time when the article was created.\",\"example\":1672928359,\"format\":\"date-time\",\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier for the article which is given by Intercom.\",\"example\":\"6871119\",\"type\":\"string\"},\"locale\":{\"description\":\"The default locale of the article.\",\"type\":\"string\"},\"owner_id\":{\"description\":\"The id of the owner of the article.\",\"example\":\"5017691\",\"type\":\"integer\"},\"title\":{\"description\":\"The title of the article.\",\"type\":\"string\"},\"type\":{\"default\":\"internal_article\",\"description\":\"The type of object - `internal_article`.\",\"enum\":[\"internal_article\"],\"example\":\"internal_article\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time when the article was last updated.\",\"example\":1672928610,\"format\":\"date-time\",\"type\":\"integer\"}},\"title\":\"Internal Articles\",\"type\":\"object\"}],\"description\":\"The Internal Articles API is a central place to gather all information and take actions on your internal articles.\",\"title\":\"Internal Article\",\"type\":\"object\"}}},\"description\":\"Internal article found\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"2eab07fb-5092-49a4-ba74-44094f31f264\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Internal article not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Resource Not Found\"}],\"request_id\":\"79abd27a-1bfb-42ec-a404-5728c76ba773\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Internal article not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/internal_articles/{internal_article_id}","rename":{"param":{"internal_article_id":"id"}},"segments":[{"lit":"internal_articles"},{"var":"id"}],"select":{"exist":["id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":123,"kind":"param","name":"id","orig":"internal_article_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"PUT /internal_articles/{internal_article_id}","json":"{\"operationId\":\"updateInternalArticle\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the internal article which is given by Intercom.\",\"example\":123,\"in\":\"path\",\"name\":\"internal_article_id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"internal_article_not_found\":{\"summary\":\"Internal article not found\",\"value\":{\"body\":\"<p>New gifts in store for the jolly season</p>\",\"title\":\"Christmas is here!\"}},\"successful\":{\"summary\":\"successful\",\"value\":{\"body\":\"<p>New gifts in store for the jolly season</p>\",\"title\":\"Christmas is here!\"}}},\"schema\":{\"description\":\"You can Update an Internal Article\",\"nullable\":true,\"properties\":{\"ai_chatbot_availability\":{\"description\":\"Whether the internal article should be available for AI Chatbot (Fin).\",\"example\":true,\"type\":\"boolean\"},\"ai_copilot_availability\":{\"description\":\"Whether the internal article should be available for AI Copilot.\",\"example\":true,\"type\":\"boolean\"},\"ai_sales_agent_availability\":{\"description\":\"Whether the internal article should be available for AI Sales Agent.\",\"example\":true,\"type\":\"boolean\"},\"audience_ids\":{\"description\":\"The list of audience IDs to target this internal article to for Fin AI Agent. Omitting the field leaves existing audience memberships unchanged (PATCH semantics). Pass `[]` to clear all audience memberships. Unknown audience IDs return a `404` error with no partial commit.\",\"example\":[1,2],\"items\":{\"type\":\"integer\"},\"nullable\":true,\"type\":\"array\"},\"author_id\":{\"description\":\"The id of the author of the article.\",\"example\":1295,\"type\":\"integer\"},\"body\":{\"description\":\"The content of the article in HTML. Mutually exclusive with `body_markdown`.\",\"type\":\"string\"},\"body_markdown\":{\"description\":\"The content of the article in markdown. An alternative to `body` — you can provide content as markdown instead of HTML. Mutually exclusive with `body`.\",\"example\":\"## Updated\\n\\nNew content.\\n\",\"type\":\"string\"},\"owner_id\":{\"description\":\"The id of the author of the article.\",\"example\":1295,\"type\":\"integer\"},\"title\":{\"description\":\"The title of the article.\",\"example\":\"Thanks for everything\",\"type\":\"string\"}},\"title\":\"Update Internal Article Request Payload\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"author_id\":991266252,\"body\":\"Body of the Article\",\"id\":\"48\",\"locale\":\"en\",\"owner_id\":991266252}}},\"schema\":{\"allOf\":[{\"description\":\"The data returned about your internal articles when you list them.\",\"properties\":{\"ai_chatbot_availability\":{\"description\":\"Whether the internal article is available for AI Chatbot (Fin).\",\"example\":true,\"type\":\"boolean\"},\"ai_copilot_availability\":{\"description\":\"Whether the internal article is available for AI Copilot.\",\"example\":true,\"type\":\"boolean\"},\"ai_sales_agent_availability\":{\"description\":\"Whether the internal article is available for AI Sales Agent.\",\"example\":true,\"type\":\"boolean\"},\"audience_ids\":{\"description\":\"The list of audience IDs this internal article is targeted to for Fin AI Agent. Empty array means no audience targeting is set.\",\"example\":[1,2],\"items\":{\"type\":\"integer\"},\"nullable\":true,\"type\":\"array\"},\"author_id\":{\"description\":\"The id of the author of the article.\",\"example\":\"5017691\",\"type\":\"integer\"},\"body\":{\"description\":\"The body of the article in HTML.\",\"example\":\"Default language body in html\",\"nullable\":true,\"type\":\"string\"},\"body_markdown\":{\"description\":\"The body of the article in markdown.\",\"example\":\"# Internal Guide\\n\\nBody of the article in markdown\\n\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time when the article was created.\",\"example\":1672928359,\"format\":\"date-time\",\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier for the article which is given by Intercom.\",\"example\":\"6871119\",\"type\":\"string\"},\"locale\":{\"description\":\"The default locale of the article.\",\"type\":\"string\"},\"owner_id\":{\"description\":\"The id of the owner of the article.\",\"example\":\"5017691\",\"type\":\"integer\"},\"title\":{\"description\":\"The title of the article.\",\"type\":\"string\"},\"type\":{\"default\":\"internal_article\",\"description\":\"The type of object - `internal_article`.\",\"enum\":[\"internal_article\"],\"example\":\"internal_article\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time when the article was last updated.\",\"example\":1672928610,\"format\":\"date-time\",\"type\":\"integer\"}},\"title\":\"Internal Articles\",\"type\":\"object\"}],\"description\":\"The Internal Articles API is a central place to gather all information and take actions on your internal articles.\",\"title\":\"Internal Article\",\"type\":\"object\"}}},\"description\":\"successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"d1ea223d-bb62-42e3-8bcf-30fdcf7dbd99\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Internal article not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Resource Not Found\"}],\"request_id\":\"f9adccb2-9fca-4b87-bbb7-65f2af5e1d78\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Internal article not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/internal_articles/{internal_article_id}","rename":{"param":{"internal_article_id":"id"}},"segments":[{"lit":"internal_articles"},{"var":"id"}],"select":{"exist":["id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"internal_article","name__orig":"internal_article","Name":"InternalArticle","name_":"internal_article","name-":"internal-article","NAME":"INTERNAL_ARTICLE","index$":55}, {"active":true,"entity":"internal_article","key$":"BasicInternalArticleFlow","kind":"basic","name":"BasicInternalArticleFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"internal_article_ref01","srcdatavar":"internal_article_ref01_data","suffix":"_up0","textfield":"body"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-internal_article_ref01"}}],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"internal_article_ref01","srcdatavar":"internal_article_ref01_data","suffix":"_dt0"},"match":{"id":"internal_article01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-internal_article_ref01"}}],"index$":1}]}, 'InternalArticle')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let internal_article_ref01_data = Object.values(setup.data.existing.internal_article)[0]

    // UPDATE
    const internal_article_ref01_ent = client.InternalArticle()
    const internal_article_ref01_data_up0 = {}
    internal_article_ref01_data_up0.id = internal_article_ref01_data.id

    const internal_article_ref01_markdef_up0 = { name: 'body', value: 'Mark01-internal_article_ref01_' + setup.now }
    internal_article_ref01_data_up0 [internal_article_ref01_markdef_up0.name] = internal_article_ref01_markdef_up0.value

    const internal_article_ref01_resdata_up0 = (await internal_article_ref01_ent.update(internal_article_ref01_data_up0)).data()
    assert(internal_article_ref01_resdata_up0.id === internal_article_ref01_data_up0.id)

    assert(internal_article_ref01_resdata_up0[internal_article_ref01_markdef_up0.name] === internal_article_ref01_markdef_up0.value)


    // LOAD
    const internal_article_ref01_match_dt0 = {}
    internal_article_ref01_match_dt0.id = internal_article_ref01_data.id
    const internal_article_ref01_data_dt0 = (await internal_article_ref01_ent.load(internal_article_ref01_match_dt0)).data()
    assert(internal_article_ref01_data_dt0.id === internal_article_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/internal_article/InternalArticleTestData.json')

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
    ['internal_article01','internal_article02','internal_article03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_INTERNAL_ARTICLE_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_INTERNAL_ARTICLE_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_INTERNAL_ARTICLE_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  
