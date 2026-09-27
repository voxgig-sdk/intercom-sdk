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
(0, node_test_1.describe)('ExternalPageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.ExternalPage();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'external_page.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "ai_agent_availability": { "a": true, "h": "Ai Agent Availability", "n": "ai_agent_availability", "op": { "create": { "req": false, "type": "`$BOOLEAN`" } }, "r": true, "sh": "Whether the external page should be used to answer questions by AI Agent.", "t": "`$BOOLEAN`", "key$": "ai_agent_availability", "index$": 0 }, "ai_copilot_availability": { "a": true, "h": "Ai Copilot Availability", "n": "ai_copilot_availability", "op": { "create": { "req": false, "type": "`$BOOLEAN`" } }, "r": true, "sh": "Whether the external page should be used to answer questions by AI Copilot.", "t": "`$BOOLEAN`", "key$": "ai_copilot_availability", "index$": 1 }, "ai_sales_agent_availability": { "a": true, "h": "Ai Sales Agent Availability", "n": "ai_sales_agent_availability", "r": false, "sh": "Whether the external page should be used to answer questions by AI Sales Agent.", "t": "`$BOOLEAN`", "key$": "ai_sales_agent_availability", "index$": 2 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "The time when the external page was created.", "t": "`$INTEGER`", "key$": "created_at", "index$": 3 }, "external_id": { "a": true, "h": "External Id", "n": "external_id", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The identifier for the external page which was given by the source.", "t": "`$STRING`", "key$": "external_id", "index$": 4 }, "fin_availability": { "a": true, "h": "Fin Availability", "n": "fin_availability", "r": false, "sh": "Deprecated.", "t": "`$BOOLEAN`", "key$": "fin_availability", "index$": 5 }, "html": { "a": true, "h": "Html", "n": "html", "r": true, "sh": "The body of the external page in HTML.", "t": "`$STRING`", "key$": "html", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier for the external page which is given by Intercom.", "t": "`$STRING`", "key$": "id", "index$": 7 }, "last_ingested_at": { "a": true, "fo": "date-time", "h": "Last Ingested At", "n": "last_ingested_at", "r": true, "sh": "The time when the external page was last ingested.", "t": "`$INTEGER`", "key$": "last_ingested_at", "index$": 8 }, "locale": { "a": true, "h": "Locale", "n": "locale", "r": true, "sh": "Always en", "t": "`$STRING`", "key$": "locale", "index$": 9 }, "source_id": { "a": true, "h": "Source Id", "n": "source_id", "r": true, "sh": "The unique identifier for the source of the external page which was given by Intercom.", "t": "`$INTEGER`", "key$": "source_id", "index$": 10 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "sh": "The title of the external page.", "t": "`$STRING`", "key$": "title", "index$": 11 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "Always external_page", "t": "`$STRING`", "key$": "type", "index$": 12 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "The time when the external page was last updated.", "t": "`$INTEGER`", "key$": "updated_at", "index$": 13 }, "url": { "a": true, "h": "Url", "n": "url", "op": { "update": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "The URL of the external page.", "t": "`$STRING`", "key$": "url", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "external_page", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /ai/external_pages", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/ai/external_pages", "q": { "exist": ["intercom_version"] }, "r": {}, "s": [{ "lit": "ai" }, { "lit": "external_pages" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /ai/external_pages", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/ai/external_pages", "q": { "exist": ["intercom_version"] }, "r": {}, "s": [{ "lit": "ai" }, { "lit": "external_pages" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /ai/external_pages/{page_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "page_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/ai/external_pages/{page_id}", "q": { "exist": ["id", "intercom_version"] }, "r": { "param": { "page_id": "id" } }, "s": [{ "lit": "ai" }, { "lit": "external_pages" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /ai/external_pages/{page_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "page_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/ai/external_pages/{page_id}", "q": { "exist": ["id", "intercom_version"] }, "r": { "param": { "page_id": "id" } }, "s": [{ "lit": "ai" }, { "lit": "external_pages" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /ai/external_pages/{page_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "page_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/ai/external_pages/{page_id}", "q": { "exist": ["id", "intercom_version"] }, "r": { "param": { "page_id": "id" } }, "s": [{ "lit": "ai" }, { "lit": "external_pages" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "external_page", "name__orig": "external_page", "Name": "ExternalPage", "name_": "external_page", "name-": "external-page", "NAME": "EXTERNAL_PAGE", "index$": 51 }, { "active": true, "entity": "external_page", "key$": "BasicExternalPageFlow", "kind": "basic", "name": "BasicExternalPageFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "external_page_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "external_page_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "external_page_ref01", "srcdatavar": "external_page_ref01_data", "suffix": "_up0", "textfield": "external_id" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-external_page_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "external_page_ref01", "srcdatavar": "external_page_ref01_data", "suffix": "_dt0" }, "m": { "id": "external_page01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-external_page_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "external_page_ref01", "suffix": "_rm0" }, "m": { "id": "external_page01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "external_page_ref01" } }], "index$": 5 }] }, 'ExternalPage', { "POST /ai/external_pages": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "title": "Create External Page Payload", "type": "object", "description": "You can add an External Page to your Fin Content Library.", "nullable": false, "properties": { "title": { "type": "string", "description": "The title of the external page.", "example": "Getting started with...", "key$": "title" }, "html": { "type": "string", "description": "The body of the external page in HTML.", "example": "<p>Hello world!</p>", "key$": "html" }, "url": { "type": "string", "description": "The URL of the external page. This will be used by Fin to link end users to the page it based its answer on. When a URL is not present, Fin will not reference the source.", "example": "https://help.example.com/en/articles/1234-getting-started", "key$": "url" }, "ai_agent_availability": { "type": "boolean", "description": "Whether the external page should be used to answer questions by AI Agent. Will not default when updating an existing external page.", "default": false, "example": true, "key$": "ai_agent_availability" }, "ai_copilot_availability": { "type": "boolean", "description": "Whether the external page should be used to answer questions by AI Copilot. Will not default when updating an existing external page.", "default": false, "example": true, "key$": "ai_copilot_availability" }, "locale": { "type": "string", "description": "Always en", "enum": ["en"], "default": "en", "example": "en", "key$": "locale" }, "source_id": { "type": "integer", "description": "The unique identifier for the source of the external page which was given by Intercom. Every external page must be associated with a Content Import Source which represents the place it comes from and from which it inherits a default audience (configured in the UI). For a new source, make a POST request to the Content Import Source endpoint and an ID for the source will be returned in the response.", "example": 1234, "key$": "source_id" }, "external_id": { "type": "string", "description": "The identifier for the external page which was given by the source. Must be unique for the source.", "example": "5678", "key$": "external_id" } }, "required": ["title", "html", "locale", "source_id", "external_id"], "x-ref": "#/components/schemas/create_external_page_request", "index$": 1 }, "examples": { "successful": { "summary": "successful", "value": { "external_id": "abc1234", "html": "<html><body><h1>Test</h1></body></html>", "locale": "en", "source_id": 44, "title": "Test", "url": "https://www.example.com" } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }] }, "GET /ai/external_pages": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }] }, "GET /ai/external_pages/{page_id}": { "protocol": "http", "parameters": [{ "name": "page_id", "in": "path", "description": "The unique identifier for the external page which is given by Intercom.", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 1 }] }, "DELETE /ai/external_pages/{page_id}": { "protocol": "http", "parameters": [{ "name": "page_id", "in": "path", "description": "The unique identifier for the external page which is given by Intercom.", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 1 }] }, "PUT /ai/external_pages/{page_id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "title": "Update External Page Payload", "type": "object", "description": "You can update an External Page in your Fin Content Library.", "nullable": false, "properties": { "title": { "type": "string", "description": "The title of the external page.", "example": "Getting started with...", "key$": "title" }, "html": { "type": "string", "description": "The body of the external page in HTML.", "example": "<p>Hello world!</p>", "key$": "html" }, "url": { "type": "string", "description": "The URL of the external page. This will be used by Fin to link end users to the page it based its answer on.", "example": "https://help.example.com/en/articles/1234-getting-started", "key$": "url" }, "fin_availability": { "type": "boolean", "description": "Whether the external page should be used to answer questions by Fin.", "default": true, "example": true, "key$": "fin_availability" }, "locale": { "type": "string", "description": "Always en", "enum": ["en"], "default": "en", "example": "en", "key$": "locale" }, "source_id": { "type": "integer", "description": "The unique identifier for the source of the external page which was given by Intercom. Every external page must be associated with a Content Import Source which represents the place it comes from and from which it inherits a default audience (configured in the UI). For a new source, make a POST request to the Content Import Source endpoint and an ID for the source will be returned in the response.", "example": 1234, "key$": "source_id" }, "external_id": { "type": "string", "description": "The identifier for the external page which was given by the source. Must be unique for the source.", "example": "5678", "key$": "external_id" } }, "required": ["title", "html", "url", "locale", "source_id"], "x-ref": "#/components/schemas/update_external_page_request", "index$": 1 }, "examples": { "successful": { "summary": "successful", "value": { "external_id": "5678", "html": "<html><body><h1>Test</h1></body></html>", "locale": "en", "source_id": 47, "title": "Test", "url": "https://www.example.com" } } } } } }, "parameters": [{ "name": "page_id", "in": "path", "description": "The unique identifier for the external page which is given by Intercom.", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const external_page_ref01_ent = client.ExternalPage();
        let external_page_ref01_data = setup.data.new.external_page['external_page_ref01'];
        external_page_ref01_data = (await external_page_ref01_ent.create(external_page_ref01_data)).data();
        (0, node_assert_1.default)(null != external_page_ref01_data.id);
        // LIST
        const external_page_ref01_match = {};
        const external_page_ref01_list = (await external_page_ref01_ent.list(external_page_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(external_page_ref01_list, { id: external_page_ref01_data.id })));
        // UPDATE
        const external_page_ref01_data_up0 = {};
        external_page_ref01_data_up0.id = external_page_ref01_data.id;
        const external_page_ref01_markdef_up0 = { name: 'external_id', value: 'Mark01-external_page_ref01_' + setup.now };
        external_page_ref01_data_up0[external_page_ref01_markdef_up0.name] = external_page_ref01_markdef_up0.value;
        const external_page_ref01_resdata_up0 = (await external_page_ref01_ent.update(external_page_ref01_data_up0)).data();
        (0, node_assert_1.default)(external_page_ref01_resdata_up0.id === external_page_ref01_data_up0.id);
        (0, node_assert_1.default)(external_page_ref01_resdata_up0[external_page_ref01_markdef_up0.name] === external_page_ref01_markdef_up0.value);
        // LOAD
        const external_page_ref01_match_dt0 = {};
        external_page_ref01_match_dt0.id = external_page_ref01_data.id;
        const external_page_ref01_data_dt0 = (await external_page_ref01_ent.load(external_page_ref01_match_dt0)).data();
        (0, node_assert_1.default)(external_page_ref01_data_dt0.id === external_page_ref01_data.id);
        // REMOVE
        const external_page_ref01_match_rm0 = { id: external_page_ref01_data.id };
        await external_page_ref01_ent.remove(external_page_ref01_match_rm0);
        // LIST
        const external_page_ref01_match_rt0 = {};
        const external_page_ref01_list_rt0 = (await external_page_ref01_ent.list(external_page_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(external_page_ref01_list_rt0, { id: external_page_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/external_page/ExternalPageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['external_page01', 'external_page02', 'external_page03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_EXTERNAL_PAGE_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_EXTERNAL_PAGE_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_EXTERNAL_PAGE_ENTID'];
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
//# sourceMappingURL=ExternalPageEntity.test.js.map