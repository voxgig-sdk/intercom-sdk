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
(0, node_test_1.describe)('ReportingDataEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.ReportingData();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'reporting_data.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "download_expires_at", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "download_url", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "job_identifier", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "status", "req": false, "type": "`$STRING`", "index$": 3 }], "name": "reporting_data", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "application/octet-stream", "kind": "header", "name": "accept", "orig": "accept", "reqd": true, "type": "`$STRING`" }, { "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }], "query": [{ "active": true, "kind": "query", "name": "app_id", "orig": "app_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "job_identifier", "orig": "job_identifier", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /download/reporting_data/{job_identifier}", "json": "{\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"Required header for downloading the export file\",\"in\":\"header\",\"name\":\"Accept\",\"required\":true,\"schema\":{\"enum\":[\"application/octet-stream\"],\"example\":\"application/octet-stream\",\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"app_id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"job_identifier\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Export file downloaded\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Export job not found for identifier: job1\"}],\"request_id\":\"b68959ea-6328-4f70-83cb-e7913dba1542\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"When job not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/download/reporting_data/{job_identifier}", "rename": { "param": { "job_identifier": "id" } }, "segments": [{ "lit": "download" }, { "lit": "reporting_data" }, { "var": "id" }], "select": { "exist": ["accept", "app_id", "intercom_version", "job_identifier"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }], "query": [{ "active": true, "kind": "query", "name": "app_id", "orig": "app_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "client_id", "orig": "client_id", "reqd": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "job_identifier", "orig": "job_identifier", "reqd": true, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /export/reporting_data/{job_identifier}", "json": "{\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The Intercom defined code of the workspace the company is associated to.\",\"in\":\"query\",\"name\":\"app_id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"client_id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Unique identifier of the job.\",\"in\":\"query\",\"name\":\"job_identifier\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"With complete status\":{\"value\":{\"download_expires_at\":\"\",\"download_url\":\"\",\"job_identifier\":\"job1\",\"status\":\"complete\"}},\"With failed status\":{\"value\":{\"download_expires_at\":\"\",\"download_url\":\"\",\"job_identifier\":\"job1\",\"status\":\"failed\"}}},\"schema\":{\"properties\":{\"download_expires_at\":{\"type\":\"string\"},\"download_url\":{\"type\":\"string\"},\"job_identifier\":{\"type\":\"string\"},\"status\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Job status returned successfully\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Export job not found for identifier: job1\"}],\"request_id\":\"b68959ea-6328-4f70-83cb-e7913dba1542\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"When job not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/export/reporting_data/{job_identifier}", "rename": { "param": { "job_identifier": "id" } }, "segments": [{ "lit": "export" }, { "lit": "reporting_data" }, { "var": "id" }], "select": { "exist": ["app_id", "client_id", "intercom_version", "job_identifier"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "reporting_data", "name__orig": "reporting_data", "Name": "ReportingData", "name_": "reporting_data", "name-": "reporting-data", "NAME": "REPORTING_DATA", "index$": 70 }, { "active": true, "entity": "reporting_data", "key$": "BasicReportingDataFlow", "kind": "basic", "name": "BasicReportingDataFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "reporting_data_ref01", "srcdatavar": "reporting_data_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-reporting_data_ref01" } }], "index$": 0 }] }, 'ReportingData');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let reporting_data_ref01_data = Object.values(setup.data.existing.reporting_data)[0];
        // LOAD
        const reporting_data_ref01_ent = client.ReportingData();
        const reporting_data_ref01_match_dt0 = {};
        const reporting_data_ref01_data_dt0 = (await reporting_data_ref01_ent.load(reporting_data_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != reporting_data_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/reporting_data/ReportingDataTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['reporting_data01', 'reporting_data02', 'reporting_data03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_REPORTING_DATA_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_REPORTING_DATA_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_REPORTING_DATA_ENTID'];
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
//# sourceMappingURL=ReportingDataEntity.test.js.map