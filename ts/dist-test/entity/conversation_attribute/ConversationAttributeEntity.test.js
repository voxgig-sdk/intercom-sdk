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
(0, node_test_1.describe)('ConversationAttributeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.ConversationAttribute();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'conversation_attribute.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "admin_id": { "a": true, "h": "Admin Id", "n": "admin_id", "r": false, "t": "`$STRING`", "key$": "admin_id", "index$": 0 }, "archived": { "a": true, "h": "Archived", "n": "archived", "r": false, "t": "`$BOOLEAN`", "key$": "archived", "index$": 1 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "t": "`$INTEGER`", "key$": "created_at", "index$": 2 }, "data_type": { "a": true, "h": "Data Type", "n": "data_type", "r": false, "t": "`$STRING`", "key$": "data_type", "index$": 3 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Readable description of the attribute.", "t": "`$STRING`", "key$": "description", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 5 }, "label": { "a": true, "h": "Label", "n": "label", "r": true, "sh": "The label for the new option.", "t": "`$STRING`", "key$": "label", "index$": 6 }, "multiline": { "a": true, "h": "Multiline", "n": "multiline", "r": false, "sh": "(String data type only) Whether this string attribute is multiline.", "t": "`$BOOLEAN`", "key$": "multiline", "index$": 7 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Name of the attribute.", "t": "`$STRING`", "key$": "name", "index$": 8 }, "reference": { "a": true, "h": "Reference", "n": "reference", "r": true, "sh": "(Relationship data type only) Reference configuration for related objects.", "t": "`$OBJECT`", "key$": "reference", "index$": 9 }, "required": { "a": true, "h": "Required", "n": "required", "r": false, "sh": "Whether this attribute is required.", "t": "`$BOOLEAN`", "key$": "required", "index$": 10 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "t": "`$STRING`", "key$": "type", "index$": 11 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": false, "t": "`$INTEGER`", "key$": "updated_at", "index$": 12 }, "visible_to_team_ids": { "a": true, "h": "Visible To Team Ids", "n": "visible_to_team_ids", "r": false, "sh": "Team IDs that can see this attribute.", "t": "`$ARRAY`", "key$": "visible_to_team_ids", "index$": 13 } }, "id": { "field": "id", "name": "id" }, "name": "conversation_attribute", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /conversations/attributes/{id}/options", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": 2, "k": "param", "n": "attribute_id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/conversations/attributes/{id}/options", "q": { "exist": ["attribute_id", "intercom_version"] }, "r": { "param": { "id": "attribute_id" } }, "s": [{ "lit": "conversations" }, { "lit": "attributes" }, { "var": "attribute_id" }, { "lit": "options" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /conversations/attributes", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/conversations/attributes", "q": { "exist": ["intercom_version"] }, "r": {}, "s": [{ "lit": "conversations" }, { "lit": "attributes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /conversations/attributes/{id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": 3, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/conversations/attributes/{id}", "q": { "exist": ["id", "intercom_version"] }, "r": {}, "s": [{ "lit": "conversations" }, { "lit": "attributes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /conversations/attributes/{id}/options/{option_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": 2, "k": "param", "n": "attribute_id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": "a1b2c3d4-e5f6-7890-abcd-ef1234567890", "k": "param", "n": "option_id", "or": "option_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/conversations/attributes/{id}/options/{option_id}", "q": { "exist": ["attribute_id", "intercom_version", "option_id"] }, "r": { "param": { "id": "attribute_id" } }, "s": [{ "lit": "conversations" }, { "lit": "attributes" }, { "var": "attribute_id" }, { "lit": "options" }, { "var": "option_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /conversations/attributes/{id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": 8, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/conversations/attributes/{id}", "q": { "exist": ["id", "intercom_version"] }, "r": {}, "s": [{ "lit": "conversations" }, { "lit": "attributes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /conversations/attributes/{id}/options/{option_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": 2, "k": "param", "n": "attribute_id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": "a1b2c3d4-e5f6-7890-abcd-ef1234567890", "k": "param", "n": "option_id", "or": "option_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/conversations/attributes/{id}/options/{option_id}", "q": { "exist": ["attribute_id", "intercom_version", "option_id"] }, "r": { "param": { "id": "attribute_id" } }, "s": [{ "lit": "conversations" }, { "lit": "attributes" }, { "var": "attribute_id" }, { "lit": "options" }, { "var": "option_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /conversations/attributes/{id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": 8, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/conversations/attributes/{id}", "q": { "exist": ["id", "intercom_version"] }, "r": {}, "s": [{ "lit": "conversations" }, { "lit": "attributes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "conversation_attribute", "name__orig": "conversation_attribute", "Name": "ConversationAttribute", "name_": "conversation_attribute", "name-": "conversation-attribute", "NAME": "CONVERSATION_ATTRIBUTE", "index$": 32 }, { "active": true, "entity": "conversation_attribute", "key$": "BasicConversationAttributeFlow", "kind": "basic", "name": "BasicConversationAttributeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "conversation_attribute_ref01" }, "m": { "attribute_id": "attribute01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "conversation_attribute_ref01", "srcdatavar": "conversation_attribute_ref01_data", "suffix": "_up0", "textfield": "admin_id" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-conversation_attribute_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "conversation_attribute_ref01", "srcdatavar": "conversation_attribute_ref01_data", "suffix": "_dt0" }, "m": { "id": "conversation_attribute01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-conversation_attribute_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "conversation_attribute_ref01", "suffix": "_rm0" }, "m": { "id": "conversation_attribute01" }, "o": "remove", "s": [], "v": [], "index$": 3 }] }, 'ConversationAttribute', { "POST /conversations/attributes/{id}/options": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "title": "Create Conversation Attribute Option Request", "type": "object", "description": "Payload for adding a new option to a list-type conversation attribute.", "required": ["label"], "properties": { "label": { "type": "string", "description": "The label for the new option.", "example": "High", "key$": "label" } }, "x-ref": "#/components/schemas/create_conversation_attribute_option_request", "index$": 1 }, "examples": { "Add option": { "summary": "Add a new list option", "value": { "label": "High" } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "id", "in": "path", "required": true, "description": "The conversation attribute id", "example": 2, "schema": { "type": "integer" }, "index$": 1 }] }, "POST /conversations/attributes": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "title": "Create Conversation Attribute Request", "description": "Payload for creating a new conversation attribute.", "discriminator": { "propertyName": "data_type", "mapping": { "string": "#/components/schemas/create_conversation_attribute_string_request", "integer": "#/components/schemas/create_conversation_attribute_integer_request", "list": "#/components/schemas/create_conversation_attribute_list_request", "decimal": "#/components/schemas/create_conversation_attribute_decimal_request", "boolean": "#/components/schemas/create_conversation_attribute_boolean_request", "datetime": "#/components/schemas/create_conversation_attribute_datetime_request", "relationship": "#/components/schemas/create_conversation_attribute_relationship_request", "files": "#/components/schemas/create_conversation_attribute_files_request" } }, "oneOf": [{ "title": "Create Conversation Attribute Request (String)", "allOf": [{ "title": "Create Conversation Attribute Request Base", "type": "object", "required": ["name", "data_type"], "properties": { "name": {}, "description": {}, "data_type": {}, "required": {}, "visible_to_team_ids": {} }, "x-ref": "#/components/schemas/create_conversation_attribute_request_base" }, { "type": "object", "properties": { "data_type": {}, "multiline": {} } }], "x-ref": "#/components/schemas/create_conversation_attribute_string_request" }, { "title": "Create Conversation Attribute Request (Integer)", "allOf": [{ "title": "Create Conversation Attribute Request Base", "type": "object", "required": ["name", "data_type"], "properties": { "name": {}, "description": {}, "data_type": {}, "required": {}, "visible_to_team_ids": {} }, "x-ref": "#/components/schemas/create_conversation_attribute_request_base" }, { "type": "object", "properties": { "data_type": {} } }], "x-ref": "#/components/schemas/create_conversation_attribute_integer_request" }, { "title": "Create Conversation Attribute Request (List)", "allOf": [{ "title": "Create Conversation Attribute Request Base", "type": "object", "required": ["name", "data_type"], "properties": { "name": {}, "description": {}, "data_type": {}, "required": {}, "visible_to_team_ids": {} }, "x-ref": "#/components/schemas/create_conversation_attribute_request_base" }, { "type": "object", "properties": { "data_type": {}, "options": {} } }], "x-ref": "#/components/schemas/create_conversation_attribute_list_request" }, { "title": "Create Conversation Attribute Request (Decimal)", "allOf": [{ "title": "Create Conversation Attribute Request Base", "type": "object", "required": ["name", "data_type"], "properties": { "name": {}, "description": {}, "data_type": {}, "required": {}, "visible_to_team_ids": {} }, "x-ref": "#/components/schemas/create_conversation_attribute_request_base" }, { "type": "object", "properties": { "data_type": {} } }], "x-ref": "#/components/schemas/create_conversation_attribute_decimal_request" }, { "title": "Create Conversation Attribute Request (Boolean)", "allOf": [{ "title": "Create Conversation Attribute Request Base", "type": "object", "required": ["name", "data_type"], "properties": { "name": {}, "description": {}, "data_type": {}, "required": {}, "visible_to_team_ids": {} }, "x-ref": "#/components/schemas/create_conversation_attribute_request_base" }, { "type": "object", "properties": { "data_type": {} } }], "x-ref": "#/components/schemas/create_conversation_attribute_boolean_request" }, { "title": "Create Conversation Attribute Request (Datetime)", "allOf": [{ "title": "Create Conversation Attribute Request Base", "type": "object", "required": ["name", "data_type"], "properties": { "name": {}, "description": {}, "data_type": {}, "required": {}, "visible_to_team_ids": {} }, "x-ref": "#/components/schemas/create_conversation_attribute_request_base" }, { "type": "object", "properties": { "data_type": {} } }], "x-ref": "#/components/schemas/create_conversation_attribute_datetime_request" }, { "title": "Create Conversation Attribute Request (Relationship)", "allOf": [{ "title": "Create Conversation Attribute Request Base", "type": "object", "required": ["name", "data_type"], "properties": { "name": {}, "description": {}, "data_type": {}, "required": {}, "visible_to_team_ids": {} }, "x-ref": "#/components/schemas/create_conversation_attribute_request_base" }, { "type": "object", "properties": { "data_type": {}, "reference": {} } }], "x-ref": "#/components/schemas/create_conversation_attribute_relationship_request" }, { "title": "Create Conversation Attribute Request (Files)", "allOf": [{ "title": "Create Conversation Attribute Request Base", "type": "object", "required": ["name", "data_type"], "properties": { "name": {}, "description": {}, "data_type": {}, "required": {}, "visible_to_team_ids": {} }, "x-ref": "#/components/schemas/create_conversation_attribute_request_base" }, { "type": "object", "properties": { "data_type": {} } }], "x-ref": "#/components/schemas/create_conversation_attribute_files_request" }], "x-ref": "#/components/schemas/create_conversation_attribute_request", "index$": 1 }, "examples": { "Create string attribute": { "summary": "Create a string attribute", "value": { "name": "api_test_attr", "data_type": "string", "description": "Created via API test" } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }] }, "GET /conversations/attributes/{id}": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "id", "in": "path", "required": true, "description": "The conversation attribute id", "example": 3, "schema": { "type": "integer" }, "index$": 1 }] }, "DELETE /conversations/attributes/{id}/options/{option_id}": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "id", "in": "path", "required": true, "description": "The conversation attribute id", "example": 2, "schema": { "type": "integer" }, "index$": 1 }, { "name": "option_id", "in": "path", "required": true, "description": "The UUID of the list option to archive (from the `id` field in the options array)", "example": "a1b2c3d4-e5f6-7890-abcd-ef1234567890", "schema": { "type": "string" }, "index$": 2 }] }, "DELETE /conversations/attributes/{id}": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "id", "in": "path", "required": true, "description": "The conversation attribute id", "example": 8, "schema": { "type": "integer" }, "index$": 1 }] }, "PUT /conversations/attributes/{id}/options/{option_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "title": "Update Conversation Attribute Option Request", "type": "object", "description": "Payload for renaming a list option on a conversation attribute.", "required": ["label"], "properties": { "label": { "type": "string", "description": "The updated label for the option.", "example": "Renamed", "key$": "label" } }, "x-ref": "#/components/schemas/update_conversation_attribute_option_request", "index$": 1 }, "examples": { "Rename option": { "summary": "Rename an existing option", "value": { "label": "Renamed" } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "id", "in": "path", "required": true, "description": "The conversation attribute id", "example": 2, "schema": { "type": "integer" }, "index$": 1 }, { "name": "option_id", "in": "path", "required": true, "description": "The UUID of the list option to update (from the `id` field in the options array)", "example": "a1b2c3d4-e5f6-7890-abcd-ef1234567890", "schema": { "type": "string" }, "index$": 2 }] }, "PUT /conversations/attributes/{id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "title": "Update Conversation Attribute Request", "type": "object", "description": "Payload for updating a conversation attribute.", "properties": { "name": { "type": "string", "description": "Name of the attribute.", "example": "api_test_renamed", "key$": "name" }, "description": { "type": "string", "description": "Readable description of the attribute.", "example": "Updated via API", "key$": "description" }, "multiline": { "type": "boolean", "description": "(String data type only) Whether this string attribute is multiline.", "example": false, "key$": "multiline" }, "required": { "type": "boolean", "description": "Whether this attribute is required.", "example": false, "key$": "required" }, "visible_to_team_ids": { "type": "array", "description": "Team IDs that can see this attribute. Empty array means all teams.", "items": { "type": "string" }, "example": [], "key$": "visible_to_team_ids" }, "reference": { "type": "object", "description": "(Relationship data type only) Reference configuration for related objects.", "required": ["type"], "properties": { "type": { "type": "string", "description": "The cardinality of the relationship: `one` or `many`.", "enum": ["one", "many"] }, "object_type_id": { "type": "string", "description": "The ID of the related custom object type." } }, "key$": "reference" } }, "x-ref": "#/components/schemas/update_conversation_attribute_request", "index$": 1 }, "examples": { "Update name": { "summary": "Update name and description", "value": { "name": "api_test_renamed", "description": "Updated via API" } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "id", "in": "path", "required": true, "description": "The conversation attribute id", "example": 8, "schema": { "type": "integer" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const conversation_attribute_ref01_ent = client.ConversationAttribute();
        let conversation_attribute_ref01_data = setup.data.new.conversation_attribute['conversation_attribute_ref01'];
        conversation_attribute_ref01_data['attribute_id'] = setup.idmap['attribute01'];
        conversation_attribute_ref01_data = (await conversation_attribute_ref01_ent.create(conversation_attribute_ref01_data)).data();
        (0, node_assert_1.default)(null != conversation_attribute_ref01_data.id);
        // UPDATE
        const conversation_attribute_ref01_data_up0 = {};
        conversation_attribute_ref01_data_up0.id = conversation_attribute_ref01_data.id;
        const conversation_attribute_ref01_markdef_up0 = { name: 'admin_id', value: 'Mark01-conversation_attribute_ref01_' + setup.now };
        conversation_attribute_ref01_data_up0[conversation_attribute_ref01_markdef_up0.name] = conversation_attribute_ref01_markdef_up0.value;
        const conversation_attribute_ref01_resdata_up0 = (await conversation_attribute_ref01_ent.update(conversation_attribute_ref01_data_up0)).data();
        (0, node_assert_1.default)(conversation_attribute_ref01_resdata_up0.id === conversation_attribute_ref01_data_up0.id);
        (0, node_assert_1.default)(conversation_attribute_ref01_resdata_up0[conversation_attribute_ref01_markdef_up0.name] === conversation_attribute_ref01_markdef_up0.value);
        // LOAD
        const conversation_attribute_ref01_match_dt0 = {};
        conversation_attribute_ref01_match_dt0.id = conversation_attribute_ref01_data.id;
        const conversation_attribute_ref01_data_dt0 = (await conversation_attribute_ref01_ent.load(conversation_attribute_ref01_match_dt0)).data();
        (0, node_assert_1.default)(conversation_attribute_ref01_data_dt0.id === conversation_attribute_ref01_data.id);
        // REMOVE
        const conversation_attribute_ref01_match_rm0 = { id: conversation_attribute_ref01_data.id };
        await conversation_attribute_ref01_ent.remove(conversation_attribute_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/conversation_attribute/ConversationAttributeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['conversation_attribute01', 'conversation_attribute02', 'conversation_attribute03', 'attribute01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_CONVERSATION_ATTRIBUTE_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_CONVERSATION_ATTRIBUTE_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_CONVERSATION_ATTRIBUTE_ENTID'];
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
//# sourceMappingURL=ConversationAttributeEntity.test.js.map