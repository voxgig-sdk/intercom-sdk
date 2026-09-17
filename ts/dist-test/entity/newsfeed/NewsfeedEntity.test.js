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
(0, node_test_1.describe)('NewsfeedEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.Newsfeed();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'newsfeed.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "timestamp", "name": "created_at", "req": false, "short": "Timestamp for when the newsfeed was created.", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "id", "req": false, "short": "The unique identifier for the newsfeed which is given by Intercom.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "name", "req": false, "short": "The name of the newsfeed.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "type", "req": false, "short": "The type of object.", "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "timestamp", "name": "updated_at", "req": false, "short": "Timestamp for when the newsfeed was last updated.", "type": "`$INTEGER`", "index$": 4 }], "id": { "field": "id", "name": "id" }, "name": "newsfeed", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "123", "kind": "param", "name": "id", "orig": "newsfeed_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /news/newsfeeds/{newsfeed_id}", "json": "{\"operationId\":\"retrieveNewsfeed\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the news feed item which is given by Intercom.\",\"example\":\"123\",\"in\":\"path\",\"name\":\"newsfeed_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"created_at\":1734537815,\"id\":\"72\",\"name\":\"Visitor Feed\",\"type\":\"newsfeed\",\"updated_at\":1734537815}}},\"schema\":{\"description\":\"A newsfeed is a collection of news items, targeted to a specific audience.\\n\\nNewsfeeds currently cannot be edited through the API, please refer to [this article](https://www.intercom.com/help/en/articles/6362267-getting-started-with-news) to set up your newsfeeds in Intercom.\\n\",\"properties\":{\"created_at\":{\"description\":\"Timestamp for when the newsfeed was created.\",\"example\":1674917488,\"format\":\"timestamp\",\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier for the newsfeed which is given by Intercom.\",\"example\":\"12312\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the newsfeed. This name will never be visible to your users.\",\"example\":\"My Newsfeed\",\"type\":\"string\"},\"type\":{\"description\":\"The type of object.\",\"enum\":[\"newsfeed\"],\"example\":\"newsfeed\",\"type\":\"string\"},\"updated_at\":{\"description\":\"Timestamp for when the newsfeed was last updated.\",\"example\":1674917488,\"format\":\"timestamp\",\"type\":\"integer\"}},\"title\":\"Newsfeed\",\"type\":\"object\"}}},\"description\":\"successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"6d9a1bf5-aa08-4c93-a61a-5a21130b6553\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/news/newsfeeds/{newsfeed_id}", "rename": { "param": { "newsfeed_id": "id" } }, "segments": [{ "lit": "news" }, { "lit": "newsfeeds" }, { "var": "id" }], "select": { "exist": ["id", "intercom_version"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "newsfeed", "name__orig": "newsfeed", "Name": "Newsfeed", "name_": "newsfeed", "name-": "newsfeed", "NAME": "NEWSFEED", "index$": 63 }, { "active": true, "entity": "newsfeed", "key$": "BasicNewsfeedFlow", "kind": "basic", "name": "BasicNewsfeedFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "newsfeed_ref01", "srcdatavar": "newsfeed_ref01_data", "suffix": "_dt0" }, "match": { "id": "newsfeed01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-newsfeed_ref01" } }], "index$": 0 }] }, 'Newsfeed');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let newsfeed_ref01_data = Object.values(setup.data.existing.newsfeed)[0];
        // LOAD
        const newsfeed_ref01_ent = client.Newsfeed();
        const newsfeed_ref01_match_dt0 = {};
        newsfeed_ref01_match_dt0.id = newsfeed_ref01_data.id;
        const newsfeed_ref01_data_dt0 = (await newsfeed_ref01_ent.load(newsfeed_ref01_match_dt0)).data();
        (0, node_assert_1.default)(newsfeed_ref01_data_dt0.id === newsfeed_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/newsfeed/NewsfeedTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['newsfeed01', 'newsfeed02', 'newsfeed03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_NEWSFEED_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_NEWSFEED_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_NEWSFEED_ENTID'];
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
//# sourceMappingURL=NewsfeedEntity.test.js.map