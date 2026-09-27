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
(0, node_test_1.describe)('ContactSegmentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.ContactSegment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'contact_segment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "count": { "a": true, "h": "Count", "n": "count", "r": false, "sh": "The number of items in the user segment.", "t": "`$INTEGER`", "key$": "count", "index$": 0 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "sh": "The time the segment was created.", "t": "`$INTEGER`", "key$": "created_at", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The unique identifier representing the segment.", "t": "`$STRING`", "key$": "id", "index$": 2 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the segment.", "t": "`$STRING`", "key$": "name", "index$": 3 }, "person_type": { "a": true, "h": "Person Type", "n": "person_type", "r": false, "sh": "Type of the contact: contact (lead) or user.", "t": "`$STRING`", "key$": "person_type", "index$": 4 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "The type of object.", "t": "`$STRING`", "key$": "type", "index$": 5 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": false, "sh": "The time the segment was updated.", "t": "`$INTEGER`", "key$": "updated_at", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "contact_segment", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /contacts/{contact_id}/segments", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "63a07ddf05a32042dffac965", "k": "param", "n": "id", "or": "contact_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/contacts/{contact_id}/segments", "q": { "exist": ["id", "intercom_version"] }, "r": { "param": { "contact_id": "id" } }, "s": [{ "lit": "contacts" }, { "var": "id" }, { "lit": "segments" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "contact_segment", "name__orig": "contact_segment", "Name": "ContactSegment", "name_": "contact_segment", "name-": "contact-segment", "NAME": "CONTACT_SEGMENT", "index$": 26 }, { "active": true, "entity": "contact_segment", "key$": "BasicContactSegmentFlow", "kind": "basic", "name": "BasicContactSegmentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "contact_id": "contact01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "contact_segment_ref01" } }], "index$": 0 }] }, 'ContactSegment', { "GET /contacts/{contact_id}/segments": { "protocol": "http", "parameters": [{ "name": "contact_id", "in": "path", "description": "The unique identifier for the contact which is given by Intercom", "example": "63a07ddf05a32042dffac965", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let contact_segment_ref01_data = Object.values(setup.data.existing.contact_segment)[0];
        // LIST
        const contact_segment_ref01_ent = client.ContactSegment();
        const contact_segment_ref01_match = {};
        contact_segment_ref01_match['contact_id'] = setup.idmap['contact01'];
        const contact_segment_ref01_list = (await contact_segment_ref01_ent.list(contact_segment_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/contact_segment/ContactSegmentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['contact_segment01', 'contact_segment02', 'contact_segment03', 'contact01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_CONTACT_SEGMENT_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_CONTACT_SEGMENT_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_CONTACT_SEGMENT_ENTID'];
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
//# sourceMappingURL=ContactSegmentEntity.test.js.map