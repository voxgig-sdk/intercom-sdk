

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


describe('ActivityLogEventTypeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.ActivityLogEventType()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'activity_log_event_type.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"event_types","req":false,"short":"An array of activity log event type strings.","type":"`$ARRAY`","index$":0},{"active":true,"name":"type","req":false,"short":"String representing the object's type.","type":"`$STRING`","index$":1}],"name":"activity_log_event_type","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /admins/activity_log_event_types","json":"{\"operationId\":\"listActivityLogEventTypes\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"event_types\":[\"admin_conversation_assignment_limit_change\",\"admin_ticket_assignment_limit_change\",\"admin_avatar_change\",\"admin_away_mode_change\",\"admin_deletion\",\"admin_deprovisioned\",\"admin_impersonation_end\",\"admin_impersonation_start\",\"admin_invite_change\",\"admin_invite_creation\",\"admin_invite_deletion\",\"admin_login_failure\",\"admin_login_success\",\"admin_logout\",\"admin_occupancy_setting_change\",\"admin_occupancy_state_change\",\"admin_password_reset_request\",\"admin_password_reset_success\",\"admin_permission_change\",\"admin_provisioned\",\"admin_two_factor_auth_change\",\"admin_unauthorized_sign_in_method\",\"app_admin_join\",\"app_authentication_method_change\",\"app_data_deletion\",\"app_data_export\",\"app_google_sso_domain_change\",\"app_identity_verification_change\",\"app_name_change\",\"app_outbound_address_change\",\"app_package_installation\",\"app_package_token_regeneration\",\"app_package_uninstallation\",\"app_team_creation\",\"app_team_deletion\",\"app_team_membership_modification\",\"app_timezone_change\",\"app_webhook_creation\",\"app_webhook_deletion\",\"articles_in_messenger_enabled_change\",\"bulk_delete\",\"bulk_export\",\"campaign_deletion\",\"campaign_state_change\",\"conversation_part_deletion\",\"conversation_pdf_export\",\"conversation_topic_change\",\"conversation_topic_creation\",\"conversation_topic_deletion\",\"help_center_settings_change\",\"inbound_conversations_change\",\"inbox_access_change\",\"message_deletion\",\"message_state_change\",\"messenger_look_and_feel_change\",\"messenger_search_required_change\",\"messenger_spaces_change\",\"office_hours_change\",\"role_change\",\"role_creation\",\"role_deletion\",\"ruleset_activation_title_preview\",\"ruleset_creation\",\"ruleset_deletion\",\"search_browse_enabled_change\",\"search_browse_required_change\",\"seat_change\",\"seat_revoke\",\"security_settings_change\",\"temporary_expectation_change\",\"upfront_email_collection_change\",\"welcome_message_change\",\"hide_csat_from_agents_setting_change\"],\"type\":\"activity_log_event_type.list\"}}},\"schema\":{\"description\":\"A list of all activity log event types.\",\"properties\":{\"event_types\":{\"description\":\"An array of activity log event type strings.\",\"example\":[\"admin_login_success\",\"admin_logout\",\"app_name_change\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `activity_log_event_type.list`.\",\"example\":\"activity_log_event_type.list\",\"type\":\"string\"}},\"title\":\"Activity Log Event Types\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"85a1e5b6-e743-4e89-a6e2-1d7c0c3f4a5b\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/admins/activity_log_event_types","segments":[{"lit":"admins"},{"lit":"activity_log_event_types"}],"select":{"exist":["intercom_version"]},"transform":{"req":"`reqdata`","res":"`body.event_types`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"activity_log_event_type","name__orig":"activity_log_event_type","Name":"ActivityLogEventType","name_":"activity_log_event_type","name-":"activity-log-event-type","NAME":"ACTIVITY_LOG_EVENT_TYPE","index$":1}, {"active":true,"entity":"activity_log_event_type","key$":"BasicActivityLogEventTypeFlow","kind":"basic","name":"BasicActivityLogEventTypeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"activity_log_event_type_ref01"}}],"index$":0}]}, 'ActivityLogEventType')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let activity_log_event_type_ref01_data = Object.values(setup.data.existing.activity_log_event_type)[0] as any

    // LIST
    const activity_log_event_type_ref01_ent = client.ActivityLogEventType()
    const activity_log_event_type_ref01_match: any = {}

    const activity_log_event_type_ref01_list = (await activity_log_event_type_ref01_ent.list(activity_log_event_type_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/activity_log_event_type/ActivityLogEventTypeTestData.json')

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
    ['activity_log_event_type01','activity_log_event_type02','activity_log_event_type03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_ACTIVITY_LOG_EVENT_TYPE_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_ACTIVITY_LOG_EVENT_TYPE_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_ACTIVITY_LOG_EVENT_TYPE_ENTID']
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
  
