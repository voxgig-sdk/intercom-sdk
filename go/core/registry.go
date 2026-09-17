package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewActivityLogEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewActivityLogEventTypeEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewActivityLogListEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewAdminEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewAdminWithAppEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewAiCallEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewAiContentEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewArticleEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewArticleSearchEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewArticleVersionEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewArticleVersionListEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewAudienceEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewAwayStatusReasonEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewBannerEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewBannerDismissEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewBrandEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewCallEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewCompanyEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewCompanyAttachedContactEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewCompanyAttachedSegmentEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewCompanyListEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewCompanyScrollEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewContactEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewContactAttachedCompanyEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewContactListEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewContactSegmentEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewContentEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewContentImportSourceEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewContentSearchEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewContentSnippetEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewConversationEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewConversationAttributeEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewConversationAttributeListEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewConversationListEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewConversationParticipantEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewCustomObjectInstanceEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewDataEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewDataAttributeEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewDataConnectorEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewDataConnectorExecutionResultEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewDataConnectorExecutionResultListEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewDataEventEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewDataEventSummaryEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewDataExportEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewDeletedEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewDeletedArticleObjectEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewDeletedCompanyObjectEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewDeletedDataConnectorObjectEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewDeletedInternalArticleObjectEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewDeletedObjectEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewEmailEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewExternalPageEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewFinAgentEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewHandlingEventEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewHelpCenterEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewInternalArticleEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewInternalArticleSearchEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewIpAllowlistEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewJobEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewMacroEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewMergeHistoryEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewMessageEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewNewsItemEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewNewsfeedEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewNoteEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewOfficeHourEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewOfficeHoursExceptionEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewOfficeHoursScheduleEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewPaginatedEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewPhoneSwitchEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewReportingDataEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewReportingDataExportEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewSegmentEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewSideConversationEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewSubscriptionEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewSubscriptionTypeEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewTagEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewTeamEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewTeamMetricListEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewTicketEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewTicketListEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewTicketReplyEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewTicketStateEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewTicketTypeEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewTicketTypeAttributeEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewVisitorEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewWhatsappMessageStatusEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewWhatsappMessageStatusListEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

var NewWorkflowEntityFunc func(client *IntercomSDK, entopts map[string]any) IntercomEntity

