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
(0, node_test_1.describe)('NoteEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.Note();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'note.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "admin_id": { "a": true, "h": "Admin Id", "n": "admin_id", "r": false, "sh": "The unique identifier of the admin creating the note.", "t": "`$STRING`", "key$": "admin_id", "index$": 0 }, "author": { "a": true, "h": "Author", "n": "author", "r": false, "sh": "Optional.", "t": "`$OBJECT`", "key$": "author", "index$": 1 }, "body": { "a": true, "h": "Body", "n": "body", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "The body text of the note.", "t": "`$STRING`", "key$": "body", "index$": 2 }, "company": { "a": true, "h": "Company", "n": "company", "r": false, "sh": "Represents the company that the note was created about.", "t": "`$OBJECT`", "key$": "company", "index$": 3 }, "contact": { "a": true, "h": "Contact", "n": "contact", "r": false, "sh": "Represents the contact that the note was created about.", "t": "`$OBJECT`", "key$": "contact", "index$": 4 }, "created_at": { "a": true, "fo": "timestamp", "h": "Created At", "n": "created_at", "r": false, "sh": "The time the note was created.", "t": "`$INTEGER`", "key$": "created_at", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The id of the note.", "t": "`$STRING`", "key$": "id", "index$": 6 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "String representing the object's type.", "t": "`$STRING`", "key$": "type", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "note", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /companies/{company_id}/notes", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632", "k": "param", "n": "company_id", "or": "company_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/companies/{company_id}/notes", "q": { "exist": ["company_id", "intercom_version"] }, "r": {}, "s": [{ "lit": "companies" }, { "var": "company_id" }, { "lit": "notes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /contacts/{contact_id}/notes", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "123", "k": "param", "n": "contact_id", "or": "contact_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/contacts/{contact_id}/notes", "q": { "exist": ["contact_id", "intercom_version"] }, "r": {}, "s": [{ "lit": "contacts" }, { "var": "contact_id" }, { "lit": "notes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /companies/{company_id}/notes", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632", "k": "param", "n": "company_id", "or": "company_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/companies/{company_id}/notes", "q": { "exist": ["company_id", "intercom_version"] }, "r": {}, "s": [{ "lit": "companies" }, { "var": "company_id" }, { "lit": "notes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /contacts/{contact_id}/notes", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "contact_id", "or": "contact_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/contacts/{contact_id}/notes", "q": { "exist": ["contact_id", "intercom_version"] }, "r": {}, "s": [{ "lit": "contacts" }, { "var": "contact_id" }, { "lit": "notes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /notes/{note_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": 1, "k": "param", "n": "id", "or": "note_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/notes/{note_id}", "q": { "exist": ["id", "intercom_version"] }, "r": { "param": { "note_id": "id" } }, "s": [{ "lit": "notes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.company"], ["$.main.kit.entity.contact"]] }, "key$": "note", "name__orig": "note", "Name": "Note", "name_": "note", "name-": "note", "NAME": "NOTE", "index$": 64 }, { "active": true, "entity": "note", "key$": "BasicNoteFlow", "kind": "basic", "name": "BasicNoteFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "note_ref01" }, "m": { "company_id": "company01", "contact_id": "contact01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "contact_id": "contact01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "note_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "note_ref01", "srcdatavar": "note_ref01_data", "suffix": "_dt0" }, "m": { "id": "note01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-note_ref01" } }], "index$": 2 }] }, 'Note', { "POST /companies/{company_id}/notes": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["body"], "properties": { "body": { "type": "string", "description": "The text of the note.", "example": "New note", "key$": "body" }, "admin_id": { "type": "string", "description": "The unique identifier of the admin creating the note. If not provided, defaults to the admin associated with the access token.", "example": "991267583", "key$": "admin_id" } }, "index$": 1 }, "examples": { "successful_response": { "summary": "Successful response", "value": { "body": "Hello", "admin_id": "991267583" } }, "admin_not_found": { "summary": "Admin not found", "value": { "body": "Hello", "admin_id": "123" } }, "company_not_found": { "summary": "Company not found", "value": { "body": "Hello" } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "company_id", "in": "path", "required": true, "description": "The unique identifier for the company which is given by Intercom", "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632", "schema": { "type": "string" }, "index$": 1 }] }, "POST /contacts/{contact_id}/notes": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["body"], "properties": { "body": { "type": "string", "description": "The text of the note.", "example": "New note", "key$": "body" }, "admin_id": { "type": "string", "description": "The unique identifier of a given admin.", "example": "123", "key$": "admin_id" } }, "index$": 1 }, "examples": { "successful_response": { "summary": "Successful response", "value": { "contact_id": "6762f0ad1bb69f9f2193bb62", "admin_id": 991267583, "body": "Hello" } }, "admin_not_found": { "summary": "Admin not found", "value": { "contact_id": "6762f0af1bb69f9f2193bb63", "admin_id": 123, "body": "Hello" } }, "contact_not_found": { "summary": "Contact not found", "value": { "contact_id": 123, "admin_id": 991267585, "body": "Hello" } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "contact_id", "in": "path", "required": true, "description": "The unique identifier of a given contact.", "example": "123", "schema": { "type": "integer" }, "index$": 1 }] }, "GET /companies/{company_id}/notes": { "protocol": "http", "parameters": [{ "name": "company_id", "in": "path", "required": true, "description": "The unique identifier for the company which is given by Intercom", "example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632", "schema": { "type": "string" }, "index$": 0 }, { "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 1 }] }, "GET /contacts/{contact_id}/notes": { "protocol": "http", "parameters": [{ "name": "contact_id", "in": "path", "required": true, "description": "The unique identifier of a contact.", "schema": { "type": "string" }, "index$": 0 }, { "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 1 }] }, "GET /notes/{note_id}": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "note_id", "in": "path", "required": true, "description": "The unique identifier of a given note", "example": 1, "schema": { "type": "integer" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const note_ref01_ent = client.Note();
        let note_ref01_data = setup.data.new.note['note_ref01'];
        note_ref01_data['company_id'] = setup.idmap['company01'];
        note_ref01_data['contact_id'] = setup.idmap['contact01'];
        note_ref01_data = (await note_ref01_ent.create(note_ref01_data)).data();
        (0, node_assert_1.default)(null != note_ref01_data.id);
        // LIST
        const note_ref01_match = {};
        note_ref01_match['contact_id'] = setup.idmap['contact01'];
        const note_ref01_list = (await note_ref01_ent.list(note_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(note_ref01_list, { id: note_ref01_data.id })));
        // LOAD
        const note_ref01_match_dt0 = {};
        note_ref01_match_dt0.id = note_ref01_data.id;
        const note_ref01_data_dt0 = (await note_ref01_ent.load(note_ref01_match_dt0)).data();
        (0, node_assert_1.default)(note_ref01_data_dt0.id === note_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/note/NoteTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['note01', 'note02', 'note03', 'company01', 'company02', 'company03', 'contact01', 'contact02', 'contact03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_NOTE_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_NOTE_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_NOTE_ENTID'];
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
//# sourceMappingURL=NoteEntity.test.js.map