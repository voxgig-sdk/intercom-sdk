

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


describe('JobEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Job()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'job.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":true,"short":"The id of the job that's currently being processed or has completed.","type":"`$STRING`","index$":0},{"active":true,"name":"resource_id","req":false,"short":"The id of the resource created during job execution (e.g.","type":"`$STRING`","index$":1},{"active":true,"name":"resource_type","req":false,"short":"The type of resource created during job execution.","type":"`$STRING`","index$":2},{"active":true,"name":"resource_url","req":false,"short":"The url of the resource created during job exeuction.","type":"`$STRING`","index$":3},{"active":true,"name":"skip_notifications","req":false,"short":"Option to disable notifications when a Ticket is created.","type":"`$BOOLEAN`","index$":4},{"active":true,"name":"status","req":false,"short":"The status of the job execution.","type":"`$STRING`","index$":5},{"active":true,"name":"type","req":false,"short":"The type of the object","type":"`$STRING`","index$":6},{"active":true,"name":"url","req":false,"short":"API endpoint URL to check the job status.","type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"job","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"POST /tickets/enqueue","json":"{\"operationId\":\"enqueueCreateTicket\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"successful_response\":{\"summary\":\"Successful response\",\"value\":{\"contacts\":[{\"id\":\"6762f2d81bb69f9f2193bc54\"}],\"ticket_attributes\":{\"_default_description_\":\"there is a problem\",\"_default_title_\":\"example\"},\"ticket_type_id\":88}}},\"schema\":{\"allOf\":[{\"description\":\"You can create a Ticket\",\"properties\":{\"assignment\":{\"properties\":{\"admin_assignee_id\":{\"description\":\"The ID of the admin to which the ticket is assigned. If not provided, the ticket will be unassigned.\",\"example\":\"123\",\"type\":\"string\"},\"team_assignee_id\":{\"description\":\"The ID of the team to which the ticket is assigned. If not provided, the ticket will be unassigned.\",\"example\":\"8\",\"type\":\"string\"}},\"type\":\"object\"},\"company_id\":{\"description\":\"The ID of the company that the ticket is associated with. The unique identifier for the company which is given by Intercom\",\"example\":\"5f4d3c1c-7b1b-4d7d-a97e-6095715c6632\",\"type\":\"string\"},\"contacts\":{\"description\":\"The list of contacts (users or leads) affected by this ticket. Currently only one is allowed\",\"example\":[{\"id\":\"1234\"}],\"items\":{\"oneOf\":[{\"properties\":{\"id\":{\"description\":\"The identifier for the contact as given by Intercom.\",\"type\":\"string\"}},\"required\":[\"id\"],\"title\":\"ID\"},{\"properties\":{\"external_id\":{\"description\":\"The external_id you have defined for the contact who is being added as a participant.\",\"type\":\"string\"}},\"required\":[\"external_id\"],\"title\":\"External ID\"},{\"properties\":{\"email\":{\"description\":\"The email you have defined for the contact who is being added as a participant. If a contact with this email does not exist, one will be created.\",\"type\":\"string\"}},\"required\":[\"email\"],\"title\":\"Email\"}],\"type\":\"object\"},\"type\":\"array\"},\"conversation_to_link_id\":{\"description\":\"The ID of the conversation you want to link to the ticket. Here are the valid ways of linking two tickets:\\n - conversation | back-office ticket\\n - customer tickets | non-shared back-office ticket\\n - conversation | tracker ticket\\n - customer ticket | tracker ticket\",\"example\":\"1234\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time the ticket was created. If not provided, the current time will be used.\",\"example\":1590000000,\"type\":\"integer\"},\"ticket_attributes\":{\"additionalProperties\":{\"anyOf\":[{\"nullable\":true,\"type\":\"string\"},{\"type\":\"number\"},{\"type\":\"boolean\"},{\"type\":\"array\"}]},\"description\":\"The attributes set on the ticket. When setting the default title and description attributes, the attribute keys that should be used are `_default_title_` and `_default_description_`. When setting ticket type attributes of the list attribute type, the key should be the attribute name and the value of the attribute should be the list item id, obtainable by [listing the ticket type](ref:get_ticket-types). For example, if the ticket type has an attribute called `priority` of type `list`, the key should be `priority` and the value of the attribute should be the guid of the list item (e.g. `de1825a0-0164-4070-8ca6-13e22462fa7e`).\",\"example\":{\"_default_description_\":\"The button is not working\",\"_default_title_\":\"Found a bug\"},\"title\":\"Ticket Attributes\",\"type\":\"object\"},\"ticket_type_id\":{\"description\":\"The ID of the type of ticket you want to create\",\"example\":\"1234\",\"type\":\"string\"}},\"required\":[\"ticket_type_id\",\"contacts\"],\"title\":\"Create Ticket Request Payload\",\"type\":\"object\"}],\"properties\":{\"skip_notifications\":{\"description\":\"Option to disable notifications when a Ticket is created.\",\"example\":true,\"type\":\"boolean\"}}}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"id\":\"20\",\"resource_id\":null,\"resource_type\":\"ticket\",\"resource_url\":null,\"status\":\"pending\",\"type\":\"job\",\"url\":\"https://api.intercom.io/jobs/status/20\"}}},\"schema\":{\"description\":\"Jobs are tasks that are processed asynchronously by the Intercom system after being enqueued via the API. This allows for efficient handling of operations that may take time to complete, such as data imports or exports. You can check the status of your jobs to monitor their progress and ensure they are completed successfully.\",\"properties\":{\"id\":{\"description\":\"The id of the job that's currently being processed or has completed.\",\"example\":20,\"type\":\"string\"},\"resource_id\":{\"description\":\"The id of the resource created during job execution (e.g. ticket id)\",\"example\":123,\"nullable\":true,\"type\":\"string\"},\"resource_type\":{\"description\":\"The type of resource created during job execution.\",\"example\":\"ticket\",\"type\":\"string\"},\"resource_url\":{\"description\":\"The url of the resource created during job exeuction. Use this url to fetch the resource.\",\"example\":\"http://api.intercom.io/tickets/123\",\"nullable\":true,\"type\":\"string\"},\"status\":{\"description\":\"The status of the job execution.\",\"enum\":[\"pending\",\"success\",\"failed\"],\"type\":\"string\"},\"type\":{\"description\":\"The type of the object\",\"enum\":[\"job\"],\"type\":\"string\"},\"url\":{\"description\":\"API endpoint URL to check the job status.\",\"example\":\"https://api.intercom.io/jobs/status/20\",\"type\":\"string\"}},\"required\":[\"id\"],\"title\":\"Jobs\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"Bad Request\":{\"value\":{\"errors\":[{\"code\":\"parameter_invalid\",\"message\":\"Missing required ticket attributes\"}],\"request_id\":\"c7bf358f-135e-48d7-8286-a4988a8a1456\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"c7bf358f-135e-48d7-8286-a4988a8a1d9b\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/tickets/enqueue","segments":[{"lit":"tickets"},{"lit":"enqueue"}],"select":{"exist":["intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"kind":"param","name":"job_id","orig":"job_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /jobs/status/{job_id}","json":"{\"operationId\":\"jobsStatus\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the job which is given by Intercom\",\"in\":\"path\",\"name\":\"job_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"job status retrieved\":{\"value\":{\"id\":\"2\",\"resource_id\":\"20\",\"resource_type\":\"ticket\",\"resource_url\":\"https://api.intercom.io/tickets/20\",\"status\":\"success\",\"type\":\"job\"}}},\"schema\":{\"description\":\"Jobs are tasks that are processed asynchronously by the Intercom system after being enqueued via the API. This allows for efficient handling of operations that may take time to complete, such as data imports or exports. You can check the status of your jobs to monitor their progress and ensure they are completed successfully.\",\"properties\":{\"id\":{\"description\":\"The id of the job that's currently being processed or has completed.\",\"example\":20,\"type\":\"string\"},\"resource_id\":{\"description\":\"The id of the resource created during job execution (e.g. ticket id)\",\"example\":123,\"nullable\":true,\"type\":\"string\"},\"resource_type\":{\"description\":\"The type of resource created during job execution.\",\"example\":\"ticket\",\"type\":\"string\"},\"resource_url\":{\"description\":\"The url of the resource created during job exeuction. Use this url to fetch the resource.\",\"example\":\"http://api.intercom.io/tickets/123\",\"nullable\":true,\"type\":\"string\"},\"status\":{\"description\":\"The status of the job execution.\",\"enum\":[\"pending\",\"success\",\"failed\"],\"type\":\"string\"},\"type\":{\"description\":\"The type of the object\",\"enum\":[\"job\"],\"type\":\"string\"},\"url\":{\"description\":\"API endpoint URL to check the job status.\",\"example\":\"https://api.intercom.io/jobs/status/20\",\"type\":\"string\"}},\"required\":[\"id\"],\"title\":\"Jobs\",\"type\":\"object\"}}},\"description\":\"Job execution status\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"2c8a20ee-ed09-42c0-a31d-a1b4f5d2742d\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Job not found\":{\"value\":{\"errors\":[{\"code\":\"job_not_found\",\"message\":\"Job Not Found\"}],\"request_id\":\"123e4567-e89b-12d3-a456-426614174000\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Job not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/jobs/status/{job_id}","segments":[{"lit":"jobs"},{"lit":"status"},{"var":"job_id"}],"select":{"exist":["intercom_version","job_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["status"]]},"key$":"job","name__orig":"job","Name":"Job","name_":"job","name-":"job","NAME":"JOB","index$":58}, {"active":true,"entity":"job","key$":"BasicJobFlow","kind":"basic","name":"BasicJobFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"job_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"job_ref01","srcdatavar":"job_ref01_data","suffix":"_dt0"},"match":{"id":"job01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-job_ref01"}}],"index$":1}]}, 'Job')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const job_ref01_ent = client.Job()
    let job_ref01_data = setup.data.new.job['job_ref01']

    job_ref01_data = (await job_ref01_ent.create(job_ref01_data)).data()
    assert(null != job_ref01_data.id)


    // LOAD
    const job_ref01_match_dt0: any = {}
    job_ref01_match_dt0.id = job_ref01_data.id
    const job_ref01_data_dt0 = (await job_ref01_ent.load(job_ref01_match_dt0)).data()
    assert(job_ref01_data_dt0.id === job_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/job/JobTestData.json')

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
    ['job01','job02','job03','status01','status02','status03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_JOB_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_JOB_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_JOB_ENTID']
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
  
