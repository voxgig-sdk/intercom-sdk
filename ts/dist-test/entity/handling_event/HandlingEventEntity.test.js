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
(0, node_test_1.describe)('HandlingEventEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.HandlingEvent();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'handling_event.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "reason", "req": false, "short": "Optional reason for the event (e.g., \"Paused\", \"Away\")", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "teammate", "req": true, "short": "A reference to a teammate", "type": "`$OBJECT`", "index$": 1 }, { "active": true, "format": "date-time", "name": "timestamp", "req": true, "short": "ISO8601 timestamp when the event occurred", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "type", "req": true, "short": "The type of handling event", "type": "`$STRING`", "index$": 3 }], "name": "handling_event", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "123", "kind": "param", "name": "conversation_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /conversations/{id}/handling_events", "json": "{\"operationId\":\"listHandlingEvents\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The identifier for the conversation as given by Intercom.\",\"example\":\"123\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"handling_events\":[{\"reason\":\"Paused\",\"teammate\":{\"email\":\"jane@example.com\",\"id\":123,\"name\":\"Jane Example\",\"type\":\"admin\"},\"timestamp\":\"2026-01-09T09:00:00Z\",\"type\":\"paused\"},{\"teammate\":{\"email\":\"jane@example.com\",\"id\":123,\"name\":\"Jane Example\",\"type\":\"admin\"},\"timestamp\":\"2026-01-09T09:10:00Z\",\"type\":\"resumed\"}]}}},\"schema\":{\"description\":\"A list of handling events for a conversation\",\"properties\":{\"handling_events\":{\"description\":\"Array of handling events\",\"items\":{\"description\":\"A pause or resume event for a conversation\",\"properties\":{\"reason\":{\"description\":\"Optional reason for the event (e.g., \\\"Paused\\\", \\\"Away\\\")\",\"example\":\"Paused\",\"nullable\":true,\"type\":\"string\"},\"teammate\":{\"description\":\"A reference to a teammate\",\"properties\":{\"email\":{\"description\":\"The email address of the teammate (optional for teams/bots)\",\"example\":\"jane@example.com\",\"format\":\"email\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier of the teammate\",\"example\":123,\"type\":\"integer\"},\"name\":{\"description\":\"The display name of the teammate\",\"example\":\"Jane Example\",\"type\":\"string\"},\"type\":{\"description\":\"The type of teammate\",\"enum\":[\"admin\",\"team\",\"bot\"],\"example\":\"admin\",\"type\":\"string\"}},\"required\":[\"type\",\"id\",\"name\"],\"title\":\"Teammate Reference\",\"type\":\"object\"},\"timestamp\":{\"description\":\"ISO8601 timestamp when the event occurred\",\"example\":\"2026-01-09T09:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"type\":{\"description\":\"The type of handling event\",\"enum\":[\"paused, resumed]\"],\"example\":\"paused\",\"type\":\"string\"}},\"required\":[\"teammate\",\"type\",\"timestamp\"],\"title\":\"Handling Event\",\"type\":\"object\"},\"type\":\"array\"}},\"title\":\"Handling Event List\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Conversation not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/conversations/{id}/handling_events", "rename": { "param": { "id": "conversation_id" } }, "segments": [{ "lit": "conversations" }, { "var": "conversation_id" }, { "lit": "handling_events" }], "select": { "exist": ["conversation_id", "intercom_version"] }, "transform": { "req": "`reqdata`", "res": "`body.handling_events`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["conversation"]] }, "key$": "handling_event", "name__orig": "handling_event", "Name": "HandlingEvent", "name_": "handling_event", "name-": "handling-event", "NAME": "HANDLING_EVENT", "index$": 53 }, { "active": true, "entity": "handling_event", "key$": "BasicHandlingEventFlow", "kind": "basic", "name": "BasicHandlingEventFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "conversation_id": "conversation01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "handling_event_ref01" } }], "index$": 0 }] }, 'HandlingEvent');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let handling_event_ref01_data = Object.values(setup.data.existing.handling_event)[0];
        // LIST
        const handling_event_ref01_ent = client.HandlingEvent();
        const handling_event_ref01_match = {};
        handling_event_ref01_match['conversation_id'] = setup.idmap['conversation01'];
        const handling_event_ref01_list = (await handling_event_ref01_ent.list(handling_event_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/handling_event/HandlingEventTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['handling_event01', 'handling_event02', 'handling_event03', 'conversation01', 'conversation02', 'conversation03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_HANDLING_EVENT_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_HANDLING_EVENT_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_HANDLING_EVENT_ENTID'];
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
//# sourceMappingURL=HandlingEventEntity.test.js.map