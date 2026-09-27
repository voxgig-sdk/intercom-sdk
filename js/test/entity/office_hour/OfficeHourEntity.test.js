
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


describe('OfficeHourEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.OfficeHour()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The time the schedule was created as a Unix timestamp.","t":"`$INTEGER`","key$":"created_at","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier for the office hours schedule.","t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","op":{"list":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The name of the office hours schedule.","t":"`$STRING`","key$":"name","index$":2},"time_intervals":{"a":true,"h":"Time Intervals","n":"time_intervals","op":{"list":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"The open intervals for the schedule.","t":"`$ARRAY`","key$":"time_intervals","index$":3},"time_zone_name":{"a":true,"h":"Time Zone Name","n":"time_zone_name","op":{"list":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The IANA time zone the schedule's hours are evaluated in.","t":"`$STRING`","key$":"time_zone_name","index$":4},"twenty_four_seven":{"a":true,"h":"Twenty Four Seven","n":"twenty_four_seven","r":false,"sh":"Whether the schedule is open 24/7.","t":"`$BOOLEAN`","key$":"twenty_four_seven","index$":5},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of the object - always `office_hours_schedule`.","t":"`$STRING`","key$":"type","index$":6},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"sh":"The time the schedule was last updated as a Unix timestamp.","t":"`$INTEGER`","key$":"updated_at","index$":7}},"id":{"field":"id","name":"id"},"name":"office_hour","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /office_hours_schedules","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/office_hours_schedules","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"office_hours_schedules"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /office_hours_schedules","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/office_hours_schedules","q":{"exist":["intercom_version"]},"r":{},"s":[{"lit":"office_hours_schedules"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"456","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"123","k":"param","n":"office_hours_schedule_id","or":"office_hours_schedule_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}","q":{"exist":["id","intercom_version","office_hours_schedule_id"]},"r":{},"s":[{"lit":"office_hours_schedules"},{"var":"office_hours_schedule_id"},{"lit":"office_hours_exceptions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /office_hours_schedules/{id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"2.16","k":"header","n":"intercom_version","or":"intercom_version","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"123","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/office_hours_schedules/{id}","q":{"exist":["id","intercom_version"]},"r":{},"s":[{"lit":"office_hours_schedules"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.office_hours_schedule"]]},"key$":"office_hour","name__orig":"office_hour","Name":"OfficeHour","name_":"office_hour","name-":"office-hour","NAME":"OFFICE_HOUR","index$":65}, {"active":true,"entity":"office_hour","key$":"BasicOfficeHourFlow","kind":"basic","name":"BasicOfficeHourFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"office_hour_ref01"},"m":{"office_hours_schedule_id":"office_hours_schedule01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"office_hour_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"office_hour_ref01","suffix":"_rm0"},"m":{"id":"office_hour01"},"o":"remove","s":[],"v":[],"index$":2},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"office_hour_ref01"}}],"index$":3}]}, 'OfficeHour', {"POST /office_hours_schedules":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","title":"Create Office Hours Schedule Request","description":"The request payload for creating an office hours schedule.","required":["name","time_zone_name","time_intervals"],"properties":{"name":{"type":"string","description":"The name of the office hours schedule.","example":"Standard Support Hours","key$":"name"},"time_zone_name":{"type":"string","description":"The IANA time zone the schedule's hours are evaluated in.","example":"America/New_York","key$":"time_zone_name"},"time_intervals":{"type":"array","description":"The open intervals for the schedule. `start_minute` and `end_minute` must be on a 15-minute boundary.","items":{"type":"object","title":"Office Hours Time Interval","x-tags":["Office Hours"],"description":"A single open interval. For schedules, `start_minute` and `end_minute` are minute offsets from the start of the week (Monday 00:00 = 0), in the range 0 to 10080. For exceptions, they are minute offsets from midnight on `exception_date`, in the range 0 to 1440.","properties":{"start_minute":{"description":"Minute the interval starts. For schedules, offset from the start of the week (Monday 00:00 = 0); for exceptions, offset from midnight on `exception_date`.","example":540,"type":"integer"},"end_minute":{"description":"Minute the interval ends. For schedules, offset from the start of the week (Monday 00:00 = 0); for exceptions, offset from midnight on `exception_date`.","example":1020,"type":"integer"},"day_of_week":{"description":"Derived day of the week the interval falls on (0 = Monday … 6 = Sunday). For exceptions, this is derived from `exception_date`.","example":0,"readOnly":true,"type":"integer"}},"x-ref":"#/components/schemas/office_hours_time_interval"},"key$":"time_intervals"}},"x-ref":"#/components/schemas/create_office_hours_schedule_request","index$":1},"examples":{"Create schedule":{"value":{"name":"Standard Support Hours","time_zone_name":"America/New_York","time_intervals":[{"start_minute":540,"end_minute":1020}]}}}}}},"parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"GET /office_hours_schedules":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0}]},"DELETE /office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"office_hours_schedule_id","in":"path","required":true,"description":"The unique identifier for the office hours schedule.","example":"123","schema":{"type":"string"},"index$":1},{"name":"id","in":"path","required":true,"description":"The unique identifier for the office hours exception.","example":"456","schema":{"type":"string"},"index$":2}]},"DELETE /office_hours_schedules/{id}":{"protocol":"http","parameters":[{"name":"Intercom-Version","in":"header","schema":{"description":"Intercom API version.</br>By default, it's equal to the version set in the app package.","type":"string","example":"2.16","default":"2.16","enum":["1.0","1.1","1.2","1.3","1.4","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16"],"x-ref":"#/components/schemas/intercom_version"},"index$":0},{"name":"id","in":"path","required":true,"description":"The unique identifier for the office hours schedule.","example":"123","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const office_hour_ref01_ent = client.OfficeHour()
    let office_hour_ref01_data = setup.data.new.office_hour['office_hour_ref01']
    office_hour_ref01_data['office_hours_schedule_id'] = setup.idmap['office_hours_schedule01']

    office_hour_ref01_data = (await office_hour_ref01_ent.create(office_hour_ref01_data)).data()
    assert(null != office_hour_ref01_data.id)


    // LIST
    const office_hour_ref01_match = {}

    const office_hour_ref01_list = (await office_hour_ref01_ent.list(office_hour_ref01_match)).map((e) => e.data())

    assert(!isempty(select(office_hour_ref01_list, { id: office_hour_ref01_data.id })))


    // REMOVE
    const office_hour_ref01_match_rm0 = {}
    office_hour_ref01_match_rm0.id = office_hour_ref01_data.id
    await office_hour_ref01_ent.remove(office_hour_ref01_match_rm0)
  

    // LIST
    const office_hour_ref01_match_rt0 = {}

    const office_hour_ref01_list_rt0 = (await office_hour_ref01_ent.list(office_hour_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(office_hour_ref01_list_rt0, { id: office_hour_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/office_hour/OfficeHourTestData.json')

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
    ['office_hour01','office_hour02','office_hour03','office_hours_schedule01','office_hours_schedule02','office_hours_schedule03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_OFFICE_HOUR_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_OFFICE_HOUR_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_OFFICE_HOUR_ENTID']
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
  
