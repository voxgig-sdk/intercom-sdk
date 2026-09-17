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
(0, node_test_1.describe)('DeletedEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.Deleted();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'deleted.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "date-time", "name": "deleted_at", "req": false, "short": "The time when the conversation was deleted.", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "id", "req": false, "short": "The ID of the deleted conversation.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "metrics_retained", "req": false, "short": "Whether reporting metrics are retained for this conversation ID", "type": "`$BOOLEAN`", "index$": 2 }, { "active": true, "name": "type", "req": false, "short": "String representing the object's type.", "type": "`$STRING`", "index$": 3 }], "id": { "field": "id", "name": "id" }, "name": "deleted", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }], "query": [{ "active": true, "example": "desc", "kind": "query", "name": "order", "orig": "order", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 2 }] }, "contract": { "id": "GET /conversations/deleted", "json": "{\"operationId\":\"listDeletedConversationIds\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The page of results to fetch. Defaults to first page\",\"example\":1,\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"How many results per page\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"schema\":{\"default\":20,\"maximum\":60,\"type\":\"integer\"}},{\"description\":\"`asc` or `desc`. Returns the conversation IDs in ascending or descending order. Defaults to desc\",\"example\":\"desc\",\"in\":\"query\",\"name\":\"order\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"conversations\":[{\"deleted_at\":1734537460,\"id\":\"512\",\"metrics_retained\":false,\"type\":\"conversation\"},{\"deleted_at\":1734537400,\"id\":\"513\",\"metrics_retained\":true,\"type\":\"conversation\"}],\"pages\":{\"next\":\"https://api.intercom.io/conversations/deleted?per_page=2&order=desc&page=2\",\"page\":1,\"per_page\":2,\"total_pages\":2,\"type\":\"pages\"},\"total_count\":4,\"type\":\"conversations.list\"}}},\"schema\":{\"description\":\"A paginated list of deleted conversation IDs.\",\"properties\":{\"conversations\":{\"description\":\"The list of deleted conversation IDs.\",\"items\":{\"description\":\"A deleted conversation record containing its ID, metrics retained status and deletion timestamp.\",\"properties\":{\"deleted_at\":{\"description\":\"The time when the conversation was deleted.\",\"example\":1734537745,\"format\":\"date-time\",\"type\":\"integer\"},\"id\":{\"description\":\"The ID of the deleted conversation.\",\"example\":\"512\",\"type\":\"string\"},\"metrics_retained\":{\"description\":\"Whether reporting metrics are retained for this conversation ID\",\"example\":true,\"type\":\"boolean\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `conversation`.\",\"example\":\"conversation\",\"type\":\"string\"}},\"title\":\"Conversation\",\"type\":\"object\"},\"type\":\"array\"},\"pages\":{\"description\":\"The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests.\\n\\nTheir responses are likely to contain a pages object that hosts pagination links which a client can use to paginate through the data without having to construct a query. The link relations for the pages field are as follows.\\n\",\"properties\":{\"next\":{\"description\":\"A link to the next page of results. A response that does not contain a next link does not have further data to fetch.\",\"format\":\"uri\",\"nullable\":true,\"type\":\"string\"},\"page\":{\"example\":1,\"type\":\"integer\"},\"per_page\":{\"example\":50,\"type\":\"integer\"},\"total_pages\":{\"example\":1,\"type\":\"integer\"},\"type\":{\"enum\":[\"pages\"],\"example\":\"pages\",\"type\":\"string\"}},\"title\":\"Pagination Object\",\"type\":\"object\"},\"total_count\":{\"description\":\"Total number of items available.\",\"example\":10,\"type\":\"integer\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `conversations.list`.\",\"example\":\"conversations.list\",\"type\":\"string\"}},\"title\":\"Conversations\",\"type\":\"object\"}}},\"description\":\"View all deleted conversation IDs\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"Resource not available\":{\"value\":{\"errors\":[{\"code\":\"intercom_version_invalid\",\"message\":\"Requested resource is not available in current API version.\"}],\"request_id\":\"7a80b950-b392-499f-85db-ea7c6c424d37\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Resource not available\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"310f55b0-2660-43e8-bed4-7e82b2f40920\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/conversations/deleted", "segments": [{ "lit": "conversations" }, { "lit": "deleted" }], "select": { "exist": ["intercom_version", "order", "page", "per_page"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "deleted", "name__orig": "deleted", "Name": "Deleted", "name_": "deleted", "name-": "deleted", "NAME": "DELETED", "index$": 44 }, { "active": true, "entity": "deleted", "key$": "BasicDeletedFlow", "kind": "basic", "name": "BasicDeletedFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "deleted_ref01" } }], "index$": 0 }] }, 'Deleted');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let deleted_ref01_data = Object.values(setup.data.existing.deleted)[0];
        // LIST
        const deleted_ref01_ent = client.Deleted();
        const deleted_ref01_match = {};
        const deleted_ref01_list = (await deleted_ref01_ent.list(deleted_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/deleted/DeletedTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['deleted01', 'deleted02', 'deleted03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_DELETED_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_DELETED_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_DELETED_ENTID'];
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
//# sourceMappingURL=DeletedEntity.test.js.map