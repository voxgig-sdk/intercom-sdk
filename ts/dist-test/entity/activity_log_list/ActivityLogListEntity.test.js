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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "activity_logs": { "a": true, "h": "Activity Logs", "n": "activity_logs", "r": false, "sh": "An array of activity logs", "t": "`$ARRAY`", "key$": "activity_logs", "index$": 0 }, "created_at_after": { "a": true, "fo": "date-time", "h": "Created At After", "n": "created_at_after", "r": true, "sh": "The start date that you request data for.", "t": "`$INTEGER`", "key$": "created_at_after", "index$": 1 }, "created_at_before": { "a": true, "fo": "date-time", "h": "Created At Before", "n": "created_at_before", "r": false, "sh": "The end date that you request data for.", "t": "`$INTEGER`", "key$": "created_at_before", "index$": 2 }, "event_types": { "a": true, "h": "Event Types", "n": "event_types", "r": false, "sh": "An optional list of event types to filter activity logs by.", "t": "`$ARRAY`", "key$": "event_types", "index$": 3 }, "page": { "a": true, "h": "Page", "n": "page", "r": false, "sh": "The page number of results to return.", "t": "`$INTEGER`", "key$": "page", "index$": 4 }, "pages": { "a": true, "h": "Pages", "n": "pages", "r": false, "sh": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.", "t": "`$OBJECT`", "key$": "pages", "index$": 5 }, "per_page": { "a": true, "h": "Per Page", "n": "per_page", "r": false, "sh": "The number of results per page.", "t": "`$INTEGER`", "key$": "per_page", "index$": 6 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "type", "index$": 7 } }, "name": "activity_log_list", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /admins/activity_logs/search", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/admins/activity_logs/search", "q": { "exist": ["intercom_version"] }, "r": {}, "s": [{ "lit": "admins" }, { "lit": "activity_logs" }, { "lit": "search" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "activity_log_list", "name__orig": "activity_log_list", "Name": "ActivityLogList", "name_": "activity_log_list", "name-": "activity-log-list", "NAME": "ACTIVITY_LOG_LIST", "index$": 2 }, { "active": true, "entity": "activity_log_list", "key$": "BasicActivityLogListFlow", "kind": "basic", "name": "BasicActivityLogListFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "activity_log_list_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'ActivityLogList', { "POST /admins/activity_logs/search": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["created_at_after"], "properties": { "created_at_after": { "type": "integer", "format": "date-time", "description": "The start date that you request data for. It must be formatted as a UNIX timestamp.", "example": 1677253093, "key$": "created_at_after" }, "created_at_before": { "type": "integer", "format": "date-time", "description": "The end date that you request data for. It must be formatted as a UNIX timestamp.", "example": 1677861493, "key$": "created_at_before" }, "event_types": { "type": "array", "description": "An optional list of event types to filter activity logs by. Use the list all activity log event types endpoint to retrieve available values.", "items": { "type": "string" }, "example": ["app_name_change", "message_state_change"], "key$": "event_types" }, "page": { "type": "integer", "description": "The page number of results to return.", "default": 1, "example": 1, "key$": "page" }, "per_page": { "type": "integer", "description": "The number of results per page. Must be between 1 and 250.", "default": 20, "minimum": 1, "maximum": 250, "example": 20, "key$": "per_page" } }, "index$": 1 }, "examples": { "search_with_event_types": { "summary": "Search with event types filter", "value": { "created_at_after": 1677253093, "created_at_before": 1677861493, "event_types": ["app_name_change", "message_state_change"] } }, "search_without_filters": { "summary": "Search with date range only", "value": { "created_at_after": 1677253093, "created_at_before": 1677861493 } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }] } });
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