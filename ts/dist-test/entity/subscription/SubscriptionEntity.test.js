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
(0, node_test_1.describe)('SubscriptionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.Subscription();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create', 'list', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'subscription.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "consent_type": { "a": true, "h": "Consent Type", "n": "consent_type", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "Describes the type of consent.", "t": "`$STRING`", "key$": "consent_type", "index$": 0 }, "content_types": { "a": true, "h": "Content Types", "n": "content_types", "r": false, "sh": "The message types that this subscription supports - can contain `email` or `sms_message`.", "t": "`$ARRAY`", "key$": "content_types", "index$": 1 }, "default_translation": { "a": true, "h": "Default Translation", "n": "default_translation", "r": false, "sh": "A translation object contains the localised details of a subscription type.", "t": "`$OBJECT`", "key$": "default_translation", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "The unique identifier representing the subscription type.", "t": "`$STRING`", "key$": "id", "index$": 3 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "sh": "The state of the subscription type.", "t": "`$STRING`", "key$": "state", "index$": 4 }, "translations": { "a": true, "h": "Translations", "n": "translations", "r": false, "sh": "An array of translations objects with the localised version of the subscription type in each available locale within your translation settings.", "t": "`$ARRAY`", "key$": "translations", "index$": 5 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "The type of the object - subscription", "t": "`$STRING`", "key$": "type", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "subscription", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /contacts/{contact_id}/subscriptions", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "63a07ddf05a32042dffac965", "k": "param", "n": "contact_id", "or": "contact_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/contacts/{contact_id}/subscriptions", "q": { "exist": ["contact_id", "intercom_version"] }, "r": {}, "s": [{ "lit": "contacts" }, { "var": "contact_id" }, { "lit": "subscriptions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /contacts/{contact_id}/subscriptions", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "63a07ddf05a32042dffac965", "k": "param", "n": "contact_id", "or": "contact_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/contacts/{contact_id}/subscriptions", "q": { "exist": ["contact_id", "intercom_version"] }, "r": {}, "s": [{ "lit": "contacts" }, { "var": "contact_id" }, { "lit": "subscriptions" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /contacts/{contact_id}/subscriptions/{subscription_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "63a07ddf05a32042dffac965", "k": "param", "n": "contact_id", "or": "contact_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "37846", "k": "param", "n": "id", "or": "subscription_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/contacts/{contact_id}/subscriptions/{subscription_id}", "q": { "exist": ["contact_id", "id", "intercom_version"] }, "r": { "param": { "subscription_id": "id" } }, "s": [{ "lit": "contacts" }, { "var": "contact_id" }, { "lit": "subscriptions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.contact"]] }, "key$": "subscription", "name__orig": "subscription", "Name": "Subscription", "name_": "subscription", "name-": "subscription", "NAME": "SUBSCRIPTION", "index$": 74 }, { "active": true, "entity": "subscription", "key$": "BasicSubscriptionFlow", "kind": "basic", "name": "BasicSubscriptionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "subscription_ref01" }, "m": { "contact_id": "contact01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "contact_id": "contact01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "subscription_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "subscription_ref01", "suffix": "_rm0" }, "m": { "contact_id": "contact01", "id": "subscription01" }, "o": "remove", "s": [], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "contact_id": "contact01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "subscription_ref01" } }], "index$": 3 }] }, 'Subscription', { "POST /contacts/{contact_id}/subscriptions": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["id", "consent_type"], "properties": { "id": { "type": "string", "description": "The unique identifier for the subscription which is given by Intercom", "example": "37846", "key$": "id" }, "consent_type": { "type": "string", "description": "The consent_type of a subscription, opt_out or opt_in.", "example": "opt_in", "key$": "consent_type" } }, "index$": 1 }, "examples": { "successful": { "summary": "Successful", "value": { "id": 106, "consent_type": "opt_in" } }, "contact_not_found": { "summary": "Contact not found", "value": { "id": 110, "consent_type": "opt_in" } }, "resource_not_found": { "summary": "Resource not found", "value": { "id": "invalid_id", "consent_type": "opt_in" } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "contact_id", "in": "path", "description": "The unique identifier for the contact which is given by Intercom", "example": "63a07ddf05a32042dffac965", "required": true, "schema": { "type": "string" }, "index$": 1 }] }, "GET /contacts/{contact_id}/subscriptions": { "protocol": "http", "parameters": [{ "name": "contact_id", "in": "path", "description": "The unique identifier for the contact which is given by Intercom", "example": "63a07ddf05a32042dffac965", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 1 }] }, "DELETE /contacts/{contact_id}/subscriptions/{subscription_id}": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "contact_id", "in": "path", "description": "The unique identifier for the contact which is given by Intercom", "example": "63a07ddf05a32042dffac965", "required": true, "schema": { "type": "string" }, "index$": 1 }, { "name": "subscription_id", "in": "path", "description": "The unique identifier for the subscription type which is given by Intercom", "example": "37846", "required": true, "schema": { "type": "string" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const subscription_ref01_ent = client.Subscription();
        let subscription_ref01_data = setup.data.new.subscription['subscription_ref01'];
        subscription_ref01_data['contact_id'] = setup.idmap['contact01'];
        subscription_ref01_data = (await subscription_ref01_ent.create(subscription_ref01_data)).data();
        (0, node_assert_1.default)(null != subscription_ref01_data.id);
        // LIST
        const subscription_ref01_match = {};
        subscription_ref01_match['contact_id'] = setup.idmap['contact01'];
        const subscription_ref01_list = (await subscription_ref01_ent.list(subscription_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(subscription_ref01_list, { id: subscription_ref01_data.id })));
        // REMOVE
        const subscription_ref01_match_rm0 = { id: subscription_ref01_data.id };
        await subscription_ref01_ent.remove(subscription_ref01_match_rm0);
        // LIST
        const subscription_ref01_match_rt0 = {};
        subscription_ref01_match_rt0['contact_id'] = setup.idmap['contact01'];
        const subscription_ref01_list_rt0 = (await subscription_ref01_ent.list(subscription_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(subscription_ref01_list_rt0, { id: subscription_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/subscription/SubscriptionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['subscription01', 'subscription02', 'subscription03', 'contact01', 'contact02', 'contact03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_SUBSCRIPTION_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_SUBSCRIPTION_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_SUBSCRIPTION_ENTID'];
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
//# sourceMappingURL=SubscriptionEntity.test.js.map