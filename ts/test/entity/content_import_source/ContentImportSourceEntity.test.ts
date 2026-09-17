

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


describe('ContentImportSourceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.ContentImportSource()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'content_import_source.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"apply_audience_to_existing_content","req":false,"short":"When true, the audience will be applied to all existing external pages belonging to this content import source.","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"audience_ids","req":false,"short":"The unique identifiers for the audiences associated with this content import source.","type":"`$ARRAY`","index$":1},{"active":true,"format":"date-time","name":"created_at","req":true,"short":"The time when the content import source was created.","type":"`$INTEGER`","index$":2},{"active":true,"name":"id","req":true,"short":"The unique identifier for the content import source which is given by Intercom.","type":"`$INTEGER`","index$":3},{"active":true,"format":"date-time","name":"last_synced_at","req":true,"short":"The time when the content import source was last synced.","type":"`$INTEGER`","index$":4},{"active":true,"name":"status","op":{"create":{"req":false,"type":"`$STRING`"},"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The status of the content import source.","type":"`$STRING`","index$":5},{"active":true,"name":"sync_behavior","req":true,"short":"If you intend to create or update External Pages via the API, this should be set to `api`.","type":"`$STRING`","index$":6},{"active":true,"name":"type","req":true,"short":"Always external_page","type":"`$STRING`","index$":7},{"active":true,"format":"date-time","name":"updated_at","req":true,"short":"The time when the content import source was last updated.","type":"`$INTEGER`","index$":8},{"active":true,"name":"url","req":true,"short":"The URL of the root of the external source.","type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"content_import_source","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"POST /ai/content_import_sources","json":"{\"operationId\":\"createContentImportSource\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"summary\":\"successful\",\"value\":{\"sync_behavior\":\"api\",\"url\":\"https://www.example.com\"}}},\"schema\":{\"description\":\"You can add an Content Import Source to your Fin Content Library.\",\"nullable\":false,\"properties\":{\"audience_ids\":{\"description\":\"The unique identifiers for the audiences to associate with this content import source. Can be a single integer or an array of integers.\",\"example\":[5678],\"nullable\":true,\"oneOf\":[{\"type\":\"integer\"},{\"items\":{\"type\":\"integer\"},\"type\":\"array\"}]},\"status\":{\"default\":\"active\",\"description\":\"The status of the content import source.\",\"enum\":[\"active\",\"deactivated\"],\"example\":\"active\",\"type\":\"string\"},\"sync_behavior\":{\"description\":\"If you intend to create or update External Pages via the API, this should be set to `api`.\",\"enum\":[\"api\"],\"example\":\"api\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of the content import source.\",\"example\":\"https://help.example.com\",\"type\":\"string\"}},\"required\":[\"sync_behavior\",\"url\"],\"title\":\"Create Content Import Source Payload\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"audience_ids\":[],\"created_at\":1734537261,\"id\":36,\"last_synced_at\":1734537261,\"status\":\"active\",\"sync_behavior\":\"api\",\"type\":\"content_import_source\",\"updated_at\":1734537261,\"url\":\"https://www.example.com\"}}},\"schema\":{\"description\":\"An external source for External Pages that you add to your Fin Content Library.\",\"nullable\":false,\"properties\":{\"audience_ids\":{\"description\":\"The unique identifiers for the audiences associated with this content import source.\",\"example\":[5678],\"items\":{\"type\":\"integer\"},\"nullable\":true,\"type\":\"array\"},\"created_at\":{\"description\":\"The time when the content import source was created.\",\"example\":1672928359,\"format\":\"date-time\",\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier for the content import source which is given by Intercom.\",\"example\":1234,\"type\":\"integer\"},\"last_synced_at\":{\"description\":\"The time when the content import source was last synced.\",\"example\":1672928610,\"format\":\"date-time\",\"type\":\"integer\"},\"status\":{\"default\":\"active\",\"description\":\"The status of the content import source.\",\"enum\":[\"active\",\"deactivated\"],\"example\":\"active\",\"type\":\"string\"},\"sync_behavior\":{\"description\":\"If you intend to create or update External Pages via the API, this should be set to `api`.\",\"enum\":[\"api\",\"automatic\",\"manual\"],\"example\":\"api\",\"type\":\"string\"},\"type\":{\"default\":\"content_import_source\",\"description\":\"Always external_page\",\"enum\":[\"content_import_source\"],\"example\":\"content_import_source\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time when the content import source was last updated.\",\"example\":1672928610,\"format\":\"date-time\",\"type\":\"integer\"},\"url\":{\"description\":\"The URL of the root of the external source.\",\"example\":\"https://help.example.com/\",\"type\":\"string\"}},\"required\":[\"id\",\"type\",\"url\",\"sync_behavior\",\"status\",\"created_at\",\"updated_at\",\"last_synced_at\"],\"title\":\"Content Import Source\",\"type\":\"object\"}}},\"description\":\"successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"31262ee6-aa3b-4748-a260-a1084754ebae\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/ai/content_import_sources","segments":[{"lit":"ai"},{"lit":"content_import_sources"}],"select":{"exist":["intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /ai/content_import_sources","json":"{\"operationId\":\"listContentImportSources\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"data\":[{\"audience_ids\":[],\"created_at\":1734537259,\"id\":33,\"last_synced_at\":1734537259,\"status\":\"active\",\"sync_behavior\":\"automatic\",\"type\":\"content_import_source\",\"updated_at\":1734537259,\"url\":\"https://support.example.com/us/1\"},{\"audience_ids\":[],\"created_at\":1734537259,\"id\":34,\"last_synced_at\":1734537259,\"status\":\"active\",\"sync_behavior\":\"automatic\",\"type\":\"content_import_source\",\"updated_at\":1734537259,\"url\":\"https://support.example.com/us/2\"},{\"audience_ids\":[],\"created_at\":1734537259,\"id\":35,\"last_synced_at\":1734537259,\"status\":\"active\",\"sync_behavior\":\"automatic\",\"type\":\"content_import_source\",\"updated_at\":1734537259,\"url\":\"https://support.example.com/us/3\"}],\"pages\":{\"page\":1,\"per_page\":50,\"total_pages\":1,\"type\":\"pages\"},\"total_count\":3,\"type\":\"list\"}}},\"schema\":{\"description\":\"This will return a list of the content import sources for the App.\",\"nullable\":false,\"properties\":{\"data\":{\"description\":\"An array of Content Import Source objects\",\"items\":{\"description\":\"An external source for External Pages that you add to your Fin Content Library.\",\"nullable\":false,\"properties\":{\"audience_ids\":{\"description\":\"The unique identifiers for the audiences associated with this content import source.\",\"example\":[5678],\"items\":{\"type\":\"integer\"},\"nullable\":true,\"type\":\"array\"},\"created_at\":{\"description\":\"The time when the content import source was created.\",\"example\":1672928359,\"format\":\"date-time\",\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier for the content import source which is given by Intercom.\",\"example\":1234,\"type\":\"integer\"},\"last_synced_at\":{\"description\":\"The time when the content import source was last synced.\",\"example\":1672928610,\"format\":\"date-time\",\"type\":\"integer\"},\"status\":{\"default\":\"active\",\"description\":\"The status of the content import source.\",\"enum\":[\"active\",\"deactivated\"],\"example\":\"active\",\"type\":\"string\"},\"sync_behavior\":{\"description\":\"If you intend to create or update External Pages via the API, this should be set to `api`.\",\"enum\":[\"api\",\"automatic\",\"manual\"],\"example\":\"api\",\"type\":\"string\"},\"type\":{\"default\":\"content_import_source\",\"description\":\"Always external_page\",\"enum\":[\"content_import_source\"],\"example\":\"content_import_source\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time when the content import source was last updated.\",\"example\":1672928610,\"format\":\"date-time\",\"type\":\"integer\"},\"url\":{\"description\":\"The URL of the root of the external source.\",\"example\":\"https://help.example.com/\",\"type\":\"string\"}},\"required\":[\"id\",\"type\",\"url\",\"sync_behavior\",\"status\",\"created_at\",\"updated_at\",\"last_synced_at\"],\"title\":\"Content Import Source\",\"type\":\"object\"},\"type\":\"array\"},\"pages\":{\"description\":\"The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests.\\n\\nTheir responses are likely to contain a pages object that hosts pagination links which a client can use to paginate through the data without having to construct a query. The link relations for the pages field are as follows.\\n\",\"properties\":{\"next\":{\"description\":\"A link to the next page of results. A response that does not contain a next link does not have further data to fetch.\",\"format\":\"uri\",\"nullable\":true,\"type\":\"string\"},\"page\":{\"example\":1,\"type\":\"integer\"},\"per_page\":{\"example\":50,\"type\":\"integer\"},\"total_pages\":{\"example\":1,\"type\":\"integer\"},\"type\":{\"enum\":[\"pages\"],\"example\":\"pages\",\"type\":\"string\"}},\"title\":\"Pagination Object\",\"type\":\"object\"},\"total_count\":{\"description\":\"A count of the total number of content import sources.\",\"example\":1,\"type\":\"integer\"},\"type\":{\"description\":\"The type of the object - `list`.\",\"enum\":[\"list\"],\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Content Import Sources\",\"type\":\"object\"}}},\"description\":\"successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"9e554e0f-ed0a-4fc6-b141-105d70c9d485\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/ai/content_import_sources","segments":[{"lit":"ai"},{"lit":"content_import_sources"}],"select":{"exist":["intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"source_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /ai/content_import_sources/{source_id}","json":"{\"operationId\":\"getContentImportSource\",\"parameters\":[{\"description\":\"The unique identifier for the content import source which is given by Intercom.\",\"in\":\"path\",\"name\":\"source_id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"audience_ids\":[],\"created_at\":1734537265,\"id\":38,\"last_synced_at\":1734537265,\"status\":\"active\",\"sync_behavior\":\"api\",\"type\":\"content_import_source\",\"updated_at\":1734537265,\"url\":\"https://support.example.com/us/5\"}}},\"schema\":{\"description\":\"An external source for External Pages that you add to your Fin Content Library.\",\"nullable\":false,\"properties\":{\"audience_ids\":{\"description\":\"The unique identifiers for the audiences associated with this content import source.\",\"example\":[5678],\"items\":{\"type\":\"integer\"},\"nullable\":true,\"type\":\"array\"},\"created_at\":{\"description\":\"The time when the content import source was created.\",\"example\":1672928359,\"format\":\"date-time\",\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier for the content import source which is given by Intercom.\",\"example\":1234,\"type\":\"integer\"},\"last_synced_at\":{\"description\":\"The time when the content import source was last synced.\",\"example\":1672928610,\"format\":\"date-time\",\"type\":\"integer\"},\"status\":{\"default\":\"active\",\"description\":\"The status of the content import source.\",\"enum\":[\"active\",\"deactivated\"],\"example\":\"active\",\"type\":\"string\"},\"sync_behavior\":{\"description\":\"If you intend to create or update External Pages via the API, this should be set to `api`.\",\"enum\":[\"api\",\"automatic\",\"manual\"],\"example\":\"api\",\"type\":\"string\"},\"type\":{\"default\":\"content_import_source\",\"description\":\"Always external_page\",\"enum\":[\"content_import_source\"],\"example\":\"content_import_source\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time when the content import source was last updated.\",\"example\":1672928610,\"format\":\"date-time\",\"type\":\"integer\"},\"url\":{\"description\":\"The URL of the root of the external source.\",\"example\":\"https://help.example.com/\",\"type\":\"string\"}},\"required\":[\"id\",\"type\",\"url\",\"sync_behavior\",\"status\",\"created_at\",\"updated_at\",\"last_synced_at\"],\"title\":\"Content Import Source\",\"type\":\"object\"}}},\"description\":\"successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"5556d3dd-d4e2-4424-9757-2ad0accb52e5\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/ai/content_import_sources/{source_id}","rename":{"param":{"source_id":"id"}},"segments":[{"lit":"ai"},{"lit":"content_import_sources"},{"var":"id"}],"select":{"exist":["id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"source_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"PUT /ai/content_import_sources/{source_id}","json":"{\"operationId\":\"updateContentImportSource\",\"parameters\":[{\"description\":\"The unique identifier for the content import source which is given by Intercom.\",\"in\":\"path\",\"name\":\"source_id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"summary\":\"successful\",\"value\":{\"sync_behavior\":\"api\",\"url\":\"https://www.example.com\"}}},\"schema\":{\"description\":\"You can modify a Content Import Source of your Fin Content Library.\",\"nullable\":false,\"properties\":{\"apply_audience_to_existing_content\":{\"default\":false,\"description\":\"When true, the audience will be applied to all existing external pages belonging to this content import source.\",\"example\":false,\"type\":\"boolean\"},\"audience_ids\":{\"description\":\"The unique identifiers for the audiences to associate with this content import source. Can be a single integer or an array of integers. Set to null or an empty array to remove all audiences.\",\"example\":[5678],\"nullable\":true,\"oneOf\":[{\"type\":\"integer\"},{\"items\":{\"type\":\"integer\"},\"type\":\"array\"}]},\"status\":{\"default\":\"active\",\"description\":\"The status of the content import source.\",\"enum\":[\"active\",\"deactivated\"],\"example\":\"active\",\"type\":\"string\"},\"sync_behavior\":{\"description\":\"If you intend to create or update External Pages via the API, this should be set to `api`. You can not change the value to or from api.\",\"enum\":[\"api\",\"automated\",\"manual\"],\"example\":\"api\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of the content import source. This may only be different from the existing value if the sync behavior is API.\",\"example\":\"https://help.example.com\",\"type\":\"string\"}},\"required\":[\"sync_behavior\",\"url\"],\"title\":\"Create Content Import Source Payload\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"audience_ids\":[],\"created_at\":1734537267,\"id\":39,\"last_synced_at\":1734537267,\"status\":\"active\",\"sync_behavior\":\"api\",\"type\":\"content_import_source\",\"updated_at\":1734537267,\"url\":\"https://www.example.com\"}}},\"schema\":{\"description\":\"An external source for External Pages that you add to your Fin Content Library.\",\"nullable\":false,\"properties\":{\"audience_ids\":{\"description\":\"The unique identifiers for the audiences associated with this content import source.\",\"example\":[5678],\"items\":{\"type\":\"integer\"},\"nullable\":true,\"type\":\"array\"},\"created_at\":{\"description\":\"The time when the content import source was created.\",\"example\":1672928359,\"format\":\"date-time\",\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier for the content import source which is given by Intercom.\",\"example\":1234,\"type\":\"integer\"},\"last_synced_at\":{\"description\":\"The time when the content import source was last synced.\",\"example\":1672928610,\"format\":\"date-time\",\"type\":\"integer\"},\"status\":{\"default\":\"active\",\"description\":\"The status of the content import source.\",\"enum\":[\"active\",\"deactivated\"],\"example\":\"active\",\"type\":\"string\"},\"sync_behavior\":{\"description\":\"If you intend to create or update External Pages via the API, this should be set to `api`.\",\"enum\":[\"api\",\"automatic\",\"manual\"],\"example\":\"api\",\"type\":\"string\"},\"type\":{\"default\":\"content_import_source\",\"description\":\"Always external_page\",\"enum\":[\"content_import_source\"],\"example\":\"content_import_source\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time when the content import source was last updated.\",\"example\":1672928610,\"format\":\"date-time\",\"type\":\"integer\"},\"url\":{\"description\":\"The URL of the root of the external source.\",\"example\":\"https://help.example.com/\",\"type\":\"string\"}},\"required\":[\"id\",\"type\",\"url\",\"sync_behavior\",\"status\",\"created_at\",\"updated_at\",\"last_synced_at\"],\"title\":\"Content Import Source\",\"type\":\"object\"}}},\"description\":\"successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"cb4a6795-2cdb-44f9-adb7-0624702f7e8a\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/ai/content_import_sources/{source_id}","rename":{"param":{"source_id":"id"}},"segments":[{"lit":"ai"},{"lit":"content_import_sources"},{"var":"id"}],"select":{"exist":["id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"content_import_source","name__orig":"content_import_source","Name":"ContentImportSource","name_":"content_import_source","name-":"content-import-source","NAME":"CONTENT_IMPORT_SOURCE","index$":27}, {"active":true,"entity":"content_import_source","key$":"BasicContentImportSourceFlow","kind":"basic","name":"BasicContentImportSourceFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"content_import_source_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"content_import_source_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"content_import_source_ref01","srcdatavar":"content_import_source_ref01_data","suffix":"_up0","textfield":"status"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-content_import_source_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"content_import_source_ref01","srcdatavar":"content_import_source_ref01_data","suffix":"_dt0"},"match":{"id":"content_import_source01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-content_import_source_ref01"}}],"index$":3}]}, 'ContentImportSource')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const content_import_source_ref01_ent = client.ContentImportSource()
    let content_import_source_ref01_data = setup.data.new.content_import_source['content_import_source_ref01']

    content_import_source_ref01_data = (await content_import_source_ref01_ent.create(content_import_source_ref01_data)).data()
    assert(null != content_import_source_ref01_data.id)


    // LIST
    const content_import_source_ref01_match: any = {}

    const content_import_source_ref01_list = (await content_import_source_ref01_ent.list(content_import_source_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(content_import_source_ref01_list, { id: content_import_source_ref01_data.id })))


    // UPDATE
    const content_import_source_ref01_data_up0: any = {}
    content_import_source_ref01_data_up0.id = content_import_source_ref01_data.id

    const content_import_source_ref01_markdef_up0 = { name: 'status', value: 'Mark01-content_import_source_ref01_' + setup.now }
    ;(content_import_source_ref01_data_up0 as any)[content_import_source_ref01_markdef_up0.name] = content_import_source_ref01_markdef_up0.value

    const content_import_source_ref01_resdata_up0 = (await content_import_source_ref01_ent.update(content_import_source_ref01_data_up0)).data()
    assert(content_import_source_ref01_resdata_up0.id === content_import_source_ref01_data_up0.id)

    assert((content_import_source_ref01_resdata_up0 as any)[content_import_source_ref01_markdef_up0.name] === content_import_source_ref01_markdef_up0.value)


    // LOAD
    const content_import_source_ref01_match_dt0: any = {}
    content_import_source_ref01_match_dt0.id = content_import_source_ref01_data.id
    const content_import_source_ref01_data_dt0 = (await content_import_source_ref01_ent.load(content_import_source_ref01_match_dt0)).data()
    assert(content_import_source_ref01_data_dt0.id === content_import_source_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/content_import_source/ContentImportSourceTestData.json')

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
    ['content_import_source01','content_import_source02','content_import_source03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_CONTENT_IMPORT_SOURCE_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_CONTENT_IMPORT_SOURCE_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_CONTENT_IMPORT_SOURCE_ENTID']
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
  
