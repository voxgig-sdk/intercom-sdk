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
(0, node_test_1.describe)('AdminWithAppEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.AdminWithApp();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'admin_with_app.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "app", "req": false, "short": "App that the admin belongs to.", "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "avatar", "req": false, "short": "This object represents the avatar associated with the admin.", "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "away_mode_enabled", "req": false, "short": "Identifies if this admin is currently set in away mode.", "type": "`$BOOLEAN`", "index$": 2 }, { "active": true, "name": "away_mode_reassign", "req": false, "short": "Identifies if this admin is set to automatically reassign new conversations to the apps default inbox.", "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "name": "email", "req": false, "short": "The email of the admin.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "email_verified", "req": false, "short": "Identifies if this admin's email is verified.", "type": "`$BOOLEAN`", "index$": 5 }, { "active": true, "name": "has_inbox_seat", "req": false, "short": "Identifies if this admin has a paid inbox seat to restrict/allow features that require them.", "type": "`$BOOLEAN`", "index$": 6 }, { "active": true, "name": "id", "req": false, "short": "The id representing the admin.", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "job_title", "req": false, "short": "The job title of the admin.", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "name", "req": false, "short": "The name of the admin.", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "team_ids", "req": false, "short": "This is a list of ids of the teams that this admin is part of.", "type": "`$ARRAY`", "index$": 10 }, { "active": true, "name": "type", "req": false, "short": "String representing the object's type.", "type": "`$STRING`", "index$": 11 }], "id": { "field": "id", "name": "id" }, "name": "admin_with_app", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }] }, "contract": { "id": "GET /me", "json": "{\"operationId\":\"identifyAdmin\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"app\":{\"created_at\":1734537243,\"id_code\":\"this_is_an_id1_that_should_be_at_least_40\",\"identity_verification\":false,\"name\":\"MyApp 1\",\"region\":\"US\",\"secure\":false,\"timezone\":\"America/Los_Angeles\",\"type\":\"app\"},\"avatar\":{\"image_url\":\"https://static.intercomassets.com/assets/default-avatars/admins/128.png\",\"type\":\"avatar\"},\"email\":\"admin1@email.com\",\"email_verified\":true,\"has_inbox_seat\":true,\"id\":\"991267459\",\"name\":\"Ciaran1 Lee\",\"type\":\"admin\"}}},\"schema\":{\"description\":\"Admins are the teammate accounts that have access to a workspace\",\"nullable\":true,\"properties\":{\"app\":{\"description\":\"App that the admin belongs to.\",\"nullable\":true,\"properties\":{\"created_at\":{\"description\":\"When the app was created.\",\"example\":1671465577,\"type\":\"integer\"},\"id_code\":{\"description\":\"The id of the app.\",\"example\":\"xyz789\",\"type\":\"string\"},\"identity_verification\":{\"description\":\"Whether or not the app uses identity verification.\",\"example\":false,\"type\":\"boolean\"},\"name\":{\"description\":\"The name of the app.\",\"example\":\"ACME\",\"type\":\"string\"},\"region\":{\"description\":\"The Intercom region the app is located in.\",\"example\":\"US\",\"type\":\"string\"},\"timezone\":{\"description\":\"The timezone of the region where the app is located.\",\"example\":\"America/Los_Angeles\",\"type\":\"string\"},\"type\":{\"default\":\"app\",\"description\":\"\",\"example\":\"app\",\"type\":\"string\"}},\"title\":\"App\",\"type\":\"object\"},\"avatar\":{\"description\":\"This object represents the avatar associated with the admin.\",\"properties\":{\"image_url\":{\"description\":\"This object represents the avatar associated with the admin.\",\"example\":\"https://example.com/avatar.png\",\"format\":\"uri\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"default\":\"avatar\",\"description\":\"This is a string that identifies the type of the object. It will always have the value `avatar`.\",\"example\":\"avatar\",\"type\":\"string\"}},\"type\":\"object\"},\"away_mode_enabled\":{\"description\":\"Identifies if this admin is currently set in away mode.\",\"example\":false,\"type\":\"boolean\"},\"away_mode_reassign\":{\"description\":\"Identifies if this admin is set to automatically reassign new conversations to the apps default inbox.\",\"example\":false,\"type\":\"boolean\"},\"email\":{\"description\":\"The email of the admin.\",\"example\":\"jdoe@example.com\",\"type\":\"string\"},\"email_verified\":{\"description\":\"Identifies if this admin's email is verified.\",\"example\":true,\"nullable\":true,\"type\":\"boolean\"},\"has_inbox_seat\":{\"description\":\"Identifies if this admin has a paid inbox seat to restrict/allow features that require them.\",\"example\":true,\"type\":\"boolean\"},\"id\":{\"description\":\"The id representing the admin.\",\"example\":\"1295\",\"type\":\"string\"},\"job_title\":{\"description\":\"The job title of the admin.\",\"example\":\"Associate\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the admin.\",\"example\":\"Joe Example\",\"type\":\"string\"},\"team_ids\":{\"description\":\"This is a list of ids of the teams that this admin is part of.\",\"example\":[814865],\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `admin`.\",\"example\":\"admin\",\"type\":\"string\"}},\"title\":\"Admin\",\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/me", "segments": [{ "lit": "me" }], "select": { "exist": ["intercom_version"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "admin_with_app", "name__orig": "admin_with_app", "Name": "AdminWithApp", "name_": "admin_with_app", "name-": "admin-with-app", "NAME": "ADMIN_WITH_APP", "index$": 4 }, { "active": true, "entity": "admin_with_app", "key$": "BasicAdminWithAppFlow", "kind": "basic", "name": "BasicAdminWithAppFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "admin_with_app_ref01" } }], "index$": 0 }] }, 'AdminWithApp');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let admin_with_app_ref01_data = Object.values(setup.data.existing.admin_with_app)[0];
        // LIST
        const admin_with_app_ref01_ent = client.AdminWithApp();
        const admin_with_app_ref01_match = {};
        const admin_with_app_ref01_list = (await admin_with_app_ref01_ent.list(admin_with_app_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/admin_with_app/AdminWithAppTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['admin_with_app01', 'admin_with_app02', 'admin_with_app03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_ADMIN_WITH_APP_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_ADMIN_WITH_APP_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_ADMIN_WITH_APP_ENTID'];
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
//# sourceMappingURL=AdminWithAppEntity.test.js.map