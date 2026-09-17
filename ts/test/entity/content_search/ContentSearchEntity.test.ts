

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


describe('ContentSearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.ContentSearch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'content_search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"data","req":false,"short":"The list of matched content items.","type":"`$ARRAY`","index$":0},{"active":true,"name":"pages","req":false,"short":"Pagination metadata, including links to neighbouring pages.","type":"`$OBJECT`","index$":1},{"active":true,"name":"total_count","req":false,"short":"Total number of results matching the query.","type":"`$INTEGER`","index$":2},{"active":true,"name":"type","req":false,"short":"Always `list`.","type":"`$STRING`","index$":3}],"name":"content_search","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"query":[{"active":true,"example":"1,2,3","kind":"query","name":"any_tag_id","orig":"any_tag_id","reqd":false,"type":"`$ARRAY`","index$":0},{"active":true,"example":"article,snippet","kind":"query","name":"content_type","orig":"content_type","reqd":false,"type":"`$ARRAY`","index$":1},{"active":true,"example":"on","kind":"query","name":"copilot_state","orig":"copilot_state","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":1677253093,"kind":"query","name":"created_at_after","orig":"created_at_after","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"example":1677861493,"kind":"query","name":"created_at_before","orig":"created_at_before","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"example":"991267464,991267465","kind":"query","name":"created_by_id","orig":"created_by_id","reqd":false,"type":"`$ARRAY`","index$":5},{"active":true,"example":"on","kind":"query","name":"fin_sales_state","orig":"fin_sales_state","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"example":"on","kind":"query","name":"fin_service_state","orig":"fin_service_state","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"example":"folder","kind":"query","name":"folder_entity_type","orig":"folder_entity_type","reqd":false,"type":"`$STRING`","index$":8},{"active":true,"example":"10,20","kind":"query","name":"folder_id","orig":"folder_id","reqd":false,"type":"`$ARRAY`","index$":9},{"active":true,"example":"991267464,991267465","kind":"query","name":"last_updated_by_id","orig":"last_updated_by_id","reqd":false,"type":"`$ARRAY`","index$":10},{"active":true,"example":"en,fr","kind":"query","name":"locale","orig":"locale","reqd":false,"type":"`$ARRAY`","index$":11},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":12},{"active":true,"example":10,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":13},{"active":true,"example":"billing","kind":"query","name":"query","orig":"query","reqd":false,"type":"`$STRING`","index$":14},{"active":true,"example":"published,draft","kind":"query","name":"state","orig":"state","reqd":false,"type":"`$ARRAY`","index$":15},{"active":true,"example":"1,2,3","kind":"query","name":"tag_id","orig":"tag_id","reqd":false,"type":"`$ARRAY`","index$":16},{"active":true,"example":"IN","kind":"query","name":"tag_operator","orig":"tag_operator","reqd":false,"type":"`$STRING`","index$":17},{"active":true,"example":1677253093,"kind":"query","name":"updated_at_after","orig":"updated_at_after","reqd":false,"type":"`$INTEGER`","index$":18},{"active":true,"example":1677861493,"kind":"query","name":"updated_at_before","orig":"updated_at_before","reqd":false,"type":"`$INTEGER`","index$":19}]},"contract":{"id":"GET /content/search","json":"{\"operationId\":\"searchContent\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"A free-text search term matched against the title and body of each content item. When omitted, returns the most recent content items.\",\"example\":\"billing\",\"in\":\"query\",\"name\":\"query\",\"required\":false,\"schema\":{\"maxLength\":500,\"type\":\"string\"}},{\"description\":\"The page number to fetch. Defaults to 1. Values below 1 are clamped to 1.\",\"example\":1,\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page. Defaults to 10. Maximum 50.\",\"example\":10,\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":50,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Filter by publication state. Accepts a comma-separated list or repeated params.\",\"example\":\"published,draft\",\"explode\":false,\"in\":\"query\",\"name\":\"states\",\"required\":false,\"schema\":{\"items\":{\"enum\":[\"published\",\"draft\"],\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Filter by locale codes (e.g. `en`, `fr`, `de`). Accepts a comma-separated list or repeated params.\",\"example\":\"en,fr\",\"explode\":false,\"in\":\"query\",\"name\":\"locales\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Filter by tag IDs. Pairs with `tag_operator` to control match semantics. Accepts a comma-separated list or repeated params.\",\"example\":\"1,2,3\",\"explode\":false,\"in\":\"query\",\"name\":\"tag_ids\",\"required\":false,\"schema\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Match operator paired with `tag_ids`. `IN` returns content matching any of the given tags; `NIN` excludes content matching any of them.\",\"example\":\"IN\",\"in\":\"query\",\"name\":\"tag_operator\",\"required\":false,\"schema\":{\"enum\":[\"IN\",\"NIN\"],\"type\":\"string\"}},{\"description\":\"Filter by tag IDs using OR semantics — returns content matching any of the given tags. Alternative to `tag_ids` + `tag_operator`. Accepts a comma-separated list or repeated params.\",\"example\":\"1,2,3\",\"explode\":false,\"in\":\"query\",\"name\":\"any_tag_ids\",\"required\":false,\"schema\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Filter by folder IDs. Must be sent together with `folder_entity_type`. Accepts a comma-separated list or repeated params.\",\"example\":\"10,20\",\"explode\":false,\"in\":\"query\",\"name\":\"folder_ids\",\"required\":false,\"schema\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Required when `folder_ids` is provided. Identifies the entity type the folder IDs refer to.\",\"example\":\"folder\",\"in\":\"query\",\"name\":\"folder_entity_type\",\"required\":false,\"schema\":{\"enum\":[\"folder\"],\"type\":\"string\"}},{\"description\":\"Restrict the search to specific content types. When provided, this REPLACES the default content type set rather than filtering on top of it. Accepts a comma-separated list or repeated params.\",\"example\":\"article,snippet\",\"explode\":false,\"in\":\"query\",\"name\":\"content_types\",\"required\":false,\"schema\":{\"items\":{\"enum\":[\"snippet\",\"external_content\",\"file_source_content\",\"internal_article\",\"article\"],\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Filter by whether the content is enabled for Copilot.\",\"example\":\"on\",\"in\":\"query\",\"name\":\"copilot_state\",\"required\":false,\"schema\":{\"enum\":[\"on\",\"off\"],\"type\":\"string\"}},{\"description\":\"Filter by whether the content is enabled for Fin AI Agent (customer-facing service).\",\"example\":\"on\",\"in\":\"query\",\"name\":\"fin_service_state\",\"required\":false,\"schema\":{\"enum\":[\"on\",\"off\"],\"type\":\"string\"}},{\"description\":\"Filter by whether the content is enabled for Fin Sales Agent.\",\"example\":\"on\",\"in\":\"query\",\"name\":\"fin_sales_state\",\"required\":false,\"schema\":{\"enum\":[\"on\",\"off\"],\"type\":\"string\"}},{\"description\":\"Filter by the admin IDs that created the content. Accepts a comma-separated list or repeated params.\",\"example\":\"991267464,991267465\",\"explode\":false,\"in\":\"query\",\"name\":\"created_by_ids\",\"required\":false,\"schema\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Filter by the admin IDs that last updated the content. Accepts a comma-separated list or repeated params.\",\"example\":\"991267464,991267465\",\"explode\":false,\"in\":\"query\",\"name\":\"last_updated_by_ids\",\"required\":false,\"schema\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Return content created at or after this time. Unix epoch seconds.\",\"example\":1677253093,\"in\":\"query\",\"name\":\"created_at_after\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Return content created at or before this time. Unix epoch seconds.\",\"example\":1677861493,\"in\":\"query\",\"name\":\"created_at_before\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Return content last updated at or after this time. Unix epoch seconds.\",\"example\":1677253093,\"in\":\"query\",\"name\":\"updated_at_after\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Return content last updated at or before this time. Unix epoch seconds.\",\"example\":1677861493,\"in\":\"query\",\"name\":\"updated_at_before\",\"required\":false,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Search successful\":{\"value\":{\"data\":[{\"id\":\"123\",\"title\":\"Billing FAQ\",\"type\":\"content_snippet\"},{\"id\":\"456\",\"title\":\"How to reset your password\",\"type\":\"external_content\"},{\"id\":\"789\",\"title\":\"billing-guide.pdf\",\"type\":\"file_source_content\"},{\"id\":\"012\",\"title\":\"Internal SOP: Refunds\",\"type\":\"internal_article\"},{\"contents\":[{\"id\":\"678\",\"locale\":\"en\",\"title\":\"Billing FAQ\",\"type\":\"article_content\"},{\"id\":\"910\",\"locale\":\"fr\",\"title\":\"Facturation FAQ\",\"type\":\"article_content\"}],\"id\":\"345\",\"title\":\"Billing FAQ\",\"type\":\"article\"}],\"pages\":{\"next\":null,\"page\":1,\"per_page\":10,\"prev\":null,\"total_pages\":1,\"type\":\"pages\"},\"total_count\":5,\"type\":\"list\"}}},\"schema\":{\"description\":\"A paginated list of Knowledge Hub content results matching a search query.\",\"properties\":{\"data\":{\"description\":\"The list of matched content items. Each item's `type` field determines its shape.\",\"items\":{\"description\":\"A single search result. The `type` field discriminates between the flat shape used for snippets, external pages, files, and internal articles, and the nested shape used for help center articles.\",\"discriminator\":{\"mapping\":{\"article\":\"#/components/schemas/content_search_article_item\",\"content_snippet\":\"#/components/schemas/content_search_default_item\",\"external_content\":\"#/components/schemas/content_search_default_item\",\"file_source_content\":\"#/components/schemas/content_search_default_item\",\"internal_article\":\"#/components/schemas/content_search_default_item\"},\"propertyName\":\"type\"},\"oneOf\":[{\"description\":\"The flat result shape returned from Knowledge Hub search for content snippets, external pages, uploaded files, and internal articles.\",\"properties\":{\"id\":{\"description\":\"The unique identifier of the content item.\",\"example\":\"123\",\"type\":\"string\"},\"title\":{\"description\":\"The display title of the content item.\",\"example\":\"Billing FAQ\",\"type\":\"string\"},\"type\":{\"description\":\"The kind of content item.\",\"enum\":[\"content_snippet\",\"external_content\",\"file_source_content\",\"internal_article\"],\"example\":\"content_snippet\",\"type\":\"string\"}},\"required\":[\"type\"],\"title\":\"Content Search Default Item\",\"type\":\"object\"},{\"description\":\"A help center article result from Knowledge Hub search, with one nested `article_content` entry per locale.\",\"properties\":{\"contents\":{\"description\":\"One entry per locale of the article.\",\"items\":{\"description\":\"A single locale variant of a help center article returned from Knowledge Hub search.\",\"properties\":{\"id\":{\"description\":\"The unique identifier of the article content.\",\"example\":\"678\",\"type\":\"string\"},\"locale\":{\"description\":\"The locale of this article content.\",\"example\":\"en\",\"type\":\"string\"},\"title\":{\"description\":\"The localized title of the article.\",\"example\":\"Billing FAQ\",\"type\":\"string\"},\"type\":{\"description\":\"Always `article_content`.\",\"enum\":[\"article_content\"],\"example\":\"article_content\",\"type\":\"string\"}},\"title\":\"Content Search Article Content Item\",\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique identifier of the article.\",\"example\":\"345\",\"type\":\"string\"},\"title\":{\"description\":\"The article's canonical title.\",\"example\":\"Billing FAQ\",\"type\":\"string\"},\"type\":{\"description\":\"Always `article`.\",\"enum\":[\"article\"],\"example\":\"article\",\"type\":\"string\"}},\"required\":[\"type\"],\"title\":\"Content Search Article Item\",\"type\":\"object\"}],\"title\":\"Content Search Result\"},\"type\":\"array\"},\"pages\":{\"description\":\"Pagination metadata, including links to neighbouring pages.\",\"properties\":{\"next\":{\"description\":\"A link to the next page of results, or null when on the last page.\",\"example\":\"https://api.intercom.io/content/search?query=billing&page=2\",\"format\":\"uri\",\"nullable\":true,\"type\":\"string\"},\"page\":{\"description\":\"The current page number.\",\"example\":1,\"type\":\"integer\"},\"per_page\":{\"description\":\"Number of results per page.\",\"example\":10,\"type\":\"integer\"},\"prev\":{\"description\":\"A link to the previous page of results, or null when on the first page.\",\"example\":null,\"format\":\"uri\",\"nullable\":true,\"type\":\"string\"},\"total_pages\":{\"description\":\"Total number of pages of results.\",\"example\":1,\"type\":\"integer\"},\"type\":{\"enum\":[\"pages\"],\"example\":\"pages\",\"type\":\"string\"}},\"type\":\"object\"},\"total_count\":{\"description\":\"Total number of results matching the query.\",\"example\":5,\"type\":\"integer\"},\"type\":{\"description\":\"Always `list`.\",\"enum\":[\"list\"],\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Content Search Response\",\"type\":\"object\"}}},\"description\":\"Search successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"12a938a3-314e-4939-b773-5cd45738bd21\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"422\":{\"content\":{\"application/json\":{\"examples\":{\"ValidationError\":{\"value\":{\"errors\":[{\"code\":\"data_invalid\",\"message\":\"Invalid or duplicated record reference\"}],\"request_id\":\"12a938a3-314e-4939-b773-5cd45738bd21\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Validation Error\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/content/search","segments":[{"lit":"content"},{"lit":"search"}],"select":{"exist":["any_tag_id","content_type","copilot_state","created_at_after","created_at_before","created_by_id","fin_sales_state","fin_service_state","folder_entity_type","folder_id","intercom_version","last_updated_by_id","locale","page","per_page","query","state","tag_id","tag_operator","updated_at_after","updated_at_before"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"content_search","name__orig":"content_search","Name":"ContentSearch","name_":"content_search","name-":"content-search","NAME":"CONTENT_SEARCH","index$":28}, {"active":true,"entity":"content_search","key$":"BasicContentSearchFlow","kind":"basic","name":"BasicContentSearchFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"content_search_ref01"}}],"index$":0}]}, 'ContentSearch')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let content_search_ref01_data = Object.values(setup.data.existing.content_search)[0] as any

    // LIST
    const content_search_ref01_ent = client.ContentSearch()
    const content_search_ref01_match: any = {}

    const content_search_ref01_list = (await content_search_ref01_ent.list(content_search_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/content_search/ContentSearchTestData.json')

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
    ['content_search01','content_search02','content_search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_CONTENT_SEARCH_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_CONTENT_SEARCH_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_CONTENT_SEARCH_ENTID']
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
  
