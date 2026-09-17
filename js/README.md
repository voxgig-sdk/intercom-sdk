# Intercom JavaScript SDK



The JavaScript SDK for the Intercom API — an entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.ActivityLog()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```js
npm install intercom
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.


### Create a Client

```js
const { IntercomSDK } = require('@voxgig-sdk/intercom-js')

const client = new IntercomSDK({
  apikey: process.env.INTERCOM_APIKEY,
})
```

### List ActivityLog Records

```js
const activity_logs = await client.ActivityLog().list({ created_at_after: "example" })
for (const activity_log of activity_logs) {
  console.log(activity_log)
}
```

### Direct API Access

Use `client.direct()` to call any API endpoint directly:

```js
const result = await client.direct({
  path: '/custom/endpoint/{id}',
  method: 'GET',
  params: { id: 'abc123' },
})

if (result.ok) {
  console.log(result.data)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const contactsegments = await client.ContactSegment().list()
  console.log(contactsegments)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```js
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```js
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```js
const client = IntercomSDK.test()

const contactsegment = await client.ContactSegment().list()
// contactsegment is the entity, populated with mock response data
// — call contactsegment.data() for the record itself
console.log(contactsegment)
```

You can also use the instance method:

```js
const client = new IntercomSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```js
const entity = client.ContactSegment()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```js
const logger = {
  hooks: {
    PreRequest: (ctx) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new IntercomSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
INTERCOM_TEST_LIVE=TRUE
INTERCOM_APIKEY=<your-key>
```

Then run:

```bash
cd js && npm test
```


## Reference

### IntercomSDK

#### Constructor

```js
new IntercomSDK(options?)
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `ActivityLog(data?)` | `ActivityLogEntity` | Create an ActivityLog entity instance. |
| `ActivityLogEventType(data?)` | `ActivityLogEventTypeEntity` | Create an ActivityLogEventType entity instance. |
| `ActivityLogList(data?)` | `ActivityLogListEntity` | Create an ActivityLogList entity instance. |
| `Admin(data?)` | `AdminEntity` | Create an Admin entity instance. |
| `AdminWithApp(data?)` | `AdminWithAppEntity` | Create an AdminWithApp entity instance. |
| `AiCall(data?)` | `AiCallEntity` | Create an AiCall entity instance. |
| `AiContent(data?)` | `AiContentEntity` | Create an AiContent entity instance. |
| `Article(data?)` | `ArticleEntity` | Create an Article entity instance. |
| `ArticleSearch(data?)` | `ArticleSearchEntity` | Create an ArticleSearch entity instance. |
| `ArticleVersion(data?)` | `ArticleVersionEntity` | Create an ArticleVersion entity instance. |
| `ArticleVersionList(data?)` | `ArticleVersionListEntity` | Create an ArticleVersionList entity instance. |
| `Audience(data?)` | `AudienceEntity` | Create an Audience entity instance. |
| `AwayStatusReason(data?)` | `AwayStatusReasonEntity` | Create an AwayStatusReason entity instance. |
| `Banner(data?)` | `BannerEntity` | Create a Banner entity instance. |
| `BannerDismiss(data?)` | `BannerDismissEntity` | Create a BannerDismiss entity instance. |
| `Brand(data?)` | `BrandEntity` | Create a Brand entity instance. |
| `Call(data?)` | `CallEntity` | Create a Call entity instance. |
| `Company(data?)` | `CompanyEntity` | Create a Company entity instance. |
| `CompanyAttachedContact(data?)` | `CompanyAttachedContactEntity` | Create a CompanyAttachedContact entity instance. |
| `CompanyAttachedSegment(data?)` | `CompanyAttachedSegmentEntity` | Create a CompanyAttachedSegment entity instance. |
| `CompanyList(data?)` | `CompanyListEntity` | Create a CompanyList entity instance. |
| `CompanyScroll(data?)` | `CompanyScrollEntity` | Create a CompanyScroll entity instance. |
| `Contact(data?)` | `ContactEntity` | Create a Contact entity instance. |
| `ContactAttachedCompany(data?)` | `ContactAttachedCompanyEntity` | Create a ContactAttachedCompany entity instance. |
| `ContactList(data?)` | `ContactListEntity` | Create a ContactList entity instance. |
| `ContactSegment(data?)` | `ContactSegmentEntity` | Create a ContactSegment entity instance. |
| `Content(data?)` | `ContentEntity` | Create a Content entity instance. |
| `ContentImportSource(data?)` | `ContentImportSourceEntity` | Create a ContentImportSource entity instance. |
| `ContentSearch(data?)` | `ContentSearchEntity` | Create a ContentSearch entity instance. |
| `ContentSnippet(data?)` | `ContentSnippetEntity` | Create a ContentSnippet entity instance. |
| `Conversation(data?)` | `ConversationEntity` | Create a Conversation entity instance. |
| `ConversationAttribute(data?)` | `ConversationAttributeEntity` | Create a ConversationAttribute entity instance. |
| `ConversationAttributeList(data?)` | `ConversationAttributeListEntity` | Create a ConversationAttributeList entity instance. |
| `ConversationList(data?)` | `ConversationListEntity` | Create a ConversationList entity instance. |
| `ConversationParticipant(data?)` | `ConversationParticipantEntity` | Create a ConversationParticipant entity instance. |
| `CustomObjectInstance(data?)` | `CustomObjectInstanceEntity` | Create a CustomObjectInstance entity instance. |
| `Data(data?)` | `DataEntity` | Create a Data entity instance. |
| `DataAttribute(data?)` | `DataAttributeEntity` | Create a DataAttribute entity instance. |
| `DataConnector(data?)` | `DataConnectorEntity` | Create a DataConnector entity instance. |
| `DataConnectorExecutionResult(data?)` | `DataConnectorExecutionResultEntity` | Create a DataConnectorExecutionResult entity instance. |
| `DataConnectorExecutionResultList(data?)` | `DataConnectorExecutionResultListEntity` | Create a DataConnectorExecutionResultList entity instance. |
| `DataEvent(data?)` | `DataEventEntity` | Create a DataEvent entity instance. |
| `DataEventSummary(data?)` | `DataEventSummaryEntity` | Create a DataEventSummary entity instance. |
| `DataExport(data?)` | `DataExportEntity` | Create a DataExport entity instance. |
| `Deleted(data?)` | `DeletedEntity` | Create a Deleted entity instance. |
| `DeletedArticleObject(data?)` | `DeletedArticleObjectEntity` | Create a DeletedArticleObject entity instance. |
| `DeletedCompanyObject(data?)` | `DeletedCompanyObjectEntity` | Create a DeletedCompanyObject entity instance. |
| `DeletedDataConnectorObject(data?)` | `DeletedDataConnectorObjectEntity` | Create a DeletedDataConnectorObject entity instance. |
| `DeletedInternalArticleObject(data?)` | `DeletedInternalArticleObjectEntity` | Create a DeletedInternalArticleObject entity instance. |
| `DeletedObject(data?)` | `DeletedObjectEntity` | Create a DeletedObject entity instance. |
| `Email(data?)` | `EmailEntity` | Create an Email entity instance. |
| `ExternalPage(data?)` | `ExternalPageEntity` | Create an ExternalPage entity instance. |
| `FinAgent(data?)` | `FinAgentEntity` | Create a FinAgent entity instance. |
| `HandlingEvent(data?)` | `HandlingEventEntity` | Create a HandlingEvent entity instance. |
| `HelpCenter(data?)` | `HelpCenterEntity` | Create a HelpCenter entity instance. |
| `InternalArticle(data?)` | `InternalArticleEntity` | Create an InternalArticle entity instance. |
| `InternalArticleSearch(data?)` | `InternalArticleSearchEntity` | Create an InternalArticleSearch entity instance. |
| `IpAllowlist(data?)` | `IpAllowlistEntity` | Create an IpAllowlist entity instance. |
| `Job(data?)` | `JobEntity` | Create a Job entity instance. |
| `Macro(data?)` | `MacroEntity` | Create a Macro entity instance. |
| `MergeHistory(data?)` | `MergeHistoryEntity` | Create a MergeHistory entity instance. |
| `Message(data?)` | `MessageEntity` | Create a Message entity instance. |
| `NewsItem(data?)` | `NewsItemEntity` | Create a NewsItem entity instance. |
| `Newsfeed(data?)` | `NewsfeedEntity` | Create a Newsfeed entity instance. |
| `Note(data?)` | `NoteEntity` | Create a Note entity instance. |
| `OfficeHour(data?)` | `OfficeHourEntity` | Create an OfficeHour entity instance. |
| `OfficeHoursException(data?)` | `OfficeHoursExceptionEntity` | Create an OfficeHoursException entity instance. |
| `OfficeHoursSchedule(data?)` | `OfficeHoursScheduleEntity` | Create an OfficeHoursSchedule entity instance. |
| `Paginated(data?)` | `PaginatedEntity` | Create a Paginated entity instance. |
| `PhoneSwitch(data?)` | `PhoneSwitchEntity` | Create a PhoneSwitch entity instance. |
| `ReportingData(data?)` | `ReportingDataEntity` | Create a ReportingData entity instance. |
| `ReportingDataExport(data?)` | `ReportingDataExportEntity` | Create a ReportingDataExport entity instance. |
| `Segment(data?)` | `SegmentEntity` | Create a Segment entity instance. |
| `SideConversation(data?)` | `SideConversationEntity` | Create a SideConversation entity instance. |
| `Subscription(data?)` | `SubscriptionEntity` | Create a Subscription entity instance. |
| `SubscriptionType(data?)` | `SubscriptionTypeEntity` | Create a SubscriptionType entity instance. |
| `Tag(data?)` | `TagEntity` | Create a Tag entity instance. |
| `Team(data?)` | `TeamEntity` | Create a Team entity instance. |
| `TeamMetricList(data?)` | `TeamMetricListEntity` | Create a TeamMetricList entity instance. |
| `Ticket(data?)` | `TicketEntity` | Create a Ticket entity instance. |
| `TicketList(data?)` | `TicketListEntity` | Create a TicketList entity instance. |
| `TicketReply(data?)` | `TicketReplyEntity` | Create a TicketReply entity instance. |
| `TicketState(data?)` | `TicketStateEntity` | Create a TicketState entity instance. |
| `TicketType(data?)` | `TicketTypeEntity` | Create a TicketType entity instance. |
| `TicketTypeAttribute(data?)` | `TicketTypeAttributeEntity` | Create a TicketTypeAttribute entity instance. |
| `Visitor(data?)` | `VisitorEntity` | Create a Visitor entity instance. |
| `WhatsappMessageStatus(data?)` | `WhatsappMessageStatusEntity` | Create a WhatsappMessageStatus entity instance. |
| `WhatsappMessageStatusList(data?)` | `WhatsappMessageStatusListEntity` | Create a WhatsappMessageStatusList entity instance. |
| `Workflow(data?)` | `WorkflowEntity` | Create a Workflow entity instance. |
| `tester(testopts?, sdkopts?)` | `IntercomSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `IntercomSDK.test(testopts?, sdkopts?)` | `IntercomSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): IntercomSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `undefined`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```js
{
  ok: true,
  status: 200,
  headers: {},
  data: {}
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```js
{
  url: 'string',
  method: 'string',
  headers: {},
  body: undefined
}
```

### Entities

#### ActivityLog

| Field | Description |
| --- | --- |
| `activity_description` | A sentence or two describing the activity. |
| `activity_type` |  |
| `created_at` | The time the activity was created. |
| `id` | The id representing the activity. |
| `metadata` | Additional data provided about Admin activity. |
| `performed_by` | Details about the Admin involved in the activity. |

Operations: list.

API path: `/admins/activity_logs`

#### ActivityLogEventType

| Field | Description |
| --- | --- |
| `event_types` | An array of activity log event type strings. |
| `type` | String representing the object's type. |

Operations: list.

API path: `/admins/activity_log_event_types`

#### ActivityLogList

| Field | Description |
| --- | --- |
| `activity_logs` | An array of activity logs |
| `created_at_after` | The start date that you request data for. |
| `created_at_before` | The end date that you request data for. |
| `event_types` | An optional list of event types to filter activity logs by. |
| `page` | The page number of results to return. |
| `pages` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `per_page` | The number of results per page. |
| `type` | String representing the object's type. |

Operations: create.

API path: `/admins/activity_logs/search`

#### Admin

| Field | Description |
| --- | --- |
| `avatar` | Image for the associated team or teammate |
| `away_mode_enabled` | Identifies if this admin is currently set in away mode. |
| `away_mode_reassign` | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `away_status_reason_id` | The unique identifier of the away status reason |
| `email` | The email of the admin. |
| `has_inbox_seat` | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `id` | The id representing the admin. |
| `job_title` | The job title of the admin. |
| `name` | The name of the admin. |
| `role` | The role assigned to this admin. |
| `team_ids` | This object represents the avatar associated with the admin. |
| `team_priority_level` | Admin priority levels for teams |
| `type` | String representing the object's type. |

Operations: list, load, update.

API path: `/admins`

#### AdminWithApp

| Field | Description |
| --- | --- |
| `app` | App that the admin belongs to. |
| `avatar` | This object represents the avatar associated with the admin. |
| `away_mode_enabled` | Identifies if this admin is currently set in away mode. |
| `away_mode_reassign` | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `email` | The email of the admin. |
| `email_verified` | Identifies if this admin's email is verified. |
| `has_inbox_seat` | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `id` | The id representing the admin. |
| `job_title` | The job title of the admin. |
| `name` | The name of the admin. |
| `team_ids` | This is a list of ids of the teams that this admin is part of. |
| `type` | String representing the object's type. |

Operations: list.

API path: `/me`

#### AiCall

| Field | Description |
| --- | --- |
| `app_id` | The workspace identifier |
| `call_id` | External call identifier from the call provider |
| `call_summary` | Summary of the call conversation, truncated to 256 characters. |
| `call_transcript` | Array of transcript entries for the call |
| `data` | Additional metadata about the call |
| `external_call_id` | The external call identifier from the call provider |
| `id` | The unique identifier for the external reference |
| `intent` | Array of intent classifications for the call |
| `intercom_call_id` | The Intercom call identifier, if the call has been matched |
| `intercom_conversation_id` | The Intercom conversation identifier, if a conversation has been created |
| `phone_number` | Phone number in E.164 format for the call |
| `source` | Source of the call. |
| `status` | Status of the call. |
| `user_phone_number` | Phone number in E.164 format for the call |

Operations: create, load.

API path: `/fin_voice/register`

#### AiContent

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/ai/content_import_sources/{source_id}`

#### Article

| Field | Description |
| --- | --- |
| `ai_chatbot_availability` | Whether the article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | Whether the article should be available for AI Copilot. |
| `ai_sales_agent_availability` | Whether the article should be available for AI Sales Agent. |
| `audience_ids` | The list of audience IDs to assign to this article for Fin AI Agent targeting. |
| `author_id` | The id of the author of the article. |
| `body` | The content of the article in HTML. |
| `body_markdown` | The content of the article in markdown. |
| `conversions` | The number of conversations started from the article. |
| `created_at` | The time when the article was created. |
| `created_by_id` | The ID of the teammate who created the article. |
| `default_locale` | The default locale of the help center. |
| `description` | The description of the article. |
| `draft_updated_at` | The time, in seconds, when the staged draft was last edited, or `null` when there is no staged draft. |
| `exclude_from_article_suggestions` | Whether the article is excluded from Fin AI Agent article suggestions. |
| `fin_involvements` | The number of conversations in which Fin AI Agent used this article, summed across all of the article's locales. |
| `fin_resolution_rate` | The percentage of Fin AI Agent involvements that resulted in a resolution (fin_resolutions / fin_involvements * 100). |
| `fin_resolutions` | The number of conversations Fin AI Agent resolved using this article, summed across all of the article's locales. |
| `happy_reaction_percentage` | The percentage of happy reactions the article has received against other types of reaction. |
| `has_unpublished_changes` | Whether the published article has unpublished changes staged as a draft on top of its live content. |
| `help_center_audience` | The audience that can view this article in the Help Center. |
| `id` | The unique identifier for the article which is given by Intercom. |
| `neutral_reaction_percentage` | The percentage of neutral reactions the article has received against other types of reaction. |
| `parent_id` | The id of the article's parent collection or section. |
| `parent_ids` | The ids of the article's parent collections or sections. |
| `parent_type` | The type of parent, which can either be a `collection` or `section`. |
| `reactions` | The number of total reactions the article has received. |
| `sad_reaction_percentage` | The percentage of sad reactions the article has received against |
| `scheduled_publish_at` | ISO 8601 timestamp at which to schedule a future publish of the article. |
| `scheduled_unpublish_at` | ISO 8601 timestamp at which to schedule a future unpublish of the article. |
| `state` | Whether the article will be `published` or will be a `draft`. |
| `tags` | A list of tags objects associated with a conversation |
| `title` | The title of the article.For multilingual articles, this will be the title of the default language's content. |
| `translated_content` | The Translated Content of an Article. |
| `type` | The type of object - `article_statistics`. |
| `updated_at` | The time when the article was last updated. |
| `updated_by_id` | The ID of the teammate who last updated the article. |
| `url` | The URL of the article. |
| `views` | The number of total views the article has received. |
| `workspace_id` | The id of the workspace which the article belongs to. |

Operations: create, list, load, update.

API path: `/articles/{id}/draft/publish`

#### ArticleSearch

| Field | Description |
| --- | --- |
| `data` | An object containing the results of the search. |
| `pages` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | The total number of Articles matching the search query |
| `type` | The type of the object - `list`. |

Operations: load.

API path: `/articles/search`

#### ArticleVersion

| Field | Description |
| --- | --- |
| `article_id` | The unique identifier of the article this version belongs to. |
| `author_id` | The id of the teammate listed as the article's author at this version. |
| `body` | The HTML body of the article at this version. |
| `body_markdown` | The Markdown body of the article at this version. |
| `created_at` | The time the version was created, as a UTC Unix timestamp. |
| `created_by_id` | The id of the teammate who created this version. |
| `created_via` | How this version was created (for example `web`, `api`). |
| `description` | The description of the article at this version. |
| `from_version_id` | The id of the version this version was created from, or `null` if this is the first version. |
| `id` | The unique identifier for the version. |
| `state` | Whether this version is the currently published version of the article (`published`) or an earlier non-live version (`draft`). |
| `title` | The title of the article at this version. |
| `type` | String representing the object's type. |
| `updated_at` | The time the version was last updated, as a UTC Unix timestamp. |

Operations: load.

API path: `/articles/{article_id}/versions/{id}`

#### ArticleVersionList

| Field | Description |
| --- | --- |
| `id` |  |

Operations: list.

API path: `/articles/{article_id}/versions`

#### Audience

| Field | Description |
| --- | --- |
| `created_at` | The time the audience was created as a Unix timestamp. |
| `id` | The unique identifier representing the audience. |
| `name` | The name of the audience. |
| `predicates` | The predicates that define which contacts belong to the audience. |
| `role_predicates` | Role-based predicates that further filter audience membership by contact role. |
| `type` | The type of object. |
| `updated_at` | The time the audience was last updated as a Unix timestamp. |

Operations: create, list, load, remove, update.

API path: `/audiences`

#### AwayStatusReason

| Field | Description |
| --- | --- |
| `created_at` | The Unix timestamp when the status reason was created |
| `deleted` | Whether the status reason has been soft deleted |
| `emoji` | The emoji associated with the status reason |
| `id` | The unique identifier for the away status reason |
| `label` | The display text for the away status reason |
| `order` | The display order of the status reason |
| `type` |  |
| `updated_at` | The Unix timestamp when the status reason was last updated |

Operations: list.

API path: `/away_status_reasons`

#### Banner

| Field | Description |
| --- | --- |
| `action` | The action a contact can take on the banner, or `null` when the banner has no action. |
| `body` | The banner's body content as HTML. |
| `client_targeting` | Reserved for future use. |
| `created_at` | The time the contact's view of this banner was created. |
| `id` | The id of the banner. |
| `position` | Where the banner is positioned. |
| `show_dismiss_button` | Whether the banner should display a dismiss control. |
| `style` | How the banner is displayed. |
| `title` | The banner's title. |
| `type` | String representing the object's type. |
| `view_id` | The id of the contact's view of this banner. |

Operations: list.

API path: `/contacts/{id}/banners`

#### BannerDismiss

| Field | Description |
| --- | --- |
| `dismissed` | Whether the banner view is dismissed. |
| `id` |  |
| `type` | String representing the object's type. |
| `view_id` | The id of the dismissed banner view. |

Operations: create.

API path: `/contacts/{id}/banners/{view_id}/dismiss`

#### Brand

| Field | Description |
| --- | --- |
| `created_at` | Unix timestamp of brand creation |
| `default_address_settings_id` | Default email settings ID for this brand |
| `help_center_id` | Associated help center identifier |
| `id` | Unique brand identifier. |
| `is_default` | Whether this is the workspace's default brand |
| `name` | Display name of the brand |
| `type` | The type of object |
| `updated_at` | Unix timestamp of last modification |

Operations: list, load.

API path: `/brands`

#### Call

| Field | Description |
| --- | --- |
| `admin_id` | The id of the admin associated with the call, if any. |
| `answered_at` |  |
| `call_type` | The type of call. |
| `contact_id` | The id of the contact associated with the call, if any. |
| `conversation_id` | The id of the conversation associated with the call, if any. |
| `created_at` |  |
| `direction` | The direction of the call. |
| `ended_at` |  |
| `ended_reason` | The reason for the call end, if applicable. |
| `fin_recording_url` | API URL to the AI Agent (Fin) call recording if available. |
| `fin_transcription_url` | API URL to the AI Agent (Fin) call transcript if available. |
| `id` | The id of the call. |
| `initiated_at` |  |
| `phone` | The phone number involved in the call, in E.164 format. |
| `recording_url` | API URL to download or redirect to the call recording if available. |
| `state` | The current state of the call. |
| `transcription_url` | API URL to download or redirect to the call transcript if available. |
| `type` | String representing the object's type. |
| `updated_at` |  |

Operations: create, list, load.

API path: `/calls/search`

#### Company

| Field | Description |
| --- | --- |
| `app_id` | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | The company id you have defined for the company. |
| `created_at` | The time the company was added in Intercom. |
| `custom_attributes` | The custom attributes you have set on the company. |
| `id` | The Intercom defined id representing the company. |
| `industry` | The industry that the company operates in. |
| `last_request_at` | The time the company last recorded making a request. |
| `monthly_spend` | How much revenue the company generates for your business. |
| `name` | The name of the company. |
| `notes` | The list of notes associated with the company |
| `plan` | The name of the plan you have associated with the company. |
| `remote_created_at` | The time the company was created by you. |
| `segments` | The list of segments associated with the company |
| `session_count` | How many sessions the company has recorded. |
| `size` | The number of employees in the company. |
| `tags` | The list of tags associated with the company |
| `type` | Value is `company` |
| `update_last_request_at` | Set to true to update the company's last seen time to now. |
| `updated_at` | The last time the company was updated. |
| `user_count` | The number of users in the company. |
| `website` | The URL for the company website. |

Operations: create, list, load, remove, update.

API path: `/contacts/{contact_id}/companies`

#### CompanyAttachedContact

| Field | Description |
| --- | --- |
| `android_app_name` | The name of the Android app which the contact is using. |
| `android_app_version` | The version of the Android app which the contact is using. |
| `android_device` | The Android device which the contact is using. |
| `android_last_seen_at` | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `android_os_version` | The version of the Android OS which the contact is using. |
| `android_sdk_version` | The version of the Android SDK which the contact is using. |
| `avatar` |  |
| `browser` | The name of the browser which the contact is using. |
| `browser_language` | The language set by the browser which the contact is using. |
| `browser_version` | The version of the browser which the contact is using. |
| `companies` | An object with metadata about companies attached to a contact . |
| `created_at` | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | The custom attributes which are set for the contact. |
| `email` | The contact's email. |
| `email_domain` | The contact's email domain. |
| `external_id` | The unique identifier for the contact which is provided by the Client. |
| `has_hard_bounced` | Whether the contact has had an email sent to them hard bounce. |
| `id` | The unique identifier for the contact which is given by Intercom. |
| `ios_app_name` | The name of the iOS app which the contact is using. |
| `ios_app_version` | The version of the iOS app which the contact is using. |
| `ios_device` | The iOS device which the contact is using. |
| `ios_last_seen_at` | (Unix timestamp in seconds) The last time the contact used the iOS app. |
| `ios_os_version` | The version of iOS which the contact is using. |
| `ios_sdk_version` | The version of the iOS SDK which the contact is using. |
| `language_override` | A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change. |
| `last_contacted_at` | (Unix timestamp in seconds) The time when the contact was last messaged. |
| `last_email_clicked_at` | (Unix timestamp in seconds) The time when the contact last clicked a link in an email. |
| `last_email_opened_at` | (Unix timestamp in seconds) The time when the contact last opened an email. |
| `last_replied_at` | (Unix timestamp in seconds) The time when the contact last messaged in. |
| `last_seen_at` | (Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually). |
| `location` | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | A list of contacts that were merged into this contact. |
| `name` | The contacts name. |
| `notes` | An object containing notes meta data about the notes that a contact has. |
| `os` | The operating system which the contact is using. |
| `owner_id` | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | The contacts phone. |
| `role` | The role of the contact. |
| `signed_up_at` | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | An object containing social profiles that a contact has. |
| `tags` | An object containing tags meta data about the tags that a contact has. |
| `type` | The type of object. |
| `unsubscribed_from_emails` | Whether the contact is unsubscribed from emails. |
| `updated_at` | (Unix timestamp in seconds) The time when the contact was last updated. |
| `workspace_id` | The id of the workspace which the contact belongs to. |

Operations: list.

API path: `/companies/{company_id}/contacts`

#### CompanyAttachedSegment

| Field | Description |
| --- | --- |
| `count` | The number of items in the user segment. |
| `created_at` | The time the segment was created. |
| `id` | The unique identifier representing the segment. |
| `name` | The name of the segment. |
| `person_type` | Type of the contact: contact (lead) or user. |
| `type` | The type of object. |
| `updated_at` | The time the segment was updated. |

Operations: list.

API path: `/companies/{company_id}/segments`

#### CompanyList

| Field | Description |
| --- | --- |
| `data` | An array containing Company Objects. |
| `pages` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | The total number of companies. |
| `type` | The type of object - `list`. |

Operations: create.

API path: `/companies/list`

#### CompanyScroll

| Field | Description |
| --- | --- |
| `app_id` | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | The company id you have defined for the company. |
| `created_at` | The time the company was added in Intercom. |
| `custom_attributes` | The custom attributes you have set on the company. |
| `id` | The Intercom defined id representing the company. |
| `industry` | The industry that the company operates in. |
| `last_request_at` | The time the company last recorded making a request. |
| `monthly_spend` | How much revenue the company generates for your business. |
| `name` | The name of the company. |
| `notes` | The list of notes associated with the company |
| `plan` |  |
| `remote_created_at` | The time the company was created by you. |
| `segments` | The list of segments associated with the company |
| `session_count` | How many sessions the company has recorded. |
| `size` | The number of employees in the company. |
| `tags` | The list of tags associated with the company |
| `type` | Value is `company` |
| `updated_at` | The last time the company was updated. |
| `user_count` | The number of users in the company. |
| `website` | The URL for the company website. |

Operations: list.

API path: `/companies/scroll`

#### Contact

| Field | Description |
| --- | --- |
| `android_app_name` | The name of the Android app which the contact is using. |
| `android_app_version` | The version of the Android app which the contact is using. |
| `android_device` | The Android device which the contact is using. |
| `android_last_seen_at` | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `android_os_version` | The version of the Android OS which the contact is using. |
| `android_sdk_version` | The version of the Android SDK which the contact is using. |
| `avatar` |  |
| `browser` | The name of the browser which the contact is using. |
| `browser_language` | The language set by the browser which the contact is using. |
| `browser_version` | The version of the browser which the contact is using. |
| `companies` | An object with metadata about companies attached to a contact . |
| `created_at` | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | The custom attributes which are set for the contact. |
| `email` | The contact's email. |
| `email_domain` | The contact's email domain. |
| `enabled_push_messaging` | If the user has enabled push messaging. |
| `external_id` | The unique identifier for the contact which is provided by the Client. |
| `has_hard_bounced` | Whether the contact has had an email sent to them hard bounce. |
| `id` | The unique identifier for the contact which is given by Intercom. |
| `ios_app_name` | The name of the iOS app which the contact is using. |
| `ios_app_version` | The version of the iOS app which the contact is using. |
| `ios_device` | The iOS device which the contact is using. |
| `ios_last_seen_at` | (Unix timestamp in seconds) The last time the contact used the iOS app. |
| `ios_os_version` | The version of iOS which the contact is using. |
| `ios_sdk_version` | The version of the iOS SDK which the contact is using. |
| `language_override` | A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change. |
| `last_contacted_at` | (Unix timestamp in seconds) The time when the contact was last messaged. |
| `last_email_clicked_at` | (Unix timestamp in seconds) The time when the contact last clicked a link in an email. |
| `last_email_opened_at` | (Unix timestamp in seconds) The time when the contact last opened an email. |
| `last_replied_at` | (Unix timestamp in seconds) The time when the contact last messaged in. |
| `last_seen_at` | (Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually). |
| `location` | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | A list of contacts that were merged into this contact. |
| `name` | The contacts name. |
| `notes` | An object containing notes meta data about the notes that a contact has. |
| `os` | The operating system which the contact is using. |
| `owner_id` | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | The contacts phone. |
| `role` | The role of the contact. |
| `signed_up_at` | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | An object containing social profiles that a contact has. |
| `tags` | An object containing tags meta data about the tags that a contact has. |
| `type` | The type of object. |
| `unsubscribed_from_emails` | Whether the contact is unsubscribed from emails. |
| `updated_at` | (Unix timestamp in seconds) The time when the contact was last updated. |
| `user` | The unique identifiers retained after converting or merging. |
| `visitor` | The unique identifiers to convert a single Visitor. |
| `workspace_id` | The id of the workspace which the contact belongs to. |

Operations: create, list, load, remove, update.

API path: `/contacts/{contact_id}/archive`

#### ContactAttachedCompany

| Field | Description |
| --- | --- |
| `app_id` | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | The company id you have defined for the company. |
| `created_at` | The time the company was added in Intercom. |
| `custom_attributes` | The custom attributes you have set on the company. |
| `id` | The Intercom defined id representing the company. |
| `industry` | The industry that the company operates in. |
| `last_request_at` | The time the company last recorded making a request. |
| `monthly_spend` | How much revenue the company generates for your business. |
| `name` | The name of the company. |
| `notes` | The list of notes associated with the company |
| `plan` |  |
| `remote_created_at` | The time the company was created by you. |
| `segments` | The list of segments associated with the company |
| `session_count` | How many sessions the company has recorded. |
| `size` | The number of employees in the company. |
| `tags` | The list of tags associated with the company |
| `type` | Value is `company` |
| `updated_at` | The last time the company was updated. |
| `user_count` | The number of users in the company. |
| `website` | The URL for the company website. |

Operations: list.

API path: `/contacts/{contact_id}/companies`

#### ContactList

| Field | Description |
| --- | --- |
| `data` | The list of contact objects |
| `pages` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` |  |
| `query` |  |
| `sort` | An optional object to sort the results by. |
| `total_count` | A count of the total number of objects. |
| `type` | Always list |

Operations: create.

API path: `/contacts/search`

#### ContactSegment

| Field | Description |
| --- | --- |
| `count` | The number of items in the user segment. |
| `created_at` | The time the segment was created. |
| `id` | The unique identifier representing the segment. |
| `name` | The name of the segment. |
| `person_type` | Type of the contact: contact (lead) or user. |
| `type` | The type of object. |
| `updated_at` | The time the segment was updated. |

Operations: list.

API path: `/contacts/{contact_id}/segments`

#### Content

| Field | Description |
| --- | --- |

Operations: create.

API path: `/content/bulk_actions`

#### ContentImportSource

| Field | Description |
| --- | --- |
| `apply_audience_to_existing_content` | When true, the audience will be applied to all existing external pages belonging to this content import source. |
| `audience_ids` | The unique identifiers for the audiences associated with this content import source. |
| `created_at` | The time when the content import source was created. |
| `id` | The unique identifier for the content import source which is given by Intercom. |
| `last_synced_at` | The time when the content import source was last synced. |
| `status` | The status of the content import source. |
| `sync_behavior` | If you intend to create or update External Pages via the API, this should be set to `api`. |
| `type` | Always external_page |
| `updated_at` | The time when the content import source was last updated. |
| `url` | The URL of the root of the external source. |

Operations: create, list, load, update.

API path: `/ai/content_import_sources`

#### ContentSearch

| Field | Description |
| --- | --- |
| `data` | The list of matched content items. |
| `pages` | Pagination metadata, including links to neighbouring pages. |
| `total_count` | Total number of results matching the query. |
| `type` | Always `list`. |

Operations: list.

API path: `/content/search`

#### ContentSnippet

| Field | Description |
| --- | --- |
| `ai_chatbot_availability` | Whether the content snippet is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | Whether the content snippet is available for AI Copilot. |
| `ai_sales_agent_availability` | Whether the content snippet is available for AI Sales Agent. |
| `audience_ids` | The list of audience IDs this content snippet is targeted to for Fin AI Agent. |
| `body_markdown` | The body of the content snippet in markdown. |
| `chatbot_availability` | Deprecated. |
| `copilot_availability` | Deprecated. |
| `created_at` | The time the snippet was created as a UNIX timestamp. |
| `id` | The unique identifier for the content snippet. |
| `json_blocks` | The content blocks that make up the body of the snippet. |
| `locale` | The locale of the content snippet. |
| `title` | The title of the content snippet. |
| `type` | String representing the object's type. |
| `updated_at` | The time the snippet was last updated as a UNIX timestamp. |

Operations: create, list, load, remove, update.

API path: `/content_snippets`

#### Conversation

| Field | Description |
| --- | --- |
| `admin_assignee_id` | The id of the admin assigned to the conversation. |
| `ai_agent` | Data related to AI Agent involvement in the conversation. |
| `ai_agent_participated` | Indicates whether the AI Agent participated in the conversation. |
| `attachment_urls` | A list of image URLs that will be added as attachments. |
| `body` | The content of the message. |
| `brand_id` | The unique identifier of the brand to associate with this conversation. |
| `channel` | The channel through which the conversation was initiated and its current channel. |
| `company` | The company associated with the conversation. |
| `company_id` | The ID of the company that the conversation is associated with. |
| `contacts` | The list of contacts (users or leads) involved in this conversation. |
| `conversation_id` | The unique identifier (given by Intercom) for the conversation or customer ticket to link to the tracker ticket. |
| `conversation_parts` | A list of Conversation Part objects for each part message in the conversation. |
| `conversation_rating` | The Conversation Rating object which contains information on the rating and/or remark added by a Contact and the Admin assigned to the conversation. |
| `created_at` | The time the conversation was created. |
| `custom_attributes` | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `external_references` | References linking this conversation to records in an external helpdesk or CRM system. |
| `first_contact_reply` | An object containing information on the first users message. |
| `from` |  |
| `id` | The id representing the conversation. |
| `linked_objects` | An object containing metadata about linked conversations and linked tickets. |
| `monitor_evaluations` | QA monitor evaluations that flagged this conversation. |
| `open` | Indicates whether a conversation is open (true) or closed (false). |
| `priority` | The priority level of the conversation. |
| `read` | Indicates whether a conversation has been read. |
| `sales_agent` | Data related to Sales Agent involvement in the conversation. |
| `sales_agent_participated` | Indicates whether the Sales Agent participated in the conversation. |
| `scorecards` | QA scorecard results for this conversation. |
| `sla_applied` | The SLA Applied object contains the details for which SLA has been applied to this conversation. |
| `snoozed_until` | If set this is the time in the future when this conversation will be marked as open. |
| `source` | The type of the conversation part that started this conversation. |
| `state` | Can be set to "open", "closed" or "snoozed". |
| `statistics` | A Statistics object containing all information required for reporting, with timestamps and calculated metrics. |
| `subject` | The title of the email. |
| `tags` | A list of tags objects associated with a conversation |
| `team_assignee_id` | The id of the team assigned to the conversation. |
| `teammates` | The list of teammates who participated in the conversation (wrote at least one conversation part). |
| `title` | The title given to the conversation. |
| `type` | Always conversation. |
| `updated_at` | The last time the conversation was updated. |
| `waiting_since` | The last time a Contact responded to an Admin. |

Operations: create, list, load, remove, update.

API path: `/conversations/{id}/merge`

#### ConversationAttribute

| Field | Description |
| --- | --- |
| `admin_id` |  |
| `archived` |  |
| `created_at` |  |
| `data_type` |  |
| `description` | Readable description of the attribute. |
| `id` |  |
| `label` | The label for the new option. |
| `multiline` | (String data type only) Whether this string attribute is multiline. |
| `name` | Name of the attribute. |
| `reference` | (Relationship data type only) Reference configuration for related objects. |
| `required` | Whether this attribute is required. |
| `type` |  |
| `updated_at` |  |
| `visible_to_team_ids` | Team IDs that can see this attribute. |

Operations: create, load, remove, update.

API path: `/conversations/attributes/{id}/options`

#### ConversationAttributeList

| Field | Description |
| --- | --- |
| `data` | A list of conversation attributes. |
| `type` | The type of the object. |

Operations: list.

API path: `/conversations/attributes`

#### ConversationList

| Field | Description |
| --- | --- |
| `conversations` | The list of conversation objects |
| `pages` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` |  |
| `query` |  |
| `total_count` | A count of the total number of objects. |
| `type` | Always conversation.list |

Operations: create.

API path: `/conversations/search`

#### ConversationParticipant

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, remove.

API path: `/conversations/{conversation_id}/customers`

#### CustomObjectInstance

| Field | Description |
| --- | --- |
| `created_at` |  |
| `custom_attributes` | The custom attributes which are set for the Custom Object instance. |
| `data` | An array of Custom Object Instance objects. |
| `external_created_at` | The time when the Custom Object instance was created in the external system it originated from. |
| `external_id` | A unique identifier for the Custom Object instance in the external system it originated from. |
| `external_updated_at` | The time when the Custom Object instance was last updated in the external system it originated from. |
| `id` |  |
| `pages` | The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests. |
| `total_count` | A count of the total number of custom object instances. |
| `type` | The type of the object - `list`. |
| `updated_at` |  |

Operations: create, load, remove.

API path: `/custom_object_instances/{custom_object_type_identifier}`

#### Data

| Field | Description |
| --- | --- |
| `created_at_after` | The start date that you request data for. |
| `created_at_before` | The end date that you request data for. |
| `download_expires_at` | The time after which you will not be able to access the data. |
| `download_url` | The location where you can download your data. |
| `id` |  |
| `job_identifier` | The identifier for your job. |
| `status` | The current state of your job. |

Operations: create, load.

API path: `/export/content/data`

#### DataAttribute

| Field | Description |
| --- | --- |
| `admin_id` | Teammate who created the attribute. |
| `api_writable` | Can this attribute be updated through API |
| `archived` | Is this attribute archived. |
| `created_at` | The time the attribute was created as a UTC Unix timestamp |
| `custom` | Set to true if this is a CDA |
| `data_type` | The data type of the attribute. |
| `description` | Readable description of the attribute. |
| `full_name` | Full name of the attribute. |
| `id` | The unique identifier for the data attribute which is given by Intercom. |
| `label` | Readable name of the attribute (i.e. |
| `messenger_writable` | Can this attribute be updated by the Messenger |
| `model` | Value is `contact` for user/lead attributes and `company` for company attributes. |
| `name` | Name of the attribute. |
| `options` | List of predefined options for attribute value. |
| `type` | Value is `data_attribute`. |
| `ui_writable` | Can this attribute be updated in the UI |
| `updated_at` | The time the attribute was last updated as a UTC Unix timestamp |

Operations: create, list, update.

API path: `/data_attributes`

#### DataConnector

| Field | Description |
| --- | --- |
| `audiences` | The audience types this connector targets. |
| `body` | The request body template. |
| `bypass_authentication` | Whether authentication is bypassed for this connector. |
| `client_function_name` | The name of the client-side function, if applicable. |
| `client_function_timeout_ms` | Timeout in milliseconds for the client function, if applicable. |
| `configuration_response_type` | The expected response format from the connector. |
| `created_at` | The time the data connector was created. |
| `created_by_admin_id` | The ID of the admin who created this connector. |
| `customer_authentication` | Whether OTP authentication is enabled for this connector. |
| `data_inputs` | The input parameters accepted by this data connector. |
| `data_transformation_type` | The type of data transformation applied to the response. |
| `description` | A description of what this data connector does. |
| `direct_fin_usage` | Whether this connector is used directly by Fin. |
| `execution_results_url` | The URL path to fetch execution results for this connector. |
| `execution_type` | How the connector executes. |
| `headers` | HTTP headers for the request. |
| `http_method` | The HTTP method used by the data connector. |
| `id` | The unique identifier for the data connector. |
| `mock_response` | A sample JSON response from the external API. |
| `name` | The name of the data connector. |
| `object_mappings` | Mappings from connector response objects to Intercom objects. |
| `response_fields` | The fields returned in the connector response. |
| `state` | The current state of the data connector. |
| `token_ids` | IDs of authentication tokens associated with this connector. |
| `type` | The type of object - `data_connector`. |
| `updated_at` | The time the data connector was last updated. |
| `updated_by_admin_id` | The ID of the admin who last updated this connector. |
| `url` | The URL of the external API endpoint. |
| `validate_missing_attributes` | Whether to validate missing attributes before execution. |

Operations: create, list, load, update.

API path: `/data_connectors`

#### DataConnectorExecutionResult

| Field | Description |
| --- | --- |
| `conversation_id` | The conversation associated with this execution, if any. |
| `created_at` | The time the execution occurred. |
| `data_connector_id` | The unique identifier of the data connector that produced this result. |
| `error_message` | A human-readable error message. |
| `error_type` | The type of error that occurred, if any. |
| `execution_time_ms` | The execution time in milliseconds. |
| `http_method` | The HTTP method used for the request. |
| `http_status` | The HTTP status code returned by the external API. |
| `id` | The unique identifier for the execution result. |
| `raw_response_body` | The raw (unmapped) response body. |
| `request_body` | The request body sent to the external API. |
| `request_url` | The request URL. |
| `response_body` | The response body from the external API. |
| `source_id` | The identifier of the source that triggered this execution. |
| `source_type` | The type of source that triggered this execution. |
| `success` | Whether the execution was successful. |
| `type` | The type of object - `data_connector.execution`. |

Operations: load.

API path: `/data_connectors/{data_connector_id}/execution_results/{id}`

#### DataConnectorExecutionResultList

| Field | Description |
| --- | --- |
| `id` |  |

Operations: list.

API path: `/data_connectors/{data_connector_id}/execution_results`

#### DataEvent

| Field | Description |
| --- | --- |
| `created_at` | The time the event occurred as a UTC Unix timestamp |
| `email` | An email address for your user. |
| `event_name` | The name of the event that occurred. |
| `event_summaries` | A list of event summaries for the user. |
| `id` | The unique identifier for the contact (lead or user) which is given by Intercom. |
| `metadata` | Optional metadata about the event. |
| `user_id` | Your identifier for the user. |

Operations: create.

API path: `/events`

#### DataEventSummary

| Field | Description |
| --- | --- |
| `count` | The number of times the event was sent |
| `description` | The description of the event |
| `first` | The first time the event was sent |
| `last` | The last time the event was sent |
| `name` | The name of the event |

Operations: list.

API path: `/events`

#### DataExport

| Field | Description |
| --- | --- |
| `download_expires_at` | The time after which you will not be able to access the data. |
| `download_url` | The location where you can download your data. |
| `job_identifier` | The identifier for your job. |
| `status` | The current state of your job. |

Operations: create.

API path: `/export/cancel/{job_identifier}`

#### Deleted

| Field | Description |
| --- | --- |
| `deleted_at` | The time when the conversation was deleted. |
| `id` | The ID of the deleted conversation. |
| `metrics_retained` | Whether reporting metrics are retained for this conversation ID |
| `type` | String representing the object's type. |

Operations: list.

API path: `/conversations/deleted`

#### DeletedArticleObject

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/articles/{article_id}`

#### DeletedCompanyObject

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/companies/{company_id}`

#### DeletedDataConnectorObject

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/data_connectors/{id}`

#### DeletedInternalArticleObject

| Field | Description |
| --- | --- |
| `ai_chatbot_availability` | Whether the internal article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | Whether the internal article should be available for AI Copilot. |
| `ai_sales_agent_availability` | Whether the internal article should be available for AI Sales Agent. |
| `audience_ids` | The list of audience IDs to target this internal article to for Fin AI Agent. |
| `author_id` | The id of the author of the article. |
| `body` | The content of the article in HTML. |
| `body_markdown` | The content of the article in markdown. |
| `created_at` | The time when the article was created. |
| `id` | The unique identifier for the article which is given by Intercom. |
| `locale` | The default locale of the article. |
| `owner_id` | The id of the owner of the article. |
| `title` | The title of the article. |
| `type` | The type of object - `internal_article`. |
| `updated_at` | The time when the article was last updated. |

Operations: create, list, remove.

API path: `/internal_articles`

#### DeletedObject

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/news/news_items/{news_item_id}`

#### Email

| Field | Description |
| --- | --- |
| `brand_id` | Associated brand identifier |
| `created_at` | Unix timestamp of creation |
| `domain` | Domain portion of the email address |
| `email` | Full sender email address |
| `forwarded_email_last_received_at` | Unix timestamp of last forwarded email received (null if never) |
| `forwarding_enabled` | Whether email forwarding is active |
| `id` | Unique email setting identifier |
| `type` | The type of object |
| `updated_at` | Unix timestamp of last modification |
| `verified` | Whether the email address has been verified |

Operations: list, load.

API path: `/emails`

#### ExternalPage

| Field | Description |
| --- | --- |
| `ai_agent_availability` | Whether the external page should be used to answer questions by AI Agent. |
| `ai_copilot_availability` | Whether the external page should be used to answer questions by AI Copilot. |
| `ai_sales_agent_availability` | Whether the external page should be used to answer questions by AI Sales Agent. |
| `created_at` | The time when the external page was created. |
| `external_id` | The identifier for the external page which was given by the source. |
| `fin_availability` | Deprecated. |
| `html` | The body of the external page in HTML. |
| `id` | The unique identifier for the external page which is given by Intercom. |
| `last_ingested_at` | The time when the external page was last ingested. |
| `locale` | Always en |
| `source_id` | The unique identifier for the source of the external page which was given by Intercom. |
| `title` | The title of the external page. |
| `type` | Always external_page |
| `updated_at` | The time when the external page was last updated. |
| `url` | The URL of the external page. |

Operations: create, list, load, remove, update.

API path: `/ai/external_pages`

#### FinAgent

| Field | Description |
| --- | --- |
| `attachments` | An array of attachments to include with the message. |
| `conversation` | Conversation-related attribute errors. |
| `conversation_id` | The external ID of the rated conversation. |
| `conversation_metadata` | Metadata about the conversation, including history and attributes. |
| `message` | A message exchanged within a Fin Agent conversation. |
| `rating` | The rating now recorded on the conversation. |
| `remark` | Optional free-text comment the user left alongside the rating. |
| `status` | The result of the submission. |
| `user` | User-related attribute errors. |

Operations: create.

API path: `/fin/csat`

#### HandlingEvent

| Field | Description |
| --- | --- |
| `reason` | Optional reason for the event (e.g., "Paused", "Away") |
| `teammate` | A reference to a teammate |
| `timestamp` | ISO8601 timestamp when the event occurred |
| `type` | The type of handling event |

Operations: list.

API path: `/conversations/{id}/handling_events`

#### HelpCenter

| Field | Description |
| --- | --- |
| `ar` | The content of the group in Arabic |
| `bg` | The content of the group in Bulgarian |
| `bs` | The content of the group in Bosnian |
| `ca` | The content of the group in Catalan |
| `created_at` | The time when the Help Center was created. |
| `cs` | The content of the group in Czech |
| `custom_domain` | Custom domain configured for the help center |
| `da` | The content of the group in Danish |
| `de` | The content of the group in German |
| `default` | Whether this help center is the default for the workspace. |
| `description` | The description of the collection. |
| `display_name` | The display name of the Help Center only seen by teammates. |
| `el` | The content of the group in Greek |
| `en` | The content of the group in English |
| `es` | The content of the group in Spanish |
| `et` | The content of the group in Estonian |
| `fi` | The content of the group in Finnish |
| `fr` | The content of the group in French |
| `from_url` | The source URL that is redirected. |
| `he` | The content of the group in Hebrew |
| `help_center_id` | The unique identifier for the help center the redirect belongs to. |
| `hr` | The content of the group in Croatian |
| `hu` | The content of the group in Hungarian |
| `id` | The content of the group in Indonesian |
| `identifier` | The identifier of the Help Center. |
| `it` | The content of the group in Italian |
| `ja` | The content of the group in Japanese |
| `ko` | The content of the group in Korean |
| `locale` | The locale of the redirect's target. |
| `locales` | The locales in which the help center is available. |
| `lt` | The content of the group in Lithuanian |
| `lv` | The content of the group in Latvian |
| `mn` | The content of the group in Mongolian |
| `name` | The name of the collection. |
| `nb` | The content of the group in Norwegian |
| `nl` | The content of the group in Dutch |
| `parent_id` | The id of the parent collection. |
| `pl` | The content of the group in Polish |
| `pt` | The content of the group in Portuguese (Portugal) |
| `ptBR` | The content of the group in Portuguese (Brazil) |
| `ro` | The content of the group in Romanian |
| `ru` | The content of the group in Russian |
| `sl` | The content of the group in Slovenian |
| `sr` | The content of the group in Serbian |
| `sv` | The content of the group in Swedish |
| `target_id` | The unique identifier of the target article or collection. |
| `target_type` | The type of the redirect target. |
| `tr` | The content of the group in Turkish |
| `translated_content` | The Translated Content of an Group. |
| `type` | The type of object - group_translated_content. |
| `updated_at` | The time when the Help Center was last updated. |
| `url` | The URL for the help center, if you have a custom domain then this will show the URL using the custom domain. |
| `vi` | The content of the group in Vietnamese |
| `website_turned_on` | Whether the Help Center is turned on or not. |
| `workspace_id` | The id of the workspace which the Help Center belongs to. |
| `zhCN` | The content of the group in Chinese (China) |
| `zhTW` | The content of the group in Chinese (Taiwan) |

Operations: create, list, load, remove, update.

API path: `/help_center/help_centers/{help_center_id}/redirects`

#### InternalArticle

| Field | Description |
| --- | --- |
| `ai_chatbot_availability` | Whether the internal article is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | Whether the internal article is available for AI Copilot. |
| `ai_sales_agent_availability` | Whether the internal article is available for AI Sales Agent. |
| `audience_ids` | The list of audience IDs this internal article is targeted to for Fin AI Agent. |
| `author_id` | The id of the author of the article. |
| `body` | The body of the article in HTML. |
| `body_markdown` | The body of the article in markdown. |
| `created_at` | The time when the article was created. |
| `id` | The unique identifier for the article which is given by Intercom. |
| `locale` | The default locale of the article. |
| `owner_id` | The id of the owner of the article. |
| `title` | The title of the article. |
| `type` | The type of object - `internal_article`. |
| `updated_at` | The time when the article was last updated. |

Operations: load, update.

API path: `/internal_articles/{internal_article_id}`

#### InternalArticleSearch

| Field | Description |
| --- | --- |
| `data` | An object containing the results of the search. |
| `pages` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | The total number of Internal Articles matching the search query |
| `type` | The type of the object - `list`. |

Operations: load.

API path: `/internal_articles/search`

#### IpAllowlist

| Field | Description |
| --- | --- |
| `enabled` | Whether the IP allowlist is enabled for the workspace. |
| `ip_allowlist` | List of allowed IP addresses and/or IP ranges in CIDR notation. |
| `type` | String representing the object's type. |

Operations: list, update.

API path: `/ip_allowlist`

#### Job

| Field | Description |
| --- | --- |
| `id` | The id of the job that's currently being processed or has completed. |
| `resource_id` | The id of the resource created during job execution (e.g. |
| `resource_type` | The type of resource created during job execution. |
| `resource_url` | The url of the resource created during job exeuction. |
| `skip_notifications` | Option to disable notifications when a Ticket is created. |
| `status` | The status of the job execution. |
| `type` | The type of the object |
| `url` | API endpoint URL to check the job status. |

Operations: create, load.

API path: `/tickets/enqueue`

#### Macro

| Field | Description |
| --- | --- |
| `available_on` | Where the macro is available for use. |
| `body` | The body of the macro in HTML format with placeholders transformed to XML-like format. |
| `body_text` | The plain text version of the macro body with original Intercom placeholder format. |
| `created_at` | The time the macro was created in ISO 8601 format. |
| `id` | The unique identifier for the macro. |
| `name` | The name of the macro. |
| `type` | String representing the object's type. |
| `updated_at` | The time the macro was last updated in ISO 8601 format. |
| `visible_to` | Who can view this macro. |
| `visible_to_team_ids` | The team IDs that can view this macro when visible_to is set to specific_teams. |

Operations: list, load.

API path: `/macros`

#### MergeHistory

| Field | Description |
| --- | --- |
| `merged_at` | (Unix timestamp in seconds) The time when the merge occurred. |
| `source_contact_id` | The Intercom ID of the contact that was merged into this contact. |
| `source_contact_role` | The role of the contact that was merged in. |
| `type` | The type of object. |

Operations: list.

API path: `/contacts/{id}/merge_history`

#### Message

| Field | Description |
| --- | --- |
| `bcc` |  |
| `body` | The message body, which may contain HTML. |
| `cc` |  |
| `conversation_id` | The associated conversation_id |
| `create_conversation_without_contact_reply` | Whether a conversation should be opened in the inbox for the message without the contact replying. |
| `created_at` | The time the conversation was created. |
| `from` | The sender of the message. |
| `id` | The id representing the message. |
| `message_type` | The type of message that was sent. |
| `subject` | The subject of the message. |
| `template` | The style of the outgoing message. |
| `to` |  |
| `type` | The type of the message |

Operations: create.

API path: `/messages`

#### NewsItem

| Field | Description |
| --- | --- |
| `body` | The news item body, which may contain HTML. |
| `cover_image_url` | URL of the image used as cover. |
| `created_at` | Timestamp for when the news item was created. |
| `deliver_silently` | When set to true, the news item will appear in the messenger newsfeed without showing a notification badge. |
| `id` | The unique identifier for the news item which is given by Intercom. |
| `labels` | Label names displayed to users to categorize the news item. |
| `newsfeed_assignments` | A list of newsfeed_assignments to assign to the specified newsfeed. |
| `reactions` | Ordered list of emoji reactions to the news item. |
| `sender_id` | The id of the sender of the news item. |
| `state` | News items will not be visible to your users in the assigned newsfeeds until they are set live. |
| `title` | The title of the news item. |
| `type` | The type of object. |
| `updated_at` | Timestamp for when the news item was last updated. |
| `workspace_id` | The id of the workspace which the news item belongs to. |

Operations: create, load, update.

API path: `/news/news_items`

#### Newsfeed

| Field | Description |
| --- | --- |
| `created_at` | Timestamp for when the newsfeed was created. |
| `id` | The unique identifier for the newsfeed which is given by Intercom. |
| `name` | The name of the newsfeed. |
| `type` | The type of object. |
| `updated_at` | Timestamp for when the newsfeed was last updated. |

Operations: load.

API path: `/news/newsfeeds/{newsfeed_id}`

#### Note

| Field | Description |
| --- | --- |
| `admin_id` | The unique identifier of the admin creating the note. |
| `author` | Optional. |
| `body` | The body text of the note. |
| `company` | Represents the company that the note was created about. |
| `contact` | Represents the contact that the note was created about. |
| `created_at` | The time the note was created. |
| `id` | The id of the note. |
| `type` | String representing the object's type. |

Operations: create, list, load.

API path: `/companies/{company_id}/notes`

#### OfficeHour

| Field | Description |
| --- | --- |
| `created_at` | The time the schedule was created as a Unix timestamp. |
| `id` | The unique identifier for the office hours schedule. |
| `name` | The name of the office hours schedule. |
| `time_intervals` | The open intervals for the schedule. |
| `time_zone_name` | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | Whether the schedule is open 24/7. |
| `type` | The type of the object - always `office_hours_schedule`. |
| `updated_at` | The time the schedule was last updated as a Unix timestamp. |

Operations: create, list, remove.

API path: `/office_hours_schedules`

#### OfficeHoursException

| Field | Description |
| --- | --- |
| `created_at` | The time the exception was created as a Unix timestamp. |
| `exception_date` | The date the exception applies to, in `YYYY-MM-DD` format. |
| `exception_type` | `closed` means the workspace is closed all day; `custom_hours` replaces the regular hours with `time_intervals`. |
| `id` | The unique identifier for the office hours exception. |
| `name` | An optional name for the exception. |
| `office_hours_schedule_id` | The unique identifier for the schedule this exception belongs to. |
| `recurring_annually` | Whether the exception repeats every year on the same date. |
| `time_intervals` | The open intervals for the exception date. |
| `type` | The type of the object - always `office_hours_exception`. |
| `updated_at` | The time the exception was last updated as a Unix timestamp. |

Operations: create, list, load, update.

API path: `/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions`

#### OfficeHoursSchedule

| Field | Description |
| --- | --- |
| `created_at` | The time the schedule was created as a Unix timestamp. |
| `id` | The unique identifier for the office hours schedule. |
| `name` | The name of the office hours schedule. |
| `time_intervals` | The open intervals that make up the weekly schedule. |
| `time_zone_name` | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | Whether the schedule is open 24/7. |
| `type` | The type of the object - always `office_hours_schedule`. |
| `updated_at` | The time the schedule was last updated as a Unix timestamp. |

Operations: load, update.

API path: `/office_hours_schedules/{id}`

#### Paginated

| Field | Description |
| --- | --- |
| `data` | An array of Objects |
| `pages` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | A count of the total number of objects. |
| `type` | The type of object |

Operations: list.

API path: `/news/newsfeeds/{newsfeed_id}/items`

#### PhoneSwitch

| Field | Description |
| --- | --- |
| `custom_attributes` | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `phone` | Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger. |
| `type` |  |

Operations: create.

API path: `/phone_call_redirects`

#### ReportingData

| Field | Description |
| --- | --- |
| `download_expires_at` |  |
| `download_url` |  |
| `job_identifier` |  |
| `status` |  |

Operations: load.

API path: `/download/reporting_data/{job_identifier}`

#### ReportingDataExport

| Field | Description |
| --- | --- |
| `attribute_ids` |  |
| `attributes` |  |
| `dataset_id` |  |
| `default_time_attribute_id` |  |
| `description` |  |
| `download_expires_at` |  |
| `download_url` |  |
| `end_time` |  |
| `id` |  |
| `job_identifier` |  |
| `name` |  |
| `start_time` |  |
| `status` |  |

Operations: create, list.

API path: `/export/reporting_data/enqueue`

#### Segment

| Field | Description |
| --- | --- |
| `count` | The number of items in the user segment. |
| `created_at` | The time the segment was created. |
| `id` | The unique identifier representing the segment. |
| `name` | The name of the segment. |
| `person_type` | Type of the contact: contact (lead) or user. |
| `type` | The type of object. |
| `updated_at` | The time the segment was updated. |

Operations: list, load.

API path: `/segments`

#### SideConversation

| Field | Description |
| --- | --- |
| `conversation_parts` | The conversation parts (messages) in this side conversation. |
| `side_conversation_id` | The unique identifier for the side conversation. |
| `total_count` | The total number of conversation parts in this side conversation. |

Operations: list.

API path: `/conversations/{id}/side_conversations`

#### Subscription

| Field | Description |
| --- | --- |
| `consent_type` | Describes the type of consent. |
| `content_types` | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | A translation object contains the localised details of a subscription type. |
| `id` | The unique identifier representing the subscription type. |
| `state` | The state of the subscription type. |
| `translations` | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `type` | The type of the object - subscription |

Operations: create, list, remove.

API path: `/contacts/{contact_id}/subscriptions`

#### SubscriptionType

| Field | Description |
| --- | --- |
| `consent_type` | Describes the type of consent. |
| `content_types` | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | A translation object contains the localised details of a subscription type. |
| `id` | The unique identifier representing the subscription type. |
| `state` | The state of the subscription type. |
| `translations` | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `type` | The type of the object - subscription |

Operations: list.

API path: `/subscription_types`

#### Tag

| Field | Description |
| --- | --- |
| `admin_id` | Optional id of the teammate to attribute the tagging to. |
| `applied_at` | The time when the tag was applied to the object. |
| `applied_by` | The admin who applied the tag. |
| `companies` |  |
| `id` | The id of the tag |
| `name` | The name of the tag |
| `type` | value is "tag" |
| `users` |  |

Operations: create, list, load, remove.

API path: `/articles/{article_id}/tags`

#### Team

| Field | Description |
| --- | --- |
| `admin_ids` | The list of admin IDs that are a part of the team. |
| `admin_priority_level` | Admin priority levels for the team |
| `assignment_limit` | The assignment limit for the team. |
| `distribution_method` | Describes how assignments are distributed among the team members |
| `id` | The id of the team |
| `name` | The name of the team |
| `type` | Value is always "team" |

Operations: list, load.

API path: `/teams`

#### TeamMetricList

| Field | Description |
| --- | --- |
| `id` |  |

Operations: list.

API path: `/teams/{team_id}/metrics`

#### Ticket

| Field | Description |
| --- | --- |
| `admin_assignee_id` | The id representing the admin assigned to the ticket. |
| `attributes` | The attributes set on the ticket. |
| `category` | Category of the Ticket. |
| `contacts` | The list of contacts affected by a ticket. |
| `created_at` | The time the ticket was created as a UTC Unix timestamp. |
| `id` | The unique identifier for the ticket which is given by Intercom. |
| `is_shared` | Whether or not the ticket is shared with the customer. |
| `linked_objects` | An object containing metadata about linked conversations and linked tickets. |
| `open` | Whether or not the ticket is open. |
| `previous_ticket_state_id` | The ID of the previous ticket state from the most recent state change. |
| `skip_notifications` | Option to disable notifications when a Ticket is created. |
| `snoozed_until` | The time the ticket will be snoozed until as a UTC Unix timestamp. |
| `team_assignee_id` | The id representing the team assigned to the ticket. |
| `ticket_attributes` | An object containing the different attributes associated to the ticket as key-value pairs. |
| `ticket_id` | The ID of the Ticket used in the Intercom Inbox and Messenger. |
| `ticket_parts` | A list of Ticket Part objects for each note and event in the ticket. |
| `ticket_state` | A ticket state, used to define the state of a ticket. |
| `ticket_state_id` | The ID of the ticket state associated with the ticket type. |
| `ticket_type` | A ticket type, used to define the data fields to be captured in a ticket. |
| `ticket_type_id` | The ID of the type of ticket you want to convert the conversation to |
| `type` | Always ticket |
| `updated_at` | The last time the ticket was updated as a UTC Unix timestamp. |

Operations: create, load, remove, update.

API path: `/conversations/{conversation_id}/convert`

#### TicketList

| Field | Description |
| --- | --- |
| `pages` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` |  |
| `query` |  |
| `tickets` | The list of ticket objects |
| `total_count` | A count of the total number of objects. |
| `type` | Always ticket.list |

Operations: create.

API path: `/tickets/search`

#### TicketReply

| Field | Description |
| --- | --- |
| `attachments` | A list of attachments for the part. |
| `author` | The author that wrote or triggered the part. |
| `body` | The message body, which may contain HTML. |
| `created_at` | The time the note was created. |
| `id` | The id representing the part. |
| `part_type` | Type of the part |
| `redacted` | Whether or not the ticket part has been redacted. |
| `skip_notifications` | Option to disable notifications when replying to a Ticket. |
| `type` | Always ticket_part |
| `updated_at` | The last time the note was updated. |

Operations: create.

API path: `/tickets/{ticket_id}/reply`

#### TicketState

| Field | Description |
| --- | --- |
| `archived` | Whether the ticket state is archived |
| `category` | The category of the ticket state |
| `external_label` | The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal. |
| `id` | The id of the ticket state |
| `internal_label` | The state the ticket is currently in, in a human readable form - visible in Intercom |
| `ticket_types` | A list of ticket types associated with a given ticket state. |
| `type` | String representing the object's type. |

Operations: list.

API path: `/ticket_states`

#### TicketType

| Field | Description |
| --- | --- |
| `archived` | Whether the ticket type is archived or not. |
| `category` | Category of the Ticket Type. |
| `created_at` | The date and time the ticket type was created. |
| `description` | The description of the ticket type |
| `icon` | The icon of the ticket type |
| `id` | The id representing the ticket type. |
| `is_internal` | Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers. |
| `name` | The name of the ticket type |
| `ticket_states` | A list of ticket states associated with a given ticket type. |
| `ticket_type_attributes` | A list of attributes associated with a given ticket type. |
| `type` | String representing the object's type. |
| `updated_at` | The date and time the ticket type was last updated. |
| `workspace_id` | The id of the workspace that the ticket type belongs to. |

Operations: create, list, load, update.

API path: `/ticket_types`

#### TicketTypeAttribute

| Field | Description |
| --- | --- |
| `allow_multiple_values` | Whether the attribute allows multiple files to be attached to it (only applicable to file attributes) |
| `archived` | Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets) |
| `data_type` | The data type of the attribute |
| `description` | The description of the attribute presented to the teammate or contact |
| `id` |  |
| `list_items` | A comma delimited list of items for the attribute value (only applicable to list attributes) |
| `multiline` | Whether the attribute allows multiple lines of text (only applicable to string attributes) |
| `name` | The name of the ticket type attribute |
| `required_to_create` | Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox. |
| `required_to_create_for_contacts` | Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger. |
| `visible_on_create` | Whether the attribute is visible to teammates when creating a ticket in Inbox. |
| `visible_to_contacts` | Whether the attribute is visible to contacts when creating a ticket in Messenger. |

Operations: create, update.

API path: `/ticket_types/{ticket_type_id}/attributes`

#### Visitor

| Field | Description |
| --- | --- |
| `anonymous` | Identifies if this visitor is anonymous. |
| `app_id` | The id of the app the visitor is associated with. |
| `avatar` |  |
| `companies` |  |
| `created_at` | The time the Visitor was added to Intercom. |
| `custom_attributes` | The custom attributes you have set on the Visitor. |
| `do_not_track` | Identifies if this visitor has do not track enabled. |
| `email` | The email of the visitor. |
| `has_hard_bounced` | Identifies if this visitor has had a hard bounce. |
| `id` | The Intercom defined id representing the Visitor. |
| `las_request_at` | The time the Lead last recorded making a request. |
| `location_data` |  |
| `marked_email_as_spam` | Identifies if this visitor has marked an email as spam. |
| `name` | The name of the visitor. |
| `owner_id` | The id of the admin that owns the Visitor. |
| `phone` | The phone number of the visitor. |
| `pseudonym` | The pseudonym of the visitor. |
| `referrer` | The referer of the visitor. |
| `remote_created_at` | The time the Visitor was added to Intercom. |
| `segments` |  |
| `session_count` | The number of sessions the Visitor has had. |
| `signed_up_at` | The time the Visitor signed up for your product. |
| `social_profiles` |  |
| `tags` |  |
| `type` | Value is 'visitor' |
| `unsubscribed_from_emails` | Whether the Visitor is unsubscribed from emails. |
| `updated_at` | The last time the Visitor was updated. |
| `user_id` | Automatically generated identifier for the Visitor. |
| `utm_campaign` | The utm_campaign of the visitor. |
| `utm_content` | The utm_content of the visitor. |
| `utm_medium` | The utm_medium of the visitor. |
| `utm_source` | The utm_source of the visitor. |
| `utm_term` | The utm_term of the visitor. |

Operations: load, update.

API path: `/visitors`

#### WhatsappMessageStatus

| Field | Description |
| --- | --- |
| `details` | Detailed error information |
| `message` | Error message |

Operations: load.

API path: `/messages/whatsapp/status`

#### WhatsappMessageStatusList

| Field | Description |
| --- | --- |
| `conversation_id` | ID of the conversation |
| `created_at` | Creation timestamp |
| `id` | Event ID |
| `status` | Current status of the message |
| `template_name` | Name of the WhatsApp template used |
| `type` | Event type |
| `updated_at` | Last update timestamp |
| `whatsapp_message_id` | WhatsApp's message identifier |

Operations: list.

API path: `/messages/status`

#### Workflow

| Field | Description |
| --- | --- |
| `attributes` | Custom attributes defined for this workflow. |
| `created_at` | When the workflow was created. |
| `description` | The description of the workflow. |
| `embedded_rules` | Rules embedded within the workflow steps. |
| `id` | The unique identifier for the workflow. |
| `preferred_devices` | The preferred devices for this workflow. |
| `snapshot` | The current snapshot of workflow steps and configuration. |
| `state` | The current state of the workflow. |
| `target_channels` | The channels this workflow targets. |
| `targeting` | The targeting rules for this workflow. |
| `title` | The title of the workflow. |
| `trigger_type` | The type of trigger that starts this workflow. |
| `updated_at` | When the workflow was last updated. |

Operations: load.

API path: `/export/workflows/{id}`



## Entities


### ActivityLog

Create an instance: `const activity_log = client.ActivityLog()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_description` | `string` | A sentence or two describing the activity. |
| `activity_type` | `string` |  |
| `created_at` | `number` | The time the activity was created. |
| `id` | `string` | The id representing the activity. |
| `metadata` | `Object` | Additional data provided about Admin activity. |
| `performed_by` | `Object` | Details about the Admin involved in the activity. |

#### Example: List

```ts
const activity_logs = await client.ActivityLog().list({ created_at_after: "example" })
```


### ActivityLogEventType

Create an instance: `const activity_log_event_type = client.ActivityLogEventType()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `event_types` | `Array` | An array of activity log event type strings. |
| `type` | `string` | String representing the object's type. |

#### Example: List

```ts
const activity_log_event_types = await client.ActivityLogEventType().list()
```


### ActivityLogList

Create an instance: `const activity_log_list = client.ActivityLogList()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_logs` | `Array` | An array of activity logs |
| `created_at_after` | `number` | The start date that you request data for. |
| `created_at_before` | `number` | The end date that you request data for. |
| `event_types` | `Array` | An optional list of event types to filter activity logs by. |
| `page` | `number` | The page number of results to return. |
| `pages` | `Object` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `per_page` | `number` | The number of results per page. |
| `type` | `string` | String representing the object's type. |

#### Example: Create

```ts
const activity_log_list = await client.ActivityLogList().create({
  created_at_after: 1,
})
```


### Admin

Create an instance: `const admin = client.Admin()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `string` | Image for the associated team or teammate |
| `away_mode_enabled` | `boolean` | Identifies if this admin is currently set in away mode. |
| `away_mode_reassign` | `boolean` | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `away_status_reason_id` | `number` | The unique identifier of the away status reason |
| `email` | `string` | The email of the admin. |
| `has_inbox_seat` | `boolean` | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `id` | `string` | The id representing the admin. |
| `job_title` | `string` | The job title of the admin. |
| `name` | `string` | The name of the admin. |
| `role` | `Object` | The role assigned to this admin. |
| `team_ids` | `Array` | This object represents the avatar associated with the admin. |
| `team_priority_level` | `Object` | Admin priority levels for teams |
| `type` | `string` | String representing the object's type. |

#### Example: Load

```ts
const admin = await client.Admin().load({ id: 1 })
```

#### Example: List

```ts
const admins = await client.Admin().list()
```


### AdminWithApp

Create an instance: `const admin_with_app = client.AdminWithApp()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `Object` | App that the admin belongs to. |
| `avatar` | `Object` | This object represents the avatar associated with the admin. |
| `away_mode_enabled` | `boolean` | Identifies if this admin is currently set in away mode. |
| `away_mode_reassign` | `boolean` | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `email` | `string` | The email of the admin. |
| `email_verified` | `boolean` | Identifies if this admin's email is verified. |
| `has_inbox_seat` | `boolean` | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `id` | `string` | The id representing the admin. |
| `job_title` | `string` | The job title of the admin. |
| `name` | `string` | The name of the admin. |
| `team_ids` | `Array` | This is a list of ids of the teams that this admin is part of. |
| `type` | `string` | String representing the object's type. |

#### Example: List

```ts
const admin_with_apps = await client.AdminWithApp().list()
```


### AiCall

Create an instance: `const ai_call = client.AiCall()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `number` | The workspace identifier |
| `call_id` | `string` | External call identifier from the call provider |
| `call_summary` | `string` | Summary of the call conversation, truncated to 256 characters. |
| `call_transcript` | `Array` | Array of transcript entries for the call |
| `data` | `Object` | Additional metadata about the call |
| `external_call_id` | `string` | The external call identifier from the call provider |
| `id` | `number` | The unique identifier for the external reference |
| `intent` | `Array` | Array of intent classifications for the call |
| `intercom_call_id` | `string` | The Intercom call identifier, if the call has been matched |
| `intercom_conversation_id` | `string` | The Intercom conversation identifier, if a conversation has been created |
| `phone_number` | `string` | Phone number in E.164 format for the call |
| `source` | `string` | Source of the call. |
| `status` | `string` | Status of the call. |
| `user_phone_number` | `string` | Phone number in E.164 format for the call |

#### Example: Load

```ts
const ai_call = await client.AiCall().load({ conversation_id: 'conversation_id' })
```

#### Example: Create

```ts
const ai_call = await client.AiCall().create({
  call_id: 'example_call_id',
  phone_number: 'example_phone_number',
})
```


### AiContent

Create an instance: `const ai_content = client.AiContent()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Article

Create an instance: `const article = client.Article()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_chatbot_availability` | `boolean` | Whether the article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `boolean` | Whether the article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `boolean` | Whether the article should be available for AI Sales Agent. |
| `audience_ids` | `Array` | The list of audience IDs to assign to this article for Fin AI Agent targeting. |
| `author_id` | `number` | The id of the author of the article. |
| `body` | `string` | The content of the article in HTML. |
| `body_markdown` | `string` | The content of the article in markdown. |
| `conversions` | `number` | The number of conversations started from the article. |
| `created_at` | `number` | The time when the article was created. |
| `created_by_id` | `number` | The ID of the teammate who created the article. |
| `default_locale` | `string` | The default locale of the help center. |
| `description` | `string` | The description of the article. |
| `draft_updated_at` | `number` | The time, in seconds, when the staged draft was last edited, or `null` when there is no staged draft. |
| `exclude_from_article_suggestions` | `boolean` | Whether the article is excluded from Fin AI Agent article suggestions. |
| `fin_involvements` | `number` | The number of conversations in which Fin AI Agent used this article, summed across all of the article's locales. |
| `fin_resolution_rate` | `number` | The percentage of Fin AI Agent involvements that resulted in a resolution (fin_resolutions / fin_involvements * 100). |
| `fin_resolutions` | `number` | The number of conversations Fin AI Agent resolved using this article, summed across all of the article's locales. |
| `happy_reaction_percentage` | `number` | The percentage of happy reactions the article has received against other types of reaction. |
| `has_unpublished_changes` | `boolean` | Whether the published article has unpublished changes staged as a draft on top of its live content. |
| `help_center_audience` | `string` | The audience that can view this article in the Help Center. |
| `id` | `string` | The unique identifier for the article which is given by Intercom. |
| `neutral_reaction_percentage` | `number` | The percentage of neutral reactions the article has received against other types of reaction. |
| `parent_id` | `number` | The id of the article's parent collection or section. |
| `parent_ids` | `Array` | The ids of the article's parent collections or sections. |
| `parent_type` | `string` | The type of parent, which can either be a `collection` or `section`. |
| `reactions` | `number` | The number of total reactions the article has received. |
| `sad_reaction_percentage` | `number` | The percentage of sad reactions the article has received against |
| `scheduled_publish_at` | `string` | ISO 8601 timestamp at which to schedule a future publish of the article. |
| `scheduled_unpublish_at` | `string` | ISO 8601 timestamp at which to schedule a future unpublish of the article. |
| `state` | `string` | Whether the article will be `published` or will be a `draft`. |
| `tags` | `Object` | A list of tags objects associated with a conversation |
| `title` | `string` | The title of the article.For multilingual articles, this will be the title of the default language's content. |
| `translated_content` | `Object` | The Translated Content of an Article. |
| `type` | `string` | The type of object - `article_statistics`. |
| `updated_at` | `number` | The time when the article was last updated. |
| `updated_by_id` | `number` | The ID of the teammate who last updated the article. |
| `url` | `string` | The URL of the article. |
| `views` | `number` | The number of total views the article has received. |
| `workspace_id` | `string` | The id of the workspace which the article belongs to. |

#### Example: Load

```ts
const article = await client.Article().load({ id: 1 })
```

#### Example: List

```ts
const articles = await client.Article().list()
```

#### Example: Create

```ts
const article = await client.Article().create({
  author_id: 1,
  title: 'example_title',
})
```


### ArticleSearch

Create an instance: `const article_search = client.ArticleSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Object` | An object containing the results of the search. |
| `pages` | `Object` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `number` | The total number of Articles matching the search query |
| `type` | `string` | The type of the object - `list`. |

#### Example: Load

```ts
const article_search = await client.ArticleSearch().load()
```


### ArticleVersion

Create an instance: `const article_version = client.ArticleVersion()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `article_id` | `string` | The unique identifier of the article this version belongs to. |
| `author_id` | `string` | The id of the teammate listed as the article's author at this version. |
| `body` | `string` | The HTML body of the article at this version. |
| `body_markdown` | `string` | The Markdown body of the article at this version. |
| `created_at` | `number` | The time the version was created, as a UTC Unix timestamp. |
| `created_by_id` | `string` | The id of the teammate who created this version. |
| `created_via` | `string` | How this version was created (for example `web`, `api`). |
| `description` | `string` | The description of the article at this version. |
| `from_version_id` | `string` | The id of the version this version was created from, or `null` if this is the first version. |
| `id` | `string` | The unique identifier for the version. |
| `state` | `string` | Whether this version is the currently published version of the article (`published`) or an earlier non-live version (`draft`). |
| `title` | `string` | The title of the article at this version. |
| `type` | `string` | String representing the object's type. |
| `updated_at` | `number` | The time the version was last updated, as a UTC Unix timestamp. |

#### Example: Load

```ts
const article_version = await client.ArticleVersion().load({ id: 'article_version_id', article_id: 1 })
```


### ArticleVersionList

Create an instance: `const article_version_list = client.ArticleVersionList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```ts
const article_version_lists = await client.ArticleVersionList().list({ id: 1 })
```


### Audience

Create an instance: `const audience = client.Audience()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | The time the audience was created as a Unix timestamp. |
| `id` | `string` | The unique identifier representing the audience. |
| `name` | `string` | The name of the audience. |
| `predicates` | `Array` | The predicates that define which contacts belong to the audience. |
| `role_predicates` | `Array` | Role-based predicates that further filter audience membership by contact role. |
| `type` | `string` | The type of object. |
| `updated_at` | `number` | The time the audience was last updated as a Unix timestamp. |

#### Example: Load

```ts
const audience = await client.Audience().load({ id: 'audience_id' })
```

#### Example: List

```ts
const audiences = await client.Audience().list()
```

#### Example: Create

```ts
const audience = await client.Audience().create({
})
```


### AwayStatusReason

Create an instance: `const away_status_reason = client.AwayStatusReason()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | The Unix timestamp when the status reason was created |
| `deleted` | `boolean` | Whether the status reason has been soft deleted |
| `emoji` | `string` | The emoji associated with the status reason |
| `id` | `string` | The unique identifier for the away status reason |
| `label` | `string` | The display text for the away status reason |
| `order` | `number` | The display order of the status reason |
| `type` | `string` |  |
| `updated_at` | `number` | The Unix timestamp when the status reason was last updated |

#### Example: List

```ts
const away_status_reasons = await client.AwayStatusReason().list()
```


### Banner

Create an instance: `const banner = client.Banner()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `Object` | The action a contact can take on the banner, or `null` when the banner has no action. |
| `body` | `string` | The banner's body content as HTML. |
| `client_targeting` | `Array` | Reserved for future use. |
| `created_at` | `number` | The time the contact's view of this banner was created. |
| `id` | `string` | The id of the banner. |
| `position` | `string` | Where the banner is positioned. |
| `show_dismiss_button` | `boolean` | Whether the banner should display a dismiss control. |
| `style` | `string` | How the banner is displayed. |
| `title` | `string` | The banner's title. |
| `type` | `string` | String representing the object's type. |
| `view_id` | `string` | The id of the contact's view of this banner. |

#### Example: List

```ts
const banners = await client.Banner().list({ contact_id: "example" })
```


### BannerDismiss

Create an instance: `const banner_dismiss = client.BannerDismiss()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dismissed` | `boolean` | Whether the banner view is dismissed. |
| `id` | `string` |  |
| `type` | `string` | String representing the object's type. |
| `view_id` | `string` | The id of the dismissed banner view. |

#### Example: Create

```ts
const banner_dismiss = await client.BannerDismiss().create({
  contact_id: 'example_contact_id',
  id: 'example_id',
})
```


### Brand

Create an instance: `const brand = client.Brand()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Unix timestamp of brand creation |
| `default_address_settings_id` | `string` | Default email settings ID for this brand |
| `help_center_id` | `string` | Associated help center identifier |
| `id` | `string` | Unique brand identifier. |
| `is_default` | `boolean` | Whether this is the workspace's default brand |
| `name` | `string` | Display name of the brand |
| `type` | `string` | The type of object |
| `updated_at` | `number` | Unix timestamp of last modification |

#### Example: Load

```ts
const brand = await client.Brand().load({ id: 'brand_id' })
```

#### Example: List

```ts
const brands = await client.Brand().list()
```


### Call

Create an instance: `const call = client.Call()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_id` | `string` | The id of the admin associated with the call, if any. |
| `answered_at` | `*` |  |
| `call_type` | `string` | The type of call. |
| `contact_id` | `string` | The id of the contact associated with the call, if any. |
| `conversation_id` | `string` | The id of the conversation associated with the call, if any. |
| `created_at` | `*` |  |
| `direction` | `string` | The direction of the call. |
| `ended_at` | `*` |  |
| `ended_reason` | `string` | The reason for the call end, if applicable. |
| `fin_recording_url` | `string` | API URL to the AI Agent (Fin) call recording if available. |
| `fin_transcription_url` | `string` | API URL to the AI Agent (Fin) call transcript if available. |
| `id` | `string` | The id of the call. |
| `initiated_at` | `*` |  |
| `phone` | `string` | The phone number involved in the call, in E.164 format. |
| `recording_url` | `string` | API URL to download or redirect to the call recording if available. |
| `state` | `string` | The current state of the call. |
| `transcription_url` | `string` | API URL to download or redirect to the call transcript if available. |
| `type` | `string` | String representing the object's type. |
| `updated_at` | `*` |  |

#### Example: Load

```ts
const call = await client.Call().load({ id: 'call_id' })
```

#### Example: List

```ts
const calls = await client.Call().list()
```

#### Example: Create

```ts
const call = await client.Call().create({
})
```


### Company

Create an instance: `const company = client.Company()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `string` | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | The company id you have defined for the company. |
| `created_at` | `number` | The time the company was added in Intercom. |
| `custom_attributes` | `Object` | The custom attributes you have set on the company. |
| `id` | `string` | The Intercom defined id representing the company. |
| `industry` | `string` | The industry that the company operates in. |
| `last_request_at` | `number` | The time the company last recorded making a request. |
| `monthly_spend` | `number` | How much revenue the company generates for your business. |
| `name` | `string` | The name of the company. |
| `notes` | `Object` | The list of notes associated with the company |
| `plan` | `Object` | The name of the plan you have associated with the company. |
| `remote_created_at` | `number` | The time the company was created by you. |
| `segments` | `Object` | The list of segments associated with the company |
| `session_count` | `number` | How many sessions the company has recorded. |
| `size` | `number` | The number of employees in the company. |
| `tags` | `Object` | The list of tags associated with the company |
| `type` | `string` | Value is `company` |
| `update_last_request_at` | `boolean` | Set to true to update the company's last seen time to now. |
| `updated_at` | `number` | The last time the company was updated. |
| `user_count` | `number` | The number of users in the company. |
| `website` | `string` | The URL for the company website. |

#### Example: Load

```ts
const company = await client.Company().load({ id: 'company_id' })
```

#### Example: List

```ts
const companys = await client.Company().list()
```

#### Example: Create

```ts
const company = await client.Company().create({
})
```


### CompanyAttachedContact

Create an instance: `const company_attached_contact = client.CompanyAttachedContact()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `android_app_name` | `string` | The name of the Android app which the contact is using. |
| `android_app_version` | `string` | The version of the Android app which the contact is using. |
| `android_device` | `string` | The Android device which the contact is using. |
| `android_last_seen_at` | `number` | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `android_os_version` | `string` | The version of the Android OS which the contact is using. |
| `android_sdk_version` | `string` | The version of the Android SDK which the contact is using. |
| `avatar` | `Object` |  |
| `browser` | `string` | The name of the browser which the contact is using. |
| `browser_language` | `string` | The language set by the browser which the contact is using. |
| `browser_version` | `string` | The version of the browser which the contact is using. |
| `companies` | `Object` | An object with metadata about companies attached to a contact . |
| `created_at` | `number` | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `Object` | The custom attributes which are set for the contact. |
| `email` | `string` | The contact's email. |
| `email_domain` | `string` | The contact's email domain. |
| `external_id` | `string` | The unique identifier for the contact which is provided by the Client. |
| `has_hard_bounced` | `boolean` | Whether the contact has had an email sent to them hard bounce. |
| `id` | `string` | The unique identifier for the contact which is given by Intercom. |
| `ios_app_name` | `string` | The name of the iOS app which the contact is using. |
| `ios_app_version` | `string` | The version of the iOS app which the contact is using. |
| `ios_device` | `string` | The iOS device which the contact is using. |
| `ios_last_seen_at` | `number` | (Unix timestamp in seconds) The last time the contact used the iOS app. |
| `ios_os_version` | `string` | The version of iOS which the contact is using. |
| `ios_sdk_version` | `string` | The version of the iOS SDK which the contact is using. |
| `language_override` | `string` | A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change. |
| `last_contacted_at` | `number` | (Unix timestamp in seconds) The time when the contact was last messaged. |
| `last_email_clicked_at` | `number` | (Unix timestamp in seconds) The time when the contact last clicked a link in an email. |
| `last_email_opened_at` | `number` | (Unix timestamp in seconds) The time when the contact last opened an email. |
| `last_replied_at` | `number` | (Unix timestamp in seconds) The time when the contact last messaged in. |
| `last_seen_at` | `number` | (Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually). |
| `location` | `Object` | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `boolean` | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `Array` | A list of contacts that were merged into this contact. |
| `name` | `string` | The contacts name. |
| `notes` | `Object` | An object containing notes meta data about the notes that a contact has. |
| `os` | `string` | The operating system which the contact is using. |
| `owner_id` | `string` | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `string` | The contacts phone. |
| `role` | `string` | The role of the contact. |
| `signed_up_at` | `number` | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `Object` | An object containing social profiles that a contact has. |
| `tags` | `Object` | An object containing tags meta data about the tags that a contact has. |
| `type` | `string` | The type of object. |
| `unsubscribed_from_emails` | `boolean` | Whether the contact is unsubscribed from emails. |
| `updated_at` | `number` | (Unix timestamp in seconds) The time when the contact was last updated. |
| `workspace_id` | `string` | The id of the workspace which the contact belongs to. |

#### Example: List

```ts
const company_attached_contacts = await client.CompanyAttachedContact().list({ id: "example" })
```


### CompanyAttachedSegment

Create an instance: `const company_attached_segment = client.CompanyAttachedSegment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | The number of items in the user segment. |
| `created_at` | `number` | The time the segment was created. |
| `id` | `string` | The unique identifier representing the segment. |
| `name` | `string` | The name of the segment. |
| `person_type` | `string` | Type of the contact: contact (lead) or user. |
| `type` | `string` | The type of object. |
| `updated_at` | `number` | The time the segment was updated. |

#### Example: List

```ts
const company_attached_segments = await client.CompanyAttachedSegment().list({ id: "example" })
```


### CompanyList

Create an instance: `const company_list = client.CompanyList()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` | An array containing Company Objects. |
| `pages` | `Object` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `number` | The total number of companies. |
| `type` | `string` | The type of object - `list`. |

#### Example: Create

```ts
const company_list = await client.CompanyList().create({
})
```


### CompanyScroll

Create an instance: `const company_scroll = client.CompanyScroll()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `string` | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | The company id you have defined for the company. |
| `created_at` | `number` | The time the company was added in Intercom. |
| `custom_attributes` | `Object` | The custom attributes you have set on the company. |
| `id` | `string` | The Intercom defined id representing the company. |
| `industry` | `string` | The industry that the company operates in. |
| `last_request_at` | `number` | The time the company last recorded making a request. |
| `monthly_spend` | `number` | How much revenue the company generates for your business. |
| `name` | `string` | The name of the company. |
| `notes` | `Object` | The list of notes associated with the company |
| `plan` | `Object` |  |
| `remote_created_at` | `number` | The time the company was created by you. |
| `segments` | `Object` | The list of segments associated with the company |
| `session_count` | `number` | How many sessions the company has recorded. |
| `size` | `number` | The number of employees in the company. |
| `tags` | `Object` | The list of tags associated with the company |
| `type` | `string` | Value is `company` |
| `updated_at` | `number` | The last time the company was updated. |
| `user_count` | `number` | The number of users in the company. |
| `website` | `string` | The URL for the company website. |

#### Example: List

```ts
const company_scrolls = await client.CompanyScroll().list()
```


### Contact

Create an instance: `const contact = client.Contact()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `android_app_name` | `string` | The name of the Android app which the contact is using. |
| `android_app_version` | `string` | The version of the Android app which the contact is using. |
| `android_device` | `string` | The Android device which the contact is using. |
| `android_last_seen_at` | `number` | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `android_os_version` | `string` | The version of the Android OS which the contact is using. |
| `android_sdk_version` | `string` | The version of the Android SDK which the contact is using. |
| `avatar` | `Object` |  |
| `browser` | `string` | The name of the browser which the contact is using. |
| `browser_language` | `string` | The language set by the browser which the contact is using. |
| `browser_version` | `string` | The version of the browser which the contact is using. |
| `companies` | `Object` | An object with metadata about companies attached to a contact . |
| `created_at` | `number` | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `Object` | The custom attributes which are set for the contact. |
| `email` | `string` | The contact's email. |
| `email_domain` | `string` | The contact's email domain. |
| `enabled_push_messaging` | `boolean` | If the user has enabled push messaging. |
| `external_id` | `string` | The unique identifier for the contact which is provided by the Client. |
| `has_hard_bounced` | `boolean` | Whether the contact has had an email sent to them hard bounce. |
| `id` | `string` | The unique identifier for the contact which is given by Intercom. |
| `ios_app_name` | `string` | The name of the iOS app which the contact is using. |
| `ios_app_version` | `string` | The version of the iOS app which the contact is using. |
| `ios_device` | `string` | The iOS device which the contact is using. |
| `ios_last_seen_at` | `number` | (Unix timestamp in seconds) The last time the contact used the iOS app. |
| `ios_os_version` | `string` | The version of iOS which the contact is using. |
| `ios_sdk_version` | `string` | The version of the iOS SDK which the contact is using. |
| `language_override` | `string` | A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change. |
| `last_contacted_at` | `number` | (Unix timestamp in seconds) The time when the contact was last messaged. |
| `last_email_clicked_at` | `number` | (Unix timestamp in seconds) The time when the contact last clicked a link in an email. |
| `last_email_opened_at` | `number` | (Unix timestamp in seconds) The time when the contact last opened an email. |
| `last_replied_at` | `number` | (Unix timestamp in seconds) The time when the contact last messaged in. |
| `last_seen_at` | `number` | (Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually). |
| `location` | `Object` | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `boolean` | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `Array` | A list of contacts that were merged into this contact. |
| `name` | `string` | The contacts name. |
| `notes` | `Object` | An object containing notes meta data about the notes that a contact has. |
| `os` | `string` | The operating system which the contact is using. |
| `owner_id` | `string` | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `string` | The contacts phone. |
| `role` | `string` | The role of the contact. |
| `signed_up_at` | `number` | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `Object` | An object containing social profiles that a contact has. |
| `tags` | `Object` | An object containing tags meta data about the tags that a contact has. |
| `type` | `string` | The type of object. |
| `unsubscribed_from_emails` | `boolean` | Whether the contact is unsubscribed from emails. |
| `updated_at` | `number` | (Unix timestamp in seconds) The time when the contact was last updated. |
| `user` | `Object` | The unique identifiers retained after converting or merging. |
| `visitor` | `Object` | The unique identifiers to convert a single Visitor. |
| `workspace_id` | `string` | The id of the workspace which the contact belongs to. |

#### Example: Load

```ts
const contact = await client.Contact().load({ id: 'contact_id' })
```

#### Example: List

```ts
const contacts = await client.Contact().list()
```

#### Example: Create

```ts
const contact = await client.Contact().create({
  user: {},
  visitor: {},
})
```


### ContactAttachedCompany

Create an instance: `const contact_attached_company = client.ContactAttachedCompany()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `string` | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | The company id you have defined for the company. |
| `created_at` | `number` | The time the company was added in Intercom. |
| `custom_attributes` | `Object` | The custom attributes you have set on the company. |
| `id` | `string` | The Intercom defined id representing the company. |
| `industry` | `string` | The industry that the company operates in. |
| `last_request_at` | `number` | The time the company last recorded making a request. |
| `monthly_spend` | `number` | How much revenue the company generates for your business. |
| `name` | `string` | The name of the company. |
| `notes` | `Object` | The list of notes associated with the company |
| `plan` | `Object` |  |
| `remote_created_at` | `number` | The time the company was created by you. |
| `segments` | `Object` | The list of segments associated with the company |
| `session_count` | `number` | How many sessions the company has recorded. |
| `size` | `number` | The number of employees in the company. |
| `tags` | `Object` | The list of tags associated with the company |
| `type` | `string` | Value is `company` |
| `updated_at` | `number` | The last time the company was updated. |
| `user_count` | `number` | The number of users in the company. |
| `website` | `string` | The URL for the company website. |

#### Example: List

```ts
const contact_attached_companys = await client.ContactAttachedCompany().list({ id: "example" })
```


### ContactList

Create an instance: `const contact_list = client.ContactList()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` | The list of contact objects |
| `pages` | `Object` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `Object` |  |
| `query` | `*` |  |
| `sort` | `Object` | An optional object to sort the results by. |
| `total_count` | `number` | A count of the total number of objects. |
| `type` | `string` | Always list |

#### Example: Create

```ts
const contact_list = await client.ContactList().create({
  query: 'example_query',
})
```


### ContactSegment

Create an instance: `const contact_segment = client.ContactSegment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | The number of items in the user segment. |
| `created_at` | `number` | The time the segment was created. |
| `id` | `string` | The unique identifier representing the segment. |
| `name` | `string` | The name of the segment. |
| `person_type` | `string` | Type of the contact: contact (lead) or user. |
| `type` | `string` | The type of object. |
| `updated_at` | `number` | The time the segment was updated. |

#### Example: List

```ts
const contact_segments = await client.ContactSegment().list({ id: "example" })
```


### Content

Create an instance: `const content = client.Content()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const content = await client.Content().create({
})
```


### ContentImportSource

Create an instance: `const content_import_source = client.ContentImportSource()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apply_audience_to_existing_content` | `boolean` | When true, the audience will be applied to all existing external pages belonging to this content import source. |
| `audience_ids` | `Array` | The unique identifiers for the audiences associated with this content import source. |
| `created_at` | `number` | The time when the content import source was created. |
| `id` | `number` | The unique identifier for the content import source which is given by Intercom. |
| `last_synced_at` | `number` | The time when the content import source was last synced. |
| `status` | `string` | The status of the content import source. |
| `sync_behavior` | `string` | If you intend to create or update External Pages via the API, this should be set to `api`. |
| `type` | `string` | Always external_page |
| `updated_at` | `number` | The time when the content import source was last updated. |
| `url` | `string` | The URL of the root of the external source. |

#### Example: Load

```ts
const content_import_source = await client.ContentImportSource().load({ id: 'content_import_source_id' })
```

#### Example: List

```ts
const content_import_sources = await client.ContentImportSource().list()
```

#### Example: Create

```ts
const content_import_source = await client.ContentImportSource().create({
  created_at: 1,
  id: 1,
  last_synced_at: 1,
  status: 'example_status',
  sync_behavior: 'example_sync_behavior',
  type: 'example_type',
  updated_at: 1,
  url: 'example_url',
})
```


### ContentSearch

Create an instance: `const content_search = client.ContentSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` | The list of matched content items. |
| `pages` | `Object` | Pagination metadata, including links to neighbouring pages. |
| `total_count` | `number` | Total number of results matching the query. |
| `type` | `string` | Always `list`. |

#### Example: List

```ts
const content_searchs = await client.ContentSearch().list()
```


### ContentSnippet

Create an instance: `const content_snippet = client.ContentSnippet()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_chatbot_availability` | `boolean` | Whether the content snippet is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `boolean` | Whether the content snippet is available for AI Copilot. |
| `ai_sales_agent_availability` | `boolean` | Whether the content snippet is available for AI Sales Agent. |
| `audience_ids` | `Array` | The list of audience IDs this content snippet is targeted to for Fin AI Agent. |
| `body_markdown` | `string` | The body of the content snippet in markdown. |
| `chatbot_availability` | `number` | Deprecated. |
| `copilot_availability` | `number` | Deprecated. |
| `created_at` | `number` | The time the snippet was created as a UNIX timestamp. |
| `id` | `string` | The unique identifier for the content snippet. |
| `json_blocks` | `Array` | The content blocks that make up the body of the snippet. |
| `locale` | `string` | The locale of the content snippet. |
| `title` | `string` | The title of the content snippet. |
| `type` | `string` | String representing the object's type. |
| `updated_at` | `number` | The time the snippet was last updated as a UNIX timestamp. |

#### Example: Load

```ts
const content_snippet = await client.ContentSnippet().load({ id: 'content_snippet_id' })
```

#### Example: List

```ts
const content_snippets = await client.ContentSnippet().list()
```

#### Example: Create

```ts
const content_snippet = await client.ContentSnippet().create({
})
```


### Conversation

Create an instance: `const conversation = client.Conversation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_assignee_id` | `number` | The id of the admin assigned to the conversation. |
| `ai_agent` | `Object` | Data related to AI Agent involvement in the conversation. |
| `ai_agent_participated` | `boolean` | Indicates whether the AI Agent participated in the conversation. |
| `attachment_urls` | `Array` | A list of image URLs that will be added as attachments. |
| `body` | `string` | The content of the message. |
| `brand_id` | `string` | The unique identifier of the brand to associate with this conversation. |
| `channel` | `Object` | The channel through which the conversation was initiated and its current channel. |
| `company` | `Object` | The company associated with the conversation. |
| `company_id` | `string` | The ID of the company that the conversation is associated with. |
| `contacts` | `Object` | The list of contacts (users or leads) involved in this conversation. |
| `conversation_id` | `string` | The unique identifier (given by Intercom) for the conversation or customer ticket to link to the tracker ticket. |
| `conversation_parts` | `Object` | A list of Conversation Part objects for each part message in the conversation. |
| `conversation_rating` | `Object` | The Conversation Rating object which contains information on the rating and/or remark added by a Contact and the Admin assigned to the conversation. |
| `created_at` | `number` | The time the conversation was created. |
| `custom_attributes` | `Object` | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `external_references` | `Array` | References linking this conversation to records in an external helpdesk or CRM system. |
| `first_contact_reply` | `Object` | An object containing information on the first users message. |
| `from` | `Object` |  |
| `id` | `string` | The id representing the conversation. |
| `linked_objects` | `Object` | An object containing metadata about linked conversations and linked tickets. |
| `monitor_evaluations` | `Array` | QA monitor evaluations that flagged this conversation. |
| `open` | `boolean` | Indicates whether a conversation is open (true) or closed (false). |
| `priority` | `string` | The priority level of the conversation. |
| `read` | `boolean` | Indicates whether a conversation has been read. |
| `sales_agent` | `Object` | Data related to Sales Agent involvement in the conversation. |
| `sales_agent_participated` | `boolean` | Indicates whether the Sales Agent participated in the conversation. |
| `scorecards` | `Array` | QA scorecard results for this conversation. |
| `sla_applied` | `Object` | The SLA Applied object contains the details for which SLA has been applied to this conversation. |
| `snoozed_until` | `number` | If set this is the time in the future when this conversation will be marked as open. |
| `source` | `Object` | The type of the conversation part that started this conversation. |
| `state` | `string` | Can be set to "open", "closed" or "snoozed". |
| `statistics` | `Object` | A Statistics object containing all information required for reporting, with timestamps and calculated metrics. |
| `subject` | `string` | The title of the email. |
| `tags` | `Object` | A list of tags objects associated with a conversation |
| `team_assignee_id` | `number` | The id of the team assigned to the conversation. |
| `teammates` | `Object` | The list of teammates who participated in the conversation (wrote at least one conversation part). |
| `title` | `string` | The title given to the conversation. |
| `type` | `string` | Always conversation. |
| `updated_at` | `number` | The last time the conversation was updated. |
| `waiting_since` | `number` | The last time a Contact responded to an Admin. |

#### Example: Load

```ts
const conversation = await client.Conversation().load({ id: 1 })
```

#### Example: List

```ts
const conversations = await client.Conversation().list()
```

#### Example: Create

```ts
const conversation = await client.Conversation().create({
  body: 'example_body',
  conversation_id: 'example_conversation_id',
  from: {},
})
```


### ConversationAttribute

Create an instance: `const conversation_attribute = client.ConversationAttribute()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_id` | `string` |  |
| `archived` | `boolean` |  |
| `created_at` | `number` |  |
| `data_type` | `string` |  |
| `description` | `string` | Readable description of the attribute. |
| `id` | `number` |  |
| `label` | `string` | The label for the new option. |
| `multiline` | `boolean` | (String data type only) Whether this string attribute is multiline. |
| `name` | `string` | Name of the attribute. |
| `reference` | `Object` | (Relationship data type only) Reference configuration for related objects. |
| `required` | `boolean` | Whether this attribute is required. |
| `type` | `string` |  |
| `updated_at` | `number` |  |
| `visible_to_team_ids` | `Array` | Team IDs that can see this attribute. |

#### Example: Load

```ts
const conversation_attribute = await client.ConversationAttribute().load({ id: 1 })
```

#### Example: Create

```ts
const conversation_attribute = await client.ConversationAttribute().create({
  label: 'example_label',
  reference: {},
})
```


### ConversationAttributeList

Create an instance: `const conversation_attribute_list = client.ConversationAttributeList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` | A list of conversation attributes. |
| `type` | `string` | The type of the object. |

#### Example: List

```ts
const conversation_attribute_lists = await client.ConversationAttributeList().list()
```


### ConversationList

Create an instance: `const conversation_list = client.ConversationList()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversations` | `Array` | The list of conversation objects |
| `pages` | `Object` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `Object` |  |
| `query` | `*` |  |
| `total_count` | `number` | A count of the total number of objects. |
| `type` | `string` | Always conversation.list |

#### Example: Create

```ts
const conversation_list = await client.ConversationList().create({
  query: 'example_query',
})
```


### ConversationParticipant

Create an instance: `const conversation_participant = client.ConversationParticipant()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```ts
const conversation_participant = await client.ConversationParticipant().create({
  id: 'example_id',
})
```


### CustomObjectInstance

Create an instance: `const custom_object_instance = client.CustomObjectInstance()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` |  |
| `custom_attributes` | `Object` | The custom attributes which are set for the Custom Object instance. |
| `data` | `Array` | An array of Custom Object Instance objects. |
| `external_created_at` | `string` | The time when the Custom Object instance was created in the external system it originated from. |
| `external_id` | `string` | A unique identifier for the Custom Object instance in the external system it originated from. |
| `external_updated_at` | `string` | The time when the Custom Object instance was last updated in the external system it originated from. |
| `id` | `string` |  |
| `pages` | `Object` | The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests. |
| `total_count` | `number` | A count of the total number of custom object instances. |
| `type` | `string` | The type of the object - `list`. |
| `updated_at` | `number` |  |

#### Example: Load

```ts
const custom_object_instance = await client.CustomObjectInstance().load({ id: 'custom_object_instance_id' })
```

#### Example: Create

```ts
const custom_object_instance = await client.CustomObjectInstance().create({
  id: 'example_id',
})
```


### Data

Create an instance: `const data = client.Data()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at_after` | `number` | The start date that you request data for. |
| `created_at_before` | `number` | The end date that you request data for. |
| `download_expires_at` | `string` | The time after which you will not be able to access the data. |
| `download_url` | `string` | The location where you can download your data. |
| `id` | `string` |  |
| `job_identifier` | `string` | The identifier for your job. |
| `status` | `string` | The current state of your job. |

#### Example: Load

```ts
const data = await client.Data().load({ id: 'data_id' })
```

#### Example: Create

```ts
const data = await client.Data().create({
  created_at_after: 1,
  created_at_before: 1,
})
```


### DataAttribute

Create an instance: `const data_attribute = client.DataAttribute()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_id` | `string` | Teammate who created the attribute. |
| `api_writable` | `boolean` | Can this attribute be updated through API |
| `archived` | `boolean` | Is this attribute archived. |
| `created_at` | `number` | The time the attribute was created as a UTC Unix timestamp |
| `custom` | `boolean` | Set to true if this is a CDA |
| `data_type` | `string` | The data type of the attribute. |
| `description` | `string` | Readable description of the attribute. |
| `full_name` | `string` | Full name of the attribute. |
| `id` | `number` | The unique identifier for the data attribute which is given by Intercom. |
| `label` | `string` | Readable name of the attribute (i.e. |
| `messenger_writable` | `boolean` | Can this attribute be updated by the Messenger |
| `model` | `string` | Value is `contact` for user/lead attributes and `company` for company attributes. |
| `name` | `string` | Name of the attribute. |
| `options` | `Array` | List of predefined options for attribute value. |
| `type` | `string` | Value is `data_attribute`. |
| `ui_writable` | `boolean` | Can this attribute be updated in the UI |
| `updated_at` | `number` | The time the attribute was last updated as a UTC Unix timestamp |

#### Example: List

```ts
const data_attributes = await client.DataAttribute().list()
```

#### Example: Create

```ts
const data_attribute = await client.DataAttribute().create({
})
```


### DataConnector

Create an instance: `const data_connector = client.DataConnector()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audiences` | `Array` | The audience types this connector targets. |
| `body` | `string` | The request body template. |
| `bypass_authentication` | `boolean` | Whether authentication is bypassed for this connector. |
| `client_function_name` | `string` | The name of the client-side function, if applicable. |
| `client_function_timeout_ms` | `number` | Timeout in milliseconds for the client function, if applicable. |
| `configuration_response_type` | `string` | The expected response format from the connector. |
| `created_at` | `string` | The time the data connector was created. |
| `created_by_admin_id` | `string` | The ID of the admin who created this connector. |
| `customer_authentication` | `boolean` | Whether OTP authentication is enabled for this connector. |
| `data_inputs` | `Array` | The input parameters accepted by this data connector. |
| `data_transformation_type` | `string` | The type of data transformation applied to the response. |
| `description` | `string` | A description of what this data connector does. |
| `direct_fin_usage` | `boolean` | Whether this connector is used directly by Fin. |
| `execution_results_url` | `string` | The URL path to fetch execution results for this connector. |
| `execution_type` | `string` | How the connector executes. |
| `headers` | `Array` | HTTP headers for the request. |
| `http_method` | `string` | The HTTP method used by the data connector. |
| `id` | `string` | The unique identifier for the data connector. |
| `mock_response` | `Object` | A sample JSON response from the external API. |
| `name` | `string` | The name of the data connector. |
| `object_mappings` | `Array` | Mappings from connector response objects to Intercom objects. |
| `response_fields` | `Array` | The fields returned in the connector response. |
| `state` | `string` | The current state of the data connector. |
| `token_ids` | `Array` | IDs of authentication tokens associated with this connector. |
| `type` | `string` | The type of object - `data_connector`. |
| `updated_at` | `string` | The time the data connector was last updated. |
| `updated_by_admin_id` | `string` | The ID of the admin who last updated this connector. |
| `url` | `string` | The URL of the external API endpoint. |
| `validate_missing_attributes` | `boolean` | Whether to validate missing attributes before execution. |

#### Example: Load

```ts
const data_connector = await client.DataConnector().load({ id: 'data_connector_id' })
```

#### Example: List

```ts
const data_connectors = await client.DataConnector().list()
```

#### Example: Create

```ts
const data_connector = await client.DataConnector().create({
})
```


### DataConnectorExecutionResult

Create an instance: `const data_connector_execution_result = client.DataConnectorExecutionResult()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversation_id` | `string` | The conversation associated with this execution, if any. |
| `created_at` | `string` | The time the execution occurred. |
| `data_connector_id` | `string` | The unique identifier of the data connector that produced this result. |
| `error_message` | `string` | A human-readable error message. |
| `error_type` | `string` | The type of error that occurred, if any. |
| `execution_time_ms` | `number` | The execution time in milliseconds. |
| `http_method` | `string` | The HTTP method used for the request. |
| `http_status` | `number` | The HTTP status code returned by the external API. |
| `id` | `string` | The unique identifier for the execution result. |
| `raw_response_body` | `string` | The raw (unmapped) response body. |
| `request_body` | `string` | The request body sent to the external API. |
| `request_url` | `string` | The request URL. |
| `response_body` | `string` | The response body from the external API. |
| `source_id` | `string` | The identifier of the source that triggered this execution. |
| `source_type` | `string` | The type of source that triggered this execution. |
| `success` | `boolean` | Whether the execution was successful. |
| `type` | `string` | The type of object - `data_connector.execution`. |

#### Example: Load

```ts
const data_connector_execution_result = await client.DataConnectorExecutionResult().load({ id: 'data_connector_execution_result_id', data_connector_id: 'data_connector_id' })
```


### DataConnectorExecutionResultList

Create an instance: `const data_connector_execution_result_list = client.DataConnectorExecutionResultList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```ts
const data_connector_execution_result_lists = await client.DataConnectorExecutionResultList().list({ id: "example" })
```


### DataEvent

Create an instance: `const data_event = client.DataEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | The time the event occurred as a UTC Unix timestamp |
| `email` | `string` | An email address for your user. |
| `event_name` | `string` | The name of the event that occurred. |
| `event_summaries` | `Object` | A list of event summaries for the user. |
| `id` | `string` | The unique identifier for the contact (lead or user) which is given by Intercom. |
| `metadata` | `Object` | Optional metadata about the event. |
| `user_id` | `string` | Your identifier for the user. |

#### Example: Create

```ts
const data_event = await client.DataEvent().create({
})
```


### DataEventSummary

Create an instance: `const data_event_summary = client.DataEventSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | The number of times the event was sent |
| `description` | `string` | The description of the event |
| `first` | `string` | The first time the event was sent |
| `last` | `string` | The last time the event was sent |
| `name` | `string` | The name of the event |

#### Example: List

```ts
const data_event_summarys = await client.DataEventSummary().list({ filter: {}, type: "example" })
```


### DataExport

Create an instance: `const data_export = client.DataExport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `download_expires_at` | `string` | The time after which you will not be able to access the data. |
| `download_url` | `string` | The location where you can download your data. |
| `job_identifier` | `string` | The identifier for your job. |
| `status` | `string` | The current state of your job. |

#### Example: Create

```ts
const data_export = await client.DataExport().create({
  job_identifier: 'example_job_identifier',
})
```


### Deleted

Create an instance: `const deleted = client.Deleted()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deleted_at` | `number` | The time when the conversation was deleted. |
| `id` | `string` | The ID of the deleted conversation. |
| `metrics_retained` | `boolean` | Whether reporting metrics are retained for this conversation ID |
| `type` | `string` | String representing the object's type. |

#### Example: List

```ts
const deleteds = await client.Deleted().list()
```


### DeletedArticleObject

Create an instance: `const deleted_article_object = client.DeletedArticleObject()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DeletedCompanyObject

Create an instance: `const deleted_company_object = client.DeletedCompanyObject()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DeletedDataConnectorObject

Create an instance: `const deleted_data_connector_object = client.DeletedDataConnectorObject()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedInternalArticleObject

Create an instance: `const deleted_internal_article_object = client.DeletedInternalArticleObject()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_chatbot_availability` | `boolean` | Whether the internal article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `boolean` | Whether the internal article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `boolean` | Whether the internal article should be available for AI Sales Agent. |
| `audience_ids` | `Array` | The list of audience IDs to target this internal article to for Fin AI Agent. |
| `author_id` | `number` | The id of the author of the article. |
| `body` | `string` | The content of the article in HTML. |
| `body_markdown` | `string` | The content of the article in markdown. |
| `created_at` | `number` | The time when the article was created. |
| `id` | `string` | The unique identifier for the article which is given by Intercom. |
| `locale` | `string` | The default locale of the article. |
| `owner_id` | `number` | The id of the owner of the article. |
| `title` | `string` | The title of the article. |
| `type` | `string` | The type of object - `internal_article`. |
| `updated_at` | `number` | The time when the article was last updated. |

#### Example: List

```ts
const deleted_internal_article_objects = await client.DeletedInternalArticleObject().list()
```

#### Example: Create

```ts
const deleted_internal_article_object = await client.DeletedInternalArticleObject().create({
  author_id: 1,
  owner_id: 1,
  title: 'example_title',
})
```


### DeletedObject

Create an instance: `const deleted_object = client.DeletedObject()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Email

Create an instance: `const email = client.Email()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `brand_id` | `string` | Associated brand identifier |
| `created_at` | `number` | Unix timestamp of creation |
| `domain` | `string` | Domain portion of the email address |
| `email` | `string` | Full sender email address |
| `forwarded_email_last_received_at` | `number` | Unix timestamp of last forwarded email received (null if never) |
| `forwarding_enabled` | `boolean` | Whether email forwarding is active |
| `id` | `string` | Unique email setting identifier |
| `type` | `string` | The type of object |
| `updated_at` | `number` | Unix timestamp of last modification |
| `verified` | `boolean` | Whether the email address has been verified |

#### Example: Load

```ts
const email = await client.Email().load({ id: 'email_id' })
```

#### Example: List

```ts
const emails = await client.Email().list()
```


### ExternalPage

Create an instance: `const external_page = client.ExternalPage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_agent_availability` | `boolean` | Whether the external page should be used to answer questions by AI Agent. |
| `ai_copilot_availability` | `boolean` | Whether the external page should be used to answer questions by AI Copilot. |
| `ai_sales_agent_availability` | `boolean` | Whether the external page should be used to answer questions by AI Sales Agent. |
| `created_at` | `number` | The time when the external page was created. |
| `external_id` | `string` | The identifier for the external page which was given by the source. |
| `fin_availability` | `boolean` | Deprecated. |
| `html` | `string` | The body of the external page in HTML. |
| `id` | `string` | The unique identifier for the external page which is given by Intercom. |
| `last_ingested_at` | `number` | The time when the external page was last ingested. |
| `locale` | `string` | Always en |
| `source_id` | `number` | The unique identifier for the source of the external page which was given by Intercom. |
| `title` | `string` | The title of the external page. |
| `type` | `string` | Always external_page |
| `updated_at` | `number` | The time when the external page was last updated. |
| `url` | `string` | The URL of the external page. |

#### Example: Load

```ts
const external_page = await client.ExternalPage().load({ id: 'external_page_id' })
```

#### Example: List

```ts
const external_pages = await client.ExternalPage().list()
```

#### Example: Create

```ts
const external_page = await client.ExternalPage().create({
  ai_agent_availability: true,
  ai_copilot_availability: true,
  created_at: 1,
  external_id: 'example_external_id',
  html: 'example_html',
  id: 'example_id',
  last_ingested_at: 1,
  locale: 'example_locale',
  source_id: 1,
  title: 'example_title',
  type: 'example_type',
  updated_at: 1,
})
```


### FinAgent

Create an instance: `const fin_agent = client.FinAgent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `Array` | An array of attachments to include with the message. |
| `conversation` | `Object` | Conversation-related attribute errors. |
| `conversation_id` | `string` | The external ID of the rated conversation. |
| `conversation_metadata` | `Object` | Metadata about the conversation, including history and attributes. |
| `message` | `Object` | A message exchanged within a Fin Agent conversation. |
| `rating` | `string` | The rating now recorded on the conversation. |
| `remark` | `string` | Optional free-text comment the user left alongside the rating. |
| `status` | `string` | The result of the submission. |
| `user` | `Object` | User-related attribute errors. |

#### Example: Create

```ts
const fin_agent = await client.FinAgent().create({
  message: {},
})
```


### HandlingEvent

Create an instance: `const handling_event = client.HandlingEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `reason` | `string` | Optional reason for the event (e.g., "Paused", "Away") |
| `teammate` | `Object` | A reference to a teammate |
| `timestamp` | `string` | ISO8601 timestamp when the event occurred |
| `type` | `string` | The type of handling event |

#### Example: List

```ts
const handling_events = await client.HandlingEvent().list({ conversation_id: "example" })
```


### HelpCenter

Create an instance: `const help_center = client.HelpCenter()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ar` | `Object` | The content of the group in Arabic |
| `bg` | `Object` | The content of the group in Bulgarian |
| `bs` | `Object` | The content of the group in Bosnian |
| `ca` | `Object` | The content of the group in Catalan |
| `created_at` | `number` | The time when the Help Center was created. |
| `cs` | `Object` | The content of the group in Czech |
| `custom_domain` | `string` | Custom domain configured for the help center |
| `da` | `Object` | The content of the group in Danish |
| `de` | `Object` | The content of the group in German |
| `default` | `boolean` | Whether this help center is the default for the workspace. |
| `description` | `string` | The description of the collection. |
| `display_name` | `string` | The display name of the Help Center only seen by teammates. |
| `el` | `Object` | The content of the group in Greek |
| `en` | `Object` | The content of the group in English |
| `es` | `Object` | The content of the group in Spanish |
| `et` | `Object` | The content of the group in Estonian |
| `fi` | `Object` | The content of the group in Finnish |
| `fr` | `Object` | The content of the group in French |
| `from_url` | `string` | The source URL that is redirected. |
| `he` | `Object` | The content of the group in Hebrew |
| `help_center_id` | `string` | The unique identifier for the help center the redirect belongs to. |
| `hr` | `Object` | The content of the group in Croatian |
| `hu` | `Object` | The content of the group in Hungarian |
| `id` | `Object` | The content of the group in Indonesian |
| `identifier` | `string` | The identifier of the Help Center. |
| `it` | `Object` | The content of the group in Italian |
| `ja` | `Object` | The content of the group in Japanese |
| `ko` | `Object` | The content of the group in Korean |
| `locale` | `string` | The locale of the redirect's target. |
| `locales` | `Array` | The locales in which the help center is available. |
| `lt` | `Object` | The content of the group in Lithuanian |
| `lv` | `Object` | The content of the group in Latvian |
| `mn` | `Object` | The content of the group in Mongolian |
| `name` | `string` | The name of the collection. |
| `nb` | `Object` | The content of the group in Norwegian |
| `nl` | `Object` | The content of the group in Dutch |
| `parent_id` | `string` | The id of the parent collection. |
| `pl` | `Object` | The content of the group in Polish |
| `pt` | `Object` | The content of the group in Portuguese (Portugal) |
| `ptBR` | `Object` | The content of the group in Portuguese (Brazil) |
| `ro` | `Object` | The content of the group in Romanian |
| `ru` | `Object` | The content of the group in Russian |
| `sl` | `Object` | The content of the group in Slovenian |
| `sr` | `Object` | The content of the group in Serbian |
| `sv` | `Object` | The content of the group in Swedish |
| `target_id` | `string` | The unique identifier of the target article or collection. |
| `target_type` | `string` | The type of the redirect target. |
| `tr` | `Object` | The content of the group in Turkish |
| `translated_content` | `Object` | The Translated Content of an Group. |
| `type` | `string` | The type of object - group_translated_content. |
| `updated_at` | `number` | The time when the Help Center was last updated. |
| `url` | `string` | The URL for the help center, if you have a custom domain then this will show the URL using the custom domain. |
| `vi` | `Object` | The content of the group in Vietnamese |
| `website_turned_on` | `boolean` | Whether the Help Center is turned on or not. |
| `workspace_id` | `string` | The id of the workspace which the Help Center belongs to. |
| `zhCN` | `Object` | The content of the group in Chinese (China) |
| `zhTW` | `Object` | The content of the group in Chinese (Taiwan) |

#### Example: Load

```ts
const help_center = await client.HelpCenter().load({ collection_id: 1 })
```

#### Example: List

```ts
const help_centers = await client.HelpCenter().list()
```

#### Example: Create

```ts
const help_center = await client.HelpCenter().create({
})
```


### InternalArticle

Create an instance: `const internal_article = client.InternalArticle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_chatbot_availability` | `boolean` | Whether the internal article is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `boolean` | Whether the internal article is available for AI Copilot. |
| `ai_sales_agent_availability` | `boolean` | Whether the internal article is available for AI Sales Agent. |
| `audience_ids` | `Array` | The list of audience IDs this internal article is targeted to for Fin AI Agent. |
| `author_id` | `number` | The id of the author of the article. |
| `body` | `string` | The body of the article in HTML. |
| `body_markdown` | `string` | The body of the article in markdown. |
| `created_at` | `number` | The time when the article was created. |
| `id` | `string` | The unique identifier for the article which is given by Intercom. |
| `locale` | `string` | The default locale of the article. |
| `owner_id` | `number` | The id of the owner of the article. |
| `title` | `string` | The title of the article. |
| `type` | `string` | The type of object - `internal_article`. |
| `updated_at` | `number` | The time when the article was last updated. |

#### Example: Load

```ts
const internal_article = await client.InternalArticle().load({ id: 1 })
```


### InternalArticleSearch

Create an instance: `const internal_article_search = client.InternalArticleSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Object` | An object containing the results of the search. |
| `pages` | `Object` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `number` | The total number of Internal Articles matching the search query |
| `type` | `string` | The type of the object - `list`. |

#### Example: Load

```ts
const internal_article_search = await client.InternalArticleSearch().load()
```


### IpAllowlist

Create an instance: `const ip_allowlist = client.IpAllowlist()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` | Whether the IP allowlist is enabled for the workspace. |
| `ip_allowlist` | `Array` | List of allowed IP addresses and/or IP ranges in CIDR notation. |
| `type` | `string` | String representing the object's type. |

#### Example: List

```ts
const ip_allowlists = await client.IpAllowlist().list()
```


### Job

Create an instance: `const job = client.Job()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The id of the job that's currently being processed or has completed. |
| `resource_id` | `string` | The id of the resource created during job execution (e.g. |
| `resource_type` | `string` | The type of resource created during job execution. |
| `resource_url` | `string` | The url of the resource created during job exeuction. |
| `skip_notifications` | `boolean` | Option to disable notifications when a Ticket is created. |
| `status` | `string` | The status of the job execution. |
| `type` | `string` | The type of the object |
| `url` | `string` | API endpoint URL to check the job status. |

#### Example: Load

```ts
const job = await client.Job().load({ job_id: 'job_id' })
```

#### Example: Create

```ts
const job = await client.Job().create({
  id: 'example_id',
})
```


### Macro

Create an instance: `const macro = client.Macro()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_on` | `Array` | Where the macro is available for use. |
| `body` | `string` | The body of the macro in HTML format with placeholders transformed to XML-like format. |
| `body_text` | `string` | The plain text version of the macro body with original Intercom placeholder format. |
| `created_at` | `string` | The time the macro was created in ISO 8601 format. |
| `id` | `string` | The unique identifier for the macro. |
| `name` | `string` | The name of the macro. |
| `type` | `string` | String representing the object's type. |
| `updated_at` | `string` | The time the macro was last updated in ISO 8601 format. |
| `visible_to` | `string` | Who can view this macro. |
| `visible_to_team_ids` | `Array` | The team IDs that can view this macro when visible_to is set to specific_teams. |

#### Example: Load

```ts
const macro = await client.Macro().load({ id: 'macro_id' })
```

#### Example: List

```ts
const macros = await client.Macro().list()
```


### MergeHistory

Create an instance: `const merge_history = client.MergeHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `merged_at` | `number` | (Unix timestamp in seconds) The time when the merge occurred. |
| `source_contact_id` | `string` | The Intercom ID of the contact that was merged into this contact. |
| `source_contact_role` | `string` | The role of the contact that was merged in. |
| `type` | `string` | The type of object. |

#### Example: List

```ts
const merge_historys = await client.MergeHistory().list({ contact_id: "example" })
```


### Message

Create an instance: `const message = client.Message()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bcc` | `*` |  |
| `body` | `string` | The message body, which may contain HTML. |
| `cc` | `*` |  |
| `conversation_id` | `string` | The associated conversation_id |
| `create_conversation_without_contact_reply` | `boolean` | Whether a conversation should be opened in the inbox for the message without the contact replying. |
| `created_at` | `number` | The time the conversation was created. |
| `from` | `Object` | The sender of the message. |
| `id` | `string` | The id representing the message. |
| `message_type` | `string` | The type of message that was sent. |
| `subject` | `string` | The subject of the message. |
| `template` | `string` | The style of the outgoing message. |
| `to` | `*` |  |
| `type` | `string` | The type of the message |

#### Example: Create

```ts
const message = await client.Message().create({
  body: 'example_body',
  created_at: 1,
  from: {},
  id: 'example_id',
  message_type: 'example_message_type',
  type: 'example_type',
})
```


### NewsItem

Create an instance: `const news_item = client.NewsItem()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` | The news item body, which may contain HTML. |
| `cover_image_url` | `string` | URL of the image used as cover. |
| `created_at` | `number` | Timestamp for when the news item was created. |
| `deliver_silently` | `boolean` | When set to true, the news item will appear in the messenger newsfeed without showing a notification badge. |
| `id` | `string` | The unique identifier for the news item which is given by Intercom. |
| `labels` | `Array` | Label names displayed to users to categorize the news item. |
| `newsfeed_assignments` | `Array` | A list of newsfeed_assignments to assign to the specified newsfeed. |
| `reactions` | `Array` | Ordered list of emoji reactions to the news item. |
| `sender_id` | `number` | The id of the sender of the news item. |
| `state` | `string` | News items will not be visible to your users in the assigned newsfeeds until they are set live. |
| `title` | `string` | The title of the news item. |
| `type` | `string` | The type of object. |
| `updated_at` | `number` | Timestamp for when the news item was last updated. |
| `workspace_id` | `string` | The id of the workspace which the news item belongs to. |

#### Example: Load

```ts
const news_item = await client.NewsItem().load({ id: 1 })
```

#### Example: Create

```ts
const news_item = await client.NewsItem().create({
})
```


### Newsfeed

Create an instance: `const newsfeed = client.Newsfeed()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | Timestamp for when the newsfeed was created. |
| `id` | `string` | The unique identifier for the newsfeed which is given by Intercom. |
| `name` | `string` | The name of the newsfeed. |
| `type` | `string` | The type of object. |
| `updated_at` | `number` | Timestamp for when the newsfeed was last updated. |

#### Example: Load

```ts
const newsfeed = await client.Newsfeed().load({ id: 'newsfeed_id' })
```


### Note

Create an instance: `const note = client.Note()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_id` | `string` | The unique identifier of the admin creating the note. |
| `author` | `Object` | Optional. |
| `body` | `string` | The body text of the note. |
| `company` | `Object` | Represents the company that the note was created about. |
| `contact` | `Object` | Represents the contact that the note was created about. |
| `created_at` | `number` | The time the note was created. |
| `id` | `string` | The id of the note. |
| `type` | `string` | String representing the object's type. |

#### Example: Load

```ts
const note = await client.Note().load({ id: 1 })
```

#### Example: List

```ts
const notes = await client.Note().list({ company_id: "example" })
```

#### Example: Create

```ts
const note = await client.Note().create({
  company_id: 'example_company_id',
})
```


### OfficeHour

Create an instance: `const office_hour = client.OfficeHour()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | The time the schedule was created as a Unix timestamp. |
| `id` | `string` | The unique identifier for the office hours schedule. |
| `name` | `string` | The name of the office hours schedule. |
| `time_intervals` | `Array` | The open intervals for the schedule. |
| `time_zone_name` | `string` | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | `boolean` | Whether the schedule is open 24/7. |
| `type` | `string` | The type of the object - always `office_hours_schedule`. |
| `updated_at` | `number` | The time the schedule was last updated as a Unix timestamp. |

#### Example: List

```ts
const office_hours = await client.OfficeHour().list()
```

#### Example: Create

```ts
const office_hour = await client.OfficeHour().create({
  name: 'example_name',
  time_intervals: [],
  time_zone_name: 'example_time_zone_name',
})
```


### OfficeHoursException

Create an instance: `const office_hours_exception = client.OfficeHoursException()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | The time the exception was created as a Unix timestamp. |
| `exception_date` | `string` | The date the exception applies to, in `YYYY-MM-DD` format. |
| `exception_type` | `string` | `closed` means the workspace is closed all day; `custom_hours` replaces the regular hours with `time_intervals`. |
| `id` | `string` | The unique identifier for the office hours exception. |
| `name` | `string` | An optional name for the exception. |
| `office_hours_schedule_id` | `string` | The unique identifier for the schedule this exception belongs to. |
| `recurring_annually` | `boolean` | Whether the exception repeats every year on the same date. |
| `time_intervals` | `Array` | The open intervals for the exception date. |
| `type` | `string` | The type of the object - always `office_hours_exception`. |
| `updated_at` | `number` | The time the exception was last updated as a Unix timestamp. |

#### Example: Load

```ts
const office_hours_exception = await client.OfficeHoursException().load({ id: 'office_hours_exception_id', office_hours_schedule_id: 'office_hours_schedule_id' })
```

#### Example: List

```ts
const office_hours_exceptions = await client.OfficeHoursException().list({ office_hours_schedule_id: "example" })
```

#### Example: Create

```ts
const office_hours_exception = await client.OfficeHoursException().create({
  office_hours_schedule_id: 'example_office_hours_schedule_id',
})
```


### OfficeHoursSchedule

Create an instance: `const office_hours_schedule = client.OfficeHoursSchedule()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `number` | The time the schedule was created as a Unix timestamp. |
| `id` | `string` | The unique identifier for the office hours schedule. |
| `name` | `string` | The name of the office hours schedule. |
| `time_intervals` | `Array` | The open intervals that make up the weekly schedule. |
| `time_zone_name` | `string` | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | `boolean` | Whether the schedule is open 24/7. |
| `type` | `string` | The type of the object - always `office_hours_schedule`. |
| `updated_at` | `number` | The time the schedule was last updated as a Unix timestamp. |

#### Example: Load

```ts
const office_hours_schedule = await client.OfficeHoursSchedule().load({ id: 'office_hours_schedule_id' })
```


### Paginated

Create an instance: `const paginated = client.Paginated()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` | An array of Objects |
| `pages` | `Object` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `number` | A count of the total number of objects. |
| `type` | `string` | The type of object |

#### Example: List

```ts
const paginateds = await client.Paginated().list()
```


### PhoneSwitch

Create an instance: `const phone_switch = client.PhoneSwitch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_attributes` | `Object` | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `phone` | `string` | Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger. |
| `type` | `string` |  |

#### Example: Create

```ts
const phone_switch = await client.PhoneSwitch().create({
})
```


### ReportingData

Create an instance: `const reporting_data = client.ReportingData()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `download_expires_at` | `string` |  |
| `download_url` | `string` |  |
| `job_identifier` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```ts
const reporting_data = await client.ReportingData().load({ app_id: 'app_id', job_identifier: 'job_identifier' })
```


### ReportingDataExport

Create an instance: `const reporting_data_export = client.ReportingDataExport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attribute_ids` | `Array` |  |
| `attributes` | `Array` |  |
| `dataset_id` | `string` |  |
| `default_time_attribute_id` | `string` |  |
| `description` | `string` |  |
| `download_expires_at` | `string` |  |
| `download_url` | `string` |  |
| `end_time` | `number` |  |
| `id` | `string` |  |
| `job_identifier` | `string` |  |
| `name` | `string` |  |
| `start_time` | `number` |  |
| `status` | `string` |  |

#### Example: List

```ts
const reporting_data_exports = await client.ReportingDataExport().list()
```

#### Example: Create

```ts
const reporting_data_export = await client.ReportingDataExport().create({
  attribute_ids: [],
  dataset_id: 'example_dataset_id',
  end_time: 1,
  start_time: 1,
})
```


### Segment

Create an instance: `const segment = client.Segment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | The number of items in the user segment. |
| `created_at` | `number` | The time the segment was created. |
| `id` | `string` | The unique identifier representing the segment. |
| `name` | `string` | The name of the segment. |
| `person_type` | `string` | Type of the contact: contact (lead) or user. |
| `type` | `string` | The type of object. |
| `updated_at` | `number` | The time the segment was updated. |

#### Example: Load

```ts
const segment = await client.Segment().load({ id: 'segment_id' })
```

#### Example: List

```ts
const segments = await client.Segment().list()
```


### SideConversation

Create an instance: `const side_conversation = client.SideConversation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversation_parts` | `Array` | The conversation parts (messages) in this side conversation. |
| `side_conversation_id` | `string` | The unique identifier for the side conversation. |
| `total_count` | `number` | The total number of conversation parts in this side conversation. |

#### Example: List

```ts
const side_conversations = await client.SideConversation().list({ conversation_id: "example" })
```


### Subscription

Create an instance: `const subscription = client.Subscription()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `consent_type` | `string` | Describes the type of consent. |
| `content_types` | `Array` | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `Object` | A translation object contains the localised details of a subscription type. |
| `id` | `string` | The unique identifier representing the subscription type. |
| `state` | `string` | The state of the subscription type. |
| `translations` | `Array` | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `type` | `string` | The type of the object - subscription |

#### Example: List

```ts
const subscriptions = await client.Subscription().list({ contact_id: "example" })
```

#### Example: Create

```ts
const subscription = await client.Subscription().create({
  contact_id: 'example_contact_id',
})
```


### SubscriptionType

Create an instance: `const subscription_type = client.SubscriptionType()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `consent_type` | `string` | Describes the type of consent. |
| `content_types` | `Array` | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `Object` | A translation object contains the localised details of a subscription type. |
| `id` | `string` | The unique identifier representing the subscription type. |
| `state` | `string` | The state of the subscription type. |
| `translations` | `Array` | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `type` | `string` | The type of the object - subscription |

#### Example: List

```ts
const subscription_types = await client.SubscriptionType().list()
```


### Tag

Create an instance: `const tag = client.Tag()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_id` | `string` | Optional id of the teammate to attribute the tagging to. |
| `applied_at` | `number` | The time when the tag was applied to the object. |
| `applied_by` | `Object` | The admin who applied the tag. |
| `companies` | `Array` |  |
| `id` | `string` | The id of the tag |
| `name` | `string` | The name of the tag |
| `type` | `string` | value is "tag" |
| `users` | `Array` |  |

#### Example: Load

```ts
const tag = await client.Tag().load({ id: 'tag_id' })
```

#### Example: List

```ts
const tags = await client.Tag().list()
```

#### Example: Create

```ts
const tag = await client.Tag().create({
})
```


### Team

Create an instance: `const team = client.Team()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_ids` | `Array` | The list of admin IDs that are a part of the team. |
| `admin_priority_level` | `Object` | Admin priority levels for the team |
| `assignment_limit` | `number` | The assignment limit for the team. |
| `distribution_method` | `string` | Describes how assignments are distributed among the team members |
| `id` | `string` | The id of the team |
| `name` | `string` | The name of the team |
| `type` | `string` | Value is always "team" |

#### Example: Load

```ts
const team = await client.Team().load({ id: 'team_id' })
```

#### Example: List

```ts
const teams = await client.Team().list()
```


### TeamMetricList

Create an instance: `const team_metric_list = client.TeamMetricList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```ts
const team_metric_lists = await client.TeamMetricList().list({ id: "example" })
```


### Ticket

Create an instance: `const ticket = client.Ticket()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_assignee_id` | `number` | The id representing the admin assigned to the ticket. |
| `attributes` | `Object` | The attributes set on the ticket. |
| `category` | `string` | Category of the Ticket. |
| `contacts` | `Object` | The list of contacts affected by a ticket. |
| `created_at` | `number` | The time the ticket was created as a UTC Unix timestamp. |
| `id` | `string` | The unique identifier for the ticket which is given by Intercom. |
| `is_shared` | `boolean` | Whether or not the ticket is shared with the customer. |
| `linked_objects` | `Object` | An object containing metadata about linked conversations and linked tickets. |
| `open` | `boolean` | Whether or not the ticket is open. |
| `previous_ticket_state_id` | `string` | The ID of the previous ticket state from the most recent state change. |
| `skip_notifications` | `boolean` | Option to disable notifications when a Ticket is created. |
| `snoozed_until` | `number` | The time the ticket will be snoozed until as a UTC Unix timestamp. |
| `team_assignee_id` | `number` | The id representing the team assigned to the ticket. |
| `ticket_attributes` | `Object` | An object containing the different attributes associated to the ticket as key-value pairs. |
| `ticket_id` | `string` | The ID of the Ticket used in the Intercom Inbox and Messenger. |
| `ticket_parts` | `Object` | A list of Ticket Part objects for each note and event in the ticket. |
| `ticket_state` | `Object` | A ticket state, used to define the state of a ticket. |
| `ticket_state_id` | `string` | The ID of the ticket state associated with the ticket type. |
| `ticket_type` | `Object` | A ticket type, used to define the data fields to be captured in a ticket. |
| `ticket_type_id` | `string` | The ID of the type of ticket you want to convert the conversation to |
| `type` | `string` | Always ticket |
| `updated_at` | `number` | The last time the ticket was updated as a UTC Unix timestamp. |

#### Example: Load

```ts
const ticket = await client.Ticket().load({ id: 'ticket_id' })
```

#### Example: Create

```ts
const ticket = await client.Ticket().create({
  ticket_type_id: 'example_ticket_type_id',
})
```


### TicketList

Create an instance: `const ticket_list = client.TicketList()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `pages` | `Object` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `Object` |  |
| `query` | `*` |  |
| `tickets` | `Array` | The list of ticket objects |
| `total_count` | `number` | A count of the total number of objects. |
| `type` | `string` | Always ticket.list |

#### Example: Create

```ts
const ticket_list = await client.TicketList().create({
  query: 'example_query',
})
```


### TicketReply

Create an instance: `const ticket_reply = client.TicketReply()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `Array` | A list of attachments for the part. |
| `author` | `Object` | The author that wrote or triggered the part. |
| `body` | `string` | The message body, which may contain HTML. |
| `created_at` | `number` | The time the note was created. |
| `id` | `string` | The id representing the part. |
| `part_type` | `string` | Type of the part |
| `redacted` | `boolean` | Whether or not the ticket part has been redacted. |
| `skip_notifications` | `boolean` | Option to disable notifications when replying to a Ticket. |
| `type` | `string` | Always ticket_part |
| `updated_at` | `number` | The last time the note was updated. |

#### Example: Create

```ts
const ticket_reply = await client.TicketReply().create({
  id: 'example_id',
})
```


### TicketState

Create an instance: `const ticket_state = client.TicketState()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | Whether the ticket state is archived |
| `category` | `string` | The category of the ticket state |
| `external_label` | `string` | The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal. |
| `id` | `string` | The id of the ticket state |
| `internal_label` | `string` | The state the ticket is currently in, in a human readable form - visible in Intercom |
| `ticket_types` | `Object` | A list of ticket types associated with a given ticket state. |
| `type` | `string` | String representing the object's type. |

#### Example: List

```ts
const ticket_states = await client.TicketState().list()
```


### TicketType

Create an instance: `const ticket_type = client.TicketType()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | Whether the ticket type is archived or not. |
| `category` | `string` | Category of the Ticket Type. |
| `created_at` | `number` | The date and time the ticket type was created. |
| `description` | `string` | The description of the ticket type |
| `icon` | `string` | The icon of the ticket type |
| `id` | `string` | The id representing the ticket type. |
| `is_internal` | `boolean` | Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers. |
| `name` | `string` | The name of the ticket type |
| `ticket_states` | `Object` | A list of ticket states associated with a given ticket type. |
| `ticket_type_attributes` | `Object` | A list of attributes associated with a given ticket type. |
| `type` | `string` | String representing the object's type. |
| `updated_at` | `number` | The date and time the ticket type was last updated. |
| `workspace_id` | `string` | The id of the workspace that the ticket type belongs to. |

#### Example: Load

```ts
const ticket_type = await client.TicketType().load({ id: 'ticket_type_id' })
```

#### Example: List

```ts
const ticket_types = await client.TicketType().list()
```

#### Example: Create

```ts
const ticket_type = await client.TicketType().create({
})
```


### TicketTypeAttribute

Create an instance: `const ticket_type_attribute = client.TicketTypeAttribute()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_multiple_values` | `boolean` | Whether the attribute allows multiple files to be attached to it (only applicable to file attributes) |
| `archived` | `boolean` | Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets) |
| `data_type` | `string` | The data type of the attribute |
| `description` | `string` | The description of the attribute presented to the teammate or contact |
| `id` | `string` |  |
| `list_items` | `string` | A comma delimited list of items for the attribute value (only applicable to list attributes) |
| `multiline` | `boolean` | Whether the attribute allows multiple lines of text (only applicable to string attributes) |
| `name` | `string` | The name of the ticket type attribute |
| `required_to_create` | `boolean` | Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox. |
| `required_to_create_for_contacts` | `boolean` | Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger. |
| `visible_on_create` | `boolean` | Whether the attribute is visible to teammates when creating a ticket in Inbox. |
| `visible_to_contacts` | `boolean` | Whether the attribute is visible to contacts when creating a ticket in Messenger. |

#### Example: Create

```ts
const ticket_type_attribute = await client.TicketTypeAttribute().create({
  id: 'example_id',
  data_type: 'example_data_type',
  description: 'example_description',
  name: 'example_name',
})
```


### Visitor

Create an instance: `const visitor = client.Visitor()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anonymous` | `boolean` | Identifies if this visitor is anonymous. |
| `app_id` | `string` | The id of the app the visitor is associated with. |
| `avatar` | `Object` |  |
| `companies` | `Object` |  |
| `created_at` | `number` | The time the Visitor was added to Intercom. |
| `custom_attributes` | `Object` | The custom attributes you have set on the Visitor. |
| `do_not_track` | `boolean` | Identifies if this visitor has do not track enabled. |
| `email` | `string` | The email of the visitor. |
| `has_hard_bounced` | `boolean` | Identifies if this visitor has had a hard bounce. |
| `id` | `string` | The Intercom defined id representing the Visitor. |
| `las_request_at` | `number` | The time the Lead last recorded making a request. |
| `location_data` | `Object` |  |
| `marked_email_as_spam` | `boolean` | Identifies if this visitor has marked an email as spam. |
| `name` | `string` | The name of the visitor. |
| `owner_id` | `string` | The id of the admin that owns the Visitor. |
| `phone` | `string` | The phone number of the visitor. |
| `pseudonym` | `string` | The pseudonym of the visitor. |
| `referrer` | `string` | The referer of the visitor. |
| `remote_created_at` | `number` | The time the Visitor was added to Intercom. |
| `segments` | `Object` |  |
| `session_count` | `number` | The number of sessions the Visitor has had. |
| `signed_up_at` | `number` | The time the Visitor signed up for your product. |
| `social_profiles` | `Object` |  |
| `tags` | `Object` |  |
| `type` | `string` | Value is 'visitor' |
| `unsubscribed_from_emails` | `boolean` | Whether the Visitor is unsubscribed from emails. |
| `updated_at` | `number` | The last time the Visitor was updated. |
| `user_id` | `string` | Automatically generated identifier for the Visitor. |
| `utm_campaign` | `string` | The utm_campaign of the visitor. |
| `utm_content` | `string` | The utm_content of the visitor. |
| `utm_medium` | `string` | The utm_medium of the visitor. |
| `utm_source` | `string` | The utm_source of the visitor. |
| `utm_term` | `string` | The utm_term of the visitor. |

#### Example: Load

```ts
const visitor = await client.Visitor().load({ user_id: 'user_id' })
```


### WhatsappMessageStatus

Create an instance: `const whatsapp_message_status = client.WhatsappMessageStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `details` | `string` | Detailed error information |
| `message` | `string` | Error message |

#### Example: Load

```ts
const whatsapp_message_status = await client.WhatsappMessageStatus().load({ message_id: 'message_id' })
```


### WhatsappMessageStatusList

Create an instance: `const whatsapp_message_status_list = client.WhatsappMessageStatusList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversation_id` | `string` | ID of the conversation |
| `created_at` | `number` | Creation timestamp |
| `id` | `string` | Event ID |
| `status` | `string` | Current status of the message |
| `template_name` | `string` | Name of the WhatsApp template used |
| `type` | `string` | Event type |
| `updated_at` | `number` | Last update timestamp |
| `whatsapp_message_id` | `string` | WhatsApp's message identifier |

#### Example: List

```ts
const whatsapp_message_status_lists = await client.WhatsappMessageStatusList().list({ ruleset_id: "example" })
```


### Workflow

Create an instance: `const workflow = client.Workflow()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attributes` | `Array` | Custom attributes defined for this workflow. |
| `created_at` | `string` | When the workflow was created. |
| `description` | `string` | The description of the workflow. |
| `embedded_rules` | `Array` | Rules embedded within the workflow steps. |
| `id` | `string` | The unique identifier for the workflow. |
| `preferred_devices` | `Array` | The preferred devices for this workflow. |
| `snapshot` | `Object` | The current snapshot of workflow steps and configuration. |
| `state` | `string` | The current state of the workflow. |
| `target_channels` | `Array` | The channels this workflow targets. |
| `targeting` | `Object` | The targeting rules for this workflow. |
| `title` | `string` | The title of the workflow. |
| `trigger_type` | `string` | The type of trigger that starts this workflow. |
| `updated_at` | `string` | When the workflow was last updated. |

#### Example: Load

```ts
const workflow = await client.Workflow().load({ id: 'workflow_id' })
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

12 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `conversation` | `conversation_parts` | 6 | 5 levels |
| `side_conversation` | `conversation_parts` | 6 | 3 levels |
| `ticket` | `ticket_attributes` | 5 | 1 level |
| `ticket_list` | `tickets` | 5 | 12 levels |
| `contact_list` | `query` | 4 | 7 levels |
| `conversation` | `custom_attributes` | 4 | 3 levels |
| `conversation_list` | `conversations` | 4 | 6 levels |
| `conversation_list` | `query` | 4 | 7 levels |
| `phone_switch` | `custom_attributes` | 4 | 3 levels |
| `ticket` | `attributes` | 4 | 1 level |
| `ticket_list` | `query` | 4 | 7 levels |
| `contact` | `visitor` | 3 | 0 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
intercom/
├── src/
│   ├── IntercomSDK.js        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
└── test/                   # Test suites
```

Import the SDK from the package root:

```js
const { IntercomSDK } = require('@voxgig-sdk/intercom-js')
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const contactsegment = client.ContactSegment()
await contactsegment.list()

// contactsegment.data() now returns the contactsegment data from the last `list`
// contactsegment.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
