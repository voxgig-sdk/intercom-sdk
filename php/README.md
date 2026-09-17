# Intercom PHP SDK



The PHP SDK for the Intercom API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->ActivityLog()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/intercom-sdk/releases](https://github.com/voxgig-sdk/intercom-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'intercom_sdk.php';

$client = new IntercomSDK([
    "apikey" => getenv("INTERCOM_APIKEY"),
]);
```

### 2. List activitylog records

```php
try {
    // list() returns entity instances; data_get() reads each record.
    $activitylogs = $client->ActivityLog()->list();
    foreach ($activitylogs as $record) {
        $item = $record->data_get();
        echo $item["id"] . " " . $item["activity_description"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load an aicall

AiCall is nested under conversation, so provide the `conversation_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the AiCall record (throws on error).
    $aicall = $client->AiCall()->load(["conversation_id" => "example_conversation_id"]);
    print_r($aicall->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $contactsegments = $client->ContactSegment()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = IntercomSDK::test([
    "entity" => ["workflow" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$workflow = $client->Workflow()->load(["id" => "test01"]);
print_r($workflow->data_get());
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new IntercomSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
INTERCOM_TEST_LIVE=TRUE
INTERCOM_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### IntercomSDK

```php
require_once 'intercom_sdk.php';
$client = new IntercomSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = IntercomSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### IntercomSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `ActivityLog` | `($data): ActivityLogEntity` | Create an ActivityLog entity instance. |
| `ActivityLogEventType` | `($data): ActivityLogEventTypeEntity` | Create an ActivityLogEventType entity instance. |
| `ActivityLogList` | `($data): ActivityLogListEntity` | Create an ActivityLogList entity instance. |
| `Admin` | `($data): AdminEntity` | Create an Admin entity instance. |
| `AdminWithApp` | `($data): AdminWithAppEntity` | Create an AdminWithApp entity instance. |
| `AiCall` | `($data): AiCallEntity` | Create an AiCall entity instance. |
| `AiContent` | `($data): AiContentEntity` | Create an AiContent entity instance. |
| `Article` | `($data): ArticleEntity` | Create an Article entity instance. |
| `ArticleSearch` | `($data): ArticleSearchEntity` | Create an ArticleSearch entity instance. |
| `ArticleVersion` | `($data): ArticleVersionEntity` | Create an ArticleVersion entity instance. |
| `ArticleVersionList` | `($data): ArticleVersionListEntity` | Create an ArticleVersionList entity instance. |
| `Audience` | `($data): AudienceEntity` | Create an Audience entity instance. |
| `AwayStatusReason` | `($data): AwayStatusReasonEntity` | Create an AwayStatusReason entity instance. |
| `Banner` | `($data): BannerEntity` | Create a Banner entity instance. |
| `BannerDismiss` | `($data): BannerDismissEntity` | Create a BannerDismiss entity instance. |
| `Brand` | `($data): BrandEntity` | Create a Brand entity instance. |
| `Call` | `($data): CallEntity` | Create a Call entity instance. |
| `Company` | `($data): CompanyEntity` | Create a Company entity instance. |
| `CompanyAttachedContact` | `($data): CompanyAttachedContactEntity` | Create a CompanyAttachedContact entity instance. |
| `CompanyAttachedSegment` | `($data): CompanyAttachedSegmentEntity` | Create a CompanyAttachedSegment entity instance. |
| `CompanyList` | `($data): CompanyListEntity` | Create a CompanyList entity instance. |
| `CompanyScroll` | `($data): CompanyScrollEntity` | Create a CompanyScroll entity instance. |
| `Contact` | `($data): ContactEntity` | Create a Contact entity instance. |
| `ContactAttachedCompany` | `($data): ContactAttachedCompanyEntity` | Create a ContactAttachedCompany entity instance. |
| `ContactList` | `($data): ContactListEntity` | Create a ContactList entity instance. |
| `ContactSegment` | `($data): ContactSegmentEntity` | Create a ContactSegment entity instance. |
| `Content` | `($data): ContentEntity` | Create a Content entity instance. |
| `ContentImportSource` | `($data): ContentImportSourceEntity` | Create a ContentImportSource entity instance. |
| `ContentSearch` | `($data): ContentSearchEntity` | Create a ContentSearch entity instance. |
| `ContentSnippet` | `($data): ContentSnippetEntity` | Create a ContentSnippet entity instance. |
| `Conversation` | `($data): ConversationEntity` | Create a Conversation entity instance. |
| `ConversationAttribute` | `($data): ConversationAttributeEntity` | Create a ConversationAttribute entity instance. |
| `ConversationAttributeList` | `($data): ConversationAttributeListEntity` | Create a ConversationAttributeList entity instance. |
| `ConversationList` | `($data): ConversationListEntity` | Create a ConversationList entity instance. |
| `ConversationParticipant` | `($data): ConversationParticipantEntity` | Create a ConversationParticipant entity instance. |
| `CustomObjectInstance` | `($data): CustomObjectInstanceEntity` | Create a CustomObjectInstance entity instance. |
| `Data` | `($data): DataEntity` | Create a Data entity instance. |
| `DataAttribute` | `($data): DataAttributeEntity` | Create a DataAttribute entity instance. |
| `DataConnector` | `($data): DataConnectorEntity` | Create a DataConnector entity instance. |
| `DataConnectorExecutionResult` | `($data): DataConnectorExecutionResultEntity` | Create a DataConnectorExecutionResult entity instance. |
| `DataConnectorExecutionResultList` | `($data): DataConnectorExecutionResultListEntity` | Create a DataConnectorExecutionResultList entity instance. |
| `DataEvent` | `($data): DataEventEntity` | Create a DataEvent entity instance. |
| `DataEventSummary` | `($data): DataEventSummaryEntity` | Create a DataEventSummary entity instance. |
| `DataExport` | `($data): DataExportEntity` | Create a DataExport entity instance. |
| `Deleted` | `($data): DeletedEntity` | Create a Deleted entity instance. |
| `DeletedArticleObject` | `($data): DeletedArticleObjectEntity` | Create a DeletedArticleObject entity instance. |
| `DeletedCompanyObject` | `($data): DeletedCompanyObjectEntity` | Create a DeletedCompanyObject entity instance. |
| `DeletedDataConnectorObject` | `($data): DeletedDataConnectorObjectEntity` | Create a DeletedDataConnectorObject entity instance. |
| `DeletedInternalArticleObject` | `($data): DeletedInternalArticleObjectEntity` | Create a DeletedInternalArticleObject entity instance. |
| `DeletedObject` | `($data): DeletedObjectEntity` | Create a DeletedObject entity instance. |
| `Email` | `($data): EmailEntity` | Create an Email entity instance. |
| `ExternalPage` | `($data): ExternalPageEntity` | Create an ExternalPage entity instance. |
| `FinAgent` | `($data): FinAgentEntity` | Create a FinAgent entity instance. |
| `HandlingEvent` | `($data): HandlingEventEntity` | Create a HandlingEvent entity instance. |
| `HelpCenter` | `($data): HelpCenterEntity` | Create a HelpCenter entity instance. |
| `InternalArticle` | `($data): InternalArticleEntity` | Create an InternalArticle entity instance. |
| `InternalArticleSearch` | `($data): InternalArticleSearchEntity` | Create an InternalArticleSearch entity instance. |
| `IpAllowlist` | `($data): IpAllowlistEntity` | Create an IpAllowlist entity instance. |
| `Job` | `($data): JobEntity` | Create a Job entity instance. |
| `Macro` | `($data): MacroEntity` | Create a Macro entity instance. |
| `MergeHistory` | `($data): MergeHistoryEntity` | Create a MergeHistory entity instance. |
| `Message` | `($data): MessageEntity` | Create a Message entity instance. |
| `NewsItem` | `($data): NewsItemEntity` | Create a NewsItem entity instance. |
| `Newsfeed` | `($data): NewsfeedEntity` | Create a Newsfeed entity instance. |
| `Note` | `($data): NoteEntity` | Create a Note entity instance. |
| `OfficeHour` | `($data): OfficeHourEntity` | Create an OfficeHour entity instance. |
| `OfficeHoursException` | `($data): OfficeHoursExceptionEntity` | Create an OfficeHoursException entity instance. |
| `OfficeHoursSchedule` | `($data): OfficeHoursScheduleEntity` | Create an OfficeHoursSchedule entity instance. |
| `Paginated` | `($data): PaginatedEntity` | Create a Paginated entity instance. |
| `PhoneSwitch` | `($data): PhoneSwitchEntity` | Create a PhoneSwitch entity instance. |
| `ReportingData` | `($data): ReportingDataEntity` | Create a ReportingData entity instance. |
| `ReportingDataExport` | `($data): ReportingDataExportEntity` | Create a ReportingDataExport entity instance. |
| `Segment` | `($data): SegmentEntity` | Create a Segment entity instance. |
| `SideConversation` | `($data): SideConversationEntity` | Create a SideConversation entity instance. |
| `Subscription` | `($data): SubscriptionEntity` | Create a Subscription entity instance. |
| `SubscriptionType` | `($data): SubscriptionTypeEntity` | Create a SubscriptionType entity instance. |
| `Tag` | `($data): TagEntity` | Create a Tag entity instance. |
| `Team` | `($data): TeamEntity` | Create a Team entity instance. |
| `TeamMetricList` | `($data): TeamMetricListEntity` | Create a TeamMetricList entity instance. |
| `Ticket` | `($data): TicketEntity` | Create a Ticket entity instance. |
| `TicketList` | `($data): TicketListEntity` | Create a TicketList entity instance. |
| `TicketReply` | `($data): TicketReplyEntity` | Create a TicketReply entity instance. |
| `TicketState` | `($data): TicketStateEntity` | Create a TicketState entity instance. |
| `TicketType` | `($data): TicketTypeEntity` | Create a TicketType entity instance. |
| `TicketTypeAttribute` | `($data): TicketTypeAttributeEntity` | Create a TicketTypeAttribute entity instance. |
| `Visitor` | `($data): VisitorEntity` | Create a Visitor entity instance. |
| `WhatsappMessageStatus` | `($data): WhatsappMessageStatusEntity` | Create a WhatsappMessageStatus entity instance. |
| `WhatsappMessageStatusList` | `($data): WhatsappMessageStatusListEntity` | Create a WhatsappMessageStatusList entity instance. |
| `Workflow` | `($data): WorkflowEntity` | Create a Workflow entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Operations: List.

API path: `/admins/activity_logs`

#### ActivityLogEventType

| Field | Description |
| --- | --- |
| `event_types` | An array of activity log event type strings. |
| `type` | String representing the object's type. |

Operations: List.

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

Operations: Create.

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

Operations: List, Load, Update.

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

Operations: List.

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

Operations: Create, Load.

API path: `/fin_voice/register`

#### AiContent

| Field | Description |
| --- | --- |

Operations: Remove.

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

Operations: Create, List, Load, Update.

API path: `/articles/{id}/draft/publish`

#### ArticleSearch

| Field | Description |
| --- | --- |
| `data` | An object containing the results of the search. |
| `pages` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | The total number of Articles matching the search query |
| `type` | The type of the object - `list`. |

Operations: Load.

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

Operations: Load.

API path: `/articles/{article_id}/versions/{id}`

#### ArticleVersionList

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: List.

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

Operations: List.

API path: `/contacts/{id}/banners`

#### BannerDismiss

| Field | Description |
| --- | --- |
| `dismissed` | Whether the banner view is dismissed. |
| `id` |  |
| `type` | String representing the object's type. |
| `view_id` | The id of the dismissed banner view. |

Operations: Create.

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

Operations: List, Load.

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

Operations: Create, List, Load.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: List.

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

Operations: List.

API path: `/companies/{company_id}/segments`

#### CompanyList

| Field | Description |
| --- | --- |
| `data` | An array containing Company Objects. |
| `pages` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | The total number of companies. |
| `type` | The type of object - `list`. |

Operations: Create.

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

Operations: List.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: List.

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

Operations: Create.

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

Operations: List.

API path: `/contacts/{contact_id}/segments`

#### Content

| Field | Description |
| --- | --- |

Operations: Create.

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

Operations: Create, List, Load, Update.

API path: `/ai/content_import_sources`

#### ContentSearch

| Field | Description |
| --- | --- |
| `data` | The list of matched content items. |
| `pages` | Pagination metadata, including links to neighbouring pages. |
| `total_count` | Total number of results matching the query. |
| `type` | Always `list`. |

Operations: List.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: Create, Load, Remove, Update.

API path: `/conversations/attributes/{id}/options`

#### ConversationAttributeList

| Field | Description |
| --- | --- |
| `data` | A list of conversation attributes. |
| `type` | The type of the object. |

Operations: List.

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

Operations: Create.

API path: `/conversations/search`

#### ConversationParticipant

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, Remove.

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

Operations: Create, Load, Remove.

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

Operations: Create, Load.

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

Operations: Create, List, Update.

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

Operations: Create, List, Load, Update.

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

Operations: Load.

API path: `/data_connectors/{data_connector_id}/execution_results/{id}`

#### DataConnectorExecutionResultList

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List.

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

Operations: Create.

API path: `/events`

#### DataEventSummary

| Field | Description |
| --- | --- |
| `count` | The number of times the event was sent |
| `description` | The description of the event |
| `first` | The first time the event was sent |
| `last` | The last time the event was sent |
| `name` | The name of the event |

Operations: List.

API path: `/events`

#### DataExport

| Field | Description |
| --- | --- |
| `download_expires_at` | The time after which you will not be able to access the data. |
| `download_url` | The location where you can download your data. |
| `job_identifier` | The identifier for your job. |
| `status` | The current state of your job. |

Operations: Create.

API path: `/export/cancel/{job_identifier}`

#### Deleted

| Field | Description |
| --- | --- |
| `deleted_at` | The time when the conversation was deleted. |
| `id` | The ID of the deleted conversation. |
| `metrics_retained` | Whether reporting metrics are retained for this conversation ID |
| `type` | String representing the object's type. |

Operations: List.

API path: `/conversations/deleted`

#### DeletedArticleObject

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/articles/{article_id}`

#### DeletedCompanyObject

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/companies/{company_id}`

#### DeletedDataConnectorObject

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

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

Operations: Create, List, Remove.

API path: `/internal_articles`

#### DeletedObject

| Field | Description |
| --- | --- |

Operations: Remove.

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

Operations: List, Load.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: Create.

API path: `/fin/csat`

#### HandlingEvent

| Field | Description |
| --- | --- |
| `reason` | Optional reason for the event (e.g., "Paused", "Away") |
| `teammate` | A reference to a teammate |
| `timestamp` | ISO8601 timestamp when the event occurred |
| `type` | The type of handling event |

Operations: List.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: Load, Update.

API path: `/internal_articles/{internal_article_id}`

#### InternalArticleSearch

| Field | Description |
| --- | --- |
| `data` | An object containing the results of the search. |
| `pages` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | The total number of Internal Articles matching the search query |
| `type` | The type of the object - `list`. |

Operations: Load.

API path: `/internal_articles/search`

#### IpAllowlist

| Field | Description |
| --- | --- |
| `enabled` | Whether the IP allowlist is enabled for the workspace. |
| `ip_allowlist` | List of allowed IP addresses and/or IP ranges in CIDR notation. |
| `type` | String representing the object's type. |

Operations: List, Update.

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

Operations: Create, Load.

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

Operations: List, Load.

API path: `/macros`

#### MergeHistory

| Field | Description |
| --- | --- |
| `merged_at` | (Unix timestamp in seconds) The time when the merge occurred. |
| `source_contact_id` | The Intercom ID of the contact that was merged into this contact. |
| `source_contact_role` | The role of the contact that was merged in. |
| `type` | The type of object. |

Operations: List.

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

Operations: Create.

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

Operations: Create, Load, Update.

API path: `/news/news_items`

#### Newsfeed

| Field | Description |
| --- | --- |
| `created_at` | Timestamp for when the newsfeed was created. |
| `id` | The unique identifier for the newsfeed which is given by Intercom. |
| `name` | The name of the newsfeed. |
| `type` | The type of object. |
| `updated_at` | Timestamp for when the newsfeed was last updated. |

Operations: Load.

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

Operations: Create, List, Load.

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

Operations: Create, List, Remove.

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

Operations: Create, List, Load, Update.

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

Operations: Load, Update.

API path: `/office_hours_schedules/{id}`

#### Paginated

| Field | Description |
| --- | --- |
| `data` | An array of Objects |
| `pages` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | A count of the total number of objects. |
| `type` | The type of object |

Operations: List.

API path: `/news/newsfeeds/{newsfeed_id}/items`

#### PhoneSwitch

| Field | Description |
| --- | --- |
| `custom_attributes` | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `phone` | Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger. |
| `type` |  |

Operations: Create.

API path: `/phone_call_redirects`

#### ReportingData

| Field | Description |
| --- | --- |
| `download_expires_at` |  |
| `download_url` |  |
| `job_identifier` |  |
| `status` |  |

Operations: Load.

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

Operations: Create, List.

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

Operations: List, Load.

API path: `/segments`

#### SideConversation

| Field | Description |
| --- | --- |
| `conversation_parts` | The conversation parts (messages) in this side conversation. |
| `side_conversation_id` | The unique identifier for the side conversation. |
| `total_count` | The total number of conversation parts in this side conversation. |

Operations: List.

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

Operations: Create, List, Remove.

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

Operations: List.

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

Operations: Create, List, Load, Remove.

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

Operations: List, Load.

API path: `/teams`

#### TeamMetricList

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List.

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

Operations: Create, Load, Remove, Update.

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

Operations: Create.

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

Operations: Create.

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

Operations: List.

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

Operations: Create, List, Load, Update.

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

Operations: Create, Update.

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

Operations: Load, Update.

API path: `/visitors`

#### WhatsappMessageStatus

| Field | Description |
| --- | --- |
| `details` | Detailed error information |
| `message` | Error message |

Operations: Load.

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

Operations: List.

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

Operations: Load.

API path: `/export/workflows/{id}`



## Entities


### ActivityLog

Create an instance: `$activity_log = $client->ActivityLog();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_description` | `string` | A sentence or two describing the activity. |
| `activity_type` | `string` |  |
| `created_at` | `int` | The time the activity was created. |
| `id` | `string` | The id representing the activity. |
| `metadata` | `array` | Additional data provided about Admin activity. |
| `performed_by` | `array` | Details about the Admin involved in the activity. |

#### Example: List

```php
// list() returns an array of ActivityLog records (throws on error).
$activity_logs = $client->ActivityLog()->list();
```


### ActivityLogEventType

Create an instance: `$activity_log_event_type = $client->ActivityLogEventType();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `event_types` | `array` | An array of activity log event type strings. |
| `type` | `string` | String representing the object's type. |

#### Example: List

```php
// list() returns an array of ActivityLogEventType records (throws on error).
$activity_log_event_types = $client->ActivityLogEventType()->list();
```


### ActivityLogList

Create an instance: `$activity_log_list = $client->ActivityLogList();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_logs` | `array` | An array of activity logs |
| `created_at_after` | `int` | The start date that you request data for. |
| `created_at_before` | `int` | The end date that you request data for. |
| `event_types` | `array` | An optional list of event types to filter activity logs by. |
| `page` | `int` | The page number of results to return. |
| `pages` | `array` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `per_page` | `int` | The number of results per page. |
| `type` | `string` | String representing the object's type. |

#### Example: Create

```php
$activity_log_list = $client->ActivityLogList()->create([
    "created_at_after" => null, // int
]);
```


### Admin

Create an instance: `$admin = $client->Admin();`

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
| `away_mode_enabled` | `bool` | Identifies if this admin is currently set in away mode. |
| `away_mode_reassign` | `bool` | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `away_status_reason_id` | `int` | The unique identifier of the away status reason |
| `email` | `string` | The email of the admin. |
| `has_inbox_seat` | `bool` | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `id` | `string` | The id representing the admin. |
| `job_title` | `string` | The job title of the admin. |
| `name` | `string` | The name of the admin. |
| `role` | `array` | The role assigned to this admin. |
| `team_ids` | `array` | This object represents the avatar associated with the admin. |
| `team_priority_level` | `array` | Admin priority levels for teams |
| `type` | `string` | String representing the object's type. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Admin record (throws on error).
$admin = $client->Admin()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Admin records (throws on error).
$admins = $client->Admin()->list();
```


### AdminWithApp

Create an instance: `$admin_with_app = $client->AdminWithApp();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `array` | App that the admin belongs to. |
| `avatar` | `array` | This object represents the avatar associated with the admin. |
| `away_mode_enabled` | `bool` | Identifies if this admin is currently set in away mode. |
| `away_mode_reassign` | `bool` | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `email` | `string` | The email of the admin. |
| `email_verified` | `bool` | Identifies if this admin's email is verified. |
| `has_inbox_seat` | `bool` | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `id` | `string` | The id representing the admin. |
| `job_title` | `string` | The job title of the admin. |
| `name` | `string` | The name of the admin. |
| `team_ids` | `array` | This is a list of ids of the teams that this admin is part of. |
| `type` | `string` | String representing the object's type. |

#### Example: List

```php
// list() returns an array of AdminWithApp records (throws on error).
$admin_with_apps = $client->AdminWithApp()->list();
```


### AiCall

Create an instance: `$ai_call = $client->AiCall();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `int` | The workspace identifier |
| `call_id` | `string` | External call identifier from the call provider |
| `call_summary` | `string` | Summary of the call conversation, truncated to 256 characters. |
| `call_transcript` | `array` | Array of transcript entries for the call |
| `data` | `array` | Additional metadata about the call |
| `external_call_id` | `string` | The external call identifier from the call provider |
| `id` | `int` | The unique identifier for the external reference |
| `intent` | `array` | Array of intent classifications for the call |
| `intercom_call_id` | `string` | The Intercom call identifier, if the call has been matched |
| `intercom_conversation_id` | `string` | The Intercom conversation identifier, if a conversation has been created |
| `phone_number` | `string` | Phone number in E.164 format for the call |
| `source` | `string` | Source of the call. |
| `status` | `string` | Status of the call. |
| `user_phone_number` | `string` | Phone number in E.164 format for the call |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AiCall record (throws on error).
$ai_call = $client->AiCall()->load(["conversation_id" => "conversation_id"]);
```

#### Example: Create

```php
$ai_call = $client->AiCall()->create([
    "call_id" => null, // string
    "phone_number" => null, // string
]);
```


### AiContent

Create an instance: `$ai_content = $client->AiContent();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Article

Create an instance: `$article = $client->Article();`

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
| `ai_chatbot_availability` | `bool` | Whether the article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | Whether the article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | Whether the article should be available for AI Sales Agent. |
| `audience_ids` | `array` | The list of audience IDs to assign to this article for Fin AI Agent targeting. |
| `author_id` | `int` | The id of the author of the article. |
| `body` | `string` | The content of the article in HTML. |
| `body_markdown` | `string` | The content of the article in markdown. |
| `conversions` | `int` | The number of conversations started from the article. |
| `created_at` | `int` | The time when the article was created. |
| `created_by_id` | `int` | The ID of the teammate who created the article. |
| `default_locale` | `string` | The default locale of the help center. |
| `description` | `string` | The description of the article. |
| `draft_updated_at` | `int` | The time, in seconds, when the staged draft was last edited, or `null` when there is no staged draft. |
| `exclude_from_article_suggestions` | `bool` | Whether the article is excluded from Fin AI Agent article suggestions. |
| `fin_involvements` | `int` | The number of conversations in which Fin AI Agent used this article, summed across all of the article's locales. |
| `fin_resolution_rate` | `float` | The percentage of Fin AI Agent involvements that resulted in a resolution (fin_resolutions / fin_involvements * 100). |
| `fin_resolutions` | `int` | The number of conversations Fin AI Agent resolved using this article, summed across all of the article's locales. |
| `happy_reaction_percentage` | `float` | The percentage of happy reactions the article has received against other types of reaction. |
| `has_unpublished_changes` | `bool` | Whether the published article has unpublished changes staged as a draft on top of its live content. |
| `help_center_audience` | `string` | The audience that can view this article in the Help Center. |
| `id` | `string` | The unique identifier for the article which is given by Intercom. |
| `neutral_reaction_percentage` | `float` | The percentage of neutral reactions the article has received against other types of reaction. |
| `parent_id` | `int` | The id of the article's parent collection or section. |
| `parent_ids` | `array` | The ids of the article's parent collections or sections. |
| `parent_type` | `string` | The type of parent, which can either be a `collection` or `section`. |
| `reactions` | `int` | The number of total reactions the article has received. |
| `sad_reaction_percentage` | `float` | The percentage of sad reactions the article has received against |
| `scheduled_publish_at` | `string` | ISO 8601 timestamp at which to schedule a future publish of the article. |
| `scheduled_unpublish_at` | `string` | ISO 8601 timestamp at which to schedule a future unpublish of the article. |
| `state` | `string` | Whether the article will be `published` or will be a `draft`. |
| `tags` | `array` | A list of tags objects associated with a conversation |
| `title` | `string` | The title of the article.For multilingual articles, this will be the title of the default language's content. |
| `translated_content` | `array` | The Translated Content of an Article. |
| `type` | `string` | The type of object - `article_statistics`. |
| `updated_at` | `int` | The time when the article was last updated. |
| `updated_by_id` | `int` | The ID of the teammate who last updated the article. |
| `url` | `string` | The URL of the article. |
| `views` | `int` | The number of total views the article has received. |
| `workspace_id` | `string` | The id of the workspace which the article belongs to. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Article record (throws on error).
$article = $client->Article()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Article records (throws on error).
$articles = $client->Article()->list();
```

#### Example: Create

```php
$article = $client->Article()->create([
    "author_id" => null, // int
    "title" => null, // string
]);
```


### ArticleSearch

Create an instance: `$article_search = $client->ArticleSearch();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` | An object containing the results of the search. |
| `pages` | `array` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | The total number of Articles matching the search query |
| `type` | `string` | The type of the object - `list`. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ArticleSearch record (throws on error).
$article_search = $client->ArticleSearch()->load();
```


### ArticleVersion

Create an instance: `$article_version = $client->ArticleVersion();`

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
| `created_at` | `int` | The time the version was created, as a UTC Unix timestamp. |
| `created_by_id` | `string` | The id of the teammate who created this version. |
| `created_via` | `string` | How this version was created (for example `web`, `api`). |
| `description` | `string` | The description of the article at this version. |
| `from_version_id` | `string` | The id of the version this version was created from, or `null` if this is the first version. |
| `id` | `string` | The unique identifier for the version. |
| `state` | `string` | Whether this version is the currently published version of the article (`published`) or an earlier non-live version (`draft`). |
| `title` | `string` | The title of the article at this version. |
| `type` | `string` | String representing the object's type. |
| `updated_at` | `int` | The time the version was last updated, as a UTC Unix timestamp. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ArticleVersion record (throws on error).
$article_version = $client->ArticleVersion()->load(["id" => "article_version_id", "article_id" => 1]);
```


### ArticleVersionList

Create an instance: `$article_version_list = $client->ArticleVersionList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```php
// list() returns an array of ArticleVersionList records (throws on error).
$article_version_lists = $client->ArticleVersionList()->list();
```


### Audience

Create an instance: `$audience = $client->Audience();`

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
| `created_at` | `int` | The time the audience was created as a Unix timestamp. |
| `id` | `string` | The unique identifier representing the audience. |
| `name` | `string` | The name of the audience. |
| `predicates` | `array` | The predicates that define which contacts belong to the audience. |
| `role_predicates` | `array` | Role-based predicates that further filter audience membership by contact role. |
| `type` | `string` | The type of object. |
| `updated_at` | `int` | The time the audience was last updated as a Unix timestamp. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Audience record (throws on error).
$audience = $client->Audience()->load(["id" => "audience_id"]);
```

#### Example: List

```php
// list() returns an array of Audience records (throws on error).
$audiences = $client->Audience()->list();
```

#### Example: Create

```php
$audience = $client->Audience()->create([
]);
```


### AwayStatusReason

Create an instance: `$away_status_reason = $client->AwayStatusReason();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | The Unix timestamp when the status reason was created |
| `deleted` | `bool` | Whether the status reason has been soft deleted |
| `emoji` | `string` | The emoji associated with the status reason |
| `id` | `string` | The unique identifier for the away status reason |
| `label` | `string` | The display text for the away status reason |
| `order` | `int` | The display order of the status reason |
| `type` | `string` |  |
| `updated_at` | `int` | The Unix timestamp when the status reason was last updated |

#### Example: List

```php
// list() returns an array of AwayStatusReason records (throws on error).
$away_status_reasons = $client->AwayStatusReason()->list();
```


### Banner

Create an instance: `$banner = $client->Banner();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `array` | The action a contact can take on the banner, or `null` when the banner has no action. |
| `body` | `string` | The banner's body content as HTML. |
| `client_targeting` | `array` | Reserved for future use. |
| `created_at` | `int` | The time the contact's view of this banner was created. |
| `id` | `string` | The id of the banner. |
| `position` | `string` | Where the banner is positioned. |
| `show_dismiss_button` | `bool` | Whether the banner should display a dismiss control. |
| `style` | `string` | How the banner is displayed. |
| `title` | `string` | The banner's title. |
| `type` | `string` | String representing the object's type. |
| `view_id` | `string` | The id of the contact's view of this banner. |

#### Example: List

```php
// list() returns an array of Banner records (throws on error).
$banners = $client->Banner()->list();
```


### BannerDismiss

Create an instance: `$banner_dismiss = $client->BannerDismiss();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dismissed` | `bool` | Whether the banner view is dismissed. |
| `id` | `string` |  |
| `type` | `string` | String representing the object's type. |
| `view_id` | `string` | The id of the dismissed banner view. |

#### Example: Create

```php
$banner_dismiss = $client->BannerDismiss()->create([
    "contact_id" => null, // string
    "id" => null, // string
]);
```


### Brand

Create an instance: `$brand = $client->Brand();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Unix timestamp of brand creation |
| `default_address_settings_id` | `string` | Default email settings ID for this brand |
| `help_center_id` | `string` | Associated help center identifier |
| `id` | `string` | Unique brand identifier. |
| `is_default` | `bool` | Whether this is the workspace's default brand |
| `name` | `string` | Display name of the brand |
| `type` | `string` | The type of object |
| `updated_at` | `int` | Unix timestamp of last modification |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Brand record (throws on error).
$brand = $client->Brand()->load(["id" => "brand_id"]);
```

#### Example: List

```php
// list() returns an array of Brand records (throws on error).
$brands = $client->Brand()->list();
```


### Call

Create an instance: `$call = $client->Call();`

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
| `answered_at` | `mixed` |  |
| `call_type` | `string` | The type of call. |
| `contact_id` | `string` | The id of the contact associated with the call, if any. |
| `conversation_id` | `string` | The id of the conversation associated with the call, if any. |
| `created_at` | `mixed` |  |
| `direction` | `string` | The direction of the call. |
| `ended_at` | `mixed` |  |
| `ended_reason` | `string` | The reason for the call end, if applicable. |
| `fin_recording_url` | `string` | API URL to the AI Agent (Fin) call recording if available. |
| `fin_transcription_url` | `string` | API URL to the AI Agent (Fin) call transcript if available. |
| `id` | `string` | The id of the call. |
| `initiated_at` | `mixed` |  |
| `phone` | `string` | The phone number involved in the call, in E.164 format. |
| `recording_url` | `string` | API URL to download or redirect to the call recording if available. |
| `state` | `string` | The current state of the call. |
| `transcription_url` | `string` | API URL to download or redirect to the call transcript if available. |
| `type` | `string` | String representing the object's type. |
| `updated_at` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Call record (throws on error).
$call = $client->Call()->load(["id" => "call_id"]);
```

#### Example: List

```php
// list() returns an array of Call records (throws on error).
$calls = $client->Call()->list();
```

#### Example: Create

```php
$call = $client->Call()->create([
]);
```


### Company

Create an instance: `$company = $client->Company();`

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
| `created_at` | `int` | The time the company was added in Intercom. |
| `custom_attributes` | `array` | The custom attributes you have set on the company. |
| `id` | `string` | The Intercom defined id representing the company. |
| `industry` | `string` | The industry that the company operates in. |
| `last_request_at` | `int` | The time the company last recorded making a request. |
| `monthly_spend` | `int` | How much revenue the company generates for your business. |
| `name` | `string` | The name of the company. |
| `notes` | `array` | The list of notes associated with the company |
| `plan` | `array` | The name of the plan you have associated with the company. |
| `remote_created_at` | `int` | The time the company was created by you. |
| `segments` | `array` | The list of segments associated with the company |
| `session_count` | `int` | How many sessions the company has recorded. |
| `size` | `int` | The number of employees in the company. |
| `tags` | `array` | The list of tags associated with the company |
| `type` | `string` | Value is `company` |
| `update_last_request_at` | `bool` | Set to true to update the company's last seen time to now. |
| `updated_at` | `int` | The last time the company was updated. |
| `user_count` | `int` | The number of users in the company. |
| `website` | `string` | The URL for the company website. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Company record (throws on error).
$company = $client->Company()->load(["id" => "company_id"]);
```

#### Example: List

```php
// list() returns an array of Company records (throws on error).
$companys = $client->Company()->list();
```

#### Example: Create

```php
$company = $client->Company()->create([
]);
```


### CompanyAttachedContact

Create an instance: `$company_attached_contact = $client->CompanyAttachedContact();`

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
| `android_last_seen_at` | `int` | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `android_os_version` | `string` | The version of the Android OS which the contact is using. |
| `android_sdk_version` | `string` | The version of the Android SDK which the contact is using. |
| `avatar` | `array` |  |
| `browser` | `string` | The name of the browser which the contact is using. |
| `browser_language` | `string` | The language set by the browser which the contact is using. |
| `browser_version` | `string` | The version of the browser which the contact is using. |
| `companies` | `array` | An object with metadata about companies attached to a contact . |
| `created_at` | `int` | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `array` | The custom attributes which are set for the contact. |
| `email` | `string` | The contact's email. |
| `email_domain` | `string` | The contact's email domain. |
| `external_id` | `string` | The unique identifier for the contact which is provided by the Client. |
| `has_hard_bounced` | `bool` | Whether the contact has had an email sent to them hard bounce. |
| `id` | `string` | The unique identifier for the contact which is given by Intercom. |
| `ios_app_name` | `string` | The name of the iOS app which the contact is using. |
| `ios_app_version` | `string` | The version of the iOS app which the contact is using. |
| `ios_device` | `string` | The iOS device which the contact is using. |
| `ios_last_seen_at` | `int` | (Unix timestamp in seconds) The last time the contact used the iOS app. |
| `ios_os_version` | `string` | The version of iOS which the contact is using. |
| `ios_sdk_version` | `string` | The version of the iOS SDK which the contact is using. |
| `language_override` | `string` | A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change. |
| `last_contacted_at` | `int` | (Unix timestamp in seconds) The time when the contact was last messaged. |
| `last_email_clicked_at` | `int` | (Unix timestamp in seconds) The time when the contact last clicked a link in an email. |
| `last_email_opened_at` | `int` | (Unix timestamp in seconds) The time when the contact last opened an email. |
| `last_replied_at` | `int` | (Unix timestamp in seconds) The time when the contact last messaged in. |
| `last_seen_at` | `int` | (Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually). |
| `location` | `array` | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `bool` | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `array` | A list of contacts that were merged into this contact. |
| `name` | `string` | The contacts name. |
| `notes` | `array` | An object containing notes meta data about the notes that a contact has. |
| `os` | `string` | The operating system which the contact is using. |
| `owner_id` | `string` | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `string` | The contacts phone. |
| `role` | `string` | The role of the contact. |
| `signed_up_at` | `int` | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `array` | An object containing social profiles that a contact has. |
| `tags` | `array` | An object containing tags meta data about the tags that a contact has. |
| `type` | `string` | The type of object. |
| `unsubscribed_from_emails` | `bool` | Whether the contact is unsubscribed from emails. |
| `updated_at` | `int` | (Unix timestamp in seconds) The time when the contact was last updated. |
| `workspace_id` | `string` | The id of the workspace which the contact belongs to. |

#### Example: List

```php
// list() returns an array of CompanyAttachedContact records (throws on error).
$company_attached_contacts = $client->CompanyAttachedContact()->list();
```


### CompanyAttachedSegment

Create an instance: `$company_attached_segment = $client->CompanyAttachedSegment();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` | The number of items in the user segment. |
| `created_at` | `int` | The time the segment was created. |
| `id` | `string` | The unique identifier representing the segment. |
| `name` | `string` | The name of the segment. |
| `person_type` | `string` | Type of the contact: contact (lead) or user. |
| `type` | `string` | The type of object. |
| `updated_at` | `int` | The time the segment was updated. |

#### Example: List

```php
// list() returns an array of CompanyAttachedSegment records (throws on error).
$company_attached_segments = $client->CompanyAttachedSegment()->list();
```


### CompanyList

Create an instance: `$company_list = $client->CompanyList();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` | An array containing Company Objects. |
| `pages` | `array` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | The total number of companies. |
| `type` | `string` | The type of object - `list`. |

#### Example: Create

```php
$company_list = $client->CompanyList()->create([
]);
```


### CompanyScroll

Create an instance: `$company_scroll = $client->CompanyScroll();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `string` | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | The company id you have defined for the company. |
| `created_at` | `int` | The time the company was added in Intercom. |
| `custom_attributes` | `array` | The custom attributes you have set on the company. |
| `id` | `string` | The Intercom defined id representing the company. |
| `industry` | `string` | The industry that the company operates in. |
| `last_request_at` | `int` | The time the company last recorded making a request. |
| `monthly_spend` | `int` | How much revenue the company generates for your business. |
| `name` | `string` | The name of the company. |
| `notes` | `array` | The list of notes associated with the company |
| `plan` | `array` |  |
| `remote_created_at` | `int` | The time the company was created by you. |
| `segments` | `array` | The list of segments associated with the company |
| `session_count` | `int` | How many sessions the company has recorded. |
| `size` | `int` | The number of employees in the company. |
| `tags` | `array` | The list of tags associated with the company |
| `type` | `string` | Value is `company` |
| `updated_at` | `int` | The last time the company was updated. |
| `user_count` | `int` | The number of users in the company. |
| `website` | `string` | The URL for the company website. |

#### Example: List

```php
// list() returns an array of CompanyScroll records (throws on error).
$company_scrolls = $client->CompanyScroll()->list();
```


### Contact

Create an instance: `$contact = $client->Contact();`

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
| `android_last_seen_at` | `int` | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `android_os_version` | `string` | The version of the Android OS which the contact is using. |
| `android_sdk_version` | `string` | The version of the Android SDK which the contact is using. |
| `avatar` | `array` |  |
| `browser` | `string` | The name of the browser which the contact is using. |
| `browser_language` | `string` | The language set by the browser which the contact is using. |
| `browser_version` | `string` | The version of the browser which the contact is using. |
| `companies` | `array` | An object with metadata about companies attached to a contact . |
| `created_at` | `int` | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `array` | The custom attributes which are set for the contact. |
| `email` | `string` | The contact's email. |
| `email_domain` | `string` | The contact's email domain. |
| `enabled_push_messaging` | `bool` | If the user has enabled push messaging. |
| `external_id` | `string` | The unique identifier for the contact which is provided by the Client. |
| `has_hard_bounced` | `bool` | Whether the contact has had an email sent to them hard bounce. |
| `id` | `string` | The unique identifier for the contact which is given by Intercom. |
| `ios_app_name` | `string` | The name of the iOS app which the contact is using. |
| `ios_app_version` | `string` | The version of the iOS app which the contact is using. |
| `ios_device` | `string` | The iOS device which the contact is using. |
| `ios_last_seen_at` | `int` | (Unix timestamp in seconds) The last time the contact used the iOS app. |
| `ios_os_version` | `string` | The version of iOS which the contact is using. |
| `ios_sdk_version` | `string` | The version of the iOS SDK which the contact is using. |
| `language_override` | `string` | A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change. |
| `last_contacted_at` | `int` | (Unix timestamp in seconds) The time when the contact was last messaged. |
| `last_email_clicked_at` | `int` | (Unix timestamp in seconds) The time when the contact last clicked a link in an email. |
| `last_email_opened_at` | `int` | (Unix timestamp in seconds) The time when the contact last opened an email. |
| `last_replied_at` | `int` | (Unix timestamp in seconds) The time when the contact last messaged in. |
| `last_seen_at` | `int` | (Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually). |
| `location` | `array` | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `bool` | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `array` | A list of contacts that were merged into this contact. |
| `name` | `string` | The contacts name. |
| `notes` | `array` | An object containing notes meta data about the notes that a contact has. |
| `os` | `string` | The operating system which the contact is using. |
| `owner_id` | `string` | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `string` | The contacts phone. |
| `role` | `string` | The role of the contact. |
| `signed_up_at` | `int` | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `array` | An object containing social profiles that a contact has. |
| `tags` | `array` | An object containing tags meta data about the tags that a contact has. |
| `type` | `string` | The type of object. |
| `unsubscribed_from_emails` | `bool` | Whether the contact is unsubscribed from emails. |
| `updated_at` | `int` | (Unix timestamp in seconds) The time when the contact was last updated. |
| `user` | `array` | The unique identifiers retained after converting or merging. |
| `visitor` | `array` | The unique identifiers to convert a single Visitor. |
| `workspace_id` | `string` | The id of the workspace which the contact belongs to. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Contact record (throws on error).
$contact = $client->Contact()->load(["id" => "contact_id"]);
```

#### Example: List

```php
// list() returns an array of Contact records (throws on error).
$contacts = $client->Contact()->list();
```

#### Example: Create

```php
$contact = $client->Contact()->create([
    "user" => null, // array
    "visitor" => null, // array
]);
```


### ContactAttachedCompany

Create an instance: `$contact_attached_company = $client->ContactAttachedCompany();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `string` | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | The company id you have defined for the company. |
| `created_at` | `int` | The time the company was added in Intercom. |
| `custom_attributes` | `array` | The custom attributes you have set on the company. |
| `id` | `string` | The Intercom defined id representing the company. |
| `industry` | `string` | The industry that the company operates in. |
| `last_request_at` | `int` | The time the company last recorded making a request. |
| `monthly_spend` | `int` | How much revenue the company generates for your business. |
| `name` | `string` | The name of the company. |
| `notes` | `array` | The list of notes associated with the company |
| `plan` | `array` |  |
| `remote_created_at` | `int` | The time the company was created by you. |
| `segments` | `array` | The list of segments associated with the company |
| `session_count` | `int` | How many sessions the company has recorded. |
| `size` | `int` | The number of employees in the company. |
| `tags` | `array` | The list of tags associated with the company |
| `type` | `string` | Value is `company` |
| `updated_at` | `int` | The last time the company was updated. |
| `user_count` | `int` | The number of users in the company. |
| `website` | `string` | The URL for the company website. |

#### Example: List

```php
// list() returns an array of ContactAttachedCompany records (throws on error).
$contact_attached_companys = $client->ContactAttachedCompany()->list();
```


### ContactList

Create an instance: `$contact_list = $client->ContactList();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` | The list of contact objects |
| `pages` | `array` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `array` |  |
| `query` | `mixed` |  |
| `sort` | `array` | An optional object to sort the results by. |
| `total_count` | `int` | A count of the total number of objects. |
| `type` | `string` | Always list |

#### Example: Create

```php
$contact_list = $client->ContactList()->create([
    "query" => null, // mixed
]);
```


### ContactSegment

Create an instance: `$contact_segment = $client->ContactSegment();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` | The number of items in the user segment. |
| `created_at` | `int` | The time the segment was created. |
| `id` | `string` | The unique identifier representing the segment. |
| `name` | `string` | The name of the segment. |
| `person_type` | `string` | Type of the contact: contact (lead) or user. |
| `type` | `string` | The type of object. |
| `updated_at` | `int` | The time the segment was updated. |

#### Example: List

```php
// list() returns an array of ContactSegment records (throws on error).
$contact_segments = $client->ContactSegment()->list();
```


### Content

Create an instance: `$content = $client->Content();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$content = $client->Content()->create([
]);
```


### ContentImportSource

Create an instance: `$content_import_source = $client->ContentImportSource();`

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
| `apply_audience_to_existing_content` | `bool` | When true, the audience will be applied to all existing external pages belonging to this content import source. |
| `audience_ids` | `array` | The unique identifiers for the audiences associated with this content import source. |
| `created_at` | `int` | The time when the content import source was created. |
| `id` | `int` | The unique identifier for the content import source which is given by Intercom. |
| `last_synced_at` | `int` | The time when the content import source was last synced. |
| `status` | `string` | The status of the content import source. |
| `sync_behavior` | `string` | If you intend to create or update External Pages via the API, this should be set to `api`. |
| `type` | `string` | Always external_page |
| `updated_at` | `int` | The time when the content import source was last updated. |
| `url` | `string` | The URL of the root of the external source. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ContentImportSource record (throws on error).
$content_import_source = $client->ContentImportSource()->load(["id" => "content_import_source_id"]);
```

#### Example: List

```php
// list() returns an array of ContentImportSource records (throws on error).
$content_import_sources = $client->ContentImportSource()->list();
```

#### Example: Create

```php
$content_import_source = $client->ContentImportSource()->create([
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


### ContentSearch

Create an instance: `$content_search = $client->ContentSearch();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` | The list of matched content items. |
| `pages` | `array` | Pagination metadata, including links to neighbouring pages. |
| `total_count` | `int` | Total number of results matching the query. |
| `type` | `string` | Always `list`. |

#### Example: List

```php
// list() returns an array of ContentSearch records (throws on error).
$content_searchs = $client->ContentSearch()->list();
```


### ContentSnippet

Create an instance: `$content_snippet = $client->ContentSnippet();`

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
| `ai_chatbot_availability` | `bool` | Whether the content snippet is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | Whether the content snippet is available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | Whether the content snippet is available for AI Sales Agent. |
| `audience_ids` | `array` | The list of audience IDs this content snippet is targeted to for Fin AI Agent. |
| `body_markdown` | `string` | The body of the content snippet in markdown. |
| `chatbot_availability` | `int` | Deprecated. |
| `copilot_availability` | `int` | Deprecated. |
| `created_at` | `int` | The time the snippet was created as a UNIX timestamp. |
| `id` | `string` | The unique identifier for the content snippet. |
| `json_blocks` | `array` | The content blocks that make up the body of the snippet. |
| `locale` | `string` | The locale of the content snippet. |
| `title` | `string` | The title of the content snippet. |
| `type` | `string` | String representing the object's type. |
| `updated_at` | `int` | The time the snippet was last updated as a UNIX timestamp. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ContentSnippet record (throws on error).
$content_snippet = $client->ContentSnippet()->load(["id" => "content_snippet_id"]);
```

#### Example: List

```php
// list() returns an array of ContentSnippet records (throws on error).
$content_snippets = $client->ContentSnippet()->list();
```

#### Example: Create

```php
$content_snippet = $client->ContentSnippet()->create([
]);
```


### Conversation

Create an instance: `$conversation = $client->Conversation();`

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
| `admin_assignee_id` | `int` | The id of the admin assigned to the conversation. |
| `ai_agent` | `array` | Data related to AI Agent involvement in the conversation. |
| `ai_agent_participated` | `bool` | Indicates whether the AI Agent participated in the conversation. |
| `attachment_urls` | `array` | A list of image URLs that will be added as attachments. |
| `body` | `string` | The content of the message. |
| `brand_id` | `string` | The unique identifier of the brand to associate with this conversation. |
| `channel` | `array` | The channel through which the conversation was initiated and its current channel. |
| `company` | `array` | The company associated with the conversation. |
| `company_id` | `string` | The ID of the company that the conversation is associated with. |
| `contacts` | `array` | The list of contacts (users or leads) involved in this conversation. |
| `conversation_id` | `string` | The unique identifier (given by Intercom) for the conversation or customer ticket to link to the tracker ticket. |
| `conversation_parts` | `array` | A list of Conversation Part objects for each part message in the conversation. |
| `conversation_rating` | `array` | The Conversation Rating object which contains information on the rating and/or remark added by a Contact and the Admin assigned to the conversation. |
| `created_at` | `int` | The time the conversation was created. |
| `custom_attributes` | `array` | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `external_references` | `array` | References linking this conversation to records in an external helpdesk or CRM system. |
| `first_contact_reply` | `array` | An object containing information on the first users message. |
| `from` | `array` |  |
| `id` | `string` | The id representing the conversation. |
| `linked_objects` | `array` | An object containing metadata about linked conversations and linked tickets. |
| `monitor_evaluations` | `array` | QA monitor evaluations that flagged this conversation. |
| `open` | `bool` | Indicates whether a conversation is open (true) or closed (false). |
| `priority` | `string` | The priority level of the conversation. |
| `read` | `bool` | Indicates whether a conversation has been read. |
| `sales_agent` | `array` | Data related to Sales Agent involvement in the conversation. |
| `sales_agent_participated` | `bool` | Indicates whether the Sales Agent participated in the conversation. |
| `scorecards` | `array` | QA scorecard results for this conversation. |
| `sla_applied` | `array` | The SLA Applied object contains the details for which SLA has been applied to this conversation. |
| `snoozed_until` | `int` | If set this is the time in the future when this conversation will be marked as open. |
| `source` | `array` | The type of the conversation part that started this conversation. |
| `state` | `string` | Can be set to "open", "closed" or "snoozed". |
| `statistics` | `array` | A Statistics object containing all information required for reporting, with timestamps and calculated metrics. |
| `subject` | `string` | The title of the email. |
| `tags` | `array` | A list of tags objects associated with a conversation |
| `team_assignee_id` | `int` | The id of the team assigned to the conversation. |
| `teammates` | `array` | The list of teammates who participated in the conversation (wrote at least one conversation part). |
| `title` | `string` | The title given to the conversation. |
| `type` | `string` | Always conversation. |
| `updated_at` | `int` | The last time the conversation was updated. |
| `waiting_since` | `int` | The last time a Contact responded to an Admin. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Conversation record (throws on error).
$conversation = $client->Conversation()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Conversation records (throws on error).
$conversations = $client->Conversation()->list();
```

#### Example: Create

```php
$conversation = $client->Conversation()->create([
    "body" => null, // string
    "conversation_id" => null, // string
    "from" => null, // array
]);
```


### ConversationAttribute

Create an instance: `$conversation_attribute = $client->ConversationAttribute();`

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
| `archived` | `bool` |  |
| `created_at` | `int` |  |
| `data_type` | `string` |  |
| `description` | `string` | Readable description of the attribute. |
| `id` | `int` |  |
| `label` | `string` | The label for the new option. |
| `multiline` | `bool` | (String data type only) Whether this string attribute is multiline. |
| `name` | `string` | Name of the attribute. |
| `reference` | `array` | (Relationship data type only) Reference configuration for related objects. |
| `required` | `bool` | Whether this attribute is required. |
| `type` | `string` |  |
| `updated_at` | `int` |  |
| `visible_to_team_ids` | `array` | Team IDs that can see this attribute. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ConversationAttribute record (throws on error).
$conversation_attribute = $client->ConversationAttribute()->load(["id" => 1]);
```

#### Example: Create

```php
$conversation_attribute = $client->ConversationAttribute()->create([
    "label" => null, // string
    "reference" => null, // array
]);
```


### ConversationAttributeList

Create an instance: `$conversation_attribute_list = $client->ConversationAttributeList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` | A list of conversation attributes. |
| `type` | `string` | The type of the object. |

#### Example: List

```php
// list() returns an array of ConversationAttributeList records (throws on error).
$conversation_attribute_lists = $client->ConversationAttributeList()->list();
```


### ConversationList

Create an instance: `$conversation_list = $client->ConversationList();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversations` | `array` | The list of conversation objects |
| `pages` | `array` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `array` |  |
| `query` | `mixed` |  |
| `total_count` | `int` | A count of the total number of objects. |
| `type` | `string` | Always conversation.list |

#### Example: Create

```php
$conversation_list = $client->ConversationList()->create([
    "query" => null, // mixed
]);
```


### ConversationParticipant

Create an instance: `$conversation_participant = $client->ConversationParticipant();`

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

```php
$conversation_participant = $client->ConversationParticipant()->create([
    "id" => null, // string
]);
```


### CustomObjectInstance

Create an instance: `$custom_object_instance = $client->CustomObjectInstance();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` |  |
| `custom_attributes` | `array` | The custom attributes which are set for the Custom Object instance. |
| `data` | `array` | An array of Custom Object Instance objects. |
| `external_created_at` | `string` | The time when the Custom Object instance was created in the external system it originated from. |
| `external_id` | `string` | A unique identifier for the Custom Object instance in the external system it originated from. |
| `external_updated_at` | `string` | The time when the Custom Object instance was last updated in the external system it originated from. |
| `id` | `string` |  |
| `pages` | `array` | The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests. |
| `total_count` | `int` | A count of the total number of custom object instances. |
| `type` | `string` | The type of the object - `list`. |
| `updated_at` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CustomObjectInstance record (throws on error).
$custom_object_instance = $client->CustomObjectInstance()->load(["id" => "custom_object_instance_id"]);
```

#### Example: Create

```php
$custom_object_instance = $client->CustomObjectInstance()->create([
    "id" => null, // string
]);
```


### Data

Create an instance: `$data = $client->Data();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at_after` | `int` | The start date that you request data for. |
| `created_at_before` | `int` | The end date that you request data for. |
| `download_expires_at` | `string` | The time after which you will not be able to access the data. |
| `download_url` | `string` | The location where you can download your data. |
| `id` | `string` |  |
| `job_identifier` | `string` | The identifier for your job. |
| `status` | `string` | The current state of your job. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Data record (throws on error).
$data = $client->Data()->load(["id" => "data_id"]);
```

#### Example: Create

```php
$data = $client->Data()->create([
    "created_at_after" => null, // int
    "created_at_before" => null, // int
]);
```


### DataAttribute

Create an instance: `$data_attribute = $client->DataAttribute();`

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
| `api_writable` | `bool` | Can this attribute be updated through API |
| `archived` | `bool` | Is this attribute archived. |
| `created_at` | `int` | The time the attribute was created as a UTC Unix timestamp |
| `custom` | `bool` | Set to true if this is a CDA |
| `data_type` | `string` | The data type of the attribute. |
| `description` | `string` | Readable description of the attribute. |
| `full_name` | `string` | Full name of the attribute. |
| `id` | `int` | The unique identifier for the data attribute which is given by Intercom. |
| `label` | `string` | Readable name of the attribute (i.e. |
| `messenger_writable` | `bool` | Can this attribute be updated by the Messenger |
| `model` | `string` | Value is `contact` for user/lead attributes and `company` for company attributes. |
| `name` | `string` | Name of the attribute. |
| `options` | `array` | List of predefined options for attribute value. |
| `type` | `string` | Value is `data_attribute`. |
| `ui_writable` | `bool` | Can this attribute be updated in the UI |
| `updated_at` | `int` | The time the attribute was last updated as a UTC Unix timestamp |

#### Example: List

```php
// list() returns an array of DataAttribute records (throws on error).
$data_attributes = $client->DataAttribute()->list();
```

#### Example: Create

```php
$data_attribute = $client->DataAttribute()->create([
]);
```


### DataConnector

Create an instance: `$data_connector = $client->DataConnector();`

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
| `audiences` | `array` | The audience types this connector targets. |
| `body` | `string` | The request body template. |
| `bypass_authentication` | `bool` | Whether authentication is bypassed for this connector. |
| `client_function_name` | `string` | The name of the client-side function, if applicable. |
| `client_function_timeout_ms` | `int` | Timeout in milliseconds for the client function, if applicable. |
| `configuration_response_type` | `string` | The expected response format from the connector. |
| `created_at` | `string` | The time the data connector was created. |
| `created_by_admin_id` | `string` | The ID of the admin who created this connector. |
| `customer_authentication` | `bool` | Whether OTP authentication is enabled for this connector. |
| `data_inputs` | `array` | The input parameters accepted by this data connector. |
| `data_transformation_type` | `string` | The type of data transformation applied to the response. |
| `description` | `string` | A description of what this data connector does. |
| `direct_fin_usage` | `bool` | Whether this connector is used directly by Fin. |
| `execution_results_url` | `string` | The URL path to fetch execution results for this connector. |
| `execution_type` | `string` | How the connector executes. |
| `headers` | `array` | HTTP headers for the request. |
| `http_method` | `string` | The HTTP method used by the data connector. |
| `id` | `string` | The unique identifier for the data connector. |
| `mock_response` | `array` | A sample JSON response from the external API. |
| `name` | `string` | The name of the data connector. |
| `object_mappings` | `array` | Mappings from connector response objects to Intercom objects. |
| `response_fields` | `array` | The fields returned in the connector response. |
| `state` | `string` | The current state of the data connector. |
| `token_ids` | `array` | IDs of authentication tokens associated with this connector. |
| `type` | `string` | The type of object - `data_connector`. |
| `updated_at` | `string` | The time the data connector was last updated. |
| `updated_by_admin_id` | `string` | The ID of the admin who last updated this connector. |
| `url` | `string` | The URL of the external API endpoint. |
| `validate_missing_attributes` | `bool` | Whether to validate missing attributes before execution. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DataConnector record (throws on error).
$data_connector = $client->DataConnector()->load(["id" => "data_connector_id"]);
```

#### Example: List

```php
// list() returns an array of DataConnector records (throws on error).
$data_connectors = $client->DataConnector()->list();
```

#### Example: Create

```php
$data_connector = $client->DataConnector()->create([
]);
```


### DataConnectorExecutionResult

Create an instance: `$data_connector_execution_result = $client->DataConnectorExecutionResult();`

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
| `execution_time_ms` | `int` | The execution time in milliseconds. |
| `http_method` | `string` | The HTTP method used for the request. |
| `http_status` | `int` | The HTTP status code returned by the external API. |
| `id` | `string` | The unique identifier for the execution result. |
| `raw_response_body` | `string` | The raw (unmapped) response body. |
| `request_body` | `string` | The request body sent to the external API. |
| `request_url` | `string` | The request URL. |
| `response_body` | `string` | The response body from the external API. |
| `source_id` | `string` | The identifier of the source that triggered this execution. |
| `source_type` | `string` | The type of source that triggered this execution. |
| `success` | `bool` | Whether the execution was successful. |
| `type` | `string` | The type of object - `data_connector.execution`. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DataConnectorExecutionResult record (throws on error).
$data_connector_execution_result = $client->DataConnectorExecutionResult()->load(["id" => "data_connector_execution_result_id", "data_connector_id" => "data_connector_id"]);
```


### DataConnectorExecutionResultList

Create an instance: `$data_connector_execution_result_list = $client->DataConnectorExecutionResultList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```php
// list() returns an array of DataConnectorExecutionResultList records (throws on error).
$data_connector_execution_result_lists = $client->DataConnectorExecutionResultList()->list();
```


### DataEvent

Create an instance: `$data_event = $client->DataEvent();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | The time the event occurred as a UTC Unix timestamp |
| `email` | `string` | An email address for your user. |
| `event_name` | `string` | The name of the event that occurred. |
| `event_summaries` | `array` | A list of event summaries for the user. |
| `id` | `string` | The unique identifier for the contact (lead or user) which is given by Intercom. |
| `metadata` | `array` | Optional metadata about the event. |
| `user_id` | `string` | Your identifier for the user. |

#### Example: Create

```php
$data_event = $client->DataEvent()->create([
]);
```


### DataEventSummary

Create an instance: `$data_event_summary = $client->DataEventSummary();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` | The number of times the event was sent |
| `description` | `string` | The description of the event |
| `first` | `string` | The first time the event was sent |
| `last` | `string` | The last time the event was sent |
| `name` | `string` | The name of the event |

#### Example: List

```php
// list() returns an array of DataEventSummary records (throws on error).
$data_event_summarys = $client->DataEventSummary()->list();
```


### DataExport

Create an instance: `$data_export = $client->DataExport();`

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

```php
$data_export = $client->DataExport()->create([
    "job_identifier" => null, // string
]);
```


### Deleted

Create an instance: `$deleted = $client->Deleted();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deleted_at` | `int` | The time when the conversation was deleted. |
| `id` | `string` | The ID of the deleted conversation. |
| `metrics_retained` | `bool` | Whether reporting metrics are retained for this conversation ID |
| `type` | `string` | String representing the object's type. |

#### Example: List

```php
// list() returns an array of Deleted records (throws on error).
$deleteds = $client->Deleted()->list();
```


### DeletedArticleObject

Create an instance: `$deleted_article_object = $client->DeletedArticleObject();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DeletedCompanyObject

Create an instance: `$deleted_company_object = $client->DeletedCompanyObject();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DeletedDataConnectorObject

Create an instance: `$deleted_data_connector_object = $client->DeletedDataConnectorObject();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedInternalArticleObject

Create an instance: `$deleted_internal_article_object = $client->DeletedInternalArticleObject();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_chatbot_availability` | `bool` | Whether the internal article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | Whether the internal article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | Whether the internal article should be available for AI Sales Agent. |
| `audience_ids` | `array` | The list of audience IDs to target this internal article to for Fin AI Agent. |
| `author_id` | `int` | The id of the author of the article. |
| `body` | `string` | The content of the article in HTML. |
| `body_markdown` | `string` | The content of the article in markdown. |
| `created_at` | `int` | The time when the article was created. |
| `id` | `string` | The unique identifier for the article which is given by Intercom. |
| `locale` | `string` | The default locale of the article. |
| `owner_id` | `int` | The id of the owner of the article. |
| `title` | `string` | The title of the article. |
| `type` | `string` | The type of object - `internal_article`. |
| `updated_at` | `int` | The time when the article was last updated. |

#### Example: List

```php
// list() returns an array of DeletedInternalArticleObject records (throws on error).
$deleted_internal_article_objects = $client->DeletedInternalArticleObject()->list();
```

#### Example: Create

```php
$deleted_internal_article_object = $client->DeletedInternalArticleObject()->create([
    "author_id" => null, // int
    "owner_id" => null, // int
    "title" => null, // string
]);
```


### DeletedObject

Create an instance: `$deleted_object = $client->DeletedObject();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Email

Create an instance: `$email = $client->Email();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `brand_id` | `string` | Associated brand identifier |
| `created_at` | `int` | Unix timestamp of creation |
| `domain` | `string` | Domain portion of the email address |
| `email` | `string` | Full sender email address |
| `forwarded_email_last_received_at` | `int` | Unix timestamp of last forwarded email received (null if never) |
| `forwarding_enabled` | `bool` | Whether email forwarding is active |
| `id` | `string` | Unique email setting identifier |
| `type` | `string` | The type of object |
| `updated_at` | `int` | Unix timestamp of last modification |
| `verified` | `bool` | Whether the email address has been verified |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Email record (throws on error).
$email = $client->Email()->load(["id" => "email_id"]);
```

#### Example: List

```php
// list() returns an array of Email records (throws on error).
$emails = $client->Email()->list();
```


### ExternalPage

Create an instance: `$external_page = $client->ExternalPage();`

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
| `ai_agent_availability` | `bool` | Whether the external page should be used to answer questions by AI Agent. |
| `ai_copilot_availability` | `bool` | Whether the external page should be used to answer questions by AI Copilot. |
| `ai_sales_agent_availability` | `bool` | Whether the external page should be used to answer questions by AI Sales Agent. |
| `created_at` | `int` | The time when the external page was created. |
| `external_id` | `string` | The identifier for the external page which was given by the source. |
| `fin_availability` | `bool` | Deprecated. |
| `html` | `string` | The body of the external page in HTML. |
| `id` | `string` | The unique identifier for the external page which is given by Intercom. |
| `last_ingested_at` | `int` | The time when the external page was last ingested. |
| `locale` | `string` | Always en |
| `source_id` | `int` | The unique identifier for the source of the external page which was given by Intercom. |
| `title` | `string` | The title of the external page. |
| `type` | `string` | Always external_page |
| `updated_at` | `int` | The time when the external page was last updated. |
| `url` | `string` | The URL of the external page. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ExternalPage record (throws on error).
$external_page = $client->ExternalPage()->load(["id" => "external_page_id"]);
```

#### Example: List

```php
// list() returns an array of ExternalPage records (throws on error).
$external_pages = $client->ExternalPage()->list();
```

#### Example: Create

```php
$external_page = $client->ExternalPage()->create([
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


### FinAgent

Create an instance: `$fin_agent = $client->FinAgent();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `array` | An array of attachments to include with the message. |
| `conversation` | `array` | Conversation-related attribute errors. |
| `conversation_id` | `string` | The external ID of the rated conversation. |
| `conversation_metadata` | `array` | Metadata about the conversation, including history and attributes. |
| `message` | `array` | A message exchanged within a Fin Agent conversation. |
| `rating` | `string` | The rating now recorded on the conversation. |
| `remark` | `string` | Optional free-text comment the user left alongside the rating. |
| `status` | `string` | The result of the submission. |
| `user` | `array` | User-related attribute errors. |

#### Example: Create

```php
$fin_agent = $client->FinAgent()->create([
    "message" => null, // array
]);
```


### HandlingEvent

Create an instance: `$handling_event = $client->HandlingEvent();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `reason` | `string` | Optional reason for the event (e.g., "Paused", "Away") |
| `teammate` | `array` | A reference to a teammate |
| `timestamp` | `string` | ISO8601 timestamp when the event occurred |
| `type` | `string` | The type of handling event |

#### Example: List

```php
// list() returns an array of HandlingEvent records (throws on error).
$handling_events = $client->HandlingEvent()->list();
```


### HelpCenter

Create an instance: `$help_center = $client->HelpCenter();`

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
| `ar` | `array` | The content of the group in Arabic |
| `bg` | `array` | The content of the group in Bulgarian |
| `bs` | `array` | The content of the group in Bosnian |
| `ca` | `array` | The content of the group in Catalan |
| `created_at` | `int` | The time when the Help Center was created. |
| `cs` | `array` | The content of the group in Czech |
| `custom_domain` | `string` | Custom domain configured for the help center |
| `da` | `array` | The content of the group in Danish |
| `de` | `array` | The content of the group in German |
| `default` | `bool` | Whether this help center is the default for the workspace. |
| `description` | `string` | The description of the collection. |
| `display_name` | `string` | The display name of the Help Center only seen by teammates. |
| `el` | `array` | The content of the group in Greek |
| `en` | `array` | The content of the group in English |
| `es` | `array` | The content of the group in Spanish |
| `et` | `array` | The content of the group in Estonian |
| `fi` | `array` | The content of the group in Finnish |
| `fr` | `array` | The content of the group in French |
| `from_url` | `string` | The source URL that is redirected. |
| `he` | `array` | The content of the group in Hebrew |
| `help_center_id` | `string` | The unique identifier for the help center the redirect belongs to. |
| `hr` | `array` | The content of the group in Croatian |
| `hu` | `array` | The content of the group in Hungarian |
| `id` | `array` | The content of the group in Indonesian |
| `identifier` | `string` | The identifier of the Help Center. |
| `it` | `array` | The content of the group in Italian |
| `ja` | `array` | The content of the group in Japanese |
| `ko` | `array` | The content of the group in Korean |
| `locale` | `string` | The locale of the redirect's target. |
| `locales` | `array` | The locales in which the help center is available. |
| `lt` | `array` | The content of the group in Lithuanian |
| `lv` | `array` | The content of the group in Latvian |
| `mn` | `array` | The content of the group in Mongolian |
| `name` | `string` | The name of the collection. |
| `nb` | `array` | The content of the group in Norwegian |
| `nl` | `array` | The content of the group in Dutch |
| `parent_id` | `string` | The id of the parent collection. |
| `pl` | `array` | The content of the group in Polish |
| `pt` | `array` | The content of the group in Portuguese (Portugal) |
| `ptBR` | `array` | The content of the group in Portuguese (Brazil) |
| `ro` | `array` | The content of the group in Romanian |
| `ru` | `array` | The content of the group in Russian |
| `sl` | `array` | The content of the group in Slovenian |
| `sr` | `array` | The content of the group in Serbian |
| `sv` | `array` | The content of the group in Swedish |
| `target_id` | `string` | The unique identifier of the target article or collection. |
| `target_type` | `string` | The type of the redirect target. |
| `tr` | `array` | The content of the group in Turkish |
| `translated_content` | `array` | The Translated Content of an Group. |
| `type` | `string` | The type of object - group_translated_content. |
| `updated_at` | `int` | The time when the Help Center was last updated. |
| `url` | `string` | The URL for the help center, if you have a custom domain then this will show the URL using the custom domain. |
| `vi` | `array` | The content of the group in Vietnamese |
| `website_turned_on` | `bool` | Whether the Help Center is turned on or not. |
| `workspace_id` | `string` | The id of the workspace which the Help Center belongs to. |
| `zhCN` | `array` | The content of the group in Chinese (China) |
| `zhTW` | `array` | The content of the group in Chinese (Taiwan) |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the HelpCenter record (throws on error).
$help_center = $client->HelpCenter()->load(["collection_id" => 1]);
```

#### Example: List

```php
// list() returns an array of HelpCenter records (throws on error).
$help_centers = $client->HelpCenter()->list();
```

#### Example: Create

```php
$help_center = $client->HelpCenter()->create([
]);
```


### InternalArticle

Create an instance: `$internal_article = $client->InternalArticle();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_chatbot_availability` | `bool` | Whether the internal article is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | Whether the internal article is available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | Whether the internal article is available for AI Sales Agent. |
| `audience_ids` | `array` | The list of audience IDs this internal article is targeted to for Fin AI Agent. |
| `author_id` | `int` | The id of the author of the article. |
| `body` | `string` | The body of the article in HTML. |
| `body_markdown` | `string` | The body of the article in markdown. |
| `created_at` | `int` | The time when the article was created. |
| `id` | `string` | The unique identifier for the article which is given by Intercom. |
| `locale` | `string` | The default locale of the article. |
| `owner_id` | `int` | The id of the owner of the article. |
| `title` | `string` | The title of the article. |
| `type` | `string` | The type of object - `internal_article`. |
| `updated_at` | `int` | The time when the article was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the InternalArticle record (throws on error).
$internal_article = $client->InternalArticle()->load(["id" => 1]);
```


### InternalArticleSearch

Create an instance: `$internal_article_search = $client->InternalArticleSearch();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` | An object containing the results of the search. |
| `pages` | `array` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | The total number of Internal Articles matching the search query |
| `type` | `string` | The type of the object - `list`. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the InternalArticleSearch record (throws on error).
$internal_article_search = $client->InternalArticleSearch()->load();
```


### IpAllowlist

Create an instance: `$ip_allowlist = $client->IpAllowlist();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Whether the IP allowlist is enabled for the workspace. |
| `ip_allowlist` | `array` | List of allowed IP addresses and/or IP ranges in CIDR notation. |
| `type` | `string` | String representing the object's type. |

#### Example: List

```php
// list() returns an array of IpAllowlist records (throws on error).
$ip_allowlists = $client->IpAllowlist()->list();
```


### Job

Create an instance: `$job = $client->Job();`

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
| `skip_notifications` | `bool` | Option to disable notifications when a Ticket is created. |
| `status` | `string` | The status of the job execution. |
| `type` | `string` | The type of the object |
| `url` | `string` | API endpoint URL to check the job status. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Job record (throws on error).
$job = $client->Job()->load(["job_id" => "job_id"]);
```

#### Example: Create

```php
$job = $client->Job()->create([
    "id" => null, // string
]);
```


### Macro

Create an instance: `$macro = $client->Macro();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_on` | `array` | Where the macro is available for use. |
| `body` | `string` | The body of the macro in HTML format with placeholders transformed to XML-like format. |
| `body_text` | `string` | The plain text version of the macro body with original Intercom placeholder format. |
| `created_at` | `string` | The time the macro was created in ISO 8601 format. |
| `id` | `string` | The unique identifier for the macro. |
| `name` | `string` | The name of the macro. |
| `type` | `string` | String representing the object's type. |
| `updated_at` | `string` | The time the macro was last updated in ISO 8601 format. |
| `visible_to` | `string` | Who can view this macro. |
| `visible_to_team_ids` | `array` | The team IDs that can view this macro when visible_to is set to specific_teams. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Macro record (throws on error).
$macro = $client->Macro()->load(["id" => "macro_id"]);
```

#### Example: List

```php
// list() returns an array of Macro records (throws on error).
$macros = $client->Macro()->list();
```


### MergeHistory

Create an instance: `$merge_history = $client->MergeHistory();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `merged_at` | `int` | (Unix timestamp in seconds) The time when the merge occurred. |
| `source_contact_id` | `string` | The Intercom ID of the contact that was merged into this contact. |
| `source_contact_role` | `string` | The role of the contact that was merged in. |
| `type` | `string` | The type of object. |

#### Example: List

```php
// list() returns an array of MergeHistory records (throws on error).
$merge_historys = $client->MergeHistory()->list();
```


### Message

Create an instance: `$message = $client->Message();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bcc` | `mixed` |  |
| `body` | `string` | The message body, which may contain HTML. |
| `cc` | `mixed` |  |
| `conversation_id` | `string` | The associated conversation_id |
| `create_conversation_without_contact_reply` | `bool` | Whether a conversation should be opened in the inbox for the message without the contact replying. |
| `created_at` | `int` | The time the conversation was created. |
| `from` | `array` | The sender of the message. |
| `id` | `string` | The id representing the message. |
| `message_type` | `string` | The type of message that was sent. |
| `subject` | `string` | The subject of the message. |
| `template` | `string` | The style of the outgoing message. |
| `to` | `mixed` |  |
| `type` | `string` | The type of the message |

#### Example: Create

```php
$message = $client->Message()->create([
    "body" => null, // string
    "created_at" => null, // int
    "from" => null, // array
    "id" => null, // string
    "message_type" => null, // string
    "type" => null, // string
]);
```


### NewsItem

Create an instance: `$news_item = $client->NewsItem();`

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
| `created_at` | `int` | Timestamp for when the news item was created. |
| `deliver_silently` | `bool` | When set to true, the news item will appear in the messenger newsfeed without showing a notification badge. |
| `id` | `string` | The unique identifier for the news item which is given by Intercom. |
| `labels` | `array` | Label names displayed to users to categorize the news item. |
| `newsfeed_assignments` | `array` | A list of newsfeed_assignments to assign to the specified newsfeed. |
| `reactions` | `array` | Ordered list of emoji reactions to the news item. |
| `sender_id` | `int` | The id of the sender of the news item. |
| `state` | `string` | News items will not be visible to your users in the assigned newsfeeds until they are set live. |
| `title` | `string` | The title of the news item. |
| `type` | `string` | The type of object. |
| `updated_at` | `int` | Timestamp for when the news item was last updated. |
| `workspace_id` | `string` | The id of the workspace which the news item belongs to. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NewsItem record (throws on error).
$news_item = $client->NewsItem()->load(["id" => 1]);
```

#### Example: Create

```php
$news_item = $client->NewsItem()->create([
]);
```


### Newsfeed

Create an instance: `$newsfeed = $client->Newsfeed();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Timestamp for when the newsfeed was created. |
| `id` | `string` | The unique identifier for the newsfeed which is given by Intercom. |
| `name` | `string` | The name of the newsfeed. |
| `type` | `string` | The type of object. |
| `updated_at` | `int` | Timestamp for when the newsfeed was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Newsfeed record (throws on error).
$newsfeed = $client->Newsfeed()->load(["id" => "newsfeed_id"]);
```


### Note

Create an instance: `$note = $client->Note();`

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
| `author` | `array` | Optional. |
| `body` | `string` | The body text of the note. |
| `company` | `array` | Represents the company that the note was created about. |
| `contact` | `array` | Represents the contact that the note was created about. |
| `created_at` | `int` | The time the note was created. |
| `id` | `string` | The id of the note. |
| `type` | `string` | String representing the object's type. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Note record (throws on error).
$note = $client->Note()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Note records (throws on error).
$notes = $client->Note()->list();
```

#### Example: Create

```php
$note = $client->Note()->create([
    "company_id" => null, // string
]);
```


### OfficeHour

Create an instance: `$office_hour = $client->OfficeHour();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | The time the schedule was created as a Unix timestamp. |
| `id` | `string` | The unique identifier for the office hours schedule. |
| `name` | `string` | The name of the office hours schedule. |
| `time_intervals` | `array` | The open intervals for the schedule. |
| `time_zone_name` | `string` | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | `bool` | Whether the schedule is open 24/7. |
| `type` | `string` | The type of the object - always `office_hours_schedule`. |
| `updated_at` | `int` | The time the schedule was last updated as a Unix timestamp. |

#### Example: List

```php
// list() returns an array of OfficeHour records (throws on error).
$office_hours = $client->OfficeHour()->list();
```

#### Example: Create

```php
$office_hour = $client->OfficeHour()->create([
    "name" => null, // string
    "time_intervals" => null, // array
    "time_zone_name" => null, // string
]);
```


### OfficeHoursException

Create an instance: `$office_hours_exception = $client->OfficeHoursException();`

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
| `created_at` | `int` | The time the exception was created as a Unix timestamp. |
| `exception_date` | `string` | The date the exception applies to, in `YYYY-MM-DD` format. |
| `exception_type` | `string` | `closed` means the workspace is closed all day; `custom_hours` replaces the regular hours with `time_intervals`. |
| `id` | `string` | The unique identifier for the office hours exception. |
| `name` | `string` | An optional name for the exception. |
| `office_hours_schedule_id` | `string` | The unique identifier for the schedule this exception belongs to. |
| `recurring_annually` | `bool` | Whether the exception repeats every year on the same date. |
| `time_intervals` | `array` | The open intervals for the exception date. |
| `type` | `string` | The type of the object - always `office_hours_exception`. |
| `updated_at` | `int` | The time the exception was last updated as a Unix timestamp. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the OfficeHoursException record (throws on error).
$office_hours_exception = $client->OfficeHoursException()->load(["id" => "office_hours_exception_id", "office_hours_schedule_id" => "office_hours_schedule_id"]);
```

#### Example: List

```php
// list() returns an array of OfficeHoursException records (throws on error).
$office_hours_exceptions = $client->OfficeHoursException()->list();
```

#### Example: Create

```php
$office_hours_exception = $client->OfficeHoursException()->create([
    "office_hours_schedule_id" => null, // string
]);
```


### OfficeHoursSchedule

Create an instance: `$office_hours_schedule = $client->OfficeHoursSchedule();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | The time the schedule was created as a Unix timestamp. |
| `id` | `string` | The unique identifier for the office hours schedule. |
| `name` | `string` | The name of the office hours schedule. |
| `time_intervals` | `array` | The open intervals that make up the weekly schedule. |
| `time_zone_name` | `string` | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | `bool` | Whether the schedule is open 24/7. |
| `type` | `string` | The type of the object - always `office_hours_schedule`. |
| `updated_at` | `int` | The time the schedule was last updated as a Unix timestamp. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the OfficeHoursSchedule record (throws on error).
$office_hours_schedule = $client->OfficeHoursSchedule()->load(["id" => "office_hours_schedule_id"]);
```


### Paginated

Create an instance: `$paginated = $client->Paginated();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` | An array of Objects |
| `pages` | `array` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | A count of the total number of objects. |
| `type` | `string` | The type of object |

#### Example: List

```php
// list() returns an array of Paginated records (throws on error).
$paginateds = $client->Paginated()->list();
```


### PhoneSwitch

Create an instance: `$phone_switch = $client->PhoneSwitch();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_attributes` | `array` | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `phone` | `string` | Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger. |
| `type` | `string` |  |

#### Example: Create

```php
$phone_switch = $client->PhoneSwitch()->create([
]);
```


### ReportingData

Create an instance: `$reporting_data = $client->ReportingData();`

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

```php
// load() returns the ENTITY — call data_get() for the ReportingData record (throws on error).
$reporting_data = $client->ReportingData()->load(["app_id" => "app_id", "job_identifier" => "job_identifier"]);
```


### ReportingDataExport

Create an instance: `$reporting_data_export = $client->ReportingDataExport();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attribute_ids` | `array` |  |
| `attributes` | `array` |  |
| `dataset_id` | `string` |  |
| `default_time_attribute_id` | `string` |  |
| `description` | `string` |  |
| `download_expires_at` | `string` |  |
| `download_url` | `string` |  |
| `end_time` | `int` |  |
| `id` | `string` |  |
| `job_identifier` | `string` |  |
| `name` | `string` |  |
| `start_time` | `int` |  |
| `status` | `string` |  |

#### Example: List

```php
// list() returns an array of ReportingDataExport records (throws on error).
$reporting_data_exports = $client->ReportingDataExport()->list();
```

#### Example: Create

```php
$reporting_data_export = $client->ReportingDataExport()->create([
    "attribute_ids" => null, // array
    "dataset_id" => null, // string
    "end_time" => null, // int
    "start_time" => null, // int
]);
```


### Segment

Create an instance: `$segment = $client->Segment();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` | The number of items in the user segment. |
| `created_at` | `int` | The time the segment was created. |
| `id` | `string` | The unique identifier representing the segment. |
| `name` | `string` | The name of the segment. |
| `person_type` | `string` | Type of the contact: contact (lead) or user. |
| `type` | `string` | The type of object. |
| `updated_at` | `int` | The time the segment was updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Segment record (throws on error).
$segment = $client->Segment()->load(["id" => "segment_id"]);
```

#### Example: List

```php
// list() returns an array of Segment records (throws on error).
$segments = $client->Segment()->list();
```


### SideConversation

Create an instance: `$side_conversation = $client->SideConversation();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversation_parts` | `array` | The conversation parts (messages) in this side conversation. |
| `side_conversation_id` | `string` | The unique identifier for the side conversation. |
| `total_count` | `int` | The total number of conversation parts in this side conversation. |

#### Example: List

```php
// list() returns an array of SideConversation records (throws on error).
$side_conversations = $client->SideConversation()->list();
```


### Subscription

Create an instance: `$subscription = $client->Subscription();`

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
| `content_types` | `array` | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `array` | A translation object contains the localised details of a subscription type. |
| `id` | `string` | The unique identifier representing the subscription type. |
| `state` | `string` | The state of the subscription type. |
| `translations` | `array` | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `type` | `string` | The type of the object - subscription |

#### Example: List

```php
// list() returns an array of Subscription records (throws on error).
$subscriptions = $client->Subscription()->list();
```

#### Example: Create

```php
$subscription = $client->Subscription()->create([
    "contact_id" => null, // string
]);
```


### SubscriptionType

Create an instance: `$subscription_type = $client->SubscriptionType();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `consent_type` | `string` | Describes the type of consent. |
| `content_types` | `array` | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `array` | A translation object contains the localised details of a subscription type. |
| `id` | `string` | The unique identifier representing the subscription type. |
| `state` | `string` | The state of the subscription type. |
| `translations` | `array` | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `type` | `string` | The type of the object - subscription |

#### Example: List

```php
// list() returns an array of SubscriptionType records (throws on error).
$subscription_types = $client->SubscriptionType()->list();
```


### Tag

Create an instance: `$tag = $client->Tag();`

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
| `applied_at` | `int` | The time when the tag was applied to the object. |
| `applied_by` | `array` | The admin who applied the tag. |
| `companies` | `array` |  |
| `id` | `string` | The id of the tag |
| `name` | `string` | The name of the tag |
| `type` | `string` | value is "tag" |
| `users` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Tag record (throws on error).
$tag = $client->Tag()->load(["id" => "tag_id"]);
```

#### Example: List

```php
// list() returns an array of Tag records (throws on error).
$tags = $client->Tag()->list();
```

#### Example: Create

```php
$tag = $client->Tag()->create([
]);
```


### Team

Create an instance: `$team = $client->Team();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_ids` | `array` | The list of admin IDs that are a part of the team. |
| `admin_priority_level` | `array` | Admin priority levels for the team |
| `assignment_limit` | `int` | The assignment limit for the team. |
| `distribution_method` | `string` | Describes how assignments are distributed among the team members |
| `id` | `string` | The id of the team |
| `name` | `string` | The name of the team |
| `type` | `string` | Value is always "team" |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Team record (throws on error).
$team = $client->Team()->load(["id" => "team_id"]);
```

#### Example: List

```php
// list() returns an array of Team records (throws on error).
$teams = $client->Team()->list();
```


### TeamMetricList

Create an instance: `$team_metric_list = $client->TeamMetricList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```php
// list() returns an array of TeamMetricList records (throws on error).
$team_metric_lists = $client->TeamMetricList()->list();
```


### Ticket

Create an instance: `$ticket = $client->Ticket();`

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
| `admin_assignee_id` | `int` | The id representing the admin assigned to the ticket. |
| `attributes` | `array` | The attributes set on the ticket. |
| `category` | `string` | Category of the Ticket. |
| `contacts` | `array` | The list of contacts affected by a ticket. |
| `created_at` | `int` | The time the ticket was created as a UTC Unix timestamp. |
| `id` | `string` | The unique identifier for the ticket which is given by Intercom. |
| `is_shared` | `bool` | Whether or not the ticket is shared with the customer. |
| `linked_objects` | `array` | An object containing metadata about linked conversations and linked tickets. |
| `open` | `bool` | Whether or not the ticket is open. |
| `previous_ticket_state_id` | `string` | The ID of the previous ticket state from the most recent state change. |
| `skip_notifications` | `bool` | Option to disable notifications when a Ticket is created. |
| `snoozed_until` | `int` | The time the ticket will be snoozed until as a UTC Unix timestamp. |
| `team_assignee_id` | `int` | The id representing the team assigned to the ticket. |
| `ticket_attributes` | `array` | An object containing the different attributes associated to the ticket as key-value pairs. |
| `ticket_id` | `string` | The ID of the Ticket used in the Intercom Inbox and Messenger. |
| `ticket_parts` | `array` | A list of Ticket Part objects for each note and event in the ticket. |
| `ticket_state` | `array` | A ticket state, used to define the state of a ticket. |
| `ticket_state_id` | `string` | The ID of the ticket state associated with the ticket type. |
| `ticket_type` | `array` | A ticket type, used to define the data fields to be captured in a ticket. |
| `ticket_type_id` | `string` | The ID of the type of ticket you want to convert the conversation to |
| `type` | `string` | Always ticket |
| `updated_at` | `int` | The last time the ticket was updated as a UTC Unix timestamp. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Ticket record (throws on error).
$ticket = $client->Ticket()->load(["id" => "ticket_id"]);
```

#### Example: Create

```php
$ticket = $client->Ticket()->create([
    "ticket_type_id" => null, // string
]);
```


### TicketList

Create an instance: `$ticket_list = $client->TicketList();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `pages` | `array` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `array` |  |
| `query` | `mixed` |  |
| `tickets` | `array` | The list of ticket objects |
| `total_count` | `int` | A count of the total number of objects. |
| `type` | `string` | Always ticket.list |

#### Example: Create

```php
$ticket_list = $client->TicketList()->create([
    "query" => null, // mixed
]);
```


### TicketReply

Create an instance: `$ticket_reply = $client->TicketReply();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `array` | A list of attachments for the part. |
| `author` | `array` | The author that wrote or triggered the part. |
| `body` | `string` | The message body, which may contain HTML. |
| `created_at` | `int` | The time the note was created. |
| `id` | `string` | The id representing the part. |
| `part_type` | `string` | Type of the part |
| `redacted` | `bool` | Whether or not the ticket part has been redacted. |
| `skip_notifications` | `bool` | Option to disable notifications when replying to a Ticket. |
| `type` | `string` | Always ticket_part |
| `updated_at` | `int` | The last time the note was updated. |

#### Example: Create

```php
$ticket_reply = $client->TicketReply()->create([
    "id" => null, // string
]);
```


### TicketState

Create an instance: `$ticket_state = $client->TicketState();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Whether the ticket state is archived |
| `category` | `string` | The category of the ticket state |
| `external_label` | `string` | The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal. |
| `id` | `string` | The id of the ticket state |
| `internal_label` | `string` | The state the ticket is currently in, in a human readable form - visible in Intercom |
| `ticket_types` | `array` | A list of ticket types associated with a given ticket state. |
| `type` | `string` | String representing the object's type. |

#### Example: List

```php
// list() returns an array of TicketState records (throws on error).
$ticket_states = $client->TicketState()->list();
```


### TicketType

Create an instance: `$ticket_type = $client->TicketType();`

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
| `archived` | `bool` | Whether the ticket type is archived or not. |
| `category` | `string` | Category of the Ticket Type. |
| `created_at` | `int` | The date and time the ticket type was created. |
| `description` | `string` | The description of the ticket type |
| `icon` | `string` | The icon of the ticket type |
| `id` | `string` | The id representing the ticket type. |
| `is_internal` | `bool` | Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers. |
| `name` | `string` | The name of the ticket type |
| `ticket_states` | `array` | A list of ticket states associated with a given ticket type. |
| `ticket_type_attributes` | `array` | A list of attributes associated with a given ticket type. |
| `type` | `string` | String representing the object's type. |
| `updated_at` | `int` | The date and time the ticket type was last updated. |
| `workspace_id` | `string` | The id of the workspace that the ticket type belongs to. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TicketType record (throws on error).
$ticket_type = $client->TicketType()->load(["id" => "ticket_type_id"]);
```

#### Example: List

```php
// list() returns an array of TicketType records (throws on error).
$ticket_types = $client->TicketType()->list();
```

#### Example: Create

```php
$ticket_type = $client->TicketType()->create([
]);
```


### TicketTypeAttribute

Create an instance: `$ticket_type_attribute = $client->TicketTypeAttribute();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_multiple_values` | `bool` | Whether the attribute allows multiple files to be attached to it (only applicable to file attributes) |
| `archived` | `bool` | Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets) |
| `data_type` | `string` | The data type of the attribute |
| `description` | `string` | The description of the attribute presented to the teammate or contact |
| `id` | `string` |  |
| `list_items` | `string` | A comma delimited list of items for the attribute value (only applicable to list attributes) |
| `multiline` | `bool` | Whether the attribute allows multiple lines of text (only applicable to string attributes) |
| `name` | `string` | The name of the ticket type attribute |
| `required_to_create` | `bool` | Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox. |
| `required_to_create_for_contacts` | `bool` | Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger. |
| `visible_on_create` | `bool` | Whether the attribute is visible to teammates when creating a ticket in Inbox. |
| `visible_to_contacts` | `bool` | Whether the attribute is visible to contacts when creating a ticket in Messenger. |

#### Example: Create

```php
$ticket_type_attribute = $client->TicketTypeAttribute()->create([
    "id" => null, // string
    "data_type" => null, // string
    "description" => null, // string
    "name" => null, // string
]);
```


### Visitor

Create an instance: `$visitor = $client->Visitor();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anonymous` | `bool` | Identifies if this visitor is anonymous. |
| `app_id` | `string` | The id of the app the visitor is associated with. |
| `avatar` | `array` |  |
| `companies` | `array` |  |
| `created_at` | `int` | The time the Visitor was added to Intercom. |
| `custom_attributes` | `array` | The custom attributes you have set on the Visitor. |
| `do_not_track` | `bool` | Identifies if this visitor has do not track enabled. |
| `email` | `string` | The email of the visitor. |
| `has_hard_bounced` | `bool` | Identifies if this visitor has had a hard bounce. |
| `id` | `string` | The Intercom defined id representing the Visitor. |
| `las_request_at` | `int` | The time the Lead last recorded making a request. |
| `location_data` | `array` |  |
| `marked_email_as_spam` | `bool` | Identifies if this visitor has marked an email as spam. |
| `name` | `string` | The name of the visitor. |
| `owner_id` | `string` | The id of the admin that owns the Visitor. |
| `phone` | `string` | The phone number of the visitor. |
| `pseudonym` | `string` | The pseudonym of the visitor. |
| `referrer` | `string` | The referer of the visitor. |
| `remote_created_at` | `int` | The time the Visitor was added to Intercom. |
| `segments` | `array` |  |
| `session_count` | `int` | The number of sessions the Visitor has had. |
| `signed_up_at` | `int` | The time the Visitor signed up for your product. |
| `social_profiles` | `array` |  |
| `tags` | `array` |  |
| `type` | `string` | Value is 'visitor' |
| `unsubscribed_from_emails` | `bool` | Whether the Visitor is unsubscribed from emails. |
| `updated_at` | `int` | The last time the Visitor was updated. |
| `user_id` | `string` | Automatically generated identifier for the Visitor. |
| `utm_campaign` | `string` | The utm_campaign of the visitor. |
| `utm_content` | `string` | The utm_content of the visitor. |
| `utm_medium` | `string` | The utm_medium of the visitor. |
| `utm_source` | `string` | The utm_source of the visitor. |
| `utm_term` | `string` | The utm_term of the visitor. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Visitor record (throws on error).
$visitor = $client->Visitor()->load(["user_id" => "user_id"]);
```


### WhatsappMessageStatus

Create an instance: `$whatsapp_message_status = $client->WhatsappMessageStatus();`

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

```php
// load() returns the ENTITY — call data_get() for the WhatsappMessageStatus record (throws on error).
$whatsapp_message_status = $client->WhatsappMessageStatus()->load(["message_id" => "message_id"]);
```


### WhatsappMessageStatusList

Create an instance: `$whatsapp_message_status_list = $client->WhatsappMessageStatusList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversation_id` | `string` | ID of the conversation |
| `created_at` | `int` | Creation timestamp |
| `id` | `string` | Event ID |
| `status` | `string` | Current status of the message |
| `template_name` | `string` | Name of the WhatsApp template used |
| `type` | `string` | Event type |
| `updated_at` | `int` | Last update timestamp |
| `whatsapp_message_id` | `string` | WhatsApp's message identifier |

#### Example: List

```php
// list() returns an array of WhatsappMessageStatusList records (throws on error).
$whatsapp_message_status_lists = $client->WhatsappMessageStatusList()->list();
```


### Workflow

Create an instance: `$workflow = $client->Workflow();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attributes` | `array` | Custom attributes defined for this workflow. |
| `created_at` | `string` | When the workflow was created. |
| `description` | `string` | The description of the workflow. |
| `embedded_rules` | `array` | Rules embedded within the workflow steps. |
| `id` | `string` | The unique identifier for the workflow. |
| `preferred_devices` | `array` | The preferred devices for this workflow. |
| `snapshot` | `array` | The current snapshot of workflow steps and configuration. |
| `state` | `string` | The current state of the workflow. |
| `target_channels` | `array` | The channels this workflow targets. |
| `targeting` | `array` | The targeting rules for this workflow. |
| `title` | `string` | The title of the workflow. |
| `trigger_type` | `string` | The type of trigger that starts this workflow. |
| `updated_at` | `string` | When the workflow was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Workflow record (throws on error).
$workflow = $client->Workflow()->load(["id" => "workflow_id"]);
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

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

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── intercom_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`intercom_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$contactsegment = $client->ContactSegment();
$contactsegment->list();

// $contactsegment->data_get() now returns the contactsegment data from the last list
// $contactsegment->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
