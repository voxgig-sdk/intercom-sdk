

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


describe('BrandEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Brand()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'brand.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"created_at","req":false,"short":"Unix timestamp of brand creation","type":"`$INTEGER`","index$":0},{"active":true,"name":"default_address_settings_id","req":false,"short":"Default email settings ID for this brand","type":"`$STRING`","index$":1},{"active":true,"name":"help_center_id","req":false,"short":"Associated help center identifier","type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"short":"Unique brand identifier.","type":"`$STRING`","index$":3},{"active":true,"name":"is_default","req":false,"short":"Whether this is the workspace's default brand","type":"`$BOOLEAN`","index$":4},{"active":true,"name":"name","req":false,"short":"Display name of the brand","type":"`$STRING`","index$":5},{"active":true,"name":"type","req":false,"short":"The type of object","type":"`$STRING`","index$":6},{"active":true,"format":"date-time","name":"updated_at","req":false,"short":"Unix timestamp of last modification","type":"`$INTEGER`","index$":7}],"id":{"field":"id","name":"id"},"name":"brand","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /brands","json":"{\"operationId\":\"listBrands\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"data\":[{\"created_at\":1673778600,\"default_address_settings_id\":\"13\",\"help_center_id\":\"11\",\"id\":\"tlkp1d91\",\"is_default\":true,\"name\":\"Default Brand\",\"type\":\"brand\",\"updated_at\":1711031100},{\"created_at\":1686387300,\"default_address_settings_id\":\"15\",\"help_center_id\":\"10\",\"id\":\"3\",\"is_default\":false,\"name\":\"Premium Brand\",\"type\":\"brand\",\"updated_at\":1709229600}],\"type\":\"list\"}}},\"schema\":{\"description\":\"A list of brands\",\"properties\":{\"data\":{\"items\":{\"description\":\"Represents a branding configuration for the workspace\",\"properties\":{\"created_at\":{\"description\":\"Unix timestamp of brand creation\",\"example\":1673778600,\"format\":\"date-time\",\"type\":\"integer\"},\"default_address_settings_id\":{\"description\":\"Default email settings ID for this brand\",\"example\":\"15\",\"type\":\"string\"},\"help_center_id\":{\"description\":\"Associated help center identifier\",\"example\":\"10\",\"type\":\"string\"},\"id\":{\"description\":\"Unique brand identifier. For default brand, matches the workspace ID\",\"example\":\"10\",\"type\":\"string\"},\"is_default\":{\"description\":\"Whether this is the workspace's default brand\",\"example\":true,\"type\":\"boolean\"},\"name\":{\"description\":\"Display name of the brand\",\"example\":\"Default Brand\",\"type\":\"string\"},\"type\":{\"description\":\"The type of object\",\"example\":\"brand\",\"type\":\"string\"},\"updated_at\":{\"description\":\"Unix timestamp of last modification\",\"example\":1711031100,\"format\":\"date-time\",\"type\":\"integer\"}},\"title\":\"Brand\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of object\",\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Brand List\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/brands","segments":[{"lit":"brands"}],"select":{"exist":["intercom_version"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /brands/{id}","json":"{\"operationId\":\"retrieveBrand\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier of the brand\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"created_at\":1686387300,\"default_address_settings_id\":\"15\",\"help_center_id\":\"20\",\"id\":\"15\",\"is_default\":false,\"name\":\"Premium Brand\",\"type\":\"brand\",\"updated_at\":1709229600}}},\"schema\":{\"description\":\"Represents a branding configuration for the workspace\",\"properties\":{\"created_at\":{\"description\":\"Unix timestamp of brand creation\",\"example\":1673778600,\"format\":\"date-time\",\"type\":\"integer\"},\"default_address_settings_id\":{\"description\":\"Default email settings ID for this brand\",\"example\":\"15\",\"type\":\"string\"},\"help_center_id\":{\"description\":\"Associated help center identifier\",\"example\":\"10\",\"type\":\"string\"},\"id\":{\"description\":\"Unique brand identifier. For default brand, matches the workspace ID\",\"example\":\"10\",\"type\":\"string\"},\"is_default\":{\"description\":\"Whether this is the workspace's default brand\",\"example\":true,\"type\":\"boolean\"},\"name\":{\"description\":\"Display name of the brand\",\"example\":\"Default Brand\",\"type\":\"string\"},\"type\":{\"description\":\"The type of object\",\"example\":\"brand\",\"type\":\"string\"},\"updated_at\":{\"description\":\"Unix timestamp of last modification\",\"example\":1711031100,\"format\":\"date-time\",\"type\":\"integer\"}},\"title\":\"Brand\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Brand not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Brand not found\"}],\"request_id\":\"req_12345\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Brand not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/brands/{id}","segments":[{"lit":"brands"},{"var":"id"}],"select":{"exist":["id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"brand","name__orig":"brand","Name":"Brand","name_":"brand","name-":"brand","NAME":"BRAND","index$":15}, {"active":true,"entity":"brand","key$":"BasicBrandFlow","kind":"basic","name":"BasicBrandFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"brand_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"brand_ref01","srcdatavar":"brand_ref01_data","suffix":"_dt0"},"match":{"id":"brand01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-brand_ref01"}}],"index$":1}]}, 'Brand')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let brand_ref01_data = Object.values(setup.data.existing.brand)[0] as any

    // LIST
    const brand_ref01_ent = client.Brand()
    const brand_ref01_match: any = {}

    const brand_ref01_list = (await brand_ref01_ent.list(brand_ref01_match)).map((e: any) => e.data())


    // LOAD
    const brand_ref01_match_dt0: any = {}
    brand_ref01_match_dt0.id = brand_ref01_data.id
    const brand_ref01_data_dt0 = (await brand_ref01_ent.load(brand_ref01_match_dt0)).data()
    assert(brand_ref01_data_dt0.id === brand_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/brand/BrandTestData.json')

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
    ['brand01','brand02','brand03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_BRAND_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_BRAND_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_BRAND_ENTID']
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
  
