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
(0, node_test_1.describe)('EmailEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.Email();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'email.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "brand_id", "req": false, "short": "Associated brand identifier", "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "date-time", "name": "created_at", "req": false, "short": "Unix timestamp of creation", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "domain", "req": false, "short": "Domain portion of the email address", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "email", "req": false, "short": "Full sender email address", "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "date-time", "name": "forwarded_email_last_received_at", "req": false, "short": "Unix timestamp of last forwarded email received (null if never)", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "forwarding_enabled", "req": false, "short": "Whether email forwarding is active", "type": "`$BOOLEAN`", "index$": 5 }, { "active": true, "name": "id", "req": false, "short": "Unique email setting identifier", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "type", "req": false, "short": "The type of object", "type": "`$STRING`", "index$": 7 }, { "active": true, "format": "date-time", "name": "updated_at", "req": false, "short": "Unix timestamp of last modification", "type": "`$INTEGER`", "index$": 8 }, { "active": true, "name": "verified", "req": false, "short": "Whether the email address has been verified", "type": "`$BOOLEAN`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "email", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }] }, "contract": { "id": "GET /emails", "json": "{\"operationId\":\"listEmails\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"data\":[{\"brand_id\":\"9\",\"created_at\":1692530400,\"domain\":\"company.com\",\"email\":\"support@company.com\",\"forwarded_email_last_received_at\":1710498600,\"forwarding_enabled\":true,\"id\":\"1\",\"type\":\"email_setting\",\"updated_at\":1710498600,\"verified\":true},{\"brand_id\":\"10\",\"created_at\":1683729000,\"domain\":\"company.com\",\"email\":\"hello@company.com\",\"forwarded_email_last_received_at\":null,\"forwarding_enabled\":false,\"id\":\"2\",\"type\":\"email_setting\",\"updated_at\":1701424500,\"verified\":true}],\"type\":\"list\"}}},\"schema\":{\"description\":\"A list of email settings\",\"properties\":{\"data\":{\"items\":{\"description\":\"Represents a sender email address configuration\",\"properties\":{\"brand_id\":{\"description\":\"Associated brand identifier\",\"example\":\"10\",\"type\":\"string\"},\"created_at\":{\"description\":\"Unix timestamp of creation\",\"example\":1692530400,\"format\":\"date-time\",\"type\":\"integer\"},\"domain\":{\"description\":\"Domain portion of the email address\",\"example\":\"company.com\",\"type\":\"string\"},\"email\":{\"description\":\"Full sender email address\",\"example\":\"support@company.com\",\"type\":\"string\"},\"forwarded_email_last_received_at\":{\"description\":\"Unix timestamp of last forwarded email received (null if never)\",\"example\":1710498600,\"format\":\"date-time\",\"nullable\":true,\"type\":\"integer\"},\"forwarding_enabled\":{\"description\":\"Whether email forwarding is active\",\"example\":true,\"type\":\"boolean\"},\"id\":{\"description\":\"Unique email setting identifier\",\"example\":\"10\",\"type\":\"string\"},\"type\":{\"description\":\"The type of object\",\"example\":\"email_setting\",\"type\":\"string\"},\"updated_at\":{\"description\":\"Unix timestamp of last modification\",\"example\":1710498600,\"format\":\"date-time\",\"type\":\"integer\"},\"verified\":{\"description\":\"Whether the email address has been verified\",\"example\":true,\"type\":\"boolean\"}},\"title\":\"Email Setting\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of object\",\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Email List\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/emails", "segments": [{ "lit": "emails" }], "select": { "exist": ["intercom_version"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /emails/{id}", "json": "{\"operationId\":\"retrieveEmail\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier of the email setting\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"brand_id\":\"15\",\"created_at\":1692530400,\"domain\":\"company.com\",\"email\":\"support@company.com\",\"forwarded_email_last_received_at\":1710498600,\"forwarding_enabled\":true,\"id\":\"10\",\"type\":\"email_setting\",\"updated_at\":1710498600,\"verified\":true}}},\"schema\":{\"description\":\"Represents a sender email address configuration\",\"properties\":{\"brand_id\":{\"description\":\"Associated brand identifier\",\"example\":\"10\",\"type\":\"string\"},\"created_at\":{\"description\":\"Unix timestamp of creation\",\"example\":1692530400,\"format\":\"date-time\",\"type\":\"integer\"},\"domain\":{\"description\":\"Domain portion of the email address\",\"example\":\"company.com\",\"type\":\"string\"},\"email\":{\"description\":\"Full sender email address\",\"example\":\"support@company.com\",\"type\":\"string\"},\"forwarded_email_last_received_at\":{\"description\":\"Unix timestamp of last forwarded email received (null if never)\",\"example\":1710498600,\"format\":\"date-time\",\"nullable\":true,\"type\":\"integer\"},\"forwarding_enabled\":{\"description\":\"Whether email forwarding is active\",\"example\":true,\"type\":\"boolean\"},\"id\":{\"description\":\"Unique email setting identifier\",\"example\":\"10\",\"type\":\"string\"},\"type\":{\"description\":\"The type of object\",\"example\":\"email_setting\",\"type\":\"string\"},\"updated_at\":{\"description\":\"Unix timestamp of last modification\",\"example\":1710498600,\"format\":\"date-time\",\"type\":\"integer\"},\"verified\":{\"description\":\"Whether the email address has been verified\",\"example\":true,\"type\":\"boolean\"}},\"title\":\"Email Setting\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Email setting not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Email setting not found\"}],\"request_id\":\"req_12345\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Email setting not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/emails/{id}", "segments": [{ "lit": "emails" }, { "var": "id" }], "select": { "exist": ["id", "intercom_version"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "email", "name__orig": "email", "Name": "Email", "name_": "email", "name-": "email", "NAME": "EMAIL", "index$": 50 }, { "active": true, "entity": "email", "key$": "BasicEmailFlow", "kind": "basic", "name": "BasicEmailFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "email_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "email_ref01", "srcdatavar": "email_ref01_data", "suffix": "_dt0" }, "match": { "id": "email01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-email_ref01" } }], "index$": 1 }] }, 'Email');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let email_ref01_data = Object.values(setup.data.existing.email)[0];
        // LIST
        const email_ref01_ent = client.Email();
        const email_ref01_match = {};
        const email_ref01_list = (await email_ref01_ent.list(email_ref01_match)).map((e) => e.data());
        // LOAD
        const email_ref01_match_dt0 = {};
        email_ref01_match_dt0.id = email_ref01_data.id;
        const email_ref01_data_dt0 = (await email_ref01_ent.load(email_ref01_match_dt0)).data();
        (0, node_assert_1.default)(email_ref01_data_dt0.id === email_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/email/EmailTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['email01', 'email02', 'email03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_EMAIL_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_EMAIL_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_EMAIL_ENTID'];
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
//# sourceMappingURL=EmailEntity.test.js.map