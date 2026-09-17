<?php
declare(strict_types=1);

// Typed models for the Intercom SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** ActivityLog entity data model. */
class ActivityLog
{
    public ?string $activity_description = null;
    public ?string $activity_type = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?array $metadata = null;
    public ?array $performed_by = null;
}

/** Request payload for ActivityLog#list. */
class ActivityLogListMatch
{
    public string $created_at_after;
    public ?string $created_at_before = null;
}

/** ActivityLogEventType entity data model. */
class ActivityLogEventType
{
    public ?array $event_types = null;
    public ?string $type = null;
}

/** Request payload for ActivityLogEventType#list. */
class ActivityLogEventTypeListMatch
{
    public ?array $event_types = null;
    public ?string $type = null;
}

/** ActivityLogList entity data model. */
class ActivityLogList
{
    public ?array $activity_logs = null;
    public int $created_at_after;
    public ?int $created_at_before = null;
    public ?array $event_types = null;
    public ?int $page = null;
    public ?array $pages = null;
    public ?int $per_page = null;
    public ?string $type = null;
}

/** Request payload for ActivityLogList#create. */
class ActivityLogListCreateData
{
    public ?array $activity_logs = null;
    public int $created_at_after;
    public ?int $created_at_before = null;
    public ?array $event_types = null;
    public ?int $page = null;
    public ?array $pages = null;
    public ?int $per_page = null;
    public ?string $type = null;
}

/** Admin entity data model. */
class Admin
{
    public ?string $avatar = null;
    public ?bool $away_mode_enabled = null;
    public ?bool $away_mode_reassign = null;
    public ?int $away_status_reason_id = null;
    public ?string $email = null;
    public ?bool $has_inbox_seat = null;
    public ?string $id = null;
    public ?string $job_title = null;
    public ?string $name = null;
    public ?array $role = null;
    public ?array $team_ids = null;
    public ?array $team_priority_level = null;
    public ?string $type = null;
}

/** Request payload for Admin#load. */
class AdminLoadMatch
{
    public int $id;
}

/** Request payload for Admin#list. */
class AdminListMatch
{
    public ?bool $display_avatar = null;
}

/** Request payload for Admin#update. */
class AdminUpdateData
{
    public int $id;
    public ?string $avatar = null;
    public ?bool $away_mode_enabled = null;
    public ?bool $away_mode_reassign = null;
    public ?int $away_status_reason_id = null;
    public ?string $email = null;
    public ?bool $has_inbox_seat = null;
    public ?string $job_title = null;
    public ?string $name = null;
    public ?array $role = null;
    public ?array $team_ids = null;
    public ?array $team_priority_level = null;
    public ?string $type = null;
}

/** AdminWithApp entity data model. */
class AdminWithApp
{
    public ?array $app = null;
    public ?array $avatar = null;
    public ?bool $away_mode_enabled = null;
    public ?bool $away_mode_reassign = null;
    public ?string $email = null;
    public ?bool $email_verified = null;
    public ?bool $has_inbox_seat = null;
    public ?string $id = null;
    public ?string $job_title = null;
    public ?string $name = null;
    public ?array $team_ids = null;
    public ?string $type = null;
}

/** Request payload for AdminWithApp#list. */
class AdminWithAppListMatch
{
    public ?array $app = null;
    public ?array $avatar = null;
    public ?bool $away_mode_enabled = null;
    public ?bool $away_mode_reassign = null;
    public ?string $email = null;
    public ?bool $email_verified = null;
    public ?bool $has_inbox_seat = null;
    public ?string $id = null;
    public ?string $job_title = null;
    public ?string $name = null;
    public ?array $team_ids = null;
    public ?string $type = null;
}

/** AiCall entity data model. */
class AiCall
{
    public ?int $app_id = null;
    public string $call_id;
    public ?string $call_summary = null;
    public ?array $call_transcript = null;
    public ?array $data = null;
    public ?string $external_call_id = null;
    public ?int $id = null;
    public ?array $intent = null;
    public ?string $intercom_call_id = null;
    public ?string $intercom_conversation_id = null;
    public string $phone_number;
    public ?string $source = null;
    public ?string $status = null;
    public ?string $user_phone_number = null;
}

/** Request payload for AiCall#load. */
class AiCallLoadMatch
{
    public string $conversation_id;
}

/** Request payload for AiCall#create. */
class AiCallCreateData
{
    public ?int $app_id = null;
    public string $call_id;
    public ?string $call_summary = null;
    public ?array $call_transcript = null;
    public ?array $data = null;
    public ?string $external_call_id = null;
    public ?int $id = null;
    public ?array $intent = null;
    public ?string $intercom_call_id = null;
    public ?string $intercom_conversation_id = null;
    public string $phone_number;
    public ?string $source = null;
    public ?string $status = null;
    public ?string $user_phone_number = null;
}

/** AiContent entity data model. */
class AiContent
{
}

/** Request payload for AiContent#remove. */
class AiContentRemoveMatch
{
    public string $source_id;
}

/** Article entity data model. */
class Article
{
    public ?bool $ai_chatbot_availability = null;
    public ?bool $ai_copilot_availability = null;
    public ?bool $ai_sales_agent_availability = null;
    public ?array $audience_ids = null;
    public int $author_id;
    public ?string $body = null;
    public ?string $body_markdown = null;
    public ?int $conversions = null;
    public ?int $created_at = null;
    public ?int $created_by_id = null;
    public ?string $default_locale = null;
    public ?string $description = null;
    public ?int $draft_updated_at = null;
    public ?bool $exclude_from_article_suggestions = null;
    public ?int $fin_involvements = null;
    public ?float $fin_resolution_rate = null;
    public ?int $fin_resolutions = null;
    public ?float $happy_reaction_percentage = null;
    public ?bool $has_unpublished_changes = null;
    public ?string $help_center_audience = null;
    public ?string $id = null;
    public ?float $neutral_reaction_percentage = null;
    public ?int $parent_id = null;
    public ?array $parent_ids = null;
    public ?string $parent_type = null;
    public ?int $reactions = null;
    public ?float $sad_reaction_percentage = null;
    public ?string $scheduled_publish_at = null;
    public ?string $scheduled_unpublish_at = null;
    public ?string $state = null;
    public ?array $tags = null;
    public string $title;
    public ?array $translated_content = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?int $updated_by_id = null;
    public ?string $url = null;
    public ?int $views = null;
    public ?string $workspace_id = null;
}

/** Request payload for Article#load. */
class ArticleLoadMatch
{
    public int $id;
}

/** Request payload for Article#list. */
class ArticleListMatch
{
    public ?bool $ai_chatbot_availability = null;
    public ?bool $ai_copilot_availability = null;
    public ?bool $ai_sales_agent_availability = null;
    public ?array $audience_ids = null;
    public ?int $author_id = null;
    public ?string $body = null;
    public ?string $body_markdown = null;
    public ?int $conversions = null;
    public ?int $created_at = null;
    public ?int $created_by_id = null;
    public ?string $default_locale = null;
    public ?string $description = null;
    public ?int $draft_updated_at = null;
    public ?bool $exclude_from_article_suggestions = null;
    public ?int $fin_involvements = null;
    public ?float $fin_resolution_rate = null;
    public ?int $fin_resolutions = null;
    public ?float $happy_reaction_percentage = null;
    public ?bool $has_unpublished_changes = null;
    public ?string $help_center_audience = null;
    public ?string $id = null;
    public ?float $neutral_reaction_percentage = null;
    public ?int $parent_id = null;
    public ?array $parent_ids = null;
    public ?string $parent_type = null;
    public ?int $reactions = null;
    public ?float $sad_reaction_percentage = null;
    public ?string $scheduled_publish_at = null;
    public ?string $scheduled_unpublish_at = null;
    public ?string $state = null;
    public ?array $tags = null;
    public ?string $title = null;
    public ?array $translated_content = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?int $updated_by_id = null;
    public ?string $url = null;
    public ?int $views = null;
    public ?string $workspace_id = null;
}

/** Request payload for Article#create. */
class ArticleCreateData
{
    public ?bool $ai_chatbot_availability = null;
    public ?bool $ai_copilot_availability = null;
    public ?bool $ai_sales_agent_availability = null;
    public ?array $audience_ids = null;
    public int $author_id;
    public ?string $body = null;
    public ?string $body_markdown = null;
    public ?int $conversions = null;
    public ?int $created_at = null;
    public ?int $created_by_id = null;
    public ?string $default_locale = null;
    public ?string $description = null;
    public ?int $draft_updated_at = null;
    public ?bool $exclude_from_article_suggestions = null;
    public ?int $fin_involvements = null;
    public ?float $fin_resolution_rate = null;
    public ?int $fin_resolutions = null;
    public ?float $happy_reaction_percentage = null;
    public ?bool $has_unpublished_changes = null;
    public ?string $help_center_audience = null;
    public ?string $id = null;
    public ?float $neutral_reaction_percentage = null;
    public ?int $parent_id = null;
    public ?array $parent_ids = null;
    public ?string $parent_type = null;
    public ?int $reactions = null;
    public ?float $sad_reaction_percentage = null;
    public ?string $scheduled_publish_at = null;
    public ?string $scheduled_unpublish_at = null;
    public ?string $state = null;
    public ?array $tags = null;
    public string $title;
    public ?array $translated_content = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?int $updated_by_id = null;
    public ?string $url = null;
    public ?int $views = null;
    public ?string $workspace_id = null;
}

/** Request payload for Article#update. */
class ArticleUpdateData
{
    public int $id;
    public ?bool $ai_chatbot_availability = null;
    public ?bool $ai_copilot_availability = null;
    public ?bool $ai_sales_agent_availability = null;
    public ?array $audience_ids = null;
    public ?int $author_id = null;
    public ?string $body = null;
    public ?string $body_markdown = null;
    public ?int $conversions = null;
    public ?int $created_at = null;
    public ?int $created_by_id = null;
    public ?string $default_locale = null;
    public ?string $description = null;
    public ?int $draft_updated_at = null;
    public ?bool $exclude_from_article_suggestions = null;
    public ?int $fin_involvements = null;
    public ?float $fin_resolution_rate = null;
    public ?int $fin_resolutions = null;
    public ?float $happy_reaction_percentage = null;
    public ?bool $has_unpublished_changes = null;
    public ?string $help_center_audience = null;
    public ?float $neutral_reaction_percentage = null;
    public ?int $parent_id = null;
    public ?array $parent_ids = null;
    public ?string $parent_type = null;
    public ?int $reactions = null;
    public ?float $sad_reaction_percentage = null;
    public ?string $scheduled_publish_at = null;
    public ?string $scheduled_unpublish_at = null;
    public ?string $state = null;
    public ?array $tags = null;
    public ?string $title = null;
    public ?array $translated_content = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?int $updated_by_id = null;
    public ?string $url = null;
    public ?int $views = null;
    public ?string $workspace_id = null;
}

/** ArticleSearch entity data model. */
class ArticleSearch
{
    public ?array $data = null;
    public ?array $pages = null;
    public ?int $total_count = null;
    public ?string $type = null;
}

/** Request payload for ArticleSearch#load. */
class ArticleSearchLoadMatch
{
    public ?int $help_center_id = null;
    public ?bool $highlight = null;
    public ?string $phrase = null;
    public ?string $state = null;
}

/** ArticleVersion entity data model. */
class ArticleVersion
{
    public ?string $article_id = null;
    public ?string $author_id = null;
    public ?string $body = null;
    public ?string $body_markdown = null;
    public ?int $created_at = null;
    public ?string $created_by_id = null;
    public ?string $created_via = null;
    public ?string $description = null;
    public ?string $from_version_id = null;
    public ?string $id = null;
    public ?string $state = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for ArticleVersion#load. */
class ArticleVersionLoadMatch
{
    public int $article_id;
    public string $id;
    public ?string $locale = null;
}

/** ArticleVersionList entity data model. */
class ArticleVersionList
{
    public ?string $id = null;
}

/** Request payload for ArticleVersionList#list. */
class ArticleVersionListListMatch
{
    public int $id;
    public ?string $locale = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Audience entity data model. */
class Audience
{
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $predicates = null;
    public ?array $role_predicates = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for Audience#load. */
class AudienceLoadMatch
{
    public string $id;
}

/** Request payload for Audience#list. */
class AudienceListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Audience#create. */
class AudienceCreateData
{
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $predicates = null;
    public ?array $role_predicates = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for Audience#update. */
class AudienceUpdateData
{
    public string $id;
    public ?int $created_at = null;
    public ?string $name = null;
    public ?array $predicates = null;
    public ?array $role_predicates = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for Audience#remove. */
class AudienceRemoveMatch
{
    public string $id;
}

/** AwayStatusReason entity data model. */
class AwayStatusReason
{
    public ?int $created_at = null;
    public ?bool $deleted = null;
    public ?string $emoji = null;
    public ?string $id = null;
    public ?string $label = null;
    public ?int $order = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for AwayStatusReason#list. */
class AwayStatusReasonListMatch
{
    public ?int $created_at = null;
    public ?bool $deleted = null;
    public ?string $emoji = null;
    public ?string $id = null;
    public ?string $label = null;
    public ?int $order = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Banner entity data model. */
class Banner
{
    public ?array $action = null;
    public ?string $body = null;
    public ?array $client_targeting = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $position = null;
    public ?bool $show_dismiss_button = null;
    public ?string $style = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?string $view_id = null;
}

/** Request payload for Banner#list. */
class BannerListMatch
{
    public string $contact_id;
}

/** BannerDismiss entity data model. */
class BannerDismiss
{
    public ?bool $dismissed = null;
    public ?string $id = null;
    public ?string $type = null;
    public ?string $view_id = null;
}

/** Request payload for BannerDismiss#create. */
class BannerDismissCreateData
{
    public string $contact_id;
    public string $id;
    public ?bool $dismissed = null;
    public ?string $type = null;
    public ?string $view_id = null;
}

/** Brand entity data model. */
class Brand
{
    public ?int $created_at = null;
    public ?string $default_address_settings_id = null;
    public ?string $help_center_id = null;
    public ?string $id = null;
    public ?bool $is_default = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for Brand#load. */
class BrandLoadMatch
{
    public string $id;
}

/** Request payload for Brand#list. */
class BrandListMatch
{
    public ?int $created_at = null;
    public ?string $default_address_settings_id = null;
    public ?string $help_center_id = null;
    public ?string $id = null;
    public ?bool $is_default = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Call entity data model. */
class Call
{
    public ?string $admin_id = null;
    public mixed $answered_at = null;
    public ?string $call_type = null;
    public ?string $contact_id = null;
    public ?string $conversation_id = null;
    public mixed $created_at = null;
    public ?string $direction = null;
    public mixed $ended_at = null;
    public ?string $ended_reason = null;
    public ?string $fin_recording_url = null;
    public ?string $fin_transcription_url = null;
    public ?string $id = null;
    public mixed $initiated_at = null;
    public ?string $phone = null;
    public ?string $recording_url = null;
    public ?string $state = null;
    public ?string $transcription_url = null;
    public ?string $type = null;
    public mixed $updated_at = null;
}

/** Request payload for Call#load. */
class CallLoadMatch
{
    public string $id;
}

/** Request payload for Call#list. */
class CallListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Call#create. */
class CallCreateData
{
    public ?string $admin_id = null;
    public mixed $answered_at = null;
    public ?string $call_type = null;
    public ?string $contact_id = null;
    public ?string $conversation_id = null;
    public mixed $created_at = null;
    public ?string $direction = null;
    public mixed $ended_at = null;
    public ?string $ended_reason = null;
    public ?string $fin_recording_url = null;
    public ?string $fin_transcription_url = null;
    public ?string $id = null;
    public mixed $initiated_at = null;
    public ?string $phone = null;
    public ?string $recording_url = null;
    public ?string $state = null;
    public ?string $transcription_url = null;
    public ?string $type = null;
    public mixed $updated_at = null;
}

/** Company entity data model. */
class Company
{
    public ?string $app_id = null;
    public ?string $company_id = null;
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?string $id = null;
    public ?string $industry = null;
    public ?int $last_request_at = null;
    public ?int $monthly_spend = null;
    public ?string $name = null;
    public ?array $notes = null;
    public ?array $plan = null;
    public ?int $remote_created_at = null;
    public ?array $segments = null;
    public ?int $session_count = null;
    public ?int $size = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?bool $update_last_request_at = null;
    public ?int $updated_at = null;
    public ?int $user_count = null;
    public ?string $website = null;
}

/** Request payload for Company#load. */
class CompanyLoadMatch
{
    public string $id;
}

/** Request payload for Company#list. */
class CompanyListMatch
{
    public ?string $company_id = null;
    public ?string $name = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $segment_id = null;
    public ?string $tag_id = null;
}

/** Request payload for Company#create. */
class CompanyCreateData
{
    public ?string $app_id = null;
    public ?string $company_id = null;
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?string $id = null;
    public ?string $industry = null;
    public ?int $last_request_at = null;
    public ?int $monthly_spend = null;
    public ?string $name = null;
    public ?array $notes = null;
    public ?array $plan = null;
    public ?int $remote_created_at = null;
    public ?array $segments = null;
    public ?int $session_count = null;
    public ?int $size = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?bool $update_last_request_at = null;
    public ?int $updated_at = null;
    public ?int $user_count = null;
    public ?string $website = null;
}

/** Request payload for Company#update. */
class CompanyUpdateData
{
    public string $id;
    public ?string $app_id = null;
    public ?string $company_id = null;
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?string $industry = null;
    public ?int $last_request_at = null;
    public ?int $monthly_spend = null;
    public ?string $name = null;
    public ?array $notes = null;
    public ?array $plan = null;
    public ?int $remote_created_at = null;
    public ?array $segments = null;
    public ?int $session_count = null;
    public ?int $size = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?bool $update_last_request_at = null;
    public ?int $updated_at = null;
    public ?int $user_count = null;
    public ?string $website = null;
}

/** Request payload for Company#remove. */
class CompanyRemoveMatch
{
    public string $contact_id;
    public string $id;
}

/** CompanyAttachedContact entity data model. */
class CompanyAttachedContact
{
    public ?string $android_app_name = null;
    public ?string $android_app_version = null;
    public ?string $android_device = null;
    public ?int $android_last_seen_at = null;
    public ?string $android_os_version = null;
    public ?string $android_sdk_version = null;
    public ?array $avatar = null;
    public ?string $browser = null;
    public ?string $browser_language = null;
    public ?string $browser_version = null;
    public ?array $companies = null;
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?string $email = null;
    public ?string $email_domain = null;
    public ?string $external_id = null;
    public ?bool $has_hard_bounced = null;
    public ?string $id = null;
    public ?string $ios_app_name = null;
    public ?string $ios_app_version = null;
    public ?string $ios_device = null;
    public ?int $ios_last_seen_at = null;
    public ?string $ios_os_version = null;
    public ?string $ios_sdk_version = null;
    public ?string $language_override = null;
    public ?int $last_contacted_at = null;
    public ?int $last_email_clicked_at = null;
    public ?int $last_email_opened_at = null;
    public ?int $last_replied_at = null;
    public ?int $last_seen_at = null;
    public ?array $location = null;
    public ?bool $marked_email_as_spam = null;
    public ?array $merge_history = null;
    public ?string $name = null;
    public ?array $notes = null;
    public ?string $os = null;
    public ?string $owner_id = null;
    public ?string $phone = null;
    public ?string $role = null;
    public ?int $signed_up_at = null;
    public ?array $social_profiles = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?bool $unsubscribed_from_emails = null;
    public ?int $updated_at = null;
    public ?string $workspace_id = null;
}

/** Request payload for CompanyAttachedContact#list. */
class CompanyAttachedContactListMatch
{
    public string $id;
}

/** CompanyAttachedSegment entity data model. */
class CompanyAttachedSegment
{
    public ?int $count = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $person_type = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for CompanyAttachedSegment#list. */
class CompanyAttachedSegmentListMatch
{
    public string $id;
}

/** CompanyList entity data model. */
class CompanyList
{
    public ?array $data = null;
    public ?array $pages = null;
    public ?int $total_count = null;
    public ?string $type = null;
}

/** Request payload for CompanyList#create. */
class CompanyListCreateData
{
    public ?string $order = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?array $data = null;
    public ?array $pages = null;
    public ?int $total_count = null;
    public ?string $type = null;
}

/** CompanyScroll entity data model. */
class CompanyScroll
{
    public ?string $app_id = null;
    public ?string $company_id = null;
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?string $id = null;
    public ?string $industry = null;
    public ?int $last_request_at = null;
    public ?int $monthly_spend = null;
    public ?string $name = null;
    public ?array $notes = null;
    public ?array $plan = null;
    public ?int $remote_created_at = null;
    public ?array $segments = null;
    public ?int $session_count = null;
    public ?int $size = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?int $user_count = null;
    public ?string $website = null;
}

/** Request payload for CompanyScroll#list. */
class CompanyScrollListMatch
{
    public ?string $scroll_param = null;
}

/** Contact entity data model. */
class Contact
{
    public ?string $android_app_name = null;
    public ?string $android_app_version = null;
    public ?string $android_device = null;
    public ?int $android_last_seen_at = null;
    public ?string $android_os_version = null;
    public ?string $android_sdk_version = null;
    public ?array $avatar = null;
    public ?string $browser = null;
    public ?string $browser_language = null;
    public ?string $browser_version = null;
    public ?array $companies = null;
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?string $email = null;
    public ?string $email_domain = null;
    public ?bool $enabled_push_messaging = null;
    public ?string $external_id = null;
    public ?bool $has_hard_bounced = null;
    public ?string $id = null;
    public ?string $ios_app_name = null;
    public ?string $ios_app_version = null;
    public ?string $ios_device = null;
    public ?int $ios_last_seen_at = null;
    public ?string $ios_os_version = null;
    public ?string $ios_sdk_version = null;
    public ?string $language_override = null;
    public ?int $last_contacted_at = null;
    public ?int $last_email_clicked_at = null;
    public ?int $last_email_opened_at = null;
    public ?int $last_replied_at = null;
    public ?int $last_seen_at = null;
    public ?array $location = null;
    public ?bool $marked_email_as_spam = null;
    public ?array $merge_history = null;
    public ?string $name = null;
    public ?array $notes = null;
    public ?string $os = null;
    public ?string $owner_id = null;
    public ?string $phone = null;
    public ?string $role = null;
    public ?int $signed_up_at = null;
    public ?array $social_profiles = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?bool $unsubscribed_from_emails = null;
    public ?int $updated_at = null;
    public array $user;
    public array $visitor;
    public ?string $workspace_id = null;
}

/** Request payload for Contact#load. */
class ContactLoadMatch
{
    public string $id;
    public ?bool $include_merge_history = null;
}

/** Request payload for Contact#list. */
class ContactListMatch
{
    public ?bool $include_merge_history = null;
}

/** Request payload for Contact#create. */
class ContactCreateData
{
    public ?string $android_app_name = null;
    public ?string $android_app_version = null;
    public ?string $android_device = null;
    public ?int $android_last_seen_at = null;
    public ?string $android_os_version = null;
    public ?string $android_sdk_version = null;
    public ?array $avatar = null;
    public ?string $browser = null;
    public ?string $browser_language = null;
    public ?string $browser_version = null;
    public ?array $companies = null;
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?string $email = null;
    public ?string $email_domain = null;
    public ?bool $enabled_push_messaging = null;
    public ?string $external_id = null;
    public ?bool $has_hard_bounced = null;
    public ?string $id = null;
    public ?string $ios_app_name = null;
    public ?string $ios_app_version = null;
    public ?string $ios_device = null;
    public ?int $ios_last_seen_at = null;
    public ?string $ios_os_version = null;
    public ?string $ios_sdk_version = null;
    public ?string $language_override = null;
    public ?int $last_contacted_at = null;
    public ?int $last_email_clicked_at = null;
    public ?int $last_email_opened_at = null;
    public ?int $last_replied_at = null;
    public ?int $last_seen_at = null;
    public ?array $location = null;
    public ?bool $marked_email_as_spam = null;
    public ?array $merge_history = null;
    public ?string $name = null;
    public ?array $notes = null;
    public ?string $os = null;
    public ?string $owner_id = null;
    public ?string $phone = null;
    public ?string $role = null;
    public ?int $signed_up_at = null;
    public ?array $social_profiles = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?bool $unsubscribed_from_emails = null;
    public ?int $updated_at = null;
    public array $user;
    public array $visitor;
    public ?string $workspace_id = null;
}

/** Request payload for Contact#update. */
class ContactUpdateData
{
    public string $id;
    public ?bool $include_merge_history = null;
    public ?string $android_app_name = null;
    public ?string $android_app_version = null;
    public ?string $android_device = null;
    public ?int $android_last_seen_at = null;
    public ?string $android_os_version = null;
    public ?string $android_sdk_version = null;
    public ?array $avatar = null;
    public ?string $browser = null;
    public ?string $browser_language = null;
    public ?string $browser_version = null;
    public ?array $companies = null;
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?string $email = null;
    public ?string $email_domain = null;
    public ?bool $enabled_push_messaging = null;
    public ?string $external_id = null;
    public ?bool $has_hard_bounced = null;
    public ?string $ios_app_name = null;
    public ?string $ios_app_version = null;
    public ?string $ios_device = null;
    public ?int $ios_last_seen_at = null;
    public ?string $ios_os_version = null;
    public ?string $ios_sdk_version = null;
    public ?string $language_override = null;
    public ?int $last_contacted_at = null;
    public ?int $last_email_clicked_at = null;
    public ?int $last_email_opened_at = null;
    public ?int $last_replied_at = null;
    public ?int $last_seen_at = null;
    public ?array $location = null;
    public ?bool $marked_email_as_spam = null;
    public ?array $merge_history = null;
    public ?string $name = null;
    public ?array $notes = null;
    public ?string $os = null;
    public ?string $owner_id = null;
    public ?string $phone = null;
    public ?string $role = null;
    public ?int $signed_up_at = null;
    public ?array $social_profiles = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?bool $unsubscribed_from_emails = null;
    public ?int $updated_at = null;
    public ?array $user = null;
    public ?array $visitor = null;
    public ?string $workspace_id = null;
}

/** Request payload for Contact#remove. */
class ContactRemoveMatch
{
    public string $id;
}

/** ContactAttachedCompany entity data model. */
class ContactAttachedCompany
{
    public ?string $app_id = null;
    public ?string $company_id = null;
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?string $id = null;
    public ?string $industry = null;
    public ?int $last_request_at = null;
    public ?int $monthly_spend = null;
    public ?string $name = null;
    public ?array $notes = null;
    public ?array $plan = null;
    public ?int $remote_created_at = null;
    public ?array $segments = null;
    public ?int $session_count = null;
    public ?int $size = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?int $user_count = null;
    public ?string $website = null;
}

/** Request payload for ContactAttachedCompany#list. */
class ContactAttachedCompanyListMatch
{
    public string $id;
}

/** ContactList entity data model. */
class ContactList
{
    public ?array $data = null;
    public ?array $pages = null;
    public ?array $pagination = null;
    public mixed $query;
    public ?array $sort = null;
    public ?int $total_count = null;
    public ?string $type = null;
}

/** Request payload for ContactList#create. */
class ContactListCreateData
{
    public ?bool $include_merge_history = null;
    public ?array $data = null;
    public ?array $pages = null;
    public ?array $pagination = null;
    public mixed $query;
    public ?array $sort = null;
    public ?int $total_count = null;
    public ?string $type = null;
}

/** ContactSegment entity data model. */
class ContactSegment
{
    public ?int $count = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $person_type = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for ContactSegment#list. */
class ContactSegmentListMatch
{
    public string $id;
}

/** Content entity data model. */
class Content
{
}

/** Request payload for Content#create. */
class ContentCreateData
{
}

/** ContentImportSource entity data model. */
class ContentImportSource
{
    public ?bool $apply_audience_to_existing_content = null;
    public ?array $audience_ids = null;
    public int $created_at;
    public int $id;
    public int $last_synced_at;
    public string $status;
    public string $sync_behavior;
    public string $type;
    public int $updated_at;
    public string $url;
}

/** Request payload for ContentImportSource#load. */
class ContentImportSourceLoadMatch
{
    public string $id;
}

/** Request payload for ContentImportSource#list. */
class ContentImportSourceListMatch
{
    public ?bool $apply_audience_to_existing_content = null;
    public ?array $audience_ids = null;
    public ?int $created_at = null;
    public ?int $id = null;
    public ?int $last_synced_at = null;
    public ?string $status = null;
    public ?string $sync_behavior = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $url = null;
}

/** Request payload for ContentImportSource#create. */
class ContentImportSourceCreateData
{
    public ?bool $apply_audience_to_existing_content = null;
    public ?array $audience_ids = null;
    public int $created_at;
    public int $id;
    public int $last_synced_at;
    public string $status;
    public string $sync_behavior;
    public string $type;
    public int $updated_at;
    public string $url;
}

/** Request payload for ContentImportSource#update. */
class ContentImportSourceUpdateData
{
    public string $id;
    public ?bool $apply_audience_to_existing_content = null;
    public ?array $audience_ids = null;
    public ?int $created_at = null;
    public ?int $last_synced_at = null;
    public ?string $status = null;
    public ?string $sync_behavior = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $url = null;
}

/** ContentSearch entity data model. */
class ContentSearch
{
    public ?array $data = null;
    public ?array $pages = null;
    public ?int $total_count = null;
    public ?string $type = null;
}

/** Request payload for ContentSearch#list. */
class ContentSearchListMatch
{
    public ?array $any_tag_id = null;
    public ?array $content_type = null;
    public ?string $copilot_state = null;
    public ?int $created_at_after = null;
    public ?int $created_at_before = null;
    public ?array $created_by_id = null;
    public ?string $fin_sales_state = null;
    public ?string $fin_service_state = null;
    public ?string $folder_entity_type = null;
    public ?array $folder_id = null;
    public ?array $last_updated_by_id = null;
    public ?array $locale = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $query = null;
    public ?array $state = null;
    public ?array $tag_id = null;
    public ?string $tag_operator = null;
    public ?int $updated_at_after = null;
    public ?int $updated_at_before = null;
}

/** ContentSnippet entity data model. */
class ContentSnippet
{
    public ?bool $ai_chatbot_availability = null;
    public ?bool $ai_copilot_availability = null;
    public ?bool $ai_sales_agent_availability = null;
    public ?array $audience_ids = null;
    public ?string $body_markdown = null;
    public ?int $chatbot_availability = null;
    public ?int $copilot_availability = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?array $json_blocks = null;
    public ?string $locale = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for ContentSnippet#load. */
class ContentSnippetLoadMatch
{
    public string $id;
}

/** Request payload for ContentSnippet#list. */
class ContentSnippetListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for ContentSnippet#create. */
class ContentSnippetCreateData
{
    public ?bool $ai_chatbot_availability = null;
    public ?bool $ai_copilot_availability = null;
    public ?bool $ai_sales_agent_availability = null;
    public ?array $audience_ids = null;
    public ?string $body_markdown = null;
    public ?int $chatbot_availability = null;
    public ?int $copilot_availability = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?array $json_blocks = null;
    public ?string $locale = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for ContentSnippet#update. */
class ContentSnippetUpdateData
{
    public string $id;
    public ?bool $ai_chatbot_availability = null;
    public ?bool $ai_copilot_availability = null;
    public ?bool $ai_sales_agent_availability = null;
    public ?array $audience_ids = null;
    public ?string $body_markdown = null;
    public ?int $chatbot_availability = null;
    public ?int $copilot_availability = null;
    public ?int $created_at = null;
    public ?array $json_blocks = null;
    public ?string $locale = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for ContentSnippet#remove. */
class ContentSnippetRemoveMatch
{
    public string $id;
}

/** Conversation entity data model. */
class Conversation
{
    public ?int $admin_assignee_id = null;
    public ?array $ai_agent = null;
    public ?bool $ai_agent_participated = null;
    public ?array $attachment_urls = null;
    public string $body;
    public ?string $brand_id = null;
    public ?array $channel = null;
    public ?array $company = null;
    public ?string $company_id = null;
    public ?array $contacts = null;
    public string $conversation_id;
    public ?array $conversation_parts = null;
    public ?array $conversation_rating = null;
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?array $external_references = null;
    public ?array $first_contact_reply = null;
    public array $from;
    public ?string $id = null;
    public ?array $linked_objects = null;
    public ?array $monitor_evaluations = null;
    public ?bool $open = null;
    public ?string $priority = null;
    public ?bool $read = null;
    public ?array $sales_agent = null;
    public ?bool $sales_agent_participated = null;
    public ?array $scorecards = null;
    public ?array $sla_applied = null;
    public ?int $snoozed_until = null;
    public ?array $source = null;
    public ?string $state = null;
    public ?array $statistics = null;
    public ?string $subject = null;
    public ?array $tags = null;
    public ?int $team_assignee_id = null;
    public ?array $teammates = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?int $waiting_since = null;
}

/** Request payload for Conversation#load. */
class ConversationLoadMatch
{
    public int $id;
    public ?string $display_a = null;
    public ?bool $include_translation = null;
}

/** Request payload for Conversation#list. */
class ConversationListMatch
{
    public ?int $per_page = null;
    public ?string $starting_after = null;
}

/** Request payload for Conversation#create. */
class ConversationCreateData
{
    public ?int $admin_assignee_id = null;
    public ?array $ai_agent = null;
    public ?bool $ai_agent_participated = null;
    public ?array $attachment_urls = null;
    public string $body;
    public ?string $brand_id = null;
    public ?array $channel = null;
    public ?array $company = null;
    public ?string $company_id = null;
    public ?array $contacts = null;
    public string $conversation_id;
    public ?array $conversation_parts = null;
    public ?array $conversation_rating = null;
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?array $external_references = null;
    public ?array $first_contact_reply = null;
    public array $from;
    public ?string $id = null;
    public ?array $linked_objects = null;
    public ?array $monitor_evaluations = null;
    public ?bool $open = null;
    public ?string $priority = null;
    public ?bool $read = null;
    public ?array $sales_agent = null;
    public ?bool $sales_agent_participated = null;
    public ?array $scorecards = null;
    public ?array $sla_applied = null;
    public ?int $snoozed_until = null;
    public ?array $source = null;
    public ?string $state = null;
    public ?array $statistics = null;
    public ?string $subject = null;
    public ?array $tags = null;
    public ?int $team_assignee_id = null;
    public ?array $teammates = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?int $waiting_since = null;
}

/** Request payload for Conversation#update. */
class ConversationUpdateData
{
    public int $id;
    public ?string $display_a = null;
    public ?int $admin_assignee_id = null;
    public ?array $ai_agent = null;
    public ?bool $ai_agent_participated = null;
    public ?array $attachment_urls = null;
    public ?string $body = null;
    public ?string $brand_id = null;
    public ?array $channel = null;
    public ?array $company = null;
    public ?string $company_id = null;
    public ?array $contacts = null;
    public ?string $conversation_id = null;
    public ?array $conversation_parts = null;
    public ?array $conversation_rating = null;
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?array $external_references = null;
    public ?array $first_contact_reply = null;
    public ?array $from = null;
    public ?array $linked_objects = null;
    public ?array $monitor_evaluations = null;
    public ?bool $open = null;
    public ?string $priority = null;
    public ?bool $read = null;
    public ?array $sales_agent = null;
    public ?bool $sales_agent_participated = null;
    public ?array $scorecards = null;
    public ?array $sla_applied = null;
    public ?int $snoozed_until = null;
    public ?array $source = null;
    public ?string $state = null;
    public ?array $statistics = null;
    public ?string $subject = null;
    public ?array $tags = null;
    public ?int $team_assignee_id = null;
    public ?array $teammates = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?int $waiting_since = null;
}

/** Request payload for Conversation#remove. */
class ConversationRemoveMatch
{
    public int $id;
    public ?bool $retain_metric = null;
    public ?string $ticket_id = null;
}

/** ConversationAttribute entity data model. */
class ConversationAttribute
{
    public ?string $admin_id = null;
    public ?bool $archived = null;
    public ?int $created_at = null;
    public ?string $data_type = null;
    public ?string $description = null;
    public ?int $id = null;
    public string $label;
    public ?bool $multiline = null;
    public ?string $name = null;
    public array $reference;
    public ?bool $required = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?array $visible_to_team_ids = null;
}

/** Request payload for ConversationAttribute#load. */
class ConversationAttributeLoadMatch
{
    public int $id;
}

/** Request payload for ConversationAttribute#create. */
class ConversationAttributeCreateData
{
    public ?string $admin_id = null;
    public ?bool $archived = null;
    public ?int $created_at = null;
    public ?string $data_type = null;
    public ?string $description = null;
    public ?int $id = null;
    public string $label;
    public ?bool $multiline = null;
    public ?string $name = null;
    public array $reference;
    public ?bool $required = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?array $visible_to_team_ids = null;
}

/** Request payload for ConversationAttribute#update. */
class ConversationAttributeUpdateData
{
    public int $id;
    public ?string $admin_id = null;
    public ?bool $archived = null;
    public ?int $created_at = null;
    public ?string $data_type = null;
    public ?string $description = null;
    public ?string $label = null;
    public ?bool $multiline = null;
    public ?string $name = null;
    public ?array $reference = null;
    public ?bool $required = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?array $visible_to_team_ids = null;
}

/** Request payload for ConversationAttribute#remove. */
class ConversationAttributeRemoveMatch
{
    public int $id;
}

/** ConversationAttributeList entity data model. */
class ConversationAttributeList
{
    public ?array $data = null;
    public ?string $type = null;
}

/** Request payload for ConversationAttributeList#list. */
class ConversationAttributeListListMatch
{
    public ?bool $include_archived = null;
}

/** ConversationList entity data model. */
class ConversationList
{
    public ?array $conversations = null;
    public ?array $pages = null;
    public ?array $pagination = null;
    public mixed $query;
    public ?int $total_count = null;
    public ?string $type = null;
}

/** Request payload for ConversationList#create. */
class ConversationListCreateData
{
    public ?bool $include_monitor = null;
    public ?bool $include_scorecard = null;
    public ?array $conversations = null;
    public ?array $pages = null;
    public ?array $pagination = null;
    public mixed $query;
    public ?int $total_count = null;
    public ?string $type = null;
}

/** ConversationParticipant entity data model. */
class ConversationParticipant
{
    public ?string $id = null;
}

/** Request payload for ConversationParticipant#create. */
class ConversationParticipantCreateData
{
    public string $id;
}

/** Request payload for ConversationParticipant#remove. */
class ConversationParticipantRemoveMatch
{
    public string $contact_id;
    public string $conversation_id;
}

/** CustomObjectInstance entity data model. */
class CustomObjectInstance
{
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?array $data = null;
    public ?string $external_created_at = null;
    public ?string $external_id = null;
    public ?string $external_updated_at = null;
    public ?string $id = null;
    public ?array $pages = null;
    public ?int $total_count = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for CustomObjectInstance#load. */
class CustomObjectInstanceLoadMatch
{
    public string $id;
    public ?string $external_id = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $references_contact_id = null;
    public ?string $references_conversation_id = null;
}

/** Request payload for CustomObjectInstance#create. */
class CustomObjectInstanceCreateData
{
    public string $id;
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?array $data = null;
    public ?string $external_created_at = null;
    public ?string $external_id = null;
    public ?string $external_updated_at = null;
    public ?array $pages = null;
    public ?int $total_count = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for CustomObjectInstance#remove. */
class CustomObjectInstanceRemoveMatch
{
    public string $id;
    public string $external_id;
}

/** Data entity data model. */
class Data
{
    public int $created_at_after;
    public int $created_at_before;
    public ?string $download_expires_at = null;
    public ?string $download_url = null;
    public ?string $id = null;
    public ?string $job_identifier = null;
    public ?string $status = null;
}

/** Request payload for Data#load. */
class DataLoadMatch
{
    public string $id;
}

/** Request payload for Data#create. */
class DataCreateData
{
    public int $created_at_after;
    public int $created_at_before;
    public ?string $download_expires_at = null;
    public ?string $download_url = null;
    public ?string $id = null;
    public ?string $job_identifier = null;
    public ?string $status = null;
}

/** DataAttribute entity data model. */
class DataAttribute
{
    public ?string $admin_id = null;
    public ?bool $api_writable = null;
    public ?bool $archived = null;
    public ?int $created_at = null;
    public ?bool $custom = null;
    public ?string $data_type = null;
    public ?string $description = null;
    public ?string $full_name = null;
    public ?int $id = null;
    public ?string $label = null;
    public ?bool $messenger_writable = null;
    public ?string $model = null;
    public ?string $name = null;
    public ?array $options = null;
    public ?string $type = null;
    public ?bool $ui_writable = null;
    public ?int $updated_at = null;
}

/** Request payload for DataAttribute#list. */
class DataAttributeListMatch
{
    public ?bool $include_archived = null;
    public ?string $model = null;
}

/** Request payload for DataAttribute#create. */
class DataAttributeCreateData
{
    public ?string $admin_id = null;
    public ?bool $api_writable = null;
    public ?bool $archived = null;
    public ?int $created_at = null;
    public ?bool $custom = null;
    public ?string $data_type = null;
    public ?string $description = null;
    public ?string $full_name = null;
    public ?int $id = null;
    public ?string $label = null;
    public ?bool $messenger_writable = null;
    public ?string $model = null;
    public ?string $name = null;
    public ?array $options = null;
    public ?string $type = null;
    public ?bool $ui_writable = null;
    public ?int $updated_at = null;
}

/** Request payload for DataAttribute#update. */
class DataAttributeUpdateData
{
    public int $id;
    public ?string $admin_id = null;
    public ?bool $api_writable = null;
    public ?bool $archived = null;
    public ?int $created_at = null;
    public ?bool $custom = null;
    public ?string $data_type = null;
    public ?string $description = null;
    public ?string $full_name = null;
    public ?string $label = null;
    public ?bool $messenger_writable = null;
    public ?string $model = null;
    public ?string $name = null;
    public ?array $options = null;
    public ?string $type = null;
    public ?bool $ui_writable = null;
    public ?int $updated_at = null;
}

/** DataConnector entity data model. */
class DataConnector
{
    public ?array $audiences = null;
    public ?string $body = null;
    public ?bool $bypass_authentication = null;
    public ?string $client_function_name = null;
    public ?int $client_function_timeout_ms = null;
    public ?string $configuration_response_type = null;
    public ?string $created_at = null;
    public ?string $created_by_admin_id = null;
    public ?bool $customer_authentication = null;
    public ?array $data_inputs = null;
    public ?string $data_transformation_type = null;
    public ?string $description = null;
    public ?bool $direct_fin_usage = null;
    public ?string $execution_results_url = null;
    public ?string $execution_type = null;
    public ?array $headers = null;
    public ?string $http_method = null;
    public ?string $id = null;
    public ?array $mock_response = null;
    public ?string $name = null;
    public ?array $object_mappings = null;
    public ?array $response_fields = null;
    public ?string $state = null;
    public ?array $token_ids = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $updated_by_admin_id = null;
    public ?string $url = null;
    public ?bool $validate_missing_attributes = null;
}

/** Request payload for DataConnector#load. */
class DataConnectorLoadMatch
{
    public string $id;
    public ?string $state_version = null;
}

/** Request payload for DataConnector#list. */
class DataConnectorListMatch
{
    public ?int $per_page = null;
    public ?string $starting_after = null;
}

/** Request payload for DataConnector#create. */
class DataConnectorCreateData
{
    public ?array $audiences = null;
    public ?string $body = null;
    public ?bool $bypass_authentication = null;
    public ?string $client_function_name = null;
    public ?int $client_function_timeout_ms = null;
    public ?string $configuration_response_type = null;
    public ?string $created_at = null;
    public ?string $created_by_admin_id = null;
    public ?bool $customer_authentication = null;
    public ?array $data_inputs = null;
    public ?string $data_transformation_type = null;
    public ?string $description = null;
    public ?bool $direct_fin_usage = null;
    public ?string $execution_results_url = null;
    public ?string $execution_type = null;
    public ?array $headers = null;
    public ?string $http_method = null;
    public ?string $id = null;
    public ?array $mock_response = null;
    public ?string $name = null;
    public ?array $object_mappings = null;
    public ?array $response_fields = null;
    public ?string $state = null;
    public ?array $token_ids = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $updated_by_admin_id = null;
    public ?string $url = null;
    public ?bool $validate_missing_attributes = null;
}

/** Request payload for DataConnector#update. */
class DataConnectorUpdateData
{
    public string $id;
    public ?array $audiences = null;
    public ?string $body = null;
    public ?bool $bypass_authentication = null;
    public ?string $client_function_name = null;
    public ?int $client_function_timeout_ms = null;
    public ?string $configuration_response_type = null;
    public ?string $created_at = null;
    public ?string $created_by_admin_id = null;
    public ?bool $customer_authentication = null;
    public ?array $data_inputs = null;
    public ?string $data_transformation_type = null;
    public ?string $description = null;
    public ?bool $direct_fin_usage = null;
    public ?string $execution_results_url = null;
    public ?string $execution_type = null;
    public ?array $headers = null;
    public ?string $http_method = null;
    public ?array $mock_response = null;
    public ?string $name = null;
    public ?array $object_mappings = null;
    public ?array $response_fields = null;
    public ?string $state = null;
    public ?array $token_ids = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $updated_by_admin_id = null;
    public ?string $url = null;
    public ?bool $validate_missing_attributes = null;
}

/** DataConnectorExecutionResult entity data model. */
class DataConnectorExecutionResult
{
    public ?string $conversation_id = null;
    public ?string $created_at = null;
    public ?string $data_connector_id = null;
    public ?string $error_message = null;
    public ?string $error_type = null;
    public ?int $execution_time_ms = null;
    public ?string $http_method = null;
    public ?int $http_status = null;
    public ?string $id = null;
    public ?string $raw_response_body = null;
    public ?string $request_body = null;
    public ?string $request_url = null;
    public ?string $response_body = null;
    public ?string $source_id = null;
    public ?string $source_type = null;
    public ?bool $success = null;
    public ?string $type = null;
}

/** Request payload for DataConnectorExecutionResult#load. */
class DataConnectorExecutionResultLoadMatch
{
    public string $data_connector_id;
    public string $id;
}

/** DataConnectorExecutionResultList entity data model. */
class DataConnectorExecutionResultList
{
    public ?string $id = null;
}

/** Request payload for DataConnectorExecutionResultList#list. */
class DataConnectorExecutionResultListListMatch
{
    public string $id;
    public ?int $end_t = null;
    public ?string $error_type = null;
    public ?string $include_body = null;
    public ?int $per_page = null;
    public ?int $start_t = null;
    public ?string $starting_after = null;
    public ?string $success = null;
}

/** DataEvent entity data model. */
class DataEvent
{
    public ?int $created_at = null;
    public ?string $email = null;
    public ?string $event_name = null;
    public ?array $event_summaries = null;
    public ?string $id = null;
    public ?array $metadata = null;
    public ?string $user_id = null;
}

/** Request payload for DataEvent#create. */
class DataEventCreateData
{
    public ?int $created_at = null;
    public ?string $email = null;
    public ?string $event_name = null;
    public ?array $event_summaries = null;
    public ?string $id = null;
    public ?array $metadata = null;
    public ?string $user_id = null;
}

/** DataEventSummary entity data model. */
class DataEventSummary
{
    public ?int $count = null;
    public ?string $description = null;
    public ?string $first = null;
    public ?string $last = null;
    public ?string $name = null;
}

/** Request payload for DataEventSummary#list. */
class DataEventSummaryListMatch
{
    public array $filter;
    public ?bool $summary = null;
    public string $type;
}

/** DataExport entity data model. */
class DataExport
{
    public ?string $download_expires_at = null;
    public ?string $download_url = null;
    public ?string $job_identifier = null;
    public ?string $status = null;
}

/** Request payload for DataExport#create. */
class DataExportCreateData
{
    public string $job_identifier;
    public ?string $download_expires_at = null;
    public ?string $download_url = null;
    public ?string $status = null;
}

/** Deleted entity data model. */
class Deleted
{
    public ?int $deleted_at = null;
    public ?string $id = null;
    public ?bool $metrics_retained = null;
    public ?string $type = null;
}

/** Request payload for Deleted#list. */
class DeletedListMatch
{
    public ?string $order = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** DeletedArticleObject entity data model. */
class DeletedArticleObject
{
}

/** Request payload for DeletedArticleObject#remove. */
class DeletedArticleObjectRemoveMatch
{
    public int $article_id;
}

/** DeletedCompanyObject entity data model. */
class DeletedCompanyObject
{
}

/** Request payload for DeletedCompanyObject#remove. */
class DeletedCompanyObjectRemoveMatch
{
    public string $company_id;
}

/** DeletedDataConnectorObject entity data model. */
class DeletedDataConnectorObject
{
    public ?string $id = null;
}

/** Request payload for DeletedDataConnectorObject#remove. */
class DeletedDataConnectorObjectRemoveMatch
{
    public string $id;
}

/** DeletedInternalArticleObject entity data model. */
class DeletedInternalArticleObject
{
    public ?bool $ai_chatbot_availability = null;
    public ?bool $ai_copilot_availability = null;
    public ?bool $ai_sales_agent_availability = null;
    public ?array $audience_ids = null;
    public int $author_id;
    public ?string $body = null;
    public ?string $body_markdown = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $locale = null;
    public int $owner_id;
    public string $title;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for DeletedInternalArticleObject#list. */
class DeletedInternalArticleObjectListMatch
{
    public ?bool $ai_chatbot_availability = null;
    public ?bool $ai_copilot_availability = null;
    public ?bool $ai_sales_agent_availability = null;
    public ?array $audience_ids = null;
    public ?int $author_id = null;
    public ?string $body = null;
    public ?string $body_markdown = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $locale = null;
    public ?int $owner_id = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for DeletedInternalArticleObject#create. */
class DeletedInternalArticleObjectCreateData
{
    public ?bool $ai_chatbot_availability = null;
    public ?bool $ai_copilot_availability = null;
    public ?bool $ai_sales_agent_availability = null;
    public ?array $audience_ids = null;
    public int $author_id;
    public ?string $body = null;
    public ?string $body_markdown = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $locale = null;
    public int $owner_id;
    public string $title;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for DeletedInternalArticleObject#remove. */
class DeletedInternalArticleObjectRemoveMatch
{
    public int $internal_article_id;
}

/** DeletedObject entity data model. */
class DeletedObject
{
}

/** Request payload for DeletedObject#remove. */
class DeletedObjectRemoveMatch
{
    public int $news_item_id;
}

/** Email entity data model. */
class Email
{
    public ?string $brand_id = null;
    public ?int $created_at = null;
    public ?string $domain = null;
    public ?string $email = null;
    public ?int $forwarded_email_last_received_at = null;
    public ?bool $forwarding_enabled = null;
    public ?string $id = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?bool $verified = null;
}

/** Request payload for Email#load. */
class EmailLoadMatch
{
    public string $id;
}

/** Request payload for Email#list. */
class EmailListMatch
{
    public ?string $brand_id = null;
    public ?int $created_at = null;
    public ?string $domain = null;
    public ?string $email = null;
    public ?int $forwarded_email_last_received_at = null;
    public ?bool $forwarding_enabled = null;
    public ?string $id = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?bool $verified = null;
}

/** ExternalPage entity data model. */
class ExternalPage
{
    public bool $ai_agent_availability;
    public bool $ai_copilot_availability;
    public ?bool $ai_sales_agent_availability = null;
    public int $created_at;
    public string $external_id;
    public ?bool $fin_availability = null;
    public string $html;
    public string $id;
    public int $last_ingested_at;
    public string $locale;
    public int $source_id;
    public string $title;
    public string $type;
    public int $updated_at;
    public ?string $url = null;
}

/** Request payload for ExternalPage#load. */
class ExternalPageLoadMatch
{
    public string $id;
}

/** Request payload for ExternalPage#list. */
class ExternalPageListMatch
{
    public ?bool $ai_agent_availability = null;
    public ?bool $ai_copilot_availability = null;
    public ?bool $ai_sales_agent_availability = null;
    public ?int $created_at = null;
    public ?string $external_id = null;
    public ?bool $fin_availability = null;
    public ?string $html = null;
    public ?string $id = null;
    public ?int $last_ingested_at = null;
    public ?string $locale = null;
    public ?int $source_id = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $url = null;
}

/** Request payload for ExternalPage#create. */
class ExternalPageCreateData
{
    public bool $ai_agent_availability;
    public bool $ai_copilot_availability;
    public ?bool $ai_sales_agent_availability = null;
    public int $created_at;
    public string $external_id;
    public ?bool $fin_availability = null;
    public string $html;
    public string $id;
    public int $last_ingested_at;
    public string $locale;
    public int $source_id;
    public string $title;
    public string $type;
    public int $updated_at;
    public ?string $url = null;
}

/** Request payload for ExternalPage#update. */
class ExternalPageUpdateData
{
    public string $id;
    public ?bool $ai_agent_availability = null;
    public ?bool $ai_copilot_availability = null;
    public ?bool $ai_sales_agent_availability = null;
    public ?int $created_at = null;
    public ?string $external_id = null;
    public ?bool $fin_availability = null;
    public ?string $html = null;
    public ?int $last_ingested_at = null;
    public ?string $locale = null;
    public ?int $source_id = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $url = null;
}

/** Request payload for ExternalPage#remove. */
class ExternalPageRemoveMatch
{
    public string $id;
}

/** FinAgent entity data model. */
class FinAgent
{
    public ?array $attachments = null;
    public ?array $conversation = null;
    public ?string $conversation_id = null;
    public ?array $conversation_metadata = null;
    public array $message;
    public ?string $rating = null;
    public ?string $remark = null;
    public ?string $status = null;
    public ?array $user = null;
}

/** Request payload for FinAgent#create. */
class FinAgentCreateData
{
    public ?array $attachments = null;
    public ?array $conversation = null;
    public ?string $conversation_id = null;
    public ?array $conversation_metadata = null;
    public array $message;
    public ?string $rating = null;
    public ?string $remark = null;
    public ?string $status = null;
    public ?array $user = null;
}

/** HandlingEvent entity data model. */
class HandlingEvent
{
    public ?string $reason = null;
    public array $teammate;
    public string $timestamp;
    public string $type;
}

/** Request payload for HandlingEvent#list. */
class HandlingEventListMatch
{
    public string $conversation_id;
}

/** HelpCenter entity data model. */
class HelpCenter
{
    public ?array $ar = null;
    public ?array $bg = null;
    public ?array $bs = null;
    public ?array $ca = null;
    public ?int $created_at = null;
    public ?array $cs = null;
    public ?string $custom_domain = null;
    public ?array $da = null;
    public ?array $de = null;
    public ?bool $default = null;
    public ?string $description = null;
    public ?string $display_name = null;
    public ?array $el = null;
    public ?array $en = null;
    public ?array $es = null;
    public ?array $et = null;
    public ?array $fi = null;
    public ?array $fr = null;
    public ?string $from_url = null;
    public ?array $he = null;
    public ?string $help_center_id = null;
    public ?array $hr = null;
    public ?array $hu = null;
    public ?array $id = null;
    public ?string $identifier = null;
    public ?array $it = null;
    public ?array $ja = null;
    public ?array $ko = null;
    public ?string $locale = null;
    public ?array $locales = null;
    public ?array $lt = null;
    public ?array $lv = null;
    public ?array $mn = null;
    public ?string $name = null;
    public ?array $nb = null;
    public ?array $nl = null;
    public ?string $parent_id = null;
    public ?array $pl = null;
    public ?array $pt = null;
    public ?array $ptBR = null;
    public ?array $ro = null;
    public ?array $ru = null;
    public ?array $sl = null;
    public ?array $sr = null;
    public ?array $sv = null;
    public ?string $target_id = null;
    public ?string $target_type = null;
    public ?array $tr = null;
    public ?array $translated_content = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $url = null;
    public ?array $vi = null;
    public ?bool $website_turned_on = null;
    public ?string $workspace_id = null;
    public ?array $zhCN = null;
    public ?array $zhTW = null;
}

/** Request payload for HelpCenter#load. */
class HelpCenterLoadMatch
{
    public int $collection_id;
}

/** Request payload for HelpCenter#list. */
class HelpCenterListMatch
{
    public ?array $ar = null;
    public ?array $bg = null;
    public ?array $bs = null;
    public ?array $ca = null;
    public ?int $created_at = null;
    public ?array $cs = null;
    public ?string $custom_domain = null;
    public ?array $da = null;
    public ?array $de = null;
    public ?bool $default = null;
    public ?string $description = null;
    public ?string $display_name = null;
    public ?array $el = null;
    public ?array $en = null;
    public ?array $es = null;
    public ?array $et = null;
    public ?array $fi = null;
    public ?array $fr = null;
    public ?string $from_url = null;
    public ?array $he = null;
    public ?string $help_center_id = null;
    public ?array $hr = null;
    public ?array $hu = null;
    public ?array $id = null;
    public ?string $identifier = null;
    public ?array $it = null;
    public ?array $ja = null;
    public ?array $ko = null;
    public ?string $locale = null;
    public ?array $locales = null;
    public ?array $lt = null;
    public ?array $lv = null;
    public ?array $mn = null;
    public ?string $name = null;
    public ?array $nb = null;
    public ?array $nl = null;
    public ?string $parent_id = null;
    public ?array $pl = null;
    public ?array $pt = null;
    public ?array $ptBR = null;
    public ?array $ro = null;
    public ?array $ru = null;
    public ?array $sl = null;
    public ?array $sr = null;
    public ?array $sv = null;
    public ?string $target_id = null;
    public ?string $target_type = null;
    public ?array $tr = null;
    public ?array $translated_content = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $url = null;
    public ?array $vi = null;
    public ?bool $website_turned_on = null;
    public ?string $workspace_id = null;
    public ?array $zhCN = null;
    public ?array $zhTW = null;
}

/** Request payload for HelpCenter#create. */
class HelpCenterCreateData
{
    public ?array $ar = null;
    public ?array $bg = null;
    public ?array $bs = null;
    public ?array $ca = null;
    public ?int $created_at = null;
    public ?array $cs = null;
    public ?string $custom_domain = null;
    public ?array $da = null;
    public ?array $de = null;
    public ?bool $default = null;
    public ?string $description = null;
    public ?string $display_name = null;
    public ?array $el = null;
    public ?array $en = null;
    public ?array $es = null;
    public ?array $et = null;
    public ?array $fi = null;
    public ?array $fr = null;
    public ?string $from_url = null;
    public ?array $he = null;
    public ?string $help_center_id = null;
    public ?array $hr = null;
    public ?array $hu = null;
    public ?array $id = null;
    public ?string $identifier = null;
    public ?array $it = null;
    public ?array $ja = null;
    public ?array $ko = null;
    public ?string $locale = null;
    public ?array $locales = null;
    public ?array $lt = null;
    public ?array $lv = null;
    public ?array $mn = null;
    public ?string $name = null;
    public ?array $nb = null;
    public ?array $nl = null;
    public ?string $parent_id = null;
    public ?array $pl = null;
    public ?array $pt = null;
    public ?array $ptBR = null;
    public ?array $ro = null;
    public ?array $ru = null;
    public ?array $sl = null;
    public ?array $sr = null;
    public ?array $sv = null;
    public ?string $target_id = null;
    public ?string $target_type = null;
    public ?array $tr = null;
    public ?array $translated_content = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $url = null;
    public ?array $vi = null;
    public ?bool $website_turned_on = null;
    public ?string $workspace_id = null;
    public ?array $zhCN = null;
    public ?array $zhTW = null;
}

/** Request payload for HelpCenter#update. */
class HelpCenterUpdateData
{
    public int $collection_id;
    public ?array $ar = null;
    public ?array $bg = null;
    public ?array $bs = null;
    public ?array $ca = null;
    public ?int $created_at = null;
    public ?array $cs = null;
    public ?string $custom_domain = null;
    public ?array $da = null;
    public ?array $de = null;
    public ?bool $default = null;
    public ?string $description = null;
    public ?string $display_name = null;
    public ?array $el = null;
    public ?array $en = null;
    public ?array $es = null;
    public ?array $et = null;
    public ?array $fi = null;
    public ?array $fr = null;
    public ?string $from_url = null;
    public ?array $he = null;
    public ?string $help_center_id = null;
    public ?array $hr = null;
    public ?array $hu = null;
    public ?array $id = null;
    public ?string $identifier = null;
    public ?array $it = null;
    public ?array $ja = null;
    public ?array $ko = null;
    public ?string $locale = null;
    public ?array $locales = null;
    public ?array $lt = null;
    public ?array $lv = null;
    public ?array $mn = null;
    public ?string $name = null;
    public ?array $nb = null;
    public ?array $nl = null;
    public ?string $parent_id = null;
    public ?array $pl = null;
    public ?array $pt = null;
    public ?array $ptBR = null;
    public ?array $ro = null;
    public ?array $ru = null;
    public ?array $sl = null;
    public ?array $sr = null;
    public ?array $sv = null;
    public ?string $target_id = null;
    public ?string $target_type = null;
    public ?array $tr = null;
    public ?array $translated_content = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $url = null;
    public ?array $vi = null;
    public ?bool $website_turned_on = null;
    public ?string $workspace_id = null;
    public ?array $zhCN = null;
    public ?array $zhTW = null;
}

/** Request payload for HelpCenter#remove. */
class HelpCenterRemoveMatch
{
    public int $collection_id;
}

/** InternalArticle entity data model. */
class InternalArticle
{
    public ?bool $ai_chatbot_availability = null;
    public ?bool $ai_copilot_availability = null;
    public ?bool $ai_sales_agent_availability = null;
    public ?array $audience_ids = null;
    public ?int $author_id = null;
    public ?string $body = null;
    public ?string $body_markdown = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $locale = null;
    public ?int $owner_id = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for InternalArticle#load. */
class InternalArticleLoadMatch
{
    public int $id;
}

/** Request payload for InternalArticle#update. */
class InternalArticleUpdateData
{
    public int $id;
    public ?bool $ai_chatbot_availability = null;
    public ?bool $ai_copilot_availability = null;
    public ?bool $ai_sales_agent_availability = null;
    public ?array $audience_ids = null;
    public ?int $author_id = null;
    public ?string $body = null;
    public ?string $body_markdown = null;
    public ?int $created_at = null;
    public ?string $locale = null;
    public ?int $owner_id = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** InternalArticleSearch entity data model. */
class InternalArticleSearch
{
    public ?array $data = null;
    public ?array $pages = null;
    public ?int $total_count = null;
    public ?string $type = null;
}

/** Request payload for InternalArticleSearch#load. */
class InternalArticleSearchLoadMatch
{
    public ?string $folder_id = null;
}

/** IpAllowlist entity data model. */
class IpAllowlist
{
    public ?bool $enabled = null;
    public ?array $ip_allowlist = null;
    public ?string $type = null;
}

/** Request payload for IpAllowlist#list. */
class IpAllowlistListMatch
{
    public ?bool $enabled = null;
    public ?array $ip_allowlist = null;
    public ?string $type = null;
}

/** Request payload for IpAllowlist#update. */
class IpAllowlistUpdateData
{
    public ?bool $enabled = null;
    public ?array $ip_allowlist = null;
    public ?string $type = null;
}

/** Job entity data model. */
class Job
{
    public string $id;
    public ?string $resource_id = null;
    public ?string $resource_type = null;
    public ?string $resource_url = null;
    public ?bool $skip_notifications = null;
    public ?string $status = null;
    public ?string $type = null;
    public ?string $url = null;
}

/** Request payload for Job#load. */
class JobLoadMatch
{
    public string $job_id;
}

/** Request payload for Job#create. */
class JobCreateData
{
    public string $id;
    public ?string $resource_id = null;
    public ?string $resource_type = null;
    public ?string $resource_url = null;
    public ?bool $skip_notifications = null;
    public ?string $status = null;
    public ?string $type = null;
    public ?string $url = null;
}

/** Macro entity data model. */
class Macro
{
    public ?array $available_on = null;
    public ?string $body = null;
    public ?string $body_text = null;
    public ?string $created_at = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $visible_to = null;
    public ?array $visible_to_team_ids = null;
}

/** Request payload for Macro#load. */
class MacroLoadMatch
{
    public string $id;
}

/** Request payload for Macro#list. */
class MacroListMatch
{
    public ?int $per_page = null;
    public ?string $starting_after = null;
    public ?int $updated_since = null;
}

/** MergeHistory entity data model. */
class MergeHistory
{
    public ?int $merged_at = null;
    public ?string $source_contact_id = null;
    public ?string $source_contact_role = null;
    public ?string $type = null;
}

/** Request payload for MergeHistory#list. */
class MergeHistoryListMatch
{
    public string $contact_id;
    public ?string $cursor = null;
    public ?string $order = null;
    public ?int $per_page = null;
}

/** Message entity data model. */
class Message
{
    public mixed $bcc = null;
    public string $body;
    public mixed $cc = null;
    public ?string $conversation_id = null;
    public ?bool $create_conversation_without_contact_reply = null;
    public int $created_at;
    public array $from;
    public string $id;
    public string $message_type;
    public ?string $subject = null;
    public ?string $template = null;
    public mixed $to = null;
    public string $type;
}

/** Request payload for Message#create. */
class MessageCreateData
{
    public mixed $bcc = null;
    public string $body;
    public mixed $cc = null;
    public ?string $conversation_id = null;
    public ?bool $create_conversation_without_contact_reply = null;
    public int $created_at;
    public array $from;
    public string $id;
    public string $message_type;
    public ?string $subject = null;
    public ?string $template = null;
    public mixed $to = null;
    public string $type;
}

/** NewsItem entity data model. */
class NewsItem
{
    public ?string $body = null;
    public ?string $cover_image_url = null;
    public ?int $created_at = null;
    public ?bool $deliver_silently = null;
    public ?string $id = null;
    public ?array $labels = null;
    public ?array $newsfeed_assignments = null;
    public ?array $reactions = null;
    public ?int $sender_id = null;
    public ?string $state = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $workspace_id = null;
}

/** Request payload for NewsItem#load. */
class NewsItemLoadMatch
{
    public int $id;
}

/** Request payload for NewsItem#create. */
class NewsItemCreateData
{
    public ?string $body = null;
    public ?string $cover_image_url = null;
    public ?int $created_at = null;
    public ?bool $deliver_silently = null;
    public ?string $id = null;
    public ?array $labels = null;
    public ?array $newsfeed_assignments = null;
    public ?array $reactions = null;
    public ?int $sender_id = null;
    public ?string $state = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $workspace_id = null;
}

/** Request payload for NewsItem#update. */
class NewsItemUpdateData
{
    public int $id;
    public ?string $body = null;
    public ?string $cover_image_url = null;
    public ?int $created_at = null;
    public ?bool $deliver_silently = null;
    public ?array $labels = null;
    public ?array $newsfeed_assignments = null;
    public ?array $reactions = null;
    public ?int $sender_id = null;
    public ?string $state = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $workspace_id = null;
}

/** Newsfeed entity data model. */
class Newsfeed
{
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for Newsfeed#load. */
class NewsfeedLoadMatch
{
    public string $id;
}

/** Note entity data model. */
class Note
{
    public ?string $admin_id = null;
    public ?array $author = null;
    public ?string $body = null;
    public ?array $company = null;
    public ?array $contact = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $type = null;
}

/** Request payload for Note#load. */
class NoteLoadMatch
{
    public int $id;
}

/** Request payload for Note#list. */
class NoteListMatch
{
    public string $company_id;
}

/** Request payload for Note#create. */
class NoteCreateData
{
    public string $company_id;
    public ?string $admin_id = null;
    public ?array $author = null;
    public ?string $body = null;
    public ?array $company = null;
    public ?array $contact = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $type = null;
}

/** OfficeHour entity data model. */
class OfficeHour
{
    public ?int $created_at = null;
    public ?string $id = null;
    public string $name;
    public array $time_intervals;
    public string $time_zone_name;
    public ?bool $twenty_four_seven = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for OfficeHour#list. */
class OfficeHourListMatch
{
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $time_intervals = null;
    public ?string $time_zone_name = null;
    public ?bool $twenty_four_seven = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for OfficeHour#create. */
class OfficeHourCreateData
{
    public ?int $created_at = null;
    public ?string $id = null;
    public string $name;
    public array $time_intervals;
    public string $time_zone_name;
    public ?bool $twenty_four_seven = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for OfficeHour#remove. */
class OfficeHourRemoveMatch
{
    public string $id;
    public ?string $office_hours_schedule_id = null;
}

/** OfficeHoursException entity data model. */
class OfficeHoursException
{
    public ?int $created_at = null;
    public ?string $exception_date = null;
    public ?string $exception_type = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $office_hours_schedule_id = null;
    public ?bool $recurring_annually = null;
    public ?array $time_intervals = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for OfficeHoursException#load. */
class OfficeHoursExceptionLoadMatch
{
    public string $id;
    public string $office_hours_schedule_id;
}

/** Request payload for OfficeHoursException#list. */
class OfficeHoursExceptionListMatch
{
    public string $office_hours_schedule_id;
}

/** Request payload for OfficeHoursException#create. */
class OfficeHoursExceptionCreateData
{
    public string $office_hours_schedule_id;
    public ?int $created_at = null;
    public ?string $exception_date = null;
    public ?string $exception_type = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?bool $recurring_annually = null;
    public ?array $time_intervals = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for OfficeHoursException#update. */
class OfficeHoursExceptionUpdateData
{
    public string $id;
    public string $office_hours_schedule_id;
    public ?int $created_at = null;
    public ?string $exception_date = null;
    public ?string $exception_type = null;
    public ?string $name = null;
    public ?bool $recurring_annually = null;
    public ?array $time_intervals = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** OfficeHoursSchedule entity data model. */
class OfficeHoursSchedule
{
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $time_intervals = null;
    public ?string $time_zone_name = null;
    public ?bool $twenty_four_seven = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for OfficeHoursSchedule#load. */
class OfficeHoursScheduleLoadMatch
{
    public string $id;
}

/** Request payload for OfficeHoursSchedule#update. */
class OfficeHoursScheduleUpdateData
{
    public string $id;
    public ?int $created_at = null;
    public ?string $name = null;
    public ?array $time_intervals = null;
    public ?string $time_zone_name = null;
    public ?bool $twenty_four_seven = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Paginated entity data model. */
class Paginated
{
    public ?array $data = null;
    public ?array $pages = null;
    public ?int $total_count = null;
    public ?string $type = null;
}

/** Request payload for Paginated#list. */
class PaginatedListMatch
{
    public ?array $data = null;
    public ?array $pages = null;
    public ?int $total_count = null;
    public ?string $type = null;
}

/** PhoneSwitch entity data model. */
class PhoneSwitch
{
    public ?array $custom_attributes = null;
    public ?string $phone = null;
    public ?string $type = null;
}

/** Request payload for PhoneSwitch#create. */
class PhoneSwitchCreateData
{
    public ?array $custom_attributes = null;
    public ?string $phone = null;
    public ?string $type = null;
}

/** ReportingData entity data model. */
class ReportingData
{
    public ?string $download_expires_at = null;
    public ?string $download_url = null;
    public ?string $job_identifier = null;
    public ?string $status = null;
}

/** Request payload for ReportingData#load. */
class ReportingDataLoadMatch
{
    public string $app_id;
    public string $job_identifier;
    public ?string $client_id = null;
}

/** ReportingDataExport entity data model. */
class ReportingDataExport
{
    public array $attribute_ids;
    public ?array $attributes = null;
    public string $dataset_id;
    public ?string $default_time_attribute_id = null;
    public ?string $description = null;
    public ?string $download_expires_at = null;
    public ?string $download_url = null;
    public int $end_time;
    public ?string $id = null;
    public ?string $job_identifier = null;
    public ?string $name = null;
    public int $start_time;
    public ?string $status = null;
}

/** Request payload for ReportingDataExport#list. */
class ReportingDataExportListMatch
{
    public ?array $attribute_ids = null;
    public ?array $attributes = null;
    public ?string $dataset_id = null;
    public ?string $default_time_attribute_id = null;
    public ?string $description = null;
    public ?string $download_expires_at = null;
    public ?string $download_url = null;
    public ?int $end_time = null;
    public ?string $id = null;
    public ?string $job_identifier = null;
    public ?string $name = null;
    public ?int $start_time = null;
    public ?string $status = null;
}

/** Request payload for ReportingDataExport#create. */
class ReportingDataExportCreateData
{
    public array $attribute_ids;
    public ?array $attributes = null;
    public string $dataset_id;
    public ?string $default_time_attribute_id = null;
    public ?string $description = null;
    public ?string $download_expires_at = null;
    public ?string $download_url = null;
    public int $end_time;
    public ?string $id = null;
    public ?string $job_identifier = null;
    public ?string $name = null;
    public int $start_time;
    public ?string $status = null;
}

/** Segment entity data model. */
class Segment
{
    public ?int $count = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $person_type = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for Segment#load. */
class SegmentLoadMatch
{
    public string $id;
}

/** Request payload for Segment#list. */
class SegmentListMatch
{
    public ?bool $include_count = null;
}

/** SideConversation entity data model. */
class SideConversation
{
    public ?array $conversation_parts = null;
    public ?string $side_conversation_id = null;
    public ?int $total_count = null;
}

/** Request payload for SideConversation#list. */
class SideConversationListMatch
{
    public string $conversation_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Subscription entity data model. */
class Subscription
{
    public ?string $consent_type = null;
    public ?array $content_types = null;
    public ?array $default_translation = null;
    public ?string $id = null;
    public ?string $state = null;
    public ?array $translations = null;
    public ?string $type = null;
}

/** Request payload for Subscription#list. */
class SubscriptionListMatch
{
    public string $contact_id;
}

/** Request payload for Subscription#create. */
class SubscriptionCreateData
{
    public string $contact_id;
    public ?string $consent_type = null;
    public ?array $content_types = null;
    public ?array $default_translation = null;
    public ?string $id = null;
    public ?string $state = null;
    public ?array $translations = null;
    public ?string $type = null;
}

/** Request payload for Subscription#remove. */
class SubscriptionRemoveMatch
{
    public string $contact_id;
    public string $id;
}

/** SubscriptionType entity data model. */
class SubscriptionType
{
    public ?string $consent_type = null;
    public ?array $content_types = null;
    public ?array $default_translation = null;
    public ?string $id = null;
    public ?string $state = null;
    public ?array $translations = null;
    public ?string $type = null;
}

/** Request payload for SubscriptionType#list. */
class SubscriptionTypeListMatch
{
    public ?string $consent_type = null;
    public ?array $content_types = null;
    public ?array $default_translation = null;
    public ?string $id = null;
    public ?string $state = null;
    public ?array $translations = null;
    public ?string $type = null;
}

/** Tag entity data model. */
class Tag
{
    public ?string $admin_id = null;
    public ?int $applied_at = null;
    public ?array $applied_by = null;
    public ?array $companies = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?array $users = null;
}

/** Request payload for Tag#load. */
class TagLoadMatch
{
    public string $id;
}

/** Request payload for Tag#list. */
class TagListMatch
{
    public ?string $admin_id = null;
    public ?int $applied_at = null;
    public ?array $applied_by = null;
    public ?array $companies = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?array $users = null;
}

/** Request payload for Tag#create. */
class TagCreateData
{
    public ?string $admin_id = null;
    public ?int $applied_at = null;
    public ?array $applied_by = null;
    public ?array $companies = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?array $users = null;
}

/** Request payload for Tag#remove. */
class TagRemoveMatch
{
    public ?int $article_id = null;
    public string $id;
    public ?string $contact_id = null;
    public ?string $content_snippet_id = null;
    public ?string $conversation_id = null;
    public ?int $internal_article_id = null;
    public ?string $ticket_id = null;
}

/** Team entity data model. */
class Team
{
    public ?array $admin_ids = null;
    public ?array $admin_priority_level = null;
    public ?int $assignment_limit = null;
    public ?string $distribution_method = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $type = null;
}

/** Request payload for Team#load. */
class TeamLoadMatch
{
    public string $id;
}

/** Request payload for Team#list. */
class TeamListMatch
{
    public ?array $admin_ids = null;
    public ?array $admin_priority_level = null;
    public ?int $assignment_limit = null;
    public ?string $distribution_method = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $type = null;
}

/** TeamMetricList entity data model. */
class TeamMetricList
{
    public ?string $id = null;
}

/** Request payload for TeamMetricList#list. */
class TeamMetricListListMatch
{
    public string $id;
    public ?int $idle_threshold = null;
}

/** Ticket entity data model. */
class Ticket
{
    public ?int $admin_assignee_id = null;
    public ?array $attributes = null;
    public ?string $category = null;
    public ?array $contacts = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?bool $is_shared = null;
    public ?array $linked_objects = null;
    public ?bool $open = null;
    public ?string $previous_ticket_state_id = null;
    public ?bool $skip_notifications = null;
    public ?int $snoozed_until = null;
    public ?int $team_assignee_id = null;
    public ?array $ticket_attributes = null;
    public ?string $ticket_id = null;
    public ?array $ticket_parts = null;
    public ?array $ticket_state = null;
    public ?string $ticket_state_id = null;
    public ?array $ticket_type = null;
    public string $ticket_type_id;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for Ticket#load. */
class TicketLoadMatch
{
    public string $id;
}

/** Request payload for Ticket#create. */
class TicketCreateData
{
    public ?int $admin_assignee_id = null;
    public ?array $attributes = null;
    public ?string $category = null;
    public ?array $contacts = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?bool $is_shared = null;
    public ?array $linked_objects = null;
    public ?bool $open = null;
    public ?string $previous_ticket_state_id = null;
    public ?bool $skip_notifications = null;
    public ?int $snoozed_until = null;
    public ?int $team_assignee_id = null;
    public ?array $ticket_attributes = null;
    public ?string $ticket_id = null;
    public ?array $ticket_parts = null;
    public ?array $ticket_state = null;
    public ?string $ticket_state_id = null;
    public ?array $ticket_type = null;
    public string $ticket_type_id;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for Ticket#update. */
class TicketUpdateData
{
    public string $id;
    public ?int $admin_assignee_id = null;
    public ?array $attributes = null;
    public ?string $category = null;
    public ?array $contacts = null;
    public ?int $created_at = null;
    public ?bool $is_shared = null;
    public ?array $linked_objects = null;
    public ?bool $open = null;
    public ?string $previous_ticket_state_id = null;
    public ?bool $skip_notifications = null;
    public ?int $snoozed_until = null;
    public ?int $team_assignee_id = null;
    public ?array $ticket_attributes = null;
    public ?string $ticket_id = null;
    public ?array $ticket_parts = null;
    public ?array $ticket_state = null;
    public ?string $ticket_state_id = null;
    public ?array $ticket_type = null;
    public ?string $ticket_type_id = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for Ticket#remove. */
class TicketRemoveMatch
{
    public string $id;
}

/** TicketList entity data model. */
class TicketList
{
    public ?array $pages = null;
    public ?array $pagination = null;
    public mixed $query;
    public ?array $tickets = null;
    public ?int $total_count = null;
    public ?string $type = null;
}

/** Request payload for TicketList#create. */
class TicketListCreateData
{
    public ?array $pages = null;
    public ?array $pagination = null;
    public mixed $query;
    public ?array $tickets = null;
    public ?int $total_count = null;
    public ?string $type = null;
}

/** TicketReply entity data model. */
class TicketReply
{
    public ?array $attachments = null;
    public ?array $author = null;
    public ?string $body = null;
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $part_type = null;
    public ?bool $redacted = null;
    public ?bool $skip_notifications = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for TicketReply#create. */
class TicketReplyCreateData
{
    public string $id;
    public ?array $attachments = null;
    public ?array $author = null;
    public ?string $body = null;
    public ?int $created_at = null;
    public ?string $part_type = null;
    public ?bool $redacted = null;
    public ?bool $skip_notifications = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** TicketState entity data model. */
class TicketState
{
    public ?bool $archived = null;
    public ?string $category = null;
    public ?string $external_label = null;
    public ?string $id = null;
    public ?string $internal_label = null;
    public ?array $ticket_types = null;
    public ?string $type = null;
}

/** Request payload for TicketState#list. */
class TicketStateListMatch
{
    public ?bool $archived = null;
    public ?string $category = null;
    public ?string $external_label = null;
    public ?string $id = null;
    public ?string $internal_label = null;
    public ?array $ticket_types = null;
    public ?string $type = null;
}

/** TicketType entity data model. */
class TicketType
{
    public ?bool $archived = null;
    public ?string $category = null;
    public ?int $created_at = null;
    public ?string $description = null;
    public ?string $icon = null;
    public ?string $id = null;
    public ?bool $is_internal = null;
    public ?string $name = null;
    public ?array $ticket_states = null;
    public ?array $ticket_type_attributes = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $workspace_id = null;
}

/** Request payload for TicketType#load. */
class TicketTypeLoadMatch
{
    public string $id;
}

/** Request payload for TicketType#list. */
class TicketTypeListMatch
{
    public ?bool $archived = null;
    public ?string $category = null;
    public ?int $created_at = null;
    public ?string $description = null;
    public ?string $icon = null;
    public ?string $id = null;
    public ?bool $is_internal = null;
    public ?string $name = null;
    public ?array $ticket_states = null;
    public ?array $ticket_type_attributes = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $workspace_id = null;
}

/** Request payload for TicketType#create. */
class TicketTypeCreateData
{
    public ?bool $archived = null;
    public ?string $category = null;
    public ?int $created_at = null;
    public ?string $description = null;
    public ?string $icon = null;
    public ?string $id = null;
    public ?bool $is_internal = null;
    public ?string $name = null;
    public ?array $ticket_states = null;
    public ?array $ticket_type_attributes = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $workspace_id = null;
}

/** Request payload for TicketType#update. */
class TicketTypeUpdateData
{
    public string $id;
    public ?bool $archived = null;
    public ?string $category = null;
    public ?int $created_at = null;
    public ?string $description = null;
    public ?string $icon = null;
    public ?bool $is_internal = null;
    public ?string $name = null;
    public ?array $ticket_states = null;
    public ?array $ticket_type_attributes = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $workspace_id = null;
}

/** TicketTypeAttribute entity data model. */
class TicketTypeAttribute
{
    public ?bool $allow_multiple_values = null;
    public ?bool $archived = null;
    public string $data_type;
    public string $description;
    public ?string $id = null;
    public ?string $list_items = null;
    public ?bool $multiline = null;
    public string $name;
    public ?bool $required_to_create = null;
    public ?bool $required_to_create_for_contacts = null;
    public ?bool $visible_on_create = null;
    public ?bool $visible_to_contacts = null;
}

/** Request payload for TicketTypeAttribute#create. */
class TicketTypeAttributeCreateData
{
    public string $id;
    public ?bool $allow_multiple_values = null;
    public ?bool $archived = null;
    public string $data_type;
    public string $description;
    public ?string $list_items = null;
    public ?bool $multiline = null;
    public string $name;
    public ?bool $required_to_create = null;
    public ?bool $required_to_create_for_contacts = null;
    public ?bool $visible_on_create = null;
    public ?bool $visible_to_contacts = null;
}

/** Request payload for TicketTypeAttribute#update. */
class TicketTypeAttributeUpdateData
{
    public string $id;
    public string $ticket_type_id;
    public ?bool $allow_multiple_values = null;
    public ?bool $archived = null;
    public ?string $data_type = null;
    public ?string $description = null;
    public ?string $list_items = null;
    public ?bool $multiline = null;
    public ?string $name = null;
    public ?bool $required_to_create = null;
    public ?bool $required_to_create_for_contacts = null;
    public ?bool $visible_on_create = null;
    public ?bool $visible_to_contacts = null;
}

/** Visitor entity data model. */
class Visitor
{
    public ?bool $anonymous = null;
    public ?string $app_id = null;
    public ?array $avatar = null;
    public ?array $companies = null;
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?bool $do_not_track = null;
    public ?string $email = null;
    public ?bool $has_hard_bounced = null;
    public ?string $id = null;
    public ?int $las_request_at = null;
    public ?array $location_data = null;
    public ?bool $marked_email_as_spam = null;
    public ?string $name = null;
    public ?string $owner_id = null;
    public ?string $phone = null;
    public ?string $pseudonym = null;
    public ?string $referrer = null;
    public ?int $remote_created_at = null;
    public ?array $segments = null;
    public ?int $session_count = null;
    public ?int $signed_up_at = null;
    public ?array $social_profiles = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?bool $unsubscribed_from_emails = null;
    public ?int $updated_at = null;
    public ?string $user_id = null;
    public ?string $utm_campaign = null;
    public ?string $utm_content = null;
    public ?string $utm_medium = null;
    public ?string $utm_source = null;
    public ?string $utm_term = null;
}

/** Request payload for Visitor#load. */
class VisitorLoadMatch
{
    public string $user_id;
}

/** Request payload for Visitor#update. */
class VisitorUpdateData
{
    public ?bool $anonymous = null;
    public ?string $app_id = null;
    public ?array $avatar = null;
    public ?array $companies = null;
    public ?int $created_at = null;
    public ?array $custom_attributes = null;
    public ?bool $do_not_track = null;
    public ?string $email = null;
    public ?bool $has_hard_bounced = null;
    public ?string $id = null;
    public ?int $las_request_at = null;
    public ?array $location_data = null;
    public ?bool $marked_email_as_spam = null;
    public ?string $name = null;
    public ?string $owner_id = null;
    public ?string $phone = null;
    public ?string $pseudonym = null;
    public ?string $referrer = null;
    public ?int $remote_created_at = null;
    public ?array $segments = null;
    public ?int $session_count = null;
    public ?int $signed_up_at = null;
    public ?array $social_profiles = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?bool $unsubscribed_from_emails = null;
    public ?int $updated_at = null;
    public ?string $user_id = null;
    public ?string $utm_campaign = null;
    public ?string $utm_content = null;
    public ?string $utm_medium = null;
    public ?string $utm_source = null;
    public ?string $utm_term = null;
}

/** WhatsappMessageStatus entity data model. */
class WhatsappMessageStatus
{
    public ?string $details = null;
    public ?string $message = null;
}

/** Request payload for WhatsappMessageStatus#load. */
class WhatsappMessageStatusLoadMatch
{
    public string $message_id;
}

/** WhatsappMessageStatusList entity data model. */
class WhatsappMessageStatusList
{
    public string $conversation_id;
    public int $created_at;
    public string $id;
    public string $status;
    public ?string $template_name = null;
    public string $type;
    public int $updated_at;
    public string $whatsapp_message_id;
}

/** Request payload for WhatsappMessageStatusList#list. */
class WhatsappMessageStatusListListMatch
{
    public ?int $per_page = null;
    public string $ruleset_id;
    public ?string $starting_after = null;
}

/** Workflow entity data model. */
class Workflow
{
    public ?array $attributes = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?array $embedded_rules = null;
    public ?string $id = null;
    public ?array $preferred_devices = null;
    public ?array $snapshot = null;
    public ?string $state = null;
    public ?array $target_channels = null;
    public ?array $targeting = null;
    public ?string $title = null;
    public ?string $trigger_type = null;
    public ?string $updated_at = null;
}

/** Request payload for Workflow#load. */
class WorkflowLoadMatch
{
    public string $id;
}

