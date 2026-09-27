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
(0, node_test_1.describe)('ContentImportSourceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.ContentImportSource();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'content_import_source.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "apply_audience_to_existing_content": { "a": true, "h": "Apply Audience To Existing Content", "n": "apply_audience_to_existing_content", "r": false, "sh": "When true, the audience will be applied to all existing external pages belonging to this content import source.", "t": "`$BOOLEAN`", "key$": "apply_audience_to_existing_content", "index$": 0 }, "audience_ids": { "a": true, "h": "Audience Ids", "n": "audience_ids", "r": false, "sh": "The unique identifiers for the audiences associated with this content import source.", "t": "`$ARRAY`", "key$": "audience_ids", "index$": 1 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "The time when the content import source was created.", "t": "`$INTEGER`", "key$": "created_at", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier for the content import source which is given by Intercom.", "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "last_synced_at": { "a": true, "fo": "date-time", "h": "Last Synced At", "n": "last_synced_at", "r": true, "sh": "The time when the content import source was last synced.", "t": "`$INTEGER`", "key$": "last_synced_at", "index$": 4 }, "status": { "a": true, "h": "Status", "n": "status", "op": { "create": { "req": false, "type": "`$STRING`" }, "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The status of the content import source.", "t": "`$STRING`", "key$": "status", "index$": 5 }, "sync_behavior": { "a": true, "h": "Sync Behavior", "n": "sync_behavior", "r": true, "sh": "If you intend to create or update External Pages via the API, this should be set to `api`.", "t": "`$STRING`", "key$": "sync_behavior", "index$": 6 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "Always external_page", "t": "`$STRING`", "key$": "type", "index$": 7 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "The time when the content import source was last updated.", "t": "`$INTEGER`", "key$": "updated_at", "index$": 8 }, "url": { "a": true, "h": "Url", "n": "url", "r": true, "sh": "The URL of the root of the external source.", "t": "`$STRING`", "key$": "url", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "content_import_source", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /ai/content_import_sources", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/ai/content_import_sources", "q": { "exist": ["intercom_version"] }, "r": {}, "s": [{ "lit": "ai" }, { "lit": "content_import_sources" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /ai/content_import_sources", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/ai/content_import_sources", "q": { "exist": ["intercom_version"] }, "r": {}, "s": [{ "lit": "ai" }, { "lit": "content_import_sources" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /ai/content_import_sources/{source_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "source_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/ai/content_import_sources/{source_id}", "q": { "exist": ["id", "intercom_version"] }, "r": { "param": { "source_id": "id" } }, "s": [{ "lit": "ai" }, { "lit": "content_import_sources" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /ai/content_import_sources/{source_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "source_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/ai/content_import_sources/{source_id}", "q": { "exist": ["id", "intercom_version"] }, "r": { "param": { "source_id": "id" } }, "s": [{ "lit": "ai" }, { "lit": "content_import_sources" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "content_import_source", "name__orig": "content_import_source", "Name": "ContentImportSource", "name_": "content_import_source", "name-": "content-import-source", "NAME": "CONTENT_IMPORT_SOURCE", "index$": 28 }, { "active": true, "entity": "content_import_source", "key$": "BasicContentImportSourceFlow", "kind": "basic", "name": "BasicContentImportSourceFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "content_import_source_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "content_import_source_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "content_import_source_ref01", "srcdatavar": "content_import_source_ref01_data", "suffix": "_up0", "textfield": "status" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-content_import_source_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "content_import_source_ref01", "srcdatavar": "content_import_source_ref01_data", "suffix": "_dt0" }, "m": { "id": "content_import_source01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-content_import_source_ref01" } }], "index$": 3 }] }, 'ContentImportSource', { "POST /ai/content_import_sources": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "title": "Create Content Import Source Payload", "type": "object", "description": "You can add an Content Import Source to your Fin Content Library.", "nullable": false, "properties": { "sync_behavior": { "type": "string", "description": "If you intend to create or update External Pages via the API, this should be set to `api`.", "enum": ["api"], "example": "api", "key$": "sync_behavior" }, "status": { "type": "string", "description": "The status of the content import source.", "enum": ["active", "deactivated"], "default": "active", "example": "active", "key$": "status" }, "url": { "type": "string", "description": "The URL of the content import source.", "example": "https://help.example.com", "key$": "url" }, "audience_ids": { "nullable": true, "description": "The unique identifiers for the audiences to associate with this content import source. Can be a single integer or an array of integers.", "example": [5678], "oneOf": [{ "type": "integer" }, { "type": "array", "items": { "type": "integer" } }], "key$": "audience_ids" } }, "required": ["sync_behavior", "url"], "x-ref": "#/components/schemas/create_content_import_source_request", "index$": 1 }, "examples": { "successful": { "summary": "successful", "value": { "sync_behavior": "api", "url": "https://www.example.com" } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }] }, "GET /ai/content_import_sources": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }] }, "GET /ai/content_import_sources/{source_id}": { "protocol": "http", "parameters": [{ "name": "source_id", "in": "path", "description": "The unique identifier for the content import source which is given by Intercom.", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 1 }] }, "PUT /ai/content_import_sources/{source_id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "title": "Create Content Import Source Payload", "type": "object", "description": "You can modify a Content Import Source of your Fin Content Library.", "nullable": false, "properties": { "sync_behavior": { "type": "string", "description": "If you intend to create or update External Pages via the API, this should be set to `api`. You can not change the value to or from api.", "enum": ["api", "automated", "manual"], "example": "api", "key$": "sync_behavior" }, "status": { "type": "string", "description": "The status of the content import source.", "enum": ["active", "deactivated"], "default": "active", "example": "active", "key$": "status" }, "url": { "type": "string", "description": "The URL of the content import source. This may only be different from the existing value if the sync behavior is API.", "example": "https://help.example.com", "key$": "url" }, "audience_ids": { "nullable": true, "description": "The unique identifiers for the audiences to associate with this content import source. Can be a single integer or an array of integers. Set to null or an empty array to remove all audiences.", "example": [5678], "oneOf": [{ "type": "integer" }, { "type": "array", "items": { "type": "integer" } }], "key$": "audience_ids" }, "apply_audience_to_existing_content": { "type": "boolean", "description": "When true, the audience will be applied to all existing external pages belonging to this content import source.", "default": false, "example": false, "key$": "apply_audience_to_existing_content" } }, "required": ["sync_behavior", "url"], "x-ref": "#/components/schemas/update_content_import_source_request", "index$": 1 }, "examples": { "successful": { "summary": "successful", "value": { "sync_behavior": "api", "url": "https://www.example.com" } } } } } }, "parameters": [{ "name": "source_id", "in": "path", "description": "The unique identifier for the content import source which is given by Intercom.", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const content_import_source_ref01_ent = client.ContentImportSource();
        let content_import_source_ref01_data = setup.data.new.content_import_source['content_import_source_ref01'];
        content_import_source_ref01_data = (await content_import_source_ref01_ent.create(content_import_source_ref01_data)).data();
        (0, node_assert_1.default)(null != content_import_source_ref01_data.id);
        // LIST
        const content_import_source_ref01_match = {};
        const content_import_source_ref01_list = (await content_import_source_ref01_ent.list(content_import_source_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(content_import_source_ref01_list, { id: content_import_source_ref01_data.id })));
        // UPDATE
        const content_import_source_ref01_data_up0 = {};
        content_import_source_ref01_data_up0.id = content_import_source_ref01_data.id;
        const content_import_source_ref01_markdef_up0 = { name: 'status', value: 'Mark01-content_import_source_ref01_' + setup.now };
        content_import_source_ref01_data_up0[content_import_source_ref01_markdef_up0.name] = content_import_source_ref01_markdef_up0.value;
        const content_import_source_ref01_resdata_up0 = (await content_import_source_ref01_ent.update(content_import_source_ref01_data_up0)).data();
        (0, node_assert_1.default)(content_import_source_ref01_resdata_up0.id === content_import_source_ref01_data_up0.id);
        (0, node_assert_1.default)(content_import_source_ref01_resdata_up0[content_import_source_ref01_markdef_up0.name] === content_import_source_ref01_markdef_up0.value);
        // LOAD
        const content_import_source_ref01_match_dt0 = {};
        content_import_source_ref01_match_dt0.id = content_import_source_ref01_data.id;
        const content_import_source_ref01_data_dt0 = (await content_import_source_ref01_ent.load(content_import_source_ref01_match_dt0)).data();
        (0, node_assert_1.default)(content_import_source_ref01_data_dt0.id === content_import_source_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/content_import_source/ContentImportSourceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['content_import_source01', 'content_import_source02', 'content_import_source03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_CONTENT_IMPORT_SOURCE_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_CONTENT_IMPORT_SOURCE_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_CONTENT_IMPORT_SOURCE_ENTID'];
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
//# sourceMappingURL=ContentImportSourceEntity.test.js.map