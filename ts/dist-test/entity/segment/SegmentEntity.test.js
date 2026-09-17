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
(0, node_test_1.describe)('SegmentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.Segment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'segment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "count", "req": false, "short": "The number of items in the user segment.", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "created_at", "req": false, "short": "The time the segment was created.", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "id", "req": false, "short": "The unique identifier representing the segment.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "name", "req": false, "short": "The name of the segment.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "person_type", "req": false, "short": "Type of the contact: contact (lead) or user.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "type", "req": false, "short": "The type of object.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "updated_at", "req": false, "short": "The time the segment was updated.", "type": "`$INTEGER`", "index$": 6 }], "id": { "field": "id", "name": "id" }, "name": "segment", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }], "query": [{ "active": true, "example": true, "kind": "query", "name": "include_count", "orig": "include_count", "reqd": false, "type": "`$BOOLEAN`", "index$": 0 }] }, "contract": { "id": "GET /segments", "json": "{\"operationId\":\"listSegments\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"It includes the count of contacts that belong to each segment.\",\"example\":true,\"in\":\"query\",\"name\":\"include_count\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"segments\":[{\"created_at\":1734537820,\"id\":\"6762f25c1bb69f9f2193bc22\",\"name\":\"John segment\",\"person_type\":\"user\",\"type\":\"segment\",\"updated_at\":1734537820},{\"created_at\":1734537820,\"id\":\"6762f25c1bb69f9f2193bc23\",\"name\":\"Jane segment\",\"person_type\":\"user\",\"type\":\"segment\",\"updated_at\":1734537820}],\"type\":\"segment.list\"}}},\"schema\":{\"description\":\"This will return a list of Segment Objects. The result may also have a pages object if the response is paginated.\",\"properties\":{\"pages\":{\"description\":\"A pagination object, which may be empty, indicating no further pages to fetch.\",\"type\":\"object\"},\"segments\":{\"description\":\"A list of Segment objects\",\"items\":{\"description\":\"A segment is a group of your contacts defined by the rules that you set.\",\"properties\":{\"count\":{\"description\":\"The number of items in the user segment. It's returned when `include_count=true` is included in the request.\",\"example\":3,\"nullable\":true,\"type\":\"integer\"},\"created_at\":{\"description\":\"The time the segment was created.\",\"example\":1394621988,\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier representing the segment.\",\"example\":\"56203d253cba154d39010062\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the segment.\",\"example\":\"Active\",\"type\":\"string\"},\"person_type\":{\"description\":\"Type of the contact: contact (lead) or user.\",\"enum\":[\"contact\",\"user\"],\"example\":\"contact\",\"type\":\"string\"},\"type\":{\"description\":\"The type of object.\",\"enum\":[\"segment\"],\"example\":\"segment\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time the segment was updated.\",\"example\":1394622004,\"type\":\"integer\"}},\"title\":\"Segment\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of the object\",\"enum\":[\"segment.list\"],\"example\":\"segment.list\",\"type\":\"string\"}},\"title\":\"Segment List\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"b1939528-98f0-4a63-a442-2cc9203fc8c7\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/segments", "segments": [{ "lit": "segments" }], "select": { "exist": ["include_count", "intercom_version"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "123", "kind": "param", "name": "id", "orig": "segment_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /segments/{segment_id}", "json": "{\"operationId\":\"retrieveSegment\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identified of a given segment.\",\"example\":\"123\",\"in\":\"path\",\"name\":\"segment_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful response\":{\"value\":{\"created_at\":1734537823,\"id\":\"6762f25f1bb69f9f2193bc26\",\"name\":\"John segment\",\"person_type\":\"user\",\"type\":\"segment\",\"updated_at\":1734537823}}},\"schema\":{\"description\":\"A segment is a group of your contacts defined by the rules that you set.\",\"properties\":{\"count\":{\"description\":\"The number of items in the user segment. It's returned when `include_count=true` is included in the request.\",\"example\":3,\"nullable\":true,\"type\":\"integer\"},\"created_at\":{\"description\":\"The time the segment was created.\",\"example\":1394621988,\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier representing the segment.\",\"example\":\"56203d253cba154d39010062\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the segment.\",\"example\":\"Active\",\"type\":\"string\"},\"person_type\":{\"description\":\"Type of the contact: contact (lead) or user.\",\"enum\":[\"contact\",\"user\"],\"example\":\"contact\",\"type\":\"string\"},\"type\":{\"description\":\"The type of object.\",\"enum\":[\"segment\"],\"example\":\"segment\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time the segment was updated.\",\"example\":1394622004,\"type\":\"integer\"}},\"title\":\"Segment\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"be0d5309-d722-4d2a-aae9-77f4bc0a2cd0\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Segment not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Resource Not Found\"}],\"request_id\":\"bd697cc6-7757-488c-a89f-16e6feaf7585\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Segment not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/segments/{segment_id}", "rename": { "param": { "segment_id": "id" } }, "segments": [{ "lit": "segments" }, { "var": "id" }], "select": { "exist": ["id", "intercom_version"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "segment", "name__orig": "segment", "Name": "Segment", "name_": "segment", "name-": "segment", "NAME": "SEGMENT", "index$": 72 }, { "active": true, "entity": "segment", "key$": "BasicSegmentFlow", "kind": "basic", "name": "BasicSegmentFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "segment_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "segment_ref01", "srcdatavar": "segment_ref01_data", "suffix": "_dt0" }, "match": { "id": "segment01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-segment_ref01" } }], "index$": 1 }] }, 'Segment');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let segment_ref01_data = Object.values(setup.data.existing.segment)[0];
        // LIST
        const segment_ref01_ent = client.Segment();
        const segment_ref01_match = {};
        const segment_ref01_list = (await segment_ref01_ent.list(segment_ref01_match)).map((e) => e.data());
        // LOAD
        const segment_ref01_match_dt0 = {};
        segment_ref01_match_dt0.id = segment_ref01_data.id;
        const segment_ref01_data_dt0 = (await segment_ref01_ent.load(segment_ref01_match_dt0)).data();
        (0, node_assert_1.default)(segment_ref01_data_dt0.id === segment_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/segment/SegmentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['segment01', 'segment02', 'segment03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_SEGMENT_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_SEGMENT_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_SEGMENT_ENTID'];
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
//# sourceMappingURL=SegmentEntity.test.js.map