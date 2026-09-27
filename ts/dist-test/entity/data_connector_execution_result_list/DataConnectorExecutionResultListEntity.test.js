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
(0, node_test_1.describe)('DataConnectorExecutionResultListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.DataConnectorExecutionResultList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'data_connector_execution_result_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "data_connector_execution_result_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /data_connectors/{data_connector_id}/execution_results", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "12345", "k": "param", "n": "id", "or": "data_connector_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "end_t", "or": "end_t", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "error_type", "or": "error_type", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "include_body", "or": "include_body", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": 10, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "start_t", "or": "start_t", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "success", "or": "success", "r": false, "t": "`$STRING`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/data_connectors/{data_connector_id}/execution_results", "q": { "$action": "execution_results", "exist": ["end_t", "error_type", "id", "include_body", "intercom_version", "per_page", "start_t", "starting_after", "success"] }, "r": { "param": { "data_connector_id": "id" } }, "s": [{ "lit": "data_connectors" }, { "var": "id" }, { "lit": "execution_results" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "data_connector_execution_result_list", "name__orig": "data_connector_execution_result_list", "Name": "DataConnectorExecutionResultList", "name_": "data_connector_execution_result_list", "name-": "data-connector-execution-result-list", "NAME": "DATA_CONNECTOR_EXECUTION_RESULT_LIST", "index$": 41 }, { "active": true, "entity": "data_connector_execution_result_list", "key$": "BasicDataConnectorExecutionResultListFlow", "kind": "basic", "name": "BasicDataConnectorExecutionResultListFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "data_connector_id": "data_connector01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "data_connector_execution_result_list_ref01" } }], "index$": 0 }] }, 'DataConnectorExecutionResultList', { "GET /data_connectors/{data_connector_id}/execution_results": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "data_connector_id", "in": "path", "required": true, "description": "The unique identifier for the data connector.", "schema": { "type": "string", "example": "12345" }, "index$": 1 }, { "name": "per_page", "in": "query", "required": false, "description": "The number of results per page (1-30, default 10).", "schema": { "type": "integer", "default": 10, "minimum": 1, "maximum": 30 }, "index$": 2 }, { "name": "starting_after", "in": "query", "required": false, "description": "Cursor for pagination. Use the value from `pages.next.starting_after` in a previous response.", "schema": { "type": "string" }, "index$": 3 }, { "name": "success", "in": "query", "required": false, "description": "Filter by success status. Use `true`, `false`, or omit for all.", "schema": { "type": "string", "enum": ["true", "false"] }, "index$": 4 }, { "name": "error_type", "in": "query", "required": false, "description": "Filter by error type.", "schema": { "type": "string", "enum": ["request_configuration_error", "faraday_error", "3rd_party_error", "response_mapping_error", "token_refresh_error", "fin_action_response_formatting_error", "fin_action_identity_verification_error", "email_verification_error", "non_fin_standalone_action_identity_verification_error", "request_validation_error", "client_side_action_error"] }, "index$": 5 }, { "name": "start_ts", "in": "query", "required": false, "description": "Unix timestamp for start of time range (default 1 hour ago).", "schema": { "type": "integer" }, "index$": 6 }, { "name": "end_ts", "in": "query", "required": false, "description": "Unix timestamp for end of time range (default now).", "schema": { "type": "integer" }, "index$": 7 }, { "name": "include_bodies", "in": "query", "required": false, "description": "Include request/response bodies in the response (default false).", "schema": { "type": "string", "enum": ["true", "false"] }, "index$": 8 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let data_connector_execution_result_list_ref01_data = Object.values(setup.data.existing.data_connector_execution_result_list)[0];
        // LIST
        const data_connector_execution_result_list_ref01_ent = client.DataConnectorExecutionResultList();
        const data_connector_execution_result_list_ref01_match = {};
        data_connector_execution_result_list_ref01_match['data_connector_id'] = setup.idmap['data_connector01'];
        const data_connector_execution_result_list_ref01_list = (await data_connector_execution_result_list_ref01_ent.list(data_connector_execution_result_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/data_connector_execution_result_list/DataConnectorExecutionResultListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['data_connector_execution_result_list01', 'data_connector_execution_result_list02', 'data_connector_execution_result_list03', 'data_connector01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_DATA_CONNECTOR_EXECUTION_RESULT_LIST_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_DATA_CONNECTOR_EXECUTION_RESULT_LIST_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_DATA_CONNECTOR_EXECUTION_RESULT_LIST_ENTID'];
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
//# sourceMappingURL=DataConnectorExecutionResultListEntity.test.js.map