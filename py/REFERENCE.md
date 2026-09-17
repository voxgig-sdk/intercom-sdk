# Intercom Python SDK Reference

Complete API reference for the Intercom Python SDK.


## IntercomSDK

### Constructor

```python
from intercom_sdk import IntercomSDK

client = IntercomSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IntercomSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = IntercomSDK.test()
```


### Instance Methods

#### `ActivityLog(data=None)`

Create a new `ActivityLogEntity` instance. Pass `None` for no initial data.

#### `ActivityLogEventType(data=None)`

Create a new `ActivityLogEventTypeEntity` instance. Pass `None` for no initial data.

#### `ActivityLogList(data=None)`

Create a new `ActivityLogListEntity` instance. Pass `None` for no initial data.

#### `Admin(data=None)`

Create a new `AdminEntity` instance. Pass `None` for no initial data.

#### `AdminWithApp(data=None)`

Create a new `AdminWithAppEntity` instance. Pass `None` for no initial data.

#### `AiCall(data=None)`

Create a new `AiCallEntity` instance. Pass `None` for no initial data.

#### `AiContent(data=None)`

Create a new `AiContentEntity` instance. Pass `None` for no initial data.

#### `Article(data=None)`

Create a new `ArticleEntity` instance. Pass `None` for no initial data.

#### `ArticleSearch(data=None)`

Create a new `ArticleSearchEntity` instance. Pass `None` for no initial data.

#### `ArticleVersion(data=None)`

Create a new `ArticleVersionEntity` instance. Pass `None` for no initial data.

#### `ArticleVersionList(data=None)`

Create a new `ArticleVersionListEntity` instance. Pass `None` for no initial data.

#### `Audience(data=None)`

Create a new `AudienceEntity` instance. Pass `None` for no initial data.

#### `AwayStatusReason(data=None)`

Create a new `AwayStatusReasonEntity` instance. Pass `None` for no initial data.

#### `Banner(data=None)`

Create a new `BannerEntity` instance. Pass `None` for no initial data.

#### `BannerDismiss(data=None)`

Create a new `BannerDismissEntity` instance. Pass `None` for no initial data.

#### `Brand(data=None)`

Create a new `BrandEntity` instance. Pass `None` for no initial data.

#### `Call(data=None)`

Create a new `CallEntity` instance. Pass `None` for no initial data.

#### `Company(data=None)`

Create a new `CompanyEntity` instance. Pass `None` for no initial data.

#### `CompanyAttachedContact(data=None)`

Create a new `CompanyAttachedContactEntity` instance. Pass `None` for no initial data.

#### `CompanyAttachedSegment(data=None)`

Create a new `CompanyAttachedSegmentEntity` instance. Pass `None` for no initial data.

#### `CompanyList(data=None)`

Create a new `CompanyListEntity` instance. Pass `None` for no initial data.

#### `CompanyScroll(data=None)`

Create a new `CompanyScrollEntity` instance. Pass `None` for no initial data.

#### `Contact(data=None)`

Create a new `ContactEntity` instance. Pass `None` for no initial data.

#### `ContactAttachedCompany(data=None)`

Create a new `ContactAttachedCompanyEntity` instance. Pass `None` for no initial data.

#### `ContactList(data=None)`

Create a new `ContactListEntity` instance. Pass `None` for no initial data.

#### `ContactSegment(data=None)`

Create a new `ContactSegmentEntity` instance. Pass `None` for no initial data.

#### `Content(data=None)`

Create a new `ContentEntity` instance. Pass `None` for no initial data.

#### `ContentImportSource(data=None)`

Create a new `ContentImportSourceEntity` instance. Pass `None` for no initial data.

#### `ContentSearch(data=None)`

Create a new `ContentSearchEntity` instance. Pass `None` for no initial data.

#### `ContentSnippet(data=None)`

Create a new `ContentSnippetEntity` instance. Pass `None` for no initial data.

#### `Conversation(data=None)`

Create a new `ConversationEntity` instance. Pass `None` for no initial data.

#### `ConversationAttribute(data=None)`

Create a new `ConversationAttributeEntity` instance. Pass `None` for no initial data.

#### `ConversationAttributeList(data=None)`

Create a new `ConversationAttributeListEntity` instance. Pass `None` for no initial data.

#### `ConversationList(data=None)`

Create a new `ConversationListEntity` instance. Pass `None` for no initial data.

#### `ConversationParticipant(data=None)`

Create a new `ConversationParticipantEntity` instance. Pass `None` for no initial data.

#### `CustomObjectInstance(data=None)`

Create a new `CustomObjectInstanceEntity` instance. Pass `None` for no initial data.

#### `Data(data=None)`

Create a new `DataEntity` instance. Pass `None` for no initial data.

#### `DataAttribute(data=None)`

Create a new `DataAttributeEntity` instance. Pass `None` for no initial data.

#### `DataConnector(data=None)`

Create a new `DataConnectorEntity` instance. Pass `None` for no initial data.

#### `DataConnectorExecutionResult(data=None)`

Create a new `DataConnectorExecutionResultEntity` instance. Pass `None` for no initial data.

#### `DataConnectorExecutionResultList(data=None)`

Create a new `DataConnectorExecutionResultListEntity` instance. Pass `None` for no initial data.

#### `DataEvent(data=None)`

Create a new `DataEventEntity` instance. Pass `None` for no initial data.

#### `DataEventSummary(data=None)`

Create a new `DataEventSummaryEntity` instance. Pass `None` for no initial data.

#### `DataExport(data=None)`

Create a new `DataExportEntity` instance. Pass `None` for no initial data.

#### `Deleted(data=None)`

Create a new `DeletedEntity` instance. Pass `None` for no initial data.

#### `DeletedArticleObject(data=None)`

Create a new `DeletedArticleObjectEntity` instance. Pass `None` for no initial data.

#### `DeletedCompanyObject(data=None)`

Create a new `DeletedCompanyObjectEntity` instance. Pass `None` for no initial data.

#### `DeletedDataConnectorObject(data=None)`

Create a new `DeletedDataConnectorObjectEntity` instance. Pass `None` for no initial data.

#### `DeletedInternalArticleObject(data=None)`

Create a new `DeletedInternalArticleObjectEntity` instance. Pass `None` for no initial data.

#### `DeletedObject(data=None)`

Create a new `DeletedObjectEntity` instance. Pass `None` for no initial data.

#### `Email(data=None)`

Create a new `EmailEntity` instance. Pass `None` for no initial data.

#### `ExternalPage(data=None)`

Create a new `ExternalPageEntity` instance. Pass `None` for no initial data.

#### `FinAgent(data=None)`

Create a new `FinAgentEntity` instance. Pass `None` for no initial data.

#### `HandlingEvent(data=None)`

Create a new `HandlingEventEntity` instance. Pass `None` for no initial data.

#### `HelpCenter(data=None)`

Create a new `HelpCenterEntity` instance. Pass `None` for no initial data.

#### `InternalArticle(data=None)`

Create a new `InternalArticleEntity` instance. Pass `None` for no initial data.

#### `InternalArticleSearch(data=None)`

Create a new `InternalArticleSearchEntity` instance. Pass `None` for no initial data.

#### `IpAllowlist(data=None)`

Create a new `IpAllowlistEntity` instance. Pass `None` for no initial data.

#### `Job(data=None)`

Create a new `JobEntity` instance. Pass `None` for no initial data.

#### `Macro(data=None)`

Create a new `MacroEntity` instance. Pass `None` for no initial data.

#### `MergeHistory(data=None)`

Create a new `MergeHistoryEntity` instance. Pass `None` for no initial data.

#### `Message(data=None)`

Create a new `MessageEntity` instance. Pass `None` for no initial data.

#### `NewsItem(data=None)`

Create a new `NewsItemEntity` instance. Pass `None` for no initial data.

#### `Newsfeed(data=None)`

Create a new `NewsfeedEntity` instance. Pass `None` for no initial data.

#### `Note(data=None)`

Create a new `NoteEntity` instance. Pass `None` for no initial data.

#### `OfficeHour(data=None)`

Create a new `OfficeHourEntity` instance. Pass `None` for no initial data.

#### `OfficeHoursException(data=None)`

Create a new `OfficeHoursExceptionEntity` instance. Pass `None` for no initial data.

#### `OfficeHoursSchedule(data=None)`

Create a new `OfficeHoursScheduleEntity` instance. Pass `None` for no initial data.

#### `Paginated(data=None)`

Create a new `PaginatedEntity` instance. Pass `None` for no initial data.

#### `PhoneSwitch(data=None)`

Create a new `PhoneSwitchEntity` instance. Pass `None` for no initial data.

#### `ReportingData(data=None)`

Create a new `ReportingDataEntity` instance. Pass `None` for no initial data.

#### `ReportingDataExport(data=None)`

Create a new `ReportingDataExportEntity` instance. Pass `None` for no initial data.

#### `Segment(data=None)`

Create a new `SegmentEntity` instance. Pass `None` for no initial data.

#### `SideConversation(data=None)`

Create a new `SideConversationEntity` instance. Pass `None` for no initial data.

#### `Subscription(data=None)`

Create a new `SubscriptionEntity` instance. Pass `None` for no initial data.

#### `SubscriptionType(data=None)`

Create a new `SubscriptionTypeEntity` instance. Pass `None` for no initial data.

#### `Tag(data=None)`

Create a new `TagEntity` instance. Pass `None` for no initial data.

#### `Team(data=None)`

Create a new `TeamEntity` instance. Pass `None` for no initial data.

#### `TeamMetricList(data=None)`

Create a new `TeamMetricListEntity` instance. Pass `None` for no initial data.

#### `Ticket(data=None)`

Create a new `TicketEntity` instance. Pass `None` for no initial data.

#### `TicketList(data=None)`

Create a new `TicketListEntity` instance. Pass `None` for no initial data.

#### `TicketReply(data=None)`

Create a new `TicketReplyEntity` instance. Pass `None` for no initial data.

#### `TicketState(data=None)`

Create a new `TicketStateEntity` instance. Pass `None` for no initial data.

#### `TicketType(data=None)`

Create a new `TicketTypeEntity` instance. Pass `None` for no initial data.

#### `TicketTypeAttribute(data=None)`

Create a new `TicketTypeAttributeEntity` instance. Pass `None` for no initial data.

#### `Visitor(data=None)`

Create a new `VisitorEntity` instance. Pass `None` for no initial data.

#### `WhatsappMessageStatus(data=None)`

Create a new `WhatsappMessageStatusEntity` instance. Pass `None` for no initial data.

#### `WhatsappMessageStatusList(data=None)`

Create a new `WhatsappMessageStatusListEntity` instance. Pass `None` for no initial data.

#### `Workflow(data=None)`

Create a new `WorkflowEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ActivityLogEntity

```python
activity_log = client.ActivityLog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_description` | `str` | No | A sentence or two describing the activity. |
| `activity_type` | `str` | No |  |
| `created_at` | `int` | No | The time the activity was created. |
| `id` | `str` | No | The id representing the activity. |
| `metadata` | `dict` | No | Additional data provided about Admin activity. |
| `performed_by` | `dict` | No | Details about the Admin involved in the activity. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ActivityLog().list({"created_at_after": "example"})
for activity_log in results:
    print(activity_log)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityLogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActivityLogEventTypeEntity

```python
activity_log_event_type = client.ActivityLogEventType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `event_types` | `list` | No | An array of activity log event type strings. |
| `type` | `str` | No | String representing the object's type. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ActivityLogEventType().list()
for activity_log_event_type in results:
    print(activity_log_event_type)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityLogEventTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActivityLogListEntity

```python
activity_log_list = client.ActivityLogList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_logs` | `list` | No | An array of activity logs |
| `created_at_after` | `int` | Yes | The start date that you request data for. |
| `created_at_before` | `int` | No | The end date that you request data for. |
| `event_types` | `list` | No | An optional list of event types to filter activity logs by. |
| `page` | `int` | No | The page number of results to return. |
| `pages` | `dict` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `per_page` | `int` | No | The number of results per page. |
| `type` | `str` | No | String representing the object's type. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ActivityLogList().create({
    "created_at_after": 1,  # int
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityLogListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminEntity

```python
admin = client.Admin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `str` | No | Image for the associated team or teammate |
| `away_mode_enabled` | `bool` | No | Identifies if this admin is currently set in away mode. |
| `away_mode_reassign` | `bool` | No | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `away_status_reason_id` | `int` | No | The unique identifier of the away status reason |
| `email` | `str` | No | The email of the admin. |
| `has_inbox_seat` | `bool` | No | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `id` | `str` | No | The id representing the admin. |
| `job_title` | `str` | No | The job title of the admin. |
| `name` | `str` | No | The name of the admin. |
| `role` | `dict` | No | The role assigned to this admin. |
| `team_ids` | `list` | No | This object represents the avatar associated with the admin. |
| `team_priority_level` | `dict` | No | Admin priority levels for teams |
| `type` | `str` | No | String representing the object's type. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Admin().list()
for admin in results:
    print(admin)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Admin().load({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Admin().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminWithAppEntity

```python
admin_with_app = client.AdminWithApp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `dict` | No | App that the admin belongs to. |
| `avatar` | `dict` | No | This object represents the avatar associated with the admin. |
| `away_mode_enabled` | `bool` | No | Identifies if this admin is currently set in away mode. |
| `away_mode_reassign` | `bool` | No | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `email` | `str` | No | The email of the admin. |
| `email_verified` | `bool` | No | Identifies if this admin's email is verified. |
| `has_inbox_seat` | `bool` | No | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `id` | `str` | No | The id representing the admin. |
| `job_title` | `str` | No | The job title of the admin. |
| `name` | `str` | No | The name of the admin. |
| `team_ids` | `list` | No | This is a list of ids of the teams that this admin is part of. |
| `type` | `str` | No | String representing the object's type. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AdminWithApp().list()
for admin_with_app in results:
    print(admin_with_app)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminWithAppEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiCallEntity

```python
ai_call = client.AiCall()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `int` | No | The workspace identifier |
| `call_id` | `str` | Yes | External call identifier from the call provider |
| `call_summary` | `str` | No | Summary of the call conversation, truncated to 256 characters. |
| `call_transcript` | `list` | No | Array of transcript entries for the call |
| `data` | `dict` | No | Additional metadata about the call |
| `external_call_id` | `str` | No | The external call identifier from the call provider |
| `id` | `int` | No | The unique identifier for the external reference |
| `intent` | `list` | No | Array of intent classifications for the call |
| `intercom_call_id` | `str` | No | The Intercom call identifier, if the call has been matched |
| `intercom_conversation_id` | `str` | No | The Intercom conversation identifier, if a conversation has been created |
| `phone_number` | `str` | Yes | Phone number in E.164 format for the call |
| `source` | `str` | No | Source of the call. |
| `status` | `str` | No | Status of the call. |
| `user_phone_number` | `str` | No | Phone number in E.164 format for the call |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AiCall().create({
    "call_id": "example_call_id",  # str
    "phone_number": "example_phone_number",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AiCall().load({"conversation_id": "conversation_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiCallEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AiContentEntity

```python
ai_content = client.AiContent()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AiContent().remove({"source_id": "source_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AiContentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ArticleEntity

```python
article = client.Article()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `bool` | No | Whether the article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | No | Whether the article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | No | Whether the article should be available for AI Sales Agent. |
| `audience_ids` | `list` | No | The list of audience IDs to assign to this article for Fin AI Agent targeting. |
| `author_id` | `int` | Yes | The id of the author of the article. |
| `body` | `str` | No | The content of the article in HTML. |
| `body_markdown` | `str` | No | The content of the article in markdown. |
| `conversions` | `int` | No | The number of conversations started from the article. |
| `created_at` | `int` | No | The time when the article was created. |
| `created_by_id` | `int` | No | The ID of the teammate who created the article. |
| `default_locale` | `str` | No | The default locale of the help center. |
| `description` | `str` | No | The description of the article. |
| `draft_updated_at` | `int` | No | The time, in seconds, when the staged draft was last edited, or `null` when there is no staged draft. |
| `exclude_from_article_suggestions` | `bool` | No | Whether the article is excluded from Fin AI Agent article suggestions. |
| `fin_involvements` | `int` | No | The number of conversations in which Fin AI Agent used this article, summed across all of the article's locales. |
| `fin_resolution_rate` | `float` | No | The percentage of Fin AI Agent involvements that resulted in a resolution (fin_resolutions / fin_involvements * 100). |
| `fin_resolutions` | `int` | No | The number of conversations Fin AI Agent resolved using this article, summed across all of the article's locales. |
| `happy_reaction_percentage` | `float` | No | The percentage of happy reactions the article has received against other types of reaction. |
| `has_unpublished_changes` | `bool` | No | Whether the published article has unpublished changes staged as a draft on top of its live content. |
| `help_center_audience` | `str` | No | The audience that can view this article in the Help Center. |
| `id` | `str` | No | The unique identifier for the article which is given by Intercom. |
| `neutral_reaction_percentage` | `float` | No | The percentage of neutral reactions the article has received against other types of reaction. |
| `parent_id` | `int` | No | The id of the article's parent collection or section. |
| `parent_ids` | `list` | No | The ids of the article's parent collections or sections. |
| `parent_type` | `str` | No | The type of parent, which can either be a `collection` or `section`. |
| `reactions` | `int` | No | The number of total reactions the article has received. |
| `sad_reaction_percentage` | `float` | No | The percentage of sad reactions the article has received against |
| `scheduled_publish_at` | `str` | No | ISO 8601 timestamp at which to schedule a future publish of the article. |
| `scheduled_unpublish_at` | `str` | No | ISO 8601 timestamp at which to schedule a future unpublish of the article. |
| `state` | `str` | No | Whether the article will be `published` or will be a `draft`. |
| `tags` | `dict` | No | A list of tags objects associated with a conversation |
| `title` | `str` | Yes | The title of the article.For multilingual articles, this will be the title of the default language's content. |
| `translated_content` | `dict` | No | The Translated Content of an Article. |
| `type` | `str` | No | The type of object - `article_statistics`. |
| `updated_at` | `int` | No | The time when the article was last updated. |
| `updated_by_id` | `int` | No | The ID of the teammate who last updated the article. |
| `url` | `str` | No | The URL of the article. |
| `views` | `int` | No | The number of total views the article has received. |
| `workspace_id` | `str` | No | The id of the workspace which the article belongs to. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Article().create({
    "author_id": 1,  # int
    "title": "example_title",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Article().list()
for article in results:
    print(article)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Article().load({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Article().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArticleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ArticleSearchEntity

```python
article_search = client.ArticleSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | No | An object containing the results of the search. |
| `pages` | `dict` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | No | The total number of Articles matching the search query |
| `type` | `str` | No | The type of the object - `list`. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ArticleSearch().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArticleSearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ArticleVersionEntity

```python
article_version = client.ArticleVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `article_id` | `str` | No | The unique identifier of the article this version belongs to. |
| `author_id` | `str` | No | The id of the teammate listed as the article's author at this version. |
| `body` | `str` | No | The HTML body of the article at this version. |
| `body_markdown` | `str` | No | The Markdown body of the article at this version. |
| `created_at` | `int` | No | The time the version was created, as a UTC Unix timestamp. |
| `created_by_id` | `str` | No | The id of the teammate who created this version. |
| `created_via` | `str` | No | How this version was created (for example `web`, `api`). |
| `description` | `str` | No | The description of the article at this version. |
| `from_version_id` | `str` | No | The id of the version this version was created from, or `null` if this is the first version. |
| `id` | `str` | No | The unique identifier for the version. |
| `state` | `str` | No | Whether this version is the currently published version of the article (`published`) or an earlier non-live version (`draft`). |
| `title` | `str` | No | The title of the article at this version. |
| `type` | `str` | No | String representing the object's type. |
| `updated_at` | `int` | No | The time the version was last updated, as a UTC Unix timestamp. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ArticleVersion().load({"id": "article_version_id", "article_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArticleVersionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ArticleVersionListEntity

```python
article_version_list = client.ArticleVersionList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ArticleVersionList().list({"id": 1})
for article_version_list in results:
    print(article_version_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArticleVersionListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AudienceEntity

```python
audience = client.Audience()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The time the audience was created as a Unix timestamp. |
| `id` | `str` | No | The unique identifier representing the audience. |
| `name` | `str` | No | The name of the audience. |
| `predicates` | `list` | No | The predicates that define which contacts belong to the audience. |
| `role_predicates` | `list` | No | Role-based predicates that further filter audience membership by contact role. |
| `type` | `str` | No | The type of object. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Audience().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Audience().list()
for audience in results:
    print(audience)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Audience().load({"id": "audience_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Audience().remove({"id": "audience_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Audience().update({
    "id": "audience_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AudienceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AwayStatusReasonEntity

```python
away_status_reason = client.AwayStatusReason()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The Unix timestamp when the status reason was created |
| `deleted` | `bool` | No | Whether the status reason has been soft deleted |
| `emoji` | `str` | No | The emoji associated with the status reason |
| `id` | `str` | No | The unique identifier for the away status reason |
| `label` | `str` | No | The display text for the away status reason |
| `order` | `int` | No | The display order of the status reason |
| `type` | `str` | No |  |
| `updated_at` | `int` | No | The Unix timestamp when the status reason was last updated |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AwayStatusReason().list()
for away_status_reason in results:
    print(away_status_reason)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AwayStatusReasonEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BannerEntity

```python
banner = client.Banner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `dict` | No | The action a contact can take on the banner, or `null` when the banner has no action. |
| `body` | `str` | No | The banner's body content as HTML. |
| `client_targeting` | `list` | No | Reserved for future use. |
| `created_at` | `int` | No | The time the contact's view of this banner was created. |
| `id` | `str` | No | The id of the banner. |
| `position` | `str` | No | Where the banner is positioned. |
| `show_dismiss_button` | `bool` | No | Whether the banner should display a dismiss control. |
| `style` | `str` | No | How the banner is displayed. |
| `title` | `str` | No | The banner's title. |
| `type` | `str` | No | String representing the object's type. |
| `view_id` | `str` | No | The id of the contact's view of this banner. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Banner().list({"contact_id": "example"})
for banner in results:
    print(banner)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BannerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BannerDismissEntity

```python
banner_dismiss = client.BannerDismiss()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dismissed` | `bool` | No | Whether the banner view is dismissed. |
| `id` | `str` | No |  |
| `type` | `str` | No | String representing the object's type. |
| `view_id` | `str` | No | The id of the dismissed banner view. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BannerDismiss().create({
    "contact_id": "example_contact_id",  # str
    "id": "example_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BannerDismissEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BrandEntity

```python
brand = client.Brand()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | Unix timestamp of brand creation |
| `default_address_settings_id` | `str` | No | Default email settings ID for this brand |
| `help_center_id` | `str` | No | Associated help center identifier |
| `id` | `str` | No | Unique brand identifier. |
| `is_default` | `bool` | No | Whether this is the workspace's default brand |
| `name` | `str` | No | Display name of the brand |
| `type` | `str` | No | The type of object |
| `updated_at` | `int` | No | Unix timestamp of last modification |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Brand().list()
for brand in results:
    print(brand)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Brand().load({"id": "brand_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BrandEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallEntity

```python
call = client.Call()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `str` | No | The id of the admin associated with the call, if any. |
| `answered_at` | `Any` | No |  |
| `call_type` | `str` | No | The type of call. |
| `contact_id` | `str` | No | The id of the contact associated with the call, if any. |
| `conversation_id` | `str` | No | The id of the conversation associated with the call, if any. |
| `created_at` | `Any` | No |  |
| `direction` | `str` | No | The direction of the call. |
| `ended_at` | `Any` | No |  |
| `ended_reason` | `str` | No | The reason for the call end, if applicable. |
| `fin_recording_url` | `str` | No | API URL to the AI Agent (Fin) call recording if available. |
| `fin_transcription_url` | `str` | No | API URL to the AI Agent (Fin) call transcript if available. |
| `id` | `str` | No | The id of the call. |
| `initiated_at` | `Any` | No |  |
| `phone` | `str` | No | The phone number involved in the call, in E.164 format. |
| `recording_url` | `str` | No | API URL to download or redirect to the call recording if available. |
| `state` | `str` | No | The current state of the call. |
| `transcription_url` | `str` | No | API URL to download or redirect to the call transcript if available. |
| `type` | `str` | No | String representing the object's type. |
| `updated_at` | `Any` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Call().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Call().list()
for call in results:
    print(call)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Call().load({"id": "call_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompanyEntity

```python
company = client.Company()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `str` | No | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `str` | No | The company id you have defined for the company. |
| `created_at` | `int` | No | The time the company was added in Intercom. |
| `custom_attributes` | `dict` | No | The custom attributes you have set on the company. |
| `id` | `str` | No | The Intercom defined id representing the company. |
| `industry` | `str` | No | The industry that the company operates in. |
| `last_request_at` | `int` | No | The time the company last recorded making a request. |
| `monthly_spend` | `int` | No | How much revenue the company generates for your business. |
| `name` | `str` | No | The name of the company. |
| `notes` | `dict` | No | The list of notes associated with the company |
| `plan` | `dict` | No | The name of the plan you have associated with the company. |
| `remote_created_at` | `int` | No | The time the company was created by you. |
| `segments` | `dict` | No | The list of segments associated with the company |
| `session_count` | `int` | No | How many sessions the company has recorded. |
| `size` | `int` | No | The number of employees in the company. |
| `tags` | `dict` | No | The list of tags associated with the company |
| `type` | `str` | No | Value is `company` |
| `update_last_request_at` | `bool` | No | Set to true to update the company's last seen time to now. |
| `updated_at` | `int` | No | The last time the company was updated. |
| `user_count` | `int` | No | The number of users in the company. |
| `website` | `str` | No | The URL for the company website. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Company().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Company().list()
for company in results:
    print(company)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Company().load({"id": "company_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Company().remove({"id": "company_id", "contact_id": "contact_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Company().update({
    "id": "company_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompanyAttachedContactEntity

```python
company_attached_contact = client.CompanyAttachedContact()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `android_app_name` | `str` | No | The name of the Android app which the contact is using. |
| `android_app_version` | `str` | No | The version of the Android app which the contact is using. |
| `android_device` | `str` | No | The Android device which the contact is using. |
| `android_last_seen_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `android_os_version` | `str` | No | The version of the Android OS which the contact is using. |
| `android_sdk_version` | `str` | No | The version of the Android SDK which the contact is using. |
| `avatar` | `dict` | No |  |
| `browser` | `str` | No | The name of the browser which the contact is using. |
| `browser_language` | `str` | No | The language set by the browser which the contact is using. |
| `browser_version` | `str` | No | The version of the browser which the contact is using. |
| `companies` | `dict` | No | An object with metadata about companies attached to a contact . |
| `created_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `dict` | No | The custom attributes which are set for the contact. |
| `email` | `str` | No | The contact's email. |
| `email_domain` | `str` | No | The contact's email domain. |
| `external_id` | `str` | No | The unique identifier for the contact which is provided by the Client. |
| `has_hard_bounced` | `bool` | No | Whether the contact has had an email sent to them hard bounce. |
| `id` | `str` | No | The unique identifier for the contact which is given by Intercom. |
| `ios_app_name` | `str` | No | The name of the iOS app which the contact is using. |
| `ios_app_version` | `str` | No | The version of the iOS app which the contact is using. |
| `ios_device` | `str` | No | The iOS device which the contact is using. |
| `ios_last_seen_at` | `int` | No | (Unix timestamp in seconds) The last time the contact used the iOS app. |
| `ios_os_version` | `str` | No | The version of iOS which the contact is using. |
| `ios_sdk_version` | `str` | No | The version of the iOS SDK which the contact is using. |
| `language_override` | `str` | No | A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change. |
| `last_contacted_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last messaged. |
| `last_email_clicked_at` | `int` | No | (Unix timestamp in seconds) The time when the contact last clicked a link in an email. |
| `last_email_opened_at` | `int` | No | (Unix timestamp in seconds) The time when the contact last opened an email. |
| `last_replied_at` | `int` | No | (Unix timestamp in seconds) The time when the contact last messaged in. |
| `last_seen_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually). |
| `location` | `dict` | No | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `bool` | No | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `list` | No | A list of contacts that were merged into this contact. |
| `name` | `str` | No | The contacts name. |
| `notes` | `dict` | No | An object containing notes meta data about the notes that a contact has. |
| `os` | `str` | No | The operating system which the contact is using. |
| `owner_id` | `str` | No | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `str` | No | The contacts phone. |
| `role` | `str` | No | The role of the contact. |
| `signed_up_at` | `int` | No | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `dict` | No | An object containing social profiles that a contact has. |
| `tags` | `dict` | No | An object containing tags meta data about the tags that a contact has. |
| `type` | `str` | No | The type of object. |
| `unsubscribed_from_emails` | `bool` | No | Whether the contact is unsubscribed from emails. |
| `updated_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last updated. |
| `workspace_id` | `str` | No | The id of the workspace which the contact belongs to. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CompanyAttachedContact().list({"id": "example"})
for company_attached_contact in results:
    print(company_attached_contact)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyAttachedContactEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompanyAttachedSegmentEntity

```python
company_attached_segment = client.CompanyAttachedSegment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | No | The number of items in the user segment. |
| `created_at` | `int` | No | The time the segment was created. |
| `id` | `str` | No | The unique identifier representing the segment. |
| `name` | `str` | No | The name of the segment. |
| `person_type` | `str` | No | Type of the contact: contact (lead) or user. |
| `type` | `str` | No | The type of object. |
| `updated_at` | `int` | No | The time the segment was updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CompanyAttachedSegment().list({"id": "example"})
for company_attached_segment in results:
    print(company_attached_segment)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyAttachedSegmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompanyListEntity

```python
company_list = client.CompanyList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No | An array containing Company Objects. |
| `pages` | `dict` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | No | The total number of companies. |
| `type` | `str` | No | The type of object - `list`. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CompanyList().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CompanyScrollEntity

```python
company_scroll = client.CompanyScroll()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `str` | No | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `str` | No | The company id you have defined for the company. |
| `created_at` | `int` | No | The time the company was added in Intercom. |
| `custom_attributes` | `dict` | No | The custom attributes you have set on the company. |
| `id` | `str` | No | The Intercom defined id representing the company. |
| `industry` | `str` | No | The industry that the company operates in. |
| `last_request_at` | `int` | No | The time the company last recorded making a request. |
| `monthly_spend` | `int` | No | How much revenue the company generates for your business. |
| `name` | `str` | No | The name of the company. |
| `notes` | `dict` | No | The list of notes associated with the company |
| `plan` | `dict` | No |  |
| `remote_created_at` | `int` | No | The time the company was created by you. |
| `segments` | `dict` | No | The list of segments associated with the company |
| `session_count` | `int` | No | How many sessions the company has recorded. |
| `size` | `int` | No | The number of employees in the company. |
| `tags` | `dict` | No | The list of tags associated with the company |
| `type` | `str` | No | Value is `company` |
| `updated_at` | `int` | No | The last time the company was updated. |
| `user_count` | `int` | No | The number of users in the company. |
| `website` | `str` | No | The URL for the company website. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CompanyScroll().list()
for company_scroll in results:
    print(company_scroll)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompanyScrollEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContactEntity

```python
contact = client.Contact()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `android_app_name` | `str` | No | The name of the Android app which the contact is using. |
| `android_app_version` | `str` | No | The version of the Android app which the contact is using. |
| `android_device` | `str` | No | The Android device which the contact is using. |
| `android_last_seen_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `android_os_version` | `str` | No | The version of the Android OS which the contact is using. |
| `android_sdk_version` | `str` | No | The version of the Android SDK which the contact is using. |
| `avatar` | `dict` | No |  |
| `browser` | `str` | No | The name of the browser which the contact is using. |
| `browser_language` | `str` | No | The language set by the browser which the contact is using. |
| `browser_version` | `str` | No | The version of the browser which the contact is using. |
| `companies` | `dict` | No | An object with metadata about companies attached to a contact . |
| `created_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `dict` | No | The custom attributes which are set for the contact. |
| `email` | `str` | No | The contact's email. |
| `email_domain` | `str` | No | The contact's email domain. |
| `enabled_push_messaging` | `bool` | No | If the user has enabled push messaging. |
| `external_id` | `str` | No | The unique identifier for the contact which is provided by the Client. |
| `has_hard_bounced` | `bool` | No | Whether the contact has had an email sent to them hard bounce. |
| `id` | `str` | No | The unique identifier for the contact which is given by Intercom. |
| `ios_app_name` | `str` | No | The name of the iOS app which the contact is using. |
| `ios_app_version` | `str` | No | The version of the iOS app which the contact is using. |
| `ios_device` | `str` | No | The iOS device which the contact is using. |
| `ios_last_seen_at` | `int` | No | (Unix timestamp in seconds) The last time the contact used the iOS app. |
| `ios_os_version` | `str` | No | The version of iOS which the contact is using. |
| `ios_sdk_version` | `str` | No | The version of the iOS SDK which the contact is using. |
| `language_override` | `str` | No | A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change. |
| `last_contacted_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last messaged. |
| `last_email_clicked_at` | `int` | No | (Unix timestamp in seconds) The time when the contact last clicked a link in an email. |
| `last_email_opened_at` | `int` | No | (Unix timestamp in seconds) The time when the contact last opened an email. |
| `last_replied_at` | `int` | No | (Unix timestamp in seconds) The time when the contact last messaged in. |
| `last_seen_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually). |
| `location` | `dict` | No | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `bool` | No | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `list` | No | A list of contacts that were merged into this contact. |
| `name` | `str` | No | The contacts name. |
| `notes` | `dict` | No | An object containing notes meta data about the notes that a contact has. |
| `os` | `str` | No | The operating system which the contact is using. |
| `owner_id` | `str` | No | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `str` | No | The contacts phone. |
| `role` | `str` | No | The role of the contact. |
| `signed_up_at` | `int` | No | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `dict` | No | An object containing social profiles that a contact has. |
| `tags` | `dict` | No | An object containing tags meta data about the tags that a contact has. |
| `type` | `str` | No | The type of object. |
| `unsubscribed_from_emails` | `bool` | No | Whether the contact is unsubscribed from emails. |
| `updated_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last updated. |
| `user` | `dict` | Yes | The unique identifiers retained after converting or merging. |
| `visitor` | `dict` | Yes | The unique identifiers to convert a single Visitor. |
| `workspace_id` | `str` | No | The id of the workspace which the contact belongs to. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Contact().create({
    "user": {},  # dict
    "visitor": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Contact().list()
for contact in results:
    print(contact)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Contact().load({"id": "contact_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Contact().remove({"id": "contact_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Contact().update({
    "id": "contact_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContactEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContactAttachedCompanyEntity

```python
contact_attached_company = client.ContactAttachedCompany()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `str` | No | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `str` | No | The company id you have defined for the company. |
| `created_at` | `int` | No | The time the company was added in Intercom. |
| `custom_attributes` | `dict` | No | The custom attributes you have set on the company. |
| `id` | `str` | No | The Intercom defined id representing the company. |
| `industry` | `str` | No | The industry that the company operates in. |
| `last_request_at` | `int` | No | The time the company last recorded making a request. |
| `monthly_spend` | `int` | No | How much revenue the company generates for your business. |
| `name` | `str` | No | The name of the company. |
| `notes` | `dict` | No | The list of notes associated with the company |
| `plan` | `dict` | No |  |
| `remote_created_at` | `int` | No | The time the company was created by you. |
| `segments` | `dict` | No | The list of segments associated with the company |
| `session_count` | `int` | No | How many sessions the company has recorded. |
| `size` | `int` | No | The number of employees in the company. |
| `tags` | `dict` | No | The list of tags associated with the company |
| `type` | `str` | No | Value is `company` |
| `updated_at` | `int` | No | The last time the company was updated. |
| `user_count` | `int` | No | The number of users in the company. |
| `website` | `str` | No | The URL for the company website. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ContactAttachedCompany().list({"id": "example"})
for contact_attached_company in results:
    print(contact_attached_company)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContactAttachedCompanyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContactListEntity

```python
contact_list = client.ContactList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No | The list of contact objects |
| `pages` | `dict` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `dict` | No |  |
| `query` | `Any` | Yes |  |
| `sort` | `dict` | No | An optional object to sort the results by. |
| `total_count` | `int` | No | A count of the total number of objects. |
| `type` | `str` | No | Always list |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ContactList().create({
    "query": "example_query",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContactListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContactSegmentEntity

```python
contact_segment = client.ContactSegment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | No | The number of items in the user segment. |
| `created_at` | `int` | No | The time the segment was created. |
| `id` | `str` | No | The unique identifier representing the segment. |
| `name` | `str` | No | The name of the segment. |
| `person_type` | `str` | No | Type of the contact: contact (lead) or user. |
| `type` | `str` | No | The type of object. |
| `updated_at` | `int` | No | The time the segment was updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ContactSegment().list({"id": "example"})
for contact_segment in results:
    print(contact_segment)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContactSegmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContentEntity

```python
content = client.Content()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Content().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContentImportSourceEntity

```python
content_import_source = client.ContentImportSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apply_audience_to_existing_content` | `bool` | No | When true, the audience will be applied to all existing external pages belonging to this content import source. |
| `audience_ids` | `list` | No | The unique identifiers for the audiences associated with this content import source. |
| `created_at` | `int` | Yes | The time when the content import source was created. |
| `id` | `int` | Yes | The unique identifier for the content import source which is given by Intercom. |
| `last_synced_at` | `int` | Yes | The time when the content import source was last synced. |
| `status` | `str` | Yes | The status of the content import source. |
| `sync_behavior` | `str` | Yes | If you intend to create or update External Pages via the API, this should be set to `api`. |
| `type` | `str` | Yes | Always external_page |
| `updated_at` | `int` | Yes | The time when the content import source was last updated. |
| `url` | `str` | Yes | The URL of the root of the external source. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ContentImportSource().create({
    "created_at": 1,  # int
    "id": 1,  # int
    "last_synced_at": 1,  # int
    "status": "example_status",  # str
    "sync_behavior": "example_sync_behavior",  # str
    "type": "example_type",  # str
    "updated_at": 1,  # int
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ContentImportSource().list()
for content_import_source in results:
    print(content_import_source)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ContentImportSource().load({"id": "content_import_source_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ContentImportSource().update({
    "id": "content_import_source_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentImportSourceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContentSearchEntity

```python
content_search = client.ContentSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No | The list of matched content items. |
| `pages` | `dict` | No | Pagination metadata, including links to neighbouring pages. |
| `total_count` | `int` | No | Total number of results matching the query. |
| `type` | `str` | No | Always `list`. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ContentSearch().list()
for content_search in results:
    print(content_search)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentSearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContentSnippetEntity

```python
content_snippet = client.ContentSnippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `bool` | No | Whether the content snippet is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | No | Whether the content snippet is available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | No | Whether the content snippet is available for AI Sales Agent. |
| `audience_ids` | `list` | No | The list of audience IDs this content snippet is targeted to for Fin AI Agent. |
| `body_markdown` | `str` | No | The body of the content snippet in markdown. |
| `chatbot_availability` | `int` | No | Deprecated. |
| `copilot_availability` | `int` | No | Deprecated. |
| `created_at` | `int` | No | The time the snippet was created as a UNIX timestamp. |
| `id` | `str` | No | The unique identifier for the content snippet. |
| `json_blocks` | `list` | No | The content blocks that make up the body of the snippet. |
| `locale` | `str` | No | The locale of the content snippet. |
| `title` | `str` | No | The title of the content snippet. |
| `type` | `str` | No | String representing the object's type. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ContentSnippet().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ContentSnippet().list()
for content_snippet in results:
    print(content_snippet)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ContentSnippet().load({"id": "content_snippet_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ContentSnippet().remove({"id": "content_snippet_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ContentSnippet().update({
    "id": "content_snippet_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentSnippetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationEntity

```python
conversation = client.Conversation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_assignee_id` | `int` | No | The id of the admin assigned to the conversation. |
| `ai_agent` | `dict` | No | Data related to AI Agent involvement in the conversation. |
| `ai_agent_participated` | `bool` | No | Indicates whether the AI Agent participated in the conversation. |
| `attachment_urls` | `list` | No | A list of image URLs that will be added as attachments. |
| `body` | `str` | Yes | The content of the message. |
| `brand_id` | `str` | No | The unique identifier of the brand to associate with this conversation. |
| `channel` | `dict` | No | The channel through which the conversation was initiated and its current channel. |
| `company` | `dict` | No | The company associated with the conversation. |
| `company_id` | `str` | No | The ID of the company that the conversation is associated with. |
| `contacts` | `dict` | No | The list of contacts (users or leads) involved in this conversation. |
| `conversation_id` | `str` | Yes | The unique identifier (given by Intercom) for the conversation or customer ticket to link to the tracker ticket. |
| `conversation_parts` | `dict` | No | A list of Conversation Part objects for each part message in the conversation. |
| `conversation_rating` | `dict` | No | The Conversation Rating object which contains information on the rating and/or remark added by a Contact and the Admin assigned to the conversation. |
| `created_at` | `int` | No | The time the conversation was created. |
| `custom_attributes` | `dict` | No | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `external_references` | `list` | No | References linking this conversation to records in an external helpdesk or CRM system. |
| `first_contact_reply` | `dict` | No | An object containing information on the first users message. |
| `from` | `dict` | Yes |  |
| `id` | `str` | No | The id representing the conversation. |
| `linked_objects` | `dict` | No | An object containing metadata about linked conversations and linked tickets. |
| `monitor_evaluations` | `list` | No | QA monitor evaluations that flagged this conversation. |
| `open` | `bool` | No | Indicates whether a conversation is open (true) or closed (false). |
| `priority` | `str` | No | The priority level of the conversation. |
| `read` | `bool` | No | Indicates whether a conversation has been read. |
| `sales_agent` | `dict` | No | Data related to Sales Agent involvement in the conversation. |
| `sales_agent_participated` | `bool` | No | Indicates whether the Sales Agent participated in the conversation. |
| `scorecards` | `list` | No | QA scorecard results for this conversation. |
| `sla_applied` | `dict` | No | The SLA Applied object contains the details for which SLA has been applied to this conversation. |
| `snoozed_until` | `int` | No | If set this is the time in the future when this conversation will be marked as open. |
| `source` | `dict` | No | The type of the conversation part that started this conversation. |
| `state` | `str` | No | Can be set to "open", "closed" or "snoozed". |
| `statistics` | `dict` | No | A Statistics object containing all information required for reporting, with timestamps and calculated metrics. |
| `subject` | `str` | No | The title of the email. |
| `tags` | `dict` | No | A list of tags objects associated with a conversation |
| `team_assignee_id` | `int` | No | The id of the team assigned to the conversation. |
| `teammates` | `dict` | No | The list of teammates who participated in the conversation (wrote at least one conversation part). |
| `title` | `str` | No | The title given to the conversation. |
| `type` | `str` | No | Always conversation. |
| `updated_at` | `int` | No | The last time the conversation was updated. |
| `waiting_since` | `int` | No | The last time a Contact responded to an Admin. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Conversation().create({
    "body": "example_body",  # str
    "conversation_id": "example_conversation_id",  # str
    "from": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Conversation().list()
for conversation in results:
    print(conversation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Conversation().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Conversation().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Conversation().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationAttributeEntity

```python
conversation_attribute = client.ConversationAttribute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `str` | No |  |
| `archived` | `bool` | No |  |
| `created_at` | `int` | No |  |
| `data_type` | `str` | No |  |
| `description` | `str` | No | Readable description of the attribute. |
| `id` | `int` | No |  |
| `label` | `str` | Yes | The label for the new option. |
| `multiline` | `bool` | No | (String data type only) Whether this string attribute is multiline. |
| `name` | `str` | No | Name of the attribute. |
| `reference` | `dict` | Yes | (Relationship data type only) Reference configuration for related objects. |
| `required` | `bool` | No | Whether this attribute is required. |
| `type` | `str` | No |  |
| `updated_at` | `int` | No |  |
| `visible_to_team_ids` | `list` | No | Team IDs that can see this attribute. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ConversationAttribute().create({
    "label": "example_label",  # str
    "reference": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConversationAttribute().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ConversationAttribute().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ConversationAttribute().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationAttributeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationAttributeListEntity

```python
conversation_attribute_list = client.ConversationAttributeList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No | A list of conversation attributes. |
| `type` | `str` | No | The type of the object. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ConversationAttributeList().list()
for conversation_attribute_list in results:
    print(conversation_attribute_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationAttributeListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationListEntity

```python
conversation_list = client.ConversationList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversations` | `list` | No | The list of conversation objects |
| `pages` | `dict` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `dict` | No |  |
| `query` | `Any` | Yes |  |
| `total_count` | `int` | No | A count of the total number of objects. |
| `type` | `str` | No | Always conversation.list |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ConversationList().create({
    "query": "example_query",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationParticipantEntity

```python
conversation_participant = client.ConversationParticipant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ConversationParticipant().create({
    "id": "example_id",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ConversationParticipant().remove({"contact_id": "contact_id", "conversation_id": "conversation_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationParticipantEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomObjectInstanceEntity

```python
custom_object_instance = client.CustomObjectInstance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No |  |
| `custom_attributes` | `dict` | No | The custom attributes which are set for the Custom Object instance. |
| `data` | `list` | No | An array of Custom Object Instance objects. |
| `external_created_at` | `str` | No | The time when the Custom Object instance was created in the external system it originated from. |
| `external_id` | `str` | No | A unique identifier for the Custom Object instance in the external system it originated from. |
| `external_updated_at` | `str` | No | The time when the Custom Object instance was last updated in the external system it originated from. |
| `id` | `str` | No |  |
| `pages` | `dict` | No | The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests. |
| `total_count` | `int` | No | A count of the total number of custom object instances. |
| `type` | `str` | No | The type of the object - `list`. |
| `updated_at` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomObjectInstance().create({
    "id": "example_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomObjectInstance().load({"id": "custom_object_instance_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomObjectInstance().remove({"id": "custom_object_instance_id", "external_id": "external_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomObjectInstanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DataEntity

```python
data = client.Data()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at_after` | `int` | Yes | The start date that you request data for. |
| `created_at_before` | `int` | Yes | The end date that you request data for. |
| `download_expires_at` | `str` | No | The time after which you will not be able to access the data. |
| `download_url` | `str` | No | The location where you can download your data. |
| `id` | `str` | No |  |
| `job_identifier` | `str` | No | The identifier for your job. |
| `status` | `str` | No | The current state of your job. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Data().create({
    "created_at_after": 1,  # int
    "created_at_before": 1,  # int
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Data().load({"id": "data_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DataAttributeEntity

```python
data_attribute = client.DataAttribute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `str` | No | Teammate who created the attribute. |
| `api_writable` | `bool` | No | Can this attribute be updated through API |
| `archived` | `bool` | No | Is this attribute archived. |
| `created_at` | `int` | No | The time the attribute was created as a UTC Unix timestamp |
| `custom` | `bool` | No | Set to true if this is a CDA |
| `data_type` | `str` | No | The data type of the attribute. |
| `description` | `str` | No | Readable description of the attribute. |
| `full_name` | `str` | No | Full name of the attribute. |
| `id` | `int` | No | The unique identifier for the data attribute which is given by Intercom. |
| `label` | `str` | No | Readable name of the attribute (i.e. |
| `messenger_writable` | `bool` | No | Can this attribute be updated by the Messenger |
| `model` | `str` | No | Value is `contact` for user/lead attributes and `company` for company attributes. |
| `name` | `str` | No | Name of the attribute. |
| `options` | `list` | No | List of predefined options for attribute value. |
| `type` | `str` | No | Value is `data_attribute`. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DataAttribute().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DataAttribute().list()
for data_attribute in results:
    print(data_attribute)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DataAttribute().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataAttributeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DataConnectorEntity

```python
data_connector = client.DataConnector()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audiences` | `list` | No | The audience types this connector targets. |
| `body` | `str` | No | The request body template. |
| `bypass_authentication` | `bool` | No | Whether authentication is bypassed for this connector. |
| `client_function_name` | `str` | No | The name of the client-side function, if applicable. |
| `client_function_timeout_ms` | `int` | No | Timeout in milliseconds for the client function, if applicable. |
| `configuration_response_type` | `str` | No | The expected response format from the connector. |
| `created_at` | `str` | No | The time the data connector was created. |
| `created_by_admin_id` | `str` | No | The ID of the admin who created this connector. |
| `customer_authentication` | `bool` | No | Whether OTP authentication is enabled for this connector. |
| `data_inputs` | `list` | No | The input parameters accepted by this data connector. |
| `data_transformation_type` | `str` | No | The type of data transformation applied to the response. |
| `description` | `str` | No | A description of what this data connector does. |
| `direct_fin_usage` | `bool` | No | Whether this connector is used directly by Fin. |
| `execution_results_url` | `str` | No | The URL path to fetch execution results for this connector. |
| `execution_type` | `str` | No | How the connector executes. |
| `headers` | `list` | No | HTTP headers for the request. |
| `http_method` | `str` | No | The HTTP method used by the data connector. |
| `id` | `str` | No | The unique identifier for the data connector. |
| `mock_response` | `dict` | No | A sample JSON response from the external API. |
| `name` | `str` | No | The name of the data connector. |
| `object_mappings` | `list` | No | Mappings from connector response objects to Intercom objects. |
| `response_fields` | `list` | No | The fields returned in the connector response. |
| `state` | `str` | No | The current state of the data connector. |
| `token_ids` | `list` | No | IDs of authentication tokens associated with this connector. |
| `type` | `str` | No | The type of object - `data_connector`. |
| `updated_at` | `str` | No | The time the data connector was last updated. |
| `updated_by_admin_id` | `str` | No | The ID of the admin who last updated this connector. |
| `url` | `str` | No | The URL of the external API endpoint. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DataConnector().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DataConnector().list()
for data_connector in results:
    print(data_connector)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DataConnector().load({"id": "data_connector_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DataConnector().update({
    "id": "data_connector_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataConnectorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DataConnectorExecutionResultEntity

```python
data_connector_execution_result = client.DataConnectorExecutionResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversation_id` | `str` | No | The conversation associated with this execution, if any. |
| `created_at` | `str` | No | The time the execution occurred. |
| `data_connector_id` | `str` | No | The unique identifier of the data connector that produced this result. |
| `error_message` | `str` | No | A human-readable error message. |
| `error_type` | `str` | No | The type of error that occurred, if any. |
| `execution_time_ms` | `int` | No | The execution time in milliseconds. |
| `http_method` | `str` | No | The HTTP method used for the request. |
| `http_status` | `int` | No | The HTTP status code returned by the external API. |
| `id` | `str` | No | The unique identifier for the execution result. |
| `raw_response_body` | `str` | No | The raw (unmapped) response body. |
| `request_body` | `str` | No | The request body sent to the external API. |
| `request_url` | `str` | No | The request URL. |
| `response_body` | `str` | No | The response body from the external API. |
| `source_id` | `str` | No | The identifier of the source that triggered this execution. |
| `source_type` | `str` | No | The type of source that triggered this execution. |
| `success` | `bool` | No | Whether the execution was successful. |
| `type` | `str` | No | The type of object - `data_connector.execution`. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DataConnectorExecutionResult().load({"id": "data_connector_execution_result_id", "data_connector_id": "data_connector_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataConnectorExecutionResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DataConnectorExecutionResultListEntity

```python
data_connector_execution_result_list = client.DataConnectorExecutionResultList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DataConnectorExecutionResultList().list({"id": "example"})
for data_connector_execution_result_list in results:
    print(data_connector_execution_result_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataConnectorExecutionResultListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DataEventEntity

```python
data_event = client.DataEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The time the event occurred as a UTC Unix timestamp |
| `email` | `str` | No | An email address for your user. |
| `event_name` | `str` | No | The name of the event that occurred. |
| `event_summaries` | `dict` | No | A list of event summaries for the user. |
| `id` | `str` | No | The unique identifier for the contact (lead or user) which is given by Intercom. |
| `metadata` | `dict` | No | Optional metadata about the event. |
| `user_id` | `str` | No | Your identifier for the user. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DataEvent().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataEventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DataEventSummaryEntity

```python
data_event_summary = client.DataEventSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | No | The number of times the event was sent |
| `description` | `str` | No | The description of the event |
| `first` | `str` | No | The first time the event was sent |
| `last` | `str` | No | The last time the event was sent |
| `name` | `str` | No | The name of the event |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DataEventSummary().list({"filter": {}, "type": "example"})
for data_event_summary in results:
    print(data_event_summary)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataEventSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DataExportEntity

```python
data_export = client.DataExport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `download_expires_at` | `str` | No | The time after which you will not be able to access the data. |
| `download_url` | `str` | No | The location where you can download your data. |
| `job_identifier` | `str` | No | The identifier for your job. |
| `status` | `str` | No | The current state of your job. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DataExport().create({
    "job_identifier": "example_job_identifier",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataExportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedEntity

```python
deleted = client.Deleted()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deleted_at` | `int` | No | The time when the conversation was deleted. |
| `id` | `str` | No | The ID of the deleted conversation. |
| `metrics_retained` | `bool` | No | Whether reporting metrics are retained for this conversation ID |
| `type` | `str` | No | String representing the object's type. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Deleted().list()
for deleted in results:
    print(deleted)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedArticleObjectEntity

```python
deleted_article_object = client.DeletedArticleObject()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeletedArticleObject().remove({"article_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedArticleObjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedCompanyObjectEntity

```python
deleted_company_object = client.DeletedCompanyObject()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeletedCompanyObject().remove({"company_id": "company_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedCompanyObjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedDataConnectorObjectEntity

```python
deleted_data_connector_object = client.DeletedDataConnectorObject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeletedDataConnectorObject().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedDataConnectorObjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedInternalArticleObjectEntity

```python
deleted_internal_article_object = client.DeletedInternalArticleObject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `bool` | No | Whether the internal article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | No | Whether the internal article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | No | Whether the internal article should be available for AI Sales Agent. |
| `audience_ids` | `list` | No | The list of audience IDs to target this internal article to for Fin AI Agent. |
| `author_id` | `int` | Yes | The id of the author of the article. |
| `body` | `str` | No | The content of the article in HTML. |
| `body_markdown` | `str` | No | The content of the article in markdown. |
| `created_at` | `int` | No | The time when the article was created. |
| `id` | `str` | No | The unique identifier for the article which is given by Intercom. |
| `locale` | `str` | No | The default locale of the article. |
| `owner_id` | `int` | Yes | The id of the owner of the article. |
| `title` | `str` | Yes | The title of the article. |
| `type` | `str` | No | The type of object - `internal_article`. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DeletedInternalArticleObject().create({
    "author_id": 1,  # int
    "owner_id": 1,  # int
    "title": "example_title",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DeletedInternalArticleObject().list()
for deleted_internal_article_object in results:
    print(deleted_internal_article_object)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeletedInternalArticleObject().remove({"internal_article_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedInternalArticleObjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeletedObjectEntity

```python
deleted_object = client.DeletedObject()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeletedObject().remove({"news_item_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeletedObjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailEntity

```python
email = client.Email()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brand_id` | `str` | No | Associated brand identifier |
| `created_at` | `int` | No | Unix timestamp of creation |
| `domain` | `str` | No | Domain portion of the email address |
| `email` | `str` | No | Full sender email address |
| `forwarded_email_last_received_at` | `int` | No | Unix timestamp of last forwarded email received (null if never) |
| `forwarding_enabled` | `bool` | No | Whether email forwarding is active |
| `id` | `str` | No | Unique email setting identifier |
| `type` | `str` | No | The type of object |
| `updated_at` | `int` | No | Unix timestamp of last modification |
| `verified` | `bool` | No | Whether the email address has been verified |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Email().list()
for email in results:
    print(email)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Email().load({"id": "email_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ExternalPageEntity

```python
external_page = client.ExternalPage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_agent_availability` | `bool` | Yes | Whether the external page should be used to answer questions by AI Agent. |
| `ai_copilot_availability` | `bool` | Yes | Whether the external page should be used to answer questions by AI Copilot. |
| `ai_sales_agent_availability` | `bool` | No | Whether the external page should be used to answer questions by AI Sales Agent. |
| `created_at` | `int` | Yes | The time when the external page was created. |
| `external_id` | `str` | Yes | The identifier for the external page which was given by the source. |
| `fin_availability` | `bool` | No | Deprecated. |
| `html` | `str` | Yes | The body of the external page in HTML. |
| `id` | `str` | Yes | The unique identifier for the external page which is given by Intercom. |
| `last_ingested_at` | `int` | Yes | The time when the external page was last ingested. |
| `locale` | `str` | Yes | Always en |
| `source_id` | `int` | Yes | The unique identifier for the source of the external page which was given by Intercom. |
| `title` | `str` | Yes | The title of the external page. |
| `type` | `str` | Yes | Always external_page |
| `updated_at` | `int` | Yes | The time when the external page was last updated. |
| `url` | `str` | No | The URL of the external page. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ExternalPage().create({
    "ai_agent_availability": True,  # bool
    "ai_copilot_availability": True,  # bool
    "created_at": 1,  # int
    "external_id": "example_external_id",  # str
    "html": "example_html",  # str
    "id": "example_id",  # str
    "last_ingested_at": 1,  # int
    "locale": "example_locale",  # str
    "source_id": 1,  # int
    "title": "example_title",  # str
    "type": "example_type",  # str
    "updated_at": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ExternalPage().list()
for external_page in results:
    print(external_page)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ExternalPage().load({"id": "external_page_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ExternalPage().remove({"id": "external_page_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ExternalPage().update({
    "id": "external_page_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExternalPageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FinAgentEntity

```python
fin_agent = client.FinAgent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `list` | No | An array of attachments to include with the message. |
| `conversation` | `dict` | No | Conversation-related attribute errors. |
| `conversation_id` | `str` | No | The external ID of the rated conversation. |
| `conversation_metadata` | `dict` | No | Metadata about the conversation, including history and attributes. |
| `message` | `dict` | Yes | A message exchanged within a Fin Agent conversation. |
| `rating` | `str` | No | The rating now recorded on the conversation. |
| `remark` | `str` | No | Optional free-text comment the user left alongside the rating. |
| `status` | `str` | No | The result of the submission. |
| `user` | `dict` | No | User-related attribute errors. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FinAgent().create({
    "message": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FinAgentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HandlingEventEntity

```python
handling_event = client.HandlingEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `str` | No | Optional reason for the event (e.g., "Paused", "Away") |
| `teammate` | `dict` | Yes | A reference to a teammate |
| `timestamp` | `str` | Yes | ISO8601 timestamp when the event occurred |
| `type` | `str` | Yes | The type of handling event |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.HandlingEvent().list({"conversation_id": "example"})
for handling_event in results:
    print(handling_event)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HandlingEventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HelpCenterEntity

```python
help_center = client.HelpCenter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ar` | `dict` | No | The content of the group in Arabic |
| `bg` | `dict` | No | The content of the group in Bulgarian |
| `bs` | `dict` | No | The content of the group in Bosnian |
| `ca` | `dict` | No | The content of the group in Catalan |
| `created_at` | `int` | No | The time when the Help Center was created. |
| `cs` | `dict` | No | The content of the group in Czech |
| `custom_domain` | `str` | No | Custom domain configured for the help center |
| `da` | `dict` | No | The content of the group in Danish |
| `de` | `dict` | No | The content of the group in German |
| `default` | `bool` | No | Whether this help center is the default for the workspace. |
| `description` | `str` | No | The description of the collection. |
| `display_name` | `str` | No | The display name of the Help Center only seen by teammates. |
| `el` | `dict` | No | The content of the group in Greek |
| `en` | `dict` | No | The content of the group in English |
| `es` | `dict` | No | The content of the group in Spanish |
| `et` | `dict` | No | The content of the group in Estonian |
| `fi` | `dict` | No | The content of the group in Finnish |
| `fr` | `dict` | No | The content of the group in French |
| `from_url` | `str` | No | The source URL that is redirected. |
| `he` | `dict` | No | The content of the group in Hebrew |
| `help_center_id` | `str` | No | The unique identifier for the help center the redirect belongs to. |
| `hr` | `dict` | No | The content of the group in Croatian |
| `hu` | `dict` | No | The content of the group in Hungarian |
| `id` | `dict` | No | The content of the group in Indonesian |
| `identifier` | `str` | No | The identifier of the Help Center. |
| `it` | `dict` | No | The content of the group in Italian |
| `ja` | `dict` | No | The content of the group in Japanese |
| `ko` | `dict` | No | The content of the group in Korean |
| `locale` | `str` | No | The locale of the redirect's target. |
| `locales` | `list` | No | The locales in which the help center is available. |
| `lt` | `dict` | No | The content of the group in Lithuanian |
| `lv` | `dict` | No | The content of the group in Latvian |
| `mn` | `dict` | No | The content of the group in Mongolian |
| `name` | `str` | No | The name of the collection. |
| `nb` | `dict` | No | The content of the group in Norwegian |
| `nl` | `dict` | No | The content of the group in Dutch |
| `parent_id` | `str` | No | The id of the parent collection. |
| `pl` | `dict` | No | The content of the group in Polish |
| `pt` | `dict` | No | The content of the group in Portuguese (Portugal) |
| `ptBR` | `dict` | No | The content of the group in Portuguese (Brazil) |
| `ro` | `dict` | No | The content of the group in Romanian |
| `ru` | `dict` | No | The content of the group in Russian |
| `sl` | `dict` | No | The content of the group in Slovenian |
| `sr` | `dict` | No | The content of the group in Serbian |
| `sv` | `dict` | No | The content of the group in Swedish |
| `target_id` | `str` | No | The unique identifier of the target article or collection. |
| `target_type` | `str` | No | The type of the redirect target. |
| `tr` | `dict` | No | The content of the group in Turkish |
| `translated_content` | `dict` | No | The Translated Content of an Group. |
| `type` | `str` | No | The type of object - group_translated_content. |
| `updated_at` | `int` | No | The time when the Help Center was last updated. |
| `url` | `str` | No | The URL for the help center, if you have a custom domain then this will show the URL using the custom domain. |
| `vi` | `dict` | No | The content of the group in Vietnamese |
| `website_turned_on` | `bool` | No | Whether the Help Center is turned on or not. |
| `workspace_id` | `str` | No | The id of the workspace which the Help Center belongs to. |
| `zhCN` | `dict` | No | The content of the group in Chinese (China) |
| `zhTW` | `dict` | No | The content of the group in Chinese (Taiwan) |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.HelpCenter().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.HelpCenter().list()
for help_center in results:
    print(help_center)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.HelpCenter().load({"collection_id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.HelpCenter().remove({"collection_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.HelpCenter().update({
    "collection_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HelpCenterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InternalArticleEntity

```python
internal_article = client.InternalArticle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `bool` | No | Whether the internal article is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | No | Whether the internal article is available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | No | Whether the internal article is available for AI Sales Agent. |
| `audience_ids` | `list` | No | The list of audience IDs this internal article is targeted to for Fin AI Agent. |
| `author_id` | `int` | No | The id of the author of the article. |
| `body` | `str` | No | The body of the article in HTML. |
| `body_markdown` | `str` | No | The body of the article in markdown. |
| `created_at` | `int` | No | The time when the article was created. |
| `id` | `str` | No | The unique identifier for the article which is given by Intercom. |
| `locale` | `str` | No | The default locale of the article. |
| `owner_id` | `int` | No | The id of the owner of the article. |
| `title` | `str` | No | The title of the article. |
| `type` | `str` | No | The type of object - `internal_article`. |
| `updated_at` | `int` | No | The time when the article was last updated. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.InternalArticle().load({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.InternalArticle().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InternalArticleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InternalArticleSearchEntity

```python
internal_article_search = client.InternalArticleSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | No | An object containing the results of the search. |
| `pages` | `dict` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | No | The total number of Internal Articles matching the search query |
| `type` | `str` | No | The type of the object - `list`. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.InternalArticleSearch().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InternalArticleSearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IpAllowlistEntity

```python
ip_allowlist = client.IpAllowlist()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | No | Whether the IP allowlist is enabled for the workspace. |
| `ip_allowlist` | `list` | No | List of allowed IP addresses and/or IP ranges in CIDR notation. |
| `type` | `str` | No | String representing the object's type. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IpAllowlist().list()
for ip_allowlist in results:
    print(ip_allowlist)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.IpAllowlist().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IpAllowlistEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## JobEntity

```python
job = client.Job()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | The id of the job that's currently being processed or has completed. |
| `resource_id` | `str` | No | The id of the resource created during job execution (e.g. |
| `resource_type` | `str` | No | The type of resource created during job execution. |
| `resource_url` | `str` | No | The url of the resource created during job exeuction. |
| `skip_notifications` | `bool` | No | Option to disable notifications when a Ticket is created. |
| `status` | `str` | No | The status of the job execution. |
| `type` | `str` | No | The type of the object |
| `url` | `str` | No | API endpoint URL to check the job status. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Job().create({
    "id": "example_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Job().load({"job_id": "job_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JobEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MacroEntity

```python
macro = client.Macro()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_on` | `list` | No | Where the macro is available for use. |
| `body` | `str` | No | The body of the macro in HTML format with placeholders transformed to XML-like format. |
| `body_text` | `str` | No | The plain text version of the macro body with original Intercom placeholder format. |
| `created_at` | `str` | No | The time the macro was created in ISO 8601 format. |
| `id` | `str` | No | The unique identifier for the macro. |
| `name` | `str` | No | The name of the macro. |
| `type` | `str` | No | String representing the object's type. |
| `updated_at` | `str` | No | The time the macro was last updated in ISO 8601 format. |
| `visible_to` | `str` | No | Who can view this macro. |
| `visible_to_team_ids` | `list` | No | The team IDs that can view this macro when visible_to is set to specific_teams. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Macro().list()
for macro in results:
    print(macro)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Macro().load({"id": "macro_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MacroEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MergeHistoryEntity

```python
merge_history = client.MergeHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `merged_at` | `int` | No | (Unix timestamp in seconds) The time when the merge occurred. |
| `source_contact_id` | `str` | No | The Intercom ID of the contact that was merged into this contact. |
| `source_contact_role` | `str` | No | The role of the contact that was merged in. |
| `type` | `str` | No | The type of object. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MergeHistory().list({"contact_id": "example"})
for merge_history in results:
    print(merge_history)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MergeHistoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MessageEntity

```python
message = client.Message()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bcc` | `Any` | No |  |
| `body` | `str` | Yes | The message body, which may contain HTML. |
| `cc` | `Any` | No |  |
| `conversation_id` | `str` | No | The associated conversation_id |
| `create_conversation_without_contact_reply` | `bool` | No | Whether a conversation should be opened in the inbox for the message without the contact replying. |
| `created_at` | `int` | Yes | The time the conversation was created. |
| `from` | `dict` | Yes | The sender of the message. |
| `id` | `str` | Yes | The id representing the message. |
| `message_type` | `str` | Yes | The type of message that was sent. |
| `subject` | `str` | No | The subject of the message. |
| `template` | `str` | No | The style of the outgoing message. |
| `to` | `Any` | No |  |
| `type` | `str` | Yes | The type of the message |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Message().create({
    "body": "example_body",  # str
    "created_at": 1,  # int
    "from": {},  # dict
    "id": "example_id",  # str
    "message_type": "example_message_type",  # str
    "type": "example_type",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NewsItemEntity

```python
news_item = client.NewsItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `str` | No | The news item body, which may contain HTML. |
| `cover_image_url` | `str` | No | URL of the image used as cover. |
| `created_at` | `int` | No | Timestamp for when the news item was created. |
| `deliver_silently` | `bool` | No | When set to true, the news item will appear in the messenger newsfeed without showing a notification badge. |
| `id` | `str` | No | The unique identifier for the news item which is given by Intercom. |
| `labels` | `list` | No | Label names displayed to users to categorize the news item. |
| `newsfeed_assignments` | `list` | No | A list of newsfeed_assignments to assign to the specified newsfeed. |
| `reactions` | `list` | No | Ordered list of emoji reactions to the news item. |
| `sender_id` | `int` | No | The id of the sender of the news item. |
| `state` | `str` | No | News items will not be visible to your users in the assigned newsfeeds until they are set live. |
| `title` | `str` | No | The title of the news item. |
| `type` | `str` | No | The type of object. |
| `updated_at` | `int` | No | Timestamp for when the news item was last updated. |
| `workspace_id` | `str` | No | The id of the workspace which the news item belongs to. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.NewsItem().create({
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NewsItem().load({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NewsItem().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NewsItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NewsfeedEntity

```python
newsfeed = client.Newsfeed()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | Timestamp for when the newsfeed was created. |
| `id` | `str` | No | The unique identifier for the newsfeed which is given by Intercom. |
| `name` | `str` | No | The name of the newsfeed. |
| `type` | `str` | No | The type of object. |
| `updated_at` | `int` | No | Timestamp for when the newsfeed was last updated. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Newsfeed().load({"id": "newsfeed_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NewsfeedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NoteEntity

```python
note = client.Note()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `str` | No | The unique identifier of the admin creating the note. |
| `author` | `dict` | No | Optional. |
| `body` | `str` | No | The body text of the note. |
| `company` | `dict` | No | Represents the company that the note was created about. |
| `contact` | `dict` | No | Represents the contact that the note was created about. |
| `created_at` | `int` | No | The time the note was created. |
| `id` | `str` | No | The id of the note. |
| `type` | `str` | No | String representing the object's type. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Note().create({
    "company_id": "example_company_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Note().list({"company_id": "example"})
for note in results:
    print(note)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Note().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NoteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OfficeHourEntity

```python
office_hour = client.OfficeHour()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The time the schedule was created as a Unix timestamp. |
| `id` | `str` | No | The unique identifier for the office hours schedule. |
| `name` | `str` | Yes | The name of the office hours schedule. |
| `time_intervals` | `list` | Yes | The open intervals for the schedule. |
| `time_zone_name` | `str` | Yes | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | `bool` | No | Whether the schedule is open 24/7. |
| `type` | `str` | No | The type of the object - always `office_hours_schedule`. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OfficeHour().create({
    "name": "example_name",  # str
    "time_intervals": [],  # list
    "time_zone_name": "example_time_zone_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OfficeHour().list()
for office_hour in results:
    print(office_hour)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.OfficeHour().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OfficeHourEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OfficeHoursExceptionEntity

```python
office_hours_exception = client.OfficeHoursException()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The time the exception was created as a Unix timestamp. |
| `exception_date` | `str` | No | The date the exception applies to, in `YYYY-MM-DD` format. |
| `exception_type` | `str` | No | `closed` means the workspace is closed all day; `custom_hours` replaces the regular hours with `time_intervals`. |
| `id` | `str` | No | The unique identifier for the office hours exception. |
| `name` | `str` | No | An optional name for the exception. |
| `office_hours_schedule_id` | `str` | No | The unique identifier for the schedule this exception belongs to. |
| `recurring_annually` | `bool` | No | Whether the exception repeats every year on the same date. |
| `time_intervals` | `list` | No | The open intervals for the exception date. |
| `type` | `str` | No | The type of the object - always `office_hours_exception`. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OfficeHoursException().create({
    "office_hours_schedule_id": "example_office_hours_schedule_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OfficeHoursException().list({"office_hours_schedule_id": "example"})
for office_hours_exception in results:
    print(office_hours_exception)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OfficeHoursException().load({"id": "office_hours_exception_id", "office_hours_schedule_id": "office_hours_schedule_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OfficeHoursException().update({
    "id": "office_hours_exception_id",
    "office_hours_schedule_id": "office_hours_schedule_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OfficeHoursExceptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OfficeHoursScheduleEntity

```python
office_hours_schedule = client.OfficeHoursSchedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The time the schedule was created as a Unix timestamp. |
| `id` | `str` | No | The unique identifier for the office hours schedule. |
| `name` | `str` | No | The name of the office hours schedule. |
| `time_intervals` | `list` | No | The open intervals that make up the weekly schedule. |
| `time_zone_name` | `str` | No | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | `bool` | No | Whether the schedule is open 24/7. |
| `type` | `str` | No | The type of the object - always `office_hours_schedule`. |
| `updated_at` | `int` | No | The time the schedule was last updated as a Unix timestamp. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OfficeHoursSchedule().load({"id": "office_hours_schedule_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OfficeHoursSchedule().update({
    "id": "office_hours_schedule_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OfficeHoursScheduleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaginatedEntity

```python
paginated = client.Paginated()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No | An array of Objects |
| `pages` | `dict` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | No | A count of the total number of objects. |
| `type` | `str` | No | The type of object |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Paginated().list()
for paginated in results:
    print(paginated)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaginatedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PhoneSwitchEntity

```python
phone_switch = client.PhoneSwitch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_attributes` | `dict` | No | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `phone` | `str` | No | Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger. |
| `type` | `str` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `custom_attributes` | - |
| `phone` | Yes |
| `type` | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PhoneSwitch().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PhoneSwitchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReportingDataEntity

```python
reporting_data = client.ReportingData()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `download_expires_at` | `str` | No |  |
| `download_url` | `str` | No |  |
| `job_identifier` | `str` | No |  |
| `status` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ReportingData().load({"app_id": "app_id", "job_identifier": "job_identifier"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportingDataEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReportingDataExportEntity

```python
reporting_data_export = client.ReportingDataExport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute_ids` | `list` | Yes |  |
| `attributes` | `list` | No |  |
| `dataset_id` | `str` | Yes |  |
| `default_time_attribute_id` | `str` | No |  |
| `description` | `str` | No |  |
| `download_expires_at` | `str` | No |  |
| `download_url` | `str` | No |  |
| `end_time` | `int` | Yes |  |
| `id` | `str` | No |  |
| `job_identifier` | `str` | No |  |
| `name` | `str` | No |  |
| `start_time` | `int` | Yes |  |
| `status` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ReportingDataExport().create({
    "attribute_ids": [],  # list
    "dataset_id": "example_dataset_id",  # str
    "end_time": 1,  # int
    "start_time": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ReportingDataExport().list()
for reporting_data_export in results:
    print(reporting_data_export)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportingDataExportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SegmentEntity

```python
segment = client.Segment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | No | The number of items in the user segment. |
| `created_at` | `int` | No | The time the segment was created. |
| `id` | `str` | No | The unique identifier representing the segment. |
| `name` | `str` | No | The name of the segment. |
| `person_type` | `str` | No | Type of the contact: contact (lead) or user. |
| `type` | `str` | No | The type of object. |
| `updated_at` | `int` | No | The time the segment was updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Segment().list()
for segment in results:
    print(segment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Segment().load({"id": "segment_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SegmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SideConversationEntity

```python
side_conversation = client.SideConversation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversation_parts` | `list` | No | The conversation parts (messages) in this side conversation. |
| `side_conversation_id` | `str` | No | The unique identifier for the side conversation. |
| `total_count` | `int` | No | The total number of conversation parts in this side conversation. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SideConversation().list({"conversation_id": "example"})
for side_conversation in results:
    print(side_conversation)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SideConversationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionEntity

```python
subscription = client.Subscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent_type` | `str` | No | Describes the type of consent. |
| `content_types` | `list` | No | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `dict` | No | A translation object contains the localised details of a subscription type. |
| `id` | `str` | No | The unique identifier representing the subscription type. |
| `state` | `str` | No | The state of the subscription type. |
| `translations` | `list` | No | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `type` | `str` | No | The type of the object - subscription |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Subscription().create({
    "contact_id": "example_contact_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Subscription().list({"contact_id": "example"})
for subscription in results:
    print(subscription)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Subscription().remove({"contact_id": "contact_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionTypeEntity

```python
subscription_type = client.SubscriptionType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent_type` | `str` | No | Describes the type of consent. |
| `content_types` | `list` | No | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `dict` | No | A translation object contains the localised details of a subscription type. |
| `id` | `str` | No | The unique identifier representing the subscription type. |
| `state` | `str` | No | The state of the subscription type. |
| `translations` | `list` | No | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `type` | `str` | No | The type of the object - subscription |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubscriptionType().list()
for subscription_type in results:
    print(subscription_type)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TagEntity

```python
tag = client.Tag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `str` | No | Optional id of the teammate to attribute the tagging to. |
| `applied_at` | `int` | No | The time when the tag was applied to the object. |
| `applied_by` | `dict` | No | The admin who applied the tag. |
| `companies` | `list` | No |  |
| `id` | `str` | No | The id of the tag |
| `name` | `str` | No | The name of the tag |
| `type` | `str` | No | value is "tag" |
| `users` | `list` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Tag().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Tag().list()
for tag in results:
    print(tag)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Tag().load({"id": "tag_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Tag().remove({"id": "tag_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamEntity

```python
team = client.Team()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_ids` | `list` | No | The list of admin IDs that are a part of the team. |
| `admin_priority_level` | `dict` | No | Admin priority levels for the team |
| `assignment_limit` | `int` | No | The assignment limit for the team. |
| `distribution_method` | `str` | No | Describes how assignments are distributed among the team members |
| `id` | `str` | No | The id of the team |
| `name` | `str` | No | The name of the team |
| `type` | `str` | No | Value is always "team" |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Team().list()
for team in results:
    print(team)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Team().load({"id": "team_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamMetricListEntity

```python
team_metric_list = client.TeamMetricList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TeamMetricList().list({"id": "example"})
for team_metric_list in results:
    print(team_metric_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamMetricListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TicketEntity

```python
ticket = client.Ticket()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_assignee_id` | `int` | No | The id representing the admin assigned to the ticket. |
| `attributes` | `dict` | No | The attributes set on the ticket. |
| `category` | `str` | No | Category of the Ticket. |
| `contacts` | `dict` | No | The list of contacts affected by a ticket. |
| `created_at` | `int` | No | The time the ticket was created as a UTC Unix timestamp. |
| `id` | `str` | No | The unique identifier for the ticket which is given by Intercom. |
| `is_shared` | `bool` | No | Whether or not the ticket is shared with the customer. |
| `linked_objects` | `dict` | No | An object containing metadata about linked conversations and linked tickets. |
| `open` | `bool` | No | Whether or not the ticket is open. |
| `previous_ticket_state_id` | `str` | No | The ID of the previous ticket state from the most recent state change. |
| `skip_notifications` | `bool` | No | Option to disable notifications when a Ticket is created. |
| `snoozed_until` | `int` | No | The time the ticket will be snoozed until as a UTC Unix timestamp. |
| `team_assignee_id` | `int` | No | The id representing the team assigned to the ticket. |
| `ticket_attributes` | `dict` | No | An object containing the different attributes associated to the ticket as key-value pairs. |
| `ticket_id` | `str` | No | The ID of the Ticket used in the Intercom Inbox and Messenger. |
| `ticket_parts` | `dict` | No | A list of Ticket Part objects for each note and event in the ticket. |
| `ticket_state` | `dict` | No | A ticket state, used to define the state of a ticket. |
| `ticket_state_id` | `str` | No | The ID of the ticket state associated with the ticket type. |
| `ticket_type` | `dict` | No | A ticket type, used to define the data fields to be captured in a ticket. |
| `ticket_type_id` | `str` | Yes | The ID of the type of ticket you want to convert the conversation to |
| `type` | `str` | No | Always ticket |
| `updated_at` | `int` | No | The last time the ticket was updated as a UTC Unix timestamp. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Ticket().create({
    "ticket_type_id": "example_ticket_type_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Ticket().load({"id": "ticket_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Ticket().remove({"id": "ticket_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Ticket().update({
    "id": "ticket_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TicketEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TicketListEntity

```python
ticket_list = client.TicketList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pages` | `dict` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `dict` | No |  |
| `query` | `Any` | Yes |  |
| `tickets` | `list` | No | The list of ticket objects |
| `total_count` | `int` | No | A count of the total number of objects. |
| `type` | `str` | No | Always ticket.list |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TicketList().create({
    "query": "example_query",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TicketListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TicketReplyEntity

```python
ticket_reply = client.TicketReply()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `list` | No | A list of attachments for the part. |
| `author` | `dict` | No | The author that wrote or triggered the part. |
| `body` | `str` | No | The message body, which may contain HTML. |
| `created_at` | `int` | No | The time the note was created. |
| `id` | `str` | No | The id representing the part. |
| `part_type` | `str` | No | Type of the part |
| `redacted` | `bool` | No | Whether or not the ticket part has been redacted. |
| `skip_notifications` | `bool` | No | Option to disable notifications when replying to a Ticket. |
| `type` | `str` | No | Always ticket_part |
| `updated_at` | `int` | No | The last time the note was updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TicketReply().create({
    "id": "example_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TicketReplyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TicketStateEntity

```python
ticket_state = client.TicketState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | Whether the ticket state is archived |
| `category` | `str` | No | The category of the ticket state |
| `external_label` | `str` | No | The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal. |
| `id` | `str` | No | The id of the ticket state |
| `internal_label` | `str` | No | The state the ticket is currently in, in a human readable form - visible in Intercom |
| `ticket_types` | `dict` | No | A list of ticket types associated with a given ticket state. |
| `type` | `str` | No | String representing the object's type. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TicketState().list()
for ticket_state in results:
    print(ticket_state)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TicketStateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TicketTypeEntity

```python
ticket_type = client.TicketType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | Whether the ticket type is archived or not. |
| `category` | `str` | No | Category of the Ticket Type. |
| `created_at` | `int` | No | The date and time the ticket type was created. |
| `description` | `str` | No | The description of the ticket type |
| `icon` | `str` | No | The icon of the ticket type |
| `id` | `str` | No | The id representing the ticket type. |
| `is_internal` | `bool` | No | Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers. |
| `name` | `str` | No | The name of the ticket type |
| `ticket_states` | `dict` | No | A list of ticket states associated with a given ticket type. |
| `ticket_type_attributes` | `dict` | No | A list of attributes associated with a given ticket type. |
| `type` | `str` | No | String representing the object's type. |
| `updated_at` | `int` | No | The date and time the ticket type was last updated. |
| `workspace_id` | `str` | No | The id of the workspace that the ticket type belongs to. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TicketType().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TicketType().list()
for ticket_type in results:
    print(ticket_type)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TicketType().load({"id": "ticket_type_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TicketType().update({
    "id": "ticket_type_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TicketTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TicketTypeAttributeEntity

```python
ticket_type_attribute = client.TicketTypeAttribute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_multiple_values` | `bool` | No | Whether the attribute allows multiple files to be attached to it (only applicable to file attributes) |
| `archived` | `bool` | No | Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets) |
| `data_type` | `str` | Yes | The data type of the attribute |
| `description` | `str` | Yes | The description of the attribute presented to the teammate or contact |
| `id` | `str` | No |  |
| `list_items` | `str` | No | A comma delimited list of items for the attribute value (only applicable to list attributes) |
| `multiline` | `bool` | No | Whether the attribute allows multiple lines of text (only applicable to string attributes) |
| `name` | `str` | Yes | The name of the ticket type attribute |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TicketTypeAttribute().create({
    "id": "example_id",  # str
    "data_type": "example_data_type",  # str
    "description": "example_description",  # str
    "name": "example_name",  # str
})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TicketTypeAttribute().update({
    "id": "id",
    "ticket_type_id": "ticket_type_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TicketTypeAttributeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VisitorEntity

```python
visitor = client.Visitor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anonymous` | `bool` | No | Identifies if this visitor is anonymous. |
| `app_id` | `str` | No | The id of the app the visitor is associated with. |
| `avatar` | `dict` | No |  |
| `companies` | `dict` | No |  |
| `created_at` | `int` | No | The time the Visitor was added to Intercom. |
| `custom_attributes` | `dict` | No | The custom attributes you have set on the Visitor. |
| `do_not_track` | `bool` | No | Identifies if this visitor has do not track enabled. |
| `email` | `str` | No | The email of the visitor. |
| `has_hard_bounced` | `bool` | No | Identifies if this visitor has had a hard bounce. |
| `id` | `str` | No | The Intercom defined id representing the Visitor. |
| `las_request_at` | `int` | No | The time the Lead last recorded making a request. |
| `location_data` | `dict` | No |  |
| `marked_email_as_spam` | `bool` | No | Identifies if this visitor has marked an email as spam. |
| `name` | `str` | No | The name of the visitor. |
| `owner_id` | `str` | No | The id of the admin that owns the Visitor. |
| `phone` | `str` | No | The phone number of the visitor. |
| `pseudonym` | `str` | No | The pseudonym of the visitor. |
| `referrer` | `str` | No | The referer of the visitor. |
| `remote_created_at` | `int` | No | The time the Visitor was added to Intercom. |
| `segments` | `dict` | No |  |
| `session_count` | `int` | No | The number of sessions the Visitor has had. |
| `signed_up_at` | `int` | No | The time the Visitor signed up for your product. |
| `social_profiles` | `dict` | No |  |
| `tags` | `dict` | No |  |
| `type` | `str` | No | Value is 'visitor' |
| `unsubscribed_from_emails` | `bool` | No | Whether the Visitor is unsubscribed from emails. |
| `updated_at` | `int` | No | The last time the Visitor was updated. |
| `user_id` | `str` | No | Automatically generated identifier for the Visitor. |
| `utm_campaign` | `str` | No | The utm_campaign of the visitor. |
| `utm_content` | `str` | No | The utm_content of the visitor. |
| `utm_medium` | `str` | No | The utm_medium of the visitor. |
| `utm_source` | `str` | No | The utm_source of the visitor. |
| `utm_term` | `str` | No | The utm_term of the visitor. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Visitor().load({"user_id": "user_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Visitor().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VisitorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WhatsappMessageStatusEntity

```python
whatsapp_message_status = client.WhatsappMessageStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `details` | `str` | No | Detailed error information |
| `message` | `str` | No | Error message |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WhatsappMessageStatus().load({"message_id": "message_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WhatsappMessageStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WhatsappMessageStatusListEntity

```python
whatsapp_message_status_list = client.WhatsappMessageStatusList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversation_id` | `str` | Yes | ID of the conversation |
| `created_at` | `int` | Yes | Creation timestamp |
| `id` | `str` | Yes | Event ID |
| `status` | `str` | Yes | Current status of the message |
| `template_name` | `str` | No | Name of the WhatsApp template used |
| `type` | `str` | Yes | Event type |
| `updated_at` | `int` | Yes | Last update timestamp |
| `whatsapp_message_id` | `str` | Yes | WhatsApp's message identifier |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WhatsappMessageStatusList().list({"ruleset_id": "example"})
for whatsapp_message_status_list in results:
    print(whatsapp_message_status_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WhatsappMessageStatusListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkflowEntity

```python
workflow = client.Workflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attributes` | `list` | No | Custom attributes defined for this workflow. |
| `created_at` | `str` | No | When the workflow was created. |
| `description` | `str` | No | The description of the workflow. |
| `embedded_rules` | `list` | No | Rules embedded within the workflow steps. |
| `id` | `str` | No | The unique identifier for the workflow. |
| `preferred_devices` | `list` | No | The preferred devices for this workflow. |
| `snapshot` | `dict` | No | The current snapshot of workflow steps and configuration. |
| `state` | `str` | No | The current state of the workflow. |
| `target_channels` | `list` | No | The channels this workflow targets. |
| `targeting` | `dict` | No | The targeting rules for this workflow. |
| `title` | `str` | No | The title of the workflow. |
| `trigger_type` | `str` | No | The type of trigger that starts this workflow. |
| `updated_at` | `str` | No | When the workflow was last updated. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Workflow().load({"id": "workflow_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = IntercomSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

