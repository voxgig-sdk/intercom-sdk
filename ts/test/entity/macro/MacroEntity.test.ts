

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { IntercomSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('MacroEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Macro()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'macro.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"available_on","req":false,"short":"Where the macro is available for use.","type":"`$ARRAY`","index$":0},{"active":true,"name":"body","req":false,"short":"The body of the macro in HTML format with placeholders transformed to XML-like format.","type":"`$STRING`","index$":1},{"active":true,"name":"body_text","req":false,"short":"The plain text version of the macro body with original Intercom placeholder format.","type":"`$STRING`","index$":2},{"active":true,"format":"date-time","name":"created_at","req":false,"short":"The time the macro was created in ISO 8601 format.","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"short":"The unique identifier for the macro.","type":"`$STRING`","index$":4},{"active":true,"name":"name","req":false,"short":"The name of the macro.","type":"`$STRING`","index$":5},{"active":true,"name":"type","req":false,"short":"String representing the object's type.","type":"`$STRING`","index$":6},{"active":true,"format":"date-time","name":"updated_at","req":false,"short":"The time the macro was last updated in ISO 8601 format.","type":"`$STRING`","index$":7},{"active":true,"name":"visible_to","req":false,"short":"Who can view this macro.","type":"`$STRING`","index$":8},{"active":true,"name":"visible_to_team_ids","req":false,"short":"The team IDs that can view this macro when visible_to is set to specific_teams.","type":"`$ARRAY`","index$":9}],"id":{"field":"id","name":"id"},"name":"macro","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"query":[{"active":true,"example":50,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":"WzE3MTk0OTM3NTcuMCwgIjEyMyJd","kind":"query","name":"starting_after","orig":"starting_after","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":1719474966,"kind":"query","name":"updated_since","orig":"updated_since","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /macros","json":"{\"operationId\":\"listMacros\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The number of results per page\",\"example\":50,\"in\":\"query\",\"name\":\"per_page\",\"schema\":{\"default\":50,\"maximum\":150,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Base64-encoded cursor containing [updated_at, id] for pagination\",\"example\":\"WzE3MTk0OTM3NTcuMCwgIjEyMyJd\",\"in\":\"query\",\"name\":\"starting_after\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Unix timestamp to filter macros updated after this time\",\"example\":1719474966,\"in\":\"query\",\"name\":\"updated_since\",\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"basic_list\":{\"summary\":\"Basic list of macros\",\"value\":{\"data\":[{\"available_on\":[\"inbox\",\"messenger\"],\"body\":\"<p>Hi <attribute key=\\\"user.name\\\" default=\\\"there\\\"/>, your order #<attribute key=\\\"order.number\\\"/> is ready for pickup!</p>\",\"body_text\":\"Hi {{user.name|fallback:\\\"there\\\"}}, your order #{{order.number}} is ready for pickup!\",\"created_at\":\"2025-07-17T11:18:08.000Z\",\"id\":\"123\",\"name\":\"Order Status Update\",\"type\":\"macro\",\"updated_at\":\"2025-07-17T15:30:24.000Z\",\"visible_to\":\"everyone\",\"visible_to_team_ids\":[]},{\"available_on\":[\"inbox\"],\"body\":\"<p>Welcome to our support! I'm <attribute key=\\\"teammate.name\\\"/>. How can I help you today?</p>\",\"body_text\":\"Welcome to our support! I'm {{teammate.name}}. How can I help you today?\",\"created_at\":\"2025-07-21T14:44:35.000Z\",\"id\":\"456\",\"name\":\"Welcome Message\",\"type\":\"macro\",\"updated_at\":\"2025-07-21T14:44:35.000Z\",\"visible_to\":\"specific_teams\",\"visible_to_team_ids\":[\"789\",\"101\"]}],\"pages\":{\"next\":{\"starting_after\":\"WzE3MTk0OTM3NTcuMCwgIjEyMyJd\"},\"per_page\":50,\"type\":\"pages\"},\"type\":\"list\"}},\"complex_placeholders\":{\"summary\":\"Macros with various placeholder formats\",\"value\":{\"data\":[{\"available_on\":[\"inbox\"],\"body\":\"<p>Hi <attribute key=\\\"user.first_name\\\" default=\\\"there\\\"/>,</p><p>Your account status: <attribute key=\\\"user.custom_attributes.account_status\\\" default=\\\"pending review\\\"/></p><p>Last activity: <attribute key=\\\"user.last_seen_at\\\"/></p>\",\"body_text\":\"Hi {{user.first_name|fallback:\\\"there\\\"}},\\n\\nYour account status: {{user.custom_attributes.account_status|fallback:\\\"pending review\\\"}}\\n\\nLast activity: {{user.last_seen_at}}\",\"created_at\":\"2025-07-21T09:00:00.000Z\",\"id\":\"567\",\"name\":\"Account Status Review\",\"type\":\"macro\",\"updated_at\":\"2025-07-21T09:00:00.000Z\",\"visible_to\":\"specific_teams\",\"visible_to_team_ids\":[\"security_team\"]}],\"pages\":{\"next\":null,\"per_page\":50,\"type\":\"pages\"},\"type\":\"list\"}},\"empty_result\":{\"summary\":\"Empty macro list (no macros or all filtered out)\",\"value\":{\"data\":[],\"pages\":{\"next\":null,\"per_page\":50,\"type\":\"pages\"},\"type\":\"list\"}},\"filtered_by_timestamp\":{\"summary\":\"Macros filtered by updated_since parameter\",\"value\":{\"data\":[{\"available_on\":[\"inbox\"],\"body\":\"<p>Your order has been shipped via <attribute key=\\\"shipping.carrier\\\" default=\\\"our shipping partner\\\"/>. Tracking number: <attribute key=\\\"shipping.tracking_number\\\"/></p>\",\"body_text\":\"Your order has been shipped via {{shipping.carrier|fallback:\\\"our shipping partner\\\"}}. Tracking number: {{shipping.tracking_number}}\",\"created_at\":\"2025-07-22T05:31:01.000Z\",\"id\":\"234\",\"name\":\"Shipping Update Template\",\"type\":\"macro\",\"updated_at\":\"2025-07-22T18:45:12.000Z\",\"visible_to\":\"everyone\",\"visible_to_team_ids\":[]}],\"pages\":{\"next\":null,\"per_page\":50,\"type\":\"pages\"},\"type\":\"list\"}},\"large_list_preview\":{\"summary\":\"Large list with performance optimization\",\"value\":{\"data\":[{\"available_on\":[\"inbox\"],\"body\":null,\"body_text\":null,\"created_at\":\"2025-07-22T11:08:20.000Z\",\"id\":\"1001\",\"name\":\"Quick Response 1\",\"type\":\"macro\",\"updated_at\":\"2025-07-23T11:08:20.000Z\",\"visible_to\":\"everyone\",\"visible_to_team_ids\":[]}],\"pages\":{\"next\":{\"starting_after\":\"WzE3MTk0OTAxMDAuMCwgIjEwMDIiXQ==\"},\"per_page\":50,\"type\":\"pages\"},\"type\":\"list\"}},\"pagination_with_cursor\":{\"summary\":\"Paginated response using starting_after cursor\",\"value\":{\"data\":[{\"available_on\":[\"inbox\",\"messenger\"],\"body\":\"<p>I understand you'd like a refund for order #<attribute key=\\\"conversation.custom_attributes.order_number\\\"/>. The refund will be processed within 3-5 business days.</p>\",\"body_text\":\"I understand you'd like a refund for order #{{conversation.custom_attributes.order_number}}. The refund will be processed within 3-5 business days.\",\"created_at\":\"2025-07-21T07:15:34.000Z\",\"id\":\"789\",\"name\":\"Refund Process\",\"type\":\"macro\",\"updated_at\":\"2025-07-21T07:15:34.000Z\",\"visible_to\":\"everyone\",\"visible_to_team_ids\":[]},{\"available_on\":[\"inbox\",\"messenger\"],\"body\":\"<p>Thank you for your interest in <attribute key=\\\"product.name\\\" default=\\\"our products\\\"/>. I'd be happy to provide more information!</p>\",\"body_text\":\"Thank you for your interest in {{product.name|fallback:\\\"our products\\\"}}. I'd be happy to provide more information!\",\"created_at\":\"2025-07-20T05:33:20.000Z\",\"id\":\"101\",\"name\":\"Product Inquiry Response\",\"type\":\"macro\",\"updated_at\":\"2025-07-21T10:00:00.000Z\",\"visible_to\":\"everyone\",\"visible_to_team_ids\":[]}],\"pages\":{\"next\":{\"starting_after\":\"WzE3MTk0MDAwMDAuMCwgIjEwMSJd\"},\"per_page\":50,\"type\":\"pages\"},\"type\":\"list\"}}},\"schema\":{\"description\":\"A paginated list of macros (saved replies) in the workspace.\",\"properties\":{\"data\":{\"description\":\"The list of macro objects\",\"items\":{\"description\":\"A macro is a pre-defined response template (saved reply) that can be used to quickly reply to conversations.\",\"nullable\":true,\"properties\":{\"available_on\":{\"description\":\"Where the macro is available for use.\",\"example\":[\"inbox\",\"messenger\"],\"items\":{\"enum\":[\"inbox\",\"messenger\"],\"type\":\"string\"},\"type\":\"array\"},\"body\":{\"description\":\"The body of the macro in HTML format with placeholders transformed to XML-like format.\",\"example\":\"<p>Hi <attribute key=\\\"user.name\\\" default=\\\"there\\\"/>, your order is ready!</p>\",\"type\":\"string\"},\"body_text\":{\"description\":\"The plain text version of the macro body with original Intercom placeholder format.\",\"example\":\"Hi {{user.name|fallback:\\\"there\\\"}}, your order is ready!\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time the macro was created in ISO 8601 format.\",\"example\":\"2025-07-17T11:18:08.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the macro.\",\"example\":\"123\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the macro.\",\"example\":\"Order Status Update\",\"type\":\"string\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `macro`.\",\"enum\":[\"macro\"],\"example\":\"macro\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time the macro was last updated in ISO 8601 format.\",\"example\":\"2025-07-17T15:30:24.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"visible_to\":{\"description\":\"Who can view this macro.\",\"enum\":[\"everyone\",\"specific_teams\"],\"example\":\"everyone\",\"type\":\"string\"},\"visible_to_team_ids\":{\"description\":\"The team IDs that can view this macro when visible_to is set to specific_teams.\",\"example\":[\"456\",\"789\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"title\":\"Macro\",\"type\":\"object\"},\"type\":\"array\"},\"pages\":{\"description\":\"Pagination information\",\"properties\":{\"next\":{\"description\":\"Cursor for the next page\",\"nullable\":true,\"properties\":{\"starting_after\":{\"description\":\"Base64-encoded cursor containing [updated_at, id] for pagination\",\"example\":\"WzE3MTk0OTM3NTcuMCwgIjEyMyJd\",\"type\":\"string\"}},\"type\":\"object\"},\"per_page\":{\"description\":\"Number of results per page\",\"example\":50,\"type\":\"integer\"},\"type\":{\"description\":\"The type of pagination\",\"enum\":[\"pages\"],\"example\":\"pages\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"description\":\"Always list\",\"enum\":[\"list\"],\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Macro List\",\"type\":\"object\"}}},\"description\":\"Successful response\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"Invalid parameter\":{\"value\":{\"errors\":[{\"code\":\"parameter_invalid\",\"message\":\"Invalid updated_since timestamp\"}],\"request_id\":\"bc300b1a-492a-405f-924e-a5881cb72e3a\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"e097e446-9ae6-44a8-8e13-2bf3008b87ef\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"examples\":{\"Missing required scope\":{\"summary\":\"OAuth token lacks read_conversations scope\",\"value\":{\"errors\":[{\"code\":\"forbidden\",\"message\":\"You do not have the required scope (read_conversations) to access this resource\"}],\"request_id\":\"f097e446-9ae6-44a8-8e13-2bf3008b87ef\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Forbidden - missing required OAuth scope\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/macros","segments":[{"lit":"macros"}],"select":{"exist":["intercom_version","per_page","starting_after","updated_since"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"123","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /macros/{id}","json":"{\"operationId\":\"getMacro\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier of the macro\",\"example\":\"123\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"sales_macro\":{\"summary\":\"Sales team macro for product inquiries\",\"value\":{\"available_on\":[\"messenger\"],\"body\":\"<p>Hello <attribute key=\\\"user.name\\\" default=\\\"valued customer\\\"/>,</p><p>Thank you for your interest in <attribute key=\\\"product.name\\\" default=\\\"our products\\\"/>! I'd love to schedule a personalized demo for your team at <attribute key=\\\"company.name\\\" default=\\\"your company\\\"/>.</p><p>Would <attribute key=\\\"suggested_time\\\" default=\\\"next Tuesday at 2 PM EST\\\"/> work for you?</p>\",\"body_text\":\"Hello {{user.name|fallback:\\\"valued customer\\\"}},\\n\\nThank you for your interest in {{product.name|fallback:\\\"our products\\\"}}! I'd love to schedule a personalized demo for your team at {{company.name|fallback:\\\"your company\\\"}}.\\n\\nWould {{suggested_time|fallback:\\\"next Tuesday at 2 PM EST\\\"}} work for you?\",\"created_at\":\"2025-07-22T11:06:40.000Z\",\"id\":\"456\",\"name\":\"Product Demo Request\",\"type\":\"macro\",\"updated_at\":\"2025-07-23T00:00:00.000Z\",\"visible_to\":\"specific_teams\",\"visible_to_team_ids\":[\"sales_team_us\",\"sales_team_eu\"]}},\"simple_greeting\":{\"summary\":\"Simple macro without placeholders\",\"value\":{\"available_on\":[\"inbox\",\"messenger\"],\"body\":\"<p>Thank you for reaching out! We appreciate your message and will get back to you as soon as possible.</p>\",\"body_text\":\"Thank you for reaching out! We appreciate your message and will get back to you as soon as possible.\",\"created_at\":\"2025-07-17T11:18:08.000Z\",\"id\":\"123\",\"name\":\"Thank You Response\",\"type\":\"macro\",\"updated_at\":\"2025-07-17T15:30:24.000Z\",\"visible_to\":\"everyone\",\"visible_to_team_ids\":[]}},\"support_macro\":{\"summary\":\"Customer support macro with placeholders\",\"value\":{\"available_on\":[\"inbox\",\"messenger\"],\"body\":\"<p>Hi <attribute key=\\\"user.first_name\\\" default=\\\"there\\\"/>,</p><p>I understand you'd like a refund for order #<attribute key=\\\"conversation.custom_attributes.order_number\\\"/>. The refund will be processed within 3-5 business days to your <attribute key=\\\"user.custom_attributes.payment_method\\\" default=\\\"original payment method\\\"/>.</p><p>Is there anything else I can help you with?</p>\",\"body_text\":\"Hi {{user.first_name|fallback:\\\"there\\\"}},\\n\\nI understand you'd like a refund for order #{{conversation.custom_attributes.order_number}}. The refund will be processed within 3-5 business days to your {{user.custom_attributes.payment_method|fallback:\\\"original payment method\\\"}}.\\n\\nIs there anything else I can help you with?\",\"created_at\":\"2025-07-21T14:44:35.000Z\",\"id\":\"789\",\"name\":\"Refund Process Explanation\",\"type\":\"macro\",\"updated_at\":\"2025-07-21T14:44:35.000Z\",\"visible_to\":\"specific_teams\",\"visible_to_team_ids\":[\"support_team_1\",\"support_team_2\"]}},\"technical_support\":{\"summary\":\"Technical support macro with nested attributes\",\"value\":{\"available_on\":[\"inbox\"],\"body\":\"<p>Hi <attribute key=\\\"user.name\\\"/>,</p><p>I see you're having trouble with the <attribute key=\\\"conversation.custom_attributes.api_endpoint\\\" default=\\\"API\\\"/> integration. Your API key for app <attribute key=\\\"app.id\\\"/> is configured correctly.</p><p>Error code: <attribute key=\\\"conversation.custom_attributes.error_code\\\" default=\\\"unknown\\\"/></p><p>Let me help you resolve this issue.</p>\",\"body_text\":\"Hi {{user.name}},\\n\\nI see you're having trouble with the {{conversation.custom_attributes.api_endpoint|fallback:\\\"API\\\"}} integration. Your API key for app {{app.id}} is configured correctly.\\n\\nError code: {{conversation.custom_attributes.error_code|fallback:\\\"unknown\\\"}}\\n\\nLet me help you resolve this issue.\",\"created_at\":\"2025-07-18T09:15:00.000Z\",\"id\":\"890\",\"name\":\"API Integration Help\",\"type\":\"macro\",\"updated_at\":\"2025-07-18T09:15:00.000Z\",\"visible_to\":\"everyone\",\"visible_to_team_ids\":[]}}},\"schema\":{\"description\":\"A macro is a pre-defined response template (saved reply) that can be used to quickly reply to conversations.\",\"nullable\":true,\"properties\":{\"available_on\":{\"description\":\"Where the macro is available for use.\",\"example\":[\"inbox\",\"messenger\"],\"items\":{\"enum\":[\"inbox\",\"messenger\"],\"type\":\"string\"},\"type\":\"array\"},\"body\":{\"description\":\"The body of the macro in HTML format with placeholders transformed to XML-like format.\",\"example\":\"<p>Hi <attribute key=\\\"user.name\\\" default=\\\"there\\\"/>, your order is ready!</p>\",\"type\":\"string\"},\"body_text\":{\"description\":\"The plain text version of the macro body with original Intercom placeholder format.\",\"example\":\"Hi {{user.name|fallback:\\\"there\\\"}}, your order is ready!\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time the macro was created in ISO 8601 format.\",\"example\":\"2025-07-17T11:18:08.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the macro.\",\"example\":\"123\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the macro.\",\"example\":\"Order Status Update\",\"type\":\"string\"},\"type\":{\"description\":\"String representing the object's type. Always has the value `macro`.\",\"enum\":[\"macro\"],\"example\":\"macro\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time the macro was last updated in ISO 8601 format.\",\"example\":\"2025-07-17T15:30:24.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"visible_to\":{\"description\":\"Who can view this macro.\",\"enum\":[\"everyone\",\"specific_teams\"],\"example\":\"everyone\",\"type\":\"string\"},\"visible_to_team_ids\":{\"description\":\"The team IDs that can view this macro when visible_to is set to specific_teams.\",\"example\":[\"456\",\"789\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"title\":\"Macro\",\"type\":\"object\"}}},\"description\":\"Macro found\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"e097e446-9ae6-44a8-8e13-2bf3008b87ef\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"examples\":{\"Missing required scope\":{\"summary\":\"OAuth token lacks read_conversations scope\",\"value\":{\"errors\":[{\"code\":\"forbidden\",\"message\":\"You do not have the required scope (read_conversations) to access this resource\"}],\"request_id\":\"f097e446-9ae6-44a8-8e13-2bf3008b87ef\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Forbidden - missing required OAuth scope\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Macro not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Macro not found\"}],\"request_id\":\"bc300b1a-492a-405f-924e-a5881cb72e3a\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Macro not found or not accessible\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/macros/{id}","segments":[{"lit":"macros"},{"var":"id"}],"select":{"exist":["id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"macro","name__orig":"macro","Name":"Macro","name_":"macro","name-":"macro","NAME":"MACRO","index$":59}, {"active":true,"entity":"macro","key$":"BasicMacroFlow","kind":"basic","name":"BasicMacroFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"macro_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"macro_ref01","srcdatavar":"macro_ref01_data","suffix":"_dt0"},"match":{"id":"macro01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-macro_ref01"}}],"index$":1}]}, 'Macro')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let macro_ref01_data = Object.values(setup.data.existing.macro)[0] as any

    // LIST
    const macro_ref01_ent = client.Macro()
    const macro_ref01_match: any = {}

    const macro_ref01_list = (await macro_ref01_ent.list(macro_ref01_match)).map((e: any) => e.data())


    // LOAD
    const macro_ref01_match_dt0: any = {}
    macro_ref01_match_dt0.id = macro_ref01_data.id
    const macro_ref01_data_dt0 = (await macro_ref01_ent.load(macro_ref01_match_dt0)).data()
    assert(macro_ref01_data_dt0.id === macro_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/macro/MacroTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = IntercomSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['macro01','macro02','macro03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_MACRO_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_MACRO_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_MACRO_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new IntercomSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
