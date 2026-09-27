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
(0, node_test_1.describe)('NewsItemEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.NewsItem();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'news_item.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "body": { "a": true, "h": "Body", "n": "body", "r": false, "sh": "The news item body, which may contain HTML.", "t": "`$STRING`", "key$": "body", "index$": 0 }, "cover_image_url": { "a": true, "fo": "uri", "h": "Cover Image Url", "n": "cover_image_url", "r": false, "sh": "URL of the image used as cover.", "t": "`$STRING`", "key$": "cover_image_url", "index$": 1 }, "created_at": { "a": true, "fo": "timestamp", "h": "Created At", "n": "created_at", "r": false, "sh": "Timestamp for when the news item was created.", "t": "`$INTEGER`", "key$": "created_at", "index$": 2 }, "data": { "a": true, "h": "Data", "n": "data", "r": false, "sh": "An array of Objects", "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 1 }, "key$": "data", "index$": 3 }, "deliver_silently": { "a": true, "h": "Deliver Silently", "n": "deliver_silently", "r": false, "sh": "When set to true, the news item will appear in the messenger newsfeed without showing a notification badge.", "t": "`$BOOLEAN`", "key$": "deliver_silently", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The unique identifier for the news item which is given by Intercom.", "t": "`$STRING`", "key$": "id", "index$": 5 }, "labels": { "a": true, "h": "Labels", "n": "labels", "r": false, "sh": "Label names displayed to users to categorize the news item.", "t": "`$ARRAY`", "key$": "labels", "index$": 6 }, "newsfeed_assignments": { "a": true, "h": "Newsfeed Assignments", "n": "newsfeed_assignments", "r": false, "sh": "A list of newsfeed_assignments to assign to the specified newsfeed.", "t": "`$ARRAY`", "key$": "newsfeed_assignments", "index$": 7 }, "pages": { "a": true, "h": "Pages", "n": "pages", "r": false, "sh": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.", "t": "`$OBJECT`", "key$": "pages", "index$": 8 }, "reactions": { "a": true, "h": "Reactions", "n": "reactions", "r": false, "sh": "Ordered list of emoji reactions to the news item.", "t": "`$ARRAY`", "key$": "reactions", "index$": 9 }, "sender_id": { "a": true, "h": "Sender Id", "n": "sender_id", "op": { "create": { "req": true, "type": "`$INTEGER`" }, "update": { "req": true, "type": "`$INTEGER`" } }, "r": false, "sh": "The id of the sender of the news item.", "t": "`$INTEGER`", "key$": "sender_id", "index$": 10 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "sh": "News items will not be visible to your users in the assigned newsfeeds until they are set live.", "t": "`$STRING`", "key$": "state", "index$": 11 }, "title": { "a": true, "h": "Title", "n": "title", "op": { "create": { "req": true, "type": "`$STRING`" }, "update": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "The title of the news item.", "t": "`$STRING`", "key$": "title", "index$": 12 }, "total_count": { "a": true, "h": "Total Count", "n": "total_count", "r": false, "sh": "A count of the total number of objects.", "t": "`$INTEGER`", "key$": "total_count", "index$": 13 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "The type of object.", "t": "`$STRING`", "key$": "type", "index$": 14 }, "updated_at": { "a": true, "fo": "timestamp", "h": "Updated At", "n": "updated_at", "r": false, "sh": "Timestamp for when the news item was last updated.", "t": "`$INTEGER`", "key$": "updated_at", "index$": 15 }, "workspace_id": { "a": true, "h": "Workspace Id", "n": "workspace_id", "r": false, "sh": "The id of the workspace which the news item belongs to.", "t": "`$STRING`", "key$": "workspace_id", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "news_item", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /news/news_items", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/news/news_items", "q": { "exist": ["intercom_version"] }, "r": {}, "s": [{ "lit": "news" }, { "lit": "news_items" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /news/news_items", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/news/news_items", "q": { "exist": ["intercom_version"] }, "r": {}, "s": [{ "lit": "news" }, { "lit": "news_items" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /news/news_items/{news_item_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": 123, "k": "param", "n": "id", "or": "news_item_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/news/news_items/{news_item_id}", "q": { "exist": ["id", "intercom_version"] }, "r": { "param": { "news_item_id": "id" } }, "s": [{ "lit": "news" }, { "lit": "news_items" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /news/news_items/{news_item_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": 123, "k": "param", "n": "id", "or": "news_item_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/news/news_items/{news_item_id}", "q": { "exist": ["id", "intercom_version"] }, "r": { "param": { "news_item_id": "id" } }, "s": [{ "lit": "news" }, { "lit": "news_items" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "news_item", "name__orig": "news_item", "Name": "NewsItem", "name_": "news_item", "name-": "news-item", "NAME": "NEWS_ITEM", "index$": 62 }, { "active": true, "entity": "news_item", "key$": "BasicNewsItemFlow", "kind": "basic", "name": "BasicNewsItemFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "news_item_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "news_item_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "news_item_ref01", "srcdatavar": "news_item_ref01_data", "suffix": "_up0", "textfield": "body" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-news_item_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "news_item_ref01", "srcdatavar": "news_item_ref01_data", "suffix": "_dt0" }, "m": { "id": "news_item01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-news_item_ref01" } }], "index$": 3 }] }, 'NewsItem', { "POST /news/news_items": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "description": "A News Item is a content type in Intercom enabling you to announce product updates, company news, promotions, events and more with your customers.", "type": "object", "title": "Create News Item Request", "properties": { "title": { "type": "string", "description": "The title of the news item.", "example": "Halloween is here!", "key$": "title" }, "body": { "type": "string", "description": "The news item body, which may contain HTML.", "example": "<p>New costumes in store for this spooky season</p>", "key$": "body" }, "sender_id": { "type": "integer", "description": "The id of the sender of the news item. Must be a teammate on the workspace.", "example": 123, "key$": "sender_id" }, "state": { "type": "string", "description": "News items will not be visible to your users in the assigned newsfeeds until they are set live.", "enum": ["draft", "live"], "example": "live", "key$": "state" }, "deliver_silently": { "type": "boolean", "description": "When set to `true`, the news item will appear in the messenger newsfeed without showing a notification badge.", "example": true, "key$": "deliver_silently" }, "labels": { "type": "array", "description": "Label names displayed to users to categorize the news item.", "items": { "type": "string" }, "example": ["Product", "Update", "New"], "key$": "labels" }, "reactions": { "type": "array", "description": "Ordered list of emoji reactions to the news item. When empty, reactions are disabled.", "items": { "type": "string", "nullable": true }, "example": ["😆", "😅"], "key$": "reactions" }, "newsfeed_assignments": { "type": "array", "description": "A list of newsfeed_assignments to assign to the specified newsfeed.", "items": { "title": "Newsfeed Assignment", "type": "object", "x-tags": ["News"], "description": "Assigns a news item to a newsfeed.", "properties": { "newsfeed_id": { "description": "The unique identifier for the newsfeed which is given by Intercom. Publish dates cannot be in the future, to schedule news items use the dedicated feature in app (see this article).", "example": 198313, "type": "integer" }, "published_at": { "description": "Publish date of the news item on the newsfeed, use this field if you want to set a publish date in the past (e.g. when importing existing news items). On write, this field will be ignored if the news item state is \"draft\".", "example": 1674917488, "format": "timestamp", "type": "integer" } }, "x-ref": "#/components/schemas/newsfeed_assignment" }, "key$": "newsfeed_assignments" } }, "required": ["title", "sender_id"], "x-ref": "#/components/schemas/news_item_request", "index$": 1 }, "examples": { "successful": { "summary": "successful", "value": { "title": "Halloween is here!", "body": "<p>New costumes in store for this spooky season</p>", "labels": ["Product", "Update", "New"], "sender_id": 991267834, "deliver_silently": true, "reactions": ["😆", "😅"], "state": "live", "newsfeed_assignments": [{ "newsfeed_id": 53, "published_at": 1664638214 }] } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }] }, "GET /news/news_items": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }] }, "GET /news/news_items/{news_item_id}": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "news_item_id", "in": "path", "required": true, "description": "The unique identifier for the news item which is given by Intercom.", "example": 123, "schema": { "type": "integer" }, "index$": 1 }] }, "PUT /news/news_items/{news_item_id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "description": "A News Item is a content type in Intercom enabling you to announce product updates, company news, promotions, events and more with your customers.", "type": "object", "title": "Create News Item Request", "properties": { "title": { "type": "string", "description": "The title of the news item.", "example": "Halloween is here!", "key$": "title" }, "body": { "type": "string", "description": "The news item body, which may contain HTML.", "example": "<p>New costumes in store for this spooky season</p>", "key$": "body" }, "sender_id": { "type": "integer", "description": "The id of the sender of the news item. Must be a teammate on the workspace.", "example": 123, "key$": "sender_id" }, "state": { "type": "string", "description": "News items will not be visible to your users in the assigned newsfeeds until they are set live.", "enum": ["draft", "live"], "example": "live", "key$": "state" }, "deliver_silently": { "type": "boolean", "description": "When set to `true`, the news item will appear in the messenger newsfeed without showing a notification badge.", "example": true, "key$": "deliver_silently" }, "labels": { "type": "array", "description": "Label names displayed to users to categorize the news item.", "items": { "type": "string" }, "example": ["Product", "Update", "New"], "key$": "labels" }, "reactions": { "type": "array", "description": "Ordered list of emoji reactions to the news item. When empty, reactions are disabled.", "items": { "type": "string", "nullable": true }, "example": ["😆", "😅"], "key$": "reactions" }, "newsfeed_assignments": { "type": "array", "description": "A list of newsfeed_assignments to assign to the specified newsfeed.", "items": { "title": "Newsfeed Assignment", "type": "object", "x-tags": ["News"], "description": "Assigns a news item to a newsfeed.", "properties": { "newsfeed_id": { "description": "The unique identifier for the newsfeed which is given by Intercom. Publish dates cannot be in the future, to schedule news items use the dedicated feature in app (see this article).", "example": 198313, "type": "integer" }, "published_at": { "description": "Publish date of the news item on the newsfeed, use this field if you want to set a publish date in the past (e.g. when importing existing news items). On write, this field will be ignored if the news item state is \"draft\".", "example": 1674917488, "format": "timestamp", "type": "integer" } }, "x-ref": "#/components/schemas/newsfeed_assignment" }, "key$": "newsfeed_assignments" } }, "required": ["title", "sender_id"], "x-ref": "#/components/schemas/news_item_request", "index$": 1 }, "examples": { "successful": { "summary": "successful", "value": { "title": "Christmas is here!", "body": "<p>New gifts in store for the jolly season</p>", "sender_id": 991267845, "reactions": ["😝", "😂"] } }, "news_item_not_found": { "summary": "News Item Not Found", "value": { "title": "Christmas is here!", "body": "<p>New gifts in store for the jolly season</p>", "sender_id": 991267848, "reactions": ["😝", "😂"] } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "news_item_id", "in": "path", "required": true, "description": "The unique identifier for the news item which is given by Intercom.", "example": 123, "schema": { "type": "integer" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const news_item_ref01_ent = client.NewsItem();
        let news_item_ref01_data = setup.data.new.news_item['news_item_ref01'];
        news_item_ref01_data = (await news_item_ref01_ent.create(news_item_ref01_data)).data();
        (0, node_assert_1.default)(null != news_item_ref01_data.id);
        // LIST
        const news_item_ref01_match = {};
        const news_item_ref01_list = (await news_item_ref01_ent.list(news_item_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(news_item_ref01_list, { id: news_item_ref01_data.id })));
        // UPDATE
        const news_item_ref01_data_up0 = {};
        news_item_ref01_data_up0.id = news_item_ref01_data.id;
        const news_item_ref01_markdef_up0 = { name: 'body', value: 'Mark01-news_item_ref01_' + setup.now };
        news_item_ref01_data_up0[news_item_ref01_markdef_up0.name] = news_item_ref01_markdef_up0.value;
        const news_item_ref01_resdata_up0 = (await news_item_ref01_ent.update(news_item_ref01_data_up0)).data();
        (0, node_assert_1.default)(news_item_ref01_resdata_up0.id === news_item_ref01_data_up0.id);
        (0, node_assert_1.default)(news_item_ref01_resdata_up0[news_item_ref01_markdef_up0.name] === news_item_ref01_markdef_up0.value);
        // LOAD
        const news_item_ref01_match_dt0 = {};
        news_item_ref01_match_dt0.id = news_item_ref01_data.id;
        const news_item_ref01_data_dt0 = (await news_item_ref01_ent.load(news_item_ref01_match_dt0)).data();
        (0, node_assert_1.default)(news_item_ref01_data_dt0.id === news_item_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/news_item/NewsItemTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['news_item01', 'news_item02', 'news_item03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_NEWS_ITEM_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_NEWS_ITEM_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_NEWS_ITEM_ENTID'];
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
//# sourceMappingURL=NewsItemEntity.test.js.map