

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


describe('ArticleVersionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.ArticleVersion()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'article_version.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"article_id","req":false,"short":"The unique identifier of the article this version belongs to.","type":"`$STRING`","index$":0},{"active":true,"name":"author_id","req":false,"short":"The id of the teammate listed as the article's author at this version.","type":"`$STRING`","index$":1},{"active":true,"name":"body","req":false,"short":"The HTML body of the article at this version.","type":"`$STRING`","index$":2},{"active":true,"name":"body_markdown","req":false,"short":"The Markdown body of the article at this version.","type":"`$STRING`","index$":3},{"active":true,"format":"date-time","name":"created_at","req":false,"short":"The time the version was created, as a UTC Unix timestamp.","type":"`$INTEGER`","index$":4},{"active":true,"name":"created_by_id","req":false,"short":"The id of the teammate who created this version.","type":"`$STRING`","index$":5},{"active":true,"name":"created_via","req":false,"short":"How this version was created (for example `web`, `api`).","type":"`$STRING`","index$":6},{"active":true,"name":"description","req":false,"short":"The description of the article at this version.","type":"`$STRING`","index$":7},{"active":true,"name":"from_version_id","req":false,"short":"The id of the version this version was created from, or `null` if this is the first version.","type":"`$STRING`","index$":8},{"active":true,"name":"id","req":false,"short":"The unique identifier for the version.","type":"`$STRING`","index$":9},{"active":true,"name":"state","req":false,"short":"Whether this version is the currently published version of the article (`published`) or an earlier non-live version (`draft`).","type":"`$STRING`","index$":10},{"active":true,"name":"title","req":false,"short":"The title of the article at this version.","type":"`$STRING`","index$":11},{"active":true,"name":"type","req":false,"short":"String representing the object's type.","type":"`$STRING`","index$":12},{"active":true,"format":"date-time","name":"updated_at","req":false,"short":"The time the version was last updated, as a UTC Unix timestamp.","type":"`$INTEGER`","index$":13}],"id":{"field":"id","name":"id"},"name":"article_version","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":123,"kind":"param","name":"article_id","orig":"article_id","reqd":true,"type":"`$INTEGER`","index$":0},{"active":true,"example":"301","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":"en","kind":"query","name":"locale","orig":"locale","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /articles/{article_id}/versions/{id}","json":"{\"operationId\":\"retrieveArticleVersion\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the article.\",\"example\":123,\"in\":\"path\",\"name\":\"article_id\",\"required\":true,\"schema\":{\"type\":\"integer\"}},{\"description\":\"The unique identifier for the version.\",\"example\":\"301\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Return the version's content for a specific locale. If the locale is not configured for the workspace, a `400` is returned.\",\"example\":\"en\",\"in\":\"query\",\"name\":\"locale\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Version found\":{\"value\":{\"article_id\":\"123\",\"author_id\":\"991267502\",\"body\":\"<p class=\\\"no-margin\\\">Body of this version</p>\",\"body_markdown\":\"Body of this version\\n\",\"created_at\":1734537292,\"created_by_id\":\"5017691\",\"created_via\":\"web\",\"description\":\"\",\"from_version_id\":\"300\",\"id\":\"301\",\"state\":\"published\",\"title\":\"This is the article title\",\"type\":\"article_version\",\"updated_at\":1734537292}}},\"schema\":{\"description\":\"A historical version of an article, including its content.\",\"properties\":{\"article_id\":{\"description\":\"The unique identifier of the article this version belongs to.\",\"example\":\"123\",\"type\":\"string\"},\"author_id\":{\"description\":\"The id of the teammate listed as the article's author at this version.\",\"example\":\"991267502\",\"type\":\"string\"},\"body\":{\"description\":\"The HTML body of the article at this version.\",\"example\":\"<p class=\\\"no-margin\\\">Body of this version</p>\",\"nullable\":true,\"type\":\"string\"},\"body_markdown\":{\"description\":\"The Markdown body of the article at this version.\",\"example\":\"Body of this version\\n\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time the version was created, as a UTC Unix timestamp.\",\"example\":1734537292,\"format\":\"date-time\",\"type\":\"integer\"},\"created_by_id\":{\"description\":\"The id of the teammate who created this version.\",\"example\":\"5017691\",\"nullable\":true,\"type\":\"string\"},\"created_via\":{\"description\":\"How this version was created (for example `web`, `api`).\",\"example\":\"web\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the article at this version.\",\"example\":\"\",\"nullable\":true,\"type\":\"string\"},\"from_version_id\":{\"description\":\"The id of the version this version was created from, or `null` if this is the first version.\",\"example\":\"300\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the version.\",\"example\":\"301\",\"type\":\"string\"},\"state\":{\"description\":\"Whether this version is the currently published version of the article (`published`) or an earlier non-live version (`draft`).\",\"enum\":[\"published\",\"draft\"],\"example\":\"published\",\"type\":\"string\"},\"title\":{\"description\":\"The title of the article at this version.\",\"example\":\"This is the article title\",\"type\":\"string\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `article_version`.\",\"enum\":[\"article_version\"],\"example\":\"article_version\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time the version was last updated, as a UTC Unix timestamp.\",\"example\":1734537292,\"format\":\"date-time\",\"type\":\"integer\"}},\"title\":\"Article Version\",\"type\":\"object\"}}},\"description\":\"Version found\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"Unknown locale\":{\"value\":{\"errors\":[{\"code\":\"parameter_invalid\",\"message\":\"Unknown locale\"}],\"request_id\":\"6f3c2b1a-2d4e-4f6a-9b8c-1a2b3c4d5e6f\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unknown locale\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"12a938a3-314e-4939-b773-5cd45738bd21\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"CustomObjectNotFound\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Custom object instance not found\"}],\"request_id\":\"12a938a3-314e-4939-b773-5cd45738bd21\",\"type\":\"error.list\"}},\"IntegrationNotFound\":{\"value\":{\"errors\":[{\"code\":\"data_invalid\",\"message\":\"Integration not found\"}],\"request_id\":\"12a938a3-314e-4939-b773-5cd45738bd21\",\"type\":\"error.list\"}},\"ObjectNotFound\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Object not found\"}],\"request_id\":\"12a938a3-314e-4939-b773-5cd45738bd21\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/articles/{article_id}/versions/{id}","segments":[{"lit":"articles"},{"var":"article_id"},{"lit":"versions"},{"var":"id"}],"select":{"exist":["article_id","id","intercom_version","locale"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["article"]]},"key$":"article_version","name__orig":"article_version","Name":"ArticleVersion","name_":"article_version","name-":"article-version","NAME":"ARTICLE_VERSION","index$":9}, {"active":true,"entity":"article_version","key$":"BasicArticleVersionFlow","kind":"basic","name":"BasicArticleVersionFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"article_version_ref01","srcdatavar":"article_version_ref01_data","suffix":"_dt0"},"match":{"article_id":"article01","id":"article_version01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-article_version_ref01"}}],"index$":0}]}, 'ArticleVersion')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let article_version_ref01_data = Object.values(setup.data.existing.article_version)[0] as any

    // LOAD
    const article_version_ref01_ent = client.ArticleVersion()
    const article_version_ref01_match_dt0: any = {}
    article_version_ref01_match_dt0.id = article_version_ref01_data.id
    const article_version_ref01_data_dt0 = (await article_version_ref01_ent.load(article_version_ref01_match_dt0)).data()
    assert(article_version_ref01_data_dt0.id === article_version_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/article_version/ArticleVersionTestData.json')

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
    ['article_version01','article_version02','article_version03','article01','article02','article03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_ARTICLE_VERSION_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_ARTICLE_VERSION_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_ARTICLE_VERSION_ENTID']
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
  
