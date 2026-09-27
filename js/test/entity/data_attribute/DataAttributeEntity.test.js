
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


describe('DataAttributeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.DataAttribute()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"admin_id":{"a":true,"h":"Admin Id","n":"admin_id","r":false,"sh":"Teammate who created the attribute.","t":"`$STRING`","key$":"admin_id","index$":0},"api_writable":{"a":true,"h":"Api Writable","n":"api_writable","r":false,"sh":"Can this attribute be updated through API","t":"`$BOOLEAN`","key$":"api_writable","index$":1},"archived":{"a":true,"h":"Archived","n":"archived","r":false,"sh":"Is this attribute archived.","t":"`$BOOLEAN`","key$":"archived","index$":2},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"The time the attribute was created as a UTC Unix timestamp","t":"`$INTEGER`","key$":"created_at","index$":3},"custom":{"a":true,"h":"Custom","n":"custom","r":false,"sh":"Set to true if this is a CDA","t":"`$BOOLEAN`","key$":"custom","index$":4},"data_type":{"a":true,"h":"Data Type","n":"data_type","r":false,"sh":"The data type of the attribute.","t":"`$STRING`","key$":"data_type","index$":5},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Readable description of the attribute.","t":"`$STRING`","key$":"description","index$":6},"full_name":{"a":true,"h":"Full Name","n":"full_name","r":false,"sh":"Full name of the attribute.","t":"`$STRING`","key$":"full_name","index$":7},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier for the data attribute which is given by Intercom.","t":"`$INTEGER`","key$":"id","index$":8},"label":{"a":true,"h":"Label","n":"label","r":false,"sh":"Readable name of the attribute (i.e.","t":"`$STRING`","key$":"label","index$":9},"messenger_writable":{"a":true,"h":"Messenger Writable","n":"messenger_writable","r":false,"sh":"Can this attribute be updated by the Messenger","t":"`$BOOLEAN`","key$":"messenger_writable","index$":10},"model":{"a":true,"h":"Model","n":"model","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"Value is `contact` for user/lead attributes and `company` for company attributes.","t":"`$STRING`","key$":"model","index$":11},"name":{"a":true,"h":"Name","n":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"Name of the attribute.","t":"`$STRING`","key$":"name","index$":12},"options":{"a":true,"h":"Options","n":"options","r":false,"sh":"List of predefined options for attribute value.","t":"`$ARRAY`","key$":"options","index$":13},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Value is `data_attribute`.","t":"`$STRING`","key$":"type","index$":14},"ui_writable":{"a":true,"h":"Ui Writable","n":"ui_writable","r":false,"sh":"Can this attribute be updated in the UI","t":"`$BOOLEAN`","key$":"ui_writable","index$":15},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"sh":"The time the attribute was last updated as a UTC Unix timestamp","t":"`$INTEGER`","key$":"updated_at","index$":16}},"id":{"field":"id","name":"id"},"name":"data_attribute","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /data_attributes","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/data_attributes","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"data_attributes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /data_attributes","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":false,"k":"query","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":"company","k":"query","n":"model","or":"model","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/data_attributes","q":{"exist":["include_archived","intercom_version","model"]},"r":{},"s":[{"lit":"data_attributes"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /data_attributes/{data_attribute_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":1,"k":"param","n":"id","or":"data_attribute_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PUT","o":"/data_attributes/{data_attribute_id}","q":{"exist":["id","intercom_version"]},"r":{"param":{"data_attribute_id":"id"}},"s":[{"lit":"data_attributes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"data_attribute","name__orig":"data_attribute","Name":"DataAttribute","name_":"data_attribute","name-":"data-attribute","NAME":"DATA_ATTRIBUTE","index$":38}, {"active":true,"entity":"data_attribute","key$":"BasicDataAttributeFlow","kind":"basic","name":"BasicDataAttributeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"data_attribute_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"data_attribute_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"data_attribute_ref01","srcdatavar":"data_attribute_ref01_data","suffix":"_up0","textfield":"admin_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-data_attribute_ref01"}}],"v":[],"index$":2}]}, 'DataAttribute', {"POST /data_attributes":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"","type":"object","title":"Create Data Attribute Request","properties":{"name":{"type":"string","description":"The name of the data attribute.","example":"My Data Attribute","key$":"name"},"model":{"type":"string","description":"The model that the data attribute belongs to.","enum":["contact","company"],"example":"contact","key$":"model"},"description":{"type":"string","description":"The readable description you see in the UI for the attribute.","example":"My Data Attribute Description","key$":"description"},"messenger_writable":{"type":"boolean","description":"Can this attribute be updated by the Messenger","example":false,"key$":"messenger_writable"}},"required":["name","model","data_type"],"oneOf":[{"properties":{"data_type":{"enum":["options"]},"options":{"type":"array","description":"Array of objects representing the options of the list, with `value` as the key and the option as the value. At least two options are required.","items":{"type":"object","properties":{}},"example":[{},{}]}},"required":["options"],"title":"list attribute"},{"properties":{"data_type":{"enum":["string","integer","float","boolean","datetime","date"]}},"title":"other type"}],"x-ref":"#/components/schemas/create_data_attribute_request","index$":1},"examples":{"successful":{"summary":"Successful","value":{"name":"Mithril Shirt","model":"company","data_type":"string"}},"same_name_already_exists":{"summary":"Same name already exists","value":{"name":"The One Ring","model":"contact","data_type":"integer"}},"invalid_name":{"summary":"Invalid name","value":{"name":"!nv@l!d n@me","model":"company","data_type":"string"}},"attribute_already_exists":{"summary":"Attribute already exists","value":{"name":"The One Ring","model":"company","data_type":"string"}},"invalid_data_type":{"summary":"Invalid Data Type","value":{"name":"The Second Ring","model":"company","data_type":"mithril"}},"too_few_options_for_list":{"summary":"Too few options for list","value":{"description":"Just a plain old ring","options":[{"value":"1-10"}],"archived":false}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /data_attributes":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"model","in":"query","required":false,"description":"Specify the data attribute model to return. For conversation attributes, use GET /conversations/attributes instead.","schema":{"type":"string","enum":["contact","company"]},"example":"company","index$":1},{"name":"include_archived","in":"query","required":false,"description":"Include archived attributes in the list. By default we return only non archived data attributes.","example":false,"schema":{"type":"boolean"},"index$":2}]},"PUT /data_attributes/{data_attribute_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"","type":"object","title":"Update Data Attribute Request","properties":{"archived":{"type":"boolean","description":"Whether the attribute is to be archived or not.","example":false,"key$":"archived"},"description":{"type":"string","description":"The readable description you see in the UI for the attribute.","example":"My Data Attribute Description","key$":"description"},"messenger_writable":{"type":"boolean","description":"Can this attribute be updated by the Messenger","example":false,"key$":"messenger_writable"}},"oneOf":[{"properties":{"options":{"type":"array","description":"Array of objects representing the options of the list, with `value` as the key and the option as the value. At least two options are required.","items":{"type":"object","properties":{}},"example":[{},{}]}},"required":["options"],"title":"list attribute"},{"title":"other type"}],"x-ref":"#/components/schemas/update_data_attribute_request","index$":1},"examples":{"successful":{"summary":"Successful","value":{"description":"Just a plain old ring","options":[{"value":"1-10"},{"value":"11-20"}],"archived":false}},"too_few_options_in_list":{"summary":"Too few options in list","value":{"description":"Too few options","options":{"value":"1-10"},"archived":false}},"attribute_not_found":{"summary":"Attribute Not Found","value":{"description":"Just a plain old ring","options":[{"value":"1-10"},{"value":"11-20"}],"archived":false}},"has_dependant_object":{"summary":"Has Dependant Object","value":{"description":"Trying to archieve","archived":true}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"data_attribute_id","in":"path","required":true,"description":"The data attribute id","example":1,"schema":{"type":"integer"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const data_attribute_ref01_ent = client.DataAttribute()
    let data_attribute_ref01_data = setup.data.new.data_attribute['data_attribute_ref01']

    data_attribute_ref01_data = (await data_attribute_ref01_ent.create(data_attribute_ref01_data)).data()
    assert(null != data_attribute_ref01_data.id)


    // LIST
    const data_attribute_ref01_match = {}

    const data_attribute_ref01_list = (await data_attribute_ref01_ent.list(data_attribute_ref01_match)).map((e) => e.data())

    assert(!isempty(select(data_attribute_ref01_list, { id: data_attribute_ref01_data.id })))


    // UPDATE
    const data_attribute_ref01_data_up0 = {}
    data_attribute_ref01_data_up0.id = data_attribute_ref01_data.id

    const data_attribute_ref01_markdef_up0 = { name: 'admin_id', value: 'Mark01-data_attribute_ref01_' + setup.now }
    data_attribute_ref01_data_up0 [data_attribute_ref01_markdef_up0.name] = data_attribute_ref01_markdef_up0.value

    const data_attribute_ref01_resdata_up0 = (await data_attribute_ref01_ent.update(data_attribute_ref01_data_up0)).data()
    assert(data_attribute_ref01_resdata_up0.id === data_attribute_ref01_data_up0.id)

    assert(data_attribute_ref01_resdata_up0[data_attribute_ref01_markdef_up0.name] === data_attribute_ref01_markdef_up0.value)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/data_attribute/DataAttributeTestData.json')

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
    ['data_attribute01','data_attribute02','data_attribute03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_DATA_ATTRIBUTE_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_DATA_ATTRIBUTE_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_DATA_ATTRIBUTE_ENTID']
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
  
