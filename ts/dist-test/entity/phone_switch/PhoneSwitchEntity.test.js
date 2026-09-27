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
(0, node_test_1.describe)('PhoneSwitchEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.PhoneSwitch();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'phone_switch.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "custom_attributes": { "a": true, "h": "Custom Attributes", "n": "custom_attributes", "r": false, "sh": "An object containing the different custom attributes associated to the conversation as key-value pairs.", "t": "`$OBJECT`", "union": { "branches": 4, "count": 2, "depth": 3 }, "key$": "custom_attributes", "index$": 0 }, "phone": { "a": true, "h": "Phone", "n": "phone", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger.", "t": "`$STRING`", "key$": "phone", "index$": 1 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "t": "`$STRING`", "key$": "type", "index$": 2 } }, "name": "phone_switch", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /phone_call_redirects", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/phone_call_redirects", "q": { "exist": ["intercom_version"] }, "r": {}, "s": [{ "lit": "phone_call_redirects" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "phone_switch", "name__orig": "phone_switch", "Name": "PhoneSwitch", "name_": "phone_switch", "name-": "phone-switch", "NAME": "PHONE_SWITCH", "index$": 69 }, { "active": true, "entity": "phone_switch", "key$": "BasicPhoneSwitchFlow", "kind": "basic", "name": "BasicPhoneSwitchFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "phone_switch_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'PhoneSwitch', { "POST /phone_call_redirects": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "description": "You can create an phone switch", "type": "object", "title": "Create Phone Switch Request Payload", "nullable": true, "properties": { "phone": { "type": "string", "description": "Phone number in E.164 format, that will receive the SMS to continue the conversation in the Messenger.", "example": "+1 1234567890", "key$": "phone" }, "custom_attributes": { "title": "Custom Attributes", "type": "object", "description": "An object containing the different custom attributes associated to the conversation as key-value pairs. For relationship attributes the value will be a list of custom object instance models. System-defined attributes such as \"CX Score rating\" and \"CX Score explanation\" may also be included.", "additionalProperties": { "anyOf": [{ "type": "string" }, { "type": "integer" }, { "oneOf": [], "x-ref": "#/components/schemas/datetime" }, { "description": "The list of associated custom object instances for a given reference attribute on the parent object.", "properties": {}, "title": "Custom Object Instances", "type": "object", "x-ref": "#/components/schemas/custom_object_instance_list" }] }, "example": { "paid_subscriber": true, "monthly_spend": 155.5, "team_mates": 9, "start_date_iso8601": "2023-03-04T09:46:14Z", "end_date_timestamp": 1677923174, "CX Score rating": 4, "CX Score explanation": "The conversation was resolved quickly and the customer expressed satisfaction with the outcome." }, "x-ref": "#/components/schemas/custom_attributes", "key$": "custom_attributes" } }, "required": ["phone"], "x-ref": "#/components/schemas/create_phone_switch_request", "index$": 1 }, "examples": { "successful": { "summary": "successful", "value": { "phone": "+353832345678", "custom_attributes": { "issue_type": "Billing", "priority": "High" } } }, "bad_request_-_exception_sending_sms": { "summary": "bad request - exception sending sms", "value": { "phone": "+353832345678", "custom_attributes": { "issue_type": "Billing", "priority": "High" } } }, "bad_request_-_invalid_number": { "summary": "bad request - invalid number", "value": { "phone": "+353832345678", "custom_attributes": { "issue_type": "Billing", "priority": "High" } } }, "unprocessable_entity": { "summary": "unprocessable entity", "value": { "phone": "+40241100100", "custom_attributes": { "issue_type": "Billing", "priority": "High" } } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const phone_switch_ref01_ent = client.PhoneSwitch();
        let phone_switch_ref01_data = setup.data.new.phone_switch['phone_switch_ref01'];
        phone_switch_ref01_data = (await phone_switch_ref01_ent.create(phone_switch_ref01_data)).data();
        (0, node_assert_1.default)(null != phone_switch_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/phone_switch/PhoneSwitchTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['phone_switch01', 'phone_switch02', 'phone_switch03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_PHONE_SWITCH_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_PHONE_SWITCH_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_PHONE_SWITCH_ENTID'];
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
//# sourceMappingURL=PhoneSwitchEntity.test.js.map