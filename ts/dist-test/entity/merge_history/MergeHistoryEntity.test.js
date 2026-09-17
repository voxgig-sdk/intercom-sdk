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
(0, node_test_1.describe)('MergeHistoryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.MergeHistory();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'merge_history.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "date-time", "name": "merged_at", "req": false, "short": "(Unix timestamp in seconds) The time when the merge occurred.", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "source_contact_id", "req": false, "short": "The Intercom ID of the contact that was merged into this contact.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "source_contact_role", "req": false, "short": "The role of the contact that was merged in.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "type", "req": false, "short": "The type of object.", "type": "`$STRING`", "index$": 3 }], "name": "merge_history", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "63a07ddf05a32042dffac965", "kind": "param", "name": "contact_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "cursor", "orig": "cursor", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "order", "orig": "order", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": 50, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 2 }] }, "contract": { "id": "GET /contacts/{id}/merge_history", "json": "{\"operationId\":\"ListContactMergeHistory\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The id of the contact to fetch merge history for.\",\"example\":\"63a07ddf05a32042dffac965\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"A cursor for pagination. Pass the `next_cursor` value from a previous response to fetch the next page.\",\"in\":\"query\",\"name\":\"cursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The number of results to return per page (default 50, max 150).\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"schema\":{\"default\":50,\"maximum\":150,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"The order to return results in. Defaults to descending.\",\"in\":\"query\",\"name\":\"order\",\"required\":false,\"schema\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"data\":[{\"merged_at\":1571672154,\"source_contact_id\":\"5ba682d23d7cf92bef87bfd3\",\"source_contact_role\":\"lead\",\"type\":\"merge_history\"}],\"has_more\":true,\"next_cursor\":\"eyJpZCI6IjYyMzQ1NiJ9\",\"type\":\"list\"}}},\"schema\":{\"description\":\"A paginated list of merge history entries for a contact.\",\"properties\":{\"data\":{\"description\":\"An array of merge history entries.\",\"items\":{\"description\":\"A record of a contact that was merged into another contact.\",\"properties\":{\"merged_at\":{\"description\":\"(Unix timestamp in seconds) The time when the merge occurred.\",\"example\":1571672154,\"format\":\"date-time\",\"nullable\":true,\"type\":\"integer\"},\"source_contact_id\":{\"description\":\"The Intercom ID of the contact that was merged into this contact.\",\"example\":\"5ba682d23d7cf92bef87bfd3\",\"type\":\"string\"},\"source_contact_role\":{\"description\":\"The role of the contact that was merged in.\",\"enum\":[\"lead\",\"user\"],\"example\":\"lead\",\"type\":\"string\"},\"type\":{\"description\":\"The type of object.\",\"example\":\"merge_history\",\"type\":\"string\"}},\"title\":\"Merge History Item\",\"type\":\"object\"},\"type\":\"array\"},\"has_more\":{\"description\":\"Whether there are more results to fetch.\",\"example\":false,\"type\":\"boolean\"},\"next_cursor\":{\"description\":\"A cursor to pass as the `cursor` query parameter to fetch the next page of results. Absent when there are no more pages.\",\"example\":\"WyIxNjM0NTY3ODkwIl0\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type of object.\",\"enum\":[\"list\"],\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Merge History List\",\"type\":\"object\"}}},\"description\":\"successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"45b30bd1-75d2-40cc-bb39-74ac133a2836\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Contact not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Contact not found\"}],\"request_id\":\"45b30bd1-75d2-40cc-bb39-74ac133a2836\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Contact not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/contacts/{id}/merge_history", "rename": { "param": { "id": "contact_id" } }, "segments": [{ "lit": "contacts" }, { "var": "contact_id" }, { "lit": "merge_history" }], "select": { "exist": ["contact_id", "cursor", "intercom_version", "order", "per_page"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["contact"]] }, "key$": "merge_history", "name__orig": "merge_history", "Name": "MergeHistory", "name_": "merge_history", "name-": "merge-history", "NAME": "MERGE_HISTORY", "index$": 60 }, { "active": true, "entity": "merge_history", "key$": "BasicMergeHistoryFlow", "kind": "basic", "name": "BasicMergeHistoryFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "contact_id": "contact01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "merge_history_ref01" } }], "index$": 0 }] }, 'MergeHistory');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let merge_history_ref01_data = Object.values(setup.data.existing.merge_history)[0];
        // LIST
        const merge_history_ref01_ent = client.MergeHistory();
        const merge_history_ref01_match = {};
        merge_history_ref01_match['contact_id'] = setup.idmap['contact01'];
        const merge_history_ref01_list = (await merge_history_ref01_ent.list(merge_history_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/merge_history/MergeHistoryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['merge_history01', 'merge_history02', 'merge_history03', 'contact01', 'contact02', 'contact03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_MERGE_HISTORY_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_MERGE_HISTORY_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_MERGE_HISTORY_ENTID'];
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
//# sourceMappingURL=MergeHistoryEntity.test.js.map