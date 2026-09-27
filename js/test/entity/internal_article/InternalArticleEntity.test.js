
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"ai_chatbot_availability":{"a":true,"h":"Ai Chatbot Availability","n":"ai_chatbot_availability","r":false,"sh":"Whether the internal article is available for AI Chatbot (Fin).","t":"`$BOOLEAN`","key$":"ai_chatbot_availability","index$":0},"ai_copilot_availability":{"a":true,"h":"Ai Copilot Availability","n":"ai_copilot_availability","r":false,"sh":"Whether the internal article is available for AI Copilot.","t":"`$BOOLEAN`","key$":"ai_copilot_availability","index$":1},"ai_sales_agent_availability":{"a":true,"h":"Ai Sales Agent Availability","n":"ai_sales_agent_availability","r":false,"sh":"Whether the internal article is available for AI Sales Agent.","t":"`$BOOLEAN`","key$":"ai_sales_agent_availability","index$":2},"audience_ids":{"a":true,"h":"Audience Ids","n":"audience_ids","r":false,"sh":"The list of audience IDs this internal article is targeted to for Fin AI Agent.","t":"`$ARRAY`","key$":"audience_ids","index$":3},"author_id":{"a":true,"h":"Author Id","n":"author_id","r":false,"sh":"The id of the author of the article.","t":"`$INTEGER`","key$":"author_id","index$":4},"body":{"a":true,"h":"Body","n":"body","r":false,"sh":"The body of the article in HTML.","t":"`$STRING`","key$":"body","index$":5},"body_markdown":{"a":true,"h":"Body Markdown","n":"body_markdown","r":false,"sh":"The body of the article in markdown.","t":"`$STRING`","key$":"body_markdown","index$":6},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"The time when the article was created.","t":"`$INTEGER`","key$":"created_at","index$":7},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier for the article which is given by Intercom.","t":"`$STRING`","key$":"id","index$":8},"locale":{"a":true,"h":"Locale","n":"locale","r":false,"sh":"The default locale of the article.","t":"`$STRING`","key$":"locale","index$":9},"owner_id":{"a":true,"h":"Owner Id","n":"owner_id","r":false,"sh":"The id of the owner of the article.","t":"`$INTEGER`","key$":"owner_id","index$":10},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"The title of the article.","t":"`$STRING`","key$":"title","index$":11},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of object - `internal_article`.","t":"`$STRING`","key$":"type","index$":12},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"sh":"The time when the article was last updated.","t":"`$INTEGER`","key$":"updated_at","index$":13}},"id":{"field":"id","name":"id"},"name":"internal_article","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /internal_articles/{internal_article_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":123,"k":"param","n":"id","or":"internal_article_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/internal_articles/{internal_article_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"internal_article_id":"id"}},"s":[{"lit":"internal_articles"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /internal_articles/{internal_article_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":123,"k":"param","n":"id","or":"internal_article_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PUT","o":"/internal_articles/{internal_article_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"internal_article_id":"id"}},"s":[{"lit":"internal_articles"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"internal_article","name__orig":"internal_article","Name":"InternalArticle","name_":"internal_article","name-":"internal-article","NAME":"INTERNAL_ARTICLE","index$":55}, {"active":true,"entity":"internal_article","key$":"BasicInternalArticleFlow","kind":"basic","name":"BasicInternalArticleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"internal_article_ref01","srcdatavar":"internal_article_ref01_data","suffix":"_up0","textfield":"body"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-internal_article_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"internal_article_ref01","srcdatavar":"internal_article_ref01_data","suffix":"_dt0"},"m":{"id":"internal_article01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-internal_article_ref01"}}],"index$":1}]}, 'InternalArticle', {"GET /internal_articles/{internal_article_id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"internal_article_id","in":"path","required":true,"description":"The unique identifier for the article which is given by Intercom.","example":123,"schema":{"type":"integer"},"index$":1}]},"PUT /internal_articles/{internal_article_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"You can Update an Internal Article","type":"object","title":"Update Internal Article Request Payload","nullable":true,"properties":{"title":{"type":"string","description":"The title of the article.","example":"Thanks for everything","key$":"title"},"body":{"type":"string","description":"The content of the article in HTML. Mutually exclusive with `body_markdown`.","key$":"body"},"body_markdown":{"type":"string","description":"The content of the article in markdown. An alternative to `body` — you can provide content as markdown instead of HTML. Mutually exclusive with `body`.","example":"## Updated\n\nNew content.\n","key$":"body_markdown"},"author_id":{"type":"integer","description":"The id of the author of the article.","example":1295,"key$":"author_id"},"owner_id":{"type":"integer","description":"The id of the author of the article.","example":1295,"key$":"owner_id"},"audience_ids":{"type":"array","nullable":true,"description":"The list of audience IDs to target this internal article to for Fin AI Agent. Omitting the field leaves existing audience memberships unchanged (PATCH semantics). Pass `[]` to clear all audience memberships. Unknown audience IDs return a `404` error with no partial commit.","items":{"type":"integer"},"example":[1,2],"key$":"audience_ids"},"ai_chatbot_availability":{"type":"boolean","description":"Whether the internal article should be available for AI Chatbot (Fin).","example":true,"key$":"ai_chatbot_availability"},"ai_copilot_availability":{"type":"boolean","description":"Whether the internal article should be available for AI Copilot.","example":true,"key$":"ai_copilot_availability"},"ai_sales_agent_availability":{"type":"boolean","description":"Whether the internal article should be available for AI Sales Agent.","example":true,"key$":"ai_sales_agent_availability"}},"x-ref":"#/components/schemas/update_internal_article_request","index$":1},"examples":{"successful":{"summary":"successful","value":{"title":"Christmas is here!","body":"<p>New gifts in store for the jolly season</p>"}},"internal_article_not_found":{"summary":"Internal article not found","value":{"title":"Christmas is here!","body":"<p>New gifts in store for the jolly season</p>"}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"internal_article_id","in":"path","required":true,"description":"The unique identifier for the internal article which is given by Intercom.","example":123,"schema":{"type":"integer"},"index$":1}]}})
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
  
