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
(0, node_test_1.describe)('ContactListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.ContactList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'contact_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "data": { "a": true, "h": "Data", "n": "data", "r": false, "sh": "The list of contact objects", "t": "`$ARRAY`", "key$": "data", "index$": 0 }, "pages": { "a": true, "h": "Pages", "n": "pages", "r": false, "sh": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.", "t": "`$OBJECT`", "key$": "pages", "index$": 1 }, "pagination": { "a": true, "h": "Pagination", "n": "pagination", "r": false, "t": "`$OBJECT`", "key$": "pagination", "index$": 2 }, "query": { "a": true, "h": "Query", "n": "query", "r": true, "t": "`$ANY`", "union": { "branches": 4, "count": 4, "depth": 7 }, "key$": "query", "index$": 3 }, "sort": { "a": true, "h": "Sort", "n": "sort", "r": false, "sh": "An optional object to sort the results by.", "t": "`$OBJECT`", "key$": "sort", "index$": 4 }, "total_count": { "a": true, "h": "Total Count", "n": "total_count", "r": false, "sh": "A count of the total number of objects.", "t": "`$INTEGER`", "key$": "total_count", "index$": 5 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "Always list", "t": "`$STRING`", "key$": "type", "index$": 6 } }, "name": "contact_list", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /contacts/search", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": false, "k": "query", "n": "include_merge_history", "or": "include_merge_history", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/contacts/search", "q": { "exist": ["include_merge_history", "intercom_version"] }, "r": {}, "s": [{ "lit": "contacts" }, { "lit": "search" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "contact_list", "name__orig": "contact_list", "Name": "ContactList", "name_": "contact_list", "name-": "contact-list", "NAME": "CONTACT_LIST", "index$": 25 }, { "active": true, "entity": "contact_list", "key$": "BasicContactListFlow", "kind": "basic", "name": "BasicContactListFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "contact_list_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'ContactList', { "POST /contacts/search": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "description": "Search for contacts using Intercom's Search API.", "type": "object", "title": "Contact search request", "properties": { "query": { "oneOf": [{ "title": "Single filter search request", "description": "Search using Intercoms Search APIs with a single filter.", "type": "object", "properties": { "field": {}, "operator": {}, "value": {} }, "x-ref": "#/components/schemas/single_filter_search_request" }, { "title": "multiple filter search request", "description": "Search using Intercoms Search APIs with more than one filter.", "type": "object", "properties": { "operator": {}, "value": {} }, "x-ref": "#/components/schemas/multiple_filter_search_request" }], "key$": "query" }, "pagination": { "title": "Pagination: Starting After", "type": "object", "nullable": true, "properties": { "per_page": { "description": "The number of results to fetch per page.", "example": 2, "type": "integer" }, "starting_after": { "description": "The cursor to use in the next request to get the next page of results.", "example": "your-cursor-from-response", "nullable": true, "type": "string" } }, "x-ref": "#/components/schemas/starting_after_paging", "key$": "pagination" }, "sort": { "type": "object", "description": "An optional object to sort the results by.", "properties": { "field": { "type": "string", "description": "The field to sort the results on.", "example": "created_at" }, "order": { "type": "string", "description": "The order to sort the results in. Defaults to `descending` when omitted. Values other than `ascending` or `descending` return a `400` error with code `invalid_sort_order`.", "enum": ["ascending", "descending"], "default": "descending", "example": "descending" } }, "key$": "sort" } }, "required": ["query"], "x-ref": "#/components/schemas/contact_search_request", "index$": 1 }, "examples": { "successful": { "summary": "successful", "value": { "query": { "operator": "AND", "value": [{ "field": "created_at", "operator": ">", "value": "1306054154" }] }, "sort": { "field": "created_at", "order": "ascending" }, "pagination": { "per_page": 5 } } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "include_merge_history", "in": "query", "description": "Pass `true` to include a `merge_history` array on each contact in the response. Only returned for contacts with a `user` role.", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const contact_list_ref01_ent = client.ContactList();
        let contact_list_ref01_data = setup.data.new.contact_list['contact_list_ref01'];
        contact_list_ref01_data = (await contact_list_ref01_ent.create(contact_list_ref01_data)).data();
        (0, node_assert_1.default)(null != contact_list_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/contact_list/ContactListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['contact_list01', 'contact_list02', 'contact_list03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_CONTACT_LIST_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_CONTACT_LIST_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_CONTACT_LIST_ENTID'];
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
//# sourceMappingURL=ContactListEntity.test.js.map