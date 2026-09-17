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
(0, node_test_1.describe)('ReportingDataExportEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.ReportingDataExport();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'reporting_data_export.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "attribute_ids", "req": true, "type": "`$ARRAY`", "index$": 0 }, { "active": true, "name": "attributes", "req": false, "type": "`$ARRAY`", "index$": 1 }, { "active": true, "name": "dataset_id", "req": true, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "default_time_attribute_id", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "description", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "download_expires_at", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "download_url", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "format": "int64", "name": "end_time", "req": true, "type": "`$INTEGER`", "index$": 7 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "job_identifier", "req": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "name", "req": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "format": "int64", "name": "start_time", "req": true, "type": "`$INTEGER`", "index$": 11 }, { "active": true, "name": "status", "req": false, "type": "`$STRING`", "index$": 12 }], "id": { "field": "id", "name": "id" }, "name": "reporting_data_export", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }] }, "contract": { "id": "POST /export/reporting_data/enqueue", "json": "{\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"attribute_ids\":{\"example\":[\"conversation_id\",\"conversation_started_at\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"dataset_id\":{\"example\":\"conversation\",\"type\":\"string\"},\"end_time\":{\"example\":1717510000,\"format\":\"int64\",\"type\":\"integer\"},\"start_time\":{\"example\":1717490000,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"dataset_id\",\"attribute_ids\",\"start_time\",\"end_time\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"download_expires_at\":{\"type\":\"string\"},\"download_url\":{\"type\":\"string\"},\"job_identifier\":{\"example\":\"job1\",\"type\":\"string\"},\"status\":{\"example\":\"pending\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Job enqueued successfully\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"Empty attribute_ids\":{\"value\":{\"errors\":[{\"code\":\"bad_request\",\"message\":\"attribute_ids must contain at least one attribute_id\"}],\"request_id\":\"b68959ea-6328-4f70-83cb-e7913dba1542\",\"type\":\"error.list\"}},\"Invalid attribute_ids\":{\"value\":{\"errors\":[{\"code\":\"bad_request\",\"message\":\"attribute_ids invalid for conversation dataset: non_existent\"}],\"request_id\":\"b68959ea-6328-4f70-83cb-e7913dba1542\",\"type\":\"error.list\"}},\"Invalid dataset_id\":{\"value\":{\"errors\":[{\"code\":\"bad_request\",\"message\":\"imaginary is not a valid dataset_id\"}],\"request_id\":\"b68959ea-6328-4f70-83cb-e7913dba1542\",\"type\":\"error.list\"}},\"No attribute_ids\":{\"value\":{\"errors\":[{\"code\":\"bad_request\",\"message\":\"'attribute_ids' is a required parameter\"}],\"request_id\":\"b68959ea-6328-4f70-83cb-e7913dba1542\",\"type\":\"error.list\"}},\"No dataset_id\":{\"value\":{\"errors\":[{\"code\":\"bad_request\",\"message\":\"'dataset_id' is a required parameter\"}],\"request_id\":\"b68959ea-6328-4f70-83cb-e7913dba1542\",\"type\":\"error.list\"}},\"Non array attribute_ids\":{\"value\":{\"errors\":[{\"code\":\"bad_request\",\"message\":\"'attribute_ids' not an array must be of type Array\"}],\"request_id\":\"b68959ea-6328-4f70-83cb-e7913dba1542\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Bad request (e.g. validation errors)\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"b68959ea-6328-4f70-83cb-e7913dba1542\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"429\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"rate_limit_exceeded\",\"message\":\"Exceeded rate limit of 5 pending reporting dataset export jobs\"}],\"request_id\":\"b68959ea-6328-4f70-83cb-e7913dba1542\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Too many jobs in progress\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/export/reporting_data/enqueue", "segments": [{ "lit": "export" }, { "lit": "reporting_data" }, { "lit": "enqueue" }], "select": { "exist": ["intercom_version"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }] }, "contract": { "id": "GET /export/reporting_data/get_datasets", "json": "{\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"attributes\":{\"items\":{\"properties\":{\"id\":{\"description\":\"The simple attribute identifier. Note that this may be ambiguous if the same name exists across different attribute types. Use qualified_id when calling the enqueue endpoint.\",\"example\":\"conversation_id\",\"type\":\"string\"},\"name\":{\"example\":\"Conversation ID\",\"type\":\"string\"},\"qualified_id\":{\"description\":\"A namespaced identifier that uniquely identifies the attribute across all types. Format is \\\"prefix.name\\\" (e.g., \\\"people.Brand\\\", \\\"conversation.Brand\\\"). Required when calling the enqueue endpoint.\",\"example\":\"conversation.conversation_id\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"default_time_attribute_id\":{\"example\":\"conversation_started_at\",\"type\":\"string\"},\"description\":{\"example\":\"Conversation-level details: status, channel, assignee.\",\"type\":\"string\"},\"id\":{\"example\":\"conversation\",\"type\":\"string\"},\"name\":{\"example\":\"Conversation\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"example\":\"list\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"List of datasets\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/export/reporting_data/get_datasets", "segments": [{ "lit": "export" }, { "lit": "reporting_data" }, { "lit": "get_datasets" }], "select": { "exist": ["intercom_version"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "reporting_data_export", "name__orig": "reporting_data_export", "Name": "ReportingDataExport", "name_": "reporting_data_export", "name-": "reporting-data-export", "NAME": "REPORTING_DATA_EXPORT", "index$": 71 }, { "active": true, "entity": "reporting_data_export", "key$": "BasicReportingDataExportFlow", "kind": "basic", "name": "BasicReportingDataExportFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "reporting_data_export_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "reporting_data_export_ref01" } }], "index$": 1 }] }, 'ReportingDataExport');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const reporting_data_export_ref01_ent = client.ReportingDataExport();
        let reporting_data_export_ref01_data = setup.data.new.reporting_data_export['reporting_data_export_ref01'];
        reporting_data_export_ref01_data = (await reporting_data_export_ref01_ent.create(reporting_data_export_ref01_data)).data();
        (0, node_assert_1.default)(null != reporting_data_export_ref01_data.id);
        // LIST
        const reporting_data_export_ref01_match = {};
        const reporting_data_export_ref01_list = (await reporting_data_export_ref01_ent.list(reporting_data_export_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(reporting_data_export_ref01_list, { id: reporting_data_export_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/reporting_data_export/ReportingDataExportTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['reporting_data_export01', 'reporting_data_export02', 'reporting_data_export03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_REPORTING_DATA_EXPORT_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_REPORTING_DATA_EXPORT_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_REPORTING_DATA_EXPORT_ENTID'];
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
//# sourceMappingURL=ReportingDataExportEntity.test.js.map