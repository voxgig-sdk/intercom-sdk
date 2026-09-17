
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


describe('TeamEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Team()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"admin_ids","req":false,"short":"The list of admin IDs that are a part of the team.","type":"`$ARRAY`","index$":0},{"active":true,"name":"admin_priority_level","req":false,"short":"Admin priority levels for the team","type":"`$OBJECT`","index$":1},{"active":true,"name":"assignment_limit","req":false,"short":"The assignment limit for the team.","type":"`$INTEGER`","index$":2},{"active":true,"name":"distribution_method","req":false,"short":"Describes how assignments are distributed among the team members","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"short":"The id of the team","type":"`$STRING`","index$":4},{"active":true,"name":"name","req":false,"short":"The name of the team","type":"`$STRING`","index$":5},{"active":true,"name":"type","req":false,"short":"Value is always \"team\"","type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"team","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /teams","json":"{\"operationId\":\"listTeams\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"teams\":[],\"type\":\"team.list\"}}},\"schema\":{\"description\":\"This will return a list of team objects for the App.\",\"properties\":{\"teams\":{\"description\":\"A list of team objects\",\"items\":{\"description\":\"Teams are groups of admins in Intercom.\",\"properties\":{\"admin_ids\":{\"description\":\"The list of admin IDs that are a part of the team.\",\"example\":[493881],\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"admin_priority_level\":{\"description\":\"Admin priority levels for the team\",\"nullable\":true,\"properties\":{\"primary_admin_ids\":{\"description\":\"The primary admin ids for the team\",\"example\":[493881],\"items\":{\"type\":\"integer\"},\"nullable\":true,\"type\":\"array\"},\"secondary_admin_ids\":{\"description\":\"The secondary admin ids for the team\",\"example\":[814865],\"items\":{\"type\":\"integer\"},\"nullable\":true,\"type\":\"array\"}},\"title\":\"Admin Priority Level\",\"type\":\"object\"},\"assignment_limit\":{\"description\":\"The assignment limit for the team. This field is only present when the team's distribution type is load balanced.\",\"example\":10,\"nullable\":true,\"type\":\"integer\"},\"distribution_method\":{\"description\":\"Describes how assignments are distributed among the team members\",\"example\":\"round_robin\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"The id of the team\",\"example\":\"814865\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the team\",\"example\":\"Example Team\",\"type\":\"string\"},\"type\":{\"description\":\"Value is always \\\"team\\\"\",\"example\":\"team\",\"type\":\"string\"}},\"title\":\"Team\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of the object\",\"enum\":[\"team.list\"],\"example\":\"team.list\",\"type\":\"string\"}},\"title\":\"Team List\",\"type\":\"object\"}}},\"description\":\"successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"a77dadbc-1f1e-4875-bac3-f0d09bbc214a\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/teams","segments":[{"lit":"teams"}],"select":{"exist":["intercom_version"]},"transform":{"req":"`reqdata`","res":"`body.teams`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"123","kind":"param","name":"id","orig":"team_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /teams/{team_id}","json":"{\"operationId\":\"retrieveTeam\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier of a given team.\",\"example\":\"123\",\"in\":\"path\",\"name\":\"team_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"admin_ids\":[],\"assignment_limit\":10,\"distribution_method\":\"round_robin\",\"id\":\"991267902\",\"name\":\"team 1\",\"type\":\"team\"}}},\"schema\":{\"description\":\"Teams are groups of admins in Intercom.\",\"properties\":{\"admin_ids\":{\"description\":\"The list of admin IDs that are a part of the team.\",\"example\":[493881],\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"admin_priority_level\":{\"description\":\"Admin priority levels for the team\",\"nullable\":true,\"properties\":{\"primary_admin_ids\":{\"description\":\"The primary admin ids for the team\",\"example\":[493881],\"items\":{\"type\":\"integer\"},\"nullable\":true,\"type\":\"array\"},\"secondary_admin_ids\":{\"description\":\"The secondary admin ids for the team\",\"example\":[814865],\"items\":{\"type\":\"integer\"},\"nullable\":true,\"type\":\"array\"}},\"title\":\"Admin Priority Level\",\"type\":\"object\"},\"assignment_limit\":{\"description\":\"The assignment limit for the team. This field is only present when the team's distribution type is load balanced.\",\"example\":10,\"nullable\":true,\"type\":\"integer\"},\"distribution_method\":{\"description\":\"Describes how assignments are distributed among the team members\",\"example\":\"round_robin\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"The id of the team\",\"example\":\"814865\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the team\",\"example\":\"Example Team\",\"type\":\"string\"},\"type\":{\"description\":\"Value is always \\\"team\\\"\",\"example\":\"team\",\"type\":\"string\"}},\"title\":\"Team\",\"type\":\"object\"}}},\"description\":\"successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"fc4b741b-b9f1-4ef9-92c7-eb71e9811df3\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Team not found\":{\"value\":{\"errors\":[{\"code\":\"team_not_found\",\"message\":\"Team not found\"}],\"request_id\":\"3ff156ba-a66e-40d4-93ff-cb6e6afc3c9d\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Team not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/teams/{team_id}","rename":{"param":{"team_id":"id"}},"segments":[{"lit":"teams"},{"var":"id"}],"select":{"exist":["id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"team","name__orig":"team","Name":"Team","name_":"team","name-":"team","NAME":"TEAM","index$":77}, {"active":true,"entity":"team","key$":"BasicTeamFlow","kind":"basic","name":"BasicTeamFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"team_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"team_ref01","srcdatavar":"team_ref01_data","suffix":"_dt0"},"match":{"id":"team01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-team_ref01"}}],"index$":1}]}, 'Team')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let team_ref01_data = Object.values(setup.data.existing.team)[0]

    // LIST
    const team_ref01_ent = client.Team()
    const team_ref01_match = {}

    const team_ref01_list = (await team_ref01_ent.list(team_ref01_match)).map((e) => e.data())


    // LOAD
    const team_ref01_match_dt0 = {}
    team_ref01_match_dt0.id = team_ref01_data.id
    const team_ref01_data_dt0 = (await team_ref01_ent.load(team_ref01_match_dt0)).data()
    assert(team_ref01_data_dt0.id === team_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/team/TeamTestData.json')

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
    ['team01','team02','team03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_TEAM_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_TEAM_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_TEAM_ENTID']
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
  
