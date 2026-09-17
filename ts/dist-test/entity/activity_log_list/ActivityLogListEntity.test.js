"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ActivityLogListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.ActivityLogList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'activity_log_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "activity_logs", "req": false, "short": "An array of activity logs", "type": "`$ARRAY`", "index$": 0 }, { "active": true, "format": "date-time", "name": "created_at_after", "req": true, "short": "The start date that you request data for.", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "format": "date-time", "name": "created_at_before", "req": false, "short": "The end date that you request data for.", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "event_types", "req": false, "short": "An optional list of event types to filter activity logs by.", "type": "`$ARRAY`", "index$": 3 }, { "active": true, "name": "page", "req": false, "short": "The page number of results to return.", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "pages", "req": false, "short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.", "type": "`$OBJECT`", "index$": 5 }, { "active": true, "name": "per_page", "req": false, "short": "The number of results per page.", "type": "`$INTEGER`", "index$": 6 }, { "active": true, "name": "type", "req": false, "short": "String representing the object's type.", "type": "`$STRING`", "index$": 7 }], "name": "activity_log_list", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }] }, "contract": { "id": "POST /admins/activity_logs/search", "json": "{\"operationId\":\"searchActivityLogs\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"search_with_event_types\":{\"summary\":\"Search with event types filter\",\"value\":{\"created_at_after\":1677253093,\"created_at_before\":1677861493,\"event_types\":[\"app_name_change\",\"message_state_change\"]}},\"search_without_filters\":{\"summary\":\"Search with date range only\",\"value\":{\"created_at_after\":1677253093,\"created_at_before\":1677861493}}},\"schema\":{\"properties\":{\"created_at_after\":{\"description\":\"The start date that you request data for. It must be formatted as a UNIX timestamp.\",\"example\":1677253093,\"format\":\"date-time\",\"type\":\"integer\"},\"created_at_before\":{\"description\":\"The end date that you request data for. It must be formatted as a UNIX timestamp.\",\"example\":1677861493,\"format\":\"date-time\",\"type\":\"integer\"},\"event_types\":{\"description\":\"An optional list of event types to filter activity logs by. Use the list all activity log event types endpoint to retrieve available values.\",\"example\":[\"app_name_change\",\"message_state_change\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"page\":{\"default\":1,\"description\":\"The page number of results to return.\",\"example\":1,\"type\":\"integer\"},\"per_page\":{\"default\":20,\"description\":\"The number of results per page. Must be between 1 and 250.\",\"example\":20,\"maximum\":250,\"minimum\":1,\"type\":\"integer\"}},\"required\":[\"created_at_after\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"activity_logs\":[{\"activity_description\":\"Ciaran5 Lee changed your app name from before to after.\",\"activity_type\":\"app_name_change\",\"created_at\":1734537253,\"id\":\"fca05814-4b72-4dce-ad4f-77a786a2c136\",\"metadata\":{\"after\":\"after\",\"before\":\"before\"},\"performed_by\":{\"email\":\"admin5@email.com\",\"id\":\"991267464\",\"ip\":\"127.0.0.1\",\"type\":\"admin\"}}],\"pages\":{\"next\":null,\"page\":1,\"per_page\":20,\"total_pages\":1,\"type\":\"pages\"},\"type\":\"activity_log.list\"}}},\"schema\":{\"description\":\"A paginated list of activity logs.\",\"properties\":{\"activity_logs\":{\"description\":\"An array of activity logs\",\"items\":{\"description\":\"Activities performed by Admins.\",\"nullable\":true,\"properties\":{\"activity_description\":{\"description\":\"A sentence or two describing the activity.\",\"example\":\"Admin updated the app's name to \\\"My App\\\".\",\"type\":\"string\"},\"activity_type\":{\"enum\":[\"admin_conversation_assignment_limit_change\",\"admin_ticket_assignment_limit_change\",\"admin_avatar_change\",\"admin_away_mode_change\",\"admin_deletion\",\"admin_deprovisioned\",\"admin_impersonation_end\",\"admin_impersonation_start\",\"admin_impersonation_consent_approved\",\"admin_impersonation_consent_revoked\",\"admin_invite_change\",\"admin_invite_creation\",\"admin_invite_deletion\",\"admin_login_failure\",\"admin_login_success\",\"admin_logout\",\"admin_occupancy_setting_change\",\"admin_occupancy_state_change\",\"admin_password_reset_request\",\"admin_password_reset_success\",\"admin_permission_change\",\"admin_provisioned\",\"admin_two_factor_auth_change\",\"admin_unauthorized_sign_in_method\",\"app_admin_join\",\"app_authentication_method_change\",\"app_data_deletion\",\"app_data_export\",\"app_google_sso_domain_change\",\"app_identity_verification_change\",\"app_name_change\",\"app_outbound_address_change\",\"app_package_installation\",\"app_package_token_regeneration\",\"app_package_uninstallation\",\"app_team_creation\",\"app_team_deletion\",\"app_team_membership_modification\",\"app_timezone_change\",\"app_webhook_creation\",\"app_webhook_deletion\",\"articles_in_messenger_enabled_change\",\"automatic_away_mode_setting_change\",\"bulk_delete\",\"bulk_export\",\"campaign_deletion\",\"campaign_state_change\",\"conversation_deletion_schedule_creation\",\"conversation_deletion_schedule_deletion\",\"conversation_deletion_schedule_state_change\",\"conversation_deletion_schedule_update\",\"conversation_part_deletion\",\"conversation_pdf_export\",\"conversation_topic_change\",\"conversation_topic_creation\",\"conversation_topic_deletion\",\"content_redaction_rule_creation\",\"content_redaction_rule_deletion\",\"content_redaction_rule_update\",\"csv_import_completion\",\"csv_import_creation\",\"custom_authentication_token_creation\",\"help_center_settings_change\",\"inbound_conversations_change\",\"inbox_access_change\",\"macro_creation\",\"macro_deletion\",\"macro_update\",\"macro_usage_export\",\"malicious_domains_setting_change\",\"message_deletion\",\"message_state_change\",\"messenger_api_secret_creation\",\"messenger_api_secret_deletion\",\"messenger_look_and_feel_change\",\"messenger_search_required_change\",\"messenger_spaces_change\",\"oauth_token_revocation\",\"office_hours_change\",\"role_change\",\"role_creation\",\"role_deletion\",\"ruleset_activation_title_preview\",\"ruleset_creation\",\"ruleset_deletion\",\"search_browse_enabled_change\",\"search_browse_required_change\",\"seat_change\",\"seat_revoke\",\"security_settings_change\",\"series_creation\",\"series_deletion\",\"series_settings_update\",\"series_status_change\",\"series_update\",\"strip_inbound_email_links_change\",\"temporary_expectation_change\",\"team_assignment_limit_change\",\"trusted_domains_setting_change\",\"unassign_unsnoozed_at_capacity_setting_change\",\"unassign_unsnoozed_when_away_setting_change\",\"upfront_email_collection_change\",\"allowed_attachment_filetypes_setting_change\",\"attach_uploads_inline_setting_change\",\"teammate_gifs_setting_change\",\"user_camera_attachments_setting_change\",\"user_conversation_attachments_setting_change\",\"user_file_attachments_setting_change\",\"user_gifs_setting_change\",\"user_media_attachments_setting_change\",\"user_voice_notes_setting_change\",\"welcome_message_change\",\"workspace_deletion_request\",\"hide_csat_from_agents_setting_change\"],\"example\":\"app_name_change\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time the activity was created.\",\"example\":1671028894,\"format\":\"date-time\",\"type\":\"integer\"},\"id\":{\"description\":\"The id representing the activity.\",\"example\":\"6\",\"type\":\"string\"},\"metadata\":{\"description\":\"Additional data provided about Admin activity.\",\"nullable\":true,\"properties\":{\"after\":{\"description\":\"The state of settings or values after the change. Structure varies by activity type.\",\"nullable\":true,\"type\":\"object\"},\"auto\":{\"description\":\"Indicates the state was derived automatically rather than set by an Admin.\",\"example\":true,\"nullable\":true,\"type\":\"boolean\"},\"auto_changed\":{\"description\":\"Indicates if the status was changed automatically or manually.\",\"example\":false,\"nullable\":true,\"type\":\"string\"},\"away_mode\":{\"description\":\"The away mode status which is set to true when away and false when returned.\",\"example\":true,\"nullable\":true,\"type\":\"boolean\"},\"away_status_reason\":{\"description\":\"The reason the Admin is away.\",\"example\":\"😌 On a break\",\"nullable\":true,\"type\":\"string\"},\"before\":{\"description\":\"The state of settings or values before the change. Structure varies by activity type.\",\"nullable\":true,\"type\":\"object\"},\"changes\":{\"additionalProperties\":{\"properties\":{\"after\":{\"description\":\"The value after the change.\"},\"before\":{\"description\":\"The value before the change.\"}},\"type\":\"object\"},\"description\":\"The settings altered by the change, keyed by setting name. Only settings whose value actually moved are included, so an unchanged setting is absent rather than present with equal values.\",\"example\":{\"occupancy_window_minutes\":{\"after\":30,\"before\":15}},\"nullable\":true,\"type\":\"object\"},\"consent_id\":{\"description\":\"The ID of the impersonation consent.\",\"example\":149673,\"nullable\":true,\"type\":\"integer\"},\"conversation_assignment_limit\":{\"description\":\"The conversation assignment limit value for an admin.\",\"example\":15,\"nullable\":true,\"type\":\"integer\"},\"enabled\":{\"description\":\"Indicates if the setting is enabled or disabled.\",\"example\":true,\"nullable\":true,\"type\":\"boolean\"},\"expired_at\":{\"description\":\"The timestamp when the impersonation consent expires.\",\"example\":\"2025-12-04T09:31:57.000Z\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"external_id\":{\"description\":\"The unique identifier for the contact which is provided by the Client.\",\"example\":\"f3b87a2e09d514c6c2e79b9a\",\"nullable\":true,\"type\":\"string\"},\"last_activity_at\":{\"description\":\"The time of the Admin's last recorded activity.\",\"example\":1671028894,\"format\":\"date-time\",\"nullable\":true,\"type\":\"integer\"},\"mode\":{\"description\":\"The mode of the setting (e.g., when_away_only, when_away_and_reassign).\",\"example\":\"when_away_only\",\"nullable\":true,\"type\":\"string\"},\"new_state\":{\"description\":\"The state after the change. `idle` or `occupied`.\",\"example\":\"occupied\",\"nullable\":true,\"type\":\"string\"},\"previous_state\":{\"description\":\"The state before the change. `idle` or `occupied`, and null when the Admin had not been classified yet.\",\"example\":\"idle\",\"nullable\":true,\"type\":\"string\"},\"reassign_conversations\":{\"description\":\"Indicates if conversations should be reassigned while an Admin is away.\",\"example\":false,\"nullable\":true,\"type\":\"boolean\"},\"setting_type\":{\"description\":\"The group of workspace settings the change belongs to, for example `teammate_occupancy` or `automatic_away_mode`.\",\"example\":\"teammate_occupancy\",\"nullable\":true,\"type\":\"string\"},\"sign_in_method\":{\"description\":\"The way the admin signed in.\",\"example\":\"email_password\",\"nullable\":true,\"type\":\"string\"},\"source\":{\"description\":\"The action that initiated the status change.\",\"example\":\"admin update from web - Admin id: 93\",\"nullable\":true,\"type\":\"string\"},\"team\":{\"description\":\"Details about the team whose assignment limit was changed.\",\"nullable\":true,\"properties\":{\"id\":{\"description\":\"The ID of the team.\",\"example\":123,\"type\":\"integer\"},\"name\":{\"description\":\"The name of the team.\",\"example\":\"Support Team\",\"type\":\"string\"}},\"type\":\"object\"},\"team_assignment_limit\":{\"description\":\"The team assignment limit value (null if limit was removed).\",\"example\":50,\"nullable\":true,\"type\":\"integer\"},\"threshold_minutes\":{\"description\":\"The inactivity window, in minutes, used to classify the Admin.\",\"example\":15,\"nullable\":true,\"type\":\"integer\"},\"ticket_assignment_limit\":{\"description\":\"The ticket assignment limit value for an admin.\",\"example\":20,\"nullable\":true,\"type\":\"integer\"},\"update_by\":{\"description\":\"The ID of the Admin who initiated the activity.\",\"example\":93,\"nullable\":true,\"type\":\"integer\"},\"update_by_name\":{\"description\":\"The name of the Admin who initiated the activity.\",\"example\":\"Joe Example\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Activity Log Metadata\",\"type\":\"object\"},\"performed_by\":{\"description\":\"Details about the Admin involved in the activity.\",\"properties\":{\"email\":{\"description\":\"The email of the admin.\",\"example\":\"john@example.com\",\"type\":\"string\"},\"id\":{\"description\":\"The id representing the admin.\",\"example\":\"1295\",\"type\":\"string\"},\"ip\":{\"description\":\"The IP address of the admin.\",\"example\":\"198.51.100.255\",\"type\":\"string\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `admin`.\",\"example\":\"admin\",\"type\":\"string\"}},\"type\":\"object\"}},\"title\":\"Activity Log\",\"type\":\"object\"},\"type\":\"array\"},\"pages\":{\"description\":\"Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.\\nA \\\"cursor\\\" or pointer is used to keep track of the current position in the result set, allowing the API to return the data in small chunks or \\\"pages\\\" as needed.\\n\",\"nullable\":true,\"properties\":{\"next\":{\"nullable\":true,\"properties\":{\"per_page\":{\"description\":\"The number of results to fetch per page.\",\"example\":2,\"type\":\"integer\"},\"starting_after\":{\"description\":\"The cursor to use in the next request to get the next page of results.\",\"example\":\"your-cursor-from-response\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Pagination: Starting After\",\"type\":\"object\"},\"page\":{\"description\":\"The current page\",\"example\":1,\"type\":\"integer\"},\"per_page\":{\"description\":\"Number of results per page\",\"example\":2,\"type\":\"integer\"},\"total_pages\":{\"description\":\"Total number of pages\",\"example\":13,\"type\":\"integer\"},\"type\":{\"description\":\"the type of object `pages`.\",\"enum\":[\"pages\"],\"example\":\"pages\",\"type\":\"string\"}},\"title\":\"Cursor based pages\",\"type\":\"object\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `activity_log.list`.\",\"example\":\"activity_log.list\",\"type\":\"string\"}},\"title\":\"Paginated Response\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"57cc6148-2c0a-471b-bd9e-859538110958\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/admins/activity_logs/search", "segments": [{ "lit": "admins" }, { "lit": "activity_logs" }, { "lit": "search" }], "select": { "exist": ["intercom_version"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "activity_log_list", "name__orig": "activity_log_list", "Name": "ActivityLogList", "name_": "activity_log_list", "name-": "activity-log-list", "NAME": "ACTIVITY_LOG_LIST", "index$": 2 }, { "active": true, "entity": "activity_log_list", "key$": "BasicActivityLogListFlow", "kind": "basic", "name": "BasicActivityLogListFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "activity_log_list_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'ActivityLogList');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const activity_log_list_ref01_ent = client.ActivityLogList();
        let activity_log_list_ref01_data = setup.data.new.activity_log_list['activity_log_list_ref01'];
        activity_log_list_ref01_data = (await activity_log_list_ref01_ent.create(activity_log_list_ref01_data)).data();
        (0, node_assert_1.default)(null != activity_log_list_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/activity_log_list/ActivityLogListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['activity_log_list01', 'activity_log_list02', 'activity_log_list03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_ACTIVITY_LOG_LIST_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_ACTIVITY_LOG_LIST_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_ACTIVITY_LOG_LIST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.IntercomSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=ActivityLogListEntity.test.js.map