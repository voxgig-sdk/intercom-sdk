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
(0, node_test_1.describe)('OfficeHoursExceptionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.OfficeHoursException();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'office_hours_exception.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "sh": "The time the exception was created as a Unix timestamp.", "t": "`$INTEGER`", "key$": "created_at", "index$": 0 }, "exception_date": { "a": true, "fo": "date", "h": "Exception Date", "n": "exception_date", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "The date the exception applies to, in `YYYY-MM-DD` format.", "t": "`$STRING`", "key$": "exception_date", "index$": 1 }, "exception_type": { "a": true, "h": "Exception Type", "n": "exception_type", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "`closed` means the workspace is closed all day; `custom_hours` replaces the regular hours with `time_intervals`.", "t": "`$STRING`", "key$": "exception_type", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The unique identifier for the office hours exception.", "t": "`$STRING`", "key$": "id", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "An optional name for the exception.", "t": "`$STRING`", "key$": "name", "index$": 4 }, "office_hours_schedule_id": { "a": true, "h": "Office Hours Schedule Id", "n": "office_hours_schedule_id", "r": false, "sh": "The unique identifier for the schedule this exception belongs to.", "t": "`$STRING`", "key$": "office_hours_schedule_id", "index$": 5 }, "recurring_annually": { "a": true, "h": "Recurring Annually", "n": "recurring_annually", "r": false, "sh": "Whether the exception repeats every year on the same date.", "t": "`$BOOLEAN`", "key$": "recurring_annually", "index$": 6 }, "time_intervals": { "a": true, "h": "Time Intervals", "n": "time_intervals", "r": false, "sh": "The open intervals for the exception date.", "t": "`$ARRAY`", "key$": "time_intervals", "index$": 7 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "The type of the object - always `office_hours_exception`.", "t": "`$STRING`", "key$": "type", "index$": 8 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": false, "sh": "The time the exception was last updated as a Unix timestamp.", "t": "`$INTEGER`", "key$": "updated_at", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "office_hours_exception", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "123", "k": "param", "n": "office_hours_schedule_id", "or": "office_hours_schedule_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions", "q": { "exist": ["intercom_version", "office_hours_schedule_id"] }, "r": {}, "s": [{ "lit": "office_hours_schedules" }, { "var": "office_hours_schedule_id" }, { "lit": "office_hours_exceptions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "123", "k": "param", "n": "office_hours_schedule_id", "or": "office_hours_schedule_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions", "q": { "exist": ["intercom_version", "office_hours_schedule_id"] }, "r": {}, "s": [{ "lit": "office_hours_schedules" }, { "var": "office_hours_schedule_id" }, { "lit": "office_hours_exceptions" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "456", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "123", "k": "param", "n": "office_hours_schedule_id", "or": "office_hours_schedule_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}", "q": { "exist": ["id", "intercom_version", "office_hours_schedule_id"] }, "r": {}, "s": [{ "lit": "office_hours_schedules" }, { "var": "office_hours_schedule_id" }, { "lit": "office_hours_exceptions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "456", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "123", "k": "param", "n": "office_hours_schedule_id", "or": "office_hours_schedule_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}", "q": { "exist": ["id", "intercom_version", "office_hours_schedule_id"] }, "r": {}, "s": [{ "lit": "office_hours_schedules" }, { "var": "office_hours_schedule_id" }, { "lit": "office_hours_exceptions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.office_hours_schedule"]] }, "key$": "office_hours_exception", "name__orig": "office_hours_exception", "Name": "OfficeHoursException", "name_": "office_hours_exception", "name-": "office-hours-exception", "NAME": "OFFICE_HOURS_EXCEPTION", "index$": 66 }, { "active": true, "entity": "office_hours_exception", "key$": "BasicOfficeHoursExceptionFlow", "kind": "basic", "name": "BasicOfficeHoursExceptionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "office_hours_exception_ref01" }, "m": { "office_hours_schedule_id": "office_hours_schedule01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "office_hours_schedule_id": "office_hours_schedule01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "office_hours_exception_ref01" } }], "index$": 1 }, { "a": true, "d": { "office_hours_schedule_id": "office_hours_schedule01" }, "i": { "ref": "office_hours_exception_ref01", "srcdatavar": "office_hours_exception_ref01_data", "suffix": "_up0", "textfield": "exception_date" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-office_hours_exception_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "office_hours_exception_ref01", "srcdatavar": "office_hours_exception_ref01_data", "suffix": "_dt0" }, "m": { "id": "office_hours_exception01", "office_hours_schedule_id": "office_hours_schedule01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-office_hours_exception_ref01" } }], "index$": 3 }] }, 'OfficeHoursException', { "POST /office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "title": "Create Office Hours Exception Request", "description": "The request payload for creating an office hours exception. Omit `time_intervals` when `exception_type` is `closed`.", "required": ["exception_date", "exception_type"], "properties": { "exception_date": { "type": "string", "format": "date", "description": "The date the exception applies to, in `YYYY-MM-DD` format.", "example": "2026-12-25", "key$": "exception_date" }, "exception_type": { "type": "string", "enum": ["closed", "custom_hours"], "description": "The type of exception.", "example": "closed", "key$": "exception_type" }, "name": { "type": "string", "description": "An optional name for the exception.", "example": "Christmas Day", "key$": "name" }, "time_intervals": { "type": "array", "nullable": true, "description": "The open intervals for the exception date. Required for `custom_hours`; omit for `closed`.", "items": { "type": "object", "title": "Office Hours Time Interval", "x-tags": ["Office Hours"], "description": "A single open interval. For schedules, `start_minute` and `end_minute` are minute offsets from the start of the week (Monday 00:00 = 0), in the range 0 to 10080. For exceptions, they are minute offsets from midnight on `exception_date`, in the range 0 to 1440.", "properties": { "start_minute": { "description": "Minute the interval starts. For schedules, offset from the start of the week (Monday 00:00 = 0); for exceptions, offset from midnight on `exception_date`.", "example": 540, "type": "integer" }, "end_minute": { "description": "Minute the interval ends. For schedules, offset from the start of the week (Monday 00:00 = 0); for exceptions, offset from midnight on `exception_date`.", "example": 1020, "type": "integer" }, "day_of_week": { "description": "Derived day of the week the interval falls on (0 = Monday … 6 = Sunday). For exceptions, this is derived from `exception_date`.", "example": 0, "readOnly": true, "type": "integer" } }, "x-ref": "#/components/schemas/office_hours_time_interval" }, "key$": "time_intervals" }, "recurring_annually": { "type": "boolean", "description": "Whether the exception repeats every year on the same date.", "example": true, "key$": "recurring_annually" } }, "x-ref": "#/components/schemas/create_office_hours_exception_request", "index$": 1 }, "examples": { "Create exception": { "value": { "exception_date": "2026-12-25", "exception_type": "closed", "name": "Christmas Day", "recurring_annually": true } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "office_hours_schedule_id", "in": "path", "required": true, "description": "The unique identifier for the office hours schedule.", "example": "123", "schema": { "type": "string" }, "index$": 1 }] }, "GET /office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "office_hours_schedule_id", "in": "path", "required": true, "description": "The unique identifier for the office hours schedule.", "example": "123", "schema": { "type": "string" }, "index$": 1 }] }, "GET /office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "office_hours_schedule_id", "in": "path", "required": true, "description": "The unique identifier for the office hours schedule.", "example": "123", "schema": { "type": "string" }, "index$": 1 }, { "name": "id", "in": "path", "required": true, "description": "The unique identifier for the office hours exception.", "example": "456", "schema": { "type": "string" }, "index$": 2 }] }, "PUT /office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "title": "Update Office Hours Exception Request", "description": "The request payload for updating an office hours exception. Only the provided fields are updated.", "properties": { "exception_date": { "type": "string", "format": "date", "description": "The date the exception applies to, in `YYYY-MM-DD` format.", "example": "2026-12-25", "key$": "exception_date" }, "exception_type": { "type": "string", "enum": ["closed", "custom_hours"], "description": "The type of exception.", "example": "custom_hours", "key$": "exception_type" }, "name": { "type": "string", "description": "An optional name for the exception.", "example": "Christmas Day (reduced hours)", "key$": "name" }, "time_intervals": { "type": "array", "nullable": true, "description": "The open intervals for the exception date. Required for `custom_hours`; omit for `closed`.", "items": { "type": "object", "title": "Office Hours Time Interval", "x-tags": ["Office Hours"], "description": "A single open interval. For schedules, `start_minute` and `end_minute` are minute offsets from the start of the week (Monday 00:00 = 0), in the range 0 to 10080. For exceptions, they are minute offsets from midnight on `exception_date`, in the range 0 to 1440.", "properties": { "start_minute": { "description": "Minute the interval starts. For schedules, offset from the start of the week (Monday 00:00 = 0); for exceptions, offset from midnight on `exception_date`.", "example": 540, "type": "integer" }, "end_minute": { "description": "Minute the interval ends. For schedules, offset from the start of the week (Monday 00:00 = 0); for exceptions, offset from midnight on `exception_date`.", "example": 1020, "type": "integer" }, "day_of_week": { "description": "Derived day of the week the interval falls on (0 = Monday … 6 = Sunday). For exceptions, this is derived from `exception_date`.", "example": 0, "readOnly": true, "type": "integer" } }, "x-ref": "#/components/schemas/office_hours_time_interval" }, "key$": "time_intervals" }, "recurring_annually": { "type": "boolean", "description": "Whether the exception repeats every year on the same date.", "example": true, "key$": "recurring_annually" } }, "x-ref": "#/components/schemas/update_office_hours_exception_request", "index$": 1 }, "examples": { "Update exception": { "value": { "exception_type": "custom_hours", "name": "Christmas Day (reduced hours)", "time_intervals": [{ "start_minute": 540, "end_minute": 780 }], "recurring_annually": true } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "office_hours_schedule_id", "in": "path", "required": true, "description": "The unique identifier for the office hours schedule.", "example": "123", "schema": { "type": "string" }, "index$": 1 }, { "name": "id", "in": "path", "required": true, "description": "The unique identifier for the office hours exception.", "example": "456", "schema": { "type": "string" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const office_hours_exception_ref01_ent = client.OfficeHoursException();
        let office_hours_exception_ref01_data = setup.data.new.office_hours_exception['office_hours_exception_ref01'];
        office_hours_exception_ref01_data['office_hours_schedule_id'] = setup.idmap['office_hours_schedule01'];
        office_hours_exception_ref01_data = (await office_hours_exception_ref01_ent.create(office_hours_exception_ref01_data)).data();
        (0, node_assert_1.default)(null != office_hours_exception_ref01_data.id);
        // LIST
        const office_hours_exception_ref01_match = {};
        office_hours_exception_ref01_match['office_hours_schedule_id'] = setup.idmap['office_hours_schedule01'];
        const office_hours_exception_ref01_list = (await office_hours_exception_ref01_ent.list(office_hours_exception_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(office_hours_exception_ref01_list, { id: office_hours_exception_ref01_data.id })));
        // UPDATE
        const office_hours_exception_ref01_data_up0 = {};
        office_hours_exception_ref01_data_up0.id = office_hours_exception_ref01_data.id;
        office_hours_exception_ref01_data_up0['office_hours_schedule_id'] = setup.idmap['office_hours_schedule_id'];
        const office_hours_exception_ref01_markdef_up0 = { name: 'exception_date', value: 'Mark01-office_hours_exception_ref01_' + setup.now };
        office_hours_exception_ref01_data_up0[office_hours_exception_ref01_markdef_up0.name] = office_hours_exception_ref01_markdef_up0.value;
        const office_hours_exception_ref01_resdata_up0 = (await office_hours_exception_ref01_ent.update(office_hours_exception_ref01_data_up0)).data();
        (0, node_assert_1.default)(office_hours_exception_ref01_resdata_up0.id === office_hours_exception_ref01_data_up0.id);
        (0, node_assert_1.default)(office_hours_exception_ref01_resdata_up0[office_hours_exception_ref01_markdef_up0.name] === office_hours_exception_ref01_markdef_up0.value);
        // LOAD
        const office_hours_exception_ref01_match_dt0 = {};
        office_hours_exception_ref01_match_dt0.id = office_hours_exception_ref01_data.id;
        const office_hours_exception_ref01_data_dt0 = (await office_hours_exception_ref01_ent.load(office_hours_exception_ref01_match_dt0)).data();
        (0, node_assert_1.default)(office_hours_exception_ref01_data_dt0.id === office_hours_exception_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/office_hours_exception/OfficeHoursExceptionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['office_hours_exception01', 'office_hours_exception02', 'office_hours_exception03', 'office_hours_schedule01', 'office_hours_schedule02', 'office_hours_schedule03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_OFFICE_HOURS_EXCEPTION_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_OFFICE_HOURS_EXCEPTION_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_OFFICE_HOURS_EXCEPTION_ENTID'];
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
//# sourceMappingURL=OfficeHoursExceptionEntity.test.js.map