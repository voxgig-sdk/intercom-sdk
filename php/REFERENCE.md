# Intercom PHP SDK Reference

Complete API reference for the Intercom PHP SDK.


## IntercomSDK

### Constructor

```php
require_once __DIR__ . '/intercom_sdk.php';

$client = new IntercomSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IntercomSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = IntercomSDK::test();
```


### Instance Methods

#### `ActivityLog($data = null)`

Create a new `ActivityLogEntity` instance. Pass `null` for no initial data.

#### `ActivityLogEventType($data = null)`

Create a new `ActivityLogEventTypeEntity` instance. Pass `null` for no initial data.

#### `ActivityLogList($data = null)`

Create a new `ActivityLogListEntity` instance. Pass `null` for no initial data.

#### `Admin($data = null)`

Create a new `AdminEntity` instance. Pass `null` for no initial data.

#### `AdminWithApp($data = null)`

Create a new `AdminWithAppEntity` instance. Pass `null` for no initial data.

#### `AiCall($data = null)`

Create a new `AiCallEntity` instance. Pass `null` for no initial data.

#### `AiContent($data = null)`

Create a new `AiContentEntity` instance. Pass `null` for no initial data.

#### `Article($data = null)`

Create a new `ArticleEntity` instance. Pass `null` for no initial data.

#### `ArticleSearch($data = null)`

Create a new `ArticleSearchEntity` instance. Pass `null` for no initial data.

#### `ArticleVersion($data = null)`

Create a new `ArticleVersionEntity` instance. Pass `null` for no initial data.

#### `ArticleVersionList($data = null)`

Create a new `ArticleVersionListEntity` instance. Pass `null` for no initial data.

#### `Audience($data = null)`

Create a new `AudienceEntity` instance. Pass `null` for no initial data.

#### `AwayStatusReason($data = null)`

Create a new `AwayStatusReasonEntity` instance. Pass `null` for no initial data.

#### `Banner($data = null)`

Create a new `BannerEntity` instance. Pass `null` for no initial data.

#### `BannerDismiss($data = null)`

Create a new `BannerDismissEntity` instance. Pass `null` for no initial data.

#### `Brand($data = null)`

Create a new `BrandEntity` instance. Pass `null` for no initial data.

#### `Call($data = null)`

Create a new `CallEntity` instance. Pass `null` for no initial data.

#### `Company($data = null)`

Create a new `CompanyEntity` instance. Pass `null` for no initial data.

#### `CompanyAttachedContact($data = null)`

Create a new `CompanyAttachedContactEntity` instance. Pass `null` for no initial data.

#### `CompanyAttachedSegment($data = null)`

Create a new `CompanyAttachedSegmentEntity` instance. Pass `null` for no initial data.

#### `CompanyList($data = null)`

Create a new `CompanyListEntity` instance. Pass `null` for no initial data.

#### `CompanyScroll($data = null)`

Create a new `CompanyScrollEntity` instance. Pass `null` for no initial data.

#### `Contact($data = null)`

Create a new `ContactEntity` instance. Pass `null` for no initial data.

#### `ContactAttachedCompany($data = null)`

Create a new `ContactAttachedCompanyEntity` instance. Pass `null` for no initial data.

#### `ContactList($data = null)`

Create a new `ContactListEntity` instance. Pass `null` for no initial data.

#### `ContactSegment($data = null)`

Create a new `ContactSegmentEntity` instance. Pass `null` for no initial data.

#### `Content($data = null)`

Create a new `ContentEntity` instance. Pass `null` for no initial data.

#### `ContentImportSource($data = null)`

Create a new `ContentImportSourceEntity` instance. Pass `null` for no initial data.

#### `ContentSearch($data = null)`

Create a new `ContentSearchEntity` instance. Pass `null` for no initial data.

#### `ContentSnippet($data = null)`

Create a new `ContentSnippetEntity` instance. Pass `null` for no initial data.

#### `Conversation($data = null)`

Create a new `ConversationEntity` instance. Pass `null` for no initial data.

#### `ConversationAttribute($data = null)`

Create a new `ConversationAttributeEntity` instance. Pass `null` for no initial data.

#### `ConversationAttributeList($data = null)`

Create a new `ConversationAttributeListEntity` instance. Pass `null` for no initial data.

#### `ConversationList($data = null)`

Create a new `ConversationListEntity` instance. Pass `null` for no initial data.

#### `ConversationParticipant($data = null)`

Create a new `ConversationParticipantEntity` instance. Pass `null` for no initial data.

#### `CustomObjectInstance($data = null)`

Create a new `CustomObjectInstanceEntity` instance. Pass `null` for no initial data.

#### `Data($data = null)`

Create a new `DataEntity` instance. Pass `null` for no initial data.

#### `DataAttribute($data = null)`

Create a new `DataAttributeEntity` instance. Pass `null` for no initial data.

#### `DataConnector($data = null)`

Create a new `DataConnectorEntity` instance. Pass `null` for no initial data.

#### `DataConnectorExecutionResult($data = null)`

Create a new `DataConnectorExecutionResultEntity` instance. Pass `null` for no initial data.

#### `DataConnectorExecutionResultList($data = null)`

Create a new `DataConnectorExecutionResultListEntity` instance. Pass `null` for no initial data.

#### `DataEvent($data = null)`

Create a new `DataEventEntity` instance. Pass `null` for no initial data.

#### `DataEventSummary($data = null)`

Create a new `DataEventSummaryEntity` instance. Pass `null` for no initial data.

#### `DataExport($data = null)`

Create a new `DataExportEntity` instance. Pass `null` for no initial data.

#### `Deleted($data = null)`

Create a new `DeletedEntity` instance. Pass `null` for no initial data.

#### `DeletedArticleObject($data = null)`

Create a new `DeletedArticleObjectEntity` instance. Pass `null` for no initial data.

#### `DeletedCompanyObject($data = null)`

Create a new `DeletedCompanyObjectEntity` instance. Pass `null` for no initial data.

#### `DeletedDataConnectorObject($data = null)`

Create a new `DeletedDataConnectorObjectEntity` instance. Pass `null` for no initial data.

#### `DeletedInternalArticleObject($data = null)`

Create a new `DeletedInternalArticleObjectEntity` instance. Pass `null` for no initial data.

#### `DeletedObject($data = null)`

Create a new `DeletedObjectEntity` instance. Pass `null` for no initial data.

#### `Email($data = null)`

Create a new `EmailEntity` instance. Pass `null` for no initial data.

#### `ExternalPage($data = null)`

Create a new `ExternalPageEntity` instance. Pass `null` for no initial data.

#### `FinAgent($data = null)`

Create a new `FinAgentEntity` instance. Pass `null` for no initial data.

#### `HandlingEvent($data = null)`

Create a new `HandlingEventEntity` instance. Pass `null` for no initial data.

#### `HelpCenter($data = null)`

Create a new `HelpCenterEntity` instance. Pass `null` for no initial data.

#### `InternalArticle($data = null)`

Create a new `InternalArticleEntity` instance. Pass `null` for no initial data.

#### `InternalArticleSearch($data = null)`

Create a new `InternalArticleSearchEntity` instance. Pass `null` for no initial data.

#### `IpAllowlist($data = null)`

Create a new `IpAllowlistEntity` instance. Pass `null` for no initial data.

#### `Job($data = null)`

Create a new `JobEntity` instance. Pass `null` for no initial data.

#### `Macro($data = null)`

Create a new `MacroEntity` instance. Pass `null` for no initial data.

#### `MergeHistory($data = null)`

Create a new `MergeHistoryEntity` instance. Pass `null` for no initial data.

#### `Message($data = null)`

Create a new `MessageEntity` instance. Pass `null` for no initial data.

#### `NewsItem($data = null)`

Create a new `NewsItemEntity` instance. Pass `null` for no initial data.

#### `Newsfeed($data = null)`

Create a new `NewsfeedEntity` instance. Pass `null` for no initial data.

#### `Note($data = null)`

Create a new `NoteEntity` instance. Pass `null` for no initial data.

#### `OfficeHour($data = null)`

Create a new `OfficeHourEntity` instance. Pass `null` for no initial data.

#### `OfficeHoursException($data = null)`

Create a new `OfficeHoursExceptionEntity` instance. Pass `null` for no initial data.

#### `OfficeHoursSchedule($data = null)`

Create a new `OfficeHoursScheduleEntity` instance. Pass `null` for no initial data.

#### `Paginated($data = null)`

Create a new `PaginatedEntity` instance. Pass `null` for no initial data.

#### `PhoneSwitch($data = null)`

Create a new `PhoneSwitchEntity` instance. Pass `null` for no initial data.

#### `ReportingData($data = null)`

Create a new `ReportingDataEntity` instance. Pass `null` for no initial data.

#### `ReportingDataExport($data = null)`

Create a new `ReportingDataExportEntity` instance. Pass `null` for no initial data.

#### `Segment($data = null)`

Create a new `SegmentEntity` instance. Pass `null` for no initial data.

#### `SideConversation($data = null)`

Create a new `SideConversationEntity` instance. Pass `null` for no initial data.

#### `Subscription($data = null)`

Create a new `SubscriptionEntity` instance. Pass `null` for no initial data.

#### `SubscriptionType($data = null)`

Create a new `SubscriptionTypeEntity` instance. Pass `null` for no initial data.

#### `Tag($data = null)`

Create a new `TagEntity` instance. Pass `null` for no initial data.

#### `Team($data = null)`

Create a new `TeamEntity` instance. Pass `null` for no initial data.

#### `TeamMetricList($data = null)`

Create a new `TeamMetricListEntity` instance. Pass `null` for no initial data.

#### `Ticket($data = null)`

Create a new `TicketEntity` instance. Pass `null` for no initial data.

#### `TicketList($data = null)`

Create a new `TicketListEntity` instance. Pass `null` for no initial data.

#### `TicketReply($data = null)`

Create a new `TicketReplyEntity` instance. Pass `null` for no initial data.

#### `TicketState($data = null)`

Create a new `TicketStateEntity` instance. Pass `null` for no initial data.

#### `TicketType($data = null)`

Create a new `TicketTypeEntity` instance. Pass `null` for no initial data.

#### `TicketTypeAttribute($data = null)`

Create a new `TicketTypeAttributeEntity` instance. Pass `null` for no initial data.

#### `Visitor($data = null)`

Create a new `VisitorEntity` instance. Pass `null` for no initial data.

#### `WhatsappMessageStatus($data = null)`

Create a new `WhatsappMessageStatusEntity` instance. Pass `null` for no initial data.

#### `WhatsappMessageStatusList($data = null)`

Create a new `WhatsappMessageStatusListEntity` instance. Pass `null` for no initial data.

#### `Workflow($data = null)`

Create a new `WorkflowEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): IntercomUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ActivityLogEntity

```php
$activity_log = $client->ActivityLog();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_description` | `string` | No | A sentence or two describing the activity. |
| `activity_type` | `string` | No |  |
| `created_at` | `int` | No | The time the activity was created. |
| `id` | `string` | No | The id representing the activity. |
| `metadata` | `array` | No | Additional data provided about Admin activity. |
| `performed_by` | `array` | No | Details about the Admin involved in the activity. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ActivityLog()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActivityLogEntity`

Create a new `ActivityLogEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActivityLogEventTypeEntity

```php
$activity_log_event_type = $client->ActivityLogEventType();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `event_types` | `array` | No | An array of activity log event type strings. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ActivityLogEventType()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActivityLogEventTypeEntity`

Create a new `ActivityLogEventTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActivityLogListEntity

```php
$activity_log_list = $client->ActivityLogList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_logs` | `array` | No | An array of activity logs |
| `created_at_after` | `int` | Yes | The start date that you request data for. |
| `created_at_before` | `int` | No | The end date that you request data for. |
| `event_types` | `array` | No | An optional list of event types to filter activity logs by. |
| `page` | `int` | No | The page number of results to return. |
| `pages` | `array` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `per_page` | `int` | No | The number of results per page. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ActivityLogList()->create([
  "created_at_after" => null, // int
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActivityLogListEntity`

Create a new `ActivityLogListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminEntity

```php
$admin = $client->Admin();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `string` | No | Image for the associated team or teammate |
| `away_mode_enabled` | `bool` | No | Identifies if this admin is currently set in away mode. |
| `away_mode_reassign` | `bool` | No | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `away_status_reason_id` | `int` | No | The unique identifier of the away status reason |
| `email` | `string` | No | The email of the admin. |
| `has_inbox_seat` | `bool` | No | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `id` | `string` | No | The id representing the admin. |
| `job_title` | `string` | No | The job title of the admin. |
| `name` | `string` | No | The name of the admin. |
| `role` | `array` | No | The role assigned to this admin. |
| `team_ids` | `array` | No | This object represents the avatar associated with the admin. |
| `team_priority_level` | `array` | No | Admin priority levels for teams |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Admin()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Admin()->load(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Admin()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminEntity`

Create a new `AdminEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminWithAppEntity

```php
$admin_with_app = $client->AdminWithApp();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `array` | No | App that the admin belongs to. |
| `avatar` | `array` | No | This object represents the avatar associated with the admin. |
| `away_mode_enabled` | `bool` | No | Identifies if this admin is currently set in away mode. |
| `away_mode_reassign` | `bool` | No | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `email` | `string` | No | The email of the admin. |
| `email_verified` | `bool` | No | Identifies if this admin's email is verified. |
| `has_inbox_seat` | `bool` | No | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `id` | `string` | No | The id representing the admin. |
| `job_title` | `string` | No | The job title of the admin. |
| `name` | `string` | No | The name of the admin. |
| `team_ids` | `array` | No | This is a list of ids of the teams that this admin is part of. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AdminWithApp()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminWithAppEntity`

Create a new `AdminWithAppEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiCallEntity

```php
$ai_call = $client->AiCall();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `int` | No | The workspace identifier |
| `call_id` | `string` | Yes | External call identifier from the call provider |
| `call_summary` | `string` | No | Summary of the call conversation, truncated to 256 characters. |
| `call_transcript` | `array` | No | Array of transcript entries for the call |
| `data` | `array` | No | Additional metadata about the call |
| `external_call_id` | `string` | No | The external call identifier from the call provider |
| `id` | `int` | No | The unique identifier for the external reference |
| `intent` | `array` | No | Array of intent classifications for the call |
| `intercom_call_id` | `string` | No | The Intercom call identifier, if the call has been matched |
| `intercom_conversation_id` | `string` | No | The Intercom conversation identifier, if a conversation has been created |
| `phone_number` | `string` | Yes | Phone number in E.164 format for the call |
| `source` | `string` | No | Source of the call. |
| `status` | `string` | No | Status of the call. |
| `user_phone_number` | `string` | No | Phone number in E.164 format for the call |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AiCall()->create([
  "call_id" => null, // string
  "phone_number" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AiCall()->load(["conversation_id" => "conversation_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiCallEntity`

Create a new `AiCallEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AiContentEntity

```php
$ai_content = $client->AiContent();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AiContent()->remove(["source_id" => "source_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AiContentEntity`

Create a new `AiContentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ArticleEntity

```php
$article = $client->Article();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `bool` | No | Whether the article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | No | Whether the article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | No | Whether the article should be available for AI Sales Agent. |
| `audience_ids` | `array` | No | The list of audience IDs to assign to this article for Fin AI Agent targeting. |
| `author_id` | `int` | Yes | The id of the author of the article. |
| `body` | `string` | No | The content of the article in HTML. |
| `body_markdown` | `string` | No | The content of the article in markdown. |
| `conversions` | `int` | No | The number of conversations started from the article. |
| `created_at` | `int` | No | The time when the article was created. |
| `created_by_id` | `int` | No | The ID of the teammate who created the article. |
| `default_locale` | `string` | No | The default locale of the help center. |
| `description` | `string` | No | The description of the article. |
| `draft_updated_at` | `int` | No | The time, in seconds, when the staged draft was last edited, or `null` when there is no staged draft. |
| `exclude_from_article_suggestions` | `bool` | No | Whether the article is excluded from Fin AI Agent article suggestions. |
| `fin_involvements` | `int` | No | The number of conversations in which Fin AI Agent used this article, summed across all of the article's locales. |
| `fin_resolution_rate` | `float` | No | The percentage of Fin AI Agent involvements that resulted in a resolution (fin_resolutions / fin_involvements * 100). |
| `fin_resolutions` | `int` | No | The number of conversations Fin AI Agent resolved using this article, summed across all of the article's locales. |
| `happy_reaction_percentage` | `float` | No | The percentage of happy reactions the article has received against other types of reaction. |
| `has_unpublished_changes` | `bool` | No | Whether the published article has unpublished changes staged as a draft on top of its live content. |
| `help_center_audience` | `string` | No | The audience that can view this article in the Help Center. |
| `id` | `string` | No | The unique identifier for the article which is given by Intercom. |
| `neutral_reaction_percentage` | `float` | No | The percentage of neutral reactions the article has received against other types of reaction. |
| `parent_id` | `int` | No | The id of the article's parent collection or section. |
| `parent_ids` | `array` | No | The ids of the article's parent collections or sections. |
| `parent_type` | `string` | No | The type of parent, which can either be a `collection` or `section`. |
| `reactions` | `int` | No | The number of total reactions the article has received. |
| `sad_reaction_percentage` | `float` | No | The percentage of sad reactions the article has received against |
| `scheduled_publish_at` | `string` | No | ISO 8601 timestamp at which to schedule a future publish of the article. |
| `scheduled_unpublish_at` | `string` | No | ISO 8601 timestamp at which to schedule a future unpublish of the article. |
| `state` | `string` | No | Whether the article will be `published` or will be a `draft`. |
| `tags` | `array` | No | A list of tags objects associated with a conversation |
| `title` | `string` | Yes | The title of the article.For multilingual articles, this will be the title of the default language's content. |
| `translated_content` | `array` | No | The Translated Content of an Article. |
| `type` | `string` | No | The type of object - `article_statistics`. |
| `updated_at` | `int` | No | The time when the article was last updated. |
| `updated_by_id` | `int` | No | The ID of the teammate who last updated the article. |
| `url` | `string` | No | The URL of the article. |
| `views` | `int` | No | The number of total views the article has received. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Article()->create([
  "author_id" => null, // int
  "title" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Article()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Article()->load(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Article()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ArticleEntity`

Create a new `ArticleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ArticleSearchEntity

```php
$article_search = $client->ArticleSearch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No | An object containing the results of the search. |
| `pages` | `array` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | No | The total number of Articles matching the search query |
| `type` | `string` | No | The type of the object - `list`. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ArticleSearch()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ArticleSearchEntity`

Create a new `ArticleSearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ArticleVersionEntity

```php
$article_version = $client->ArticleVersion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `article_id` | `string` | No | The unique identifier of the article this version belongs to. |
| `author_id` | `string` | No | The id of the teammate listed as the article's author at this version. |
| `body` | `string` | No | The HTML body of the article at this version. |
| `body_markdown` | `string` | No | The Markdown body of the article at this version. |
| `created_at` | `int` | No | The time the version was created, as a UTC Unix timestamp. |
| `created_by_id` | `string` | No | The id of the teammate who created this version. |
| `created_via` | `string` | No | How this version was created (for example `web`, `api`). |
| `description` | `string` | No | The description of the article at this version. |
| `from_version_id` | `string` | No | The id of the version this version was created from, or `null` if this is the first version. |
| `id` | `string` | No | The unique identifier for the version. |
| `state` | `string` | No | Whether this version is the currently published version of the article (`published`) or an earlier non-live version (`draft`). |
| `title` | `string` | No | The title of the article at this version. |
| `type` | `string` | No | String representing the object's type. |
| `updated_at` | `int` | No | The time the version was last updated, as a UTC Unix timestamp. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ArticleVersion()->load(["id" => "article_version_id", "article_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ArticleVersionEntity`

Create a new `ArticleVersionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ArticleVersionListEntity

```php
$article_version_list = $client->ArticleVersionList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ArticleVersionList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ArticleVersionListEntity`

Create a new `ArticleVersionListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AudienceEntity

```php
$audience = $client->Audience();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The time the audience was created as a Unix timestamp. |
| `id` | `string` | No | The unique identifier representing the audience. |
| `name` | `string` | No | The name of the audience. |
| `predicates` | `array` | No | The predicates that define which contacts belong to the audience. |
| `role_predicates` | `array` | No | Role-based predicates that further filter audience membership by contact role. |
| `type` | `string` | No | The type of object. |
| `updated_at` | `int` | No | The time the audience was last updated as a Unix timestamp. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Audience()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Audience()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Audience()->load(["id" => "audience_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Audience()->remove(["id" => "audience_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Audience()->update([
  "id" => "audience_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AudienceEntity`

Create a new `AudienceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AwayStatusReasonEntity

```php
$away_status_reason = $client->AwayStatusReason();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The Unix timestamp when the status reason was created |
| `deleted` | `bool` | No | Whether the status reason has been soft deleted |
| `emoji` | `string` | No | The emoji associated with the status reason |
| `id` | `string` | No | The unique identifier for the away status reason |
| `label` | `string` | No | The display text for the away status reason |
| `order` | `int` | No | The display order of the status reason |
| `type` | `string` | No |  |
| `updated_at` | `int` | No | The Unix timestamp when the status reason was last updated |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AwayStatusReason()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AwayStatusReasonEntity`

Create a new `AwayStatusReasonEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BannerEntity

```php
$banner = $client->Banner();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `array` | No | The action a contact can take on the banner, or `null` when the banner has no action. |
| `body` | `string` | No | The banner's body content as HTML. |
| `client_targeting` | `array` | No | Reserved for future use. |
| `created_at` | `int` | No | The time the contact's view of this banner was created. |
| `id` | `string` | No | The id of the banner. |
| `position` | `string` | No | Where the banner is positioned. |
| `show_dismiss_button` | `bool` | No | Whether the banner should display a dismiss control. |
| `style` | `string` | No | How the banner is displayed. |
| `title` | `string` | No | The banner's title. |
| `type` | `string` | No | String representing the object's type. |
| `view_id` | `string` | No | The id of the contact's view of this banner. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Banner()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BannerEntity`

Create a new `BannerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BannerDismissEntity

```php
$banner_dismiss = $client->BannerDismiss();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dismissed` | `bool` | No | Whether the banner view is dismissed. |
| `id` | `string` | No |  |
| `type` | `string` | No | String representing the object's type. |
| `view_id` | `string` | No | The id of the dismissed banner view. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BannerDismiss()->create([
  "contact_id" => null, // string
  "id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BannerDismissEntity`

Create a new `BannerDismissEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BrandEntity

```php
$brand = $client->Brand();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | Unix timestamp of brand creation |
| `default_address_settings_id` | `string` | No | Default email settings ID for this brand |
| `help_center_id` | `string` | No | Associated help center identifier |
| `id` | `string` | No | Unique brand identifier. |
| `is_default` | `bool` | No | Whether this is the workspace's default brand |
| `name` | `string` | No | Display name of the brand |
| `type` | `string` | No | The type of object |
| `updated_at` | `int` | No | Unix timestamp of last modification |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Brand()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Brand()->load(["id" => "brand_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BrandEntity`

Create a new `BrandEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CallEntity

```php
$call = $client->Call();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `string` | No | The id of the admin associated with the call, if any. |
| `answered_at` | `mixed` | No |  |
| `call_type` | `string` | No | The type of call. |
| `contact_id` | `string` | No | The id of the contact associated with the call, if any. |
| `conversation_id` | `string` | No | The id of the conversation associated with the call, if any. |
| `created_at` | `mixed` | No |  |
| `direction` | `string` | No | The direction of the call. |
| `ended_at` | `mixed` | No |  |
| `ended_reason` | `string` | No | The reason for the call end, if applicable. |
| `fin_recording_url` | `string` | No | API URL to the AI Agent (Fin) call recording if available. |
| `fin_transcription_url` | `string` | No | API URL to the AI Agent (Fin) call transcript if available. |
| `id` | `string` | No | The id of the call. |
| `initiated_at` | `mixed` | No |  |
| `phone` | `string` | No | The phone number involved in the call, in E.164 format. |
| `recording_url` | `string` | No | API URL to download or redirect to the call recording if available. |
| `state` | `string` | No | The current state of the call. |
| `transcription_url` | `string` | No | API URL to download or redirect to the call transcript if available. |
| `type` | `string` | No | String representing the object's type. |
| `updated_at` | `mixed` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Call()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Call()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Call()->load(["id" => "call_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CallEntity`

Create a new `CallEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CompanyEntity

```php
$company = $client->Company();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | No | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | No | The company id you have defined for the company. |
| `created_at` | `int` | No | The time the company was added in Intercom. |
| `custom_attributes` | `array` | No | The custom attributes you have set on the company. |
| `id` | `string` | No | The Intercom defined id representing the company. |
| `industry` | `string` | No | The industry that the company operates in. |
| `last_request_at` | `int` | No | The time the company last recorded making a request. |
| `monthly_spend` | `int` | No | How much revenue the company generates for your business. |
| `name` | `string` | No | The name of the company. |
| `notes` | `array` | No | The list of notes associated with the company |
| `plan` | `array` | No | The name of the plan you have associated with the company. |
| `remote_created_at` | `int` | No | The time the company was created by you. |
| `segments` | `array` | No | The list of segments associated with the company |
| `session_count` | `int` | No | How many sessions the company has recorded. |
| `size` | `int` | No | The number of employees in the company. |
| `tags` | `array` | No | The list of tags associated with the company |
| `type` | `string` | No | Value is `company` |
| `update_last_request_at` | `bool` | No | Set to true to update the company's last seen time to now. |
| `updated_at` | `int` | No | The last time the company was updated. |
| `user_count` | `int` | No | The number of users in the company. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Company()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Company()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Company()->load(["id" => "company_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Company()->remove(["id" => "company_id", "contact_id" => "contact_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Company()->update([
  "id" => "company_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CompanyEntity`

Create a new `CompanyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CompanyAttachedContactEntity

```php
$company_attached_contact = $client->CompanyAttachedContact();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `android_app_name` | `string` | No | The name of the Android app which the contact is using. |
| `android_app_version` | `string` | No | The version of the Android app which the contact is using. |
| `android_device` | `string` | No | The Android device which the contact is using. |
| `android_last_seen_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `android_os_version` | `string` | No | The version of the Android OS which the contact is using. |
| `android_sdk_version` | `string` | No | The version of the Android SDK which the contact is using. |
| `avatar` | `array` | No |  |
| `browser` | `string` | No | The name of the browser which the contact is using. |
| `browser_language` | `string` | No | The language set by the browser which the contact is using. |
| `browser_version` | `string` | No | The version of the browser which the contact is using. |
| `companies` | `array` | No | An object with metadata about companies attached to a contact . |
| `created_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `array` | No | The custom attributes which are set for the contact. |
| `email` | `string` | No | The contact's email. |
| `email_domain` | `string` | No | The contact's email domain. |
| `external_id` | `string` | No | The unique identifier for the contact which is provided by the Client. |
| `has_hard_bounced` | `bool` | No | Whether the contact has had an email sent to them hard bounce. |
| `id` | `string` | No | The unique identifier for the contact which is given by Intercom. |
| `ios_app_name` | `string` | No | The name of the iOS app which the contact is using. |
| `ios_app_version` | `string` | No | The version of the iOS app which the contact is using. |
| `ios_device` | `string` | No | The iOS device which the contact is using. |
| `ios_last_seen_at` | `int` | No | (Unix timestamp in seconds) The last time the contact used the iOS app. |
| `ios_os_version` | `string` | No | The version of iOS which the contact is using. |
| `ios_sdk_version` | `string` | No | The version of the iOS SDK which the contact is using. |
| `language_override` | `string` | No | A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change. |
| `last_contacted_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last messaged. |
| `last_email_clicked_at` | `int` | No | (Unix timestamp in seconds) The time when the contact last clicked a link in an email. |
| `last_email_opened_at` | `int` | No | (Unix timestamp in seconds) The time when the contact last opened an email. |
| `last_replied_at` | `int` | No | (Unix timestamp in seconds) The time when the contact last messaged in. |
| `last_seen_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually). |
| `location` | `array` | No | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `bool` | No | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `array` | No | A list of contacts that were merged into this contact. |
| `name` | `string` | No | The contacts name. |
| `notes` | `array` | No | An object containing notes meta data about the notes that a contact has. |
| `os` | `string` | No | The operating system which the contact is using. |
| `owner_id` | `string` | No | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `string` | No | The contacts phone. |
| `role` | `string` | No | The role of the contact. |
| `signed_up_at` | `int` | No | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `array` | No | An object containing social profiles that a contact has. |
| `tags` | `array` | No | An object containing tags meta data about the tags that a contact has. |
| `type` | `string` | No | The type of object. |
| `unsubscribed_from_emails` | `bool` | No | Whether the contact is unsubscribed from emails. |
| `updated_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last updated. |
| `workspace_id` | `string` | No | The id of the workspace which the contact belongs to. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CompanyAttachedContact()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CompanyAttachedContactEntity`

Create a new `CompanyAttachedContactEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CompanyAttachedSegmentEntity

```php
$company_attached_segment = $client->CompanyAttachedSegment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | No | The number of items in the user segment. |
| `created_at` | `int` | No | The time the segment was created. |
| `id` | `string` | No | The unique identifier representing the segment. |
| `name` | `string` | No | The name of the segment. |
| `person_type` | `string` | No | Type of the contact: contact (lead) or user. |
| `type` | `string` | No | The type of object. |
| `updated_at` | `int` | No | The time the segment was updated. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CompanyAttachedSegment()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CompanyAttachedSegmentEntity`

Create a new `CompanyAttachedSegmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CompanyListEntity

```php
$company_list = $client->CompanyList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No | An array containing Company Objects. |
| `pages` | `array` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | No | The total number of companies. |
| `type` | `string` | No | The type of object - `list`. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CompanyList()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CompanyListEntity`

Create a new `CompanyListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CompanyScrollEntity

```php
$company_scroll = $client->CompanyScroll();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | No | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | No | The company id you have defined for the company. |
| `created_at` | `int` | No | The time the company was added in Intercom. |
| `custom_attributes` | `array` | No | The custom attributes you have set on the company. |
| `id` | `string` | No | The Intercom defined id representing the company. |
| `industry` | `string` | No | The industry that the company operates in. |
| `last_request_at` | `int` | No | The time the company last recorded making a request. |
| `monthly_spend` | `int` | No | How much revenue the company generates for your business. |
| `name` | `string` | No | The name of the company. |
| `notes` | `array` | No | The list of notes associated with the company |
| `plan` | `array` | No |  |
| `remote_created_at` | `int` | No | The time the company was created by you. |
| `segments` | `array` | No | The list of segments associated with the company |
| `session_count` | `int` | No | How many sessions the company has recorded. |
| `size` | `int` | No | The number of employees in the company. |
| `tags` | `array` | No | The list of tags associated with the company |
| `type` | `string` | No | Value is `company` |
| `updated_at` | `int` | No | The last time the company was updated. |
| `user_count` | `int` | No | The number of users in the company. |
| `website` | `string` | No | The URL for the company website. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CompanyScroll()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CompanyScrollEntity`

Create a new `CompanyScrollEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContactEntity

```php
$contact = $client->Contact();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `android_app_name` | `string` | No | The name of the Android app which the contact is using. |
| `android_app_version` | `string` | No | The version of the Android app which the contact is using. |
| `android_device` | `string` | No | The Android device which the contact is using. |
| `android_last_seen_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `android_os_version` | `string` | No | The version of the Android OS which the contact is using. |
| `android_sdk_version` | `string` | No | The version of the Android SDK which the contact is using. |
| `avatar` | `array` | No |  |
| `browser` | `string` | No | The name of the browser which the contact is using. |
| `browser_language` | `string` | No | The language set by the browser which the contact is using. |
| `browser_version` | `string` | No | The version of the browser which the contact is using. |
| `companies` | `array` | No | An object with metadata about companies attached to a contact . |
| `created_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `array` | No | The custom attributes which are set for the contact. |
| `email` | `string` | No | The contact's email. |
| `email_domain` | `string` | No | The contact's email domain. |
| `enabled_push_messaging` | `bool` | No | If the user has enabled push messaging. |
| `external_id` | `string` | No | The unique identifier for the contact which is provided by the Client. |
| `has_hard_bounced` | `bool` | No | Whether the contact has had an email sent to them hard bounce. |
| `id` | `string` | No | The unique identifier for the contact which is given by Intercom. |
| `ios_app_name` | `string` | No | The name of the iOS app which the contact is using. |
| `ios_app_version` | `string` | No | The version of the iOS app which the contact is using. |
| `ios_device` | `string` | No | The iOS device which the contact is using. |
| `ios_last_seen_at` | `int` | No | (Unix timestamp in seconds) The last time the contact used the iOS app. |
| `ios_os_version` | `string` | No | The version of iOS which the contact is using. |
| `ios_sdk_version` | `string` | No | The version of the iOS SDK which the contact is using. |
| `language_override` | `string` | No | A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change. |
| `last_contacted_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last messaged. |
| `last_email_clicked_at` | `int` | No | (Unix timestamp in seconds) The time when the contact last clicked a link in an email. |
| `last_email_opened_at` | `int` | No | (Unix timestamp in seconds) The time when the contact last opened an email. |
| `last_replied_at` | `int` | No | (Unix timestamp in seconds) The time when the contact last messaged in. |
| `last_seen_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually). |
| `location` | `array` | No | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `bool` | No | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `array` | No | A list of contacts that were merged into this contact. |
| `name` | `string` | No | The contacts name. |
| `notes` | `array` | No | An object containing notes meta data about the notes that a contact has. |
| `os` | `string` | No | The operating system which the contact is using. |
| `owner_id` | `string` | No | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `string` | No | The contacts phone. |
| `role` | `string` | No | The role of the contact. |
| `signed_up_at` | `int` | No | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `array` | No | An object containing social profiles that a contact has. |
| `tags` | `array` | No | An object containing tags meta data about the tags that a contact has. |
| `type` | `string` | No | The type of object. |
| `unsubscribed_from_emails` | `bool` | No | Whether the contact is unsubscribed from emails. |
| `updated_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last updated. |
| `user` | `array` | Yes | The unique identifiers retained after converting or merging. |
| `visitor` | `array` | Yes | The unique identifiers to convert a single Visitor. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Contact()->create([
  "user" => null, // array
  "visitor" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Contact()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Contact()->load(["id" => "contact_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Contact()->remove(["id" => "contact_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Contact()->update([
  "id" => "contact_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContactEntity`

Create a new `ContactEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContactAttachedCompanyEntity

```php
$contact_attached_company = $client->ContactAttachedCompany();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | No | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | No | The company id you have defined for the company. |
| `created_at` | `int` | No | The time the company was added in Intercom. |
| `custom_attributes` | `array` | No | The custom attributes you have set on the company. |
| `id` | `string` | No | The Intercom defined id representing the company. |
| `industry` | `string` | No | The industry that the company operates in. |
| `last_request_at` | `int` | No | The time the company last recorded making a request. |
| `monthly_spend` | `int` | No | How much revenue the company generates for your business. |
| `name` | `string` | No | The name of the company. |
| `notes` | `array` | No | The list of notes associated with the company |
| `plan` | `array` | No |  |
| `remote_created_at` | `int` | No | The time the company was created by you. |
| `segments` | `array` | No | The list of segments associated with the company |
| `session_count` | `int` | No | How many sessions the company has recorded. |
| `size` | `int` | No | The number of employees in the company. |
| `tags` | `array` | No | The list of tags associated with the company |
| `type` | `string` | No | Value is `company` |
| `updated_at` | `int` | No | The last time the company was updated. |
| `user_count` | `int` | No | The number of users in the company. |
| `website` | `string` | No | The URL for the company website. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ContactAttachedCompany()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContactAttachedCompanyEntity`

Create a new `ContactAttachedCompanyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContactListEntity

```php
$contact_list = $client->ContactList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No | The list of contact objects |
| `pages` | `array` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `array` | No |  |
| `query` | `mixed` | Yes |  |
| `sort` | `array` | No | An optional object to sort the results by. |
| `total_count` | `int` | No | A count of the total number of objects. |
| `type` | `string` | No | Always list |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ContactList()->create([
  "query" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContactListEntity`

Create a new `ContactListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContactSegmentEntity

```php
$contact_segment = $client->ContactSegment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | No | The number of items in the user segment. |
| `created_at` | `int` | No | The time the segment was created. |
| `id` | `string` | No | The unique identifier representing the segment. |
| `name` | `string` | No | The name of the segment. |
| `person_type` | `string` | No | Type of the contact: contact (lead) or user. |
| `type` | `string` | No | The type of object. |
| `updated_at` | `int` | No | The time the segment was updated. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ContactSegment()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContactSegmentEntity`

Create a new `ContactSegmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContentEntity

```php
$content = $client->Content();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Content()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContentEntity`

Create a new `ContentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContentImportSourceEntity

```php
$content_import_source = $client->ContentImportSource();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apply_audience_to_existing_content` | `bool` | No | When true, the audience will be applied to all existing external pages belonging to this content import source. |
| `audience_ids` | `array` | No | The unique identifiers for the audiences associated with this content import source. |
| `created_at` | `int` | Yes | The time when the content import source was created. |
| `id` | `int` | Yes | The unique identifier for the content import source which is given by Intercom. |
| `last_synced_at` | `int` | Yes | The time when the content import source was last synced. |
| `status` | `string` | Yes | The status of the content import source. |
| `sync_behavior` | `string` | Yes | If you intend to create or update External Pages via the API, this should be set to `api`. |
| `type` | `string` | Yes | Always external_page |
| `updated_at` | `int` | Yes | The time when the content import source was last updated. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ContentImportSource()->create([
  "created_at" => null, // int
  "id" => null, // int
  "last_synced_at" => null, // int
  "status" => null, // string
  "sync_behavior" => null, // string
  "type" => null, // string
  "updated_at" => null, // int
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ContentImportSource()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ContentImportSource()->load(["id" => "content_import_source_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ContentImportSource()->update([
  "id" => "content_import_source_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContentImportSourceEntity`

Create a new `ContentImportSourceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContentSearchEntity

```php
$content_search = $client->ContentSearch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No | The list of matched content items. |
| `pages` | `array` | No | Pagination metadata, including links to neighbouring pages. |
| `total_count` | `int` | No | Total number of results matching the query. |
| `type` | `string` | No | Always `list`. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ContentSearch()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContentSearchEntity`

Create a new `ContentSearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContentSnippetEntity

```php
$content_snippet = $client->ContentSnippet();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `bool` | No | Whether the content snippet is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | No | Whether the content snippet is available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | No | Whether the content snippet is available for AI Sales Agent. |
| `audience_ids` | `array` | No | The list of audience IDs this content snippet is targeted to for Fin AI Agent. |
| `body_markdown` | `string` | No | The body of the content snippet in markdown. |
| `chatbot_availability` | `int` | No | Deprecated. |
| `copilot_availability` | `int` | No | Deprecated. |
| `created_at` | `int` | No | The time the snippet was created as a UNIX timestamp. |
| `id` | `string` | No | The unique identifier for the content snippet. |
| `json_blocks` | `array` | No | The content blocks that make up the body of the snippet. |
| `locale` | `string` | No | The locale of the content snippet. |
| `title` | `string` | No | The title of the content snippet. |
| `type` | `string` | No | String representing the object's type. |
| `updated_at` | `int` | No | The time the snippet was last updated as a UNIX timestamp. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ContentSnippet()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ContentSnippet()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ContentSnippet()->load(["id" => "content_snippet_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ContentSnippet()->remove(["id" => "content_snippet_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ContentSnippet()->update([
  "id" => "content_snippet_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContentSnippetEntity`

Create a new `ContentSnippetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationEntity

```php
$conversation = $client->Conversation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_assignee_id` | `int` | No | The id of the admin assigned to the conversation. |
| `ai_agent` | `array` | No | Data related to AI Agent involvement in the conversation. |
| `ai_agent_participated` | `bool` | No | Indicates whether the AI Agent participated in the conversation. |
| `attachment_urls` | `array` | No | A list of image URLs that will be added as attachments. |
| `body` | `string` | Yes | The content of the message. |
| `brand_id` | `string` | No | The unique identifier of the brand to associate with this conversation. |
| `channel` | `array` | No | The channel through which the conversation was initiated and its current channel. |
| `company` | `array` | No | The company associated with the conversation. |
| `company_id` | `string` | No | The ID of the company that the conversation is associated with. |
| `contacts` | `array` | No | The list of contacts (users or leads) involved in this conversation. |
| `conversation_id` | `string` | Yes | The unique identifier (given by Intercom) for the conversation or customer ticket to link to the tracker ticket. |
| `conversation_parts` | `array` | No | A list of Conversation Part objects for each part message in the conversation. |
| `conversation_rating` | `array` | No | The Conversation Rating object which contains information on the rating and/or remark added by a Contact and the Admin assigned to the conversation. |
| `created_at` | `int` | No | The time the conversation was created. |
| `custom_attributes` | `array` | No | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `external_references` | `array` | No | References linking this conversation to records in an external helpdesk or CRM system. |
| `first_contact_reply` | `array` | No | An object containing information on the first users message. |
| `from` | `array` | Yes |  |
| `id` | `string` | No | The id representing the conversation. |
| `linked_objects` | `array` | No | An object containing metadata about linked conversations and linked tickets. |
| `monitor_evaluations` | `array` | No | QA monitor evaluations that flagged this conversation. |
| `open` | `bool` | No | Indicates whether a conversation is open (true) or closed (false). |
| `priority` | `string` | No | The priority level of the conversation. |
| `read` | `bool` | No | Indicates whether a conversation has been read. |
| `sales_agent` | `array` | No | Data related to Sales Agent involvement in the conversation. |
| `sales_agent_participated` | `bool` | No | Indicates whether the Sales Agent participated in the conversation. |
| `scorecards` | `array` | No | QA scorecard results for this conversation. |
| `sla_applied` | `array` | No | The SLA Applied object contains the details for which SLA has been applied to this conversation. |
| `snoozed_until` | `int` | No | If set this is the time in the future when this conversation will be marked as open. |
| `source` | `array` | No | The type of the conversation part that started this conversation. |
| `state` | `string` | No | Can be set to "open", "closed" or "snoozed". |
| `statistics` | `array` | No | A Statistics object containing all information required for reporting, with timestamps and calculated metrics. |
| `subject` | `string` | No | The title of the email. |
| `tags` | `array` | No | A list of tags objects associated with a conversation |
| `team_assignee_id` | `int` | No | The id of the team assigned to the conversation. |
| `teammates` | `array` | No | The list of teammates who participated in the conversation (wrote at least one conversation part). |
| `title` | `string` | No | The title given to the conversation. |
| `type` | `string` | No | Always conversation. |
| `updated_at` | `int` | No | The last time the conversation was updated. |
| `waiting_since` | `int` | No | The last time a Contact responded to an Admin. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Conversation()->create([
  "body" => null, // string
  "conversation_id" => null, // string
  "from" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Conversation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Conversation()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Conversation()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Conversation()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationEntity`

Create a new `ConversationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationAttributeEntity

```php
$conversation_attribute = $client->ConversationAttribute();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `string` | No |  |
| `archived` | `bool` | No |  |
| `created_at` | `int` | No |  |
| `data_type` | `string` | No |  |
| `description` | `string` | No | Readable description of the attribute. |
| `id` | `int` | No |  |
| `label` | `string` | Yes | The label for the new option. |
| `multiline` | `bool` | No | (String data type only) Whether this string attribute is multiline. |
| `name` | `string` | No | Name of the attribute. |
| `reference` | `array` | Yes | (Relationship data type only) Reference configuration for related objects. |
| `required` | `bool` | No | Whether this attribute is required. |
| `type` | `string` | No |  |
| `updated_at` | `int` | No |  |
| `visible_to_team_ids` | `array` | No | Team IDs that can see this attribute. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ConversationAttribute()->create([
  "label" => null, // string
  "reference" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationAttribute()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationAttribute()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ConversationAttribute()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationAttributeEntity`

Create a new `ConversationAttributeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationAttributeListEntity

```php
$conversation_attribute_list = $client->ConversationAttributeList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No | A list of conversation attributes. |
| `type` | `string` | No | The type of the object. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ConversationAttributeList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationAttributeListEntity`

Create a new `ConversationAttributeListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationListEntity

```php
$conversation_list = $client->ConversationList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversations` | `array` | No | The list of conversation objects |
| `pages` | `array` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `array` | No |  |
| `query` | `mixed` | Yes |  |
| `total_count` | `int` | No | A count of the total number of objects. |
| `type` | `string` | No | Always conversation.list |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ConversationList()->create([
  "query" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationListEntity`

Create a new `ConversationListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationParticipantEntity

```php
$conversation_participant = $client->ConversationParticipant();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ConversationParticipant()->create([
  "id" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ConversationParticipant()->remove(["contact_id" => "contact_id", "conversation_id" => "conversation_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationParticipantEntity`

Create a new `ConversationParticipantEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomObjectInstanceEntity

```php
$custom_object_instance = $client->CustomObjectInstance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No |  |
| `custom_attributes` | `array` | No | The custom attributes which are set for the Custom Object instance. |
| `data` | `array` | No | An array of Custom Object Instance objects. |
| `external_created_at` | `string` | No | The time when the Custom Object instance was created in the external system it originated from. |
| `external_id` | `string` | No | A unique identifier for the Custom Object instance in the external system it originated from. |
| `external_updated_at` | `string` | No | The time when the Custom Object instance was last updated in the external system it originated from. |
| `id` | `string` | No |  |
| `pages` | `array` | No | The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests. |
| `total_count` | `int` | No | A count of the total number of custom object instances. |
| `type` | `string` | No | The type of the object - `list`. |
| `updated_at` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomObjectInstance()->create([
  "id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomObjectInstance()->load(["id" => "custom_object_instance_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomObjectInstance()->remove(["id" => "custom_object_instance_id", "external_id" => "external_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomObjectInstanceEntity`

Create a new `CustomObjectInstanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DataEntity

```php
$data = $client->Data();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at_after` | `int` | Yes | The start date that you request data for. |
| `created_at_before` | `int` | Yes | The end date that you request data for. |
| `download_expires_at` | `string` | No | The time after which you will not be able to access the data. |
| `download_url` | `string` | No | The location where you can download your data. |
| `id` | `string` | No |  |
| `job_identifier` | `string` | No | The identifier for your job. |
| `status` | `string` | No | The current state of your job. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Data()->create([
  "created_at_after" => null, // int
  "created_at_before" => null, // int
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Data()->load(["id" => "data_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DataEntity`

Create a new `DataEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DataAttributeEntity

```php
$data_attribute = $client->DataAttribute();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `string` | No | Teammate who created the attribute. |
| `api_writable` | `bool` | No | Can this attribute be updated through API |
| `archived` | `bool` | No | Is this attribute archived. |
| `created_at` | `int` | No | The time the attribute was created as a UTC Unix timestamp |
| `custom` | `bool` | No | Set to true if this is a CDA |
| `data_type` | `string` | No | The data type of the attribute. |
| `description` | `string` | No | Readable description of the attribute. |
| `full_name` | `string` | No | Full name of the attribute. |
| `id` | `int` | No | The unique identifier for the data attribute which is given by Intercom. |
| `label` | `string` | No | Readable name of the attribute (i.e. |
| `messenger_writable` | `bool` | No | Can this attribute be updated by the Messenger |
| `model` | `string` | No | Value is `contact` for user/lead attributes and `company` for company attributes. |
| `name` | `string` | No | Name of the attribute. |
| `options` | `array` | No | List of predefined options for attribute value. |
| `type` | `string` | No | Value is `data_attribute`. |
| `ui_writable` | `bool` | No | Can this attribute be updated in the UI |
| `updated_at` | `int` | No | The time the attribute was last updated as a UTC Unix timestamp |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DataAttribute()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DataAttribute()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DataAttribute()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DataAttributeEntity`

Create a new `DataAttributeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DataConnectorEntity

```php
$data_connector = $client->DataConnector();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audiences` | `array` | No | The audience types this connector targets. |
| `body` | `string` | No | The request body template. |
| `bypass_authentication` | `bool` | No | Whether authentication is bypassed for this connector. |
| `client_function_name` | `string` | No | The name of the client-side function, if applicable. |
| `client_function_timeout_ms` | `int` | No | Timeout in milliseconds for the client function, if applicable. |
| `configuration_response_type` | `string` | No | The expected response format from the connector. |
| `created_at` | `string` | No | The time the data connector was created. |
| `created_by_admin_id` | `string` | No | The ID of the admin who created this connector. |
| `customer_authentication` | `bool` | No | Whether OTP authentication is enabled for this connector. |
| `data_inputs` | `array` | No | The input parameters accepted by this data connector. |
| `data_transformation_type` | `string` | No | The type of data transformation applied to the response. |
| `description` | `string` | No | A description of what this data connector does. |
| `direct_fin_usage` | `bool` | No | Whether this connector is used directly by Fin. |
| `execution_results_url` | `string` | No | The URL path to fetch execution results for this connector. |
| `execution_type` | `string` | No | How the connector executes. |
| `headers` | `array` | No | HTTP headers for the request. |
| `http_method` | `string` | No | The HTTP method used by the data connector. |
| `id` | `string` | No | The unique identifier for the data connector. |
| `mock_response` | `array` | No | A sample JSON response from the external API. |
| `name` | `string` | No | The name of the data connector. |
| `object_mappings` | `array` | No | Mappings from connector response objects to Intercom objects. |
| `response_fields` | `array` | No | The fields returned in the connector response. |
| `state` | `string` | No | The current state of the data connector. |
| `token_ids` | `array` | No | IDs of authentication tokens associated with this connector. |
| `type` | `string` | No | The type of object - `data_connector`. |
| `updated_at` | `string` | No | The time the data connector was last updated. |
| `updated_by_admin_id` | `string` | No | The ID of the admin who last updated this connector. |
| `url` | `string` | No | The URL of the external API endpoint. |
| `validate_missing_attributes` | `bool` | No | Whether to validate missing attributes before execution. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DataConnector()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DataConnector()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DataConnector()->load(["id" => "data_connector_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DataConnector()->update([
  "id" => "data_connector_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DataConnectorEntity`

Create a new `DataConnectorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DataConnectorExecutionResultEntity

```php
$data_connector_execution_result = $client->DataConnectorExecutionResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversation_id` | `string` | No | The conversation associated with this execution, if any. |
| `created_at` | `string` | No | The time the execution occurred. |
| `data_connector_id` | `string` | No | The unique identifier of the data connector that produced this result. |
| `error_message` | `string` | No | A human-readable error message. |
| `error_type` | `string` | No | The type of error that occurred, if any. |
| `execution_time_ms` | `int` | No | The execution time in milliseconds. |
| `http_method` | `string` | No | The HTTP method used for the request. |
| `http_status` | `int` | No | The HTTP status code returned by the external API. |
| `id` | `string` | No | The unique identifier for the execution result. |
| `raw_response_body` | `string` | No | The raw (unmapped) response body. |
| `request_body` | `string` | No | The request body sent to the external API. |
| `request_url` | `string` | No | The request URL. |
| `response_body` | `string` | No | The response body from the external API. |
| `source_id` | `string` | No | The identifier of the source that triggered this execution. |
| `source_type` | `string` | No | The type of source that triggered this execution. |
| `success` | `bool` | No | Whether the execution was successful. |
| `type` | `string` | No | The type of object - `data_connector.execution`. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DataConnectorExecutionResult()->load(["id" => "data_connector_execution_result_id", "data_connector_id" => "data_connector_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DataConnectorExecutionResultEntity`

Create a new `DataConnectorExecutionResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DataConnectorExecutionResultListEntity

```php
$data_connector_execution_result_list = $client->DataConnectorExecutionResultList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DataConnectorExecutionResultList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DataConnectorExecutionResultListEntity`

Create a new `DataConnectorExecutionResultListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DataEventEntity

```php
$data_event = $client->DataEvent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The time the event occurred as a UTC Unix timestamp |
| `email` | `string` | No | An email address for your user. |
| `event_name` | `string` | No | The name of the event that occurred. |
| `event_summaries` | `array` | No | A list of event summaries for the user. |
| `id` | `string` | No | The unique identifier for the contact (lead or user) which is given by Intercom. |
| `metadata` | `array` | No | Optional metadata about the event. |
| `user_id` | `string` | No | Your identifier for the user. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DataEvent()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DataEventEntity`

Create a new `DataEventEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DataEventSummaryEntity

```php
$data_event_summary = $client->DataEventSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | No | The number of times the event was sent |
| `description` | `string` | No | The description of the event |
| `first` | `string` | No | The first time the event was sent |
| `last` | `string` | No | The last time the event was sent |
| `name` | `string` | No | The name of the event |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DataEventSummary()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DataEventSummaryEntity`

Create a new `DataEventSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DataExportEntity

```php
$data_export = $client->DataExport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `download_expires_at` | `string` | No | The time after which you will not be able to access the data. |
| `download_url` | `string` | No | The location where you can download your data. |
| `job_identifier` | `string` | No | The identifier for your job. |
| `status` | `string` | No | The current state of your job. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DataExport()->create([
  "job_identifier" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DataExportEntity`

Create a new `DataExportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedEntity

```php
$deleted = $client->Deleted();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deleted_at` | `int` | No | The time when the conversation was deleted. |
| `id` | `string` | No | The ID of the deleted conversation. |
| `metrics_retained` | `bool` | No | Whether reporting metrics are retained for this conversation ID |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Deleted()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedEntity`

Create a new `DeletedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedArticleObjectEntity

```php
$deleted_article_object = $client->DeletedArticleObject();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeletedArticleObject()->remove(["article_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedArticleObjectEntity`

Create a new `DeletedArticleObjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedCompanyObjectEntity

```php
$deleted_company_object = $client->DeletedCompanyObject();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeletedCompanyObject()->remove(["company_id" => "company_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedCompanyObjectEntity`

Create a new `DeletedCompanyObjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedDataConnectorObjectEntity

```php
$deleted_data_connector_object = $client->DeletedDataConnectorObject();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeletedDataConnectorObject()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedDataConnectorObjectEntity`

Create a new `DeletedDataConnectorObjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedInternalArticleObjectEntity

```php
$deleted_internal_article_object = $client->DeletedInternalArticleObject();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `bool` | No | Whether the internal article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | No | Whether the internal article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | No | Whether the internal article should be available for AI Sales Agent. |
| `audience_ids` | `array` | No | The list of audience IDs to target this internal article to for Fin AI Agent. |
| `author_id` | `int` | Yes | The id of the author of the article. |
| `body` | `string` | No | The content of the article in HTML. |
| `body_markdown` | `string` | No | The content of the article in markdown. |
| `created_at` | `int` | No | The time when the article was created. |
| `id` | `string` | No | The unique identifier for the article which is given by Intercom. |
| `locale` | `string` | No | The default locale of the article. |
| `owner_id` | `int` | Yes | The id of the owner of the article. |
| `title` | `string` | Yes | The title of the article. |
| `type` | `string` | No | The type of object - `internal_article`. |
| `updated_at` | `int` | No | The time when the article was last updated. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DeletedInternalArticleObject()->create([
  "author_id" => null, // int
  "owner_id" => null, // int
  "title" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DeletedInternalArticleObject()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeletedInternalArticleObject()->remove(["internal_article_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedInternalArticleObjectEntity`

Create a new `DeletedInternalArticleObjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeletedObjectEntity

```php
$deleted_object = $client->DeletedObject();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeletedObject()->remove(["news_item_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeletedObjectEntity`

Create a new `DeletedObjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmailEntity

```php
$email = $client->Email();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brand_id` | `string` | No | Associated brand identifier |
| `created_at` | `int` | No | Unix timestamp of creation |
| `domain` | `string` | No | Domain portion of the email address |
| `email` | `string` | No | Full sender email address |
| `forwarded_email_last_received_at` | `int` | No | Unix timestamp of last forwarded email received (null if never) |
| `forwarding_enabled` | `bool` | No | Whether email forwarding is active |
| `id` | `string` | No | Unique email setting identifier |
| `type` | `string` | No | The type of object |
| `updated_at` | `int` | No | Unix timestamp of last modification |
| `verified` | `bool` | No | Whether the email address has been verified |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Email()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Email()->load(["id" => "email_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmailEntity`

Create a new `EmailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ExternalPageEntity

```php
$external_page = $client->ExternalPage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_agent_availability` | `bool` | Yes | Whether the external page should be used to answer questions by AI Agent. |
| `ai_copilot_availability` | `bool` | Yes | Whether the external page should be used to answer questions by AI Copilot. |
| `ai_sales_agent_availability` | `bool` | No | Whether the external page should be used to answer questions by AI Sales Agent. |
| `created_at` | `int` | Yes | The time when the external page was created. |
| `external_id` | `string` | Yes | The identifier for the external page which was given by the source. |
| `fin_availability` | `bool` | No | Deprecated. |
| `html` | `string` | Yes | The body of the external page in HTML. |
| `id` | `string` | Yes | The unique identifier for the external page which is given by Intercom. |
| `last_ingested_at` | `int` | Yes | The time when the external page was last ingested. |
| `locale` | `string` | Yes | Always en |
| `source_id` | `int` | Yes | The unique identifier for the source of the external page which was given by Intercom. |
| `title` | `string` | Yes | The title of the external page. |
| `type` | `string` | Yes | Always external_page |
| `updated_at` | `int` | Yes | The time when the external page was last updated. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ExternalPage()->create([
  "ai_agent_availability" => null, // bool
  "ai_copilot_availability" => null, // bool
  "created_at" => null, // int
  "external_id" => null, // string
  "html" => null, // string
  "id" => null, // string
  "last_ingested_at" => null, // int
  "locale" => null, // string
  "source_id" => null, // int
  "title" => null, // string
  "type" => null, // string
  "updated_at" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ExternalPage()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ExternalPage()->load(["id" => "external_page_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ExternalPage()->remove(["id" => "external_page_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ExternalPage()->update([
  "id" => "external_page_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ExternalPageEntity`

Create a new `ExternalPageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FinAgentEntity

```php
$fin_agent = $client->FinAgent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `array` | No | An array of attachments to include with the message. |
| `conversation` | `array` | No | Conversation-related attribute errors. |
| `conversation_id` | `string` | No | The external ID of the rated conversation. |
| `conversation_metadata` | `array` | No | Metadata about the conversation, including history and attributes. |
| `message` | `array` | Yes | A message exchanged within a Fin Agent conversation. |
| `rating` | `string` | No | The rating now recorded on the conversation. |
| `remark` | `string` | No | Optional free-text comment the user left alongside the rating. |
| `status` | `string` | No | The result of the submission. |
| `user` | `array` | No | User-related attribute errors. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FinAgent()->create([
  "message" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FinAgentEntity`

Create a new `FinAgentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HandlingEventEntity

```php
$handling_event = $client->HandlingEvent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `string` | No | Optional reason for the event (e.g., "Paused", "Away") |
| `teammate` | `array` | Yes | A reference to a teammate |
| `timestamp` | `string` | Yes | ISO8601 timestamp when the event occurred |
| `type` | `string` | Yes | The type of handling event |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->HandlingEvent()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HandlingEventEntity`

Create a new `HandlingEventEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HelpCenterEntity

```php
$help_center = $client->HelpCenter();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ar` | `array` | No | The content of the group in Arabic |
| `bg` | `array` | No | The content of the group in Bulgarian |
| `bs` | `array` | No | The content of the group in Bosnian |
| `ca` | `array` | No | The content of the group in Catalan |
| `created_at` | `int` | No | The time when the Help Center was created. |
| `cs` | `array` | No | The content of the group in Czech |
| `custom_domain` | `string` | No | Custom domain configured for the help center |
| `da` | `array` | No | The content of the group in Danish |
| `de` | `array` | No | The content of the group in German |
| `default` | `bool` | No | Whether this help center is the default for the workspace. |
| `description` | `string` | No | The description of the collection. |
| `display_name` | `string` | No | The display name of the Help Center only seen by teammates. |
| `el` | `array` | No | The content of the group in Greek |
| `en` | `array` | No | The content of the group in English |
| `es` | `array` | No | The content of the group in Spanish |
| `et` | `array` | No | The content of the group in Estonian |
| `fi` | `array` | No | The content of the group in Finnish |
| `fr` | `array` | No | The content of the group in French |
| `from_url` | `string` | No | The source URL that is redirected. |
| `he` | `array` | No | The content of the group in Hebrew |
| `help_center_id` | `string` | No | The unique identifier for the help center the redirect belongs to. |
| `hr` | `array` | No | The content of the group in Croatian |
| `hu` | `array` | No | The content of the group in Hungarian |
| `id` | `array` | No | The content of the group in Indonesian |
| `identifier` | `string` | No | The identifier of the Help Center. |
| `it` | `array` | No | The content of the group in Italian |
| `ja` | `array` | No | The content of the group in Japanese |
| `ko` | `array` | No | The content of the group in Korean |
| `locale` | `string` | No | The locale of the redirect's target. |
| `locales` | `array` | No | The locales in which the help center is available. |
| `lt` | `array` | No | The content of the group in Lithuanian |
| `lv` | `array` | No | The content of the group in Latvian |
| `mn` | `array` | No | The content of the group in Mongolian |
| `name` | `string` | No | The name of the collection. |
| `nb` | `array` | No | The content of the group in Norwegian |
| `nl` | `array` | No | The content of the group in Dutch |
| `parent_id` | `string` | No | The id of the parent collection. |
| `pl` | `array` | No | The content of the group in Polish |
| `pt` | `array` | No | The content of the group in Portuguese (Portugal) |
| `ptBR` | `array` | No | The content of the group in Portuguese (Brazil) |
| `ro` | `array` | No | The content of the group in Romanian |
| `ru` | `array` | No | The content of the group in Russian |
| `sl` | `array` | No | The content of the group in Slovenian |
| `sr` | `array` | No | The content of the group in Serbian |
| `sv` | `array` | No | The content of the group in Swedish |
| `target_id` | `string` | No | The unique identifier of the target article or collection. |
| `target_type` | `string` | No | The type of the redirect target. |
| `tr` | `array` | No | The content of the group in Turkish |
| `translated_content` | `array` | No | The Translated Content of an Group. |
| `type` | `string` | No | The type of object - group_translated_content. |
| `updated_at` | `int` | No | The time when the Help Center was last updated. |
| `url` | `string` | No | The URL for the help center, if you have a custom domain then this will show the URL using the custom domain. |
| `vi` | `array` | No | The content of the group in Vietnamese |
| `website_turned_on` | `bool` | No | Whether the Help Center is turned on or not. |
| `workspace_id` | `string` | No | The id of the workspace which the Help Center belongs to. |
| `zhCN` | `array` | No | The content of the group in Chinese (China) |
| `zhTW` | `array` | No | The content of the group in Chinese (Taiwan) |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->HelpCenter()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->HelpCenter()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->HelpCenter()->load(["collection_id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->HelpCenter()->remove(["collection_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->HelpCenter()->update([
  "collection_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HelpCenterEntity`

Create a new `HelpCenterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InternalArticleEntity

```php
$internal_article = $client->InternalArticle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `bool` | No | Whether the internal article is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | No | Whether the internal article is available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | No | Whether the internal article is available for AI Sales Agent. |
| `audience_ids` | `array` | No | The list of audience IDs this internal article is targeted to for Fin AI Agent. |
| `author_id` | `int` | No | The id of the author of the article. |
| `body` | `string` | No | The body of the article in HTML. |
| `body_markdown` | `string` | No | The body of the article in markdown. |
| `created_at` | `int` | No | The time when the article was created. |
| `id` | `string` | No | The unique identifier for the article which is given by Intercom. |
| `locale` | `string` | No | The default locale of the article. |
| `owner_id` | `int` | No | The id of the owner of the article. |
| `title` | `string` | No | The title of the article. |
| `type` | `string` | No | The type of object - `internal_article`. |
| `updated_at` | `int` | No | The time when the article was last updated. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->InternalArticle()->load(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->InternalArticle()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InternalArticleEntity`

Create a new `InternalArticleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InternalArticleSearchEntity

```php
$internal_article_search = $client->InternalArticleSearch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No | An object containing the results of the search. |
| `pages` | `array` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | No | The total number of Internal Articles matching the search query |
| `type` | `string` | No | The type of the object - `list`. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->InternalArticleSearch()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InternalArticleSearchEntity`

Create a new `InternalArticleSearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IpAllowlistEntity

```php
$ip_allowlist = $client->IpAllowlist();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | No | Whether the IP allowlist is enabled for the workspace. |
| `ip_allowlist` | `array` | No | List of allowed IP addresses and/or IP ranges in CIDR notation. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IpAllowlist()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IpAllowlist()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IpAllowlistEntity`

Create a new `IpAllowlistEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## JobEntity

```php
$job = $client->Job();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The id of the job that's currently being processed or has completed. |
| `resource_id` | `string` | No | The id of the resource created during job execution (e.g. |
| `resource_type` | `string` | No | The type of resource created during job execution. |
| `resource_url` | `string` | No | The url of the resource created during job exeuction. |
| `skip_notifications` | `bool` | No | Option to disable notifications when a Ticket is created. |
| `status` | `string` | No | The status of the job execution. |
| `type` | `string` | No | The type of the object |
| `url` | `string` | No | API endpoint URL to check the job status. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Job()->create([
  "id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Job()->load(["job_id" => "job_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): JobEntity`

Create a new `JobEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MacroEntity

```php
$macro = $client->Macro();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_on` | `array` | No | Where the macro is available for use. |
| `body` | `string` | No | The body of the macro in HTML format with placeholders transformed to XML-like format. |
| `body_text` | `string` | No | The plain text version of the macro body with original Intercom placeholder format. |
| `created_at` | `string` | No | The time the macro was created in ISO 8601 format. |
| `id` | `string` | No | The unique identifier for the macro. |
| `name` | `string` | No | The name of the macro. |
| `type` | `string` | No | String representing the object's type. |
| `updated_at` | `string` | No | The time the macro was last updated in ISO 8601 format. |
| `visible_to` | `string` | No | Who can view this macro. |
| `visible_to_team_ids` | `array` | No | The team IDs that can view this macro when visible_to is set to specific_teams. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Macro()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Macro()->load(["id" => "macro_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MacroEntity`

Create a new `MacroEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MergeHistoryEntity

```php
$merge_history = $client->MergeHistory();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `merged_at` | `int` | No | (Unix timestamp in seconds) The time when the merge occurred. |
| `source_contact_id` | `string` | No | The Intercom ID of the contact that was merged into this contact. |
| `source_contact_role` | `string` | No | The role of the contact that was merged in. |
| `type` | `string` | No | The type of object. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MergeHistory()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MergeHistoryEntity`

Create a new `MergeHistoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MessageEntity

```php
$message = $client->Message();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bcc` | `mixed` | No |  |
| `body` | `string` | Yes | The message body, which may contain HTML. |
| `cc` | `mixed` | No |  |
| `conversation_id` | `string` | No | The associated conversation_id |
| `create_conversation_without_contact_reply` | `bool` | No | Whether a conversation should be opened in the inbox for the message without the contact replying. |
| `created_at` | `int` | Yes | The time the conversation was created. |
| `from` | `array` | Yes | The sender of the message. |
| `id` | `string` | Yes | The id representing the message. |
| `message_type` | `string` | Yes | The type of message that was sent. |
| `subject` | `string` | No | The subject of the message. |
| `template` | `string` | No | The style of the outgoing message. |
| `to` | `mixed` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Message()->create([
  "body" => null, // string
  "created_at" => null, // int
  "from" => null, // array
  "id" => null, // string
  "message_type" => null, // string
  "type" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MessageEntity`

Create a new `MessageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NewsItemEntity

```php
$news_item = $client->NewsItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No | The news item body, which may contain HTML. |
| `cover_image_url` | `string` | No | URL of the image used as cover. |
| `created_at` | `int` | No | Timestamp for when the news item was created. |
| `deliver_silently` | `bool` | No | When set to true, the news item will appear in the messenger newsfeed without showing a notification badge. |
| `id` | `string` | No | The unique identifier for the news item which is given by Intercom. |
| `labels` | `array` | No | Label names displayed to users to categorize the news item. |
| `newsfeed_assignments` | `array` | No | A list of newsfeed_assignments to assign to the specified newsfeed. |
| `reactions` | `array` | No | Ordered list of emoji reactions to the news item. |
| `sender_id` | `int` | No | The id of the sender of the news item. |
| `state` | `string` | No | News items will not be visible to your users in the assigned newsfeeds until they are set live. |
| `title` | `string` | No | The title of the news item. |
| `type` | `string` | No | The type of object. |
| `updated_at` | `int` | No | Timestamp for when the news item was last updated. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->NewsItem()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NewsItem()->load(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NewsItem()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NewsItemEntity`

Create a new `NewsItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NewsfeedEntity

```php
$newsfeed = $client->Newsfeed();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | Timestamp for when the newsfeed was created. |
| `id` | `string` | No | The unique identifier for the newsfeed which is given by Intercom. |
| `name` | `string` | No | The name of the newsfeed. |
| `type` | `string` | No | The type of object. |
| `updated_at` | `int` | No | Timestamp for when the newsfeed was last updated. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Newsfeed()->load(["id" => "newsfeed_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NewsfeedEntity`

Create a new `NewsfeedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NoteEntity

```php
$note = $client->Note();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `string` | No | The unique identifier of the admin creating the note. |
| `author` | `array` | No | Optional. |
| `body` | `string` | No | The body text of the note. |
| `company` | `array` | No | Represents the company that the note was created about. |
| `contact` | `array` | No | Represents the contact that the note was created about. |
| `created_at` | `int` | No | The time the note was created. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Note()->create([
  "company_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Note()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Note()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NoteEntity`

Create a new `NoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OfficeHourEntity

```php
$office_hour = $client->OfficeHour();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The time the schedule was created as a Unix timestamp. |
| `id` | `string` | No | The unique identifier for the office hours schedule. |
| `name` | `string` | Yes | The name of the office hours schedule. |
| `time_intervals` | `array` | Yes | The open intervals for the schedule. |
| `time_zone_name` | `string` | Yes | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | `bool` | No | Whether the schedule is open 24/7. |
| `type` | `string` | No | The type of the object - always `office_hours_schedule`. |
| `updated_at` | `int` | No | The time the schedule was last updated as a Unix timestamp. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OfficeHour()->create([
  "name" => null, // string
  "time_intervals" => null, // array
  "time_zone_name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OfficeHour()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->OfficeHour()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OfficeHourEntity`

Create a new `OfficeHourEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OfficeHoursExceptionEntity

```php
$office_hours_exception = $client->OfficeHoursException();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The time the exception was created as a Unix timestamp. |
| `exception_date` | `string` | No | The date the exception applies to, in `YYYY-MM-DD` format. |
| `exception_type` | `string` | No | `closed` means the workspace is closed all day; `custom_hours` replaces the regular hours with `time_intervals`. |
| `id` | `string` | No | The unique identifier for the office hours exception. |
| `name` | `string` | No | An optional name for the exception. |
| `office_hours_schedule_id` | `string` | No | The unique identifier for the schedule this exception belongs to. |
| `recurring_annually` | `bool` | No | Whether the exception repeats every year on the same date. |
| `time_intervals` | `array` | No | The open intervals for the exception date. |
| `type` | `string` | No | The type of the object - always `office_hours_exception`. |
| `updated_at` | `int` | No | The time the exception was last updated as a Unix timestamp. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OfficeHoursException()->create([
  "office_hours_schedule_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OfficeHoursException()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OfficeHoursException()->load(["id" => "office_hours_exception_id", "office_hours_schedule_id" => "office_hours_schedule_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OfficeHoursException()->update([
  "id" => "office_hours_exception_id",
  "office_hours_schedule_id" => "office_hours_schedule_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OfficeHoursExceptionEntity`

Create a new `OfficeHoursExceptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OfficeHoursScheduleEntity

```php
$office_hours_schedule = $client->OfficeHoursSchedule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The time the schedule was created as a Unix timestamp. |
| `id` | `string` | No | The unique identifier for the office hours schedule. |
| `name` | `string` | No | The name of the office hours schedule. |
| `time_intervals` | `array` | No | The open intervals that make up the weekly schedule. |
| `time_zone_name` | `string` | No | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | `bool` | No | Whether the schedule is open 24/7. |
| `type` | `string` | No | The type of the object - always `office_hours_schedule`. |
| `updated_at` | `int` | No | The time the schedule was last updated as a Unix timestamp. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OfficeHoursSchedule()->load(["id" => "office_hours_schedule_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OfficeHoursSchedule()->update([
  "id" => "office_hours_schedule_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OfficeHoursScheduleEntity`

Create a new `OfficeHoursScheduleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaginatedEntity

```php
$paginated = $client->Paginated();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No | An array of Objects |
| `pages` | `array` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | No | A count of the total number of objects. |
| `type` | `string` | No | The type of object |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Paginated()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaginatedEntity`

Create a new `PaginatedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PhoneSwitchEntity

```php
$phone_switch = $client->PhoneSwitch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_attributes` | `array` | No | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `phone` | `string` | No | Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger. |
| `type` | `string` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `custom_attributes` | - |
| `phone` | Yes |
| `type` | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PhoneSwitch()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PhoneSwitchEntity`

Create a new `PhoneSwitchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReportingDataEntity

```php
$reporting_data = $client->ReportingData();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `download_expires_at` | `string` | No |  |
| `download_url` | `string` | No |  |
| `job_identifier` | `string` | No |  |
| `status` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ReportingData()->load(["app_id" => "app_id", "job_identifier" => "job_identifier"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReportingDataEntity`

Create a new `ReportingDataEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReportingDataExportEntity

```php
$reporting_data_export = $client->ReportingDataExport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute_ids` | `array` | Yes |  |
| `attributes` | `array` | No |  |
| `dataset_id` | `string` | Yes |  |
| `default_time_attribute_id` | `string` | No |  |
| `description` | `string` | No |  |
| `download_expires_at` | `string` | No |  |
| `download_url` | `string` | No |  |
| `end_time` | `int` | Yes |  |
| `id` | `string` | No |  |
| `job_identifier` | `string` | No |  |
| `name` | `string` | No |  |
| `start_time` | `int` | Yes |  |
| `status` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ReportingDataExport()->create([
  "attribute_ids" => null, // array
  "dataset_id" => null, // string
  "end_time" => null, // int
  "start_time" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ReportingDataExport()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReportingDataExportEntity`

Create a new `ReportingDataExportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SegmentEntity

```php
$segment = $client->Segment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | No | The number of items in the user segment. |
| `created_at` | `int` | No | The time the segment was created. |
| `id` | `string` | No | The unique identifier representing the segment. |
| `name` | `string` | No | The name of the segment. |
| `person_type` | `string` | No | Type of the contact: contact (lead) or user. |
| `type` | `string` | No | The type of object. |
| `updated_at` | `int` | No | The time the segment was updated. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Segment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Segment()->load(["id" => "segment_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SegmentEntity`

Create a new `SegmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SideConversationEntity

```php
$side_conversation = $client->SideConversation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversation_parts` | `array` | No | The conversation parts (messages) in this side conversation. |
| `side_conversation_id` | `string` | No | The unique identifier for the side conversation. |
| `total_count` | `int` | No | The total number of conversation parts in this side conversation. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SideConversation()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SideConversationEntity`

Create a new `SideConversationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionEntity

```php
$subscription = $client->Subscription();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent_type` | `string` | No | Describes the type of consent. |
| `content_types` | `array` | No | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `array` | No | A translation object contains the localised details of a subscription type. |
| `id` | `string` | No | The unique identifier representing the subscription type. |
| `state` | `string` | No | The state of the subscription type. |
| `translations` | `array` | No | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Subscription()->create([
  "contact_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Subscription()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Subscription()->remove(["contact_id" => "contact_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionEntity`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionTypeEntity

```php
$subscription_type = $client->SubscriptionType();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent_type` | `string` | No | Describes the type of consent. |
| `content_types` | `array` | No | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `array` | No | A translation object contains the localised details of a subscription type. |
| `id` | `string` | No | The unique identifier representing the subscription type. |
| `state` | `string` | No | The state of the subscription type. |
| `translations` | `array` | No | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `type` | `string` | No | The type of the object - subscription |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubscriptionType()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionTypeEntity`

Create a new `SubscriptionTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TagEntity

```php
$tag = $client->Tag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `string` | No | Optional id of the teammate to attribute the tagging to. |
| `applied_at` | `int` | No | The time when the tag was applied to the object. |
| `applied_by` | `array` | No | The admin who applied the tag. |
| `companies` | `array` | No |  |
| `id` | `string` | No | The id of the tag |
| `name` | `string` | No | The name of the tag |
| `type` | `string` | No | value is "tag" |
| `users` | `array` | No |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Tag()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Tag()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Tag()->load(["id" => "tag_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Tag()->remove(["id" => "tag_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TagEntity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamEntity

```php
$team = $client->Team();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_ids` | `array` | No | The list of admin IDs that are a part of the team. |
| `admin_priority_level` | `array` | No | Admin priority levels for the team |
| `assignment_limit` | `int` | No | The assignment limit for the team. |
| `distribution_method` | `string` | No | Describes how assignments are distributed among the team members |
| `id` | `string` | No | The id of the team |
| `name` | `string` | No | The name of the team |
| `type` | `string` | No | Value is always "team" |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Team()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Team()->load(["id" => "team_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamEntity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamMetricListEntity

```php
$team_metric_list = $client->TeamMetricList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TeamMetricList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamMetricListEntity`

Create a new `TeamMetricListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TicketEntity

```php
$ticket = $client->Ticket();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_assignee_id` | `int` | No | The id representing the admin assigned to the ticket. |
| `attributes` | `array` | No | The attributes set on the ticket. |
| `category` | `string` | No | Category of the Ticket. |
| `contacts` | `array` | No | The list of contacts affected by a ticket. |
| `created_at` | `int` | No | The time the ticket was created as a UTC Unix timestamp. |
| `id` | `string` | No | The unique identifier for the ticket which is given by Intercom. |
| `is_shared` | `bool` | No | Whether or not the ticket is shared with the customer. |
| `linked_objects` | `array` | No | An object containing metadata about linked conversations and linked tickets. |
| `open` | `bool` | No | Whether or not the ticket is open. |
| `previous_ticket_state_id` | `string` | No | The ID of the previous ticket state from the most recent state change. |
| `skip_notifications` | `bool` | No | Option to disable notifications when a Ticket is created. |
| `snoozed_until` | `int` | No | The time the ticket will be snoozed until as a UTC Unix timestamp. |
| `team_assignee_id` | `int` | No | The id representing the team assigned to the ticket. |
| `ticket_attributes` | `array` | No | An object containing the different attributes associated to the ticket as key-value pairs. |
| `ticket_id` | `string` | No | The ID of the Ticket used in the Intercom Inbox and Messenger. |
| `ticket_parts` | `array` | No | A list of Ticket Part objects for each note and event in the ticket. |
| `ticket_state` | `array` | No | A ticket state, used to define the state of a ticket. |
| `ticket_state_id` | `string` | No | The ID of the ticket state associated with the ticket type. |
| `ticket_type` | `array` | No | A ticket type, used to define the data fields to be captured in a ticket. |
| `ticket_type_id` | `string` | Yes | The ID of the type of ticket you want to convert the conversation to |
| `type` | `string` | No | Always ticket |
| `updated_at` | `int` | No | The last time the ticket was updated as a UTC Unix timestamp. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Ticket()->create([
  "ticket_type_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Ticket()->load(["id" => "ticket_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Ticket()->remove(["id" => "ticket_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Ticket()->update([
  "id" => "ticket_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TicketEntity`

Create a new `TicketEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TicketListEntity

```php
$ticket_list = $client->TicketList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pages` | `array` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `array` | No |  |
| `query` | `mixed` | Yes |  |
| `tickets` | `array` | No | The list of ticket objects |
| `total_count` | `int` | No | A count of the total number of objects. |
| `type` | `string` | No | Always ticket.list |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TicketList()->create([
  "query" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TicketListEntity`

Create a new `TicketListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TicketReplyEntity

```php
$ticket_reply = $client->TicketReply();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `array` | No | A list of attachments for the part. |
| `author` | `array` | No | The author that wrote or triggered the part. |
| `body` | `string` | No | The message body, which may contain HTML. |
| `created_at` | `int` | No | The time the note was created. |
| `id` | `string` | No | The id representing the part. |
| `part_type` | `string` | No | Type of the part |
| `redacted` | `bool` | No | Whether or not the ticket part has been redacted. |
| `skip_notifications` | `bool` | No | Option to disable notifications when replying to a Ticket. |
| `type` | `string` | No | Always ticket_part |
| `updated_at` | `int` | No | The last time the note was updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TicketReply()->create([
  "id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TicketReplyEntity`

Create a new `TicketReplyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TicketStateEntity

```php
$ticket_state = $client->TicketState();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | Whether the ticket state is archived |
| `category` | `string` | No | The category of the ticket state |
| `external_label` | `string` | No | The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal. |
| `id` | `string` | No | The id of the ticket state |
| `internal_label` | `string` | No | The state the ticket is currently in, in a human readable form - visible in Intercom |
| `ticket_types` | `array` | No | A list of ticket types associated with a given ticket state. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TicketState()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TicketStateEntity`

Create a new `TicketStateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TicketTypeEntity

```php
$ticket_type = $client->TicketType();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | Whether the ticket type is archived or not. |
| `category` | `string` | No | Category of the Ticket Type. |
| `created_at` | `int` | No | The date and time the ticket type was created. |
| `description` | `string` | No | The description of the ticket type |
| `icon` | `string` | No | The icon of the ticket type |
| `id` | `string` | No | The id representing the ticket type. |
| `is_internal` | `bool` | No | Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers. |
| `name` | `string` | No | The name of the ticket type |
| `ticket_states` | `array` | No | A list of ticket states associated with a given ticket type. |
| `ticket_type_attributes` | `array` | No | A list of attributes associated with a given ticket type. |
| `type` | `string` | No | String representing the object's type. |
| `updated_at` | `int` | No | The date and time the ticket type was last updated. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TicketType()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TicketType()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TicketType()->load(["id" => "ticket_type_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TicketType()->update([
  "id" => "ticket_type_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TicketTypeEntity`

Create a new `TicketTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TicketTypeAttributeEntity

```php
$ticket_type_attribute = $client->TicketTypeAttribute();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_multiple_values` | `bool` | No | Whether the attribute allows multiple files to be attached to it (only applicable to file attributes) |
| `archived` | `bool` | No | Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets) |
| `data_type` | `string` | Yes | The data type of the attribute |
| `description` | `string` | Yes | The description of the attribute presented to the teammate or contact |
| `id` | `string` | No |  |
| `list_items` | `string` | No | A comma delimited list of items for the attribute value (only applicable to list attributes) |
| `multiline` | `bool` | No | Whether the attribute allows multiple lines of text (only applicable to string attributes) |
| `name` | `string` | Yes | The name of the ticket type attribute |
| `required_to_create` | `bool` | No | Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox. |
| `required_to_create_for_contacts` | `bool` | No | Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger. |
| `visible_on_create` | `bool` | No | Whether the attribute is visible to teammates when creating a ticket in Inbox. |
| `visible_to_contacts` | `bool` | No | Whether the attribute is visible to contacts when creating a ticket in Messenger. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TicketTypeAttribute()->create([
  "id" => null, // string
  "data_type" => null, // string
  "description" => null, // string
  "name" => null, // string
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TicketTypeAttribute()->update([
  "id" => "id",
  "ticket_type_id" => "ticket_type_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TicketTypeAttributeEntity`

Create a new `TicketTypeAttributeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VisitorEntity

```php
$visitor = $client->Visitor();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anonymous` | `bool` | No | Identifies if this visitor is anonymous. |
| `app_id` | `string` | No | The id of the app the visitor is associated with. |
| `avatar` | `array` | No |  |
| `companies` | `array` | No |  |
| `created_at` | `int` | No | The time the Visitor was added to Intercom. |
| `custom_attributes` | `array` | No | The custom attributes you have set on the Visitor. |
| `do_not_track` | `bool` | No | Identifies if this visitor has do not track enabled. |
| `email` | `string` | No | The email of the visitor. |
| `has_hard_bounced` | `bool` | No | Identifies if this visitor has had a hard bounce. |
| `id` | `string` | No | The Intercom defined id representing the Visitor. |
| `las_request_at` | `int` | No | The time the Lead last recorded making a request. |
| `location_data` | `array` | No |  |
| `marked_email_as_spam` | `bool` | No | Identifies if this visitor has marked an email as spam. |
| `name` | `string` | No | The name of the visitor. |
| `owner_id` | `string` | No | The id of the admin that owns the Visitor. |
| `phone` | `string` | No | The phone number of the visitor. |
| `pseudonym` | `string` | No | The pseudonym of the visitor. |
| `referrer` | `string` | No | The referer of the visitor. |
| `remote_created_at` | `int` | No | The time the Visitor was added to Intercom. |
| `segments` | `array` | No |  |
| `session_count` | `int` | No | The number of sessions the Visitor has had. |
| `signed_up_at` | `int` | No | The time the Visitor signed up for your product. |
| `social_profiles` | `array` | No |  |
| `tags` | `array` | No |  |
| `type` | `string` | No | Value is 'visitor' |
| `unsubscribed_from_emails` | `bool` | No | Whether the Visitor is unsubscribed from emails. |
| `updated_at` | `int` | No | The last time the Visitor was updated. |
| `user_id` | `string` | No | Automatically generated identifier for the Visitor. |
| `utm_campaign` | `string` | No | The utm_campaign of the visitor. |
| `utm_content` | `string` | No | The utm_content of the visitor. |
| `utm_medium` | `string` | No | The utm_medium of the visitor. |
| `utm_source` | `string` | No | The utm_source of the visitor. |
| `utm_term` | `string` | No | The utm_term of the visitor. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Visitor()->load(["user_id" => "user_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Visitor()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VisitorEntity`

Create a new `VisitorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WhatsappMessageStatusEntity

```php
$whatsapp_message_status = $client->WhatsappMessageStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `details` | `string` | No | Detailed error information |
| `message` | `string` | No | Error message |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WhatsappMessageStatus()->load(["message_id" => "message_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WhatsappMessageStatusEntity`

Create a new `WhatsappMessageStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WhatsappMessageStatusListEntity

```php
$whatsapp_message_status_list = $client->WhatsappMessageStatusList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversation_id` | `string` | Yes | ID of the conversation |
| `created_at` | `int` | Yes | Creation timestamp |
| `id` | `string` | Yes | Event ID |
| `status` | `string` | Yes | Current status of the message |
| `template_name` | `string` | No | Name of the WhatsApp template used |
| `type` | `string` | Yes | Event type |
| `updated_at` | `int` | Yes | Last update timestamp |
| `whatsapp_message_id` | `string` | Yes | WhatsApp's message identifier |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WhatsappMessageStatusList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WhatsappMessageStatusListEntity`

Create a new `WhatsappMessageStatusListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowEntity

```php
$workflow = $client->Workflow();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attributes` | `array` | No | Custom attributes defined for this workflow. |
| `created_at` | `string` | No | When the workflow was created. |
| `description` | `string` | No | The description of the workflow. |
| `embedded_rules` | `array` | No | Rules embedded within the workflow steps. |
| `id` | `string` | No | The unique identifier for the workflow. |
| `preferred_devices` | `array` | No | The preferred devices for this workflow. |
| `snapshot` | `array` | No | The current snapshot of workflow steps and configuration. |
| `state` | `string` | No | The current state of the workflow. |
| `target_channels` | `array` | No | The channels this workflow targets. |
| `targeting` | `array` | No | The targeting rules for this workflow. |
| `title` | `string` | No | The title of the workflow. |
| `trigger_type` | `string` | No | The type of trigger that starts this workflow. |
| `updated_at` | `string` | No | When the workflow was last updated. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Workflow()->load(["id" => "workflow_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowEntity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new IntercomSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

