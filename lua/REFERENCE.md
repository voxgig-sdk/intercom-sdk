# Intercom Lua SDK Reference

Complete API reference for the Intercom Lua SDK.


## IntercomSDK

### Constructor

```lua
local sdk = require("intercom_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `ActivityLog(data)`

Create a new `ActivityLog` entity instance. Pass `nil` for no initial data.

#### `ActivityLogEventType(data)`

Create a new `ActivityLogEventType` entity instance. Pass `nil` for no initial data.

#### `ActivityLogList(data)`

Create a new `ActivityLogList` entity instance. Pass `nil` for no initial data.

#### `Admin(data)`

Create a new `Admin` entity instance. Pass `nil` for no initial data.

#### `AdminWithApp(data)`

Create a new `AdminWithApp` entity instance. Pass `nil` for no initial data.

#### `AiCall(data)`

Create a new `AiCall` entity instance. Pass `nil` for no initial data.

#### `AiContent(data)`

Create a new `AiContent` entity instance. Pass `nil` for no initial data.

#### `Article(data)`

Create a new `Article` entity instance. Pass `nil` for no initial data.

#### `ArticleSearch(data)`

Create a new `ArticleSearch` entity instance. Pass `nil` for no initial data.

#### `ArticleVersion(data)`

Create a new `ArticleVersion` entity instance. Pass `nil` for no initial data.

#### `ArticleVersionList(data)`

Create a new `ArticleVersionList` entity instance. Pass `nil` for no initial data.

#### `Audience(data)`

Create a new `Audience` entity instance. Pass `nil` for no initial data.

#### `AwayStatusReason(data)`

Create a new `AwayStatusReason` entity instance. Pass `nil` for no initial data.

#### `Banner(data)`

Create a new `Banner` entity instance. Pass `nil` for no initial data.

#### `BannerDismiss(data)`

Create a new `BannerDismiss` entity instance. Pass `nil` for no initial data.

#### `Brand(data)`

Create a new `Brand` entity instance. Pass `nil` for no initial data.

#### `Call(data)`

Create a new `Call` entity instance. Pass `nil` for no initial data.

#### `Company(data)`

Create a new `Company` entity instance. Pass `nil` for no initial data.

#### `CompanyAttachedContact(data)`

Create a new `CompanyAttachedContact` entity instance. Pass `nil` for no initial data.

#### `CompanyAttachedSegment(data)`

Create a new `CompanyAttachedSegment` entity instance. Pass `nil` for no initial data.

#### `CompanyList(data)`

Create a new `CompanyList` entity instance. Pass `nil` for no initial data.

#### `CompanyScroll(data)`

Create a new `CompanyScroll` entity instance. Pass `nil` for no initial data.

#### `Contact(data)`

Create a new `Contact` entity instance. Pass `nil` for no initial data.

#### `ContactAttachedCompany(data)`

Create a new `ContactAttachedCompany` entity instance. Pass `nil` for no initial data.

#### `ContactList(data)`

Create a new `ContactList` entity instance. Pass `nil` for no initial data.

#### `ContactSegment(data)`

Create a new `ContactSegment` entity instance. Pass `nil` for no initial data.

#### `Content(data)`

Create a new `Content` entity instance. Pass `nil` for no initial data.

#### `ContentImportSource(data)`

Create a new `ContentImportSource` entity instance. Pass `nil` for no initial data.

#### `ContentSearch(data)`

Create a new `ContentSearch` entity instance. Pass `nil` for no initial data.

#### `ContentSnippet(data)`

Create a new `ContentSnippet` entity instance. Pass `nil` for no initial data.

#### `Conversation(data)`

Create a new `Conversation` entity instance. Pass `nil` for no initial data.

#### `ConversationAttribute(data)`

Create a new `ConversationAttribute` entity instance. Pass `nil` for no initial data.

#### `ConversationAttributeList(data)`

Create a new `ConversationAttributeList` entity instance. Pass `nil` for no initial data.

#### `ConversationList(data)`

Create a new `ConversationList` entity instance. Pass `nil` for no initial data.

#### `ConversationParticipant(data)`

Create a new `ConversationParticipant` entity instance. Pass `nil` for no initial data.

#### `CustomObjectInstance(data)`

Create a new `CustomObjectInstance` entity instance. Pass `nil` for no initial data.

#### `Data(data)`

Create a new `Data` entity instance. Pass `nil` for no initial data.

#### `DataAttribute(data)`

Create a new `DataAttribute` entity instance. Pass `nil` for no initial data.

#### `DataConnector(data)`

Create a new `DataConnector` entity instance. Pass `nil` for no initial data.

#### `DataConnectorExecutionResult(data)`

Create a new `DataConnectorExecutionResult` entity instance. Pass `nil` for no initial data.

#### `DataConnectorExecutionResultList(data)`

Create a new `DataConnectorExecutionResultList` entity instance. Pass `nil` for no initial data.

#### `DataEvent(data)`

Create a new `DataEvent` entity instance. Pass `nil` for no initial data.

#### `DataEventSummary(data)`

Create a new `DataEventSummary` entity instance. Pass `nil` for no initial data.

#### `DataExport(data)`

Create a new `DataExport` entity instance. Pass `nil` for no initial data.

#### `Deleted(data)`

Create a new `Deleted` entity instance. Pass `nil` for no initial data.

#### `DeletedArticleObject(data)`

Create a new `DeletedArticleObject` entity instance. Pass `nil` for no initial data.

#### `DeletedCompanyObject(data)`

Create a new `DeletedCompanyObject` entity instance. Pass `nil` for no initial data.

#### `DeletedDataConnectorObject(data)`

Create a new `DeletedDataConnectorObject` entity instance. Pass `nil` for no initial data.

#### `DeletedInternalArticleObject(data)`

Create a new `DeletedInternalArticleObject` entity instance. Pass `nil` for no initial data.

#### `DeletedObject(data)`

Create a new `DeletedObject` entity instance. Pass `nil` for no initial data.

#### `Email(data)`

Create a new `Email` entity instance. Pass `nil` for no initial data.

#### `ExternalPage(data)`

Create a new `ExternalPage` entity instance. Pass `nil` for no initial data.

#### `FinAgent(data)`

Create a new `FinAgent` entity instance. Pass `nil` for no initial data.

#### `HandlingEvent(data)`

Create a new `HandlingEvent` entity instance. Pass `nil` for no initial data.

#### `HelpCenter(data)`

Create a new `HelpCenter` entity instance. Pass `nil` for no initial data.

#### `InternalArticle(data)`

Create a new `InternalArticle` entity instance. Pass `nil` for no initial data.

#### `InternalArticleSearch(data)`

Create a new `InternalArticleSearch` entity instance. Pass `nil` for no initial data.

#### `IpAllowlist(data)`

Create a new `IpAllowlist` entity instance. Pass `nil` for no initial data.

#### `Job(data)`

Create a new `Job` entity instance. Pass `nil` for no initial data.

#### `Macro(data)`

Create a new `Macro` entity instance. Pass `nil` for no initial data.

#### `MergeHistory(data)`

Create a new `MergeHistory` entity instance. Pass `nil` for no initial data.

#### `Message(data)`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `NewsItem(data)`

Create a new `NewsItem` entity instance. Pass `nil` for no initial data.

#### `Newsfeed(data)`

Create a new `Newsfeed` entity instance. Pass `nil` for no initial data.

#### `Note(data)`

Create a new `Note` entity instance. Pass `nil` for no initial data.

#### `OfficeHour(data)`

Create a new `OfficeHour` entity instance. Pass `nil` for no initial data.

#### `OfficeHoursException(data)`

Create a new `OfficeHoursException` entity instance. Pass `nil` for no initial data.

#### `OfficeHoursSchedule(data)`

Create a new `OfficeHoursSchedule` entity instance. Pass `nil` for no initial data.

#### `Paginated(data)`

Create a new `Paginated` entity instance. Pass `nil` for no initial data.

#### `PhoneSwitch(data)`

Create a new `PhoneSwitch` entity instance. Pass `nil` for no initial data.

#### `ReportingData(data)`

Create a new `ReportingData` entity instance. Pass `nil` for no initial data.

#### `ReportingDataExport(data)`

Create a new `ReportingDataExport` entity instance. Pass `nil` for no initial data.

#### `Segment(data)`

Create a new `Segment` entity instance. Pass `nil` for no initial data.

#### `SideConversation(data)`

Create a new `SideConversation` entity instance. Pass `nil` for no initial data.

#### `Subscription(data)`

Create a new `Subscription` entity instance. Pass `nil` for no initial data.

#### `SubscriptionType(data)`

Create a new `SubscriptionType` entity instance. Pass `nil` for no initial data.

#### `Tag(data)`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `Team(data)`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `TeamMetricList(data)`

Create a new `TeamMetricList` entity instance. Pass `nil` for no initial data.

#### `Ticket(data)`

Create a new `Ticket` entity instance. Pass `nil` for no initial data.

#### `TicketList(data)`

Create a new `TicketList` entity instance. Pass `nil` for no initial data.

#### `TicketReply(data)`

Create a new `TicketReply` entity instance. Pass `nil` for no initial data.

#### `TicketState(data)`

Create a new `TicketState` entity instance. Pass `nil` for no initial data.

#### `TicketType(data)`

Create a new `TicketType` entity instance. Pass `nil` for no initial data.

#### `TicketTypeAttribute(data)`

Create a new `TicketTypeAttribute` entity instance. Pass `nil` for no initial data.

#### `Visitor(data)`

Create a new `Visitor` entity instance. Pass `nil` for no initial data.

#### `WhatsappMessageStatus(data)`

Create a new `WhatsappMessageStatus` entity instance. Pass `nil` for no initial data.

#### `WhatsappMessageStatusList(data)`

Create a new `WhatsappMessageStatusList` entity instance. Pass `nil` for no initial data.

#### `Workflow(data)`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ActivityLogEntity

```lua
local activity_log = client:ActivityLog(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_description` | `string` | No | A sentence or two describing the activity. |
| `activity_type` | `string` | No |  |
| `created_at` | `number` | No | The time the activity was created. |
| `id` | `string` | No | The id representing the activity. |
| `metadata` | `table` | No | Additional data provided about Admin activity. |
| `performed_by` | `table` | No | Details about the Admin involved in the activity. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ActivityLog():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityLogEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActivityLogEventTypeEntity

```lua
local activity_log_event_type = client:ActivityLogEventType(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `event_types` | `table` | No | An array of activity log event type strings. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ActivityLogEventType():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityLogEventTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActivityLogListEntity

```lua
local activity_log_list = client:ActivityLogList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_logs` | `table` | No | An array of activity logs |
| `created_at_after` | `number` | Yes | The start date that you request data for. |
| `created_at_before` | `number` | No | The end date that you request data for. |
| `event_types` | `table` | No | An optional list of event types to filter activity logs by. |
| `page` | `number` | No | The page number of results to return. |
| `pages` | `table` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `per_page` | `number` | No | The number of results per page. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ActivityLogList():create({
  created_at_after = --[[ number ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityLogListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminEntity

```lua
local admin = client:Admin(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `string` | No | Image for the associated team or teammate |
| `away_mode_enabled` | `boolean` | No | Identifies if this admin is currently set in away mode. |
| `away_mode_reassign` | `boolean` | No | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `away_status_reason_id` | `number` | No | The unique identifier of the away status reason |
| `email` | `string` | No | The email of the admin. |
| `has_inbox_seat` | `boolean` | No | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `id` | `string` | No | The id representing the admin. |
| `job_title` | `string` | No | The job title of the admin. |
| `name` | `string` | No | The name of the admin. |
| `role` | `table` | No | The role assigned to this admin. |
| `team_ids` | `table` | No | This object represents the avatar associated with the admin. |
| `team_priority_level` | `table` | No | Admin priority levels for teams |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Admin():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Admin():load({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Admin():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminWithAppEntity

```lua
local admin_with_app = client:AdminWithApp(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `table` | No | App that the admin belongs to. |
| `avatar` | `table` | No | This object represents the avatar associated with the admin. |
| `away_mode_enabled` | `boolean` | No | Identifies if this admin is currently set in away mode. |
| `away_mode_reassign` | `boolean` | No | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `email` | `string` | No | The email of the admin. |
| `email_verified` | `boolean` | No | Identifies if this admin's email is verified. |
| `has_inbox_seat` | `boolean` | No | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `id` | `string` | No | The id representing the admin. |
| `job_title` | `string` | No | The job title of the admin. |
| `name` | `string` | No | The name of the admin. |
| `team_ids` | `table` | No | This is a list of ids of the teams that this admin is part of. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AdminWithApp():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminWithAppEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiCallEntity

```lua
local ai_call = client:AiCall(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `number` | No | The workspace identifier |
| `call_id` | `string` | Yes | External call identifier from the call provider |
| `call_summary` | `string` | No | Summary of the call conversation, truncated to 256 characters. |
| `call_transcript` | `table` | No | Array of transcript entries for the call |
| `data` | `table` | No | Additional metadata about the call |
| `external_call_id` | `string` | No | The external call identifier from the call provider |
| `id` | `number` | No | The unique identifier for the external reference |
| `intent` | `table` | No | Array of intent classifications for the call |
| `intercom_call_id` | `string` | No | The Intercom call identifier, if the call has been matched |
| `intercom_conversation_id` | `string` | No | The Intercom conversation identifier, if a conversation has been created |
| `phone_number` | `string` | Yes | Phone number in E.164 format for the call |
| `source` | `string` | No | Source of the call. |
| `status` | `string` | No | Status of the call. |
| `user_phone_number` | `string` | No | Phone number in E.164 format for the call |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AiCall():create({
  call_id = --[[ string ]],
  phone_number = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AiCall():load({ conversation_id = "conversation_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiCallEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AiContentEntity

```lua
local ai_content = client:AiContent(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AiContent():remove({ source_id = "source_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiContentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ArticleEntity

```lua
local article = client:Article(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `boolean` | No | Whether the article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `boolean` | No | Whether the article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `boolean` | No | Whether the article should be available for AI Sales Agent. |
| `audience_ids` | `table` | No | The list of audience IDs to assign to this article for Fin AI Agent targeting. |
| `author_id` | `number` | Yes | The id of the author of the article. |
| `body` | `string` | No | The content of the article in HTML. |
| `body_markdown` | `string` | No | The content of the article in markdown. |
| `conversions` | `number` | No | The number of conversations started from the article. |
| `created_at` | `number` | No | The time when the article was created. |
| `created_by_id` | `number` | No | The ID of the teammate who created the article. |
| `default_locale` | `string` | No | The default locale of the help center. |
| `description` | `string` | No | The description of the article. |
| `draft_updated_at` | `number` | No | The time, in seconds, when the staged draft was last edited, or `null` when there is no staged draft. |
| `exclude_from_article_suggestions` | `boolean` | No | Whether the article is excluded from Fin AI Agent article suggestions. |
| `fin_involvements` | `number` | No | The number of conversations in which Fin AI Agent used this article, summed across all of the article's locales. |
| `fin_resolution_rate` | `number` | No | The percentage of Fin AI Agent involvements that resulted in a resolution (fin_resolutions / fin_involvements * 100). |
| `fin_resolutions` | `number` | No | The number of conversations Fin AI Agent resolved using this article, summed across all of the article's locales. |
| `happy_reaction_percentage` | `number` | No | The percentage of happy reactions the article has received against other types of reaction. |
| `has_unpublished_changes` | `boolean` | No | Whether the published article has unpublished changes staged as a draft on top of its live content. |
| `help_center_audience` | `string` | No | The audience that can view this article in the Help Center. |
| `id` | `string` | No | The unique identifier for the article which is given by Intercom. |
| `neutral_reaction_percentage` | `number` | No | The percentage of neutral reactions the article has received against other types of reaction. |
| `parent_id` | `number` | No | The id of the article's parent collection or section. |
| `parent_ids` | `table` | No | The ids of the article's parent collections or sections. |
| `parent_type` | `string` | No | The type of parent, which can either be a `collection` or `section`. |
| `reactions` | `number` | No | The number of total reactions the article has received. |
| `sad_reaction_percentage` | `number` | No | The percentage of sad reactions the article has received against |
| `scheduled_publish_at` | `string` | No | ISO 8601 timestamp at which to schedule a future publish of the article. |
| `scheduled_unpublish_at` | `string` | No | ISO 8601 timestamp at which to schedule a future unpublish of the article. |
| `state` | `string` | No | Whether the article will be `published` or will be a `draft`. |
| `tags` | `table` | No | A list of tags objects associated with a conversation |
| `title` | `string` | Yes | The title of the article.For multilingual articles, this will be the title of the default language's content. |
| `translated_content` | `table` | No | The Translated Content of an Article. |
| `type` | `string` | No | The type of object - `article_statistics`. |
| `updated_at` | `number` | No | The time when the article was last updated. |
| `updated_by_id` | `number` | No | The ID of the teammate who last updated the article. |
| `url` | `string` | No | The URL of the article. |
| `views` | `number` | No | The number of total views the article has received. |
| `workspace_id` | `string` | No | The id of the workspace which the article belongs to. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `ai_chatbot_availability` | - | - | - | - |
| `ai_copilot_availability` | - | - | - | - |
| `ai_sales_agent_availability` | - | - | - | - |
| `audience_ids` | - | - | - | - |
| `author_id` | - | Yes | - | Yes |
| `body` | - | - | - | - |
| `body_markdown` | - | - | - | - |
| `conversions` | - | - | - | - |
| `created_at` | - | - | - | - |
| `created_by_id` | - | - | - | - |
| `default_locale` | - | - | - | - |
| `description` | - | - | - | - |
| `draft_updated_at` | - | - | - | - |
| `exclude_from_article_suggestions` | - | - | - | - |
| `fin_involvements` | - | - | - | - |
| `fin_resolution_rate` | - | - | - | - |
| `fin_resolutions` | - | - | - | - |
| `happy_reaction_percentage` | - | - | - | - |
| `has_unpublished_changes` | - | - | - | - |
| `help_center_audience` | - | - | - | - |
| `id` | - | - | - | - |
| `neutral_reaction_percentage` | - | - | - | - |
| `parent_id` | - | - | - | - |
| `parent_ids` | - | - | - | - |
| `parent_type` | - | - | - | - |
| `reactions` | - | - | - | - |
| `sad_reaction_percentage` | - | - | - | - |
| `scheduled_publish_at` | - | - | - | - |
| `scheduled_unpublish_at` | - | - | - | - |
| `state` | - | - | - | - |
| `tags` | - | - | - | - |
| `title` | - | Yes | - | Yes |
| `translated_content` | - | - | - | - |
| `type` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `updated_by_id` | - | - | - | - |
| `url` | - | - | - | - |
| `views` | - | - | - | - |
| `workspace_id` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Article():create({
  author_id = --[[ number ]],
  title = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Article():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Article():load({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Article():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArticleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ArticleSearchEntity

```lua
local article_search = client:ArticleSearch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No | An object containing the results of the search. |
| `pages` | `table` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `number` | No | The total number of Articles matching the search query |
| `type` | `string` | No | The type of the object - `list`. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ArticleSearch():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArticleSearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ArticleVersionEntity

```lua
local article_version = client:ArticleVersion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `article_id` | `string` | No | The unique identifier of the article this version belongs to. |
| `author_id` | `string` | No | The id of the teammate listed as the article's author at this version. |
| `body` | `string` | No | The HTML body of the article at this version. |
| `body_markdown` | `string` | No | The Markdown body of the article at this version. |
| `created_at` | `number` | No | The time the version was created, as a UTC Unix timestamp. |
| `created_by_id` | `string` | No | The id of the teammate who created this version. |
| `created_via` | `string` | No | How this version was created (for example `web`, `api`). |
| `description` | `string` | No | The description of the article at this version. |
| `from_version_id` | `string` | No | The id of the version this version was created from, or `null` if this is the first version. |
| `id` | `string` | No | The unique identifier for the version. |
| `state` | `string` | No | Whether this version is the currently published version of the article (`published`) or an earlier non-live version (`draft`). |
| `title` | `string` | No | The title of the article at this version. |
| `type` | `string` | No | String representing the object's type. |
| `updated_at` | `number` | No | The time the version was last updated, as a UTC Unix timestamp. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ArticleVersion():load({ id = "article_version_id", article_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArticleVersionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ArticleVersionListEntity

```lua
local article_version_list = client:ArticleVersionList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ArticleVersionList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArticleVersionListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AudienceEntity

```lua
local audience = client:Audience(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | The time the audience was created as a Unix timestamp. |
| `id` | `string` | No | The unique identifier representing the audience. |
| `name` | `string` | No | The name of the audience. |
| `predicates` | `table` | No | The predicates that define which contacts belong to the audience. |
| `role_predicates` | `table` | No | Role-based predicates that further filter audience membership by contact role. |
| `type` | `string` | No | The type of object. |
| `updated_at` | `number` | No | The time the audience was last updated as a Unix timestamp. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | Yes | - | - |
| `predicates` | - | - | - | - | - |
| `role_predicates` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Audience():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Audience():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Audience():load({ id = "audience_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Audience():remove({ id = "audience_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Audience():update({
  id = "audience_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AudienceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AwayStatusReasonEntity

```lua
local away_status_reason = client:AwayStatusReason(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | The Unix timestamp when the status reason was created |
| `deleted` | `boolean` | No | Whether the status reason has been soft deleted |
| `emoji` | `string` | No | The emoji associated with the status reason |
| `id` | `string` | No | The unique identifier for the away status reason |
| `label` | `string` | No | The display text for the away status reason |
| `order` | `number` | No | The display order of the status reason |
| `type` | `string` | No |  |
| `updated_at` | `number` | No | The Unix timestamp when the status reason was last updated |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AwayStatusReason():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AwayStatusReasonEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BannerEntity

```lua
local banner = client:Banner(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `table` | No | The action a contact can take on the banner, or `null` when the banner has no action. |
| `body` | `string` | No | The banner's body content as HTML. |
| `client_targeting` | `table` | No | Reserved for future use. |
| `created_at` | `number` | No | The time the contact's view of this banner was created. |
| `id` | `string` | No | The id of the banner. |
| `position` | `string` | No | Where the banner is positioned. |
| `show_dismiss_button` | `boolean` | No | Whether the banner should display a dismiss control. |
| `style` | `string` | No | How the banner is displayed. |
| `title` | `string` | No | The banner's title. |
| `type` | `string` | No | String representing the object's type. |
| `view_id` | `string` | No | The id of the contact's view of this banner. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Banner():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BannerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BannerDismissEntity

```lua
local banner_dismiss = client:BannerDismiss(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dismissed` | `boolean` | No | Whether the banner view is dismissed. |
| `id` | `string` | No |  |
| `type` | `string` | No | String representing the object's type. |
| `view_id` | `string` | No | The id of the dismissed banner view. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BannerDismiss():create({
  contact_id = --[[ string ]],
  id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BannerDismissEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BrandEntity

```lua
local brand = client:Brand(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | Unix timestamp of brand creation |
| `default_address_settings_id` | `string` | No | Default email settings ID for this brand |
| `help_center_id` | `string` | No | Associated help center identifier |
| `id` | `string` | No | Unique brand identifier. |
| `is_default` | `boolean` | No | Whether this is the workspace's default brand |
| `name` | `string` | No | Display name of the brand |
| `type` | `string` | No | The type of object |
| `updated_at` | `number` | No | Unix timestamp of last modification |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Brand():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Brand():load({ id = "brand_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BrandEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallEntity

```lua
local call = client:Call(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `string` | No | The id of the admin associated with the call, if any. |
| `answered_at` | `any` | No |  |
| `call_type` | `string` | No | The type of call. |
| `contact_id` | `string` | No | The id of the contact associated with the call, if any. |
| `conversation_id` | `string` | No | The id of the conversation associated with the call, if any. |
| `created_at` | `any` | No |  |
| `direction` | `string` | No | The direction of the call. |
| `ended_at` | `any` | No |  |
| `ended_reason` | `string` | No | The reason for the call end, if applicable. |
| `fin_recording_url` | `string` | No | API URL to the AI Agent (Fin) call recording if available. |
| `fin_transcription_url` | `string` | No | API URL to the AI Agent (Fin) call transcript if available. |
| `id` | `string` | No | The id of the call. |
| `initiated_at` | `any` | No |  |
| `phone` | `string` | No | The phone number involved in the call, in E.164 format. |
| `recording_url` | `string` | No | API URL to download or redirect to the call recording if available. |
| `state` | `string` | No | The current state of the call. |
| `transcription_url` | `string` | No | API URL to download or redirect to the call transcript if available. |
| `type` | `string` | No | String representing the object's type. |
| `updated_at` | `any` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Call():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Call():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Call():load({ id = "call_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CompanyEntity

```lua
local company = client:Company(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | No | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | No | The company id you have defined for the company. |
| `created_at` | `number` | No | The time the company was added in Intercom. |
| `custom_attributes` | `table` | No | The custom attributes you have set on the company. |
| `id` | `string` | No | The Intercom defined id representing the company. |
| `industry` | `string` | No | The industry that the company operates in. |
| `last_request_at` | `number` | No | The time the company last recorded making a request. |
| `monthly_spend` | `number` | No | How much revenue the company generates for your business. |
| `name` | `string` | No | The name of the company. |
| `notes` | `table` | No | The list of notes associated with the company |
| `plan` | `table` | No | The name of the plan you have associated with the company. |
| `remote_created_at` | `number` | No | The time the company was created by you. |
| `segments` | `table` | No | The list of segments associated with the company |
| `session_count` | `number` | No | How many sessions the company has recorded. |
| `size` | `number` | No | The number of employees in the company. |
| `tags` | `table` | No | The list of tags associated with the company |
| `type` | `string` | No | Value is `company` |
| `update_last_request_at` | `boolean` | No | Set to true to update the company's last seen time to now. |
| `updated_at` | `number` | No | The last time the company was updated. |
| `user_count` | `number` | No | The number of users in the company. |
| `website` | `string` | No | The URL for the company website. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `app_id` | - | - | - | - | - |
| `company_id` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `custom_attributes` | - | - | - | - | - |
| `id` | - | - | Yes | - | - |
| `industry` | - | - | - | - | - |
| `last_request_at` | - | - | - | - | - |
| `monthly_spend` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `notes` | - | - | - | - | - |
| `plan` | - | - | - | - | - |
| `remote_created_at` | - | - | - | - | - |
| `segments` | - | - | - | - | - |
| `session_count` | - | - | - | - | - |
| `size` | - | - | - | - | - |
| `tags` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `update_last_request_at` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `user_count` | - | - | - | - | - |
| `website` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Company():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Company():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Company():load({ id = "company_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Company():remove({ id = "company_id", contact_id = "contact_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Company():update({
  id = "company_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CompanyAttachedContactEntity

```lua
local company_attached_contact = client:CompanyAttachedContact(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `android_app_name` | `string` | No | The name of the Android app which the contact is using. |
| `android_app_version` | `string` | No | The version of the Android app which the contact is using. |
| `android_device` | `string` | No | The Android device which the contact is using. |
| `android_last_seen_at` | `number` | No | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `android_os_version` | `string` | No | The version of the Android OS which the contact is using. |
| `android_sdk_version` | `string` | No | The version of the Android SDK which the contact is using. |
| `avatar` | `table` | No |  |
| `browser` | `string` | No | The name of the browser which the contact is using. |
| `browser_language` | `string` | No | The language set by the browser which the contact is using. |
| `browser_version` | `string` | No | The version of the browser which the contact is using. |
| `companies` | `table` | No | An object with metadata about companies attached to a contact . |
| `created_at` | `number` | No | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `table` | No | The custom attributes which are set for the contact. |
| `email` | `string` | No | The contact's email. |
| `email_domain` | `string` | No | The contact's email domain. |
| `external_id` | `string` | No | The unique identifier for the contact which is provided by the Client. |
| `has_hard_bounced` | `boolean` | No | Whether the contact has had an email sent to them hard bounce. |
| `id` | `string` | No | The unique identifier for the contact which is given by Intercom. |
| `ios_app_name` | `string` | No | The name of the iOS app which the contact is using. |
| `ios_app_version` | `string` | No | The version of the iOS app which the contact is using. |
| `ios_device` | `string` | No | The iOS device which the contact is using. |
| `ios_last_seen_at` | `number` | No | (Unix timestamp in seconds) The last time the contact used the iOS app. |
| `ios_os_version` | `string` | No | The version of iOS which the contact is using. |
| `ios_sdk_version` | `string` | No | The version of the iOS SDK which the contact is using. |
| `language_override` | `string` | No | A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change. |
| `last_contacted_at` | `number` | No | (Unix timestamp in seconds) The time when the contact was last messaged. |
| `last_email_clicked_at` | `number` | No | (Unix timestamp in seconds) The time when the contact last clicked a link in an email. |
| `last_email_opened_at` | `number` | No | (Unix timestamp in seconds) The time when the contact last opened an email. |
| `last_replied_at` | `number` | No | (Unix timestamp in seconds) The time when the contact last messaged in. |
| `last_seen_at` | `number` | No | (Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually). |
| `location` | `table` | No | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `boolean` | No | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `table` | No | A list of contacts that were merged into this contact. |
| `name` | `string` | No | The contacts name. |
| `notes` | `table` | No | An object containing notes meta data about the notes that a contact has. |
| `os` | `string` | No | The operating system which the contact is using. |
| `owner_id` | `string` | No | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `string` | No | The contacts phone. |
| `role` | `string` | No | The role of the contact. |
| `signed_up_at` | `number` | No | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `table` | No | An object containing social profiles that a contact has. |
| `tags` | `table` | No | An object containing tags meta data about the tags that a contact has. |
| `type` | `string` | No | The type of object. |
| `unsubscribed_from_emails` | `boolean` | No | Whether the contact is unsubscribed from emails. |
| `updated_at` | `number` | No | (Unix timestamp in seconds) The time when the contact was last updated. |
| `workspace_id` | `string` | No | The id of the workspace which the contact belongs to. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CompanyAttachedContact():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyAttachedContactEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CompanyAttachedSegmentEntity

```lua
local company_attached_segment = client:CompanyAttachedSegment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | No | The number of items in the user segment. |
| `created_at` | `number` | No | The time the segment was created. |
| `id` | `string` | No | The unique identifier representing the segment. |
| `name` | `string` | No | The name of the segment. |
| `person_type` | `string` | No | Type of the contact: contact (lead) or user. |
| `type` | `string` | No | The type of object. |
| `updated_at` | `number` | No | The time the segment was updated. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CompanyAttachedSegment():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyAttachedSegmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CompanyListEntity

```lua
local company_list = client:CompanyList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No | An array containing Company Objects. |
| `pages` | `table` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `number` | No | The total number of companies. |
| `type` | `string` | No | The type of object - `list`. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CompanyList():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CompanyScrollEntity

```lua
local company_scroll = client:CompanyScroll(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | No | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | No | The company id you have defined for the company. |
| `created_at` | `number` | No | The time the company was added in Intercom. |
| `custom_attributes` | `table` | No | The custom attributes you have set on the company. |
| `id` | `string` | No | The Intercom defined id representing the company. |
| `industry` | `string` | No | The industry that the company operates in. |
| `last_request_at` | `number` | No | The time the company last recorded making a request. |
| `monthly_spend` | `number` | No | How much revenue the company generates for your business. |
| `name` | `string` | No | The name of the company. |
| `notes` | `table` | No | The list of notes associated with the company |
| `plan` | `table` | No |  |
| `remote_created_at` | `number` | No | The time the company was created by you. |
| `segments` | `table` | No | The list of segments associated with the company |
| `session_count` | `number` | No | How many sessions the company has recorded. |
| `size` | `number` | No | The number of employees in the company. |
| `tags` | `table` | No | The list of tags associated with the company |
| `type` | `string` | No | Value is `company` |
| `updated_at` | `number` | No | The last time the company was updated. |
| `user_count` | `number` | No | The number of users in the company. |
| `website` | `string` | No | The URL for the company website. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CompanyScroll():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyScrollEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContactEntity

```lua
local contact = client:Contact(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `android_app_name` | `string` | No | The name of the Android app which the contact is using. |
| `android_app_version` | `string` | No | The version of the Android app which the contact is using. |
| `android_device` | `string` | No | The Android device which the contact is using. |
| `android_last_seen_at` | `number` | No | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `android_os_version` | `string` | No | The version of the Android OS which the contact is using. |
| `android_sdk_version` | `string` | No | The version of the Android SDK which the contact is using. |
| `avatar` | `table` | No |  |
| `browser` | `string` | No | The name of the browser which the contact is using. |
| `browser_language` | `string` | No | The language set by the browser which the contact is using. |
| `browser_version` | `string` | No | The version of the browser which the contact is using. |
| `companies` | `table` | No | An object with metadata about companies attached to a contact . |
| `created_at` | `number` | No | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `table` | No | The custom attributes which are set for the contact. |
| `email` | `string` | No | The contact's email. |
| `email_domain` | `string` | No | The contact's email domain. |
| `enabled_push_messaging` | `boolean` | No | If the user has enabled push messaging. |
| `external_id` | `string` | No | The unique identifier for the contact which is provided by the Client. |
| `has_hard_bounced` | `boolean` | No | Whether the contact has had an email sent to them hard bounce. |
| `id` | `string` | No | The unique identifier for the contact which is given by Intercom. |
| `ios_app_name` | `string` | No | The name of the iOS app which the contact is using. |
| `ios_app_version` | `string` | No | The version of the iOS app which the contact is using. |
| `ios_device` | `string` | No | The iOS device which the contact is using. |
| `ios_last_seen_at` | `number` | No | (Unix timestamp in seconds) The last time the contact used the iOS app. |
| `ios_os_version` | `string` | No | The version of iOS which the contact is using. |
| `ios_sdk_version` | `string` | No | The version of the iOS SDK which the contact is using. |
| `language_override` | `string` | No | A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change. |
| `last_contacted_at` | `number` | No | (Unix timestamp in seconds) The time when the contact was last messaged. |
| `last_email_clicked_at` | `number` | No | (Unix timestamp in seconds) The time when the contact last clicked a link in an email. |
| `last_email_opened_at` | `number` | No | (Unix timestamp in seconds) The time when the contact last opened an email. |
| `last_replied_at` | `number` | No | (Unix timestamp in seconds) The time when the contact last messaged in. |
| `last_seen_at` | `number` | No | (Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually). |
| `location` | `table` | No | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `boolean` | No | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `table` | No | A list of contacts that were merged into this contact. |
| `name` | `string` | No | The contacts name. |
| `notes` | `table` | No | An object containing notes meta data about the notes that a contact has. |
| `os` | `string` | No | The operating system which the contact is using. |
| `owner_id` | `string` | No | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `string` | No | The contacts phone. |
| `role` | `string` | No | The role of the contact. |
| `signed_up_at` | `number` | No | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `table` | No | An object containing social profiles that a contact has. |
| `tags` | `table` | No | An object containing tags meta data about the tags that a contact has. |
| `type` | `string` | No | The type of object. |
| `unsubscribed_from_emails` | `boolean` | No | Whether the contact is unsubscribed from emails. |
| `updated_at` | `number` | No | (Unix timestamp in seconds) The time when the contact was last updated. |
| `user` | `table` | Yes | The unique identifiers retained after converting or merging. |
| `visitor` | `table` | Yes | The unique identifiers to convert a single Visitor. |
| `workspace_id` | `string` | No | The id of the workspace which the contact belongs to. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `android_app_name` | - | - | - | - | - |
| `android_app_version` | - | - | - | - | - |
| `android_device` | - | - | - | - | - |
| `android_last_seen_at` | - | - | - | - | - |
| `android_os_version` | - | - | - | - | - |
| `android_sdk_version` | - | - | - | - | - |
| `avatar` | - | - | - | - | - |
| `browser` | - | - | - | - | - |
| `browser_language` | - | - | - | - | - |
| `browser_version` | - | - | - | - | - |
| `companies` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `custom_attributes` | - | - | - | - | - |
| `email` | - | - | - | - | - |
| `email_domain` | - | - | - | - | - |
| `enabled_push_messaging` | - | - | - | - | - |
| `external_id` | - | - | - | - | - |
| `has_hard_bounced` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `ios_app_name` | - | - | - | - | - |
| `ios_app_version` | - | - | - | - | - |
| `ios_device` | - | - | - | - | - |
| `ios_last_seen_at` | - | - | - | - | - |
| `ios_os_version` | - | - | - | - | - |
| `ios_sdk_version` | - | - | - | - | - |
| `language_override` | - | - | - | - | - |
| `last_contacted_at` | - | - | - | - | - |
| `last_email_clicked_at` | - | - | - | - | - |
| `last_email_opened_at` | - | - | - | - | - |
| `last_replied_at` | - | - | - | - | - |
| `last_seen_at` | - | - | - | - | - |
| `location` | - | - | - | - | - |
| `marked_email_as_spam` | - | - | - | - | - |
| `merge_history` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `notes` | - | - | - | - | - |
| `os` | - | - | - | - | - |
| `owner_id` | - | - | - | - | - |
| `phone` | - | - | - | - | - |
| `role` | - | - | - | - | - |
| `signed_up_at` | - | - | - | - | - |
| `social_profiles` | - | - | - | - | - |
| `tags` | - | - | - | - | - |
| `type` | - | - | Yes | - | - |
| `unsubscribed_from_emails` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `user` | - | - | - | - | - |
| `visitor` | - | - | - | - | - |
| `workspace_id` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Contact():create({
  user = --[[ table ]],
  visitor = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Contact():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Contact():load({ id = "contact_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Contact():remove({ id = "contact_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Contact():update({
  id = "contact_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContactEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContactAttachedCompanyEntity

```lua
local contact_attached_company = client:ContactAttachedCompany(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | No | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | No | The company id you have defined for the company. |
| `created_at` | `number` | No | The time the company was added in Intercom. |
| `custom_attributes` | `table` | No | The custom attributes you have set on the company. |
| `id` | `string` | No | The Intercom defined id representing the company. |
| `industry` | `string` | No | The industry that the company operates in. |
| `last_request_at` | `number` | No | The time the company last recorded making a request. |
| `monthly_spend` | `number` | No | How much revenue the company generates for your business. |
| `name` | `string` | No | The name of the company. |
| `notes` | `table` | No | The list of notes associated with the company |
| `plan` | `table` | No |  |
| `remote_created_at` | `number` | No | The time the company was created by you. |
| `segments` | `table` | No | The list of segments associated with the company |
| `session_count` | `number` | No | How many sessions the company has recorded. |
| `size` | `number` | No | The number of employees in the company. |
| `tags` | `table` | No | The list of tags associated with the company |
| `type` | `string` | No | Value is `company` |
| `updated_at` | `number` | No | The last time the company was updated. |
| `user_count` | `number` | No | The number of users in the company. |
| `website` | `string` | No | The URL for the company website. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ContactAttachedCompany():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContactAttachedCompanyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContactListEntity

```lua
local contact_list = client:ContactList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No | The list of contact objects |
| `pages` | `table` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `table` | No |  |
| `query` | `any` | Yes |  |
| `sort` | `table` | No | An optional object to sort the results by. |
| `total_count` | `number` | No | A count of the total number of objects. |
| `type` | `string` | No | Always list |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ContactList():create({
  query = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContactListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContactSegmentEntity

```lua
local contact_segment = client:ContactSegment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | No | The number of items in the user segment. |
| `created_at` | `number` | No | The time the segment was created. |
| `id` | `string` | No | The unique identifier representing the segment. |
| `name` | `string` | No | The name of the segment. |
| `person_type` | `string` | No | Type of the contact: contact (lead) or user. |
| `type` | `string` | No | The type of object. |
| `updated_at` | `number` | No | The time the segment was updated. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ContactSegment():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContactSegmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContentEntity

```lua
local content = client:Content(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Content():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContentImportSourceEntity

```lua
local content_import_source = client:ContentImportSource(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apply_audience_to_existing_content` | `boolean` | No | When true, the audience will be applied to all existing external pages belonging to this content import source. |
| `audience_ids` | `table` | No | The unique identifiers for the audiences associated with this content import source. |
| `created_at` | `number` | Yes | The time when the content import source was created. |
| `id` | `number` | Yes | The unique identifier for the content import source which is given by Intercom. |
| `last_synced_at` | `number` | Yes | The time when the content import source was last synced. |
| `status` | `string` | Yes | The status of the content import source. |
| `sync_behavior` | `string` | Yes | If you intend to create or update External Pages via the API, this should be set to `api`. |
| `type` | `string` | Yes | Always external_page |
| `updated_at` | `number` | Yes | The time when the content import source was last updated. |
| `url` | `string` | Yes | The URL of the root of the external source. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `apply_audience_to_existing_content` | - | - | - | - |
| `audience_ids` | - | - | - | - |
| `created_at` | - | - | - | - |
| `id` | - | - | - | - |
| `last_synced_at` | - | - | - | - |
| `status` | - | - | Yes | Yes |
| `sync_behavior` | - | - | - | - |
| `type` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `url` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ContentImportSource():create({
  created_at = --[[ number ]],
  id = --[[ number ]],
  last_synced_at = --[[ number ]],
  status = --[[ string ]],
  sync_behavior = --[[ string ]],
  type = --[[ string ]],
  updated_at = --[[ number ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ContentImportSource():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ContentImportSource():load({ id = "content_import_source_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ContentImportSource():update({
  id = "content_import_source_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentImportSourceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContentSearchEntity

```lua
local content_search = client:ContentSearch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No | The list of matched content items. |
| `pages` | `table` | No | Pagination metadata, including links to neighbouring pages. |
| `total_count` | `number` | No | Total number of results matching the query. |
| `type` | `string` | No | Always `list`. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ContentSearch():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentSearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContentSnippetEntity

```lua
local content_snippet = client:ContentSnippet(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `boolean` | No | Whether the content snippet is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `boolean` | No | Whether the content snippet is available for AI Copilot. |
| `ai_sales_agent_availability` | `boolean` | No | Whether the content snippet is available for AI Sales Agent. |
| `audience_ids` | `table` | No | The list of audience IDs this content snippet is targeted to for Fin AI Agent. |
| `body_markdown` | `string` | No | The body of the content snippet in markdown. |
| `chatbot_availability` | `number` | No | Deprecated. |
| `copilot_availability` | `number` | No | Deprecated. |
| `created_at` | `number` | No | The time the snippet was created as a UNIX timestamp. |
| `id` | `string` | No | The unique identifier for the content snippet. |
| `json_blocks` | `table` | No | The content blocks that make up the body of the snippet. |
| `locale` | `string` | No | The locale of the content snippet. |
| `title` | `string` | No | The title of the content snippet. |
| `type` | `string` | No | String representing the object's type. |
| `updated_at` | `number` | No | The time the snippet was last updated as a UNIX timestamp. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `ai_chatbot_availability` | - | - | - | - | - |
| `ai_copilot_availability` | - | - | - | - | - |
| `ai_sales_agent_availability` | - | - | - | - | - |
| `audience_ids` | - | - | - | - | - |
| `body_markdown` | - | - | - | - | - |
| `chatbot_availability` | - | - | - | - | - |
| `copilot_availability` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `json_blocks` | - | - | - | - | - |
| `locale` | - | - | - | - | - |
| `title` | - | - | Yes | - | - |
| `type` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ContentSnippet():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ContentSnippet():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ContentSnippet():load({ id = "content_snippet_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ContentSnippet():remove({ id = "content_snippet_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ContentSnippet():update({
  id = "content_snippet_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentSnippetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationEntity

```lua
local conversation = client:Conversation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_assignee_id` | `number` | No | The id of the admin assigned to the conversation. |
| `ai_agent` | `table` | No | Data related to AI Agent involvement in the conversation. |
| `ai_agent_participated` | `boolean` | No | Indicates whether the AI Agent participated in the conversation. |
| `attachment_urls` | `table` | No | A list of image URLs that will be added as attachments. |
| `body` | `string` | Yes | The content of the message. |
| `brand_id` | `string` | No | The unique identifier of the brand to associate with this conversation. |
| `channel` | `table` | No | The channel through which the conversation was initiated and its current channel. |
| `company` | `table` | No | The company associated with the conversation. |
| `company_id` | `string` | No | The ID of the company that the conversation is associated with. |
| `contacts` | `table` | No | The list of contacts (users or leads) involved in this conversation. |
| `conversation_id` | `string` | Yes | The unique identifier (given by Intercom) for the conversation or customer ticket to link to the tracker ticket. |
| `conversation_parts` | `table` | No | A list of Conversation Part objects for each part message in the conversation. |
| `conversation_rating` | `table` | No | The Conversation Rating object which contains information on the rating and/or remark added by a Contact and the Admin assigned to the conversation. |
| `created_at` | `number` | No | The time the conversation was created. |
| `custom_attributes` | `table` | No | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `external_references` | `table` | No | References linking this conversation to records in an external helpdesk or CRM system. |
| `first_contact_reply` | `table` | No | An object containing information on the first users message. |
| `from` | `table` | Yes |  |
| `id` | `string` | No | The id representing the conversation. |
| `linked_objects` | `table` | No | An object containing metadata about linked conversations and linked tickets. |
| `monitor_evaluations` | `table` | No | QA monitor evaluations that flagged this conversation. |
| `open` | `boolean` | No | Indicates whether a conversation is open (true) or closed (false). |
| `priority` | `string` | No | The priority level of the conversation. |
| `read` | `boolean` | No | Indicates whether a conversation has been read. |
| `sales_agent` | `table` | No | Data related to Sales Agent involvement in the conversation. |
| `sales_agent_participated` | `boolean` | No | Indicates whether the Sales Agent participated in the conversation. |
| `scorecards` | `table` | No | QA scorecard results for this conversation. |
| `sla_applied` | `table` | No | The SLA Applied object contains the details for which SLA has been applied to this conversation. |
| `snoozed_until` | `number` | No | If set this is the time in the future when this conversation will be marked as open. |
| `source` | `table` | No | The type of the conversation part that started this conversation. |
| `state` | `string` | No | Can be set to "open", "closed" or "snoozed". |
| `statistics` | `table` | No | A Statistics object containing all information required for reporting, with timestamps and calculated metrics. |
| `subject` | `string` | No | The title of the email. |
| `tags` | `table` | No | A list of tags objects associated with a conversation |
| `team_assignee_id` | `number` | No | The id of the team assigned to the conversation. |
| `teammates` | `table` | No | The list of teammates who participated in the conversation (wrote at least one conversation part). |
| `title` | `string` | No | The title given to the conversation. |
| `type` | `string` | No | Always conversation. |
| `updated_at` | `number` | No | The last time the conversation was updated. |
| `waiting_since` | `number` | No | The last time a Contact responded to an Admin. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Conversation():create({
  body = --[[ string ]],
  conversation_id = --[[ string ]],
  from = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Conversation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Conversation():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Conversation():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Conversation():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationAttributeEntity

```lua
local conversation_attribute = client:ConversationAttribute(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `string` | No |  |
| `archived` | `boolean` | No |  |
| `created_at` | `number` | No |  |
| `data_type` | `string` | No |  |
| `description` | `string` | No | Readable description of the attribute. |
| `id` | `number` | No |  |
| `label` | `string` | Yes | The label for the new option. |
| `multiline` | `boolean` | No | (String data type only) Whether this string attribute is multiline. |
| `name` | `string` | No | Name of the attribute. |
| `reference` | `table` | Yes | (Relationship data type only) Reference configuration for related objects. |
| `required` | `boolean` | No | Whether this attribute is required. |
| `type` | `string` | No |  |
| `updated_at` | `number` | No |  |
| `visible_to_team_ids` | `table` | No | Team IDs that can see this attribute. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ConversationAttribute():create({
  label = --[[ string ]],
  reference = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConversationAttribute():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ConversationAttribute():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ConversationAttribute():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationAttributeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationAttributeListEntity

```lua
local conversation_attribute_list = client:ConversationAttributeList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No | A list of conversation attributes. |
| `type` | `string` | No | The type of the object. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ConversationAttributeList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationAttributeListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationListEntity

```lua
local conversation_list = client:ConversationList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversations` | `table` | No | The list of conversation objects |
| `pages` | `table` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `table` | No |  |
| `query` | `any` | Yes |  |
| `total_count` | `number` | No | A count of the total number of objects. |
| `type` | `string` | No | Always conversation.list |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ConversationList():create({
  query = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationParticipantEntity

```lua
local conversation_participant = client:ConversationParticipant(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ConversationParticipant():create({
  id = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ConversationParticipant():remove({ contact_id = "contact_id", conversation_id = "conversation_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationParticipantEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomObjectInstanceEntity

```lua
local custom_object_instance = client:CustomObjectInstance(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No |  |
| `custom_attributes` | `table` | No | The custom attributes which are set for the Custom Object instance. |
| `data` | `table` | No | An array of Custom Object Instance objects. |
| `external_created_at` | `string` | No | The time when the Custom Object instance was created in the external system it originated from. |
| `external_id` | `string` | No | A unique identifier for the Custom Object instance in the external system it originated from. |
| `external_updated_at` | `string` | No | The time when the Custom Object instance was last updated in the external system it originated from. |
| `id` | `string` | No |  |
| `pages` | `table` | No | The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests. |
| `total_count` | `number` | No | A count of the total number of custom object instances. |
| `type` | `string` | No | The type of the object - `list`. |
| `updated_at` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomObjectInstance():create({
  id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomObjectInstance():load({ id = "custom_object_instance_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomObjectInstance():remove({ id = "custom_object_instance_id", external_id = "external_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomObjectInstanceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DataEntity

```lua
local data = client:Data(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at_after` | `number` | Yes | The start date that you request data for. |
| `created_at_before` | `number` | Yes | The end date that you request data for. |
| `download_expires_at` | `string` | No | The time after which you will not be able to access the data. |
| `download_url` | `string` | No | The location where you can download your data. |
| `id` | `string` | No |  |
| `job_identifier` | `string` | No | The identifier for your job. |
| `status` | `string` | No | The current state of your job. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Data():create({
  created_at_after = --[[ number ]],
  created_at_before = --[[ number ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Data():load({ id = "data_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DataAttributeEntity

```lua
local data_attribute = client:DataAttribute(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `string` | No | Teammate who created the attribute. |
| `api_writable` | `boolean` | No | Can this attribute be updated through API |
| `archived` | `boolean` | No | Is this attribute archived. |
| `created_at` | `number` | No | The time the attribute was created as a UTC Unix timestamp |
| `custom` | `boolean` | No | Set to true if this is a CDA |
| `data_type` | `string` | No | The data type of the attribute. |
| `description` | `string` | No | Readable description of the attribute. |
| `full_name` | `string` | No | Full name of the attribute. |
| `id` | `number` | No | The unique identifier for the data attribute which is given by Intercom. |
| `label` | `string` | No | Readable name of the attribute (i.e. |
| `messenger_writable` | `boolean` | No | Can this attribute be updated by the Messenger |
| `model` | `string` | No | Value is `contact` for user/lead attributes and `company` for company attributes. |
| `name` | `string` | No | Name of the attribute. |
| `options` | `table` | No | List of predefined options for attribute value. |
| `type` | `string` | No | Value is `data_attribute`. |
| `ui_writable` | `boolean` | No | Can this attribute be updated in the UI |
| `updated_at` | `number` | No | The time the attribute was last updated as a UTC Unix timestamp |

### Field Usage by Operation

| Field | list | create | update |
| --- | --- | --- | --- |
| `admin_id` | - | - | - |
| `api_writable` | - | - | - |
| `archived` | - | - | - |
| `created_at` | - | - | - |
| `custom` | - | - | - |
| `data_type` | - | - | - |
| `description` | - | - | - |
| `full_name` | - | - | - |
| `id` | - | - | - |
| `label` | - | - | - |
| `messenger_writable` | - | - | - |
| `model` | - | Yes | - |
| `name` | - | Yes | - |
| `options` | - | - | - |
| `type` | - | - | - |
| `ui_writable` | - | - | - |
| `updated_at` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DataAttribute():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DataAttribute():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DataAttribute():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataAttributeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DataConnectorEntity

```lua
local data_connector = client:DataConnector(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audiences` | `table` | No | The audience types this connector targets. |
| `body` | `string` | No | The request body template. |
| `bypass_authentication` | `boolean` | No | Whether authentication is bypassed for this connector. |
| `client_function_name` | `string` | No | The name of the client-side function, if applicable. |
| `client_function_timeout_ms` | `number` | No | Timeout in milliseconds for the client function, if applicable. |
| `configuration_response_type` | `string` | No | The expected response format from the connector. |
| `created_at` | `string` | No | The time the data connector was created. |
| `created_by_admin_id` | `string` | No | The ID of the admin who created this connector. |
| `customer_authentication` | `boolean` | No | Whether OTP authentication is enabled for this connector. |
| `data_inputs` | `table` | No | The input parameters accepted by this data connector. |
| `data_transformation_type` | `string` | No | The type of data transformation applied to the response. |
| `description` | `string` | No | A description of what this data connector does. |
| `direct_fin_usage` | `boolean` | No | Whether this connector is used directly by Fin. |
| `execution_results_url` | `string` | No | The URL path to fetch execution results for this connector. |
| `execution_type` | `string` | No | How the connector executes. |
| `headers` | `table` | No | HTTP headers for the request. |
| `http_method` | `string` | No | The HTTP method used by the data connector. |
| `id` | `string` | No | The unique identifier for the data connector. |
| `mock_response` | `table` | No | A sample JSON response from the external API. |
| `name` | `string` | No | The name of the data connector. |
| `object_mappings` | `table` | No | Mappings from connector response objects to Intercom objects. |
| `response_fields` | `table` | No | The fields returned in the connector response. |
| `state` | `string` | No | The current state of the data connector. |
| `token_ids` | `table` | No | IDs of authentication tokens associated with this connector. |
| `type` | `string` | No | The type of object - `data_connector`. |
| `updated_at` | `string` | No | The time the data connector was last updated. |
| `updated_by_admin_id` | `string` | No | The ID of the admin who last updated this connector. |
| `url` | `string` | No | The URL of the external API endpoint. |
| `validate_missing_attributes` | `boolean` | No | Whether to validate missing attributes before execution. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `audiences` | - | - | - | - |
| `body` | - | - | - | - |
| `bypass_authentication` | - | - | - | - |
| `client_function_name` | - | - | - | - |
| `client_function_timeout_ms` | - | - | - | - |
| `configuration_response_type` | - | - | - | - |
| `created_at` | - | - | - | - |
| `created_by_admin_id` | - | - | - | - |
| `customer_authentication` | - | - | - | - |
| `data_inputs` | - | - | - | - |
| `data_transformation_type` | - | - | - | - |
| `description` | - | - | - | - |
| `direct_fin_usage` | - | - | - | - |
| `execution_results_url` | - | - | - | - |
| `execution_type` | - | - | - | - |
| `headers` | - | - | - | - |
| `http_method` | - | - | - | - |
| `id` | - | - | - | - |
| `mock_response` | - | - | - | - |
| `name` | - | - | Yes | - |
| `object_mappings` | - | - | - | - |
| `response_fields` | - | - | - | - |
| `state` | - | - | - | - |
| `token_ids` | - | - | - | - |
| `type` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `updated_by_admin_id` | - | - | - | - |
| `url` | - | - | - | - |
| `validate_missing_attributes` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DataConnector():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DataConnector():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DataConnector():load({ id = "data_connector_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DataConnector():update({
  id = "data_connector_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataConnectorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DataConnectorExecutionResultEntity

```lua
local data_connector_execution_result = client:DataConnectorExecutionResult(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversation_id` | `string` | No | The conversation associated with this execution, if any. |
| `created_at` | `string` | No | The time the execution occurred. |
| `data_connector_id` | `string` | No | The unique identifier of the data connector that produced this result. |
| `error_message` | `string` | No | A human-readable error message. |
| `error_type` | `string` | No | The type of error that occurred, if any. |
| `execution_time_ms` | `number` | No | The execution time in milliseconds. |
| `http_method` | `string` | No | The HTTP method used for the request. |
| `http_status` | `number` | No | The HTTP status code returned by the external API. |
| `id` | `string` | No | The unique identifier for the execution result. |
| `raw_response_body` | `string` | No | The raw (unmapped) response body. |
| `request_body` | `string` | No | The request body sent to the external API. |
| `request_url` | `string` | No | The request URL. |
| `response_body` | `string` | No | The response body from the external API. |
| `source_id` | `string` | No | The identifier of the source that triggered this execution. |
| `source_type` | `string` | No | The type of source that triggered this execution. |
| `success` | `boolean` | No | Whether the execution was successful. |
| `type` | `string` | No | The type of object - `data_connector.execution`. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DataConnectorExecutionResult():load({ id = "data_connector_execution_result_id", data_connector_id = "data_connector_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataConnectorExecutionResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DataConnectorExecutionResultListEntity

```lua
local data_connector_execution_result_list = client:DataConnectorExecutionResultList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DataConnectorExecutionResultList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataConnectorExecutionResultListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DataEventEntity

```lua
local data_event = client:DataEvent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | The time the event occurred as a UTC Unix timestamp |
| `email` | `string` | No | An email address for your user. |
| `event_name` | `string` | No | The name of the event that occurred. |
| `event_summaries` | `table` | No | A list of event summaries for the user. |
| `id` | `string` | No | The unique identifier for the contact (lead or user) which is given by Intercom. |
| `metadata` | `table` | No | Optional metadata about the event. |
| `user_id` | `string` | No | Your identifier for the user. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DataEvent():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataEventEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DataEventSummaryEntity

```lua
local data_event_summary = client:DataEventSummary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | No | The number of times the event was sent |
| `description` | `string` | No | The description of the event |
| `first` | `string` | No | The first time the event was sent |
| `last` | `string` | No | The last time the event was sent |
| `name` | `string` | No | The name of the event |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DataEventSummary():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataEventSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DataExportEntity

```lua
local data_export = client:DataExport(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `download_expires_at` | `string` | No | The time after which you will not be able to access the data. |
| `download_url` | `string` | No | The location where you can download your data. |
| `job_identifier` | `string` | No | The identifier for your job. |
| `status` | `string` | No | The current state of your job. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DataExport():create({
  job_identifier = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataExportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedEntity

```lua
local deleted = client:Deleted(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deleted_at` | `number` | No | The time when the conversation was deleted. |
| `id` | `string` | No | The ID of the deleted conversation. |
| `metrics_retained` | `boolean` | No | Whether reporting metrics are retained for this conversation ID |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Deleted():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedArticleObjectEntity

```lua
local deleted_article_object = client:DeletedArticleObject(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeletedArticleObject():remove({ article_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedArticleObjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedCompanyObjectEntity

```lua
local deleted_company_object = client:DeletedCompanyObject(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeletedCompanyObject():remove({ company_id = "company_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedCompanyObjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedDataConnectorObjectEntity

```lua
local deleted_data_connector_object = client:DeletedDataConnectorObject(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeletedDataConnectorObject():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedDataConnectorObjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedInternalArticleObjectEntity

```lua
local deleted_internal_article_object = client:DeletedInternalArticleObject(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `boolean` | No | Whether the internal article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `boolean` | No | Whether the internal article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `boolean` | No | Whether the internal article should be available for AI Sales Agent. |
| `audience_ids` | `table` | No | The list of audience IDs to target this internal article to for Fin AI Agent. |
| `author_id` | `number` | Yes | The id of the author of the article. |
| `body` | `string` | No | The content of the article in HTML. |
| `body_markdown` | `string` | No | The content of the article in markdown. |
| `created_at` | `number` | No | The time when the article was created. |
| `id` | `string` | No | The unique identifier for the article which is given by Intercom. |
| `locale` | `string` | No | The default locale of the article. |
| `owner_id` | `number` | Yes | The id of the owner of the article. |
| `title` | `string` | Yes | The title of the article. |
| `type` | `string` | No | The type of object - `internal_article`. |
| `updated_at` | `number` | No | The time when the article was last updated. |

### Field Usage by Operation

| Field | list | create | remove |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | - | - | - |
| `ai_copilot_availability` | - | - | - |
| `ai_sales_agent_availability` | - | - | - |
| `audience_ids` | - | - | - |
| `author_id` | Yes | - | - |
| `body` | - | - | - |
| `body_markdown` | - | - | - |
| `created_at` | - | - | - |
| `id` | - | - | - |
| `locale` | - | - | - |
| `owner_id` | Yes | - | - |
| `title` | Yes | - | - |
| `type` | - | - | - |
| `updated_at` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DeletedInternalArticleObject():create({
  author_id = --[[ number ]],
  owner_id = --[[ number ]],
  title = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DeletedInternalArticleObject():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeletedInternalArticleObject():remove({ internal_article_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedInternalArticleObjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeletedObjectEntity

```lua
local deleted_object = client:DeletedObject(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeletedObject():remove({ news_item_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedObjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmailEntity

```lua
local email = client:Email(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brand_id` | `string` | No | Associated brand identifier |
| `created_at` | `number` | No | Unix timestamp of creation |
| `domain` | `string` | No | Domain portion of the email address |
| `email` | `string` | No | Full sender email address |
| `forwarded_email_last_received_at` | `number` | No | Unix timestamp of last forwarded email received (null if never) |
| `forwarding_enabled` | `boolean` | No | Whether email forwarding is active |
| `id` | `string` | No | Unique email setting identifier |
| `type` | `string` | No | The type of object |
| `updated_at` | `number` | No | Unix timestamp of last modification |
| `verified` | `boolean` | No | Whether the email address has been verified |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Email():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Email():load({ id = "email_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ExternalPageEntity

```lua
local external_page = client:ExternalPage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_agent_availability` | `boolean` | Yes | Whether the external page should be used to answer questions by AI Agent. |
| `ai_copilot_availability` | `boolean` | Yes | Whether the external page should be used to answer questions by AI Copilot. |
| `ai_sales_agent_availability` | `boolean` | No | Whether the external page should be used to answer questions by AI Sales Agent. |
| `created_at` | `number` | Yes | The time when the external page was created. |
| `external_id` | `string` | Yes | The identifier for the external page which was given by the source. |
| `fin_availability` | `boolean` | No | Deprecated. |
| `html` | `string` | Yes | The body of the external page in HTML. |
| `id` | `string` | Yes | The unique identifier for the external page which is given by Intercom. |
| `last_ingested_at` | `number` | Yes | The time when the external page was last ingested. |
| `locale` | `string` | Yes | Always en |
| `source_id` | `number` | Yes | The unique identifier for the source of the external page which was given by Intercom. |
| `title` | `string` | Yes | The title of the external page. |
| `type` | `string` | Yes | Always external_page |
| `updated_at` | `number` | Yes | The time when the external page was last updated. |
| `url` | `string` | No | The URL of the external page. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `ai_agent_availability` | - | - | Yes | - | - |
| `ai_copilot_availability` | - | - | Yes | - | - |
| `ai_sales_agent_availability` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `external_id` | - | - | - | Yes | - |
| `fin_availability` | - | - | - | - | - |
| `html` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `last_ingested_at` | - | - | - | - | - |
| `locale` | - | - | - | - | - |
| `source_id` | - | - | - | - | - |
| `title` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `url` | - | - | - | Yes | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ExternalPage():create({
  ai_agent_availability = --[[ boolean ]],
  ai_copilot_availability = --[[ boolean ]],
  created_at = --[[ number ]],
  external_id = --[[ string ]],
  html = --[[ string ]],
  id = --[[ string ]],
  last_ingested_at = --[[ number ]],
  locale = --[[ string ]],
  source_id = --[[ number ]],
  title = --[[ string ]],
  type = --[[ string ]],
  updated_at = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ExternalPage():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ExternalPage():load({ id = "external_page_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ExternalPage():remove({ id = "external_page_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ExternalPage():update({
  id = "external_page_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExternalPageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FinAgentEntity

```lua
local fin_agent = client:FinAgent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `table` | No | An array of attachments to include with the message. |
| `conversation` | `table` | No | Conversation-related attribute errors. |
| `conversation_id` | `string` | No | The external ID of the rated conversation. |
| `conversation_metadata` | `table` | No | Metadata about the conversation, including history and attributes. |
| `message` | `table` | Yes | A message exchanged within a Fin Agent conversation. |
| `rating` | `string` | No | The rating now recorded on the conversation. |
| `remark` | `string` | No | Optional free-text comment the user left alongside the rating. |
| `status` | `string` | No | The result of the submission. |
| `user` | `table` | No | User-related attribute errors. |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `attachments` | - |
| `conversation` | - |
| `conversation_id` | Yes |
| `conversation_metadata` | - |
| `message` | - |
| `rating` | Yes |
| `remark` | - |
| `status` | - |
| `user` | Yes |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FinAgent():create({
  message = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FinAgentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HandlingEventEntity

```lua
local handling_event = client:HandlingEvent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `string` | No | Optional reason for the event (e.g., "Paused", "Away") |
| `teammate` | `table` | Yes | A reference to a teammate |
| `timestamp` | `string` | Yes | ISO8601 timestamp when the event occurred |
| `type` | `string` | Yes | The type of handling event |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:HandlingEvent():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HandlingEventEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HelpCenterEntity

```lua
local help_center = client:HelpCenter(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ar` | `table` | No | The content of the group in Arabic |
| `bg` | `table` | No | The content of the group in Bulgarian |
| `bs` | `table` | No | The content of the group in Bosnian |
| `ca` | `table` | No | The content of the group in Catalan |
| `created_at` | `number` | No | The time when the Help Center was created. |
| `cs` | `table` | No | The content of the group in Czech |
| `custom_domain` | `string` | No | Custom domain configured for the help center |
| `da` | `table` | No | The content of the group in Danish |
| `de` | `table` | No | The content of the group in German |
| `default` | `boolean` | No | Whether this help center is the default for the workspace. |
| `description` | `string` | No | The description of the collection. |
| `display_name` | `string` | No | The display name of the Help Center only seen by teammates. |
| `el` | `table` | No | The content of the group in Greek |
| `en` | `table` | No | The content of the group in English |
| `es` | `table` | No | The content of the group in Spanish |
| `et` | `table` | No | The content of the group in Estonian |
| `fi` | `table` | No | The content of the group in Finnish |
| `fr` | `table` | No | The content of the group in French |
| `from_url` | `string` | No | The source URL that is redirected. |
| `he` | `table` | No | The content of the group in Hebrew |
| `help_center_id` | `string` | No | The unique identifier for the help center the redirect belongs to. |
| `hr` | `table` | No | The content of the group in Croatian |
| `hu` | `table` | No | The content of the group in Hungarian |
| `id` | `table` | No | The content of the group in Indonesian |
| `identifier` | `string` | No | The identifier of the Help Center. |
| `it` | `table` | No | The content of the group in Italian |
| `ja` | `table` | No | The content of the group in Japanese |
| `ko` | `table` | No | The content of the group in Korean |
| `locale` | `string` | No | The locale of the redirect's target. |
| `locales` | `table` | No | The locales in which the help center is available. |
| `lt` | `table` | No | The content of the group in Lithuanian |
| `lv` | `table` | No | The content of the group in Latvian |
| `mn` | `table` | No | The content of the group in Mongolian |
| `name` | `string` | No | The name of the collection. |
| `nb` | `table` | No | The content of the group in Norwegian |
| `nl` | `table` | No | The content of the group in Dutch |
| `parent_id` | `string` | No | The id of the parent collection. |
| `pl` | `table` | No | The content of the group in Polish |
| `pt` | `table` | No | The content of the group in Portuguese (Portugal) |
| `ptBR` | `table` | No | The content of the group in Portuguese (Brazil) |
| `ro` | `table` | No | The content of the group in Romanian |
| `ru` | `table` | No | The content of the group in Russian |
| `sl` | `table` | No | The content of the group in Slovenian |
| `sr` | `table` | No | The content of the group in Serbian |
| `sv` | `table` | No | The content of the group in Swedish |
| `target_id` | `string` | No | The unique identifier of the target article or collection. |
| `target_type` | `string` | No | The type of the redirect target. |
| `tr` | `table` | No | The content of the group in Turkish |
| `translated_content` | `table` | No | The Translated Content of an Group. |
| `type` | `string` | No | The type of object - group_translated_content. |
| `updated_at` | `number` | No | The time when the Help Center was last updated. |
| `url` | `string` | No | The URL for the help center, if you have a custom domain then this will show the URL using the custom domain. |
| `vi` | `table` | No | The content of the group in Vietnamese |
| `website_turned_on` | `boolean` | No | Whether the Help Center is turned on or not. |
| `workspace_id` | `string` | No | The id of the workspace which the Help Center belongs to. |
| `zhCN` | `table` | No | The content of the group in Chinese (China) |
| `zhTW` | `table` | No | The content of the group in Chinese (Taiwan) |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:HelpCenter():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:HelpCenter():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:HelpCenter():load({ collection_id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:HelpCenter():remove({ collection_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:HelpCenter():update({
  collection_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HelpCenterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InternalArticleEntity

```lua
local internal_article = client:InternalArticle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `boolean` | No | Whether the internal article is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `boolean` | No | Whether the internal article is available for AI Copilot. |
| `ai_sales_agent_availability` | `boolean` | No | Whether the internal article is available for AI Sales Agent. |
| `audience_ids` | `table` | No | The list of audience IDs this internal article is targeted to for Fin AI Agent. |
| `author_id` | `number` | No | The id of the author of the article. |
| `body` | `string` | No | The body of the article in HTML. |
| `body_markdown` | `string` | No | The body of the article in markdown. |
| `created_at` | `number` | No | The time when the article was created. |
| `id` | `string` | No | The unique identifier for the article which is given by Intercom. |
| `locale` | `string` | No | The default locale of the article. |
| `owner_id` | `number` | No | The id of the owner of the article. |
| `title` | `string` | No | The title of the article. |
| `type` | `string` | No | The type of object - `internal_article`. |
| `updated_at` | `number` | No | The time when the article was last updated. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:InternalArticle():load({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:InternalArticle():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InternalArticleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InternalArticleSearchEntity

```lua
local internal_article_search = client:InternalArticleSearch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No | An object containing the results of the search. |
| `pages` | `table` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `number` | No | The total number of Internal Articles matching the search query |
| `type` | `string` | No | The type of the object - `list`. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:InternalArticleSearch():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InternalArticleSearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IpAllowlistEntity

```lua
local ip_allowlist = client:IpAllowlist(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | No | Whether the IP allowlist is enabled for the workspace. |
| `ip_allowlist` | `table` | No | List of allowed IP addresses and/or IP ranges in CIDR notation. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IpAllowlist():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IpAllowlist():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IpAllowlistEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## JobEntity

```lua
local job = client:Job(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The id of the job that's currently being processed or has completed. |
| `resource_id` | `string` | No | The id of the resource created during job execution (e.g. |
| `resource_type` | `string` | No | The type of resource created during job execution. |
| `resource_url` | `string` | No | The url of the resource created during job exeuction. |
| `skip_notifications` | `boolean` | No | Option to disable notifications when a Ticket is created. |
| `status` | `string` | No | The status of the job execution. |
| `type` | `string` | No | The type of the object |
| `url` | `string` | No | API endpoint URL to check the job status. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Job():create({
  id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Job():load({ job_id = "job_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JobEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MacroEntity

```lua
local macro = client:Macro(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_on` | `table` | No | Where the macro is available for use. |
| `body` | `string` | No | The body of the macro in HTML format with placeholders transformed to XML-like format. |
| `body_text` | `string` | No | The plain text version of the macro body with original Intercom placeholder format. |
| `created_at` | `string` | No | The time the macro was created in ISO 8601 format. |
| `id` | `string` | No | The unique identifier for the macro. |
| `name` | `string` | No | The name of the macro. |
| `type` | `string` | No | String representing the object's type. |
| `updated_at` | `string` | No | The time the macro was last updated in ISO 8601 format. |
| `visible_to` | `string` | No | Who can view this macro. |
| `visible_to_team_ids` | `table` | No | The team IDs that can view this macro when visible_to is set to specific_teams. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Macro():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Macro():load({ id = "macro_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MacroEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MergeHistoryEntity

```lua
local merge_history = client:MergeHistory(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `merged_at` | `number` | No | (Unix timestamp in seconds) The time when the merge occurred. |
| `source_contact_id` | `string` | No | The Intercom ID of the contact that was merged into this contact. |
| `source_contact_role` | `string` | No | The role of the contact that was merged in. |
| `type` | `string` | No | The type of object. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MergeHistory():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MergeHistoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MessageEntity

```lua
local message = client:Message(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bcc` | `any` | No |  |
| `body` | `string` | Yes | The message body, which may contain HTML. |
| `cc` | `any` | No |  |
| `conversation_id` | `string` | No | The associated conversation_id |
| `create_conversation_without_contact_reply` | `boolean` | No | Whether a conversation should be opened in the inbox for the message without the contact replying. |
| `created_at` | `number` | Yes | The time the conversation was created. |
| `from` | `table` | Yes | The sender of the message. |
| `id` | `string` | Yes | The id representing the message. |
| `message_type` | `string` | Yes | The type of message that was sent. |
| `subject` | `string` | No | The subject of the message. |
| `template` | `string` | No | The style of the outgoing message. |
| `to` | `any` | No |  |
| `type` | `string` | Yes | The type of the message |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `bcc` | - |
| `body` | Yes |
| `cc` | - |
| `conversation_id` | - |
| `create_conversation_without_contact_reply` | - |
| `created_at` | Yes |
| `from` | - |
| `id` | - |
| `message_type` | Yes |
| `subject` | - |
| `template` | - |
| `to` | - |
| `type` | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Message():create({
  body = --[[ string ]],
  created_at = --[[ number ]],
  from = --[[ table ]],
  id = --[[ string ]],
  message_type = --[[ string ]],
  type = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NewsItemEntity

```lua
local news_item = client:NewsItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No | The news item body, which may contain HTML. |
| `cover_image_url` | `string` | No | URL of the image used as cover. |
| `created_at` | `number` | No | Timestamp for when the news item was created. |
| `deliver_silently` | `boolean` | No | When set to true, the news item will appear in the messenger newsfeed without showing a notification badge. |
| `id` | `string` | No | The unique identifier for the news item which is given by Intercom. |
| `labels` | `table` | No | Label names displayed to users to categorize the news item. |
| `newsfeed_assignments` | `table` | No | A list of newsfeed_assignments to assign to the specified newsfeed. |
| `reactions` | `table` | No | Ordered list of emoji reactions to the news item. |
| `sender_id` | `number` | No | The id of the sender of the news item. |
| `state` | `string` | No | News items will not be visible to your users in the assigned newsfeeds until they are set live. |
| `title` | `string` | No | The title of the news item. |
| `type` | `string` | No | The type of object. |
| `updated_at` | `number` | No | Timestamp for when the news item was last updated. |
| `workspace_id` | `string` | No | The id of the workspace which the news item belongs to. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `body` | - | - | - |
| `cover_image_url` | - | - | - |
| `created_at` | - | - | - |
| `deliver_silently` | - | - | - |
| `id` | - | - | - |
| `labels` | - | - | - |
| `newsfeed_assignments` | - | - | - |
| `reactions` | - | - | - |
| `sender_id` | - | Yes | Yes |
| `state` | - | - | - |
| `title` | - | Yes | Yes |
| `type` | - | - | - |
| `updated_at` | - | - | - |
| `workspace_id` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:NewsItem():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NewsItem():load({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NewsItem():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NewsItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NewsfeedEntity

```lua
local newsfeed = client:Newsfeed(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | Timestamp for when the newsfeed was created. |
| `id` | `string` | No | The unique identifier for the newsfeed which is given by Intercom. |
| `name` | `string` | No | The name of the newsfeed. |
| `type` | `string` | No | The type of object. |
| `updated_at` | `number` | No | Timestamp for when the newsfeed was last updated. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Newsfeed():load({ id = "newsfeed_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NewsfeedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NoteEntity

```lua
local note = client:Note(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `string` | No | The unique identifier of the admin creating the note. |
| `author` | `table` | No | Optional. |
| `body` | `string` | No | The body text of the note. |
| `company` | `table` | No | Represents the company that the note was created about. |
| `contact` | `table` | No | Represents the contact that the note was created about. |
| `created_at` | `number` | No | The time the note was created. |
| `id` | `string` | No | The id of the note. |
| `type` | `string` | No | String representing the object's type. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `admin_id` | - | - | - |
| `author` | - | - | - |
| `body` | - | - | Yes |
| `company` | - | - | - |
| `contact` | - | - | - |
| `created_at` | - | - | - |
| `id` | - | - | - |
| `type` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Note():create({
  company_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Note():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Note():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NoteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OfficeHourEntity

```lua
local office_hour = client:OfficeHour(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | The time the schedule was created as a Unix timestamp. |
| `id` | `string` | No | The unique identifier for the office hours schedule. |
| `name` | `string` | Yes | The name of the office hours schedule. |
| `time_intervals` | `table` | Yes | The open intervals for the schedule. |
| `time_zone_name` | `string` | Yes | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | `boolean` | No | Whether the schedule is open 24/7. |
| `type` | `string` | No | The type of the object - always `office_hours_schedule`. |
| `updated_at` | `number` | No | The time the schedule was last updated as a Unix timestamp. |

### Field Usage by Operation

| Field | list | create | remove |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `id` | - | - | - |
| `name` | Yes | - | - |
| `time_intervals` | Yes | - | - |
| `time_zone_name` | Yes | - | - |
| `twenty_four_seven` | - | - | - |
| `type` | - | - | - |
| `updated_at` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OfficeHour():create({
  name = --[[ string ]],
  time_intervals = --[[ table ]],
  time_zone_name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OfficeHour():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:OfficeHour():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OfficeHourEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OfficeHoursExceptionEntity

```lua
local office_hours_exception = client:OfficeHoursException(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | The time the exception was created as a Unix timestamp. |
| `exception_date` | `string` | No | The date the exception applies to, in `YYYY-MM-DD` format. |
| `exception_type` | `string` | No | `closed` means the workspace is closed all day; `custom_hours` replaces the regular hours with `time_intervals`. |
| `id` | `string` | No | The unique identifier for the office hours exception. |
| `name` | `string` | No | An optional name for the exception. |
| `office_hours_schedule_id` | `string` | No | The unique identifier for the schedule this exception belongs to. |
| `recurring_annually` | `boolean` | No | Whether the exception repeats every year on the same date. |
| `time_intervals` | `table` | No | The open intervals for the exception date. |
| `type` | `string` | No | The type of the object - always `office_hours_exception`. |
| `updated_at` | `number` | No | The time the exception was last updated as a Unix timestamp. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - |
| `exception_date` | - | - | Yes | - |
| `exception_type` | - | - | Yes | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |
| `office_hours_schedule_id` | - | - | - | - |
| `recurring_annually` | - | - | - | - |
| `time_intervals` | - | - | - | - |
| `type` | - | - | - | - |
| `updated_at` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OfficeHoursException():create({
  office_hours_schedule_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OfficeHoursException():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OfficeHoursException():load({ id = "office_hours_exception_id", office_hours_schedule_id = "office_hours_schedule_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OfficeHoursException():update({
  id = "office_hours_exception_id",
  office_hours_schedule_id = "office_hours_schedule_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OfficeHoursExceptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OfficeHoursScheduleEntity

```lua
local office_hours_schedule = client:OfficeHoursSchedule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | The time the schedule was created as a Unix timestamp. |
| `id` | `string` | No | The unique identifier for the office hours schedule. |
| `name` | `string` | No | The name of the office hours schedule. |
| `time_intervals` | `table` | No | The open intervals that make up the weekly schedule. |
| `time_zone_name` | `string` | No | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | `boolean` | No | Whether the schedule is open 24/7. |
| `type` | `string` | No | The type of the object - always `office_hours_schedule`. |
| `updated_at` | `number` | No | The time the schedule was last updated as a Unix timestamp. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OfficeHoursSchedule():load({ id = "office_hours_schedule_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OfficeHoursSchedule():update({
  id = "office_hours_schedule_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OfficeHoursScheduleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PaginatedEntity

```lua
local paginated = client:Paginated(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No | An array of Objects |
| `pages` | `table` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `number` | No | A count of the total number of objects. |
| `type` | `string` | No | The type of object |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Paginated():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaginatedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PhoneSwitchEntity

```lua
local phone_switch = client:PhoneSwitch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_attributes` | `table` | No | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `phone` | `string` | No | Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger. |
| `type` | `string` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `custom_attributes` | - |
| `phone` | Yes |
| `type` | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PhoneSwitch():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PhoneSwitchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReportingDataEntity

```lua
local reporting_data = client:ReportingData(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `download_expires_at` | `string` | No |  |
| `download_url` | `string` | No |  |
| `job_identifier` | `string` | No |  |
| `status` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ReportingData():load({ app_id = "app_id", job_identifier = "job_identifier" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportingDataEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReportingDataExportEntity

```lua
local reporting_data_export = client:ReportingDataExport(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute_ids` | `table` | Yes |  |
| `attributes` | `table` | No |  |
| `dataset_id` | `string` | Yes |  |
| `default_time_attribute_id` | `string` | No |  |
| `description` | `string` | No |  |
| `download_expires_at` | `string` | No |  |
| `download_url` | `string` | No |  |
| `end_time` | `number` | Yes |  |
| `id` | `string` | No |  |
| `job_identifier` | `string` | No |  |
| `name` | `string` | No |  |
| `start_time` | `number` | Yes |  |
| `status` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ReportingDataExport():create({
  attribute_ids = --[[ table ]],
  dataset_id = --[[ string ]],
  end_time = --[[ number ]],
  start_time = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ReportingDataExport():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportingDataExportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SegmentEntity

```lua
local segment = client:Segment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | No | The number of items in the user segment. |
| `created_at` | `number` | No | The time the segment was created. |
| `id` | `string` | No | The unique identifier representing the segment. |
| `name` | `string` | No | The name of the segment. |
| `person_type` | `string` | No | Type of the contact: contact (lead) or user. |
| `type` | `string` | No | The type of object. |
| `updated_at` | `number` | No | The time the segment was updated. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Segment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Segment():load({ id = "segment_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SegmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SideConversationEntity

```lua
local side_conversation = client:SideConversation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversation_parts` | `table` | No | The conversation parts (messages) in this side conversation. |
| `side_conversation_id` | `string` | No | The unique identifier for the side conversation. |
| `total_count` | `number` | No | The total number of conversation parts in this side conversation. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SideConversation():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SideConversationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionEntity

```lua
local subscription = client:Subscription(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent_type` | `string` | No | Describes the type of consent. |
| `content_types` | `table` | No | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `table` | No | A translation object contains the localised details of a subscription type. |
| `id` | `string` | No | The unique identifier representing the subscription type. |
| `state` | `string` | No | The state of the subscription type. |
| `translations` | `table` | No | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `type` | `string` | No | The type of the object - subscription |

### Field Usage by Operation

| Field | list | create | remove |
| --- | --- | --- | --- |
| `consent_type` | - | Yes | - |
| `content_types` | - | - | - |
| `default_translation` | - | - | - |
| `id` | - | Yes | - |
| `state` | - | - | - |
| `translations` | - | - | - |
| `type` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Subscription():create({
  contact_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Subscription():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Subscription():remove({ contact_id = "contact_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionTypeEntity

```lua
local subscription_type = client:SubscriptionType(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent_type` | `string` | No | Describes the type of consent. |
| `content_types` | `table` | No | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `table` | No | A translation object contains the localised details of a subscription type. |
| `id` | `string` | No | The unique identifier representing the subscription type. |
| `state` | `string` | No | The state of the subscription type. |
| `translations` | `table` | No | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `type` | `string` | No | The type of the object - subscription |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriptionType():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TagEntity

```lua
local tag = client:Tag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `string` | No | Optional id of the teammate to attribute the tagging to. |
| `applied_at` | `number` | No | The time when the tag was applied to the object. |
| `applied_by` | `table` | No | The admin who applied the tag. |
| `companies` | `table` | No |  |
| `id` | `string` | No | The id of the tag |
| `name` | `string` | No | The name of the tag |
| `type` | `string` | No | value is "tag" |
| `users` | `table` | No |  |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `admin_id` | - | - | Yes | - |
| `applied_at` | - | - | - | - |
| `applied_by` | - | - | - | - |
| `companies` | - | - | - | - |
| `id` | - | - | Yes | - |
| `name` | - | - | - | - |
| `type` | - | - | - | - |
| `users` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Tag():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Tag():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Tag():load({ id = "tag_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Tag():remove({ id = "tag_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamEntity

```lua
local team = client:Team(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_ids` | `table` | No | The list of admin IDs that are a part of the team. |
| `admin_priority_level` | `table` | No | Admin priority levels for the team |
| `assignment_limit` | `number` | No | The assignment limit for the team. |
| `distribution_method` | `string` | No | Describes how assignments are distributed among the team members |
| `id` | `string` | No | The id of the team |
| `name` | `string` | No | The name of the team |
| `type` | `string` | No | Value is always "team" |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Team():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Team():load({ id = "team_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamMetricListEntity

```lua
local team_metric_list = client:TeamMetricList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TeamMetricList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamMetricListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TicketEntity

```lua
local ticket = client:Ticket(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_assignee_id` | `number` | No | The id representing the admin assigned to the ticket. |
| `attributes` | `table` | No | The attributes set on the ticket. |
| `category` | `string` | No | Category of the Ticket. |
| `contacts` | `table` | No | The list of contacts affected by a ticket. |
| `created_at` | `number` | No | The time the ticket was created as a UTC Unix timestamp. |
| `id` | `string` | No | The unique identifier for the ticket which is given by Intercom. |
| `is_shared` | `boolean` | No | Whether or not the ticket is shared with the customer. |
| `linked_objects` | `table` | No | An object containing metadata about linked conversations and linked tickets. |
| `open` | `boolean` | No | Whether or not the ticket is open. |
| `previous_ticket_state_id` | `string` | No | The ID of the previous ticket state from the most recent state change. |
| `skip_notifications` | `boolean` | No | Option to disable notifications when a Ticket is created. |
| `snoozed_until` | `number` | No | The time the ticket will be snoozed until as a UTC Unix timestamp. |
| `team_assignee_id` | `number` | No | The id representing the team assigned to the ticket. |
| `ticket_attributes` | `table` | No | An object containing the different attributes associated to the ticket as key-value pairs. |
| `ticket_id` | `string` | No | The ID of the Ticket used in the Intercom Inbox and Messenger. |
| `ticket_parts` | `table` | No | A list of Ticket Part objects for each note and event in the ticket. |
| `ticket_state` | `table` | No | A ticket state, used to define the state of a ticket. |
| `ticket_state_id` | `string` | No | The ID of the ticket state associated with the ticket type. |
| `ticket_type` | `table` | No | A ticket type, used to define the data fields to be captured in a ticket. |
| `ticket_type_id` | `string` | Yes | The ID of the type of ticket you want to convert the conversation to |
| `type` | `string` | No | Always ticket |
| `updated_at` | `number` | No | The last time the ticket was updated as a UTC Unix timestamp. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Ticket():create({
  ticket_type_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Ticket():load({ id = "ticket_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Ticket():remove({ id = "ticket_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Ticket():update({
  id = "ticket_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TicketEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TicketListEntity

```lua
local ticket_list = client:TicketList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pages` | `table` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `table` | No |  |
| `query` | `any` | Yes |  |
| `tickets` | `table` | No | The list of ticket objects |
| `total_count` | `number` | No | A count of the total number of objects. |
| `type` | `string` | No | Always ticket.list |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TicketList():create({
  query = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TicketListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TicketReplyEntity

```lua
local ticket_reply = client:TicketReply(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `table` | No | A list of attachments for the part. |
| `author` | `table` | No | The author that wrote or triggered the part. |
| `body` | `string` | No | The message body, which may contain HTML. |
| `created_at` | `number` | No | The time the note was created. |
| `id` | `string` | No | The id representing the part. |
| `part_type` | `string` | No | Type of the part |
| `redacted` | `boolean` | No | Whether or not the ticket part has been redacted. |
| `skip_notifications` | `boolean` | No | Option to disable notifications when replying to a Ticket. |
| `type` | `string` | No | Always ticket_part |
| `updated_at` | `number` | No | The last time the note was updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TicketReply():create({
  id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TicketReplyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TicketStateEntity

```lua
local ticket_state = client:TicketState(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | No | Whether the ticket state is archived |
| `category` | `string` | No | The category of the ticket state |
| `external_label` | `string` | No | The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal. |
| `id` | `string` | No | The id of the ticket state |
| `internal_label` | `string` | No | The state the ticket is currently in, in a human readable form - visible in Intercom |
| `ticket_types` | `table` | No | A list of ticket types associated with a given ticket state. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TicketState():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TicketStateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TicketTypeEntity

```lua
local ticket_type = client:TicketType(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | No | Whether the ticket type is archived or not. |
| `category` | `string` | No | Category of the Ticket Type. |
| `created_at` | `number` | No | The date and time the ticket type was created. |
| `description` | `string` | No | The description of the ticket type |
| `icon` | `string` | No | The icon of the ticket type |
| `id` | `string` | No | The id representing the ticket type. |
| `is_internal` | `boolean` | No | Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers. |
| `name` | `string` | No | The name of the ticket type |
| `ticket_states` | `table` | No | A list of ticket states associated with a given ticket type. |
| `ticket_type_attributes` | `table` | No | A list of attributes associated with a given ticket type. |
| `type` | `string` | No | String representing the object's type. |
| `updated_at` | `number` | No | The date and time the ticket type was last updated. |
| `workspace_id` | `string` | No | The id of the workspace that the ticket type belongs to. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `archived` | - | - | - | - |
| `category` | - | - | - | - |
| `created_at` | - | - | - | - |
| `description` | - | - | - | - |
| `icon` | - | - | - | - |
| `id` | - | - | - | - |
| `is_internal` | - | - | - | - |
| `name` | - | - | Yes | - |
| `ticket_states` | - | - | - | - |
| `ticket_type_attributes` | - | - | - | - |
| `type` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `workspace_id` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TicketType():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TicketType():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TicketType():load({ id = "ticket_type_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TicketType():update({
  id = "ticket_type_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TicketTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TicketTypeAttributeEntity

```lua
local ticket_type_attribute = client:TicketTypeAttribute(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_multiple_values` | `boolean` | No | Whether the attribute allows multiple files to be attached to it (only applicable to file attributes) |
| `archived` | `boolean` | No | Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets) |
| `data_type` | `string` | Yes | The data type of the attribute |
| `description` | `string` | Yes | The description of the attribute presented to the teammate or contact |
| `id` | `string` | No |  |
| `list_items` | `string` | No | A comma delimited list of items for the attribute value (only applicable to list attributes) |
| `multiline` | `boolean` | No | Whether the attribute allows multiple lines of text (only applicable to string attributes) |
| `name` | `string` | Yes | The name of the ticket type attribute |
| `required_to_create` | `boolean` | No | Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox. |
| `required_to_create_for_contacts` | `boolean` | No | Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger. |
| `visible_on_create` | `boolean` | No | Whether the attribute is visible to teammates when creating a ticket in Inbox. |
| `visible_to_contacts` | `boolean` | No | Whether the attribute is visible to contacts when creating a ticket in Messenger. |

### Field Usage by Operation

| Field | create | update |
| --- | --- | --- |
| `allow_multiple_values` | - | - |
| `archived` | - | - |
| `data_type` | - | - |
| `description` | - | Yes |
| `id` | - | - |
| `list_items` | - | - |
| `multiline` | - | - |
| `name` | - | Yes |
| `required_to_create` | - | - |
| `required_to_create_for_contacts` | - | - |
| `visible_on_create` | - | - |
| `visible_to_contacts` | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TicketTypeAttribute():create({
  id = --[[ string ]],
  data_type = --[[ string ]],
  description = --[[ string ]],
  name = --[[ string ]],
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TicketTypeAttribute():update({
  id = "id",
  ticket_type_id = "ticket_type_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TicketTypeAttributeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VisitorEntity

```lua
local visitor = client:Visitor(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anonymous` | `boolean` | No | Identifies if this visitor is anonymous. |
| `app_id` | `string` | No | The id of the app the visitor is associated with. |
| `avatar` | `table` | No |  |
| `companies` | `table` | No |  |
| `created_at` | `number` | No | The time the Visitor was added to Intercom. |
| `custom_attributes` | `table` | No | The custom attributes you have set on the Visitor. |
| `do_not_track` | `boolean` | No | Identifies if this visitor has do not track enabled. |
| `email` | `string` | No | The email of the visitor. |
| `has_hard_bounced` | `boolean` | No | Identifies if this visitor has had a hard bounce. |
| `id` | `string` | No | The Intercom defined id representing the Visitor. |
| `las_request_at` | `number` | No | The time the Lead last recorded making a request. |
| `location_data` | `table` | No |  |
| `marked_email_as_spam` | `boolean` | No | Identifies if this visitor has marked an email as spam. |
| `name` | `string` | No | The name of the visitor. |
| `owner_id` | `string` | No | The id of the admin that owns the Visitor. |
| `phone` | `string` | No | The phone number of the visitor. |
| `pseudonym` | `string` | No | The pseudonym of the visitor. |
| `referrer` | `string` | No | The referer of the visitor. |
| `remote_created_at` | `number` | No | The time the Visitor was added to Intercom. |
| `segments` | `table` | No |  |
| `session_count` | `number` | No | The number of sessions the Visitor has had. |
| `signed_up_at` | `number` | No | The time the Visitor signed up for your product. |
| `social_profiles` | `table` | No |  |
| `tags` | `table` | No |  |
| `type` | `string` | No | Value is 'visitor' |
| `unsubscribed_from_emails` | `boolean` | No | Whether the Visitor is unsubscribed from emails. |
| `updated_at` | `number` | No | The last time the Visitor was updated. |
| `user_id` | `string` | No | Automatically generated identifier for the Visitor. |
| `utm_campaign` | `string` | No | The utm_campaign of the visitor. |
| `utm_content` | `string` | No | The utm_content of the visitor. |
| `utm_medium` | `string` | No | The utm_medium of the visitor. |
| `utm_source` | `string` | No | The utm_source of the visitor. |
| `utm_term` | `string` | No | The utm_term of the visitor. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Visitor():load({ user_id = "user_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Visitor():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VisitorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WhatsappMessageStatusEntity

```lua
local whatsapp_message_status = client:WhatsappMessageStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `details` | `string` | No | Detailed error information |
| `message` | `string` | No | Error message |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WhatsappMessageStatus():load({ message_id = "message_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WhatsappMessageStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WhatsappMessageStatusListEntity

```lua
local whatsapp_message_status_list = client:WhatsappMessageStatusList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversation_id` | `string` | Yes | ID of the conversation |
| `created_at` | `number` | Yes | Creation timestamp |
| `id` | `string` | Yes | Event ID |
| `status` | `string` | Yes | Current status of the message |
| `template_name` | `string` | No | Name of the WhatsApp template used |
| `type` | `string` | Yes | Event type |
| `updated_at` | `number` | Yes | Last update timestamp |
| `whatsapp_message_id` | `string` | Yes | WhatsApp's message identifier |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WhatsappMessageStatusList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WhatsappMessageStatusListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkflowEntity

```lua
local workflow = client:Workflow(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attributes` | `table` | No | Custom attributes defined for this workflow. |
| `created_at` | `string` | No | When the workflow was created. |
| `description` | `string` | No | The description of the workflow. |
| `embedded_rules` | `table` | No | Rules embedded within the workflow steps. |
| `id` | `string` | No | The unique identifier for the workflow. |
| `preferred_devices` | `table` | No | The preferred devices for this workflow. |
| `snapshot` | `table` | No | The current snapshot of workflow steps and configuration. |
| `state` | `string` | No | The current state of the workflow. |
| `target_channels` | `table` | No | The channels this workflow targets. |
| `targeting` | `table` | No | The targeting rules for this workflow. |
| `title` | `string` | No | The title of the workflow. |
| `trigger_type` | `string` | No | The type of trigger that starts this workflow. |
| `updated_at` | `string` | No | When the workflow was last updated. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Workflow():load({ id = "workflow_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

