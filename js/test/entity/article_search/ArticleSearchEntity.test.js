
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


describe('ArticleSearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.ArticleSearch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":false,"sh":"An object containing the results of the search.","t":"`$OBJECT`","key$":"data","index$":0},"pages":{"a":true,"h":"Pages","n":"pages","r":false,"sh":"Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.","t":"`$OBJECT`","key$":"pages","index$":1},"total_count":{"a":true,"h":"Total Count","n":"total_count","r":false,"sh":"The total number of Articles matching the search query","t":"`$INTEGER`","key$":"total_count","index$":2},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of the object - `list`.","t":"`$STRING`","key$":"type","index$":3}},"name":"article_search","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /articles/search","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":123,"k":"query","n":"help_center_id","or":"help_center_id","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":false,"k":"query","n":"highlight","or":"highlight","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":"Getting started","k":"query","n":"phrase","or":"phrase","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"published","k":"query","n":"state","or":"state","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/articles/search","q":{"exist":["help_center_id","highlight","intercom_version","phrase","state"]},"r":{},"s":[{"lit":"articles"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"article_search","name__orig":"article_search","Name":"ArticleSearch","name_":"article_search","name-":"article-search","NAME":"ARTICLE_SEARCH","index$":8}, {"active":true,"entity":"article_search","key$":"BasicArticleSearchFlow","kind":"basic","name":"BasicArticleSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"article_search_ref01","srcdatavar":"article_search_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-article_search_ref01"}}],"index$":0}]}, 'ArticleSearch', {"GET /articles/search":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"phrase","in":"query","required":false,"description":"The phrase within your articles to search for.","example":"Getting started","schema":{"type":"string"},"index$":1},{"name":"state","in":"query","required":false,"description":"The state of the Articles returned. One of `published`, `draft` or `all`.","example":"published","schema":{"type":"string"},"index$":2},{"name":"help_center_id","in":"query","required":false,"description":"The ID of the Help Center to search in.","example":123,"schema":{"type":"integer"},"index$":3},{"name":"highlight","in":"query","required":false,"description":"Return a highlighted version of the matching content within your articles. Refer to the response schema for more details.","example":false,"schema":{"type":"boolean"},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let article_search_ref01_data = Object.values(setup.data.existing.article_search)[0]

    // LOAD
    const article_search_ref01_ent = client.ArticleSearch()
    const article_search_ref01_match_dt0 = {}
    const article_search_ref01_data_dt0 = (await article_search_ref01_ent.load(article_search_ref01_match_dt0)).data()
    assert(null != article_search_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/article_search/ArticleSearchTestData.json')

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
    ['article_search01','article_search02','article_search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_ARTICLE_SEARCH_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_ARTICLE_SEARCH_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_ARTICLE_SEARCH_ENTID']
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
  
