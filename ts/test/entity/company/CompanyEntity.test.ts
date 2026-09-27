

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


describe('CompanyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Company()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'company.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"app_id":{"a":true,"h":"App Id","n":"app_id","r":false,"sh":"The Intercom defined code of the workspace the company is associated to.","t":"`$STRING`","key$":"app_id","index$":0},"company_id":{"a":true,"h":"Company Id","n":"company_id","r":false,"sh":"The company id you have defined for the company.","t":"`$STRING`","key$":"company_id","index$":1},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The time the company was added in Intercom.","t":"`$INTEGER`","key$":"created_at","index$":2},"custom_attributes":{"a":true,"h":"Custom Attributes","n":"custom_attributes","r":false,"sh":"The custom attributes you have set on the company.","t":"`$OBJECT`","key$":"custom_attributes","index$":3},"id":{"a":true,"h":"Id","n":"id","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The Intercom defined id representing the company.","t":"`$STRING`","key$":"id","index$":4},"industry":{"a":true,"h":"Industry","n":"industry","r":false,"sh":"The industry that the company operates in.","t":"`$STRING`","key$":"industry","index$":5},"last_request_at":{"a":true,"h":"Last Request At","n":"last_request_at","r":false,"sh":"The time the company last recorded making a request.","t":"`$INTEGER`","key$":"last_request_at","index$":6},"monthly_spend":{"a":true,"h":"Monthly Spend","n":"monthly_spend","r":false,"sh":"How much revenue the company generates for your business.","t":"`$INTEGER`","key$":"monthly_spend","index$":7},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the company.","t":"`$STRING`","key$":"name","index$":8},"notes":{"a":true,"h":"Notes","n":"notes","r":false,"sh":"The list of notes associated with the company","t":"`$OBJECT`","key$":"notes","index$":9},"plan":{"a":true,"h":"Plan","n":"plan","r":false,"sh":"The name of the plan you have associated with the company.","t":"`$OBJECT`","key$":"plan","index$":10},"remote_created_at":{"a":true,"h":"Remote Created At","n":"remote_created_at","r":false,"sh":"The time the company was created by you.","t":"`$INTEGER`","key$":"remote_created_at","index$":11},"segments":{"a":true,"h":"Segments","n":"segments","r":false,"sh":"The list of segments associated with the company","t":"`$OBJECT`","key$":"segments","index$":12},"session_count":{"a":true,"h":"Session Count","n":"session_count","r":false,"sh":"How many sessions the company has recorded.","t":"`$INTEGER`","key$":"session_count","index$":13},"size":{"a":true,"h":"Size","n":"size","r":false,"sh":"The number of employees in the company.","t":"`$INTEGER`","key$":"size","index$":14},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"sh":"The list of tags associated with the company","t":"`$OBJECT`","key$":"tags","index$":15},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Value is `company`","t":"`$STRING`","key$":"type","index$":16},"update_last_request_at":{"a":true,"h":"Update Last Request At","n":"update_last_request_at","r":false,"sh":"Set to true to update the company's last seen time to now.","t":"`$BOOLEAN`","key$":"update_last_request_at","index$":17},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"sh":"The last time the company was updated.","t":"`$INTEGER`","key$":"updated_at","index$":18},"user_count":{"a":true,"h":"User Count","n":"user_count","r":false,"sh":"The number of users in the company.","t":"`$INTEGER`","key$":"user_count","index$":19},"website":{"a":true,"h":"Website","n":"website","r":false,"sh":"The URL for the company website.","t":"`$STRING`","key$":"website","index$":20}},"id":{"field":"id","name":"id"},"name":"company","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /contacts/{contact_id}/companies","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"contact_id","or":"contact_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/contacts/{contact_id}/companies","q":{"exist":["contact_id","intercom_version"]},"r":{},"s":[{"lit":"contacts"},{"var":"contact_id"},{"lit":"companies"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /companies","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/companies","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"companies"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /companies","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"12345","k":"query","n":"company_id","or":"company_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"my company","k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":15,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":"98765","k":"query","n":"segment_id","or":"segment_id","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":"678910","k":"query","n":"tag_id","or":"tag_id","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/companies","q":{"exist":["company_id","intercom_version","name","page","per_page","segment_id","tag_id"]},"r":{},"s":[{"lit":"companies"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /companies/{company_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"5f4d3c1c-7b1b-4d7d-a97e-6095715c6632","k":"param","n":"id","or":"company_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/companies/{company_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"company_id":"id"}},"s":[{"lit":"companies"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /contacts/{contact_id}/companies/{company_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"58a430d35458202d41b1e65b","k":"param","n":"contact_id","or":"contact_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"58a430d35458202d41b1e65b","k":"param","n":"id","or":"company_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/contacts/{contact_id}/companies/{company_id}","q":{"exist":["contact_id","id","intercom_version"]},"r":{"param":{"company_id":"id"}},"s":[{"lit":"contacts"},{"var":"contact_id"},{"lit":"companies"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /companies/{company_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"5f4d3c1c-7b1b-4d7d-a97e-6095715c6632","k":"param","n":"id","or":"company_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/companies/{company_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"company_id":"id"}},"s":[{"lit":"companies"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.contact"]]},"key$":"company","name__orig":"company","Name":"Company","name_":"company","name-":"company","NAME":"COMPANY","index$":18}, {"active":true,"entity":"company","key$":"BasicCompanyFlow","kind":"basic","name":"BasicCompanyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"company_ref01"},"m":{"contact_id":"contact01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"company_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"company_ref01","srcdatavar":"company_ref01_data","suffix":"_up0","textfield":"app_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-company_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"company_ref01","srcdatavar":"company_ref01_data","suffix":"_dt0"},"m":{"id":"company01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-company_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"company_ref01","suffix":"_rm0"},"m":{"contact_id":"contact01","id":"company01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"company_ref01"}}],"index$":5}]}, 'Company', {"POST /contacts/{contact_id}/companies":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["id"],"properties":{"id":{"type":"string","description":"The unique identifier for the company which is given by Intercom","example":"58a430d35458202d41b1e65b","key$":"id"}},"index$":1},"examples":{"successful":{"summary":"Successful","value":{"id":"6762f09a1bb69f9f2193bb34"}},"bad_request":{"summary":"Bad Request","value":null},"company_not_found":{"summary":"Company Not Found","value":{"id":"123"}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"contact_id","in":"path","required":true,"description":"The unique identifier for the contact which is given by Intercom","schema":{"type":"string"},"index$":1}]},"POST /companies":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","title":"Create Or Update Company Request Payload","description":"You can create or update a Company","nullable":true,"properties":{"name":{"type":"string","description":"The name of the Company","example":"Intercom","key$":"name"},"company_id":{"type":"string","description":"The company id you have defined for the company. Can't be updated","example":"625e90fc55ab113b6d92175f","key$":"company_id"},"plan":{"type":"string","description":"The name of the plan you have associated with the company.","example":"Enterprise","key$":"plan"},"size":{"type":"integer","description":"The number of employees in this company.","example":"100","key$":"size"},"website":{"type":"string","description":"The URL for this company's website. Please note that the value specified here is not validated. Accepts any string.","example":"https://www.example.com","key$":"website"},"industry":{"type":"string","description":"The industry that this company operates in.","example":"Manufacturing","key$":"industry"},"custom_attributes":{"type":"object","description":"A hash of key/value pairs containing any other data about the company you want Intercom to store.","additionalProperties":{"type":"string"},"example":{"paid_subscriber":true,"monthly_spend":155.5,"team_mates":9},"key$":"custom_attributes"},"remote_created_at":{"type":"integer","description":"The time the company was created by you.","example":1394531169,"key$":"remote_created_at"},"update_last_request_at":{"type":"boolean","description":"Set to true to update the company's last seen time to now.","example":true,"key$":"update_last_request_at"},"monthly_spend":{"type":"integer","description":"How much revenue the company generates for your business. Note that this will truncate floats. i.e. it only allow for whole integers, 155.98 will be truncated to 155. Note that this has an upper limit of 2**31-1 or 2147483647..","example":1000,"key$":"monthly_spend"}},"x-ref":"#/components/schemas/create_or_update_company_request","index$":1},"examples":{"successful":{"summary":"Successful","value":{"company_id":"company_remote_id","name":"my company","remote_created_at":1374138000}},"bad_request":{"summary":"Bad Request","value":{"test":"invalid"}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /companies":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"name","in":"query","required":false,"description":"The `name` of the company to filter by.","example":"my company","schema":{"type":"string"},"index$":1},{"name":"company_id","in":"query","required":false,"description":"The `company_id` of the company to filter by.","example":"12345","schema":{"type":"string"},"index$":2},{"name":"tag_id","in":"query","required":false,"description":"The `tag_id` of the company to filter by.","example":"678910","schema":{"type":"string"},"index$":3},{"name":"segment_id","in":"query","required":false,"description":"The `segment_id` of the company to filter by.","example":"98765","schema":{"type":"string"},"index$":4},{"name":"page","in":"query","required":false,"description":"The page of results to fetch. Defaults to first page","example":1,"schema":{"type":"integer"},"index$":5},{"name":"per_page","in":"query","required":false,"description":"How many results to display per page. Defaults to 15","example":15,"schema":{"type":"integer"},"index$":6}]},"GET /companies/{company_id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"company_id","in":"path","required":true,"description":"The unique identifier for the company which is given by Intercom","example":"5f4d3c1c-7b1b-4d7d-a97e-6095715c6632","schema":{"type":"string"},"index$":1}]},"DELETE /contacts/{contact_id}/companies/{company_id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"contact_id","in":"path","required":true,"description":"The unique identifier for the contact which is given by Intercom","example":"58a430d35458202d41b1e65b","schema":{"type":"string"},"index$":1},{"name":"company_id","in":"path","required":true,"description":"The unique identifier for the company which is given by Intercom","example":"58a430d35458202d41b1e65b","schema":{"type":"string"},"index$":2}]},"PUT /companies/{company_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","title":"Update Company Request Payload","description":"You can update a Company","nullable":true,"properties":{"name":{"type":"string","description":"The name of the Company","example":"Intercom","key$":"name"},"plan":{"type":"string","description":"The name of the plan you have associated with the company.","example":"Enterprise","key$":"plan"},"size":{"type":"integer","description":"The number of employees in this company.","example":"100","key$":"size"},"website":{"type":"string","description":"The URL for this company's website. Please note that the value specified here is not validated. Accepts any string.","example":"https://www.example.com","key$":"website"},"industry":{"type":"string","description":"The industry that this company operates in.","example":"Manufacturing","key$":"industry"},"custom_attributes":{"type":"object","description":"A hash of key/value pairs containing any other data about the company you want Intercom to store.","additionalProperties":{"type":"string"},"example":{"paid_subscriber":true,"monthly_spend":155.5,"team_mates":9},"key$":"custom_attributes"},"monthly_spend":{"type":"integer","description":"How much revenue the company generates for your business. Note that this will truncate floats. i.e. it only allow for whole integers, 155.98 will be truncated to 155. Note that this has an upper limit of 2**31-1 or 2147483647..","example":1000,"key$":"monthly_spend"}},"x-ref":"#/components/schemas/update_company_request","index$":1},"examples":{"successful":{"summary":"Successful","value":{"name":"my company","website":"http://www.mycompany.com/"}},"bad_request":{"summary":"Bad Request","value":{"test":"invalid"}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"company_id","in":"path","required":true,"description":"The unique identifier for the company which is given by Intercom","example":"5f4d3c1c-7b1b-4d7d-a97e-6095715c6632","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const company_ref01_ent = client.Company()
    let company_ref01_data = setup.data.new.company['company_ref01']
    company_ref01_data['contact_id'] = setup.idmap['contact01']

    company_ref01_data = (await company_ref01_ent.create(company_ref01_data)).data()
    assert(null != company_ref01_data.id)


    // LIST
    const company_ref01_match: any = {}

    const company_ref01_list = (await company_ref01_ent.list(company_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(company_ref01_list, { id: company_ref01_data.id })))


    // UPDATE
    const company_ref01_data_up0: any = {}
    company_ref01_data_up0.id = company_ref01_data.id

    const company_ref01_markdef_up0 = { name: 'app_id', value: 'Mark01-company_ref01_' + setup.now }
    ;(company_ref01_data_up0 as any)[company_ref01_markdef_up0.name] = company_ref01_markdef_up0.value

    const company_ref01_resdata_up0 = (await company_ref01_ent.update(company_ref01_data_up0)).data()
    assert(company_ref01_resdata_up0.id === company_ref01_data_up0.id)

    assert((company_ref01_resdata_up0 as any)[company_ref01_markdef_up0.name] === company_ref01_markdef_up0.value)


    // LOAD
    const company_ref01_match_dt0: any = {}
    company_ref01_match_dt0.id = company_ref01_data.id
    const company_ref01_data_dt0 = (await company_ref01_ent.load(company_ref01_match_dt0)).data()
    assert(company_ref01_data_dt0.id === company_ref01_data.id)


    // REMOVE
    const company_ref01_match_rm0: any = { id: company_ref01_data.id }
    await company_ref01_ent.remove(company_ref01_match_rm0)
  

    // LIST
    const company_ref01_match_rt0: any = {}

    const company_ref01_list_rt0 = (await company_ref01_ent.list(company_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(company_ref01_list_rt0, { id: company_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/company/CompanyTestData.json')

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
    ['company01','company02','company03','contact01','contact02','contact03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_COMPANY_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_COMPANY_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_COMPANY_ENTID']
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
  
