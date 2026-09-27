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
(0, node_test_1.describe)('CompanyAttachedContactEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.CompanyAttachedContact();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'company_attached_contact.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "android_app_name": { "a": true, "h": "Android App Name", "n": "android_app_name", "r": false, "sh": "The name of the Android app which the contact is using.", "t": "`$STRING`", "key$": "android_app_name", "index$": 0 }, "android_app_version": { "a": true, "h": "Android App Version", "n": "android_app_version", "r": false, "sh": "The version of the Android app which the contact is using.", "t": "`$STRING`", "key$": "android_app_version", "index$": 1 }, "android_device": { "a": true, "h": "Android Device", "n": "android_device", "r": false, "sh": "The Android device which the contact is using.", "t": "`$STRING`", "key$": "android_device", "index$": 2 }, "android_last_seen_at": { "a": true, "fo": "date-time", "h": "Android Last Seen At", "n": "android_last_seen_at", "r": false, "sh": "(Unix timestamp in seconds) The time when the contact was last seen on an Android device.", "t": "`$INTEGER`", "key$": "android_last_seen_at", "index$": 3 }, "android_os_version": { "a": true, "h": "Android Os Version", "n": "android_os_version", "r": false, "sh": "The version of the Android OS which the contact is using.", "t": "`$STRING`", "key$": "android_os_version", "index$": 4 }, "android_sdk_version": { "a": true, "h": "Android Sdk Version", "n": "android_sdk_version", "r": false, "sh": "The version of the Android SDK which the contact is using.", "t": "`$STRING`", "key$": "android_sdk_version", "index$": 5 }, "avatar": { "a": true, "h": "Avatar", "n": "avatar", "r": false, "t": "`$OBJECT`", "key$": "avatar", "index$": 6 }, "browser": { "a": true, "h": "Browser", "n": "browser", "r": false, "sh": "The name of the browser which the contact is using.", "t": "`$STRING`", "key$": "browser", "index$": 7 }, "browser_language": { "a": true, "h": "Browser Language", "n": "browser_language", "r": false, "sh": "The language set by the browser which the contact is using.", "t": "`$STRING`", "key$": "browser_language", "index$": 8 }, "browser_version": { "a": true, "h": "Browser Version", "n": "browser_version", "r": false, "sh": "The version of the browser which the contact is using.", "t": "`$STRING`", "key$": "browser_version", "index$": 9 }, "companies": { "a": true, "h": "Companies", "n": "companies", "r": false, "sh": "An object with metadata about companies attached to a contact .", "t": "`$OBJECT`", "key$": "companies", "index$": 10 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "sh": "(Unix timestamp in seconds) The time when the contact was created.", "t": "`$INTEGER`", "key$": "created_at", "index$": 11 }, "custom_attributes": { "a": true, "h": "Custom Attributes", "n": "custom_attributes", "r": false, "sh": "The custom attributes which are set for the contact.", "t": "`$OBJECT`", "key$": "custom_attributes", "index$": 12 }, "email": { "a": true, "h": "Email", "n": "email", "r": false, "sh": "The contact's email.", "t": "`$STRING`", "key$": "email", "index$": 13 }, "email_domain": { "a": true, "h": "Email Domain", "n": "email_domain", "r": false, "sh": "The contact's email domain.", "t": "`$STRING`", "key$": "email_domain", "index$": 14 }, "external_id": { "a": true, "h": "External Id", "n": "external_id", "r": false, "sh": "The unique identifier for the contact which is provided by the Client.", "t": "`$STRING`", "key$": "external_id", "index$": 15 }, "has_hard_bounced": { "a": true, "h": "Has Hard Bounced", "n": "has_hard_bounced", "r": false, "sh": "Whether the contact has had an email sent to them hard bounce.", "t": "`$BOOLEAN`", "key$": "has_hard_bounced", "index$": 16 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The unique identifier for the contact which is given by Intercom.", "t": "`$STRING`", "key$": "id", "index$": 17 }, "ios_app_name": { "a": true, "h": "Ios App Name", "n": "ios_app_name", "r": false, "sh": "The name of the iOS app which the contact is using.", "t": "`$STRING`", "key$": "ios_app_name", "index$": 18 }, "ios_app_version": { "a": true, "h": "Ios App Version", "n": "ios_app_version", "r": false, "sh": "The version of the iOS app which the contact is using.", "t": "`$STRING`", "key$": "ios_app_version", "index$": 19 }, "ios_device": { "a": true, "h": "Ios Device", "n": "ios_device", "r": false, "sh": "The iOS device which the contact is using.", "t": "`$STRING`", "key$": "ios_device", "index$": 20 }, "ios_last_seen_at": { "a": true, "fo": "date-time", "h": "Ios Last Seen At", "n": "ios_last_seen_at", "r": false, "sh": "(Unix timestamp in seconds) The last time the contact used the iOS app.", "t": "`$INTEGER`", "key$": "ios_last_seen_at", "index$": 21 }, "ios_os_version": { "a": true, "h": "Ios Os Version", "n": "ios_os_version", "r": false, "sh": "The version of iOS which the contact is using.", "t": "`$STRING`", "key$": "ios_os_version", "index$": 22 }, "ios_sdk_version": { "a": true, "h": "Ios Sdk Version", "n": "ios_sdk_version", "r": false, "sh": "The version of the iOS SDK which the contact is using.", "t": "`$STRING`", "key$": "ios_sdk_version", "index$": 23 }, "language_override": { "a": true, "h": "Language Override", "n": "language_override", "r": false, "sh": "A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change.", "t": "`$STRING`", "key$": "language_override", "index$": 24 }, "last_contacted_at": { "a": true, "fo": "date-time", "h": "Last Contacted At", "n": "last_contacted_at", "r": false, "sh": "(Unix timestamp in seconds) The time when the contact was last messaged.", "t": "`$INTEGER`", "key$": "last_contacted_at", "index$": 25 }, "last_email_clicked_at": { "a": true, "fo": "date-time", "h": "Last Email Clicked At", "n": "last_email_clicked_at", "r": false, "sh": "(Unix timestamp in seconds) The time when the contact last clicked a link in an email.", "t": "`$INTEGER`", "key$": "last_email_clicked_at", "index$": 26 }, "last_email_opened_at": { "a": true, "fo": "date-time", "h": "Last Email Opened At", "n": "last_email_opened_at", "r": false, "sh": "(Unix timestamp in seconds) The time when the contact last opened an email.", "t": "`$INTEGER`", "key$": "last_email_opened_at", "index$": 27 }, "last_replied_at": { "a": true, "fo": "date-time", "h": "Last Replied At", "n": "last_replied_at", "r": false, "sh": "(Unix timestamp in seconds) The time when the contact last messaged in.", "t": "`$INTEGER`", "key$": "last_replied_at", "index$": 28 }, "last_seen_at": { "a": true, "fo": "date-time", "h": "Last Seen At", "n": "last_seen_at", "r": false, "sh": "(Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually).", "t": "`$INTEGER`", "key$": "last_seen_at", "index$": 29 }, "location": { "a": true, "h": "Location", "n": "location", "r": false, "sh": "An object containing location meta data about a Intercom contact.", "t": "`$OBJECT`", "key$": "location", "index$": 30 }, "marked_email_as_spam": { "a": true, "h": "Marked Email As Spam", "n": "marked_email_as_spam", "r": false, "sh": "Whether the contact has marked an email sent to them as spam.", "t": "`$BOOLEAN`", "key$": "marked_email_as_spam", "index$": 31 }, "merge_history": { "a": true, "h": "Merge History", "n": "merge_history", "r": false, "sh": "A list of contacts that were merged into this contact.", "t": "`$ARRAY`", "key$": "merge_history", "index$": 32 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The contacts name.", "t": "`$STRING`", "key$": "name", "index$": 33 }, "notes": { "a": true, "h": "Notes", "n": "notes", "r": false, "sh": "An object containing notes meta data about the notes that a contact has.", "t": "`$OBJECT`", "key$": "notes", "index$": 34 }, "os": { "a": true, "h": "Os", "n": "os", "r": false, "sh": "The operating system which the contact is using.", "t": "`$STRING`", "key$": "os", "index$": 35 }, "owner_id": { "a": true, "h": "Owner Id", "n": "owner_id", "r": false, "sh": "The id of an admin that has been assigned account ownership of the contact.", "t": "`$STRING`", "key$": "owner_id", "index$": 36 }, "phone": { "a": true, "h": "Phone", "n": "phone", "r": false, "sh": "The contacts phone.", "t": "`$STRING`", "key$": "phone", "index$": 37 }, "role": { "a": true, "h": "Role", "n": "role", "r": false, "sh": "The role of the contact.", "t": "`$STRING`", "key$": "role", "index$": 38 }, "signed_up_at": { "a": true, "fo": "date-time", "h": "Signed Up At", "n": "signed_up_at", "r": false, "sh": "(Unix timestamp in seconds) The time specified for when a contact signed up.", "t": "`$INTEGER`", "key$": "signed_up_at", "index$": 39 }, "social_profiles": { "a": true, "h": "Social Profiles", "n": "social_profiles", "r": false, "sh": "An object containing social profiles that a contact has.", "t": "`$OBJECT`", "key$": "social_profiles", "index$": 40 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "sh": "An object containing tags meta data about the tags that a contact has.", "t": "`$OBJECT`", "key$": "tags", "index$": 41 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "The type of object.", "t": "`$STRING`", "key$": "type", "index$": 42 }, "unsubscribed_from_emails": { "a": true, "h": "Unsubscribed From Emails", "n": "unsubscribed_from_emails", "r": false, "sh": "Whether the contact is unsubscribed from emails.", "t": "`$BOOLEAN`", "key$": "unsubscribed_from_emails", "index$": 43 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "sh": "(Unix timestamp in seconds) The time when the contact was last updated.", "t": "`$INTEGER`", "key$": "updated_at", "index$": 44 }, "workspace_id": { "a": true, "h": "Workspace Id", "n": "workspace_id", "r": false, "sh": "The id of the workspace which the contact belongs to.", "t": "`$STRING`", "key$": "workspace_id", "index$": 45 } }, "id": { "field": "id", "name": "id" }, "name": "company_attached_contact", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /companies/{company_id}/contacts", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632", "k": "param", "n": "id", "or": "company_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/companies/{company_id}/contacts", "q": { "exist": ["id", "intercom_version"] }, "r": { "param": { "company_id": "id" } }, "s": [{ "lit": "companies" }, { "var": "id" }, { "lit": "contacts" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "company_attached_contact", "name__orig": "company_attached_contact", "Name": "CompanyAttachedContact", "name_": "company_attached_contact", "name-": "company-attached-contact", "NAME": "COMPANY_ATTACHED_CONTACT", "index$": 19 }, { "active": true, "entity": "company_attached_contact", "key$": "BasicCompanyAttachedContactFlow", "kind": "basic", "name": "BasicCompanyAttachedContactFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "company_id": "company01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "company_attached_contact_ref01" } }], "index$": 0 }] }, 'CompanyAttachedContact', { "GET /companies/{company_id}/contacts": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "company_id", "in": "path", "required": true, "description": "The unique identifier for the company which is given by Intercom", "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632", "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let company_attached_contact_ref01_data = Object.values(setup.data.existing.company_attached_contact)[0];
        // LIST
        const company_attached_contact_ref01_ent = client.CompanyAttachedContact();
        const company_attached_contact_ref01_match = {};
        company_attached_contact_ref01_match['company_id'] = setup.idmap['company01'];
        const company_attached_contact_ref01_list = (await company_attached_contact_ref01_ent.list(company_attached_contact_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/company_attached_contact/CompanyAttachedContactTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['company_attached_contact01', 'company_attached_contact02', 'company_attached_contact03', 'company01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_COMPANY_ATTACHED_CONTACT_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_COMPANY_ATTACHED_CONTACT_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_COMPANY_ATTACHED_CONTACT_ENTID'];
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
//# sourceMappingURL=CompanyAttachedContactEntity.test.js.map