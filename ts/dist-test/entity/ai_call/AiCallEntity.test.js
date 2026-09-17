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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "app_id", "req": false, "short": "The workspace identifier", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "call_id", "req": true, "short": "External call identifier from the call provider", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "call_summary", "req": false, "short": "Summary of the call conversation, truncated to 256 characters.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "call_transcript", "req": false, "short": "Array of transcript entries for the call", "type": "`$ARRAY`", "index$": 3 }, { "active": true, "name": "data", "req": false, "short": "Additional metadata about the call", "type": "`$OBJECT`", "index$": 4 }, { "active": true, "name": "external_call_id", "req": false, "short": "The external call identifier from the call provider", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "id", "req": false, "short": "The unique identifier for the external reference", "type": "`$INTEGER`", "index$": 6 }, { "active": true, "name": "intent", "req": false, "short": "Array of intent classifications for the call", "type": "`$ARRAY`", "index$": 7 }, { "active": true, "name": "intercom_call_id", "req": false, "short": "The Intercom call identifier, if the call has been matched", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "intercom_conversation_id", "req": false, "short": "The Intercom conversation identifier, if a conversation has been created", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "phone_number", "req": true, "short": "Phone number in E.164 format for the call", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "source", "req": false, "short": "Source of the call.", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "status", "req": false, "short": "Status of the call.", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "user_phone_number", "req": false, "short": "Phone number in E.164 format for the call", "type": "`$STRING`", "index$": 13 }], "id": { "field": "id", "name": "id" }, "name": "ai_call", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /fin_voice/register", "json": "{\"operationId\":\"registerFinVoiceCall\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Register a Fin Voice call with Intercom\",\"nullable\":true,\"properties\":{\"call_id\":{\"description\":\"External call identifier from the call provider\",\"example\":\"call-123-abc\",\"type\":\"string\"},\"data\":{\"description\":\"Additional metadata about the call\",\"example\":{\"key\":\"value\"},\"nullable\":true,\"type\":\"object\"},\"phone_number\":{\"description\":\"Phone number in E.164 format for the call\",\"example\":\"+1234567890\",\"type\":\"string\"},\"source\":{\"description\":\"Source of the call. Can be \\\"five9\\\", \\\"zoom_phone\\\", or defaults to \\\"aws_connect\\\"\",\"enum\":[\"five9\",\"zoom_phone\",\"aws_connect\"],\"example\":\"aws_connect\",\"type\":\"string\"}},\"required\":[\"phone_number\",\"call_id\"],\"title\":\"Register Fin Voice Call Request Payload\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Response containing information about a Fin Voice call\",\"properties\":{\"app_id\":{\"description\":\"The workspace identifier\",\"example\":12345,\"type\":\"integer\"},\"call_summary\":{\"description\":\"Summary of the call conversation, truncated to 256 characters. Empty string if no summary available.\",\"example\":\"Customer called about billing issue...\",\"type\":\"string\"},\"call_transcript\":{\"description\":\"Array of transcript entries for the call\",\"example\":[],\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"external_call_id\":{\"description\":\"The external call identifier from the call provider\",\"example\":\"call-123-abc\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the external reference\",\"example\":12345,\"type\":\"integer\"},\"intent\":{\"description\":\"Array of intent classifications for the call\",\"example\":[],\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"intercom_call_id\":{\"description\":\"The Intercom call identifier, if the call has been matched\",\"example\":\"1234\",\"nullable\":true,\"type\":\"string\"},\"intercom_conversation_id\":{\"description\":\"The Intercom conversation identifier, if a conversation has been created\",\"example\":\"5678\",\"nullable\":true,\"type\":\"string\"},\"status\":{\"description\":\"Status of the call. Can be \\\"registered\\\", \\\"in-progress\\\", or a resolution state\",\"example\":\"registered\",\"type\":\"string\"},\"user_phone_number\":{\"description\":\"Phone number in E.164 format for the call\",\"example\":\"+1234567890\",\"type\":\"string\"}},\"title\":\"AI Call Response\",\"type\":\"object\"}}},\"description\":\"successful\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"bad request - missing phone_number or call_id\"},\"409\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"conflict - duplicate call registration\"},\"default\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unexpected error\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/fin_voice/register", "segments": [{ "lit": "fin_voice" }, { "lit": "register" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "conversation_id", "orig": "conversation_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /fin_voice/conversation/{conversation_id}", "json": "{\"operationId\":\"collectFinVoiceCallsByConversationId\",\"parameters\":[{\"description\":\"The Intercom conversation identifier\",\"in\":\"path\",\"name\":\"conversation_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"description\":\"Response containing information about a Fin Voice call\",\"properties\":{\"app_id\":{\"description\":\"The workspace identifier\",\"example\":12345,\"type\":\"integer\"},\"call_summary\":{\"description\":\"Summary of the call conversation, truncated to 256 characters. Empty string if no summary available.\",\"example\":\"Customer called about billing issue...\",\"type\":\"string\"},\"call_transcript\":{\"description\":\"Array of transcript entries for the call\",\"example\":[],\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"external_call_id\":{\"description\":\"The external call identifier from the call provider\",\"example\":\"call-123-abc\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the external reference\",\"example\":12345,\"type\":\"integer\"},\"intent\":{\"description\":\"Array of intent classifications for the call\",\"example\":[],\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"intercom_call_id\":{\"description\":\"The Intercom call identifier, if the call has been matched\",\"example\":\"1234\",\"nullable\":true,\"type\":\"string\"},\"intercom_conversation_id\":{\"description\":\"The Intercom conversation identifier, if a conversation has been created\",\"example\":\"5678\",\"nullable\":true,\"type\":\"string\"},\"status\":{\"description\":\"Status of the call. Can be \\\"registered\\\", \\\"in-progress\\\", or a resolution state\",\"example\":\"registered\",\"type\":\"string\"},\"user_phone_number\":{\"description\":\"Phone number in E.164 format for the call\",\"example\":\"+1234567890\",\"type\":\"string\"}},\"title\":\"AI Call Response\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"successful\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"default\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unexpected error\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/fin_voice/conversation/{conversation_id}", "segments": [{ "lit": "fin_voice" }, { "lit": "conversation" }, { "var": "conversation_id" }], "select": { "exist": ["conversation_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "external_id", "orig": "external_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /fin_voice/external_id/{external_id}", "json": "{\"operationId\":\"collectFinVoiceCallByExternalId\",\"parameters\":[{\"description\":\"The external call identifier from the call provider\",\"in\":\"path\",\"name\":\"external_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Response containing information about a Fin Voice call\",\"properties\":{\"app_id\":{\"description\":\"The workspace identifier\",\"example\":12345,\"type\":\"integer\"},\"call_summary\":{\"description\":\"Summary of the call conversation, truncated to 256 characters. Empty string if no summary available.\",\"example\":\"Customer called about billing issue...\",\"type\":\"string\"},\"call_transcript\":{\"description\":\"Array of transcript entries for the call\",\"example\":[],\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"external_call_id\":{\"description\":\"The external call identifier from the call provider\",\"example\":\"call-123-abc\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the external reference\",\"example\":12345,\"type\":\"integer\"},\"intent\":{\"description\":\"Array of intent classifications for the call\",\"example\":[],\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"intercom_call_id\":{\"description\":\"The Intercom call identifier, if the call has been matched\",\"example\":\"1234\",\"nullable\":true,\"type\":\"string\"},\"intercom_conversation_id\":{\"description\":\"The Intercom conversation identifier, if a conversation has been created\",\"example\":\"5678\",\"nullable\":true,\"type\":\"string\"},\"status\":{\"description\":\"Status of the call. Can be \\\"registered\\\", \\\"in-progress\\\", or a resolution state\",\"example\":\"registered\",\"type\":\"string\"},\"user_phone_number\":{\"description\":\"Phone number in E.164 format for the call\",\"example\":\"+1234567890\",\"type\":\"string\"}},\"title\":\"AI Call Response\",\"type\":\"object\"}}},\"description\":\"successful\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"not found - external reference not found or not matched\"},\"default\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/404/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/404/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unexpected error\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/fin_voice/external_id/{external_id}", "segments": [{ "lit": "fin_voice" }, { "lit": "external_id" }, { "var": "external_id" }], "select": { "exist": ["external_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /fin_voice/collect/{id}", "json": "{\"operationId\":\"collectFinVoiceCallById\",\"parameters\":[{\"description\":\"The external reference ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Response containing information about a Fin Voice call\",\"properties\":{\"app_id\":{\"description\":\"The workspace identifier\",\"example\":12345,\"type\":\"integer\"},\"call_summary\":{\"description\":\"Summary of the call conversation, truncated to 256 characters. Empty string if no summary available.\",\"example\":\"Customer called about billing issue...\",\"type\":\"string\"},\"call_transcript\":{\"description\":\"Array of transcript entries for the call\",\"example\":[],\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"external_call_id\":{\"description\":\"The external call identifier from the call provider\",\"example\":\"call-123-abc\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the external reference\",\"example\":12345,\"type\":\"integer\"},\"intent\":{\"description\":\"Array of intent classifications for the call\",\"example\":[],\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"intercom_call_id\":{\"description\":\"The Intercom call identifier, if the call has been matched\",\"example\":\"1234\",\"nullable\":true,\"type\":\"string\"},\"intercom_conversation_id\":{\"description\":\"The Intercom conversation identifier, if a conversation has been created\",\"example\":\"5678\",\"nullable\":true,\"type\":\"string\"},\"status\":{\"description\":\"Status of the call. Can be \\\"registered\\\", \\\"in-progress\\\", or a resolution state\",\"example\":\"registered\",\"type\":\"string\"},\"user_phone_number\":{\"description\":\"Phone number in E.164 format for the call\",\"example\":\"+1234567890\",\"type\":\"string\"}},\"title\":\"AI Call Response\",\"type\":\"object\"}}},\"description\":\"successful\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"not found - external reference not found or not matched\"},\"default\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/404/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/404/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unexpected error\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/fin_voice/collect/{id}", "segments": [{ "lit": "fin_voice" }, { "lit": "collect" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "load" } }, "relations": { "ancestors": [["conversation"], ["external_id"]] }, "key$": "ai_call", "name__orig": "ai_call", "Name": "AiCall", "name_": "ai_call", "name-": "ai-call", "NAME": "AI_CALL", "index$": 5 }, { "active": true, "entity": "ai_call", "key$": "BasicAiCallFlow", "kind": "basic", "name": "BasicAiCallFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "ai_call_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "ai_call_ref01", "srcdatavar": "ai_call_ref01_data", "suffix": "_dt0" }, "match": { "id": "ai_call01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ai_call_ref01" } }], "index$": 1 }] }, 'AiCall');
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
    let idmap = transform(['ai_call01', 'ai_call02', 'ai_call03', 'conversation01', 'conversation02', 'conversation03', 'external_id01', 'external_id02', 'external_id03'], {
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