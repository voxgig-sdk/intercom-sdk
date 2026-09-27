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
(0, node_test_1.describe)('JobEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.Job();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'job.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The id of the job that's currently being processed or has completed.", "t": "`$STRING`", "key$": "id", "index$": 0 }, "resource_id": { "a": true, "h": "Resource Id", "n": "resource_id", "r": false, "sh": "The id of the resource created during job execution (e.g.", "t": "`$STRING`", "key$": "resource_id", "index$": 1 }, "resource_type": { "a": true, "h": "Resource Type", "n": "resource_type", "r": false, "sh": "The type of resource created during job execution.", "t": "`$STRING`", "key$": "resource_type", "index$": 2 }, "resource_url": { "a": true, "h": "Resource Url", "n": "resource_url", "r": false, "sh": "The url of the resource created during job exeuction.", "t": "`$STRING`", "key$": "resource_url", "index$": 3 }, "skip_notifications": { "a": true, "h": "Skip Notifications", "n": "skip_notifications", "r": false, "sh": "Option to disable notifications when a Ticket is created.", "t": "`$BOOLEAN`", "key$": "skip_notifications", "index$": 4 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "The status of the job execution.", "t": "`$STRING`", "key$": "status", "index$": 5 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "The type of the object", "t": "`$STRING`", "key$": "type", "index$": 6 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "sh": "API endpoint URL to check the job status.", "t": "`$STRING`", "key$": "url", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "job", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /tickets/enqueue", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/tickets/enqueue", "q": { "exist": ["intercom_version"] }, "r": {}, "s": [{ "lit": "tickets" }, { "lit": "enqueue" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /jobs/status/{job_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "job_id", "or": "job_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/jobs/status/{job_id}", "q": { "exist": ["intercom_version", "job_id"] }, "r": {}, "s": [{ "lit": "jobs" }, { "lit": "status" }, { "var": "job_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "job", "name__orig": "job", "Name": "Job", "name_": "job", "name-": "job", "NAME": "JOB", "index$": 58 }, { "active": true, "entity": "job", "key$": "BasicJobFlow", "kind": "basic", "name": "BasicJobFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "job_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "job_ref01", "srcdatavar": "job_ref01_data", "suffix": "_dt0" }, "m": { "id": "job01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-job_ref01" } }], "index$": 1 }] }, 'Job', { "POST /tickets/enqueue": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "allOf": [{ "description": "You can create a Ticket", "type": "object", "title": "Create Ticket Request Payload", "properties": { "ticket_type_id": { "type": "string", "description": "The ID of the type of ticket you want to create", "example": "1234" }, "contacts": { "type": "array", "description": "The list of contacts (users or leads) affected by this ticket. Currently only one is allowed", "items": { "type": "object", "oneOf": [] }, "example": [{}] }, "conversation_to_link_id": { "type": "string", "description": "The ID of the conversation you want to link to the ticket. Here are the valid ways of linking two tickets:\n - conversation | back-office ticket\n - customer tickets | non-shared back-office ticket\n - conversation | tracker ticket\n - customer ticket | tracker ticket", "example": "1234" }, "company_id": { "type": "string", "description": "The ID of the company that the ticket is associated with. The unique identifier for the company which is given by Intercom", "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632" }, "created_at": { "type": "integer", "description": "The time the ticket was created. If not provided, the current time will be used.", "example": 1590000000 }, "ticket_attributes": { "title": "Ticket Attributes", "type": "object", "description": "The attributes set on the ticket. When setting the default title and description attributes, the attribute keys that should be used are `_default_title_` and `_default_description_`. When setting ticket type attributes of the list attribute type, the key should be the attribute name and the value of the attribute should be the list item id, obtainable by [listing the ticket type](ref:get_ticket-types). For example, if the ticket type has an attribute called `priority` of type `list`, the key should be `priority` and the value of the attribute should be the guid of the list item (e.g. `de1825a0-0164-4070-8ca6-13e22462fa7e`).", "additionalProperties": { "anyOf": [] }, "example": { "_default_title_": "Found a bug", "_default_description_": "The button is not working" }, "x-ref": "#/components/schemas/ticket_request_custom_attributes" }, "assignment": { "type": "object", "properties": { "admin_assignee_id": {}, "team_assignee_id": {} } } }, "required": ["ticket_type_id", "contacts"], "x-ref": "#/components/schemas/create_ticket_request" }], "properties": { "skip_notifications": { "type": "boolean", "description": "Option to disable notifications when a Ticket is created.", "example": true, "key$": "skip_notifications" } }, "index$": 1 }, "examples": { "successful_response": { "summary": "Successful response", "value": { "ticket_type_id": 88, "contacts": [{ "id": "6762f2d81bb69f9f2193bc54" }], "ticket_attributes": { "_default_title_": "example", "_default_description_": "there is a problem" } } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }] }, "GET /jobs/status/{job_id}": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "job_id", "in": "path", "required": true, "description": "The unique identifier for the job which is given by Intercom", "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const job_ref01_ent = client.Job();
        let job_ref01_data = setup.data.new.job['job_ref01'];
        job_ref01_data = (await job_ref01_ent.create(job_ref01_data)).data();
        (0, node_assert_1.default)(null != job_ref01_data.id);
        // LOAD
        const job_ref01_match_dt0 = {};
        job_ref01_match_dt0.id = job_ref01_data.id;
        const job_ref01_data_dt0 = (await job_ref01_ent.load(job_ref01_match_dt0)).data();
        (0, node_assert_1.default)(job_ref01_data_dt0.id === job_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/job/JobTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['job01', 'job02', 'job03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_JOB_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_JOB_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_JOB_ENTID'];
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
//# sourceMappingURL=JobEntity.test.js.map