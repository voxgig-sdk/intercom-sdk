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
(0, node_test_1.describe)('MessageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.Message();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'message.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "bcc", "req": false, "type": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "index$": 0 }, { "active": true, "name": "body", "op": { "create": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "The message body, which may contain HTML.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "cc", "req": false, "type": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "index$": 2 }, { "active": true, "name": "conversation_id", "req": false, "short": "The associated conversation_id", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "create_conversation_without_contact_reply", "req": false, "short": "Whether a conversation should be opened in the inbox for the message without the contact replying.", "type": "`$BOOLEAN`", "index$": 4 }, { "active": true, "format": "date-time", "name": "created_at", "op": { "create": { "req": false, "type": "`$INTEGER`" } }, "req": true, "short": "The time the conversation was created.", "type": "`$INTEGER`", "index$": 5 }, { "active": true, "name": "from", "req": true, "short": "The sender of the message.", "type": "`$OBJECT`", "index$": 6 }, { "active": true, "name": "id", "req": true, "short": "The id representing the message.", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "message_type", "op": { "create": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "The type of message that was sent.", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "subject", "req": false, "short": "The subject of the message.", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "template", "req": false, "short": "The style of the outgoing message.", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "to", "req": false, "type": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "index$": 11 }, { "active": true, "name": "type", "req": true, "short": "The type of the message", "type": "`$STRING`", "index$": 12 }], "id": { "field": "id", "name": "id" }, "name": "message", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }] }, "contract": { "id": "POST /messages", "json": "{\"operationId\":\"createMessage\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"admin_message_created\":{\"summary\":\"admin message created\",\"value\":{\"bcc\":[{\"id\":\"6762f23e1bb69f9f2193bc2f\",\"type\":\"user\"}],\"body\":\"heyy\",\"cc\":[{\"id\":\"6762f23e1bb69f9f2193bc1d\",\"type\":\"user\"},{\"id\":\"6762f23f1bb69f9f2193bc1e\",\"type\":\"user\"}],\"from\":{\"id\":\"991267816\",\"type\":\"admin\"},\"message_type\":\"conversation\",\"to\":[{\"id\":\"6762f2391bb69f9f2193bc19\",\"type\":\"user\"},{\"id\":\"6762f23c1bb69f9f2193bc1b\",\"type\":\"lead\"},{\"id\":\"6762f23d1bb69f9f2193bc1c\",\"type\":\"user\"}]}},\"admin_whatsapp_message_created\":{\"summary\":\"admin whatsapp message created\",\"value\":{\"components\":[{\"parameters\":[{\"text\":\"Username 123\",\"type\":\"text\"}],\"type\":\"BODY\"}],\"from\":{\"id\":\"991267817\",\"type\":\"admin\"},\"locale\":\"en\",\"message_type\":\"whatsapp\",\"template\":\"keep_live\",\"to\":{\"name\":\"John Doe\",\"phone\":5547999998888}}},\"lead_message_created\":{\"summary\":\"lead message created\",\"value\":{\"body\":\"heyy\",\"from\":{\"id\":\"6762f2371bb69f9f2193bc18\",\"type\":\"lead\"},\"referer\":\"https://twitter.com/bob\"}},\"no_body_supplied_for_email_message\":{\"summary\":\"No body supplied for email message\",\"value\":{\"body\":null,\"from\":{\"id\":\"991267820\",\"type\":\"admin\"},\"message_type\":\"email\",\"subject\":\"heyy\",\"to\":{\"id\":\"6762f23d1bb69f9f2193bc1c\",\"type\":\"user\"}}},\"no_body_supplied_for_message\":{\"summary\":\"No body supplied for message\",\"value\":{\"body\":null,\"from\":{\"id\":\"991267818\",\"type\":\"admin\"},\"message_type\":\"inapp\",\"subject\":\"heyy\",\"to\":{\"id\":\"6762f23b1bb69f9f2193bc1a\",\"type\":\"user\"}}},\"no_subject_supplied_for_email_message\":{\"summary\":\"No subject supplied for email message\",\"value\":{\"body\":\"hey there\",\"from\":{\"id\":\"991267819\",\"type\":\"admin\"},\"message_type\":\"email\",\"to\":{\"type\":\"user\",\"user_id\":\"70\"}}},\"user_message_created\":{\"summary\":\"user message created\",\"value\":{\"body\":\"heyy\",\"from\":{\"id\":\"6762f2341bb69f9f2193bc17\",\"type\":\"user\"},\"referer\":\"https://twitter.com/bob\"}}},\"schema\":{\"anyOf\":[{\"required\":[\"message_type\",\"subject\",\"body\",\"template\",\"from\",\"to\"],\"title\":\"message_type: `email`.\"},{\"required\":[\"message_type\",\"body\",\"from\",\"to\"],\"title\":\"message_type: `inapp`.\"},{\"required\":[\"message_type\",\"template\",\"components\",\"from\",\"to\"],\"title\":\"message_type: `whatsapp`.\"}],\"description\":\"You can create a message\",\"nullable\":true,\"properties\":{\"bcc\":{\"oneOf\":[{\"description\":\"A recipient of a message\",\"properties\":{\"id\":{\"description\":\"The identifier for the contact which is given by Intercom.\",\"example\":\"536e564f316c83104c000020\",\"type\":\"string\"},\"type\":{\"description\":\"The role associated to the contact - `user` or `lead`.\",\"enum\":[\"user\",\"lead\"],\"example\":\"user\",\"type\":\"string\"}},\"required\":[\"type\",\"id\"],\"title\":\"Recipient\",\"type\":\"object\"},{\"description\":\"The BCC recipients of the message.\",\"example\":[{\"id\":\"536e564f316c83104c000022\",\"type\":\"user\"}],\"items\":{\"description\":\"A recipient of a message\",\"properties\":{\"$ref\":\"#/requestBody/content/application~1json/schema/properties/bcc/oneOf/0/properties\"},\"required\":{\"$ref\":\"#/requestBody/content/application~1json/schema/properties/bcc/oneOf/0/required\"},\"title\":\"Recipient\",\"type\":\"object\"},\"type\":\"array\"}]},\"body\":{\"description\":\"The content of the message. HTML and plaintext are supported.\",\"example\":\"Hello there\",\"type\":\"string\"},\"cc\":{\"oneOf\":[{\"description\":\"A recipient of a message\",\"properties\":{\"$ref\":\"#/requestBody/content/application~1json/schema/properties/bcc/oneOf/0/properties\"},\"required\":{\"$ref\":\"#/requestBody/content/application~1json/schema/properties/bcc/oneOf/0/required\"},\"title\":\"Recipient\",\"type\":\"object\"},{\"description\":\"The CC recipients of the message.\",\"example\":[{\"id\":\"536e564f316c83104c000023\",\"type\":\"user\"}],\"items\":{\"description\":\"A recipient of a message\",\"properties\":{\"$ref\":\"#/requestBody/content/application~1json/schema/properties/bcc/oneOf/0/properties\"},\"required\":{\"$ref\":\"#/requestBody/content/application~1json/schema/properties/bcc/oneOf/0/required\"},\"title\":\"Recipient\",\"type\":\"object\"},\"type\":\"array\"}]},\"create_conversation_without_contact_reply\":{\"default\":false,\"description\":\"Whether a conversation should be opened in the inbox for the message without the contact replying. Defaults to false if not provided.\",\"example\":true,\"type\":\"boolean\"},\"created_at\":{\"description\":\"The time the message was created. If not provided, the current time will be used.\",\"example\":1590000000,\"type\":\"integer\"},\"from\":{\"description\":\"The sender of the message. If not provided, the default sender will be used.\",\"properties\":{\"id\":{\"description\":\"The identifier for the admin which is given by Intercom.\",\"example\":394051,\"type\":\"integer\"},\"type\":{\"description\":\"Always `admin`.\",\"enum\":[\"admin\"],\"example\":\"admin\",\"type\":\"string\"}},\"required\":[\"type\",\"id\"],\"type\":\"object\"},\"message_type\":{\"description\":\"The kind of message being created. Values: `in_app`, `email` or `whatsapp`.\",\"enum\":[\"in_app\",\"email\",\"whatsapp\"],\"example\":\"in_app\",\"type\":\"string\"},\"subject\":{\"description\":\"The title of the email.\",\"example\":\"Thanks for everything\",\"type\":\"string\"},\"template\":{\"description\":\"The style of the outgoing message. Possible values `plain` or `personal`.\",\"example\":\"plain\",\"type\":\"string\"},\"to\":{\"oneOf\":[{\"description\":\"A recipient of a message\",\"properties\":{\"$ref\":\"#/requestBody/content/application~1json/schema/properties/bcc/oneOf/0/properties\"},\"required\":{\"$ref\":\"#/requestBody/content/application~1json/schema/properties/bcc/oneOf/0/required\"},\"title\":\"Recipient\",\"type\":\"object\"},{\"description\":\"The recipients of the message.\",\"example\":[{\"id\":\"536e564f316c83104c000020\",\"type\":\"user\"},{\"id\":\"536e564f316c83104c000021\",\"type\":\"lead\"}],\"items\":{\"description\":\"A recipient of a message\",\"properties\":{\"$ref\":\"#/requestBody/content/application~1json/schema/properties/bcc/oneOf/0/properties\"},\"required\":{\"$ref\":\"#/requestBody/content/application~1json/schema/properties/bcc/oneOf/0/required\"},\"title\":\"Recipient\",\"type\":\"object\"},\"type\":\"array\"}]}},\"title\":\"Create Message Request Payload\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"admin message created\":{\"value\":{\"body\":\"heyy\",\"created_at\":1734537786,\"id\":\"19\",\"message_type\":\"inapp\",\"owner\":{\"away_mode_enabled\":false,\"away_mode_reassign\":false,\"email\":\"admin299@email.com\",\"id\":\"991267816\",\"name\":\"Ciaran299 Lee\",\"type\":\"admin\"},\"subject\":\"heyy\",\"type\":\"admin_message\"}},\"lead message created\":{\"value\":{\"body\":\"heyy\",\"conversation_id\":\"614\",\"created_at\":1734537783,\"id\":\"403918397\",\"message_type\":\"inapp\",\"type\":\"user_message\"}},\"user message created\":{\"value\":{\"body\":\"heyy\",\"conversation_id\":\"613\",\"created_at\":1734537780,\"id\":\"403918396\",\"message_type\":\"inapp\",\"type\":\"user_message\"}}},\"schema\":{\"description\":\"Message are how you reach out to contacts in Intercom. They are created when an admin sends an outbound message to a contact.\",\"properties\":{\"body\":{\"description\":\"The message body, which may contain HTML.\",\"example\":\"Hello\",\"type\":\"string\"},\"conversation_id\":{\"description\":\"The associated conversation_id\",\"example\":\"64619700005570\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time the conversation was created.\",\"example\":1667560812,\"format\":\"date-time\",\"type\":\"integer\"},\"id\":{\"description\":\"The id representing the message.\",\"example\":\"1488971108\",\"type\":\"string\"},\"message_type\":{\"description\":\"The type of message that was sent. Can be email, inapp, facebook or twitter.\",\"enum\":[\"email\",\"inapp\",\"facebook\",\"twitter\"],\"example\":\"inapp\",\"type\":\"string\"},\"subject\":{\"description\":\"The subject of the message. Only present if message_type: email.\",\"example\":\"Greetings\",\"type\":\"string\"},\"type\":{\"description\":\"The type of the message\",\"example\":\"user_message\",\"type\":\"string\"}},\"required\":[\"type\",\"id\",\"created_at\",\"body\",\"message_type\"],\"title\":\"Message\",\"type\":\"object\"}}},\"description\":\"admin message created\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"No body supplied for email message\":{\"value\":{\"errors\":[{\"code\":\"parameter_invalid\",\"message\":\"Body is required\"}],\"request_id\":\"2d6abc61-1441-4860-9ef0-777852f8b24f\",\"type\":\"error.list\"}},\"No body supplied for message\":{\"value\":{\"errors\":[{\"code\":\"parameter_invalid\",\"message\":\"Body is required\"}],\"request_id\":\"3f3e74cc-65af-4408-9bf5-9e71b55c8166\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"No body supplied for email message\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"2c8a20ee-ed09-42c0-a31d-a1b4f5d2742d\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"examples\":{\"API plan restricted\":{\"value\":{\"errors\":[{\"code\":\"api_plan_restricted\",\"message\":\"Active subscription needed.\"}],\"request_id\":\"72b6821e-54ff-4a25-adf9-abdfef5fe72b\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"API plan restricted\"},\"422\":{\"content\":{\"application/json\":{\"examples\":{\"No subject supplied for email message\":{\"value\":{\"errors\":[{\"code\":\"parameter_not_found\",\"message\":\"No subject supplied for email message\"}],\"request_id\":\"97db463e-7070-4ac9-9846-9a5d31933772\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"No subject supplied for email message\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/messages", "segments": [{ "lit": "messages" }], "select": { "exist": ["intercom_version"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "message", "name__orig": "message", "Name": "Message", "name_": "message", "name-": "message", "NAME": "MESSAGE", "index$": 61 }, { "active": true, "entity": "message", "key$": "BasicMessageFlow", "kind": "basic", "name": "BasicMessageFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "message_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'Message');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const message_ref01_ent = client.Message();
        let message_ref01_data = setup.data.new.message['message_ref01'];
        message_ref01_data = (await message_ref01_ent.create(message_ref01_data)).data();
        (0, node_assert_1.default)(null != message_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/message/MessageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['message01', 'message02', 'message03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_MESSAGE_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_MESSAGE_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_MESSAGE_ENTID'];
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
//# sourceMappingURL=MessageEntity.test.js.map