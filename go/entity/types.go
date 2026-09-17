// Typed models for the Intercom SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/intercom-sdk/go/core"
)

// ActivityLog is the typed data model for the activity_log entity.
type ActivityLog struct {
	ActivityDescription *string `json:"activity_description,omitempty"`
	ActivityType *string `json:"activity_type,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	PerformedBy *map[string]any `json:"performed_by,omitempty"`
}

// ActivityLogListMatch is the typed request payload for ActivityLog.ListTyped.
type ActivityLogListMatch struct {
	CreatedAtAfter string `json:"created_at_after"`
	CreatedAtBefore *string `json:"created_at_before,omitempty"`
}

// ActivityLogEventType is the typed data model for the activity_log_event_type entity.
type ActivityLogEventType struct {
	EventTypes *[]any `json:"event_types,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ActivityLogEventTypeListMatch is the typed request payload for ActivityLogEventType.ListTyped.
type ActivityLogEventTypeListMatch struct {
	EventTypes *[]any `json:"event_types,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ActivityLogList is the typed data model for the activity_log_list entity.
type ActivityLogList struct {
	ActivityLogs *[]any `json:"activity_logs,omitempty"`
	CreatedAtAfter int `json:"created_at_after"`
	CreatedAtBefore *int `json:"created_at_before,omitempty"`
	EventTypes *[]any `json:"event_types,omitempty"`
	Page *int `json:"page,omitempty"`
	Pages *map[string]any `json:"pages,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ActivityLogListCreateData is the typed request payload for ActivityLogList.CreateTyped.
type ActivityLogListCreateData struct {
	ActivityLogs *[]any `json:"activity_logs,omitempty"`
	CreatedAtAfter int `json:"created_at_after"`
	CreatedAtBefore *int `json:"created_at_before,omitempty"`
	EventTypes *[]any `json:"event_types,omitempty"`
	Page *int `json:"page,omitempty"`
	Pages *map[string]any `json:"pages,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Admin is the typed data model for the admin entity.
type Admin struct {
	Avatar *string `json:"avatar,omitempty"`
	AwayModeEnabled *bool `json:"away_mode_enabled,omitempty"`
	AwayModeReassign *bool `json:"away_mode_reassign,omitempty"`
	AwayStatusReasonId *int `json:"away_status_reason_id,omitempty"`
	Email *string `json:"email,omitempty"`
	HasInboxSeat *bool `json:"has_inbox_seat,omitempty"`
	Id *string `json:"id,omitempty"`
	JobTitle *string `json:"job_title,omitempty"`
	Name *string `json:"name,omitempty"`
	Role *map[string]any `json:"role,omitempty"`
	TeamIds *[]any `json:"team_ids,omitempty"`
	TeamPriorityLevel *map[string]any `json:"team_priority_level,omitempty"`
	Type *string `json:"type,omitempty"`
}

// AdminLoadMatch is the typed request payload for Admin.LoadTyped.
type AdminLoadMatch struct {
	Id int `json:"id"`
}

// AdminListMatch is the typed request payload for Admin.ListTyped.
type AdminListMatch struct {
	DisplayAvatar *bool `json:"display_avatar,omitempty"`
}

// AdminUpdateData is the typed request payload for Admin.UpdateTyped.
type AdminUpdateData struct {
	Id int `json:"id"`
	Avatar *string `json:"avatar,omitempty"`
	AwayModeEnabled *bool `json:"away_mode_enabled,omitempty"`
	AwayModeReassign *bool `json:"away_mode_reassign,omitempty"`
	AwayStatusReasonId *int `json:"away_status_reason_id,omitempty"`
	Email *string `json:"email,omitempty"`
	HasInboxSeat *bool `json:"has_inbox_seat,omitempty"`
	JobTitle *string `json:"job_title,omitempty"`
	Name *string `json:"name,omitempty"`
	Role *map[string]any `json:"role,omitempty"`
	TeamIds *[]any `json:"team_ids,omitempty"`
	TeamPriorityLevel *map[string]any `json:"team_priority_level,omitempty"`
	Type *string `json:"type,omitempty"`
}

// AdminWithApp is the typed data model for the admin_with_app entity.
type AdminWithApp struct {
	App *map[string]any `json:"app,omitempty"`
	Avatar *map[string]any `json:"avatar,omitempty"`
	AwayModeEnabled *bool `json:"away_mode_enabled,omitempty"`
	AwayModeReassign *bool `json:"away_mode_reassign,omitempty"`
	Email *string `json:"email,omitempty"`
	EmailVerified *bool `json:"email_verified,omitempty"`
	HasInboxSeat *bool `json:"has_inbox_seat,omitempty"`
	Id *string `json:"id,omitempty"`
	JobTitle *string `json:"job_title,omitempty"`
	Name *string `json:"name,omitempty"`
	TeamIds *[]any `json:"team_ids,omitempty"`
	Type *string `json:"type,omitempty"`
}

// AdminWithAppListMatch is the typed request payload for AdminWithApp.ListTyped.
type AdminWithAppListMatch struct {
	App *map[string]any `json:"app,omitempty"`
	Avatar *map[string]any `json:"avatar,omitempty"`
	AwayModeEnabled *bool `json:"away_mode_enabled,omitempty"`
	AwayModeReassign *bool `json:"away_mode_reassign,omitempty"`
	Email *string `json:"email,omitempty"`
	EmailVerified *bool `json:"email_verified,omitempty"`
	HasInboxSeat *bool `json:"has_inbox_seat,omitempty"`
	Id *string `json:"id,omitempty"`
	JobTitle *string `json:"job_title,omitempty"`
	Name *string `json:"name,omitempty"`
	TeamIds *[]any `json:"team_ids,omitempty"`
	Type *string `json:"type,omitempty"`
}

// AiCall is the typed data model for the ai_call entity.
type AiCall struct {
	AppId *int `json:"app_id,omitempty"`
	CallId string `json:"call_id"`
	CallSummary *string `json:"call_summary,omitempty"`
	CallTranscript *[]any `json:"call_transcript,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	ExternalCallId *string `json:"external_call_id,omitempty"`
	Id *int `json:"id,omitempty"`
	Intent *[]any `json:"intent,omitempty"`
	IntercomCallId *string `json:"intercom_call_id,omitempty"`
	IntercomConversationId *string `json:"intercom_conversation_id,omitempty"`
	PhoneNumber string `json:"phone_number"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	UserPhoneNumber *string `json:"user_phone_number,omitempty"`
}

// AiCallLoadMatch is the typed request payload for AiCall.LoadTyped.
type AiCallLoadMatch struct {
	ConversationId string `json:"conversation_id"`
}

// AiCallCreateData is the typed request payload for AiCall.CreateTyped.
type AiCallCreateData struct {
	AppId *int `json:"app_id,omitempty"`
	CallId string `json:"call_id"`
	CallSummary *string `json:"call_summary,omitempty"`
	CallTranscript *[]any `json:"call_transcript,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	ExternalCallId *string `json:"external_call_id,omitempty"`
	Id *int `json:"id,omitempty"`
	Intent *[]any `json:"intent,omitempty"`
	IntercomCallId *string `json:"intercom_call_id,omitempty"`
	IntercomConversationId *string `json:"intercom_conversation_id,omitempty"`
	PhoneNumber string `json:"phone_number"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	UserPhoneNumber *string `json:"user_phone_number,omitempty"`
}

// AiContent is the typed data model for the ai_content entity.
type AiContent struct {
}

// AiContentRemoveMatch is the typed request payload for AiContent.RemoveTyped.
type AiContentRemoveMatch struct {
	SourceId string `json:"source_id"`
}

// Article is the typed data model for the article entity.
type Article struct {
	AiChatbotAvailability *bool `json:"ai_chatbot_availability,omitempty"`
	AiCopilotAvailability *bool `json:"ai_copilot_availability,omitempty"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	AuthorId int `json:"author_id"`
	Body *string `json:"body,omitempty"`
	BodyMarkdown *string `json:"body_markdown,omitempty"`
	Conversions *int `json:"conversions,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CreatedById *int `json:"created_by_id,omitempty"`
	DefaultLocale *string `json:"default_locale,omitempty"`
	Description *string `json:"description,omitempty"`
	DraftUpdatedAt *int `json:"draft_updated_at,omitempty"`
	ExcludeFromArticleSuggestions *bool `json:"exclude_from_article_suggestions,omitempty"`
	FinInvolvements *int `json:"fin_involvements,omitempty"`
	FinResolutionRate *float64 `json:"fin_resolution_rate,omitempty"`
	FinResolutions *int `json:"fin_resolutions,omitempty"`
	HappyReactionPercentage *float64 `json:"happy_reaction_percentage,omitempty"`
	HasUnpublishedChanges *bool `json:"has_unpublished_changes,omitempty"`
	HelpCenterAudience *string `json:"help_center_audience,omitempty"`
	Id *string `json:"id,omitempty"`
	NeutralReactionPercentage *float64 `json:"neutral_reaction_percentage,omitempty"`
	ParentId *int `json:"parent_id,omitempty"`
	ParentIds *[]any `json:"parent_ids,omitempty"`
	ParentType *string `json:"parent_type,omitempty"`
	Reactions *int `json:"reactions,omitempty"`
	SadReactionPercentage *float64 `json:"sad_reaction_percentage,omitempty"`
	ScheduledPublishAt *string `json:"scheduled_publish_at,omitempty"`
	ScheduledUnpublishAt *string `json:"scheduled_unpublish_at,omitempty"`
	State *string `json:"state,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Title string `json:"title"`
	TranslatedContent *map[string]any `json:"translated_content,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	UpdatedById *int `json:"updated_by_id,omitempty"`
	Url *string `json:"url,omitempty"`
	Views *int `json:"views,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ArticleLoadMatch is the typed request payload for Article.LoadTyped.
type ArticleLoadMatch struct {
	Id int `json:"id"`
}

// ArticleListMatch is the typed request payload for Article.ListTyped.
type ArticleListMatch struct {
	AiChatbotAvailability *bool `json:"ai_chatbot_availability,omitempty"`
	AiCopilotAvailability *bool `json:"ai_copilot_availability,omitempty"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	AuthorId *int `json:"author_id,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyMarkdown *string `json:"body_markdown,omitempty"`
	Conversions *int `json:"conversions,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CreatedById *int `json:"created_by_id,omitempty"`
	DefaultLocale *string `json:"default_locale,omitempty"`
	Description *string `json:"description,omitempty"`
	DraftUpdatedAt *int `json:"draft_updated_at,omitempty"`
	ExcludeFromArticleSuggestions *bool `json:"exclude_from_article_suggestions,omitempty"`
	FinInvolvements *int `json:"fin_involvements,omitempty"`
	FinResolutionRate *float64 `json:"fin_resolution_rate,omitempty"`
	FinResolutions *int `json:"fin_resolutions,omitempty"`
	HappyReactionPercentage *float64 `json:"happy_reaction_percentage,omitempty"`
	HasUnpublishedChanges *bool `json:"has_unpublished_changes,omitempty"`
	HelpCenterAudience *string `json:"help_center_audience,omitempty"`
	Id *string `json:"id,omitempty"`
	NeutralReactionPercentage *float64 `json:"neutral_reaction_percentage,omitempty"`
	ParentId *int `json:"parent_id,omitempty"`
	ParentIds *[]any `json:"parent_ids,omitempty"`
	ParentType *string `json:"parent_type,omitempty"`
	Reactions *int `json:"reactions,omitempty"`
	SadReactionPercentage *float64 `json:"sad_reaction_percentage,omitempty"`
	ScheduledPublishAt *string `json:"scheduled_publish_at,omitempty"`
	ScheduledUnpublishAt *string `json:"scheduled_unpublish_at,omitempty"`
	State *string `json:"state,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Title *string `json:"title,omitempty"`
	TranslatedContent *map[string]any `json:"translated_content,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	UpdatedById *int `json:"updated_by_id,omitempty"`
	Url *string `json:"url,omitempty"`
	Views *int `json:"views,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ArticleCreateData is the typed request payload for Article.CreateTyped.
type ArticleCreateData struct {
	AiChatbotAvailability *bool `json:"ai_chatbot_availability,omitempty"`
	AiCopilotAvailability *bool `json:"ai_copilot_availability,omitempty"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	AuthorId int `json:"author_id"`
	Body *string `json:"body,omitempty"`
	BodyMarkdown *string `json:"body_markdown,omitempty"`
	Conversions *int `json:"conversions,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CreatedById *int `json:"created_by_id,omitempty"`
	DefaultLocale *string `json:"default_locale,omitempty"`
	Description *string `json:"description,omitempty"`
	DraftUpdatedAt *int `json:"draft_updated_at,omitempty"`
	ExcludeFromArticleSuggestions *bool `json:"exclude_from_article_suggestions,omitempty"`
	FinInvolvements *int `json:"fin_involvements,omitempty"`
	FinResolutionRate *float64 `json:"fin_resolution_rate,omitempty"`
	FinResolutions *int `json:"fin_resolutions,omitempty"`
	HappyReactionPercentage *float64 `json:"happy_reaction_percentage,omitempty"`
	HasUnpublishedChanges *bool `json:"has_unpublished_changes,omitempty"`
	HelpCenterAudience *string `json:"help_center_audience,omitempty"`
	Id *string `json:"id,omitempty"`
	NeutralReactionPercentage *float64 `json:"neutral_reaction_percentage,omitempty"`
	ParentId *int `json:"parent_id,omitempty"`
	ParentIds *[]any `json:"parent_ids,omitempty"`
	ParentType *string `json:"parent_type,omitempty"`
	Reactions *int `json:"reactions,omitempty"`
	SadReactionPercentage *float64 `json:"sad_reaction_percentage,omitempty"`
	ScheduledPublishAt *string `json:"scheduled_publish_at,omitempty"`
	ScheduledUnpublishAt *string `json:"scheduled_unpublish_at,omitempty"`
	State *string `json:"state,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Title string `json:"title"`
	TranslatedContent *map[string]any `json:"translated_content,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	UpdatedById *int `json:"updated_by_id,omitempty"`
	Url *string `json:"url,omitempty"`
	Views *int `json:"views,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ArticleUpdateData is the typed request payload for Article.UpdateTyped.
type ArticleUpdateData struct {
	Id int `json:"id"`
	AiChatbotAvailability *bool `json:"ai_chatbot_availability,omitempty"`
	AiCopilotAvailability *bool `json:"ai_copilot_availability,omitempty"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	AuthorId *int `json:"author_id,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyMarkdown *string `json:"body_markdown,omitempty"`
	Conversions *int `json:"conversions,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CreatedById *int `json:"created_by_id,omitempty"`
	DefaultLocale *string `json:"default_locale,omitempty"`
	Description *string `json:"description,omitempty"`
	DraftUpdatedAt *int `json:"draft_updated_at,omitempty"`
	ExcludeFromArticleSuggestions *bool `json:"exclude_from_article_suggestions,omitempty"`
	FinInvolvements *int `json:"fin_involvements,omitempty"`
	FinResolutionRate *float64 `json:"fin_resolution_rate,omitempty"`
	FinResolutions *int `json:"fin_resolutions,omitempty"`
	HappyReactionPercentage *float64 `json:"happy_reaction_percentage,omitempty"`
	HasUnpublishedChanges *bool `json:"has_unpublished_changes,omitempty"`
	HelpCenterAudience *string `json:"help_center_audience,omitempty"`
	NeutralReactionPercentage *float64 `json:"neutral_reaction_percentage,omitempty"`
	ParentId *int `json:"parent_id,omitempty"`
	ParentIds *[]any `json:"parent_ids,omitempty"`
	ParentType *string `json:"parent_type,omitempty"`
	Reactions *int `json:"reactions,omitempty"`
	SadReactionPercentage *float64 `json:"sad_reaction_percentage,omitempty"`
	ScheduledPublishAt *string `json:"scheduled_publish_at,omitempty"`
	ScheduledUnpublishAt *string `json:"scheduled_unpublish_at,omitempty"`
	State *string `json:"state,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Title *string `json:"title,omitempty"`
	TranslatedContent *map[string]any `json:"translated_content,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	UpdatedById *int `json:"updated_by_id,omitempty"`
	Url *string `json:"url,omitempty"`
	Views *int `json:"views,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ArticleSearch is the typed data model for the article_search entity.
type ArticleSearch struct {
	Data *map[string]any `json:"data,omitempty"`
	Pages *map[string]any `json:"pages,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ArticleSearchLoadMatch is the typed request payload for ArticleSearch.LoadTyped.
type ArticleSearchLoadMatch struct {
	HelpCenterId *int `json:"help_center_id,omitempty"`
	Highlight *bool `json:"highlight,omitempty"`
	Phrase *string `json:"phrase,omitempty"`
	State *string `json:"state,omitempty"`
}

// ArticleVersion is the typed data model for the article_version entity.
type ArticleVersion struct {
	ArticleId *string `json:"article_id,omitempty"`
	AuthorId *string `json:"author_id,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyMarkdown *string `json:"body_markdown,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CreatedById *string `json:"created_by_id,omitempty"`
	CreatedVia *string `json:"created_via,omitempty"`
	Description *string `json:"description,omitempty"`
	FromVersionId *string `json:"from_version_id,omitempty"`
	Id *string `json:"id,omitempty"`
	State *string `json:"state,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// ArticleVersionLoadMatch is the typed request payload for ArticleVersion.LoadTyped.
type ArticleVersionLoadMatch struct {
	ArticleId int `json:"article_id"`
	Id string `json:"id"`
	Locale *string `json:"locale,omitempty"`
}

// ArticleVersionList is the typed data model for the article_version_list entity.
type ArticleVersionList struct {
	Id *string `json:"id,omitempty"`
}

// ArticleVersionListListMatch is the typed request payload for ArticleVersionList.ListTyped.
type ArticleVersionListListMatch struct {
	Id int `json:"id"`
	Locale *string `json:"locale,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Audience is the typed data model for the audience entity.
type Audience struct {
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Predicates *[]any `json:"predicates,omitempty"`
	RolePredicates *[]any `json:"role_predicates,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// AudienceLoadMatch is the typed request payload for Audience.LoadTyped.
type AudienceLoadMatch struct {
	Id string `json:"id"`
}

// AudienceListMatch is the typed request payload for Audience.ListTyped.
type AudienceListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// AudienceCreateData is the typed request payload for Audience.CreateTyped.
type AudienceCreateData struct {
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Predicates *[]any `json:"predicates,omitempty"`
	RolePredicates *[]any `json:"role_predicates,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// AudienceUpdateData is the typed request payload for Audience.UpdateTyped.
type AudienceUpdateData struct {
	Id string `json:"id"`
	CreatedAt *int `json:"created_at,omitempty"`
	Name *string `json:"name,omitempty"`
	Predicates *[]any `json:"predicates,omitempty"`
	RolePredicates *[]any `json:"role_predicates,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// AudienceRemoveMatch is the typed request payload for Audience.RemoveTyped.
type AudienceRemoveMatch struct {
	Id string `json:"id"`
}

// AwayStatusReason is the typed data model for the away_status_reason entity.
type AwayStatusReason struct {
	CreatedAt *int `json:"created_at,omitempty"`
	Deleted *bool `json:"deleted,omitempty"`
	Emoji *string `json:"emoji,omitempty"`
	Id *string `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
	Order *int `json:"order,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// AwayStatusReasonListMatch is the typed request payload for AwayStatusReason.ListTyped.
type AwayStatusReasonListMatch struct {
	CreatedAt *int `json:"created_at,omitempty"`
	Deleted *bool `json:"deleted,omitempty"`
	Emoji *string `json:"emoji,omitempty"`
	Id *string `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
	Order *int `json:"order,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// Banner is the typed data model for the banner entity.
type Banner struct {
	Action *map[string]any `json:"action,omitempty"`
	Body *string `json:"body,omitempty"`
	ClientTargeting *[]any `json:"client_targeting,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Position *string `json:"position,omitempty"`
	ShowDismissButton *bool `json:"show_dismiss_button,omitempty"`
	Style *string `json:"style,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	ViewId *string `json:"view_id,omitempty"`
}

// BannerListMatch is the typed request payload for Banner.ListTyped.
type BannerListMatch struct {
	ContactId string `json:"contact_id"`
}

// BannerDismiss is the typed data model for the banner_dismiss entity.
type BannerDismiss struct {
	Dismissed *bool `json:"dismissed,omitempty"`
	Id *string `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
	ViewId *string `json:"view_id,omitempty"`
}

// BannerDismissCreateData is the typed request payload for BannerDismiss.CreateTyped.
type BannerDismissCreateData struct {
	ContactId string `json:"contact_id"`
	Id string `json:"id"`
	Dismissed *bool `json:"dismissed,omitempty"`
	Type *string `json:"type,omitempty"`
	ViewId *string `json:"view_id,omitempty"`
}

// Brand is the typed data model for the brand entity.
type Brand struct {
	CreatedAt *int `json:"created_at,omitempty"`
	DefaultAddressSettingsId *string `json:"default_address_settings_id,omitempty"`
	HelpCenterId *string `json:"help_center_id,omitempty"`
	Id *string `json:"id,omitempty"`
	IsDefault *bool `json:"is_default,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// BrandLoadMatch is the typed request payload for Brand.LoadTyped.
type BrandLoadMatch struct {
	Id string `json:"id"`
}

// BrandListMatch is the typed request payload for Brand.ListTyped.
type BrandListMatch struct {
	CreatedAt *int `json:"created_at,omitempty"`
	DefaultAddressSettingsId *string `json:"default_address_settings_id,omitempty"`
	HelpCenterId *string `json:"help_center_id,omitempty"`
	Id *string `json:"id,omitempty"`
	IsDefault *bool `json:"is_default,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// Call is the typed data model for the call entity.
type Call struct {
	AdminId *string `json:"admin_id,omitempty"`
	AnsweredAt *any `json:"answered_at,omitempty"`
	CallType *string `json:"call_type,omitempty"`
	ContactId *string `json:"contact_id,omitempty"`
	ConversationId *string `json:"conversation_id,omitempty"`
	CreatedAt *any `json:"created_at,omitempty"`
	Direction *string `json:"direction,omitempty"`
	EndedAt *any `json:"ended_at,omitempty"`
	EndedReason *string `json:"ended_reason,omitempty"`
	FinRecordingUrl *string `json:"fin_recording_url,omitempty"`
	FinTranscriptionUrl *string `json:"fin_transcription_url,omitempty"`
	Id *string `json:"id,omitempty"`
	InitiatedAt *any `json:"initiated_at,omitempty"`
	Phone *string `json:"phone,omitempty"`
	RecordingUrl *string `json:"recording_url,omitempty"`
	State *string `json:"state,omitempty"`
	TranscriptionUrl *string `json:"transcription_url,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *any `json:"updated_at,omitempty"`
}

// CallLoadMatch is the typed request payload for Call.LoadTyped.
type CallLoadMatch struct {
	Id string `json:"id"`
}

// CallListMatch is the typed request payload for Call.ListTyped.
type CallListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// CallCreateData is the typed request payload for Call.CreateTyped.
type CallCreateData struct {
	AdminId *string `json:"admin_id,omitempty"`
	AnsweredAt *any `json:"answered_at,omitempty"`
	CallType *string `json:"call_type,omitempty"`
	ContactId *string `json:"contact_id,omitempty"`
	ConversationId *string `json:"conversation_id,omitempty"`
	CreatedAt *any `json:"created_at,omitempty"`
	Direction *string `json:"direction,omitempty"`
	EndedAt *any `json:"ended_at,omitempty"`
	EndedReason *string `json:"ended_reason,omitempty"`
	FinRecordingUrl *string `json:"fin_recording_url,omitempty"`
	FinTranscriptionUrl *string `json:"fin_transcription_url,omitempty"`
	Id *string `json:"id,omitempty"`
	InitiatedAt *any `json:"initiated_at,omitempty"`
	Phone *string `json:"phone,omitempty"`
	RecordingUrl *string `json:"recording_url,omitempty"`
	State *string `json:"state,omitempty"`
	TranscriptionUrl *string `json:"transcription_url,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *any `json:"updated_at,omitempty"`
}

// Company is the typed data model for the company entity.
type Company struct {
	AppId *string `json:"app_id,omitempty"`
	CompanyId *string `json:"company_id,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	Id *string `json:"id,omitempty"`
	Industry *string `json:"industry,omitempty"`
	LastRequestAt *int `json:"last_request_at,omitempty"`
	MonthlySpend *int `json:"monthly_spend,omitempty"`
	Name *string `json:"name,omitempty"`
	Notes *map[string]any `json:"notes,omitempty"`
	Plan *map[string]any `json:"plan,omitempty"`
	RemoteCreatedAt *int `json:"remote_created_at,omitempty"`
	Segments *map[string]any `json:"segments,omitempty"`
	SessionCount *int `json:"session_count,omitempty"`
	Size *int `json:"size,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdateLastRequestAt *bool `json:"update_last_request_at,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	UserCount *int `json:"user_count,omitempty"`
	Website *string `json:"website,omitempty"`
}

// CompanyLoadMatch is the typed request payload for Company.LoadTyped.
type CompanyLoadMatch struct {
	Id string `json:"id"`
}

// CompanyListMatch is the typed request payload for Company.ListTyped.
type CompanyListMatch struct {
	CompanyId *string `json:"company_id,omitempty"`
	Name *string `json:"name,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	SegmentId *string `json:"segment_id,omitempty"`
	TagId *string `json:"tag_id,omitempty"`
}

// CompanyCreateData is the typed request payload for Company.CreateTyped.
type CompanyCreateData struct {
	AppId *string `json:"app_id,omitempty"`
	CompanyId *string `json:"company_id,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	Id *string `json:"id,omitempty"`
	Industry *string `json:"industry,omitempty"`
	LastRequestAt *int `json:"last_request_at,omitempty"`
	MonthlySpend *int `json:"monthly_spend,omitempty"`
	Name *string `json:"name,omitempty"`
	Notes *map[string]any `json:"notes,omitempty"`
	Plan *map[string]any `json:"plan,omitempty"`
	RemoteCreatedAt *int `json:"remote_created_at,omitempty"`
	Segments *map[string]any `json:"segments,omitempty"`
	SessionCount *int `json:"session_count,omitempty"`
	Size *int `json:"size,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdateLastRequestAt *bool `json:"update_last_request_at,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	UserCount *int `json:"user_count,omitempty"`
	Website *string `json:"website,omitempty"`
}

// CompanyUpdateData is the typed request payload for Company.UpdateTyped.
type CompanyUpdateData struct {
	Id string `json:"id"`
	AppId *string `json:"app_id,omitempty"`
	CompanyId *string `json:"company_id,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	Industry *string `json:"industry,omitempty"`
	LastRequestAt *int `json:"last_request_at,omitempty"`
	MonthlySpend *int `json:"monthly_spend,omitempty"`
	Name *string `json:"name,omitempty"`
	Notes *map[string]any `json:"notes,omitempty"`
	Plan *map[string]any `json:"plan,omitempty"`
	RemoteCreatedAt *int `json:"remote_created_at,omitempty"`
	Segments *map[string]any `json:"segments,omitempty"`
	SessionCount *int `json:"session_count,omitempty"`
	Size *int `json:"size,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdateLastRequestAt *bool `json:"update_last_request_at,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	UserCount *int `json:"user_count,omitempty"`
	Website *string `json:"website,omitempty"`
}

// CompanyRemoveMatch is the typed request payload for Company.RemoveTyped.
type CompanyRemoveMatch struct {
	ContactId string `json:"contact_id"`
	Id string `json:"id"`
}

// CompanyAttachedContact is the typed data model for the company_attached_contact entity.
type CompanyAttachedContact struct {
	AndroidAppName *string `json:"android_app_name,omitempty"`
	AndroidAppVersion *string `json:"android_app_version,omitempty"`
	AndroidDevice *string `json:"android_device,omitempty"`
	AndroidLastSeenAt *int `json:"android_last_seen_at,omitempty"`
	AndroidOsVersion *string `json:"android_os_version,omitempty"`
	AndroidSdkVersion *string `json:"android_sdk_version,omitempty"`
	Avatar *map[string]any `json:"avatar,omitempty"`
	Browser *string `json:"browser,omitempty"`
	BrowserLanguage *string `json:"browser_language,omitempty"`
	BrowserVersion *string `json:"browser_version,omitempty"`
	Companies *map[string]any `json:"companies,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	Email *string `json:"email,omitempty"`
	EmailDomain *string `json:"email_domain,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	HasHardBounced *bool `json:"has_hard_bounced,omitempty"`
	Id *string `json:"id,omitempty"`
	IosAppName *string `json:"ios_app_name,omitempty"`
	IosAppVersion *string `json:"ios_app_version,omitempty"`
	IosDevice *string `json:"ios_device,omitempty"`
	IosLastSeenAt *int `json:"ios_last_seen_at,omitempty"`
	IosOsVersion *string `json:"ios_os_version,omitempty"`
	IosSdkVersion *string `json:"ios_sdk_version,omitempty"`
	LanguageOverride *string `json:"language_override,omitempty"`
	LastContactedAt *int `json:"last_contacted_at,omitempty"`
	LastEmailClickedAt *int `json:"last_email_clicked_at,omitempty"`
	LastEmailOpenedAt *int `json:"last_email_opened_at,omitempty"`
	LastRepliedAt *int `json:"last_replied_at,omitempty"`
	LastSeenAt *int `json:"last_seen_at,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	MarkedEmailAsSpam *bool `json:"marked_email_as_spam,omitempty"`
	MergeHistory *[]any `json:"merge_history,omitempty"`
	Name *string `json:"name,omitempty"`
	Notes *map[string]any `json:"notes,omitempty"`
	Os *string `json:"os,omitempty"`
	OwnerId *string `json:"owner_id,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Role *string `json:"role,omitempty"`
	SignedUpAt *int `json:"signed_up_at,omitempty"`
	SocialProfiles *map[string]any `json:"social_profiles,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	UnsubscribedFromEmails *bool `json:"unsubscribed_from_emails,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// CompanyAttachedContactListMatch is the typed request payload for CompanyAttachedContact.ListTyped.
type CompanyAttachedContactListMatch struct {
	Id string `json:"id"`
}

// CompanyAttachedSegment is the typed data model for the company_attached_segment entity.
type CompanyAttachedSegment struct {
	Count *int `json:"count,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	PersonType *string `json:"person_type,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// CompanyAttachedSegmentListMatch is the typed request payload for CompanyAttachedSegment.ListTyped.
type CompanyAttachedSegmentListMatch struct {
	Id string `json:"id"`
}

// CompanyList is the typed data model for the company_list entity.
type CompanyList struct {
	Data *[]any `json:"data,omitempty"`
	Pages *map[string]any `json:"pages,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	Type *string `json:"type,omitempty"`
}

// CompanyListCreateData is the typed request payload for CompanyList.CreateTyped.
type CompanyListCreateData struct {
	Order *string `json:"order,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Pages *map[string]any `json:"pages,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	Type *string `json:"type,omitempty"`
}

// CompanyScroll is the typed data model for the company_scroll entity.
type CompanyScroll struct {
	AppId *string `json:"app_id,omitempty"`
	CompanyId *string `json:"company_id,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	Id *string `json:"id,omitempty"`
	Industry *string `json:"industry,omitempty"`
	LastRequestAt *int `json:"last_request_at,omitempty"`
	MonthlySpend *int `json:"monthly_spend,omitempty"`
	Name *string `json:"name,omitempty"`
	Notes *map[string]any `json:"notes,omitempty"`
	Plan *map[string]any `json:"plan,omitempty"`
	RemoteCreatedAt *int `json:"remote_created_at,omitempty"`
	Segments *map[string]any `json:"segments,omitempty"`
	SessionCount *int `json:"session_count,omitempty"`
	Size *int `json:"size,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	UserCount *int `json:"user_count,omitempty"`
	Website *string `json:"website,omitempty"`
}

// CompanyScrollListMatch is the typed request payload for CompanyScroll.ListTyped.
type CompanyScrollListMatch struct {
	ScrollParam *string `json:"scroll_param,omitempty"`
}

// Contact is the typed data model for the contact entity.
type Contact struct {
	AndroidAppName *string `json:"android_app_name,omitempty"`
	AndroidAppVersion *string `json:"android_app_version,omitempty"`
	AndroidDevice *string `json:"android_device,omitempty"`
	AndroidLastSeenAt *int `json:"android_last_seen_at,omitempty"`
	AndroidOsVersion *string `json:"android_os_version,omitempty"`
	AndroidSdkVersion *string `json:"android_sdk_version,omitempty"`
	Avatar *map[string]any `json:"avatar,omitempty"`
	Browser *string `json:"browser,omitempty"`
	BrowserLanguage *string `json:"browser_language,omitempty"`
	BrowserVersion *string `json:"browser_version,omitempty"`
	Companies *map[string]any `json:"companies,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	Email *string `json:"email,omitempty"`
	EmailDomain *string `json:"email_domain,omitempty"`
	EnabledPushMessaging *bool `json:"enabled_push_messaging,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	HasHardBounced *bool `json:"has_hard_bounced,omitempty"`
	Id *string `json:"id,omitempty"`
	IosAppName *string `json:"ios_app_name,omitempty"`
	IosAppVersion *string `json:"ios_app_version,omitempty"`
	IosDevice *string `json:"ios_device,omitempty"`
	IosLastSeenAt *int `json:"ios_last_seen_at,omitempty"`
	IosOsVersion *string `json:"ios_os_version,omitempty"`
	IosSdkVersion *string `json:"ios_sdk_version,omitempty"`
	LanguageOverride *string `json:"language_override,omitempty"`
	LastContactedAt *int `json:"last_contacted_at,omitempty"`
	LastEmailClickedAt *int `json:"last_email_clicked_at,omitempty"`
	LastEmailOpenedAt *int `json:"last_email_opened_at,omitempty"`
	LastRepliedAt *int `json:"last_replied_at,omitempty"`
	LastSeenAt *int `json:"last_seen_at,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	MarkedEmailAsSpam *bool `json:"marked_email_as_spam,omitempty"`
	MergeHistory *[]any `json:"merge_history,omitempty"`
	Name *string `json:"name,omitempty"`
	Notes *map[string]any `json:"notes,omitempty"`
	Os *string `json:"os,omitempty"`
	OwnerId *string `json:"owner_id,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Role *string `json:"role,omitempty"`
	SignedUpAt *int `json:"signed_up_at,omitempty"`
	SocialProfiles *map[string]any `json:"social_profiles,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	UnsubscribedFromEmails *bool `json:"unsubscribed_from_emails,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	User map[string]any `json:"user"`
	Visitor map[string]any `json:"visitor"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ContactLoadMatch is the typed request payload for Contact.LoadTyped.
type ContactLoadMatch struct {
	Id string `json:"id"`
	IncludeMergeHistory *bool `json:"include_merge_history,omitempty"`
}

// ContactListMatch is the typed request payload for Contact.ListTyped.
type ContactListMatch struct {
	IncludeMergeHistory *bool `json:"include_merge_history,omitempty"`
}

// ContactCreateData is the typed request payload for Contact.CreateTyped.
type ContactCreateData struct {
	AndroidAppName *string `json:"android_app_name,omitempty"`
	AndroidAppVersion *string `json:"android_app_version,omitempty"`
	AndroidDevice *string `json:"android_device,omitempty"`
	AndroidLastSeenAt *int `json:"android_last_seen_at,omitempty"`
	AndroidOsVersion *string `json:"android_os_version,omitempty"`
	AndroidSdkVersion *string `json:"android_sdk_version,omitempty"`
	Avatar *map[string]any `json:"avatar,omitempty"`
	Browser *string `json:"browser,omitempty"`
	BrowserLanguage *string `json:"browser_language,omitempty"`
	BrowserVersion *string `json:"browser_version,omitempty"`
	Companies *map[string]any `json:"companies,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	Email *string `json:"email,omitempty"`
	EmailDomain *string `json:"email_domain,omitempty"`
	EnabledPushMessaging *bool `json:"enabled_push_messaging,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	HasHardBounced *bool `json:"has_hard_bounced,omitempty"`
	Id *string `json:"id,omitempty"`
	IosAppName *string `json:"ios_app_name,omitempty"`
	IosAppVersion *string `json:"ios_app_version,omitempty"`
	IosDevice *string `json:"ios_device,omitempty"`
	IosLastSeenAt *int `json:"ios_last_seen_at,omitempty"`
	IosOsVersion *string `json:"ios_os_version,omitempty"`
	IosSdkVersion *string `json:"ios_sdk_version,omitempty"`
	LanguageOverride *string `json:"language_override,omitempty"`
	LastContactedAt *int `json:"last_contacted_at,omitempty"`
	LastEmailClickedAt *int `json:"last_email_clicked_at,omitempty"`
	LastEmailOpenedAt *int `json:"last_email_opened_at,omitempty"`
	LastRepliedAt *int `json:"last_replied_at,omitempty"`
	LastSeenAt *int `json:"last_seen_at,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	MarkedEmailAsSpam *bool `json:"marked_email_as_spam,omitempty"`
	MergeHistory *[]any `json:"merge_history,omitempty"`
	Name *string `json:"name,omitempty"`
	Notes *map[string]any `json:"notes,omitempty"`
	Os *string `json:"os,omitempty"`
	OwnerId *string `json:"owner_id,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Role *string `json:"role,omitempty"`
	SignedUpAt *int `json:"signed_up_at,omitempty"`
	SocialProfiles *map[string]any `json:"social_profiles,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	UnsubscribedFromEmails *bool `json:"unsubscribed_from_emails,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	User map[string]any `json:"user"`
	Visitor map[string]any `json:"visitor"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ContactUpdateData is the typed request payload for Contact.UpdateTyped.
type ContactUpdateData struct {
	Id string `json:"id"`
	IncludeMergeHistory *bool `json:"include_merge_history,omitempty"`
	AndroidAppName *string `json:"android_app_name,omitempty"`
	AndroidAppVersion *string `json:"android_app_version,omitempty"`
	AndroidDevice *string `json:"android_device,omitempty"`
	AndroidLastSeenAt *int `json:"android_last_seen_at,omitempty"`
	AndroidOsVersion *string `json:"android_os_version,omitempty"`
	AndroidSdkVersion *string `json:"android_sdk_version,omitempty"`
	Avatar *map[string]any `json:"avatar,omitempty"`
	Browser *string `json:"browser,omitempty"`
	BrowserLanguage *string `json:"browser_language,omitempty"`
	BrowserVersion *string `json:"browser_version,omitempty"`
	Companies *map[string]any `json:"companies,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	Email *string `json:"email,omitempty"`
	EmailDomain *string `json:"email_domain,omitempty"`
	EnabledPushMessaging *bool `json:"enabled_push_messaging,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	HasHardBounced *bool `json:"has_hard_bounced,omitempty"`
	IosAppName *string `json:"ios_app_name,omitempty"`
	IosAppVersion *string `json:"ios_app_version,omitempty"`
	IosDevice *string `json:"ios_device,omitempty"`
	IosLastSeenAt *int `json:"ios_last_seen_at,omitempty"`
	IosOsVersion *string `json:"ios_os_version,omitempty"`
	IosSdkVersion *string `json:"ios_sdk_version,omitempty"`
	LanguageOverride *string `json:"language_override,omitempty"`
	LastContactedAt *int `json:"last_contacted_at,omitempty"`
	LastEmailClickedAt *int `json:"last_email_clicked_at,omitempty"`
	LastEmailOpenedAt *int `json:"last_email_opened_at,omitempty"`
	LastRepliedAt *int `json:"last_replied_at,omitempty"`
	LastSeenAt *int `json:"last_seen_at,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	MarkedEmailAsSpam *bool `json:"marked_email_as_spam,omitempty"`
	MergeHistory *[]any `json:"merge_history,omitempty"`
	Name *string `json:"name,omitempty"`
	Notes *map[string]any `json:"notes,omitempty"`
	Os *string `json:"os,omitempty"`
	OwnerId *string `json:"owner_id,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Role *string `json:"role,omitempty"`
	SignedUpAt *int `json:"signed_up_at,omitempty"`
	SocialProfiles *map[string]any `json:"social_profiles,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	UnsubscribedFromEmails *bool `json:"unsubscribed_from_emails,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	Visitor *map[string]any `json:"visitor,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// ContactRemoveMatch is the typed request payload for Contact.RemoveTyped.
type ContactRemoveMatch struct {
	Id string `json:"id"`
}

// ContactAttachedCompany is the typed data model for the contact_attached_company entity.
type ContactAttachedCompany struct {
	AppId *string `json:"app_id,omitempty"`
	CompanyId *string `json:"company_id,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	Id *string `json:"id,omitempty"`
	Industry *string `json:"industry,omitempty"`
	LastRequestAt *int `json:"last_request_at,omitempty"`
	MonthlySpend *int `json:"monthly_spend,omitempty"`
	Name *string `json:"name,omitempty"`
	Notes *map[string]any `json:"notes,omitempty"`
	Plan *map[string]any `json:"plan,omitempty"`
	RemoteCreatedAt *int `json:"remote_created_at,omitempty"`
	Segments *map[string]any `json:"segments,omitempty"`
	SessionCount *int `json:"session_count,omitempty"`
	Size *int `json:"size,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	UserCount *int `json:"user_count,omitempty"`
	Website *string `json:"website,omitempty"`
}

// ContactAttachedCompanyListMatch is the typed request payload for ContactAttachedCompany.ListTyped.
type ContactAttachedCompanyListMatch struct {
	Id string `json:"id"`
}

// ContactList is the typed data model for the contact_list entity.
type ContactList struct {
	Data *[]any `json:"data,omitempty"`
	Pages *map[string]any `json:"pages,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Query any `json:"query"`
	Sort *map[string]any `json:"sort,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ContactListCreateData is the typed request payload for ContactList.CreateTyped.
type ContactListCreateData struct {
	IncludeMergeHistory *bool `json:"include_merge_history,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Pages *map[string]any `json:"pages,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Query any `json:"query"`
	Sort *map[string]any `json:"sort,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ContactSegment is the typed data model for the contact_segment entity.
type ContactSegment struct {
	Count *int `json:"count,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	PersonType *string `json:"person_type,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// ContactSegmentListMatch is the typed request payload for ContactSegment.ListTyped.
type ContactSegmentListMatch struct {
	Id string `json:"id"`
}

// Content is the typed data model for the content entity.
type Content struct {
}

// ContentCreateData is the typed request payload for Content.CreateTyped.
type ContentCreateData struct {
}

// ContentImportSource is the typed data model for the content_import_source entity.
type ContentImportSource struct {
	ApplyAudienceToExistingContent *bool `json:"apply_audience_to_existing_content,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	CreatedAt int `json:"created_at"`
	Id int `json:"id"`
	LastSyncedAt int `json:"last_synced_at"`
	Status string `json:"status"`
	SyncBehavior string `json:"sync_behavior"`
	Type string `json:"type"`
	UpdatedAt int `json:"updated_at"`
	Url string `json:"url"`
}

// ContentImportSourceLoadMatch is the typed request payload for ContentImportSource.LoadTyped.
type ContentImportSourceLoadMatch struct {
	Id string `json:"id"`
}

// ContentImportSourceListMatch is the typed request payload for ContentImportSource.ListTyped.
type ContentImportSourceListMatch struct {
	ApplyAudienceToExistingContent *bool `json:"apply_audience_to_existing_content,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	LastSyncedAt *int `json:"last_synced_at,omitempty"`
	Status *string `json:"status,omitempty"`
	SyncBehavior *string `json:"sync_behavior,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ContentImportSourceCreateData is the typed request payload for ContentImportSource.CreateTyped.
type ContentImportSourceCreateData struct {
	ApplyAudienceToExistingContent *bool `json:"apply_audience_to_existing_content,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	CreatedAt int `json:"created_at"`
	Id int `json:"id"`
	LastSyncedAt int `json:"last_synced_at"`
	Status string `json:"status"`
	SyncBehavior string `json:"sync_behavior"`
	Type string `json:"type"`
	UpdatedAt int `json:"updated_at"`
	Url string `json:"url"`
}

// ContentImportSourceUpdateData is the typed request payload for ContentImportSource.UpdateTyped.
type ContentImportSourceUpdateData struct {
	Id string `json:"id"`
	ApplyAudienceToExistingContent *bool `json:"apply_audience_to_existing_content,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	LastSyncedAt *int `json:"last_synced_at,omitempty"`
	Status *string `json:"status,omitempty"`
	SyncBehavior *string `json:"sync_behavior,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ContentSearch is the typed data model for the content_search entity.
type ContentSearch struct {
	Data *[]any `json:"data,omitempty"`
	Pages *map[string]any `json:"pages,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ContentSearchListMatch is the typed request payload for ContentSearch.ListTyped.
type ContentSearchListMatch struct {
	AnyTagId *[]any `json:"any_tag_id,omitempty"`
	ContentType *[]any `json:"content_type,omitempty"`
	CopilotState *string `json:"copilot_state,omitempty"`
	CreatedAtAfter *int `json:"created_at_after,omitempty"`
	CreatedAtBefore *int `json:"created_at_before,omitempty"`
	CreatedById *[]any `json:"created_by_id,omitempty"`
	FinSalesState *string `json:"fin_sales_state,omitempty"`
	FinServiceState *string `json:"fin_service_state,omitempty"`
	FolderEntityType *string `json:"folder_entity_type,omitempty"`
	FolderId *[]any `json:"folder_id,omitempty"`
	LastUpdatedById *[]any `json:"last_updated_by_id,omitempty"`
	Locale *[]any `json:"locale,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Query *string `json:"query,omitempty"`
	State *[]any `json:"state,omitempty"`
	TagId *[]any `json:"tag_id,omitempty"`
	TagOperator *string `json:"tag_operator,omitempty"`
	UpdatedAtAfter *int `json:"updated_at_after,omitempty"`
	UpdatedAtBefore *int `json:"updated_at_before,omitempty"`
}

// ContentSnippet is the typed data model for the content_snippet entity.
type ContentSnippet struct {
	AiChatbotAvailability *bool `json:"ai_chatbot_availability,omitempty"`
	AiCopilotAvailability *bool `json:"ai_copilot_availability,omitempty"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	BodyMarkdown *string `json:"body_markdown,omitempty"`
	ChatbotAvailability *int `json:"chatbot_availability,omitempty"`
	CopilotAvailability *int `json:"copilot_availability,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	JsonBlocks *[]any `json:"json_blocks,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// ContentSnippetLoadMatch is the typed request payload for ContentSnippet.LoadTyped.
type ContentSnippetLoadMatch struct {
	Id string `json:"id"`
}

// ContentSnippetListMatch is the typed request payload for ContentSnippet.ListTyped.
type ContentSnippetListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ContentSnippetCreateData is the typed request payload for ContentSnippet.CreateTyped.
type ContentSnippetCreateData struct {
	AiChatbotAvailability *bool `json:"ai_chatbot_availability,omitempty"`
	AiCopilotAvailability *bool `json:"ai_copilot_availability,omitempty"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	BodyMarkdown *string `json:"body_markdown,omitempty"`
	ChatbotAvailability *int `json:"chatbot_availability,omitempty"`
	CopilotAvailability *int `json:"copilot_availability,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	JsonBlocks *[]any `json:"json_blocks,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// ContentSnippetUpdateData is the typed request payload for ContentSnippet.UpdateTyped.
type ContentSnippetUpdateData struct {
	Id string `json:"id"`
	AiChatbotAvailability *bool `json:"ai_chatbot_availability,omitempty"`
	AiCopilotAvailability *bool `json:"ai_copilot_availability,omitempty"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	BodyMarkdown *string `json:"body_markdown,omitempty"`
	ChatbotAvailability *int `json:"chatbot_availability,omitempty"`
	CopilotAvailability *int `json:"copilot_availability,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	JsonBlocks *[]any `json:"json_blocks,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// ContentSnippetRemoveMatch is the typed request payload for ContentSnippet.RemoveTyped.
type ContentSnippetRemoveMatch struct {
	Id string `json:"id"`
}

// Conversation is the typed data model for the conversation entity.
type Conversation struct {
	AdminAssigneeId *int `json:"admin_assignee_id,omitempty"`
	AiAgent *map[string]any `json:"ai_agent,omitempty"`
	AiAgentParticipated *bool `json:"ai_agent_participated,omitempty"`
	AttachmentUrls *[]any `json:"attachment_urls,omitempty"`
	Body string `json:"body"`
	BrandId *string `json:"brand_id,omitempty"`
	Channel *map[string]any `json:"channel,omitempty"`
	Company *map[string]any `json:"company,omitempty"`
	CompanyId *string `json:"company_id,omitempty"`
	Contacts *map[string]any `json:"contacts,omitempty"`
	ConversationId string `json:"conversation_id"`
	ConversationParts *map[string]any `json:"conversation_parts,omitempty"`
	ConversationRating *map[string]any `json:"conversation_rating,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	ExternalReferences *[]any `json:"external_references,omitempty"`
	FirstContactReply *map[string]any `json:"first_contact_reply,omitempty"`
	From map[string]any `json:"from"`
	Id *string `json:"id,omitempty"`
	LinkedObjects *map[string]any `json:"linked_objects,omitempty"`
	MonitorEvaluations *[]any `json:"monitor_evaluations,omitempty"`
	Open *bool `json:"open,omitempty"`
	Priority *string `json:"priority,omitempty"`
	Read *bool `json:"read,omitempty"`
	SalesAgent *map[string]any `json:"sales_agent,omitempty"`
	SalesAgentParticipated *bool `json:"sales_agent_participated,omitempty"`
	Scorecards *[]any `json:"scorecards,omitempty"`
	SlaApplied *map[string]any `json:"sla_applied,omitempty"`
	SnoozedUntil *int `json:"snoozed_until,omitempty"`
	Source *map[string]any `json:"source,omitempty"`
	State *string `json:"state,omitempty"`
	Statistics *map[string]any `json:"statistics,omitempty"`
	Subject *string `json:"subject,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	TeamAssigneeId *int `json:"team_assignee_id,omitempty"`
	Teammates *map[string]any `json:"teammates,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	WaitingSince *int `json:"waiting_since,omitempty"`
}

// ConversationLoadMatch is the typed request payload for Conversation.LoadTyped.
type ConversationLoadMatch struct {
	Id int `json:"id"`
	DisplayA *string `json:"display_a,omitempty"`
	IncludeTranslation *bool `json:"include_translation,omitempty"`
}

// ConversationListMatch is the typed request payload for Conversation.ListTyped.
type ConversationListMatch struct {
	PerPage *int `json:"per_page,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// ConversationCreateData is the typed request payload for Conversation.CreateTyped.
type ConversationCreateData struct {
	AdminAssigneeId *int `json:"admin_assignee_id,omitempty"`
	AiAgent *map[string]any `json:"ai_agent,omitempty"`
	AiAgentParticipated *bool `json:"ai_agent_participated,omitempty"`
	AttachmentUrls *[]any `json:"attachment_urls,omitempty"`
	Body string `json:"body"`
	BrandId *string `json:"brand_id,omitempty"`
	Channel *map[string]any `json:"channel,omitempty"`
	Company *map[string]any `json:"company,omitempty"`
	CompanyId *string `json:"company_id,omitempty"`
	Contacts *map[string]any `json:"contacts,omitempty"`
	ConversationId string `json:"conversation_id"`
	ConversationParts *map[string]any `json:"conversation_parts,omitempty"`
	ConversationRating *map[string]any `json:"conversation_rating,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	ExternalReferences *[]any `json:"external_references,omitempty"`
	FirstContactReply *map[string]any `json:"first_contact_reply,omitempty"`
	From map[string]any `json:"from"`
	Id *string `json:"id,omitempty"`
	LinkedObjects *map[string]any `json:"linked_objects,omitempty"`
	MonitorEvaluations *[]any `json:"monitor_evaluations,omitempty"`
	Open *bool `json:"open,omitempty"`
	Priority *string `json:"priority,omitempty"`
	Read *bool `json:"read,omitempty"`
	SalesAgent *map[string]any `json:"sales_agent,omitempty"`
	SalesAgentParticipated *bool `json:"sales_agent_participated,omitempty"`
	Scorecards *[]any `json:"scorecards,omitempty"`
	SlaApplied *map[string]any `json:"sla_applied,omitempty"`
	SnoozedUntil *int `json:"snoozed_until,omitempty"`
	Source *map[string]any `json:"source,omitempty"`
	State *string `json:"state,omitempty"`
	Statistics *map[string]any `json:"statistics,omitempty"`
	Subject *string `json:"subject,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	TeamAssigneeId *int `json:"team_assignee_id,omitempty"`
	Teammates *map[string]any `json:"teammates,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	WaitingSince *int `json:"waiting_since,omitempty"`
}

// ConversationUpdateData is the typed request payload for Conversation.UpdateTyped.
type ConversationUpdateData struct {
	Id int `json:"id"`
	DisplayA *string `json:"display_a,omitempty"`
	AdminAssigneeId *int `json:"admin_assignee_id,omitempty"`
	AiAgent *map[string]any `json:"ai_agent,omitempty"`
	AiAgentParticipated *bool `json:"ai_agent_participated,omitempty"`
	AttachmentUrls *[]any `json:"attachment_urls,omitempty"`
	Body *string `json:"body,omitempty"`
	BrandId *string `json:"brand_id,omitempty"`
	Channel *map[string]any `json:"channel,omitempty"`
	Company *map[string]any `json:"company,omitempty"`
	CompanyId *string `json:"company_id,omitempty"`
	Contacts *map[string]any `json:"contacts,omitempty"`
	ConversationId *string `json:"conversation_id,omitempty"`
	ConversationParts *map[string]any `json:"conversation_parts,omitempty"`
	ConversationRating *map[string]any `json:"conversation_rating,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	ExternalReferences *[]any `json:"external_references,omitempty"`
	FirstContactReply *map[string]any `json:"first_contact_reply,omitempty"`
	From *map[string]any `json:"from,omitempty"`
	LinkedObjects *map[string]any `json:"linked_objects,omitempty"`
	MonitorEvaluations *[]any `json:"monitor_evaluations,omitempty"`
	Open *bool `json:"open,omitempty"`
	Priority *string `json:"priority,omitempty"`
	Read *bool `json:"read,omitempty"`
	SalesAgent *map[string]any `json:"sales_agent,omitempty"`
	SalesAgentParticipated *bool `json:"sales_agent_participated,omitempty"`
	Scorecards *[]any `json:"scorecards,omitempty"`
	SlaApplied *map[string]any `json:"sla_applied,omitempty"`
	SnoozedUntil *int `json:"snoozed_until,omitempty"`
	Source *map[string]any `json:"source,omitempty"`
	State *string `json:"state,omitempty"`
	Statistics *map[string]any `json:"statistics,omitempty"`
	Subject *string `json:"subject,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	TeamAssigneeId *int `json:"team_assignee_id,omitempty"`
	Teammates *map[string]any `json:"teammates,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	WaitingSince *int `json:"waiting_since,omitempty"`
}

// ConversationRemoveMatch is the typed request payload for Conversation.RemoveTyped.
type ConversationRemoveMatch struct {
	Id int `json:"id"`
	RetainMetric *bool `json:"retain_metric,omitempty"`
	TicketId *string `json:"ticket_id,omitempty"`
}

// ConversationAttribute is the typed data model for the conversation_attribute entity.
type ConversationAttribute struct {
	AdminId *string `json:"admin_id,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	DataType *string `json:"data_type,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Label string `json:"label"`
	Multiline *bool `json:"multiline,omitempty"`
	Name *string `json:"name,omitempty"`
	Reference map[string]any `json:"reference"`
	Required *bool `json:"required,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	VisibleToTeamIds *[]any `json:"visible_to_team_ids,omitempty"`
}

// ConversationAttributeLoadMatch is the typed request payload for ConversationAttribute.LoadTyped.
type ConversationAttributeLoadMatch struct {
	Id int `json:"id"`
}

// ConversationAttributeCreateData is the typed request payload for ConversationAttribute.CreateTyped.
type ConversationAttributeCreateData struct {
	AdminId *string `json:"admin_id,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	DataType *string `json:"data_type,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Label string `json:"label"`
	Multiline *bool `json:"multiline,omitempty"`
	Name *string `json:"name,omitempty"`
	Reference map[string]any `json:"reference"`
	Required *bool `json:"required,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	VisibleToTeamIds *[]any `json:"visible_to_team_ids,omitempty"`
}

// ConversationAttributeUpdateData is the typed request payload for ConversationAttribute.UpdateTyped.
type ConversationAttributeUpdateData struct {
	Id int `json:"id"`
	AdminId *string `json:"admin_id,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	DataType *string `json:"data_type,omitempty"`
	Description *string `json:"description,omitempty"`
	Label *string `json:"label,omitempty"`
	Multiline *bool `json:"multiline,omitempty"`
	Name *string `json:"name,omitempty"`
	Reference *map[string]any `json:"reference,omitempty"`
	Required *bool `json:"required,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	VisibleToTeamIds *[]any `json:"visible_to_team_ids,omitempty"`
}

// ConversationAttributeRemoveMatch is the typed request payload for ConversationAttribute.RemoveTyped.
type ConversationAttributeRemoveMatch struct {
	Id int `json:"id"`
}

// ConversationAttributeList is the typed data model for the conversation_attribute_list entity.
type ConversationAttributeList struct {
	Data *[]any `json:"data,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ConversationAttributeListListMatch is the typed request payload for ConversationAttributeList.ListTyped.
type ConversationAttributeListListMatch struct {
	IncludeArchived *bool `json:"include_archived,omitempty"`
}

// ConversationList is the typed data model for the conversation_list entity.
type ConversationList struct {
	Conversations *[]any `json:"conversations,omitempty"`
	Pages *map[string]any `json:"pages,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Query any `json:"query"`
	TotalCount *int `json:"total_count,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ConversationListCreateData is the typed request payload for ConversationList.CreateTyped.
type ConversationListCreateData struct {
	IncludeMonitor *bool `json:"include_monitor,omitempty"`
	IncludeScorecard *bool `json:"include_scorecard,omitempty"`
	Conversations *[]any `json:"conversations,omitempty"`
	Pages *map[string]any `json:"pages,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Query any `json:"query"`
	TotalCount *int `json:"total_count,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ConversationParticipant is the typed data model for the conversation_participant entity.
type ConversationParticipant struct {
	Id *string `json:"id,omitempty"`
}

// ConversationParticipantCreateData is the typed request payload for ConversationParticipant.CreateTyped.
type ConversationParticipantCreateData struct {
	Id string `json:"id"`
}

// ConversationParticipantRemoveMatch is the typed request payload for ConversationParticipant.RemoveTyped.
type ConversationParticipantRemoveMatch struct {
	ContactId string `json:"contact_id"`
	ConversationId string `json:"conversation_id"`
}

// CustomObjectInstance is the typed data model for the custom_object_instance entity.
type CustomObjectInstance struct {
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	Data *[]any `json:"data,omitempty"`
	ExternalCreatedAt *string `json:"external_created_at,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	ExternalUpdatedAt *string `json:"external_updated_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Pages *map[string]any `json:"pages,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// CustomObjectInstanceLoadMatch is the typed request payload for CustomObjectInstance.LoadTyped.
type CustomObjectInstanceLoadMatch struct {
	Id string `json:"id"`
	ExternalId *string `json:"external_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	ReferencesContactId *string `json:"references_contact_id,omitempty"`
	ReferencesConversationId *string `json:"references_conversation_id,omitempty"`
}

// CustomObjectInstanceCreateData is the typed request payload for CustomObjectInstance.CreateTyped.
type CustomObjectInstanceCreateData struct {
	Id string `json:"id"`
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	Data *[]any `json:"data,omitempty"`
	ExternalCreatedAt *string `json:"external_created_at,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	ExternalUpdatedAt *string `json:"external_updated_at,omitempty"`
	Pages *map[string]any `json:"pages,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// CustomObjectInstanceRemoveMatch is the typed request payload for CustomObjectInstance.RemoveTyped.
type CustomObjectInstanceRemoveMatch struct {
	Id string `json:"id"`
	ExternalId string `json:"external_id"`
}

// Data is the typed data model for the data entity.
type Data struct {
	CreatedAtAfter int `json:"created_at_after"`
	CreatedAtBefore int `json:"created_at_before"`
	DownloadExpiresAt *string `json:"download_expires_at,omitempty"`
	DownloadUrl *string `json:"download_url,omitempty"`
	Id *string `json:"id,omitempty"`
	JobIdentifier *string `json:"job_identifier,omitempty"`
	Status *string `json:"status,omitempty"`
}

// DataLoadMatch is the typed request payload for Data.LoadTyped.
type DataLoadMatch struct {
	Id string `json:"id"`
}

// DataCreateData is the typed request payload for Data.CreateTyped.
type DataCreateData struct {
	CreatedAtAfter int `json:"created_at_after"`
	CreatedAtBefore int `json:"created_at_before"`
	DownloadExpiresAt *string `json:"download_expires_at,omitempty"`
	DownloadUrl *string `json:"download_url,omitempty"`
	Id *string `json:"id,omitempty"`
	JobIdentifier *string `json:"job_identifier,omitempty"`
	Status *string `json:"status,omitempty"`
}

// DataAttribute is the typed data model for the data_attribute entity.
type DataAttribute struct {
	AdminId *string `json:"admin_id,omitempty"`
	ApiWritable *bool `json:"api_writable,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Custom *bool `json:"custom,omitempty"`
	DataType *string `json:"data_type,omitempty"`
	Description *string `json:"description,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	Id *int `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
	MessengerWritable *bool `json:"messenger_writable,omitempty"`
	Model *string `json:"model,omitempty"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Type *string `json:"type,omitempty"`
	UiWritable *bool `json:"ui_writable,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// DataAttributeListMatch is the typed request payload for DataAttribute.ListTyped.
type DataAttributeListMatch struct {
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Model *string `json:"model,omitempty"`
}

// DataAttributeCreateData is the typed request payload for DataAttribute.CreateTyped.
type DataAttributeCreateData struct {
	AdminId *string `json:"admin_id,omitempty"`
	ApiWritable *bool `json:"api_writable,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Custom *bool `json:"custom,omitempty"`
	DataType *string `json:"data_type,omitempty"`
	Description *string `json:"description,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	Id *int `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
	MessengerWritable *bool `json:"messenger_writable,omitempty"`
	Model *string `json:"model,omitempty"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Type *string `json:"type,omitempty"`
	UiWritable *bool `json:"ui_writable,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// DataAttributeUpdateData is the typed request payload for DataAttribute.UpdateTyped.
type DataAttributeUpdateData struct {
	Id int `json:"id"`
	AdminId *string `json:"admin_id,omitempty"`
	ApiWritable *bool `json:"api_writable,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Custom *bool `json:"custom,omitempty"`
	DataType *string `json:"data_type,omitempty"`
	Description *string `json:"description,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	Label *string `json:"label,omitempty"`
	MessengerWritable *bool `json:"messenger_writable,omitempty"`
	Model *string `json:"model,omitempty"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Type *string `json:"type,omitempty"`
	UiWritable *bool `json:"ui_writable,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// DataConnector is the typed data model for the data_connector entity.
type DataConnector struct {
	Audiences *[]any `json:"audiences,omitempty"`
	Body *string `json:"body,omitempty"`
	BypassAuthentication *bool `json:"bypass_authentication,omitempty"`
	ClientFunctionName *string `json:"client_function_name,omitempty"`
	ClientFunctionTimeoutMs *int `json:"client_function_timeout_ms,omitempty"`
	ConfigurationResponseType *string `json:"configuration_response_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedByAdminId *string `json:"created_by_admin_id,omitempty"`
	CustomerAuthentication *bool `json:"customer_authentication,omitempty"`
	DataInputs *[]any `json:"data_inputs,omitempty"`
	DataTransformationType *string `json:"data_transformation_type,omitempty"`
	Description *string `json:"description,omitempty"`
	DirectFinUsage *bool `json:"direct_fin_usage,omitempty"`
	ExecutionResultsUrl *string `json:"execution_results_url,omitempty"`
	ExecutionType *string `json:"execution_type,omitempty"`
	Headers *[]any `json:"headers,omitempty"`
	HttpMethod *string `json:"http_method,omitempty"`
	Id *string `json:"id,omitempty"`
	MockResponse *map[string]any `json:"mock_response,omitempty"`
	Name *string `json:"name,omitempty"`
	ObjectMappings *[]any `json:"object_mappings,omitempty"`
	ResponseFields *[]any `json:"response_fields,omitempty"`
	State *string `json:"state,omitempty"`
	TokenIds *[]any `json:"token_ids,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpdatedByAdminId *string `json:"updated_by_admin_id,omitempty"`
	Url *string `json:"url,omitempty"`
	ValidateMissingAttributes *bool `json:"validate_missing_attributes,omitempty"`
}

// DataConnectorLoadMatch is the typed request payload for DataConnector.LoadTyped.
type DataConnectorLoadMatch struct {
	Id string `json:"id"`
	StateVersion *string `json:"state_version,omitempty"`
}

// DataConnectorListMatch is the typed request payload for DataConnector.ListTyped.
type DataConnectorListMatch struct {
	PerPage *int `json:"per_page,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// DataConnectorCreateData is the typed request payload for DataConnector.CreateTyped.
type DataConnectorCreateData struct {
	Audiences *[]any `json:"audiences,omitempty"`
	Body *string `json:"body,omitempty"`
	BypassAuthentication *bool `json:"bypass_authentication,omitempty"`
	ClientFunctionName *string `json:"client_function_name,omitempty"`
	ClientFunctionTimeoutMs *int `json:"client_function_timeout_ms,omitempty"`
	ConfigurationResponseType *string `json:"configuration_response_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedByAdminId *string `json:"created_by_admin_id,omitempty"`
	CustomerAuthentication *bool `json:"customer_authentication,omitempty"`
	DataInputs *[]any `json:"data_inputs,omitempty"`
	DataTransformationType *string `json:"data_transformation_type,omitempty"`
	Description *string `json:"description,omitempty"`
	DirectFinUsage *bool `json:"direct_fin_usage,omitempty"`
	ExecutionResultsUrl *string `json:"execution_results_url,omitempty"`
	ExecutionType *string `json:"execution_type,omitempty"`
	Headers *[]any `json:"headers,omitempty"`
	HttpMethod *string `json:"http_method,omitempty"`
	Id *string `json:"id,omitempty"`
	MockResponse *map[string]any `json:"mock_response,omitempty"`
	Name *string `json:"name,omitempty"`
	ObjectMappings *[]any `json:"object_mappings,omitempty"`
	ResponseFields *[]any `json:"response_fields,omitempty"`
	State *string `json:"state,omitempty"`
	TokenIds *[]any `json:"token_ids,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpdatedByAdminId *string `json:"updated_by_admin_id,omitempty"`
	Url *string `json:"url,omitempty"`
	ValidateMissingAttributes *bool `json:"validate_missing_attributes,omitempty"`
}

// DataConnectorUpdateData is the typed request payload for DataConnector.UpdateTyped.
type DataConnectorUpdateData struct {
	Id string `json:"id"`
	Audiences *[]any `json:"audiences,omitempty"`
	Body *string `json:"body,omitempty"`
	BypassAuthentication *bool `json:"bypass_authentication,omitempty"`
	ClientFunctionName *string `json:"client_function_name,omitempty"`
	ClientFunctionTimeoutMs *int `json:"client_function_timeout_ms,omitempty"`
	ConfigurationResponseType *string `json:"configuration_response_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedByAdminId *string `json:"created_by_admin_id,omitempty"`
	CustomerAuthentication *bool `json:"customer_authentication,omitempty"`
	DataInputs *[]any `json:"data_inputs,omitempty"`
	DataTransformationType *string `json:"data_transformation_type,omitempty"`
	Description *string `json:"description,omitempty"`
	DirectFinUsage *bool `json:"direct_fin_usage,omitempty"`
	ExecutionResultsUrl *string `json:"execution_results_url,omitempty"`
	ExecutionType *string `json:"execution_type,omitempty"`
	Headers *[]any `json:"headers,omitempty"`
	HttpMethod *string `json:"http_method,omitempty"`
	MockResponse *map[string]any `json:"mock_response,omitempty"`
	Name *string `json:"name,omitempty"`
	ObjectMappings *[]any `json:"object_mappings,omitempty"`
	ResponseFields *[]any `json:"response_fields,omitempty"`
	State *string `json:"state,omitempty"`
	TokenIds *[]any `json:"token_ids,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpdatedByAdminId *string `json:"updated_by_admin_id,omitempty"`
	Url *string `json:"url,omitempty"`
	ValidateMissingAttributes *bool `json:"validate_missing_attributes,omitempty"`
}

// DataConnectorExecutionResult is the typed data model for the data_connector_execution_result entity.
type DataConnectorExecutionResult struct {
	ConversationId *string `json:"conversation_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DataConnectorId *string `json:"data_connector_id,omitempty"`
	ErrorMessage *string `json:"error_message,omitempty"`
	ErrorType *string `json:"error_type,omitempty"`
	ExecutionTimeMs *int `json:"execution_time_ms,omitempty"`
	HttpMethod *string `json:"http_method,omitempty"`
	HttpStatus *int `json:"http_status,omitempty"`
	Id *string `json:"id,omitempty"`
	RawResponseBody *string `json:"raw_response_body,omitempty"`
	RequestBody *string `json:"request_body,omitempty"`
	RequestUrl *string `json:"request_url,omitempty"`
	ResponseBody *string `json:"response_body,omitempty"`
	SourceId *string `json:"source_id,omitempty"`
	SourceType *string `json:"source_type,omitempty"`
	Success *bool `json:"success,omitempty"`
	Type *string `json:"type,omitempty"`
}

// DataConnectorExecutionResultLoadMatch is the typed request payload for DataConnectorExecutionResult.LoadTyped.
type DataConnectorExecutionResultLoadMatch struct {
	DataConnectorId string `json:"data_connector_id"`
	Id string `json:"id"`
}

// DataConnectorExecutionResultList is the typed data model for the data_connector_execution_result_list entity.
type DataConnectorExecutionResultList struct {
	Id *string `json:"id,omitempty"`
}

// DataConnectorExecutionResultListListMatch is the typed request payload for DataConnectorExecutionResultList.ListTyped.
type DataConnectorExecutionResultListListMatch struct {
	Id string `json:"id"`
	EndT *int `json:"end_t,omitempty"`
	ErrorType *string `json:"error_type,omitempty"`
	IncludeBody *string `json:"include_body,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	StartT *int `json:"start_t,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	Success *string `json:"success,omitempty"`
}

// DataEvent is the typed data model for the data_event entity.
type DataEvent struct {
	CreatedAt *int `json:"created_at,omitempty"`
	Email *string `json:"email,omitempty"`
	EventName *string `json:"event_name,omitempty"`
	EventSummaries *map[string]any `json:"event_summaries,omitempty"`
	Id *string `json:"id,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// DataEventCreateData is the typed request payload for DataEvent.CreateTyped.
type DataEventCreateData struct {
	CreatedAt *int `json:"created_at,omitempty"`
	Email *string `json:"email,omitempty"`
	EventName *string `json:"event_name,omitempty"`
	EventSummaries *map[string]any `json:"event_summaries,omitempty"`
	Id *string `json:"id,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// DataEventSummary is the typed data model for the data_event_summary entity.
type DataEventSummary struct {
	Count *int `json:"count,omitempty"`
	Description *string `json:"description,omitempty"`
	First *string `json:"first,omitempty"`
	Last *string `json:"last,omitempty"`
	Name *string `json:"name,omitempty"`
}

// DataEventSummaryListMatch is the typed request payload for DataEventSummary.ListTyped.
type DataEventSummaryListMatch struct {
	Filter map[string]any `json:"filter"`
	Summary *bool `json:"summary,omitempty"`
	Type string `json:"type"`
}

// DataExport is the typed data model for the data_export entity.
type DataExport struct {
	DownloadExpiresAt *string `json:"download_expires_at,omitempty"`
	DownloadUrl *string `json:"download_url,omitempty"`
	JobIdentifier *string `json:"job_identifier,omitempty"`
	Status *string `json:"status,omitempty"`
}

// DataExportCreateData is the typed request payload for DataExport.CreateTyped.
type DataExportCreateData struct {
	JobIdentifier string `json:"job_identifier"`
	DownloadExpiresAt *string `json:"download_expires_at,omitempty"`
	DownloadUrl *string `json:"download_url,omitempty"`
	Status *string `json:"status,omitempty"`
}

// Deleted is the typed data model for the deleted entity.
type Deleted struct {
	DeletedAt *int `json:"deleted_at,omitempty"`
	Id *string `json:"id,omitempty"`
	MetricsRetained *bool `json:"metrics_retained,omitempty"`
	Type *string `json:"type,omitempty"`
}

// DeletedListMatch is the typed request payload for Deleted.ListTyped.
type DeletedListMatch struct {
	Order *string `json:"order,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// DeletedArticleObject is the typed data model for the deleted_article_object entity.
type DeletedArticleObject struct {
}

// DeletedArticleObjectRemoveMatch is the typed request payload for DeletedArticleObject.RemoveTyped.
type DeletedArticleObjectRemoveMatch struct {
	ArticleId int `json:"article_id"`
}

// DeletedCompanyObject is the typed data model for the deleted_company_object entity.
type DeletedCompanyObject struct {
}

// DeletedCompanyObjectRemoveMatch is the typed request payload for DeletedCompanyObject.RemoveTyped.
type DeletedCompanyObjectRemoveMatch struct {
	CompanyId string `json:"company_id"`
}

// DeletedDataConnectorObject is the typed data model for the deleted_data_connector_object entity.
type DeletedDataConnectorObject struct {
	Id *string `json:"id,omitempty"`
}

// DeletedDataConnectorObjectRemoveMatch is the typed request payload for DeletedDataConnectorObject.RemoveTyped.
type DeletedDataConnectorObjectRemoveMatch struct {
	Id string `json:"id"`
}

// DeletedInternalArticleObject is the typed data model for the deleted_internal_article_object entity.
type DeletedInternalArticleObject struct {
	AiChatbotAvailability *bool `json:"ai_chatbot_availability,omitempty"`
	AiCopilotAvailability *bool `json:"ai_copilot_availability,omitempty"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	AuthorId int `json:"author_id"`
	Body *string `json:"body,omitempty"`
	BodyMarkdown *string `json:"body_markdown,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Locale *string `json:"locale,omitempty"`
	OwnerId int `json:"owner_id"`
	Title string `json:"title"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// DeletedInternalArticleObjectListMatch is the typed request payload for DeletedInternalArticleObject.ListTyped.
type DeletedInternalArticleObjectListMatch struct {
	AiChatbotAvailability *bool `json:"ai_chatbot_availability,omitempty"`
	AiCopilotAvailability *bool `json:"ai_copilot_availability,omitempty"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	AuthorId *int `json:"author_id,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyMarkdown *string `json:"body_markdown,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Locale *string `json:"locale,omitempty"`
	OwnerId *int `json:"owner_id,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// DeletedInternalArticleObjectCreateData is the typed request payload for DeletedInternalArticleObject.CreateTyped.
type DeletedInternalArticleObjectCreateData struct {
	AiChatbotAvailability *bool `json:"ai_chatbot_availability,omitempty"`
	AiCopilotAvailability *bool `json:"ai_copilot_availability,omitempty"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	AuthorId int `json:"author_id"`
	Body *string `json:"body,omitempty"`
	BodyMarkdown *string `json:"body_markdown,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Locale *string `json:"locale,omitempty"`
	OwnerId int `json:"owner_id"`
	Title string `json:"title"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// DeletedInternalArticleObjectRemoveMatch is the typed request payload for DeletedInternalArticleObject.RemoveTyped.
type DeletedInternalArticleObjectRemoveMatch struct {
	InternalArticleId int `json:"internal_article_id"`
}

// DeletedObject is the typed data model for the deleted_object entity.
type DeletedObject struct {
}

// DeletedObjectRemoveMatch is the typed request payload for DeletedObject.RemoveTyped.
type DeletedObjectRemoveMatch struct {
	NewsItemId int `json:"news_item_id"`
}

// Email is the typed data model for the email entity.
type Email struct {
	BrandId *string `json:"brand_id,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Domain *string `json:"domain,omitempty"`
	Email *string `json:"email,omitempty"`
	ForwardedEmailLastReceivedAt *int `json:"forwarded_email_last_received_at,omitempty"`
	ForwardingEnabled *bool `json:"forwarding_enabled,omitempty"`
	Id *string `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Verified *bool `json:"verified,omitempty"`
}

// EmailLoadMatch is the typed request payload for Email.LoadTyped.
type EmailLoadMatch struct {
	Id string `json:"id"`
}

// EmailListMatch is the typed request payload for Email.ListTyped.
type EmailListMatch struct {
	BrandId *string `json:"brand_id,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Domain *string `json:"domain,omitempty"`
	Email *string `json:"email,omitempty"`
	ForwardedEmailLastReceivedAt *int `json:"forwarded_email_last_received_at,omitempty"`
	ForwardingEnabled *bool `json:"forwarding_enabled,omitempty"`
	Id *string `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Verified *bool `json:"verified,omitempty"`
}

// ExternalPage is the typed data model for the external_page entity.
type ExternalPage struct {
	AiAgentAvailability bool `json:"ai_agent_availability"`
	AiCopilotAvailability bool `json:"ai_copilot_availability"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	CreatedAt int `json:"created_at"`
	ExternalId string `json:"external_id"`
	FinAvailability *bool `json:"fin_availability,omitempty"`
	Html string `json:"html"`
	Id string `json:"id"`
	LastIngestedAt int `json:"last_ingested_at"`
	Locale string `json:"locale"`
	SourceId int `json:"source_id"`
	Title string `json:"title"`
	Type string `json:"type"`
	UpdatedAt int `json:"updated_at"`
	Url *string `json:"url,omitempty"`
}

// ExternalPageLoadMatch is the typed request payload for ExternalPage.LoadTyped.
type ExternalPageLoadMatch struct {
	Id string `json:"id"`
}

// ExternalPageListMatch is the typed request payload for ExternalPage.ListTyped.
type ExternalPageListMatch struct {
	AiAgentAvailability *bool `json:"ai_agent_availability,omitempty"`
	AiCopilotAvailability *bool `json:"ai_copilot_availability,omitempty"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	FinAvailability *bool `json:"fin_availability,omitempty"`
	Html *string `json:"html,omitempty"`
	Id *string `json:"id,omitempty"`
	LastIngestedAt *int `json:"last_ingested_at,omitempty"`
	Locale *string `json:"locale,omitempty"`
	SourceId *int `json:"source_id,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ExternalPageCreateData is the typed request payload for ExternalPage.CreateTyped.
type ExternalPageCreateData struct {
	AiAgentAvailability bool `json:"ai_agent_availability"`
	AiCopilotAvailability bool `json:"ai_copilot_availability"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	CreatedAt int `json:"created_at"`
	ExternalId string `json:"external_id"`
	FinAvailability *bool `json:"fin_availability,omitempty"`
	Html string `json:"html"`
	Id string `json:"id"`
	LastIngestedAt int `json:"last_ingested_at"`
	Locale string `json:"locale"`
	SourceId int `json:"source_id"`
	Title string `json:"title"`
	Type string `json:"type"`
	UpdatedAt int `json:"updated_at"`
	Url *string `json:"url,omitempty"`
}

// ExternalPageUpdateData is the typed request payload for ExternalPage.UpdateTyped.
type ExternalPageUpdateData struct {
	Id string `json:"id"`
	AiAgentAvailability *bool `json:"ai_agent_availability,omitempty"`
	AiCopilotAvailability *bool `json:"ai_copilot_availability,omitempty"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	FinAvailability *bool `json:"fin_availability,omitempty"`
	Html *string `json:"html,omitempty"`
	LastIngestedAt *int `json:"last_ingested_at,omitempty"`
	Locale *string `json:"locale,omitempty"`
	SourceId *int `json:"source_id,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ExternalPageRemoveMatch is the typed request payload for ExternalPage.RemoveTyped.
type ExternalPageRemoveMatch struct {
	Id string `json:"id"`
}

// FinAgent is the typed data model for the fin_agent entity.
type FinAgent struct {
	Attachments *[]any `json:"attachments,omitempty"`
	Conversation *map[string]any `json:"conversation,omitempty"`
	ConversationId *string `json:"conversation_id,omitempty"`
	ConversationMetadata *map[string]any `json:"conversation_metadata,omitempty"`
	Message map[string]any `json:"message"`
	Rating *string `json:"rating,omitempty"`
	Remark *string `json:"remark,omitempty"`
	Status *string `json:"status,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// FinAgentCreateData is the typed request payload for FinAgent.CreateTyped.
type FinAgentCreateData struct {
	Attachments *[]any `json:"attachments,omitempty"`
	Conversation *map[string]any `json:"conversation,omitempty"`
	ConversationId *string `json:"conversation_id,omitempty"`
	ConversationMetadata *map[string]any `json:"conversation_metadata,omitempty"`
	Message map[string]any `json:"message"`
	Rating *string `json:"rating,omitempty"`
	Remark *string `json:"remark,omitempty"`
	Status *string `json:"status,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// HandlingEvent is the typed data model for the handling_event entity.
type HandlingEvent struct {
	Reason *string `json:"reason,omitempty"`
	Teammate map[string]any `json:"teammate"`
	Timestamp string `json:"timestamp"`
	Type string `json:"type"`
}

// HandlingEventListMatch is the typed request payload for HandlingEvent.ListTyped.
type HandlingEventListMatch struct {
	ConversationId string `json:"conversation_id"`
}

// HelpCenter is the typed data model for the help_center entity.
type HelpCenter struct {
	Ar *map[string]any `json:"ar,omitempty"`
	Bg *map[string]any `json:"bg,omitempty"`
	Bs *map[string]any `json:"bs,omitempty"`
	Ca *map[string]any `json:"ca,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Cs *map[string]any `json:"cs,omitempty"`
	CustomDomain *string `json:"custom_domain,omitempty"`
	Da *map[string]any `json:"da,omitempty"`
	De *map[string]any `json:"de,omitempty"`
	Default *bool `json:"default,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	El *map[string]any `json:"el,omitempty"`
	En *map[string]any `json:"en,omitempty"`
	Es *map[string]any `json:"es,omitempty"`
	Et *map[string]any `json:"et,omitempty"`
	Fi *map[string]any `json:"fi,omitempty"`
	Fr *map[string]any `json:"fr,omitempty"`
	FromUrl *string `json:"from_url,omitempty"`
	He *map[string]any `json:"he,omitempty"`
	HelpCenterId *string `json:"help_center_id,omitempty"`
	Hr *map[string]any `json:"hr,omitempty"`
	Hu *map[string]any `json:"hu,omitempty"`
	Id *map[string]any `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	It *map[string]any `json:"it,omitempty"`
	Ja *map[string]any `json:"ja,omitempty"`
	Ko *map[string]any `json:"ko,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Locales *[]any `json:"locales,omitempty"`
	Lt *map[string]any `json:"lt,omitempty"`
	Lv *map[string]any `json:"lv,omitempty"`
	Mn *map[string]any `json:"mn,omitempty"`
	Name *string `json:"name,omitempty"`
	Nb *map[string]any `json:"nb,omitempty"`
	Nl *map[string]any `json:"nl,omitempty"`
	ParentId *string `json:"parent_id,omitempty"`
	Pl *map[string]any `json:"pl,omitempty"`
	Pt *map[string]any `json:"pt,omitempty"`
	PtBR *map[string]any `json:"ptBR,omitempty"`
	Ro *map[string]any `json:"ro,omitempty"`
	Ru *map[string]any `json:"ru,omitempty"`
	Sl *map[string]any `json:"sl,omitempty"`
	Sr *map[string]any `json:"sr,omitempty"`
	Sv *map[string]any `json:"sv,omitempty"`
	TargetId *string `json:"target_id,omitempty"`
	TargetType *string `json:"target_type,omitempty"`
	Tr *map[string]any `json:"tr,omitempty"`
	TranslatedContent *map[string]any `json:"translated_content,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	Vi *map[string]any `json:"vi,omitempty"`
	WebsiteTurnedOn *bool `json:"website_turned_on,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
	ZhCN *map[string]any `json:"zhCN,omitempty"`
	ZhTW *map[string]any `json:"zhTW,omitempty"`
}

// HelpCenterLoadMatch is the typed request payload for HelpCenter.LoadTyped.
type HelpCenterLoadMatch struct {
	CollectionId int `json:"collection_id"`
}

// HelpCenterListMatch is the typed request payload for HelpCenter.ListTyped.
type HelpCenterListMatch struct {
	Ar *map[string]any `json:"ar,omitempty"`
	Bg *map[string]any `json:"bg,omitempty"`
	Bs *map[string]any `json:"bs,omitempty"`
	Ca *map[string]any `json:"ca,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Cs *map[string]any `json:"cs,omitempty"`
	CustomDomain *string `json:"custom_domain,omitempty"`
	Da *map[string]any `json:"da,omitempty"`
	De *map[string]any `json:"de,omitempty"`
	Default *bool `json:"default,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	El *map[string]any `json:"el,omitempty"`
	En *map[string]any `json:"en,omitempty"`
	Es *map[string]any `json:"es,omitempty"`
	Et *map[string]any `json:"et,omitempty"`
	Fi *map[string]any `json:"fi,omitempty"`
	Fr *map[string]any `json:"fr,omitempty"`
	FromUrl *string `json:"from_url,omitempty"`
	He *map[string]any `json:"he,omitempty"`
	HelpCenterId *string `json:"help_center_id,omitempty"`
	Hr *map[string]any `json:"hr,omitempty"`
	Hu *map[string]any `json:"hu,omitempty"`
	Id *map[string]any `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	It *map[string]any `json:"it,omitempty"`
	Ja *map[string]any `json:"ja,omitempty"`
	Ko *map[string]any `json:"ko,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Locales *[]any `json:"locales,omitempty"`
	Lt *map[string]any `json:"lt,omitempty"`
	Lv *map[string]any `json:"lv,omitempty"`
	Mn *map[string]any `json:"mn,omitempty"`
	Name *string `json:"name,omitempty"`
	Nb *map[string]any `json:"nb,omitempty"`
	Nl *map[string]any `json:"nl,omitempty"`
	ParentId *string `json:"parent_id,omitempty"`
	Pl *map[string]any `json:"pl,omitempty"`
	Pt *map[string]any `json:"pt,omitempty"`
	PtBR *map[string]any `json:"ptBR,omitempty"`
	Ro *map[string]any `json:"ro,omitempty"`
	Ru *map[string]any `json:"ru,omitempty"`
	Sl *map[string]any `json:"sl,omitempty"`
	Sr *map[string]any `json:"sr,omitempty"`
	Sv *map[string]any `json:"sv,omitempty"`
	TargetId *string `json:"target_id,omitempty"`
	TargetType *string `json:"target_type,omitempty"`
	Tr *map[string]any `json:"tr,omitempty"`
	TranslatedContent *map[string]any `json:"translated_content,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	Vi *map[string]any `json:"vi,omitempty"`
	WebsiteTurnedOn *bool `json:"website_turned_on,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
	ZhCN *map[string]any `json:"zhCN,omitempty"`
	ZhTW *map[string]any `json:"zhTW,omitempty"`
}

// HelpCenterCreateData is the typed request payload for HelpCenter.CreateTyped.
type HelpCenterCreateData struct {
	Ar *map[string]any `json:"ar,omitempty"`
	Bg *map[string]any `json:"bg,omitempty"`
	Bs *map[string]any `json:"bs,omitempty"`
	Ca *map[string]any `json:"ca,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Cs *map[string]any `json:"cs,omitempty"`
	CustomDomain *string `json:"custom_domain,omitempty"`
	Da *map[string]any `json:"da,omitempty"`
	De *map[string]any `json:"de,omitempty"`
	Default *bool `json:"default,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	El *map[string]any `json:"el,omitempty"`
	En *map[string]any `json:"en,omitempty"`
	Es *map[string]any `json:"es,omitempty"`
	Et *map[string]any `json:"et,omitempty"`
	Fi *map[string]any `json:"fi,omitempty"`
	Fr *map[string]any `json:"fr,omitempty"`
	FromUrl *string `json:"from_url,omitempty"`
	He *map[string]any `json:"he,omitempty"`
	HelpCenterId *string `json:"help_center_id,omitempty"`
	Hr *map[string]any `json:"hr,omitempty"`
	Hu *map[string]any `json:"hu,omitempty"`
	Id *map[string]any `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	It *map[string]any `json:"it,omitempty"`
	Ja *map[string]any `json:"ja,omitempty"`
	Ko *map[string]any `json:"ko,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Locales *[]any `json:"locales,omitempty"`
	Lt *map[string]any `json:"lt,omitempty"`
	Lv *map[string]any `json:"lv,omitempty"`
	Mn *map[string]any `json:"mn,omitempty"`
	Name *string `json:"name,omitempty"`
	Nb *map[string]any `json:"nb,omitempty"`
	Nl *map[string]any `json:"nl,omitempty"`
	ParentId *string `json:"parent_id,omitempty"`
	Pl *map[string]any `json:"pl,omitempty"`
	Pt *map[string]any `json:"pt,omitempty"`
	PtBR *map[string]any `json:"ptBR,omitempty"`
	Ro *map[string]any `json:"ro,omitempty"`
	Ru *map[string]any `json:"ru,omitempty"`
	Sl *map[string]any `json:"sl,omitempty"`
	Sr *map[string]any `json:"sr,omitempty"`
	Sv *map[string]any `json:"sv,omitempty"`
	TargetId *string `json:"target_id,omitempty"`
	TargetType *string `json:"target_type,omitempty"`
	Tr *map[string]any `json:"tr,omitempty"`
	TranslatedContent *map[string]any `json:"translated_content,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	Vi *map[string]any `json:"vi,omitempty"`
	WebsiteTurnedOn *bool `json:"website_turned_on,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
	ZhCN *map[string]any `json:"zhCN,omitempty"`
	ZhTW *map[string]any `json:"zhTW,omitempty"`
}

// HelpCenterUpdateData is the typed request payload for HelpCenter.UpdateTyped.
type HelpCenterUpdateData struct {
	CollectionId int `json:"collection_id"`
	Ar *map[string]any `json:"ar,omitempty"`
	Bg *map[string]any `json:"bg,omitempty"`
	Bs *map[string]any `json:"bs,omitempty"`
	Ca *map[string]any `json:"ca,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Cs *map[string]any `json:"cs,omitempty"`
	CustomDomain *string `json:"custom_domain,omitempty"`
	Da *map[string]any `json:"da,omitempty"`
	De *map[string]any `json:"de,omitempty"`
	Default *bool `json:"default,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	El *map[string]any `json:"el,omitempty"`
	En *map[string]any `json:"en,omitempty"`
	Es *map[string]any `json:"es,omitempty"`
	Et *map[string]any `json:"et,omitempty"`
	Fi *map[string]any `json:"fi,omitempty"`
	Fr *map[string]any `json:"fr,omitempty"`
	FromUrl *string `json:"from_url,omitempty"`
	He *map[string]any `json:"he,omitempty"`
	HelpCenterId *string `json:"help_center_id,omitempty"`
	Hr *map[string]any `json:"hr,omitempty"`
	Hu *map[string]any `json:"hu,omitempty"`
	Id *map[string]any `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	It *map[string]any `json:"it,omitempty"`
	Ja *map[string]any `json:"ja,omitempty"`
	Ko *map[string]any `json:"ko,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Locales *[]any `json:"locales,omitempty"`
	Lt *map[string]any `json:"lt,omitempty"`
	Lv *map[string]any `json:"lv,omitempty"`
	Mn *map[string]any `json:"mn,omitempty"`
	Name *string `json:"name,omitempty"`
	Nb *map[string]any `json:"nb,omitempty"`
	Nl *map[string]any `json:"nl,omitempty"`
	ParentId *string `json:"parent_id,omitempty"`
	Pl *map[string]any `json:"pl,omitempty"`
	Pt *map[string]any `json:"pt,omitempty"`
	PtBR *map[string]any `json:"ptBR,omitempty"`
	Ro *map[string]any `json:"ro,omitempty"`
	Ru *map[string]any `json:"ru,omitempty"`
	Sl *map[string]any `json:"sl,omitempty"`
	Sr *map[string]any `json:"sr,omitempty"`
	Sv *map[string]any `json:"sv,omitempty"`
	TargetId *string `json:"target_id,omitempty"`
	TargetType *string `json:"target_type,omitempty"`
	Tr *map[string]any `json:"tr,omitempty"`
	TranslatedContent *map[string]any `json:"translated_content,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	Vi *map[string]any `json:"vi,omitempty"`
	WebsiteTurnedOn *bool `json:"website_turned_on,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
	ZhCN *map[string]any `json:"zhCN,omitempty"`
	ZhTW *map[string]any `json:"zhTW,omitempty"`
}

// HelpCenterRemoveMatch is the typed request payload for HelpCenter.RemoveTyped.
type HelpCenterRemoveMatch struct {
	CollectionId int `json:"collection_id"`
}

// InternalArticle is the typed data model for the internal_article entity.
type InternalArticle struct {
	AiChatbotAvailability *bool `json:"ai_chatbot_availability,omitempty"`
	AiCopilotAvailability *bool `json:"ai_copilot_availability,omitempty"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	AuthorId *int `json:"author_id,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyMarkdown *string `json:"body_markdown,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Locale *string `json:"locale,omitempty"`
	OwnerId *int `json:"owner_id,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// InternalArticleLoadMatch is the typed request payload for InternalArticle.LoadTyped.
type InternalArticleLoadMatch struct {
	Id int `json:"id"`
}

// InternalArticleUpdateData is the typed request payload for InternalArticle.UpdateTyped.
type InternalArticleUpdateData struct {
	Id int `json:"id"`
	AiChatbotAvailability *bool `json:"ai_chatbot_availability,omitempty"`
	AiCopilotAvailability *bool `json:"ai_copilot_availability,omitempty"`
	AiSalesAgentAvailability *bool `json:"ai_sales_agent_availability,omitempty"`
	AudienceIds *[]any `json:"audience_ids,omitempty"`
	AuthorId *int `json:"author_id,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyMarkdown *string `json:"body_markdown,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Locale *string `json:"locale,omitempty"`
	OwnerId *int `json:"owner_id,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// InternalArticleSearch is the typed data model for the internal_article_search entity.
type InternalArticleSearch struct {
	Data *map[string]any `json:"data,omitempty"`
	Pages *map[string]any `json:"pages,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	Type *string `json:"type,omitempty"`
}

// InternalArticleSearchLoadMatch is the typed request payload for InternalArticleSearch.LoadTyped.
type InternalArticleSearchLoadMatch struct {
	FolderId *string `json:"folder_id,omitempty"`
}

// IpAllowlist is the typed data model for the ip_allowlist entity.
type IpAllowlist struct {
	Enabled *bool `json:"enabled,omitempty"`
	IpAllowlist *[]any `json:"ip_allowlist,omitempty"`
	Type *string `json:"type,omitempty"`
}

// IpAllowlistListMatch is the typed request payload for IpAllowlist.ListTyped.
type IpAllowlistListMatch struct {
	Enabled *bool `json:"enabled,omitempty"`
	IpAllowlist *[]any `json:"ip_allowlist,omitempty"`
	Type *string `json:"type,omitempty"`
}

// IpAllowlistUpdateData is the typed request payload for IpAllowlist.UpdateTyped.
type IpAllowlistUpdateData struct {
	Enabled *bool `json:"enabled,omitempty"`
	IpAllowlist *[]any `json:"ip_allowlist,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Job is the typed data model for the job entity.
type Job struct {
	Id string `json:"id"`
	ResourceId *string `json:"resource_id,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
	ResourceUrl *string `json:"resource_url,omitempty"`
	SkipNotifications *bool `json:"skip_notifications,omitempty"`
	Status *string `json:"status,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
}

// JobLoadMatch is the typed request payload for Job.LoadTyped.
type JobLoadMatch struct {
	JobId string `json:"job_id"`
}

// JobCreateData is the typed request payload for Job.CreateTyped.
type JobCreateData struct {
	Id string `json:"id"`
	ResourceId *string `json:"resource_id,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
	ResourceUrl *string `json:"resource_url,omitempty"`
	SkipNotifications *bool `json:"skip_notifications,omitempty"`
	Status *string `json:"status,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Macro is the typed data model for the macro entity.
type Macro struct {
	AvailableOn *[]any `json:"available_on,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyText *string `json:"body_text,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	VisibleTo *string `json:"visible_to,omitempty"`
	VisibleToTeamIds *[]any `json:"visible_to_team_ids,omitempty"`
}

// MacroLoadMatch is the typed request payload for Macro.LoadTyped.
type MacroLoadMatch struct {
	Id string `json:"id"`
}

// MacroListMatch is the typed request payload for Macro.ListTyped.
type MacroListMatch struct {
	PerPage *int `json:"per_page,omitempty"`
	StartingAfter *string `json:"starting_after,omitempty"`
	UpdatedSince *int `json:"updated_since,omitempty"`
}

// MergeHistory is the typed data model for the merge_history entity.
type MergeHistory struct {
	MergedAt *int `json:"merged_at,omitempty"`
	SourceContactId *string `json:"source_contact_id,omitempty"`
	SourceContactRole *string `json:"source_contact_role,omitempty"`
	Type *string `json:"type,omitempty"`
}

// MergeHistoryListMatch is the typed request payload for MergeHistory.ListTyped.
type MergeHistoryListMatch struct {
	ContactId string `json:"contact_id"`
	Cursor *string `json:"cursor,omitempty"`
	Order *string `json:"order,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Message is the typed data model for the message entity.
type Message struct {
	Bcc *any `json:"bcc,omitempty"`
	Body string `json:"body"`
	Cc *any `json:"cc,omitempty"`
	ConversationId *string `json:"conversation_id,omitempty"`
	CreateConversationWithoutContactReply *bool `json:"create_conversation_without_contact_reply,omitempty"`
	CreatedAt int `json:"created_at"`
	From map[string]any `json:"from"`
	Id string `json:"id"`
	MessageType string `json:"message_type"`
	Subject *string `json:"subject,omitempty"`
	Template *string `json:"template,omitempty"`
	To *any `json:"to,omitempty"`
	Type string `json:"type"`
}

// MessageCreateData is the typed request payload for Message.CreateTyped.
type MessageCreateData struct {
	Bcc *any `json:"bcc,omitempty"`
	Body string `json:"body"`
	Cc *any `json:"cc,omitempty"`
	ConversationId *string `json:"conversation_id,omitempty"`
	CreateConversationWithoutContactReply *bool `json:"create_conversation_without_contact_reply,omitempty"`
	CreatedAt int `json:"created_at"`
	From map[string]any `json:"from"`
	Id string `json:"id"`
	MessageType string `json:"message_type"`
	Subject *string `json:"subject,omitempty"`
	Template *string `json:"template,omitempty"`
	To *any `json:"to,omitempty"`
	Type string `json:"type"`
}

// NewsItem is the typed data model for the news_item entity.
type NewsItem struct {
	Body *string `json:"body,omitempty"`
	CoverImageUrl *string `json:"cover_image_url,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	DeliverSilently *bool `json:"deliver_silently,omitempty"`
	Id *string `json:"id,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	NewsfeedAssignments *[]any `json:"newsfeed_assignments,omitempty"`
	Reactions *[]any `json:"reactions,omitempty"`
	SenderId *int `json:"sender_id,omitempty"`
	State *string `json:"state,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// NewsItemLoadMatch is the typed request payload for NewsItem.LoadTyped.
type NewsItemLoadMatch struct {
	Id int `json:"id"`
}

// NewsItemCreateData is the typed request payload for NewsItem.CreateTyped.
type NewsItemCreateData struct {
	Body *string `json:"body,omitempty"`
	CoverImageUrl *string `json:"cover_image_url,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	DeliverSilently *bool `json:"deliver_silently,omitempty"`
	Id *string `json:"id,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	NewsfeedAssignments *[]any `json:"newsfeed_assignments,omitempty"`
	Reactions *[]any `json:"reactions,omitempty"`
	SenderId *int `json:"sender_id,omitempty"`
	State *string `json:"state,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// NewsItemUpdateData is the typed request payload for NewsItem.UpdateTyped.
type NewsItemUpdateData struct {
	Id int `json:"id"`
	Body *string `json:"body,omitempty"`
	CoverImageUrl *string `json:"cover_image_url,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	DeliverSilently *bool `json:"deliver_silently,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	NewsfeedAssignments *[]any `json:"newsfeed_assignments,omitempty"`
	Reactions *[]any `json:"reactions,omitempty"`
	SenderId *int `json:"sender_id,omitempty"`
	State *string `json:"state,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// Newsfeed is the typed data model for the newsfeed entity.
type Newsfeed struct {
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// NewsfeedLoadMatch is the typed request payload for Newsfeed.LoadTyped.
type NewsfeedLoadMatch struct {
	Id string `json:"id"`
}

// Note is the typed data model for the note entity.
type Note struct {
	AdminId *string `json:"admin_id,omitempty"`
	Author *map[string]any `json:"author,omitempty"`
	Body *string `json:"body,omitempty"`
	Company *map[string]any `json:"company,omitempty"`
	Contact *map[string]any `json:"contact,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// NoteLoadMatch is the typed request payload for Note.LoadTyped.
type NoteLoadMatch struct {
	Id int `json:"id"`
}

// NoteListMatch is the typed request payload for Note.ListTyped.
type NoteListMatch struct {
	CompanyId string `json:"company_id"`
}

// NoteCreateData is the typed request payload for Note.CreateTyped.
type NoteCreateData struct {
	CompanyId string `json:"company_id"`
	AdminId *string `json:"admin_id,omitempty"`
	Author *map[string]any `json:"author,omitempty"`
	Body *string `json:"body,omitempty"`
	Company *map[string]any `json:"company,omitempty"`
	Contact *map[string]any `json:"contact,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// OfficeHour is the typed data model for the office_hour entity.
type OfficeHour struct {
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	TimeIntervals []any `json:"time_intervals"`
	TimeZoneName string `json:"time_zone_name"`
	TwentyFourSeven *bool `json:"twenty_four_seven,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// OfficeHourListMatch is the typed request payload for OfficeHour.ListTyped.
type OfficeHourListMatch struct {
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	TimeIntervals *[]any `json:"time_intervals,omitempty"`
	TimeZoneName *string `json:"time_zone_name,omitempty"`
	TwentyFourSeven *bool `json:"twenty_four_seven,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// OfficeHourCreateData is the typed request payload for OfficeHour.CreateTyped.
type OfficeHourCreateData struct {
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	TimeIntervals []any `json:"time_intervals"`
	TimeZoneName string `json:"time_zone_name"`
	TwentyFourSeven *bool `json:"twenty_four_seven,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// OfficeHourRemoveMatch is the typed request payload for OfficeHour.RemoveTyped.
type OfficeHourRemoveMatch struct {
	Id string `json:"id"`
	OfficeHoursScheduleId *string `json:"office_hours_schedule_id,omitempty"`
}

// OfficeHoursException is the typed data model for the office_hours_exception entity.
type OfficeHoursException struct {
	CreatedAt *int `json:"created_at,omitempty"`
	ExceptionDate *string `json:"exception_date,omitempty"`
	ExceptionType *string `json:"exception_type,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	OfficeHoursScheduleId *string `json:"office_hours_schedule_id,omitempty"`
	RecurringAnnually *bool `json:"recurring_annually,omitempty"`
	TimeIntervals *[]any `json:"time_intervals,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// OfficeHoursExceptionLoadMatch is the typed request payload for OfficeHoursException.LoadTyped.
type OfficeHoursExceptionLoadMatch struct {
	Id string `json:"id"`
	OfficeHoursScheduleId string `json:"office_hours_schedule_id"`
}

// OfficeHoursExceptionListMatch is the typed request payload for OfficeHoursException.ListTyped.
type OfficeHoursExceptionListMatch struct {
	OfficeHoursScheduleId string `json:"office_hours_schedule_id"`
}

// OfficeHoursExceptionCreateData is the typed request payload for OfficeHoursException.CreateTyped.
type OfficeHoursExceptionCreateData struct {
	OfficeHoursScheduleId string `json:"office_hours_schedule_id"`
	CreatedAt *int `json:"created_at,omitempty"`
	ExceptionDate *string `json:"exception_date,omitempty"`
	ExceptionType *string `json:"exception_type,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	RecurringAnnually *bool `json:"recurring_annually,omitempty"`
	TimeIntervals *[]any `json:"time_intervals,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// OfficeHoursExceptionUpdateData is the typed request payload for OfficeHoursException.UpdateTyped.
type OfficeHoursExceptionUpdateData struct {
	Id string `json:"id"`
	OfficeHoursScheduleId string `json:"office_hours_schedule_id"`
	CreatedAt *int `json:"created_at,omitempty"`
	ExceptionDate *string `json:"exception_date,omitempty"`
	ExceptionType *string `json:"exception_type,omitempty"`
	Name *string `json:"name,omitempty"`
	RecurringAnnually *bool `json:"recurring_annually,omitempty"`
	TimeIntervals *[]any `json:"time_intervals,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// OfficeHoursSchedule is the typed data model for the office_hours_schedule entity.
type OfficeHoursSchedule struct {
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	TimeIntervals *[]any `json:"time_intervals,omitempty"`
	TimeZoneName *string `json:"time_zone_name,omitempty"`
	TwentyFourSeven *bool `json:"twenty_four_seven,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// OfficeHoursScheduleLoadMatch is the typed request payload for OfficeHoursSchedule.LoadTyped.
type OfficeHoursScheduleLoadMatch struct {
	Id string `json:"id"`
}

// OfficeHoursScheduleUpdateData is the typed request payload for OfficeHoursSchedule.UpdateTyped.
type OfficeHoursScheduleUpdateData struct {
	Id string `json:"id"`
	CreatedAt *int `json:"created_at,omitempty"`
	Name *string `json:"name,omitempty"`
	TimeIntervals *[]any `json:"time_intervals,omitempty"`
	TimeZoneName *string `json:"time_zone_name,omitempty"`
	TwentyFourSeven *bool `json:"twenty_four_seven,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// Paginated is the typed data model for the paginated entity.
type Paginated struct {
	Data *[]any `json:"data,omitempty"`
	Pages *map[string]any `json:"pages,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	Type *string `json:"type,omitempty"`
}

// PaginatedListMatch is the typed request payload for Paginated.ListTyped.
type PaginatedListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Pages *map[string]any `json:"pages,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	Type *string `json:"type,omitempty"`
}

// PhoneSwitch is the typed data model for the phone_switch entity.
type PhoneSwitch struct {
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Type *string `json:"type,omitempty"`
}

// PhoneSwitchCreateData is the typed request payload for PhoneSwitch.CreateTyped.
type PhoneSwitchCreateData struct {
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ReportingData is the typed data model for the reporting_data entity.
type ReportingData struct {
	DownloadExpiresAt *string `json:"download_expires_at,omitempty"`
	DownloadUrl *string `json:"download_url,omitempty"`
	JobIdentifier *string `json:"job_identifier,omitempty"`
	Status *string `json:"status,omitempty"`
}

// ReportingDataLoadMatch is the typed request payload for ReportingData.LoadTyped.
type ReportingDataLoadMatch struct {
	AppId string `json:"app_id"`
	JobIdentifier string `json:"job_identifier"`
	ClientId *string `json:"client_id,omitempty"`
}

// ReportingDataExport is the typed data model for the reporting_data_export entity.
type ReportingDataExport struct {
	AttributeIds []any `json:"attribute_ids"`
	Attributes *[]any `json:"attributes,omitempty"`
	DatasetId string `json:"dataset_id"`
	DefaultTimeAttributeId *string `json:"default_time_attribute_id,omitempty"`
	Description *string `json:"description,omitempty"`
	DownloadExpiresAt *string `json:"download_expires_at,omitempty"`
	DownloadUrl *string `json:"download_url,omitempty"`
	EndTime int `json:"end_time"`
	Id *string `json:"id,omitempty"`
	JobIdentifier *string `json:"job_identifier,omitempty"`
	Name *string `json:"name,omitempty"`
	StartTime int `json:"start_time"`
	Status *string `json:"status,omitempty"`
}

// ReportingDataExportListMatch is the typed request payload for ReportingDataExport.ListTyped.
type ReportingDataExportListMatch struct {
	AttributeIds *[]any `json:"attribute_ids,omitempty"`
	Attributes *[]any `json:"attributes,omitempty"`
	DatasetId *string `json:"dataset_id,omitempty"`
	DefaultTimeAttributeId *string `json:"default_time_attribute_id,omitempty"`
	Description *string `json:"description,omitempty"`
	DownloadExpiresAt *string `json:"download_expires_at,omitempty"`
	DownloadUrl *string `json:"download_url,omitempty"`
	EndTime *int `json:"end_time,omitempty"`
	Id *string `json:"id,omitempty"`
	JobIdentifier *string `json:"job_identifier,omitempty"`
	Name *string `json:"name,omitempty"`
	StartTime *int `json:"start_time,omitempty"`
	Status *string `json:"status,omitempty"`
}

// ReportingDataExportCreateData is the typed request payload for ReportingDataExport.CreateTyped.
type ReportingDataExportCreateData struct {
	AttributeIds []any `json:"attribute_ids"`
	Attributes *[]any `json:"attributes,omitempty"`
	DatasetId string `json:"dataset_id"`
	DefaultTimeAttributeId *string `json:"default_time_attribute_id,omitempty"`
	Description *string `json:"description,omitempty"`
	DownloadExpiresAt *string `json:"download_expires_at,omitempty"`
	DownloadUrl *string `json:"download_url,omitempty"`
	EndTime int `json:"end_time"`
	Id *string `json:"id,omitempty"`
	JobIdentifier *string `json:"job_identifier,omitempty"`
	Name *string `json:"name,omitempty"`
	StartTime int `json:"start_time"`
	Status *string `json:"status,omitempty"`
}

// Segment is the typed data model for the segment entity.
type Segment struct {
	Count *int `json:"count,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	PersonType *string `json:"person_type,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// SegmentLoadMatch is the typed request payload for Segment.LoadTyped.
type SegmentLoadMatch struct {
	Id string `json:"id"`
}

// SegmentListMatch is the typed request payload for Segment.ListTyped.
type SegmentListMatch struct {
	IncludeCount *bool `json:"include_count,omitempty"`
}

// SideConversation is the typed data model for the side_conversation entity.
type SideConversation struct {
	ConversationParts *[]any `json:"conversation_parts,omitempty"`
	SideConversationId *string `json:"side_conversation_id,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
}

// SideConversationListMatch is the typed request payload for SideConversation.ListTyped.
type SideConversationListMatch struct {
	ConversationId string `json:"conversation_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Subscription is the typed data model for the subscription entity.
type Subscription struct {
	ConsentType *string `json:"consent_type,omitempty"`
	ContentTypes *[]any `json:"content_types,omitempty"`
	DefaultTranslation *map[string]any `json:"default_translation,omitempty"`
	Id *string `json:"id,omitempty"`
	State *string `json:"state,omitempty"`
	Translations *[]any `json:"translations,omitempty"`
	Type *string `json:"type,omitempty"`
}

// SubscriptionListMatch is the typed request payload for Subscription.ListTyped.
type SubscriptionListMatch struct {
	ContactId string `json:"contact_id"`
}

// SubscriptionCreateData is the typed request payload for Subscription.CreateTyped.
type SubscriptionCreateData struct {
	ContactId string `json:"contact_id"`
	ConsentType *string `json:"consent_type,omitempty"`
	ContentTypes *[]any `json:"content_types,omitempty"`
	DefaultTranslation *map[string]any `json:"default_translation,omitempty"`
	Id *string `json:"id,omitempty"`
	State *string `json:"state,omitempty"`
	Translations *[]any `json:"translations,omitempty"`
	Type *string `json:"type,omitempty"`
}

// SubscriptionRemoveMatch is the typed request payload for Subscription.RemoveTyped.
type SubscriptionRemoveMatch struct {
	ContactId string `json:"contact_id"`
	Id string `json:"id"`
}

// SubscriptionType is the typed data model for the subscription_type entity.
type SubscriptionType struct {
	ConsentType *string `json:"consent_type,omitempty"`
	ContentTypes *[]any `json:"content_types,omitempty"`
	DefaultTranslation *map[string]any `json:"default_translation,omitempty"`
	Id *string `json:"id,omitempty"`
	State *string `json:"state,omitempty"`
	Translations *[]any `json:"translations,omitempty"`
	Type *string `json:"type,omitempty"`
}

// SubscriptionTypeListMatch is the typed request payload for SubscriptionType.ListTyped.
type SubscriptionTypeListMatch struct {
	ConsentType *string `json:"consent_type,omitempty"`
	ContentTypes *[]any `json:"content_types,omitempty"`
	DefaultTranslation *map[string]any `json:"default_translation,omitempty"`
	Id *string `json:"id,omitempty"`
	State *string `json:"state,omitempty"`
	Translations *[]any `json:"translations,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Tag is the typed data model for the tag entity.
type Tag struct {
	AdminId *string `json:"admin_id,omitempty"`
	AppliedAt *int `json:"applied_at,omitempty"`
	AppliedBy *map[string]any `json:"applied_by,omitempty"`
	Companies *[]any `json:"companies,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	Users *[]any `json:"users,omitempty"`
}

// TagLoadMatch is the typed request payload for Tag.LoadTyped.
type TagLoadMatch struct {
	Id string `json:"id"`
}

// TagListMatch is the typed request payload for Tag.ListTyped.
type TagListMatch struct {
	AdminId *string `json:"admin_id,omitempty"`
	AppliedAt *int `json:"applied_at,omitempty"`
	AppliedBy *map[string]any `json:"applied_by,omitempty"`
	Companies *[]any `json:"companies,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	Users *[]any `json:"users,omitempty"`
}

// TagCreateData is the typed request payload for Tag.CreateTyped.
type TagCreateData struct {
	AdminId *string `json:"admin_id,omitempty"`
	AppliedAt *int `json:"applied_at,omitempty"`
	AppliedBy *map[string]any `json:"applied_by,omitempty"`
	Companies *[]any `json:"companies,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	Users *[]any `json:"users,omitempty"`
}

// TagRemoveMatch is the typed request payload for Tag.RemoveTyped.
type TagRemoveMatch struct {
	ArticleId *int `json:"article_id,omitempty"`
	Id string `json:"id"`
	ContactId *string `json:"contact_id,omitempty"`
	ContentSnippetId *string `json:"content_snippet_id,omitempty"`
	ConversationId *string `json:"conversation_id,omitempty"`
	InternalArticleId *int `json:"internal_article_id,omitempty"`
	TicketId *string `json:"ticket_id,omitempty"`
}

// Team is the typed data model for the team entity.
type Team struct {
	AdminIds *[]any `json:"admin_ids,omitempty"`
	AdminPriorityLevel *map[string]any `json:"admin_priority_level,omitempty"`
	AssignmentLimit *int `json:"assignment_limit,omitempty"`
	DistributionMethod *string `json:"distribution_method,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}

// TeamLoadMatch is the typed request payload for Team.LoadTyped.
type TeamLoadMatch struct {
	Id string `json:"id"`
}

// TeamListMatch is the typed request payload for Team.ListTyped.
type TeamListMatch struct {
	AdminIds *[]any `json:"admin_ids,omitempty"`
	AdminPriorityLevel *map[string]any `json:"admin_priority_level,omitempty"`
	AssignmentLimit *int `json:"assignment_limit,omitempty"`
	DistributionMethod *string `json:"distribution_method,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}

// TeamMetricList is the typed data model for the team_metric_list entity.
type TeamMetricList struct {
	Id *string `json:"id,omitempty"`
}

// TeamMetricListListMatch is the typed request payload for TeamMetricList.ListTyped.
type TeamMetricListListMatch struct {
	Id string `json:"id"`
	IdleThreshold *int `json:"idle_threshold,omitempty"`
}

// Ticket is the typed data model for the ticket entity.
type Ticket struct {
	AdminAssigneeId *int `json:"admin_assignee_id,omitempty"`
	Attributes *map[string]any `json:"attributes,omitempty"`
	Category *string `json:"category,omitempty"`
	Contacts *map[string]any `json:"contacts,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	IsShared *bool `json:"is_shared,omitempty"`
	LinkedObjects *map[string]any `json:"linked_objects,omitempty"`
	Open *bool `json:"open,omitempty"`
	PreviousTicketStateId *string `json:"previous_ticket_state_id,omitempty"`
	SkipNotifications *bool `json:"skip_notifications,omitempty"`
	SnoozedUntil *int `json:"snoozed_until,omitempty"`
	TeamAssigneeId *int `json:"team_assignee_id,omitempty"`
	TicketAttributes *map[string]any `json:"ticket_attributes,omitempty"`
	TicketId *string `json:"ticket_id,omitempty"`
	TicketParts *map[string]any `json:"ticket_parts,omitempty"`
	TicketState *map[string]any `json:"ticket_state,omitempty"`
	TicketStateId *string `json:"ticket_state_id,omitempty"`
	TicketType *map[string]any `json:"ticket_type,omitempty"`
	TicketTypeId string `json:"ticket_type_id"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// TicketLoadMatch is the typed request payload for Ticket.LoadTyped.
type TicketLoadMatch struct {
	Id string `json:"id"`
}

// TicketCreateData is the typed request payload for Ticket.CreateTyped.
type TicketCreateData struct {
	AdminAssigneeId *int `json:"admin_assignee_id,omitempty"`
	Attributes *map[string]any `json:"attributes,omitempty"`
	Category *string `json:"category,omitempty"`
	Contacts *map[string]any `json:"contacts,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	IsShared *bool `json:"is_shared,omitempty"`
	LinkedObjects *map[string]any `json:"linked_objects,omitempty"`
	Open *bool `json:"open,omitempty"`
	PreviousTicketStateId *string `json:"previous_ticket_state_id,omitempty"`
	SkipNotifications *bool `json:"skip_notifications,omitempty"`
	SnoozedUntil *int `json:"snoozed_until,omitempty"`
	TeamAssigneeId *int `json:"team_assignee_id,omitempty"`
	TicketAttributes *map[string]any `json:"ticket_attributes,omitempty"`
	TicketId *string `json:"ticket_id,omitempty"`
	TicketParts *map[string]any `json:"ticket_parts,omitempty"`
	TicketState *map[string]any `json:"ticket_state,omitempty"`
	TicketStateId *string `json:"ticket_state_id,omitempty"`
	TicketType *map[string]any `json:"ticket_type,omitempty"`
	TicketTypeId string `json:"ticket_type_id"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// TicketUpdateData is the typed request payload for Ticket.UpdateTyped.
type TicketUpdateData struct {
	Id string `json:"id"`
	AdminAssigneeId *int `json:"admin_assignee_id,omitempty"`
	Attributes *map[string]any `json:"attributes,omitempty"`
	Category *string `json:"category,omitempty"`
	Contacts *map[string]any `json:"contacts,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	IsShared *bool `json:"is_shared,omitempty"`
	LinkedObjects *map[string]any `json:"linked_objects,omitempty"`
	Open *bool `json:"open,omitempty"`
	PreviousTicketStateId *string `json:"previous_ticket_state_id,omitempty"`
	SkipNotifications *bool `json:"skip_notifications,omitempty"`
	SnoozedUntil *int `json:"snoozed_until,omitempty"`
	TeamAssigneeId *int `json:"team_assignee_id,omitempty"`
	TicketAttributes *map[string]any `json:"ticket_attributes,omitempty"`
	TicketId *string `json:"ticket_id,omitempty"`
	TicketParts *map[string]any `json:"ticket_parts,omitempty"`
	TicketState *map[string]any `json:"ticket_state,omitempty"`
	TicketStateId *string `json:"ticket_state_id,omitempty"`
	TicketType *map[string]any `json:"ticket_type,omitempty"`
	TicketTypeId *string `json:"ticket_type_id,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// TicketRemoveMatch is the typed request payload for Ticket.RemoveTyped.
type TicketRemoveMatch struct {
	Id string `json:"id"`
}

// TicketList is the typed data model for the ticket_list entity.
type TicketList struct {
	Pages *map[string]any `json:"pages,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Query any `json:"query"`
	Tickets *[]any `json:"tickets,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	Type *string `json:"type,omitempty"`
}

// TicketListCreateData is the typed request payload for TicketList.CreateTyped.
type TicketListCreateData struct {
	Pages *map[string]any `json:"pages,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Query any `json:"query"`
	Tickets *[]any `json:"tickets,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	Type *string `json:"type,omitempty"`
}

// TicketReply is the typed data model for the ticket_reply entity.
type TicketReply struct {
	Attachments *[]any `json:"attachments,omitempty"`
	Author *map[string]any `json:"author,omitempty"`
	Body *string `json:"body,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	PartType *string `json:"part_type,omitempty"`
	Redacted *bool `json:"redacted,omitempty"`
	SkipNotifications *bool `json:"skip_notifications,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// TicketReplyCreateData is the typed request payload for TicketReply.CreateTyped.
type TicketReplyCreateData struct {
	Id string `json:"id"`
	Attachments *[]any `json:"attachments,omitempty"`
	Author *map[string]any `json:"author,omitempty"`
	Body *string `json:"body,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	PartType *string `json:"part_type,omitempty"`
	Redacted *bool `json:"redacted,omitempty"`
	SkipNotifications *bool `json:"skip_notifications,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// TicketState is the typed data model for the ticket_state entity.
type TicketState struct {
	Archived *bool `json:"archived,omitempty"`
	Category *string `json:"category,omitempty"`
	ExternalLabel *string `json:"external_label,omitempty"`
	Id *string `json:"id,omitempty"`
	InternalLabel *string `json:"internal_label,omitempty"`
	TicketTypes *map[string]any `json:"ticket_types,omitempty"`
	Type *string `json:"type,omitempty"`
}

// TicketStateListMatch is the typed request payload for TicketState.ListTyped.
type TicketStateListMatch struct {
	Archived *bool `json:"archived,omitempty"`
	Category *string `json:"category,omitempty"`
	ExternalLabel *string `json:"external_label,omitempty"`
	Id *string `json:"id,omitempty"`
	InternalLabel *string `json:"internal_label,omitempty"`
	TicketTypes *map[string]any `json:"ticket_types,omitempty"`
	Type *string `json:"type,omitempty"`
}

// TicketType is the typed data model for the ticket_type entity.
type TicketType struct {
	Archived *bool `json:"archived,omitempty"`
	Category *string `json:"category,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id *string `json:"id,omitempty"`
	IsInternal *bool `json:"is_internal,omitempty"`
	Name *string `json:"name,omitempty"`
	TicketStates *map[string]any `json:"ticket_states,omitempty"`
	TicketTypeAttributes *map[string]any `json:"ticket_type_attributes,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// TicketTypeLoadMatch is the typed request payload for TicketType.LoadTyped.
type TicketTypeLoadMatch struct {
	Id string `json:"id"`
}

// TicketTypeListMatch is the typed request payload for TicketType.ListTyped.
type TicketTypeListMatch struct {
	Archived *bool `json:"archived,omitempty"`
	Category *string `json:"category,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id *string `json:"id,omitempty"`
	IsInternal *bool `json:"is_internal,omitempty"`
	Name *string `json:"name,omitempty"`
	TicketStates *map[string]any `json:"ticket_states,omitempty"`
	TicketTypeAttributes *map[string]any `json:"ticket_type_attributes,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// TicketTypeCreateData is the typed request payload for TicketType.CreateTyped.
type TicketTypeCreateData struct {
	Archived *bool `json:"archived,omitempty"`
	Category *string `json:"category,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id *string `json:"id,omitempty"`
	IsInternal *bool `json:"is_internal,omitempty"`
	Name *string `json:"name,omitempty"`
	TicketStates *map[string]any `json:"ticket_states,omitempty"`
	TicketTypeAttributes *map[string]any `json:"ticket_type_attributes,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// TicketTypeUpdateData is the typed request payload for TicketType.UpdateTyped.
type TicketTypeUpdateData struct {
	Id string `json:"id"`
	Archived *bool `json:"archived,omitempty"`
	Category *string `json:"category,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Icon *string `json:"icon,omitempty"`
	IsInternal *bool `json:"is_internal,omitempty"`
	Name *string `json:"name,omitempty"`
	TicketStates *map[string]any `json:"ticket_states,omitempty"`
	TicketTypeAttributes *map[string]any `json:"ticket_type_attributes,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	WorkspaceId *string `json:"workspace_id,omitempty"`
}

// TicketTypeAttribute is the typed data model for the ticket_type_attribute entity.
type TicketTypeAttribute struct {
	AllowMultipleValues *bool `json:"allow_multiple_values,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	DataType string `json:"data_type"`
	Description string `json:"description"`
	Id *string `json:"id,omitempty"`
	ListItems *string `json:"list_items,omitempty"`
	Multiline *bool `json:"multiline,omitempty"`
	Name string `json:"name"`
	RequiredToCreate *bool `json:"required_to_create,omitempty"`
	RequiredToCreateForContacts *bool `json:"required_to_create_for_contacts,omitempty"`
	VisibleOnCreate *bool `json:"visible_on_create,omitempty"`
	VisibleToContacts *bool `json:"visible_to_contacts,omitempty"`
}

// TicketTypeAttributeCreateData is the typed request payload for TicketTypeAttribute.CreateTyped.
type TicketTypeAttributeCreateData struct {
	Id string `json:"id"`
	AllowMultipleValues *bool `json:"allow_multiple_values,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	DataType string `json:"data_type"`
	Description string `json:"description"`
	ListItems *string `json:"list_items,omitempty"`
	Multiline *bool `json:"multiline,omitempty"`
	Name string `json:"name"`
	RequiredToCreate *bool `json:"required_to_create,omitempty"`
	RequiredToCreateForContacts *bool `json:"required_to_create_for_contacts,omitempty"`
	VisibleOnCreate *bool `json:"visible_on_create,omitempty"`
	VisibleToContacts *bool `json:"visible_to_contacts,omitempty"`
}

// TicketTypeAttributeUpdateData is the typed request payload for TicketTypeAttribute.UpdateTyped.
type TicketTypeAttributeUpdateData struct {
	Id string `json:"id"`
	TicketTypeId string `json:"ticket_type_id"`
	AllowMultipleValues *bool `json:"allow_multiple_values,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	DataType *string `json:"data_type,omitempty"`
	Description *string `json:"description,omitempty"`
	ListItems *string `json:"list_items,omitempty"`
	Multiline *bool `json:"multiline,omitempty"`
	Name *string `json:"name,omitempty"`
	RequiredToCreate *bool `json:"required_to_create,omitempty"`
	RequiredToCreateForContacts *bool `json:"required_to_create_for_contacts,omitempty"`
	VisibleOnCreate *bool `json:"visible_on_create,omitempty"`
	VisibleToContacts *bool `json:"visible_to_contacts,omitempty"`
}

// Visitor is the typed data model for the visitor entity.
type Visitor struct {
	Anonymous *bool `json:"anonymous,omitempty"`
	AppId *string `json:"app_id,omitempty"`
	Avatar *map[string]any `json:"avatar,omitempty"`
	Companies *map[string]any `json:"companies,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	DoNotTrack *bool `json:"do_not_track,omitempty"`
	Email *string `json:"email,omitempty"`
	HasHardBounced *bool `json:"has_hard_bounced,omitempty"`
	Id *string `json:"id,omitempty"`
	LasRequestAt *int `json:"las_request_at,omitempty"`
	LocationData *map[string]any `json:"location_data,omitempty"`
	MarkedEmailAsSpam *bool `json:"marked_email_as_spam,omitempty"`
	Name *string `json:"name,omitempty"`
	OwnerId *string `json:"owner_id,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Pseudonym *string `json:"pseudonym,omitempty"`
	Referrer *string `json:"referrer,omitempty"`
	RemoteCreatedAt *int `json:"remote_created_at,omitempty"`
	Segments *map[string]any `json:"segments,omitempty"`
	SessionCount *int `json:"session_count,omitempty"`
	SignedUpAt *int `json:"signed_up_at,omitempty"`
	SocialProfiles *map[string]any `json:"social_profiles,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	UnsubscribedFromEmails *bool `json:"unsubscribed_from_emails,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	UserId *string `json:"user_id,omitempty"`
	UtmCampaign *string `json:"utm_campaign,omitempty"`
	UtmContent *string `json:"utm_content,omitempty"`
	UtmMedium *string `json:"utm_medium,omitempty"`
	UtmSource *string `json:"utm_source,omitempty"`
	UtmTerm *string `json:"utm_term,omitempty"`
}

// VisitorLoadMatch is the typed request payload for Visitor.LoadTyped.
type VisitorLoadMatch struct {
	UserId string `json:"user_id"`
}

// VisitorUpdateData is the typed request payload for Visitor.UpdateTyped.
type VisitorUpdateData struct {
	Anonymous *bool `json:"anonymous,omitempty"`
	AppId *string `json:"app_id,omitempty"`
	Avatar *map[string]any `json:"avatar,omitempty"`
	Companies *map[string]any `json:"companies,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CustomAttributes *map[string]any `json:"custom_attributes,omitempty"`
	DoNotTrack *bool `json:"do_not_track,omitempty"`
	Email *string `json:"email,omitempty"`
	HasHardBounced *bool `json:"has_hard_bounced,omitempty"`
	Id *string `json:"id,omitempty"`
	LasRequestAt *int `json:"las_request_at,omitempty"`
	LocationData *map[string]any `json:"location_data,omitempty"`
	MarkedEmailAsSpam *bool `json:"marked_email_as_spam,omitempty"`
	Name *string `json:"name,omitempty"`
	OwnerId *string `json:"owner_id,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Pseudonym *string `json:"pseudonym,omitempty"`
	Referrer *string `json:"referrer,omitempty"`
	RemoteCreatedAt *int `json:"remote_created_at,omitempty"`
	Segments *map[string]any `json:"segments,omitempty"`
	SessionCount *int `json:"session_count,omitempty"`
	SignedUpAt *int `json:"signed_up_at,omitempty"`
	SocialProfiles *map[string]any `json:"social_profiles,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	UnsubscribedFromEmails *bool `json:"unsubscribed_from_emails,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	UserId *string `json:"user_id,omitempty"`
	UtmCampaign *string `json:"utm_campaign,omitempty"`
	UtmContent *string `json:"utm_content,omitempty"`
	UtmMedium *string `json:"utm_medium,omitempty"`
	UtmSource *string `json:"utm_source,omitempty"`
	UtmTerm *string `json:"utm_term,omitempty"`
}

// WhatsappMessageStatus is the typed data model for the whatsapp_message_status entity.
type WhatsappMessageStatus struct {
	Details *string `json:"details,omitempty"`
	Message *string `json:"message,omitempty"`
}

// WhatsappMessageStatusLoadMatch is the typed request payload for WhatsappMessageStatus.LoadTyped.
type WhatsappMessageStatusLoadMatch struct {
	MessageId string `json:"message_id"`
}

// WhatsappMessageStatusList is the typed data model for the whatsapp_message_status_list entity.
type WhatsappMessageStatusList struct {
	ConversationId string `json:"conversation_id"`
	CreatedAt int `json:"created_at"`
	Id string `json:"id"`
	Status string `json:"status"`
	TemplateName *string `json:"template_name,omitempty"`
	Type string `json:"type"`
	UpdatedAt int `json:"updated_at"`
	WhatsappMessageId string `json:"whatsapp_message_id"`
}

// WhatsappMessageStatusListListMatch is the typed request payload for WhatsappMessageStatusList.ListTyped.
type WhatsappMessageStatusListListMatch struct {
	PerPage *int `json:"per_page,omitempty"`
	RulesetId string `json:"ruleset_id"`
	StartingAfter *string `json:"starting_after,omitempty"`
}

// Workflow is the typed data model for the workflow entity.
type Workflow struct {
	Attributes *[]any `json:"attributes,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EmbeddedRules *[]any `json:"embedded_rules,omitempty"`
	Id *string `json:"id,omitempty"`
	PreferredDevices *[]any `json:"preferred_devices,omitempty"`
	Snapshot *map[string]any `json:"snapshot,omitempty"`
	State *string `json:"state,omitempty"`
	TargetChannels *[]any `json:"target_channels,omitempty"`
	Targeting *map[string]any `json:"targeting,omitempty"`
	Title *string `json:"title,omitempty"`
	TriggerType *string `json:"trigger_type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// WorkflowLoadMatch is the typed request payload for Workflow.LoadTyped.
type WorkflowLoadMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
