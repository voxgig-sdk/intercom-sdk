

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


describe('ArticleVersionListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.ArticleVersionList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'article_version_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"article_version_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /articles/{article_id}/versions","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":123,"k":"param","n":"id","or":"article_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":"en","k":"query","n":"locale","or":"locale","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":25,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/articles/{article_id}/versions","q":{"$action":"versions","exist":["id","intercom_version","locale","page","per_page"]},"r":{"param":{"article_id":"id"}},"s":[{"lit":"articles"},{"var":"id"},{"lit":"versions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"article_version_list","name__orig":"article_version_list","Name":"ArticleVersionList","name_":"article_version_list","name-":"article-version-list","NAME":"ARTICLE_VERSION_LIST","index$":10}, {"active":true,"entity":"article_version_list","key$":"BasicArticleVersionListFlow","kind":"basic","name":"BasicArticleVersionListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"article_id":"article01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"article_version_list_ref01"}}],"index$":0}]}, 'ArticleVersionList', {"GET /articles/{article_id}/versions":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"article_id","in":"path","required":true,"description":"The unique identifier for the article whose versions you are listing.","example":123,"schema":{"type":"integer"},"index$":1},{"name":"page","in":"query","required":false,"description":"The page of results to fetch. Defaults to the first page.","example":1,"schema":{"type":"integer"},"index$":2},{"name":"per_page","in":"query","required":false,"description":"The number of results to return per page.","example":25,"schema":{"type":"integer"},"index$":3},{"name":"locale","in":"query","required":false,"description":"Filter versions to a specific locale. Use the locale identifier (for example `en`, `fr`). If the locale is not configured for the workspace, a `400` is returned.","example":"en","schema":{"type":"string"},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let article_version_list_ref01_data = Object.values(setup.data.existing.article_version_list)[0] as any

    // LIST
    const article_version_list_ref01_ent = client.ArticleVersionList()
    const article_version_list_ref01_match: any = {}
    article_version_list_ref01_match['article_id'] = setup.idmap['article01']

    const article_version_list_ref01_list = (await article_version_list_ref01_ent.list(article_version_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/article_version_list/ArticleVersionListTestData.json')

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
    ['article_version_list01','article_version_list02','article_version_list03','article01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_ARTICLE_VERSION_LIST_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_ARTICLE_VERSION_LIST_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_ARTICLE_VERSION_LIST_ENTID']
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
  
