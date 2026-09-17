# Intercom Golang SDK



The Golang SDK for the Intercom API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.ActivityLog(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/intercom-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/intercom-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/intercom-sdk/go=../intercom-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/intercom-sdk/go"
)

func main() {
    client := sdk.NewIntercomSDK(map[string]any{
        "apikey": os.Getenv("INTERCOM_APIKEY"),
    })

    // List activityLog records — the value is the array of records itself.
    activityLogs, err := client.ActivityLog(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range activityLogs.([]any) {
        fmt.Println(item)
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
contactsegments, err := client.ContactSegment(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = contactsegments
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

contactSegment, err := client.ContactSegment(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(contactSegment) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewIntercomSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
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
cd go && go test ./test/...
```


## Reference

### NewIntercomSDK

```go
func NewIntercomSDK(options map[string]any) *IntercomSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *IntercomSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### IntercomSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `ActivityLog` | `(data map[string]any) IntercomEntity` | Create an ActivityLog entity instance. |
| `ActivityLogEventType` | `(data map[string]any) IntercomEntity` | Create an ActivityLogEventType entity instance. |
| `ActivityLogList` | `(data map[string]any) IntercomEntity` | Create an ActivityLogList entity instance. |
| `Admin` | `(data map[string]any) IntercomEntity` | Create an Admin entity instance. |
| `AdminWithApp` | `(data map[string]any) IntercomEntity` | Create an AdminWithApp entity instance. |
| `AiCall` | `(data map[string]any) IntercomEntity` | Create an AiCall entity instance. |
| `AiContent` | `(data map[string]any) IntercomEntity` | Create an AiContent entity instance. |
| `Article` | `(data map[string]any) IntercomEntity` | Create an Article entity instance. |
| `ArticleSearch` | `(data map[string]any) IntercomEntity` | Create an ArticleSearch entity instance. |
| `ArticleVersion` | `(data map[string]any) IntercomEntity` | Create an ArticleVersion entity instance. |
| `ArticleVersionList` | `(data map[string]any) IntercomEntity` | Create an ArticleVersionList entity instance. |
| `Audience` | `(data map[string]any) IntercomEntity` | Create an Audience entity instance. |
| `AwayStatusReason` | `(data map[string]any) IntercomEntity` | Create an AwayStatusReason entity instance. |
| `Banner` | `(data map[string]any) IntercomEntity` | Create a Banner entity instance. |
| `BannerDismiss` | `(data map[string]any) IntercomEntity` | Create a BannerDismiss entity instance. |
| `Brand` | `(data map[string]any) IntercomEntity` | Create a Brand entity instance. |
| `Call` | `(data map[string]any) IntercomEntity` | Create a Call entity instance. |
| `Company` | `(data map[string]any) IntercomEntity` | Create a Company entity instance. |
| `CompanyAttachedContact` | `(data map[string]any) IntercomEntity` | Create a CompanyAttachedContact entity instance. |
| `CompanyAttachedSegment` | `(data map[string]any) IntercomEntity` | Create a CompanyAttachedSegment entity instance. |
| `CompanyList` | `(data map[string]any) IntercomEntity` | Create a CompanyList entity instance. |
| `CompanyScroll` | `(data map[string]any) IntercomEntity` | Create a CompanyScroll entity instance. |
| `Contact` | `(data map[string]any) IntercomEntity` | Create a Contact entity instance. |
| `ContactAttachedCompany` | `(data map[string]any) IntercomEntity` | Create a ContactAttachedCompany entity instance. |
| `ContactList` | `(data map[string]any) IntercomEntity` | Create a ContactList entity instance. |
| `ContactSegment` | `(data map[string]any) IntercomEntity` | Create a ContactSegment entity instance. |
| `Content` | `(data map[string]any) IntercomEntity` | Create a Content entity instance. |
| `ContentImportSource` | `(data map[string]any) IntercomEntity` | Create a ContentImportSource entity instance. |
| `ContentSearch` | `(data map[string]any) IntercomEntity` | Create a ContentSearch entity instance. |
| `ContentSnippet` | `(data map[string]any) IntercomEntity` | Create a ContentSnippet entity instance. |
| `Conversation` | `(data map[string]any) IntercomEntity` | Create a Conversation entity instance. |
| `ConversationAttribute` | `(data map[string]any) IntercomEntity` | Create a ConversationAttribute entity instance. |
| `ConversationAttributeList` | `(data map[string]any) IntercomEntity` | Create a ConversationAttributeList entity instance. |
| `ConversationList` | `(data map[string]any) IntercomEntity` | Create a ConversationList entity instance. |
| `ConversationParticipant` | `(data map[string]any) IntercomEntity` | Create a ConversationParticipant entity instance. |
| `CustomObjectInstance` | `(data map[string]any) IntercomEntity` | Create a CustomObjectInstance entity instance. |
| `Data` | `(data map[string]any) IntercomEntity` | Create a Data entity instance. |
| `DataAttribute` | `(data map[string]any) IntercomEntity` | Create a DataAttribute entity instance. |
| `DataConnector` | `(data map[string]any) IntercomEntity` | Create a DataConnector entity instance. |
| `DataConnectorExecutionResult` | `(data map[string]any) IntercomEntity` | Create a DataConnectorExecutionResult entity instance. |
| `DataConnectorExecutionResultList` | `(data map[string]any) IntercomEntity` | Create a DataConnectorExecutionResultList entity instance. |
| `DataEvent` | `(data map[string]any) IntercomEntity` | Create a DataEvent entity instance. |
| `DataEventSummary` | `(data map[string]any) IntercomEntity` | Create a DataEventSummary entity instance. |
| `DataExport` | `(data map[string]any) IntercomEntity` | Create a DataExport entity instance. |
| `Deleted` | `(data map[string]any) IntercomEntity` | Create a Deleted entity instance. |
| `DeletedArticleObject` | `(data map[string]any) IntercomEntity` | Create a DeletedArticleObject entity instance. |
| `DeletedCompanyObject` | `(data map[string]any) IntercomEntity` | Create a DeletedCompanyObject entity instance. |
| `DeletedDataConnectorObject` | `(data map[string]any) IntercomEntity` | Create a DeletedDataConnectorObject entity instance. |
| `DeletedInternalArticleObject` | `(data map[string]any) IntercomEntity` | Create a DeletedInternalArticleObject entity instance. |
| `DeletedObject` | `(data map[string]any) IntercomEntity` | Create a DeletedObject entity instance. |
| `Email` | `(data map[string]any) IntercomEntity` | Create an Email entity instance. |
| `ExternalPage` | `(data map[string]any) IntercomEntity` | Create an ExternalPage entity instance. |
| `FinAgent` | `(data map[string]any) IntercomEntity` | Create a FinAgent entity instance. |
| `HandlingEvent` | `(data map[string]any) IntercomEntity` | Create a HandlingEvent entity instance. |
| `HelpCenter` | `(data map[string]any) IntercomEntity` | Create a HelpCenter entity instance. |
| `InternalArticle` | `(data map[string]any) IntercomEntity` | Create an InternalArticle entity instance. |
| `InternalArticleSearch` | `(data map[string]any) IntercomEntity` | Create an InternalArticleSearch entity instance. |
| `IpAllowlist` | `(data map[string]any) IntercomEntity` | Create an IpAllowlist entity instance. |
| `Job` | `(data map[string]any) IntercomEntity` | Create a Job entity instance. |
| `Macro` | `(data map[string]any) IntercomEntity` | Create a Macro entity instance. |
| `MergeHistory` | `(data map[string]any) IntercomEntity` | Create a MergeHistory entity instance. |
| `Message` | `(data map[string]any) IntercomEntity` | Create a Message entity instance. |
| `NewsItem` | `(data map[string]any) IntercomEntity` | Create a NewsItem entity instance. |
| `Newsfeed` | `(data map[string]any) IntercomEntity` | Create a Newsfeed entity instance. |
| `Note` | `(data map[string]any) IntercomEntity` | Create a Note entity instance. |
| `OfficeHour` | `(data map[string]any) IntercomEntity` | Create an OfficeHour entity instance. |
| `OfficeHoursException` | `(data map[string]any) IntercomEntity` | Create an OfficeHoursException entity instance. |
| `OfficeHoursSchedule` | `(data map[string]any) IntercomEntity` | Create an OfficeHoursSchedule entity instance. |
| `Paginated` | `(data map[string]any) IntercomEntity` | Create a Paginated entity instance. |
| `PhoneSwitch` | `(data map[string]any) IntercomEntity` | Create a PhoneSwitch entity instance. |
| `ReportingData` | `(data map[string]any) IntercomEntity` | Create a ReportingData entity instance. |
| `ReportingDataExport` | `(data map[string]any) IntercomEntity` | Create a ReportingDataExport entity instance. |
| `Segment` | `(data map[string]any) IntercomEntity` | Create a Segment entity instance. |
| `SideConversation` | `(data map[string]any) IntercomEntity` | Create a SideConversation entity instance. |
| `Subscription` | `(data map[string]any) IntercomEntity` | Create a Subscription entity instance. |
| `SubscriptionType` | `(data map[string]any) IntercomEntity` | Create a SubscriptionType entity instance. |
| `Tag` | `(data map[string]any) IntercomEntity` | Create a Tag entity instance. |
| `Team` | `(data map[string]any) IntercomEntity` | Create a Team entity instance. |
| `TeamMetricList` | `(data map[string]any) IntercomEntity` | Create a TeamMetricList entity instance. |
| `Ticket` | `(data map[string]any) IntercomEntity` | Create a Ticket entity instance. |
| `TicketList` | `(data map[string]any) IntercomEntity` | Create a TicketList entity instance. |
| `TicketReply` | `(data map[string]any) IntercomEntity` | Create a TicketReply entity instance. |
| `TicketState` | `(data map[string]any) IntercomEntity` | Create a TicketState entity instance. |
| `TicketType` | `(data map[string]any) IntercomEntity` | Create a TicketType entity instance. |
| `TicketTypeAttribute` | `(data map[string]any) IntercomEntity` | Create a TicketTypeAttribute entity instance. |
| `Visitor` | `(data map[string]any) IntercomEntity` | Create a Visitor entity instance. |
| `WhatsappMessageStatus` | `(data map[string]any) IntercomEntity` | Create a WhatsappMessageStatus entity instance. |
| `WhatsappMessageStatusList` | `(data map[string]any) IntercomEntity` | Create a WhatsappMessageStatusList entity instance. |
| `Workflow` | `(data map[string]any) IntercomEntity` | Create a Workflow entity instance. |

### Entity interface (IntercomEntity)

All entities implement the `IntercomEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    activityLog, err := client.ActivityLog(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // activityLog is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### ActivityLog

| Field | Description |
| --- | --- |
| `"activity_description"` | A sentence or two describing the activity. |
| `"activity_type"` |  |
| `"created_at"` | The time the activity was created. |
| `"id"` | The id representing the activity. |
| `"metadata"` | Additional data provided about Admin activity. |
| `"performed_by"` | Details about the Admin involved in the activity. |

Operations: List.

API path: `/admins/activity_logs`

#### ActivityLogEventType

| Field | Description |
| --- | --- |
| `"event_types"` | An array of activity log event type strings. |
| `"type"` | String representing the object's type. |

Operations: List.

API path: `/admins/activity_log_event_types`

#### ActivityLogList

| Field | Description |
| --- | --- |
| `"activity_logs"` | An array of activity logs |
| `"created_at_after"` | The start date that you request data for. |
| `"created_at_before"` | The end date that you request data for. |
| `"event_types"` | An optional list of event types to filter activity logs by. |
| `"page"` | The page number of results to return. |
| `"pages"` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `"per_page"` | The number of results per page. |
| `"type"` | String representing the object's type. |

Operations: Create.

API path: `/admins/activity_logs/search`

#### Admin

| Field | Description |
| --- | --- |
| `"avatar"` | Image for the associated team or teammate |
| `"away_mode_enabled"` | Identifies if this admin is currently set in away mode. |
| `"away_mode_reassign"` | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `"away_status_reason_id"` | The unique identifier of the away status reason |
| `"email"` | The email of the admin. |
| `"has_inbox_seat"` | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `"id"` | The id representing the admin. |
| `"job_title"` | The job title of the admin. |
| `"name"` | The name of the admin. |
| `"role"` | The role assigned to this admin. |
| `"team_ids"` | This object represents the avatar associated with the admin. |
| `"team_priority_level"` | Admin priority levels for teams |
| `"type"` | String representing the object's type. |

Operations: List, Load, Update.

API path: `/admins`

#### AdminWithApp

| Field | Description |
| --- | --- |
| `"app"` | App that the admin belongs to. |
| `"avatar"` | This object represents the avatar associated with the admin. |
| `"away_mode_enabled"` | Identifies if this admin is currently set in away mode. |
| `"away_mode_reassign"` | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `"email"` | The email of the admin. |
| `"email_verified"` | Identifies if this admin's email is verified. |
| `"has_inbox_seat"` | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `"id"` | The id representing the admin. |
| `"job_title"` | The job title of the admin. |
| `"name"` | The name of the admin. |
| `"team_ids"` | This is a list of ids of the teams that this admin is part of. |
| `"type"` | String representing the object's type. |

Operations: List.

API path: `/me`

#### AiCall

| Field | Description |
| --- | --- |
| `"app_id"` | The workspace identifier |
| `"call_id"` | External call identifier from the call provider |
| `"call_summary"` | Summary of the call conversation, truncated to 256 characters. |
| `"call_transcript"` | Array of transcript entries for the call |
| `"data"` | Additional metadata about the call |
| `"external_call_id"` | The external call identifier from the call provider |
| `"id"` | The unique identifier for the external reference |
| `"intent"` | Array of intent classifications for the call |
| `"intercom_call_id"` | The Intercom call identifier, if the call has been matched |
| `"intercom_conversation_id"` | The Intercom conversation identifier, if a conversation has been created |
| `"phone_number"` | Phone number in E.164 format for the call |
| `"source"` | Source of the call. |
| `"status"` | Status of the call. |
| `"user_phone_number"` | Phone number in E.164 format for the call |

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
| `"ai_chatbot_availability"` | Whether the article should be available for AI Chatbot (Fin). |
| `"ai_copilot_availability"` | Whether the article should be available for AI Copilot. |
| `"ai_sales_agent_availability"` | Whether the article should be available for AI Sales Agent. |
| `"audience_ids"` | The list of audience IDs to assign to this article for Fin AI Agent targeting. |
| `"author_id"` | The id of the author of the article. |
| `"body"` | The content of the article in HTML. |
| `"body_markdown"` | The content of the article in markdown. |
| `"conversions"` | The number of conversations started from the article. |
| `"created_at"` | The time when the article was created. |
| `"created_by_id"` | The ID of the teammate who created the article. |
| `"default_locale"` | The default locale of the help center. |
| `"description"` | The description of the article. |
| `"draft_updated_at"` | The time, in seconds, when the staged draft was last edited, or `null` when there is no staged draft. |
| `"exclude_from_article_suggestions"` | Whether the article is excluded from Fin AI Agent article suggestions. |
| `"fin_involvements"` | The number of conversations in which Fin AI Agent used this article, summed across all of the article's locales. |
| `"fin_resolution_rate"` | The percentage of Fin AI Agent involvements that resulted in a resolution (fin_resolutions / fin_involvements * 100). |
| `"fin_resolutions"` | The number of conversations Fin AI Agent resolved using this article, summed across all of the article's locales. |
| `"happy_reaction_percentage"` | The percentage of happy reactions the article has received against other types of reaction. |
| `"has_unpublished_changes"` | Whether the published article has unpublished changes staged as a draft on top of its live content. |
| `"help_center_audience"` | The audience that can view this article in the Help Center. |
| `"id"` | The unique identifier for the article which is given by Intercom. |
| `"neutral_reaction_percentage"` | The percentage of neutral reactions the article has received against other types of reaction. |
| `"parent_id"` | The id of the article's parent collection or section. |
| `"parent_ids"` | The ids of the article's parent collections or sections. |
| `"parent_type"` | The type of parent, which can either be a `collection` or `section`. |
| `"reactions"` | The number of total reactions the article has received. |
| `"sad_reaction_percentage"` | The percentage of sad reactions the article has received against |
| `"scheduled_publish_at"` | ISO 8601 timestamp at which to schedule a future publish of the article. |
| `"scheduled_unpublish_at"` | ISO 8601 timestamp at which to schedule a future unpublish of the article. |
| `"state"` | Whether the article will be `published` or will be a `draft`. |
| `"tags"` | A list of tags objects associated with a conversation |
| `"title"` | The title of the article.For multilingual articles, this will be the title of the default language's content. |
| `"translated_content"` | The Translated Content of an Article. |
| `"type"` | The type of object - `article_statistics`. |
| `"updated_at"` | The time when the article was last updated. |
| `"updated_by_id"` | The ID of the teammate who last updated the article. |
| `"url"` | The URL of the article. |
| `"views"` | The number of total views the article has received. |
| `"workspace_id"` | The id of the workspace which the article belongs to. |

Operations: Create, List, Load, Update.

API path: `/articles/{id}/draft/publish`

#### ArticleSearch

| Field | Description |
| --- | --- |
| `"data"` | An object containing the results of the search. |
| `"pages"` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `"total_count"` | The total number of Articles matching the search query |
| `"type"` | The type of the object - `list`. |

Operations: Load.

API path: `/articles/search`

#### ArticleVersion

| Field | Description |
| --- | --- |
| `"article_id"` | The unique identifier of the article this version belongs to. |
| `"author_id"` | The id of the teammate listed as the article's author at this version. |
| `"body"` | The HTML body of the article at this version. |
| `"body_markdown"` | The Markdown body of the article at this version. |
| `"created_at"` | The time the version was created, as a UTC Unix timestamp. |
| `"created_by_id"` | The id of the teammate who created this version. |
| `"created_via"` | How this version was created (for example `web`, `api`). |
| `"description"` | The description of the article at this version. |
| `"from_version_id"` | The id of the version this version was created from, or `null` if this is the first version. |
| `"id"` | The unique identifier for the version. |
| `"state"` | Whether this version is the currently published version of the article (`published`) or an earlier non-live version (`draft`). |
| `"title"` | The title of the article at this version. |
| `"type"` | String representing the object's type. |
| `"updated_at"` | The time the version was last updated, as a UTC Unix timestamp. |

Operations: Load.

API path: `/articles/{article_id}/versions/{id}`

#### ArticleVersionList

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List.

API path: `/articles/{article_id}/versions`

#### Audience

| Field | Description |
| --- | --- |
| `"created_at"` | The time the audience was created as a Unix timestamp. |
| `"id"` | The unique identifier representing the audience. |
| `"name"` | The name of the audience. |
| `"predicates"` | The predicates that define which contacts belong to the audience. |
| `"role_predicates"` | Role-based predicates that further filter audience membership by contact role. |
| `"type"` | The type of object. |
| `"updated_at"` | The time the audience was last updated as a Unix timestamp. |

Operations: Create, List, Load, Remove, Update.

API path: `/audiences`

#### AwayStatusReason

| Field | Description |
| --- | --- |
| `"created_at"` | The Unix timestamp when the status reason was created |
| `"deleted"` | Whether the status reason has been soft deleted |
| `"emoji"` | The emoji associated with the status reason |
| `"id"` | The unique identifier for the away status reason |
| `"label"` | The display text for the away status reason |
| `"order"` | The display order of the status reason |
| `"type"` |  |
| `"updated_at"` | The Unix timestamp when the status reason was last updated |

Operations: List.

API path: `/away_status_reasons`

#### Banner

| Field | Description |
| --- | --- |
| `"action"` | The action a contact can take on the banner, or `null` when the banner has no action. |
| `"body"` | The banner's body content as HTML. |
| `"client_targeting"` | Reserved for future use. |
| `"created_at"` | The time the contact's view of this banner was created. |
| `"id"` | The id of the banner. |
| `"position"` | Where the banner is positioned. |
| `"show_dismiss_button"` | Whether the banner should display a dismiss control. |
| `"style"` | How the banner is displayed. |
| `"title"` | The banner's title. |
| `"type"` | String representing the object's type. |
| `"view_id"` | The id of the contact's view of this banner. |

Operations: List.

API path: `/contacts/{id}/banners`

#### BannerDismiss

| Field | Description |
| --- | --- |
| `"dismissed"` | Whether the banner view is dismissed. |
| `"id"` |  |
| `"type"` | String representing the object's type. |
| `"view_id"` | The id of the dismissed banner view. |

Operations: Create.

API path: `/contacts/{id}/banners/{view_id}/dismiss`

#### Brand

| Field | Description |
| --- | --- |
| `"created_at"` | Unix timestamp of brand creation |
| `"default_address_settings_id"` | Default email settings ID for this brand |
| `"help_center_id"` | Associated help center identifier |
| `"id"` | Unique brand identifier. |
| `"is_default"` | Whether this is the workspace's default brand |
| `"name"` | Display name of the brand |
| `"type"` | The type of object |
| `"updated_at"` | Unix timestamp of last modification |

Operations: List, Load.

API path: `/brands`

#### Call

| Field | Description |
| --- | --- |
| `"admin_id"` | The id of the admin associated with the call, if any. |
| `"answered_at"` |  |
| `"call_type"` | The type of call. |
| `"contact_id"` | The id of the contact associated with the call, if any. |
| `"conversation_id"` | The id of the conversation associated with the call, if any. |
| `"created_at"` |  |
| `"direction"` | The direction of the call. |
| `"ended_at"` |  |
| `"ended_reason"` | The reason for the call end, if applicable. |
| `"fin_recording_url"` | API URL to the AI Agent (Fin) call recording if available. |
| `"fin_transcription_url"` | API URL to the AI Agent (Fin) call transcript if available. |
| `"id"` | The id of the call. |
| `"initiated_at"` |  |
| `"phone"` | The phone number involved in the call, in E.164 format. |
| `"recording_url"` | API URL to download or redirect to the call recording if available. |
| `"state"` | The current state of the call. |
| `"transcription_url"` | API URL to download or redirect to the call transcript if available. |
| `"type"` | String representing the object's type. |
| `"updated_at"` |  |

Operations: Create, List, Load.

API path: `/calls/search`

#### Company

| Field | Description |
| --- | --- |
| `"app_id"` | The Intercom defined code of the workspace the company is associated to. |
| `"company_id"` | The company id you have defined for the company. |
| `"created_at"` | The time the company was added in Intercom. |
| `"custom_attributes"` | The custom attributes you have set on the company. |
| `"id"` | The Intercom defined id representing the company. |
| `"industry"` | The industry that the company operates in. |
| `"last_request_at"` | The time the company last recorded making a request. |
| `"monthly_spend"` | How much revenue the company generates for your business. |
| `"name"` | The name of the company. |
| `"notes"` | The list of notes associated with the company |
| `"plan"` | The name of the plan you have associated with the company. |
| `"remote_created_at"` | The time the company was created by you. |
| `"segments"` | The list of segments associated with the company |
| `"session_count"` | How many sessions the company has recorded. |
| `"size"` | The number of employees in the company. |
| `"tags"` | The list of tags associated with the company |
| `"type"` | Value is `company` |
| `"update_last_request_at"` | Set to true to update the company's last seen time to now. |
| `"updated_at"` | The last time the company was updated. |
| `"user_count"` | The number of users in the company. |
| `"website"` | The URL for the company website. |

Operations: Create, List, Load, Remove, Update.

API path: `/contacts/{contact_id}/companies`

#### CompanyAttachedContact

| Field | Description |
| --- | --- |
| `"android_app_name"` | The name of the Android app which the contact is using. |
| `"android_app_version"` | The version of the Android app which the contact is using. |
| `"android_device"` | The Android device which the contact is using. |
| `"android_last_seen_at"` | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `"android_os_version"` | The version of the Android OS which the contact is using. |
| `"android_sdk_version"` | The version of the Android SDK which the contact is using. |
| `"avatar"` |  |
| `"browser"` | The name of the browser which the contact is using. |
| `"browser_language"` | The language set by the browser which the contact is using. |
| `"browser_version"` | The version of the browser which the contact is using. |
| `"companies"` | An object with metadata about companies attached to a contact . |
| `"created_at"` | (Unix timestamp in seconds) The time when the contact was created. |
| `"custom_attributes"` | The custom attributes which are set for the contact. |
| `"email"` | The contact's email. |
| `"email_domain"` | The contact's email domain. |
| `"external_id"` | The unique identifier for the contact which is provided by the Client. |
| `"has_hard_bounced"` | Whether the contact has had an email sent to them hard bounce. |
| `"id"` | The unique identifier for the contact which is given by Intercom. |
| `"ios_app_name"` | The name of the iOS app which the contact is using. |
| `"ios_app_version"` | The version of the iOS app which the contact is using. |
| `"ios_device"` | The iOS device which the contact is using. |
| `"ios_last_seen_at"` | (Unix timestamp in seconds) The last time the contact used the iOS app. |
| `"ios_os_version"` | The version of iOS which the contact is using. |
| `"ios_sdk_version"` | The version of the iOS SDK which the contact is using. |
| `"language_override"` | A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change. |
| `"last_contacted_at"` | (Unix timestamp in seconds) The time when the contact was last messaged. |
| `"last_email_clicked_at"` | (Unix timestamp in seconds) The time when the contact last clicked a link in an email. |
| `"last_email_opened_at"` | (Unix timestamp in seconds) The time when the contact last opened an email. |
| `"last_replied_at"` | (Unix timestamp in seconds) The time when the contact last messaged in. |
| `"last_seen_at"` | (Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually). |
| `"location"` | An object containing location meta data about a Intercom contact. |
| `"marked_email_as_spam"` | Whether the contact has marked an email sent to them as spam. |
| `"merge_history"` | A list of contacts that were merged into this contact. |
| `"name"` | The contacts name. |
| `"notes"` | An object containing notes meta data about the notes that a contact has. |
| `"os"` | The operating system which the contact is using. |
| `"owner_id"` | The id of an admin that has been assigned account ownership of the contact. |
| `"phone"` | The contacts phone. |
| `"role"` | The role of the contact. |
| `"signed_up_at"` | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `"social_profiles"` | An object containing social profiles that a contact has. |
| `"tags"` | An object containing tags meta data about the tags that a contact has. |
| `"type"` | The type of object. |
| `"unsubscribed_from_emails"` | Whether the contact is unsubscribed from emails. |
| `"updated_at"` | (Unix timestamp in seconds) The time when the contact was last updated. |
| `"workspace_id"` | The id of the workspace which the contact belongs to. |

Operations: List.

API path: `/companies/{company_id}/contacts`

#### CompanyAttachedSegment

| Field | Description |
| --- | --- |
| `"count"` | The number of items in the user segment. |
| `"created_at"` | The time the segment was created. |
| `"id"` | The unique identifier representing the segment. |
| `"name"` | The name of the segment. |
| `"person_type"` | Type of the contact: contact (lead) or user. |
| `"type"` | The type of object. |
| `"updated_at"` | The time the segment was updated. |

Operations: List.

API path: `/companies/{company_id}/segments`

#### CompanyList

| Field | Description |
| --- | --- |
| `"data"` | An array containing Company Objects. |
| `"pages"` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `"total_count"` | The total number of companies. |
| `"type"` | The type of object - `list`. |

Operations: Create.

API path: `/companies/list`

#### CompanyScroll

| Field | Description |
| --- | --- |
| `"app_id"` | The Intercom defined code of the workspace the company is associated to. |
| `"company_id"` | The company id you have defined for the company. |
| `"created_at"` | The time the company was added in Intercom. |
| `"custom_attributes"` | The custom attributes you have set on the company. |
| `"id"` | The Intercom defined id representing the company. |
| `"industry"` | The industry that the company operates in. |
| `"last_request_at"` | The time the company last recorded making a request. |
| `"monthly_spend"` | How much revenue the company generates for your business. |
| `"name"` | The name of the company. |
| `"notes"` | The list of notes associated with the company |
| `"plan"` |  |
| `"remote_created_at"` | The time the company was created by you. |
| `"segments"` | The list of segments associated with the company |
| `"session_count"` | How many sessions the company has recorded. |
| `"size"` | The number of employees in the company. |
| `"tags"` | The list of tags associated with the company |
| `"type"` | Value is `company` |
| `"updated_at"` | The last time the company was updated. |
| `"user_count"` | The number of users in the company. |
| `"website"` | The URL for the company website. |

Operations: List.

API path: `/companies/scroll`

#### Contact

| Field | Description |
| --- | --- |
| `"android_app_name"` | The name of the Android app which the contact is using. |
| `"android_app_version"` | The version of the Android app which the contact is using. |
| `"android_device"` | The Android device which the contact is using. |
| `"android_last_seen_at"` | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `"android_os_version"` | The version of the Android OS which the contact is using. |
| `"android_sdk_version"` | The version of the Android SDK which the contact is using. |
| `"avatar"` |  |
| `"browser"` | The name of the browser which the contact is using. |
| `"browser_language"` | The language set by the browser which the contact is using. |
| `"browser_version"` | The version of the browser which the contact is using. |
| `"companies"` | An object with metadata about companies attached to a contact . |
| `"created_at"` | (Unix timestamp in seconds) The time when the contact was created. |
| `"custom_attributes"` | The custom attributes which are set for the contact. |
| `"email"` | The contact's email. |
| `"email_domain"` | The contact's email domain. |
| `"enabled_push_messaging"` | If the user has enabled push messaging. |
| `"external_id"` | The unique identifier for the contact which is provided by the Client. |
| `"has_hard_bounced"` | Whether the contact has had an email sent to them hard bounce. |
| `"id"` | The unique identifier for the contact which is given by Intercom. |
| `"ios_app_name"` | The name of the iOS app which the contact is using. |
| `"ios_app_version"` | The version of the iOS app which the contact is using. |
| `"ios_device"` | The iOS device which the contact is using. |
| `"ios_last_seen_at"` | (Unix timestamp in seconds) The last time the contact used the iOS app. |
| `"ios_os_version"` | The version of iOS which the contact is using. |
| `"ios_sdk_version"` | The version of the iOS SDK which the contact is using. |
| `"language_override"` | A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change. |
| `"last_contacted_at"` | (Unix timestamp in seconds) The time when the contact was last messaged. |
| `"last_email_clicked_at"` | (Unix timestamp in seconds) The time when the contact last clicked a link in an email. |
| `"last_email_opened_at"` | (Unix timestamp in seconds) The time when the contact last opened an email. |
| `"last_replied_at"` | (Unix timestamp in seconds) The time when the contact last messaged in. |
| `"last_seen_at"` | (Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually). |
| `"location"` | An object containing location meta data about a Intercom contact. |
| `"marked_email_as_spam"` | Whether the contact has marked an email sent to them as spam. |
| `"merge_history"` | A list of contacts that were merged into this contact. |
| `"name"` | The contacts name. |
| `"notes"` | An object containing notes meta data about the notes that a contact has. |
| `"os"` | The operating system which the contact is using. |
| `"owner_id"` | The id of an admin that has been assigned account ownership of the contact. |
| `"phone"` | The contacts phone. |
| `"role"` | The role of the contact. |
| `"signed_up_at"` | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `"social_profiles"` | An object containing social profiles that a contact has. |
| `"tags"` | An object containing tags meta data about the tags that a contact has. |
| `"type"` | The type of object. |
| `"unsubscribed_from_emails"` | Whether the contact is unsubscribed from emails. |
| `"updated_at"` | (Unix timestamp in seconds) The time when the contact was last updated. |
| `"user"` | The unique identifiers retained after converting or merging. |
| `"visitor"` | The unique identifiers to convert a single Visitor. |
| `"workspace_id"` | The id of the workspace which the contact belongs to. |

Operations: Create, List, Load, Remove, Update.

API path: `/contacts/{contact_id}/archive`

#### ContactAttachedCompany

| Field | Description |
| --- | --- |
| `"app_id"` | The Intercom defined code of the workspace the company is associated to. |
| `"company_id"` | The company id you have defined for the company. |
| `"created_at"` | The time the company was added in Intercom. |
| `"custom_attributes"` | The custom attributes you have set on the company. |
| `"id"` | The Intercom defined id representing the company. |
| `"industry"` | The industry that the company operates in. |
| `"last_request_at"` | The time the company last recorded making a request. |
| `"monthly_spend"` | How much revenue the company generates for your business. |
| `"name"` | The name of the company. |
| `"notes"` | The list of notes associated with the company |
| `"plan"` |  |
| `"remote_created_at"` | The time the company was created by you. |
| `"segments"` | The list of segments associated with the company |
| `"session_count"` | How many sessions the company has recorded. |
| `"size"` | The number of employees in the company. |
| `"tags"` | The list of tags associated with the company |
| `"type"` | Value is `company` |
| `"updated_at"` | The last time the company was updated. |
| `"user_count"` | The number of users in the company. |
| `"website"` | The URL for the company website. |

Operations: List.

API path: `/contacts/{contact_id}/companies`

#### ContactList

| Field | Description |
| --- | --- |
| `"data"` | The list of contact objects |
| `"pages"` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `"pagination"` |  |
| `"query"` |  |
| `"sort"` | An optional object to sort the results by. |
| `"total_count"` | A count of the total number of objects. |
| `"type"` | Always list |

Operations: Create.

API path: `/contacts/search`

#### ContactSegment

| Field | Description |
| --- | --- |
| `"count"` | The number of items in the user segment. |
| `"created_at"` | The time the segment was created. |
| `"id"` | The unique identifier representing the segment. |
| `"name"` | The name of the segment. |
| `"person_type"` | Type of the contact: contact (lead) or user. |
| `"type"` | The type of object. |
| `"updated_at"` | The time the segment was updated. |

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
| `"apply_audience_to_existing_content"` | When true, the audience will be applied to all existing external pages belonging to this content import source. |
| `"audience_ids"` | The unique identifiers for the audiences associated with this content import source. |
| `"created_at"` | The time when the content import source was created. |
| `"id"` | The unique identifier for the content import source which is given by Intercom. |
| `"last_synced_at"` | The time when the content import source was last synced. |
| `"status"` | The status of the content import source. |
| `"sync_behavior"` | If you intend to create or update External Pages via the API, this should be set to `api`. |
| `"type"` | Always external_page |
| `"updated_at"` | The time when the content import source was last updated. |
| `"url"` | The URL of the root of the external source. |

Operations: Create, List, Load, Update.

API path: `/ai/content_import_sources`

#### ContentSearch

| Field | Description |
| --- | --- |
| `"data"` | The list of matched content items. |
| `"pages"` | Pagination metadata, including links to neighbouring pages. |
| `"total_count"` | Total number of results matching the query. |
| `"type"` | Always `list`. |

Operations: List.

API path: `/content/search`

#### ContentSnippet

| Field | Description |
| --- | --- |
| `"ai_chatbot_availability"` | Whether the content snippet is available for AI Chatbot (Fin). |
| `"ai_copilot_availability"` | Whether the content snippet is available for AI Copilot. |
| `"ai_sales_agent_availability"` | Whether the content snippet is available for AI Sales Agent. |
| `"audience_ids"` | The list of audience IDs this content snippet is targeted to for Fin AI Agent. |
| `"body_markdown"` | The body of the content snippet in markdown. |
| `"chatbot_availability"` | Deprecated. |
| `"copilot_availability"` | Deprecated. |
| `"created_at"` | The time the snippet was created as a UNIX timestamp. |
| `"id"` | The unique identifier for the content snippet. |
| `"json_blocks"` | The content blocks that make up the body of the snippet. |
| `"locale"` | The locale of the content snippet. |
| `"title"` | The title of the content snippet. |
| `"type"` | String representing the object's type. |
| `"updated_at"` | The time the snippet was last updated as a UNIX timestamp. |

Operations: Create, List, Load, Remove, Update.

API path: `/content_snippets`

#### Conversation

| Field | Description |
| --- | --- |
| `"admin_assignee_id"` | The id of the admin assigned to the conversation. |
| `"ai_agent"` | Data related to AI Agent involvement in the conversation. |
| `"ai_agent_participated"` | Indicates whether the AI Agent participated in the conversation. |
| `"attachment_urls"` | A list of image URLs that will be added as attachments. |
| `"body"` | The content of the message. |
| `"brand_id"` | The unique identifier of the brand to associate with this conversation. |
| `"channel"` | The channel through which the conversation was initiated and its current channel. |
| `"company"` | The company associated with the conversation. |
| `"company_id"` | The ID of the company that the conversation is associated with. |
| `"contacts"` | The list of contacts (users or leads) involved in this conversation. |
| `"conversation_id"` | The unique identifier (given by Intercom) for the conversation or customer ticket to link to the tracker ticket. |
| `"conversation_parts"` | A list of Conversation Part objects for each part message in the conversation. |
| `"conversation_rating"` | The Conversation Rating object which contains information on the rating and/or remark added by a Contact and the Admin assigned to the conversation. |
| `"created_at"` | The time the conversation was created. |
| `"custom_attributes"` | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `"external_references"` | References linking this conversation to records in an external helpdesk or CRM system. |
| `"first_contact_reply"` | An object containing information on the first users message. |
| `"from"` |  |
| `"id"` | The id representing the conversation. |
| `"linked_objects"` | An object containing metadata about linked conversations and linked tickets. |
| `"monitor_evaluations"` | QA monitor evaluations that flagged this conversation. |
| `"open"` | Indicates whether a conversation is open (true) or closed (false). |
| `"priority"` | The priority level of the conversation. |
| `"read"` | Indicates whether a conversation has been read. |
| `"sales_agent"` | Data related to Sales Agent involvement in the conversation. |
| `"sales_agent_participated"` | Indicates whether the Sales Agent participated in the conversation. |
| `"scorecards"` | QA scorecard results for this conversation. |
| `"sla_applied"` | The SLA Applied object contains the details for which SLA has been applied to this conversation. |
| `"snoozed_until"` | If set this is the time in the future when this conversation will be marked as open. |
| `"source"` | The type of the conversation part that started this conversation. |
| `"state"` | Can be set to "open", "closed" or "snoozed". |
| `"statistics"` | A Statistics object containing all information required for reporting, with timestamps and calculated metrics. |
| `"subject"` | The title of the email. |
| `"tags"` | A list of tags objects associated with a conversation |
| `"team_assignee_id"` | The id of the team assigned to the conversation. |
| `"teammates"` | The list of teammates who participated in the conversation (wrote at least one conversation part). |
| `"title"` | The title given to the conversation. |
| `"type"` | Always conversation. |
| `"updated_at"` | The last time the conversation was updated. |
| `"waiting_since"` | The last time a Contact responded to an Admin. |

Operations: Create, List, Load, Remove, Update.

API path: `/conversations/{id}/merge`

#### ConversationAttribute

| Field | Description |
| --- | --- |
| `"admin_id"` |  |
| `"archived"` |  |
| `"created_at"` |  |
| `"data_type"` |  |
| `"description"` | Readable description of the attribute. |
| `"id"` |  |
| `"label"` | The label for the new option. |
| `"multiline"` | (String data type only) Whether this string attribute is multiline. |
| `"name"` | Name of the attribute. |
| `"reference"` | (Relationship data type only) Reference configuration for related objects. |
| `"required"` | Whether this attribute is required. |
| `"type"` |  |
| `"updated_at"` |  |
| `"visible_to_team_ids"` | Team IDs that can see this attribute. |

Operations: Create, Load, Remove, Update.

API path: `/conversations/attributes/{id}/options`

#### ConversationAttributeList

| Field | Description |
| --- | --- |
| `"data"` | A list of conversation attributes. |
| `"type"` | The type of the object. |

Operations: List.

API path: `/conversations/attributes`

#### ConversationList

| Field | Description |
| --- | --- |
| `"conversations"` | The list of conversation objects |
| `"pages"` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `"pagination"` |  |
| `"query"` |  |
| `"total_count"` | A count of the total number of objects. |
| `"type"` | Always conversation.list |

Operations: Create.

API path: `/conversations/search`

#### ConversationParticipant

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create, Remove.

API path: `/conversations/{conversation_id}/customers`

#### CustomObjectInstance

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"custom_attributes"` | The custom attributes which are set for the Custom Object instance. |
| `"data"` | An array of Custom Object Instance objects. |
| `"external_created_at"` | The time when the Custom Object instance was created in the external system it originated from. |
| `"external_id"` | A unique identifier for the Custom Object instance in the external system it originated from. |
| `"external_updated_at"` | The time when the Custom Object instance was last updated in the external system it originated from. |
| `"id"` |  |
| `"pages"` | The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests. |
| `"total_count"` | A count of the total number of custom object instances. |
| `"type"` | The type of the object - `list`. |
| `"updated_at"` |  |

Operations: Create, Load, Remove.

API path: `/custom_object_instances/{custom_object_type_identifier}`

#### Data

| Field | Description |
| --- | --- |
| `"created_at_after"` | The start date that you request data for. |
| `"created_at_before"` | The end date that you request data for. |
| `"download_expires_at"` | The time after which you will not be able to access the data. |
| `"download_url"` | The location where you can download your data. |
| `"id"` |  |
| `"job_identifier"` | The identifier for your job. |
| `"status"` | The current state of your job. |

Operations: Create, Load.

API path: `/export/content/data`

#### DataAttribute

| Field | Description |
| --- | --- |
| `"admin_id"` | Teammate who created the attribute. |
| `"api_writable"` | Can this attribute be updated through API |
| `"archived"` | Is this attribute archived. |
| `"created_at"` | The time the attribute was created as a UTC Unix timestamp |
| `"custom"` | Set to true if this is a CDA |
| `"data_type"` | The data type of the attribute. |
| `"description"` | Readable description of the attribute. |
| `"full_name"` | Full name of the attribute. |
| `"id"` | The unique identifier for the data attribute which is given by Intercom. |
| `"label"` | Readable name of the attribute (i.e. |
| `"messenger_writable"` | Can this attribute be updated by the Messenger |
| `"model"` | Value is `contact` for user/lead attributes and `company` for company attributes. |
| `"name"` | Name of the attribute. |
| `"options"` | List of predefined options for attribute value. |
| `"type"` | Value is `data_attribute`. |
| `"ui_writable"` | Can this attribute be updated in the UI |
| `"updated_at"` | The time the attribute was last updated as a UTC Unix timestamp |

Operations: Create, List, Update.

API path: `/data_attributes`

#### DataConnector

| Field | Description |
| --- | --- |
| `"audiences"` | The audience types this connector targets. |
| `"body"` | The request body template. |
| `"bypass_authentication"` | Whether authentication is bypassed for this connector. |
| `"client_function_name"` | The name of the client-side function, if applicable. |
| `"client_function_timeout_ms"` | Timeout in milliseconds for the client function, if applicable. |
| `"configuration_response_type"` | The expected response format from the connector. |
| `"created_at"` | The time the data connector was created. |
| `"created_by_admin_id"` | The ID of the admin who created this connector. |
| `"customer_authentication"` | Whether OTP authentication is enabled for this connector. |
| `"data_inputs"` | The input parameters accepted by this data connector. |
| `"data_transformation_type"` | The type of data transformation applied to the response. |
| `"description"` | A description of what this data connector does. |
| `"direct_fin_usage"` | Whether this connector is used directly by Fin. |
| `"execution_results_url"` | The URL path to fetch execution results for this connector. |
| `"execution_type"` | How the connector executes. |
| `"headers"` | HTTP headers for the request. |
| `"http_method"` | The HTTP method used by the data connector. |
| `"id"` | The unique identifier for the data connector. |
| `"mock_response"` | A sample JSON response from the external API. |
| `"name"` | The name of the data connector. |
| `"object_mappings"` | Mappings from connector response objects to Intercom objects. |
| `"response_fields"` | The fields returned in the connector response. |
| `"state"` | The current state of the data connector. |
| `"token_ids"` | IDs of authentication tokens associated with this connector. |
| `"type"` | The type of object - `data_connector`. |
| `"updated_at"` | The time the data connector was last updated. |
| `"updated_by_admin_id"` | The ID of the admin who last updated this connector. |
| `"url"` | The URL of the external API endpoint. |
| `"validate_missing_attributes"` | Whether to validate missing attributes before execution. |

Operations: Create, List, Load, Update.

API path: `/data_connectors`

#### DataConnectorExecutionResult

| Field | Description |
| --- | --- |
| `"conversation_id"` | The conversation associated with this execution, if any. |
| `"created_at"` | The time the execution occurred. |
| `"data_connector_id"` | The unique identifier of the data connector that produced this result. |
| `"error_message"` | A human-readable error message. |
| `"error_type"` | The type of error that occurred, if any. |
| `"execution_time_ms"` | The execution time in milliseconds. |
| `"http_method"` | The HTTP method used for the request. |
| `"http_status"` | The HTTP status code returned by the external API. |
| `"id"` | The unique identifier for the execution result. |
| `"raw_response_body"` | The raw (unmapped) response body. |
| `"request_body"` | The request body sent to the external API. |
| `"request_url"` | The request URL. |
| `"response_body"` | The response body from the external API. |
| `"source_id"` | The identifier of the source that triggered this execution. |
| `"source_type"` | The type of source that triggered this execution. |
| `"success"` | Whether the execution was successful. |
| `"type"` | The type of object - `data_connector.execution`. |

Operations: Load.

API path: `/data_connectors/{data_connector_id}/execution_results/{id}`

#### DataConnectorExecutionResultList

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List.

API path: `/data_connectors/{data_connector_id}/execution_results`

#### DataEvent

| Field | Description |
| --- | --- |
| `"created_at"` | The time the event occurred as a UTC Unix timestamp |
| `"email"` | An email address for your user. |
| `"event_name"` | The name of the event that occurred. |
| `"event_summaries"` | A list of event summaries for the user. |
| `"id"` | The unique identifier for the contact (lead or user) which is given by Intercom. |
| `"metadata"` | Optional metadata about the event. |
| `"user_id"` | Your identifier for the user. |

Operations: Create.

API path: `/events`

#### DataEventSummary

| Field | Description |
| --- | --- |
| `"count"` | The number of times the event was sent |
| `"description"` | The description of the event |
| `"first"` | The first time the event was sent |
| `"last"` | The last time the event was sent |
| `"name"` | The name of the event |

Operations: List.

API path: `/events`

#### DataExport

| Field | Description |
| --- | --- |
| `"download_expires_at"` | The time after which you will not be able to access the data. |
| `"download_url"` | The location where you can download your data. |
| `"job_identifier"` | The identifier for your job. |
| `"status"` | The current state of your job. |

Operations: Create.

API path: `/export/cancel/{job_identifier}`

#### Deleted

| Field | Description |
| --- | --- |
| `"deleted_at"` | The time when the conversation was deleted. |
| `"id"` | The ID of the deleted conversation. |
| `"metrics_retained"` | Whether reporting metrics are retained for this conversation ID |
| `"type"` | String representing the object's type. |

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
| `"id"` |  |

Operations: Remove.

API path: `/data_connectors/{id}`

#### DeletedInternalArticleObject

| Field | Description |
| --- | --- |
| `"ai_chatbot_availability"` | Whether the internal article should be available for AI Chatbot (Fin). |
| `"ai_copilot_availability"` | Whether the internal article should be available for AI Copilot. |
| `"ai_sales_agent_availability"` | Whether the internal article should be available for AI Sales Agent. |
| `"audience_ids"` | The list of audience IDs to target this internal article to for Fin AI Agent. |
| `"author_id"` | The id of the author of the article. |
| `"body"` | The content of the article in HTML. |
| `"body_markdown"` | The content of the article in markdown. |
| `"created_at"` | The time when the article was created. |
| `"id"` | The unique identifier for the article which is given by Intercom. |
| `"locale"` | The default locale of the article. |
| `"owner_id"` | The id of the owner of the article. |
| `"title"` | The title of the article. |
| `"type"` | The type of object - `internal_article`. |
| `"updated_at"` | The time when the article was last updated. |

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
| `"brand_id"` | Associated brand identifier |
| `"created_at"` | Unix timestamp of creation |
| `"domain"` | Domain portion of the email address |
| `"email"` | Full sender email address |
| `"forwarded_email_last_received_at"` | Unix timestamp of last forwarded email received (null if never) |
| `"forwarding_enabled"` | Whether email forwarding is active |
| `"id"` | Unique email setting identifier |
| `"type"` | The type of object |
| `"updated_at"` | Unix timestamp of last modification |
| `"verified"` | Whether the email address has been verified |

Operations: List, Load.

API path: `/emails`

#### ExternalPage

| Field | Description |
| --- | --- |
| `"ai_agent_availability"` | Whether the external page should be used to answer questions by AI Agent. |
| `"ai_copilot_availability"` | Whether the external page should be used to answer questions by AI Copilot. |
| `"ai_sales_agent_availability"` | Whether the external page should be used to answer questions by AI Sales Agent. |
| `"created_at"` | The time when the external page was created. |
| `"external_id"` | The identifier for the external page which was given by the source. |
| `"fin_availability"` | Deprecated. |
| `"html"` | The body of the external page in HTML. |
| `"id"` | The unique identifier for the external page which is given by Intercom. |
| `"last_ingested_at"` | The time when the external page was last ingested. |
| `"locale"` | Always en |
| `"source_id"` | The unique identifier for the source of the external page which was given by Intercom. |
| `"title"` | The title of the external page. |
| `"type"` | Always external_page |
| `"updated_at"` | The time when the external page was last updated. |
| `"url"` | The URL of the external page. |

Operations: Create, List, Load, Remove, Update.

API path: `/ai/external_pages`

#### FinAgent

| Field | Description |
| --- | --- |
| `"attachments"` | An array of attachments to include with the message. |
| `"conversation"` | Conversation-related attribute errors. |
| `"conversation_id"` | The external ID of the rated conversation. |
| `"conversation_metadata"` | Metadata about the conversation, including history and attributes. |
| `"message"` | A message exchanged within a Fin Agent conversation. |
| `"rating"` | The rating now recorded on the conversation. |
| `"remark"` | Optional free-text comment the user left alongside the rating. |
| `"status"` | The result of the submission. |
| `"user"` | User-related attribute errors. |

Operations: Create.

API path: `/fin/csat`

#### HandlingEvent

| Field | Description |
| --- | --- |
| `"reason"` | Optional reason for the event (e.g., "Paused", "Away") |
| `"teammate"` | A reference to a teammate |
| `"timestamp"` | ISO8601 timestamp when the event occurred |
| `"type"` | The type of handling event |

Operations: List.

API path: `/conversations/{id}/handling_events`

#### HelpCenter

| Field | Description |
| --- | --- |
| `"ar"` | The content of the group in Arabic |
| `"bg"` | The content of the group in Bulgarian |
| `"bs"` | The content of the group in Bosnian |
| `"ca"` | The content of the group in Catalan |
| `"created_at"` | The time when the Help Center was created. |
| `"cs"` | The content of the group in Czech |
| `"custom_domain"` | Custom domain configured for the help center |
| `"da"` | The content of the group in Danish |
| `"de"` | The content of the group in German |
| `"default"` | Whether this help center is the default for the workspace. |
| `"description"` | The description of the collection. |
| `"display_name"` | The display name of the Help Center only seen by teammates. |
| `"el"` | The content of the group in Greek |
| `"en"` | The content of the group in English |
| `"es"` | The content of the group in Spanish |
| `"et"` | The content of the group in Estonian |
| `"fi"` | The content of the group in Finnish |
| `"fr"` | The content of the group in French |
| `"from_url"` | The source URL that is redirected. |
| `"he"` | The content of the group in Hebrew |
| `"help_center_id"` | The unique identifier for the help center the redirect belongs to. |
| `"hr"` | The content of the group in Croatian |
| `"hu"` | The content of the group in Hungarian |
| `"id"` | The content of the group in Indonesian |
| `"identifier"` | The identifier of the Help Center. |
| `"it"` | The content of the group in Italian |
| `"ja"` | The content of the group in Japanese |
| `"ko"` | The content of the group in Korean |
| `"locale"` | The locale of the redirect's target. |
| `"locales"` | The locales in which the help center is available. |
| `"lt"` | The content of the group in Lithuanian |
| `"lv"` | The content of the group in Latvian |
| `"mn"` | The content of the group in Mongolian |
| `"name"` | The name of the collection. |
| `"nb"` | The content of the group in Norwegian |
| `"nl"` | The content of the group in Dutch |
| `"parent_id"` | The id of the parent collection. |
| `"pl"` | The content of the group in Polish |
| `"pt"` | The content of the group in Portuguese (Portugal) |
| `"ptBR"` | The content of the group in Portuguese (Brazil) |
| `"ro"` | The content of the group in Romanian |
| `"ru"` | The content of the group in Russian |
| `"sl"` | The content of the group in Slovenian |
| `"sr"` | The content of the group in Serbian |
| `"sv"` | The content of the group in Swedish |
| `"target_id"` | The unique identifier of the target article or collection. |
| `"target_type"` | The type of the redirect target. |
| `"tr"` | The content of the group in Turkish |
| `"translated_content"` | The Translated Content of an Group. |
| `"type"` | The type of object - group_translated_content. |
| `"updated_at"` | The time when the Help Center was last updated. |
| `"url"` | The URL for the help center, if you have a custom domain then this will show the URL using the custom domain. |
| `"vi"` | The content of the group in Vietnamese |
| `"website_turned_on"` | Whether the Help Center is turned on or not. |
| `"workspace_id"` | The id of the workspace which the Help Center belongs to. |
| `"zhCN"` | The content of the group in Chinese (China) |
| `"zhTW"` | The content of the group in Chinese (Taiwan) |

Operations: Create, List, Load, Remove, Update.

API path: `/help_center/help_centers/{help_center_id}/redirects`

#### InternalArticle

| Field | Description |
| --- | --- |
| `"ai_chatbot_availability"` | Whether the internal article is available for AI Chatbot (Fin). |
| `"ai_copilot_availability"` | Whether the internal article is available for AI Copilot. |
| `"ai_sales_agent_availability"` | Whether the internal article is available for AI Sales Agent. |
| `"audience_ids"` | The list of audience IDs this internal article is targeted to for Fin AI Agent. |
| `"author_id"` | The id of the author of the article. |
| `"body"` | The body of the article in HTML. |
| `"body_markdown"` | The body of the article in markdown. |
| `"created_at"` | The time when the article was created. |
| `"id"` | The unique identifier for the article which is given by Intercom. |
| `"locale"` | The default locale of the article. |
| `"owner_id"` | The id of the owner of the article. |
| `"title"` | The title of the article. |
| `"type"` | The type of object - `internal_article`. |
| `"updated_at"` | The time when the article was last updated. |

Operations: Load, Update.

API path: `/internal_articles/{internal_article_id}`

#### InternalArticleSearch

| Field | Description |
| --- | --- |
| `"data"` | An object containing the results of the search. |
| `"pages"` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `"total_count"` | The total number of Internal Articles matching the search query |
| `"type"` | The type of the object - `list`. |

Operations: Load.

API path: `/internal_articles/search`

#### IpAllowlist

| Field | Description |
| --- | --- |
| `"enabled"` | Whether the IP allowlist is enabled for the workspace. |
| `"ip_allowlist"` | List of allowed IP addresses and/or IP ranges in CIDR notation. |
| `"type"` | String representing the object's type. |

Operations: List, Update.

API path: `/ip_allowlist`

#### Job

| Field | Description |
| --- | --- |
| `"id"` | The id of the job that's currently being processed or has completed. |
| `"resource_id"` | The id of the resource created during job execution (e.g. |
| `"resource_type"` | The type of resource created during job execution. |
| `"resource_url"` | The url of the resource created during job exeuction. |
| `"skip_notifications"` | Option to disable notifications when a Ticket is created. |
| `"status"` | The status of the job execution. |
| `"type"` | The type of the object |
| `"url"` | API endpoint URL to check the job status. |

Operations: Create, Load.

API path: `/tickets/enqueue`

#### Macro

| Field | Description |
| --- | --- |
| `"available_on"` | Where the macro is available for use. |
| `"body"` | The body of the macro in HTML format with placeholders transformed to XML-like format. |
| `"body_text"` | The plain text version of the macro body with original Intercom placeholder format. |
| `"created_at"` | The time the macro was created in ISO 8601 format. |
| `"id"` | The unique identifier for the macro. |
| `"name"` | The name of the macro. |
| `"type"` | String representing the object's type. |
| `"updated_at"` | The time the macro was last updated in ISO 8601 format. |
| `"visible_to"` | Who can view this macro. |
| `"visible_to_team_ids"` | The team IDs that can view this macro when visible_to is set to specific_teams. |

Operations: List, Load.

API path: `/macros`

#### MergeHistory

| Field | Description |
| --- | --- |
| `"merged_at"` | (Unix timestamp in seconds) The time when the merge occurred. |
| `"source_contact_id"` | The Intercom ID of the contact that was merged into this contact. |
| `"source_contact_role"` | The role of the contact that was merged in. |
| `"type"` | The type of object. |

Operations: List.

API path: `/contacts/{id}/merge_history`

#### Message

| Field | Description |
| --- | --- |
| `"bcc"` |  |
| `"body"` | The message body, which may contain HTML. |
| `"cc"` |  |
| `"conversation_id"` | The associated conversation_id |
| `"create_conversation_without_contact_reply"` | Whether a conversation should be opened in the inbox for the message without the contact replying. |
| `"created_at"` | The time the conversation was created. |
| `"from"` | The sender of the message. |
| `"id"` | The id representing the message. |
| `"message_type"` | The type of message that was sent. |
| `"subject"` | The subject of the message. |
| `"template"` | The style of the outgoing message. |
| `"to"` |  |
| `"type"` | The type of the message |

Operations: Create.

API path: `/messages`

#### NewsItem

| Field | Description |
| --- | --- |
| `"body"` | The news item body, which may contain HTML. |
| `"cover_image_url"` | URL of the image used as cover. |
| `"created_at"` | Timestamp for when the news item was created. |
| `"deliver_silently"` | When set to true, the news item will appear in the messenger newsfeed without showing a notification badge. |
| `"id"` | The unique identifier for the news item which is given by Intercom. |
| `"labels"` | Label names displayed to users to categorize the news item. |
| `"newsfeed_assignments"` | A list of newsfeed_assignments to assign to the specified newsfeed. |
| `"reactions"` | Ordered list of emoji reactions to the news item. |
| `"sender_id"` | The id of the sender of the news item. |
| `"state"` | News items will not be visible to your users in the assigned newsfeeds until they are set live. |
| `"title"` | The title of the news item. |
| `"type"` | The type of object. |
| `"updated_at"` | Timestamp for when the news item was last updated. |
| `"workspace_id"` | The id of the workspace which the news item belongs to. |

Operations: Create, Load, Update.

API path: `/news/news_items`

#### Newsfeed

| Field | Description |
| --- | --- |
| `"created_at"` | Timestamp for when the newsfeed was created. |
| `"id"` | The unique identifier for the newsfeed which is given by Intercom. |
| `"name"` | The name of the newsfeed. |
| `"type"` | The type of object. |
| `"updated_at"` | Timestamp for when the newsfeed was last updated. |

Operations: Load.

API path: `/news/newsfeeds/{newsfeed_id}`

#### Note

| Field | Description |
| --- | --- |
| `"admin_id"` | The unique identifier of the admin creating the note. |
| `"author"` | Optional. |
| `"body"` | The body text of the note. |
| `"company"` | Represents the company that the note was created about. |
| `"contact"` | Represents the contact that the note was created about. |
| `"created_at"` | The time the note was created. |
| `"id"` | The id of the note. |
| `"type"` | String representing the object's type. |

Operations: Create, List, Load.

API path: `/companies/{company_id}/notes`

#### OfficeHour

| Field | Description |
| --- | --- |
| `"created_at"` | The time the schedule was created as a Unix timestamp. |
| `"id"` | The unique identifier for the office hours schedule. |
| `"name"` | The name of the office hours schedule. |
| `"time_intervals"` | The open intervals for the schedule. |
| `"time_zone_name"` | The IANA time zone the schedule's hours are evaluated in. |
| `"twenty_four_seven"` | Whether the schedule is open 24/7. |
| `"type"` | The type of the object - always `office_hours_schedule`. |
| `"updated_at"` | The time the schedule was last updated as a Unix timestamp. |

Operations: Create, List, Remove.

API path: `/office_hours_schedules`

#### OfficeHoursException

| Field | Description |
| --- | --- |
| `"created_at"` | The time the exception was created as a Unix timestamp. |
| `"exception_date"` | The date the exception applies to, in `YYYY-MM-DD` format. |
| `"exception_type"` | `closed` means the workspace is closed all day; `custom_hours` replaces the regular hours with `time_intervals`. |
| `"id"` | The unique identifier for the office hours exception. |
| `"name"` | An optional name for the exception. |
| `"office_hours_schedule_id"` | The unique identifier for the schedule this exception belongs to. |
| `"recurring_annually"` | Whether the exception repeats every year on the same date. |
| `"time_intervals"` | The open intervals for the exception date. |
| `"type"` | The type of the object - always `office_hours_exception`. |
| `"updated_at"` | The time the exception was last updated as a Unix timestamp. |

Operations: Create, List, Load, Update.

API path: `/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions`

#### OfficeHoursSchedule

| Field | Description |
| --- | --- |
| `"created_at"` | The time the schedule was created as a Unix timestamp. |
| `"id"` | The unique identifier for the office hours schedule. |
| `"name"` | The name of the office hours schedule. |
| `"time_intervals"` | The open intervals that make up the weekly schedule. |
| `"time_zone_name"` | The IANA time zone the schedule's hours are evaluated in. |
| `"twenty_four_seven"` | Whether the schedule is open 24/7. |
| `"type"` | The type of the object - always `office_hours_schedule`. |
| `"updated_at"` | The time the schedule was last updated as a Unix timestamp. |

Operations: Load, Update.

API path: `/office_hours_schedules/{id}`

#### Paginated

| Field | Description |
| --- | --- |
| `"data"` | An array of Objects |
| `"pages"` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `"total_count"` | A count of the total number of objects. |
| `"type"` | The type of object |

Operations: List.

API path: `/news/newsfeeds/{newsfeed_id}/items`

#### PhoneSwitch

| Field | Description |
| --- | --- |
| `"custom_attributes"` | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `"phone"` | Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger. |
| `"type"` |  |

Operations: Create.

API path: `/phone_call_redirects`

#### ReportingData

| Field | Description |
| --- | --- |
| `"download_expires_at"` |  |
| `"download_url"` |  |
| `"job_identifier"` |  |
| `"status"` |  |

Operations: Load.

API path: `/download/reporting_data/{job_identifier}`

#### ReportingDataExport

| Field | Description |
| --- | --- |
| `"attribute_ids"` |  |
| `"attributes"` |  |
| `"dataset_id"` |  |
| `"default_time_attribute_id"` |  |
| `"description"` |  |
| `"download_expires_at"` |  |
| `"download_url"` |  |
| `"end_time"` |  |
| `"id"` |  |
| `"job_identifier"` |  |
| `"name"` |  |
| `"start_time"` |  |
| `"status"` |  |

Operations: Create, List.

API path: `/export/reporting_data/enqueue`

#### Segment

| Field | Description |
| --- | --- |
| `"count"` | The number of items in the user segment. |
| `"created_at"` | The time the segment was created. |
| `"id"` | The unique identifier representing the segment. |
| `"name"` | The name of the segment. |
| `"person_type"` | Type of the contact: contact (lead) or user. |
| `"type"` | The type of object. |
| `"updated_at"` | The time the segment was updated. |

Operations: List, Load.

API path: `/segments`

#### SideConversation

| Field | Description |
| --- | --- |
| `"conversation_parts"` | The conversation parts (messages) in this side conversation. |
| `"side_conversation_id"` | The unique identifier for the side conversation. |
| `"total_count"` | The total number of conversation parts in this side conversation. |

Operations: List.

API path: `/conversations/{id}/side_conversations`

#### Subscription

| Field | Description |
| --- | --- |
| `"consent_type"` | Describes the type of consent. |
| `"content_types"` | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `"default_translation"` | A translation object contains the localised details of a subscription type. |
| `"id"` | The unique identifier representing the subscription type. |
| `"state"` | The state of the subscription type. |
| `"translations"` | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `"type"` | The type of the object - subscription |

Operations: Create, List, Remove.

API path: `/contacts/{contact_id}/subscriptions`

#### SubscriptionType

| Field | Description |
| --- | --- |
| `"consent_type"` | Describes the type of consent. |
| `"content_types"` | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `"default_translation"` | A translation object contains the localised details of a subscription type. |
| `"id"` | The unique identifier representing the subscription type. |
| `"state"` | The state of the subscription type. |
| `"translations"` | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `"type"` | The type of the object - subscription |

Operations: List.

API path: `/subscription_types`

#### Tag

| Field | Description |
| --- | --- |
| `"admin_id"` | Optional id of the teammate to attribute the tagging to. |
| `"applied_at"` | The time when the tag was applied to the object. |
| `"applied_by"` | The admin who applied the tag. |
| `"companies"` |  |
| `"id"` | The id of the tag |
| `"name"` | The name of the tag |
| `"type"` | value is "tag" |
| `"users"` |  |

Operations: Create, List, Load, Remove.

API path: `/articles/{article_id}/tags`

#### Team

| Field | Description |
| --- | --- |
| `"admin_ids"` | The list of admin IDs that are a part of the team. |
| `"admin_priority_level"` | Admin priority levels for the team |
| `"assignment_limit"` | The assignment limit for the team. |
| `"distribution_method"` | Describes how assignments are distributed among the team members |
| `"id"` | The id of the team |
| `"name"` | The name of the team |
| `"type"` | Value is always "team" |

Operations: List, Load.

API path: `/teams`

#### TeamMetricList

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List.

API path: `/teams/{team_id}/metrics`

#### Ticket

| Field | Description |
| --- | --- |
| `"admin_assignee_id"` | The id representing the admin assigned to the ticket. |
| `"attributes"` | The attributes set on the ticket. |
| `"category"` | Category of the Ticket. |
| `"contacts"` | The list of contacts affected by a ticket. |
| `"created_at"` | The time the ticket was created as a UTC Unix timestamp. |
| `"id"` | The unique identifier for the ticket which is given by Intercom. |
| `"is_shared"` | Whether or not the ticket is shared with the customer. |
| `"linked_objects"` | An object containing metadata about linked conversations and linked tickets. |
| `"open"` | Whether or not the ticket is open. |
| `"previous_ticket_state_id"` | The ID of the previous ticket state from the most recent state change. |
| `"skip_notifications"` | Option to disable notifications when a Ticket is created. |
| `"snoozed_until"` | The time the ticket will be snoozed until as a UTC Unix timestamp. |
| `"team_assignee_id"` | The id representing the team assigned to the ticket. |
| `"ticket_attributes"` | An object containing the different attributes associated to the ticket as key-value pairs. |
| `"ticket_id"` | The ID of the Ticket used in the Intercom Inbox and Messenger. |
| `"ticket_parts"` | A list of Ticket Part objects for each note and event in the ticket. |
| `"ticket_state"` | A ticket state, used to define the state of a ticket. |
| `"ticket_state_id"` | The ID of the ticket state associated with the ticket type. |
| `"ticket_type"` | A ticket type, used to define the data fields to be captured in a ticket. |
| `"ticket_type_id"` | The ID of the type of ticket you want to convert the conversation to |
| `"type"` | Always ticket |
| `"updated_at"` | The last time the ticket was updated as a UTC Unix timestamp. |

Operations: Create, Load, Remove, Update.

API path: `/conversations/{conversation_id}/convert`

#### TicketList

| Field | Description |
| --- | --- |
| `"pages"` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `"pagination"` |  |
| `"query"` |  |
| `"tickets"` | The list of ticket objects |
| `"total_count"` | A count of the total number of objects. |
| `"type"` | Always ticket.list |

Operations: Create.

API path: `/tickets/search`

#### TicketReply

| Field | Description |
| --- | --- |
| `"attachments"` | A list of attachments for the part. |
| `"author"` | The author that wrote or triggered the part. |
| `"body"` | The message body, which may contain HTML. |
| `"created_at"` | The time the note was created. |
| `"id"` | The id representing the part. |
| `"part_type"` | Type of the part |
| `"redacted"` | Whether or not the ticket part has been redacted. |
| `"skip_notifications"` | Option to disable notifications when replying to a Ticket. |
| `"type"` | Always ticket_part |
| `"updated_at"` | The last time the note was updated. |

Operations: Create.

API path: `/tickets/{ticket_id}/reply`

#### TicketState

| Field | Description |
| --- | --- |
| `"archived"` | Whether the ticket state is archived |
| `"category"` | The category of the ticket state |
| `"external_label"` | The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal. |
| `"id"` | The id of the ticket state |
| `"internal_label"` | The state the ticket is currently in, in a human readable form - visible in Intercom |
| `"ticket_types"` | A list of ticket types associated with a given ticket state. |
| `"type"` | String representing the object's type. |

Operations: List.

API path: `/ticket_states`

#### TicketType

| Field | Description |
| --- | --- |
| `"archived"` | Whether the ticket type is archived or not. |
| `"category"` | Category of the Ticket Type. |
| `"created_at"` | The date and time the ticket type was created. |
| `"description"` | The description of the ticket type |
| `"icon"` | The icon of the ticket type |
| `"id"` | The id representing the ticket type. |
| `"is_internal"` | Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers. |
| `"name"` | The name of the ticket type |
| `"ticket_states"` | A list of ticket states associated with a given ticket type. |
| `"ticket_type_attributes"` | A list of attributes associated with a given ticket type. |
| `"type"` | String representing the object's type. |
| `"updated_at"` | The date and time the ticket type was last updated. |
| `"workspace_id"` | The id of the workspace that the ticket type belongs to. |

Operations: Create, List, Load, Update.

API path: `/ticket_types`

#### TicketTypeAttribute

| Field | Description |
| --- | --- |
| `"allow_multiple_values"` | Whether the attribute allows multiple files to be attached to it (only applicable to file attributes) |
| `"archived"` | Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets) |
| `"data_type"` | The data type of the attribute |
| `"description"` | The description of the attribute presented to the teammate or contact |
| `"id"` |  |
| `"list_items"` | A comma delimited list of items for the attribute value (only applicable to list attributes) |
| `"multiline"` | Whether the attribute allows multiple lines of text (only applicable to string attributes) |
| `"name"` | The name of the ticket type attribute |
| `"required_to_create"` | Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox. |
| `"required_to_create_for_contacts"` | Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger. |
| `"visible_on_create"` | Whether the attribute is visible to teammates when creating a ticket in Inbox. |
| `"visible_to_contacts"` | Whether the attribute is visible to contacts when creating a ticket in Messenger. |

Operations: Create, Update.

API path: `/ticket_types/{ticket_type_id}/attributes`

#### Visitor

| Field | Description |
| --- | --- |
| `"anonymous"` | Identifies if this visitor is anonymous. |
| `"app_id"` | The id of the app the visitor is associated with. |
| `"avatar"` |  |
| `"companies"` |  |
| `"created_at"` | The time the Visitor was added to Intercom. |
| `"custom_attributes"` | The custom attributes you have set on the Visitor. |
| `"do_not_track"` | Identifies if this visitor has do not track enabled. |
| `"email"` | The email of the visitor. |
| `"has_hard_bounced"` | Identifies if this visitor has had a hard bounce. |
| `"id"` | The Intercom defined id representing the Visitor. |
| `"las_request_at"` | The time the Lead last recorded making a request. |
| `"location_data"` |  |
| `"marked_email_as_spam"` | Identifies if this visitor has marked an email as spam. |
| `"name"` | The name of the visitor. |
| `"owner_id"` | The id of the admin that owns the Visitor. |
| `"phone"` | The phone number of the visitor. |
| `"pseudonym"` | The pseudonym of the visitor. |
| `"referrer"` | The referer of the visitor. |
| `"remote_created_at"` | The time the Visitor was added to Intercom. |
| `"segments"` |  |
| `"session_count"` | The number of sessions the Visitor has had. |
| `"signed_up_at"` | The time the Visitor signed up for your product. |
| `"social_profiles"` |  |
| `"tags"` |  |
| `"type"` | Value is 'visitor' |
| `"unsubscribed_from_emails"` | Whether the Visitor is unsubscribed from emails. |
| `"updated_at"` | The last time the Visitor was updated. |
| `"user_id"` | Automatically generated identifier for the Visitor. |
| `"utm_campaign"` | The utm_campaign of the visitor. |
| `"utm_content"` | The utm_content of the visitor. |
| `"utm_medium"` | The utm_medium of the visitor. |
| `"utm_source"` | The utm_source of the visitor. |
| `"utm_term"` | The utm_term of the visitor. |

Operations: Load, Update.

API path: `/visitors`

#### WhatsappMessageStatus

| Field | Description |
| --- | --- |
| `"details"` | Detailed error information |
| `"message"` | Error message |

Operations: Load.

API path: `/messages/whatsapp/status`

#### WhatsappMessageStatusList

| Field | Description |
| --- | --- |
| `"conversation_id"` | ID of the conversation |
| `"created_at"` | Creation timestamp |
| `"id"` | Event ID |
| `"status"` | Current status of the message |
| `"template_name"` | Name of the WhatsApp template used |
| `"type"` | Event type |
| `"updated_at"` | Last update timestamp |
| `"whatsapp_message_id"` | WhatsApp's message identifier |

Operations: List.

API path: `/messages/status`

#### Workflow

| Field | Description |
| --- | --- |
| `"attributes"` | Custom attributes defined for this workflow. |
| `"created_at"` | When the workflow was created. |
| `"description"` | The description of the workflow. |
| `"embedded_rules"` | Rules embedded within the workflow steps. |
| `"id"` | The unique identifier for the workflow. |
| `"preferred_devices"` | The preferred devices for this workflow. |
| `"snapshot"` | The current snapshot of workflow steps and configuration. |
| `"state"` | The current state of the workflow. |
| `"target_channels"` | The channels this workflow targets. |
| `"targeting"` | The targeting rules for this workflow. |
| `"title"` | The title of the workflow. |
| `"trigger_type"` | The type of trigger that starts this workflow. |
| `"updated_at"` | When the workflow was last updated. |

Operations: Load.

API path: `/export/workflows/{id}`



## Entities


### ActivityLog

Create an instance: `activityLog := client.ActivityLog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_description` | `string` | A sentence or two describing the activity. |
| `activity_type` | `string` |  |
| `created_at` | `int` | The time the activity was created. |
| `id` | `string` | The id representing the activity. |
| `metadata` | `map[string]any` | Additional data provided about Admin activity. |
| `performed_by` | `map[string]any` | Details about the Admin involved in the activity. |

#### Example: List

```go
activityLogs, err := client.ActivityLog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(activityLogs) // the array of records
```


### ActivityLogEventType

Create an instance: `activityLogEventType := client.ActivityLogEventType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `event_types` | `[]any` | An array of activity log event type strings. |
| `type` | `string` | String representing the object's type. |

#### Example: List

```go
activityLogEventTypes, err := client.ActivityLogEventType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(activityLogEventTypes) // the array of records
```


### ActivityLogList

Create an instance: `activityLogList := client.ActivityLogList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_logs` | `[]any` | An array of activity logs |
| `created_at_after` | `int` | The start date that you request data for. |
| `created_at_before` | `int` | The end date that you request data for. |
| `event_types` | `[]any` | An optional list of event types to filter activity logs by. |
| `page` | `int` | The page number of results to return. |
| `pages` | `map[string]any` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `per_page` | `int` | The number of results per page. |
| `type` | `string` | String representing the object's type. |

#### Example: Create

```go
result, err := client.ActivityLogList(nil).Create(map[string]any{
    "created_at_after": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Admin

Create an instance: `admin := client.Admin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `role` | `map[string]any` | The role assigned to this admin. |
| `team_ids` | `[]any` | This object represents the avatar associated with the admin. |
| `team_priority_level` | `map[string]any` | Admin priority levels for teams |
| `type` | `string` | String representing the object's type. |

#### Example: Load

```go
admin, err := client.Admin(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(admin) // the loaded record
```

#### Example: List

```go
admins, err := client.Admin(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(admins) // the array of records
```


### AdminWithApp

Create an instance: `adminWithApp := client.AdminWithApp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `map[string]any` | App that the admin belongs to. |
| `avatar` | `map[string]any` | This object represents the avatar associated with the admin. |
| `away_mode_enabled` | `bool` | Identifies if this admin is currently set in away mode. |
| `away_mode_reassign` | `bool` | Identifies if this admin is set to automatically reassign new conversations to the apps default inbox. |
| `email` | `string` | The email of the admin. |
| `email_verified` | `bool` | Identifies if this admin's email is verified. |
| `has_inbox_seat` | `bool` | Identifies if this admin has a paid inbox seat to restrict/allow features that require them. |
| `id` | `string` | The id representing the admin. |
| `job_title` | `string` | The job title of the admin. |
| `name` | `string` | The name of the admin. |
| `team_ids` | `[]any` | This is a list of ids of the teams that this admin is part of. |
| `type` | `string` | String representing the object's type. |

#### Example: List

```go
adminWithApps, err := client.AdminWithApp(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminWithApps) // the array of records
```


### AiCall

Create an instance: `aiCall := client.AiCall(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `int` | The workspace identifier |
| `call_id` | `string` | External call identifier from the call provider |
| `call_summary` | `string` | Summary of the call conversation, truncated to 256 characters. |
| `call_transcript` | `[]any` | Array of transcript entries for the call |
| `data` | `map[string]any` | Additional metadata about the call |
| `external_call_id` | `string` | The external call identifier from the call provider |
| `id` | `int` | The unique identifier for the external reference |
| `intent` | `[]any` | Array of intent classifications for the call |
| `intercom_call_id` | `string` | The Intercom call identifier, if the call has been matched |
| `intercom_conversation_id` | `string` | The Intercom conversation identifier, if a conversation has been created |
| `phone_number` | `string` | Phone number in E.164 format for the call |
| `source` | `string` | Source of the call. |
| `status` | `string` | Status of the call. |
| `user_phone_number` | `string` | Phone number in E.164 format for the call |

#### Example: Load

```go
aiCall, err := client.AiCall(nil).Load(map[string]any{"conversation_id": "conversation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(aiCall) // the loaded record
```

#### Example: Create

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


### AiContent

Create an instance: `aiContent := client.AiContent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Article

Create an instance: `article := client.Article(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_chatbot_availability` | `bool` | Whether the article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | Whether the article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | Whether the article should be available for AI Sales Agent. |
| `audience_ids` | `[]any` | The list of audience IDs to assign to this article for Fin AI Agent targeting. |
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
| `fin_resolution_rate` | `float64` | The percentage of Fin AI Agent involvements that resulted in a resolution (fin_resolutions / fin_involvements * 100). |
| `fin_resolutions` | `int` | The number of conversations Fin AI Agent resolved using this article, summed across all of the article's locales. |
| `happy_reaction_percentage` | `float64` | The percentage of happy reactions the article has received against other types of reaction. |
| `has_unpublished_changes` | `bool` | Whether the published article has unpublished changes staged as a draft on top of its live content. |
| `help_center_audience` | `string` | The audience that can view this article in the Help Center. |
| `id` | `string` | The unique identifier for the article which is given by Intercom. |
| `neutral_reaction_percentage` | `float64` | The percentage of neutral reactions the article has received against other types of reaction. |
| `parent_id` | `int` | The id of the article's parent collection or section. |
| `parent_ids` | `[]any` | The ids of the article's parent collections or sections. |
| `parent_type` | `string` | The type of parent, which can either be a `collection` or `section`. |
| `reactions` | `int` | The number of total reactions the article has received. |
| `sad_reaction_percentage` | `float64` | The percentage of sad reactions the article has received against |
| `scheduled_publish_at` | `string` | ISO 8601 timestamp at which to schedule a future publish of the article. |
| `scheduled_unpublish_at` | `string` | ISO 8601 timestamp at which to schedule a future unpublish of the article. |
| `state` | `string` | Whether the article will be `published` or will be a `draft`. |
| `tags` | `map[string]any` | A list of tags objects associated with a conversation |
| `title` | `string` | The title of the article.For multilingual articles, this will be the title of the default language's content. |
| `translated_content` | `map[string]any` | The Translated Content of an Article. |
| `type` | `string` | The type of object - `article_statistics`. |
| `updated_at` | `int` | The time when the article was last updated. |
| `updated_by_id` | `int` | The ID of the teammate who last updated the article. |
| `url` | `string` | The URL of the article. |
| `views` | `int` | The number of total views the article has received. |
| `workspace_id` | `string` | The id of the workspace which the article belongs to. |

#### Example: Load

```go
article, err := client.Article(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(article) // the loaded record
```

#### Example: List

```go
articles, err := client.Article(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(articles) // the array of records
```

#### Example: Create

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


### ArticleSearch

Create an instance: `articleSearch := client.ArticleSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` | An object containing the results of the search. |
| `pages` | `map[string]any` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | The total number of Articles matching the search query |
| `type` | `string` | The type of the object - `list`. |

#### Example: Load

```go
articleSearch, err := client.ArticleSearch(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(articleSearch) // the loaded record
```


### ArticleVersion

Create an instance: `articleVersion := client.ArticleVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
articleVersion, err := client.ArticleVersion(nil).Load(map[string]any{"id": "article_version_id", "article_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(articleVersion) // the loaded record
```


### ArticleVersionList

Create an instance: `articleVersionList := client.ArticleVersionList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```go
articleVersionLists, err := client.ArticleVersionList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(articleVersionLists) // the array of records
```


### Audience

Create an instance: `audience := client.Audience(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | The time the audience was created as a Unix timestamp. |
| `id` | `string` | The unique identifier representing the audience. |
| `name` | `string` | The name of the audience. |
| `predicates` | `[]any` | The predicates that define which contacts belong to the audience. |
| `role_predicates` | `[]any` | Role-based predicates that further filter audience membership by contact role. |
| `type` | `string` | The type of object. |
| `updated_at` | `int` | The time the audience was last updated as a Unix timestamp. |

#### Example: Load

```go
audience, err := client.Audience(nil).Load(map[string]any{"id": "audience_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(audience) // the loaded record
```

#### Example: List

```go
audiences, err := client.Audience(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(audiences) // the array of records
```

#### Example: Create

```go
result, err := client.Audience(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AwayStatusReason

Create an instance: `awayStatusReason := client.AwayStatusReason(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
awayStatusReasons, err := client.AwayStatusReason(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(awayStatusReasons) // the array of records
```


### Banner

Create an instance: `banner := client.Banner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `map[string]any` | The action a contact can take on the banner, or `null` when the banner has no action. |
| `body` | `string` | The banner's body content as HTML. |
| `client_targeting` | `[]any` | Reserved for future use. |
| `created_at` | `int` | The time the contact's view of this banner was created. |
| `id` | `string` | The id of the banner. |
| `position` | `string` | Where the banner is positioned. |
| `show_dismiss_button` | `bool` | Whether the banner should display a dismiss control. |
| `style` | `string` | How the banner is displayed. |
| `title` | `string` | The banner's title. |
| `type` | `string` | String representing the object's type. |
| `view_id` | `string` | The id of the contact's view of this banner. |

#### Example: List

```go
banners, err := client.Banner(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(banners) // the array of records
```


### BannerDismiss

Create an instance: `bannerDismiss := client.BannerDismiss(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dismissed` | `bool` | Whether the banner view is dismissed. |
| `id` | `string` |  |
| `type` | `string` | String representing the object's type. |
| `view_id` | `string` | The id of the dismissed banner view. |

#### Example: Create

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


### Brand

Create an instance: `brand := client.Brand(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
brand, err := client.Brand(nil).Load(map[string]any{"id": "brand_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(brand) // the loaded record
```

#### Example: List

```go
brands, err := client.Brand(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(brands) // the array of records
```


### Call

Create an instance: `call := client.Call(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_id` | `string` | The id of the admin associated with the call, if any. |
| `answered_at` | `any` |  |
| `call_type` | `string` | The type of call. |
| `contact_id` | `string` | The id of the contact associated with the call, if any. |
| `conversation_id` | `string` | The id of the conversation associated with the call, if any. |
| `created_at` | `any` |  |
| `direction` | `string` | The direction of the call. |
| `ended_at` | `any` |  |
| `ended_reason` | `string` | The reason for the call end, if applicable. |
| `fin_recording_url` | `string` | API URL to the AI Agent (Fin) call recording if available. |
| `fin_transcription_url` | `string` | API URL to the AI Agent (Fin) call transcript if available. |
| `id` | `string` | The id of the call. |
| `initiated_at` | `any` |  |
| `phone` | `string` | The phone number involved in the call, in E.164 format. |
| `recording_url` | `string` | API URL to download or redirect to the call recording if available. |
| `state` | `string` | The current state of the call. |
| `transcription_url` | `string` | API URL to download or redirect to the call transcript if available. |
| `type` | `string` | String representing the object's type. |
| `updated_at` | `any` |  |

#### Example: Load

```go
call, err := client.Call(nil).Load(map[string]any{"id": "call_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(call) // the loaded record
```

#### Example: List

```go
calls, err := client.Call(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(calls) // the array of records
```

#### Example: Create

```go
result, err := client.Call(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Company

Create an instance: `company := client.Company(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `string` | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | The company id you have defined for the company. |
| `created_at` | `int` | The time the company was added in Intercom. |
| `custom_attributes` | `map[string]any` | The custom attributes you have set on the company. |
| `id` | `string` | The Intercom defined id representing the company. |
| `industry` | `string` | The industry that the company operates in. |
| `last_request_at` | `int` | The time the company last recorded making a request. |
| `monthly_spend` | `int` | How much revenue the company generates for your business. |
| `name` | `string` | The name of the company. |
| `notes` | `map[string]any` | The list of notes associated with the company |
| `plan` | `map[string]any` | The name of the plan you have associated with the company. |
| `remote_created_at` | `int` | The time the company was created by you. |
| `segments` | `map[string]any` | The list of segments associated with the company |
| `session_count` | `int` | How many sessions the company has recorded. |
| `size` | `int` | The number of employees in the company. |
| `tags` | `map[string]any` | The list of tags associated with the company |
| `type` | `string` | Value is `company` |
| `update_last_request_at` | `bool` | Set to true to update the company's last seen time to now. |
| `updated_at` | `int` | The last time the company was updated. |
| `user_count` | `int` | The number of users in the company. |
| `website` | `string` | The URL for the company website. |

#### Example: Load

```go
company, err := client.Company(nil).Load(map[string]any{"id": "company_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(company) // the loaded record
```

#### Example: List

```go
companys, err := client.Company(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(companys) // the array of records
```

#### Example: Create

```go
result, err := client.Company(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CompanyAttachedContact

Create an instance: `companyAttachedContact := client.CompanyAttachedContact(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `android_app_name` | `string` | The name of the Android app which the contact is using. |
| `android_app_version` | `string` | The version of the Android app which the contact is using. |
| `android_device` | `string` | The Android device which the contact is using. |
| `android_last_seen_at` | `int` | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `android_os_version` | `string` | The version of the Android OS which the contact is using. |
| `android_sdk_version` | `string` | The version of the Android SDK which the contact is using. |
| `avatar` | `map[string]any` |  |
| `browser` | `string` | The name of the browser which the contact is using. |
| `browser_language` | `string` | The language set by the browser which the contact is using. |
| `browser_version` | `string` | The version of the browser which the contact is using. |
| `companies` | `map[string]any` | An object with metadata about companies attached to a contact . |
| `created_at` | `int` | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `map[string]any` | The custom attributes which are set for the contact. |
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
| `location` | `map[string]any` | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `bool` | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `[]any` | A list of contacts that were merged into this contact. |
| `name` | `string` | The contacts name. |
| `notes` | `map[string]any` | An object containing notes meta data about the notes that a contact has. |
| `os` | `string` | The operating system which the contact is using. |
| `owner_id` | `string` | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `string` | The contacts phone. |
| `role` | `string` | The role of the contact. |
| `signed_up_at` | `int` | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `map[string]any` | An object containing social profiles that a contact has. |
| `tags` | `map[string]any` | An object containing tags meta data about the tags that a contact has. |
| `type` | `string` | The type of object. |
| `unsubscribed_from_emails` | `bool` | Whether the contact is unsubscribed from emails. |
| `updated_at` | `int` | (Unix timestamp in seconds) The time when the contact was last updated. |
| `workspace_id` | `string` | The id of the workspace which the contact belongs to. |

#### Example: List

```go
companyAttachedContacts, err := client.CompanyAttachedContact(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(companyAttachedContacts) // the array of records
```


### CompanyAttachedSegment

Create an instance: `companyAttachedSegment := client.CompanyAttachedSegment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
companyAttachedSegments, err := client.CompanyAttachedSegment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(companyAttachedSegments) // the array of records
```


### CompanyList

Create an instance: `companyList := client.CompanyList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` | An array containing Company Objects. |
| `pages` | `map[string]any` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | The total number of companies. |
| `type` | `string` | The type of object - `list`. |

#### Example: Create

```go
result, err := client.CompanyList(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CompanyScroll

Create an instance: `companyScroll := client.CompanyScroll(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `string` | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | The company id you have defined for the company. |
| `created_at` | `int` | The time the company was added in Intercom. |
| `custom_attributes` | `map[string]any` | The custom attributes you have set on the company. |
| `id` | `string` | The Intercom defined id representing the company. |
| `industry` | `string` | The industry that the company operates in. |
| `last_request_at` | `int` | The time the company last recorded making a request. |
| `monthly_spend` | `int` | How much revenue the company generates for your business. |
| `name` | `string` | The name of the company. |
| `notes` | `map[string]any` | The list of notes associated with the company |
| `plan` | `map[string]any` |  |
| `remote_created_at` | `int` | The time the company was created by you. |
| `segments` | `map[string]any` | The list of segments associated with the company |
| `session_count` | `int` | How many sessions the company has recorded. |
| `size` | `int` | The number of employees in the company. |
| `tags` | `map[string]any` | The list of tags associated with the company |
| `type` | `string` | Value is `company` |
| `updated_at` | `int` | The last time the company was updated. |
| `user_count` | `int` | The number of users in the company. |
| `website` | `string` | The URL for the company website. |

#### Example: List

```go
companyScrolls, err := client.CompanyScroll(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(companyScrolls) // the array of records
```


### Contact

Create an instance: `contact := client.Contact(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `android_app_name` | `string` | The name of the Android app which the contact is using. |
| `android_app_version` | `string` | The version of the Android app which the contact is using. |
| `android_device` | `string` | The Android device which the contact is using. |
| `android_last_seen_at` | `int` | (Unix timestamp in seconds) The time when the contact was last seen on an Android device. |
| `android_os_version` | `string` | The version of the Android OS which the contact is using. |
| `android_sdk_version` | `string` | The version of the Android SDK which the contact is using. |
| `avatar` | `map[string]any` |  |
| `browser` | `string` | The name of the browser which the contact is using. |
| `browser_language` | `string` | The language set by the browser which the contact is using. |
| `browser_version` | `string` | The version of the browser which the contact is using. |
| `companies` | `map[string]any` | An object with metadata about companies attached to a contact . |
| `created_at` | `int` | (Unix timestamp in seconds) The time when the contact was created. |
| `custom_attributes` | `map[string]any` | The custom attributes which are set for the contact. |
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
| `location` | `map[string]any` | An object containing location meta data about a Intercom contact. |
| `marked_email_as_spam` | `bool` | Whether the contact has marked an email sent to them as spam. |
| `merge_history` | `[]any` | A list of contacts that were merged into this contact. |
| `name` | `string` | The contacts name. |
| `notes` | `map[string]any` | An object containing notes meta data about the notes that a contact has. |
| `os` | `string` | The operating system which the contact is using. |
| `owner_id` | `string` | The id of an admin that has been assigned account ownership of the contact. |
| `phone` | `string` | The contacts phone. |
| `role` | `string` | The role of the contact. |
| `signed_up_at` | `int` | (Unix timestamp in seconds) The time specified for when a contact signed up. |
| `social_profiles` | `map[string]any` | An object containing social profiles that a contact has. |
| `tags` | `map[string]any` | An object containing tags meta data about the tags that a contact has. |
| `type` | `string` | The type of object. |
| `unsubscribed_from_emails` | `bool` | Whether the contact is unsubscribed from emails. |
| `updated_at` | `int` | (Unix timestamp in seconds) The time when the contact was last updated. |
| `user` | `map[string]any` | The unique identifiers retained after converting or merging. |
| `visitor` | `map[string]any` | The unique identifiers to convert a single Visitor. |
| `workspace_id` | `string` | The id of the workspace which the contact belongs to. |

#### Example: Load

```go
contact, err := client.Contact(nil).Load(map[string]any{"id": "contact_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(contact) // the loaded record
```

#### Example: List

```go
contacts, err := client.Contact(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(contacts) // the array of records
```

#### Example: Create

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


### ContactAttachedCompany

Create an instance: `contactAttachedCompany := client.ContactAttachedCompany(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `string` | The Intercom defined code of the workspace the company is associated to. |
| `company_id` | `string` | The company id you have defined for the company. |
| `created_at` | `int` | The time the company was added in Intercom. |
| `custom_attributes` | `map[string]any` | The custom attributes you have set on the company. |
| `id` | `string` | The Intercom defined id representing the company. |
| `industry` | `string` | The industry that the company operates in. |
| `last_request_at` | `int` | The time the company last recorded making a request. |
| `monthly_spend` | `int` | How much revenue the company generates for your business. |
| `name` | `string` | The name of the company. |
| `notes` | `map[string]any` | The list of notes associated with the company |
| `plan` | `map[string]any` |  |
| `remote_created_at` | `int` | The time the company was created by you. |
| `segments` | `map[string]any` | The list of segments associated with the company |
| `session_count` | `int` | How many sessions the company has recorded. |
| `size` | `int` | The number of employees in the company. |
| `tags` | `map[string]any` | The list of tags associated with the company |
| `type` | `string` | Value is `company` |
| `updated_at` | `int` | The last time the company was updated. |
| `user_count` | `int` | The number of users in the company. |
| `website` | `string` | The URL for the company website. |

#### Example: List

```go
contactAttachedCompanys, err := client.ContactAttachedCompany(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(contactAttachedCompanys) // the array of records
```


### ContactList

Create an instance: `contactList := client.ContactList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` | The list of contact objects |
| `pages` | `map[string]any` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `map[string]any` |  |
| `query` | `any` |  |
| `sort` | `map[string]any` | An optional object to sort the results by. |
| `total_count` | `int` | A count of the total number of objects. |
| `type` | `string` | Always list |

#### Example: Create

```go
result, err := client.ContactList(nil).Create(map[string]any{
    "query": "example_query",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ContactSegment

Create an instance: `contactSegment := client.ContactSegment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
contactSegments, err := client.ContactSegment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(contactSegments) // the array of records
```


### Content

Create an instance: `content := client.Content(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.Content(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ContentImportSource

Create an instance: `contentImportSource := client.ContentImportSource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apply_audience_to_existing_content` | `bool` | When true, the audience will be applied to all existing external pages belonging to this content import source. |
| `audience_ids` | `[]any` | The unique identifiers for the audiences associated with this content import source. |
| `created_at` | `int` | The time when the content import source was created. |
| `id` | `int` | The unique identifier for the content import source which is given by Intercom. |
| `last_synced_at` | `int` | The time when the content import source was last synced. |
| `status` | `string` | The status of the content import source. |
| `sync_behavior` | `string` | If you intend to create or update External Pages via the API, this should be set to `api`. |
| `type` | `string` | Always external_page |
| `updated_at` | `int` | The time when the content import source was last updated. |
| `url` | `string` | The URL of the root of the external source. |

#### Example: Load

```go
contentImportSource, err := client.ContentImportSource(nil).Load(map[string]any{"id": "content_import_source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(contentImportSource) // the loaded record
```

#### Example: List

```go
contentImportSources, err := client.ContentImportSource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(contentImportSources) // the array of records
```

#### Example: Create

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


### ContentSearch

Create an instance: `contentSearch := client.ContentSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` | The list of matched content items. |
| `pages` | `map[string]any` | Pagination metadata, including links to neighbouring pages. |
| `total_count` | `int` | Total number of results matching the query. |
| `type` | `string` | Always `list`. |

#### Example: List

```go
contentSearchs, err := client.ContentSearch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(contentSearchs) // the array of records
```


### ContentSnippet

Create an instance: `contentSnippet := client.ContentSnippet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_chatbot_availability` | `bool` | Whether the content snippet is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | Whether the content snippet is available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | Whether the content snippet is available for AI Sales Agent. |
| `audience_ids` | `[]any` | The list of audience IDs this content snippet is targeted to for Fin AI Agent. |
| `body_markdown` | `string` | The body of the content snippet in markdown. |
| `chatbot_availability` | `int` | Deprecated. |
| `copilot_availability` | `int` | Deprecated. |
| `created_at` | `int` | The time the snippet was created as a UNIX timestamp. |
| `id` | `string` | The unique identifier for the content snippet. |
| `json_blocks` | `[]any` | The content blocks that make up the body of the snippet. |
| `locale` | `string` | The locale of the content snippet. |
| `title` | `string` | The title of the content snippet. |
| `type` | `string` | String representing the object's type. |
| `updated_at` | `int` | The time the snippet was last updated as a UNIX timestamp. |

#### Example: Load

```go
contentSnippet, err := client.ContentSnippet(nil).Load(map[string]any{"id": "content_snippet_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(contentSnippet) // the loaded record
```

#### Example: List

```go
contentSnippets, err := client.ContentSnippet(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(contentSnippets) // the array of records
```

#### Example: Create

```go
result, err := client.ContentSnippet(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Conversation

Create an instance: `conversation := client.Conversation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_assignee_id` | `int` | The id of the admin assigned to the conversation. |
| `ai_agent` | `map[string]any` | Data related to AI Agent involvement in the conversation. |
| `ai_agent_participated` | `bool` | Indicates whether the AI Agent participated in the conversation. |
| `attachment_urls` | `[]any` | A list of image URLs that will be added as attachments. |
| `body` | `string` | The content of the message. |
| `brand_id` | `string` | The unique identifier of the brand to associate with this conversation. |
| `channel` | `map[string]any` | The channel through which the conversation was initiated and its current channel. |
| `company` | `map[string]any` | The company associated with the conversation. |
| `company_id` | `string` | The ID of the company that the conversation is associated with. |
| `contacts` | `map[string]any` | The list of contacts (users or leads) involved in this conversation. |
| `conversation_id` | `string` | The unique identifier (given by Intercom) for the conversation or customer ticket to link to the tracker ticket. |
| `conversation_parts` | `map[string]any` | A list of Conversation Part objects for each part message in the conversation. |
| `conversation_rating` | `map[string]any` | The Conversation Rating object which contains information on the rating and/or remark added by a Contact and the Admin assigned to the conversation. |
| `created_at` | `int` | The time the conversation was created. |
| `custom_attributes` | `map[string]any` | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `external_references` | `[]any` | References linking this conversation to records in an external helpdesk or CRM system. |
| `first_contact_reply` | `map[string]any` | An object containing information on the first users message. |
| `from` | `map[string]any` |  |
| `id` | `string` | The id representing the conversation. |
| `linked_objects` | `map[string]any` | An object containing metadata about linked conversations and linked tickets. |
| `monitor_evaluations` | `[]any` | QA monitor evaluations that flagged this conversation. |
| `open` | `bool` | Indicates whether a conversation is open (true) or closed (false). |
| `priority` | `string` | The priority level of the conversation. |
| `read` | `bool` | Indicates whether a conversation has been read. |
| `sales_agent` | `map[string]any` | Data related to Sales Agent involvement in the conversation. |
| `sales_agent_participated` | `bool` | Indicates whether the Sales Agent participated in the conversation. |
| `scorecards` | `[]any` | QA scorecard results for this conversation. |
| `sla_applied` | `map[string]any` | The SLA Applied object contains the details for which SLA has been applied to this conversation. |
| `snoozed_until` | `int` | If set this is the time in the future when this conversation will be marked as open. |
| `source` | `map[string]any` | The type of the conversation part that started this conversation. |
| `state` | `string` | Can be set to "open", "closed" or "snoozed". |
| `statistics` | `map[string]any` | A Statistics object containing all information required for reporting, with timestamps and calculated metrics. |
| `subject` | `string` | The title of the email. |
| `tags` | `map[string]any` | A list of tags objects associated with a conversation |
| `team_assignee_id` | `int` | The id of the team assigned to the conversation. |
| `teammates` | `map[string]any` | The list of teammates who participated in the conversation (wrote at least one conversation part). |
| `title` | `string` | The title given to the conversation. |
| `type` | `string` | Always conversation. |
| `updated_at` | `int` | The last time the conversation was updated. |
| `waiting_since` | `int` | The last time a Contact responded to an Admin. |

#### Example: Load

```go
conversation, err := client.Conversation(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversation) // the loaded record
```

#### Example: List

```go
conversations, err := client.Conversation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversations) // the array of records
```

#### Example: Create

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


### ConversationAttribute

Create an instance: `conversationAttribute := client.ConversationAttribute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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
| `reference` | `map[string]any` | (Relationship data type only) Reference configuration for related objects. |
| `required` | `bool` | Whether this attribute is required. |
| `type` | `string` |  |
| `updated_at` | `int` |  |
| `visible_to_team_ids` | `[]any` | Team IDs that can see this attribute. |

#### Example: Load

```go
conversationAttribute, err := client.ConversationAttribute(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationAttribute) // the loaded record
```

#### Example: Create

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


### ConversationAttributeList

Create an instance: `conversationAttributeList := client.ConversationAttributeList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` | A list of conversation attributes. |
| `type` | `string` | The type of the object. |

#### Example: List

```go
conversationAttributeLists, err := client.ConversationAttributeList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversationAttributeLists) // the array of records
```


### ConversationList

Create an instance: `conversationList := client.ConversationList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversations` | `[]any` | The list of conversation objects |
| `pages` | `map[string]any` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `map[string]any` |  |
| `query` | `any` |  |
| `total_count` | `int` | A count of the total number of objects. |
| `type` | `string` | Always conversation.list |

#### Example: Create

```go
result, err := client.ConversationList(nil).Create(map[string]any{
    "query": "example_query",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ConversationParticipant

Create an instance: `conversationParticipant := client.ConversationParticipant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```go
result, err := client.ConversationParticipant(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CustomObjectInstance

Create an instance: `customObjectInstance := client.CustomObjectInstance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` |  |
| `custom_attributes` | `map[string]any` | The custom attributes which are set for the Custom Object instance. |
| `data` | `[]any` | An array of Custom Object Instance objects. |
| `external_created_at` | `string` | The time when the Custom Object instance was created in the external system it originated from. |
| `external_id` | `string` | A unique identifier for the Custom Object instance in the external system it originated from. |
| `external_updated_at` | `string` | The time when the Custom Object instance was last updated in the external system it originated from. |
| `id` | `string` |  |
| `pages` | `map[string]any` | The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests. |
| `total_count` | `int` | A count of the total number of custom object instances. |
| `type` | `string` | The type of the object - `list`. |
| `updated_at` | `int` |  |

#### Example: Load

```go
customObjectInstance, err := client.CustomObjectInstance(nil).Load(map[string]any{"id": "custom_object_instance_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customObjectInstance) // the loaded record
```

#### Example: Create

```go
result, err := client.CustomObjectInstance(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Data

Create an instance: `data := client.Data(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
data, err := client.Data(nil).Load(map[string]any{"id": "data_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(data) // the loaded record
```

#### Example: Create

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


### DataAttribute

Create an instance: `dataAttribute := client.DataAttribute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `options` | `[]any` | List of predefined options for attribute value. |
| `type` | `string` | Value is `data_attribute`. |
| `ui_writable` | `bool` | Can this attribute be updated in the UI |
| `updated_at` | `int` | The time the attribute was last updated as a UTC Unix timestamp |

#### Example: List

```go
dataAttributes, err := client.DataAttribute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dataAttributes) // the array of records
```

#### Example: Create

```go
result, err := client.DataAttribute(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DataConnector

Create an instance: `dataConnector := client.DataConnector(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audiences` | `[]any` | The audience types this connector targets. |
| `body` | `string` | The request body template. |
| `bypass_authentication` | `bool` | Whether authentication is bypassed for this connector. |
| `client_function_name` | `string` | The name of the client-side function, if applicable. |
| `client_function_timeout_ms` | `int` | Timeout in milliseconds for the client function, if applicable. |
| `configuration_response_type` | `string` | The expected response format from the connector. |
| `created_at` | `string` | The time the data connector was created. |
| `created_by_admin_id` | `string` | The ID of the admin who created this connector. |
| `customer_authentication` | `bool` | Whether OTP authentication is enabled for this connector. |
| `data_inputs` | `[]any` | The input parameters accepted by this data connector. |
| `data_transformation_type` | `string` | The type of data transformation applied to the response. |
| `description` | `string` | A description of what this data connector does. |
| `direct_fin_usage` | `bool` | Whether this connector is used directly by Fin. |
| `execution_results_url` | `string` | The URL path to fetch execution results for this connector. |
| `execution_type` | `string` | How the connector executes. |
| `headers` | `[]any` | HTTP headers for the request. |
| `http_method` | `string` | The HTTP method used by the data connector. |
| `id` | `string` | The unique identifier for the data connector. |
| `mock_response` | `map[string]any` | A sample JSON response from the external API. |
| `name` | `string` | The name of the data connector. |
| `object_mappings` | `[]any` | Mappings from connector response objects to Intercom objects. |
| `response_fields` | `[]any` | The fields returned in the connector response. |
| `state` | `string` | The current state of the data connector. |
| `token_ids` | `[]any` | IDs of authentication tokens associated with this connector. |
| `type` | `string` | The type of object - `data_connector`. |
| `updated_at` | `string` | The time the data connector was last updated. |
| `updated_by_admin_id` | `string` | The ID of the admin who last updated this connector. |
| `url` | `string` | The URL of the external API endpoint. |
| `validate_missing_attributes` | `bool` | Whether to validate missing attributes before execution. |

#### Example: Load

```go
dataConnector, err := client.DataConnector(nil).Load(map[string]any{"id": "data_connector_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dataConnector) // the loaded record
```

#### Example: List

```go
dataConnectors, err := client.DataConnector(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dataConnectors) // the array of records
```

#### Example: Create

```go
result, err := client.DataConnector(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DataConnectorExecutionResult

Create an instance: `dataConnectorExecutionResult := client.DataConnectorExecutionResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
dataConnectorExecutionResult, err := client.DataConnectorExecutionResult(nil).Load(map[string]any{"id": "data_connector_execution_result_id", "data_connector_id": "data_connector_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dataConnectorExecutionResult) // the loaded record
```


### DataConnectorExecutionResultList

Create an instance: `dataConnectorExecutionResultList := client.DataConnectorExecutionResultList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```go
dataConnectorExecutionResultLists, err := client.DataConnectorExecutionResultList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dataConnectorExecutionResultLists) // the array of records
```


### DataEvent

Create an instance: `dataEvent := client.DataEvent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | The time the event occurred as a UTC Unix timestamp |
| `email` | `string` | An email address for your user. |
| `event_name` | `string` | The name of the event that occurred. |
| `event_summaries` | `map[string]any` | A list of event summaries for the user. |
| `id` | `string` | The unique identifier for the contact (lead or user) which is given by Intercom. |
| `metadata` | `map[string]any` | Optional metadata about the event. |
| `user_id` | `string` | Your identifier for the user. |

#### Example: Create

```go
result, err := client.DataEvent(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DataEventSummary

Create an instance: `dataEventSummary := client.DataEventSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` | The number of times the event was sent |
| `description` | `string` | The description of the event |
| `first` | `string` | The first time the event was sent |
| `last` | `string` | The last time the event was sent |
| `name` | `string` | The name of the event |

#### Example: List

```go
dataEventSummarys, err := client.DataEventSummary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dataEventSummarys) // the array of records
```


### DataExport

Create an instance: `dataExport := client.DataExport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `download_expires_at` | `string` | The time after which you will not be able to access the data. |
| `download_url` | `string` | The location where you can download your data. |
| `job_identifier` | `string` | The identifier for your job. |
| `status` | `string` | The current state of your job. |

#### Example: Create

```go
result, err := client.DataExport(nil).Create(map[string]any{
    "job_identifier": "example_job_identifier",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Deleted

Create an instance: `deleted := client.Deleted(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deleted_at` | `int` | The time when the conversation was deleted. |
| `id` | `string` | The ID of the deleted conversation. |
| `metrics_retained` | `bool` | Whether reporting metrics are retained for this conversation ID |
| `type` | `string` | String representing the object's type. |

#### Example: List

```go
deleteds, err := client.Deleted(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(deleteds) // the array of records
```


### DeletedArticleObject

Create an instance: `deletedArticleObject := client.DeletedArticleObject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### DeletedCompanyObject

Create an instance: `deletedCompanyObject := client.DeletedCompanyObject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### DeletedDataConnectorObject

Create an instance: `deletedDataConnectorObject := client.DeletedDataConnectorObject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeletedInternalArticleObject

Create an instance: `deletedInternalArticleObject := client.DeletedInternalArticleObject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_chatbot_availability` | `bool` | Whether the internal article should be available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | Whether the internal article should be available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | Whether the internal article should be available for AI Sales Agent. |
| `audience_ids` | `[]any` | The list of audience IDs to target this internal article to for Fin AI Agent. |
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

```go
deletedInternalArticleObjects, err := client.DeletedInternalArticleObject(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(deletedInternalArticleObjects) // the array of records
```

#### Example: Create

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


### DeletedObject

Create an instance: `deletedObject := client.DeletedObject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Email

Create an instance: `email := client.Email(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
email, err := client.Email(nil).Load(map[string]any{"id": "email_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(email) // the loaded record
```

#### Example: List

```go
emails, err := client.Email(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(emails) // the array of records
```


### ExternalPage

Create an instance: `externalPage := client.ExternalPage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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

```go
externalPage, err := client.ExternalPage(nil).Load(map[string]any{"id": "external_page_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(externalPage) // the loaded record
```

#### Example: List

```go
externalPages, err := client.ExternalPage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(externalPages) // the array of records
```

#### Example: Create

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


### FinAgent

Create an instance: `finAgent := client.FinAgent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `[]any` | An array of attachments to include with the message. |
| `conversation` | `map[string]any` | Conversation-related attribute errors. |
| `conversation_id` | `string` | The external ID of the rated conversation. |
| `conversation_metadata` | `map[string]any` | Metadata about the conversation, including history and attributes. |
| `message` | `map[string]any` | A message exchanged within a Fin Agent conversation. |
| `rating` | `string` | The rating now recorded on the conversation. |
| `remark` | `string` | Optional free-text comment the user left alongside the rating. |
| `status` | `string` | The result of the submission. |
| `user` | `map[string]any` | User-related attribute errors. |

#### Example: Create

```go
result, err := client.FinAgent(nil).Create(map[string]any{
    "message": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### HandlingEvent

Create an instance: `handlingEvent := client.HandlingEvent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `reason` | `string` | Optional reason for the event (e.g., "Paused", "Away") |
| `teammate` | `map[string]any` | A reference to a teammate |
| `timestamp` | `string` | ISO8601 timestamp when the event occurred |
| `type` | `string` | The type of handling event |

#### Example: List

```go
handlingEvents, err := client.HandlingEvent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(handlingEvents) // the array of records
```


### HelpCenter

Create an instance: `helpCenter := client.HelpCenter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ar` | `map[string]any` | The content of the group in Arabic |
| `bg` | `map[string]any` | The content of the group in Bulgarian |
| `bs` | `map[string]any` | The content of the group in Bosnian |
| `ca` | `map[string]any` | The content of the group in Catalan |
| `created_at` | `int` | The time when the Help Center was created. |
| `cs` | `map[string]any` | The content of the group in Czech |
| `custom_domain` | `string` | Custom domain configured for the help center |
| `da` | `map[string]any` | The content of the group in Danish |
| `de` | `map[string]any` | The content of the group in German |
| `default` | `bool` | Whether this help center is the default for the workspace. |
| `description` | `string` | The description of the collection. |
| `display_name` | `string` | The display name of the Help Center only seen by teammates. |
| `el` | `map[string]any` | The content of the group in Greek |
| `en` | `map[string]any` | The content of the group in English |
| `es` | `map[string]any` | The content of the group in Spanish |
| `et` | `map[string]any` | The content of the group in Estonian |
| `fi` | `map[string]any` | The content of the group in Finnish |
| `fr` | `map[string]any` | The content of the group in French |
| `from_url` | `string` | The source URL that is redirected. |
| `he` | `map[string]any` | The content of the group in Hebrew |
| `help_center_id` | `string` | The unique identifier for the help center the redirect belongs to. |
| `hr` | `map[string]any` | The content of the group in Croatian |
| `hu` | `map[string]any` | The content of the group in Hungarian |
| `id` | `map[string]any` | The content of the group in Indonesian |
| `identifier` | `string` | The identifier of the Help Center. |
| `it` | `map[string]any` | The content of the group in Italian |
| `ja` | `map[string]any` | The content of the group in Japanese |
| `ko` | `map[string]any` | The content of the group in Korean |
| `locale` | `string` | The locale of the redirect's target. |
| `locales` | `[]any` | The locales in which the help center is available. |
| `lt` | `map[string]any` | The content of the group in Lithuanian |
| `lv` | `map[string]any` | The content of the group in Latvian |
| `mn` | `map[string]any` | The content of the group in Mongolian |
| `name` | `string` | The name of the collection. |
| `nb` | `map[string]any` | The content of the group in Norwegian |
| `nl` | `map[string]any` | The content of the group in Dutch |
| `parent_id` | `string` | The id of the parent collection. |
| `pl` | `map[string]any` | The content of the group in Polish |
| `pt` | `map[string]any` | The content of the group in Portuguese (Portugal) |
| `ptBR` | `map[string]any` | The content of the group in Portuguese (Brazil) |
| `ro` | `map[string]any` | The content of the group in Romanian |
| `ru` | `map[string]any` | The content of the group in Russian |
| `sl` | `map[string]any` | The content of the group in Slovenian |
| `sr` | `map[string]any` | The content of the group in Serbian |
| `sv` | `map[string]any` | The content of the group in Swedish |
| `target_id` | `string` | The unique identifier of the target article or collection. |
| `target_type` | `string` | The type of the redirect target. |
| `tr` | `map[string]any` | The content of the group in Turkish |
| `translated_content` | `map[string]any` | The Translated Content of an Group. |
| `type` | `string` | The type of object - group_translated_content. |
| `updated_at` | `int` | The time when the Help Center was last updated. |
| `url` | `string` | The URL for the help center, if you have a custom domain then this will show the URL using the custom domain. |
| `vi` | `map[string]any` | The content of the group in Vietnamese |
| `website_turned_on` | `bool` | Whether the Help Center is turned on or not. |
| `workspace_id` | `string` | The id of the workspace which the Help Center belongs to. |
| `zhCN` | `map[string]any` | The content of the group in Chinese (China) |
| `zhTW` | `map[string]any` | The content of the group in Chinese (Taiwan) |

#### Example: Load

```go
helpCenter, err := client.HelpCenter(nil).Load(map[string]any{"collection_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(helpCenter) // the loaded record
```

#### Example: List

```go
helpCenters, err := client.HelpCenter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(helpCenters) // the array of records
```

#### Example: Create

```go
result, err := client.HelpCenter(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### InternalArticle

Create an instance: `internalArticle := client.InternalArticle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_chatbot_availability` | `bool` | Whether the internal article is available for AI Chatbot (Fin). |
| `ai_copilot_availability` | `bool` | Whether the internal article is available for AI Copilot. |
| `ai_sales_agent_availability` | `bool` | Whether the internal article is available for AI Sales Agent. |
| `audience_ids` | `[]any` | The list of audience IDs this internal article is targeted to for Fin AI Agent. |
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

```go
internalArticle, err := client.InternalArticle(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(internalArticle) // the loaded record
```


### InternalArticleSearch

Create an instance: `internalArticleSearch := client.InternalArticleSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` | An object containing the results of the search. |
| `pages` | `map[string]any` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | The total number of Internal Articles matching the search query |
| `type` | `string` | The type of the object - `list`. |

#### Example: Load

```go
internalArticleSearch, err := client.InternalArticleSearch(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(internalArticleSearch) // the loaded record
```


### IpAllowlist

Create an instance: `ipAllowlist := client.IpAllowlist(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Whether the IP allowlist is enabled for the workspace. |
| `ip_allowlist` | `[]any` | List of allowed IP addresses and/or IP ranges in CIDR notation. |
| `type` | `string` | String representing the object's type. |

#### Example: List

```go
ipAllowlists, err := client.IpAllowlist(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(ipAllowlists) // the array of records
```


### Job

Create an instance: `job := client.Job(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
job, err := client.Job(nil).Load(map[string]any{"job_id": "job_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(job) // the loaded record
```

#### Example: Create

```go
result, err := client.Job(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Macro

Create an instance: `macro := client.Macro(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_on` | `[]any` | Where the macro is available for use. |
| `body` | `string` | The body of the macro in HTML format with placeholders transformed to XML-like format. |
| `body_text` | `string` | The plain text version of the macro body with original Intercom placeholder format. |
| `created_at` | `string` | The time the macro was created in ISO 8601 format. |
| `id` | `string` | The unique identifier for the macro. |
| `name` | `string` | The name of the macro. |
| `type` | `string` | String representing the object's type. |
| `updated_at` | `string` | The time the macro was last updated in ISO 8601 format. |
| `visible_to` | `string` | Who can view this macro. |
| `visible_to_team_ids` | `[]any` | The team IDs that can view this macro when visible_to is set to specific_teams. |

#### Example: Load

```go
macro, err := client.Macro(nil).Load(map[string]any{"id": "macro_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(macro) // the loaded record
```

#### Example: List

```go
macros, err := client.Macro(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(macros) // the array of records
```


### MergeHistory

Create an instance: `mergeHistory := client.MergeHistory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `merged_at` | `int` | (Unix timestamp in seconds) The time when the merge occurred. |
| `source_contact_id` | `string` | The Intercom ID of the contact that was merged into this contact. |
| `source_contact_role` | `string` | The role of the contact that was merged in. |
| `type` | `string` | The type of object. |

#### Example: List

```go
mergeHistorys, err := client.MergeHistory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(mergeHistorys) // the array of records
```


### Message

Create an instance: `message := client.Message(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bcc` | `any` |  |
| `body` | `string` | The message body, which may contain HTML. |
| `cc` | `any` |  |
| `conversation_id` | `string` | The associated conversation_id |
| `create_conversation_without_contact_reply` | `bool` | Whether a conversation should be opened in the inbox for the message without the contact replying. |
| `created_at` | `int` | The time the conversation was created. |
| `from` | `map[string]any` | The sender of the message. |
| `id` | `string` | The id representing the message. |
| `message_type` | `string` | The type of message that was sent. |
| `subject` | `string` | The subject of the message. |
| `template` | `string` | The style of the outgoing message. |
| `to` | `any` |  |
| `type` | `string` | The type of the message |

#### Example: Create

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


### NewsItem

Create an instance: `newsItem := client.NewsItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` | The news item body, which may contain HTML. |
| `cover_image_url` | `string` | URL of the image used as cover. |
| `created_at` | `int` | Timestamp for when the news item was created. |
| `deliver_silently` | `bool` | When set to true, the news item will appear in the messenger newsfeed without showing a notification badge. |
| `id` | `string` | The unique identifier for the news item which is given by Intercom. |
| `labels` | `[]any` | Label names displayed to users to categorize the news item. |
| `newsfeed_assignments` | `[]any` | A list of newsfeed_assignments to assign to the specified newsfeed. |
| `reactions` | `[]any` | Ordered list of emoji reactions to the news item. |
| `sender_id` | `int` | The id of the sender of the news item. |
| `state` | `string` | News items will not be visible to your users in the assigned newsfeeds until they are set live. |
| `title` | `string` | The title of the news item. |
| `type` | `string` | The type of object. |
| `updated_at` | `int` | Timestamp for when the news item was last updated. |
| `workspace_id` | `string` | The id of the workspace which the news item belongs to. |

#### Example: Load

```go
newsItem, err := client.NewsItem(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(newsItem) // the loaded record
```

#### Example: Create

```go
result, err := client.NewsItem(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Newsfeed

Create an instance: `newsfeed := client.Newsfeed(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | Timestamp for when the newsfeed was created. |
| `id` | `string` | The unique identifier for the newsfeed which is given by Intercom. |
| `name` | `string` | The name of the newsfeed. |
| `type` | `string` | The type of object. |
| `updated_at` | `int` | Timestamp for when the newsfeed was last updated. |

#### Example: Load

```go
newsfeed, err := client.Newsfeed(nil).Load(map[string]any{"id": "newsfeed_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(newsfeed) // the loaded record
```


### Note

Create an instance: `note := client.Note(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_id` | `string` | The unique identifier of the admin creating the note. |
| `author` | `map[string]any` | Optional. |
| `body` | `string` | The body text of the note. |
| `company` | `map[string]any` | Represents the company that the note was created about. |
| `contact` | `map[string]any` | Represents the contact that the note was created about. |
| `created_at` | `int` | The time the note was created. |
| `id` | `string` | The id of the note. |
| `type` | `string` | String representing the object's type. |

#### Example: Load

```go
note, err := client.Note(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(note) // the loaded record
```

#### Example: List

```go
notes, err := client.Note(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(notes) // the array of records
```

#### Example: Create

```go
result, err := client.Note(nil).Create(map[string]any{
    "company_id": "example_company_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OfficeHour

Create an instance: `officeHour := client.OfficeHour(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | The time the schedule was created as a Unix timestamp. |
| `id` | `string` | The unique identifier for the office hours schedule. |
| `name` | `string` | The name of the office hours schedule. |
| `time_intervals` | `[]any` | The open intervals for the schedule. |
| `time_zone_name` | `string` | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | `bool` | Whether the schedule is open 24/7. |
| `type` | `string` | The type of the object - always `office_hours_schedule`. |
| `updated_at` | `int` | The time the schedule was last updated as a Unix timestamp. |

#### Example: List

```go
officeHours, err := client.OfficeHour(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(officeHours) // the array of records
```

#### Example: Create

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


### OfficeHoursException

Create an instance: `officeHoursException := client.OfficeHoursException(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `time_intervals` | `[]any` | The open intervals for the exception date. |
| `type` | `string` | The type of the object - always `office_hours_exception`. |
| `updated_at` | `int` | The time the exception was last updated as a Unix timestamp. |

#### Example: Load

```go
officeHoursException, err := client.OfficeHoursException(nil).Load(map[string]any{"id": "office_hours_exception_id", "office_hours_schedule_id": "office_hours_schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(officeHoursException) // the loaded record
```

#### Example: List

```go
officeHoursExceptions, err := client.OfficeHoursException(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(officeHoursExceptions) // the array of records
```

#### Example: Create

```go
result, err := client.OfficeHoursException(nil).Create(map[string]any{
    "office_hours_schedule_id": "example_office_hours_schedule_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OfficeHoursSchedule

Create an instance: `officeHoursSchedule := client.OfficeHoursSchedule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | The time the schedule was created as a Unix timestamp. |
| `id` | `string` | The unique identifier for the office hours schedule. |
| `name` | `string` | The name of the office hours schedule. |
| `time_intervals` | `[]any` | The open intervals that make up the weekly schedule. |
| `time_zone_name` | `string` | The IANA time zone the schedule's hours are evaluated in. |
| `twenty_four_seven` | `bool` | Whether the schedule is open 24/7. |
| `type` | `string` | The type of the object - always `office_hours_schedule`. |
| `updated_at` | `int` | The time the schedule was last updated as a Unix timestamp. |

#### Example: Load

```go
officeHoursSchedule, err := client.OfficeHoursSchedule(nil).Load(map[string]any{"id": "office_hours_schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(officeHoursSchedule) // the loaded record
```


### Paginated

Create an instance: `paginated := client.Paginated(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` | An array of Objects |
| `pages` | `map[string]any` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `total_count` | `int` | A count of the total number of objects. |
| `type` | `string` | The type of object |

#### Example: List

```go
paginateds, err := client.Paginated(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paginateds) // the array of records
```


### PhoneSwitch

Create an instance: `phoneSwitch := client.PhoneSwitch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_attributes` | `map[string]any` | An object containing the different custom attributes associated to the conversation as key-value pairs. |
| `phone` | `string` | Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger. |
| `type` | `string` |  |

#### Example: Create

```go
result, err := client.PhoneSwitch(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ReportingData

Create an instance: `reportingData := client.ReportingData(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `download_expires_at` | `string` |  |
| `download_url` | `string` |  |
| `job_identifier` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```go
reportingData, err := client.ReportingData(nil).Load(map[string]any{"app_id": "app_id", "job_identifier": "job_identifier"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(reportingData) // the loaded record
```


### ReportingDataExport

Create an instance: `reportingDataExport := client.ReportingDataExport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attribute_ids` | `[]any` |  |
| `attributes` | `[]any` |  |
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

```go
reportingDataExports, err := client.ReportingDataExport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(reportingDataExports) // the array of records
```

#### Example: Create

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


### Segment

Create an instance: `segment := client.Segment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
segment, err := client.Segment(nil).Load(map[string]any{"id": "segment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(segment) // the loaded record
```

#### Example: List

```go
segments, err := client.Segment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(segments) // the array of records
```


### SideConversation

Create an instance: `sideConversation := client.SideConversation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversation_parts` | `[]any` | The conversation parts (messages) in this side conversation. |
| `side_conversation_id` | `string` | The unique identifier for the side conversation. |
| `total_count` | `int` | The total number of conversation parts in this side conversation. |

#### Example: List

```go
sideConversations, err := client.SideConversation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(sideConversations) // the array of records
```


### Subscription

Create an instance: `subscription := client.Subscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `consent_type` | `string` | Describes the type of consent. |
| `content_types` | `[]any` | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `map[string]any` | A translation object contains the localised details of a subscription type. |
| `id` | `string` | The unique identifier representing the subscription type. |
| `state` | `string` | The state of the subscription type. |
| `translations` | `[]any` | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `type` | `string` | The type of the object - subscription |

#### Example: List

```go
subscriptions, err := client.Subscription(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptions) // the array of records
```

#### Example: Create

```go
result, err := client.Subscription(nil).Create(map[string]any{
    "contact_id": "example_contact_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriptionType

Create an instance: `subscriptionType := client.SubscriptionType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `consent_type` | `string` | Describes the type of consent. |
| `content_types` | `[]any` | The message types that this subscription supports - can contain `email` or `sms_message`. |
| `default_translation` | `map[string]any` | A translation object contains the localised details of a subscription type. |
| `id` | `string` | The unique identifier representing the subscription type. |
| `state` | `string` | The state of the subscription type. |
| `translations` | `[]any` | An array of translations objects with the localised version of the subscription type in each available locale within your translation settings. |
| `type` | `string` | The type of the object - subscription |

#### Example: List

```go
subscriptionTypes, err := client.SubscriptionType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionTypes) // the array of records
```


### Tag

Create an instance: `tag := client.Tag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_id` | `string` | Optional id of the teammate to attribute the tagging to. |
| `applied_at` | `int` | The time when the tag was applied to the object. |
| `applied_by` | `map[string]any` | The admin who applied the tag. |
| `companies` | `[]any` |  |
| `id` | `string` | The id of the tag |
| `name` | `string` | The name of the tag |
| `type` | `string` | value is "tag" |
| `users` | `[]any` |  |

#### Example: Load

```go
tag, err := client.Tag(nil).Load(map[string]any{"id": "tag_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tag) // the loaded record
```

#### Example: List

```go
tags, err := client.Tag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tags) // the array of records
```

#### Example: Create

```go
result, err := client.Tag(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Team

Create an instance: `team := client.Team(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_ids` | `[]any` | The list of admin IDs that are a part of the team. |
| `admin_priority_level` | `map[string]any` | Admin priority levels for the team |
| `assignment_limit` | `int` | The assignment limit for the team. |
| `distribution_method` | `string` | Describes how assignments are distributed among the team members |
| `id` | `string` | The id of the team |
| `name` | `string` | The name of the team |
| `type` | `string` | Value is always "team" |

#### Example: Load

```go
team, err := client.Team(nil).Load(map[string]any{"id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(team) // the loaded record
```

#### Example: List

```go
teams, err := client.Team(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teams) // the array of records
```


### TeamMetricList

Create an instance: `teamMetricList := client.TeamMetricList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```go
teamMetricLists, err := client.TeamMetricList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamMetricLists) // the array of records
```


### Ticket

Create an instance: `ticket := client.Ticket(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_assignee_id` | `int` | The id representing the admin assigned to the ticket. |
| `attributes` | `map[string]any` | The attributes set on the ticket. |
| `category` | `string` | Category of the Ticket. |
| `contacts` | `map[string]any` | The list of contacts affected by a ticket. |
| `created_at` | `int` | The time the ticket was created as a UTC Unix timestamp. |
| `id` | `string` | The unique identifier for the ticket which is given by Intercom. |
| `is_shared` | `bool` | Whether or not the ticket is shared with the customer. |
| `linked_objects` | `map[string]any` | An object containing metadata about linked conversations and linked tickets. |
| `open` | `bool` | Whether or not the ticket is open. |
| `previous_ticket_state_id` | `string` | The ID of the previous ticket state from the most recent state change. |
| `skip_notifications` | `bool` | Option to disable notifications when a Ticket is created. |
| `snoozed_until` | `int` | The time the ticket will be snoozed until as a UTC Unix timestamp. |
| `team_assignee_id` | `int` | The id representing the team assigned to the ticket. |
| `ticket_attributes` | `map[string]any` | An object containing the different attributes associated to the ticket as key-value pairs. |
| `ticket_id` | `string` | The ID of the Ticket used in the Intercom Inbox and Messenger. |
| `ticket_parts` | `map[string]any` | A list of Ticket Part objects for each note and event in the ticket. |
| `ticket_state` | `map[string]any` | A ticket state, used to define the state of a ticket. |
| `ticket_state_id` | `string` | The ID of the ticket state associated with the ticket type. |
| `ticket_type` | `map[string]any` | A ticket type, used to define the data fields to be captured in a ticket. |
| `ticket_type_id` | `string` | The ID of the type of ticket you want to convert the conversation to |
| `type` | `string` | Always ticket |
| `updated_at` | `int` | The last time the ticket was updated as a UTC Unix timestamp. |

#### Example: Load

```go
ticket, err := client.Ticket(nil).Load(map[string]any{"id": "ticket_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(ticket) // the loaded record
```

#### Example: Create

```go
result, err := client.Ticket(nil).Create(map[string]any{
    "ticket_type_id": "example_ticket_type_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TicketList

Create an instance: `ticketList := client.TicketList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `pages` | `map[string]any` | Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. |
| `pagination` | `map[string]any` |  |
| `query` | `any` |  |
| `tickets` | `[]any` | The list of ticket objects |
| `total_count` | `int` | A count of the total number of objects. |
| `type` | `string` | Always ticket.list |

#### Example: Create

```go
result, err := client.TicketList(nil).Create(map[string]any{
    "query": "example_query",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TicketReply

Create an instance: `ticketReply := client.TicketReply(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `[]any` | A list of attachments for the part. |
| `author` | `map[string]any` | The author that wrote or triggered the part. |
| `body` | `string` | The message body, which may contain HTML. |
| `created_at` | `int` | The time the note was created. |
| `id` | `string` | The id representing the part. |
| `part_type` | `string` | Type of the part |
| `redacted` | `bool` | Whether or not the ticket part has been redacted. |
| `skip_notifications` | `bool` | Option to disable notifications when replying to a Ticket. |
| `type` | `string` | Always ticket_part |
| `updated_at` | `int` | The last time the note was updated. |

#### Example: Create

```go
result, err := client.TicketReply(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TicketState

Create an instance: `ticketState := client.TicketState(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Whether the ticket state is archived |
| `category` | `string` | The category of the ticket state |
| `external_label` | `string` | The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal. |
| `id` | `string` | The id of the ticket state |
| `internal_label` | `string` | The state the ticket is currently in, in a human readable form - visible in Intercom |
| `ticket_types` | `map[string]any` | A list of ticket types associated with a given ticket state. |
| `type` | `string` | String representing the object's type. |

#### Example: List

```go
ticketStates, err := client.TicketState(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(ticketStates) // the array of records
```


### TicketType

Create an instance: `ticketType := client.TicketType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `ticket_states` | `map[string]any` | A list of ticket states associated with a given ticket type. |
| `ticket_type_attributes` | `map[string]any` | A list of attributes associated with a given ticket type. |
| `type` | `string` | String representing the object's type. |
| `updated_at` | `int` | The date and time the ticket type was last updated. |
| `workspace_id` | `string` | The id of the workspace that the ticket type belongs to. |

#### Example: Load

```go
ticketType, err := client.TicketType(nil).Load(map[string]any{"id": "ticket_type_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(ticketType) // the loaded record
```

#### Example: List

```go
ticketTypes, err := client.TicketType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(ticketTypes) // the array of records
```

#### Example: Create

```go
result, err := client.TicketType(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TicketTypeAttribute

Create an instance: `ticketTypeAttribute := client.TicketTypeAttribute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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


### Visitor

Create an instance: `visitor := client.Visitor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anonymous` | `bool` | Identifies if this visitor is anonymous. |
| `app_id` | `string` | The id of the app the visitor is associated with. |
| `avatar` | `map[string]any` |  |
| `companies` | `map[string]any` |  |
| `created_at` | `int` | The time the Visitor was added to Intercom. |
| `custom_attributes` | `map[string]any` | The custom attributes you have set on the Visitor. |
| `do_not_track` | `bool` | Identifies if this visitor has do not track enabled. |
| `email` | `string` | The email of the visitor. |
| `has_hard_bounced` | `bool` | Identifies if this visitor has had a hard bounce. |
| `id` | `string` | The Intercom defined id representing the Visitor. |
| `las_request_at` | `int` | The time the Lead last recorded making a request. |
| `location_data` | `map[string]any` |  |
| `marked_email_as_spam` | `bool` | Identifies if this visitor has marked an email as spam. |
| `name` | `string` | The name of the visitor. |
| `owner_id` | `string` | The id of the admin that owns the Visitor. |
| `phone` | `string` | The phone number of the visitor. |
| `pseudonym` | `string` | The pseudonym of the visitor. |
| `referrer` | `string` | The referer of the visitor. |
| `remote_created_at` | `int` | The time the Visitor was added to Intercom. |
| `segments` | `map[string]any` |  |
| `session_count` | `int` | The number of sessions the Visitor has had. |
| `signed_up_at` | `int` | The time the Visitor signed up for your product. |
| `social_profiles` | `map[string]any` |  |
| `tags` | `map[string]any` |  |
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

```go
visitor, err := client.Visitor(nil).Load(map[string]any{"user_id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(visitor) // the loaded record
```


### WhatsappMessageStatus

Create an instance: `whatsappMessageStatus := client.WhatsappMessageStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `details` | `string` | Detailed error information |
| `message` | `string` | Error message |

#### Example: Load

```go
whatsappMessageStatus, err := client.WhatsappMessageStatus(nil).Load(map[string]any{"message_id": "message_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(whatsappMessageStatus) // the loaded record
```


### WhatsappMessageStatusList

Create an instance: `whatsappMessageStatusList := client.WhatsappMessageStatusList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
whatsappMessageStatusLists, err := client.WhatsappMessageStatusList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(whatsappMessageStatusLists) // the array of records
```


### Workflow

Create an instance: `workflow := client.Workflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attributes` | `[]any` | Custom attributes defined for this workflow. |
| `created_at` | `string` | When the workflow was created. |
| `description` | `string` | The description of the workflow. |
| `embedded_rules` | `[]any` | Rules embedded within the workflow steps. |
| `id` | `string` | The unique identifier for the workflow. |
| `preferred_devices` | `[]any` | The preferred devices for this workflow. |
| `snapshot` | `map[string]any` | The current snapshot of workflow steps and configuration. |
| `state` | `string` | The current state of the workflow. |
| `target_channels` | `[]any` | The channels this workflow targets. |
| `targeting` | `map[string]any` | The targeting rules for this workflow. |
| `title` | `string` | The title of the workflow. |
| `trigger_type` | `string` | The type of trigger that starts this workflow. |
| `updated_at` | `string` | When the workflow was last updated. |

#### Example: Load

```go
workflow, err := client.Workflow(nil).Load(map[string]any{"id": "workflow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflow) // the loaded record
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/intercom-sdk/go/
├── intercom.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/intercom-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
contactsegment := client.ContactSegment(nil)
contactsegment.List(nil, nil)

// contactsegment.Data() now returns the contactsegment data from the last list
// contactsegment.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
