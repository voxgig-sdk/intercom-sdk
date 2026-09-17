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
(0, node_test_1.describe)('SubscriptionTypeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.SubscriptionType();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'subscription_type.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "consent_type", "req": false, "short": "Describes the type of consent.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "content_types", "req": false, "short": "The message types that this subscription supports - can contain `email` or `sms_message`.", "type": "`$ARRAY`", "index$": 1 }, { "active": true, "name": "default_translation", "req": false, "short": "A translation object contains the localised details of a subscription type.", "type": "`$OBJECT`", "index$": 2 }, { "active": true, "name": "id", "req": false, "short": "The unique identifier representing the subscription type.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "state", "req": false, "short": "The state of the subscription type.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "translations", "req": false, "short": "An array of translations objects with the localised version of the subscription type in each available locale within your translation settings.", "type": "`$ARRAY`", "index$": 5 }, { "active": true, "name": "type", "req": false, "short": "The type of the object - subscription", "type": "`$STRING`", "index$": 6 }], "id": { "field": "id", "name": "id" }, "name": "subscription_type", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }] }, "contract": { "id": "GET /subscription_types", "json": "{\"operationId\":\"listSubscriptionTypes\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful\":{\"value\":{\"data\":[{\"consent_type\":\"opt_out\",\"content_types\":[\"email\"],\"default_translation\":{\"description\":\"Lorem ipsum dolor sit amet\",\"locale\":\"en\",\"name\":\"Newsletters\"},\"id\":\"135\",\"state\":\"live\",\"translations\":[{\"description\":\"Lorem ipsum dolor sit amet\",\"locale\":\"en\",\"name\":\"Newsletters\"}],\"type\":\"subscription\"}],\"type\":\"list\"}}},\"schema\":{\"description\":\"A list of subscription type objects.\",\"properties\":{\"data\":{\"description\":\"A list of subscription type objects associated with the workspace .\",\"items\":{\"description\":\"A subscription type lets customers easily opt out of non-essential communications without missing what's important to them.\",\"properties\":{\"consent_type\":{\"description\":\"Describes the type of consent.\",\"enum\":[\"opt_out\",\"opt_in\"],\"example\":\"opt_in\",\"type\":\"string\"},\"content_types\":{\"description\":\"The message types that this subscription supports - can contain `email` or `sms_message`.\",\"items\":{\"enum\":[\"email\",\"sms_message\"],\"example\":\"email\",\"type\":\"string\"},\"type\":\"array\"},\"default_translation\":{\"description\":\"A translation object contains the localised details of a subscription type.\",\"properties\":{\"description\":{\"description\":\"The localised description of the subscription type.\",\"example\":\"Offers, product and feature announcements\",\"type\":\"string\"},\"locale\":{\"description\":\"The two character identifier for the language of the translation object.\",\"example\":\"en\",\"type\":\"string\"},\"name\":{\"description\":\"The localised name of the subscription type.\",\"example\":\"Announcements\",\"type\":\"string\"}},\"title\":\"Translation\",\"type\":\"object\"},\"id\":{\"description\":\"The unique identifier representing the subscription type.\",\"example\":\"123456\",\"type\":\"string\"},\"state\":{\"description\":\"The state of the subscription type.\",\"enum\":[\"live\",\"draft\",\"archived\"],\"example\":\"live\",\"type\":\"string\"},\"translations\":{\"description\":\"An array of translations objects with the localised version of the subscription type in each available locale within your translation settings.\",\"items\":{\"description\":\"A translation object contains the localised details of a subscription type.\",\"properties\":{\"description\":{\"description\":\"The localised description of the subscription type.\",\"example\":\"Offers, product and feature announcements\",\"type\":\"string\"},\"locale\":{\"description\":\"The two character identifier for the language of the translation object.\",\"example\":\"en\",\"type\":\"string\"},\"name\":{\"description\":\"The localised name of the subscription type.\",\"example\":\"Announcements\",\"type\":\"string\"}},\"title\":\"Translation\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of the object - subscription\",\"example\":\"subscription\",\"type\":\"string\"}},\"title\":\"Subscription Types\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of the object\",\"enum\":[\"list\"],\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Subscription Types\",\"type\":\"object\"}}},\"description\":\"Successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"06d15b1f-19b0-42cc-aff9-a9d9db39402b\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/subscription_types", "segments": [{ "lit": "subscription_types" }], "select": { "exist": ["intercom_version"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "subscription_type", "name__orig": "subscription_type", "Name": "SubscriptionType", "name_": "subscription_type", "name-": "subscription-type", "NAME": "SUBSCRIPTION_TYPE", "index$": 75 }, { "active": true, "entity": "subscription_type", "key$": "BasicSubscriptionTypeFlow", "kind": "basic", "name": "BasicSubscriptionTypeFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "subscription_type_ref01" } }], "index$": 0 }] }, 'SubscriptionType');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let subscription_type_ref01_data = Object.values(setup.data.existing.subscription_type)[0];
        // LIST
        const subscription_type_ref01_ent = client.SubscriptionType();
        const subscription_type_ref01_match = {};
        const subscription_type_ref01_list = (await subscription_type_ref01_ent.list(subscription_type_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/subscription_type/SubscriptionTypeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['subscription_type01', 'subscription_type02', 'subscription_type03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_SUBSCRIPTION_TYPE_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_SUBSCRIPTION_TYPE_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_SUBSCRIPTION_TYPE_ENTID'];
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
//# sourceMappingURL=SubscriptionTypeEntity.test.js.map