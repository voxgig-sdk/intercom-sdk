# Intercom Golang SDK Reference

Complete API reference for the Intercom Golang SDK.


## IntercomSDK

### Constructor

```go
func NewIntercomSDK(options map[string]any) *IntercomSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *IntercomSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *IntercomSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `ActivityLog(data map[string]any) IntercomEntity`

Create a new `ActivityLog` entity instance. Pass `nil` for no initial data.

#### `ActivityLogEventType(data map[string]any) IntercomEntity`

Create a new `ActivityLogEventType` entity instance. Pass `nil` for no initial data.

#### `ActivityLogList(data map[string]any) IntercomEntity`

Create a new `ActivityLogList` entity instance. Pass `nil` for no initial data.

#### `Admin(data map[string]any) IntercomEntity`

Create a new `Admin` entity instance. Pass `nil` for no initial data.

#### `AdminWithApp(data map[string]any) IntercomEntity`

Create a new `AdminWithApp` entity instance. Pass `nil` for no initial data.

#### `AiCall(data map[string]any) IntercomEntity`

Create a new `AiCall` entity instance. Pass `nil` for no initial data.

#### `AiContent(data map[string]any) IntercomEntity`

Create a new `AiContent` entity instance. Pass `nil` for no initial data.

#### `Article(data map[string]any) IntercomEntity`

Create a new `Article` entity instance. Pass `nil` for no initial data.

#### `ArticleSearch(data map[string]any) IntercomEntity`

Create a new `ArticleSearch` entity instance. Pass `nil` for no initial data.

#### `ArticleVersion(data map[string]any) IntercomEntity`

Create a new `ArticleVersion` entity instance. Pass `nil` for no initial data.

#### `ArticleVersionList(data map[string]any) IntercomEntity`

Create a new `ArticleVersionList` entity instance. Pass `nil` for no initial data.

#### `Audience(data map[string]any) IntercomEntity`

Create a new `Audience` entity instance. Pass `nil` for no initial data.

#### `AwayStatusReason(data map[string]any) IntercomEntity`

Create a new `AwayStatusReason` entity instance. Pass `nil` for no initial data.

#### `Banner(data map[string]any) IntercomEntity`

Create a new `Banner` entity instance. Pass `nil` for no initial data.

#### `BannerDismiss(data map[string]any) IntercomEntity`

Create a new `BannerDismiss` entity instance. Pass `nil` for no initial data.

#### `Brand(data map[string]any) IntercomEntity`

Create a new `Brand` entity instance. Pass `nil` for no initial data.

#### `Call(data map[string]any) IntercomEntity`

Create a new `Call` entity instance. Pass `nil` for no initial data.

#### `Company(data map[string]any) IntercomEntity`

Create a new `Company` entity instance. Pass `nil` for no initial data.

#### `CompanyAttachedContact(data map[string]any) IntercomEntity`

Create a new `CompanyAttachedContact` entity instance. Pass `nil` for no initial data.

#### `CompanyAttachedSegment(data map[string]any) IntercomEntity`

Create a new `CompanyAttachedSegment` entity instance. Pass `nil` for no initial data.

#### `CompanyList(data map[string]any) IntercomEntity`

Create a new `CompanyList` entity instance. Pass `nil` for no initial data.

#### `CompanyScroll(data map[string]any) IntercomEntity`

Create a new `CompanyScroll` entity instance. Pass `nil` for no initial data.

#### `Contact(data map[string]any) IntercomEntity`

Create a new `Contact` entity instance. Pass `nil` for no initial data.

#### `ContactAttachedCompany(data map[string]any) IntercomEntity`

Create a new `ContactAttachedCompany` entity instance. Pass `nil` for no initial data.

#### `ContactList(data map[string]any) IntercomEntity`

Create a new `ContactList` entity instance. Pass `nil` for no initial data.

#### `ContactSegment(data map[string]any) IntercomEntity`

Create a new `ContactSegment` entity instance. Pass `nil` for no initial data.

#### `Content(data map[string]any) IntercomEntity`

Create a new `Content` entity instance. Pass `nil` for no initial data.

#### `ContentImportSource(data map[string]any) IntercomEntity`

Create a new `ContentImportSource` entity instance. Pass `nil` for no initial data.

#### `ContentSearch(data map[string]any) IntercomEntity`

Create a new `ContentSearch` entity instance. Pass `nil` for no initial data.

#### `ContentSnippet(data map[string]any) IntercomEntity`

Create a new `ContentSnippet` entity instance. Pass `nil` for no initial data.

#### `Conversation(data map[string]any) IntercomEntity`

Create a new `Conversation` entity instance. Pass `nil` for no initial data.

#### `ConversationAttribute(data map[string]any) IntercomEntity`

Create a new `ConversationAttribute` entity instance. Pass `nil` for no initial data.

#### `ConversationAttributeList(data map[string]any) IntercomEntity`

Create a new `ConversationAttributeList` entity instance. Pass `nil` for no initial data.

#### `ConversationList(data map[string]any) IntercomEntity`

Create a new `ConversationList` entity instance. Pass `nil` for no initial data.

#### `ConversationParticipant(data map[string]any) IntercomEntity`

Create a new `ConversationParticipant` entity instance. Pass `nil` for no initial data.

#### `CustomObjectInstance(data map[string]any) IntercomEntity`

Create a new `CustomObjectInstance` entity instance. Pass `nil` for no initial data.

#### `Data(data map[string]any) IntercomEntity`

Create a new `Data` entity instance. Pass `nil` for no initial data.

#### `DataAttribute(data map[string]any) IntercomEntity`

Create a new `DataAttribute` entity instance. Pass `nil` for no initial data.

#### `DataConnector(data map[string]any) IntercomEntity`

Create a new `DataConnector` entity instance. Pass `nil` for no initial data.

#### `DataConnectorExecutionResult(data map[string]any) IntercomEntity`

Create a new `DataConnectorExecutionResult` entity instance. Pass `nil` for no initial data.

#### `DataConnectorExecutionResultList(data map[string]any) IntercomEntity`

Create a new `DataConnectorExecutionResultList` entity instance. Pass `nil` for no initial data.

#### `DataEvent(data map[string]any) IntercomEntity`

Create a new `DataEvent` entity instance. Pass `nil` for no initial data.

#### `DataEventSummary(data map[string]any) IntercomEntity`

Create a new `DataEventSummary` entity instance. Pass `nil` for no initial data.

#### `DataExport(data map[string]any) IntercomEntity`

Create a new `DataExport` entity instance. Pass `nil` for no initial data.

#### `Deleted(data map[string]any) IntercomEntity`

Create a new `Deleted` entity instance. Pass `nil` for no initial data.

#### `DeletedArticleObject(data map[string]any) IntercomEntity`

Create a new `DeletedArticleObject` entity instance. Pass `nil` for no initial data.

#### `DeletedCompanyObject(data map[string]any) IntercomEntity`

Create a new `DeletedCompanyObject` entity instance. Pass `nil` for no initial data.

#### `DeletedDataConnectorObject(data map[string]any) IntercomEntity`

Create a new `DeletedDataConnectorObject` entity instance. Pass `nil` for no initial data.

#### `DeletedInternalArticleObject(data map[string]any) IntercomEntity`

Create a new `DeletedInternalArticleObject` entity instance. Pass `nil` for no initial data.

#### `DeletedObject(data map[string]any) IntercomEntity`

Create a new `DeletedObject` entity instance. Pass `nil` for no initial data.

#### `Email(data map[string]any) IntercomEntity`

Create a new `Email` entity instance. Pass `nil` for no initial data.

#### `ExternalPage(data map[string]any) IntercomEntity`

Create a new `ExternalPage` entity instance. Pass `nil` for no initial data.

#### `FinAgent(data map[string]any) IntercomEntity`

Create a new `FinAgent` entity instance. Pass `nil` for no initial data.

#### `HandlingEvent(data map[string]any) IntercomEntity`

Create a new `HandlingEvent` entity instance. Pass `nil` for no initial data.

#### `HelpCenter(data map[string]any) IntercomEntity`

Create a new `HelpCenter` entity instance. Pass `nil` for no initial data.

#### `InternalArticle(data map[string]any) IntercomEntity`

Create a new `InternalArticle` entity instance. Pass `nil` for no initial data.

#### `InternalArticleSearch(data map[string]any) IntercomEntity`

Create a new `InternalArticleSearch` entity instance. Pass `nil` for no initial data.

#### `IpAllowlist(data map[string]any) IntercomEntity`

Create a new `IpAllowlist` entity instance. Pass `nil` for no initial data.

#### `Job(data map[string]any) IntercomEntity`

Create a new `Job` entity instance. Pass `nil` for no initial data.

#### `Macro(data map[string]any) IntercomEntity`

Create a new `Macro` entity instance. Pass `nil` for no initial data.

#### `MergeHistory(data map[string]any) IntercomEntity`

Create a new `MergeHistory` entity instance. Pass `nil` for no initial data.

#### `Message(data map[string]any) IntercomEntity`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `NewsItem(data map[string]any) IntercomEntity`

Create a new `NewsItem` entity instance. Pass `nil` for no initial data.

#### `Newsfeed(data map[string]any) IntercomEntity`

Create a new `Newsfeed` entity instance. Pass `nil` for no initial data.

#### `Note(data map[string]any) IntercomEntity`

Create a new `Note` entity instance. Pass `nil` for no initial data.

#### `OfficeHour(data map[string]any) IntercomEntity`

Create a new `OfficeHour` entity instance. Pass `nil` for no initial data.

#### `OfficeHoursException(data map[string]any) IntercomEntity`

Create a new `OfficeHoursException` entity instance. Pass `nil` for no initial data.

#### `OfficeHoursSchedule(data map[string]any) IntercomEntity`

Create a new `OfficeHoursSchedule` entity instance. Pass `nil` for no initial data.

#### `Paginated(data map[string]any) IntercomEntity`

Create a new `Paginated` entity instance. Pass `nil` for no initial data.

#### `PhoneSwitch(data map[string]any) IntercomEntity`

Create a new `PhoneSwitch` entity instance. Pass `nil` for no initial data.

#### `ReportingData(data map[string]any) IntercomEntity`

Create a new `ReportingData` entity instance. Pass `nil` for no initial data.

#### `ReportingDataExport(data map[string]any) IntercomEntity`

Create a new `ReportingDataExport` entity instance. Pass `nil` for no initial data.

#### `Segment(data map[string]any) IntercomEntity`

Create a new `Segment` entity instance. Pass `nil` for no initial data.

#### `SideConversation(data map[string]any) IntercomEntity`

Create a new `SideConversation` entity instance. Pass `nil` for no initial data.

#### `Subscription(data map[string]any) IntercomEntity`

Create a new `Subscription` entity instance. Pass `nil` for no initial data.

#### `SubscriptionType(data map[string]any) IntercomEntity`

Create a new `SubscriptionType` entity instance. Pass `nil` for no initial data.

#### `Tag(data map[string]any) IntercomEntity`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `Team(data map[string]any) IntercomEntity`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `TeamMetricList(data map[string]any) IntercomEntity`

Create a new `TeamMetricList` entity instance. Pass `nil` for no initial data.

#### `Ticket(data map[string]any) IntercomEntity`

Create a new `Ticket` entity instance. Pass `nil` for no initial data.

#### `TicketList(data map[string]any) IntercomEntity`

Create a new `TicketList` entity instance. Pass `nil` for no initial data.

#### `TicketReply(data map[string]any) IntercomEntity`

Create a new `TicketReply` entity instance. Pass `nil` for no initial data.

#### `TicketState(data map[string]any) IntercomEntity`

Create a new `TicketState` entity instance. Pass `nil` for no initial data.

#### `TicketType(data map[string]any) IntercomEntity`

Create a new `TicketType` entity instance. Pass `nil` for no initial data.

#### `TicketTypeAttribute(data map[string]any) IntercomEntity`

Create a new `TicketTypeAttribute` entity instance. Pass `nil` for no initial data.

#### `Visitor(data map[string]any) IntercomEntity`

Create a new `Visitor` entity instance. Pass `nil` for no initial data.

#### `WhatsappMessageStatus(data map[string]any) IntercomEntity`

Create a new `WhatsappMessageStatus` entity instance. Pass `nil` for no initial data.

#### `WhatsappMessageStatusList(data map[string]any) IntercomEntity`

Create a new `WhatsappMessageStatusList` entity instance. Pass `nil` for no initial data.

#### `Workflow(data map[string]any) IntercomEntity`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ActivityLogEntity

```go
activityLog := client.ActivityLog(nil)
fmt.Println(activityLog.GetName()) // "activity_log"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_description` | `string` | No | A sentence or two describing the activity. |
| `activity_type` | `string` | No |  |
| `created_at` | `int` | No | The time the activity was created. |
| `id` | `string` | No | The id representing the activity. |
| `metadata` | `map[string]any` | No | Additional data provided about Admin activity. |
| `performed_by` | `map[string]any` | No | Details about the Admin involved in the activity. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ActivityLog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActivityLogEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActivityLogEventTypeEntity

```go
activityLogEventType := client.ActivityLogEventType(nil)
fmt.Println(activityLogEventType.GetName()) // "activity_log_event_type"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `event_types` | `[]any` | No | An array of activity log event type strings. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ActivityLogEventType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActivityLogEventTypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActivityLogListEntity

```go
activityLogList := client.ActivityLogList(nil)
fmt.Println(activityLogList.GetName()) // "activity_log_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_logs` | `[]any` | No | An array of activity logs |
| `created_at_after` | `int` | Yes | The start date that you request data for. |
| `created_at_before` | `int` | No | The end date that you request data for. |
| `event_types` | `[]any` | No | An optional list of event types to filter activity logs by. |
| `page` | `int` | No | The page number of results to return. |
| `pages` | `map[string]any` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `per_page` | `int` | No | The number of results per page. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ActivityLogList(nil).Create(map[string]any{
    "created_at_after": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActivityLogListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminEntity

```go
admin := client.Admin(nil)
fmt.Println(admin.GetName()) // "admin"
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
| `role` | `map[string]any` | No | The role assigned to this admin. |
| `team_ids` | `[]any` | No | This object represents the avatar associated with the admin. |
| `team_priority_level` | `map[string]any` | No | Admin priority levels for teams |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Admin(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Admin(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Admin(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminWithAppEntity

```go
adminWithApp := client.AdminWithApp(nil)
fmt.Println(adminWithApp.GetName()) // "admin_with_app"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `map[string]any` | No | App that the admin belongs to. |
| `avatar` | `map[string]any` | No | This object represents the avatar associated with the admin. |
| `away_mode_enabled` | `bool` | No | Identifies if this admin is currently set in away mode. |
| `away_mode_reassign` | `bool` | No | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `email` | `string` | No | The email of the admin. |
| `email_verified` | `bool` | No | Identifies if this admin's email is verified. |
| `has_inbox_seat` | `bool` | No | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `id` | `string` | No | The id representing the admin. |
| `job_title` | `string` | No | The job title of the admin. |
| `name` | `string` | No | The name of the admin. |
| `team_ids` | `[]any` | No | This is a list of ids of the teams that this admin is part of. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AdminWithApp(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminWithAppEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiCallEntity

```go
aiCall := client.AiCall(nil)
fmt.Println(aiCall.GetName()) // "ai_call"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `int` | No | The workspace identifier |
| `call_id` | `string` | Yes | External call identifier from the call provider |
| `call_summary` | `string` | No | Summary of the call conversation, truncated to 256 characters. |
| `call_transcript` | `[]any` | No | Array of transcript entries for the call |
| `data` | `map[string]any` | No | Additional metadata about the call |
| `external_call_id` | `string` | No | The external call identifier from the call provider |
| `id` | `int` | No | The unique identifier for the external reference |
| `intent` | `[]any` | No | Array of intent classifications for the call |
| `intercom_call_id` | `string` | No | The Intercom call identifier, if the call has been matched |
| `intercom_conversation_id` | `string` | No | The Intercom conversation identifier, if a conversation has been created |
| `phone_number` | `string` | Yes | Phone number in E.164 format for the call |
| `source` | `string` | No | Source of the call. |
| `status` | `string` | No | Status of the call. |
| `user_phone_number` | `string` | No | Phone number in E.164 format for the call |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AiCall(nil).Load(map[string]any{"conversation_id": "conversation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AiCall(nil).Create(map[string]any{
    "call_id": "example_call_id",
    "phone_number": "example_phone_number",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiCallEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AiContentEntity

```go
aiContent := client.AiContent(nil)
fmt.Println(aiContent.GetName()) // "ai_content"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AiContent(nil).Remove(map[string]any{"source_id": "source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AiContentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ArticleEntity

```go
article := client.Article(nil)
fmt.Println(article.GetName()) // "article"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `bool` | No | Whether the article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | No | Whether the article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | No | Whether the article should be available for AI Sales Agent. |
| `audience_ids` | `[]any` | No | The list of audience IDs to assign to this article for Fin AI Agent targeting. |
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
| `fin_resolution_rate` | `float64` | No | The percentage of Fin AI Agent involvements that resulted in a resolution (fin_resolutions / fin_involvements * 100). |
| `fin_resolutions` | `int` | No | The number of conversations Fin AI Agent resolved using this article, summed across all of the article's locales. |
| `happy_reaction_percentage` | `float64` | No | The percentage of happy reactions the article has received against other types of reaction. |
| `has_unpublished_changes` | `bool` | No | Whether the published article has unpublished changes staged as a draft on top of its live content. |
| `help_center_audience` | `string` | No | The audience that can view this article in the Help Center. |
| `id` | `string` | No | The unique identifier for the article which is given by Intercom. |
| `neutral_reaction_percentage` | `float64` | No | The percentage of neutral reactions the article has received against other types of reaction. |
| `parent_id` | `int` | No | The id of the article's parent collection or section. |
| `parent_ids` | `[]any` | No | The ids of the article's parent collections or sections. |
| `parent_type` | `string` | No | The type of parent, which can either be a `collection` or `section`. |
| `reactions` | `int` | No | The number of total reactions the article has received. |
| `sad_reaction_percentage` | `float64` | No | The percentage of sad reactions the article has received against |
| `scheduled_publish_at` | `string` | No | ISO 8601 timestamp at which to schedule a future publish of the article. |
| `scheduled_unpublish_at` | `string` | No | ISO 8601 timestamp at which to schedule a future unpublish of the article. |
| `state` | `string` | No | Whether the article will be `published` or will be a `draft`. |
| `tags` | `map[string]any` | No | A list of tags objects associated with a conversation |
| `title` | `string` | Yes | The title of the article.For multilingual articles, this will be the title of the default language's content. |
| `translated_content` | `map[string]any` | No | The Translated Content of an Article. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Article(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Article(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Article(nil).Create(map[string]any{
    "author_id": 1,
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Article(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ArticleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ArticleSearchEntity

```go
articleSearch := client.ArticleSearch(nil)
fmt.Println(articleSearch.GetName()) // "article_search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | No | An object containing the results of the search. |
| `pages` | `map[string]any` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | No | The total number of Articles matching the search query |
| `type` | `string` | No | The type of the object - `list`. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ArticleSearch(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ArticleSearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ArticleVersionEntity

```go
articleVersion := client.ArticleVersion(nil)
fmt.Println(articleVersion.GetName()) // "article_version"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ArticleVersion(nil).Load(map[string]any{"id": "article_version_id", "article_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ArticleVersionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ArticleVersionListEntity

```go
articleVersionList := client.ArticleVersionList(nil)
fmt.Println(articleVersionList.GetName()) // "article_version_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ArticleVersionList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ArticleVersionListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AudienceEntity

```go
audience := client.Audience(nil)
fmt.Println(audience.GetName()) // "audience"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The time the audience was created as a Unix timestamp. |
| `id` | `string` | No | The unique identifier representing the audience. |
| `name` | `string` | No | The name of the audience. |
| `predicates` | `[]any` | No | The predicates that define which contacts belong to the audience. |
| `role_predicates` | `[]any` | No | Role-based predicates that further filter audience membership by contact role. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Audience(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Audience(nil).Load(map[string]any{"id": "audience_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Audience(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Audience(nil).Update(map[string]any{
    "id": "audience_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Audience(nil).Remove(map[string]any{"id": "audience_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AudienceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AwayStatusReasonEntity

```go
awayStatusReason := client.AwayStatusReason(nil)
fmt.Println(awayStatusReason.GetName()) // "away_status_reason"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AwayStatusReason(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AwayStatusReasonEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BannerEntity

```go
banner := client.Banner(nil)
fmt.Println(banner.GetName()) // "banner"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `map[string]any` | No | The action a contact can take on the banner, or `null` when the banner has no action. |
| `body` | `string` | No | The banner's body content as HTML. |
| `client_targeting` | `[]any` | No | Reserved for future use. |
| `created_at` | `int` | No | The time the contact's view of this banner was created. |
| `id` | `string` | No | The id of the banner. |
| `position` | `string` | No | Where the banner is positioned. |
| `show_dismiss_button` | `bool` | No | Whether the banner should display a dismiss control. |
| `style` | `string` | No | How the banner is displayed. |
| `title` | `string` | No | The banner's title. |
| `type` | `string` | No | String representing the object's type. |
| `view_id` | `string` | No | The id of the contact's view of this banner. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Banner(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BannerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BannerDismissEntity

```go
bannerDismiss := client.BannerDismiss(nil)
fmt.Println(bannerDismiss.GetName()) // "banner_dismiss"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dismissed` | `bool` | No | Whether the banner view is dismissed. |
| `id` | `string` | No |  |
| `type` | `string` | No | String representing the object's type. |
| `view_id` | `string` | No | The id of the dismissed banner view. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BannerDismiss(nil).Create(map[string]any{
    "contact_id": "example_contact_id",
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BannerDismissEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BrandEntity

```go
brand := client.Brand(nil)
fmt.Println(brand.GetName()) // "brand"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Brand(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Brand(nil).Load(map[string]any{"id": "brand_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BrandEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CallEntity

```go
call := client.Call(nil)
fmt.Println(call.GetName()) // "call"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Call(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Call(nil).Load(map[string]any{"id": "call_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Call(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CompanyEntity

```go
company := client.Company(nil)
fmt.Println(company.GetName()) // "company"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | No | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | No | The company id you have defined for the company. |
| `created_at` | `int` | No | The time the company was added in Intercom. |
| `custom_attributes` | `map[string]any` | No | The custom attributes you have set on the company. |
| `id` | `string` | No | The Intercom defined id representing the company. |
| `industry` | `string` | No | The industry that the company operates in. |
| `last_request_at` | `int` | No | The time the company last recorded making a request. |
| `monthly_spend` | `int` | No | How much revenue the company generates for your business. |
| `name` | `string` | No | The name of the company. |
| `notes` | `map[string]any` | No | The list of notes associated with the company |
| `plan` | `map[string]any` | No | The name of the plan you have associated with the company. |
| `remote_created_at` | `int` | No | The time the company was created by you. |
| `segments` | `map[string]any` | No | The list of segments associated with the company |
| `session_count` | `int` | No | How many sessions the company has recorded. |
| `size` | `int` | No | The number of employees in the company. |
| `tags` | `map[string]any` | No | The list of tags associated with the company |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Company(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Company(nil).Load(map[string]any{"id": "company_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Company(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Company(nil).Update(map[string]any{
    "id": "company_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Company(nil).Remove(map[string]any{"id": "company_id", "contact_id": "contact_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompanyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CompanyAttachedContactEntity

```go
companyAttachedContact := client.CompanyAttachedContact(nil)
fmt.Println(companyAttachedContact.GetName()) // "company_attached_contact"
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
| `avatar` | `map[string]any` | No |  |
| `browser` | `string` | No | The name of the browser which the contact is using. |
| `browser_language` | `string` | No | The language set by the browser which the contact is using. |
| `browser_version` | `string` | No | The version of the browser which the contact is using. |
| `companies` | `map[string]any` | No | An object with metadata about companies attached to a contact . |
| `created_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `map[string]any` | No | The custom attributes which are set for the contact. |
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
| `location` | `map[string]any` | No | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `bool` | No | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `[]any` | No | A list of contacts that were merged into this contact. |
| `name` | `string` | No | The contacts name. |
| `notes` | `map[string]any` | No | An object containing notes meta data about the notes that a contact has. |
| `os` | `string` | No | The operating system which the contact is using. |
| `owner_id` | `string` | No | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `string` | No | The contacts phone. |
| `role` | `string` | No | The role of the contact. |
| `signed_up_at` | `int` | No | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `map[string]any` | No | An object containing social profiles that a contact has. |
| `tags` | `map[string]any` | No | An object containing tags meta data about the tags that a contact has. |
| `type` | `string` | No | The type of object. |
| `unsubscribed_from_emails` | `bool` | No | Whether the contact is unsubscribed from emails. |
| `updated_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last updated. |
| `workspace_id` | `string` | No | The id of the workspace which the contact belongs to. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CompanyAttachedContact(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompanyAttachedContactEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CompanyAttachedSegmentEntity

```go
companyAttachedSegment := client.CompanyAttachedSegment(nil)
fmt.Println(companyAttachedSegment.GetName()) // "company_attached_segment"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CompanyAttachedSegment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompanyAttachedSegmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CompanyListEntity

```go
companyList := client.CompanyList(nil)
fmt.Println(companyList.GetName()) // "company_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No | An array containing Company Objects. |
| `pages` | `map[string]any` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | No | The total number of companies. |
| `type` | `string` | No | The type of object - `list`. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CompanyList(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompanyListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CompanyScrollEntity

```go
companyScroll := client.CompanyScroll(nil)
fmt.Println(companyScroll.GetName()) // "company_scroll"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | No | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | No | The company id you have defined for the company. |
| `created_at` | `int` | No | The time the company was added in Intercom. |
| `custom_attributes` | `map[string]any` | No | The custom attributes you have set on the company. |
| `id` | `string` | No | The Intercom defined id representing the company. |
| `industry` | `string` | No | The industry that the company operates in. |
| `last_request_at` | `int` | No | The time the company last recorded making a request. |
| `monthly_spend` | `int` | No | How much revenue the company generates for your business. |
| `name` | `string` | No | The name of the company. |
| `notes` | `map[string]any` | No | The list of notes associated with the company |
| `plan` | `map[string]any` | No |  |
| `remote_created_at` | `int` | No | The time the company was created by you. |
| `segments` | `map[string]any` | No | The list of segments associated with the company |
| `session_count` | `int` | No | How many sessions the company has recorded. |
| `size` | `int` | No | The number of employees in the company. |
| `tags` | `map[string]any` | No | The list of tags associated with the company |
| `type` | `string` | No | Value is `company` |
| `updated_at` | `int` | No | The last time the company was updated. |
| `user_count` | `int` | No | The number of users in the company. |
| `website` | `string` | No | The URL for the company website. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CompanyScroll(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompanyScrollEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContactEntity

```go
contact := client.Contact(nil)
fmt.Println(contact.GetName()) // "contact"
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
| `avatar` | `map[string]any` | No |  |
| `browser` | `string` | No | The name of the browser which the contact is using. |
| `browser_language` | `string` | No | The language set by the browser which the contact is using. |
| `browser_version` | `string` | No | The version of the browser which the contact is using. |
| `companies` | `map[string]any` | No | An object with metadata about companies attached to a contact . |
| `created_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `map[string]any` | No | The custom attributes which are set for the contact. |
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
| `location` | `map[string]any` | No | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `bool` | No | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `[]any` | No | A list of contacts that were merged into this contact. |
| `name` | `string` | No | The contacts name. |
| `notes` | `map[string]any` | No | An object containing notes meta data about the notes that a contact has. |
| `os` | `string` | No | The operating system which the contact is using. |
| `owner_id` | `string` | No | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `string` | No | The contacts phone. |
| `role` | `string` | No | The role of the contact. |
| `signed_up_at` | `int` | No | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `map[string]any` | No | An object containing social profiles that a contact has. |
| `tags` | `map[string]any` | No | An object containing tags meta data about the tags that a contact has. |
| `type` | `string` | No | The type of object. |
| `unsubscribed_from_emails` | `bool` | No | Whether the contact is unsubscribed from emails. |
| `updated_at` | `int` | No | (Unix timestamp in seconds) The time when the contact was last updated. |
| `user` | `map[string]any` | Yes | The unique identifiers retained after converting or merging. |
| `visitor` | `map[string]any` | Yes | The unique identifiers to convert a single Visitor. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Contact(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Contact(nil).Load(map[string]any{"id": "contact_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Contact(nil).Create(map[string]any{
    "user": map[string]any{},
    "visitor": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Contact(nil).Update(map[string]any{
    "id": "contact_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Contact(nil).Remove(map[string]any{"id": "contact_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContactEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContactAttachedCompanyEntity

```go
contactAttachedCompany := client.ContactAttachedCompany(nil)
fmt.Println(contactAttachedCompany.GetName()) // "contact_attached_company"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | No | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | No | The company id you have defined for the company. |
| `created_at` | `int` | No | The time the company was added in Intercom. |
| `custom_attributes` | `map[string]any` | No | The custom attributes you have set on the company. |
| `id` | `string` | No | The Intercom defined id representing the company. |
| `industry` | `string` | No | The industry that the company operates in. |
| `last_request_at` | `int` | No | The time the company last recorded making a request. |
| `monthly_spend` | `int` | No | How much revenue the company generates for your business. |
| `name` | `string` | No | The name of the company. |
| `notes` | `map[string]any` | No | The list of notes associated with the company |
| `plan` | `map[string]any` | No |  |
| `remote_created_at` | `int` | No | The time the company was created by you. |
| `segments` | `map[string]any` | No | The list of segments associated with the company |
| `session_count` | `int` | No | How many sessions the company has recorded. |
| `size` | `int` | No | The number of employees in the company. |
| `tags` | `map[string]any` | No | The list of tags associated with the company |
| `type` | `string` | No | Value is `company` |
| `updated_at` | `int` | No | The last time the company was updated. |
| `user_count` | `int` | No | The number of users in the company. |
| `website` | `string` | No | The URL for the company website. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ContactAttachedCompany(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContactAttachedCompanyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContactListEntity

```go
contactList := client.ContactList(nil)
fmt.Println(contactList.GetName()) // "contact_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No | The list of contact objects |
| `pages` | `map[string]any` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `map[string]any` | No |  |
| `query` | `any` | Yes |  |
| `sort` | `map[string]any` | No | An optional object to sort the results by. |
| `total_count` | `int` | No | A count of the total number of objects. |
| `type` | `string` | No | Always list |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ContactList(nil).Create(map[string]any{
    "query": "example_query",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContactListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContactSegmentEntity

```go
contactSegment := client.ContactSegment(nil)
fmt.Println(contactSegment.GetName()) // "contact_segment"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ContactSegment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContactSegmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContentEntity

```go
content := client.Content(nil)
fmt.Println(content.GetName()) // "content"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Content(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContentImportSourceEntity

```go
contentImportSource := client.ContentImportSource(nil)
fmt.Println(contentImportSource.GetName()) // "content_import_source"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apply_audience_to_existing_content` | `bool` | No | When true, the audience will be applied to all existing external pages belonging to this content import source. |
| `audience_ids` | `[]any` | No | The unique identifiers for the audiences associated with this content import source. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ContentImportSource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ContentImportSource(nil).Load(map[string]any{"id": "content_import_source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ContentImportSource(nil).Create(map[string]any{
    "created_at": 1,
    "id": 1,
    "last_synced_at": 1,
    "status": "example_status",
    "sync_behavior": "example_sync_behavior",
    "type": "example_type",
    "updated_at": 1,
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ContentImportSource(nil).Update(map[string]any{
    "id": "content_import_source_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContentImportSourceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContentSearchEntity

```go
contentSearch := client.ContentSearch(nil)
fmt.Println(contentSearch.GetName()) // "content_search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No | The list of matched content items. |
| `pages` | `map[string]any` | No | Pagination metadata, including links to neighbouring pages. |
| `total_count` | `int` | No | Total number of results matching the query. |
| `type` | `string` | No | Always `list`. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ContentSearch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContentSearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContentSnippetEntity

```go
contentSnippet := client.ContentSnippet(nil)
fmt.Println(contentSnippet.GetName()) // "content_snippet"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `bool` | No | Whether the content snippet is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | No | Whether the content snippet is available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | No | Whether the content snippet is available for AI Sales Agent. |
| `audience_ids` | `[]any` | No | The list of audience IDs this content snippet is targeted to for Fin AI Agent. |
| `body_markdown` | `string` | No | The body of the content snippet in markdown. |
| `chatbot_availability` | `int` | No | Deprecated. |
| `copilot_availability` | `int` | No | Deprecated. |
| `created_at` | `int` | No | The time the snippet was created as a UNIX timestamp. |
| `id` | `string` | No | The unique identifier for the content snippet. |
| `json_blocks` | `[]any` | No | The content blocks that make up the body of the snippet. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ContentSnippet(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ContentSnippet(nil).Load(map[string]any{"id": "content_snippet_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ContentSnippet(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ContentSnippet(nil).Update(map[string]any{
    "id": "content_snippet_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ContentSnippet(nil).Remove(map[string]any{"id": "content_snippet_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContentSnippetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationEntity

```go
conversation := client.Conversation(nil)
fmt.Println(conversation.GetName()) // "conversation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_assignee_id` | `int` | No | The id of the admin assigned to the conversation. |
| `ai_agent` | `map[string]any` | No | Data related to AI Agent involvement in the conversation. |
| `ai_agent_participated` | `bool` | No | Indicates whether the AI Agent participated in the conversation. |
| `attachment_urls` | `[]any` | No | A list of image URLs that will be added as attachments. |
| `body` | `string` | Yes | The content of the message. |
| `brand_id` | `string` | No | The unique identifier of the brand to associate with this conversation. |
| `channel` | `map[string]any` | No | The channel through which the conversation was initiated and its current channel. |
| `company` | `map[string]any` | No | The company associated with the conversation. |
| `company_id` | `string` | No | The ID of the company that the conversation is associated with. |
| `contacts` | `map[string]any` | No | The list of contacts (users or leads) involved in this conversation. |
| `conversation_id` | `string` | Yes | The unique identifier (given by Intercom) for the conversation or customer ticket to link to the tracker ticket. |
| `conversation_parts` | `map[string]any` | No | A list of Conversation Part objects for each part message in the conversation. |
| `conversation_rating` | `map[string]any` | No | The Conversation Rating object which contains information on the rating and/or remark added by a Contact and the Admin assigned to the conversation. |
| `created_at` | `int` | No | The time the conversation was created. |
| `custom_attributes` | `map[string]any` | No | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `external_references` | `[]any` | No | References linking this conversation to records in an external helpdesk or CRM system. |
| `first_contact_reply` | `map[string]any` | No | An object containing information on the first users message. |
| `from` | `map[string]any` | Yes |  |
| `id` | `string` | No | The id representing the conversation. |
| `linked_objects` | `map[string]any` | No | An object containing metadata about linked conversations and linked tickets. |
| `monitor_evaluations` | `[]any` | No | QA monitor evaluations that flagged this conversation. |
| `open` | `bool` | No | Indicates whether a conversation is open (true) or closed (false). |
| `priority` | `string` | No | The priority level of the conversation. |
| `read` | `bool` | No | Indicates whether a conversation has been read. |
| `sales_agent` | `map[string]any` | No | Data related to Sales Agent involvement in the conversation. |
| `sales_agent_participated` | `bool` | No | Indicates whether the Sales Agent participated in the conversation. |
| `scorecards` | `[]any` | No | QA scorecard results for this conversation. |
| `sla_applied` | `map[string]any` | No | The SLA Applied object contains the details for which SLA has been applied to this conversation. |
| `snoozed_until` | `int` | No | If set this is the time in the future when this conversation will be marked as open. |
| `source` | `map[string]any` | No | The type of the conversation part that started this conversation. |
| `state` | `string` | No | Can be set to "open", "closed" or "snoozed". |
| `statistics` | `map[string]any` | No | A Statistics object containing all information required for reporting, with timestamps and calculated metrics. |
| `subject` | `string` | No | The title of the email. |
| `tags` | `map[string]any` | No | A list of tags objects associated with a conversation |
| `team_assignee_id` | `int` | No | The id of the team assigned to the conversation. |
| `teammates` | `map[string]any` | No | The list of teammates who participated in the conversation (wrote at least one conversation part). |
| `title` | `string` | No | The title given to the conversation. |
| `type` | `string` | No | Always conversation. |
| `updated_at` | `int` | No | The last time the conversation was updated. |
| `waiting_since` | `int` | No | The last time a Contact responded to an Admin. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Conversation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Conversation(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Conversation(nil).Create(map[string]any{
    "body": "example_body",
    "conversation_id": "example_conversation_id",
    "from": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Conversation(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Conversation(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationAttributeEntity

```go
conversationAttribute := client.ConversationAttribute(nil)
fmt.Println(conversationAttribute.GetName()) // "conversation_attribute"
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
| `reference` | `map[string]any` | Yes | (Relationship data type only) Reference configuration for related objects. |
| `required` | `bool` | No | Whether this attribute is required. |
| `type` | `string` | No |  |
| `updated_at` | `int` | No |  |
| `visible_to_team_ids` | `[]any` | No | Team IDs that can see this attribute. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConversationAttribute(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ConversationAttribute(nil).Create(map[string]any{
    "label": "example_label",
    "reference": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ConversationAttribute(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ConversationAttribute(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationAttributeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationAttributeListEntity

```go
conversationAttributeList := client.ConversationAttributeList(nil)
fmt.Println(conversationAttributeList.GetName()) // "conversation_attribute_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No | A list of conversation attributes. |
| `type` | `string` | No | The type of the object. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ConversationAttributeList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationAttributeListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationListEntity

```go
conversationList := client.ConversationList(nil)
fmt.Println(conversationList.GetName()) // "conversation_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversations` | `[]any` | No | The list of conversation objects |
| `pages` | `map[string]any` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `map[string]any` | No |  |
| `query` | `any` | Yes |  |
| `total_count` | `int` | No | A count of the total number of objects. |
| `type` | `string` | No | Always conversation.list |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ConversationList(nil).Create(map[string]any{
    "query": "example_query",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationParticipantEntity

```go
conversationParticipant := client.ConversationParticipant(nil)
fmt.Println(conversationParticipant.GetName()) // "conversation_participant"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ConversationParticipant(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ConversationParticipant(nil).Remove(map[string]any{"contact_id": "contact_id", "conversation_id": "conversation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationParticipantEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomObjectInstanceEntity

```go
customObjectInstance := client.CustomObjectInstance(nil)
fmt.Println(customObjectInstance.GetName()) // "custom_object_instance"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No |  |
| `custom_attributes` | `map[string]any` | No | The custom attributes which are set for the Custom Object instance. |
| `data` | `[]any` | No | An array of Custom Object Instance objects. |
| `external_created_at` | `string` | No | The time when the Custom Object instance was created in the external system it originated from. |
| `external_id` | `string` | No | A unique identifier for the Custom Object instance in the external system it originated from. |
| `external_updated_at` | `string` | No | The time when the Custom Object instance was last updated in the external system it originated from. |
| `id` | `string` | No |  |
| `pages` | `map[string]any` | No | The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests. |
| `total_count` | `int` | No | A count of the total number of custom object instances. |
| `type` | `string` | No | The type of the object - `list`. |
| `updated_at` | `int` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomObjectInstance(nil).Load(map[string]any{"id": "custom_object_instance_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CustomObjectInstance(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomObjectInstance(nil).Remove(map[string]any{"id": "custom_object_instance_id", "external_id": "external_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomObjectInstanceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DataEntity

```go
data := client.Data(nil)
fmt.Println(data.GetName()) // "data"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Data(nil).Load(map[string]any{"id": "data_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Data(nil).Create(map[string]any{
    "created_at_after": 1,
    "created_at_before": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DataEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DataAttributeEntity

```go
dataAttribute := client.DataAttribute(nil)
fmt.Println(dataAttribute.GetName()) // "data_attribute"
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
| `options` | `[]any` | No | List of predefined options for attribute value. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DataAttribute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DataAttribute(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DataAttribute(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DataAttributeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DataConnectorEntity

```go
dataConnector := client.DataConnector(nil)
fmt.Println(dataConnector.GetName()) // "data_connector"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audiences` | `[]any` | No | The audience types this connector targets. |
| `body` | `string` | No | The request body template. |
| `bypass_authentication` | `bool` | No | Whether authentication is bypassed for this connector. |
| `client_function_name` | `string` | No | The name of the client-side function, if applicable. |
| `client_function_timeout_ms` | `int` | No | Timeout in milliseconds for the client function, if applicable. |
| `configuration_response_type` | `string` | No | The expected response format from the connector. |
| `created_at` | `string` | No | The time the data connector was created. |
| `created_by_admin_id` | `string` | No | The ID of the admin who created this connector. |
| `customer_authentication` | `bool` | No | Whether OTP authentication is enabled for this connector. |
| `data_inputs` | `[]any` | No | The input parameters accepted by this data connector. |
| `data_transformation_type` | `string` | No | The type of data transformation applied to the response. |
| `description` | `string` | No | A description of what this data connector does. |
| `direct_fin_usage` | `bool` | No | Whether this connector is used directly by Fin. |
| `execution_results_url` | `string` | No | The URL path to fetch execution results for this connector. |
| `execution_type` | `string` | No | How the connector executes. |
| `headers` | `[]any` | No | HTTP headers for the request. |
| `http_method` | `string` | No | The HTTP method used by the data connector. |
| `id` | `string` | No | The unique identifier for the data connector. |
| `mock_response` | `map[string]any` | No | A sample JSON response from the external API. |
| `name` | `string` | No | The name of the data connector. |
| `object_mappings` | `[]any` | No | Mappings from connector response objects to Intercom objects. |
| `response_fields` | `[]any` | No | The fields returned in the connector response. |
| `state` | `string` | No | The current state of the data connector. |
| `token_ids` | `[]any` | No | IDs of authentication tokens associated with this connector. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DataConnector(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DataConnector(nil).Load(map[string]any{"id": "data_connector_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DataConnector(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DataConnector(nil).Update(map[string]any{
    "id": "data_connector_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DataConnectorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DataConnectorExecutionResultEntity

```go
dataConnectorExecutionResult := client.DataConnectorExecutionResult(nil)
fmt.Println(dataConnectorExecutionResult.GetName()) // "data_connector_execution_result"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DataConnectorExecutionResult(nil).Load(map[string]any{"id": "data_connector_execution_result_id", "data_connector_id": "data_connector_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DataConnectorExecutionResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DataConnectorExecutionResultListEntity

```go
dataConnectorExecutionResultList := client.DataConnectorExecutionResultList(nil)
fmt.Println(dataConnectorExecutionResultList.GetName()) // "data_connector_execution_result_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DataConnectorExecutionResultList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DataConnectorExecutionResultListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DataEventEntity

```go
dataEvent := client.DataEvent(nil)
fmt.Println(dataEvent.GetName()) // "data_event"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The time the event occurred as a UTC Unix timestamp |
| `email` | `string` | No | An email address for your user. |
| `event_name` | `string` | No | The name of the event that occurred. |
| `event_summaries` | `map[string]any` | No | A list of event summaries for the user. |
| `id` | `string` | No | The unique identifier for the contact (lead or user) which is given by Intercom. |
| `metadata` | `map[string]any` | No | Optional metadata about the event. |
| `user_id` | `string` | No | Your identifier for the user. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DataEvent(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DataEventEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DataEventSummaryEntity

```go
dataEventSummary := client.DataEventSummary(nil)
fmt.Println(dataEventSummary.GetName()) // "data_event_summary"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DataEventSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DataEventSummaryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DataExportEntity

```go
dataExport := client.DataExport(nil)
fmt.Println(dataExport.GetName()) // "data_export"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `download_expires_at` | `string` | No | The time after which you will not be able to access the data. |
| `download_url` | `string` | No | The location where you can download your data. |
| `job_identifier` | `string` | No | The identifier for your job. |
| `status` | `string` | No | The current state of your job. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DataExport(nil).Create(map[string]any{
    "job_identifier": "example_job_identifier",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DataExportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedEntity

```go
deleted := client.Deleted(nil)
fmt.Println(deleted.GetName()) // "deleted"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deleted_at` | `int` | No | The time when the conversation was deleted. |
| `id` | `string` | No | The ID of the deleted conversation. |
| `metrics_retained` | `bool` | No | Whether reporting metrics are retained for this conversation ID |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Deleted(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedArticleObjectEntity

```go
deletedArticleObject := client.DeletedArticleObject(nil)
fmt.Println(deletedArticleObject.GetName()) // "deleted_article_object"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeletedArticleObject(nil).Remove(map[string]any{"article_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedArticleObjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedCompanyObjectEntity

```go
deletedCompanyObject := client.DeletedCompanyObject(nil)
fmt.Println(deletedCompanyObject.GetName()) // "deleted_company_object"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeletedCompanyObject(nil).Remove(map[string]any{"company_id": "company_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedCompanyObjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedDataConnectorObjectEntity

```go
deletedDataConnectorObject := client.DeletedDataConnectorObject(nil)
fmt.Println(deletedDataConnectorObject.GetName()) // "deleted_data_connector_object"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeletedDataConnectorObject(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedDataConnectorObjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedInternalArticleObjectEntity

```go
deletedInternalArticleObject := client.DeletedInternalArticleObject(nil)
fmt.Println(deletedInternalArticleObject.GetName()) // "deleted_internal_article_object"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `bool` | No | Whether the internal article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | No | Whether the internal article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | No | Whether the internal article should be available for AI Sales Agent. |
| `audience_ids` | `[]any` | No | The list of audience IDs to target this internal article to for Fin AI Agent. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DeletedInternalArticleObject(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DeletedInternalArticleObject(nil).Create(map[string]any{
    "author_id": 1,
    "owner_id": 1,
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeletedInternalArticleObject(nil).Remove(map[string]any{"internal_article_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedInternalArticleObjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeletedObjectEntity

```go
deletedObject := client.DeletedObject(nil)
fmt.Println(deletedObject.GetName()) // "deleted_object"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeletedObject(nil).Remove(map[string]any{"news_item_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeletedObjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmailEntity

```go
email := client.Email(nil)
fmt.Println(email.GetName()) // "email"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Email(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Email(nil).Load(map[string]any{"id": "email_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ExternalPageEntity

```go
externalPage := client.ExternalPage(nil)
fmt.Println(externalPage.GetName()) // "external_page"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ExternalPage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ExternalPage(nil).Load(map[string]any{"id": "external_page_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ExternalPage(nil).Create(map[string]any{
    "ai_agent_availability": true,
    "ai_copilot_availability": true,
    "created_at": 1,
    "external_id": "example_external_id",
    "html": "example_html",
    "id": "example_id",
    "last_ingested_at": 1,
    "locale": "example_locale",
    "source_id": 1,
    "title": "example_title",
    "type": "example_type",
    "updated_at": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ExternalPage(nil).Update(map[string]any{
    "id": "external_page_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ExternalPage(nil).Remove(map[string]any{"id": "external_page_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ExternalPageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FinAgentEntity

```go
finAgent := client.FinAgent(nil)
fmt.Println(finAgent.GetName()) // "fin_agent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `[]any` | No | An array of attachments to include with the message. |
| `conversation` | `map[string]any` | No | Conversation-related attribute errors. |
| `conversation_id` | `string` | No | The external ID of the rated conversation. |
| `conversation_metadata` | `map[string]any` | No | Metadata about the conversation, including history and attributes. |
| `message` | `map[string]any` | Yes | A message exchanged within a Fin Agent conversation. |
| `rating` | `string` | No | The rating now recorded on the conversation. |
| `remark` | `string` | No | Optional free-text comment the user left alongside the rating. |
| `status` | `string` | No | The result of the submission. |
| `user` | `map[string]any` | No | User-related attribute errors. |

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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.FinAgent(nil).Create(map[string]any{
    "message": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FinAgentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HandlingEventEntity

```go
handlingEvent := client.HandlingEvent(nil)
fmt.Println(handlingEvent.GetName()) // "handling_event"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `string` | No | Optional reason for the event (e.g., "Paused", "Away") |
| `teammate` | `map[string]any` | Yes | A reference to a teammate |
| `timestamp` | `string` | Yes | ISO8601 timestamp when the event occurred |
| `type` | `string` | Yes | The type of handling event |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.HandlingEvent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HandlingEventEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HelpCenterEntity

```go
helpCenter := client.HelpCenter(nil)
fmt.Println(helpCenter.GetName()) // "help_center"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ar` | `map[string]any` | No | The content of the group in Arabic |
| `bg` | `map[string]any` | No | The content of the group in Bulgarian |
| `bs` | `map[string]any` | No | The content of the group in Bosnian |
| `ca` | `map[string]any` | No | The content of the group in Catalan |
| `created_at` | `int` | No | The time when the Help Center was created. |
| `cs` | `map[string]any` | No | The content of the group in Czech |
| `custom_domain` | `string` | No | Custom domain configured for the help center |
| `da` | `map[string]any` | No | The content of the group in Danish |
| `de` | `map[string]any` | No | The content of the group in German |
| `default` | `bool` | No | Whether this help center is the default for the workspace. |
| `description` | `string` | No | The description of the collection. |
| `display_name` | `string` | No | The display name of the Help Center only seen by teammates. |
| `el` | `map[string]any` | No | The content of the group in Greek |
| `en` | `map[string]any` | No | The content of the group in English |
| `es` | `map[string]any` | No | The content of the group in Spanish |
| `et` | `map[string]any` | No | The content of the group in Estonian |
| `fi` | `map[string]any` | No | The content of the group in Finnish |
| `fr` | `map[string]any` | No | The content of the group in French |
| `from_url` | `string` | No | The source URL that is redirected. |
| `he` | `map[string]any` | No | The content of the group in Hebrew |
| `help_center_id` | `string` | No | The unique identifier for the help center the redirect belongs to. |
| `hr` | `map[string]any` | No | The content of the group in Croatian |
| `hu` | `map[string]any` | No | The content of the group in Hungarian |
| `id` | `map[string]any` | No | The content of the group in Indonesian |
| `identifier` | `string` | No | The identifier of the Help Center. |
| `it` | `map[string]any` | No | The content of the group in Italian |
| `ja` | `map[string]any` | No | The content of the group in Japanese |
| `ko` | `map[string]any` | No | The content of the group in Korean |
| `locale` | `string` | No | The locale of the redirect's target. |
| `locales` | `[]any` | No | The locales in which the help center is available. |
| `lt` | `map[string]any` | No | The content of the group in Lithuanian |
| `lv` | `map[string]any` | No | The content of the group in Latvian |
| `mn` | `map[string]any` | No | The content of the group in Mongolian |
| `name` | `string` | No | The name of the collection. |
| `nb` | `map[string]any` | No | The content of the group in Norwegian |
| `nl` | `map[string]any` | No | The content of the group in Dutch |
| `parent_id` | `string` | No | The id of the parent collection. |
| `pl` | `map[string]any` | No | The content of the group in Polish |
| `pt` | `map[string]any` | No | The content of the group in Portuguese (Portugal) |
| `ptBR` | `map[string]any` | No | The content of the group in Portuguese (Brazil) |
| `ro` | `map[string]any` | No | The content of the group in Romanian |
| `ru` | `map[string]any` | No | The content of the group in Russian |
| `sl` | `map[string]any` | No | The content of the group in Slovenian |
| `sr` | `map[string]any` | No | The content of the group in Serbian |
| `sv` | `map[string]any` | No | The content of the group in Swedish |
| `target_id` | `string` | No | The unique identifier of the target article or collection. |
| `target_type` | `string` | No | The type of the redirect target. |
| `tr` | `map[string]any` | No | The content of the group in Turkish |
| `translated_content` | `map[string]any` | No | The Translated Content of an Group. |
| `type` | `string` | No | The type of object - group_translated_content. |
| `updated_at` | `int` | No | The time when the Help Center was last updated. |
| `url` | `string` | No | The URL for the help center, if you have a custom domain then this will show the URL using the custom domain. |
| `vi` | `map[string]any` | No | The content of the group in Vietnamese |
| `website_turned_on` | `bool` | No | Whether the Help Center is turned on or not. |
| `workspace_id` | `string` | No | The id of the workspace which the Help Center belongs to. |
| `zhCN` | `map[string]any` | No | The content of the group in Chinese (China) |
| `zhTW` | `map[string]any` | No | The content of the group in Chinese (Taiwan) |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.HelpCenter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.HelpCenter(nil).Load(map[string]any{"collection_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.HelpCenter(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.HelpCenter(nil).Update(map[string]any{
    "collection_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.HelpCenter(nil).Remove(map[string]any{"collection_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HelpCenterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InternalArticleEntity

```go
internalArticle := client.InternalArticle(nil)
fmt.Println(internalArticle.GetName()) // "internal_article"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `bool` | No | Whether the internal article is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | No | Whether the internal article is available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | No | Whether the internal article is available for AI Sales Agent. |
| `audience_ids` | `[]any` | No | The list of audience IDs this internal article is targeted to for Fin AI Agent. |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.InternalArticle(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.InternalArticle(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InternalArticleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InternalArticleSearchEntity

```go
internalArticleSearch := client.InternalArticleSearch(nil)
fmt.Println(internalArticleSearch.GetName()) // "internal_article_search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | No | An object containing the results of the search. |
| `pages` | `map[string]any` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | No | The total number of Internal Articles matching the search query |
| `type` | `string` | No | The type of the object - `list`. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.InternalArticleSearch(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InternalArticleSearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IpAllowlistEntity

```go
ipAllowlist := client.IpAllowlist(nil)
fmt.Println(ipAllowlist.GetName()) // "ip_allowlist"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | No | Whether the IP allowlist is enabled for the workspace. |
| `ip_allowlist` | `[]any` | No | List of allowed IP addresses and/or IP ranges in CIDR notation. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IpAllowlist(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IpAllowlist(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IpAllowlistEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## JobEntity

```go
job := client.Job(nil)
fmt.Println(job.GetName()) // "job"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Job(nil).Load(map[string]any{"job_id": "job_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Job(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `JobEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MacroEntity

```go
macro := client.Macro(nil)
fmt.Println(macro.GetName()) // "macro"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_on` | `[]any` | No | Where the macro is available for use. |
| `body` | `string` | No | The body of the macro in HTML format with placeholders transformed to XML-like format. |
| `body_text` | `string` | No | The plain text version of the macro body with original Intercom placeholder format. |
| `created_at` | `string` | No | The time the macro was created in ISO 8601 format. |
| `id` | `string` | No | The unique identifier for the macro. |
| `name` | `string` | No | The name of the macro. |
| `type` | `string` | No | String representing the object's type. |
| `updated_at` | `string` | No | The time the macro was last updated in ISO 8601 format. |
| `visible_to` | `string` | No | Who can view this macro. |
| `visible_to_team_ids` | `[]any` | No | The team IDs that can view this macro when visible_to is set to specific_teams. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Macro(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Macro(nil).Load(map[string]any{"id": "macro_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MacroEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MergeHistoryEntity

```go
mergeHistory := client.MergeHistory(nil)
fmt.Println(mergeHistory.GetName()) // "merge_history"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `merged_at` | `int` | No | (Unix timestamp in seconds) The time when the merge occurred. |
| `source_contact_id` | `string` | No | The Intercom ID of the contact that was merged into this contact. |
| `source_contact_role` | `string` | No | The role of the contact that was merged in. |
| `type` | `string` | No | The type of object. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MergeHistory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MergeHistoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MessageEntity

```go
message := client.Message(nil)
fmt.Println(message.GetName()) // "message"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bcc` | `any` | No |  |
| `body` | `string` | Yes | The message body, which may contain HTML. |
| `cc` | `any` | No |  |
| `conversation_id` | `string` | No | The associated conversation_id |
| `create_conversation_without_contact_reply` | `bool` | No | Whether a conversation should be opened in the inbox for the message without the contact replying. |
| `created_at` | `int` | Yes | The time the conversation was created. |
| `from` | `map[string]any` | Yes | The sender of the message. |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Message(nil).Create(map[string]any{
    "body": "example_body",
    "created_at": 1,
    "from": map[string]any{},
    "id": "example_id",
    "message_type": "example_message_type",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NewsItemEntity

```go
newsItem := client.NewsItem(nil)
fmt.Println(newsItem.GetName()) // "news_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No | The news item body, which may contain HTML. |
| `cover_image_url` | `string` | No | URL of the image used as cover. |
| `created_at` | `int` | No | Timestamp for when the news item was created. |
| `deliver_silently` | `bool` | No | When set to true, the news item will appear in the messenger newsfeed without showing a notification badge. |
| `id` | `string` | No | The unique identifier for the news item which is given by Intercom. |
| `labels` | `[]any` | No | Label names displayed to users to categorize the news item. |
| `newsfeed_assignments` | `[]any` | No | A list of newsfeed_assignments to assign to the specified newsfeed. |
| `reactions` | `[]any` | No | Ordered list of emoji reactions to the news item. |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NewsItem(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.NewsItem(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NewsItem(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NewsItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NewsfeedEntity

```go
newsfeed := client.Newsfeed(nil)
fmt.Println(newsfeed.GetName()) // "newsfeed"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Newsfeed(nil).Load(map[string]any{"id": "newsfeed_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NewsfeedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NoteEntity

```go
note := client.Note(nil)
fmt.Println(note.GetName()) // "note"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `string` | No | The unique identifier of the admin creating the note. |
| `author` | `map[string]any` | No | Optional. |
| `body` | `string` | No | The body text of the note. |
| `company` | `map[string]any` | No | Represents the company that the note was created about. |
| `contact` | `map[string]any` | No | Represents the contact that the note was created about. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Note(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Note(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Note(nil).Create(map[string]any{
    "company_id": "example_company_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NoteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OfficeHourEntity

```go
officeHour := client.OfficeHour(nil)
fmt.Println(officeHour.GetName()) // "office_hour"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The time the schedule was created as a Unix timestamp. |
| `id` | `string` | No | The unique identifier for the office hours schedule. |
| `name` | `string` | Yes | The name of the office hours schedule. |
| `time_intervals` | `[]any` | Yes | The open intervals for the schedule. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OfficeHour(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OfficeHour(nil).Create(map[string]any{
    "name": "example_name",
    "time_intervals": []any{},
    "time_zone_name": "example_time_zone_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.OfficeHour(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OfficeHourEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OfficeHoursExceptionEntity

```go
officeHoursException := client.OfficeHoursException(nil)
fmt.Println(officeHoursException.GetName()) // "office_hours_exception"
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
| `time_intervals` | `[]any` | No | The open intervals for the exception date. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OfficeHoursException(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OfficeHoursException(nil).Load(map[string]any{"id": "office_hours_exception_id", "office_hours_schedule_id": "office_hours_schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OfficeHoursException(nil).Create(map[string]any{
    "office_hours_schedule_id": "example_office_hours_schedule_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OfficeHoursException(nil).Update(map[string]any{
    "id": "office_hours_exception_id",
    "office_hours_schedule_id": "office_hours_schedule_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OfficeHoursExceptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OfficeHoursScheduleEntity

```go
officeHoursSchedule := client.OfficeHoursSchedule(nil)
fmt.Println(officeHoursSchedule.GetName()) // "office_hours_schedule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The time the schedule was created as a Unix timestamp. |
| `id` | `string` | No | The unique identifier for the office hours schedule. |
| `name` | `string` | No | The name of the office hours schedule. |
| `time_intervals` | `[]any` | No | The open intervals that make up the weekly schedule. |
| `time_zone_name` | `string` | No | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | `bool` | No | Whether the schedule is open 24/7. |
| `type` | `string` | No | The type of the object - always `office_hours_schedule`. |
| `updated_at` | `int` | No | The time the schedule was last updated as a Unix timestamp. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OfficeHoursSchedule(nil).Load(map[string]any{"id": "office_hours_schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OfficeHoursSchedule(nil).Update(map[string]any{
    "id": "office_hours_schedule_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OfficeHoursScheduleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaginatedEntity

```go
paginated := client.Paginated(nil)
fmt.Println(paginated.GetName()) // "paginated"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No | An array of Objects |
| `pages` | `map[string]any` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | No | A count of the total number of objects. |
| `type` | `string` | No | The type of object |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Paginated(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaginatedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PhoneSwitchEntity

```go
phoneSwitch := client.PhoneSwitch(nil)
fmt.Println(phoneSwitch.GetName()) // "phone_switch"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_attributes` | `map[string]any` | No | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `phone` | `string` | No | Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger. |
| `type` | `string` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `custom_attributes` | - |
| `phone` | Yes |
| `type` | - |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PhoneSwitch(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PhoneSwitchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReportingDataEntity

```go
reportingData := client.ReportingData(nil)
fmt.Println(reportingData.GetName()) // "reporting_data"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `download_expires_at` | `string` | No |  |
| `download_url` | `string` | No |  |
| `job_identifier` | `string` | No |  |
| `status` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ReportingData(nil).Load(map[string]any{"app_id": "app_id", "job_identifier": "job_identifier"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReportingDataEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReportingDataExportEntity

```go
reportingDataExport := client.ReportingDataExport(nil)
fmt.Println(reportingDataExport.GetName()) // "reporting_data_export"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute_ids` | `[]any` | Yes |  |
| `attributes` | `[]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ReportingDataExport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ReportingDataExport(nil).Create(map[string]any{
    "attribute_ids": []any{},
    "dataset_id": "example_dataset_id",
    "end_time": 1,
    "start_time": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReportingDataExportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SegmentEntity

```go
segment := client.Segment(nil)
fmt.Println(segment.GetName()) // "segment"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Segment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Segment(nil).Load(map[string]any{"id": "segment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SegmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SideConversationEntity

```go
sideConversation := client.SideConversation(nil)
fmt.Println(sideConversation.GetName()) // "side_conversation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversation_parts` | `[]any` | No | The conversation parts (messages) in this side conversation. |
| `side_conversation_id` | `string` | No | The unique identifier for the side conversation. |
| `total_count` | `int` | No | The total number of conversation parts in this side conversation. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SideConversation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SideConversationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionEntity

```go
subscription := client.Subscription(nil)
fmt.Println(subscription.GetName()) // "subscription"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent_type` | `string` | No | Describes the type of consent. |
| `content_types` | `[]any` | No | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `map[string]any` | No | A translation object contains the localised details of a subscription type. |
| `id` | `string` | No | The unique identifier representing the subscription type. |
| `state` | `string` | No | The state of the subscription type. |
| `translations` | `[]any` | No | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Subscription(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Subscription(nil).Create(map[string]any{
    "contact_id": "example_contact_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Subscription(nil).Remove(map[string]any{"contact_id": "contact_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionTypeEntity

```go
subscriptionType := client.SubscriptionType(nil)
fmt.Println(subscriptionType.GetName()) // "subscription_type"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent_type` | `string` | No | Describes the type of consent. |
| `content_types` | `[]any` | No | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `map[string]any` | No | A translation object contains the localised details of a subscription type. |
| `id` | `string` | No | The unique identifier representing the subscription type. |
| `state` | `string` | No | The state of the subscription type. |
| `translations` | `[]any` | No | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `type` | `string` | No | The type of the object - subscription |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubscriptionType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionTypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TagEntity

```go
tag := client.Tag(nil)
fmt.Println(tag.GetName()) // "tag"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `string` | No | Optional id of the teammate to attribute the tagging to. |
| `applied_at` | `int` | No | The time when the tag was applied to the object. |
| `applied_by` | `map[string]any` | No | The admin who applied the tag. |
| `companies` | `[]any` | No |  |
| `id` | `string` | No | The id of the tag |
| `name` | `string` | No | The name of the tag |
| `type` | `string` | No | value is "tag" |
| `users` | `[]any` | No |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Tag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Tag(nil).Load(map[string]any{"id": "tag_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Tag(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Tag(nil).Remove(map[string]any{"id": "tag_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamEntity

```go
team := client.Team(nil)
fmt.Println(team.GetName()) // "team"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_ids` | `[]any` | No | The list of admin IDs that are a part of the team. |
| `admin_priority_level` | `map[string]any` | No | Admin priority levels for the team |
| `assignment_limit` | `int` | No | The assignment limit for the team. |
| `distribution_method` | `string` | No | Describes how assignments are distributed among the team members |
| `id` | `string` | No | The id of the team |
| `name` | `string` | No | The name of the team |
| `type` | `string` | No | Value is always "team" |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Team(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Team(nil).Load(map[string]any{"id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamMetricListEntity

```go
teamMetricList := client.TeamMetricList(nil)
fmt.Println(teamMetricList.GetName()) // "team_metric_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TeamMetricList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamMetricListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TicketEntity

```go
ticket := client.Ticket(nil)
fmt.Println(ticket.GetName()) // "ticket"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_assignee_id` | `int` | No | The id representing the admin assigned to the ticket. |
| `attributes` | `map[string]any` | No | The attributes set on the ticket. |
| `category` | `string` | No | Category of the Ticket. |
| `contacts` | `map[string]any` | No | The list of contacts affected by a ticket. |
| `created_at` | `int` | No | The time the ticket was created as a UTC Unix timestamp. |
| `id` | `string` | No | The unique identifier for the ticket which is given by Intercom. |
| `is_shared` | `bool` | No | Whether or not the ticket is shared with the customer. |
| `linked_objects` | `map[string]any` | No | An object containing metadata about linked conversations and linked tickets. |
| `open` | `bool` | No | Whether or not the ticket is open. |
| `previous_ticket_state_id` | `string` | No | The ID of the previous ticket state from the most recent state change. |
| `skip_notifications` | `bool` | No | Option to disable notifications when a Ticket is created. |
| `snoozed_until` | `int` | No | The time the ticket will be snoozed until as a UTC Unix timestamp. |
| `team_assignee_id` | `int` | No | The id representing the team assigned to the ticket. |
| `ticket_attributes` | `map[string]any` | No | An object containing the different attributes associated to the ticket as key-value pairs. |
| `ticket_id` | `string` | No | The ID of the Ticket used in the Intercom Inbox and Messenger. |
| `ticket_parts` | `map[string]any` | No | A list of Ticket Part objects for each note and event in the ticket. |
| `ticket_state` | `map[string]any` | No | A ticket state, used to define the state of a ticket. |
| `ticket_state_id` | `string` | No | The ID of the ticket state associated with the ticket type. |
| `ticket_type` | `map[string]any` | No | A ticket type, used to define the data fields to be captured in a ticket. |
| `ticket_type_id` | `string` | Yes | The ID of the type of ticket you want to convert the conversation to |
| `type` | `string` | No | Always ticket |
| `updated_at` | `int` | No | The last time the ticket was updated as a UTC Unix timestamp. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Ticket(nil).Load(map[string]any{"id": "ticket_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Ticket(nil).Create(map[string]any{
    "ticket_type_id": "example_ticket_type_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Ticket(nil).Update(map[string]any{
    "id": "ticket_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Ticket(nil).Remove(map[string]any{"id": "ticket_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TicketEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TicketListEntity

```go
ticketList := client.TicketList(nil)
fmt.Println(ticketList.GetName()) // "ticket_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pages` | `map[string]any` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `map[string]any` | No |  |
| `query` | `any` | Yes |  |
| `tickets` | `[]any` | No | The list of ticket objects |
| `total_count` | `int` | No | A count of the total number of objects. |
| `type` | `string` | No | Always ticket.list |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TicketList(nil).Create(map[string]any{
    "query": "example_query",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TicketListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TicketReplyEntity

```go
ticketReply := client.TicketReply(nil)
fmt.Println(ticketReply.GetName()) // "ticket_reply"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `[]any` | No | A list of attachments for the part. |
| `author` | `map[string]any` | No | The author that wrote or triggered the part. |
| `body` | `string` | No | The message body, which may contain HTML. |
| `created_at` | `int` | No | The time the note was created. |
| `id` | `string` | No | The id representing the part. |
| `part_type` | `string` | No | Type of the part |
| `redacted` | `bool` | No | Whether or not the ticket part has been redacted. |
| `skip_notifications` | `bool` | No | Option to disable notifications when replying to a Ticket. |
| `type` | `string` | No | Always ticket_part |
| `updated_at` | `int` | No | The last time the note was updated. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TicketReply(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TicketReplyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TicketStateEntity

```go
ticketState := client.TicketState(nil)
fmt.Println(ticketState.GetName()) // "ticket_state"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | No | Whether the ticket state is archived |
| `category` | `string` | No | The category of the ticket state |
| `external_label` | `string` | No | The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal. |
| `id` | `string` | No | The id of the ticket state |
| `internal_label` | `string` | No | The state the ticket is currently in, in a human readable form - visible in Intercom |
| `ticket_types` | `map[string]any` | No | A list of ticket types associated with a given ticket state. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TicketState(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TicketStateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TicketTypeEntity

```go
ticketType := client.TicketType(nil)
fmt.Println(ticketType.GetName()) // "ticket_type"
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
| `ticket_states` | `map[string]any` | No | A list of ticket states associated with a given ticket type. |
| `ticket_type_attributes` | `map[string]any` | No | A list of attributes associated with a given ticket type. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TicketType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TicketType(nil).Load(map[string]any{"id": "ticket_type_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TicketType(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TicketType(nil).Update(map[string]any{
    "id": "ticket_type_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TicketTypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TicketTypeAttributeEntity

```go
ticketTypeAttribute := client.TicketTypeAttribute(nil)
fmt.Println(ticketTypeAttribute.GetName()) // "ticket_type_attribute"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TicketTypeAttribute(nil).Create(map[string]any{
    "id": "example_id",
    "data_type": "example_data_type",
    "description": "example_description",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TicketTypeAttribute(nil).Update(map[string]any{
    "id": "id",
    "ticket_type_id": "ticket_type_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TicketTypeAttributeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VisitorEntity

```go
visitor := client.Visitor(nil)
fmt.Println(visitor.GetName()) // "visitor"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anonymous` | `bool` | No | Identifies if this visitor is anonymous. |
| `app_id` | `string` | No | The id of the app the visitor is associated with. |
| `avatar` | `map[string]any` | No |  |
| `companies` | `map[string]any` | No |  |
| `created_at` | `int` | No | The time the Visitor was added to Intercom. |
| `custom_attributes` | `map[string]any` | No | The custom attributes you have set on the Visitor. |
| `do_not_track` | `bool` | No | Identifies if this visitor has do not track enabled. |
| `email` | `string` | No | The email of the visitor. |
| `has_hard_bounced` | `bool` | No | Identifies if this visitor has had a hard bounce. |
| `id` | `string` | No | The Intercom defined id representing the Visitor. |
| `las_request_at` | `int` | No | The time the Lead last recorded making a request. |
| `location_data` | `map[string]any` | No |  |
| `marked_email_as_spam` | `bool` | No | Identifies if this visitor has marked an email as spam. |
| `name` | `string` | No | The name of the visitor. |
| `owner_id` | `string` | No | The id of the admin that owns the Visitor. |
| `phone` | `string` | No | The phone number of the visitor. |
| `pseudonym` | `string` | No | The pseudonym of the visitor. |
| `referrer` | `string` | No | The referer of the visitor. |
| `remote_created_at` | `int` | No | The time the Visitor was added to Intercom. |
| `segments` | `map[string]any` | No |  |
| `session_count` | `int` | No | The number of sessions the Visitor has had. |
| `signed_up_at` | `int` | No | The time the Visitor signed up for your product. |
| `social_profiles` | `map[string]any` | No |  |
| `tags` | `map[string]any` | No |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Visitor(nil).Load(map[string]any{"user_id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Visitor(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VisitorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WhatsappMessageStatusEntity

```go
whatsappMessageStatus := client.WhatsappMessageStatus(nil)
fmt.Println(whatsappMessageStatus.GetName()) // "whatsapp_message_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `details` | `string` | No | Detailed error information |
| `message` | `string` | No | Error message |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WhatsappMessageStatus(nil).Load(map[string]any{"message_id": "message_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WhatsappMessageStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WhatsappMessageStatusListEntity

```go
whatsappMessageStatusList := client.WhatsappMessageStatusList(nil)
fmt.Println(whatsappMessageStatusList.GetName()) // "whatsapp_message_status_list"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WhatsappMessageStatusList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WhatsappMessageStatusListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkflowEntity

```go
workflow := client.Workflow(nil)
fmt.Println(workflow.GetName()) // "workflow"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attributes` | `[]any` | No | Custom attributes defined for this workflow. |
| `created_at` | `string` | No | When the workflow was created. |
| `description` | `string` | No | The description of the workflow. |
| `embedded_rules` | `[]any` | No | Rules embedded within the workflow steps. |
| `id` | `string` | No | The unique identifier for the workflow. |
| `preferred_devices` | `[]any` | No | The preferred devices for this workflow. |
| `snapshot` | `map[string]any` | No | The current snapshot of workflow steps and configuration. |
| `state` | `string` | No | The current state of the workflow. |
| `target_channels` | `[]any` | No | The channels this workflow targets. |
| `targeting` | `map[string]any` | No | The targeting rules for this workflow. |
| `title` | `string` | No | The title of the workflow. |
| `trigger_type` | `string` | No | The type of trigger that starts this workflow. |
| `updated_at` | `string` | No | When the workflow was last updated. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Workflow(nil).Load(map[string]any{"id": "workflow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `GetName() string`

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

```go
client := sdk.NewIntercomSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

