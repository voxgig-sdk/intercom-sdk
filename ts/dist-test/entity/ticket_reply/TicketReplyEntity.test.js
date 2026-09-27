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
(0, node_test_1.describe)('TicketReplyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.TicketReply();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ticket_reply.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "attachments": { "a": true, "h": "Attachments", "n": "attachments", "r": false, "sh": "A list of attachments for the part.", "t": "`$ARRAY`", "key$": "attachments", "index$": 0 }, "author": { "a": true, "h": "Author", "n": "author", "r": false, "sh": "The author that wrote or triggered the part.", "t": "`$OBJECT`", "key$": "author", "index$": 1 }, "body": { "a": true, "h": "Body", "n": "body", "r": false, "sh": "The message body, which may contain HTML.", "t": "`$STRING`", "key$": "body", "index$": 2 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "sh": "The time the note was created.", "t": "`$INTEGER`", "key$": "created_at", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The id representing the part.", "t": "`$STRING`", "key$": "id", "index$": 4 }, "part_type": { "a": true, "h": "Part Type", "n": "part_type", "r": false, "sh": "Type of the part", "t": "`$STRING`", "key$": "part_type", "index$": 5 }, "redacted": { "a": true, "h": "Redacted", "n": "redacted", "r": false, "sh": "Whether or not the ticket part has been redacted.", "t": "`$BOOLEAN`", "key$": "redacted", "index$": 6 }, "skip_notifications": { "a": true, "h": "Skip Notifications", "n": "skip_notifications", "r": false, "sh": "Option to disable notifications when replying to a Ticket.", "t": "`$BOOLEAN`", "key$": "skip_notifications", "index$": 7 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "Always ticket_part", "t": "`$STRING`", "key$": "type", "index$": 8 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "sh": "The last time the note was updated.", "t": "`$INTEGER`", "key$": "updated_at", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "ticket_reply", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /tickets/{ticket_id}/reply", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "123", "k": "param", "n": "id", "or": "ticket_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/tickets/{ticket_id}/reply", "q": { "exist": ["id", "intercom_version"] }, "r": { "param": { "ticket_id": "id" } }, "s": [{ "lit": "tickets" }, { "var": "id" }, { "lit": "reply" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "ticket_reply", "name__orig": "ticket_reply", "Name": "TicketReply", "name_": "ticket_reply", "name-": "ticket-reply", "NAME": "TICKET_REPLY", "index$": 81 }, { "active": true, "entity": "ticket_reply", "key$": "BasicTicketReplyFlow", "kind": "basic", "name": "BasicTicketReplyFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "ticket_reply_ref01" }, "m": { "ticket_id": "ticket01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'TicketReply', { "POST /tickets/{ticket_id}/reply": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "oneOf": [{ "title": "Contact Reply on ticket", "oneOf": [{ "title": "Intercom User ID", "type": "object", "description": "Payload of the request to reply on behalf of a contact using their `intercom_user_id`", "allOf": [{}], "properties": { "intercom_user_id": {} }, "required": ["intercom_user_id"], "x-ref": "#/components/schemas/contact_reply_ticket_intercom_user_id_request" }, { "title": "User ID", "type": "object", "description": "Payload of the request to reply on behalf of a contact using their `user_id`", "allOf": [{}], "properties": { "user_id": {} }, "required": ["user_id"], "x-ref": "#/components/schemas/contact_reply_ticket_user_id_request" }, { "title": "Email", "type": "object", "description": "Payload of the request to reply on behalf of a contact using their `email`", "properties": { "email": {} }, "allOf": [{}], "required": ["email"], "x-ref": "#/components/schemas/contact_reply_ticket_email_request" }], "x-ref": "#/components/schemas/contact_reply_ticket_request" }, { "title": "Admin Reply on ticket", "type": "object", "description": "Payload of the request to reply on behalf of an admin", "properties": { "message_type": { "type": "string", "enum": ["comment", "note", "quick_reply"], "example": "comment" }, "type": { "type": "string", "enum": ["admin"], "example": "admin" }, "body": { "type": "string", "description": "The text body of the reply. Notes accept some HTML formatting. Must be present for comment and note message types.", "example": "Hello there!" }, "admin_id": { "type": "string", "description": "The id of the admin who is authoring the comment.", "example": "3156780" }, "created_at": { "type": "integer", "description": "The time the reply was created. If not provided, the current time will be used.", "example": 1590000000 }, "reply_options": { "title": "Quick Reply Options", "type": "array", "description": "The quick reply options to display. Must be present for quick_reply message types.", "items": { "title": "Quick Reply Option", "type": "object", "properties": {}, "required": [] } }, "attachment_urls": { "type": "array", "description": "A list of image URLs that will be added as attachments. You can include up to 10 URLs.", "items": { "type": "string", "format": "uri" }, "maxItems": 10 }, "attachment_files": { "type": "array", "description": "A list of files that will be added as attachments. You can include up to 10 files. If both attachment_files and attachment_urls are provided, attachment_files takes precedence.", "items": { "title": "Conversation attachment files", "type": "object", "description": "Properties of the attachment files in a conversation part", "properties": {}, "x-ref": "#/components/schemas/conversation_attachment_files" }, "maxItems": 10 }, "cross_post": { "type": "boolean", "description": "If set to true, the note will be cross-posted to all linked conversations. Only applicable to note message types on back-office tickets.", "example": true } }, "required": ["message_type", "type", "admin_id"], "x-ref": "#/components/schemas/admin_reply_ticket_request" }], "properties": { "skip_notifications": { "type": "boolean", "description": "Option to disable notifications when replying to a Ticket.", "example": true, "key$": "skip_notifications" } }, "index$": 1 }, "examples": { "user_reply": { "summary": "User reply", "value": { "message_type": "comment", "type": "user", "intercom_user_id": "6762f2971bb69f9f2193bc49", "body": "Thanks again :)" } }, "admin_note_reply": { "summary": "Admin note reply", "value": { "message_type": "note", "type": "admin", "admin_id": 991267943, "body": "<html> <body>  <h2>An Unordered HTML List</h2>  <ul>   <li>Coffee</li>   <li>Tea</li>   <li>Milk</li> </ul>    <h2>An Ordered HTML List</h2>  <ol>   <li>Coffee</li>   <li>Tea</li>   <li>Milk</li> </ol>   </body> </html>" } }, "admin_note_cross_post_reply": { "summary": "Admin note reply with cross-post to linked conversations", "value": { "message_type": "note", "type": "admin", "admin_id": 991267943, "body": "This note will be cross-posted to all linked conversations.", "cross_post": true } }, "admin_quick_reply_reply": { "summary": "Admin quick_reply reply", "value": { "message_type": "quick_reply", "type": "admin", "admin_id": 991267948, "reply_options": [{ "text": "Yes", "uuid": "0df48b85-9a93-4c66-a167-753eff0baaec" }, { "text": "No", "uuid": "4f0b5145-4193-4b4f-8cad-ce19478a3938" }] } }, "not_found": { "summary": "Not found", "value": { "message_type": "comment", "type": "user", "intercom_user_id": "6762f2a41bb69f9f2193bc4c", "body": "Thanks again :)" } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "ticket_id", "in": "path", "required": true, "schema": { "title": "Ticket ID", "type": "string", "description": "The id of the ticket to target.\n{% admonition type=\"info\" name=\"Not the Inbox ticket ID\" %}\nThis is the internal `id` field from the API response, not the `ticket_id` displayed in the Intercom Inbox (e.g., #12345). Use the `id` value from the ticket object returned by the API.\n{% /admonition %}\n", "example": "123" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const ticket_reply_ref01_ent = client.TicketReply();
        let ticket_reply_ref01_data = setup.data.new.ticket_reply['ticket_reply_ref01'];
        ticket_reply_ref01_data['ticket_id'] = setup.idmap['ticket01'];
        ticket_reply_ref01_data = (await ticket_reply_ref01_ent.create(ticket_reply_ref01_data)).data();
        (0, node_assert_1.default)(null != ticket_reply_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ticket_reply/TicketReplyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ticket_reply01', 'ticket_reply02', 'ticket_reply03', 'ticket01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_TICKET_REPLY_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_TICKET_REPLY_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_TICKET_REPLY_ENTID'];
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
//# sourceMappingURL=TicketReplyEntity.test.js.map