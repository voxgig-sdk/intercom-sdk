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
(0, node_test_1.describe)('IpAllowlistEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.IpAllowlist();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ip_allowlist.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": false, "sh": "Whether the IP allowlist is enabled for the workspace.", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 0 }, "ip_allowlist": { "a": true, "h": "Ip Allowlist", "n": "ip_allowlist", "r": false, "sh": "List of allowed IP addresses and/or IP ranges in CIDR notation.", "t": "`$ARRAY`", "key$": "ip_allowlist", "index$": 1 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "type", "index$": 2 } }, "name": "ip_allowlist", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /ip_allowlist", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/ip_allowlist", "q": { "exist": ["intercom_version"] }, "r": {}, "s": [{ "lit": "ip_allowlist" }], "t": { "req": "`reqdata`", "res": "`body.ip_allowlist`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /ip_allowlist", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/ip_allowlist", "q": { "exist": ["intercom_version"] }, "r": {}, "s": [{ "lit": "ip_allowlist" }], "t": { "req": { "ip_allowlist": "`reqdata`" }, "res": "`body.ip_allowlist`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "ip_allowlist", "name__orig": "ip_allowlist", "Name": "IpAllowlist", "name_": "ip_allowlist", "name-": "ip-allowlist", "NAME": "IP_ALLOWLIST", "index$": 57 }, { "active": true, "entity": "ip_allowlist", "key$": "BasicIpAllowlistFlow", "kind": "basic", "name": "BasicIpAllowlistFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "ip_allowlist_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "ip_allowlist_ref01", "srcdatavar": "ip_allowlist_ref01_data", "suffix": "_up0", "textfield": "type" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ip_allowlist_ref01" } }], "v": [], "index$": 1 }] }, 'IpAllowlist', { "GET /ip_allowlist": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }] }, "PUT /ip_allowlist": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "title": "IP Allowlist", "type": "object", "description": "IP allowlist settings for the workspace.", "properties": { "type": { "description": "String representing the object's type. Always has the value `ip_allowlist`.", "example": "ip_allowlist", "key$": "type", "type": "string" }, "enabled": { "description": "Whether the IP allowlist is enabled for the workspace.", "example": true, "key$": "enabled", "type": "boolean" }, "ip_allowlist": { "description": "List of allowed IP addresses and/or IP ranges in CIDR notation.\nExamples:\n- Single IP: `192.168.0.1`\n- IP range: `192.168.0.1/24` (allows 192.168.0.0 - 192.168.0.255)\n", "example": ["192.168.1.0/24", "10.0.0.1"], "items": { "type": "string" }, "key$": "ip_allowlist", "type": "array" } }, "x-ref": "#/components/schemas/ip_allowlist", "index$": 1 }, "examples": { "successful": { "summary": "Enable IP allowlist", "value": { "enabled": true, "ip_allowlist": ["192.168.1.0/24", "10.0.0.1"] } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let ip_allowlist_ref01_data = Object.values(setup.data.existing.ip_allowlist)[0];
        // LIST
        const ip_allowlist_ref01_ent = client.IpAllowlist();
        const ip_allowlist_ref01_match = {};
        const ip_allowlist_ref01_list = (await ip_allowlist_ref01_ent.list(ip_allowlist_ref01_match)).map((e) => e.data());
        // UPDATE
        const ip_allowlist_ref01_data_up0 = {};
        const ip_allowlist_ref01_markdef_up0 = { name: 'type', value: 'Mark01-ip_allowlist_ref01_' + setup.now };
        ip_allowlist_ref01_data_up0[ip_allowlist_ref01_markdef_up0.name] = ip_allowlist_ref01_markdef_up0.value;
        const ip_allowlist_ref01_resdata_up0 = (await ip_allowlist_ref01_ent.update(ip_allowlist_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != ip_allowlist_ref01_resdata_up0);
        (0, node_assert_1.default)(ip_allowlist_ref01_resdata_up0[ip_allowlist_ref01_markdef_up0.name] === ip_allowlist_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ip_allowlist/IpAllowlistTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ip_allowlist01', 'ip_allowlist02', 'ip_allowlist03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_IP_ALLOWLIST_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_IP_ALLOWLIST_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_IP_ALLOWLIST_ENTID'];
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
//# sourceMappingURL=IpAllowlistEntity.test.js.map