
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { IntercomSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('ContactListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INTERCOM_TEST_LIVE=TRUE.
  afterEach(liveDelay('INTERCOM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IntercomSDK.test()
    const ent = testsdk.ContactList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"data","req":false,"short":"The list of contact objects","type":"`$ARRAY`","index$":0},{"active":true,"name":"pages","req":false,"short":"Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.","type":"`$OBJECT`","index$":1},{"active":true,"name":"pagination","req":false,"type":"`$OBJECT`","index$":2},{"active":true,"name":"query","req":true,"type":"`$ANY`","union":{"branches":4,"count":4,"depth":7},"index$":3},{"active":true,"name":"sort","req":false,"short":"An optional object to sort the results by.","type":"`$OBJECT`","index$":4},{"active":true,"name":"total_count","req":false,"short":"A count of the total number of objects.","type":"`$INTEGER`","index$":5},{"active":true,"name":"type","req":false,"short":"Always list","type":"`$STRING`","index$":6}],"name":"contact_list","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"example":"2.16","kind":"header","name":"intercom_version","orig":"intercom_version","reqd":false,"type":"`$STRING`"}],"query":[{"active":true,"example":false,"kind":"query","name":"include_merge_history","orig":"include_merge_history","reqd":false,"type":"`$BOOLEAN`","index$":0}]},"contract":{"id":"POST /contacts/search","json":"{\"operationId\":\"SearchContacts\",\"parameters\":[{\"in\":\"header\",\"name\":\"Intercom-Version\",\"schema\":{\"default\":\"2.16\",\"description\":\"Intercom API version.</br>By default, it's equal to the version set in the app package.\",\"enum\":[\"1.0\",\"1.1\",\"1.2\",\"1.3\",\"1.4\",\"2.0\",\"2.1\",\"2.2\",\"2.3\",\"2.4\",\"2.5\",\"2.6\",\"2.7\",\"2.8\",\"2.9\",\"2.10\",\"2.11\",\"2.12\",\"2.13\",\"2.14\",\"2.15\",\"2.16\"],\"example\":\"2.16\",\"type\":\"string\"}},{\"description\":\"Pass `true` to include a `merge_history` array on each contact in the response. Only returned for contacts with a `user` role.\",\"in\":\"query\",\"name\":\"include_merge_history\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"summary\":\"successful\",\"value\":{\"pagination\":{\"per_page\":5},\"query\":{\"operator\":\"AND\",\"value\":[{\"field\":\"created_at\",\"operator\":\">\",\"value\":\"1306054154\"}]},\"sort\":{\"field\":\"created_at\",\"order\":\"ascending\"}}}},\"schema\":{\"description\":\"Search for contacts using Intercom's Search API.\",\"properties\":{\"pagination\":{\"nullable\":true,\"properties\":{\"per_page\":{\"description\":\"The number of results to fetch per page.\",\"example\":2,\"type\":\"integer\"},\"starting_after\":{\"description\":\"The cursor to use in the next request to get the next page of results.\",\"example\":\"your-cursor-from-response\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Pagination: Starting After\",\"type\":\"object\"},\"query\":{\"oneOf\":[{\"description\":\"Search using Intercoms Search APIs with a single filter.\",\"properties\":{\"field\":{\"description\":\"The accepted field that you want to search on.\",\"example\":\"created_at\",\"type\":\"string\"},\"operator\":{\"description\":\"The accepted operators you can use to define how you want to search for the value. Operator support depends on the field's data type. The breakdown below is for Contacts search; the other search endpoints that share this schema accept a different set per field:\\n- `string` fields: `=`, `!=`, `IN`, `NIN`, `~`, `!~`, `^`, `$`\\n- `tag_id`: `=` and `!=` only. Every other operator returns an error.\\n- `boolean` fields: `=`, `!=`, `IN`, `NIN`\\n- `integer` fields: `=`, `!=`, `IN`, `NIN`, `<`, `>`, `<=`, `>=`\\n- `date` fields (all standard timestamp attributes and date custom attributes): `=`, `<`, `>` only. `!=`, `<=`, `>=`, `IN`, and `NIN` are not supported and return an error.\",\"enum\":[\"=\",\"!=\",\"IN\",\"NIN\",\"<\",\"<=\",\">\",\">=\",\"~\",\"!~\",\"^\",\"$\"],\"example\":\">\",\"type\":\"string\"},\"value\":{\"description\":\"The value that you want to search on.\",\"example\":\"73732934\",\"nullable\":true,\"oneOf\":[{\"type\":\"string\"},{\"type\":\"integer\"},{\"type\":\"boolean\"},{\"items\":{\"oneOf\":[{\"type\":\"string\"},{\"type\":\"integer\"}]},\"type\":\"array\"}]}},\"title\":\"Single filter search request\",\"type\":\"object\"},{\"description\":\"Search using Intercoms Search APIs with more than one filter.\",\"properties\":{\"operator\":{\"description\":\"An operator to allow boolean inspection between multiple fields.\",\"enum\":[\"AND\",\"OR\"],\"example\":\"AND\",\"type\":\"string\"},\"value\":{\"oneOf\":[{\"description\":\"Add mutiple filters.\",\"items\":{\"description\":\"Search using Intercoms Search APIs with more than one filter.\",\"properties\":\"[Circular *paths./contacts/search.post.requestBody.content.application/json.schema.properties.query.oneOf.1.properties]\",\"title\":\"Multiple Filter Search Request\",\"type\":\"object\"},\"title\":\"multiple filter search request\",\"type\":\"array\"},{\"description\":\"Add a single filter field.\",\"items\":{\"description\":\"Search using Intercoms Search APIs with a single filter.\",\"properties\":{\"$ref\":\"#/requestBody/content/application~1json/schema/properties/query/oneOf/0/properties\"},\"title\":\"Single Filter Search Request\",\"type\":\"object\"},\"title\":\"single filter search request\",\"type\":\"array\"}]}},\"title\":\"multiple filter search request\",\"type\":\"object\"}]},\"sort\":{\"description\":\"An optional object to sort the results by.\",\"properties\":{\"field\":{\"description\":\"The field to sort the results on.\",\"example\":\"created_at\",\"type\":\"string\"},\"order\":{\"default\":\"descending\",\"description\":\"The order to sort the results in. Defaults to `descending` when omitted. Values other than `ascending` or `descending` return a `400` error with code `invalid_sort_order`.\",\"enum\":[\"ascending\",\"descending\"],\"example\":\"descending\",\"type\":\"string\"}},\"type\":\"object\"}},\"required\":[\"query\"],\"title\":\"Contact search request\",\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"successful\":{\"value\":{\"data\":[],\"pages\":{\"page\":1,\"per_page\":5,\"total_pages\":0,\"type\":\"pages\"},\"total_count\":0,\"type\":\"list\"}}},\"schema\":{\"description\":\"Contacts are your users in Intercom.\",\"properties\":{\"data\":{\"description\":\"The list of contact objects\",\"items\":{\"description\":\"Contacts represent your leads and users in Intercom.\",\"properties\":{\"android_app_name\":{\"description\":\"The name of the Android app which the contact is using.\",\"example\":\"Intercom\",\"nullable\":true,\"type\":\"string\"},\"android_app_version\":{\"description\":\"The version of the Android app which the contact is using.\",\"example\":\"5.0.0\",\"nullable\":true,\"type\":\"string\"},\"android_device\":{\"description\":\"The Android device which the contact is using.\",\"example\":\"Pixel 3\",\"nullable\":true,\"type\":\"string\"},\"android_last_seen_at\":{\"description\":\"(Unix timestamp in seconds) The time when the contact was last seen on an Android device.\",\"example\":1571672154,\"format\":\"date-time\",\"nullable\":true,\"type\":\"integer\"},\"android_os_version\":{\"description\":\"The version of the Android OS which the contact is using.\",\"example\":\"10\",\"nullable\":true,\"type\":\"string\"},\"android_sdk_version\":{\"description\":\"The version of the Android SDK which the contact is using.\",\"example\":\"28\",\"nullable\":true,\"type\":\"string\"},\"avatar\":{\"nullable\":true,\"properties\":{\"image_url\":{\"description\":\"An image URL containing the avatar of a contact.\",\"example\":\"https://example.org/128Wash.jpg\",\"format\":\"uri\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type of object\",\"example\":\"avatar\",\"type\":\"string\"}},\"type\":\"object\"},\"browser\":{\"description\":\"The name of the browser which the contact is using.\",\"example\":\"Chrome\",\"nullable\":true,\"type\":\"string\"},\"browser_language\":{\"description\":\"The language set by the browser which the contact is using.\",\"example\":\"en-US\",\"nullable\":true,\"type\":\"string\"},\"browser_version\":{\"description\":\"The version of the browser which the contact is using.\",\"example\":\"80.0.3987.132\",\"nullable\":true,\"type\":\"string\"},\"companies\":{\"description\":\"An object with metadata about companies attached to a contact . Up to 10 will be displayed here. Use the url to get more.\",\"nullable\":false,\"properties\":{\"data\":{\"description\":\"An array of company data objects attached to the contact.\",\"items\":{\"description\":\"An object containing data about the companies that a contact is associated with.\",\"properties\":{\"id\":{\"description\":\"The unique identifier for the company which is given by Intercom.\",\"example\":\"5ba682d23d7cf92bef87bfd4\",\"type\":\"string\"},\"type\":{\"description\":\"The type of the object. Always company.\",\"enum\":[\"company\"],\"example\":\"company\",\"type\":\"string\"},\"url\":{\"description\":\"The relative URL of the company.\",\"example\":\"/companies/5ba682d23d7cf92bef87bfd4\",\"format\":\"uri\",\"type\":\"string\"}},\"title\":\"Company Data\",\"type\":\"object\"},\"type\":\"array\"},\"has_more\":{\"description\":\"Whether there's more Addressable Objects to be viewed. If true, use the url to view all\",\"example\":true,\"type\":\"boolean\"},\"total_count\":{\"description\":\"Integer representing the total number of companies attached to this contact\",\"example\":100,\"type\":\"integer\"},\"url\":{\"description\":\"Url to get more company resources for this contact\",\"example\":\"/contacts/5ba682d23d7cf92bef87bfd4/companies\",\"format\":\"uri\",\"type\":\"string\"}},\"title\":\"Contact companies\",\"type\":\"object\"},\"created_at\":{\"description\":\"(Unix timestamp in seconds) The time when the contact was created.\",\"example\":1571672154,\"format\":\"date-time\",\"type\":\"integer\"},\"custom_attributes\":{\"description\":\"The custom attributes which are set for the contact.\",\"type\":\"object\"},\"email\":{\"description\":\"The contact's email.\",\"example\":\"joe@example.com\",\"type\":\"string\"},\"email_domain\":{\"description\":\"The contact's email domain.\",\"example\":\"example.com\",\"type\":\"string\"},\"external_id\":{\"description\":\"The unique identifier for the contact which is provided by the Client.\",\"example\":\"f3b87a2e09d514c6c2e79b9a\",\"nullable\":true,\"type\":\"string\"},\"has_hard_bounced\":{\"description\":\"Whether the contact has had an email sent to them hard bounce.\",\"example\":true,\"type\":\"boolean\"},\"id\":{\"description\":\"The unique identifier for the contact which is given by Intercom.\",\"example\":\"5ba682d23d7cf92bef87bfd4\",\"type\":\"string\"},\"ios_app_name\":{\"description\":\"The name of the iOS app which the contact is using.\",\"example\":\"Intercom\",\"nullable\":true,\"type\":\"string\"},\"ios_app_version\":{\"description\":\"The version of the iOS app which the contact is using.\",\"example\":\"5.0.0\",\"nullable\":true,\"type\":\"string\"},\"ios_device\":{\"description\":\"The iOS device which the contact is using.\",\"example\":\"iPhone 11\",\"nullable\":true,\"type\":\"string\"},\"ios_last_seen_at\":{\"description\":\"(Unix timestamp in seconds) The last time the contact used the iOS app.\",\"example\":1571672154,\"format\":\"date-time\",\"nullable\":true,\"type\":\"integer\"},\"ios_os_version\":{\"description\":\"The version of iOS which the contact is using.\",\"example\":\"13.3.1\",\"nullable\":true,\"type\":\"string\"},\"ios_sdk_version\":{\"description\":\"The version of the iOS SDK which the contact is using.\",\"example\":\"13.3.1\",\"nullable\":true,\"type\":\"string\"},\"language_override\":{\"description\":\"A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change.\",\"example\":\"en\",\"nullable\":true,\"type\":\"string\"},\"last_contacted_at\":{\"description\":\"(Unix timestamp in seconds) The time when the contact was last messaged.\",\"example\":1571672154,\"format\":\"date-time\",\"nullable\":true,\"type\":\"integer\"},\"last_email_clicked_at\":{\"description\":\"(Unix timestamp in seconds) The time when the contact last clicked a link in an email.\",\"example\":1571672154,\"format\":\"date-time\",\"nullable\":true,\"type\":\"integer\"},\"last_email_opened_at\":{\"description\":\"(Unix timestamp in seconds) The time when the contact last opened an email.\",\"example\":1571672154,\"format\":\"date-time\",\"nullable\":true,\"type\":\"integer\"},\"last_replied_at\":{\"description\":\"(Unix timestamp in seconds) The time when the contact last messaged in.\",\"example\":1571672154,\"format\":\"date-time\",\"nullable\":true,\"type\":\"integer\"},\"last_seen_at\":{\"description\":\"(Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually).\",\"example\":1571672154,\"format\":\"date-time\",\"nullable\":true,\"type\":\"integer\"},\"location\":{\"description\":\"An object containing location meta data about a Intercom contact.\",\"nullable\":false,\"properties\":{\"city\":{\"description\":\"The city that the contact is located in\",\"example\":\"Dublin\",\"nullable\":true,\"type\":\"string\"},\"country\":{\"description\":\"The country that the contact is located in\",\"example\":\"Ireland\",\"nullable\":true,\"type\":\"string\"},\"region\":{\"description\":\"The overal region that the contact is located in\",\"example\":\"Dublin\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"Always location\",\"example\":\"location\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Contact Location\",\"type\":\"object\"},\"marked_email_as_spam\":{\"description\":\"Whether the contact has marked an email sent to them as spam.\",\"example\":true,\"type\":\"boolean\"},\"merge_history\":{\"description\":\"A list of contacts that were merged into this contact. Only included in the response when `include_merge_history=true` is passed as a query parameter. Only available for contacts with a `user` role.\",\"items\":{\"description\":\"A record of a contact that was merged into another contact.\",\"properties\":{\"merged_at\":{\"description\":\"(Unix timestamp in seconds) The time when the merge occurred.\",\"example\":1571672154,\"format\":\"date-time\",\"nullable\":true,\"type\":\"integer\"},\"source_contact_id\":{\"description\":\"The Intercom ID of the contact that was merged into this contact.\",\"example\":\"5ba682d23d7cf92bef87bfd3\",\"type\":\"string\"},\"source_contact_role\":{\"description\":\"The role of the contact that was merged in.\",\"enum\":[\"lead\",\"user\"],\"example\":\"lead\",\"type\":\"string\"},\"type\":{\"description\":\"The type of object.\",\"example\":\"merge_history\",\"type\":\"string\"}},\"title\":\"Merge History Item\",\"type\":\"object\"},\"nullable\":true,\"type\":\"array\"},\"name\":{\"description\":\"The contacts name.\",\"example\":\"John Doe\",\"nullable\":true,\"type\":\"string\"},\"notes\":{\"description\":\"An object containing notes meta data about the notes that a contact has. Up to 10 will be displayed here. Use the url to get more.\",\"nullable\":false,\"properties\":{\"data\":{\"description\":\"This object represents the notes attached to a contact.\",\"items\":{\"description\":\"A list used to access other resources from a parent model.\",\"nullable\":false,\"properties\":{\"id\":{\"description\":\"The id of the addressable object\",\"example\":\"123\",\"type\":\"string\"},\"type\":{\"description\":\"The addressable object type\",\"example\":\"note\",\"format\":\"uri\",\"type\":\"string\"},\"url\":{\"description\":\"Url to get more company resources for this contact\",\"example\":\"/contacts/5ba682d23d7cf92bef87bfd4/notes\",\"format\":\"uri\",\"type\":\"string\"}},\"title\":\"Addressable List\",\"type\":\"object\"},\"type\":\"array\"},\"has_more\":{\"description\":\"Whether there's more Addressable Objects to be viewed. If true, use the url to view all\",\"example\":true,\"type\":\"boolean\"},\"total_count\":{\"description\":\"Int representing the total number of companyies attached to this contact\",\"example\":100,\"type\":\"integer\"},\"url\":{\"description\":\"Url to get more company resources for this contact\",\"example\":\"/contacts/5ba682d23d7cf92bef87bfd4/notes\",\"format\":\"uri\",\"type\":\"string\"}},\"title\":\"Contact notes\",\"type\":\"object\"},\"os\":{\"description\":\"The operating system which the contact is using.\",\"example\":\"Mac OS X\",\"nullable\":true,\"type\":\"string\"},\"owner_id\":{\"description\":\"The id of an admin that has been assigned account ownership of the contact.\",\"example\":\"321\",\"nullable\":true,\"type\":\"string\"},\"phone\":{\"description\":\"The contacts phone.\",\"example\":\"+1123456789\",\"nullable\":true,\"type\":\"string\"},\"role\":{\"description\":\"The role of the contact.\",\"example\":\"user\",\"type\":\"string\"},\"signed_up_at\":{\"description\":\"(Unix timestamp in seconds) The time specified for when a contact signed up.\",\"example\":1571672154,\"format\":\"date-time\",\"nullable\":true,\"type\":\"integer\"},\"social_profiles\":{\"description\":\"An object containing social profiles that a contact has.\",\"nullable\":false,\"properties\":{\"data\":{\"description\":\"A list of social profiles objects associated with the contact.\",\"items\":{\"description\":\"A Social Profile allows you to label your contacts, companies, and conversations and list them using that Social Profile.\",\"properties\":{\"name\":{\"description\":\"The name of the Social media profile\",\"example\":\"Facebook\",\"type\":\"string\"},\"type\":{\"description\":\"value is \\\"social_profile\\\"\",\"example\":\"social_profile\",\"type\":\"string\"},\"url\":{\"description\":\"The name of the Social media profile\",\"example\":\"http://twitter.com/th1sland\",\"format\":\"uri\",\"type\":\"string\"}},\"title\":\"Social Profile\",\"type\":\"object\"},\"type\":\"array\"}},\"title\":\"Social Profile\",\"type\":\"object\"},\"tags\":{\"description\":\"An object containing tags meta data about the tags that a contact has. Up to 10 will be displayed here. Use the url to get more.\",\"nullable\":true,\"properties\":{\"data\":{\"description\":\"This object represents the tags attached to a contact.\",\"items\":{\"description\":\"A list used to access other resources from a parent model.\",\"nullable\":false,\"properties\":{\"id\":{\"description\":\"The id of the addressable object\",\"example\":\"123\",\"type\":\"string\"},\"type\":{\"description\":\"The addressable object type\",\"example\":\"note\",\"format\":\"uri\",\"type\":\"string\"},\"url\":{\"description\":\"Url to get more company resources for this contact\",\"example\":\"/contacts/5ba682d23d7cf92bef87bfd4/notes\",\"format\":\"uri\",\"type\":\"string\"}},\"title\":\"Addressable List\",\"type\":\"object\"},\"type\":\"array\"},\"has_more\":{\"description\":\"Whether there's more Addressable Objects to be viewed. If true, use the url to view all\",\"example\":true,\"type\":\"boolean\"},\"total_count\":{\"description\":\"Int representing the total number of tags attached to this contact\",\"example\":100,\"type\":\"integer\"},\"url\":{\"description\":\"url to get more tag resources for this contact\",\"example\":\"/contacts/5ba682d23d7cf92bef87bfd4/tags\",\"format\":\"uri\",\"type\":\"string\"}},\"title\":\"Contact Tags\",\"type\":\"object\"},\"type\":{\"description\":\"The type of object.\",\"example\":\"contact\",\"type\":\"string\"},\"unsubscribed_from_emails\":{\"description\":\"Whether the contact is unsubscribed from emails.\",\"example\":true,\"type\":\"boolean\"},\"updated_at\":{\"description\":\"(Unix timestamp in seconds) The time when the contact was last updated.\",\"example\":1571672154,\"format\":\"date-time\",\"type\":\"integer\"},\"workspace_id\":{\"description\":\"The id of the workspace which the contact belongs to.\",\"example\":\"ecahpwf5\",\"type\":\"string\"}},\"title\":\"Contact\",\"type\":\"object\"},\"type\":\"array\"},\"pages\":{\"description\":\"Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.\\nA \\\"cursor\\\" or pointer is used to keep track of the current position in the result set, allowing the API to return the data in small chunks or \\\"pages\\\" as needed.\\n\",\"nullable\":true,\"properties\":{\"next\":{\"nullable\":true,\"properties\":{\"per_page\":{\"description\":\"The number of results to fetch per page.\",\"example\":2,\"type\":\"integer\"},\"starting_after\":{\"description\":\"The cursor to use in the next request to get the next page of results.\",\"example\":\"your-cursor-from-response\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Pagination: Starting After\",\"type\":\"object\"},\"page\":{\"description\":\"The current page\",\"example\":1,\"type\":\"integer\"},\"per_page\":{\"description\":\"Number of results per page\",\"example\":2,\"type\":\"integer\"},\"total_pages\":{\"description\":\"Total number of pages\",\"example\":13,\"type\":\"integer\"},\"type\":{\"description\":\"the type of object `pages`.\",\"enum\":[\"pages\"],\"example\":\"pages\",\"type\":\"string\"}},\"title\":\"Cursor based pages\",\"type\":\"object\"},\"total_count\":{\"description\":\"A count of the total number of objects.\",\"example\":100,\"type\":\"integer\"},\"type\":{\"description\":\"Always list\",\"enum\":[\"list\"],\"example\":\"list\",\"type\":\"string\"}},\"title\":\"Contact List\",\"type\":\"object\"}}},\"description\":\"successful\"},\"400\":{\"content\":{\"application/json\":{\"examples\":{\"Invalid sort order\":{\"value\":{\"errors\":[{\"code\":\"invalid_sort_order\",\"message\":\"Invalid sort order 'desc'. Must be one of: ascending, descending\"}],\"request_id\":\"8d6c1f0a-3b2e-4a17-9c5d-1f0e2a3b4c5d\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"errors\":{\"description\":\"An array of one or more error objects\",\"items\":{\"properties\":{\"code\":{\"description\":\"A string indicating the kind of error, used to further qualify the HTTP response code\",\"example\":\"unauthorized\",\"type\":\"string\"},\"field\":{\"description\":\"Optional. Used to identify a particular field or query parameter that was in error.\",\"example\":\"email\",\"nullable\":true,\"type\":\"string\"},\"message\":{\"description\":\"Optional. Human readable description of the error.\",\"example\":\"Access Token Invalid\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"code\"]},\"type\":\"array\"},\"request_id\":{\"description\":\"\",\"example\":\"f93ecfa8-d08a-4325-8694-89aeb89c8f85\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The type is error.list\",\"example\":\"error.list\",\"type\":\"string\"}},\"required\":[\"type\",\"errors\"],\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"examples\":{\"Unauthorized\":{\"value\":{\"errors\":[{\"code\":\"unauthorized\",\"message\":\"Access Token Invalid\"}],\"request_id\":\"f0dc95f1-9e46-4e8d-8150-89365c2c5195\",\"type\":\"error.list\"}}},\"schema\":{\"description\":\"The API will return an Error List for a failed request, which will contain one or more Error objects.\",\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"required\":{\"$ref\":\"#/responses/400/content/application~1json/schema/required\"},\"title\":\"Error\",\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/contacts/search","segments":[{"lit":"contacts"},{"lit":"search"}],"select":{"exist":["include_merge_history","intercom_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"contact_list","name__orig":"contact_list","Name":"ContactList","name_":"contact_list","name-":"contact-list","NAME":"CONTACT_LIST","index$":24}, {"active":true,"entity":"contact_list","key$":"BasicContactListFlow","kind":"basic","name":"BasicContactListFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"contact_list_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'ContactList')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const contact_list_ref01_ent = client.ContactList()
    let contact_list_ref01_data = setup.data.new.contact_list['contact_list_ref01']

    contact_list_ref01_data = (await contact_list_ref01_ent.create(contact_list_ref01_data)).data()
    assert(null != contact_list_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/contact_list/ContactListTestData.json')

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
    ['contact_list01','contact_list02','contact_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INTERCOM_TEST_CONTACT_LIST_ENTID': idmap,
    'INTERCOM_TEST_LIVE': 'FALSE',
    'INTERCOM_TEST_EXPLAIN': 'FALSE',
    'INTERCOM_APIKEY': '',
  })

  idmap = env['INTERCOM_TEST_CONTACT_LIST_ENTID']

  const live = 'TRUE' === env.INTERCOM_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INTERCOM_TEST_CONTACT_LIST_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  
