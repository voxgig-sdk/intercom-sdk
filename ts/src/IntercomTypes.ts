// Typed models for the Intercom SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface ActivityLog {
  activity_description?: string
  activity_type?: string
  created_at?: number
  id?: string
  metadata?: Record<string, any>
  performed_by?: Record<string, any>
}

export interface ActivityLogListMatch {
  created_at_after: string
  created_at_before?: string
}

export interface ActivityLogEventType {
  event_types?: any[]
  type?: string
}

export interface ActivityLogEventTypeListMatch {
  event_types?: any[]
  type?: string
}

export interface ActivityLogList {
  activity_logs?: any[]
  created_at_after: number
  created_at_before?: number
  event_types?: any[]
  page?: number
  pages?: Record<string, any>
  per_page?: number
  type?: string
}

export interface ActivityLogListCreateData {
  activity_logs?: any[]
  created_at_after: number
  created_at_before?: number
  event_types?: any[]
  page?: number
  pages?: Record<string, any>
  per_page?: number
  type?: string
}

export interface Admin {
  avatar?: string
  away_mode_enabled?: boolean
  away_mode_reassign?: boolean
  away_status_reason_id?: number
  email?: string
  has_inbox_seat?: boolean
  id?: string
  job_title?: string
  name?: string
  role?: Record<string, any>
  team_ids?: any[]
  team_priority_level?: Record<string, any>
  type?: string
}

export interface AdminLoadMatch {
  id: number
}

export interface AdminListMatch {
  display_avatar?: boolean
}

export interface AdminUpdateData {
  id: number
  avatar?: string
  away_mode_enabled?: boolean
  away_mode_reassign?: boolean
  away_status_reason_id?: number
  email?: string
  has_inbox_seat?: boolean
  job_title?: string
  name?: string
  role?: Record<string, any>
  team_ids?: any[]
  team_priority_level?: Record<string, any>
  type?: string

  // Selects a custom action instead of the plain update:
  //   'away'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AdminWithApp {
  app?: Record<string, any>
  avatar?: Record<string, any>
  away_mode_enabled?: boolean
  away_mode_reassign?: boolean
  email?: string
  email_verified?: boolean
  has_inbox_seat?: boolean
  id?: string
  job_title?: string
  name?: string
  team_ids?: any[]
  type?: string
}

export interface AdminWithAppListMatch {
  app?: Record<string, any>
  avatar?: Record<string, any>
  away_mode_enabled?: boolean
  away_mode_reassign?: boolean
  email?: string
  email_verified?: boolean
  has_inbox_seat?: boolean
  id?: string
  job_title?: string
  name?: string
  team_ids?: any[]
  type?: string
}

export interface AiCall {
  app_id?: number
  call_id: string
  call_summary?: string
  call_transcript?: any[]
  data?: Record<string, any>
  external_call_id?: string
  id?: number
  intent?: any[]
  intercom_call_id?: string
  intercom_conversation_id?: string
  phone_number: string
  source?: string
  status?: string
  user_phone_number?: string
}

export interface AiCallLoadMatch {
  conversation_id: string
}

export interface AiCallCreateData {
  app_id?: number
  call_id: string
  call_summary?: string
  call_transcript?: any[]
  data?: Record<string, any>
  external_call_id?: string
  id?: number
  intent?: any[]
  intercom_call_id?: string
  intercom_conversation_id?: string
  phone_number: string
  source?: string
  status?: string
  user_phone_number?: string
}

export interface AiContent {
}

export interface AiContentRemoveMatch {
  source_id: string
}

export interface Article {
  ai_chatbot_availability?: boolean
  ai_copilot_availability?: boolean
  ai_sales_agent_availability?: boolean
  audience_ids?: any[]
  author_id: number
  body?: string
  body_markdown?: string
  conversions?: number
  created_at?: number
  created_by_id?: number
  default_locale?: string
  description?: string
  draft_updated_at?: number
  exclude_from_article_suggestions?: boolean
  fin_involvements?: number
  fin_resolution_rate?: number
  fin_resolutions?: number
  happy_reaction_percentage?: number
  has_unpublished_changes?: boolean
  help_center_audience?: string
  id?: string
  neutral_reaction_percentage?: number
  parent_id?: number
  parent_ids?: any[]
  parent_type?: string
  reactions?: number
  sad_reaction_percentage?: number
  scheduled_publish_at?: string
  scheduled_unpublish_at?: string
  state?: string
  tags?: Record<string, any>
  title: string
  translated_content?: Record<string, any>
  type?: string
  updated_at?: number
  updated_by_id?: number
  url?: string
  views?: number
  workspace_id?: string
}

export interface ArticleLoadMatch {
  id: number
}

export interface ArticleListMatch {
  ai_chatbot_availability?: boolean
  ai_copilot_availability?: boolean
  ai_sales_agent_availability?: boolean
  audience_ids?: any[]
  author_id?: number
  body?: string
  body_markdown?: string
  conversions?: number
  created_at?: number
  created_by_id?: number
  default_locale?: string
  description?: string
  draft_updated_at?: number
  exclude_from_article_suggestions?: boolean
  fin_involvements?: number
  fin_resolution_rate?: number
  fin_resolutions?: number
  happy_reaction_percentage?: number
  has_unpublished_changes?: boolean
  help_center_audience?: string
  id?: string
  neutral_reaction_percentage?: number
  parent_id?: number
  parent_ids?: any[]
  parent_type?: string
  reactions?: number
  sad_reaction_percentage?: number
  scheduled_publish_at?: string
  scheduled_unpublish_at?: string
  state?: string
  tags?: Record<string, any>
  title?: string
  translated_content?: Record<string, any>
  type?: string
  updated_at?: number
  updated_by_id?: number
  url?: string
  views?: number
  workspace_id?: string

  // Selects a custom action instead of the plain list:
  //   'draft'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ArticleCreateData {
  ai_chatbot_availability?: boolean
  ai_copilot_availability?: boolean
  ai_sales_agent_availability?: boolean
  audience_ids?: any[]
  author_id: number
  body?: string
  body_markdown?: string
  conversions?: number
  created_at?: number
  created_by_id?: number
  default_locale?: string
  description?: string
  draft_updated_at?: number
  exclude_from_article_suggestions?: boolean
  fin_involvements?: number
  fin_resolution_rate?: number
  fin_resolutions?: number
  happy_reaction_percentage?: number
  has_unpublished_changes?: boolean
  help_center_audience?: string
  id?: string
  neutral_reaction_percentage?: number
  parent_id?: number
  parent_ids?: any[]
  parent_type?: string
  reactions?: number
  sad_reaction_percentage?: number
  scheduled_publish_at?: string
  scheduled_unpublish_at?: string
  state?: string
  tags?: Record<string, any>
  title: string
  translated_content?: Record<string, any>
  type?: string
  updated_at?: number
  updated_by_id?: number
  url?: string
  views?: number
  workspace_id?: string

  // Selects a custom action instead of the plain create:
  //   'draft_publish'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ArticleUpdateData {
  id: number
  ai_chatbot_availability?: boolean
  ai_copilot_availability?: boolean
  ai_sales_agent_availability?: boolean
  audience_ids?: any[]
  author_id?: number
  body?: string
  body_markdown?: string
  conversions?: number
  created_at?: number
  created_by_id?: number
  default_locale?: string
  description?: string
  draft_updated_at?: number
  exclude_from_article_suggestions?: boolean
  fin_involvements?: number
  fin_resolution_rate?: number
  fin_resolutions?: number
  happy_reaction_percentage?: number
  has_unpublished_changes?: boolean
  help_center_audience?: string
  neutral_reaction_percentage?: number
  parent_id?: number
  parent_ids?: any[]
  parent_type?: string
  reactions?: number
  sad_reaction_percentage?: number
  scheduled_publish_at?: string
  scheduled_unpublish_at?: string
  state?: string
  tags?: Record<string, any>
  title?: string
  translated_content?: Record<string, any>
  type?: string
  updated_at?: number
  updated_by_id?: number
  url?: string
  views?: number
  workspace_id?: string

  // Selects a custom action instead of the plain update:
  //   'draft'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ArticleSearch {
  data?: Record<string, any>
  pages?: Record<string, any>
  total_count?: number
  type?: string
}

export interface ArticleSearchLoadMatch {
  help_center_id?: number
  highlight?: boolean
  phrase?: string
  state?: string
}

export interface ArticleVersion {
  article_id?: string
  author_id?: string
  body?: string
  body_markdown?: string
  created_at?: number
  created_by_id?: string
  created_via?: string
  description?: string
  from_version_id?: string
  id?: string
  state?: string
  title?: string
  type?: string
  updated_at?: number
}

export interface ArticleVersionLoadMatch {
  article_id: number
  id: string
  locale?: string
}

export interface ArticleVersionList {
  id?: string
}

export interface ArticleVersionListListMatch {
  id: number
  locale?: string
  page?: number
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'versions'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Audience {
  created_at?: number
  id?: string
  name?: string
  predicates?: any[]
  role_predicates?: any[]
  type?: string
  updated_at?: number
}

export interface AudienceLoadMatch {
  id: string
}

export interface AudienceListMatch {
  page?: number
  per_page?: number
}

export interface AudienceCreateData {
  created_at?: number
  id?: string
  name?: string
  predicates?: any[]
  role_predicates?: any[]
  type?: string
  updated_at?: number
}

export interface AudienceUpdateData {
  id: string
  created_at?: number
  name?: string
  predicates?: any[]
  role_predicates?: any[]
  type?: string
  updated_at?: number
}

export interface AudienceRemoveMatch {
  id: string
}

export interface AwayStatusReason {
  created_at?: number
  deleted?: boolean
  emoji?: string
  id?: string
  label?: string
  order?: number
  type?: string
  updated_at?: number
}

export interface AwayStatusReasonListMatch {
  created_at?: number
  deleted?: boolean
  emoji?: string
  id?: string
  label?: string
  order?: number
  type?: string
  updated_at?: number
}

export interface Banner {
  action?: Record<string, any>
  body?: string
  client_targeting?: any[]
  created_at?: number
  id?: string
  position?: string
  show_dismiss_button?: boolean
  style?: string
  title?: string
  type?: string
  view_id?: string
}

export interface BannerListMatch {
  contact_id: string
}

export interface BannerDismiss {
  dismissed?: boolean
  id?: string
  type?: string
  view_id?: string
}

export interface BannerDismissCreateData {
  contact_id: string
  id: string
  dismissed?: boolean
  type?: string
  view_id?: string
}

export interface Brand {
  created_at?: number
  default_address_settings_id?: string
  help_center_id?: string
  id?: string
  is_default?: boolean
  name?: string
  type?: string
  updated_at?: number
}

export interface BrandLoadMatch {
  id: string
}

export interface BrandListMatch {
  created_at?: number
  default_address_settings_id?: string
  help_center_id?: string
  id?: string
  is_default?: boolean
  name?: string
  type?: string
  updated_at?: number
}

export interface Call {
  admin_id?: string
  answered_at?: any
  call_type?: string
  contact_id?: string
  conversation_id?: string
  created_at?: any
  direction?: string
  ended_at?: any
  ended_reason?: string
  fin_recording_url?: string
  fin_transcription_url?: string
  id?: string
  initiated_at?: any
  phone?: string
  recording_url?: string
  state?: string
  transcription_url?: string
  type?: string
  updated_at?: any
}

export interface CallLoadMatch {
  id: string

  // Selects a custom action instead of the plain load:
  //   'recording' | 'transcript'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CallListMatch {
  page?: number
  per_page?: number
}

export interface CallCreateData {
  admin_id?: string
  answered_at?: any
  call_type?: string
  contact_id?: string
  conversation_id?: string
  created_at?: any
  direction?: string
  ended_at?: any
  ended_reason?: string
  fin_recording_url?: string
  fin_transcription_url?: string
  id?: string
  initiated_at?: any
  phone?: string
  recording_url?: string
  state?: string
  transcription_url?: string
  type?: string
  updated_at?: any

  // Selects a custom action instead of the plain create:
  //   'search'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Company {
  app_id?: string
  company_id?: string
  created_at?: number
  custom_attributes?: Record<string, any>
  id?: string
  industry?: string
  last_request_at?: number
  monthly_spend?: number
  name?: string
  notes?: Record<string, any>
  plan?: Record<string, any>
  remote_created_at?: number
  segments?: Record<string, any>
  session_count?: number
  size?: number
  tags?: Record<string, any>
  type?: string
  update_last_request_at?: boolean
  updated_at?: number
  user_count?: number
  website?: string
}

export interface CompanyLoadMatch {
  id: string
}

export interface CompanyListMatch {
  company_id?: string
  name?: string
  page?: number
  per_page?: number
  segment_id?: string
  tag_id?: string
}

export interface CompanyCreateData {
  app_id?: string
  company_id?: string
  created_at?: number
  custom_attributes?: Record<string, any>
  id?: string
  industry?: string
  last_request_at?: number
  monthly_spend?: number
  name?: string
  notes?: Record<string, any>
  plan?: Record<string, any>
  remote_created_at?: number
  segments?: Record<string, any>
  session_count?: number
  size?: number
  tags?: Record<string, any>
  type?: string
  update_last_request_at?: boolean
  updated_at?: number
  user_count?: number
  website?: string
}

export interface CompanyUpdateData {
  id: string
  app_id?: string
  company_id?: string
  created_at?: number
  custom_attributes?: Record<string, any>
  industry?: string
  last_request_at?: number
  monthly_spend?: number
  name?: string
  notes?: Record<string, any>
  plan?: Record<string, any>
  remote_created_at?: number
  segments?: Record<string, any>
  session_count?: number
  size?: number
  tags?: Record<string, any>
  type?: string
  update_last_request_at?: boolean
  updated_at?: number
  user_count?: number
  website?: string
}

export interface CompanyRemoveMatch {
  contact_id: string
  id: string
}

export interface CompanyAttachedContact {
  android_app_name?: string
  android_app_version?: string
  android_device?: string
  android_last_seen_at?: number
  android_os_version?: string
  android_sdk_version?: string
  avatar?: Record<string, any>
  browser?: string
  browser_language?: string
  browser_version?: string
  companies?: Record<string, any>
  created_at?: number
  custom_attributes?: Record<string, any>
  email?: string
  email_domain?: string
  external_id?: string
  has_hard_bounced?: boolean
  id?: string
  ios_app_name?: string
  ios_app_version?: string
  ios_device?: string
  ios_last_seen_at?: number
  ios_os_version?: string
  ios_sdk_version?: string
  language_override?: string
  last_contacted_at?: number
  last_email_clicked_at?: number
  last_email_opened_at?: number
  last_replied_at?: number
  last_seen_at?: number
  location?: Record<string, any>
  marked_email_as_spam?: boolean
  merge_history?: any[]
  name?: string
  notes?: Record<string, any>
  os?: string
  owner_id?: string
  phone?: string
  role?: string
  signed_up_at?: number
  social_profiles?: Record<string, any>
  tags?: Record<string, any>
  type?: string
  unsubscribed_from_emails?: boolean
  updated_at?: number
  workspace_id?: string
}

export interface CompanyAttachedContactListMatch {
  id: string
}

export interface CompanyAttachedSegment {
  count?: number
  created_at?: number
  id?: string
  name?: string
  person_type?: string
  type?: string
  updated_at?: number
}

export interface CompanyAttachedSegmentListMatch {
  id: string
}

export interface CompanyList {
  data?: any[]
  pages?: Record<string, any>
  total_count?: number
  type?: string
}

export interface CompanyListCreateData {
  order?: string
  page?: number
  per_page?: number
  data?: any[]
  pages?: Record<string, any>
  total_count?: number
  type?: string
}

export interface CompanyScroll {
  app_id?: string
  company_id?: string
  created_at?: number
  custom_attributes?: Record<string, any>
  id?: string
  industry?: string
  last_request_at?: number
  monthly_spend?: number
  name?: string
  notes?: Record<string, any>
  plan?: Record<string, any>
  remote_created_at?: number
  segments?: Record<string, any>
  session_count?: number
  size?: number
  tags?: Record<string, any>
  type?: string
  updated_at?: number
  user_count?: number
  website?: string
}

export interface CompanyScrollListMatch {
  scroll_param?: string
}

export interface Contact {
  android_app_name?: string
  android_app_version?: string
  android_device?: string
  android_last_seen_at?: number
  android_os_version?: string
  android_sdk_version?: string
  avatar?: Record<string, any>
  browser?: string
  browser_language?: string
  browser_version?: string
  companies?: Record<string, any>
  created_at?: number
  custom_attributes?: Record<string, any>
  email?: string
  email_domain?: string
  enabled_push_messaging?: boolean
  external_id?: string
  has_hard_bounced?: boolean
  id?: string
  ios_app_name?: string
  ios_app_version?: string
  ios_device?: string
  ios_last_seen_at?: number
  ios_os_version?: string
  ios_sdk_version?: string
  language_override?: string
  last_contacted_at?: number
  last_email_clicked_at?: number
  last_email_opened_at?: number
  last_replied_at?: number
  last_seen_at?: number
  location?: Record<string, any>
  marked_email_as_spam?: boolean
  merge_history?: any[]
  name?: string
  notes?: Record<string, any>
  os?: string
  owner_id?: string
  phone?: string
  role?: string
  signed_up_at?: number
  social_profiles?: Record<string, any>
  tags?: Record<string, any>
  type?: string
  unsubscribed_from_emails?: boolean
  updated_at?: number
  user: Record<string, any>
  visitor: Record<string, any>
  workspace_id?: string
}

export interface ContactLoadMatch {
  id: string
  include_merge_history?: boolean
}

export interface ContactListMatch {
  include_merge_history?: boolean
}

export interface ContactCreateData {
  android_app_name?: string
  android_app_version?: string
  android_device?: string
  android_last_seen_at?: number
  android_os_version?: string
  android_sdk_version?: string
  avatar?: Record<string, any>
  browser?: string
  browser_language?: string
  browser_version?: string
  companies?: Record<string, any>
  created_at?: number
  custom_attributes?: Record<string, any>
  email?: string
  email_domain?: string
  enabled_push_messaging?: boolean
  external_id?: string
  has_hard_bounced?: boolean
  id?: string
  ios_app_name?: string
  ios_app_version?: string
  ios_device?: string
  ios_last_seen_at?: number
  ios_os_version?: string
  ios_sdk_version?: string
  language_override?: string
  last_contacted_at?: number
  last_email_clicked_at?: number
  last_email_opened_at?: number
  last_replied_at?: number
  last_seen_at?: number
  location?: Record<string, any>
  marked_email_as_spam?: boolean
  merge_history?: any[]
  name?: string
  notes?: Record<string, any>
  os?: string
  owner_id?: string
  phone?: string
  role?: string
  signed_up_at?: number
  social_profiles?: Record<string, any>
  tags?: Record<string, any>
  type?: string
  unsubscribed_from_emails?: boolean
  updated_at?: number
  user: Record<string, any>
  visitor: Record<string, any>
  workspace_id?: string

  // Selects a custom action instead of the plain create:
  //   'archive' | 'block' | 'merge' | 'unarchive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ContactUpdateData {
  id: string
  include_merge_history?: boolean
  android_app_name?: string
  android_app_version?: string
  android_device?: string
  android_last_seen_at?: number
  android_os_version?: string
  android_sdk_version?: string
  avatar?: Record<string, any>
  browser?: string
  browser_language?: string
  browser_version?: string
  companies?: Record<string, any>
  created_at?: number
  custom_attributes?: Record<string, any>
  email?: string
  email_domain?: string
  enabled_push_messaging?: boolean
  external_id?: string
  has_hard_bounced?: boolean
  ios_app_name?: string
  ios_app_version?: string
  ios_device?: string
  ios_last_seen_at?: number
  ios_os_version?: string
  ios_sdk_version?: string
  language_override?: string
  last_contacted_at?: number
  last_email_clicked_at?: number
  last_email_opened_at?: number
  last_replied_at?: number
  last_seen_at?: number
  location?: Record<string, any>
  marked_email_as_spam?: boolean
  merge_history?: any[]
  name?: string
  notes?: Record<string, any>
  os?: string
  owner_id?: string
  phone?: string
  role?: string
  signed_up_at?: number
  social_profiles?: Record<string, any>
  tags?: Record<string, any>
  type?: string
  unsubscribed_from_emails?: boolean
  updated_at?: number
  user?: Record<string, any>
  visitor?: Record<string, any>
  workspace_id?: string
}

export interface ContactRemoveMatch {
  id: string
}

export interface ContactAttachedCompany {
  app_id?: string
  company_id?: string
  created_at?: number
  custom_attributes?: Record<string, any>
  id?: string
  industry?: string
  last_request_at?: number
  monthly_spend?: number
  name?: string
  notes?: Record<string, any>
  plan?: Record<string, any>
  remote_created_at?: number
  segments?: Record<string, any>
  session_count?: number
  size?: number
  tags?: Record<string, any>
  type?: string
  updated_at?: number
  user_count?: number
  website?: string
}

export interface ContactAttachedCompanyListMatch {
  id: string
}

export interface ContactList {
  data?: any[]
  pages?: Record<string, any>
  pagination?: Record<string, any>
  query: any
  sort?: Record<string, any>
  total_count?: number
  type?: string
}

export interface ContactListCreateData {
  include_merge_history?: boolean
  data?: any[]
  pages?: Record<string, any>
  pagination?: Record<string, any>
  query: any
  sort?: Record<string, any>
  total_count?: number
  type?: string
}

export interface ContactSegment {
  count?: number
  created_at?: number
  id?: string
  name?: string
  person_type?: string
  type?: string
  updated_at?: number
}

export interface ContactSegmentListMatch {
  id: string
}

export interface Content {
}

export interface ContentCreateData {

  // Selects a custom action instead of the plain create:
  //   'bulk_action'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ContentImportSource {
  apply_audience_to_existing_content?: boolean
  audience_ids?: any[]
  created_at: number
  id: number
  last_synced_at: number
  status: string
  sync_behavior: string
  type: string
  updated_at: number
  url: string
}

export interface ContentImportSourceLoadMatch {
  id: string
}

export interface ContentImportSourceListMatch {
  apply_audience_to_existing_content?: boolean
  audience_ids?: any[]
  created_at?: number
  id?: number
  last_synced_at?: number
  status?: string
  sync_behavior?: string
  type?: string
  updated_at?: number
  url?: string
}

export interface ContentImportSourceCreateData {
  apply_audience_to_existing_content?: boolean
  audience_ids?: any[]
  created_at: number
  id: number
  last_synced_at: number
  status: string
  sync_behavior: string
  type: string
  updated_at: number
  url: string
}

export interface ContentImportSourceUpdateData {
  id: string
  apply_audience_to_existing_content?: boolean
  audience_ids?: any[]
  created_at?: number
  last_synced_at?: number
  status?: string
  sync_behavior?: string
  type?: string
  updated_at?: number
  url?: string
}

export interface ContentSearch {
  data?: any[]
  pages?: Record<string, any>
  total_count?: number
  type?: string
}

export interface ContentSearchListMatch {
  any_tag_id?: any[]
  content_type?: any[]
  copilot_state?: string
  created_at_after?: number
  created_at_before?: number
  created_by_id?: any[]
  fin_sales_state?: string
  fin_service_state?: string
  folder_entity_type?: string
  folder_id?: any[]
  last_updated_by_id?: any[]
  locale?: any[]
  page?: number
  per_page?: number
  query?: string
  state?: any[]
  tag_id?: any[]
  tag_operator?: string
  updated_at_after?: number
  updated_at_before?: number
}

export interface ContentSnippet {
  ai_chatbot_availability?: boolean
  ai_copilot_availability?: boolean
  ai_sales_agent_availability?: boolean
  audience_ids?: any[]
  body_markdown?: string
  chatbot_availability?: number
  copilot_availability?: number
  created_at?: number
  id?: string
  json_blocks?: any[]
  locale?: string
  title?: string
  type?: string
  updated_at?: number
}

export interface ContentSnippetLoadMatch {
  id: string
}

export interface ContentSnippetListMatch {
  page?: number
  per_page?: number
}

export interface ContentSnippetCreateData {
  ai_chatbot_availability?: boolean
  ai_copilot_availability?: boolean
  ai_sales_agent_availability?: boolean
  audience_ids?: any[]
  body_markdown?: string
  chatbot_availability?: number
  copilot_availability?: number
  created_at?: number
  id?: string
  json_blocks?: any[]
  locale?: string
  title?: string
  type?: string
  updated_at?: number
}

export interface ContentSnippetUpdateData {
  id: string
  ai_chatbot_availability?: boolean
  ai_copilot_availability?: boolean
  ai_sales_agent_availability?: boolean
  audience_ids?: any[]
  body_markdown?: string
  chatbot_availability?: number
  copilot_availability?: number
  created_at?: number
  json_blocks?: any[]
  locale?: string
  title?: string
  type?: string
  updated_at?: number
}

export interface ContentSnippetRemoveMatch {
  id: string
}

export interface Conversation {
  admin_assignee_id?: number
  ai_agent?: Record<string, any>
  ai_agent_participated?: boolean
  attachment_urls?: any[]
  body: string
  brand_id?: string
  channel?: Record<string, any>
  company?: Record<string, any>
  company_id?: string
  contacts?: Record<string, any>
  conversation_id: string
  conversation_parts?: Record<string, any>
  conversation_rating?: Record<string, any>
  created_at?: number
  custom_attributes?: Record<string, any>
  external_references?: any[]
  first_contact_reply?: Record<string, any>
  from: Record<string, any>
  id?: string
  linked_objects?: Record<string, any>
  monitor_evaluations?: any[]
  open?: boolean
  priority?: string
  read?: boolean
  sales_agent?: Record<string, any>
  sales_agent_participated?: boolean
  scorecards?: any[]
  sla_applied?: Record<string, any>
  snoozed_until?: number
  source?: Record<string, any>
  state?: string
  statistics?: Record<string, any>
  subject?: string
  tags?: Record<string, any>
  team_assignee_id?: number
  teammates?: Record<string, any>
  title?: string
  type?: string
  updated_at?: number
  waiting_since?: number
}

export interface ConversationLoadMatch {
  id: number
  display_a?: string
  include_translation?: boolean
}

export interface ConversationListMatch {
  per_page?: number
  starting_after?: string
}

export interface ConversationCreateData {
  admin_assignee_id?: number
  ai_agent?: Record<string, any>
  ai_agent_participated?: boolean
  attachment_urls?: any[]
  body: string
  brand_id?: string
  channel?: Record<string, any>
  company?: Record<string, any>
  company_id?: string
  contacts?: Record<string, any>
  conversation_id: string
  conversation_parts?: Record<string, any>
  conversation_rating?: Record<string, any>
  created_at?: number
  custom_attributes?: Record<string, any>
  external_references?: any[]
  first_contact_reply?: Record<string, any>
  from: Record<string, any>
  id?: string
  linked_objects?: Record<string, any>
  monitor_evaluations?: any[]
  open?: boolean
  priority?: string
  read?: boolean
  sales_agent?: Record<string, any>
  sales_agent_participated?: boolean
  scorecards?: any[]
  sla_applied?: Record<string, any>
  snoozed_until?: number
  source?: Record<string, any>
  state?: string
  statistics?: Record<string, any>
  subject?: string
  tags?: Record<string, any>
  team_assignee_id?: number
  teammates?: Record<string, any>
  title?: string
  type?: string
  updated_at?: number
  waiting_since?: number

  // Selects a custom action instead of the plain create:
  //   'merge' | 'part' | 'redact' | 'reply'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ConversationUpdateData {
  id: number
  display_a?: string
  admin_assignee_id?: number
  ai_agent?: Record<string, any>
  ai_agent_participated?: boolean
  attachment_urls?: any[]
  body?: string
  brand_id?: string
  channel?: Record<string, any>
  company?: Record<string, any>
  company_id?: string
  contacts?: Record<string, any>
  conversation_id?: string
  conversation_parts?: Record<string, any>
  conversation_rating?: Record<string, any>
  created_at?: number
  custom_attributes?: Record<string, any>
  external_references?: any[]
  first_contact_reply?: Record<string, any>
  from?: Record<string, any>
  linked_objects?: Record<string, any>
  monitor_evaluations?: any[]
  open?: boolean
  priority?: string
  read?: boolean
  sales_agent?: Record<string, any>
  sales_agent_participated?: boolean
  scorecards?: any[]
  sla_applied?: Record<string, any>
  snoozed_until?: number
  source?: Record<string, any>
  state?: string
  statistics?: Record<string, any>
  subject?: string
  tags?: Record<string, any>
  team_assignee_id?: number
  teammates?: Record<string, any>
  title?: string
  type?: string
  updated_at?: number
  waiting_since?: number
}

export interface ConversationRemoveMatch {
  id: number
  retain_metric?: boolean
  ticket_id?: string
}

export interface ConversationAttribute {
  admin_id?: string
  archived?: boolean
  created_at?: number
  data_type?: string
  description?: string
  id?: number
  label: string
  multiline?: boolean
  name?: string
  reference: Record<string, any>
  required?: boolean
  type?: string
  updated_at?: number
  visible_to_team_ids?: any[]
}

export interface ConversationAttributeLoadMatch {
  id: number
}

export interface ConversationAttributeCreateData {
  admin_id?: string
  archived?: boolean
  created_at?: number
  data_type?: string
  description?: string
  id?: number
  label: string
  multiline?: boolean
  name?: string
  reference: Record<string, any>
  required?: boolean
  type?: string
  updated_at?: number
  visible_to_team_ids?: any[]
}

export interface ConversationAttributeUpdateData {
  id: number
  admin_id?: string
  archived?: boolean
  created_at?: number
  data_type?: string
  description?: string
  label?: string
  multiline?: boolean
  name?: string
  reference?: Record<string, any>
  required?: boolean
  type?: string
  updated_at?: number
  visible_to_team_ids?: any[]
}

export interface ConversationAttributeRemoveMatch {
  id: number
}

export interface ConversationAttributeList {
  data?: any[]
  type?: string
}

export interface ConversationAttributeListListMatch {
  include_archived?: boolean
}

export interface ConversationList {
  conversations?: any[]
  pages?: Record<string, any>
  pagination?: Record<string, any>
  query: any
  total_count?: number
  type?: string
}

export interface ConversationListCreateData {
  include_monitor?: boolean
  include_scorecard?: boolean
  conversations?: any[]
  pages?: Record<string, any>
  pagination?: Record<string, any>
  query: any
  total_count?: number
  type?: string
}

export interface ConversationParticipant {
  id?: string
}

export interface ConversationParticipantCreateData {
  id: string

  // Selects a custom action instead of the plain create:
  //   'customers'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ConversationParticipantRemoveMatch {
  contact_id: string
  conversation_id: string
}

export interface CustomObjectInstance {
  created_at?: number
  custom_attributes?: Record<string, any>
  data?: any[]
  external_created_at?: string
  external_id?: string
  external_updated_at?: string
  id?: string
  pages?: Record<string, any>
  total_count?: number
  type?: string
  updated_at?: number
}

export interface CustomObjectInstanceLoadMatch {
  id: string
  external_id?: string
  page?: number
  per_page?: number
  references_contact_id?: string
  references_conversation_id?: string
}

export interface CustomObjectInstanceCreateData {
  id: string
  created_at?: number
  custom_attributes?: Record<string, any>
  data?: any[]
  external_created_at?: string
  external_id?: string
  external_updated_at?: string
  pages?: Record<string, any>
  total_count?: number
  type?: string
  updated_at?: number
}

export interface CustomObjectInstanceRemoveMatch {
  id: string
  external_id: string
}

export interface Data {
  created_at_after: number
  created_at_before: number
  download_expires_at?: string
  download_url?: string
  id?: string
  job_identifier?: string
  status?: string
}

export interface DataLoadMatch {
  id: string
}

export interface DataCreateData {
  created_at_after: number
  created_at_before: number
  download_expires_at?: string
  download_url?: string
  id?: string
  job_identifier?: string
  status?: string
}

export interface DataAttribute {
  admin_id?: string
  api_writable?: boolean
  archived?: boolean
  created_at?: number
  custom?: boolean
  data_type?: string
  description?: string
  full_name?: string
  id?: number
  label?: string
  messenger_writable?: boolean
  model?: string
  name?: string
  options?: any[]
  type?: string
  ui_writable?: boolean
  updated_at?: number
}

export interface DataAttributeListMatch {
  include_archived?: boolean
  model?: string
}

export interface DataAttributeCreateData {
  admin_id?: string
  api_writable?: boolean
  archived?: boolean
  created_at?: number
  custom?: boolean
  data_type?: string
  description?: string
  full_name?: string
  id?: number
  label?: string
  messenger_writable?: boolean
  model?: string
  name?: string
  options?: any[]
  type?: string
  ui_writable?: boolean
  updated_at?: number
}

export interface DataAttributeUpdateData {
  id: number
  admin_id?: string
  api_writable?: boolean
  archived?: boolean
  created_at?: number
  custom?: boolean
  data_type?: string
  description?: string
  full_name?: string
  label?: string
  messenger_writable?: boolean
  model?: string
  name?: string
  options?: any[]
  type?: string
  ui_writable?: boolean
  updated_at?: number
}

export interface DataConnector {
  audiences?: any[]
  body?: string
  bypass_authentication?: boolean
  client_function_name?: string
  client_function_timeout_ms?: number
  configuration_response_type?: string
  created_at?: string
  created_by_admin_id?: string
  customer_authentication?: boolean
  data_inputs?: any[]
  data_transformation_type?: string
  description?: string
  direct_fin_usage?: boolean
  execution_results_url?: string
  execution_type?: string
  headers?: any[]
  http_method?: string
  id?: string
  mock_response?: Record<string, any>
  name?: string
  object_mappings?: any[]
  response_fields?: any[]
  state?: string
  token_ids?: any[]
  type?: string
  updated_at?: string
  updated_by_admin_id?: string
  url?: string
  validate_missing_attributes?: boolean
}

export interface DataConnectorLoadMatch {
  id: string
  state_version?: string
}

export interface DataConnectorListMatch {
  per_page?: number
  starting_after?: string
}

export interface DataConnectorCreateData {
  audiences?: any[]
  body?: string
  bypass_authentication?: boolean
  client_function_name?: string
  client_function_timeout_ms?: number
  configuration_response_type?: string
  created_at?: string
  created_by_admin_id?: string
  customer_authentication?: boolean
  data_inputs?: any[]
  data_transformation_type?: string
  description?: string
  direct_fin_usage?: boolean
  execution_results_url?: string
  execution_type?: string
  headers?: any[]
  http_method?: string
  id?: string
  mock_response?: Record<string, any>
  name?: string
  object_mappings?: any[]
  response_fields?: any[]
  state?: string
  token_ids?: any[]
  type?: string
  updated_at?: string
  updated_by_admin_id?: string
  url?: string
  validate_missing_attributes?: boolean
}

export interface DataConnectorUpdateData {
  id: string
  audiences?: any[]
  body?: string
  bypass_authentication?: boolean
  client_function_name?: string
  client_function_timeout_ms?: number
  configuration_response_type?: string
  created_at?: string
  created_by_admin_id?: string
  customer_authentication?: boolean
  data_inputs?: any[]
  data_transformation_type?: string
  description?: string
  direct_fin_usage?: boolean
  execution_results_url?: string
  execution_type?: string
  headers?: any[]
  http_method?: string
  mock_response?: Record<string, any>
  name?: string
  object_mappings?: any[]
  response_fields?: any[]
  state?: string
  token_ids?: any[]
  type?: string
  updated_at?: string
  updated_by_admin_id?: string
  url?: string
  validate_missing_attributes?: boolean
}

export interface DataConnectorExecutionResult {
  conversation_id?: string
  created_at?: string
  data_connector_id?: string
  error_message?: string
  error_type?: string
  execution_time_ms?: number
  http_method?: string
  http_status?: number
  id?: string
  raw_response_body?: string
  request_body?: string
  request_url?: string
  response_body?: string
  source_id?: string
  source_type?: string
  success?: boolean
  type?: string
}

export interface DataConnectorExecutionResultLoadMatch {
  data_connector_id: string
  id: string
}

export interface DataConnectorExecutionResultList {
  id?: string
}

export interface DataConnectorExecutionResultListListMatch {
  id: string
  end_t?: number
  error_type?: string
  include_body?: string
  per_page?: number
  start_t?: number
  starting_after?: string
  success?: string

  // Selects a custom action instead of the plain list:
  //   'execution_results'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DataEvent {
  created_at?: number
  email?: string
  event_name?: string
  event_summaries?: Record<string, any>
  id?: string
  metadata?: Record<string, any>
  user_id?: string
}

export interface DataEventCreateData {
  created_at?: number
  email?: string
  event_name?: string
  event_summaries?: Record<string, any>
  id?: string
  metadata?: Record<string, any>
  user_id?: string
}

export interface DataEventSummary {
  count?: number
  description?: string
  first?: string
  last?: string
  name?: string
}

export interface DataEventSummaryListMatch {
  filter: Record<string, any>
  summary?: boolean
  type: string
}

export interface DataExport {
  download_expires_at?: string
  download_url?: string
  job_identifier?: string
  status?: string
}

export interface DataExportCreateData {
  job_identifier: string
  download_expires_at?: string
  download_url?: string
  status?: string
}

export interface Deleted {
  deleted_at?: number
  id?: string
  metrics_retained?: boolean
  type?: string
}

export interface DeletedListMatch {
  order?: string
  page?: number
  per_page?: number
}

export interface DeletedArticleObject {
}

export interface DeletedArticleObjectRemoveMatch {
  article_id: number
}

export interface DeletedCompanyObject {
}

export interface DeletedCompanyObjectRemoveMatch {
  company_id: string
}

export interface DeletedDataConnectorObject {
  id?: string
}

export interface DeletedDataConnectorObjectRemoveMatch {
  id: string
}

export interface DeletedInternalArticleObject {
  ai_chatbot_availability?: boolean
  ai_copilot_availability?: boolean
  ai_sales_agent_availability?: boolean
  audience_ids?: any[]
  author_id: number
  body?: string
  body_markdown?: string
  created_at?: number
  id?: string
  locale?: string
  owner_id: number
  title: string
  type?: string
  updated_at?: number
}

export interface DeletedInternalArticleObjectListMatch {
  ai_chatbot_availability?: boolean
  ai_copilot_availability?: boolean
  ai_sales_agent_availability?: boolean
  audience_ids?: any[]
  author_id?: number
  body?: string
  body_markdown?: string
  created_at?: number
  id?: string
  locale?: string
  owner_id?: number
  title?: string
  type?: string
  updated_at?: number
}

export interface DeletedInternalArticleObjectCreateData {
  ai_chatbot_availability?: boolean
  ai_copilot_availability?: boolean
  ai_sales_agent_availability?: boolean
  audience_ids?: any[]
  author_id: number
  body?: string
  body_markdown?: string
  created_at?: number
  id?: string
  locale?: string
  owner_id: number
  title: string
  type?: string
  updated_at?: number
}

export interface DeletedInternalArticleObjectRemoveMatch {
  internal_article_id: number
}

export interface DeletedObject {
}

export interface DeletedObjectRemoveMatch {
  news_item_id: number
}

export interface Email {
  brand_id?: string
  created_at?: number
  domain?: string
  email?: string
  forwarded_email_last_received_at?: number
  forwarding_enabled?: boolean
  id?: string
  type?: string
  updated_at?: number
  verified?: boolean
}

export interface EmailLoadMatch {
  id: string
}

export interface EmailListMatch {
  brand_id?: string
  created_at?: number
  domain?: string
  email?: string
  forwarded_email_last_received_at?: number
  forwarding_enabled?: boolean
  id?: string
  type?: string
  updated_at?: number
  verified?: boolean
}

export interface ExternalPage {
  ai_agent_availability: boolean
  ai_copilot_availability: boolean
  ai_sales_agent_availability?: boolean
  created_at: number
  external_id: string
  fin_availability?: boolean
  html: string
  id: string
  last_ingested_at: number
  locale: string
  source_id: number
  title: string
  type: string
  updated_at: number
  url?: string
}

export interface ExternalPageLoadMatch {
  id: string
}

export interface ExternalPageListMatch {
  ai_agent_availability?: boolean
  ai_copilot_availability?: boolean
  ai_sales_agent_availability?: boolean
  created_at?: number
  external_id?: string
  fin_availability?: boolean
  html?: string
  id?: string
  last_ingested_at?: number
  locale?: string
  source_id?: number
  title?: string
  type?: string
  updated_at?: number
  url?: string
}

export interface ExternalPageCreateData {
  ai_agent_availability: boolean
  ai_copilot_availability: boolean
  ai_sales_agent_availability?: boolean
  created_at: number
  external_id: string
  fin_availability?: boolean
  html: string
  id: string
  last_ingested_at: number
  locale: string
  source_id: number
  title: string
  type: string
  updated_at: number
  url?: string
}

export interface ExternalPageUpdateData {
  id: string
  ai_agent_availability?: boolean
  ai_copilot_availability?: boolean
  ai_sales_agent_availability?: boolean
  created_at?: number
  external_id?: string
  fin_availability?: boolean
  html?: string
  last_ingested_at?: number
  locale?: string
  source_id?: number
  title?: string
  type?: string
  updated_at?: number
  url?: string
}

export interface ExternalPageRemoveMatch {
  id: string
}

export interface FinAgent {
  attachments?: any[]
  conversation?: Record<string, any>
  conversation_id?: string
  conversation_metadata?: Record<string, any>
  message: Record<string, any>
  rating?: string
  remark?: string
  status?: string
  user?: Record<string, any>
}

export interface FinAgentCreateData {
  attachments?: any[]
  conversation?: Record<string, any>
  conversation_id?: string
  conversation_metadata?: Record<string, any>
  message: Record<string, any>
  rating?: string
  remark?: string
  status?: string
  user?: Record<string, any>
}

export interface HandlingEvent {
  reason?: string
  teammate: Record<string, any>
  timestamp: string
  type: string
}

export interface HandlingEventListMatch {
  conversation_id: string
}

export interface HelpCenter {
  ar?: Record<string, any>
  bg?: Record<string, any>
  bs?: Record<string, any>
  ca?: Record<string, any>
  created_at?: number
  cs?: Record<string, any>
  custom_domain?: string
  da?: Record<string, any>
  de?: Record<string, any>
  default?: boolean
  description?: string
  display_name?: string
  el?: Record<string, any>
  en?: Record<string, any>
  es?: Record<string, any>
  et?: Record<string, any>
  fi?: Record<string, any>
  fr?: Record<string, any>
  from_url?: string
  he?: Record<string, any>
  help_center_id?: string
  hr?: Record<string, any>
  hu?: Record<string, any>
  id?: Record<string, any>
  identifier?: string
  it?: Record<string, any>
  ja?: Record<string, any>
  ko?: Record<string, any>
  locale?: string
  locales?: any[]
  lt?: Record<string, any>
  lv?: Record<string, any>
  mn?: Record<string, any>
  name?: string
  nb?: Record<string, any>
  nl?: Record<string, any>
  parent_id?: string
  pl?: Record<string, any>
  pt?: Record<string, any>
  ptBR?: Record<string, any>
  ro?: Record<string, any>
  ru?: Record<string, any>
  sl?: Record<string, any>
  sr?: Record<string, any>
  sv?: Record<string, any>
  target_id?: string
  target_type?: string
  tr?: Record<string, any>
  translated_content?: Record<string, any>
  type?: string
  updated_at?: number
  url?: string
  vi?: Record<string, any>
  website_turned_on?: boolean
  workspace_id?: string
  zhCN?: Record<string, any>
  zhTW?: Record<string, any>
}

export interface HelpCenterLoadMatch {
  collection_id: number
}

export interface HelpCenterListMatch {
  ar?: Record<string, any>
  bg?: Record<string, any>
  bs?: Record<string, any>
  ca?: Record<string, any>
  created_at?: number
  cs?: Record<string, any>
  custom_domain?: string
  da?: Record<string, any>
  de?: Record<string, any>
  default?: boolean
  description?: string
  display_name?: string
  el?: Record<string, any>
  en?: Record<string, any>
  es?: Record<string, any>
  et?: Record<string, any>
  fi?: Record<string, any>
  fr?: Record<string, any>
  from_url?: string
  he?: Record<string, any>
  help_center_id?: string
  hr?: Record<string, any>
  hu?: Record<string, any>
  id?: Record<string, any>
  identifier?: string
  it?: Record<string, any>
  ja?: Record<string, any>
  ko?: Record<string, any>
  locale?: string
  locales?: any[]
  lt?: Record<string, any>
  lv?: Record<string, any>
  mn?: Record<string, any>
  name?: string
  nb?: Record<string, any>
  nl?: Record<string, any>
  parent_id?: string
  pl?: Record<string, any>
  pt?: Record<string, any>
  ptBR?: Record<string, any>
  ro?: Record<string, any>
  ru?: Record<string, any>
  sl?: Record<string, any>
  sr?: Record<string, any>
  sv?: Record<string, any>
  target_id?: string
  target_type?: string
  tr?: Record<string, any>
  translated_content?: Record<string, any>
  type?: string
  updated_at?: number
  url?: string
  vi?: Record<string, any>
  website_turned_on?: boolean
  workspace_id?: string
  zhCN?: Record<string, any>
  zhTW?: Record<string, any>

  // Selects a custom action instead of the plain list:
  //   'collection' | 'redirect'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface HelpCenterCreateData {
  ar?: Record<string, any>
  bg?: Record<string, any>
  bs?: Record<string, any>
  ca?: Record<string, any>
  created_at?: number
  cs?: Record<string, any>
  custom_domain?: string
  da?: Record<string, any>
  de?: Record<string, any>
  default?: boolean
  description?: string
  display_name?: string
  el?: Record<string, any>
  en?: Record<string, any>
  es?: Record<string, any>
  et?: Record<string, any>
  fi?: Record<string, any>
  fr?: Record<string, any>
  from_url?: string
  he?: Record<string, any>
  help_center_id?: string
  hr?: Record<string, any>
  hu?: Record<string, any>
  id?: Record<string, any>
  identifier?: string
  it?: Record<string, any>
  ja?: Record<string, any>
  ko?: Record<string, any>
  locale?: string
  locales?: any[]
  lt?: Record<string, any>
  lv?: Record<string, any>
  mn?: Record<string, any>
  name?: string
  nb?: Record<string, any>
  nl?: Record<string, any>
  parent_id?: string
  pl?: Record<string, any>
  pt?: Record<string, any>
  ptBR?: Record<string, any>
  ro?: Record<string, any>
  ru?: Record<string, any>
  sl?: Record<string, any>
  sr?: Record<string, any>
  sv?: Record<string, any>
  target_id?: string
  target_type?: string
  tr?: Record<string, any>
  translated_content?: Record<string, any>
  type?: string
  updated_at?: number
  url?: string
  vi?: Record<string, any>
  website_turned_on?: boolean
  workspace_id?: string
  zhCN?: Record<string, any>
  zhTW?: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'collection' | 'redirect'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface HelpCenterUpdateData {
  collection_id: number
  ar?: Record<string, any>
  bg?: Record<string, any>
  bs?: Record<string, any>
  ca?: Record<string, any>
  created_at?: number
  cs?: Record<string, any>
  custom_domain?: string
  da?: Record<string, any>
  de?: Record<string, any>
  default?: boolean
  description?: string
  display_name?: string
  el?: Record<string, any>
  en?: Record<string, any>
  es?: Record<string, any>
  et?: Record<string, any>
  fi?: Record<string, any>
  fr?: Record<string, any>
  from_url?: string
  he?: Record<string, any>
  help_center_id?: string
  hr?: Record<string, any>
  hu?: Record<string, any>
  id?: Record<string, any>
  identifier?: string
  it?: Record<string, any>
  ja?: Record<string, any>
  ko?: Record<string, any>
  locale?: string
  locales?: any[]
  lt?: Record<string, any>
  lv?: Record<string, any>
  mn?: Record<string, any>
  name?: string
  nb?: Record<string, any>
  nl?: Record<string, any>
  parent_id?: string
  pl?: Record<string, any>
  pt?: Record<string, any>
  ptBR?: Record<string, any>
  ro?: Record<string, any>
  ru?: Record<string, any>
  sl?: Record<string, any>
  sr?: Record<string, any>
  sv?: Record<string, any>
  target_id?: string
  target_type?: string
  tr?: Record<string, any>
  translated_content?: Record<string, any>
  type?: string
  updated_at?: number
  url?: string
  vi?: Record<string, any>
  website_turned_on?: boolean
  workspace_id?: string
  zhCN?: Record<string, any>
  zhTW?: Record<string, any>
}

export interface HelpCenterRemoveMatch {
  collection_id: number
}

export interface InternalArticle {
  ai_chatbot_availability?: boolean
  ai_copilot_availability?: boolean
  ai_sales_agent_availability?: boolean
  audience_ids?: any[]
  author_id?: number
  body?: string
  body_markdown?: string
  created_at?: number
  id?: string
  locale?: string
  owner_id?: number
  title?: string
  type?: string
  updated_at?: number
}

export interface InternalArticleLoadMatch {
  id: number
}

export interface InternalArticleUpdateData {
  id: number
  ai_chatbot_availability?: boolean
  ai_copilot_availability?: boolean
  ai_sales_agent_availability?: boolean
  audience_ids?: any[]
  author_id?: number
  body?: string
  body_markdown?: string
  created_at?: number
  locale?: string
  owner_id?: number
  title?: string
  type?: string
  updated_at?: number
}

export interface InternalArticleSearch {
  data?: Record<string, any>
  pages?: Record<string, any>
  total_count?: number
  type?: string
}

export interface InternalArticleSearchLoadMatch {
  folder_id?: string
}

export interface IpAllowlist {
  enabled?: boolean
  ip_allowlist?: any[]
  type?: string
}

export interface IpAllowlistListMatch {
  enabled?: boolean
  ip_allowlist?: any[]
  type?: string
}

export interface IpAllowlistUpdateData {
  enabled?: boolean
  ip_allowlist?: any[]
  type?: string
}

export interface Job {
  id: string
  resource_id?: string
  resource_type?: string
  resource_url?: string
  skip_notifications?: boolean
  status?: string
  type?: string
  url?: string
}

export interface JobLoadMatch {
  job_id: string
}

export interface JobCreateData {
  id: string
  resource_id?: string
  resource_type?: string
  resource_url?: string
  skip_notifications?: boolean
  status?: string
  type?: string
  url?: string
}

export interface Macro {
  available_on?: any[]
  body?: string
  body_text?: string
  created_at?: string
  id?: string
  name?: string
  type?: string
  updated_at?: string
  visible_to?: string
  visible_to_team_ids?: any[]
}

export interface MacroLoadMatch {
  id: string
}

export interface MacroListMatch {
  per_page?: number
  starting_after?: string
  updated_since?: number
}

export interface MergeHistory {
  merged_at?: number
  source_contact_id?: string
  source_contact_role?: string
  type?: string
}

export interface MergeHistoryListMatch {
  contact_id: string
  cursor?: string
  order?: string
  per_page?: number
}

export interface Message {
  bcc?: any
  body: string
  cc?: any
  conversation_id?: string
  create_conversation_without_contact_reply?: boolean
  created_at: number
  from: Record<string, any>
  id: string
  message_type: string
  subject?: string
  template?: string
  to?: any
  type: string
}

export interface MessageCreateData {
  bcc?: any
  body: string
  cc?: any
  conversation_id?: string
  create_conversation_without_contact_reply?: boolean
  created_at: number
  from: Record<string, any>
  id: string
  message_type: string
  subject?: string
  template?: string
  to?: any
  type: string
}

export interface NewsItem {
  body?: string
  cover_image_url?: string
  created_at?: number
  deliver_silently?: boolean
  id?: string
  labels?: any[]
  newsfeed_assignments?: any[]
  reactions?: any[]
  sender_id?: number
  state?: string
  title?: string
  type?: string
  updated_at?: number
  workspace_id?: string
}

export interface NewsItemLoadMatch {
  id: number
}

export interface NewsItemCreateData {
  body?: string
  cover_image_url?: string
  created_at?: number
  deliver_silently?: boolean
  id?: string
  labels?: any[]
  newsfeed_assignments?: any[]
  reactions?: any[]
  sender_id?: number
  state?: string
  title?: string
  type?: string
  updated_at?: number
  workspace_id?: string
}

export interface NewsItemUpdateData {
  id: number
  body?: string
  cover_image_url?: string
  created_at?: number
  deliver_silently?: boolean
  labels?: any[]
  newsfeed_assignments?: any[]
  reactions?: any[]
  sender_id?: number
  state?: string
  title?: string
  type?: string
  updated_at?: number
  workspace_id?: string
}

export interface Newsfeed {
  created_at?: number
  id?: string
  name?: string
  type?: string
  updated_at?: number
}

export interface NewsfeedLoadMatch {
  id: string
}

export interface Note {
  admin_id?: string
  author?: Record<string, any>
  body?: string
  company?: Record<string, any>
  contact?: Record<string, any>
  created_at?: number
  id?: string
  type?: string
}

export interface NoteLoadMatch {
  id: number
}

export interface NoteListMatch {
  company_id: string
}

export interface NoteCreateData {
  company_id: string
  admin_id?: string
  author?: Record<string, any>
  body?: string
  company?: Record<string, any>
  contact?: Record<string, any>
  created_at?: number
  id?: string
  type?: string
}

export interface OfficeHour {
  created_at?: number
  id?: string
  name: string
  time_intervals: any[]
  time_zone_name: string
  twenty_four_seven?: boolean
  type?: string
  updated_at?: number
}

export interface OfficeHourListMatch {
  created_at?: number
  id?: string
  name?: string
  time_intervals?: any[]
  time_zone_name?: string
  twenty_four_seven?: boolean
  type?: string
  updated_at?: number
}

export interface OfficeHourCreateData {
  created_at?: number
  id?: string
  name: string
  time_intervals: any[]
  time_zone_name: string
  twenty_four_seven?: boolean
  type?: string
  updated_at?: number
}

export interface OfficeHourRemoveMatch {
  id: string
  office_hours_schedule_id?: string
}

export interface OfficeHoursException {
  created_at?: number
  exception_date?: string
  exception_type?: string
  id?: string
  name?: string
  office_hours_schedule_id?: string
  recurring_annually?: boolean
  time_intervals?: any[]
  type?: string
  updated_at?: number
}

export interface OfficeHoursExceptionLoadMatch {
  id: string
  office_hours_schedule_id: string
}

export interface OfficeHoursExceptionListMatch {
  office_hours_schedule_id: string
}

export interface OfficeHoursExceptionCreateData {
  office_hours_schedule_id: string
  created_at?: number
  exception_date?: string
  exception_type?: string
  id?: string
  name?: string
  recurring_annually?: boolean
  time_intervals?: any[]
  type?: string
  updated_at?: number
}

export interface OfficeHoursExceptionUpdateData {
  id: string
  office_hours_schedule_id: string
  created_at?: number
  exception_date?: string
  exception_type?: string
  name?: string
  recurring_annually?: boolean
  time_intervals?: any[]
  type?: string
  updated_at?: number
}

export interface OfficeHoursSchedule {
  created_at?: number
  id?: string
  name?: string
  time_intervals?: any[]
  time_zone_name?: string
  twenty_four_seven?: boolean
  type?: string
  updated_at?: number
}

export interface OfficeHoursScheduleLoadMatch {
  id: string
}

export interface OfficeHoursScheduleUpdateData {
  id: string
  created_at?: number
  name?: string
  time_intervals?: any[]
  time_zone_name?: string
  twenty_four_seven?: boolean
  type?: string
  updated_at?: number
}

export interface Paginated {
  data?: any[]
  pages?: Record<string, any>
  total_count?: number
  type?: string
}

export interface PaginatedListMatch {
  data?: any[]
  pages?: Record<string, any>
  total_count?: number
  type?: string
}

export interface PhoneSwitch {
  custom_attributes?: Record<string, any>
  phone?: string
  type?: string
}

export interface PhoneSwitchCreateData {
  custom_attributes?: Record<string, any>
  phone?: string
  type?: string
}

export interface ReportingData {
  download_expires_at?: string
  download_url?: string
  job_identifier?: string
  status?: string
}

export interface ReportingDataLoadMatch {
  app_id: string
  job_identifier: string
  client_id?: string
}

export interface ReportingDataExport {
  attribute_ids: any[]
  attributes?: any[]
  dataset_id: string
  default_time_attribute_id?: string
  description?: string
  download_expires_at?: string
  download_url?: string
  end_time: number
  id?: string
  job_identifier?: string
  name?: string
  start_time: number
  status?: string
}

export interface ReportingDataExportListMatch {
  attribute_ids?: any[]
  attributes?: any[]
  dataset_id?: string
  default_time_attribute_id?: string
  description?: string
  download_expires_at?: string
  download_url?: string
  end_time?: number
  id?: string
  job_identifier?: string
  name?: string
  start_time?: number
  status?: string
}

export interface ReportingDataExportCreateData {
  attribute_ids: any[]
  attributes?: any[]
  dataset_id: string
  default_time_attribute_id?: string
  description?: string
  download_expires_at?: string
  download_url?: string
  end_time: number
  id?: string
  job_identifier?: string
  name?: string
  start_time: number
  status?: string
}

export interface Segment {
  count?: number
  created_at?: number
  id?: string
  name?: string
  person_type?: string
  type?: string
  updated_at?: number
}

export interface SegmentLoadMatch {
  id: string
}

export interface SegmentListMatch {
  include_count?: boolean
}

export interface SideConversation {
  conversation_parts?: any[]
  side_conversation_id?: string
  total_count?: number
}

export interface SideConversationListMatch {
  conversation_id: string
  page?: number
  per_page?: number
}

export interface Subscription {
  consent_type?: string
  content_types?: any[]
  default_translation?: Record<string, any>
  id?: string
  state?: string
  translations?: any[]
  type?: string
}

export interface SubscriptionListMatch {
  contact_id: string
}

export interface SubscriptionCreateData {
  contact_id: string
  consent_type?: string
  content_types?: any[]
  default_translation?: Record<string, any>
  id?: string
  state?: string
  translations?: any[]
  type?: string
}

export interface SubscriptionRemoveMatch {
  contact_id: string
  id: string
}

export interface SubscriptionType {
  consent_type?: string
  content_types?: any[]
  default_translation?: Record<string, any>
  id?: string
  state?: string
  translations?: any[]
  type?: string
}

export interface SubscriptionTypeListMatch {
  consent_type?: string
  content_types?: any[]
  default_translation?: Record<string, any>
  id?: string
  state?: string
  translations?: any[]
  type?: string
}

export interface Tag {
  admin_id?: string
  applied_at?: number
  applied_by?: Record<string, any>
  companies?: any[]
  id?: string
  name?: string
  type?: string
  users?: any[]
}

export interface TagLoadMatch {
  id: string
}

export interface TagListMatch {
  admin_id?: string
  applied_at?: number
  applied_by?: Record<string, any>
  companies?: any[]
  id?: string
  name?: string
  type?: string
  users?: any[]
}

export interface TagCreateData {
  admin_id?: string
  applied_at?: number
  applied_by?: Record<string, any>
  companies?: any[]
  id?: string
  name?: string
  type?: string
  users?: any[]
}

export interface TagRemoveMatch {
  article_id?: number
  id: string
  contact_id?: string
  content_snippet_id?: string
  conversation_id?: string
  internal_article_id?: number
  ticket_id?: string
}

export interface Team {
  admin_ids?: any[]
  admin_priority_level?: Record<string, any>
  assignment_limit?: number
  distribution_method?: string
  id?: string
  name?: string
  type?: string
}

export interface TeamLoadMatch {
  id: string
}

export interface TeamListMatch {
  admin_ids?: any[]
  admin_priority_level?: Record<string, any>
  assignment_limit?: number
  distribution_method?: string
  id?: string
  name?: string
  type?: string
}

export interface TeamMetricList {
  id?: string
}

export interface TeamMetricListListMatch {
  id: string
  idle_threshold?: number

  // Selects a custom action instead of the plain list:
  //   'metrics'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Ticket {
  admin_assignee_id?: number
  attributes?: Record<string, any>
  category?: string
  contacts?: Record<string, any>
  created_at?: number
  id?: string
  is_shared?: boolean
  linked_objects?: Record<string, any>
  open?: boolean
  previous_ticket_state_id?: string
  skip_notifications?: boolean
  snoozed_until?: number
  team_assignee_id?: number
  ticket_attributes?: Record<string, any>
  ticket_id?: string
  ticket_parts?: Record<string, any>
  ticket_state?: Record<string, any>
  ticket_state_id?: string
  ticket_type?: Record<string, any>
  ticket_type_id: string
  type?: string
  updated_at?: number
}

export interface TicketLoadMatch {
  id: string
}

export interface TicketCreateData {
  admin_assignee_id?: number
  attributes?: Record<string, any>
  category?: string
  contacts?: Record<string, any>
  created_at?: number
  id?: string
  is_shared?: boolean
  linked_objects?: Record<string, any>
  open?: boolean
  previous_ticket_state_id?: string
  skip_notifications?: boolean
  snoozed_until?: number
  team_assignee_id?: number
  ticket_attributes?: Record<string, any>
  ticket_id?: string
  ticket_parts?: Record<string, any>
  ticket_state?: Record<string, any>
  ticket_state_id?: string
  ticket_type?: Record<string, any>
  ticket_type_id: string
  type?: string
  updated_at?: number

  // Selects a custom action instead of the plain create:
  //   'change_type'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface TicketUpdateData {
  id: string
  admin_assignee_id?: number
  attributes?: Record<string, any>
  category?: string
  contacts?: Record<string, any>
  created_at?: number
  is_shared?: boolean
  linked_objects?: Record<string, any>
  open?: boolean
  previous_ticket_state_id?: string
  skip_notifications?: boolean
  snoozed_until?: number
  team_assignee_id?: number
  ticket_attributes?: Record<string, any>
  ticket_id?: string
  ticket_parts?: Record<string, any>
  ticket_state?: Record<string, any>
  ticket_state_id?: string
  ticket_type?: Record<string, any>
  ticket_type_id?: string
  type?: string
  updated_at?: number
}

export interface TicketRemoveMatch {
  id: string
}

export interface TicketList {
  pages?: Record<string, any>
  pagination?: Record<string, any>
  query: any
  tickets?: any[]
  total_count?: number
  type?: string
}

export interface TicketListCreateData {
  pages?: Record<string, any>
  pagination?: Record<string, any>
  query: any
  tickets?: any[]
  total_count?: number
  type?: string
}

export interface TicketReply {
  attachments?: any[]
  author?: Record<string, any>
  body?: string
  created_at?: number
  id?: string
  part_type?: string
  redacted?: boolean
  skip_notifications?: boolean
  type?: string
  updated_at?: number
}

export interface TicketReplyCreateData {
  id: string
  attachments?: any[]
  author?: Record<string, any>
  body?: string
  created_at?: number
  part_type?: string
  redacted?: boolean
  skip_notifications?: boolean
  type?: string
  updated_at?: number
}

export interface TicketState {
  archived?: boolean
  category?: string
  external_label?: string
  id?: string
  internal_label?: string
  ticket_types?: Record<string, any>
  type?: string
}

export interface TicketStateListMatch {
  archived?: boolean
  category?: string
  external_label?: string
  id?: string
  internal_label?: string
  ticket_types?: Record<string, any>
  type?: string
}

export interface TicketType {
  archived?: boolean
  category?: string
  created_at?: number
  description?: string
  icon?: string
  id?: string
  is_internal?: boolean
  name?: string
  ticket_states?: Record<string, any>
  ticket_type_attributes?: Record<string, any>
  type?: string
  updated_at?: number
  workspace_id?: string
}

export interface TicketTypeLoadMatch {
  id: string
}

export interface TicketTypeListMatch {
  archived?: boolean
  category?: string
  created_at?: number
  description?: string
  icon?: string
  id?: string
  is_internal?: boolean
  name?: string
  ticket_states?: Record<string, any>
  ticket_type_attributes?: Record<string, any>
  type?: string
  updated_at?: number
  workspace_id?: string
}

export interface TicketTypeCreateData {
  archived?: boolean
  category?: string
  created_at?: number
  description?: string
  icon?: string
  id?: string
  is_internal?: boolean
  name?: string
  ticket_states?: Record<string, any>
  ticket_type_attributes?: Record<string, any>
  type?: string
  updated_at?: number
  workspace_id?: string
}

export interface TicketTypeUpdateData {
  id: string
  archived?: boolean
  category?: string
  created_at?: number
  description?: string
  icon?: string
  is_internal?: boolean
  name?: string
  ticket_states?: Record<string, any>
  ticket_type_attributes?: Record<string, any>
  type?: string
  updated_at?: number
  workspace_id?: string
}

export interface TicketTypeAttribute {
  allow_multiple_values?: boolean
  archived?: boolean
  data_type: string
  description: string
  id?: string
  list_items?: string
  multiline?: boolean
  name: string
  required_to_create?: boolean
  required_to_create_for_contacts?: boolean
  visible_on_create?: boolean
  visible_to_contacts?: boolean
}

export interface TicketTypeAttributeCreateData {
  id: string
  allow_multiple_values?: boolean
  archived?: boolean
  data_type: string
  description: string
  list_items?: string
  multiline?: boolean
  name: string
  required_to_create?: boolean
  required_to_create_for_contacts?: boolean
  visible_on_create?: boolean
  visible_to_contacts?: boolean
}

export interface TicketTypeAttributeUpdateData {
  id: string
  ticket_type_id: string
  allow_multiple_values?: boolean
  archived?: boolean
  data_type?: string
  description?: string
  list_items?: string
  multiline?: boolean
  name?: string
  required_to_create?: boolean
  required_to_create_for_contacts?: boolean
  visible_on_create?: boolean
  visible_to_contacts?: boolean
}

export interface Visitor {
  anonymous?: boolean
  app_id?: string
  avatar?: Record<string, any>
  companies?: Record<string, any>
  created_at?: number
  custom_attributes?: Record<string, any>
  do_not_track?: boolean
  email?: string
  has_hard_bounced?: boolean
  id?: string
  las_request_at?: number
  location_data?: Record<string, any>
  marked_email_as_spam?: boolean
  name?: string
  owner_id?: string
  phone?: string
  pseudonym?: string
  referrer?: string
  remote_created_at?: number
  segments?: Record<string, any>
  session_count?: number
  signed_up_at?: number
  social_profiles?: Record<string, any>
  tags?: Record<string, any>
  type?: string
  unsubscribed_from_emails?: boolean
  updated_at?: number
  user_id?: string
  utm_campaign?: string
  utm_content?: string
  utm_medium?: string
  utm_source?: string
  utm_term?: string
}

export interface VisitorLoadMatch {
  user_id: string
}

export interface VisitorUpdateData {
  anonymous?: boolean
  app_id?: string
  avatar?: Record<string, any>
  companies?: Record<string, any>
  created_at?: number
  custom_attributes?: Record<string, any>
  do_not_track?: boolean
  email?: string
  has_hard_bounced?: boolean
  id?: string
  las_request_at?: number
  location_data?: Record<string, any>
  marked_email_as_spam?: boolean
  name?: string
  owner_id?: string
  phone?: string
  pseudonym?: string
  referrer?: string
  remote_created_at?: number
  segments?: Record<string, any>
  session_count?: number
  signed_up_at?: number
  social_profiles?: Record<string, any>
  tags?: Record<string, any>
  type?: string
  unsubscribed_from_emails?: boolean
  updated_at?: number
  user_id?: string
  utm_campaign?: string
  utm_content?: string
  utm_medium?: string
  utm_source?: string
  utm_term?: string
}

export interface WhatsappMessageStatus {
  details?: string
  message?: string
}

export interface WhatsappMessageStatusLoadMatch {
  message_id: string
}

export interface WhatsappMessageStatusList {
  conversation_id: string
  created_at: number
  id: string
  status: string
  template_name?: string
  type: string
  updated_at: number
  whatsapp_message_id: string
}

export interface WhatsappMessageStatusListListMatch {
  per_page?: number
  ruleset_id: string
  starting_after?: string
}

export interface Workflow {
  attributes?: any[]
  created_at?: string
  description?: string
  embedded_rules?: any[]
  id?: string
  preferred_devices?: any[]
  snapshot?: Record<string, any>
  state?: string
  target_channels?: any[]
  targeting?: Record<string, any>
  title?: string
  trigger_type?: string
  updated_at?: string
}

export interface WorkflowLoadMatch {
  id: string
}

