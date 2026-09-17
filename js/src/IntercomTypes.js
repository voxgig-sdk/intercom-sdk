// Typed models for the Intercom SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} ActivityLog
 * @property {string} [activity_description]
 * @property {string} [activity_type]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {Object} [metadata]
 * @property {Object} [performed_by]
 */

/**
 * @typedef {Object} ActivityLogListMatch
 * @property {string} created_at_after
 * @property {string} [created_at_before]
 */

/**
 * @typedef {Object} ActivityLogEventType
 * @property {Array} [event_types]
 * @property {string} [type]
 */

/**
 * @typedef {Object} ActivityLogEventTypeListMatch
 * @property {Array} [event_types]
 * @property {string} [type]
 */

/**
 * @typedef {Object} ActivityLogList
 * @property {Array} [activity_logs]
 * @property {number} created_at_after
 * @property {number} [created_at_before]
 * @property {Array} [event_types]
 * @property {number} [page]
 * @property {Object} [pages]
 * @property {number} [per_page]
 * @property {string} [type]
 */

/**
 * @typedef {Object} ActivityLogListCreateData
 * @property {Array} [activity_logs]
 * @property {number} created_at_after
 * @property {number} [created_at_before]
 * @property {Array} [event_types]
 * @property {number} [page]
 * @property {Object} [pages]
 * @property {number} [per_page]
 * @property {string} [type]
 */

/**
 * @typedef {Object} Admin
 * @property {string} [avatar]
 * @property {boolean} [away_mode_enabled]
 * @property {boolean} [away_mode_reassign]
 * @property {number} [away_status_reason_id]
 * @property {string} [email]
 * @property {boolean} [has_inbox_seat]
 * @property {string} [id]
 * @property {string} [job_title]
 * @property {string} [name]
 * @property {Object} [role]
 * @property {Array} [team_ids]
 * @property {Object} [team_priority_level]
 * @property {string} [type]
 */

/**
 * @typedef {Object} AdminLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} AdminListMatch
 * @property {boolean} [display_avatar]
 */

/**
 * @typedef {Object} AdminUpdateData
 * @property {number} id
 * @property {string} [avatar]
 * @property {boolean} [away_mode_enabled]
 * @property {boolean} [away_mode_reassign]
 * @property {number} [away_status_reason_id]
 * @property {string} [email]
 * @property {boolean} [has_inbox_seat]
 * @property {string} [job_title]
 * @property {string} [name]
 * @property {Object} [role]
 * @property {Array} [team_ids]
 * @property {Object} [team_priority_level]
 * @property {string} [type]
 */

/**
 * @typedef {Object} AdminWithApp
 * @property {Object} [app]
 * @property {Object} [avatar]
 * @property {boolean} [away_mode_enabled]
 * @property {boolean} [away_mode_reassign]
 * @property {string} [email]
 * @property {boolean} [email_verified]
 * @property {boolean} [has_inbox_seat]
 * @property {string} [id]
 * @property {string} [job_title]
 * @property {string} [name]
 * @property {Array} [team_ids]
 * @property {string} [type]
 */

/**
 * @typedef {Object} AdminWithAppListMatch
 * @property {Object} [app]
 * @property {Object} [avatar]
 * @property {boolean} [away_mode_enabled]
 * @property {boolean} [away_mode_reassign]
 * @property {string} [email]
 * @property {boolean} [email_verified]
 * @property {boolean} [has_inbox_seat]
 * @property {string} [id]
 * @property {string} [job_title]
 * @property {string} [name]
 * @property {Array} [team_ids]
 * @property {string} [type]
 */

/**
 * @typedef {Object} AiCall
 * @property {number} [app_id]
 * @property {string} call_id
 * @property {string} [call_summary]
 * @property {Array} [call_transcript]
 * @property {Object} [data]
 * @property {string} [external_call_id]
 * @property {number} [id]
 * @property {Array} [intent]
 * @property {string} [intercom_call_id]
 * @property {string} [intercom_conversation_id]
 * @property {string} phone_number
 * @property {string} [source]
 * @property {string} [status]
 * @property {string} [user_phone_number]
 */

/**
 * @typedef {Object} AiCallLoadMatch
 * @property {string} conversation_id
 */

/**
 * @typedef {Object} AiCallCreateData
 * @property {number} [app_id]
 * @property {string} call_id
 * @property {string} [call_summary]
 * @property {Array} [call_transcript]
 * @property {Object} [data]
 * @property {string} [external_call_id]
 * @property {number} [id]
 * @property {Array} [intent]
 * @property {string} [intercom_call_id]
 * @property {string} [intercom_conversation_id]
 * @property {string} phone_number
 * @property {string} [source]
 * @property {string} [status]
 * @property {string} [user_phone_number]
 */

/**
 * @typedef {Object} AiContent
 */

/**
 * @typedef {Object} AiContentRemoveMatch
 * @property {string} source_id
 */

/**
 * @typedef {Object} Article
 * @property {boolean} [ai_chatbot_availability]
 * @property {boolean} [ai_copilot_availability]
 * @property {boolean} [ai_sales_agent_availability]
 * @property {Array} [audience_ids]
 * @property {number} author_id
 * @property {string} [body]
 * @property {string} [body_markdown]
 * @property {number} [conversions]
 * @property {number} [created_at]
 * @property {number} [created_by_id]
 * @property {string} [default_locale]
 * @property {string} [description]
 * @property {number} [draft_updated_at]
 * @property {boolean} [exclude_from_article_suggestions]
 * @property {number} [fin_involvements]
 * @property {number} [fin_resolution_rate]
 * @property {number} [fin_resolutions]
 * @property {number} [happy_reaction_percentage]
 * @property {boolean} [has_unpublished_changes]
 * @property {string} [help_center_audience]
 * @property {string} [id]
 * @property {number} [neutral_reaction_percentage]
 * @property {number} [parent_id]
 * @property {Array} [parent_ids]
 * @property {string} [parent_type]
 * @property {number} [reactions]
 * @property {number} [sad_reaction_percentage]
 * @property {string} [scheduled_publish_at]
 * @property {string} [scheduled_unpublish_at]
 * @property {string} [state]
 * @property {Object} [tags]
 * @property {string} title
 * @property {Object} [translated_content]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {number} [updated_by_id]
 * @property {string} [url]
 * @property {number} [views]
 * @property {string} [workspace_id]
 */

/**
 * @typedef {Object} ArticleLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ArticleListMatch
 * @property {boolean} [ai_chatbot_availability]
 * @property {boolean} [ai_copilot_availability]
 * @property {boolean} [ai_sales_agent_availability]
 * @property {Array} [audience_ids]
 * @property {number} [author_id]
 * @property {string} [body]
 * @property {string} [body_markdown]
 * @property {number} [conversions]
 * @property {number} [created_at]
 * @property {number} [created_by_id]
 * @property {string} [default_locale]
 * @property {string} [description]
 * @property {number} [draft_updated_at]
 * @property {boolean} [exclude_from_article_suggestions]
 * @property {number} [fin_involvements]
 * @property {number} [fin_resolution_rate]
 * @property {number} [fin_resolutions]
 * @property {number} [happy_reaction_percentage]
 * @property {boolean} [has_unpublished_changes]
 * @property {string} [help_center_audience]
 * @property {string} [id]
 * @property {number} [neutral_reaction_percentage]
 * @property {number} [parent_id]
 * @property {Array} [parent_ids]
 * @property {string} [parent_type]
 * @property {number} [reactions]
 * @property {number} [sad_reaction_percentage]
 * @property {string} [scheduled_publish_at]
 * @property {string} [scheduled_unpublish_at]
 * @property {string} [state]
 * @property {Object} [tags]
 * @property {string} [title]
 * @property {Object} [translated_content]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {number} [updated_by_id]
 * @property {string} [url]
 * @property {number} [views]
 * @property {string} [workspace_id]
 */

/**
 * @typedef {Object} ArticleCreateData
 * @property {boolean} [ai_chatbot_availability]
 * @property {boolean} [ai_copilot_availability]
 * @property {boolean} [ai_sales_agent_availability]
 * @property {Array} [audience_ids]
 * @property {number} author_id
 * @property {string} [body]
 * @property {string} [body_markdown]
 * @property {number} [conversions]
 * @property {number} [created_at]
 * @property {number} [created_by_id]
 * @property {string} [default_locale]
 * @property {string} [description]
 * @property {number} [draft_updated_at]
 * @property {boolean} [exclude_from_article_suggestions]
 * @property {number} [fin_involvements]
 * @property {number} [fin_resolution_rate]
 * @property {number} [fin_resolutions]
 * @property {number} [happy_reaction_percentage]
 * @property {boolean} [has_unpublished_changes]
 * @property {string} [help_center_audience]
 * @property {string} [id]
 * @property {number} [neutral_reaction_percentage]
 * @property {number} [parent_id]
 * @property {Array} [parent_ids]
 * @property {string} [parent_type]
 * @property {number} [reactions]
 * @property {number} [sad_reaction_percentage]
 * @property {string} [scheduled_publish_at]
 * @property {string} [scheduled_unpublish_at]
 * @property {string} [state]
 * @property {Object} [tags]
 * @property {string} title
 * @property {Object} [translated_content]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {number} [updated_by_id]
 * @property {string} [url]
 * @property {number} [views]
 * @property {string} [workspace_id]
 */

/**
 * @typedef {Object} ArticleUpdateData
 * @property {number} id
 * @property {boolean} [ai_chatbot_availability]
 * @property {boolean} [ai_copilot_availability]
 * @property {boolean} [ai_sales_agent_availability]
 * @property {Array} [audience_ids]
 * @property {number} [author_id]
 * @property {string} [body]
 * @property {string} [body_markdown]
 * @property {number} [conversions]
 * @property {number} [created_at]
 * @property {number} [created_by_id]
 * @property {string} [default_locale]
 * @property {string} [description]
 * @property {number} [draft_updated_at]
 * @property {boolean} [exclude_from_article_suggestions]
 * @property {number} [fin_involvements]
 * @property {number} [fin_resolution_rate]
 * @property {number} [fin_resolutions]
 * @property {number} [happy_reaction_percentage]
 * @property {boolean} [has_unpublished_changes]
 * @property {string} [help_center_audience]
 * @property {number} [neutral_reaction_percentage]
 * @property {number} [parent_id]
 * @property {Array} [parent_ids]
 * @property {string} [parent_type]
 * @property {number} [reactions]
 * @property {number} [sad_reaction_percentage]
 * @property {string} [scheduled_publish_at]
 * @property {string} [scheduled_unpublish_at]
 * @property {string} [state]
 * @property {Object} [tags]
 * @property {string} [title]
 * @property {Object} [translated_content]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {number} [updated_by_id]
 * @property {string} [url]
 * @property {number} [views]
 * @property {string} [workspace_id]
 */

/**
 * @typedef {Object} ArticleSearch
 * @property {Object} [data]
 * @property {Object} [pages]
 * @property {number} [total_count]
 * @property {string} [type]
 */

/**
 * @typedef {Object} ArticleSearchLoadMatch
 * @property {number} [help_center_id]
 * @property {boolean} [highlight]
 * @property {string} [phrase]
 * @property {string} [state]
 */

/**
 * @typedef {Object} ArticleVersion
 * @property {string} [article_id]
 * @property {string} [author_id]
 * @property {string} [body]
 * @property {string} [body_markdown]
 * @property {number} [created_at]
 * @property {string} [created_by_id]
 * @property {string} [created_via]
 * @property {string} [description]
 * @property {string} [from_version_id]
 * @property {string} [id]
 * @property {string} [state]
 * @property {string} [title]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} ArticleVersionLoadMatch
 * @property {number} article_id
 * @property {string} id
 * @property {string} [locale]
 */

/**
 * @typedef {Object} ArticleVersionList
 * @property {string} [id]
 */

/**
 * @typedef {Object} ArticleVersionListListMatch
 * @property {number} id
 * @property {string} [locale]
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} Audience
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Array} [predicates]
 * @property {Array} [role_predicates]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} AudienceLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AudienceListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} AudienceCreateData
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Array} [predicates]
 * @property {Array} [role_predicates]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} AudienceUpdateData
 * @property {string} id
 * @property {number} [created_at]
 * @property {string} [name]
 * @property {Array} [predicates]
 * @property {Array} [role_predicates]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} AudienceRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AwayStatusReason
 * @property {number} [created_at]
 * @property {boolean} [deleted]
 * @property {string} [emoji]
 * @property {string} [id]
 * @property {string} [label]
 * @property {number} [order]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} AwayStatusReasonListMatch
 * @property {number} [created_at]
 * @property {boolean} [deleted]
 * @property {string} [emoji]
 * @property {string} [id]
 * @property {string} [label]
 * @property {number} [order]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} Banner
 * @property {Object} [action]
 * @property {string} [body]
 * @property {Array} [client_targeting]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [position]
 * @property {boolean} [show_dismiss_button]
 * @property {string} [style]
 * @property {string} [title]
 * @property {string} [type]
 * @property {string} [view_id]
 */

/**
 * @typedef {Object} BannerListMatch
 * @property {string} contact_id
 */

/**
 * @typedef {Object} BannerDismiss
 * @property {boolean} [dismissed]
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [view_id]
 */

/**
 * @typedef {Object} BannerDismissCreateData
 * @property {string} contact_id
 * @property {string} id
 * @property {boolean} [dismissed]
 * @property {string} [type]
 * @property {string} [view_id]
 */

/**
 * @typedef {Object} Brand
 * @property {number} [created_at]
 * @property {string} [default_address_settings_id]
 * @property {string} [help_center_id]
 * @property {string} [id]
 * @property {boolean} [is_default]
 * @property {string} [name]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} BrandLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} BrandListMatch
 * @property {number} [created_at]
 * @property {string} [default_address_settings_id]
 * @property {string} [help_center_id]
 * @property {string} [id]
 * @property {boolean} [is_default]
 * @property {string} [name]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} Call
 * @property {string} [admin_id]
 * @property {*} [answered_at]
 * @property {string} [call_type]
 * @property {string} [contact_id]
 * @property {string} [conversation_id]
 * @property {*} [created_at]
 * @property {string} [direction]
 * @property {*} [ended_at]
 * @property {string} [ended_reason]
 * @property {string} [fin_recording_url]
 * @property {string} [fin_transcription_url]
 * @property {string} [id]
 * @property {*} [initiated_at]
 * @property {string} [phone]
 * @property {string} [recording_url]
 * @property {string} [state]
 * @property {string} [transcription_url]
 * @property {string} [type]
 * @property {*} [updated_at]
 */

/**
 * @typedef {Object} CallLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CallListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} CallCreateData
 * @property {string} [admin_id]
 * @property {*} [answered_at]
 * @property {string} [call_type]
 * @property {string} [contact_id]
 * @property {string} [conversation_id]
 * @property {*} [created_at]
 * @property {string} [direction]
 * @property {*} [ended_at]
 * @property {string} [ended_reason]
 * @property {string} [fin_recording_url]
 * @property {string} [fin_transcription_url]
 * @property {string} [id]
 * @property {*} [initiated_at]
 * @property {string} [phone]
 * @property {string} [recording_url]
 * @property {string} [state]
 * @property {string} [transcription_url]
 * @property {string} [type]
 * @property {*} [updated_at]
 */

/**
 * @typedef {Object} Company
 * @property {string} [app_id]
 * @property {string} [company_id]
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {string} [id]
 * @property {string} [industry]
 * @property {number} [last_request_at]
 * @property {number} [monthly_spend]
 * @property {string} [name]
 * @property {Object} [notes]
 * @property {Object} [plan]
 * @property {number} [remote_created_at]
 * @property {Object} [segments]
 * @property {number} [session_count]
 * @property {number} [size]
 * @property {Object} [tags]
 * @property {string} [type]
 * @property {boolean} [update_last_request_at]
 * @property {number} [updated_at]
 * @property {number} [user_count]
 * @property {string} [website]
 */

/**
 * @typedef {Object} CompanyLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CompanyListMatch
 * @property {string} [company_id]
 * @property {string} [name]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [segment_id]
 * @property {string} [tag_id]
 */

/**
 * @typedef {Object} CompanyCreateData
 * @property {string} [app_id]
 * @property {string} [company_id]
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {string} [id]
 * @property {string} [industry]
 * @property {number} [last_request_at]
 * @property {number} [monthly_spend]
 * @property {string} [name]
 * @property {Object} [notes]
 * @property {Object} [plan]
 * @property {number} [remote_created_at]
 * @property {Object} [segments]
 * @property {number} [session_count]
 * @property {number} [size]
 * @property {Object} [tags]
 * @property {string} [type]
 * @property {boolean} [update_last_request_at]
 * @property {number} [updated_at]
 * @property {number} [user_count]
 * @property {string} [website]
 */

/**
 * @typedef {Object} CompanyUpdateData
 * @property {string} id
 * @property {string} [app_id]
 * @property {string} [company_id]
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {string} [industry]
 * @property {number} [last_request_at]
 * @property {number} [monthly_spend]
 * @property {string} [name]
 * @property {Object} [notes]
 * @property {Object} [plan]
 * @property {number} [remote_created_at]
 * @property {Object} [segments]
 * @property {number} [session_count]
 * @property {number} [size]
 * @property {Object} [tags]
 * @property {string} [type]
 * @property {boolean} [update_last_request_at]
 * @property {number} [updated_at]
 * @property {number} [user_count]
 * @property {string} [website]
 */

/**
 * @typedef {Object} CompanyRemoveMatch
 * @property {string} contact_id
 * @property {string} id
 */

/**
 * @typedef {Object} CompanyAttachedContact
 * @property {string} [android_app_name]
 * @property {string} [android_app_version]
 * @property {string} [android_device]
 * @property {number} [android_last_seen_at]
 * @property {string} [android_os_version]
 * @property {string} [android_sdk_version]
 * @property {Object} [avatar]
 * @property {string} [browser]
 * @property {string} [browser_language]
 * @property {string} [browser_version]
 * @property {Object} [companies]
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {string} [email]
 * @property {string} [email_domain]
 * @property {string} [external_id]
 * @property {boolean} [has_hard_bounced]
 * @property {string} [id]
 * @property {string} [ios_app_name]
 * @property {string} [ios_app_version]
 * @property {string} [ios_device]
 * @property {number} [ios_last_seen_at]
 * @property {string} [ios_os_version]
 * @property {string} [ios_sdk_version]
 * @property {string} [language_override]
 * @property {number} [last_contacted_at]
 * @property {number} [last_email_clicked_at]
 * @property {number} [last_email_opened_at]
 * @property {number} [last_replied_at]
 * @property {number} [last_seen_at]
 * @property {Object} [location]
 * @property {boolean} [marked_email_as_spam]
 * @property {Array} [merge_history]
 * @property {string} [name]
 * @property {Object} [notes]
 * @property {string} [os]
 * @property {string} [owner_id]
 * @property {string} [phone]
 * @property {string} [role]
 * @property {number} [signed_up_at]
 * @property {Object} [social_profiles]
 * @property {Object} [tags]
 * @property {string} [type]
 * @property {boolean} [unsubscribed_from_emails]
 * @property {number} [updated_at]
 * @property {string} [workspace_id]
 */

/**
 * @typedef {Object} CompanyAttachedContactListMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CompanyAttachedSegment
 * @property {number} [count]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [person_type]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} CompanyAttachedSegmentListMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CompanyList
 * @property {Array} [data]
 * @property {Object} [pages]
 * @property {number} [total_count]
 * @property {string} [type]
 */

/**
 * @typedef {Object} CompanyListCreateData
 * @property {string} [order]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {Array} [data]
 * @property {Object} [pages]
 * @property {number} [total_count]
 * @property {string} [type]
 */

/**
 * @typedef {Object} CompanyScroll
 * @property {string} [app_id]
 * @property {string} [company_id]
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {string} [id]
 * @property {string} [industry]
 * @property {number} [last_request_at]
 * @property {number} [monthly_spend]
 * @property {string} [name]
 * @property {Object} [notes]
 * @property {Object} [plan]
 * @property {number} [remote_created_at]
 * @property {Object} [segments]
 * @property {number} [session_count]
 * @property {number} [size]
 * @property {Object} [tags]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {number} [user_count]
 * @property {string} [website]
 */

/**
 * @typedef {Object} CompanyScrollListMatch
 * @property {string} [scroll_param]
 */

/**
 * @typedef {Object} Contact
 * @property {string} [android_app_name]
 * @property {string} [android_app_version]
 * @property {string} [android_device]
 * @property {number} [android_last_seen_at]
 * @property {string} [android_os_version]
 * @property {string} [android_sdk_version]
 * @property {Object} [avatar]
 * @property {string} [browser]
 * @property {string} [browser_language]
 * @property {string} [browser_version]
 * @property {Object} [companies]
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {string} [email]
 * @property {string} [email_domain]
 * @property {boolean} [enabled_push_messaging]
 * @property {string} [external_id]
 * @property {boolean} [has_hard_bounced]
 * @property {string} [id]
 * @property {string} [ios_app_name]
 * @property {string} [ios_app_version]
 * @property {string} [ios_device]
 * @property {number} [ios_last_seen_at]
 * @property {string} [ios_os_version]
 * @property {string} [ios_sdk_version]
 * @property {string} [language_override]
 * @property {number} [last_contacted_at]
 * @property {number} [last_email_clicked_at]
 * @property {number} [last_email_opened_at]
 * @property {number} [last_replied_at]
 * @property {number} [last_seen_at]
 * @property {Object} [location]
 * @property {boolean} [marked_email_as_spam]
 * @property {Array} [merge_history]
 * @property {string} [name]
 * @property {Object} [notes]
 * @property {string} [os]
 * @property {string} [owner_id]
 * @property {string} [phone]
 * @property {string} [role]
 * @property {number} [signed_up_at]
 * @property {Object} [social_profiles]
 * @property {Object} [tags]
 * @property {string} [type]
 * @property {boolean} [unsubscribed_from_emails]
 * @property {number} [updated_at]
 * @property {Object} user
 * @property {Object} visitor
 * @property {string} [workspace_id]
 */

/**
 * @typedef {Object} ContactLoadMatch
 * @property {string} id
 * @property {boolean} [include_merge_history]
 */

/**
 * @typedef {Object} ContactListMatch
 * @property {boolean} [include_merge_history]
 */

/**
 * @typedef {Object} ContactCreateData
 * @property {string} [android_app_name]
 * @property {string} [android_app_version]
 * @property {string} [android_device]
 * @property {number} [android_last_seen_at]
 * @property {string} [android_os_version]
 * @property {string} [android_sdk_version]
 * @property {Object} [avatar]
 * @property {string} [browser]
 * @property {string} [browser_language]
 * @property {string} [browser_version]
 * @property {Object} [companies]
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {string} [email]
 * @property {string} [email_domain]
 * @property {boolean} [enabled_push_messaging]
 * @property {string} [external_id]
 * @property {boolean} [has_hard_bounced]
 * @property {string} [id]
 * @property {string} [ios_app_name]
 * @property {string} [ios_app_version]
 * @property {string} [ios_device]
 * @property {number} [ios_last_seen_at]
 * @property {string} [ios_os_version]
 * @property {string} [ios_sdk_version]
 * @property {string} [language_override]
 * @property {number} [last_contacted_at]
 * @property {number} [last_email_clicked_at]
 * @property {number} [last_email_opened_at]
 * @property {number} [last_replied_at]
 * @property {number} [last_seen_at]
 * @property {Object} [location]
 * @property {boolean} [marked_email_as_spam]
 * @property {Array} [merge_history]
 * @property {string} [name]
 * @property {Object} [notes]
 * @property {string} [os]
 * @property {string} [owner_id]
 * @property {string} [phone]
 * @property {string} [role]
 * @property {number} [signed_up_at]
 * @property {Object} [social_profiles]
 * @property {Object} [tags]
 * @property {string} [type]
 * @property {boolean} [unsubscribed_from_emails]
 * @property {number} [updated_at]
 * @property {Object} user
 * @property {Object} visitor
 * @property {string} [workspace_id]
 */

/**
 * @typedef {Object} ContactUpdateData
 * @property {string} id
 * @property {boolean} [include_merge_history]
 * @property {string} [android_app_name]
 * @property {string} [android_app_version]
 * @property {string} [android_device]
 * @property {number} [android_last_seen_at]
 * @property {string} [android_os_version]
 * @property {string} [android_sdk_version]
 * @property {Object} [avatar]
 * @property {string} [browser]
 * @property {string} [browser_language]
 * @property {string} [browser_version]
 * @property {Object} [companies]
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {string} [email]
 * @property {string} [email_domain]
 * @property {boolean} [enabled_push_messaging]
 * @property {string} [external_id]
 * @property {boolean} [has_hard_bounced]
 * @property {string} [ios_app_name]
 * @property {string} [ios_app_version]
 * @property {string} [ios_device]
 * @property {number} [ios_last_seen_at]
 * @property {string} [ios_os_version]
 * @property {string} [ios_sdk_version]
 * @property {string} [language_override]
 * @property {number} [last_contacted_at]
 * @property {number} [last_email_clicked_at]
 * @property {number} [last_email_opened_at]
 * @property {number} [last_replied_at]
 * @property {number} [last_seen_at]
 * @property {Object} [location]
 * @property {boolean} [marked_email_as_spam]
 * @property {Array} [merge_history]
 * @property {string} [name]
 * @property {Object} [notes]
 * @property {string} [os]
 * @property {string} [owner_id]
 * @property {string} [phone]
 * @property {string} [role]
 * @property {number} [signed_up_at]
 * @property {Object} [social_profiles]
 * @property {Object} [tags]
 * @property {string} [type]
 * @property {boolean} [unsubscribed_from_emails]
 * @property {number} [updated_at]
 * @property {Object} [user]
 * @property {Object} [visitor]
 * @property {string} [workspace_id]
 */

/**
 * @typedef {Object} ContactRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ContactAttachedCompany
 * @property {string} [app_id]
 * @property {string} [company_id]
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {string} [id]
 * @property {string} [industry]
 * @property {number} [last_request_at]
 * @property {number} [monthly_spend]
 * @property {string} [name]
 * @property {Object} [notes]
 * @property {Object} [plan]
 * @property {number} [remote_created_at]
 * @property {Object} [segments]
 * @property {number} [session_count]
 * @property {number} [size]
 * @property {Object} [tags]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {number} [user_count]
 * @property {string} [website]
 */

/**
 * @typedef {Object} ContactAttachedCompanyListMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ContactList
 * @property {Array} [data]
 * @property {Object} [pages]
 * @property {Object} [pagination]
 * @property {*} query
 * @property {Object} [sort]
 * @property {number} [total_count]
 * @property {string} [type]
 */

/**
 * @typedef {Object} ContactListCreateData
 * @property {boolean} [include_merge_history]
 * @property {Array} [data]
 * @property {Object} [pages]
 * @property {Object} [pagination]
 * @property {*} query
 * @property {Object} [sort]
 * @property {number} [total_count]
 * @property {string} [type]
 */

/**
 * @typedef {Object} ContactSegment
 * @property {number} [count]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [person_type]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} ContactSegmentListMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Content
 */

/**
 * @typedef {Object} ContentCreateData
 */

/**
 * @typedef {Object} ContentImportSource
 * @property {boolean} [apply_audience_to_existing_content]
 * @property {Array} [audience_ids]
 * @property {number} created_at
 * @property {number} id
 * @property {number} last_synced_at
 * @property {string} status
 * @property {string} sync_behavior
 * @property {string} type
 * @property {number} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} ContentImportSourceLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ContentImportSourceListMatch
 * @property {boolean} [apply_audience_to_existing_content]
 * @property {Array} [audience_ids]
 * @property {number} [created_at]
 * @property {number} [id]
 * @property {number} [last_synced_at]
 * @property {string} [status]
 * @property {string} [sync_behavior]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} ContentImportSourceCreateData
 * @property {boolean} [apply_audience_to_existing_content]
 * @property {Array} [audience_ids]
 * @property {number} created_at
 * @property {number} id
 * @property {number} last_synced_at
 * @property {string} status
 * @property {string} sync_behavior
 * @property {string} type
 * @property {number} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} ContentImportSourceUpdateData
 * @property {string} id
 * @property {boolean} [apply_audience_to_existing_content]
 * @property {Array} [audience_ids]
 * @property {number} [created_at]
 * @property {number} [last_synced_at]
 * @property {string} [status]
 * @property {string} [sync_behavior]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} ContentSearch
 * @property {Array} [data]
 * @property {Object} [pages]
 * @property {number} [total_count]
 * @property {string} [type]
 */

/**
 * @typedef {Object} ContentSearchListMatch
 * @property {Array} [any_tag_id]
 * @property {Array} [content_type]
 * @property {string} [copilot_state]
 * @property {number} [created_at_after]
 * @property {number} [created_at_before]
 * @property {Array} [created_by_id]
 * @property {string} [fin_sales_state]
 * @property {string} [fin_service_state]
 * @property {string} [folder_entity_type]
 * @property {Array} [folder_id]
 * @property {Array} [last_updated_by_id]
 * @property {Array} [locale]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [query]
 * @property {Array} [state]
 * @property {Array} [tag_id]
 * @property {string} [tag_operator]
 * @property {number} [updated_at_after]
 * @property {number} [updated_at_before]
 */

/**
 * @typedef {Object} ContentSnippet
 * @property {boolean} [ai_chatbot_availability]
 * @property {boolean} [ai_copilot_availability]
 * @property {boolean} [ai_sales_agent_availability]
 * @property {Array} [audience_ids]
 * @property {string} [body_markdown]
 * @property {number} [chatbot_availability]
 * @property {number} [copilot_availability]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {Array} [json_blocks]
 * @property {string} [locale]
 * @property {string} [title]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} ContentSnippetLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ContentSnippetListMatch
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} ContentSnippetCreateData
 * @property {boolean} [ai_chatbot_availability]
 * @property {boolean} [ai_copilot_availability]
 * @property {boolean} [ai_sales_agent_availability]
 * @property {Array} [audience_ids]
 * @property {string} [body_markdown]
 * @property {number} [chatbot_availability]
 * @property {number} [copilot_availability]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {Array} [json_blocks]
 * @property {string} [locale]
 * @property {string} [title]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} ContentSnippetUpdateData
 * @property {string} id
 * @property {boolean} [ai_chatbot_availability]
 * @property {boolean} [ai_copilot_availability]
 * @property {boolean} [ai_sales_agent_availability]
 * @property {Array} [audience_ids]
 * @property {string} [body_markdown]
 * @property {number} [chatbot_availability]
 * @property {number} [copilot_availability]
 * @property {number} [created_at]
 * @property {Array} [json_blocks]
 * @property {string} [locale]
 * @property {string} [title]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} ContentSnippetRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Conversation
 * @property {number} [admin_assignee_id]
 * @property {Object} [ai_agent]
 * @property {boolean} [ai_agent_participated]
 * @property {Array} [attachment_urls]
 * @property {string} body
 * @property {string} [brand_id]
 * @property {Object} [channel]
 * @property {Object} [company]
 * @property {string} [company_id]
 * @property {Object} [contacts]
 * @property {string} conversation_id
 * @property {Object} [conversation_parts]
 * @property {Object} [conversation_rating]
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {Array} [external_references]
 * @property {Object} [first_contact_reply]
 * @property {Object} from
 * @property {string} [id]
 * @property {Object} [linked_objects]
 * @property {Array} [monitor_evaluations]
 * @property {boolean} [open]
 * @property {string} [priority]
 * @property {boolean} [read]
 * @property {Object} [sales_agent]
 * @property {boolean} [sales_agent_participated]
 * @property {Array} [scorecards]
 * @property {Object} [sla_applied]
 * @property {number} [snoozed_until]
 * @property {Object} [source]
 * @property {string} [state]
 * @property {Object} [statistics]
 * @property {string} [subject]
 * @property {Object} [tags]
 * @property {number} [team_assignee_id]
 * @property {Object} [teammates]
 * @property {string} [title]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {number} [waiting_since]
 */

/**
 * @typedef {Object} ConversationLoadMatch
 * @property {number} id
 * @property {string} [display_a]
 * @property {boolean} [include_translation]
 */

/**
 * @typedef {Object} ConversationListMatch
 * @property {number} [per_page]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} ConversationCreateData
 * @property {number} [admin_assignee_id]
 * @property {Object} [ai_agent]
 * @property {boolean} [ai_agent_participated]
 * @property {Array} [attachment_urls]
 * @property {string} body
 * @property {string} [brand_id]
 * @property {Object} [channel]
 * @property {Object} [company]
 * @property {string} [company_id]
 * @property {Object} [contacts]
 * @property {string} conversation_id
 * @property {Object} [conversation_parts]
 * @property {Object} [conversation_rating]
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {Array} [external_references]
 * @property {Object} [first_contact_reply]
 * @property {Object} from
 * @property {string} [id]
 * @property {Object} [linked_objects]
 * @property {Array} [monitor_evaluations]
 * @property {boolean} [open]
 * @property {string} [priority]
 * @property {boolean} [read]
 * @property {Object} [sales_agent]
 * @property {boolean} [sales_agent_participated]
 * @property {Array} [scorecards]
 * @property {Object} [sla_applied]
 * @property {number} [snoozed_until]
 * @property {Object} [source]
 * @property {string} [state]
 * @property {Object} [statistics]
 * @property {string} [subject]
 * @property {Object} [tags]
 * @property {number} [team_assignee_id]
 * @property {Object} [teammates]
 * @property {string} [title]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {number} [waiting_since]
 */

/**
 * @typedef {Object} ConversationUpdateData
 * @property {number} id
 * @property {string} [display_a]
 * @property {number} [admin_assignee_id]
 * @property {Object} [ai_agent]
 * @property {boolean} [ai_agent_participated]
 * @property {Array} [attachment_urls]
 * @property {string} [body]
 * @property {string} [brand_id]
 * @property {Object} [channel]
 * @property {Object} [company]
 * @property {string} [company_id]
 * @property {Object} [contacts]
 * @property {string} [conversation_id]
 * @property {Object} [conversation_parts]
 * @property {Object} [conversation_rating]
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {Array} [external_references]
 * @property {Object} [first_contact_reply]
 * @property {Object} [from]
 * @property {Object} [linked_objects]
 * @property {Array} [monitor_evaluations]
 * @property {boolean} [open]
 * @property {string} [priority]
 * @property {boolean} [read]
 * @property {Object} [sales_agent]
 * @property {boolean} [sales_agent_participated]
 * @property {Array} [scorecards]
 * @property {Object} [sla_applied]
 * @property {number} [snoozed_until]
 * @property {Object} [source]
 * @property {string} [state]
 * @property {Object} [statistics]
 * @property {string} [subject]
 * @property {Object} [tags]
 * @property {number} [team_assignee_id]
 * @property {Object} [teammates]
 * @property {string} [title]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {number} [waiting_since]
 */

/**
 * @typedef {Object} ConversationRemoveMatch
 * @property {number} id
 * @property {boolean} [retain_metric]
 * @property {string} [ticket_id]
 */

/**
 * @typedef {Object} ConversationAttribute
 * @property {string} [admin_id]
 * @property {boolean} [archived]
 * @property {number} [created_at]
 * @property {string} [data_type]
 * @property {string} [description]
 * @property {number} [id]
 * @property {string} label
 * @property {boolean} [multiline]
 * @property {string} [name]
 * @property {Object} reference
 * @property {boolean} [required]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {Array} [visible_to_team_ids]
 */

/**
 * @typedef {Object} ConversationAttributeLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ConversationAttributeCreateData
 * @property {string} [admin_id]
 * @property {boolean} [archived]
 * @property {number} [created_at]
 * @property {string} [data_type]
 * @property {string} [description]
 * @property {number} [id]
 * @property {string} label
 * @property {boolean} [multiline]
 * @property {string} [name]
 * @property {Object} reference
 * @property {boolean} [required]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {Array} [visible_to_team_ids]
 */

/**
 * @typedef {Object} ConversationAttributeUpdateData
 * @property {number} id
 * @property {string} [admin_id]
 * @property {boolean} [archived]
 * @property {number} [created_at]
 * @property {string} [data_type]
 * @property {string} [description]
 * @property {string} [label]
 * @property {boolean} [multiline]
 * @property {string} [name]
 * @property {Object} [reference]
 * @property {boolean} [required]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {Array} [visible_to_team_ids]
 */

/**
 * @typedef {Object} ConversationAttributeRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ConversationAttributeList
 * @property {Array} [data]
 * @property {string} [type]
 */

/**
 * @typedef {Object} ConversationAttributeListListMatch
 * @property {boolean} [include_archived]
 */

/**
 * @typedef {Object} ConversationList
 * @property {Array} [conversations]
 * @property {Object} [pages]
 * @property {Object} [pagination]
 * @property {*} query
 * @property {number} [total_count]
 * @property {string} [type]
 */

/**
 * @typedef {Object} ConversationListCreateData
 * @property {boolean} [include_monitor]
 * @property {boolean} [include_scorecard]
 * @property {Array} [conversations]
 * @property {Object} [pages]
 * @property {Object} [pagination]
 * @property {*} query
 * @property {number} [total_count]
 * @property {string} [type]
 */

/**
 * @typedef {Object} ConversationParticipant
 * @property {string} [id]
 */

/**
 * @typedef {Object} ConversationParticipantCreateData
 * @property {string} id
 */

/**
 * @typedef {Object} ConversationParticipantRemoveMatch
 * @property {string} contact_id
 * @property {string} conversation_id
 */

/**
 * @typedef {Object} CustomObjectInstance
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {Array} [data]
 * @property {string} [external_created_at]
 * @property {string} [external_id]
 * @property {string} [external_updated_at]
 * @property {string} [id]
 * @property {Object} [pages]
 * @property {number} [total_count]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} CustomObjectInstanceLoadMatch
 * @property {string} id
 * @property {string} [external_id]
 * @property {number} [page]
 * @property {number} [per_page]
 * @property {string} [references_contact_id]
 * @property {string} [references_conversation_id]
 */

/**
 * @typedef {Object} CustomObjectInstanceCreateData
 * @property {string} id
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {Array} [data]
 * @property {string} [external_created_at]
 * @property {string} [external_id]
 * @property {string} [external_updated_at]
 * @property {Object} [pages]
 * @property {number} [total_count]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} CustomObjectInstanceRemoveMatch
 * @property {string} id
 * @property {string} external_id
 */

/**
 * @typedef {Object} Data
 * @property {number} created_at_after
 * @property {number} created_at_before
 * @property {string} [download_expires_at]
 * @property {string} [download_url]
 * @property {string} [id]
 * @property {string} [job_identifier]
 * @property {string} [status]
 */

/**
 * @typedef {Object} DataLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} DataCreateData
 * @property {number} created_at_after
 * @property {number} created_at_before
 * @property {string} [download_expires_at]
 * @property {string} [download_url]
 * @property {string} [id]
 * @property {string} [job_identifier]
 * @property {string} [status]
 */

/**
 * @typedef {Object} DataAttribute
 * @property {string} [admin_id]
 * @property {boolean} [api_writable]
 * @property {boolean} [archived]
 * @property {number} [created_at]
 * @property {boolean} [custom]
 * @property {string} [data_type]
 * @property {string} [description]
 * @property {string} [full_name]
 * @property {number} [id]
 * @property {string} [label]
 * @property {boolean} [messenger_writable]
 * @property {string} [model]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {string} [type]
 * @property {boolean} [ui_writable]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} DataAttributeListMatch
 * @property {boolean} [include_archived]
 * @property {string} [model]
 */

/**
 * @typedef {Object} DataAttributeCreateData
 * @property {string} [admin_id]
 * @property {boolean} [api_writable]
 * @property {boolean} [archived]
 * @property {number} [created_at]
 * @property {boolean} [custom]
 * @property {string} [data_type]
 * @property {string} [description]
 * @property {string} [full_name]
 * @property {number} [id]
 * @property {string} [label]
 * @property {boolean} [messenger_writable]
 * @property {string} [model]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {string} [type]
 * @property {boolean} [ui_writable]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} DataAttributeUpdateData
 * @property {number} id
 * @property {string} [admin_id]
 * @property {boolean} [api_writable]
 * @property {boolean} [archived]
 * @property {number} [created_at]
 * @property {boolean} [custom]
 * @property {string} [data_type]
 * @property {string} [description]
 * @property {string} [full_name]
 * @property {string} [label]
 * @property {boolean} [messenger_writable]
 * @property {string} [model]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {string} [type]
 * @property {boolean} [ui_writable]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} DataConnector
 * @property {Array} [audiences]
 * @property {string} [body]
 * @property {boolean} [bypass_authentication]
 * @property {string} [client_function_name]
 * @property {number} [client_function_timeout_ms]
 * @property {string} [configuration_response_type]
 * @property {string} [created_at]
 * @property {string} [created_by_admin_id]
 * @property {boolean} [customer_authentication]
 * @property {Array} [data_inputs]
 * @property {string} [data_transformation_type]
 * @property {string} [description]
 * @property {boolean} [direct_fin_usage]
 * @property {string} [execution_results_url]
 * @property {string} [execution_type]
 * @property {Array} [headers]
 * @property {string} [http_method]
 * @property {string} [id]
 * @property {Object} [mock_response]
 * @property {string} [name]
 * @property {Array} [object_mappings]
 * @property {Array} [response_fields]
 * @property {string} [state]
 * @property {Array} [token_ids]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [updated_by_admin_id]
 * @property {string} [url]
 * @property {boolean} [validate_missing_attributes]
 */

/**
 * @typedef {Object} DataConnectorLoadMatch
 * @property {string} id
 * @property {string} [state_version]
 */

/**
 * @typedef {Object} DataConnectorListMatch
 * @property {number} [per_page]
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} DataConnectorCreateData
 * @property {Array} [audiences]
 * @property {string} [body]
 * @property {boolean} [bypass_authentication]
 * @property {string} [client_function_name]
 * @property {number} [client_function_timeout_ms]
 * @property {string} [configuration_response_type]
 * @property {string} [created_at]
 * @property {string} [created_by_admin_id]
 * @property {boolean} [customer_authentication]
 * @property {Array} [data_inputs]
 * @property {string} [data_transformation_type]
 * @property {string} [description]
 * @property {boolean} [direct_fin_usage]
 * @property {string} [execution_results_url]
 * @property {string} [execution_type]
 * @property {Array} [headers]
 * @property {string} [http_method]
 * @property {string} [id]
 * @property {Object} [mock_response]
 * @property {string} [name]
 * @property {Array} [object_mappings]
 * @property {Array} [response_fields]
 * @property {string} [state]
 * @property {Array} [token_ids]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [updated_by_admin_id]
 * @property {string} [url]
 * @property {boolean} [validate_missing_attributes]
 */

/**
 * @typedef {Object} DataConnectorUpdateData
 * @property {string} id
 * @property {Array} [audiences]
 * @property {string} [body]
 * @property {boolean} [bypass_authentication]
 * @property {string} [client_function_name]
 * @property {number} [client_function_timeout_ms]
 * @property {string} [configuration_response_type]
 * @property {string} [created_at]
 * @property {string} [created_by_admin_id]
 * @property {boolean} [customer_authentication]
 * @property {Array} [data_inputs]
 * @property {string} [data_transformation_type]
 * @property {string} [description]
 * @property {boolean} [direct_fin_usage]
 * @property {string} [execution_results_url]
 * @property {string} [execution_type]
 * @property {Array} [headers]
 * @property {string} [http_method]
 * @property {Object} [mock_response]
 * @property {string} [name]
 * @property {Array} [object_mappings]
 * @property {Array} [response_fields]
 * @property {string} [state]
 * @property {Array} [token_ids]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [updated_by_admin_id]
 * @property {string} [url]
 * @property {boolean} [validate_missing_attributes]
 */

/**
 * @typedef {Object} DataConnectorExecutionResult
 * @property {string} [conversation_id]
 * @property {string} [created_at]
 * @property {string} [data_connector_id]
 * @property {string} [error_message]
 * @property {string} [error_type]
 * @property {number} [execution_time_ms]
 * @property {string} [http_method]
 * @property {number} [http_status]
 * @property {string} [id]
 * @property {string} [raw_response_body]
 * @property {string} [request_body]
 * @property {string} [request_url]
 * @property {string} [response_body]
 * @property {string} [source_id]
 * @property {string} [source_type]
 * @property {boolean} [success]
 * @property {string} [type]
 */

/**
 * @typedef {Object} DataConnectorExecutionResultLoadMatch
 * @property {string} data_connector_id
 * @property {string} id
 */

/**
 * @typedef {Object} DataConnectorExecutionResultList
 * @property {string} [id]
 */

/**
 * @typedef {Object} DataConnectorExecutionResultListListMatch
 * @property {string} id
 * @property {number} [end_t]
 * @property {string} [error_type]
 * @property {string} [include_body]
 * @property {number} [per_page]
 * @property {number} [start_t]
 * @property {string} [starting_after]
 * @property {string} [success]
 */

/**
 * @typedef {Object} DataEvent
 * @property {number} [created_at]
 * @property {string} [email]
 * @property {string} [event_name]
 * @property {Object} [event_summaries]
 * @property {string} [id]
 * @property {Object} [metadata]
 * @property {string} [user_id]
 */

/**
 * @typedef {Object} DataEventCreateData
 * @property {number} [created_at]
 * @property {string} [email]
 * @property {string} [event_name]
 * @property {Object} [event_summaries]
 * @property {string} [id]
 * @property {Object} [metadata]
 * @property {string} [user_id]
 */

/**
 * @typedef {Object} DataEventSummary
 * @property {number} [count]
 * @property {string} [description]
 * @property {string} [first]
 * @property {string} [last]
 * @property {string} [name]
 */

/**
 * @typedef {Object} DataEventSummaryListMatch
 * @property {Object} filter
 * @property {boolean} [summary]
 * @property {string} type
 */

/**
 * @typedef {Object} DataExport
 * @property {string} [download_expires_at]
 * @property {string} [download_url]
 * @property {string} [job_identifier]
 * @property {string} [status]
 */

/**
 * @typedef {Object} DataExportCreateData
 * @property {string} job_identifier
 * @property {string} [download_expires_at]
 * @property {string} [download_url]
 * @property {string} [status]
 */

/**
 * @typedef {Object} Deleted
 * @property {number} [deleted_at]
 * @property {string} [id]
 * @property {boolean} [metrics_retained]
 * @property {string} [type]
 */

/**
 * @typedef {Object} DeletedListMatch
 * @property {string} [order]
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} DeletedArticleObject
 */

/**
 * @typedef {Object} DeletedArticleObjectRemoveMatch
 * @property {number} article_id
 */

/**
 * @typedef {Object} DeletedCompanyObject
 */

/**
 * @typedef {Object} DeletedCompanyObjectRemoveMatch
 * @property {string} company_id
 */

/**
 * @typedef {Object} DeletedDataConnectorObject
 * @property {string} [id]
 */

/**
 * @typedef {Object} DeletedDataConnectorObjectRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} DeletedInternalArticleObject
 * @property {boolean} [ai_chatbot_availability]
 * @property {boolean} [ai_copilot_availability]
 * @property {boolean} [ai_sales_agent_availability]
 * @property {Array} [audience_ids]
 * @property {number} author_id
 * @property {string} [body]
 * @property {string} [body_markdown]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [locale]
 * @property {number} owner_id
 * @property {string} title
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} DeletedInternalArticleObjectListMatch
 * @property {boolean} [ai_chatbot_availability]
 * @property {boolean} [ai_copilot_availability]
 * @property {boolean} [ai_sales_agent_availability]
 * @property {Array} [audience_ids]
 * @property {number} [author_id]
 * @property {string} [body]
 * @property {string} [body_markdown]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [locale]
 * @property {number} [owner_id]
 * @property {string} [title]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} DeletedInternalArticleObjectCreateData
 * @property {boolean} [ai_chatbot_availability]
 * @property {boolean} [ai_copilot_availability]
 * @property {boolean} [ai_sales_agent_availability]
 * @property {Array} [audience_ids]
 * @property {number} author_id
 * @property {string} [body]
 * @property {string} [body_markdown]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [locale]
 * @property {number} owner_id
 * @property {string} title
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} DeletedInternalArticleObjectRemoveMatch
 * @property {number} internal_article_id
 */

/**
 * @typedef {Object} DeletedObject
 */

/**
 * @typedef {Object} DeletedObjectRemoveMatch
 * @property {number} news_item_id
 */

/**
 * @typedef {Object} Email
 * @property {string} [brand_id]
 * @property {number} [created_at]
 * @property {string} [domain]
 * @property {string} [email]
 * @property {number} [forwarded_email_last_received_at]
 * @property {boolean} [forwarding_enabled]
 * @property {string} [id]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {boolean} [verified]
 */

/**
 * @typedef {Object} EmailLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} EmailListMatch
 * @property {string} [brand_id]
 * @property {number} [created_at]
 * @property {string} [domain]
 * @property {string} [email]
 * @property {number} [forwarded_email_last_received_at]
 * @property {boolean} [forwarding_enabled]
 * @property {string} [id]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {boolean} [verified]
 */

/**
 * @typedef {Object} ExternalPage
 * @property {boolean} ai_agent_availability
 * @property {boolean} ai_copilot_availability
 * @property {boolean} [ai_sales_agent_availability]
 * @property {number} created_at
 * @property {string} external_id
 * @property {boolean} [fin_availability]
 * @property {string} html
 * @property {string} id
 * @property {number} last_ingested_at
 * @property {string} locale
 * @property {number} source_id
 * @property {string} title
 * @property {string} type
 * @property {number} updated_at
 * @property {string} [url]
 */

/**
 * @typedef {Object} ExternalPageLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ExternalPageListMatch
 * @property {boolean} [ai_agent_availability]
 * @property {boolean} [ai_copilot_availability]
 * @property {boolean} [ai_sales_agent_availability]
 * @property {number} [created_at]
 * @property {string} [external_id]
 * @property {boolean} [fin_availability]
 * @property {string} [html]
 * @property {string} [id]
 * @property {number} [last_ingested_at]
 * @property {string} [locale]
 * @property {number} [source_id]
 * @property {string} [title]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} ExternalPageCreateData
 * @property {boolean} ai_agent_availability
 * @property {boolean} ai_copilot_availability
 * @property {boolean} [ai_sales_agent_availability]
 * @property {number} created_at
 * @property {string} external_id
 * @property {boolean} [fin_availability]
 * @property {string} html
 * @property {string} id
 * @property {number} last_ingested_at
 * @property {string} locale
 * @property {number} source_id
 * @property {string} title
 * @property {string} type
 * @property {number} updated_at
 * @property {string} [url]
 */

/**
 * @typedef {Object} ExternalPageUpdateData
 * @property {string} id
 * @property {boolean} [ai_agent_availability]
 * @property {boolean} [ai_copilot_availability]
 * @property {boolean} [ai_sales_agent_availability]
 * @property {number} [created_at]
 * @property {string} [external_id]
 * @property {boolean} [fin_availability]
 * @property {string} [html]
 * @property {number} [last_ingested_at]
 * @property {string} [locale]
 * @property {number} [source_id]
 * @property {string} [title]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} ExternalPageRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} FinAgent
 * @property {Array} [attachments]
 * @property {Object} [conversation]
 * @property {string} [conversation_id]
 * @property {Object} [conversation_metadata]
 * @property {Object} message
 * @property {string} [rating]
 * @property {string} [remark]
 * @property {string} [status]
 * @property {Object} [user]
 */

/**
 * @typedef {Object} FinAgentCreateData
 * @property {Array} [attachments]
 * @property {Object} [conversation]
 * @property {string} [conversation_id]
 * @property {Object} [conversation_metadata]
 * @property {Object} message
 * @property {string} [rating]
 * @property {string} [remark]
 * @property {string} [status]
 * @property {Object} [user]
 */

/**
 * @typedef {Object} HandlingEvent
 * @property {string} [reason]
 * @property {Object} teammate
 * @property {string} timestamp
 * @property {string} type
 */

/**
 * @typedef {Object} HandlingEventListMatch
 * @property {string} conversation_id
 */

/**
 * @typedef {Object} HelpCenter
 * @property {Object} [ar]
 * @property {Object} [bg]
 * @property {Object} [bs]
 * @property {Object} [ca]
 * @property {number} [created_at]
 * @property {Object} [cs]
 * @property {string} [custom_domain]
 * @property {Object} [da]
 * @property {Object} [de]
 * @property {boolean} [default]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {Object} [el]
 * @property {Object} [en]
 * @property {Object} [es]
 * @property {Object} [et]
 * @property {Object} [fi]
 * @property {Object} [fr]
 * @property {string} [from_url]
 * @property {Object} [he]
 * @property {string} [help_center_id]
 * @property {Object} [hr]
 * @property {Object} [hu]
 * @property {Object} [id]
 * @property {string} [identifier]
 * @property {Object} [it]
 * @property {Object} [ja]
 * @property {Object} [ko]
 * @property {string} [locale]
 * @property {Array} [locales]
 * @property {Object} [lt]
 * @property {Object} [lv]
 * @property {Object} [mn]
 * @property {string} [name]
 * @property {Object} [nb]
 * @property {Object} [nl]
 * @property {string} [parent_id]
 * @property {Object} [pl]
 * @property {Object} [pt]
 * @property {Object} [ptBR]
 * @property {Object} [ro]
 * @property {Object} [ru]
 * @property {Object} [sl]
 * @property {Object} [sr]
 * @property {Object} [sv]
 * @property {string} [target_id]
 * @property {string} [target_type]
 * @property {Object} [tr]
 * @property {Object} [translated_content]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [url]
 * @property {Object} [vi]
 * @property {boolean} [website_turned_on]
 * @property {string} [workspace_id]
 * @property {Object} [zhCN]
 * @property {Object} [zhTW]
 */

/**
 * @typedef {Object} HelpCenterLoadMatch
 * @property {number} collection_id
 */

/**
 * @typedef {Object} HelpCenterListMatch
 * @property {Object} [ar]
 * @property {Object} [bg]
 * @property {Object} [bs]
 * @property {Object} [ca]
 * @property {number} [created_at]
 * @property {Object} [cs]
 * @property {string} [custom_domain]
 * @property {Object} [da]
 * @property {Object} [de]
 * @property {boolean} [default]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {Object} [el]
 * @property {Object} [en]
 * @property {Object} [es]
 * @property {Object} [et]
 * @property {Object} [fi]
 * @property {Object} [fr]
 * @property {string} [from_url]
 * @property {Object} [he]
 * @property {string} [help_center_id]
 * @property {Object} [hr]
 * @property {Object} [hu]
 * @property {Object} [id]
 * @property {string} [identifier]
 * @property {Object} [it]
 * @property {Object} [ja]
 * @property {Object} [ko]
 * @property {string} [locale]
 * @property {Array} [locales]
 * @property {Object} [lt]
 * @property {Object} [lv]
 * @property {Object} [mn]
 * @property {string} [name]
 * @property {Object} [nb]
 * @property {Object} [nl]
 * @property {string} [parent_id]
 * @property {Object} [pl]
 * @property {Object} [pt]
 * @property {Object} [ptBR]
 * @property {Object} [ro]
 * @property {Object} [ru]
 * @property {Object} [sl]
 * @property {Object} [sr]
 * @property {Object} [sv]
 * @property {string} [target_id]
 * @property {string} [target_type]
 * @property {Object} [tr]
 * @property {Object} [translated_content]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [url]
 * @property {Object} [vi]
 * @property {boolean} [website_turned_on]
 * @property {string} [workspace_id]
 * @property {Object} [zhCN]
 * @property {Object} [zhTW]
 */

/**
 * @typedef {Object} HelpCenterCreateData
 * @property {Object} [ar]
 * @property {Object} [bg]
 * @property {Object} [bs]
 * @property {Object} [ca]
 * @property {number} [created_at]
 * @property {Object} [cs]
 * @property {string} [custom_domain]
 * @property {Object} [da]
 * @property {Object} [de]
 * @property {boolean} [default]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {Object} [el]
 * @property {Object} [en]
 * @property {Object} [es]
 * @property {Object} [et]
 * @property {Object} [fi]
 * @property {Object} [fr]
 * @property {string} [from_url]
 * @property {Object} [he]
 * @property {string} [help_center_id]
 * @property {Object} [hr]
 * @property {Object} [hu]
 * @property {Object} [id]
 * @property {string} [identifier]
 * @property {Object} [it]
 * @property {Object} [ja]
 * @property {Object} [ko]
 * @property {string} [locale]
 * @property {Array} [locales]
 * @property {Object} [lt]
 * @property {Object} [lv]
 * @property {Object} [mn]
 * @property {string} [name]
 * @property {Object} [nb]
 * @property {Object} [nl]
 * @property {string} [parent_id]
 * @property {Object} [pl]
 * @property {Object} [pt]
 * @property {Object} [ptBR]
 * @property {Object} [ro]
 * @property {Object} [ru]
 * @property {Object} [sl]
 * @property {Object} [sr]
 * @property {Object} [sv]
 * @property {string} [target_id]
 * @property {string} [target_type]
 * @property {Object} [tr]
 * @property {Object} [translated_content]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [url]
 * @property {Object} [vi]
 * @property {boolean} [website_turned_on]
 * @property {string} [workspace_id]
 * @property {Object} [zhCN]
 * @property {Object} [zhTW]
 */

/**
 * @typedef {Object} HelpCenterUpdateData
 * @property {number} collection_id
 * @property {Object} [ar]
 * @property {Object} [bg]
 * @property {Object} [bs]
 * @property {Object} [ca]
 * @property {number} [created_at]
 * @property {Object} [cs]
 * @property {string} [custom_domain]
 * @property {Object} [da]
 * @property {Object} [de]
 * @property {boolean} [default]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {Object} [el]
 * @property {Object} [en]
 * @property {Object} [es]
 * @property {Object} [et]
 * @property {Object} [fi]
 * @property {Object} [fr]
 * @property {string} [from_url]
 * @property {Object} [he]
 * @property {string} [help_center_id]
 * @property {Object} [hr]
 * @property {Object} [hu]
 * @property {Object} [id]
 * @property {string} [identifier]
 * @property {Object} [it]
 * @property {Object} [ja]
 * @property {Object} [ko]
 * @property {string} [locale]
 * @property {Array} [locales]
 * @property {Object} [lt]
 * @property {Object} [lv]
 * @property {Object} [mn]
 * @property {string} [name]
 * @property {Object} [nb]
 * @property {Object} [nl]
 * @property {string} [parent_id]
 * @property {Object} [pl]
 * @property {Object} [pt]
 * @property {Object} [ptBR]
 * @property {Object} [ro]
 * @property {Object} [ru]
 * @property {Object} [sl]
 * @property {Object} [sr]
 * @property {Object} [sv]
 * @property {string} [target_id]
 * @property {string} [target_type]
 * @property {Object} [tr]
 * @property {Object} [translated_content]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [url]
 * @property {Object} [vi]
 * @property {boolean} [website_turned_on]
 * @property {string} [workspace_id]
 * @property {Object} [zhCN]
 * @property {Object} [zhTW]
 */

/**
 * @typedef {Object} HelpCenterRemoveMatch
 * @property {number} collection_id
 */

/**
 * @typedef {Object} InternalArticle
 * @property {boolean} [ai_chatbot_availability]
 * @property {boolean} [ai_copilot_availability]
 * @property {boolean} [ai_sales_agent_availability]
 * @property {Array} [audience_ids]
 * @property {number} [author_id]
 * @property {string} [body]
 * @property {string} [body_markdown]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [locale]
 * @property {number} [owner_id]
 * @property {string} [title]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} InternalArticleLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} InternalArticleUpdateData
 * @property {number} id
 * @property {boolean} [ai_chatbot_availability]
 * @property {boolean} [ai_copilot_availability]
 * @property {boolean} [ai_sales_agent_availability]
 * @property {Array} [audience_ids]
 * @property {number} [author_id]
 * @property {string} [body]
 * @property {string} [body_markdown]
 * @property {number} [created_at]
 * @property {string} [locale]
 * @property {number} [owner_id]
 * @property {string} [title]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} InternalArticleSearch
 * @property {Object} [data]
 * @property {Object} [pages]
 * @property {number} [total_count]
 * @property {string} [type]
 */

/**
 * @typedef {Object} InternalArticleSearchLoadMatch
 * @property {string} [folder_id]
 */

/**
 * @typedef {Object} IpAllowlist
 * @property {boolean} [enabled]
 * @property {Array} [ip_allowlist]
 * @property {string} [type]
 */

/**
 * @typedef {Object} IpAllowlistListMatch
 * @property {boolean} [enabled]
 * @property {Array} [ip_allowlist]
 * @property {string} [type]
 */

/**
 * @typedef {Object} IpAllowlistUpdateData
 * @property {boolean} [enabled]
 * @property {Array} [ip_allowlist]
 * @property {string} [type]
 */

/**
 * @typedef {Object} Job
 * @property {string} id
 * @property {string} [resource_id]
 * @property {string} [resource_type]
 * @property {string} [resource_url]
 * @property {boolean} [skip_notifications]
 * @property {string} [status]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef {Object} JobLoadMatch
 * @property {string} job_id
 */

/**
 * @typedef {Object} JobCreateData
 * @property {string} id
 * @property {string} [resource_id]
 * @property {string} [resource_type]
 * @property {string} [resource_url]
 * @property {boolean} [skip_notifications]
 * @property {string} [status]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef {Object} Macro
 * @property {Array} [available_on]
 * @property {string} [body]
 * @property {string} [body_text]
 * @property {string} [created_at]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [visible_to]
 * @property {Array} [visible_to_team_ids]
 */

/**
 * @typedef {Object} MacroLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} MacroListMatch
 * @property {number} [per_page]
 * @property {string} [starting_after]
 * @property {number} [updated_since]
 */

/**
 * @typedef {Object} MergeHistory
 * @property {number} [merged_at]
 * @property {string} [source_contact_id]
 * @property {string} [source_contact_role]
 * @property {string} [type]
 */

/**
 * @typedef {Object} MergeHistoryListMatch
 * @property {string} contact_id
 * @property {string} [cursor]
 * @property {string} [order]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} Message
 * @property {*} [bcc]
 * @property {string} body
 * @property {*} [cc]
 * @property {string} [conversation_id]
 * @property {boolean} [create_conversation_without_contact_reply]
 * @property {number} created_at
 * @property {Object} from
 * @property {string} id
 * @property {string} message_type
 * @property {string} [subject]
 * @property {string} [template]
 * @property {*} [to]
 * @property {string} type
 */

/**
 * @typedef {Object} MessageCreateData
 * @property {*} [bcc]
 * @property {string} body
 * @property {*} [cc]
 * @property {string} [conversation_id]
 * @property {boolean} [create_conversation_without_contact_reply]
 * @property {number} created_at
 * @property {Object} from
 * @property {string} id
 * @property {string} message_type
 * @property {string} [subject]
 * @property {string} [template]
 * @property {*} [to]
 * @property {string} type
 */

/**
 * @typedef {Object} NewsItem
 * @property {string} [body]
 * @property {string} [cover_image_url]
 * @property {number} [created_at]
 * @property {boolean} [deliver_silently]
 * @property {string} [id]
 * @property {Array} [labels]
 * @property {Array} [newsfeed_assignments]
 * @property {Array} [reactions]
 * @property {number} [sender_id]
 * @property {string} [state]
 * @property {string} [title]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [workspace_id]
 */

/**
 * @typedef {Object} NewsItemLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} NewsItemCreateData
 * @property {string} [body]
 * @property {string} [cover_image_url]
 * @property {number} [created_at]
 * @property {boolean} [deliver_silently]
 * @property {string} [id]
 * @property {Array} [labels]
 * @property {Array} [newsfeed_assignments]
 * @property {Array} [reactions]
 * @property {number} [sender_id]
 * @property {string} [state]
 * @property {string} [title]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [workspace_id]
 */

/**
 * @typedef {Object} NewsItemUpdateData
 * @property {number} id
 * @property {string} [body]
 * @property {string} [cover_image_url]
 * @property {number} [created_at]
 * @property {boolean} [deliver_silently]
 * @property {Array} [labels]
 * @property {Array} [newsfeed_assignments]
 * @property {Array} [reactions]
 * @property {number} [sender_id]
 * @property {string} [state]
 * @property {string} [title]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [workspace_id]
 */

/**
 * @typedef {Object} Newsfeed
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} NewsfeedLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Note
 * @property {string} [admin_id]
 * @property {Object} [author]
 * @property {string} [body]
 * @property {Object} [company]
 * @property {Object} [contact]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [type]
 */

/**
 * @typedef {Object} NoteLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} NoteListMatch
 * @property {string} company_id
 */

/**
 * @typedef {Object} NoteCreateData
 * @property {string} company_id
 * @property {string} [admin_id]
 * @property {Object} [author]
 * @property {string} [body]
 * @property {Object} [company]
 * @property {Object} [contact]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [type]
 */

/**
 * @typedef {Object} OfficeHour
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} name
 * @property {Array} time_intervals
 * @property {string} time_zone_name
 * @property {boolean} [twenty_four_seven]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} OfficeHourListMatch
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Array} [time_intervals]
 * @property {string} [time_zone_name]
 * @property {boolean} [twenty_four_seven]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} OfficeHourCreateData
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} name
 * @property {Array} time_intervals
 * @property {string} time_zone_name
 * @property {boolean} [twenty_four_seven]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} OfficeHourRemoveMatch
 * @property {string} id
 * @property {string} [office_hours_schedule_id]
 */

/**
 * @typedef {Object} OfficeHoursException
 * @property {number} [created_at]
 * @property {string} [exception_date]
 * @property {string} [exception_type]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [office_hours_schedule_id]
 * @property {boolean} [recurring_annually]
 * @property {Array} [time_intervals]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} OfficeHoursExceptionLoadMatch
 * @property {string} id
 * @property {string} office_hours_schedule_id
 */

/**
 * @typedef {Object} OfficeHoursExceptionListMatch
 * @property {string} office_hours_schedule_id
 */

/**
 * @typedef {Object} OfficeHoursExceptionCreateData
 * @property {string} office_hours_schedule_id
 * @property {number} [created_at]
 * @property {string} [exception_date]
 * @property {string} [exception_type]
 * @property {string} [id]
 * @property {string} [name]
 * @property {boolean} [recurring_annually]
 * @property {Array} [time_intervals]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} OfficeHoursExceptionUpdateData
 * @property {string} id
 * @property {string} office_hours_schedule_id
 * @property {number} [created_at]
 * @property {string} [exception_date]
 * @property {string} [exception_type]
 * @property {string} [name]
 * @property {boolean} [recurring_annually]
 * @property {Array} [time_intervals]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} OfficeHoursSchedule
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Array} [time_intervals]
 * @property {string} [time_zone_name]
 * @property {boolean} [twenty_four_seven]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} OfficeHoursScheduleLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} OfficeHoursScheduleUpdateData
 * @property {string} id
 * @property {number} [created_at]
 * @property {string} [name]
 * @property {Array} [time_intervals]
 * @property {string} [time_zone_name]
 * @property {boolean} [twenty_four_seven]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} Paginated
 * @property {Array} [data]
 * @property {Object} [pages]
 * @property {number} [total_count]
 * @property {string} [type]
 */

/**
 * @typedef {Object} PaginatedListMatch
 * @property {Array} [data]
 * @property {Object} [pages]
 * @property {number} [total_count]
 * @property {string} [type]
 */

/**
 * @typedef {Object} PhoneSwitch
 * @property {Object} [custom_attributes]
 * @property {string} [phone]
 * @property {string} [type]
 */

/**
 * @typedef {Object} PhoneSwitchCreateData
 * @property {Object} [custom_attributes]
 * @property {string} [phone]
 * @property {string} [type]
 */

/**
 * @typedef {Object} ReportingData
 * @property {string} [download_expires_at]
 * @property {string} [download_url]
 * @property {string} [job_identifier]
 * @property {string} [status]
 */

/**
 * @typedef {Object} ReportingDataLoadMatch
 * @property {string} app_id
 * @property {string} job_identifier
 * @property {string} [client_id]
 */

/**
 * @typedef {Object} ReportingDataExport
 * @property {Array} attribute_ids
 * @property {Array} [attributes]
 * @property {string} dataset_id
 * @property {string} [default_time_attribute_id]
 * @property {string} [description]
 * @property {string} [download_expires_at]
 * @property {string} [download_url]
 * @property {number} end_time
 * @property {string} [id]
 * @property {string} [job_identifier]
 * @property {string} [name]
 * @property {number} start_time
 * @property {string} [status]
 */

/**
 * @typedef {Object} ReportingDataExportListMatch
 * @property {Array} [attribute_ids]
 * @property {Array} [attributes]
 * @property {string} [dataset_id]
 * @property {string} [default_time_attribute_id]
 * @property {string} [description]
 * @property {string} [download_expires_at]
 * @property {string} [download_url]
 * @property {number} [end_time]
 * @property {string} [id]
 * @property {string} [job_identifier]
 * @property {string} [name]
 * @property {number} [start_time]
 * @property {string} [status]
 */

/**
 * @typedef {Object} ReportingDataExportCreateData
 * @property {Array} attribute_ids
 * @property {Array} [attributes]
 * @property {string} dataset_id
 * @property {string} [default_time_attribute_id]
 * @property {string} [description]
 * @property {string} [download_expires_at]
 * @property {string} [download_url]
 * @property {number} end_time
 * @property {string} [id]
 * @property {string} [job_identifier]
 * @property {string} [name]
 * @property {number} start_time
 * @property {string} [status]
 */

/**
 * @typedef {Object} Segment
 * @property {number} [count]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [person_type]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} SegmentLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} SegmentListMatch
 * @property {boolean} [include_count]
 */

/**
 * @typedef {Object} SideConversation
 * @property {Array} [conversation_parts]
 * @property {string} [side_conversation_id]
 * @property {number} [total_count]
 */

/**
 * @typedef {Object} SideConversationListMatch
 * @property {string} conversation_id
 * @property {number} [page]
 * @property {number} [per_page]
 */

/**
 * @typedef {Object} Subscription
 * @property {string} [consent_type]
 * @property {Array} [content_types]
 * @property {Object} [default_translation]
 * @property {string} [id]
 * @property {string} [state]
 * @property {Array} [translations]
 * @property {string} [type]
 */

/**
 * @typedef {Object} SubscriptionListMatch
 * @property {string} contact_id
 */

/**
 * @typedef {Object} SubscriptionCreateData
 * @property {string} contact_id
 * @property {string} [consent_type]
 * @property {Array} [content_types]
 * @property {Object} [default_translation]
 * @property {string} [id]
 * @property {string} [state]
 * @property {Array} [translations]
 * @property {string} [type]
 */

/**
 * @typedef {Object} SubscriptionRemoveMatch
 * @property {string} contact_id
 * @property {string} id
 */

/**
 * @typedef {Object} SubscriptionType
 * @property {string} [consent_type]
 * @property {Array} [content_types]
 * @property {Object} [default_translation]
 * @property {string} [id]
 * @property {string} [state]
 * @property {Array} [translations]
 * @property {string} [type]
 */

/**
 * @typedef {Object} SubscriptionTypeListMatch
 * @property {string} [consent_type]
 * @property {Array} [content_types]
 * @property {Object} [default_translation]
 * @property {string} [id]
 * @property {string} [state]
 * @property {Array} [translations]
 * @property {string} [type]
 */

/**
 * @typedef {Object} Tag
 * @property {string} [admin_id]
 * @property {number} [applied_at]
 * @property {Object} [applied_by]
 * @property {Array} [companies]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {Array} [users]
 */

/**
 * @typedef {Object} TagLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} TagListMatch
 * @property {string} [admin_id]
 * @property {number} [applied_at]
 * @property {Object} [applied_by]
 * @property {Array} [companies]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {Array} [users]
 */

/**
 * @typedef {Object} TagCreateData
 * @property {string} [admin_id]
 * @property {number} [applied_at]
 * @property {Object} [applied_by]
 * @property {Array} [companies]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {Array} [users]
 */

/**
 * @typedef {Object} TagRemoveMatch
 * @property {number} [article_id]
 * @property {string} id
 * @property {string} [contact_id]
 * @property {string} [content_snippet_id]
 * @property {string} [conversation_id]
 * @property {number} [internal_article_id]
 * @property {string} [ticket_id]
 */

/**
 * @typedef {Object} Team
 * @property {Array} [admin_ids]
 * @property {Object} [admin_priority_level]
 * @property {number} [assignment_limit]
 * @property {string} [distribution_method]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef {Object} TeamLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} TeamListMatch
 * @property {Array} [admin_ids]
 * @property {Object} [admin_priority_level]
 * @property {number} [assignment_limit]
 * @property {string} [distribution_method]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef {Object} TeamMetricList
 * @property {string} [id]
 */

/**
 * @typedef {Object} TeamMetricListListMatch
 * @property {string} id
 * @property {number} [idle_threshold]
 */

/**
 * @typedef {Object} Ticket
 * @property {number} [admin_assignee_id]
 * @property {Object} [attributes]
 * @property {string} [category]
 * @property {Object} [contacts]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {boolean} [is_shared]
 * @property {Object} [linked_objects]
 * @property {boolean} [open]
 * @property {string} [previous_ticket_state_id]
 * @property {boolean} [skip_notifications]
 * @property {number} [snoozed_until]
 * @property {number} [team_assignee_id]
 * @property {Object} [ticket_attributes]
 * @property {string} [ticket_id]
 * @property {Object} [ticket_parts]
 * @property {Object} [ticket_state]
 * @property {string} [ticket_state_id]
 * @property {Object} [ticket_type]
 * @property {string} ticket_type_id
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} TicketLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} TicketCreateData
 * @property {number} [admin_assignee_id]
 * @property {Object} [attributes]
 * @property {string} [category]
 * @property {Object} [contacts]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {boolean} [is_shared]
 * @property {Object} [linked_objects]
 * @property {boolean} [open]
 * @property {string} [previous_ticket_state_id]
 * @property {boolean} [skip_notifications]
 * @property {number} [snoozed_until]
 * @property {number} [team_assignee_id]
 * @property {Object} [ticket_attributes]
 * @property {string} [ticket_id]
 * @property {Object} [ticket_parts]
 * @property {Object} [ticket_state]
 * @property {string} [ticket_state_id]
 * @property {Object} [ticket_type]
 * @property {string} ticket_type_id
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} TicketUpdateData
 * @property {string} id
 * @property {number} [admin_assignee_id]
 * @property {Object} [attributes]
 * @property {string} [category]
 * @property {Object} [contacts]
 * @property {number} [created_at]
 * @property {boolean} [is_shared]
 * @property {Object} [linked_objects]
 * @property {boolean} [open]
 * @property {string} [previous_ticket_state_id]
 * @property {boolean} [skip_notifications]
 * @property {number} [snoozed_until]
 * @property {number} [team_assignee_id]
 * @property {Object} [ticket_attributes]
 * @property {string} [ticket_id]
 * @property {Object} [ticket_parts]
 * @property {Object} [ticket_state]
 * @property {string} [ticket_state_id]
 * @property {Object} [ticket_type]
 * @property {string} [ticket_type_id]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} TicketRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} TicketList
 * @property {Object} [pages]
 * @property {Object} [pagination]
 * @property {*} query
 * @property {Array} [tickets]
 * @property {number} [total_count]
 * @property {string} [type]
 */

/**
 * @typedef {Object} TicketListCreateData
 * @property {Object} [pages]
 * @property {Object} [pagination]
 * @property {*} query
 * @property {Array} [tickets]
 * @property {number} [total_count]
 * @property {string} [type]
 */

/**
 * @typedef {Object} TicketReply
 * @property {Array} [attachments]
 * @property {Object} [author]
 * @property {string} [body]
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [part_type]
 * @property {boolean} [redacted]
 * @property {boolean} [skip_notifications]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} TicketReplyCreateData
 * @property {string} id
 * @property {Array} [attachments]
 * @property {Object} [author]
 * @property {string} [body]
 * @property {number} [created_at]
 * @property {string} [part_type]
 * @property {boolean} [redacted]
 * @property {boolean} [skip_notifications]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} TicketState
 * @property {boolean} [archived]
 * @property {string} [category]
 * @property {string} [external_label]
 * @property {string} [id]
 * @property {string} [internal_label]
 * @property {Object} [ticket_types]
 * @property {string} [type]
 */

/**
 * @typedef {Object} TicketStateListMatch
 * @property {boolean} [archived]
 * @property {string} [category]
 * @property {string} [external_label]
 * @property {string} [id]
 * @property {string} [internal_label]
 * @property {Object} [ticket_types]
 * @property {string} [type]
 */

/**
 * @typedef {Object} TicketType
 * @property {boolean} [archived]
 * @property {string} [category]
 * @property {number} [created_at]
 * @property {string} [description]
 * @property {string} [icon]
 * @property {string} [id]
 * @property {boolean} [is_internal]
 * @property {string} [name]
 * @property {Object} [ticket_states]
 * @property {Object} [ticket_type_attributes]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [workspace_id]
 */

/**
 * @typedef {Object} TicketTypeLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} TicketTypeListMatch
 * @property {boolean} [archived]
 * @property {string} [category]
 * @property {number} [created_at]
 * @property {string} [description]
 * @property {string} [icon]
 * @property {string} [id]
 * @property {boolean} [is_internal]
 * @property {string} [name]
 * @property {Object} [ticket_states]
 * @property {Object} [ticket_type_attributes]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [workspace_id]
 */

/**
 * @typedef {Object} TicketTypeCreateData
 * @property {boolean} [archived]
 * @property {string} [category]
 * @property {number} [created_at]
 * @property {string} [description]
 * @property {string} [icon]
 * @property {string} [id]
 * @property {boolean} [is_internal]
 * @property {string} [name]
 * @property {Object} [ticket_states]
 * @property {Object} [ticket_type_attributes]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [workspace_id]
 */

/**
 * @typedef {Object} TicketTypeUpdateData
 * @property {string} id
 * @property {boolean} [archived]
 * @property {string} [category]
 * @property {number} [created_at]
 * @property {string} [description]
 * @property {string} [icon]
 * @property {boolean} [is_internal]
 * @property {string} [name]
 * @property {Object} [ticket_states]
 * @property {Object} [ticket_type_attributes]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [workspace_id]
 */

/**
 * @typedef {Object} TicketTypeAttribute
 * @property {boolean} [allow_multiple_values]
 * @property {boolean} [archived]
 * @property {string} data_type
 * @property {string} description
 * @property {string} [id]
 * @property {string} [list_items]
 * @property {boolean} [multiline]
 * @property {string} name
 * @property {boolean} [required_to_create]
 * @property {boolean} [required_to_create_for_contacts]
 * @property {boolean} [visible_on_create]
 * @property {boolean} [visible_to_contacts]
 */

/**
 * @typedef {Object} TicketTypeAttributeCreateData
 * @property {string} id
 * @property {boolean} [allow_multiple_values]
 * @property {boolean} [archived]
 * @property {string} data_type
 * @property {string} description
 * @property {string} [list_items]
 * @property {boolean} [multiline]
 * @property {string} name
 * @property {boolean} [required_to_create]
 * @property {boolean} [required_to_create_for_contacts]
 * @property {boolean} [visible_on_create]
 * @property {boolean} [visible_to_contacts]
 */

/**
 * @typedef {Object} TicketTypeAttributeUpdateData
 * @property {string} id
 * @property {string} ticket_type_id
 * @property {boolean} [allow_multiple_values]
 * @property {boolean} [archived]
 * @property {string} [data_type]
 * @property {string} [description]
 * @property {string} [list_items]
 * @property {boolean} [multiline]
 * @property {string} [name]
 * @property {boolean} [required_to_create]
 * @property {boolean} [required_to_create_for_contacts]
 * @property {boolean} [visible_on_create]
 * @property {boolean} [visible_to_contacts]
 */

/**
 * @typedef {Object} Visitor
 * @property {boolean} [anonymous]
 * @property {string} [app_id]
 * @property {Object} [avatar]
 * @property {Object} [companies]
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {boolean} [do_not_track]
 * @property {string} [email]
 * @property {boolean} [has_hard_bounced]
 * @property {string} [id]
 * @property {number} [las_request_at]
 * @property {Object} [location_data]
 * @property {boolean} [marked_email_as_spam]
 * @property {string} [name]
 * @property {string} [owner_id]
 * @property {string} [phone]
 * @property {string} [pseudonym]
 * @property {string} [referrer]
 * @property {number} [remote_created_at]
 * @property {Object} [segments]
 * @property {number} [session_count]
 * @property {number} [signed_up_at]
 * @property {Object} [social_profiles]
 * @property {Object} [tags]
 * @property {string} [type]
 * @property {boolean} [unsubscribed_from_emails]
 * @property {number} [updated_at]
 * @property {string} [user_id]
 * @property {string} [utm_campaign]
 * @property {string} [utm_content]
 * @property {string} [utm_medium]
 * @property {string} [utm_source]
 * @property {string} [utm_term]
 */

/**
 * @typedef {Object} VisitorLoadMatch
 * @property {string} user_id
 */

/**
 * @typedef {Object} VisitorUpdateData
 * @property {boolean} [anonymous]
 * @property {string} [app_id]
 * @property {Object} [avatar]
 * @property {Object} [companies]
 * @property {number} [created_at]
 * @property {Object} [custom_attributes]
 * @property {boolean} [do_not_track]
 * @property {string} [email]
 * @property {boolean} [has_hard_bounced]
 * @property {string} [id]
 * @property {number} [las_request_at]
 * @property {Object} [location_data]
 * @property {boolean} [marked_email_as_spam]
 * @property {string} [name]
 * @property {string} [owner_id]
 * @property {string} [phone]
 * @property {string} [pseudonym]
 * @property {string} [referrer]
 * @property {number} [remote_created_at]
 * @property {Object} [segments]
 * @property {number} [session_count]
 * @property {number} [signed_up_at]
 * @property {Object} [social_profiles]
 * @property {Object} [tags]
 * @property {string} [type]
 * @property {boolean} [unsubscribed_from_emails]
 * @property {number} [updated_at]
 * @property {string} [user_id]
 * @property {string} [utm_campaign]
 * @property {string} [utm_content]
 * @property {string} [utm_medium]
 * @property {string} [utm_source]
 * @property {string} [utm_term]
 */

/**
 * @typedef {Object} WhatsappMessageStatus
 * @property {string} [details]
 * @property {string} [message]
 */

/**
 * @typedef {Object} WhatsappMessageStatusLoadMatch
 * @property {string} message_id
 */

/**
 * @typedef {Object} WhatsappMessageStatusList
 * @property {string} conversation_id
 * @property {number} created_at
 * @property {string} id
 * @property {string} status
 * @property {string} [template_name]
 * @property {string} type
 * @property {number} updated_at
 * @property {string} whatsapp_message_id
 */

/**
 * @typedef {Object} WhatsappMessageStatusListListMatch
 * @property {number} [per_page]
 * @property {string} ruleset_id
 * @property {string} [starting_after]
 */

/**
 * @typedef {Object} Workflow
 * @property {Array} [attributes]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {Array} [embedded_rules]
 * @property {string} [id]
 * @property {Array} [preferred_devices]
 * @property {Object} [snapshot]
 * @property {string} [state]
 * @property {Array} [target_channels]
 * @property {Object} [targeting]
 * @property {string} [title]
 * @property {string} [trigger_type]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} WorkflowLoadMatch
 * @property {string} id
 */

