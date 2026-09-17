# Intercom TypeScript SDK Reference

Complete API reference for the Intercom TypeScript SDK.


## IntercomSDK

### Constructor

```ts
new IntercomSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IntercomSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = IntercomSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `IntercomSDK` instance in test mode.


### Instance Methods

#### `ActivityLog(data?: object)`

Create a new `ActivityLog` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActivityLogEntity` instance.

#### `ActivityLogEventType(data?: object)`

Create a new `ActivityLogEventType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActivityLogEventTypeEntity` instance.

#### `ActivityLogList(data?: object)`

Create a new `ActivityLogList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActivityLogListEntity` instance.

#### `Admin(data?: object)`

Create a new `Admin` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminEntity` instance.

#### `AdminWithApp(data?: object)`

Create a new `AdminWithApp` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminWithAppEntity` instance.

#### `AiCall(data?: object)`

Create a new `AiCall` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiCallEntity` instance.

#### `AiContent(data?: object)`

Create a new `AiContent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiContentEntity` instance.

#### `Article(data?: object)`

Create a new `Article` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ArticleEntity` instance.

#### `ArticleSearch(data?: object)`

Create a new `ArticleSearch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ArticleSearchEntity` instance.

#### `ArticleVersion(data?: object)`

Create a new `ArticleVersion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ArticleVersionEntity` instance.

#### `ArticleVersionList(data?: object)`

Create a new `ArticleVersionList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ArticleVersionListEntity` instance.

#### `Audience(data?: object)`

Create a new `Audience` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AudienceEntity` instance.

#### `AwayStatusReason(data?: object)`

Create a new `AwayStatusReason` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AwayStatusReasonEntity` instance.

#### `Banner(data?: object)`

Create a new `Banner` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BannerEntity` instance.

#### `BannerDismiss(data?: object)`

Create a new `BannerDismiss` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BannerDismissEntity` instance.

#### `Brand(data?: object)`

Create a new `Brand` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BrandEntity` instance.

#### `Call(data?: object)`

Create a new `Call` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallEntity` instance.

#### `Company(data?: object)`

Create a new `Company` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompanyEntity` instance.

#### `CompanyAttachedContact(data?: object)`

Create a new `CompanyAttachedContact` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompanyAttachedContactEntity` instance.

#### `CompanyAttachedSegment(data?: object)`

Create a new `CompanyAttachedSegment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompanyAttachedSegmentEntity` instance.

#### `CompanyList(data?: object)`

Create a new `CompanyList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompanyListEntity` instance.

#### `CompanyScroll(data?: object)`

Create a new `CompanyScroll` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompanyScrollEntity` instance.

#### `Contact(data?: object)`

Create a new `Contact` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContactEntity` instance.

#### `ContactAttachedCompany(data?: object)`

Create a new `ContactAttachedCompany` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContactAttachedCompanyEntity` instance.

#### `ContactList(data?: object)`

Create a new `ContactList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContactListEntity` instance.

#### `ContactSegment(data?: object)`

Create a new `ContactSegment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContactSegmentEntity` instance.

#### `Content(data?: object)`

Create a new `Content` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContentEntity` instance.

#### `ContentImportSource(data?: object)`

Create a new `ContentImportSource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContentImportSourceEntity` instance.

#### `ContentSearch(data?: object)`

Create a new `ContentSearch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContentSearchEntity` instance.

#### `ContentSnippet(data?: object)`

Create a new `ContentSnippet` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContentSnippetEntity` instance.

#### `Conversation(data?: object)`

Create a new `Conversation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationEntity` instance.

#### `ConversationAttribute(data?: object)`

Create a new `ConversationAttribute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationAttributeEntity` instance.

#### `ConversationAttributeList(data?: object)`

Create a new `ConversationAttributeList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationAttributeListEntity` instance.

#### `ConversationList(data?: object)`

Create a new `ConversationList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationListEntity` instance.

#### `ConversationParticipant(data?: object)`

Create a new `ConversationParticipant` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationParticipantEntity` instance.

#### `CustomObjectInstance(data?: object)`

Create a new `CustomObjectInstance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomObjectInstanceEntity` instance.

#### `Data(data?: object)`

Create a new `Data` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DataEntity` instance.

#### `DataAttribute(data?: object)`

Create a new `DataAttribute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DataAttributeEntity` instance.

#### `DataConnector(data?: object)`

Create a new `DataConnector` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DataConnectorEntity` instance.

#### `DataConnectorExecutionResult(data?: object)`

Create a new `DataConnectorExecutionResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DataConnectorExecutionResultEntity` instance.

#### `DataConnectorExecutionResultList(data?: object)`

Create a new `DataConnectorExecutionResultList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DataConnectorExecutionResultListEntity` instance.

#### `DataEvent(data?: object)`

Create a new `DataEvent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DataEventEntity` instance.

#### `DataEventSummary(data?: object)`

Create a new `DataEventSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DataEventSummaryEntity` instance.

#### `DataExport(data?: object)`

Create a new `DataExport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DataExportEntity` instance.

#### `Deleted(data?: object)`

Create a new `Deleted` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedEntity` instance.

#### `DeletedArticleObject(data?: object)`

Create a new `DeletedArticleObject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedArticleObjectEntity` instance.

#### `DeletedCompanyObject(data?: object)`

Create a new `DeletedCompanyObject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedCompanyObjectEntity` instance.

#### `DeletedDataConnectorObject(data?: object)`

Create a new `DeletedDataConnectorObject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedDataConnectorObjectEntity` instance.

#### `DeletedInternalArticleObject(data?: object)`

Create a new `DeletedInternalArticleObject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedInternalArticleObjectEntity` instance.

#### `DeletedObject(data?: object)`

Create a new `DeletedObject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeletedObjectEntity` instance.

#### `Email(data?: object)`

Create a new `Email` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailEntity` instance.

#### `ExternalPage(data?: object)`

Create a new `ExternalPage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExternalPageEntity` instance.

#### `FinAgent(data?: object)`

Create a new `FinAgent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FinAgentEntity` instance.

#### `HandlingEvent(data?: object)`

Create a new `HandlingEvent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HandlingEventEntity` instance.

#### `HelpCenter(data?: object)`

Create a new `HelpCenter` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HelpCenterEntity` instance.

#### `InternalArticle(data?: object)`

Create a new `InternalArticle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InternalArticleEntity` instance.

#### `InternalArticleSearch(data?: object)`

Create a new `InternalArticleSearch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InternalArticleSearchEntity` instance.

#### `IpAllowlist(data?: object)`

Create a new `IpAllowlist` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IpAllowlistEntity` instance.

#### `Job(data?: object)`

Create a new `Job` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JobEntity` instance.

#### `Macro(data?: object)`

Create a new `Macro` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MacroEntity` instance.

#### `MergeHistory(data?: object)`

Create a new `MergeHistory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MergeHistoryEntity` instance.

#### `Message(data?: object)`

Create a new `Message` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MessageEntity` instance.

#### `NewsItem(data?: object)`

Create a new `NewsItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NewsItemEntity` instance.

#### `Newsfeed(data?: object)`

Create a new `Newsfeed` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NewsfeedEntity` instance.

#### `Note(data?: object)`

Create a new `Note` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NoteEntity` instance.

#### `OfficeHour(data?: object)`

Create a new `OfficeHour` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OfficeHourEntity` instance.

#### `OfficeHoursException(data?: object)`

Create a new `OfficeHoursException` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OfficeHoursExceptionEntity` instance.

#### `OfficeHoursSchedule(data?: object)`

Create a new `OfficeHoursSchedule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OfficeHoursScheduleEntity` instance.

#### `Paginated(data?: object)`

Create a new `Paginated` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginatedEntity` instance.

#### `PhoneSwitch(data?: object)`

Create a new `PhoneSwitch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PhoneSwitchEntity` instance.

#### `ReportingData(data?: object)`

Create a new `ReportingData` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReportingDataEntity` instance.

#### `ReportingDataExport(data?: object)`

Create a new `ReportingDataExport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReportingDataExportEntity` instance.

#### `Segment(data?: object)`

Create a new `Segment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SegmentEntity` instance.

#### `SideConversation(data?: object)`

Create a new `SideConversation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SideConversationEntity` instance.

#### `Subscription(data?: object)`

Create a new `Subscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionEntity` instance.

#### `SubscriptionType(data?: object)`

Create a new `SubscriptionType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionTypeEntity` instance.

#### `Tag(data?: object)`

Create a new `Tag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TagEntity` instance.

#### `Team(data?: object)`

Create a new `Team` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamEntity` instance.

#### `TeamMetricList(data?: object)`

Create a new `TeamMetricList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamMetricListEntity` instance.

#### `Ticket(data?: object)`

Create a new `Ticket` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TicketEntity` instance.

#### `TicketList(data?: object)`

Create a new `TicketList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TicketListEntity` instance.

#### `TicketReply(data?: object)`

Create a new `TicketReply` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TicketReplyEntity` instance.

#### `TicketState(data?: object)`

Create a new `TicketState` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TicketStateEntity` instance.

#### `TicketType(data?: object)`

Create a new `TicketType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TicketTypeEntity` instance.

#### `TicketTypeAttribute(data?: object)`

Create a new `TicketTypeAttribute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TicketTypeAttributeEntity` instance.

#### `Visitor(data?: object)`

Create a new `Visitor` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VisitorEntity` instance.

#### `WhatsappMessageStatus(data?: object)`

Create a new `WhatsappMessageStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WhatsappMessageStatusEntity` instance.

#### `WhatsappMessageStatusList(data?: object)`

Create a new `WhatsappMessageStatusList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WhatsappMessageStatusListEntity` instance.

#### `Workflow(data?: object)`

Create a new `Workflow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `IntercomSDK.test()`.

**Returns:** `IntercomSDK` instance in test mode.


---

## ActivityLogEntity

```ts
const activity_log = client.ActivityLog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_description` | `string` | No | A sentence or two describing the activity. |
| `activity_type` | `string` | No |  |
| `created_at` | `number` | No | The time the activity was created. |
| `id` | `string` | No | The id representing the activity. |
| `metadata` | `Record<string, any>` | No | Additional data provided about Admin activity. |
| `performed_by` | `Record<string, any>` | No | Details about the Admin involved in the activity. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ActivityLog().list({ created_at_after: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActivityLogEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActivityLogEventTypeEntity

```ts
const activity_log_event_type = client.ActivityLogEventType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `event_types` | `any[]` | No | An array of activity log event type strings. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ActivityLogEventType().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActivityLogEventTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActivityLogListEntity

```ts
const activity_log_list = client.ActivityLogList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_logs` | `any[]` | No | An array of activity logs |
| `created_at_after` | `number` | Yes | The start date that you request data for. |
| `created_at_before` | `number` | No | The end date that you request data for. |
| `event_types` | `any[]` | No | An optional list of event types to filter activity logs by. |
| `page` | `number` | No | The page number of results to return. |
| `pages` | `Record<string, any>` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `per_page` | `number` | No | The number of results per page. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ActivityLogList().create({
  created_at_after: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActivityLogListEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminEntity

```ts
const admin = client.Admin()
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
| `role` | `Record<string, any>` | No | The role assigned to this admin. |
| `team_ids` | `any[]` | No | This object represents the avatar associated with the admin. |
| `team_priority_level` | `Record<string, any>` | No | Admin priority levels for teams |
| `type` | `string` | No | String representing the object's type. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `away` | `/admins/{admin_id}/away` | `client.Admin().update({ $action: 'away', ... })` |

An action returns that action's OWN response, which is not necessarily a
Admin record — check the API definition for its shape.

```ts
const result = await client.Admin().update({
  $action: 'away',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Admin().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Admin().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Admin().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminWithAppEntity

```ts
const admin_with_app = client.AdminWithApp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `Record<string, any>` | No | App that the admin belongs to. |
| `avatar` | `Record<string, any>` | No | This object represents the avatar associated with the admin. |
| `away_mode_enabled` | `boolean` | No | Identifies if this admin is currently set in away mode. |
| `away_mode_reassign` | `boolean` | No | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `email` | `string` | No | The email of the admin. |
| `email_verified` | `boolean` | No | Identifies if this admin's email is verified. |
| `has_inbox_seat` | `boolean` | No | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `id` | `string` | No | The id representing the admin. |
| `job_title` | `string` | No | The job title of the admin. |
| `name` | `string` | No | The name of the admin. |
| `team_ids` | `any[]` | No | This is a list of ids of the teams that this admin is part of. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AdminWithApp().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminWithAppEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiCallEntity

```ts
const ai_call = client.AiCall()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `number` | No | The workspace identifier |
| `call_id` | `string` | Yes | External call identifier from the call provider |
| `call_summary` | `string` | No | Summary of the call conversation, truncated to 256 characters. |
| `call_transcript` | `any[]` | No | Array of transcript entries for the call |
| `data` | `Record<string, any>` | No | Additional metadata about the call |
| `external_call_id` | `string` | No | The external call identifier from the call provider |
| `id` | `number` | No | The unique identifier for the external reference |
| `intent` | `any[]` | No | Array of intent classifications for the call |
| `intercom_call_id` | `string` | No | The Intercom call identifier, if the call has been matched |
| `intercom_conversation_id` | `string` | No | The Intercom conversation identifier, if a conversation has been created |
| `phone_number` | `string` | Yes | Phone number in E.164 format for the call |
| `source` | `string` | No | Source of the call. |
| `status` | `string` | No | Status of the call. |
| `user_phone_number` | `string` | No | Phone number in E.164 format for the call |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AiCall().create({
  call_id: 'example_call_id',
  phone_number: 'example_phone_number',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AiCall().load({ conversation_id: 'conversation_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiCallEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiContentEntity

```ts
const ai_content = client.AiContent()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AiContent().remove({ source_id: 'source_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiContentEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ArticleEntity

```ts
const article = client.Article()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `boolean` | No | Whether the article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `boolean` | No | Whether the article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `boolean` | No | Whether the article should be available for AI Sales Agent. |
| `audience_ids` | `any[]` | No | The list of audience IDs to assign to this article for Fin AI Agent targeting. |
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
| `parent_ids` | `any[]` | No | The ids of the article's parent collections or sections. |
| `parent_type` | `string` | No | The type of parent, which can either be a `collection` or `section`. |
| `reactions` | `number` | No | The number of total reactions the article has received. |
| `sad_reaction_percentage` | `number` | No | The percentage of sad reactions the article has received against |
| `scheduled_publish_at` | `string` | No | ISO 8601 timestamp at which to schedule a future publish of the article. |
| `scheduled_unpublish_at` | `string` | No | ISO 8601 timestamp at which to schedule a future unpublish of the article. |
| `state` | `string` | No | Whether the article will be `published` or will be a `draft`. |
| `tags` | `Record<string, any>` | No | A list of tags objects associated with a conversation |
| `title` | `string` | Yes | The title of the article.For multilingual articles, this will be the title of the default language's content. |
| `translated_content` | `Record<string, any>` | No | The Translated Content of an Article. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `draft_publish` | `/articles/{id}/draft/publish` | `client.Article().create({ $action: 'draft_publish', ... })` |
| `draft` | `/articles/{id}/draft` | `client.Article().list({ $action: 'draft', ... })` |
| `draft` | `/articles/{id}/draft` | `client.Article().update({ $action: 'draft', ... })` |

An action returns that action's OWN response, which is not necessarily a
Article record — check the API definition for its shape.

```ts
const result = await client.Article().create({
  $action: 'draft_publish',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Article().create({
  author_id: 1,
  title: 'example_title',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Article().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Article().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Article().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ArticleEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ArticleSearchEntity

```ts
const article_search = client.ArticleSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | No | An object containing the results of the search. |
| `pages` | `Record<string, any>` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `number` | No | The total number of Articles matching the search query |
| `type` | `string` | No | The type of the object - `list`. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ArticleSearch().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ArticleSearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ArticleVersionEntity

```ts
const article_version = client.ArticleVersion()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ArticleVersion().load({ id: 'article_version_id', article_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ArticleVersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ArticleVersionListEntity

```ts
const article_version_list = client.ArticleVersionList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `versions` | `/articles/{article_id}/versions` | `client.ArticleVersionList().list({ $action: 'versions', ... })` |

An action returns that action's OWN response, which is not necessarily a
ArticleVersionList record — check the API definition for its shape.

```ts
const result = await client.ArticleVersionList().list({
  $action: 'versions',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ArticleVersionList().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ArticleVersionListEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AudienceEntity

```ts
const audience = client.Audience()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | The time the audience was created as a Unix timestamp. |
| `id` | `string` | No | The unique identifier representing the audience. |
| `name` | `string` | No | The name of the audience. |
| `predicates` | `any[]` | No | The predicates that define which contacts belong to the audience. |
| `role_predicates` | `any[]` | No | Role-based predicates that further filter audience membership by contact role. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Audience().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Audience().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Audience().load({ id: 'audience_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Audience().remove({ id: 'audience_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Audience().update({
  id: 'audience_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AudienceEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AwayStatusReasonEntity

```ts
const away_status_reason = client.AwayStatusReason()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AwayStatusReason().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AwayStatusReasonEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BannerEntity

```ts
const banner = client.Banner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `Record<string, any>` | No | The action a contact can take on the banner, or `null` when the banner has no action. |
| `body` | `string` | No | The banner's body content as HTML. |
| `client_targeting` | `any[]` | No | Reserved for future use. |
| `created_at` | `number` | No | The time the contact's view of this banner was created. |
| `id` | `string` | No | The id of the banner. |
| `position` | `string` | No | Where the banner is positioned. |
| `show_dismiss_button` | `boolean` | No | Whether the banner should display a dismiss control. |
| `style` | `string` | No | How the banner is displayed. |
| `title` | `string` | No | The banner's title. |
| `type` | `string` | No | String representing the object's type. |
| `view_id` | `string` | No | The id of the contact's view of this banner. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Banner().list({ contact_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BannerEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BannerDismissEntity

```ts
const banner_dismiss = client.BannerDismiss()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dismissed` | `boolean` | No | Whether the banner view is dismissed. |
| `id` | `string` | No |  |
| `type` | `string` | No | String representing the object's type. |
| `view_id` | `string` | No | The id of the dismissed banner view. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BannerDismiss().create({
  contact_id: 'example_contact_id',
  id: 'example_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BannerDismissEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BrandEntity

```ts
const brand = client.Brand()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Brand().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Brand().load({ id: 'brand_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BrandEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallEntity

```ts
const call = client.Call()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `search` | `/calls/search` | `client.Call().create({ $action: 'search', ... })` |
| `recording` | `/calls/{call_id}/recording` | `client.Call().load({ $action: 'recording', ... })` |
| `transcript` | `/calls/{call_id}/transcript` | `client.Call().load({ $action: 'transcript', ... })` |

An action returns that action's OWN response, which is not necessarily a
Call record — check the API definition for its shape.

```ts
const result = await client.Call().create({
  $action: 'search',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Call().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Call().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Call().load({ id: 'call_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompanyEntity

```ts
const company = client.Company()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | No | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | No | The company id you have defined for the company. |
| `created_at` | `number` | No | The time the company was added in Intercom. |
| `custom_attributes` | `Record<string, any>` | No | The custom attributes you have set on the company. |
| `id` | `string` | No | The Intercom defined id representing the company. |
| `industry` | `string` | No | The industry that the company operates in. |
| `last_request_at` | `number` | No | The time the company last recorded making a request. |
| `monthly_spend` | `number` | No | How much revenue the company generates for your business. |
| `name` | `string` | No | The name of the company. |
| `notes` | `Record<string, any>` | No | The list of notes associated with the company |
| `plan` | `Record<string, any>` | No | The name of the plan you have associated with the company. |
| `remote_created_at` | `number` | No | The time the company was created by you. |
| `segments` | `Record<string, any>` | No | The list of segments associated with the company |
| `session_count` | `number` | No | How many sessions the company has recorded. |
| `size` | `number` | No | The number of employees in the company. |
| `tags` | `Record<string, any>` | No | The list of tags associated with the company |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Company().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Company().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Company().load({ id: 'company_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Company().remove({ id: 'company_id', contact_id: 'contact_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Company().update({
  id: 'company_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompanyEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompanyAttachedContactEntity

```ts
const company_attached_contact = client.CompanyAttachedContact()
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
| `avatar` | `Record<string, any>` | No |  |
| `browser` | `string` | No | The name of the browser which the contact is using. |
| `browser_language` | `string` | No | The language set by the browser which the contact is using. |
| `browser_version` | `string` | No | The version of the browser which the contact is using. |
| `companies` | `Record<string, any>` | No | An object with metadata about companies attached to a contact . |
| `created_at` | `number` | No | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `Record<string, any>` | No | The custom attributes which are set for the contact. |
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
| `location` | `Record<string, any>` | No | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `boolean` | No | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `any[]` | No | A list of contacts that were merged into this contact. |
| `name` | `string` | No | The contacts name. |
| `notes` | `Record<string, any>` | No | An object containing notes meta data about the notes that a contact has. |
| `os` | `string` | No | The operating system which the contact is using. |
| `owner_id` | `string` | No | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `string` | No | The contacts phone. |
| `role` | `string` | No | The role of the contact. |
| `signed_up_at` | `number` | No | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `Record<string, any>` | No | An object containing social profiles that a contact has. |
| `tags` | `Record<string, any>` | No | An object containing tags meta data about the tags that a contact has. |
| `type` | `string` | No | The type of object. |
| `unsubscribed_from_emails` | `boolean` | No | Whether the contact is unsubscribed from emails. |
| `updated_at` | `number` | No | (Unix timestamp in seconds) The time when the contact was last updated. |
| `workspace_id` | `string` | No | The id of the workspace which the contact belongs to. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CompanyAttachedContact().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompanyAttachedContactEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompanyAttachedSegmentEntity

```ts
const company_attached_segment = client.CompanyAttachedSegment()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CompanyAttachedSegment().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompanyAttachedSegmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompanyListEntity

```ts
const company_list = client.CompanyList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No | An array containing Company Objects. |
| `pages` | `Record<string, any>` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `number` | No | The total number of companies. |
| `type` | `string` | No | The type of object - `list`. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CompanyList().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompanyListEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompanyScrollEntity

```ts
const company_scroll = client.CompanyScroll()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | No | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | No | The company id you have defined for the company. |
| `created_at` | `number` | No | The time the company was added in Intercom. |
| `custom_attributes` | `Record<string, any>` | No | The custom attributes you have set on the company. |
| `id` | `string` | No | The Intercom defined id representing the company. |
| `industry` | `string` | No | The industry that the company operates in. |
| `last_request_at` | `number` | No | The time the company last recorded making a request. |
| `monthly_spend` | `number` | No | How much revenue the company generates for your business. |
| `name` | `string` | No | The name of the company. |
| `notes` | `Record<string, any>` | No | The list of notes associated with the company |
| `plan` | `Record<string, any>` | No |  |
| `remote_created_at` | `number` | No | The time the company was created by you. |
| `segments` | `Record<string, any>` | No | The list of segments associated with the company |
| `session_count` | `number` | No | How many sessions the company has recorded. |
| `size` | `number` | No | The number of employees in the company. |
| `tags` | `Record<string, any>` | No | The list of tags associated with the company |
| `type` | `string` | No | Value is `company` |
| `updated_at` | `number` | No | The last time the company was updated. |
| `user_count` | `number` | No | The number of users in the company. |
| `website` | `string` | No | The URL for the company website. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CompanyScroll().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompanyScrollEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContactEntity

```ts
const contact = client.Contact()
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
| `avatar` | `Record<string, any>` | No |  |
| `browser` | `string` | No | The name of the browser which the contact is using. |
| `browser_language` | `string` | No | The language set by the browser which the contact is using. |
| `browser_version` | `string` | No | The version of the browser which the contact is using. |
| `companies` | `Record<string, any>` | No | An object with metadata about companies attached to a contact . |
| `created_at` | `number` | No | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `Record<string, any>` | No | The custom attributes which are set for the contact. |
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
| `location` | `Record<string, any>` | No | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `boolean` | No | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `any[]` | No | A list of contacts that were merged into this contact. |
| `name` | `string` | No | The contacts name. |
| `notes` | `Record<string, any>` | No | An object containing notes meta data about the notes that a contact has. |
| `os` | `string` | No | The operating system which the contact is using. |
| `owner_id` | `string` | No | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `string` | No | The contacts phone. |
| `role` | `string` | No | The role of the contact. |
| `signed_up_at` | `number` | No | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `Record<string, any>` | No | An object containing social profiles that a contact has. |
| `tags` | `Record<string, any>` | No | An object containing tags meta data about the tags that a contact has. |
| `type` | `string` | No | The type of object. |
| `unsubscribed_from_emails` | `boolean` | No | Whether the contact is unsubscribed from emails. |
| `updated_at` | `number` | No | (Unix timestamp in seconds) The time when the contact was last updated. |
| `user` | `Record<string, any>` | Yes | The unique identifiers retained after converting or merging. |
| `visitor` | `Record<string, any>` | Yes | The unique identifiers to convert a single Visitor. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `archive` | `/contacts/{contact_id}/archive` | `client.Contact().create({ $action: 'archive', ... })` |
| `block` | `/contacts/{contact_id}/block` | `client.Contact().create({ $action: 'block', ... })` |
| `merge` | `/contacts/merge` | `client.Contact().create({ $action: 'merge', ... })` |
| `unarchive` | `/contacts/{contact_id}/unarchive` | `client.Contact().create({ $action: 'unarchive', ... })` |

An action returns that action's OWN response, which is not necessarily a
Contact record — check the API definition for its shape.

```ts
const result = await client.Contact().create({
  $action: 'archive',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Contact().create({
  user: {},
  visitor: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Contact().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Contact().load({ id: 'contact_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Contact().remove({ id: 'contact_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Contact().update({
  id: 'contact_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContactEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContactAttachedCompanyEntity

```ts
const contact_attached_company = client.ContactAttachedCompany()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | No | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | No | The company id you have defined for the company. |
| `created_at` | `number` | No | The time the company was added in Intercom. |
| `custom_attributes` | `Record<string, any>` | No | The custom attributes you have set on the company. |
| `id` | `string` | No | The Intercom defined id representing the company. |
| `industry` | `string` | No | The industry that the company operates in. |
| `last_request_at` | `number` | No | The time the company last recorded making a request. |
| `monthly_spend` | `number` | No | How much revenue the company generates for your business. |
| `name` | `string` | No | The name of the company. |
| `notes` | `Record<string, any>` | No | The list of notes associated with the company |
| `plan` | `Record<string, any>` | No |  |
| `remote_created_at` | `number` | No | The time the company was created by you. |
| `segments` | `Record<string, any>` | No | The list of segments associated with the company |
| `session_count` | `number` | No | How many sessions the company has recorded. |
| `size` | `number` | No | The number of employees in the company. |
| `tags` | `Record<string, any>` | No | The list of tags associated with the company |
| `type` | `string` | No | Value is `company` |
| `updated_at` | `number` | No | The last time the company was updated. |
| `user_count` | `number` | No | The number of users in the company. |
| `website` | `string` | No | The URL for the company website. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ContactAttachedCompany().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContactAttachedCompanyEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContactListEntity

```ts
const contact_list = client.ContactList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No | The list of contact objects |
| `pages` | `Record<string, any>` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `Record<string, any>` | No |  |
| `query` | `any` | Yes |  |
| `sort` | `Record<string, any>` | No | An optional object to sort the results by. |
| `total_count` | `number` | No | A count of the total number of objects. |
| `type` | `string` | No | Always list |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ContactList().create({
  query: 'example_query',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContactListEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContactSegmentEntity

```ts
const contact_segment = client.ContactSegment()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ContactSegment().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContactSegmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContentEntity

```ts
const content = client.Content()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `bulk_action` | `/content/bulk_actions` | `client.Content().create({ $action: 'bulk_action', ... })` |

An action returns that action's OWN response, which is not necessarily a
Content record — check the API definition for its shape.

```ts
const result = await client.Content().create({
  $action: 'bulk_action',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Content().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContentEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContentImportSourceEntity

```ts
const content_import_source = client.ContentImportSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apply_audience_to_existing_content` | `boolean` | No | When true, the audience will be applied to all existing external pages belonging to this content import source. |
| `audience_ids` | `any[]` | No | The unique identifiers for the audiences associated with this content import source. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ContentImportSource().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ContentImportSource().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ContentImportSource().load({ id: 'content_import_source_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ContentImportSource().update({
  id: 'content_import_source_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContentImportSourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContentSearchEntity

```ts
const content_search = client.ContentSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No | The list of matched content items. |
| `pages` | `Record<string, any>` | No | Pagination metadata, including links to neighbouring pages. |
| `total_count` | `number` | No | Total number of results matching the query. |
| `type` | `string` | No | Always `list`. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ContentSearch().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContentSearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContentSnippetEntity

```ts
const content_snippet = client.ContentSnippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `boolean` | No | Whether the content snippet is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `boolean` | No | Whether the content snippet is available for AI Copilot. |
| `ai_sales_agent_availability` | `boolean` | No | Whether the content snippet is available for AI Sales Agent. |
| `audience_ids` | `any[]` | No | The list of audience IDs this content snippet is targeted to for Fin AI Agent. |
| `body_markdown` | `string` | No | The body of the content snippet in markdown. |
| `chatbot_availability` | `number` | No | Deprecated. |
| `copilot_availability` | `number` | No | Deprecated. |
| `created_at` | `number` | No | The time the snippet was created as a UNIX timestamp. |
| `id` | `string` | No | The unique identifier for the content snippet. |
| `json_blocks` | `any[]` | No | The content blocks that make up the body of the snippet. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ContentSnippet().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ContentSnippet().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ContentSnippet().load({ id: 'content_snippet_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ContentSnippet().remove({ id: 'content_snippet_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ContentSnippet().update({
  id: 'content_snippet_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContentSnippetEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationEntity

```ts
const conversation = client.Conversation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_assignee_id` | `number` | No | The id of the admin assigned to the conversation. |
| `ai_agent` | `Record<string, any>` | No | Data related to AI Agent involvement in the conversation. |
| `ai_agent_participated` | `boolean` | No | Indicates whether the AI Agent participated in the conversation. |
| `attachment_urls` | `any[]` | No | A list of image URLs that will be added as attachments. |
| `body` | `string` | Yes | The content of the message. |
| `brand_id` | `string` | No | The unique identifier of the brand to associate with this conversation. |
| `channel` | `Record<string, any>` | No | The channel through which the conversation was initiated and its current channel. |
| `company` | `Record<string, any>` | No | The company associated with the conversation. |
| `company_id` | `string` | No | The ID of the company that the conversation is associated with. |
| `contacts` | `Record<string, any>` | No | The list of contacts (users or leads) involved in this conversation. |
| `conversation_id` | `string` | Yes | The unique identifier (given by Intercom) for the conversation or customer ticket to link to the tracker ticket. |
| `conversation_parts` | `Record<string, any>` | No | A list of Conversation Part objects for each part message in the conversation. |
| `conversation_rating` | `Record<string, any>` | No | The Conversation Rating object which contains information on the rating and/or remark added by a Contact and the Admin assigned to the conversation. |
| `created_at` | `number` | No | The time the conversation was created. |
| `custom_attributes` | `Record<string, any>` | No | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `external_references` | `any[]` | No | References linking this conversation to records in an external helpdesk or CRM system. |
| `first_contact_reply` | `Record<string, any>` | No | An object containing information on the first users message. |
| `from` | `Record<string, any>` | Yes |  |
| `id` | `string` | No | The id representing the conversation. |
| `linked_objects` | `Record<string, any>` | No | An object containing metadata about linked conversations and linked tickets. |
| `monitor_evaluations` | `any[]` | No | QA monitor evaluations that flagged this conversation. |
| `open` | `boolean` | No | Indicates whether a conversation is open (true) or closed (false). |
| `priority` | `string` | No | The priority level of the conversation. |
| `read` | `boolean` | No | Indicates whether a conversation has been read. |
| `sales_agent` | `Record<string, any>` | No | Data related to Sales Agent involvement in the conversation. |
| `sales_agent_participated` | `boolean` | No | Indicates whether the Sales Agent participated in the conversation. |
| `scorecards` | `any[]` | No | QA scorecard results for this conversation. |
| `sla_applied` | `Record<string, any>` | No | The SLA Applied object contains the details for which SLA has been applied to this conversation. |
| `snoozed_until` | `number` | No | If set this is the time in the future when this conversation will be marked as open. |
| `source` | `Record<string, any>` | No | The type of the conversation part that started this conversation. |
| `state` | `string` | No | Can be set to "open", "closed" or "snoozed". |
| `statistics` | `Record<string, any>` | No | A Statistics object containing all information required for reporting, with timestamps and calculated metrics. |
| `subject` | `string` | No | The title of the email. |
| `tags` | `Record<string, any>` | No | A list of tags objects associated with a conversation |
| `team_assignee_id` | `number` | No | The id of the team assigned to the conversation. |
| `teammates` | `Record<string, any>` | No | The list of teammates who participated in the conversation (wrote at least one conversation part). |
| `title` | `string` | No | The title given to the conversation. |
| `type` | `string` | No | Always conversation. |
| `updated_at` | `number` | No | The last time the conversation was updated. |
| `waiting_since` | `number` | No | The last time a Contact responded to an Admin. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `merge` | `/conversations/{id}/merge` | `client.Conversation().create({ $action: 'merge', ... })` |
| `part` | `/conversations/{conversation_id}/parts` | `client.Conversation().create({ $action: 'part', ... })` |
| `redact` | `/conversations/redact` | `client.Conversation().create({ $action: 'redact', ... })` |
| `reply` | `/conversations/{conversation_id}/reply` | `client.Conversation().create({ $action: 'reply', ... })` |

An action returns that action's OWN response, which is not necessarily a
Conversation record — check the API definition for its shape.

```ts
const result = await client.Conversation().create({
  $action: 'merge',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Conversation().create({
  body: 'example_body',
  conversation_id: 'example_conversation_id',
  from: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Conversation().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Conversation().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Conversation().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Conversation().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationAttributeEntity

```ts
const conversation_attribute = client.ConversationAttribute()
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
| `reference` | `Record<string, any>` | Yes | (Relationship data type only) Reference configuration for related objects. |
| `required` | `boolean` | No | Whether this attribute is required. |
| `type` | `string` | No |  |
| `updated_at` | `number` | No |  |
| `visible_to_team_ids` | `any[]` | No | Team IDs that can see this attribute. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ConversationAttribute().create({
  label: 'example_label',
  reference: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConversationAttribute().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ConversationAttribute().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ConversationAttribute().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationAttributeEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationAttributeListEntity

```ts
const conversation_attribute_list = client.ConversationAttributeList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No | A list of conversation attributes. |
| `type` | `string` | No | The type of the object. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConversationAttributeList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationAttributeListEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationListEntity

```ts
const conversation_list = client.ConversationList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversations` | `any[]` | No | The list of conversation objects |
| `pages` | `Record<string, any>` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `Record<string, any>` | No |  |
| `query` | `any` | Yes |  |
| `total_count` | `number` | No | A count of the total number of objects. |
| `type` | `string` | No | Always conversation.list |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ConversationList().create({
  query: 'example_query',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationListEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationParticipantEntity

```ts
const conversation_participant = client.ConversationParticipant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `customers` | `/conversations/{conversation_id}/customers` | `client.ConversationParticipant().create({ $action: 'customers', ... })` |

An action returns that action's OWN response, which is not necessarily a
ConversationParticipant record — check the API definition for its shape.

```ts
const result = await client.ConversationParticipant().create({
  $action: 'customers',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ConversationParticipant().create({
  id: 'example_id',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ConversationParticipant().remove({ contact_id: 'contact_id', conversation_id: 'conversation_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationParticipantEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomObjectInstanceEntity

```ts
const custom_object_instance = client.CustomObjectInstance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No |  |
| `custom_attributes` | `Record<string, any>` | No | The custom attributes which are set for the Custom Object instance. |
| `data` | `any[]` | No | An array of Custom Object Instance objects. |
| `external_created_at` | `string` | No | The time when the Custom Object instance was created in the external system it originated from. |
| `external_id` | `string` | No | A unique identifier for the Custom Object instance in the external system it originated from. |
| `external_updated_at` | `string` | No | The time when the Custom Object instance was last updated in the external system it originated from. |
| `id` | `string` | No |  |
| `pages` | `Record<string, any>` | No | The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests. |
| `total_count` | `number` | No | A count of the total number of custom object instances. |
| `type` | `string` | No | The type of the object - `list`. |
| `updated_at` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomObjectInstance().create({
  id: 'example_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomObjectInstance().load({ id: 'custom_object_instance_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomObjectInstance().remove({ id: 'custom_object_instance_id', external_id: 'external_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomObjectInstanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DataEntity

```ts
const data = client.Data()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Data().create({
  created_at_after: 1,
  created_at_before: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Data().load({ id: 'data_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DataEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DataAttributeEntity

```ts
const data_attribute = client.DataAttribute()
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
| `options` | `any[]` | No | List of predefined options for attribute value. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DataAttribute().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DataAttribute().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DataAttribute().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DataAttributeEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DataConnectorEntity

```ts
const data_connector = client.DataConnector()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audiences` | `any[]` | No | The audience types this connector targets. |
| `body` | `string` | No | The request body template. |
| `bypass_authentication` | `boolean` | No | Whether authentication is bypassed for this connector. |
| `client_function_name` | `string` | No | The name of the client-side function, if applicable. |
| `client_function_timeout_ms` | `number` | No | Timeout in milliseconds for the client function, if applicable. |
| `configuration_response_type` | `string` | No | The expected response format from the connector. |
| `created_at` | `string` | No | The time the data connector was created. |
| `created_by_admin_id` | `string` | No | The ID of the admin who created this connector. |
| `customer_authentication` | `boolean` | No | Whether OTP authentication is enabled for this connector. |
| `data_inputs` | `any[]` | No | The input parameters accepted by this data connector. |
| `data_transformation_type` | `string` | No | The type of data transformation applied to the response. |
| `description` | `string` | No | A description of what this data connector does. |
| `direct_fin_usage` | `boolean` | No | Whether this connector is used directly by Fin. |
| `execution_results_url` | `string` | No | The URL path to fetch execution results for this connector. |
| `execution_type` | `string` | No | How the connector executes. |
| `headers` | `any[]` | No | HTTP headers for the request. |
| `http_method` | `string` | No | The HTTP method used by the data connector. |
| `id` | `string` | No | The unique identifier for the data connector. |
| `mock_response` | `Record<string, any>` | No | A sample JSON response from the external API. |
| `name` | `string` | No | The name of the data connector. |
| `object_mappings` | `any[]` | No | Mappings from connector response objects to Intercom objects. |
| `response_fields` | `any[]` | No | The fields returned in the connector response. |
| `state` | `string` | No | The current state of the data connector. |
| `token_ids` | `any[]` | No | IDs of authentication tokens associated with this connector. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DataConnector().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DataConnector().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DataConnector().load({ id: 'data_connector_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DataConnector().update({
  id: 'data_connector_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DataConnectorEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DataConnectorExecutionResultEntity

```ts
const data_connector_execution_result = client.DataConnectorExecutionResult()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DataConnectorExecutionResult().load({ id: 'data_connector_execution_result_id', data_connector_id: 'data_connector_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DataConnectorExecutionResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DataConnectorExecutionResultListEntity

```ts
const data_connector_execution_result_list = client.DataConnectorExecutionResultList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `execution_results` | `/data_connectors/{data_connector_id}/execution_results` | `client.DataConnectorExecutionResultList().list({ $action: 'execution_results', ... })` |

An action returns that action's OWN response, which is not necessarily a
DataConnectorExecutionResultList record — check the API definition for its shape.

```ts
const result = await client.DataConnectorExecutionResultList().list({
  $action: 'execution_results',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DataConnectorExecutionResultList().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DataConnectorExecutionResultListEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DataEventEntity

```ts
const data_event = client.DataEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | The time the event occurred as a UTC Unix timestamp |
| `email` | `string` | No | An email address for your user. |
| `event_name` | `string` | No | The name of the event that occurred. |
| `event_summaries` | `Record<string, any>` | No | A list of event summaries for the user. |
| `id` | `string` | No | The unique identifier for the contact (lead or user) which is given by Intercom. |
| `metadata` | `Record<string, any>` | No | Optional metadata about the event. |
| `user_id` | `string` | No | Your identifier for the user. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DataEvent().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DataEventEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DataEventSummaryEntity

```ts
const data_event_summary = client.DataEventSummary()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DataEventSummary().list({ filter: {}, type: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DataEventSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DataExportEntity

```ts
const data_export = client.DataExport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `download_expires_at` | `string` | No | The time after which you will not be able to access the data. |
| `download_url` | `string` | No | The location where you can download your data. |
| `job_identifier` | `string` | No | The identifier for your job. |
| `status` | `string` | No | The current state of your job. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DataExport().create({
  job_identifier: 'example_job_identifier',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DataExportEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedEntity

```ts
const deleted = client.Deleted()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deleted_at` | `number` | No | The time when the conversation was deleted. |
| `id` | `string` | No | The ID of the deleted conversation. |
| `metrics_retained` | `boolean` | No | Whether reporting metrics are retained for this conversation ID |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Deleted().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedArticleObjectEntity

```ts
const deleted_article_object = client.DeletedArticleObject()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeletedArticleObject().remove({ article_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedArticleObjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedCompanyObjectEntity

```ts
const deleted_company_object = client.DeletedCompanyObject()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeletedCompanyObject().remove({ company_id: 'company_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedCompanyObjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedDataConnectorObjectEntity

```ts
const deleted_data_connector_object = client.DeletedDataConnectorObject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeletedDataConnectorObject().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedDataConnectorObjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedInternalArticleObjectEntity

```ts
const deleted_internal_article_object = client.DeletedInternalArticleObject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `boolean` | No | Whether the internal article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `boolean` | No | Whether the internal article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `boolean` | No | Whether the internal article should be available for AI Sales Agent. |
| `audience_ids` | `any[]` | No | The list of audience IDs to target this internal article to for Fin AI Agent. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DeletedInternalArticleObject().create({
  author_id: 1,
  owner_id: 1,
  title: 'example_title',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DeletedInternalArticleObject().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeletedInternalArticleObject().remove({ internal_article_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedInternalArticleObjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeletedObjectEntity

```ts
const deleted_object = client.DeletedObject()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeletedObject().remove({ news_item_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeletedObjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailEntity

```ts
const email = client.Email()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Email().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Email().load({ id: 'email_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExternalPageEntity

```ts
const external_page = client.ExternalPage()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ExternalPage().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ExternalPage().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ExternalPage().load({ id: 'external_page_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ExternalPage().remove({ id: 'external_page_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ExternalPage().update({
  id: 'external_page_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExternalPageEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FinAgentEntity

```ts
const fin_agent = client.FinAgent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `any[]` | No | An array of attachments to include with the message. |
| `conversation` | `Record<string, any>` | No | Conversation-related attribute errors. |
| `conversation_id` | `string` | No | The external ID of the rated conversation. |
| `conversation_metadata` | `Record<string, any>` | No | Metadata about the conversation, including history and attributes. |
| `message` | `Record<string, any>` | Yes | A message exchanged within a Fin Agent conversation. |
| `rating` | `string` | No | The rating now recorded on the conversation. |
| `remark` | `string` | No | Optional free-text comment the user left alongside the rating. |
| `status` | `string` | No | The result of the submission. |
| `user` | `Record<string, any>` | No | User-related attribute errors. |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FinAgent().create({
  message: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FinAgentEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HandlingEventEntity

```ts
const handling_event = client.HandlingEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `string` | No | Optional reason for the event (e.g., "Paused", "Away") |
| `teammate` | `Record<string, any>` | Yes | A reference to a teammate |
| `timestamp` | `string` | Yes | ISO8601 timestamp when the event occurred |
| `type` | `string` | Yes | The type of handling event |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.HandlingEvent().list({ conversation_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HandlingEventEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HelpCenterEntity

```ts
const help_center = client.HelpCenter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ar` | `Record<string, any>` | No | The content of the group in Arabic |
| `bg` | `Record<string, any>` | No | The content of the group in Bulgarian |
| `bs` | `Record<string, any>` | No | The content of the group in Bosnian |
| `ca` | `Record<string, any>` | No | The content of the group in Catalan |
| `created_at` | `number` | No | The time when the Help Center was created. |
| `cs` | `Record<string, any>` | No | The content of the group in Czech |
| `custom_domain` | `string` | No | Custom domain configured for the help center |
| `da` | `Record<string, any>` | No | The content of the group in Danish |
| `de` | `Record<string, any>` | No | The content of the group in German |
| `default` | `boolean` | No | Whether this help center is the default for the workspace. |
| `description` | `string` | No | The description of the collection. |
| `display_name` | `string` | No | The display name of the Help Center only seen by teammates. |
| `el` | `Record<string, any>` | No | The content of the group in Greek |
| `en` | `Record<string, any>` | No | The content of the group in English |
| `es` | `Record<string, any>` | No | The content of the group in Spanish |
| `et` | `Record<string, any>` | No | The content of the group in Estonian |
| `fi` | `Record<string, any>` | No | The content of the group in Finnish |
| `fr` | `Record<string, any>` | No | The content of the group in French |
| `from_url` | `string` | No | The source URL that is redirected. |
| `he` | `Record<string, any>` | No | The content of the group in Hebrew |
| `help_center_id` | `string` | No | The unique identifier for the help center the redirect belongs to. |
| `hr` | `Record<string, any>` | No | The content of the group in Croatian |
| `hu` | `Record<string, any>` | No | The content of the group in Hungarian |
| `id` | `Record<string, any>` | No | The content of the group in Indonesian |
| `identifier` | `string` | No | The identifier of the Help Center. |
| `it` | `Record<string, any>` | No | The content of the group in Italian |
| `ja` | `Record<string, any>` | No | The content of the group in Japanese |
| `ko` | `Record<string, any>` | No | The content of the group in Korean |
| `locale` | `string` | No | The locale of the redirect's target. |
| `locales` | `any[]` | No | The locales in which the help center is available. |
| `lt` | `Record<string, any>` | No | The content of the group in Lithuanian |
| `lv` | `Record<string, any>` | No | The content of the group in Latvian |
| `mn` | `Record<string, any>` | No | The content of the group in Mongolian |
| `name` | `string` | No | The name of the collection. |
| `nb` | `Record<string, any>` | No | The content of the group in Norwegian |
| `nl` | `Record<string, any>` | No | The content of the group in Dutch |
| `parent_id` | `string` | No | The id of the parent collection. |
| `pl` | `Record<string, any>` | No | The content of the group in Polish |
| `pt` | `Record<string, any>` | No | The content of the group in Portuguese (Portugal) |
| `ptBR` | `Record<string, any>` | No | The content of the group in Portuguese (Brazil) |
| `ro` | `Record<string, any>` | No | The content of the group in Romanian |
| `ru` | `Record<string, any>` | No | The content of the group in Russian |
| `sl` | `Record<string, any>` | No | The content of the group in Slovenian |
| `sr` | `Record<string, any>` | No | The content of the group in Serbian |
| `sv` | `Record<string, any>` | No | The content of the group in Swedish |
| `target_id` | `string` | No | The unique identifier of the target article or collection. |
| `target_type` | `string` | No | The type of the redirect target. |
| `tr` | `Record<string, any>` | No | The content of the group in Turkish |
| `translated_content` | `Record<string, any>` | No | The Translated Content of an Group. |
| `type` | `string` | No | The type of object - group_translated_content. |
| `updated_at` | `number` | No | The time when the Help Center was last updated. |
| `url` | `string` | No | The URL for the help center, if you have a custom domain then this will show the URL using the custom domain. |
| `vi` | `Record<string, any>` | No | The content of the group in Vietnamese |
| `website_turned_on` | `boolean` | No | Whether the Help Center is turned on or not. |
| `workspace_id` | `string` | No | The id of the workspace which the Help Center belongs to. |
| `zhCN` | `Record<string, any>` | No | The content of the group in Chinese (China) |
| `zhTW` | `Record<string, any>` | No | The content of the group in Chinese (Taiwan) |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `collection` | `/help_center/collections` | `client.HelpCenter().create({ $action: 'collection', ... })` |
| `redirect` | `/help_center/help_centers/{help_center_id}/redirects` | `client.HelpCenter().create({ $action: 'redirect', ... })` |
| `collection` | `/help_center/collections` | `client.HelpCenter().list({ $action: 'collection', ... })` |
| `redirect` | `/help_center/help_centers/{help_center_id}/redirects` | `client.HelpCenter().list({ $action: 'redirect', ... })` |

An action returns that action's OWN response, which is not necessarily a
HelpCenter record — check the API definition for its shape.

```ts
const result = await client.HelpCenter().create({
  $action: 'collection',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.HelpCenter().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.HelpCenter().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.HelpCenter().load({ collection_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.HelpCenter().remove({ collection_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.HelpCenter().update({
  collection_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HelpCenterEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InternalArticleEntity

```ts
const internal_article = client.InternalArticle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_chatbot_availability` | `boolean` | No | Whether the internal article is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `boolean` | No | Whether the internal article is available for AI Copilot. |
| `ai_sales_agent_availability` | `boolean` | No | Whether the internal article is available for AI Sales Agent. |
| `audience_ids` | `any[]` | No | The list of audience IDs this internal article is targeted to for Fin AI Agent. |
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.InternalArticle().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.InternalArticle().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InternalArticleEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InternalArticleSearchEntity

```ts
const internal_article_search = client.InternalArticleSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | No | An object containing the results of the search. |
| `pages` | `Record<string, any>` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `number` | No | The total number of Internal Articles matching the search query |
| `type` | `string` | No | The type of the object - `list`. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.InternalArticleSearch().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InternalArticleSearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IpAllowlistEntity

```ts
const ip_allowlist = client.IpAllowlist()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | No | Whether the IP allowlist is enabled for the workspace. |
| `ip_allowlist` | `any[]` | No | List of allowed IP addresses and/or IP ranges in CIDR notation. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IpAllowlist().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IpAllowlist().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IpAllowlistEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JobEntity

```ts
const job = client.Job()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Job().create({
  id: 'example_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Job().load({ job_id: 'job_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JobEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MacroEntity

```ts
const macro = client.Macro()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_on` | `any[]` | No | Where the macro is available for use. |
| `body` | `string` | No | The body of the macro in HTML format with placeholders transformed to XML-like format. |
| `body_text` | `string` | No | The plain text version of the macro body with original Intercom placeholder format. |
| `created_at` | `string` | No | The time the macro was created in ISO 8601 format. |
| `id` | `string` | No | The unique identifier for the macro. |
| `name` | `string` | No | The name of the macro. |
| `type` | `string` | No | String representing the object's type. |
| `updated_at` | `string` | No | The time the macro was last updated in ISO 8601 format. |
| `visible_to` | `string` | No | Who can view this macro. |
| `visible_to_team_ids` | `any[]` | No | The team IDs that can view this macro when visible_to is set to specific_teams. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Macro().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Macro().load({ id: 'macro_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MacroEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MergeHistoryEntity

```ts
const merge_history = client.MergeHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `merged_at` | `number` | No | (Unix timestamp in seconds) The time when the merge occurred. |
| `source_contact_id` | `string` | No | The Intercom ID of the contact that was merged into this contact. |
| `source_contact_role` | `string` | No | The role of the contact that was merged in. |
| `type` | `string` | No | The type of object. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MergeHistory().list({ contact_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MergeHistoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MessageEntity

```ts
const message = client.Message()
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
| `from` | `Record<string, any>` | Yes | The sender of the message. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Message().create({
  body: 'example_body',
  created_at: 1,
  from: {},
  id: 'example_id',
  message_type: 'example_message_type',
  type: 'example_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NewsItemEntity

```ts
const news_item = client.NewsItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No | The news item body, which may contain HTML. |
| `cover_image_url` | `string` | No | URL of the image used as cover. |
| `created_at` | `number` | No | Timestamp for when the news item was created. |
| `deliver_silently` | `boolean` | No | When set to true, the news item will appear in the messenger newsfeed without showing a notification badge. |
| `id` | `string` | No | The unique identifier for the news item which is given by Intercom. |
| `labels` | `any[]` | No | Label names displayed to users to categorize the news item. |
| `newsfeed_assignments` | `any[]` | No | A list of newsfeed_assignments to assign to the specified newsfeed. |
| `reactions` | `any[]` | No | Ordered list of emoji reactions to the news item. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.NewsItem().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NewsItem().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NewsItem().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NewsItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NewsfeedEntity

```ts
const newsfeed = client.Newsfeed()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Newsfeed().load({ id: 'newsfeed_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NewsfeedEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NoteEntity

```ts
const note = client.Note()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `string` | No | The unique identifier of the admin creating the note. |
| `author` | `Record<string, any>` | No | Optional. |
| `body` | `string` | No | The body text of the note. |
| `company` | `Record<string, any>` | No | Represents the company that the note was created about. |
| `contact` | `Record<string, any>` | No | Represents the contact that the note was created about. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Note().create({
  company_id: 'example_company_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Note().list({ company_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Note().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OfficeHourEntity

```ts
const office_hour = client.OfficeHour()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | The time the schedule was created as a Unix timestamp. |
| `id` | `string` | No | The unique identifier for the office hours schedule. |
| `name` | `string` | Yes | The name of the office hours schedule. |
| `time_intervals` | `any[]` | Yes | The open intervals for the schedule. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OfficeHour().create({
  name: 'example_name',
  time_intervals: [],
  time_zone_name: 'example_time_zone_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OfficeHour().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.OfficeHour().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OfficeHourEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OfficeHoursExceptionEntity

```ts
const office_hours_exception = client.OfficeHoursException()
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
| `time_intervals` | `any[]` | No | The open intervals for the exception date. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OfficeHoursException().create({
  office_hours_schedule_id: 'example_office_hours_schedule_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OfficeHoursException().list({ office_hours_schedule_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OfficeHoursException().load({ id: 'office_hours_exception_id', office_hours_schedule_id: 'office_hours_schedule_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OfficeHoursException().update({
  id: 'office_hours_exception_id',
  office_hours_schedule_id: 'office_hours_schedule_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OfficeHoursExceptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OfficeHoursScheduleEntity

```ts
const office_hours_schedule = client.OfficeHoursSchedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | The time the schedule was created as a Unix timestamp. |
| `id` | `string` | No | The unique identifier for the office hours schedule. |
| `name` | `string` | No | The name of the office hours schedule. |
| `time_intervals` | `any[]` | No | The open intervals that make up the weekly schedule. |
| `time_zone_name` | `string` | No | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | `boolean` | No | Whether the schedule is open 24/7. |
| `type` | `string` | No | The type of the object - always `office_hours_schedule`. |
| `updated_at` | `number` | No | The time the schedule was last updated as a Unix timestamp. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OfficeHoursSchedule().load({ id: 'office_hours_schedule_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OfficeHoursSchedule().update({
  id: 'office_hours_schedule_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OfficeHoursScheduleEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginatedEntity

```ts
const paginated = client.Paginated()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No | An array of Objects |
| `pages` | `Record<string, any>` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `number` | No | A count of the total number of objects. |
| `type` | `string` | No | The type of object |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Paginated().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginatedEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PhoneSwitchEntity

```ts
const phone_switch = client.PhoneSwitch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_attributes` | `Record<string, any>` | No | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `phone` | `string` | No | Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger. |
| `type` | `string` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `custom_attributes` | - |
| `phone` | Yes |
| `type` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PhoneSwitch().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PhoneSwitchEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReportingDataEntity

```ts
const reporting_data = client.ReportingData()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `download_expires_at` | `string` | No |  |
| `download_url` | `string` | No |  |
| `job_identifier` | `string` | No |  |
| `status` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ReportingData().load({ app_id: 'app_id', job_identifier: 'job_identifier' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReportingDataEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReportingDataExportEntity

```ts
const reporting_data_export = client.ReportingDataExport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute_ids` | `any[]` | Yes |  |
| `attributes` | `any[]` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ReportingDataExport().create({
  attribute_ids: [],
  dataset_id: 'example_dataset_id',
  end_time: 1,
  start_time: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ReportingDataExport().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReportingDataExportEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SegmentEntity

```ts
const segment = client.Segment()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Segment().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Segment().load({ id: 'segment_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SegmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SideConversationEntity

```ts
const side_conversation = client.SideConversation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversation_parts` | `any[]` | No | The conversation parts (messages) in this side conversation. |
| `side_conversation_id` | `string` | No | The unique identifier for the side conversation. |
| `total_count` | `number` | No | The total number of conversation parts in this side conversation. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SideConversation().list({ conversation_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SideConversationEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionEntity

```ts
const subscription = client.Subscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent_type` | `string` | No | Describes the type of consent. |
| `content_types` | `any[]` | No | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `Record<string, any>` | No | A translation object contains the localised details of a subscription type. |
| `id` | `string` | No | The unique identifier representing the subscription type. |
| `state` | `string` | No | The state of the subscription type. |
| `translations` | `any[]` | No | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Subscription().create({
  contact_id: 'example_contact_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Subscription().list({ contact_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Subscription().remove({ contact_id: 'contact_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionTypeEntity

```ts
const subscription_type = client.SubscriptionType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent_type` | `string` | No | Describes the type of consent. |
| `content_types` | `any[]` | No | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `Record<string, any>` | No | A translation object contains the localised details of a subscription type. |
| `id` | `string` | No | The unique identifier representing the subscription type. |
| `state` | `string` | No | The state of the subscription type. |
| `translations` | `any[]` | No | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `type` | `string` | No | The type of the object - subscription |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriptionType().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TagEntity

```ts
const tag = client.Tag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_id` | `string` | No | Optional id of the teammate to attribute the tagging to. |
| `applied_at` | `number` | No | The time when the tag was applied to the object. |
| `applied_by` | `Record<string, any>` | No | The admin who applied the tag. |
| `companies` | `any[]` | No |  |
| `id` | `string` | No | The id of the tag |
| `name` | `string` | No | The name of the tag |
| `type` | `string` | No | value is "tag" |
| `users` | `any[]` | No |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Tag().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Tag().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Tag().load({ id: 'tag_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Tag().remove({ id: 'tag_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TagEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamEntity

```ts
const team = client.Team()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_ids` | `any[]` | No | The list of admin IDs that are a part of the team. |
| `admin_priority_level` | `Record<string, any>` | No | Admin priority levels for the team |
| `assignment_limit` | `number` | No | The assignment limit for the team. |
| `distribution_method` | `string` | No | Describes how assignments are distributed among the team members |
| `id` | `string` | No | The id of the team |
| `name` | `string` | No | The name of the team |
| `type` | `string` | No | Value is always "team" |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Team().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Team().load({ id: 'team_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamMetricListEntity

```ts
const team_metric_list = client.TeamMetricList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `metrics` | `/teams/{team_id}/metrics` | `client.TeamMetricList().list({ $action: 'metrics', ... })` |

An action returns that action's OWN response, which is not necessarily a
TeamMetricList record — check the API definition for its shape.

```ts
const result = await client.TeamMetricList().list({
  $action: 'metrics',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TeamMetricList().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamMetricListEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TicketEntity

```ts
const ticket = client.Ticket()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_assignee_id` | `number` | No | The id representing the admin assigned to the ticket. |
| `attributes` | `Record<string, any>` | No | The attributes set on the ticket. |
| `category` | `string` | No | Category of the Ticket. |
| `contacts` | `Record<string, any>` | No | The list of contacts affected by a ticket. |
| `created_at` | `number` | No | The time the ticket was created as a UTC Unix timestamp. |
| `id` | `string` | No | The unique identifier for the ticket which is given by Intercom. |
| `is_shared` | `boolean` | No | Whether or not the ticket is shared with the customer. |
| `linked_objects` | `Record<string, any>` | No | An object containing metadata about linked conversations and linked tickets. |
| `open` | `boolean` | No | Whether or not the ticket is open. |
| `previous_ticket_state_id` | `string` | No | The ID of the previous ticket state from the most recent state change. |
| `skip_notifications` | `boolean` | No | Option to disable notifications when a Ticket is created. |
| `snoozed_until` | `number` | No | The time the ticket will be snoozed until as a UTC Unix timestamp. |
| `team_assignee_id` | `number` | No | The id representing the team assigned to the ticket. |
| `ticket_attributes` | `Record<string, any>` | No | An object containing the different attributes associated to the ticket as key-value pairs. |
| `ticket_id` | `string` | No | The ID of the Ticket used in the Intercom Inbox and Messenger. |
| `ticket_parts` | `Record<string, any>` | No | A list of Ticket Part objects for each note and event in the ticket. |
| `ticket_state` | `Record<string, any>` | No | A ticket state, used to define the state of a ticket. |
| `ticket_state_id` | `string` | No | The ID of the ticket state associated with the ticket type. |
| `ticket_type` | `Record<string, any>` | No | A ticket type, used to define the data fields to be captured in a ticket. |
| `ticket_type_id` | `string` | Yes | The ID of the type of ticket you want to convert the conversation to |
| `type` | `string` | No | Always ticket |
| `updated_at` | `number` | No | The last time the ticket was updated as a UTC Unix timestamp. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `change_type` | `/tickets/{ticket_id}/change_type` | `client.Ticket().create({ $action: 'change_type', ... })` |

An action returns that action's OWN response, which is not necessarily a
Ticket record — check the API definition for its shape.

```ts
const result = await client.Ticket().create({
  $action: 'change_type',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Ticket().create({
  ticket_type_id: 'example_ticket_type_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Ticket().load({ id: 'ticket_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Ticket().remove({ id: 'ticket_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Ticket().update({
  id: 'ticket_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TicketEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TicketListEntity

```ts
const ticket_list = client.TicketList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pages` | `Record<string, any>` | No | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `Record<string, any>` | No |  |
| `query` | `any` | Yes |  |
| `tickets` | `any[]` | No | The list of ticket objects |
| `total_count` | `number` | No | A count of the total number of objects. |
| `type` | `string` | No | Always ticket.list |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TicketList().create({
  query: 'example_query',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TicketListEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TicketReplyEntity

```ts
const ticket_reply = client.TicketReply()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `any[]` | No | A list of attachments for the part. |
| `author` | `Record<string, any>` | No | The author that wrote or triggered the part. |
| `body` | `string` | No | The message body, which may contain HTML. |
| `created_at` | `number` | No | The time the note was created. |
| `id` | `string` | No | The id representing the part. |
| `part_type` | `string` | No | Type of the part |
| `redacted` | `boolean` | No | Whether or not the ticket part has been redacted. |
| `skip_notifications` | `boolean` | No | Option to disable notifications when replying to a Ticket. |
| `type` | `string` | No | Always ticket_part |
| `updated_at` | `number` | No | The last time the note was updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TicketReply().create({
  id: 'example_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TicketReplyEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TicketStateEntity

```ts
const ticket_state = client.TicketState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | No | Whether the ticket state is archived |
| `category` | `string` | No | The category of the ticket state |
| `external_label` | `string` | No | The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal. |
| `id` | `string` | No | The id of the ticket state |
| `internal_label` | `string` | No | The state the ticket is currently in, in a human readable form - visible in Intercom |
| `ticket_types` | `Record<string, any>` | No | A list of ticket types associated with a given ticket state. |
| `type` | `string` | No | String representing the object's type. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TicketState().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TicketStateEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TicketTypeEntity

```ts
const ticket_type = client.TicketType()
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
| `ticket_states` | `Record<string, any>` | No | A list of ticket states associated with a given ticket type. |
| `ticket_type_attributes` | `Record<string, any>` | No | A list of attributes associated with a given ticket type. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TicketType().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TicketType().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TicketType().load({ id: 'ticket_type_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TicketType().update({
  id: 'ticket_type_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TicketTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TicketTypeAttributeEntity

```ts
const ticket_type_attribute = client.TicketTypeAttribute()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TicketTypeAttribute().create({
  id: 'example_id',
  data_type: 'example_data_type',
  description: 'example_description',
  name: 'example_name',
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TicketTypeAttribute().update({
  id: 'id',
  ticket_type_id: 'ticket_type_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TicketTypeAttributeEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VisitorEntity

```ts
const visitor = client.Visitor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anonymous` | `boolean` | No | Identifies if this visitor is anonymous. |
| `app_id` | `string` | No | The id of the app the visitor is associated with. |
| `avatar` | `Record<string, any>` | No |  |
| `companies` | `Record<string, any>` | No |  |
| `created_at` | `number` | No | The time the Visitor was added to Intercom. |
| `custom_attributes` | `Record<string, any>` | No | The custom attributes you have set on the Visitor. |
| `do_not_track` | `boolean` | No | Identifies if this visitor has do not track enabled. |
| `email` | `string` | No | The email of the visitor. |
| `has_hard_bounced` | `boolean` | No | Identifies if this visitor has had a hard bounce. |
| `id` | `string` | No | The Intercom defined id representing the Visitor. |
| `las_request_at` | `number` | No | The time the Lead last recorded making a request. |
| `location_data` | `Record<string, any>` | No |  |
| `marked_email_as_spam` | `boolean` | No | Identifies if this visitor has marked an email as spam. |
| `name` | `string` | No | The name of the visitor. |
| `owner_id` | `string` | No | The id of the admin that owns the Visitor. |
| `phone` | `string` | No | The phone number of the visitor. |
| `pseudonym` | `string` | No | The pseudonym of the visitor. |
| `referrer` | `string` | No | The referer of the visitor. |
| `remote_created_at` | `number` | No | The time the Visitor was added to Intercom. |
| `segments` | `Record<string, any>` | No |  |
| `session_count` | `number` | No | The number of sessions the Visitor has had. |
| `signed_up_at` | `number` | No | The time the Visitor signed up for your product. |
| `social_profiles` | `Record<string, any>` | No |  |
| `tags` | `Record<string, any>` | No |  |
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Visitor().load({ user_id: 'user_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Visitor().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VisitorEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WhatsappMessageStatusEntity

```ts
const whatsapp_message_status = client.WhatsappMessageStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `details` | `string` | No | Detailed error information |
| `message` | `string` | No | Error message |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WhatsappMessageStatus().load({ message_id: 'message_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WhatsappMessageStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WhatsappMessageStatusListEntity

```ts
const whatsapp_message_status_list = client.WhatsappMessageStatusList()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WhatsappMessageStatusList().list({ ruleset_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WhatsappMessageStatusListEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowEntity

```ts
const workflow = client.Workflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attributes` | `any[]` | No | Custom attributes defined for this workflow. |
| `created_at` | `string` | No | When the workflow was created. |
| `description` | `string` | No | The description of the workflow. |
| `embedded_rules` | `any[]` | No | Rules embedded within the workflow steps. |
| `id` | `string` | No | The unique identifier for the workflow. |
| `preferred_devices` | `any[]` | No | The preferred devices for this workflow. |
| `snapshot` | `Record<string, any>` | No | The current snapshot of workflow steps and configuration. |
| `state` | `string` | No | The current state of the workflow. |
| `target_channels` | `any[]` | No | The channels this workflow targets. |
| `targeting` | `Record<string, any>` | No | The targeting rules for this workflow. |
| `title` | `string` | No | The title of the workflow. |
| `trigger_type` | `string` | No | The type of trigger that starts this workflow. |
| `updated_at` | `string` | No | When the workflow was last updated. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Workflow().load({ id: 'workflow_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `client()`

Return the parent `IntercomSDK` instance.

#### `entopts()`

Return a copy of the entity options.


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

```ts
const client = new IntercomSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

