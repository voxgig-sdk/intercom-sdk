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
(0, node_test_1.describe)('TicketTypeAttributeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.TicketTypeAttribute();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ticket_type_attribute.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "allow_multiple_values", "req": false, "short": "Whether the attribute allows multiple files to be attached to it (only applicable to file attributes)", "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "name": "archived", "req": false, "short": "Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets)", "type": "`$BOOLEAN`", "index$": 1 }, { "active": true, "name": "data_type", "req": true, "short": "The data type of the attribute", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "description", "op": { "update": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "The description of the attribute presented to the teammate or contact", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "list_items", "req": false, "short": "A comma delimited list of items for the attribute value (only applicable to list attributes)", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "multiline", "req": false, "short": "Whether the attribute allows multiple lines of text (only applicable to string attributes)", "type": "`$BOOLEAN`", "index$": 6 }, { "active": true, "name": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "The name of the ticket type attribute", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "required_to_create", "req": false, "short": "Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox.", "type": "`$BOOLEAN`", "index$": 8 }, { "active": true, "name": "required_to_create_for_contacts", "req": false, "short": "Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger.", "type": "`$BOOLEAN`", "index$": 9 }, { "active": true, "name": "visible_on_create", "req": false, "short": "Whether the attribute is visible to teammates when creating a ticket in Inbox.", "type": "`$BOOLEAN`", "index$": 10 }, { "active": true, "name": "visible_to_contacts", "req": false, "short": "Whether the attribute is visible to contacts when creating a ticket in Messenger.", "type": "`$BOOLEAN`", "index$": 11 }], "id": { "field": "id", "name": "id" }, "name": "ticket_type_attribute", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "kind": "param", "name": "id", "orig": "ticket_type_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /ticket_types/{ticket_type_id}/attributes", "json": "{\"operationId\":\"createTicketTypeAttribute\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the ticket type which is given by Intercom.\",\"in\":\"path\",\"name\":\"ticket_type_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"ticket_type_attribute_created\":{\"summary\":\"Ticket Type Attribute created\",\"value\":{\"data_type\":\"string\",\"description\":\"Attribute Description\",\"name\":\"Attribute Title\",\"required_to_create\":false}}},\"schema\":{\"description\":\"You can create a Ticket Type Attribute\",\"properties\":{\"allow_multiple_values\":{\"description\":\"Whether the attribute allows multiple files to be attached to it (only applicable to file attributes)\",\"example\":false,\"type\":\"boolean\"},\"data_type\":{\"description\":\"The data type of the attribute\",\"enum\":[\"string\",\"list\",\"integer\",\"decimal\",\"boolean\",\"datetime\",\"files\"],\"example\":\"string\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the attribute presented to the teammate or contact\",\"example\":\"Priority level of the bug\",\"type\":\"string\"},\"list_items\":{\"description\":\"A comma delimited list of items for the attribute value (only applicable to list attributes)\",\"example\":\"Low Priority,Medium Priority,High Priority\",\"type\":\"string\"},\"multiline\":{\"description\":\"Whether the attribute allows multiple lines of text (only applicable to string attributes)\",\"example\":false,\"type\":\"boolean\"},\"name\":{\"description\":\"The name of the ticket type attribute\",\"example\":\"Bug Priority\",\"type\":\"string\"},\"required_to_create\":{\"default\":false,\"description\":\"Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox.\",\"example\":false,\"type\":\"boolean\"},\"required_to_create_for_contacts\":{\"default\":false,\"description\":\"Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger.\",\"example\":false,\"type\":\"boolean\"},\"visible_on_create\":{\"default\":true,\"description\":\"Whether the attribute is visible to teammates when creating a ticket in Inbox.\",\"example\":true,\"type\":\"boolean\"},\"visible_to_contacts\":{\"default\":true,\"description\":\"Whether the attribute is visible to contacts when creating a ticket in Messenger.\",\"example\":true,\"type\":\"boolean\"}},\"required\":[\"name\",\"description\",\"data_type\"],\"title\":\"Create Ticket Type Attribute Request Payload\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Ticket Type Attribute created\":{\"value\":{\"archived\":false,\"created_at\":1734537862,\"data_type\":\"string\",\"default\":false,\"description\":\"Attribute Description\",\"id\":\"157\",\"input_options\":{\"multiline\":false},\"name\":\"Attribute Title\",\"order\":2,\"required_to_create\":false,\"required_to_create_for_contacts\":false,\"ticket_type_id\":63,\"type\":\"ticket_type_attribute\",\"updated_at\":1734537862,\"visible_on_create\":true,\"visible_to_contacts\":true,\"workspace_id\":\"this_is_an_id640_that_should_be_at_least_\"}}},\"schema\":{\"description\":\"Ticket type attribute, used to define each data field to be captured in a ticket.\",\"nullable\":true,\"properties\":{\"archived\":{\"description\":\"Whether the ticket type attribute is archived or not.\",\"example\":false,\"type\":\"boolean\"},\"created_at\":{\"description\":\"The date and time the ticket type attribute was created.\",\"format\":\"timestamp\",\"type\":\"integer\"},\"data_type\":{\"description\":\"The type of the data attribute (allowed values: \\\"string list integer decimal boolean datetime files\\\")\",\"example\":\"string\",\"type\":\"string\"},\"default\":{\"description\":\"Whether the attribute is built in or not.\",\"example\":true,\"type\":\"boolean\"},\"description\":{\"description\":\"The description of the ticket type attribute\",\"example\":\"Bug title.\",\"type\":\"string\"},\"id\":{\"description\":\"The id representing the ticket type attribute.\",\"example\":\"1\",\"type\":\"string\"},\"input_options\":{\"description\":\"Input options for the attribute\",\"example\":\"multiline: true\",\"type\":\"object\"},\"name\":{\"description\":\"The name of the ticket type attribute\",\"example\":\"Title\",\"type\":\"string\"},\"order\":{\"description\":\"The order of the attribute against other attributes\",\"example\":1,\"type\":\"integer\"},\"required_to_create\":{\"default\":false,\"description\":\"Whether the attribute is required or not for teammates.\",\"example\":false,\"type\":\"boolean\"},\"required_to_create_for_contacts\":{\"default\":false,\"description\":\"Whether the attribute is required or not for contacts.\",\"example\":false,\"type\":\"boolean\"},\"ticket_type_id\":{\"description\":\"The id of the ticket type that the attribute belongs to.\",\"example\":42,\"type\":\"integer\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `ticket_type_attribute`.\",\"example\":\"ticket_type_attribute\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The date and time the ticket type attribute was last updated.\",\"format\":\"timestamp\",\"type\":\"integer\"},\"visible_on_create\":{\"default\":true,\"description\":\"Whether the attribute is visible or not to teammates.\",\"example\":false,\"type\":\"boolean\"},\"visible_to_contacts\":{\"default\":true,\"description\":\"Whether the attribute is visible or not to contacts.\",\"example\":false,\"type\":\"boolean\"},\"workspace_id\":{\"description\":\"The id of the workspace that the ticket type attribute belongs to.\",\"example\":\"ecahpwf5\",\"type\":\"string\"}},\"title\":\"Ticket Type Attribute\",\"type\":\"object\"}}},\"description\":\"Ticket Type Attribute created\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"6c9836ed-8485-4f1d-929d-b9d7e153daed\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/ticket_types/{ticket_type_id}/attributes", "rename": { "param": { "ticket_type_id": "id" } }, "segments": [{ "lit": "ticket_types" }, { "var": "id" }, { "lit": "attributes" }], "select": { "exist": ["id", "intercom_version"] }, "transform": { "req": "`reqdata`", "res": "`body.input_options`" }, "index$": 0 }], "key$": "create" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "2.16", "kind": "header", "name": "intercom_version", "orig": "intercom_version", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "kind": "param", "name": "id", "orig": "attribute_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "ticket_type_id", "orig": "ticket_type_id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "PUT /ticket_types/{ticket_type_id}/attributes/{attribute_id}", "json": "{\"operationId\":\"updateTicketTypeAttribute\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the ticket type which is given by Intercom.\",\"in\":\"path\",\"name\":\"ticket_type_id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The unique identifier for the ticket type attribute which is given by Intercom.\",\"in\":\"path\",\"name\":\"attribute_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"ticket_type_attribute_updated\":{\"summary\":\"Ticket Type Attribute updated\",\"value\":{\"description\":\"New Attribute Description\"}}},\"schema\":{\"description\":\"You can update a Ticket Type Attribute\",\"properties\":{\"allow_multiple_values\":{\"description\":\"Whether the attribute allows multiple files to be attached to it (only applicable to file attributes)\",\"example\":false,\"type\":\"boolean\"},\"archived\":{\"description\":\"Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets)\",\"example\":false,\"type\":\"boolean\"},\"description\":{\"description\":\"The description of the attribute presented to the teammate or contact\",\"example\":\"Priority level of the bug\",\"type\":\"string\"},\"list_items\":{\"description\":\"A comma delimited list of items for the attribute value (only applicable to list attributes)\",\"example\":\"Low Priority,Medium Priority,High Priority\",\"type\":\"string\"},\"multiline\":{\"description\":\"Whether the attribute allows multiple lines of text (only applicable to string attributes)\",\"example\":false,\"type\":\"boolean\"},\"name\":{\"description\":\"The name of the ticket type attribute\",\"example\":\"Bug Priority\",\"type\":\"string\"},\"required_to_create\":{\"default\":false,\"description\":\"Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox.\",\"example\":false,\"type\":\"boolean\"},\"required_to_create_for_contacts\":{\"default\":false,\"description\":\"Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger.\",\"example\":false,\"type\":\"boolean\"},\"visible_on_create\":{\"default\":true,\"description\":\"Whether the attribute is visible to teammates when creating a ticket in Inbox.\",\"example\":true,\"type\":\"boolean\"},\"visible_to_contacts\":{\"default\":true,\"description\":\"Whether the attribute is visible to contacts when creating a ticket in Messenger.\",\"example\":true,\"type\":\"boolean\"}},\"title\":\"Update Ticket Type Attribute Request Payload\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Ticket Type Attribute updated\":{\"value\":{\"archived\":false,\"created_at\":1734537864,\"data_type\":\"string\",\"default\":false,\"description\":\"New Attribute Description\",\"id\":\"162\",\"name\":\"name\",\"order\":0,\"required_to_create\":false,\"required_to_create_for_contacts\":false,\"ticket_type_id\":65,\"type\":\"ticket_type_attribute\",\"updated_at\":1734537864,\"visible_on_create\":false,\"visible_to_contacts\":false,\"workspace_id\":\"this_is_an_id644_that_should_be_at_least_\"}}},\"schema\":{\"description\":\"Ticket type attribute, used to define each data field to be captured in a ticket.\",\"nullable\":true,\"properties\":{\"archived\":{\"description\":\"Whether the ticket type attribute is archived or not.\",\"example\":false,\"type\":\"boolean\"},\"created_at\":{\"description\":\"The date and time the ticket type attribute was created.\",\"format\":\"timestamp\",\"type\":\"integer\"},\"data_type\":{\"description\":\"The type of the data attribute (allowed values: \\\"string list integer decimal boolean datetime files\\\")\",\"example\":\"string\",\"type\":\"string\"},\"default\":{\"description\":\"Whether the attribute is built in or not.\",\"example\":true,\"type\":\"boolean\"},\"description\":{\"description\":\"The description of the ticket type attribute\",\"example\":\"Bug title.\",\"type\":\"string\"},\"id\":{\"description\":\"The id representing the ticket type attribute.\",\"example\":\"1\",\"type\":\"string\"},\"input_options\":{\"description\":\"Input options for the attribute\",\"example\":\"multiline: true\",\"type\":\"object\"},\"name\":{\"description\":\"The name of the ticket type attribute\",\"example\":\"Title\",\"type\":\"string\"},\"order\":{\"description\":\"The order of the attribute against other attributes\",\"example\":1,\"type\":\"integer\"},\"required_to_create\":{\"default\":false,\"description\":\"Whether the attribute is required or not for teammates.\",\"example\":false,\"type\":\"boolean\"},\"required_to_create_for_contacts\":{\"default\":false,\"description\":\"Whether the attribute is required or not for contacts.\",\"example\":false,\"type\":\"boolean\"},\"ticket_type_id\":{\"description\":\"The id of the ticket type that the attribute belongs to.\",\"example\":42,\"type\":\"integer\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `ticket_type_attribute`.\",\"example\":\"ticket_type_attribute\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The date and time the ticket type attribute was last updated.\",\"format\":\"timestamp\",\"type\":\"integer\"},\"visible_on_create\":{\"default\":true,\"description\":\"Whether the attribute is visible or not to teammates.\",\"example\":false,\"type\":\"boolean\"},\"visible_to_contacts\":{\"default\":true,\"description\":\"Whether the attribute is visible or not to contacts.\",\"example\":false,\"type\":\"boolean\"},\"workspace_id\":{\"description\":\"The id of the workspace that the ticket type attribute belongs to.\",\"example\":\"ecahpwf5\",\"type\":\"string\"}},\"title\":\"Ticket Type Attribute\",\"type\":\"object\"}}},\"description\":\"Ticket Type Attribute updated\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"cd303186-b33e-4409-8bfc-5814b176d6e1\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/ticket_types/{ticket_type_id}/attributes/{attribute_id}", "rename": { "param": { "attribute_id": "id" } }, "segments": [{ "lit": "ticket_types" }, { "var": "ticket_type_id" }, { "lit": "attributes" }, { "var": "id" }], "select": { "exist": ["id", "intercom_version", "ticket_type_id"] }, "transform": { "req": "`reqdata`", "res": "`body.input_options`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["ticket_type"]] }, "key$": "ticket_type_attribute", "name__orig": "ticket_type_attribute", "Name": "TicketTypeAttribute", "name_": "ticket_type_attribute", "name-": "ticket-type-attribute", "NAME": "TICKET_TYPE_ATTRIBUTE", "index$": 84 }, { "active": true, "entity": "ticket_type_attribute", "key$": "BasicTicketTypeAttributeFlow", "kind": "basic", "name": "BasicTicketTypeAttributeFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "ticket_type_attribute_ref01" }, "match": { "ticket_type_id": "ticket_type01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": { "ticket_type_id": "ticket_type01" }, "input": { "ref": "ticket_type_attribute_ref01", "srcdatavar": "ticket_type_attribute_ref01_data", "suffix": "_up0", "textfield": "data_type" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ticket_type_attribute_ref01" } }], "valid": [], "index$": 1 }] }, 'TicketTypeAttribute');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const ticket_type_attribute_ref01_ent = client.TicketTypeAttribute();
        let ticket_type_attribute_ref01_data = setup.data.new.ticket_type_attribute['ticket_type_attribute_ref01'];
        ticket_type_attribute_ref01_data['ticket_type_id'] = setup.idmap['ticket_type01'];
        ticket_type_attribute_ref01_data = (await ticket_type_attribute_ref01_ent.create(ticket_type_attribute_ref01_data)).data();
        (0, node_assert_1.default)(null != ticket_type_attribute_ref01_data.id);
        // UPDATE
        const ticket_type_attribute_ref01_data_up0 = {};
        ticket_type_attribute_ref01_data_up0.id = ticket_type_attribute_ref01_data.id;
        ticket_type_attribute_ref01_data_up0['ticket_type_id'] = setup.idmap['ticket_type_id'];
        const ticket_type_attribute_ref01_markdef_up0 = { name: 'data_type', value: 'Mark01-ticket_type_attribute_ref01_' + setup.now };
        ticket_type_attribute_ref01_data_up0[ticket_type_attribute_ref01_markdef_up0.name] = ticket_type_attribute_ref01_markdef_up0.value;
        const ticket_type_attribute_ref01_resdata_up0 = (await ticket_type_attribute_ref01_ent.update(ticket_type_attribute_ref01_data_up0)).data();
        (0, node_assert_1.default)(ticket_type_attribute_ref01_resdata_up0.id === ticket_type_attribute_ref01_data_up0.id);
        (0, node_assert_1.default)(ticket_type_attribute_ref01_resdata_up0[ticket_type_attribute_ref01_markdef_up0.name] === ticket_type_attribute_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ticket_type_attribute/TicketTypeAttributeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ticket_type_attribute01', 'ticket_type_attribute02', 'ticket_type_attribute03', 'ticket_type01', 'ticket_type02', 'ticket_type03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_TICKET_TYPE_ATTRIBUTE_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_TICKET_TYPE_ATTRIBUTE_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_TICKET_TYPE_ATTRIBUTE_ENTID'];
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
//# sourceMappingURL=TicketTypeAttributeEntity.test.js.map