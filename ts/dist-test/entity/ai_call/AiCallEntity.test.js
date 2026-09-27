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
(0, node_test_1.describe)('AiCallEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.AiCall();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ai_call.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "app_id": { "a": true, "h": "App Id", "n": "app_id", "r": false, "sh": "The workspace identifier", "t": "`$INTEGER`", "key$": "app_id", "index$": 0 }, "call_id": { "a": true, "h": "Call Id", "n": "call_id", "r": true, "sh": "External call identifier from the call provider", "t": "`$STRING`", "key$": "call_id", "index$": 1 }, "call_summary": { "a": true, "h": "Call Summary", "n": "call_summary", "r": false, "sh": "Summary of the call conversation, truncated to 256 characters.", "t": "`$STRING`", "key$": "call_summary", "index$": 2 }, "call_transcript": { "a": true, "h": "Call Transcript", "n": "call_transcript", "r": false, "sh": "Array of transcript entries for the call", "t": "`$ARRAY`", "key$": "call_transcript", "index$": 3 }, "data": { "a": true, "h": "Data", "n": "data", "r": false, "sh": "Additional metadata about the call", "t": "`$OBJECT`", "key$": "data", "index$": 4 }, "external_call_id": { "a": true, "h": "External Call Id", "n": "external_call_id", "r": false, "sh": "The external call identifier from the call provider", "t": "`$STRING`", "key$": "external_call_id", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The unique identifier for the external reference", "t": "`$INTEGER`", "key$": "id", "index$": 6 }, "intent": { "a": true, "h": "Intent", "n": "intent", "r": false, "sh": "Array of intent classifications for the call", "t": "`$ARRAY`", "key$": "intent", "index$": 7 }, "intercom_call_id": { "a": true, "h": "Intercom Call Id", "n": "intercom_call_id", "r": false, "sh": "The Intercom call identifier, if the call has been matched", "t": "`$STRING`", "key$": "intercom_call_id", "index$": 8 }, "intercom_conversation_id": { "a": true, "h": "Intercom Conversation Id", "n": "intercom_conversation_id", "r": false, "sh": "The Intercom conversation identifier, if a conversation has been created", "t": "`$STRING`", "key$": "intercom_conversation_id", "index$": 9 }, "phone_number": { "a": true, "h": "Phone Number", "n": "phone_number", "r": true, "sh": "Phone number in E.164 format for the call", "t": "`$STRING`", "key$": "phone_number", "index$": 10 }, "source": { "a": true, "h": "Source", "n": "source", "r": false, "sh": "Source of the call.", "t": "`$STRING`", "key$": "source", "index$": 11 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "Status of the call.", "t": "`$STRING`", "key$": "status", "index$": 12 }, "user_phone_number": { "a": true, "h": "User Phone Number", "n": "user_phone_number", "r": false, "sh": "Phone number in E.164 format for the call", "t": "`$STRING`", "key$": "user_phone_number", "index$": 13 } }, "id": { "field": "id", "name": "id" }, "name": "ai_call", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /fin_voice/register", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/fin_voice/register", "q": {}, "r": {}, "s": [{ "lit": "fin_voice" }, { "lit": "register" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /fin_voice/conversation/{conversation_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "conversation_id", "or": "conversation_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/fin_voice/conversation/{conversation_id}", "q": { "exist": ["conversation_id"] }, "r": {}, "s": [{ "lit": "fin_voice" }, { "lit": "conversation" }, { "var": "conversation_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /fin_voice/external_id/{external_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "external_id", "or": "external_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/fin_voice/external_id/{external_id}", "q": { "exist": ["external_id"] }, "r": {}, "s": [{ "lit": "fin_voice" }, { "lit": "external_id" }, { "var": "external_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /fin_voice/collect/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/fin_voice/collect/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "fin_voice" }, { "lit": "collect" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.conversation"]] }, "key$": "ai_call", "name__orig": "ai_call", "Name": "AiCall", "name_": "ai_call", "name-": "ai-call", "NAME": "AI_CALL", "index$": 5 }, { "active": true, "entity": "ai_call", "key$": "BasicAiCallFlow", "kind": "basic", "name": "BasicAiCallFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "ai_call_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "ai_call_ref01", "srcdatavar": "ai_call_ref01_data", "suffix": "_dt0" }, "m": { "id": "ai_call01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ai_call_ref01" } }], "index$": 1 }] }, 'AiCall', { "POST /fin_voice/register": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "title": "Register Fin Voice Call Request Payload", "type": "object", "description": "Register a Fin Voice call with Intercom", "nullable": true, "required": ["phone_number", "call_id"], "properties": { "phone_number": { "type": "string", "description": "Phone number in E.164 format for the call", "example": "+1234567890", "key$": "phone_number" }, "call_id": { "type": "string", "description": "External call identifier from the call provider", "example": "call-123-abc", "key$": "call_id" }, "source": { "type": "string", "description": "Source of the call. Can be \"five9\", \"zoom_phone\", or defaults to \"aws_connect\"", "enum": ["five9", "zoom_phone", "aws_connect"], "example": "aws_connect", "key$": "source" }, "data": { "type": "object", "description": "Additional metadata about the call", "nullable": true, "example": { "key": "value" }, "key$": "data" } }, "x-ref": "#/components/schemas/register_fin_voice_call_request", "index$": 1 } } } }, "parameters": [] }, "GET /fin_voice/conversation/{conversation_id}": { "protocol": "http", "parameters": [{ "name": "conversation_id", "in": "path", "required": true, "description": "The Intercom conversation identifier", "schema": { "type": "string" }, "index$": 0 }] }, "GET /fin_voice/external_id/{external_id}": { "protocol": "http", "parameters": [{ "name": "external_id", "in": "path", "required": true, "description": "The external call identifier from the call provider", "schema": { "type": "string" }, "index$": 0 }] }, "GET /fin_voice/collect/{id}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "required": true, "description": "The external reference ID", "schema": { "type": "integer" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const ai_call_ref01_ent = client.AiCall();
        let ai_call_ref01_data = setup.data.new.ai_call['ai_call_ref01'];
        ai_call_ref01_data = (await ai_call_ref01_ent.create(ai_call_ref01_data)).data();
        (0, node_assert_1.default)(null != ai_call_ref01_data.id);
        // LOAD
        const ai_call_ref01_match_dt0 = {};
        ai_call_ref01_match_dt0.id = ai_call_ref01_data.id;
        const ai_call_ref01_data_dt0 = (await ai_call_ref01_ent.load(ai_call_ref01_match_dt0)).data();
        (0, node_assert_1.default)(ai_call_ref01_data_dt0.id === ai_call_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ai_call/AiCallTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ai_call01', 'ai_call02', 'ai_call03', 'conversation01', 'conversation02', 'conversation03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_AI_CALL_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_AI_CALL_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_AI_CALL_ENTID'];
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
//# sourceMappingURL=AiCallEntity.test.js.map