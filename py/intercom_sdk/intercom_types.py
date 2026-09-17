# Typed models for the Intercom SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class ActivityLog(TypedDict, total=False):
    activity_description: str
    activity_type: str
    created_at: int
    id: str
    metadata: dict
    performed_by: dict


class ActivityLogListMatchRequired(TypedDict):
    created_at_after: str


class ActivityLogListMatch(ActivityLogListMatchRequired, total=False):
    created_at_before: str


class ActivityLogEventType(TypedDict, total=False):
    event_types: list
    type: str


class ActivityLogEventTypeListMatch(TypedDict, total=False):
    event_types: list
    type: str


class ActivityLogListRequired(TypedDict):
    created_at_after: int


class ActivityLogList(ActivityLogListRequired, total=False):
    activity_logs: list
    created_at_before: int
    event_types: list
    page: int
    pages: dict
    per_page: int
    type: str


class ActivityLogListCreateDataRequired(TypedDict):
    created_at_after: int


class ActivityLogListCreateData(ActivityLogListCreateDataRequired, total=False):
    activity_logs: list
    created_at_before: int
    event_types: list
    page: int
    pages: dict
    per_page: int
    type: str


class Admin(TypedDict, total=False):
    avatar: str
    away_mode_enabled: bool
    away_mode_reassign: bool
    away_status_reason_id: int
    email: str
    has_inbox_seat: bool
    id: str
    job_title: str
    name: str
    role: dict
    team_ids: list
    team_priority_level: dict
    type: str


class AdminLoadMatch(TypedDict):
    id: int


class AdminListMatch(TypedDict, total=False):
    display_avatar: bool


class AdminUpdateDataRequired(TypedDict):
    id: int


class AdminUpdateData(AdminUpdateDataRequired, total=False):
    avatar: str
    away_mode_enabled: bool
    away_mode_reassign: bool
    away_status_reason_id: int
    email: str
    has_inbox_seat: bool
    job_title: str
    name: str
    role: dict
    team_ids: list
    team_priority_level: dict
    type: str


class AdminWithApp(TypedDict, total=False):
    app: dict
    avatar: dict
    away_mode_enabled: bool
    away_mode_reassign: bool
    email: str
    email_verified: bool
    has_inbox_seat: bool
    id: str
    job_title: str
    name: str
    team_ids: list
    type: str


class AdminWithAppListMatch(TypedDict, total=False):
    app: dict
    avatar: dict
    away_mode_enabled: bool
    away_mode_reassign: bool
    email: str
    email_verified: bool
    has_inbox_seat: bool
    id: str
    job_title: str
    name: str
    team_ids: list
    type: str


class AiCallRequired(TypedDict):
    call_id: str
    phone_number: str


class AiCall(AiCallRequired, total=False):
    app_id: int
    call_summary: str
    call_transcript: list
    data: dict
    external_call_id: str
    id: int
    intent: list
    intercom_call_id: str
    intercom_conversation_id: str
    source: str
    status: str
    user_phone_number: str


class AiCallLoadMatch(TypedDict):
    conversation_id: str


class AiCallCreateDataRequired(TypedDict):
    call_id: str
    phone_number: str


class AiCallCreateData(AiCallCreateDataRequired, total=False):
    app_id: int
    call_summary: str
    call_transcript: list
    data: dict
    external_call_id: str
    id: int
    intent: list
    intercom_call_id: str
    intercom_conversation_id: str
    source: str
    status: str
    user_phone_number: str


class AiContent(TypedDict):
    pass


class AiContentRemoveMatch(TypedDict):
    source_id: str


class ArticleRequired(TypedDict):
    author_id: int
    title: str


class Article(ArticleRequired, total=False):
    ai_chatbot_availability: bool
    ai_copilot_availability: bool
    ai_sales_agent_availability: bool
    audience_ids: list
    body: str
    body_markdown: str
    conversions: int
    created_at: int
    created_by_id: int
    default_locale: str
    description: str
    draft_updated_at: int
    exclude_from_article_suggestions: bool
    fin_involvements: int
    fin_resolution_rate: float
    fin_resolutions: int
    happy_reaction_percentage: float
    has_unpublished_changes: bool
    help_center_audience: str
    id: str
    neutral_reaction_percentage: float
    parent_id: int
    parent_ids: list
    parent_type: str
    reactions: int
    sad_reaction_percentage: float
    scheduled_publish_at: str
    scheduled_unpublish_at: str
    state: str
    tags: dict
    translated_content: dict
    type: str
    updated_at: int
    updated_by_id: int
    url: str
    views: int
    workspace_id: str


class ArticleLoadMatch(TypedDict):
    id: int


class ArticleListMatch(TypedDict, total=False):
    ai_chatbot_availability: bool
    ai_copilot_availability: bool
    ai_sales_agent_availability: bool
    audience_ids: list
    author_id: int
    body: str
    body_markdown: str
    conversions: int
    created_at: int
    created_by_id: int
    default_locale: str
    description: str
    draft_updated_at: int
    exclude_from_article_suggestions: bool
    fin_involvements: int
    fin_resolution_rate: float
    fin_resolutions: int
    happy_reaction_percentage: float
    has_unpublished_changes: bool
    help_center_audience: str
    id: str
    neutral_reaction_percentage: float
    parent_id: int
    parent_ids: list
    parent_type: str
    reactions: int
    sad_reaction_percentage: float
    scheduled_publish_at: str
    scheduled_unpublish_at: str
    state: str
    tags: dict
    title: str
    translated_content: dict
    type: str
    updated_at: int
    updated_by_id: int
    url: str
    views: int
    workspace_id: str


class ArticleCreateDataRequired(TypedDict):
    author_id: int
    title: str


class ArticleCreateData(ArticleCreateDataRequired, total=False):
    ai_chatbot_availability: bool
    ai_copilot_availability: bool
    ai_sales_agent_availability: bool
    audience_ids: list
    body: str
    body_markdown: str
    conversions: int
    created_at: int
    created_by_id: int
    default_locale: str
    description: str
    draft_updated_at: int
    exclude_from_article_suggestions: bool
    fin_involvements: int
    fin_resolution_rate: float
    fin_resolutions: int
    happy_reaction_percentage: float
    has_unpublished_changes: bool
    help_center_audience: str
    id: str
    neutral_reaction_percentage: float
    parent_id: int
    parent_ids: list
    parent_type: str
    reactions: int
    sad_reaction_percentage: float
    scheduled_publish_at: str
    scheduled_unpublish_at: str
    state: str
    tags: dict
    translated_content: dict
    type: str
    updated_at: int
    updated_by_id: int
    url: str
    views: int
    workspace_id: str


class ArticleUpdateDataRequired(TypedDict):
    id: int


class ArticleUpdateData(ArticleUpdateDataRequired, total=False):
    ai_chatbot_availability: bool
    ai_copilot_availability: bool
    ai_sales_agent_availability: bool
    audience_ids: list
    author_id: int
    body: str
    body_markdown: str
    conversions: int
    created_at: int
    created_by_id: int
    default_locale: str
    description: str
    draft_updated_at: int
    exclude_from_article_suggestions: bool
    fin_involvements: int
    fin_resolution_rate: float
    fin_resolutions: int
    happy_reaction_percentage: float
    has_unpublished_changes: bool
    help_center_audience: str
    neutral_reaction_percentage: float
    parent_id: int
    parent_ids: list
    parent_type: str
    reactions: int
    sad_reaction_percentage: float
    scheduled_publish_at: str
    scheduled_unpublish_at: str
    state: str
    tags: dict
    title: str
    translated_content: dict
    type: str
    updated_at: int
    updated_by_id: int
    url: str
    views: int
    workspace_id: str


class ArticleSearch(TypedDict, total=False):
    data: dict
    pages: dict
    total_count: int
    type: str


class ArticleSearchLoadMatch(TypedDict, total=False):
    help_center_id: int
    highlight: bool
    phrase: str
    state: str


class ArticleVersion(TypedDict, total=False):
    article_id: str
    author_id: str
    body: str
    body_markdown: str
    created_at: int
    created_by_id: str
    created_via: str
    description: str
    from_version_id: str
    id: str
    state: str
    title: str
    type: str
    updated_at: int


class ArticleVersionLoadMatchRequired(TypedDict):
    article_id: int
    id: str


class ArticleVersionLoadMatch(ArticleVersionLoadMatchRequired, total=False):
    locale: str


class ArticleVersionList(TypedDict, total=False):
    id: str


class ArticleVersionListListMatchRequired(TypedDict):
    id: int


class ArticleVersionListListMatch(ArticleVersionListListMatchRequired, total=False):
    locale: str
    page: int
    per_page: int


class Audience(TypedDict, total=False):
    created_at: int
    id: str
    name: str
    predicates: list
    role_predicates: list
    type: str
    updated_at: int


class AudienceLoadMatch(TypedDict):
    id: str


class AudienceListMatch(TypedDict, total=False):
    page: int
    per_page: int


class AudienceCreateData(TypedDict, total=False):
    created_at: int
    id: str
    name: str
    predicates: list
    role_predicates: list
    type: str
    updated_at: int


class AudienceUpdateDataRequired(TypedDict):
    id: str


class AudienceUpdateData(AudienceUpdateDataRequired, total=False):
    created_at: int
    name: str
    predicates: list
    role_predicates: list
    type: str
    updated_at: int


class AudienceRemoveMatch(TypedDict):
    id: str


class AwayStatusReason(TypedDict, total=False):
    created_at: int
    deleted: bool
    emoji: str
    id: str
    label: str
    order: int
    type: str
    updated_at: int


class AwayStatusReasonListMatch(TypedDict, total=False):
    created_at: int
    deleted: bool
    emoji: str
    id: str
    label: str
    order: int
    type: str
    updated_at: int


class Banner(TypedDict, total=False):
    action: dict
    body: str
    client_targeting: list
    created_at: int
    id: str
    position: str
    show_dismiss_button: bool
    style: str
    title: str
    type: str
    view_id: str


class BannerListMatch(TypedDict):
    contact_id: str


class BannerDismiss(TypedDict, total=False):
    dismissed: bool
    id: str
    type: str
    view_id: str


class BannerDismissCreateDataRequired(TypedDict):
    contact_id: str
    id: str


class BannerDismissCreateData(BannerDismissCreateDataRequired, total=False):
    dismissed: bool
    type: str
    view_id: str


class Brand(TypedDict, total=False):
    created_at: int
    default_address_settings_id: str
    help_center_id: str
    id: str
    is_default: bool
    name: str
    type: str
    updated_at: int


class BrandLoadMatch(TypedDict):
    id: str


class BrandListMatch(TypedDict, total=False):
    created_at: int
    default_address_settings_id: str
    help_center_id: str
    id: str
    is_default: bool
    name: str
    type: str
    updated_at: int


class Call(TypedDict, total=False):
    admin_id: str
    answered_at: Any
    call_type: str
    contact_id: str
    conversation_id: str
    created_at: Any
    direction: str
    ended_at: Any
    ended_reason: str
    fin_recording_url: str
    fin_transcription_url: str
    id: str
    initiated_at: Any
    phone: str
    recording_url: str
    state: str
    transcription_url: str
    type: str
    updated_at: Any


class CallLoadMatch(TypedDict):
    id: str


class CallListMatch(TypedDict, total=False):
    page: int
    per_page: int


class CallCreateData(TypedDict, total=False):
    admin_id: str
    answered_at: Any
    call_type: str
    contact_id: str
    conversation_id: str
    created_at: Any
    direction: str
    ended_at: Any
    ended_reason: str
    fin_recording_url: str
    fin_transcription_url: str
    id: str
    initiated_at: Any
    phone: str
    recording_url: str
    state: str
    transcription_url: str
    type: str
    updated_at: Any


class Company(TypedDict, total=False):
    app_id: str
    company_id: str
    created_at: int
    custom_attributes: dict
    id: str
    industry: str
    last_request_at: int
    monthly_spend: int
    name: str
    notes: dict
    plan: dict
    remote_created_at: int
    segments: dict
    session_count: int
    size: int
    tags: dict
    type: str
    update_last_request_at: bool
    updated_at: int
    user_count: int
    website: str


class CompanyLoadMatch(TypedDict):
    id: str


class CompanyListMatch(TypedDict, total=False):
    company_id: str
    name: str
    page: int
    per_page: int
    segment_id: str
    tag_id: str


class CompanyCreateData(TypedDict, total=False):
    app_id: str
    company_id: str
    created_at: int
    custom_attributes: dict
    id: str
    industry: str
    last_request_at: int
    monthly_spend: int
    name: str
    notes: dict
    plan: dict
    remote_created_at: int
    segments: dict
    session_count: int
    size: int
    tags: dict
    type: str
    update_last_request_at: bool
    updated_at: int
    user_count: int
    website: str


class CompanyUpdateDataRequired(TypedDict):
    id: str


class CompanyUpdateData(CompanyUpdateDataRequired, total=False):
    app_id: str
    company_id: str
    created_at: int
    custom_attributes: dict
    industry: str
    last_request_at: int
    monthly_spend: int
    name: str
    notes: dict
    plan: dict
    remote_created_at: int
    segments: dict
    session_count: int
    size: int
    tags: dict
    type: str
    update_last_request_at: bool
    updated_at: int
    user_count: int
    website: str


class CompanyRemoveMatch(TypedDict):
    contact_id: str
    id: str


class CompanyAttachedContact(TypedDict, total=False):
    android_app_name: str
    android_app_version: str
    android_device: str
    android_last_seen_at: int
    android_os_version: str
    android_sdk_version: str
    avatar: dict
    browser: str
    browser_language: str
    browser_version: str
    companies: dict
    created_at: int
    custom_attributes: dict
    email: str
    email_domain: str
    external_id: str
    has_hard_bounced: bool
    id: str
    ios_app_name: str
    ios_app_version: str
    ios_device: str
    ios_last_seen_at: int
    ios_os_version: str
    ios_sdk_version: str
    language_override: str
    last_contacted_at: int
    last_email_clicked_at: int
    last_email_opened_at: int
    last_replied_at: int
    last_seen_at: int
    location: dict
    marked_email_as_spam: bool
    merge_history: list
    name: str
    notes: dict
    os: str
    owner_id: str
    phone: str
    role: str
    signed_up_at: int
    social_profiles: dict
    tags: dict
    type: str
    unsubscribed_from_emails: bool
    updated_at: int
    workspace_id: str


class CompanyAttachedContactListMatch(TypedDict):
    id: str


class CompanyAttachedSegment(TypedDict, total=False):
    count: int
    created_at: int
    id: str
    name: str
    person_type: str
    type: str
    updated_at: int


class CompanyAttachedSegmentListMatch(TypedDict):
    id: str


class CompanyList(TypedDict, total=False):
    data: list
    pages: dict
    total_count: int
    type: str


class CompanyListCreateData(TypedDict, total=False):
    order: str
    page: int
    per_page: int
    data: list
    pages: dict
    total_count: int
    type: str


class CompanyScroll(TypedDict, total=False):
    app_id: str
    company_id: str
    created_at: int
    custom_attributes: dict
    id: str
    industry: str
    last_request_at: int
    monthly_spend: int
    name: str
    notes: dict
    plan: dict
    remote_created_at: int
    segments: dict
    session_count: int
    size: int
    tags: dict
    type: str
    updated_at: int
    user_count: int
    website: str


class CompanyScrollListMatch(TypedDict, total=False):
    scroll_param: str


class ContactRequired(TypedDict):
    user: dict
    visitor: dict


class Contact(ContactRequired, total=False):
    android_app_name: str
    android_app_version: str
    android_device: str
    android_last_seen_at: int
    android_os_version: str
    android_sdk_version: str
    avatar: dict
    browser: str
    browser_language: str
    browser_version: str
    companies: dict
    created_at: int
    custom_attributes: dict
    email: str
    email_domain: str
    enabled_push_messaging: bool
    external_id: str
    has_hard_bounced: bool
    id: str
    ios_app_name: str
    ios_app_version: str
    ios_device: str
    ios_last_seen_at: int
    ios_os_version: str
    ios_sdk_version: str
    language_override: str
    last_contacted_at: int
    last_email_clicked_at: int
    last_email_opened_at: int
    last_replied_at: int
    last_seen_at: int
    location: dict
    marked_email_as_spam: bool
    merge_history: list
    name: str
    notes: dict
    os: str
    owner_id: str
    phone: str
    role: str
    signed_up_at: int
    social_profiles: dict
    tags: dict
    type: str
    unsubscribed_from_emails: bool
    updated_at: int
    workspace_id: str


class ContactLoadMatchRequired(TypedDict):
    id: str


class ContactLoadMatch(ContactLoadMatchRequired, total=False):
    include_merge_history: bool


class ContactListMatch(TypedDict, total=False):
    include_merge_history: bool


class ContactCreateDataRequired(TypedDict):
    user: dict
    visitor: dict


class ContactCreateData(ContactCreateDataRequired, total=False):
    android_app_name: str
    android_app_version: str
    android_device: str
    android_last_seen_at: int
    android_os_version: str
    android_sdk_version: str
    avatar: dict
    browser: str
    browser_language: str
    browser_version: str
    companies: dict
    created_at: int
    custom_attributes: dict
    email: str
    email_domain: str
    enabled_push_messaging: bool
    external_id: str
    has_hard_bounced: bool
    id: str
    ios_app_name: str
    ios_app_version: str
    ios_device: str
    ios_last_seen_at: int
    ios_os_version: str
    ios_sdk_version: str
    language_override: str
    last_contacted_at: int
    last_email_clicked_at: int
    last_email_opened_at: int
    last_replied_at: int
    last_seen_at: int
    location: dict
    marked_email_as_spam: bool
    merge_history: list
    name: str
    notes: dict
    os: str
    owner_id: str
    phone: str
    role: str
    signed_up_at: int
    social_profiles: dict
    tags: dict
    type: str
    unsubscribed_from_emails: bool
    updated_at: int
    workspace_id: str


class ContactUpdateDataRequired(TypedDict):
    id: str


class ContactUpdateData(ContactUpdateDataRequired, total=False):
    include_merge_history: bool
    android_app_name: str
    android_app_version: str
    android_device: str
    android_last_seen_at: int
    android_os_version: str
    android_sdk_version: str
    avatar: dict
    browser: str
    browser_language: str
    browser_version: str
    companies: dict
    created_at: int
    custom_attributes: dict
    email: str
    email_domain: str
    enabled_push_messaging: bool
    external_id: str
    has_hard_bounced: bool
    ios_app_name: str
    ios_app_version: str
    ios_device: str
    ios_last_seen_at: int
    ios_os_version: str
    ios_sdk_version: str
    language_override: str
    last_contacted_at: int
    last_email_clicked_at: int
    last_email_opened_at: int
    last_replied_at: int
    last_seen_at: int
    location: dict
    marked_email_as_spam: bool
    merge_history: list
    name: str
    notes: dict
    os: str
    owner_id: str
    phone: str
    role: str
    signed_up_at: int
    social_profiles: dict
    tags: dict
    type: str
    unsubscribed_from_emails: bool
    updated_at: int
    user: dict
    visitor: dict
    workspace_id: str


class ContactRemoveMatch(TypedDict):
    id: str


class ContactAttachedCompany(TypedDict, total=False):
    app_id: str
    company_id: str
    created_at: int
    custom_attributes: dict
    id: str
    industry: str
    last_request_at: int
    monthly_spend: int
    name: str
    notes: dict
    plan: dict
    remote_created_at: int
    segments: dict
    session_count: int
    size: int
    tags: dict
    type: str
    updated_at: int
    user_count: int
    website: str


class ContactAttachedCompanyListMatch(TypedDict):
    id: str


class ContactListRequired(TypedDict):
    query: Any


class ContactList(ContactListRequired, total=False):
    data: list
    pages: dict
    pagination: dict
    sort: dict
    total_count: int
    type: str


class ContactListCreateDataRequired(TypedDict):
    query: Any


class ContactListCreateData(ContactListCreateDataRequired, total=False):
    include_merge_history: bool
    data: list
    pages: dict
    pagination: dict
    sort: dict
    total_count: int
    type: str


class ContactSegment(TypedDict, total=False):
    count: int
    created_at: int
    id: str
    name: str
    person_type: str
    type: str
    updated_at: int


class ContactSegmentListMatch(TypedDict):
    id: str


class Content(TypedDict):
    pass


class ContentCreateData(TypedDict):
    pass


class ContentImportSourceRequired(TypedDict):
    created_at: int
    id: int
    last_synced_at: int
    status: str
    sync_behavior: str
    type: str
    updated_at: int
    url: str


class ContentImportSource(ContentImportSourceRequired, total=False):
    apply_audience_to_existing_content: bool
    audience_ids: list


class ContentImportSourceLoadMatch(TypedDict):
    id: str


class ContentImportSourceListMatch(TypedDict, total=False):
    apply_audience_to_existing_content: bool
    audience_ids: list
    created_at: int
    id: int
    last_synced_at: int
    status: str
    sync_behavior: str
    type: str
    updated_at: int
    url: str


class ContentImportSourceCreateDataRequired(TypedDict):
    created_at: int
    id: int
    last_synced_at: int
    status: str
    sync_behavior: str
    type: str
    updated_at: int
    url: str


class ContentImportSourceCreateData(ContentImportSourceCreateDataRequired, total=False):
    apply_audience_to_existing_content: bool
    audience_ids: list


class ContentImportSourceUpdateDataRequired(TypedDict):
    id: str


class ContentImportSourceUpdateData(ContentImportSourceUpdateDataRequired, total=False):
    apply_audience_to_existing_content: bool
    audience_ids: list
    created_at: int
    last_synced_at: int
    status: str
    sync_behavior: str
    type: str
    updated_at: int
    url: str


class ContentSearch(TypedDict, total=False):
    data: list
    pages: dict
    total_count: int
    type: str


class ContentSearchListMatch(TypedDict, total=False):
    any_tag_id: list
    content_type: list
    copilot_state: str
    created_at_after: int
    created_at_before: int
    created_by_id: list
    fin_sales_state: str
    fin_service_state: str
    folder_entity_type: str
    folder_id: list
    last_updated_by_id: list
    locale: list
    page: int
    per_page: int
    query: str
    state: list
    tag_id: list
    tag_operator: str
    updated_at_after: int
    updated_at_before: int


class ContentSnippet(TypedDict, total=False):
    ai_chatbot_availability: bool
    ai_copilot_availability: bool
    ai_sales_agent_availability: bool
    audience_ids: list
    body_markdown: str
    chatbot_availability: int
    copilot_availability: int
    created_at: int
    id: str
    json_blocks: list
    locale: str
    title: str
    type: str
    updated_at: int


class ContentSnippetLoadMatch(TypedDict):
    id: str


class ContentSnippetListMatch(TypedDict, total=False):
    page: int
    per_page: int


class ContentSnippetCreateData(TypedDict, total=False):
    ai_chatbot_availability: bool
    ai_copilot_availability: bool
    ai_sales_agent_availability: bool
    audience_ids: list
    body_markdown: str
    chatbot_availability: int
    copilot_availability: int
    created_at: int
    id: str
    json_blocks: list
    locale: str
    title: str
    type: str
    updated_at: int


class ContentSnippetUpdateDataRequired(TypedDict):
    id: str


class ContentSnippetUpdateData(ContentSnippetUpdateDataRequired, total=False):
    ai_chatbot_availability: bool
    ai_copilot_availability: bool
    ai_sales_agent_availability: bool
    audience_ids: list
    body_markdown: str
    chatbot_availability: int
    copilot_availability: int
    created_at: int
    json_blocks: list
    locale: str
    title: str
    type: str
    updated_at: int


class ContentSnippetRemoveMatch(TypedDict):
    id: str


class ConversationRequired(TypedDict):
    body: str
    conversation_id: str


class Conversation(ConversationRequired, total=False):
    admin_assignee_id: int
    ai_agent: dict
    ai_agent_participated: bool
    attachment_urls: list
    brand_id: str
    channel: dict
    company: dict
    company_id: str
    contacts: dict
    conversation_parts: dict
    conversation_rating: dict
    created_at: int
    custom_attributes: dict
    external_references: list
    first_contact_reply: dict
    id: str
    linked_objects: dict
    monitor_evaluations: list
    open: bool
    priority: str
    read: bool
    sales_agent: dict
    sales_agent_participated: bool
    scorecards: list
    sla_applied: dict
    snoozed_until: int
    source: dict
    state: str
    statistics: dict
    subject: str
    tags: dict
    team_assignee_id: int
    teammates: dict
    title: str
    type: str
    updated_at: int
    waiting_since: int


class ConversationLoadMatchRequired(TypedDict):
    id: int


class ConversationLoadMatch(ConversationLoadMatchRequired, total=False):
    display_a: str
    include_translation: bool


class ConversationListMatch(TypedDict, total=False):
    per_page: int
    starting_after: str


class ConversationCreateDataRequired(TypedDict):
    body: str
    conversation_id: str


class ConversationCreateData(ConversationCreateDataRequired, total=False):
    admin_assignee_id: int
    ai_agent: dict
    ai_agent_participated: bool
    attachment_urls: list
    brand_id: str
    channel: dict
    company: dict
    company_id: str
    contacts: dict
    conversation_parts: dict
    conversation_rating: dict
    created_at: int
    custom_attributes: dict
    external_references: list
    first_contact_reply: dict
    id: str
    linked_objects: dict
    monitor_evaluations: list
    open: bool
    priority: str
    read: bool
    sales_agent: dict
    sales_agent_participated: bool
    scorecards: list
    sla_applied: dict
    snoozed_until: int
    source: dict
    state: str
    statistics: dict
    subject: str
    tags: dict
    team_assignee_id: int
    teammates: dict
    title: str
    type: str
    updated_at: int
    waiting_since: int


class ConversationUpdateDataRequired(TypedDict):
    id: int


class ConversationUpdateData(ConversationUpdateDataRequired, total=False):
    display_a: str
    admin_assignee_id: int
    ai_agent: dict
    ai_agent_participated: bool
    attachment_urls: list
    body: str
    brand_id: str
    channel: dict
    company: dict
    company_id: str
    contacts: dict
    conversation_id: str
    conversation_parts: dict
    conversation_rating: dict
    created_at: int
    custom_attributes: dict
    external_references: list
    first_contact_reply: dict
    linked_objects: dict
    monitor_evaluations: list
    open: bool
    priority: str
    read: bool
    sales_agent: dict
    sales_agent_participated: bool
    scorecards: list
    sla_applied: dict
    snoozed_until: int
    source: dict
    state: str
    statistics: dict
    subject: str
    tags: dict
    team_assignee_id: int
    teammates: dict
    title: str
    type: str
    updated_at: int
    waiting_since: int


class ConversationRemoveMatchRequired(TypedDict):
    id: int


class ConversationRemoveMatch(ConversationRemoveMatchRequired, total=False):
    retain_metric: bool
    ticket_id: str


class ConversationAttributeRequired(TypedDict):
    label: str
    reference: dict


class ConversationAttribute(ConversationAttributeRequired, total=False):
    admin_id: str
    archived: bool
    created_at: int
    data_type: str
    description: str
    id: int
    multiline: bool
    name: str
    required: bool
    type: str
    updated_at: int
    visible_to_team_ids: list


class ConversationAttributeLoadMatch(TypedDict):
    id: int


class ConversationAttributeCreateDataRequired(TypedDict):
    label: str
    reference: dict


class ConversationAttributeCreateData(ConversationAttributeCreateDataRequired, total=False):
    admin_id: str
    archived: bool
    created_at: int
    data_type: str
    description: str
    id: int
    multiline: bool
    name: str
    required: bool
    type: str
    updated_at: int
    visible_to_team_ids: list


class ConversationAttributeUpdateDataRequired(TypedDict):
    id: int


class ConversationAttributeUpdateData(ConversationAttributeUpdateDataRequired, total=False):
    admin_id: str
    archived: bool
    created_at: int
    data_type: str
    description: str
    label: str
    multiline: bool
    name: str
    reference: dict
    required: bool
    type: str
    updated_at: int
    visible_to_team_ids: list


class ConversationAttributeRemoveMatch(TypedDict):
    id: int


class ConversationAttributeList(TypedDict, total=False):
    data: list
    type: str


class ConversationAttributeListListMatch(TypedDict, total=False):
    include_archived: bool


class ConversationListRequired(TypedDict):
    query: Any


class ConversationList(ConversationListRequired, total=False):
    conversations: list
    pages: dict
    pagination: dict
    total_count: int
    type: str


class ConversationListCreateDataRequired(TypedDict):
    query: Any


class ConversationListCreateData(ConversationListCreateDataRequired, total=False):
    include_monitor: bool
    include_scorecard: bool
    conversations: list
    pages: dict
    pagination: dict
    total_count: int
    type: str


class ConversationParticipant(TypedDict, total=False):
    id: str


class ConversationParticipantCreateData(TypedDict):
    id: str


class ConversationParticipantRemoveMatch(TypedDict):
    contact_id: str
    conversation_id: str


class CustomObjectInstance(TypedDict, total=False):
    created_at: int
    custom_attributes: dict
    data: list
    external_created_at: str
    external_id: str
    external_updated_at: str
    id: str
    pages: dict
    total_count: int
    type: str
    updated_at: int


class CustomObjectInstanceLoadMatchRequired(TypedDict):
    id: str


class CustomObjectInstanceLoadMatch(CustomObjectInstanceLoadMatchRequired, total=False):
    external_id: str
    page: int
    per_page: int
    references_contact_id: str
    references_conversation_id: str


class CustomObjectInstanceCreateDataRequired(TypedDict):
    id: str


class CustomObjectInstanceCreateData(CustomObjectInstanceCreateDataRequired, total=False):
    created_at: int
    custom_attributes: dict
    data: list
    external_created_at: str
    external_id: str
    external_updated_at: str
    pages: dict
    total_count: int
    type: str
    updated_at: int


class CustomObjectInstanceRemoveMatch(TypedDict):
    id: str
    external_id: str


class DataRequired(TypedDict):
    created_at_after: int
    created_at_before: int


class Data(DataRequired, total=False):
    download_expires_at: str
    download_url: str
    id: str
    job_identifier: str
    status: str


class DataLoadMatch(TypedDict):
    id: str


class DataCreateDataRequired(TypedDict):
    created_at_after: int
    created_at_before: int


class DataCreateData(DataCreateDataRequired, total=False):
    download_expires_at: str
    download_url: str
    id: str
    job_identifier: str
    status: str


class DataAttribute(TypedDict, total=False):
    admin_id: str
    api_writable: bool
    archived: bool
    created_at: int
    custom: bool
    data_type: str
    description: str
    full_name: str
    id: int
    label: str
    messenger_writable: bool
    model: str
    name: str
    options: list
    type: str
    ui_writable: bool
    updated_at: int


class DataAttributeListMatch(TypedDict, total=False):
    include_archived: bool
    model: str


class DataAttributeCreateData(TypedDict, total=False):
    admin_id: str
    api_writable: bool
    archived: bool
    created_at: int
    custom: bool
    data_type: str
    description: str
    full_name: str
    id: int
    label: str
    messenger_writable: bool
    model: str
    name: str
    options: list
    type: str
    ui_writable: bool
    updated_at: int


class DataAttributeUpdateDataRequired(TypedDict):
    id: int


class DataAttributeUpdateData(DataAttributeUpdateDataRequired, total=False):
    admin_id: str
    api_writable: bool
    archived: bool
    created_at: int
    custom: bool
    data_type: str
    description: str
    full_name: str
    label: str
    messenger_writable: bool
    model: str
    name: str
    options: list
    type: str
    ui_writable: bool
    updated_at: int


class DataConnector(TypedDict, total=False):
    audiences: list
    body: str
    bypass_authentication: bool
    client_function_name: str
    client_function_timeout_ms: int
    configuration_response_type: str
    created_at: str
    created_by_admin_id: str
    customer_authentication: bool
    data_inputs: list
    data_transformation_type: str
    description: str
    direct_fin_usage: bool
    execution_results_url: str
    execution_type: str
    headers: list
    http_method: str
    id: str
    mock_response: dict
    name: str
    object_mappings: list
    response_fields: list
    state: str
    token_ids: list
    type: str
    updated_at: str
    updated_by_admin_id: str
    url: str
    validate_missing_attributes: bool


class DataConnectorLoadMatchRequired(TypedDict):
    id: str


class DataConnectorLoadMatch(DataConnectorLoadMatchRequired, total=False):
    state_version: str


class DataConnectorListMatch(TypedDict, total=False):
    per_page: int
    starting_after: str


class DataConnectorCreateData(TypedDict, total=False):
    audiences: list
    body: str
    bypass_authentication: bool
    client_function_name: str
    client_function_timeout_ms: int
    configuration_response_type: str
    created_at: str
    created_by_admin_id: str
    customer_authentication: bool
    data_inputs: list
    data_transformation_type: str
    description: str
    direct_fin_usage: bool
    execution_results_url: str
    execution_type: str
    headers: list
    http_method: str
    id: str
    mock_response: dict
    name: str
    object_mappings: list
    response_fields: list
    state: str
    token_ids: list
    type: str
    updated_at: str
    updated_by_admin_id: str
    url: str
    validate_missing_attributes: bool


class DataConnectorUpdateDataRequired(TypedDict):
    id: str


class DataConnectorUpdateData(DataConnectorUpdateDataRequired, total=False):
    audiences: list
    body: str
    bypass_authentication: bool
    client_function_name: str
    client_function_timeout_ms: int
    configuration_response_type: str
    created_at: str
    created_by_admin_id: str
    customer_authentication: bool
    data_inputs: list
    data_transformation_type: str
    description: str
    direct_fin_usage: bool
    execution_results_url: str
    execution_type: str
    headers: list
    http_method: str
    mock_response: dict
    name: str
    object_mappings: list
    response_fields: list
    state: str
    token_ids: list
    type: str
    updated_at: str
    updated_by_admin_id: str
    url: str
    validate_missing_attributes: bool


class DataConnectorExecutionResult(TypedDict, total=False):
    conversation_id: str
    created_at: str
    data_connector_id: str
    error_message: str
    error_type: str
    execution_time_ms: int
    http_method: str
    http_status: int
    id: str
    raw_response_body: str
    request_body: str
    request_url: str
    response_body: str
    source_id: str
    source_type: str
    success: bool
    type: str


class DataConnectorExecutionResultLoadMatch(TypedDict):
    data_connector_id: str
    id: str


class DataConnectorExecutionResultList(TypedDict, total=False):
    id: str


class DataConnectorExecutionResultListListMatchRequired(TypedDict):
    id: str


class DataConnectorExecutionResultListListMatch(DataConnectorExecutionResultListListMatchRequired, total=False):
    end_t: int
    error_type: str
    include_body: str
    per_page: int
    start_t: int
    starting_after: str
    success: str


class DataEvent(TypedDict, total=False):
    created_at: int
    email: str
    event_name: str
    event_summaries: dict
    id: str
    metadata: dict
    user_id: str


class DataEventCreateData(TypedDict, total=False):
    created_at: int
    email: str
    event_name: str
    event_summaries: dict
    id: str
    metadata: dict
    user_id: str


class DataEventSummary(TypedDict, total=False):
    count: int
    description: str
    first: str
    last: str
    name: str


class DataEventSummaryListMatchRequired(TypedDict):
    filter: dict
    type: str


class DataEventSummaryListMatch(DataEventSummaryListMatchRequired, total=False):
    summary: bool


class DataExport(TypedDict, total=False):
    download_expires_at: str
    download_url: str
    job_identifier: str
    status: str


class DataExportCreateDataRequired(TypedDict):
    job_identifier: str


class DataExportCreateData(DataExportCreateDataRequired, total=False):
    download_expires_at: str
    download_url: str
    status: str


class Deleted(TypedDict, total=False):
    deleted_at: int
    id: str
    metrics_retained: bool
    type: str


class DeletedListMatch(TypedDict, total=False):
    order: str
    page: int
    per_page: int


class DeletedArticleObject(TypedDict):
    pass


class DeletedArticleObjectRemoveMatch(TypedDict):
    article_id: int


class DeletedCompanyObject(TypedDict):
    pass


class DeletedCompanyObjectRemoveMatch(TypedDict):
    company_id: str


class DeletedDataConnectorObject(TypedDict, total=False):
    id: str


class DeletedDataConnectorObjectRemoveMatch(TypedDict):
    id: str


class DeletedInternalArticleObjectRequired(TypedDict):
    author_id: int
    owner_id: int
    title: str


class DeletedInternalArticleObject(DeletedInternalArticleObjectRequired, total=False):
    ai_chatbot_availability: bool
    ai_copilot_availability: bool
    ai_sales_agent_availability: bool
    audience_ids: list
    body: str
    body_markdown: str
    created_at: int
    id: str
    locale: str
    type: str
    updated_at: int


class DeletedInternalArticleObjectListMatch(TypedDict, total=False):
    ai_chatbot_availability: bool
    ai_copilot_availability: bool
    ai_sales_agent_availability: bool
    audience_ids: list
    author_id: int
    body: str
    body_markdown: str
    created_at: int
    id: str
    locale: str
    owner_id: int
    title: str
    type: str
    updated_at: int


class DeletedInternalArticleObjectCreateDataRequired(TypedDict):
    author_id: int
    owner_id: int
    title: str


class DeletedInternalArticleObjectCreateData(DeletedInternalArticleObjectCreateDataRequired, total=False):
    ai_chatbot_availability: bool
    ai_copilot_availability: bool
    ai_sales_agent_availability: bool
    audience_ids: list
    body: str
    body_markdown: str
    created_at: int
    id: str
    locale: str
    type: str
    updated_at: int


class DeletedInternalArticleObjectRemoveMatch(TypedDict):
    internal_article_id: int


class DeletedObject(TypedDict):
    pass


class DeletedObjectRemoveMatch(TypedDict):
    news_item_id: int


class Email(TypedDict, total=False):
    brand_id: str
    created_at: int
    domain: str
    email: str
    forwarded_email_last_received_at: int
    forwarding_enabled: bool
    id: str
    type: str
    updated_at: int
    verified: bool


class EmailLoadMatch(TypedDict):
    id: str


class EmailListMatch(TypedDict, total=False):
    brand_id: str
    created_at: int
    domain: str
    email: str
    forwarded_email_last_received_at: int
    forwarding_enabled: bool
    id: str
    type: str
    updated_at: int
    verified: bool


class ExternalPageRequired(TypedDict):
    ai_agent_availability: bool
    ai_copilot_availability: bool
    created_at: int
    external_id: str
    html: str
    id: str
    last_ingested_at: int
    locale: str
    source_id: int
    title: str
    type: str
    updated_at: int


class ExternalPage(ExternalPageRequired, total=False):
    ai_sales_agent_availability: bool
    fin_availability: bool
    url: str


class ExternalPageLoadMatch(TypedDict):
    id: str


class ExternalPageListMatch(TypedDict, total=False):
    ai_agent_availability: bool
    ai_copilot_availability: bool
    ai_sales_agent_availability: bool
    created_at: int
    external_id: str
    fin_availability: bool
    html: str
    id: str
    last_ingested_at: int
    locale: str
    source_id: int
    title: str
    type: str
    updated_at: int
    url: str


class ExternalPageCreateDataRequired(TypedDict):
    ai_agent_availability: bool
    ai_copilot_availability: bool
    created_at: int
    external_id: str
    html: str
    id: str
    last_ingested_at: int
    locale: str
    source_id: int
    title: str
    type: str
    updated_at: int


class ExternalPageCreateData(ExternalPageCreateDataRequired, total=False):
    ai_sales_agent_availability: bool
    fin_availability: bool
    url: str


class ExternalPageUpdateDataRequired(TypedDict):
    id: str


class ExternalPageUpdateData(ExternalPageUpdateDataRequired, total=False):
    ai_agent_availability: bool
    ai_copilot_availability: bool
    ai_sales_agent_availability: bool
    created_at: int
    external_id: str
    fin_availability: bool
    html: str
    last_ingested_at: int
    locale: str
    source_id: int
    title: str
    type: str
    updated_at: int
    url: str


class ExternalPageRemoveMatch(TypedDict):
    id: str


class FinAgentRequired(TypedDict):
    message: dict


class FinAgent(FinAgentRequired, total=False):
    attachments: list
    conversation: dict
    conversation_id: str
    conversation_metadata: dict
    rating: str
    remark: str
    status: str
    user: dict


class FinAgentCreateDataRequired(TypedDict):
    message: dict


class FinAgentCreateData(FinAgentCreateDataRequired, total=False):
    attachments: list
    conversation: dict
    conversation_id: str
    conversation_metadata: dict
    rating: str
    remark: str
    status: str
    user: dict


class HandlingEventRequired(TypedDict):
    teammate: dict
    timestamp: str
    type: str


class HandlingEvent(HandlingEventRequired, total=False):
    reason: str


class HandlingEventListMatch(TypedDict):
    conversation_id: str


class HelpCenter(TypedDict, total=False):
    ar: dict
    bg: dict
    bs: dict
    ca: dict
    created_at: int
    cs: dict
    custom_domain: str
    da: dict
    de: dict
    default: bool
    description: str
    display_name: str
    el: dict
    en: dict
    es: dict
    et: dict
    fi: dict
    fr: dict
    from_url: str
    he: dict
    help_center_id: str
    hr: dict
    hu: dict
    id: dict
    identifier: str
    it: dict
    ja: dict
    ko: dict
    locale: str
    locales: list
    lt: dict
    lv: dict
    mn: dict
    name: str
    nb: dict
    nl: dict
    parent_id: str
    pl: dict
    pt: dict
    ptBR: dict
    ro: dict
    ru: dict
    sl: dict
    sr: dict
    sv: dict
    target_id: str
    target_type: str
    tr: dict
    translated_content: dict
    type: str
    updated_at: int
    url: str
    vi: dict
    website_turned_on: bool
    workspace_id: str
    zhCN: dict
    zhTW: dict


class HelpCenterLoadMatch(TypedDict):
    collection_id: int


class HelpCenterListMatch(TypedDict, total=False):
    ar: dict
    bg: dict
    bs: dict
    ca: dict
    created_at: int
    cs: dict
    custom_domain: str
    da: dict
    de: dict
    default: bool
    description: str
    display_name: str
    el: dict
    en: dict
    es: dict
    et: dict
    fi: dict
    fr: dict
    from_url: str
    he: dict
    help_center_id: str
    hr: dict
    hu: dict
    id: dict
    identifier: str
    it: dict
    ja: dict
    ko: dict
    locale: str
    locales: list
    lt: dict
    lv: dict
    mn: dict
    name: str
    nb: dict
    nl: dict
    parent_id: str
    pl: dict
    pt: dict
    ptBR: dict
    ro: dict
    ru: dict
    sl: dict
    sr: dict
    sv: dict
    target_id: str
    target_type: str
    tr: dict
    translated_content: dict
    type: str
    updated_at: int
    url: str
    vi: dict
    website_turned_on: bool
    workspace_id: str
    zhCN: dict
    zhTW: dict


class HelpCenterCreateData(TypedDict, total=False):
    ar: dict
    bg: dict
    bs: dict
    ca: dict
    created_at: int
    cs: dict
    custom_domain: str
    da: dict
    de: dict
    default: bool
    description: str
    display_name: str
    el: dict
    en: dict
    es: dict
    et: dict
    fi: dict
    fr: dict
    from_url: str
    he: dict
    help_center_id: str
    hr: dict
    hu: dict
    id: dict
    identifier: str
    it: dict
    ja: dict
    ko: dict
    locale: str
    locales: list
    lt: dict
    lv: dict
    mn: dict
    name: str
    nb: dict
    nl: dict
    parent_id: str
    pl: dict
    pt: dict
    ptBR: dict
    ro: dict
    ru: dict
    sl: dict
    sr: dict
    sv: dict
    target_id: str
    target_type: str
    tr: dict
    translated_content: dict
    type: str
    updated_at: int
    url: str
    vi: dict
    website_turned_on: bool
    workspace_id: str
    zhCN: dict
    zhTW: dict


class HelpCenterUpdateDataRequired(TypedDict):
    collection_id: int


class HelpCenterUpdateData(HelpCenterUpdateDataRequired, total=False):
    ar: dict
    bg: dict
    bs: dict
    ca: dict
    created_at: int
    cs: dict
    custom_domain: str
    da: dict
    de: dict
    default: bool
    description: str
    display_name: str
    el: dict
    en: dict
    es: dict
    et: dict
    fi: dict
    fr: dict
    from_url: str
    he: dict
    help_center_id: str
    hr: dict
    hu: dict
    id: dict
    identifier: str
    it: dict
    ja: dict
    ko: dict
    locale: str
    locales: list
    lt: dict
    lv: dict
    mn: dict
    name: str
    nb: dict
    nl: dict
    parent_id: str
    pl: dict
    pt: dict
    ptBR: dict
    ro: dict
    ru: dict
    sl: dict
    sr: dict
    sv: dict
    target_id: str
    target_type: str
    tr: dict
    translated_content: dict
    type: str
    updated_at: int
    url: str
    vi: dict
    website_turned_on: bool
    workspace_id: str
    zhCN: dict
    zhTW: dict


class HelpCenterRemoveMatch(TypedDict):
    collection_id: int


class InternalArticle(TypedDict, total=False):
    ai_chatbot_availability: bool
    ai_copilot_availability: bool
    ai_sales_agent_availability: bool
    audience_ids: list
    author_id: int
    body: str
    body_markdown: str
    created_at: int
    id: str
    locale: str
    owner_id: int
    title: str
    type: str
    updated_at: int


class InternalArticleLoadMatch(TypedDict):
    id: int


class InternalArticleUpdateDataRequired(TypedDict):
    id: int


class InternalArticleUpdateData(InternalArticleUpdateDataRequired, total=False):
    ai_chatbot_availability: bool
    ai_copilot_availability: bool
    ai_sales_agent_availability: bool
    audience_ids: list
    author_id: int
    body: str
    body_markdown: str
    created_at: int
    locale: str
    owner_id: int
    title: str
    type: str
    updated_at: int


class InternalArticleSearch(TypedDict, total=False):
    data: dict
    pages: dict
    total_count: int
    type: str


class InternalArticleSearchLoadMatch(TypedDict, total=False):
    folder_id: str


class IpAllowlist(TypedDict, total=False):
    enabled: bool
    ip_allowlist: list
    type: str


class IpAllowlistListMatch(TypedDict, total=False):
    enabled: bool
    ip_allowlist: list
    type: str


class IpAllowlistUpdateData(TypedDict, total=False):
    enabled: bool
    ip_allowlist: list
    type: str


class JobRequired(TypedDict):
    id: str


class Job(JobRequired, total=False):
    resource_id: str
    resource_type: str
    resource_url: str
    skip_notifications: bool
    status: str
    type: str
    url: str


class JobLoadMatch(TypedDict):
    job_id: str


class JobCreateDataRequired(TypedDict):
    id: str


class JobCreateData(JobCreateDataRequired, total=False):
    resource_id: str
    resource_type: str
    resource_url: str
    skip_notifications: bool
    status: str
    type: str
    url: str


class Macro(TypedDict, total=False):
    available_on: list
    body: str
    body_text: str
    created_at: str
    id: str
    name: str
    type: str
    updated_at: str
    visible_to: str
    visible_to_team_ids: list


class MacroLoadMatch(TypedDict):
    id: str


class MacroListMatch(TypedDict, total=False):
    per_page: int
    starting_after: str
    updated_since: int


class MergeHistory(TypedDict, total=False):
    merged_at: int
    source_contact_id: str
    source_contact_role: str
    type: str


class MergeHistoryListMatchRequired(TypedDict):
    contact_id: str


class MergeHistoryListMatch(MergeHistoryListMatchRequired, total=False):
    cursor: str
    order: str
    per_page: int


class MessageRequired(TypedDict):
    body: str
    created_at: int
    id: str
    message_type: str
    type: str


class Message(MessageRequired, total=False):
    bcc: Any
    cc: Any
    conversation_id: str
    create_conversation_without_contact_reply: bool
    subject: str
    template: str
    to: Any


class MessageCreateDataRequired(TypedDict):
    body: str
    created_at: int
    id: str
    message_type: str
    type: str


class MessageCreateData(MessageCreateDataRequired, total=False):
    bcc: Any
    cc: Any
    conversation_id: str
    create_conversation_without_contact_reply: bool
    subject: str
    template: str
    to: Any


class NewsItem(TypedDict, total=False):
    body: str
    cover_image_url: str
    created_at: int
    deliver_silently: bool
    id: str
    labels: list
    newsfeed_assignments: list
    reactions: list
    sender_id: int
    state: str
    title: str
    type: str
    updated_at: int
    workspace_id: str


class NewsItemLoadMatch(TypedDict):
    id: int


class NewsItemCreateData(TypedDict, total=False):
    body: str
    cover_image_url: str
    created_at: int
    deliver_silently: bool
    id: str
    labels: list
    newsfeed_assignments: list
    reactions: list
    sender_id: int
    state: str
    title: str
    type: str
    updated_at: int
    workspace_id: str


class NewsItemUpdateDataRequired(TypedDict):
    id: int


class NewsItemUpdateData(NewsItemUpdateDataRequired, total=False):
    body: str
    cover_image_url: str
    created_at: int
    deliver_silently: bool
    labels: list
    newsfeed_assignments: list
    reactions: list
    sender_id: int
    state: str
    title: str
    type: str
    updated_at: int
    workspace_id: str


class Newsfeed(TypedDict, total=False):
    created_at: int
    id: str
    name: str
    type: str
    updated_at: int


class NewsfeedLoadMatch(TypedDict):
    id: str


class Note(TypedDict, total=False):
    admin_id: str
    author: dict
    body: str
    company: dict
    contact: dict
    created_at: int
    id: str
    type: str


class NoteLoadMatch(TypedDict):
    id: int


class NoteListMatch(TypedDict):
    company_id: str


class NoteCreateDataRequired(TypedDict):
    company_id: str


class NoteCreateData(NoteCreateDataRequired, total=False):
    admin_id: str
    author: dict
    body: str
    company: dict
    contact: dict
    created_at: int
    id: str
    type: str


class OfficeHourRequired(TypedDict):
    name: str
    time_intervals: list
    time_zone_name: str


class OfficeHour(OfficeHourRequired, total=False):
    created_at: int
    id: str
    twenty_four_seven: bool
    type: str
    updated_at: int


class OfficeHourListMatch(TypedDict, total=False):
    created_at: int
    id: str
    name: str
    time_intervals: list
    time_zone_name: str
    twenty_four_seven: bool
    type: str
    updated_at: int


class OfficeHourCreateDataRequired(TypedDict):
    name: str
    time_intervals: list
    time_zone_name: str


class OfficeHourCreateData(OfficeHourCreateDataRequired, total=False):
    created_at: int
    id: str
    twenty_four_seven: bool
    type: str
    updated_at: int


class OfficeHourRemoveMatchRequired(TypedDict):
    id: str


class OfficeHourRemoveMatch(OfficeHourRemoveMatchRequired, total=False):
    office_hours_schedule_id: str


class OfficeHoursException(TypedDict, total=False):
    created_at: int
    exception_date: str
    exception_type: str
    id: str
    name: str
    office_hours_schedule_id: str
    recurring_annually: bool
    time_intervals: list
    type: str
    updated_at: int


class OfficeHoursExceptionLoadMatch(TypedDict):
    id: str
    office_hours_schedule_id: str


class OfficeHoursExceptionListMatch(TypedDict):
    office_hours_schedule_id: str


class OfficeHoursExceptionCreateDataRequired(TypedDict):
    office_hours_schedule_id: str


class OfficeHoursExceptionCreateData(OfficeHoursExceptionCreateDataRequired, total=False):
    created_at: int
    exception_date: str
    exception_type: str
    id: str
    name: str
    recurring_annually: bool
    time_intervals: list
    type: str
    updated_at: int


class OfficeHoursExceptionUpdateDataRequired(TypedDict):
    id: str
    office_hours_schedule_id: str


class OfficeHoursExceptionUpdateData(OfficeHoursExceptionUpdateDataRequired, total=False):
    created_at: int
    exception_date: str
    exception_type: str
    name: str
    recurring_annually: bool
    time_intervals: list
    type: str
    updated_at: int


class OfficeHoursSchedule(TypedDict, total=False):
    created_at: int
    id: str
    name: str
    time_intervals: list
    time_zone_name: str
    twenty_four_seven: bool
    type: str
    updated_at: int


class OfficeHoursScheduleLoadMatch(TypedDict):
    id: str


class OfficeHoursScheduleUpdateDataRequired(TypedDict):
    id: str


class OfficeHoursScheduleUpdateData(OfficeHoursScheduleUpdateDataRequired, total=False):
    created_at: int
    name: str
    time_intervals: list
    time_zone_name: str
    twenty_four_seven: bool
    type: str
    updated_at: int


class Paginated(TypedDict, total=False):
    data: list
    pages: dict
    total_count: int
    type: str


class PaginatedListMatch(TypedDict, total=False):
    data: list
    pages: dict
    total_count: int
    type: str


class PhoneSwitch(TypedDict, total=False):
    custom_attributes: dict
    phone: str
    type: str


class PhoneSwitchCreateData(TypedDict, total=False):
    custom_attributes: dict
    phone: str
    type: str


class ReportingData(TypedDict, total=False):
    download_expires_at: str
    download_url: str
    job_identifier: str
    status: str


class ReportingDataLoadMatchRequired(TypedDict):
    app_id: str
    job_identifier: str


class ReportingDataLoadMatch(ReportingDataLoadMatchRequired, total=False):
    client_id: str


class ReportingDataExportRequired(TypedDict):
    attribute_ids: list
    dataset_id: str
    end_time: int
    start_time: int


class ReportingDataExport(ReportingDataExportRequired, total=False):
    attributes: list
    default_time_attribute_id: str
    description: str
    download_expires_at: str
    download_url: str
    id: str
    job_identifier: str
    name: str
    status: str


class ReportingDataExportListMatch(TypedDict, total=False):
    attribute_ids: list
    attributes: list
    dataset_id: str
    default_time_attribute_id: str
    description: str
    download_expires_at: str
    download_url: str
    end_time: int
    id: str
    job_identifier: str
    name: str
    start_time: int
    status: str


class ReportingDataExportCreateDataRequired(TypedDict):
    attribute_ids: list
    dataset_id: str
    end_time: int
    start_time: int


class ReportingDataExportCreateData(ReportingDataExportCreateDataRequired, total=False):
    attributes: list
    default_time_attribute_id: str
    description: str
    download_expires_at: str
    download_url: str
    id: str
    job_identifier: str
    name: str
    status: str


class Segment(TypedDict, total=False):
    count: int
    created_at: int
    id: str
    name: str
    person_type: str
    type: str
    updated_at: int


class SegmentLoadMatch(TypedDict):
    id: str


class SegmentListMatch(TypedDict, total=False):
    include_count: bool


class SideConversation(TypedDict, total=False):
    conversation_parts: list
    side_conversation_id: str
    total_count: int


class SideConversationListMatchRequired(TypedDict):
    conversation_id: str


class SideConversationListMatch(SideConversationListMatchRequired, total=False):
    page: int
    per_page: int


class Subscription(TypedDict, total=False):
    consent_type: str
    content_types: list
    default_translation: dict
    id: str
    state: str
    translations: list
    type: str


class SubscriptionListMatch(TypedDict):
    contact_id: str


class SubscriptionCreateDataRequired(TypedDict):
    contact_id: str


class SubscriptionCreateData(SubscriptionCreateDataRequired, total=False):
    consent_type: str
    content_types: list
    default_translation: dict
    id: str
    state: str
    translations: list
    type: str


class SubscriptionRemoveMatch(TypedDict):
    contact_id: str
    id: str


class SubscriptionType(TypedDict, total=False):
    consent_type: str
    content_types: list
    default_translation: dict
    id: str
    state: str
    translations: list
    type: str


class SubscriptionTypeListMatch(TypedDict, total=False):
    consent_type: str
    content_types: list
    default_translation: dict
    id: str
    state: str
    translations: list
    type: str


class Tag(TypedDict, total=False):
    admin_id: str
    applied_at: int
    applied_by: dict
    companies: list
    id: str
    name: str
    type: str
    users: list


class TagLoadMatch(TypedDict):
    id: str


class TagListMatch(TypedDict, total=False):
    admin_id: str
    applied_at: int
    applied_by: dict
    companies: list
    id: str
    name: str
    type: str
    users: list


class TagCreateData(TypedDict, total=False):
    admin_id: str
    applied_at: int
    applied_by: dict
    companies: list
    id: str
    name: str
    type: str
    users: list


class TagRemoveMatchRequired(TypedDict):
    id: str


class TagRemoveMatch(TagRemoveMatchRequired, total=False):
    article_id: int
    contact_id: str
    content_snippet_id: str
    conversation_id: str
    internal_article_id: int
    ticket_id: str


class Team(TypedDict, total=False):
    admin_ids: list
    admin_priority_level: dict
    assignment_limit: int
    distribution_method: str
    id: str
    name: str
    type: str


class TeamLoadMatch(TypedDict):
    id: str


class TeamListMatch(TypedDict, total=False):
    admin_ids: list
    admin_priority_level: dict
    assignment_limit: int
    distribution_method: str
    id: str
    name: str
    type: str


class TeamMetricList(TypedDict, total=False):
    id: str


class TeamMetricListListMatchRequired(TypedDict):
    id: str


class TeamMetricListListMatch(TeamMetricListListMatchRequired, total=False):
    idle_threshold: int


class TicketRequired(TypedDict):
    ticket_type_id: str


class Ticket(TicketRequired, total=False):
    admin_assignee_id: int
    attributes: dict
    category: str
    contacts: dict
    created_at: int
    id: str
    is_shared: bool
    linked_objects: dict
    open: bool
    previous_ticket_state_id: str
    skip_notifications: bool
    snoozed_until: int
    team_assignee_id: int
    ticket_attributes: dict
    ticket_id: str
    ticket_parts: dict
    ticket_state: dict
    ticket_state_id: str
    ticket_type: dict
    type: str
    updated_at: int


class TicketLoadMatch(TypedDict):
    id: str


class TicketCreateDataRequired(TypedDict):
    ticket_type_id: str


class TicketCreateData(TicketCreateDataRequired, total=False):
    admin_assignee_id: int
    attributes: dict
    category: str
    contacts: dict
    created_at: int
    id: str
    is_shared: bool
    linked_objects: dict
    open: bool
    previous_ticket_state_id: str
    skip_notifications: bool
    snoozed_until: int
    team_assignee_id: int
    ticket_attributes: dict
    ticket_id: str
    ticket_parts: dict
    ticket_state: dict
    ticket_state_id: str
    ticket_type: dict
    type: str
    updated_at: int


class TicketUpdateDataRequired(TypedDict):
    id: str


class TicketUpdateData(TicketUpdateDataRequired, total=False):
    admin_assignee_id: int
    attributes: dict
    category: str
    contacts: dict
    created_at: int
    is_shared: bool
    linked_objects: dict
    open: bool
    previous_ticket_state_id: str
    skip_notifications: bool
    snoozed_until: int
    team_assignee_id: int
    ticket_attributes: dict
    ticket_id: str
    ticket_parts: dict
    ticket_state: dict
    ticket_state_id: str
    ticket_type: dict
    ticket_type_id: str
    type: str
    updated_at: int


class TicketRemoveMatch(TypedDict):
    id: str


class TicketListRequired(TypedDict):
    query: Any


class TicketList(TicketListRequired, total=False):
    pages: dict
    pagination: dict
    tickets: list
    total_count: int
    type: str


class TicketListCreateDataRequired(TypedDict):
    query: Any


class TicketListCreateData(TicketListCreateDataRequired, total=False):
    pages: dict
    pagination: dict
    tickets: list
    total_count: int
    type: str


class TicketReply(TypedDict, total=False):
    attachments: list
    author: dict
    body: str
    created_at: int
    id: str
    part_type: str
    redacted: bool
    skip_notifications: bool
    type: str
    updated_at: int


class TicketReplyCreateDataRequired(TypedDict):
    id: str


class TicketReplyCreateData(TicketReplyCreateDataRequired, total=False):
    attachments: list
    author: dict
    body: str
    created_at: int
    part_type: str
    redacted: bool
    skip_notifications: bool
    type: str
    updated_at: int


class TicketState(TypedDict, total=False):
    archived: bool
    category: str
    external_label: str
    id: str
    internal_label: str
    ticket_types: dict
    type: str


class TicketStateListMatch(TypedDict, total=False):
    archived: bool
    category: str
    external_label: str
    id: str
    internal_label: str
    ticket_types: dict
    type: str


class TicketType(TypedDict, total=False):
    archived: bool
    category: str
    created_at: int
    description: str
    icon: str
    id: str
    is_internal: bool
    name: str
    ticket_states: dict
    ticket_type_attributes: dict
    type: str
    updated_at: int
    workspace_id: str


class TicketTypeLoadMatch(TypedDict):
    id: str


class TicketTypeListMatch(TypedDict, total=False):
    archived: bool
    category: str
    created_at: int
    description: str
    icon: str
    id: str
    is_internal: bool
    name: str
    ticket_states: dict
    ticket_type_attributes: dict
    type: str
    updated_at: int
    workspace_id: str


class TicketTypeCreateData(TypedDict, total=False):
    archived: bool
    category: str
    created_at: int
    description: str
    icon: str
    id: str
    is_internal: bool
    name: str
    ticket_states: dict
    ticket_type_attributes: dict
    type: str
    updated_at: int
    workspace_id: str


class TicketTypeUpdateDataRequired(TypedDict):
    id: str


class TicketTypeUpdateData(TicketTypeUpdateDataRequired, total=False):
    archived: bool
    category: str
    created_at: int
    description: str
    icon: str
    is_internal: bool
    name: str
    ticket_states: dict
    ticket_type_attributes: dict
    type: str
    updated_at: int
    workspace_id: str


class TicketTypeAttributeRequired(TypedDict):
    data_type: str
    description: str
    name: str


class TicketTypeAttribute(TicketTypeAttributeRequired, total=False):
    allow_multiple_values: bool
    archived: bool
    id: str
    list_items: str
    multiline: bool
    required_to_create: bool
    required_to_create_for_contacts: bool
    visible_on_create: bool
    visible_to_contacts: bool


class TicketTypeAttributeCreateDataRequired(TypedDict):
    id: str
    data_type: str
    description: str
    name: str


class TicketTypeAttributeCreateData(TicketTypeAttributeCreateDataRequired, total=False):
    allow_multiple_values: bool
    archived: bool
    list_items: str
    multiline: bool
    required_to_create: bool
    required_to_create_for_contacts: bool
    visible_on_create: bool
    visible_to_contacts: bool


class TicketTypeAttributeUpdateDataRequired(TypedDict):
    id: str
    ticket_type_id: str


class TicketTypeAttributeUpdateData(TicketTypeAttributeUpdateDataRequired, total=False):
    allow_multiple_values: bool
    archived: bool
    data_type: str
    description: str
    list_items: str
    multiline: bool
    name: str
    required_to_create: bool
    required_to_create_for_contacts: bool
    visible_on_create: bool
    visible_to_contacts: bool


class Visitor(TypedDict, total=False):
    anonymous: bool
    app_id: str
    avatar: dict
    companies: dict
    created_at: int
    custom_attributes: dict
    do_not_track: bool
    email: str
    has_hard_bounced: bool
    id: str
    las_request_at: int
    location_data: dict
    marked_email_as_spam: bool
    name: str
    owner_id: str
    phone: str
    pseudonym: str
    referrer: str
    remote_created_at: int
    segments: dict
    session_count: int
    signed_up_at: int
    social_profiles: dict
    tags: dict
    type: str
    unsubscribed_from_emails: bool
    updated_at: int
    user_id: str
    utm_campaign: str
    utm_content: str
    utm_medium: str
    utm_source: str
    utm_term: str


class VisitorLoadMatch(TypedDict):
    user_id: str


class VisitorUpdateData(TypedDict, total=False):
    anonymous: bool
    app_id: str
    avatar: dict
    companies: dict
    created_at: int
    custom_attributes: dict
    do_not_track: bool
    email: str
    has_hard_bounced: bool
    id: str
    las_request_at: int
    location_data: dict
    marked_email_as_spam: bool
    name: str
    owner_id: str
    phone: str
    pseudonym: str
    referrer: str
    remote_created_at: int
    segments: dict
    session_count: int
    signed_up_at: int
    social_profiles: dict
    tags: dict
    type: str
    unsubscribed_from_emails: bool
    updated_at: int
    user_id: str
    utm_campaign: str
    utm_content: str
    utm_medium: str
    utm_source: str
    utm_term: str


class WhatsappMessageStatus(TypedDict, total=False):
    details: str
    message: str


class WhatsappMessageStatusLoadMatch(TypedDict):
    message_id: str


class WhatsappMessageStatusListRequired(TypedDict):
    conversation_id: str
    created_at: int
    id: str
    status: str
    type: str
    updated_at: int
    whatsapp_message_id: str


class WhatsappMessageStatusList(WhatsappMessageStatusListRequired, total=False):
    template_name: str


class WhatsappMessageStatusListListMatchRequired(TypedDict):
    ruleset_id: str


class WhatsappMessageStatusListListMatch(WhatsappMessageStatusListListMatchRequired, total=False):
    per_page: int
    starting_after: str


class Workflow(TypedDict, total=False):
    attributes: list
    created_at: str
    description: str
    embedded_rules: list
    id: str
    preferred_devices: list
    snapshot: dict
    state: str
    target_channels: list
    targeting: dict
    title: str
    trigger_type: str
    updated_at: str


class WorkflowLoadMatch(TypedDict):
    id: str
