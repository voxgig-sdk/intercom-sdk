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
(0, node_test_1.describe)('ConversationParticipantEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.ConversationParticipant();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'conversation_participant.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id" }, "name": "conversation_participant", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "123", "kind": "param", "name": "id", "orig": "conversation_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /conversations/{conversation_id}/customers", "json": "{\"operationId\":\"attachContactToConversation\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The identifier for the conversation as given by Intercom.\",\"example\":\"123\",\"in\":\"path\",\"name\":\"conversation_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"attach_a_contact_to_a_conversation\":{\"summary\":\"Attach a contact to a conversation\",\"value\":{\"admin_id\":991267731,\"customer\":{\"intercom_user_id\":\"6762f19b1bb69f9f2193bbd4\"}}},\"not_found\":{\"summary\":\"Not found\",\"value\":{\"admin_id\":991267733,\"customer\":{\"intercom_user_id\":\"6762f19e1bb69f9f2193bbd5\"}}}},\"schema\":{\"description\":\"Payload of the request to assign a conversation\",\"properties\":{\"admin_id\":{\"description\":\"The `id` of the admin who is adding the new participant.\",\"example\":\"12345\",\"type\":\"string\"},\"customer\":{\"oneOf\":[{\"properties\":{\"customer\":{\"nullable\":true,\"oneOf\":[{\"properties\":{\"intercom_user_id\":{\"description\":\"The identifier for the contact as given by Intercom.\",\"example\":\"6329bd9ffe4e2e91dac76188\",\"type\":\"string\"}},\"required\":[\"intercom_user_id\"],\"title\":\"Intercom User ID\"},{\"properties\":{\"user_id\":{\"description\":\"The external_id you have defined for the contact who is being added as a participant.\",\"example\":\"2e91dac761886329bd9ffe4e\",\"type\":\"string\"}},\"required\":[\"user_id\"],\"title\":\"User ID\"},{\"properties\":{\"email\":{\"description\":\"The email you have defined for the contact who is being added as a participant.\",\"example\":\"sam.sung@example.com\",\"type\":\"string\"}},\"required\":[\"email\"],\"title\":\"Email\"}],\"type\":\"object\"},\"intercom_user_id\":{\"description\":\"The identifier for the contact as given by Intercom.\",\"example\":\"6329bd9ffe4e2e91dac76188\",\"type\":\"string\"}},\"required\":[\"intercom_user_id\"],\"title\":\"Intercom User ID\"},{\"properties\":{\"customer\":{\"nullable\":true,\"oneOf\":{\"$ref\":\"#/requestBody/content/application~1json/schema/properties/customer/oneOf/0/properties/customer/oneOf\"},\"type\":\"object\"},\"user_id\":{\"description\":\"The external_id you have defined for the contact who is being added as a participant.\",\"example\":\"6329bd9ffe4e2e91dac76188\",\"type\":\"string\"}},\"required\":[\"user_id\"],\"title\":\"User ID\"},{\"properties\":{\"customer\":{\"nullable\":true,\"oneOf\":{\"$ref\":\"#/requestBody/content/application~1json/schema/properties/customer/oneOf/0/properties/customer/oneOf\"},\"type\":\"object\"},\"email\":{\"description\":\"The email you have defined for the contact who is being added as a participant.\",\"example\":\"winstonsmith@truth.org\",\"type\":\"string\"}},\"required\":[\"email\"],\"title\":\"Email\"}],\"type\":\"object\"}},\"title\":\"Assign Conversation Request\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Attach a contact to a conversation\":{\"value\":{\"customers\":[{\"id\":\"6762f19b1bb69f9f2193bbd4\",\"type\":\"user\"}]}}},\"schema\":{\"description\":\"The participants of the conversation, returned after attaching or detaching a contact\",\"properties\":{\"customers\":{\"description\":\"The conversation participants after the change\",\"example\":[{\"id\":\"6762f1a61bb69f9f2193bbd8\",\"type\":\"user\"}],\"items\":{\"properties\":{\"id\":{\"description\":\"The unique identifier for the participant\",\"example\":\"6762f1a61bb69f9f2193bbd8\",\"type\":\"string\"},\"type\":{\"description\":\"The role of the participant. Can be \\\"user\\\" or \\\"lead\\\"\",\"example\":\"user\",\"type\":\"string\"}},\"required\":[\"type\",\"id\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"customers\"],\"title\":\"Conversation Participants Response\",\"type\":\"object\"}}},\"description\":\"Attach a contact to a conversation\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"9dc7c1a0-b818-472c-adf6-3e327f22f541\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"examples\":{\"API plan restricted\":{\"value\":{\"errors\":[{\"code\":\"api_plan_restricted\",\"message\":\"Active subscription needed.\"}],\"request_id\":\"99f72599-ac98-4b1e-af96-808654b6383e\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"API plan restricted\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Resource Not Found\"}],\"request_id\":\"86fd8b2e-7048-4fbd-9fb0-d73085d7210b\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/conversations/{conversation_id}/customers", "rename": { "param": { "conversation_id": "id" } }, "segments": [{ "lit": "conversations" }, { "var": "id" }, { "lit": "customers" }], "select": { "$action": "customers", "exist": ["id", "intercom_version"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "123", "kind": "param", "name": "contact_id", "orig": "contact_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "123", "kind": "param", "name": "conversation_id", "orig": "conversation_id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /conversations/{conversation_id}/customers/{contact_id}", "json": "{\"operationId\":\"detachContactFromConversation\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The identifier for the conversation as given by Intercom.\",\"example\":\"123\",\"in\":\"path\",\"name\":\"conversation_id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The identifier for the contact as given by Intercom.\",\"example\":\"123\",\"in\":\"path\",\"name\":\"contact_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"contact_not_found\":{\"summary\":\"Contact not found\",\"value\":{\"admin_id\":991267745}},\"conversation_not_found\":{\"summary\":\"Conversation not found\",\"value\":{\"admin_id\":991267742}},\"detach_a_contact_from_a_group_conversation\":{\"summary\":\"Detach a contact from a group conversation\",\"value\":{\"admin_id\":991267739}},\"last_customer\":{\"summary\":\"Last customer\",\"value\":{\"admin_id\":991267748}}},\"schema\":{\"properties\":{\"admin_id\":{\"description\":\"The `id` of the admin who is performing the action.\",\"example\":\"5017690\",\"type\":\"string\"}},\"required\":[\"admin_id\"]}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Detach a contact from a group conversation\":{\"value\":{\"customers\":[{\"id\":\"6762f1b41bb69f9f2193bbe0\",\"type\":\"user\"}]}}},\"schema\":{\"description\":\"The participants of the conversation, returned after attaching or detaching a contact\",\"properties\":{\"customers\":{\"description\":\"The conversation participants after the change\",\"example\":[{\"id\":\"6762f1a61bb69f9f2193bbd8\",\"type\":\"user\"}],\"items\":{\"properties\":{\"id\":{\"description\":\"The unique identifier for the participant\",\"example\":\"6762f1a61bb69f9f2193bbd8\",\"type\":\"string\"},\"type\":{\"description\":\"The role of the participant. Can be \\\"user\\\" or \\\"lead\\\"\",\"example\":\"user\",\"type\":\"string\"}},\"required\":[\"type\",\"id\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"customers\"],\"title\":\"Conversation Participants Response\",\"type\":\"object\"}}},\"description\":\"Detach a contact from a group conversation\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"89ef64b2-d1f9-40c3-89e9-d39175d3d647\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"examples\":{\"API plan restricted\":{\"value\":{\"errors\":[{\"code\":\"api_plan_restricted\",\"message\":\"Active subscription needed.\"}],\"request_id\":\"6fe4106b-967a-46ba-b1c9-9996aff6e8c3\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"API plan restricted\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Contact not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"User Not Found\"}],\"request_id\":\"ab1b9371-3185-417f-a53a-dcae35892980\",\"type\":\"error.list\"}},\"Conversation not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Resource Not Found\"}],\"request_id\":\"89835b60-6756-4d2a-b148-26ca0cb49f9f\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Contact not found\"},\"422\":{\"content\":{\"application/json\":{\"examples\":{\"Last customer\":{\"value\":{\"errors\":[{\"code\":\"parameter_invalid\",\"message\":\"Removing the last customer is not allowed\"}],\"request_id\":\"8275e92f-66b7-40f9-82a8-9647ca8d7eb4\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Last customer\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/conversations/{conversation_id}/customers/{contact_id}", "segments": [{ "lit": "conversations" }, { "var": "conversation_id" }, { "lit": "customers" }, { "var": "contact_id" }], "select": { "exist": ["contact_id", "conversation_id", "intercom_version"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["conversation", "customer"]] }, "key$": "conversation_participant", "name__orig": "conversation_participant", "Name": "ConversationParticipant", "name_": "conversation_participant", "name-": "conversation-participant", "NAME": "CONVERSATION_PARTICIPANT", "index$": 34 }, { "active": true, "entity": "conversation_participant", "key$": "BasicConversationParticipantFlow", "kind": "basic", "name": "BasicConversationParticipantFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "conversation_participant_ref01" }, "match": { "conversation_id": "conversation01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "conversation_participant_ref01", "suffix": "_rm0" }, "match": { "conversation_id": "conversation01", "id": "conversation_participant01" }, "op": "remove", "spec": [], "valid": [], "index$": 1 }] }, 'ConversationParticipant');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const conversation_participant_ref01_ent = client.ConversationParticipant();
        let conversation_participant_ref01_data = setup.data.new.conversation_participant['conversation_participant_ref01'];
        conversation_participant_ref01_data['conversation_id'] = setup.idmap['conversation01'];
        conversation_participant_ref01_data = (await conversation_participant_ref01_ent.create(conversation_participant_ref01_data)).data();
        (0, node_assert_1.default)(null != conversation_participant_ref01_data.id);
        // REMOVE
        const conversation_participant_ref01_match_rm0 = { id: conversation_participant_ref01_data.id };
        await conversation_participant_ref01_ent.remove(conversation_participant_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/conversation_participant/ConversationParticipantTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['conversation_participant01', 'conversation_participant02', 'conversation_participant03', 'conversation01', 'conversation02', 'conversation03', 'customer01', 'customer02', 'customer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_CONVERSATION_PARTICIPANT_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_CONVERSATION_PARTICIPANT_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_CONVERSATION_PARTICIPANT_ENTID'];
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
//# sourceMappingURL=ConversationParticipantEntity.test.js.map