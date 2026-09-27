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
(0, node_test_1.describe)('ContentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.Content();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'content.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "content", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /content/bulk_actions", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/content/bulk_actions", "q": { "$action": "bulk_action", "exist": ["intercom_version"] }, "r": {}, "s": [{ "lit": "content" }, { "lit": "bulk_actions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "content", "name__orig": "content", "Name": "Content", "name_": "content", "name-": "content", "NAME": "CONTENT", "index$": 27 }, { "active": true, "entity": "content", "key$": "BasicContentFlow", "kind": "basic", "name": "BasicContentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "content_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Content', { "POST /content/bulk_actions": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "title": "Content Bulk Action Request Payload", "type": "object", "required": ["action", "content_ids"], "properties": { "action": { "type": "string", "description": "The bulk action to perform. Allowed `content_ids[].type` values vary per action:\n  * `publish`, `unpublish`: `article_content`\n  * `delete`: `article_content`, `content_snippet`, `file_source_content`, `internal_article`\n  * `set_availability`, `set_audience`: `article_content`, `content_snippet`, `external_content`, `file_source_content`, `internal_article`\n  * `update_tags`: `article` (the parent Article id, not `article_content`), `content_snippet`, `external_content`, `file_source_content`, `internal_article`\n", "enum": ["publish", "unpublish", "delete", "set_availability", "set_audience", "update_tags"], "example": "publish" }, "content_ids": { "type": "array", "maxItems": 1000, "description": "Up to 1,000 content items to apply the action to.", "items": { "type": "object", "required": ["type", "id"], "properties": { "type": { "type": "string", "enum": [], "example": "article_content" }, "id": { "type": "string", "example": "12345678" } } } }, "availability": { "type": "object", "description": "Required when `action` is `set_availability`. Each field is optional — only the\nproperties present in the request are toggled.\n", "properties": { "ai_agent": { "type": "boolean", "description": "Toggle Fin AI Agent availability." }, "copilot": { "type": "boolean", "description": "Toggle Copilot availability." }, "sales_agent": { "type": "boolean", "description": "Toggle Sales Agent availability." } } }, "audience": { "type": "object", "description": "Required when `action` is `set_audience`. Manages segment membership.", "properties": { "add_segment_ids": { "type": "array", "description": "Segment IDs to assign to the selected content.", "items": { "type": "integer" }, "example": [100] }, "remove_segment_ids": { "type": "array", "description": "Segment IDs to remove from the selected content.", "items": { "type": "integer" }, "example": [200] }, "remove_all": { "type": "boolean", "description": "When `true`, removes all segments from the selected content.", "example": false } } }, "tags": { "type": "object", "description": "Required when `action` is `update_tags`. Applies and/or removes existing tags.\nSupply at least one of `add_tag_ids` / `remove_tag_ids`. At most 100 distinct tag IDs\nmay be supplied across `add_tag_ids` and `remove_tag_ids` combined. Tag IDs must\nreference existing, non-archived tags; exceeding the limit or referencing unknown or\narchived IDs is rejected with `parameter_invalid` (HTTP 422).\n", "properties": { "add_tag_ids": { "type": "array", "description": "Tag IDs to apply to the selected content.", "items": { "type": "integer" }, "example": [100] }, "remove_tag_ids": { "type": "array", "description": "Tag IDs to remove from the selected content.", "items": { "type": "integer" }, "example": [200] } } } }, "x-ref": "#/components/schemas/content_bulk_action_request" }, "examples": { "publish": { "summary": "Publish articles", "value": { "action": "publish", "content_ids": [{ "type": "article_content", "id": "12345678" }, { "type": "article_content", "id": "12345679" }] } }, "unpublish": { "summary": "Unpublish articles", "value": { "action": "unpublish", "content_ids": [{ "type": "article_content", "id": "12345678" }] } }, "delete": { "summary": "Delete content across types", "value": { "action": "delete", "content_ids": [{ "type": "article_content", "id": "12345678" }, { "type": "internal_article", "id": "12345679" }, { "type": "content_snippet", "id": "12345680" }] } }, "set_availability": { "summary": "Toggle Fin AI Agent on, Copilot off", "value": { "action": "set_availability", "content_ids": [{ "type": "article_content", "id": "12345678" }], "availability": { "ai_agent": true, "copilot": false } } }, "set_audience": { "summary": "Add and remove segments", "value": { "action": "set_audience", "content_ids": [{ "type": "article_content", "id": "12345678" }], "audience": { "add_segment_ids": [100], "remove_segment_ids": [200] } } }, "update_tags": { "summary": "Apply and remove tags on an article", "value": { "action": "update_tags", "content_ids": [{ "type": "article", "id": "12345678" }], "tags": { "add_tag_ids": [100], "remove_tag_ids": [200] } } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const content_ref01_ent = client.Content();
        let content_ref01_data = setup.data.new.content['content_ref01'];
        content_ref01_data = (await content_ref01_ent.create(content_ref01_data)).data();
        (0, node_assert_1.default)(null != content_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/content/ContentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['content01', 'content02', 'content03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_CONTENT_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_CONTENT_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_CONTENT_ENTID'];
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
//# sourceMappingURL=ContentEntity.test.js.map