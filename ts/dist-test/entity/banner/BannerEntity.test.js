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
(0, node_test_1.describe)('BannerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.Banner();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'banner.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "action": { "a": true, "h": "Action", "n": "action", "r": false, "sh": "The action a contact can take on the banner, or `null` when the banner has no action.", "t": "`$OBJECT`", "key$": "action", "index$": 0 }, "body": { "a": true, "h": "Body", "n": "body", "r": false, "sh": "The banner's body content as HTML.", "t": "`$STRING`", "key$": "body", "index$": 1 }, "client_targeting": { "a": true, "h": "Client Targeting", "n": "client_targeting", "r": false, "sh": "Reserved for future use.", "t": "`$ARRAY`", "key$": "client_targeting", "index$": 2 }, "created_at": { "a": true, "fo": "timestamp", "h": "Created At", "n": "created_at", "r": false, "sh": "The time the contact's view of this banner was created.", "t": "`$INTEGER`", "key$": "created_at", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The id of the banner.", "t": "`$STRING`", "key$": "id", "index$": 4 }, "position": { "a": true, "h": "Position", "n": "position", "r": false, "sh": "Where the banner is positioned.", "t": "`$STRING`", "key$": "position", "index$": 5 }, "show_dismiss_button": { "a": true, "h": "Show Dismiss Button", "n": "show_dismiss_button", "r": false, "sh": "Whether the banner should display a dismiss control.", "t": "`$BOOLEAN`", "key$": "show_dismiss_button", "index$": 6 }, "style": { "a": true, "h": "Style", "n": "style", "r": false, "sh": "How the banner is displayed.", "t": "`$STRING`", "key$": "style", "index$": 7 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "The banner's title.", "t": "`$STRING`", "key$": "title", "index$": 8 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "type", "index$": 9 }, "view_id": { "a": true, "h": "View Id", "n": "view_id", "r": false, "sh": "The id of the contact's view of this banner.", "t": "`$STRING`", "key$": "view_id", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "banner", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /contacts/{id}/banners", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "contact_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/contacts/{id}/banners", "q": { "exist": ["contact_id", "intercom_version"] }, "r": { "param": { "id": "contact_id" } }, "s": [{ "lit": "contacts" }, { "var": "contact_id" }, { "lit": "banners" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.contact"]] }, "key$": "banner", "name__orig": "banner", "Name": "Banner", "name_": "banner", "name-": "banner", "NAME": "BANNER", "index$": 13 }, { "active": true, "entity": "banner", "key$": "BasicBannerFlow", "kind": "basic", "name": "BasicBannerFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "contact_id": "contact01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "banner_ref01" } }], "index$": 0 }] }, 'Banner', { "GET /contacts/{id}/banners": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "required": true, "description": "The unique identifier of a contact.", "schema": { "type": "string" }, "index$": 0 }, { "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let banner_ref01_data = Object.values(setup.data.existing.banner)[0];
        // LIST
        const banner_ref01_ent = client.Banner();
        const banner_ref01_match = {};
        banner_ref01_match['contact_id'] = setup.idmap['contact01'];
        const banner_ref01_list = (await banner_ref01_ent.list(banner_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/banner/BannerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['banner01', 'banner02', 'banner03', 'contact01', 'contact02', 'contact03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_BANNER_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_BANNER_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_BANNER_ENTID'];
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
//# sourceMappingURL=BannerEntity.test.js.map