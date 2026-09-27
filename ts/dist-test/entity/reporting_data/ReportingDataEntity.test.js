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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "download_expires_at": { "a": true, "h": "Download Expires At", "n": "download_expires_at", "r": false, "t": "`$STRING`", "key$": "download_expires_at", "index$": 0 }, "download_url": { "a": true, "h": "Download Url", "n": "download_url", "r": false, "t": "`$STRING`", "key$": "download_url", "index$": 1 }, "job_identifier": { "a": true, "h": "Job Identifier", "n": "job_identifier", "r": false, "t": "`$STRING`", "key$": "job_identifier", "index$": 2 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 3 } }, "name": "reporting_data", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /download/reporting_data/{job_identifier}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "application/octet-stream", "k": "header", "n": "accept", "or": "accept", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "app_id", "or": "app_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "job_identifier", "or": "job_identifier", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/download/reporting_data/{job_identifier}", "q": { "exist": ["accept", "app_id", "intercom_version", "job_identifier"] }, "r": { "param": { "job_identifier": "id" } }, "s": [{ "lit": "download" }, { "lit": "reporting_data" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /export/reporting_data/{job_identifier}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "app_id", "or": "app_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "client_id", "or": "client_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "job_identifier", "or": "job_identifier", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/export/reporting_data/{job_identifier}", "q": { "exist": ["app_id", "client_id", "intercom_version", "job_identifier"] }, "r": { "param": { "job_identifier": "id" } }, "s": [{ "lit": "export" }, { "lit": "reporting_data" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "reporting_data", "name__orig": "reporting_data", "Name": "ReportingData", "name_": "reporting_data", "name-": "reporting-data", "NAME": "REPORTING_DATA", "index$": 70 }, { "active": true, "entity": "reporting_data", "key$": "BasicReportingDataFlow", "kind": "basic", "name": "BasicReportingDataFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "reporting_data_ref01", "srcdatavar": "reporting_data_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-reporting_data_ref01" } }], "index$": 0 }] }, 'ReportingData', { "GET /download/reporting_data/{job_identifier}": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "Accept", "in": "header", "required": true, "schema": { "type": "string", "example": "application/octet-stream", "enum": ["application/octet-stream"] }, "description": "Required header for downloading the export file", "index$": 1 }, { "name": "app_id", "in": "query", "required": true, "schema": { "type": "string" }, "index$": 2 }, { "name": "job_identifier", "in": "query", "required": true, "schema": { "type": "string" }, "index$": 3 }] }, "GET /export/reporting_data/{job_identifier}": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "app_id", "in": "query", "description": "The Intercom defined code of the workspace the company is associated to.", "required": true, "schema": { "type": "string" }, "index$": 1 }, { "name": "client_id", "in": "query", "required": true, "schema": { "type": "string" }, "index$": 2 }, { "name": "job_identifier", "description": "Unique identifier of the job.", "in": "query", "required": true, "schema": { "type": "string" }, "index$": 3 }] } });
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