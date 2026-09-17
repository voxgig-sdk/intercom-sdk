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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id" }, "name": "data_connector_execution_result_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "12345", "kind": "param", "name": "id", "orig": "data_connector_id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "end_t", "orig": "end_t", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "kind": "query", "name": "error_type", "orig": "error_type", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "include_body", "orig": "include_body", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": 10, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "kind": "query", "name": "start_t", "orig": "start_t", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "kind": "query", "name": "starting_after", "orig": "starting_after", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "kind": "query", "name": "success", "orig": "success", "reqd": false, "type": "`$STRING`", "index$": 6 }] }, "contract": { "id": "GET /data_connectors/{data_connector_id}/execution_results", "json": "{\"operationId\":\"listDataConnectorExecutionResults\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the data connector.\",\"in\":\"path\",\"name\":\"data_connector_id\",\"required\":true,\"schema\":{\"example\":\"12345\",\"type\":\"string\"}},{\"description\":\"The number of results per page (1-30, default 10).\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":30,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Cursor for pagination. Use the value from `pages.next.starting_after` in a previous response.\",\"in\":\"query\",\"name\":\"starting_after\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by success status. Use `true`, `false`, or omit for all.\",\"in\":\"query\",\"name\":\"success\",\"required\":false,\"schema\":{\"enum\":[\"true\",\"false\"],\"type\":\"string\"}},{\"description\":\"Filter by error type.\",\"in\":\"query\",\"name\":\"error_type\",\"required\":false,\"schema\":{\"enum\":[\"request_configuration_error\",\"faraday_error\",\"3rd_party_error\",\"response_mapping_error\",\"token_refresh_error\",\"fin_action_response_formatting_error\",\"fin_action_identity_verification_error\",\"email_verification_error\",\"non_fin_standalone_action_identity_verification_error\",\"request_validation_error\",\"client_side_action_error\"],\"type\":\"string\"}},{\"description\":\"Unix timestamp for start of time range (default 1 hour ago).\",\"in\":\"query\",\"name\":\"start_ts\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Unix timestamp for end of time range (default now).\",\"in\":\"query\",\"name\":\"end_ts\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Include request/response bodies in the response (default false).\",\"in\":\"query\",\"name\":\"include_bodies\",\"required\":false,\"schema\":{\"enum\":[\"true\",\"false\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"data\":[{\"conversation_id\":\"8001\",\"created_at\":\"2026-02-10T18:15:32Z\",\"data_connector_id\":\"12345\",\"execution_time_ms\":150,\"http_method\":\"post\",\"http_status\":200,\"id\":\"99001\",\"request_url\":\"https://api.vendor.com/webhook\",\"source_id\":\"5001\",\"source_type\":\"workflow\",\"success\":true,\"type\":\"data_connector.execution\"},{\"data_connector_id\":\"12345\",\"http_status\":{\"created_at\":\"2026-02-10T17:45:15Z\",\"error_message\":\"Connection refused\",\"error_type\":\"3rd_party_error\",\"http_method\":\"post\",\"source_type\":\"inbox\"},\"id\":\"99000\",\"success\":false,\"type\":\"data_connector.execution\"}],\"pages\":{\"next\":{\"starting_after\":\"WzE3MDc1OTQ3MTUuMCw5OTAwMF0=\"},\"per_page\":10,\"type\":\"pages\"},\"type\":\"list\"}}},\"schema\":{\"description\":\"A paginated list of data connector execution results.\",\"properties\":{\"data\":{\"description\":\"An array of execution result objects.\",\"items\":{\"description\":\"An execution result from a data connector HTTP request.\",\"properties\":{\"conversation_id\":{\"description\":\"The conversation associated with this execution, if any.\",\"example\":\"8001\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time the execution occurred.\",\"example\":\"2026-02-10T18:15:32Z\",\"format\":\"date-time\",\"type\":\"string\"},\"data_connector_id\":{\"description\":\"The unique identifier of the data connector that produced this result.\",\"example\":\"12345\",\"type\":\"string\"},\"error_message\":{\"description\":\"A human-readable error message. Query parameters, userinfo, and fragments in URLs are redacted.\",\"example\":\"Connection refused\",\"nullable\":true,\"type\":\"string\"},\"error_type\":{\"description\":\"The type of error that occurred, if any.\",\"enum\":[\"request_configuration_error\",\"faraday_error\",\"3rd_party_error\",\"response_mapping_error\",\"token_refresh_error\",\"fin_action_response_formatting_error\",\"fin_action_identity_verification_error\",\"email_verification_error\",\"non_fin_standalone_action_identity_verification_error\",\"request_validation_error\",\"client_side_action_error\"],\"example\":\"3rd_party_error\",\"nullable\":true,\"type\":\"string\"},\"execution_time_ms\":{\"description\":\"The execution time in milliseconds.\",\"example\":245,\"nullable\":true,\"type\":\"integer\"},\"http_method\":{\"description\":\"The HTTP method used for the request.\",\"enum\":[\"get\",\"post\",\"put\",\"delete\",\"patch\"],\"example\":\"post\",\"type\":\"string\"},\"http_status\":{\"description\":\"The HTTP status code returned by the external API.\",\"example\":200,\"nullable\":true,\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier for the execution result.\",\"example\":\"99001\",\"type\":\"string\"},\"raw_response_body\":{\"description\":\"The raw (unmapped) response body.\",\"example\":\"{\\\"status\\\": \\\"ok\\\"}\",\"nullable\":true,\"type\":\"string\"},\"request_body\":{\"description\":\"The request body sent to the external API.\",\"example\":\"{\\\"message\\\": \\\"hello\\\"}\",\"nullable\":true,\"type\":\"string\"},\"request_url\":{\"description\":\"The request URL. Query parameters, userinfo, and fragments are redacted.\",\"example\":\"https://api.example.com/webhook\",\"nullable\":true,\"type\":\"string\"},\"response_body\":{\"description\":\"The response body from the external API.\",\"example\":\"{\\\"status\\\": \\\"ok\\\"}\",\"nullable\":true,\"type\":\"string\"},\"source_id\":{\"description\":\"The identifier of the source that triggered this execution.\",\"example\":\"5001\",\"nullable\":true,\"type\":\"string\"},\"source_type\":{\"description\":\"The type of source that triggered this execution.\",\"enum\":[\"custom_bot\",\"inbound_custom_bot\",\"button_custom_bot\",\"answer\",\"workflow\",\"saved_reply\",\"triggerable_custom_bot\",\"inbox\",\"fin\"],\"example\":\"workflow\",\"nullable\":true,\"type\":\"string\"},\"success\":{\"description\":\"Whether the execution was successful.\",\"example\":true,\"type\":\"boolean\"},\"type\":{\"description\":\"The type of object - `data_connector.execution`.\",\"enum\":[\"data_connector.execution\"],\"example\":\"data_connector.execution\",\"type\":\"string\"}},\"title\":\"Data Connector Execution Result\",\"type\":\"object\"},\"type\":\"array\"},\"pages\":{\"description\":\"Pagination information.\",\"properties\":{\"next\":{\"description\":\"Cursor for the next page of results.\",\"nullable\":true,\"properties\":{\"starting_after\":{\"description\":\"The cursor value to use for the next page.\",\"example\":\"WzE3MDc1OTQ3MTUuMCw5OTAwMF0=\",\"type\":\"string\"}},\"type\":\"object\"},\"per_page\":{\"description\":\"The number of results per page.\",\"example\":10,\"type\":\"integer\"},\"type\":{\"enum\":[\"pages\"],\"example\":\"pages\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"description\":\"The type of object - `list`.\",\"enum\":[\"list\"],\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Data Connector Execution Result List\",\"type\":\"object\"}}},\"description\":\"successful\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"Invalid error_type\":{\"value\":{\"errors\":[{\"code\":\"parameter_invalid\",\"message\":\"Invalid error_type. Must be one of: request_configuration_error, faraday_error, 3rd_party_error, response_mapping_error, token_refresh_error, fin_action_response_formatting_error, fin_action_identity_verification_error, email_verification_error, non_fin_standalone_action_identity_verification_error, request_validation_error, client_side_action_error\"}],\"request_id\":\"test-uuid-replacement\",\"type\":\"error.list\"}},\"Invalid timestamp\":{\"value\":{\"errors\":[{\"code\":\"parameter_invalid\",\"message\":\"start_ts must be a Unix timestamp (integer)\"}],\"request_id\":\"test-uuid-replacement\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Invalid parameter\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"test-uuid-replacement\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Data connector not found\":{\"value\":{\"errors\":[{\"code\":\"data_connector_not_found\",\"message\":\"Data connector not found\"}],\"request_id\":\"test-uuid-replacement\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Data connector not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/data_connectors/{data_connector_id}/execution_results", "rename": { "param": { "data_connector_id": "id" } }, "segments": [{ "lit": "data_connectors" }, { "var": "id" }, { "lit": "execution_results" }], "select": { "$action": "execution_results", "exist": ["end_t", "error_type", "id", "include_body", "intercom_version", "per_page", "start_t", "starting_after", "success"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "data_connector_execution_result_list", "name__orig": "data_connector_execution_result_list", "Name": "DataConnectorExecutionResultList", "name_": "data_connector_execution_result_list", "name-": "data-connector-execution-result-list", "NAME": "DATA_CONNECTOR_EXECUTION_RESULT_LIST", "index$": 40 }, { "active": true, "entity": "data_connector_execution_result_list", "key$": "BasicDataConnectorExecutionResultListFlow", "kind": "basic", "name": "BasicDataConnectorExecutionResultListFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "data_connector_id": "data_connector01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "data_connector_execution_result_list_ref01" } }], "index$": 0 }] }, 'DataConnectorExecutionResultList');
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
    let idmap = transform(['data_connector_execution_result_list01', 'data_connector_execution_result_list02', 'data_connector_execution_result_list03'], {
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