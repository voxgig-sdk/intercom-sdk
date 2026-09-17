

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


describe('SubscriptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.Subscription()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INTERCOM_TEST_LIVE
    for (const op of ['create', 'list', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'subscription.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"consent_type","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"Describes the type of consent.","type":"`$STRING`","index$":0},{"active":true,"name":"content_types","req":false,"short":"The message types that this subscription supports - can contain `email` or `sms_message`.","type":"`$ARRAY`","index$":1},{"active":true,"name":"default_translation","req":false,"short":"A translation object contains the localised details of a subscription type.","type":"`$OBJECT`","index$":2},{"active":true,"name":"id","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"The unique identifier representing the subscription type.","type":"`$STRING`","index$":3},{"active":true,"name":"state","req":false,"short":"The state of the subscription type.","type":"`$STRING`","index$":4},{"active":true,"name":"translations","req":false,"short":"An array of translations objects with the localised version of the subscription type in each available locale within your translation settings.","type":"`$ARRAY`","index$":5},{"active":true,"name":"type","req":false,"short":"The type of the object - subscription","type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"subscription","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"63a07ddf05a32042dffac965","kind":"param","name":"contact_id","orig":"contact_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /contacts/{contact_id}/subscriptions","json":"{\"operationId\":\"attachSubscriptionTypeToContact\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the contact which is given by Intercom\",\"example\":\"63a07ddf05a32042dffac965\",\"in\":\"path\",\"name\":\"contact_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"contact_not_found\":{\"summary\":\"Contact not found\",\"value\":{\"consent_type\":\"opt_in\",\"id\":110}},\"resource_not_found\":{\"summary\":\"Resource not found\",\"value\":{\"consent_type\":\"opt_in\",\"id\":\"invalid_id\"}},\"successful\":{\"summary\":\"Successful\",\"value\":{\"consent_type\":\"opt_in\",\"id\":106}}},\"schema\":{\"properties\":{\"consent_type\":{\"description\":\"The consent_type of a subscription, opt_out or opt_in.\",\"example\":\"opt_in\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the subscription which is given by Intercom\",\"example\":\"37846\",\"type\":\"string\"}},\"required\":[\"id\",\"consent_type\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful\":{\"value\":{\"consent_type\":\"opt_in\",\"content_types\":[\"sms_message\"],\"default_translation\":{\"description\":\"Lorem ipsum dolor sit amet\",\"locale\":\"en\",\"name\":\"Newsletters\"},\"id\":\"106\",\"state\":\"live\",\"translations\":[{\"description\":\"Lorem ipsum dolor sit amet\",\"locale\":\"en\",\"name\":\"Newsletters\"}],\"type\":\"subscription\"}}},\"schema\":{\"description\":\"A subscription type lets customers easily opt out of non-essential communications without missing what's important to them.\",\"properties\":{\"consent_type\":{\"description\":\"Describes the type of consent.\",\"enum\":[\"opt_out\",\"opt_in\"],\"example\":\"opt_in\",\"type\":\"string\"},\"content_types\":{\"description\":\"The message types that this subscription supports - can contain `email` or `sms_message`.\",\"items\":{\"enum\":[\"email\",\"sms_message\"],\"example\":\"email\",\"type\":\"string\"},\"type\":\"array\"},\"default_translation\":{\"description\":\"A translation object contains the localised details of a subscription type.\",\"properties\":{\"description\":{\"description\":\"The localised description of the subscription type.\",\"example\":\"Offers, product and feature announcements\",\"type\":\"string\"},\"locale\":{\"description\":\"The two character identifier for the language of the translation object.\",\"example\":\"en\",\"type\":\"string\"},\"name\":{\"description\":\"The localised name of the subscription type.\",\"example\":\"Announcements\",\"type\":\"string\"}},\"title\":\"Translation\",\"type\":\"object\"},\"id\":{\"description\":\"The unique identifier representing the subscription type.\",\"example\":\"123456\",\"type\":\"string\"},\"state\":{\"description\":\"The state of the subscription type.\",\"enum\":[\"live\",\"draft\",\"archived\"],\"example\":\"live\",\"type\":\"string\"},\"translations\":{\"description\":\"An array of translations objects with the localised version of the subscription type in each available locale within your translation settings.\",\"items\":{\"description\":\"A translation object contains the localised details of a subscription type.\",\"properties\":{\"description\":{\"description\":\"The localised description of the subscription type.\",\"example\":\"Offers, product and feature announcements\",\"type\":\"string\"},\"locale\":{\"description\":\"The two character identifier for the language of the translation object.\",\"example\":\"en\",\"type\":\"string\"},\"name\":{\"description\":\"The localised name of the subscription type.\",\"example\":\"Announcements\",\"type\":\"string\"}},\"title\":\"Translation\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of the object - subscription\",\"example\":\"subscription\",\"type\":\"string\"}},\"title\":\"Subscription Types\",\"type\":\"object\"}}},\"description\":\"Successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"f615465d-fd5f-4d68-8498-389130b897e4\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Contact not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"User Not Found\"}],\"request_id\":\"0c2871af-abed-4bce-a5c5-77efbe721711\",\"type\":\"error.list\"}},\"Resource not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Resource Not Found\"}],\"request_id\":\"2774db46-34d9-4925-a24d-8203d4a39f65\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Resource not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/contacts/{contact_id}/subscriptions","segments":[{"lit":"contacts"},{"var":"contact_id"},{"lit":"subscriptions"}],"select":{"exist":["contact_id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"63a07ddf05a32042dffac965","kind":"param","name":"contact_id","orig":"contact_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /contacts/{contact_id}/subscriptions","json":"{\"operationId\":\"listSubscriptionsForAContact\",\"parameters\":[{\"description\":\"The unique identifier for the contact which is given by Intercom\",\"example\":\"63a07ddf05a32042dffac965\",\"in\":\"path\",\"name\":\"contact_id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful\":{\"value\":{\"data\":[{\"consent_type\":\"opt_out\",\"content_types\":[\"email\"],\"default_translation\":{\"description\":\"Lorem ipsum dolor sit amet\",\"locale\":\"en\",\"name\":\"Newsletters\"},\"id\":\"91\",\"state\":\"live\",\"translations\":[{\"description\":\"Lorem ipsum dolor sit amet\",\"locale\":\"en\",\"name\":\"Newsletters\"}],\"type\":\"subscription\"},{\"consent_type\":\"opt_in\",\"content_types\":[\"sms_message\"],\"default_translation\":{\"description\":\"Lorem ipsum dolor sit amet\",\"locale\":\"en\",\"name\":\"Newsletters\"},\"id\":\"93\",\"state\":\"live\",\"translations\":[{\"description\":\"Lorem ipsum dolor sit amet\",\"locale\":\"en\",\"name\":\"Newsletters\"}],\"type\":\"subscription\"}],\"type\":\"list\"}}},\"schema\":{\"description\":\"A list of subscription type objects.\",\"properties\":{\"data\":{\"description\":\"A list of subscription type objects associated with the workspace .\",\"items\":{\"description\":\"A subscription type lets customers easily opt out of non-essential communications without missing what's important to them.\",\"properties\":{\"consent_type\":{\"description\":\"Describes the type of consent.\",\"enum\":[\"opt_out\",\"opt_in\"],\"example\":\"opt_in\",\"type\":\"string\"},\"content_types\":{\"description\":\"The message types that this subscription supports - can contain `email` or `sms_message`.\",\"items\":{\"enum\":[\"email\",\"sms_message\"],\"example\":\"email\",\"type\":\"string\"},\"type\":\"array\"},\"default_translation\":{\"description\":\"A translation object contains the localised details of a subscription type.\",\"properties\":{\"description\":{\"description\":\"The localised description of the subscription type.\",\"example\":\"Offers, product and feature announcements\",\"type\":\"string\"},\"locale\":{\"description\":\"The two character identifier for the language of the translation object.\",\"example\":\"en\",\"type\":\"string\"},\"name\":{\"description\":\"The localised name of the subscription type.\",\"example\":\"Announcements\",\"type\":\"string\"}},\"title\":\"Translation\",\"type\":\"object\"},\"id\":{\"description\":\"The unique identifier representing the subscription type.\",\"example\":\"123456\",\"type\":\"string\"},\"state\":{\"description\":\"The state of the subscription type.\",\"enum\":[\"live\",\"draft\",\"archived\"],\"example\":\"live\",\"type\":\"string\"},\"translations\":{\"description\":\"An array of translations objects with the localised version of the subscription type in each available locale within your translation settings.\",\"items\":{\"description\":\"A translation object contains the localised details of a subscription type.\",\"properties\":{\"description\":{\"description\":\"The localised description of the subscription type.\",\"example\":\"Offers, product and feature announcements\",\"type\":\"string\"},\"locale\":{\"description\":\"The two character identifier for the language of the translation object.\",\"example\":\"en\",\"type\":\"string\"},\"name\":{\"description\":\"The localised name of the subscription type.\",\"example\":\"Announcements\",\"type\":\"string\"}},\"title\":\"Translation\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of the object - subscription\",\"example\":\"subscription\",\"type\":\"string\"}},\"title\":\"Subscription Types\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of the object\",\"enum\":[\"list\"],\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Subscription Types\",\"type\":\"object\"}}},\"description\":\"Successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"7323b97b-9ba4-4c54-946c-38cecea65b3c\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Contact not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"User Not Found\"}],\"request_id\":\"c9b793ad-ff39-436c-80c9-db6f24d0d444\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Contact not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/contacts/{contact_id}/subscriptions","segments":[{"lit":"contacts"},{"var":"contact_id"},{"lit":"subscriptions"}],"select":{"exist":["contact_id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"63a07ddf05a32042dffac965","kind":"param","name":"contact_id","orig":"contact_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"37846","kind":"param","name":"id","orig":"subscription_id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /contacts/{contact_id}/subscriptions/{subscription_id}","json":"{\"operationId\":\"detachSubscriptionTypeToContact\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"The unique identifier for the contact which is given by Intercom\",\"example\":\"63a07ddf05a32042dffac965\",\"in\":\"path\",\"name\":\"contact_id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The unique identifier for the subscription type which is given by Intercom\",\"example\":\"37846\",\"in\":\"path\",\"name\":\"subscription_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"Successful\":{\"value\":{\"consent_type\":\"opt_in\",\"content_types\":[\"sms_message\"],\"default_translation\":{\"description\":\"Lorem ipsum dolor sit amet\",\"locale\":\"en\",\"name\":\"Newsletters\"},\"id\":\"122\",\"state\":\"live\",\"translations\":[{\"description\":\"Lorem ipsum dolor sit amet\",\"locale\":\"en\",\"name\":\"Newsletters\"}],\"type\":\"subscription\"}}},\"schema\":{\"description\":\"A subscription type lets customers easily opt out of non-essential communications without missing what's important to them.\",\"properties\":{\"consent_type\":{\"description\":\"Describes the type of consent.\",\"enum\":[\"opt_out\",\"opt_in\"],\"example\":\"opt_in\",\"type\":\"string\"},\"content_types\":{\"description\":\"The message types that this subscription supports - can contain `email` or `sms_message`.\",\"items\":{\"enum\":[\"email\",\"sms_message\"],\"example\":\"email\",\"type\":\"string\"},\"type\":\"array\"},\"default_translation\":{\"description\":\"A translation object contains the localised details of a subscription type.\",\"properties\":{\"description\":{\"description\":\"The localised description of the subscription type.\",\"example\":\"Offers, product and feature announcements\",\"type\":\"string\"},\"locale\":{\"description\":\"The two character identifier for the language of the translation object.\",\"example\":\"en\",\"type\":\"string\"},\"name\":{\"description\":\"The localised name of the subscription type.\",\"example\":\"Announcements\",\"type\":\"string\"}},\"title\":\"Translation\",\"type\":\"object\"},\"id\":{\"description\":\"The unique identifier representing the subscription type.\",\"example\":\"123456\",\"type\":\"string\"},\"state\":{\"description\":\"The state of the subscription type.\",\"enum\":[\"live\",\"draft\",\"archived\"],\"example\":\"live\",\"type\":\"string\"},\"translations\":{\"description\":\"An array of translations objects with the localised version of the subscription type in each available locale within your translation settings.\",\"items\":{\"description\":\"A translation object contains the localised details of a subscription type.\",\"properties\":{\"description\":{\"description\":\"The localised description of the subscription type.\",\"example\":\"Offers, product and feature announcements\",\"type\":\"string\"},\"locale\":{\"description\":\"The two character identifier for the language of the translation object.\",\"example\":\"en\",\"type\":\"string\"},\"name\":{\"description\":\"The localised name of the subscription type.\",\"example\":\"Announcements\",\"type\":\"string\"}},\"title\":\"Translation\",\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of the object - subscription\",\"example\":\"subscription\",\"type\":\"string\"}},\"title\":\"Subscription Types\",\"type\":\"object\"}}},\"description\":\"Successful\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"c7de741d-dc8f-49b1-8cbe-791668ade76c\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"examples\":{\"Contact not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"User Not Found\"}],\"request_id\":\"82b37940-b43f-46ee-a492-11543a317c97\",\"type\":\"error.list\"}},\"Resource not found\":{\"value\":{\"errors\":[{\"code\":\"not_found\",\"message\":\"Resource Not Found\"}],\"request_id\":\"c18422ca-5454-42af-9e1d-dd92066e6e9d\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/401/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Resource not found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/contacts/{contact_id}/subscriptions/{subscription_id}","rename":{"param":{"subscription_id":"id"}},"segments":[{"lit":"contacts"},{"var":"contact_id"},{"lit":"subscriptions"},{"var":"id"}],"select":{"exist":["contact_id","id","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["contact"]]},"key$":"subscription","name__orig":"subscription","Name":"Subscription","name_":"subscription","name-":"subscription","NAME":"SUBSCRIPTION","index$":74}, {"active":true,"entity":"subscription","key$":"BasicSubscriptionFlow","kind":"basic","name":"BasicSubscriptionFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"subscription_ref01"},"match":{"contact_id":"contact01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"contact_id":"contact01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"subscription_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"subscription_ref01","suffix":"_rm0"},"match":{"contact_id":"contact01","id":"subscription01"},"op":"remove","spec":[],"valid":[],"index$":2},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{"contact_id":"contact01"},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"subscription_ref01"}}],"index$":3}]}, 'Subscription')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const subscription_ref01_ent = client.Subscription()
    let subscription_ref01_data = setup.data.new.subscription['subscription_ref01']
    subscription_ref01_data['contact_id'] = setup.idmap['contact01']

    subscription_ref01_data = (await subscription_ref01_ent.create(subscription_ref01_data)).data()
    assert(null != subscription_ref01_data.id)


    // LIST
    const subscription_ref01_match: any = {}
    subscription_ref01_match['contact_id'] = setup.idmap['contact01']

    const subscription_ref01_list = (await subscription_ref01_ent.list(subscription_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(subscription_ref01_list, { id: subscription_ref01_data.id })))


    // REMOVE
    const subscription_ref01_match_rm0: any = { id: subscription_ref01_data.id }
    await subscription_ref01_ent.remove(subscription_ref01_match_rm0)
  

    // LIST
    const subscription_ref01_match_rt0: any = {}
    subscription_ref01_match_rt0['contact_id'] = setup.idmap['contact01']

    const subscription_ref01_list_rt0 = (await subscription_ref01_ent.list(subscription_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(subscription_ref01_list_rt0, { id: subscription_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/subscription/SubscriptionTestData.json')

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
    ['subscription01','subscription02','subscription03','contact01','contact02','contact03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_SUBSCRIPTION_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_SUBSCRIPTION_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_SUBSCRIPTION_ENTID']
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
  
