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
(0, node_test_1.describe)('DataConnectorEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INTERCOM_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IntercomSDK.test();
        const ent = testsdk.DataConnector();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'data_connector.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "audiences": { "a": true, "h": "Audiences", "n": "audiences", "r": false, "sh": "The audience types this connector targets.", "t": "`$ARRAY`", "key$": "audiences", "index$": 0 }, "body": { "a": true, "h": "Body", "n": "body", "r": false, "sh": "The request body template.", "t": "`$STRING`", "key$": "body", "index$": 1 }, "bypass_authentication": { "a": true, "h": "Bypass Authentication", "n": "bypass_authentication", "r": false, "sh": "Whether authentication is bypassed for this connector.", "t": "`$BOOLEAN`", "key$": "bypass_authentication", "index$": 2 }, "client_function_name": { "a": true, "h": "Client Function Name", "n": "client_function_name", "r": false, "sh": "The name of the client-side function, if applicable.", "t": "`$STRING`", "key$": "client_function_name", "index$": 3 }, "client_function_timeout_ms": { "a": true, "h": "Client Function Timeout Ms", "n": "client_function_timeout_ms", "r": false, "sh": "Timeout in milliseconds for the client function, if applicable.", "t": "`$INTEGER`", "key$": "client_function_timeout_ms", "index$": 4 }, "configuration_response_type": { "a": true, "h": "Configuration Response Type", "n": "configuration_response_type", "r": false, "sh": "The expected response format from the connector.", "t": "`$STRING`", "key$": "configuration_response_type", "index$": 5 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "sh": "The time the data connector was created.", "t": "`$STRING`", "key$": "created_at", "index$": 6 }, "created_by_admin_id": { "a": true, "h": "Created By Admin Id", "n": "created_by_admin_id", "r": false, "sh": "The ID of the admin who created this connector.", "t": "`$STRING`", "key$": "created_by_admin_id", "index$": 7 }, "customer_authentication": { "a": true, "h": "Customer Authentication", "n": "customer_authentication", "r": false, "sh": "Whether OTP authentication is enabled for this connector.", "t": "`$BOOLEAN`", "key$": "customer_authentication", "index$": 8 }, "data_inputs": { "a": true, "h": "Data Inputs", "n": "data_inputs", "r": false, "sh": "The input parameters accepted by this data connector.", "t": "`$ARRAY`", "key$": "data_inputs", "index$": 9 }, "data_transformation_type": { "a": true, "h": "Data Transformation Type", "n": "data_transformation_type", "r": false, "sh": "The type of data transformation applied to the response.", "t": "`$STRING`", "key$": "data_transformation_type", "index$": 10 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "A description of what this data connector does.", "t": "`$STRING`", "key$": "description", "index$": 11 }, "direct_fin_usage": { "a": true, "h": "Direct Fin Usage", "n": "direct_fin_usage", "r": false, "sh": "Whether this connector is used directly by Fin.", "t": "`$BOOLEAN`", "key$": "direct_fin_usage", "index$": 12 }, "execution_results_url": { "a": true, "h": "Execution Results Url", "n": "execution_results_url", "r": false, "sh": "The URL path to fetch execution results for this connector.", "t": "`$STRING`", "key$": "execution_results_url", "index$": 13 }, "execution_type": { "a": true, "h": "Execution Type", "n": "execution_type", "r": false, "sh": "How the connector executes.", "t": "`$STRING`", "key$": "execution_type", "index$": 14 }, "headers": { "a": true, "h": "Headers", "n": "headers", "r": false, "sh": "HTTP headers for the request.", "t": "`$ARRAY`", "key$": "headers", "index$": 15 }, "http_method": { "a": true, "h": "Http Method", "n": "http_method", "r": false, "sh": "The HTTP method used by the data connector.", "t": "`$STRING`", "key$": "http_method", "index$": 16 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The unique identifier for the data connector.", "t": "`$STRING`", "key$": "id", "index$": 17 }, "mock_response": { "a": true, "h": "Mock Response", "n": "mock_response", "r": false, "sh": "A sample JSON response from the external API.", "t": "`$OBJECT`", "key$": "mock_response", "index$": 18 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "The name of the data connector.", "t": "`$STRING`", "key$": "name", "index$": 19 }, "object_mappings": { "a": true, "h": "Object Mappings", "n": "object_mappings", "r": false, "sh": "Mappings from connector response objects to Intercom objects.", "t": "`$ARRAY`", "key$": "object_mappings", "index$": 20 }, "response_fields": { "a": true, "h": "Response Fields", "n": "response_fields", "r": false, "sh": "The fields returned in the connector response.", "t": "`$ARRAY`", "key$": "response_fields", "index$": 21 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "sh": "The current state of the data connector.", "t": "`$STRING`", "key$": "state", "index$": 22 }, "token_ids": { "a": true, "h": "Token Ids", "n": "token_ids", "r": false, "sh": "IDs of authentication tokens associated with this connector.", "t": "`$ARRAY`", "key$": "token_ids", "index$": 23 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "The type of object - `data_connector`.", "t": "`$STRING`", "key$": "type", "index$": 24 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "sh": "The time the data connector was last updated.", "t": "`$STRING`", "key$": "updated_at", "index$": 25 }, "updated_by_admin_id": { "a": true, "h": "Updated By Admin Id", "n": "updated_by_admin_id", "r": false, "sh": "The ID of the admin who last updated this connector.", "t": "`$STRING`", "key$": "updated_by_admin_id", "index$": 26 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "sh": "The URL of the external API endpoint.", "t": "`$STRING`", "key$": "url", "index$": 27 }, "validate_missing_attributes": { "a": true, "h": "Validate Missing Attributes", "n": "validate_missing_attributes", "r": false, "sh": "Whether to validate missing attributes before execution.", "t": "`$BOOLEAN`", "key$": "validate_missing_attributes", "index$": 28 } }, "id": { "field": "id", "name": "id" }, "name": "data_connector", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /data_connectors", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/data_connectors", "q": { "exist": ["intercom_version"] }, "r": {}, "s": [{ "lit": "data_connectors" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /data_connectors", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "starting_after", "or": "starting_after", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/data_connectors", "q": { "exist": ["intercom_version", "per_page", "starting_after"] }, "r": {}, "s": [{ "lit": "data_connectors" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /data_connectors/{id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "12345", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "live", "k": "query", "n": "state_version", "or": "state_version", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/data_connectors/{id}", "q": { "exist": ["id", "intercom_version", "state_version"] }, "r": {}, "s": [{ "lit": "data_connectors" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /data_connectors/{id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "2.16", "k": "header", "n": "intercom_version", "or": "intercom_version", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "12345", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/data_connectors/{id}", "q": { "exist": ["id", "intercom_version"] }, "r": {}, "s": [{ "lit": "data_connectors" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "data_connector", "name__orig": "data_connector", "Name": "DataConnector", "name_": "data_connector", "name-": "data-connector", "NAME": "DATA_CONNECTOR", "index$": 39 }, { "active": true, "entity": "data_connector", "key$": "BasicDataConnectorFlow", "kind": "basic", "name": "BasicDataConnectorFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "data_connector_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "data_connector_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "data_connector_ref01", "srcdatavar": "data_connector_ref01_data", "suffix": "_up0", "textfield": "body" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-data_connector_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "data_connector_ref01", "srcdatavar": "data_connector_ref01_data", "suffix": "_dt0" }, "m": { "id": "data_connector01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-data_connector_ref01" } }], "index$": 3 }] }, 'DataConnector', { "POST /data_connectors": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "title": "Create Data Connector Request", "type": "object", "description": "You can create a data connector by providing the required parameters.", "properties": { "name": { "type": "string", "description": "The name of the data connector.", "example": "Get Order Status", "key$": "name" }, "description": { "type": "string", "description": "A description of what this data connector does.", "example": "Looks up order status from an external service", "key$": "description" }, "http_method": { "type": "string", "description": "The HTTP method used when calling the external API.", "enum": ["get", "post", "put", "delete", "patch"], "example": "get", "key$": "http_method" }, "url": { "type": "string", "description": "The URL of the external API endpoint. Supports template variables like `{{order_id}}`.", "example": "https://api.example.com/orders/{{order_id}}/status", "key$": "url" }, "body": { "type": "string", "description": "The request body template. Supports template variables.", "key$": "body" }, "direct_fin_usage": { "type": "boolean", "description": "Whether the connector is used directly by Fin (true) or only in workflows (false). Defaults to false.", "example": false, "key$": "direct_fin_usage" }, "audiences": { "type": "array", "description": "The user types this connector is available for.", "items": { "type": "string", "enum": ["leads", "users", "visitors"] }, "example": ["leads", "visitors"], "key$": "audiences" }, "headers": { "type": "array", "description": "HTTP headers to include in the request.", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The header name.", "example": "Content-Type" }, "value": { "type": "string", "description": "The header value. Supports template variables.", "example": "application/json" } } }, "key$": "headers" }, "data_inputs": { "type": "array", "description": "Input parameters accepted by the connector.", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The parameter name.", "example": "order_id" }, "type": { "type": "string", "description": "The parameter type.", "enum": [], "example": "string" }, "description": { "type": "string", "description": "A description of the parameter.", "example": "The order ID to look up" }, "required": { "type": "boolean", "description": "Whether the parameter is required.", "example": true }, "default_value": { "type": "string", "description": "The default value for the parameter. Defaults to an empty string if omitted." } } }, "key$": "data_inputs" }, "customer_authentication": { "type": "boolean", "description": "Whether the connector requires customer authentication before executing. Defaults to false.", "example": false, "key$": "customer_authentication" }, "bypass_authentication": { "type": "boolean", "description": "Whether authentication is bypassed entirely (public endpoint). Defaults to false.", "example": false, "key$": "bypass_authentication" }, "validate_missing_attributes": { "type": "boolean", "description": "Whether to validate that all required data inputs have values before executing.", "example": false, "key$": "validate_missing_attributes" }, "mock_response": { "type": "object", "description": "A sample JSON response from the external API. Auto-generates `response_fields` and sets `configuration_response_type` to `mock_response_type`.", "example": { "order": { "id": 12345, "status": "shipped" } }, "key$": "mock_response" }, "token_ids": { "type": "array", "description": "IDs of authentication tokens to attach to this data connector.", "items": { "type": "string" }, "example": ["1234", "5678"], "key$": "token_ids" } }, "required": ["name"], "x-ref": "#/components/schemas/create_data_connector_request", "index$": 1 }, "examples": { "data_connector_created": { "summary": "Data connector created", "value": { "name": "Get Order Status", "description": "Looks up order status from an external service", "http_method": "get", "url": "https://api.example.com/orders/{{order_id}}/status", "direct_fin_usage": true, "audiences": ["leads", "visitors"], "headers": [{ "name": "Content-Type", "value": "application/json" }], "data_inputs": [{ "name": "order_id", "type": "string", "description": "The order ID to look up", "required": true, "default_value": "" }], "customer_authentication": true, "bypass_authentication": false, "validate_missing_attributes": true } }, "minimal": { "summary": "Minimal - name only", "value": { "name": "My Connector" } }, "with_mock_response": { "summary": "With mock response", "value": { "name": "Order Lookup", "mock_response": { "order": { "id": 12345, "status": "shipped" } } } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }] }, "GET /data_connectors": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "per_page", "in": "query", "required": false, "description": "The number of results to return per page. Defaults to 20, minimum 1, maximum 50.", "schema": { "type": "integer", "default": 20, "minimum": 1, "maximum": 50 }, "index$": 1 }, { "name": "starting_after", "in": "query", "required": false, "description": "The cursor value from `pages.next.starting_after` in a previous response. Used to paginate through results.", "schema": { "type": "string" }, "index$": 2 }] }, "GET /data_connectors/{id}": { "protocol": "http", "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "id", "in": "path", "description": "The unique identifier of the data connector.", "example": "12345", "required": true, "schema": { "type": "string" }, "index$": 1 }, { "name": "state_version", "in": "query", "required": false, "description": "Which version of the data connector to return. Defaults to live.", "schema": { "type": "string", "enum": ["draft", "live"], "default": "live" }, "index$": 2 }] }, "PATCH /data_connectors/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "title": "Update Data Connector Request", "type": "object", "description": "Update an existing data connector. All fields are optional — only provided fields will be updated. Set `state` to `live` or `draft` to change the connector's state.\n", "properties": { "name": { "type": "string", "description": "The name of the data connector.", "example": "Updated Connector Name", "key$": "name" }, "description": { "type": "string", "description": "A description of what this data connector does.", "example": "Updated description", "key$": "description" }, "state": { "type": "string", "description": "The desired state of the connector.", "enum": ["draft", "live"], "key$": "state" }, "http_method": { "type": "string", "description": "The HTTP method used by the data connector.", "enum": ["get", "post", "put", "delete", "patch"], "example": "post", "key$": "http_method" }, "url": { "type": "string", "description": "The URL of the external API endpoint. Supports template variables like `{{order_id}}`.", "example": "https://api.example.com/orders/{{order_id}}/status", "key$": "url" }, "body": { "type": "string", "description": "The request body template. Supports template variables.", "key$": "body" }, "direct_fin_usage": { "type": "boolean", "description": "Whether this connector is used directly by Fin.", "example": false, "key$": "direct_fin_usage" }, "audiences": { "type": "array", "description": "The audience types this connector targets.", "items": { "type": "string", "enum": ["leads", "users", "visitors"] }, "example": ["leads", "users"], "key$": "audiences" }, "headers": { "type": "array", "description": "HTTP headers to include in the request.", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The header name.", "example": "Content-Type" }, "value": { "type": "string", "description": "The header value. Supports template variables.", "example": "application/json" } } }, "key$": "headers" }, "data_inputs": { "type": "array", "description": "The input parameters accepted by this data connector. Replaces all existing inputs.", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the input parameter.", "example": "order_id" }, "type": { "type": "string", "description": "The data type of the input.", "enum": [], "example": "string" }, "description": { "type": "string", "description": "A description of the input parameter. Required for each input.", "example": "The order ID to look up" }, "required": { "type": "boolean", "description": "Whether this input is required.", "example": true }, "default_value": { "type": "string", "description": "The default value for this input, if any." } } }, "key$": "data_inputs" }, "customer_authentication": { "type": "boolean", "description": "Whether OTP authentication is enabled for this connector.", "example": false, "key$": "customer_authentication" }, "bypass_authentication": { "type": "boolean", "description": "Whether authentication is bypassed for this connector.", "example": false, "key$": "bypass_authentication" }, "validate_missing_attributes": { "type": "boolean", "description": "Whether to validate missing attributes before execution.", "example": true, "key$": "validate_missing_attributes" }, "mock_response": { "type": "object", "description": "A sample JSON response from the external API. Auto-generates `response_fields` and sets `configuration_response_type` to `mock_response_type`.", "example": { "order": { "id": 12345, "status": "shipped" } }, "key$": "mock_response" }, "token_ids": { "type": "array", "description": "IDs of authentication tokens to attach to this data connector. An empty array removes all tokens.", "items": { "type": "string" }, "example": ["1234", "5678"], "key$": "token_ids" } }, "x-ref": "#/components/schemas/update_data_connector_request", "index$": 1 }, "examples": { "Update name and description": { "summary": "Update basic fields", "value": { "name": "Updated Connector Name", "description": "Updated description" } }, "Set state to live": { "summary": "Set a connector to live", "value": { "state": "live" } }, "Set state to draft": { "summary": "Set a connector to draft", "value": { "state": "draft" } }, "with_mock_response": { "summary": "Update with mock response", "value": { "mock_response": { "user": { "name": "Alice", "email": "alice@example.com" } } } } } } } }, "parameters": [{ "name": "Intercom-Version", "in": "header", "schema": { "description": "Intercom API version.</br>By default, it's equal to the version set in the app package.", "type": "string", "example": "2.16", "default": "2.16", "enum": ["1.0", "1.1", "1.2", "1.3", "1.4", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16"], "x-ref": "#/components/schemas/intercom_version" }, "index$": 0 }, { "name": "id", "in": "path", "required": true, "description": "The unique identifier of the data connector.", "example": "12345", "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const data_connector_ref01_ent = client.DataConnector();
        let data_connector_ref01_data = setup.data.new.data_connector['data_connector_ref01'];
        data_connector_ref01_data = (await data_connector_ref01_ent.create(data_connector_ref01_data)).data();
        (0, node_assert_1.default)(null != data_connector_ref01_data.id);
        // LIST
        const data_connector_ref01_match = {};
        const data_connector_ref01_list = (await data_connector_ref01_ent.list(data_connector_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(data_connector_ref01_list, { id: data_connector_ref01_data.id })));
        // UPDATE
        const data_connector_ref01_data_up0 = {};
        data_connector_ref01_data_up0.id = data_connector_ref01_data.id;
        const data_connector_ref01_markdef_up0 = { name: 'body', value: 'Mark01-data_connector_ref01_' + setup.now };
        data_connector_ref01_data_up0[data_connector_ref01_markdef_up0.name] = data_connector_ref01_markdef_up0.value;
        const data_connector_ref01_resdata_up0 = (await data_connector_ref01_ent.update(data_connector_ref01_data_up0)).data();
        (0, node_assert_1.default)(data_connector_ref01_resdata_up0.id === data_connector_ref01_data_up0.id);
        (0, node_assert_1.default)(data_connector_ref01_resdata_up0[data_connector_ref01_markdef_up0.name] === data_connector_ref01_markdef_up0.value);
        // LOAD
        const data_connector_ref01_match_dt0 = {};
        data_connector_ref01_match_dt0.id = data_connector_ref01_data.id;
        const data_connector_ref01_data_dt0 = (await data_connector_ref01_ent.load(data_connector_ref01_match_dt0)).data();
        (0, node_assert_1.default)(data_connector_ref01_data_dt0.id === data_connector_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/data_connector/DataConnectorTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IntercomSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['data_connector01', 'data_connector02', 'data_connector03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INTERCOM_TEST_DATA_CONNECTOR_ENTID': idmap,
        'INTERCOM_TEST_LIVE': 'FALSE',
        'INTERCOM_TEST_EXPLAIN': 'FALSE',
        'INTERCOM_APIKEY': '',
    });
    idmap = env['INTERCOM_TEST_DATA_CONNECTOR_ENTID'];
    const live = 'TRUE' === env.INTERCOM_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INTERCOM_TEST_DATA_CONNECTOR_ENTID'];
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
//# sourceMappingURL=DataConnectorEntity.test.js.map