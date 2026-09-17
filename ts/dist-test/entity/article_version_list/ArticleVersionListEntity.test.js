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
(0, node_test_1.describe)('ArticleVersionListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.ArticleVersionList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'article_version_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id" }, "name": "article_version_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": 123, "kind": "param", "name": "id", "orig": "article_id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }], "query": [{ "active": true, "example": "en", "kind": "query", "name": "locale", "orig": "locale", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": 25, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 2 }] }, "contract": { "id": "GET /articles/{article_id}/versions", "json": "{\"operationId\":\"listArticleVersions\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the article whose versions you are listing.\",\"example\":123,\"in\":\"path\",\"name\":\"article_id\",\"required\":true,\"schema\":{\"type\":\"integer\"}},{\"description\":\"The page of results to fetch. Defaults to the first page.\",\"example\":1,\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"The number of results to return per page.\",\"example\":25,\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Filter versions to a specific locale. Use the locale identifier (for example `en`, `fr`). If the locale is not configured for the workspace, a `400` is returned.\",\"example\":\"en\",\"in\":\"query\",\"name\":\"locale\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Versions found\":{\"value\":{\"data\":[{\"article_id\":\"123\",\"author_id\":\"991267502\",\"created_at\":1734537292,\"created_by_id\":\"5017691\",\"created_via\":\"web\",\"description\":\"\",\"from_version_id\":\"300\",\"id\":\"301\",\"state\":\"published\",\"title\":\"This is the article title\",\"type\":\"article_version\"},{\"article_id\":\"123\",\"author_id\":\"991267502\",\"created_at\":1734530000,\"created_by_id\":\"5017691\",\"created_via\":\"api\",\"description\":\"\",\"from_version_id\":null,\"id\":\"300\",\"state\":\"draft\",\"title\":\"This was the earlier title\",\"type\":\"article_version\"}],\"pages\":{\"page\":1,\"per_page\":25,\"total_pages\":1,\"type\":\"pages\"},\"total_count\":2,\"type\":\"list\"}}},\"schema\":{\"description\":\"A paginated list of versions of an article.\",\"properties\":{\"data\":{\"description\":\"An array of Article version summary objects.\",\"items\":{\"description\":\"A metadata summary of an article version, as returned by the version-history list endpoint. Omits the version's body content - fetch a single version to retrieve its `body` and `body_markdown`.\",\"properties\":{\"article_id\":{\"description\":\"The unique identifier of the article this version belongs to.\",\"example\":\"123\",\"type\":\"string\"},\"author_id\":{\"description\":\"The id of the teammate listed as the article's author at this version.\",\"example\":\"991267502\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time the version was created, as a UTC Unix timestamp.\",\"example\":1734537292,\"format\":\"date-time\",\"type\":\"integer\"},\"created_by_id\":{\"description\":\"The id of the teammate who created this version.\",\"example\":\"5017691\",\"nullable\":true,\"type\":\"string\"},\"created_via\":{\"description\":\"How this version was created (for example `web`, `api`).\",\"example\":\"web\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the article at this version.\",\"example\":\"\",\"nullable\":true,\"type\":\"string\"},\"from_version_id\":{\"description\":\"The id of the version this version was created from, or `null` if this is the first version.\",\"example\":\"300\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the version.\",\"example\":\"301\",\"type\":\"string\"},\"state\":{\"description\":\"Whether this version is the currently published version of the article (`published`) or an earlier non-live version (`draft`).\",\"enum\":[\"published\",\"draft\"],\"example\":\"published\",\"type\":\"string\"},\"title\":{\"description\":\"The title of the article at this version.\",\"example\":\"This is the article title\",\"type\":\"string\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `article_version`.\",\"enum\":[\"article_version\"],\"example\":\"article_version\",\"type\":\"string\"}},\"title\":\"Article Version Summary\",\"type\":\"object\"},\"type\":\"array\"},\"pages\":{\"description\":\"Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.\\nA \\\"cursor\\\" or pointer is used to keep track of the current position in the result set, allowing the API to return the data in small chunks or \\\"pages\\\" as needed.\\n\",\"nullable\":true,\"properties\":{\"next\":{\"nullable\":true,\"properties\":{\"per_page\":{\"description\":\"The number of results to fetch per page.\",\"example\":2,\"type\":\"integer\"},\"starting_after\":{\"description\":\"The cursor to use in the next request to get the next page of results.\",\"example\":\"your-cursor-from-response\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Pagination: Starting After\",\"type\":\"object\"},\"page\":{\"description\":\"The current page\",\"example\":1,\"type\":\"integer\"},\"per_page\":{\"description\":\"Number of results per page\",\"example\":2,\"type\":\"integer\"},\"total_pages\":{\"description\":\"Total number of pages\",\"example\":13,\"type\":\"integer\"},\"type\":{\"description\":\"the type of object `pages`.\",\"enum\":[\"pages\"],\"example\":\"pages\",\"type\":\"string\"}},\"title\":\"Cursor based pages\",\"type\":\"object\"},\"total_count\":{\"description\":\"A count of the total number of versions.\",\"example\":2,\"type\":\"integer\"},\"type\":{\"description\":\"The type of the object - `list`.\",\"enum\":[\"list\"],\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Article Versions\",\"type\":\"object\"}}},\"description\":\"Versions found\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"Unknown locale\":{\"value\":{\"errors\":[{\"code\":\"parameter_invalid\",\"message\":\"Unknown locale\"}],\"request_id\":\"6f3c2b1a-2d4e-4f6a-9b8c-1a2b3c4d5e6f\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unknown locale\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"12a938a3-314e-4939-b773-5cd45738bd21\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"CustomObjectNotFound\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Custom object instance not found\"}],\"request_id\":\"12a938a3-314e-4939-b773-5cd45738bd21\",\"type\":\"error.list\"}},\"IntegrationNotFound\":{\"value\":{\"errors\":[{\"code\":\"data_invalid\",\"message\":\"Integration not found\"}],\"request_id\":\"12a938a3-314e-4939-b773-5cd45738bd21\",\"type\":\"error.list\"}},\"ObjectNotFound\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Object not found\"}],\"request_id\":\"12a938a3-314e-4939-b773-5cd45738bd21\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/articles/{article_id}/versions", "rename": { "param": { "article_id": "id" } }, "segments": [{ "lit": "articles" }, { "var": "id" }, { "lit": "versions" }], "select": { "$action": "versions", "exist": ["id", "intercom_version", "locale", "page", "per_page"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "article_version_list", "name__orig": "article_version_list", "Name": "ArticleVersionList", "name_": "article_version_list", "name-": "article-version-list", "NAME": "ARTICLE_VERSION_LIST", "index$": 10 }, { "active": true, "entity": "article_version_list", "key$": "BasicArticleVersionListFlow", "kind": "basic", "name": "BasicArticleVersionListFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "article_id": "article01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "article_version_list_ref01" } }], "index$": 0 }] }, 'ArticleVersionList');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let article_version_list_ref01_data = Object.values(setup.data.existing.article_version_list)[0];
        // LIST
        const article_version_list_ref01_ent = client.ArticleVersionList();
        const article_version_list_ref01_match = {};
        article_version_list_ref01_match['article_id'] = setup.idmap['article01'];
        const article_version_list_ref01_list = (await article_version_list_ref01_ent.list(article_version_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/article_version_list/ArticleVersionListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['article_version_list01', 'article_version_list02', 'article_version_list03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_ARTICLE_VERSION_LIST_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_ARTICLE_VERSION_LIST_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_ARTICLE_VERSION_LIST_ENTID'];
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
//# sourceMappingURL=ArticleVersionListEntity.test.js.map