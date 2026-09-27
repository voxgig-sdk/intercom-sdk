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
(0, node_test_1.describe)('ContactAttachedCompanyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.ContactAttachedCompany();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'contact_attached_company.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "app_id": { "a": true, "h": "App Id", "n": "app_id", "r": false, "sh": "The Intercom defined code of the workspace the company is associated to.", "t": "`$STRING`", "key$": "app_id", "index$": 0 }, "company_id": { "a": true, "h": "Company Id", "n": "company_id", "r": false, "sh": "The company id you have defined for the company.", "t": "`$STRING`", "key$": "company_id", "index$": 1 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "sh": "The time the company was added in Intercom.", "t": "`$INTEGER`", "key$": "created_at", "index$": 2 }, "custom_attributes": { "a": true, "h": "Custom Attributes", "n": "custom_attributes", "r": false, "sh": "The custom attributes you have set on the company.", "t": "`$OBJECT`", "key$": "custom_attributes", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The Intercom defined id representing the company.", "t": "`$STRING`", "key$": "id", "index$": 4 }, "industry": { "a": true, "h": "Industry", "n": "industry", "r": false, "sh": "The industry that the company operates in.", "t": "`$STRING`", "key$": "industry", "index$": 5 }, "last_request_at": { "a": true, "h": "Last Request At", "n": "last_request_at", "r": false, "sh": "The time the company last recorded making a request.", "t": "`$INTEGER`", "key$": "last_request_at", "index$": 6 }, "monthly_spend": { "a": true, "h": "Monthly Spend", "n": "monthly_spend", "r": false, "sh": "How much revenue the company generates for your business.", "t": "`$INTEGER`", "key$": "monthly_spend", "index$": 7 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the company.", "t": "`$STRING`", "key$": "name", "index$": 8 }, "notes": { "a": true, "h": "Notes", "n": "notes", "r": false, "sh": "The list of notes associated with the company", "t": "`$OBJECT`", "key$": "notes", "index$": 9 }, "plan": { "a": true, "h": "Plan", "n": "plan", "r": false, "t": "`$OBJECT`", "key$": "plan", "index$": 10 }, "remote_created_at": { "a": true, "h": "Remote Created At", "n": "remote_created_at", "r": false, "sh": "The time the company was created by you.", "t": "`$INTEGER`", "key$": "remote_created_at", "index$": 11 }, "segments": { "a": true, "h": "Segments", "n": "segments", "r": false, "sh": "The list of segments associated with the company", "t": "`$OBJECT`", "key$": "segments", "index$": 12 }, "session_count": { "a": true, "h": "Session Count", "n": "session_count", "r": false, "sh": "How many sessions the company has recorded.", "t": "`$INTEGER`", "key$": "session_count", "index$": 13 }, "size": { "a": true, "h": "Size", "n": "size", "r": false, "sh": "The number of employees in the company.", "t": "`$INTEGER`", "key$": "size", "index$": 14 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "sh": "The list of tags associated with the company", "t": "`$OBJECT`", "key$": "tags", "index$": 15 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "Value is `company`", "t": "`$STRING`", "key$": "type", "index$": 16 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": false, "sh": "The last time the company was updated.", "t": "`$INTEGER`", "key$": "updated_at", "index$": 17 }, "user_count": { "a": true, "h": "User Count", "n": "user_count", "r": false, "sh": "The number of users in the company.", "t": "`$INTEGER`", "key$": "user_count", "index$": 18 }, "website": { "a": true, "h": "Website", "n": "website", "r": false, "sh": "The URL for the company website.", "t": "`$STRING`", "key$": "website", "index$": 19 } }, "id": { "field": "id", "name": "id" }, "name": "contact_attached_company", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /contacts/{contact_id}/companies", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "63a07ddf05a32042dffac965", "k": "param", "n": "id", "or": "contact_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/contacts/{contact_id}/companies", "q": { "exist": ["id", "intercom_version"] }, "r": { "param": { "contact_id": "id" } }, "s": [{ "lit": "contacts" }, { "var": "id" }, { "lit": "companies" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "contact_attached_company", "name__orig": "contact_attached_company", "Name": "ContactAttachedCompany", "name_": "contact_attached_company", "name-": "contact-attached-company", "NAME": "CONTACT_ATTACHED_COMPANY", "index$": 24 }, { "active": true, "entity": "contact_attached_company", "key$": "BasicContactAttachedCompanyFlow", "kind": "basic", "name": "BasicContactAttachedCompanyFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "contact_id": "contact01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "contact_attached_company_ref01" } }], "index$": 0 }] }, 'ContactAttachedCompany', { "GET /contacts/{contact_id}/companies": { "protocol": "http", "parameters": [{ "name": "contact_id", "in": "path", "description": "The unique identifier for the contact which is given by Intercom", "example": "63a07ddf05a32042dffac965", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let contact_attached_company_ref01_data = Object.values(setup.data.existing.contact_attached_company)[0];
        // LIST
        const contact_attached_company_ref01_ent = client.ContactAttachedCompany();
        const contact_attached_company_ref01_match = {};
        contact_attached_company_ref01_match['contact_id'] = setup.idmap['contact01'];
        const contact_attached_company_ref01_list = (await contact_attached_company_ref01_ent.list(contact_attached_company_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/contact_attached_company/ContactAttachedCompanyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['contact_attached_company01', 'contact_attached_company02', 'contact_attached_company03', 'contact01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_CONTACT_ATTACHED_COMPANY_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_CONTACT_ATTACHED_COMPANY_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_CONTACT_ATTACHED_COMPANY_ENTID'];
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
//# sourceMappingURL=ContactAttachedCompanyEntity.test.js.map