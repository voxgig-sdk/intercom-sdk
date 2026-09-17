# Intercom API

The intercom API reference.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 89 entities and 231 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [ActivityLog](docs/api/activity_log.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `activity_description`: A sentence or two describing the activity.
- `created_at`: The time the activity was created.
- `id`: The id representing the activity.
- `metadata`: Additional data provided about Admin activity.
- `performed_by`: Details about the Admin involved in the activity.

### [ActivityLogEventType](docs/api/activity_log_event_type.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `event_types`: An array of activity log event type strings.
- `type`: String representing the object&#39;s type. Always has the value `activity_log_event_type.list`.

### [ActivityLogList](docs/api/activity_log_list.html)

Results: Successful response.

SDK operations: `create`.

Key fields to recognise:

- `activity_logs`: An array of activity logs
- `created_at_after`: The start date that you request data for.
- `created_at_before`: The end date that you request data for.
- `event_types`: An optional list of event types to filter activity logs by.
- `page`: The current page

### [Admin](docs/api/admin.html)

Results: Successful response; Admin found.

SDK operations: `list`, `load`, `update`.

Key fields to recognise:

- `avatar`: Image for the associated team or teammate
- `away_mode_enabled`: Identifies if this admin is currently set in away mode.
- `away_mode_reassign`: Identifies if this admin is set to automatically reassign new conversations to the apps default inbox.
- `away_status_reason_id`: The unique identifier of the away status reason
- `email`: The email of the admin.

### [AdminWithApp](docs/api/admin_with_app.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `app`: App that the admin belongs to.
- `avatar`: This object represents the avatar associated with the admin.
- `away_mode_enabled`: Identifies if this admin is currently set in away mode.
- `away_mode_reassign`: Identifies if this admin is set to automatically reassign new conversations to the apps default inbox.
- `email`: The email of the admin.

### [AiCall](docs/api/ai_call.html)

Results: successful.

SDK operations: `create`, `load`.

Key fields to recognise:

- `app_id`: The workspace identifier
- `call_id`: External call identifier from the call provider
- `call_summary`: Summary of the call conversation, truncated to 256 characters. Empty string if no summary available.
- `call_transcript`: Array of transcript entries for the call
- `data`: Additional metadata about the call

### [AiContent](docs/api/ai_content.html)

Results: successful.

SDK operations: `remove`.

### [Article](docs/api/article.html)

Results: Draft published; article created; Article draft found; successful; Article found; Draft staged.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `ai_chatbot_availability`: Whether the article is available for AI Chatbot. For multilingual articles, this will be the value of the default language&#39;s content.
- `ai_copilot_availability`: Whether the article is available for AI Copilot. For multilingual articles, this will be the value of the default language&#39;s content.
- `ai_sales_agent_availability`: Whether the article is available for AI Sales Agent. For multilingual articles, this will be the value of the default language&#39;s content.
- `audience_ids`: The list of audience IDs this article content is targeted to for Fin AI Agent. On multilingual help centers this field appears per-locale inside `translated_content`. On single-language help centers it appears at the article root level. Empty array means no audience targeting is set.
- `author_id`: The id of the author of the article. For multilingual articles, this will be the id of the author of the default language&#39;s content. Must be a teammate on the help center&#39;s workspace.

### [ArticleSearch](docs/api/article_search.html)

Results: Search successful.

SDK operations: `load`.

Key fields to recognise:

- `data`: An object containing the results of the search.
- `pages`: Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. A &quot;cursor&quot; or pointer is used to keep track of the current position in the result set, allowing the API to return the data in small chunks or &quot;pages&quot; as needed.
- `total_count`: The total number of Articles matching the search query
- `type`: The type of the object - `list`.

### [ArticleVersion](docs/api/article_version.html)

Results: Version found.

SDK operations: `load`.

Key fields to recognise:

- `article_id`: The unique identifier of the article this version belongs to.
- `author_id`: The id of the teammate listed as the article&#39;s author at this version.
- `body`: The HTML body of the article at this version.
- `body_markdown`: The Markdown body of the article at this version.
- `created_at`: The time the version was created, as a UTC Unix timestamp.

### [ArticleVersionList](docs/api/article_version_list.html)

Results: Versions found.

SDK operations: `list`.

### [Audience](docs/api/audience.html)

Results: Audience created; Successful response; Audience found; Audience deleted; Audience updated.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `created_at`: The time the audience was created as a Unix timestamp.
- `id`: The unique identifier representing the audience.
- `name`: The name of the audience.
- `predicates`: The predicates that define which contacts belong to the audience.
- `role_predicates`: Role-based predicates that further filter audience membership by contact role.

### [AwayStatusReason](docs/api/away_status_reason.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `created_at`: The Unix timestamp when the status reason was created
- `deleted`: Whether the status reason has been soft deleted
- `emoji`: The emoji associated with the status reason
- `id`: The unique identifier for the away status reason
- `label`: The display text for the away status reason

### [Banner](docs/api/banner.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `action`: The action a contact can take on the banner, or `null` when the banner has no action. The fields present depend on `type`: `url` (`label`, `target`), `reaction` (`reaction_set`), `email_collector`, or `product_tour` (`tour_id`, `tour_url`).
- `body`: The banner&#39;s body content as HTML.
- `client_targeting`: Reserved for future use. Always `null` in the current version, banners that depend on client-side targeting rules (such as page URL or time on page) are not returned by this endpoint.
- `created_at`: The time the contact&#39;s view of this banner was created.
- `id`: The id of the banner.

### [BannerDismiss](docs/api/banner_dismiss.html)

Results: Successful response.

SDK operations: `create`.

Key fields to recognise:

- `dismissed`: Whether the banner view is dismissed.
- `type`: String representing the object&#39;s type. Always has the value `banner_dismiss`.
- `view_id`: The id of the dismissed banner view.

### [Brand](docs/api/brand.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `created_at`: Unix timestamp of brand creation
- `default_address_settings_id`: Default email settings ID for this brand
- `help_center_id`: Associated help center identifier
- `id`: Unique brand identifier. For default brand, matches the workspace ID
- `is_default`: Whether this is the workspace&#39;s default brand

### [Call](docs/api/call.html)

Results: successful.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `admin_id`: The id of the admin associated with the call, if any.
- `call_type`: The type of call.
- `contact_id`: The id of the contact associated with the call, if any.
- `conversation_id`: The id of the conversation associated with the call, if any.
- `direction`: The direction of the call.

### [Company](docs/api/company.html)

Results: Successful.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `app_id`: The Intercom defined code of the workspace the company is associated to.
- `company_id`: The company id you have defined for the company.
- `created_at`: The time the company was added in Intercom.
- `custom_attributes`: The custom attributes you have set on the company.
- `id`: The Intercom defined id representing the company.

### [CompanyAttachedContact](docs/api/company_attached_contact.html)

Results: Successful.

SDK operations: `list`.

Key fields to recognise:

- `android_app_name`: The name of the Android app which the contact is using.
- `android_app_version`: The version of the Android app which the contact is using.
- `android_device`: The Android device which the contact is using.
- `android_last_seen_at`: (Unix timestamp in seconds) The time when the contact was last seen on an Android device.
- `android_os_version`: The version of the Android OS which the contact is using.

### [CompanyAttachedSegment](docs/api/company_attached_segment.html)

Results: Successful.

SDK operations: `list`.

Key fields to recognise:

- `count`: The number of items in the user segment. It&#39;s returned when `include_count=true` is included in the request.
- `created_at`: The time the segment was created.
- `id`: The unique identifier representing the segment.
- `name`: The name of the segment.
- `person_type`: Type of the contact: contact (lead) or user.

### [CompanyList](docs/api/company_list.html)

Results: Successful.

SDK operations: `create`.

Key fields to recognise:

- `data`: An array containing Company Objects.
- `pages`: Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. A &quot;cursor&quot; or pointer is used to keep track of the current position in the result set, allowing the API to return the data in small chunks or &quot;pages&quot; as needed.
- `total_count`: The total number of companies.
- `type`: The type of object - `list`.

### [CompanyScroll](docs/api/company_scroll.html)

Results: Successful.

SDK operations: `list`.

Key fields to recognise:

- `app_id`: The Intercom defined code of the workspace the company is associated to.
- `company_id`: The company id you have defined for the company.
- `created_at`: The time the company was added in Intercom.
- `custom_attributes`: The custom attributes you have set on the company.
- `id`: The Intercom defined id representing the company.

### [Contact](docs/api/contact.html)

Results: successful.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `android_app_name`: The name of the Android app which the contact is using.
- `android_app_version`: The version of the Android app which the contact is using.
- `android_device`: The Android device which the contact is using.
- `android_last_seen_at`: (Unix timestamp in seconds) The time when the contact was last seen on an Android device.
- `android_os_version`: The version of the Android OS which the contact is using.

### [ContactAttachedCompany](docs/api/contact_attached_company.html)

Results: successful.

SDK operations: `list`.

Key fields to recognise:

- `app_id`: The Intercom defined code of the workspace the company is associated to.
- `company_id`: The company id you have defined for the company.
- `created_at`: The time the company was added in Intercom.
- `custom_attributes`: The custom attributes you have set on the company.
- `id`: The Intercom defined id representing the company.

### [ContactList](docs/api/contact_list.html)

Results: successful.

SDK operations: `create`.

Key fields to recognise:

- `data`: The list of contact objects
- `pages`: Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. A &quot;cursor&quot; or pointer is used to keep track of the current position in the result set, allowing the API to return the data in small chunks or &quot;pages&quot; as needed.
- `sort`: An optional object to sort the results by.
- `total_count`: A count of the total number of objects.
- `type`: Always list

### [ContactSegment](docs/api/contact_segment.html)

Results: successful.

SDK operations: `list`.

Key fields to recognise:

- `count`: The number of items in the user segment. It&#39;s returned when `include_count=true` is included in the request.
- `created_at`: The time the segment was created.
- `id`: The unique identifier representing the segment.
- `name`: The name of the segment.
- `person_type`: Type of the contact: contact (lead) or user.

### [Content](docs/api/content.html)

Results: Accepted, work has been enqueued.

SDK operations: `create`.

### [ContentImportSource](docs/api/content_import_source.html)

Results: successful.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `apply_audience_to_existing_content`: When true, the audience will be applied to all existing external pages belonging to this content import source.
- `audience_ids`: The unique identifiers for the audiences associated with this content import source.
- `created_at`: The time when the content import source was created.
- `id`: The unique identifier for the content import source which is given by Intercom.
- `last_synced_at`: The time when the content import source was last synced.

### [ContentSearch](docs/api/content_search.html)

Results: Search successful.

SDK operations: `list`.

Key fields to recognise:

- `data`: The list of matched content items. Each item&#39;s `type` field determines its shape.
- `pages`: Pagination metadata, including links to neighbouring pages.
- `total_count`: Total number of results matching the query.
- `type`: Always `list`.

### [ContentSnippet](docs/api/content_snippet.html)

Results: Content snippet created; Successful response; Content snippet deleted; Content snippet updated.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `ai_chatbot_availability`: Whether the content snippet is available for AI Chatbot (Fin).
- `ai_copilot_availability`: Whether the content snippet is available for AI Copilot.
- `ai_sales_agent_availability`: Whether the content snippet is available for AI Sales Agent.
- `audience_ids`: The list of audience IDs this content snippet is targeted to for Fin AI Agent. Empty array means no audience targeting is set.
- `body_markdown`: The body of the content snippet in markdown.

### [Conversation](docs/api/conversation.html)

Results: Conversation merged; Assign a conversation; User last conversation reply; successful; conversation created; Redact a conversation part; conversation found; update a conversation with an association to a custom object instance.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `admin_assignee_id`: The id of the admin assigned to the conversation. If it&#39;s not assigned to an admin it will return 0.
- `ai_agent`: Data related to AI Agent involvement in the conversation.
- `ai_agent_participated`: Indicates whether the AI Agent participated in the conversation.
- `attachment_urls`: A list of image URLs that will be added as attachments.
- `body`: The body text of the note.

### [ConversationAttribute](docs/api/conversation_attribute.html)

Results: Successful response.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `description`: Readable description of the attribute.
- `label`: The display label for the option.
- `multiline`: Whether this string attribute is multiline.
- `name`: Name of the attribute.
- `reference`: Reference configuration for related objects.

### [ConversationAttributeList](docs/api/conversation_attribute_list.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `data`: A list of conversation attributes.
- `type`: The type of the object.

### [ConversationList](docs/api/conversation_list.html)

Results: successful.

SDK operations: `create`.

Key fields to recognise:

- `conversations`: The list of conversation objects
- `pages`: Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. A &quot;cursor&quot; or pointer is used to keep track of the current position in the result set, allowing the API to return the data in small chunks or &quot;pages&quot; as needed.
- `total_count`: A count of the total number of objects.
- `type`: Always conversation.list

### [ConversationParticipant](docs/api/conversation_participant.html)

Results: Attach a contact to a conversation; Detach a contact from a group conversation.

SDK operations: `create`, `remove`.

### [CustomObjectInstance](docs/api/custom_object_instance.html)

Results: successful.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `custom_attributes`: The custom attributes you have set on the custom object instance.
- `data`: An array of Custom Object Instance objects.
- `external_created_at`: The time when the Custom Object instance was created in the external system it originated from.
- `external_id`: The id you have defined for the custom object instance.
- `external_updated_at`: The time when the Custom Object instance was last updated in the external system it originated from.

### [Data](docs/api/data.html)

Results: successful.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at_after`: The start date that you request data for.
- `created_at_before`: The end date that you request data for.
- `download_expires_at`: The time after which you will not be able to access the data.
- `download_url`: The location where you can download your data.
- `job_identifier`: The identifier for your job.

### [DataAttribute](docs/api/data_attribute.html)

Results: Successful; Successful response.

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `admin_id`: Teammate who created the attribute. Only applicable to CDAs
- `api_writable`: Can this attribute be updated through API
- `archived`: Is this attribute archived. (Only applicable to CDAs)
- `created_at`: The time the attribute was created as a UTC Unix timestamp
- `custom`: Set to true if this is a CDA

### [DataConnector](docs/api/data_connector.html)

Results: Data connector created; successful; Data connector found; Data connector updated.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `audiences`: The audience types this connector targets.
- `body`: The request body template. Supports template variables.
- `bypass_authentication`: Whether authentication is bypassed for this connector.
- `client_function_name`: The name of the client-side function, if applicable.
- `client_function_timeout_ms`: Timeout in milliseconds for the client function, if applicable.

### [DataConnectorExecutionResult](docs/api/data_connector_execution_result.html)

Results: successful.

SDK operations: `load`.

Key fields to recognise:

- `conversation_id`: The conversation associated with this execution, if any.
- `created_at`: The time the execution occurred.
- `data_connector_id`: The unique identifier of the data connector that produced this result.
- `error_message`: A human-readable error message. Query parameters, userinfo, and fragments in URLs are redacted.
- `error_type`: The type of error that occurred, if any.

### [DataConnectorExecutionResultList](docs/api/data_connector_execution_result_list.html)

Results: successful.

SDK operations: `list`.

### [DataEvent](docs/api/data_event.html)

Results: successful.

SDK operations: `create`.

Key fields to recognise:

- `created_at`: The time the event occurred as a UTC Unix timestamp
- `email`: An email address for your user.
- `event_name`: The name of the event that occurred.
- `event_summaries`: A list of event summaries for the user.
- `id`: The unique identifier for the contact (lead or user) which is given by Intercom.

### [DataEventSummary](docs/api/data_event_summary.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `count`: The number of times the event was sent
- `description`: The description of the event
- `first`: The first time the event was sent
- `last`: The last time the event was sent
- `name`: The name of the event

### [DataExport](docs/api/data_export.html)

Results: successful.

SDK operations: `create`.

Key fields to recognise:

- `download_expires_at`: The time after which you will not be able to access the data.
- `download_url`: The location where you can download your data.
- `job_identifier`: The identifier for your job.
- `status`: The current state of your job.

### [Deleted](docs/api/deleted.html)

Results: View all deleted conversation IDs.

SDK operations: `list`.

Key fields to recognise:

- `deleted_at`: The time when the conversation was deleted.
- `id`: The ID of the deleted conversation.
- `metrics_retained`: Whether reporting metrics are retained for this conversation ID
- `type`: String representing the object&#39;s type. Always has the value `conversations.list`.

### [DeletedArticleObject](docs/api/deleted_article_object.html)

Results: successful.

SDK operations: `remove`.

### [DeletedCompanyObject](docs/api/deleted_company_object.html)

Results: Successful.

SDK operations: `remove`.

### [DeletedDataConnectorObject](docs/api/deleted_data_connector_object.html)

Results: Data connector deleted.

SDK operations: `remove`.

### [DeletedInternalArticleObject](docs/api/deleted_internal_article_object.html)

Results: internal article created; successful.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `ai_chatbot_availability`: Whether the internal article is available for AI Chatbot (Fin).
- `ai_copilot_availability`: Whether the internal article is available for AI Copilot.
- `ai_sales_agent_availability`: Whether the internal article is available for AI Sales Agent.
- `audience_ids`: The list of audience IDs this internal article is targeted to for Fin AI Agent. Empty array means no audience targeting is set.
- `author_id`: The id of the author of the article.

### [DeletedObject](docs/api/deleted_object.html)

Results: successful.

SDK operations: `remove`.

### [Email](docs/api/email.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `brand_id`: Associated brand identifier
- `created_at`: Unix timestamp of creation
- `domain`: Domain portion of the email address
- `email`: Full sender email address
- `forwarded_email_last_received_at`: Unix timestamp of last forwarded email received (null if never)

### [ExternalPage](docs/api/external_page.html)

Results: successful.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `ai_agent_availability`: Whether the external page should be used to answer questions by AI Agent.
- `ai_copilot_availability`: Whether the external page should be used to answer questions by AI Copilot.
- `ai_sales_agent_availability`: Whether the external page should be used to answer questions by AI Sales Agent.
- `created_at`: The time when the external page was created.
- `external_id`: The identifier for the external page which was given by the source. Must be unique for the source.

### [FinAgent](docs/api/fin_agent.html)

Results: Rating recorded successfully; Reply sent successfully; Fin conversation started successfully.

SDK operations: `create`.

Key fields to recognise:

- `attachments`: An array of attachments to include with the message.
- `conversation`: Conversation-related attribute errors.
- `conversation_id`: The external ID of the rated conversation.
- `conversation_metadata`: Metadata about the conversation, including history and attributes.
- `message`: Optional. Human readable description of the error.

### [HandlingEvent](docs/api/handling_event.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `reason`: Optional reason for the event (for example, &quot;Paused&quot;, &quot;Away&quot;)
- `teammate`: A reference to a teammate
- `timestamp`: ISO8601 timestamp when the event occurred
- `type`: The type of handling event

### [HelpCenter](docs/api/help_center.html)

Results: redirect created; collection created; Successful; Help Centers found; Collection found; successful; redirect deleted.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `ar`: The content of the group in Arabic
- `bg`: The content of the group in Bulgarian
- `bs`: The content of the group in Bosnian
- `ca`: The content of the group in Catalan
- `created_at`: The time the redirect was created as a UTC Unix timestamp.

### [InternalArticle](docs/api/internal_article.html)

Results: Internal article found; successful.

SDK operations: `load`, `update`.

Key fields to recognise:

- `ai_chatbot_availability`: Whether the internal article is available for AI Chatbot (Fin).
- `ai_copilot_availability`: Whether the internal article is available for AI Copilot.
- `ai_sales_agent_availability`: Whether the internal article is available for AI Sales Agent.
- `audience_ids`: The list of audience IDs this internal article is targeted to for Fin AI Agent. Empty array means no audience targeting is set.
- `author_id`: The id of the author of the article.

### [InternalArticleSearch](docs/api/internal_article_search.html)

Results: Search successful.

SDK operations: `load`.

Key fields to recognise:

- `data`: An object containing the results of the search.
- `pages`: Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. A &quot;cursor&quot; or pointer is used to keep track of the current position in the result set, allowing the API to return the data in small chunks or &quot;pages&quot; as needed.
- `total_count`: The total number of Internal Articles matching the search query
- `type`: The type of the object - `list`.

### [IpAllowlist](docs/api/ip_allowlist.html)

Results: Successful response.

SDK operations: `list`, `update`.

Key fields to recognise:

- `enabled`: Whether the IP allowlist is enabled for the workspace.
- `ip_allowlist`: List of allowed IP addresses and/or IP ranges in CIDR notation. Examples: - Single IP: `192.168.0.1` - IP range: `192.168.0.1/24` (allows 192.168.0.0 - 192.168.0.255)
- `type`: String representing the object&#39;s type. Always has the value `ip_allowlist`.

### [Job](docs/api/job.html)

Results: Successful response; Job execution status.

SDK operations: `create`, `load`.

Key fields to recognise:

- `id`: The id of the job that&#39;s currently being processed or has completed.
- `resource_id`: The id of the resource created during job execution (for example ticket id)
- `resource_type`: The type of resource created during job execution.
- `resource_url`: The url of the resource created during job exeuction. Use this url to fetch the resource.
- `skip_notifications`: Option to disable notifications when a Ticket is created.

### [Macro](docs/api/macro.html)

Results: Successful response; Macro found.

SDK operations: `list`, `load`.

Key fields to recognise:

- `available_on`: Where the macro is available for use.
- `body`: The body of the macro in HTML format with placeholders transformed to XML-like format.
- `body_text`: The plain text version of the macro body with original Intercom placeholder format.
- `created_at`: The time the macro was created in ISO 8601 format.
- `id`: The unique identifier for the macro.

### [MergeHistory](docs/api/merge_history.html)

Results: successful.

SDK operations: `list`.

Key fields to recognise:

- `merged_at`: (Unix timestamp in seconds) The time when the merge occurred.
- `source_contact_id`: The Intercom ID of the contact that was merged into this contact.
- `source_contact_role`: The role of the contact that was merged in.
- `type`: The type of object.

### [Message](docs/api/message.html)

Results: admin message created.

SDK operations: `create`.

Key fields to recognise:

- `body`: The message body, which may contain HTML.
- `conversation_id`: The associated conversation_id
- `create_conversation_without_contact_reply`: Whether a conversation should be opened in the inbox for the message without the contact replying.
- `created_at`: The time the conversation was created.
- `from`: The sender of the message.

### [NewsItem](docs/api/news_item.html)

Results: successful.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `body`: The news item body, which may contain HTML.
- `cover_image_url`: URL of the image used as cover. Must have .jpg or .png extension.
- `created_at`: Timestamp for when the news item was created.
- `deliver_silently`: When set to true, the news item will appear in the messenger newsfeed without showing a notification badge.
- `id`: The unique identifier for the news item which is given by Intercom.

### [Newsfeed](docs/api/newsfeed.html)

Results: successful.

SDK operations: `load`.

Key fields to recognise:

- `created_at`: Timestamp for when the newsfeed was created.
- `id`: The unique identifier for the newsfeed which is given by Intercom.
- `name`: The name of the newsfeed. This name will never be visible to your users.
- `type`: The type of object.
- `updated_at`: Timestamp for when the newsfeed was last updated.

### [Note](docs/api/note.html)

Results: Successful response; Note found.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `admin_id`: The unique identifier of the admin creating the note.
- `author`: Optional. Represents the Admin that created the note.
- `body`: The body text of the note.
- `company`: Represents the company that the note was created about.
- `contact`: Represents the contact that the note was created about.

### [OfficeHour](docs/api/office_hour.html)

Results: Office hours schedule created; Successful response; Office hours exception deleted; Office hours schedule deleted.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `created_at`: The time the schedule was created as a Unix timestamp.
- `id`: The unique identifier for the office hours schedule.
- `name`: The name of the office hours schedule.
- `time_intervals`: The open intervals that make up the weekly schedule.
- `time_zone_name`: The IANA time zone the schedule&#39;s hours are evaluated in.

### [OfficeHoursException](docs/api/office_hours_exception.html)

Results: Office hours exception created; Successful response; Office hours exception found; Office hours exception updated.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `created_at`: The time the exception was created as a Unix timestamp.
- `exception_date`: The date the exception applies to, in `YYYY-MM-DD` format.
- `exception_type`: `closed` means the workspace is closed all day; `custom_hours` replaces the regular hours with `time_intervals`.
- `id`: The unique identifier for the office hours exception.
- `name`: An optional name for the exception.

### [OfficeHoursSchedule](docs/api/office_hours_schedule.html)

Results: Office hours schedule found; Office hours schedule updated.

SDK operations: `load`, `update`.

Key fields to recognise:

- `created_at`: The time the schedule was created as a Unix timestamp.
- `id`: The unique identifier for the office hours schedule.
- `name`: The name of the office hours schedule.
- `time_intervals`: The open intervals that make up the weekly schedule.
- `time_zone_name`: The IANA time zone the schedule&#39;s hours are evaluated in.

### [Paginated](docs/api/paginated.html)

Results: successful.

SDK operations: `list`.

Key fields to recognise:

- `data`: An array of Objects
- `pages`: Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. A &quot;cursor&quot; or pointer is used to keep track of the current position in the result set, allowing the API to return the data in small chunks or &quot;pages&quot; as needed.
- `total_count`: A count of the total number of objects.
- `type`: The type of object

### [PhoneSwitch](docs/api/phone_switch.html)

Results: successful.

SDK operations: `create`.

Key fields to recognise:

- `custom_attributes`: An object containing the different custom attributes associated to the conversation as key-value pairs.
- `phone`: Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger.

### [ReportingData](docs/api/reporting_data.html)

Results: Export file downloaded; Job status returned successfully.

SDK operations: `load`.

### [ReportingDataExport](docs/api/reporting_data_export.html)

Results: Job enqueued successfully; List of datasets.

SDK operations: `create`, `list`.

### [Segment](docs/api/segment.html)

Results: Successful response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `count`: The number of items in the user segment. It&#39;s returned when `include_count=true` is included in the request.
- `created_at`: The time the segment was created.
- `id`: The unique identifier representing the segment.
- `name`: The name of the segment.
- `person_type`: Type of the contact: contact (lead) or user.

### [SideConversation](docs/api/side_conversation.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `conversation_parts`: The conversation parts (messages) in this side conversation.
- `side_conversation_id`: The unique identifier for the side conversation.
- `total_count`: The total number of side conversations.

### [Subscription](docs/api/subscription.html)

Results: Successful.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `consent_type`: Describes the type of consent.
- `content_types`: The message types that this subscription supports - can contain `email` or `sms_message`.
- `default_translation`: A translation object contains the localised details of a subscription type.
- `id`: The unique identifier representing the subscription type.
- `state`: The state of the subscription type.

### [SubscriptionType](docs/api/subscription_type.html)

Results: Successful.

SDK operations: `list`.

Key fields to recognise:

- `consent_type`: Describes the type of consent.
- `content_types`: The message types that this subscription supports - can contain `email` or `sms_message`.
- `default_translation`: A translation object contains the localised details of a subscription type.
- `id`: The unique identifier representing the subscription type.
- `state`: The state of the subscription type.

### [Tag](docs/api/tag.html)

Results: Tag applied; successful; Action successful; Tag found; Tag removed; Successful.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `admin_id`: Optional id of the teammate to attribute the tagging to.
- `applied_at`: The time when the tag was applied to the object. Only present when the tag is returned as part of a tagging operation on a contact, conversation, or ticket.
- `applied_by`: The admin who applied the tag. Only present when the tag is returned as part of a tagging operation on a contact, conversation, or ticket.
- `id`: The id of the tag
- `name`: The name of the tag

### [Team](docs/api/team.html)

Results: successful.

SDK operations: `list`, `load`.

Key fields to recognise:

- `admin_ids`: The list of admin IDs that are a part of the team.
- `admin_priority_level`: Admin priority levels for the team
- `assignment_limit`: The assignment limit for the team. This field is only present when the team&#39;s distribution type is load balanced.
- `distribution_method`: Describes how assignments are distributed among the team members
- `id`: The id of the team

### [TeamMetricList](docs/api/team_metric_list.html)

Results: Successful response.

SDK operations: `list`.

### [Ticket](docs/api/ticket.html)

Results: successful; Successful response; Ticket found.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `admin_assignee_id`: The id representing the admin assigned to the ticket. If it&#39;s not assigned to an admin it will return 0.
- `attributes`: The attributes set on the ticket.
- `category`: Category of the Ticket.
- `contacts`: The list of contacts affected by a ticket.
- `created_at`: The time the ticket was created as a UTC Unix timestamp.

### [TicketList](docs/api/ticket_list.html)

Results: successful.

SDK operations: `create`.

Key fields to recognise:

- `pages`: Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data. A &quot;cursor&quot; or pointer is used to keep track of the current position in the result set, allowing the API to return the data in small chunks or &quot;pages&quot; as needed.
- `tickets`: The list of ticket objects
- `total_count`: A count of the total number of objects.
- `type`: Always ticket.list

### [TicketReply](docs/api/ticket_reply.html)

Results: Admin Reply to send Quick Reply Options.

SDK operations: `create`.

Key fields to recognise:

- `attachments`: A list of attachments for the part.
- `author`: The author that wrote or triggered the part. Can be a bot, admin, team or user.
- `body`: The message body, which may contain HTML.
- `created_at`: The time the note was created.
- `id`: The id representing the part.

### [TicketState](docs/api/ticket_state.html)

Results: successful.

SDK operations: `list`.

Key fields to recognise:

- `archived`: Whether the ticket state is archived
- `category`: The category of the ticket state
- `external_label`: The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal.
- `id`: The id of the ticket state
- `internal_label`: The state the ticket is currently in, in a human readable form - visible in Intercom

### [TicketType](docs/api/ticket_type.html)

Results: Ticket type created; successful; Ticket type found; Ticket type updated.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `archived`: Whether the ticket type is archived or not.
- `category`: Category of the Ticket Type.
- `created_at`: The date and time the ticket type was created.
- `description`: The description of the ticket type
- `icon`: The icon of the ticket type

### [TicketTypeAttribute](docs/api/ticket_type_attribute.html)

Results: Ticket Type Attribute created; Ticket Type Attribute updated.

SDK operations: `create`, `update`.

Key fields to recognise:

- `allow_multiple_values`: Whether the attribute allows multiple files to be attached to it (only applicable to file attributes)
- `archived`: Whether the ticket type attribute is archived or not.
- `data_type`: The type of the data attribute (allowed values: &quot;string list integer decimal boolean datetime files&quot;)
- `description`: The description of the ticket type attribute
- `list_items`: A comma delimited list of items for the attribute value (only applicable to list attributes)

### [Visitor](docs/api/visitor.html)

Results: successful.

SDK operations: `load`, `update`.

Key fields to recognise:

- `anonymous`: Identifies if this visitor is anonymous.
- `app_id`: The id of the app the visitor is associated with.
- `created_at`: The time the Visitor was added to Intercom.
- `custom_attributes`: The custom attributes you have set on the Visitor.
- `do_not_track`: Identifies if this visitor has do not track enabled.

### [WhatsappMessageStatus](docs/api/whatsapp_message_status.html)

Results: Successful response.

SDK operations: `load`.

Key fields to recognise:

- `details`: Detailed error information
- `message`: Error message

### [WhatsappMessageStatusList](docs/api/whatsapp_message_status_list.html)

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `conversation_id`: ID of the conversation
- `created_at`: Creation timestamp
- `id`: Event ID
- `status`: Current status of the message
- `template_name`: Name of the WhatsApp template used

### [Workflow](docs/api/workflow.html)

Results: Workflow exported successfully.

SDK operations: `load`.

Key fields to recognise:

- `attributes`: Custom attributes defined for this workflow.
- `created_at`: When the workflow was created.
- `description`: The description of the workflow.
- `embedded_rules`: Rules embedded within the workflow steps.
- `id`: The unique identifier for the workflow.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [ActivityLog](docs/api/activity_log.html) | `list` | `GET /admins/activity_logs` | Required |
| [ActivityLogEventType](docs/api/activity_log_event_type.html) | `list` | `GET /admins/activity_log_event_types` | Required |
| [ActivityLogList](docs/api/activity_log_list.html) | `create` | `POST /admins/activity_logs/search` | Required |
| [Admin](docs/api/admin.html) | `list` | `GET /admins` | Required |
| [Admin](docs/api/admin.html) | `load` | `GET /admins/{admin_id}` | Required |
| [Admin](docs/api/admin.html) | `update` | `PUT /admins/{admin_id}/away` | Required |
| [AdminWithApp](docs/api/admin_with_app.html) | `list` | `GET /me` | Required |
| [AiCall](docs/api/ai_call.html) | `create` | `POST /fin_voice/register` | Required |
| [AiCall](docs/api/ai_call.html) | `load` | `GET /fin_voice/conversation/{conversation_id}` | Required |
| [AiCall](docs/api/ai_call.html) | `load` | `GET /fin_voice/external_id/{external_id}` | Required |
| [AiCall](docs/api/ai_call.html) | `load` | `GET /fin_voice/collect/{id}` | Required |
| [AiContent](docs/api/ai_content.html) | `remove` | `DELETE /ai/content_import_sources/{source_id}` | Required |
| [Article](docs/api/article.html) | `create` | `POST /articles/{id}/draft/publish` | Required |
| [Article](docs/api/article.html) | `create` | `POST /articles` | Required |
| [Article](docs/api/article.html) | `list` | `GET /articles/{id}/draft` | Required |
| [Article](docs/api/article.html) | `list` | `GET /articles` | Required |
| [Article](docs/api/article.html) | `load` | `GET /articles/{article_id}` | Required |
| [Article](docs/api/article.html) | `update` | `PUT /articles/{article_id}` | Required |
| [Article](docs/api/article.html) | `update` | `PUT /articles/{id}/draft` | Required |
| [ArticleSearch](docs/api/article_search.html) | `load` | `GET /articles/search` | Required |
| [ArticleVersion](docs/api/article_version.html) | `load` | `GET /articles/{article_id}/versions/{id}` | Required |
| [ArticleVersionList](docs/api/article_version_list.html) | `list` | `GET /articles/{article_id}/versions` | Required |
| [Audience](docs/api/audience.html) | `create` | `POST /audiences` | Required |
| [Audience](docs/api/audience.html) | `list` | `GET /audiences` | Required |
| [Audience](docs/api/audience.html) | `load` | `GET /audiences/{id}` | Required |
| [Audience](docs/api/audience.html) | `remove` | `DELETE /audiences/{id}` | Required |
| [Audience](docs/api/audience.html) | `update` | `PUT /audiences/{id}` | Required |
| [AwayStatusReason](docs/api/away_status_reason.html) | `list` | `GET /away_status_reasons` | Required |
| [Banner](docs/api/banner.html) | `list` | `GET /contacts/{id}/banners` | Required |
| [BannerDismiss](docs/api/banner_dismiss.html) | `create` | `POST /contacts/{id}/banners/{view_id}/dismiss` | Required |
| [Brand](docs/api/brand.html) | `list` | `GET /brands` | Required |
| [Brand](docs/api/brand.html) | `load` | `GET /brands/{id}` | Required |
| [Call](docs/api/call.html) | `create` | `POST /calls/search` | Required |
| [Call](docs/api/call.html) | `list` | `GET /calls` | Required |
| [Call](docs/api/call.html) | `load` | `GET /calls/{call_id}` | Required |
| [Call](docs/api/call.html) | `load` | `GET /calls/{call_id}/recording` | Required |
| [Call](docs/api/call.html) | `load` | `GET /calls/{call_id}/transcript` | Required |
| [Call](docs/api/call.html) | `load` | `GET /fin_voice/phone_number/{phone_number}` | Required |
| [Company](docs/api/company.html) | `create` | `POST /contacts/{contact_id}/companies` | Required |
| [Company](docs/api/company.html) | `create` | `POST /companies` | Required |
| [Company](docs/api/company.html) | `list` | `GET /companies` | Required |
| [Company](docs/api/company.html) | `load` | `GET /companies/{company_id}` | Required |
| [Company](docs/api/company.html) | `remove` | `DELETE /contacts/{contact_id}/companies/{company_id}` | Required |
| [Company](docs/api/company.html) | `update` | `PUT /companies/{company_id}` | Required |
| [CompanyAttachedContact](docs/api/company_attached_contact.html) | `list` | `GET /companies/{company_id}/contacts` | Required |
| [CompanyAttachedSegment](docs/api/company_attached_segment.html) | `list` | `GET /companies/{company_id}/segments` | Required |
| [CompanyList](docs/api/company_list.html) | `create` | `POST /companies/list` | Required |
| [CompanyScroll](docs/api/company_scroll.html) | `list` | `GET /companies/scroll` | Required |
| [Contact](docs/api/contact.html) | `create` | `POST /contacts/{contact_id}/archive` | Required |
| [Contact](docs/api/contact.html) | `create` | `POST /contacts/{contact_id}/block` | Required |
| [Contact](docs/api/contact.html) | `create` | `POST /contacts/merge` | Required |
| [Contact](docs/api/contact.html) | `create` | `POST /contacts/{contact_id}/unarchive` | Required |
| [Contact](docs/api/contact.html) | `create` | `POST /contacts` | Required |
| [Contact](docs/api/contact.html) | `create` | `POST /visitors/convert` | Required |
| [Contact](docs/api/contact.html) | `list` | `GET /contacts` | Required |
| [Contact](docs/api/contact.html) | `load` | `GET /contacts/find_by_external_id/{external_id}` | Required |
| [Contact](docs/api/contact.html) | `load` | `GET /contacts/{contact_id}` | Required |
| [Contact](docs/api/contact.html) | `remove` | `DELETE /contacts/{contact_id}` | Required |
| [Contact](docs/api/contact.html) | `update` | `PUT /contacts/{contact_id}` | Required |
| [ContactAttachedCompany](docs/api/contact_attached_company.html) | `list` | `GET /contacts/{contact_id}/companies` | Required |
| [ContactList](docs/api/contact_list.html) | `create` | `POST /contacts/search` | Required |
| [ContactSegment](docs/api/contact_segment.html) | `list` | `GET /contacts/{contact_id}/segments` | Required |
| [Content](docs/api/content.html) | `create` | `POST /content/bulk_actions` | Required |
| [ContentImportSource](docs/api/content_import_source.html) | `create` | `POST /ai/content_import_sources` | Required |
| [ContentImportSource](docs/api/content_import_source.html) | `list` | `GET /ai/content_import_sources` | Required |
| [ContentImportSource](docs/api/content_import_source.html) | `load` | `GET /ai/content_import_sources/{source_id}` | Required |
| [ContentImportSource](docs/api/content_import_source.html) | `update` | `PUT /ai/content_import_sources/{source_id}` | Required |
| [ContentSearch](docs/api/content_search.html) | `list` | `GET /content/search` | Required |
| [ContentSnippet](docs/api/content_snippet.html) | `create` | `POST /content_snippets` | Required |
| [ContentSnippet](docs/api/content_snippet.html) | `list` | `GET /content_snippets` | Required |
| [ContentSnippet](docs/api/content_snippet.html) | `load` | `GET /content_snippets/{id}` | Required |
| [ContentSnippet](docs/api/content_snippet.html) | `remove` | `DELETE /content_snippets/{id}` | Required |
| [ContentSnippet](docs/api/content_snippet.html) | `update` | `PUT /content_snippets/{id}` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations/{id}/merge` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations/{conversation_id}/parts` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations/{conversation_id}/reply` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /tickets/{ticket_id}/linked_conversations` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations/redact` | Required |
| [Conversation](docs/api/conversation.html) | `list` | `GET /conversations` | Required |
| [Conversation](docs/api/conversation.html) | `load` | `GET /conversations/{conversation_id}` | Required |
| [Conversation](docs/api/conversation.html) | `remove` | `DELETE /conversations/{conversation_id}` | Required |
| [Conversation](docs/api/conversation.html) | `remove` | `DELETE /tickets/{ticket_id}/linked_conversations/{id}` | Required |
| [Conversation](docs/api/conversation.html) | `update` | `PUT /conversations/{conversation_id}` | Required |
| [ConversationAttribute](docs/api/conversation_attribute.html) | `create` | `POST /conversations/attributes/{id}/options` | Required |
| [ConversationAttribute](docs/api/conversation_attribute.html) | `create` | `POST /conversations/attributes` | Required |
| [ConversationAttribute](docs/api/conversation_attribute.html) | `load` | `GET /conversations/attributes/{id}` | Required |
| [ConversationAttribute](docs/api/conversation_attribute.html) | `remove` | `DELETE /conversations/attributes/{id}/options/{option_id}` | Required |
| [ConversationAttribute](docs/api/conversation_attribute.html) | `remove` | `DELETE /conversations/attributes/{id}` | Required |
| [ConversationAttribute](docs/api/conversation_attribute.html) | `update` | `PUT /conversations/attributes/{id}/options/{option_id}` | Required |
| [ConversationAttribute](docs/api/conversation_attribute.html) | `update` | `PUT /conversations/attributes/{id}` | Required |
| [ConversationAttributeList](docs/api/conversation_attribute_list.html) | `list` | `GET /conversations/attributes` | Required |
| [ConversationList](docs/api/conversation_list.html) | `create` | `POST /conversations/search` | Required |
| [ConversationParticipant](docs/api/conversation_participant.html) | `create` | `POST /conversations/{conversation_id}/customers` | Required |
| [ConversationParticipant](docs/api/conversation_participant.html) | `remove` | `DELETE /conversations/{conversation_id}/customers/{contact_id}` | Required |
| [CustomObjectInstance](docs/api/custom_object_instance.html) | `create` | `POST /custom_object_instances/{custom_object_type_identifier}` | Required |
| [CustomObjectInstance](docs/api/custom_object_instance.html) | `load` | `GET /custom_object_instances/{custom_object_type_identifier}` | Required |
| [CustomObjectInstance](docs/api/custom_object_instance.html) | `load` | `GET /custom_object_instances/{custom_object_type_identifier}/{custom_object_instance_id}` | Required |
| [CustomObjectInstance](docs/api/custom_object_instance.html) | `remove` | `DELETE /custom_object_instances/{custom_object_type_identifier}/{custom_object_instance_id}` | Required |
| [CustomObjectInstance](docs/api/custom_object_instance.html) | `remove` | `DELETE /custom_object_instances/{custom_object_type_identifier}` | Required |
| [Data](docs/api/data.html) | `create` | `POST /export/content/data` | Required |
| [Data](docs/api/data.html) | `load` | `GET /download/content/data/{job_identifier}` | Required |
| [Data](docs/api/data.html) | `load` | `GET /export/content/data/{job_identifier}` | Required |
| [DataAttribute](docs/api/data_attribute.html) | `create` | `POST /data_attributes` | Required |
| [DataAttribute](docs/api/data_attribute.html) | `list` | `GET /data_attributes` | Required |
| [DataAttribute](docs/api/data_attribute.html) | `update` | `PUT /data_attributes/{data_attribute_id}` | Required |
| [DataConnector](docs/api/data_connector.html) | `create` | `POST /data_connectors` | Required |
| [DataConnector](docs/api/data_connector.html) | `list` | `GET /data_connectors` | Required |
| [DataConnector](docs/api/data_connector.html) | `load` | `GET /data_connectors/{id}` | Required |
| [DataConnector](docs/api/data_connector.html) | `update` | `PATCH /data_connectors/{id}` | Required |
| [DataConnectorExecutionResult](docs/api/data_connector_execution_result.html) | `load` | `GET /data_connectors/{data_connector_id}/execution_results/{id}` | Required |
| [DataConnectorExecutionResultList](docs/api/data_connector_execution_result_list.html) | `list` | `GET /data_connectors/{data_connector_id}/execution_results` | Required |
| [DataEvent](docs/api/data_event.html) | `create` | `POST /events` | Required |
| [DataEvent](docs/api/data_event.html) | `create` | `POST /events/summaries` | Required |
| [DataEventSummary](docs/api/data_event_summary.html) | `list` | `GET /events` | Required |
| [DataExport](docs/api/data_export.html) | `create` | `POST /export/cancel/{job_identifier}` | Required |
| [Deleted](docs/api/deleted.html) | `list` | `GET /conversations/deleted` | Required |
| [DeletedArticleObject](docs/api/deleted_article_object.html) | `remove` | `DELETE /articles/{article_id}` | Required |
| [DeletedCompanyObject](docs/api/deleted_company_object.html) | `remove` | `DELETE /companies/{company_id}` | Required |
| [DeletedDataConnectorObject](docs/api/deleted_data_connector_object.html) | `remove` | `DELETE /data_connectors/{id}` | Required |
| [DeletedInternalArticleObject](docs/api/deleted_internal_article_object.html) | `create` | `POST /internal_articles` | Required |
| [DeletedInternalArticleObject](docs/api/deleted_internal_article_object.html) | `list` | `GET /internal_articles` | Required |
| [DeletedInternalArticleObject](docs/api/deleted_internal_article_object.html) | `remove` | `DELETE /internal_articles/{internal_article_id}` | Required |
| [DeletedObject](docs/api/deleted_object.html) | `remove` | `DELETE /news/news_items/{news_item_id}` | Required |
| [Email](docs/api/email.html) | `list` | `GET /emails` | Required |
| [Email](docs/api/email.html) | `load` | `GET /emails/{id}` | Required |
| [ExternalPage](docs/api/external_page.html) | `create` | `POST /ai/external_pages` | Required |
| [ExternalPage](docs/api/external_page.html) | `list` | `GET /ai/external_pages` | Required |
| [ExternalPage](docs/api/external_page.html) | `load` | `GET /ai/external_pages/{page_id}` | Required |
| [ExternalPage](docs/api/external_page.html) | `remove` | `DELETE /ai/external_pages/{page_id}` | Required |
| [ExternalPage](docs/api/external_page.html) | `update` | `PUT /ai/external_pages/{page_id}` | Required |
| [FinAgent](docs/api/fin_agent.html) | `create` | `POST /fin/csat` | Required |
| [FinAgent](docs/api/fin_agent.html) | `create` | `POST /fin/reply` | Required |
| [FinAgent](docs/api/fin_agent.html) | `create` | `POST /fin/start` | Required |
| [HandlingEvent](docs/api/handling_event.html) | `list` | `GET /conversations/{id}/handling_events` | Required |
| [HelpCenter](docs/api/help_center.html) | `create` | `POST /help_center/help_centers/{help_center_id}/redirects` | Required |
| [HelpCenter](docs/api/help_center.html) | `create` | `POST /help_center/collections` | Required |
| [HelpCenter](docs/api/help_center.html) | `list` | `GET /help_center/help_centers/{help_center_id}/redirects` | Required |
| [HelpCenter](docs/api/help_center.html) | `list` | `GET /help_center/collections` | Required |
| [HelpCenter](docs/api/help_center.html) | `list` | `GET /help_center/help_centers` | Required |
| [HelpCenter](docs/api/help_center.html) | `load` | `GET /help_center/collections/{collection_id}` | Required |
| [HelpCenter](docs/api/help_center.html) | `load` | `GET /help_center/help_centers/{help_center_id}` | Required |
| [HelpCenter](docs/api/help_center.html) | `load` | `GET /help_center/help_centers/{help_center_id}/redirects/{id}` | Required |
| [HelpCenter](docs/api/help_center.html) | `remove` | `DELETE /help_center/collections/{collection_id}` | Required |
| [HelpCenter](docs/api/help_center.html) | `remove` | `DELETE /help_center/help_centers/{help_center_id}/redirects/{id}` | Required |
| [HelpCenter](docs/api/help_center.html) | `update` | `PUT /help_center/collections/{collection_id}` | Required |
| [InternalArticle](docs/api/internal_article.html) | `load` | `GET /internal_articles/{internal_article_id}` | Required |
| [InternalArticle](docs/api/internal_article.html) | `update` | `PUT /internal_articles/{internal_article_id}` | Required |
| [InternalArticleSearch](docs/api/internal_article_search.html) | `load` | `GET /internal_articles/search` | Required |
| [IpAllowlist](docs/api/ip_allowlist.html) | `list` | `GET /ip_allowlist` | Required |
| [IpAllowlist](docs/api/ip_allowlist.html) | `update` | `PUT /ip_allowlist` | Required |
| [Job](docs/api/job.html) | `create` | `POST /tickets/enqueue` | Required |
| [Job](docs/api/job.html) | `load` | `GET /jobs/status/{job_id}` | Required |
| [Macro](docs/api/macro.html) | `list` | `GET /macros` | Required |
| [Macro](docs/api/macro.html) | `load` | `GET /macros/{id}` | Required |
| [MergeHistory](docs/api/merge_history.html) | `list` | `GET /contacts/{id}/merge_history` | Required |
| [Message](docs/api/message.html) | `create` | `POST /messages` | Required |
| [NewsItem](docs/api/news_item.html) | `create` | `POST /news/news_items` | Required |
| [NewsItem](docs/api/news_item.html) | `load` | `GET /news/news_items/{news_item_id}` | Required |
| [NewsItem](docs/api/news_item.html) | `update` | `PUT /news/news_items/{news_item_id}` | Required |
| [Newsfeed](docs/api/newsfeed.html) | `load` | `GET /news/newsfeeds/{newsfeed_id}` | Required |
| [Note](docs/api/note.html) | `create` | `POST /companies/{company_id}/notes` | Required |
| [Note](docs/api/note.html) | `create` | `POST /contacts/{contact_id}/notes` | Required |
| [Note](docs/api/note.html) | `list` | `GET /companies/{company_id}/notes` | Required |
| [Note](docs/api/note.html) | `list` | `GET /contacts/{contact_id}/notes` | Required |
| [Note](docs/api/note.html) | `load` | `GET /notes/{note_id}` | Required |
| [OfficeHour](docs/api/office_hour.html) | `create` | `POST /office_hours_schedules` | Required |
| [OfficeHour](docs/api/office_hour.html) | `list` | `GET /office_hours_schedules` | Required |
| [OfficeHour](docs/api/office_hour.html) | `remove` | `DELETE /office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}` | Required |
| [OfficeHour](docs/api/office_hour.html) | `remove` | `DELETE /office_hours_schedules/{id}` | Required |
| [OfficeHoursException](docs/api/office_hours_exception.html) | `create` | `POST /office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions` | Required |
| [OfficeHoursException](docs/api/office_hours_exception.html) | `list` | `GET /office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions` | Required |
| [OfficeHoursException](docs/api/office_hours_exception.html) | `load` | `GET /office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}` | Required |
| [OfficeHoursException](docs/api/office_hours_exception.html) | `update` | `PUT /office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}` | Required |
| [OfficeHoursSchedule](docs/api/office_hours_schedule.html) | `load` | `GET /office_hours_schedules/{id}` | Required |
| [OfficeHoursSchedule](docs/api/office_hours_schedule.html) | `update` | `PUT /office_hours_schedules/{id}` | Required |
| [Paginated](docs/api/paginated.html) | `list` | `GET /news/newsfeeds/{newsfeed_id}/items` | Required |
| [Paginated](docs/api/paginated.html) | `list` | `GET /news/news_items` | Required |
| [Paginated](docs/api/paginated.html) | `list` | `GET /news/newsfeeds` | Required |
| [PhoneSwitch](docs/api/phone_switch.html) | `create` | `POST /phone_call_redirects` | Required |
| [ReportingData](docs/api/reporting_data.html) | `load` | `GET /download/reporting_data/{job_identifier}` | Required |
| [ReportingData](docs/api/reporting_data.html) | `load` | `GET /export/reporting_data/{job_identifier}` | Required |
| [ReportingDataExport](docs/api/reporting_data_export.html) | `create` | `POST /export/reporting_data/enqueue` | Required |
| [ReportingDataExport](docs/api/reporting_data_export.html) | `list` | `GET /export/reporting_data/get_datasets` | Required |
| [Segment](docs/api/segment.html) | `list` | `GET /segments` | Required |
| [Segment](docs/api/segment.html) | `load` | `GET /segments/{segment_id}` | Required |
| [SideConversation](docs/api/side_conversation.html) | `list` | `GET /conversations/{id}/side_conversations` | Required |
| [Subscription](docs/api/subscription.html) | `create` | `POST /contacts/{contact_id}/subscriptions` | Required |
| [Subscription](docs/api/subscription.html) | `list` | `GET /contacts/{contact_id}/subscriptions` | Required |
| [Subscription](docs/api/subscription.html) | `remove` | `DELETE /contacts/{contact_id}/subscriptions/{subscription_id}` | Required |
| [SubscriptionType](docs/api/subscription_type.html) | `list` | `GET /subscription_types` | Required |
| [Tag](docs/api/tag.html) | `create` | `POST /articles/{article_id}/tags` | Required |
| [Tag](docs/api/tag.html) | `create` | `POST /contacts/{contact_id}/tags` | Required |
| [Tag](docs/api/tag.html) | `create` | `POST /content_snippets/{content_snippet_id}/tags` | Required |
| [Tag](docs/api/tag.html) | `create` | `POST /conversations/{conversation_id}/tags` | Required |
| [Tag](docs/api/tag.html) | `create` | `POST /internal_articles/{internal_article_id}/tags` | Required |
| [Tag](docs/api/tag.html) | `create` | `POST /tickets/{ticket_id}/tags` | Required |
| [Tag](docs/api/tag.html) | `create` | `POST /tags` | Required |
| [Tag](docs/api/tag.html) | `list` | `GET /contacts/{contact_id}/tags` | Required |
| [Tag](docs/api/tag.html) | `list` | `GET /tags` | Required |
| [Tag](docs/api/tag.html) | `load` | `GET /tags/{tag_id}` | Required |
| [Tag](docs/api/tag.html) | `remove` | `DELETE /articles/{article_id}/tags/{id}` | Required |
| [Tag](docs/api/tag.html) | `remove` | `DELETE /contacts/{contact_id}/tags/{tag_id}` | Required |
| [Tag](docs/api/tag.html) | `remove` | `DELETE /content_snippets/{content_snippet_id}/tags/{id}` | Required |
| [Tag](docs/api/tag.html) | `remove` | `DELETE /conversations/{conversation_id}/tags/{tag_id}` | Required |
| [Tag](docs/api/tag.html) | `remove` | `DELETE /internal_articles/{internal_article_id}/tags/{id}` | Required |
| [Tag](docs/api/tag.html) | `remove` | `DELETE /tickets/{ticket_id}/tags/{tag_id}` | Required |
| [Tag](docs/api/tag.html) | `remove` | `DELETE /tags/{tag_id}` | Required |
| [Team](docs/api/team.html) | `list` | `GET /teams` | Required |
| [Team](docs/api/team.html) | `load` | `GET /teams/{team_id}` | Required |
| [TeamMetricList](docs/api/team_metric_list.html) | `list` | `GET /teams/{team_id}/metrics` | Required |
| [Ticket](docs/api/ticket.html) | `create` | `POST /conversations/{conversation_id}/convert` | Required |
| [Ticket](docs/api/ticket.html) | `create` | `POST /tickets/{ticket_id}/change_type` | Required |
| [Ticket](docs/api/ticket.html) | `create` | `POST /tickets` | Required |
| [Ticket](docs/api/ticket.html) | `load` | `GET /tickets/{ticket_id}` | Required |
| [Ticket](docs/api/ticket.html) | `remove` | `DELETE /tickets/{ticket_id}` | Required |
| [Ticket](docs/api/ticket.html) | `update` | `PUT /tickets/{ticket_id}` | Required |
| [TicketList](docs/api/ticket_list.html) | `create` | `POST /tickets/search` | Required |
| [TicketReply](docs/api/ticket_reply.html) | `create` | `POST /tickets/{ticket_id}/reply` | Required |
| [TicketState](docs/api/ticket_state.html) | `list` | `GET /ticket_states` | Required |
| [TicketType](docs/api/ticket_type.html) | `create` | `POST /ticket_types` | Required |
| [TicketType](docs/api/ticket_type.html) | `list` | `GET /ticket_types` | Required |
| [TicketType](docs/api/ticket_type.html) | `load` | `GET /ticket_types/{ticket_type_id}` | Required |
| [TicketType](docs/api/ticket_type.html) | `update` | `PUT /ticket_types/{ticket_type_id}` | Required |
| [TicketTypeAttribute](docs/api/ticket_type_attribute.html) | `create` | `POST /ticket_types/{ticket_type_id}/attributes` | Required |
| [TicketTypeAttribute](docs/api/ticket_type_attribute.html) | `update` | `PUT /ticket_types/{ticket_type_id}/attributes/{attribute_id}` | Required |
| [Visitor](docs/api/visitor.html) | `load` | `GET /visitors` | Required |
| [Visitor](docs/api/visitor.html) | `update` | `PUT /visitors` | Required |
| [WhatsappMessageStatus](docs/api/whatsapp_message_status.html) | `load` | `GET /messages/whatsapp/status` | Required |
| [WhatsappMessageStatusList](docs/api/whatsapp_message_status_list.html) | `list` | `GET /messages/status` | Required |
| [Workflow](docs/api/workflow.html) | `load` | `GET /export/workflows/{id}` | Required |

## Connect to the API

- The production API server: `https://api.intercom.io`
- The european API server: `https://api.eu.intercom.io`
- The australian API server: `https://api.au.intercom.io`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `intercom_list`: List records for an entity. Supported entities: `activity_log`, `activity_log_event_type`, `admin`, `admin_with_app`, `article`, `article_version_list`, `audience`, `away_status_reason`, `banner`, `brand`, `call`, `company`, `company_attached_contact`, `company_attached_segment`, `company_scroll`, `contact`, `contact_attached_company`, `contact_segment`, `content_import_source`, `content_search`, `content_snippet`, `conversation`, `conversation_attribute_list`, `data_attribute`, `data_connector`, `data_connector_execution_result_list`, `data_event_summary`, `deleted`, `deleted_internal_article_object`, `email`, `external_page`, `handling_event`, `help_center`, `ip_allowlist`, `macro`, `merge_history`, `note`, `office_hour`, `office_hours_exception`, `paginated`, `reporting_data_export`, `segment`, `side_conversation`, `subscription`, `subscription_type`, `tag`, `team`, `team_metric_list`, `ticket_state`, `ticket_type`, `whatsapp_message_status_list`.
- `intercom_load`: Load one record for an entity. Supported entities: `admin`, `ai_call`, `article`, `article_search`, `article_version`, `audience`, `brand`, `call`, `company`, `contact`, `content_import_source`, `content_snippet`, `conversation`, `conversation_attribute`, `custom_object_instance`, `data`, `data_connector`, `data_connector_execution_result`, `email`, `external_page`, `help_center`, `internal_article`, `internal_article_search`, `job`, `macro`, `news_item`, `newsfeed`, `note`, `office_hours_exception`, `office_hours_schedule`, `reporting_data`, `segment`, `tag`, `team`, `ticket`, `ticket_type`, `visitor`, `whatsapp_message_status`, `workflow`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

