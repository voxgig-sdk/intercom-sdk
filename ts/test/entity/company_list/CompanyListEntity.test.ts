

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


describe('CompanyListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.CompanyList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'company_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":false,"sh":"An array containing Company Objects.","t":"`$ARRAY`","key$":"data","index$":0},"pages":{"a":true,"h":"Pages","n":"pages","r":false,"sh":"Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.","t":"`$OBJECT`","key$":"pages","index$":1},"total_count":{"a":true,"h":"Total Count","n":"total_count","r":false,"sh":"The total number of companies.","t":"`$INTEGER`","key$":"total_count","index$":2},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of object - `list`.","t":"`$STRING`","key$":"type","index$":3}},"name":"company_list","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /companies/list","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"desc","k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":15,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"POST","o":"/companies/list","q":{"exist":["intercom_version","order","page","per_page"]},"r":{},"s":[{"lit":"companies"},{"lit":"list"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"company_list","name__orig":"company_list","Name":"CompanyList","name_":"company_list","name-":"company-list","NAME":"COMPANY_LIST","index$":21}, {"active":true,"entity":"company_list","key$":"BasicCompanyListFlow","kind":"basic","name":"BasicCompanyListFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"company_list_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'CompanyList', {"POST /companies/list":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"page","in":"query","required":false,"description":"The page of results to fetch. Defaults to first page","example":1,"schema":{"type":"integer"},"index$":1},{"name":"per_page","in":"query","required":false,"description":"How many results to return per page. Defaults to 15","example":15,"schema":{"type":"integer"},"index$":2},{"name":"order","in":"query","required":false,"description":"`asc` or `desc`. Return the companies in ascending or descending order. Defaults to desc","example":"desc","schema":{"type":"string"},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const company_list_ref01_ent = client.CompanyList()
    let company_list_ref01_data = setup.data.new.company_list['company_list_ref01']

    company_list_ref01_data = (await company_list_ref01_ent.create(company_list_ref01_data)).data()
    assert(null != company_list_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/company_list/CompanyListTestData.json')

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
    ['company_list01','company_list02','company_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_COMPANY_LIST_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_COMPANY_LIST_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_COMPANY_LIST_ENTID']
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
  
