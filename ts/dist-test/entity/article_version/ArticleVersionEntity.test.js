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
(0, node_test_1.describe)('ArticleVersionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.ArticleVersion();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'article_version.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "article_id": { "a": true, "h": "Article Id", "n": "article_id", "r": false, "sh": "The unique identifier of the article this version belongs to.", "t": "`$STRING`", "key$": "article_id", "index$": 0 }, "author_id": { "a": true, "h": "Author Id", "n": "author_id", "r": false, "sh": "The id of the teammate listed as the article's author at this version.", "t": "`$STRING`", "key$": "author_id", "index$": 1 }, "body": { "a": true, "h": "Body", "n": "body", "r": false, "sh": "The HTML body of the article at this version.", "t": "`$STRING`", "key$": "body", "index$": 2 }, "body_markdown": { "a": true, "h": "Body Markdown", "n": "body_markdown", "r": false, "sh": "The Markdown body of the article at this version.", "t": "`$STRING`", "key$": "body_markdown", "index$": 3 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "sh": "The time the version was created, as a UTC Unix timestamp.", "t": "`$INTEGER`", "key$": "created_at", "index$": 4 }, "created_by_id": { "a": true, "h": "Created By Id", "n": "created_by_id", "r": false, "sh": "The id of the teammate who created this version.", "t": "`$STRING`", "key$": "created_by_id", "index$": 5 }, "created_via": { "a": true, "h": "Created Via", "n": "created_via", "r": false, "sh": "How this version was created (for example `web`, `api`).", "t": "`$STRING`", "key$": "created_via", "index$": 6 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "The description of the article at this version.", "t": "`$STRING`", "key$": "description", "index$": 7 }, "from_version_id": { "a": true, "h": "From Version Id", "n": "from_version_id", "r": false, "sh": "The id of the version this version was created from, or `null` if this is the first version.", "t": "`$STRING`", "key$": "from_version_id", "index$": 8 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The unique identifier for the version.", "t": "`$STRING`", "key$": "id", "index$": 9 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "sh": "Whether this version is the currently published version of the article (`published`) or an earlier non-live version (`draft`).", "t": "`$STRING`", "key$": "state", "index$": 10 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "The title of the article at this version.", "t": "`$STRING`", "key$": "title", "index$": 11 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "type", "index$": 12 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "sh": "The time the version was last updated, as a UTC Unix timestamp.", "t": "`$INTEGER`", "key$": "updated_at", "index$": 13 } }, "id": { "field": "id", "name": "id" }, "name": "article_version", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /articles/{article_id}/versions/{id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": 123, "k": "param", "n": "article_id", "or": "article_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": "301", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": "en", "k": "query", "n": "locale", "or": "locale", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/articles/{article_id}/versions/{id}", "q": { "exist": ["article_id", "id", "intercom_version", "locale"] }, "r": {}, "s": [{ "lit": "articles" }, { "var": "article_id" }, { "lit": "versions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.article"]] }, "key$": "article_version", "name__orig": "article_version", "Name": "ArticleVersion", "name_": "article_version", "name-": "article-version", "NAME": "ARTICLE_VERSION", "index$": 9 }, { "active": true, "entity": "article_version", "key$": "BasicArticleVersionFlow", "kind": "basic", "name": "BasicArticleVersionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "article_version_ref01", "srcdatavar": "article_version_ref01_data", "suffix": "_dt0" }, "m": { "article_id": "article01", "id": "article_version01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-article_version_ref01" } }], "index$": 0 }] }, 'ArticleVersion', { "GET /articles/{article_id}/versions/{id}": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "article_id", "in": "path", "required": true, "description": "The unique identifier for the article.", "example": 123, "schema": { "type": "integer" }, "index$": 1 }, { "name": "id", "in": "path", "required": true, "description": "The unique identifier for the version.", "example": "301", "schema": { "type": "string" }, "index$": 2 }, { "name": "locale", "in": "query", "required": false, "description": "Return the version's content for a specific locale. If the locale is not configured for the workspace, a `400` is returned.", "example": "en", "schema": { "type": "string" }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let article_version_ref01_data = Object.values(setup.data.existing.article_version)[0];
        // LOAD
        const article_version_ref01_ent = client.ArticleVersion();
        const article_version_ref01_match_dt0 = {};
        article_version_ref01_match_dt0.id = article_version_ref01_data.id;
        const article_version_ref01_data_dt0 = (await article_version_ref01_ent.load(article_version_ref01_match_dt0)).data();
        (0, node_assert_1.default)(article_version_ref01_data_dt0.id === article_version_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/article_version/ArticleVersionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['article_version01', 'article_version02', 'article_version03', 'article01', 'article02', 'article03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_ARTICLE_VERSION_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_ARTICLE_VERSION_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_ARTICLE_VERSION_ENTID'];
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
//# sourceMappingURL=ArticleVersionEntity.test.js.map