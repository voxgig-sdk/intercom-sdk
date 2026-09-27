
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


describe('AudienceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Audience()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"ro":true,"sh":"The time the audience was created as a Unix timestamp.","t":"`$INTEGER`","key$":"created_at","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"ro":true,"sh":"The unique identifier representing the audience.","t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The name of the audience.","t":"`$STRING`","key$":"name","index$":2},"predicates":{"a":true,"h":"Predicates","n":"predicates","r":false,"sh":"The predicates that define which contacts belong to the audience.","t":"`$ARRAY`","key$":"predicates","index$":3},"role_predicates":{"a":true,"h":"Role Predicates","n":"role_predicates","r":false,"sh":"Role-based predicates that further filter audience membership by contact role.","t":"`$ARRAY`","key$":"role_predicates","index$":4},"type":{"a":true,"h":"Type","n":"type","r":false,"ro":true,"sh":"The type of object.","t":"`$STRING`","key$":"type","index$":5},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"ro":true,"sh":"The time the audience was last updated as a Unix timestamp.","t":"`$INTEGER`","key$":"updated_at","index$":6}},"id":{"field":"id","name":"id"},"name":"audience","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /audiences","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/audiences","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"audiences"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /audiences","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/audiences","q":{"exist":["intercom_version","page","per_page"]},"r":{},"s":[{"lit":"audiences"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /audiences/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/audiences/{id}","q":{"exist":["id","intercom_version"]},"r":{},"s":[{"lit":"audiences"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /audiences/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/audiences/{id}","q":{"exist":["id","intercom_version"]},"r":{},"s":[{"lit":"audiences"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /audiences/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/audiences/{id}","q":{"exist":["id","intercom_version"]},"r":{},"s":[{"lit":"audiences"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"audience","name__orig":"audience","Name":"Audience","name_":"audience","name-":"audience","NAME":"AUDIENCE","index$":11}, {"active":true,"entity":"audience","key$":"BasicAudienceFlow","kind":"basic","name":"BasicAudienceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"audience_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"audience_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"audience_ref01","srcdatavar":"audience_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-audience_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"audience_ref01","srcdatavar":"audience_ref01_data","suffix":"_dt0"},"m":{"id":"audience01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-audience_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"audience_ref01","suffix":"_rm0"},"m":{"id":"audience01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"audience_ref01"}}],"index$":5}]}, 'Audience', {"POST /audiences":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"title":"Create Audience Request","type":"object","description":"The request payload for creating an audience.","required":["name"],"properties":{"name":{"type":"string","description":"The name of the audience.","example":"VIP Customers","key$":"name"},"predicates":{"type":"array","description":"The predicates that define which contacts belong to the audience.","items":{"title":"Predicate","type":"object","description":"A condition used to filter contacts in an audience.","properties":{"attribute":{"description":"The attribute to filter on.","example":"company.name","type":"string"},"type":{"description":"The type of the attribute.","example":"string","type":"string"},"comparison":{"description":"The comparison operator.","example":"contains","type":"string"},"value":{"description":"The value to compare against.","example":"Acme","type":"string"}},"x-ref":"#/components/schemas/predicate"},"example":[{"attribute":"company.name","type":"string","comparison":"contains","value":"Acme"}],"key$":"predicates"},"role_predicates":{"type":"array","description":"Role-based predicates that further filter audience membership by contact role.","items":{"title":"Predicate","type":"object","description":"A condition used to filter contacts in an audience.","properties":{"attribute":{"description":"The attribute to filter on.","example":"company.name","type":"string"},"type":{"description":"The type of the attribute.","example":"string","type":"string"},"comparison":{"description":"The comparison operator.","example":"contains","type":"string"},"value":{"description":"The value to compare against.","example":"Acme","type":"string"}},"x-ref":"#/components/schemas/predicate"},"example":[{"attribute":"role","type":"role","comparison":"eq","value":"user"}],"key$":"role_predicates"}},"x-ref":"#/components/schemas/create_audience_request","index$":1},"examples":{"audience_created":{"summary":"Audience created","value":{"name":"VIP Customers","predicates":[{"attribute":"company.name","type":"string","comparison":"contains","value":"Acme"}],"role_predicates":[{"attribute":"role","type":"role","comparison":"eq","value":"user"}]}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /audiences":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"page","in":"query","required":false,"description":"The page of results to fetch. Defaults to first page.","example":1,"schema":{"type":"integer"},"index$":1},{"name":"per_page","in":"query","required":false,"description":"The number of results to return per page. Defaults to 50. Maximum is 50.","example":50,"schema":{"type":"integer","maximum":50},"index$":2}]},"GET /audiences/{id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"id","in":"path","required":true,"description":"The unique identifier for the audience.","example":"123","schema":{"type":"string"},"index$":1}]},"DELETE /audiences/{id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"id","in":"path","required":true,"description":"The unique identifier for the audience.","example":"123","schema":{"type":"string"},"index$":1}]},"PUT /audiences/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"title":"Update Audience Request","type":"object","description":"The request payload for updating an audience. All fields are optional — only provided fields will be updated.","properties":{"name":{"type":"string","description":"The name of the audience.","example":"Enterprise Accounts","key$":"name"},"predicates":{"type":"array","description":"The predicates that define which contacts belong to the audience.","items":{"title":"Predicate","type":"object","description":"A condition used to filter contacts in an audience.","properties":{"attribute":{"description":"The attribute to filter on.","example":"company.name","type":"string"},"type":{"description":"The type of the attribute.","example":"string","type":"string"},"comparison":{"description":"The comparison operator.","example":"contains","type":"string"},"value":{"description":"The value to compare against.","example":"Acme","type":"string"}},"x-ref":"#/components/schemas/predicate"},"example":[{"attribute":"custom_attributes.plan","type":"string","comparison":"eq","value":"enterprise"}],"key$":"predicates"},"role_predicates":{"type":"array","description":"Role-based predicates that further filter audience membership by contact role.","items":{"title":"Predicate","type":"object","description":"A condition used to filter contacts in an audience.","properties":{"attribute":{"description":"The attribute to filter on.","example":"company.name","type":"string"},"type":{"description":"The type of the attribute.","example":"string","type":"string"},"comparison":{"description":"The comparison operator.","example":"contains","type":"string"},"value":{"description":"The value to compare against.","example":"Acme","type":"string"}},"x-ref":"#/components/schemas/predicate"},"example":[{"attribute":"role","type":"role","comparison":"eq","value":"user"}],"key$":"role_predicates"}},"x-ref":"#/components/schemas/update_audience_request","index$":1},"examples":{"audience_updated":{"summary":"Audience updated","value":{"name":"Enterprise Accounts","predicates":[{"attribute":"custom_attributes.plan","type":"string","comparison":"eq","value":"enterprise"}]}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"id","in":"path","required":true,"description":"The unique identifier for the audience.","example":"123","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const audience_ref01_ent = client.Audience()
    let audience_ref01_data = setup.data.new.audience['audience_ref01']

    audience_ref01_data = (await audience_ref01_ent.create(audience_ref01_data)).data()
    assert(null != audience_ref01_data.id)


    // LIST
    const audience_ref01_match = {}

    const audience_ref01_list = (await audience_ref01_ent.list(audience_ref01_match)).map((e) => e.data())

    assert(!isempty(select(audience_ref01_list, { id: audience_ref01_data.id })))


    // UPDATE
    const audience_ref01_data_up0 = {}
    audience_ref01_data_up0.id = audience_ref01_data.id

    const audience_ref01_markdef_up0 = { name: 'name', value: 'Mark01-audience_ref01_' + setup.now }
    audience_ref01_data_up0 [audience_ref01_markdef_up0.name] = audience_ref01_markdef_up0.value

    const audience_ref01_resdata_up0 = (await audience_ref01_ent.update(audience_ref01_data_up0)).data()
    assert(audience_ref01_resdata_up0.id === audience_ref01_data_up0.id)

    assert(audience_ref01_resdata_up0[audience_ref01_markdef_up0.name] === audience_ref01_markdef_up0.value)


    // LOAD
    const audience_ref01_match_dt0 = {}
    audience_ref01_match_dt0.id = audience_ref01_data.id
    const audience_ref01_data_dt0 = (await audience_ref01_ent.load(audience_ref01_match_dt0)).data()
    assert(audience_ref01_data_dt0.id === audience_ref01_data.id)


    // REMOVE
    const audience_ref01_match_rm0 = {}
    audience_ref01_match_rm0.id = audience_ref01_data.id
    await audience_ref01_ent.remove(audience_ref01_match_rm0)
  

    // LIST
    const audience_ref01_match_rt0 = {}

    const audience_ref01_list_rt0 = (await audience_ref01_ent.list(audience_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(audience_ref01_list_rt0, { id: audience_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/audience/AudienceTestData.json')

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
    ['audience01','audience02','audience03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_AUDIENCE_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_AUDIENCE_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_AUDIENCE_ENTID']
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
  
