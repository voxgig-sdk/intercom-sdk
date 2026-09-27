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
(0, node_test_1.describe)('OfficeHoursScheduleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.OfficeHoursSchedule();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'office_hours_schedule.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "sh": "The time the schedule was created as a Unix timestamp.", "t": "`$INTEGER`", "key$": "created_at", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The unique identifier for the office hours schedule.", "t": "`$STRING`", "key$": "id", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the office hours schedule.", "t": "`$STRING`", "key$": "name", "index$": 2 }, "time_intervals": { "a": true, "h": "Time Intervals", "n": "time_intervals", "r": false, "sh": "The open intervals that make up the weekly schedule.", "t": "`$ARRAY`", "key$": "time_intervals", "index$": 3 }, "time_zone_name": { "a": true, "h": "Time Zone Name", "n": "time_zone_name", "r": false, "sh": "The IANA time zone the schedule's hours are evaluated in.", "t": "`$STRING`", "key$": "time_zone_name", "index$": 4 }, "twenty_four_seven": { "a": true, "h": "Twenty Four Seven", "n": "twenty_four_seven", "r": false, "sh": "Whether the schedule is open 24/7.", "t": "`$BOOLEAN`", "key$": "twenty_four_seven", "index$": 5 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "The type of the object - always `office_hours_schedule`.", "t": "`$STRING`", "key$": "type", "index$": 6 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": false, "sh": "The time the schedule was last updated as a Unix timestamp.", "t": "`$INTEGER`", "key$": "updated_at", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "office_hours_schedule", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /office_hours_schedules/{id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "123", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/office_hours_schedules/{id}", "q": { "exist": ["id", "intercom_version"] }, "r": {}, "s": [{ "lit": "office_hours_schedules" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /office_hours_schedules/{id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "123", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/office_hours_schedules/{id}", "q": { "exist": ["id", "intercom_version"] }, "r": {}, "s": [{ "lit": "office_hours_schedules" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "office_hours_schedule", "name__orig": "office_hours_schedule", "Name": "OfficeHoursSchedule", "name_": "office_hours_schedule", "name-": "office-hours-schedule", "NAME": "OFFICE_HOURS_SCHEDULE", "index$": 67 }, { "active": true, "entity": "office_hours_schedule", "key$": "BasicOfficeHoursScheduleFlow", "kind": "basic", "name": "BasicOfficeHoursScheduleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "office_hours_schedule_ref01", "srcdatavar": "office_hours_schedule_ref01_data", "suffix": "_up0", "textfield": "name" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-office_hours_schedule_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "office_hours_schedule_ref01", "srcdatavar": "office_hours_schedule_ref01_data", "suffix": "_dt0" }, "m": { "id": "office_hours_schedule01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-office_hours_schedule_ref01" } }], "index$": 1 }] }, 'OfficeHoursSchedule', { "GET /office_hours_schedules/{id}": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "id", "in": "path", "required": true, "description": "The unique identifier for the office hours schedule.", "example": "123", "schema": { "type": "string" }, "index$": 1 }] }, "PUT /office_hours_schedules/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "title": "Update Office Hours Schedule Request", "description": "The request payload for updating an office hours schedule. Only the provided fields are updated.", "properties": { "name": { "type": "string", "description": "The name of the office hours schedule.", "example": "Extended Support Hours", "key$": "name" }, "time_zone_name": { "type": "string", "description": "The IANA time zone the schedule's hours are evaluated in.", "example": "America/New_York", "key$": "time_zone_name" }, "time_intervals": { "type": "array", "description": "The open intervals for the schedule. `start_minute` and `end_minute` must be on a 15-minute boundary.", "items": { "type": "object", "title": "Office Hours Time Interval", "x-tags": ["Office Hours"], "description": "A single open interval. For schedules, `start_minute` and `end_minute` are minute offsets from the start of the week (Monday 00:00 = 0), in the range 0 to 10080. For exceptions, they are minute offsets from midnight on `exception_date`, in the range 0 to 1440.", "properties": { "start_minute": { "description": "Minute the interval starts. For schedules, offset from the start of the week (Monday 00:00 = 0); for exceptions, offset from midnight on `exception_date`.", "example": 540, "type": "integer" }, "end_minute": { "description": "Minute the interval ends. For schedules, offset from the start of the week (Monday 00:00 = 0); for exceptions, offset from midnight on `exception_date`.", "example": 1020, "type": "integer" }, "day_of_week": { "description": "Derived day of the week the interval falls on (0 = Monday … 6 = Sunday). For exceptions, this is derived from `exception_date`.", "example": 0, "readOnly": true, "type": "integer" } }, "x-ref": "#/components/schemas/office_hours_time_interval" }, "key$": "time_intervals" } }, "x-ref": "#/components/schemas/update_office_hours_schedule_request", "index$": 1 }, "examples": { "Update schedule": { "value": { "name": "Extended Support Hours", "time_intervals": [{ "start_minute": 480, "end_minute": 1080 }] } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "id", "in": "path", "required": true, "description": "The unique identifier for the office hours schedule.", "example": "123", "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let office_hours_schedule_ref01_data = Object.values(setup.data.existing.office_hours_schedule)[0];
        // UPDATE
        const office_hours_schedule_ref01_ent = client.OfficeHoursSchedule();
        const office_hours_schedule_ref01_data_up0 = {};
        office_hours_schedule_ref01_data_up0.id = office_hours_schedule_ref01_data.id;
        const office_hours_schedule_ref01_markdef_up0 = { name: 'name', value: 'Mark01-office_hours_schedule_ref01_' + setup.now };
        office_hours_schedule_ref01_data_up0[office_hours_schedule_ref01_markdef_up0.name] = office_hours_schedule_ref01_markdef_up0.value;
        const office_hours_schedule_ref01_resdata_up0 = (await office_hours_schedule_ref01_ent.update(office_hours_schedule_ref01_data_up0)).data();
        (0, node_assert_1.default)(office_hours_schedule_ref01_resdata_up0.id === office_hours_schedule_ref01_data_up0.id);
        (0, node_assert_1.default)(office_hours_schedule_ref01_resdata_up0[office_hours_schedule_ref01_markdef_up0.name] === office_hours_schedule_ref01_markdef_up0.value);
        // LOAD
        const office_hours_schedule_ref01_match_dt0 = {};
        office_hours_schedule_ref01_match_dt0.id = office_hours_schedule_ref01_data.id;
        const office_hours_schedule_ref01_data_dt0 = (await office_hours_schedule_ref01_ent.load(office_hours_schedule_ref01_match_dt0)).data();
        (0, node_assert_1.default)(office_hours_schedule_ref01_data_dt0.id === office_hours_schedule_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/office_hours_schedule/OfficeHoursScheduleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['office_hours_schedule01', 'office_hours_schedule02', 'office_hours_schedule03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_OFFICE_HOURS_SCHEDULE_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_OFFICE_HOURS_SCHEDULE_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_OFFICE_HOURS_SCHEDULE_ENTID'];
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
//# sourceMappingURL=OfficeHoursScheduleEntity.test.js.map