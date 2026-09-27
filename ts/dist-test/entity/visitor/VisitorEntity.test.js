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
(0, node_test_1.describe)('VisitorEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.Visitor();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'visitor.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "anonymous": { "a": true, "h": "Anonymous", "n": "anonymous", "r": false, "sh": "Identifies if this visitor is anonymous.", "t": "`$BOOLEAN`", "key$": "anonymous", "index$": 0 }, "app_id": { "a": true, "h": "App Id", "n": "app_id", "r": false, "sh": "The id of the app the visitor is associated with.", "t": "`$STRING`", "key$": "app_id", "index$": 1 }, "avatar": { "a": true, "h": "Avatar", "n": "avatar", "r": false, "t": "`$OBJECT`", "key$": "avatar", "index$": 2 }, "companies": { "a": true, "h": "Companies", "n": "companies", "r": false, "t": "`$OBJECT`", "key$": "companies", "index$": 3 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "sh": "The time the Visitor was added to Intercom.", "t": "`$INTEGER`", "key$": "created_at", "index$": 4 }, "custom_attributes": { "a": true, "h": "Custom Attributes", "n": "custom_attributes", "r": false, "sh": "The custom attributes you have set on the Visitor.", "t": "`$OBJECT`", "key$": "custom_attributes", "index$": 5 }, "do_not_track": { "a": true, "h": "Do Not Track", "n": "do_not_track", "r": false, "sh": "Identifies if this visitor has do not track enabled.", "t": "`$BOOLEAN`", "key$": "do_not_track", "index$": 6 }, "email": { "a": true, "fo": "email", "h": "Email", "n": "email", "r": false, "sh": "The email of the visitor.", "t": "`$STRING`", "key$": "email", "index$": 7 }, "has_hard_bounced": { "a": true, "h": "Has Hard Bounced", "n": "has_hard_bounced", "r": false, "sh": "Identifies if this visitor has had a hard bounce.", "t": "`$BOOLEAN`", "key$": "has_hard_bounced", "index$": 8 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The Intercom defined id representing the Visitor.", "t": "`$STRING`", "key$": "id", "index$": 9 }, "las_request_at": { "a": true, "h": "Las Request At", "n": "las_request_at", "r": false, "sh": "The time the Lead last recorded making a request.", "t": "`$INTEGER`", "key$": "las_request_at", "index$": 10 }, "location_data": { "a": true, "h": "Location Data", "n": "location_data", "r": false, "t": "`$OBJECT`", "key$": "location_data", "index$": 11 }, "marked_email_as_spam": { "a": true, "h": "Marked Email As Spam", "n": "marked_email_as_spam", "r": false, "sh": "Identifies if this visitor has marked an email as spam.", "t": "`$BOOLEAN`", "key$": "marked_email_as_spam", "index$": 12 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the visitor.", "t": "`$STRING`", "key$": "name", "index$": 13 }, "owner_id": { "a": true, "h": "Owner Id", "n": "owner_id", "r": false, "sh": "The id of the admin that owns the Visitor.", "t": "`$STRING`", "key$": "owner_id", "index$": 14 }, "phone": { "a": true, "h": "Phone", "n": "phone", "r": false, "sh": "The phone number of the visitor.", "t": "`$STRING`", "key$": "phone", "index$": 15 }, "pseudonym": { "a": true, "h": "Pseudonym", "n": "pseudonym", "r": false, "sh": "The pseudonym of the visitor.", "t": "`$STRING`", "key$": "pseudonym", "index$": 16 }, "referrer": { "a": true, "h": "Referrer", "n": "referrer", "r": false, "sh": "The referer of the visitor.", "t": "`$STRING`", "key$": "referrer", "index$": 17 }, "remote_created_at": { "a": true, "h": "Remote Created At", "n": "remote_created_at", "r": false, "sh": "The time the Visitor was added to Intercom.", "t": "`$INTEGER`", "key$": "remote_created_at", "index$": 18 }, "segments": { "a": true, "h": "Segments", "n": "segments", "r": false, "t": "`$OBJECT`", "key$": "segments", "index$": 19 }, "session_count": { "a": true, "h": "Session Count", "n": "session_count", "r": false, "sh": "The number of sessions the Visitor has had.", "t": "`$INTEGER`", "key$": "session_count", "index$": 20 }, "signed_up_at": { "a": true, "h": "Signed Up At", "n": "signed_up_at", "r": false, "sh": "The time the Visitor signed up for your product.", "t": "`$INTEGER`", "key$": "signed_up_at", "index$": 21 }, "social_profiles": { "a": true, "h": "Social Profiles", "n": "social_profiles", "r": false, "t": "`$OBJECT`", "key$": "social_profiles", "index$": 22 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "t": "`$OBJECT`", "key$": "tags", "index$": 23 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "Value is 'visitor'", "t": "`$STRING`", "key$": "type", "index$": 24 }, "unsubscribed_from_emails": { "a": true, "h": "Unsubscribed From Emails", "n": "unsubscribed_from_emails", "r": false, "sh": "Whether the Visitor is unsubscribed from emails.", "t": "`$BOOLEAN`", "key$": "unsubscribed_from_emails", "index$": 25 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": false, "sh": "The last time the Visitor was updated.", "t": "`$INTEGER`", "key$": "updated_at", "index$": 26 }, "user_id": { "a": true, "h": "User Id", "n": "user_id", "r": false, "sh": "Automatically generated identifier for the Visitor.", "t": "`$STRING`", "key$": "user_id", "index$": 27 }, "utm_campaign": { "a": true, "h": "Utm Campaign", "n": "utm_campaign", "r": false, "sh": "The utm_campaign of the visitor.", "t": "`$STRING`", "key$": "utm_campaign", "index$": 28 }, "utm_content": { "a": true, "h": "Utm Content", "n": "utm_content", "r": false, "sh": "The utm_content of the visitor.", "t": "`$STRING`", "key$": "utm_content", "index$": 29 }, "utm_medium": { "a": true, "h": "Utm Medium", "n": "utm_medium", "r": false, "sh": "The utm_medium of the visitor.", "t": "`$STRING`", "key$": "utm_medium", "index$": 30 }, "utm_source": { "a": true, "h": "Utm Source", "n": "utm_source", "r": false, "sh": "The utm_source of the visitor.", "t": "`$STRING`", "key$": "utm_source", "index$": 31 }, "utm_term": { "a": true, "h": "Utm Term", "n": "utm_term", "r": false, "sh": "The utm_term of the visitor.", "t": "`$STRING`", "key$": "utm_term", "index$": 32 } }, "id": { "field": "id", "name": "id" }, "name": "visitor", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /visitors", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "user_id", "or": "user_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/visitors", "q": { "exist": ["intercom_version", "user_id"] }, "r": {}, "s": [{ "lit": "visitors" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /visitors", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/visitors", "q": { "exist": ["intercom_version"] }, "r": {}, "s": [{ "lit": "visitors" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "visitor", "name__orig": "visitor", "Name": "Visitor", "name_": "visitor", "name-": "visitor", "NAME": "VISITOR", "index$": 85 }, { "active": true, "entity": "visitor", "key$": "BasicVisitorFlow", "kind": "basic", "name": "BasicVisitorFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "visitor_ref01", "srcdatavar": "visitor_ref01_data", "suffix": "_up0", "textfield": "app_id" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-visitor_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "visitor_ref01", "srcdatavar": "visitor_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-visitor_ref01" } }], "index$": 1 }] }, 'Visitor', { "GET /visitors": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "user_id", "in": "query", "description": "The user_id of the Visitor you want to retrieve.", "required": true, "schema": { "type": "string" }, "index$": 1 }] }, "PUT /visitors": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "description": "Update an existing visitor.", "type": "object", "title": "Update Visitor Request Payload", "properties": { "id": { "type": "string", "description": "A unique identified for the visitor which is given by Intercom.", "example": "8a88a590-e", "key$": "id" }, "user_id": { "type": "string", "description": "A unique identified for the visitor which is given by you.", "example": "123", "key$": "user_id" }, "name": { "type": "string", "description": "The visitor's name.", "example": "Christian Bale", "key$": "name" }, "custom_attributes": { "type": "object", "description": "The custom attributes which are set for the visitor.", "additionalProperties": { "type": "string" }, "example": { "paid_subscriber": true, "monthly_spend": 155.5, "team_mates": 9 }, "key$": "custom_attributes" } }, "anyOf": [{ "required": ["id"] }, { "required": ["user_id"] }], "x-ref": "#/components/schemas/update_visitor_request", "index$": 1 }, "examples": { "successful": { "summary": "successful", "value": { "id": "6762f30c1bb69f9f2193bc5e", "name": "Gareth Bale" } }, "visitor_not_found": { "summary": "visitor Not Found", "value": { "user_id": "fail", "name": "Christian Fail" } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let visitor_ref01_data = Object.values(setup.data.existing.visitor)[0];
        // UPDATE
        const visitor_ref01_ent = client.Visitor();
        const visitor_ref01_data_up0 = {};
        visitor_ref01_data_up0.id = visitor_ref01_data.id;
        const visitor_ref01_markdef_up0 = { name: 'app_id', value: 'Mark01-visitor_ref01_' + setup.now };
        visitor_ref01_data_up0[visitor_ref01_markdef_up0.name] = visitor_ref01_markdef_up0.value;
        const visitor_ref01_resdata_up0 = (await visitor_ref01_ent.update(visitor_ref01_data_up0)).data();
        (0, node_assert_1.default)(visitor_ref01_resdata_up0.id === visitor_ref01_data_up0.id);
        (0, node_assert_1.default)(visitor_ref01_resdata_up0[visitor_ref01_markdef_up0.name] === visitor_ref01_markdef_up0.value);
        // LOAD
        const visitor_ref01_match_dt0 = {};
        visitor_ref01_match_dt0.id = visitor_ref01_data.id;
        const visitor_ref01_data_dt0 = (await visitor_ref01_ent.load(visitor_ref01_match_dt0)).data();
        (0, node_assert_1.default)(visitor_ref01_data_dt0.id === visitor_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/visitor/VisitorTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['visitor01', 'visitor02', 'visitor03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_VISITOR_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_VISITOR_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_VISITOR_ENTID'];
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
//# sourceMappingURL=VisitorEntity.test.js.map