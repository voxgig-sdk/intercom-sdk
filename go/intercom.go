package voxgigintercomsdk

import (
	"github.com/voxgig-sdk/intercom-sdk/go/core"
	"github.com/voxgig-sdk/intercom-sdk/go/entity"
	"github.com/voxgig-sdk/intercom-sdk/go/feature"
	_ "github.com/voxgig-sdk/intercom-sdk/go/utility"
)

// Type aliases preserve external API.
type IntercomSDK = core.IntercomSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type IntercomEntity = core.IntercomEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type IntercomError = core.IntercomError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewActivityLogEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewActivityLogEntity(client, entopts)
	}
	core.NewActivityLogEventTypeEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewActivityLogEventTypeEntity(client, entopts)
	}
	core.NewActivityLogListEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewActivityLogListEntity(client, entopts)
	}
	core.NewAdminEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewAdminEntity(client, entopts)
	}
	core.NewAdminWithAppEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewAdminWithAppEntity(client, entopts)
	}
	core.NewAiCallEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewAiCallEntity(client, entopts)
	}
	core.NewAiContentEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewAiContentEntity(client, entopts)
	}
	core.NewArticleEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewArticleEntity(client, entopts)
	}
	core.NewArticleSearchEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewArticleSearchEntity(client, entopts)
	}
	core.NewArticleVersionEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewArticleVersionEntity(client, entopts)
	}
	core.NewArticleVersionListEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewArticleVersionListEntity(client, entopts)
	}
	core.NewAudienceEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewAudienceEntity(client, entopts)
	}
	core.NewAwayStatusReasonEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewAwayStatusReasonEntity(client, entopts)
	}
	core.NewBannerEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewBannerEntity(client, entopts)
	}
	core.NewBannerDismissEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewBannerDismissEntity(client, entopts)
	}
	core.NewBrandEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewBrandEntity(client, entopts)
	}
	core.NewCallEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewCallEntity(client, entopts)
	}
	core.NewCompanyEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewCompanyEntity(client, entopts)
	}
	core.NewCompanyAttachedContactEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewCompanyAttachedContactEntity(client, entopts)
	}
	core.NewCompanyAttachedSegmentEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewCompanyAttachedSegmentEntity(client, entopts)
	}
	core.NewCompanyListEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewCompanyListEntity(client, entopts)
	}
	core.NewCompanyScrollEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewCompanyScrollEntity(client, entopts)
	}
	core.NewContactEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewContactEntity(client, entopts)
	}
	core.NewContactAttachedCompanyEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewContactAttachedCompanyEntity(client, entopts)
	}
	core.NewContactListEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewContactListEntity(client, entopts)
	}
	core.NewContactSegmentEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewContactSegmentEntity(client, entopts)
	}
	core.NewContentEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewContentEntity(client, entopts)
	}
	core.NewContentImportSourceEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewContentImportSourceEntity(client, entopts)
	}
	core.NewContentSearchEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewContentSearchEntity(client, entopts)
	}
	core.NewContentSnippetEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewContentSnippetEntity(client, entopts)
	}
	core.NewConversationEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewConversationEntity(client, entopts)
	}
	core.NewConversationAttributeEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewConversationAttributeEntity(client, entopts)
	}
	core.NewConversationAttributeListEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewConversationAttributeListEntity(client, entopts)
	}
	core.NewConversationListEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewConversationListEntity(client, entopts)
	}
	core.NewConversationParticipantEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewConversationParticipantEntity(client, entopts)
	}
	core.NewCustomObjectInstanceEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewCustomObjectInstanceEntity(client, entopts)
	}
	core.NewDataEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewDataEntity(client, entopts)
	}
	core.NewDataAttributeEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewDataAttributeEntity(client, entopts)
	}
	core.NewDataConnectorEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewDataConnectorEntity(client, entopts)
	}
	core.NewDataConnectorExecutionResultEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewDataConnectorExecutionResultEntity(client, entopts)
	}
	core.NewDataConnectorExecutionResultListEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewDataConnectorExecutionResultListEntity(client, entopts)
	}
	core.NewDataEventEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewDataEventEntity(client, entopts)
	}
	core.NewDataEventSummaryEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewDataEventSummaryEntity(client, entopts)
	}
	core.NewDataExportEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewDataExportEntity(client, entopts)
	}
	core.NewDeletedEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewDeletedEntity(client, entopts)
	}
	core.NewDeletedArticleObjectEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewDeletedArticleObjectEntity(client, entopts)
	}
	core.NewDeletedCompanyObjectEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewDeletedCompanyObjectEntity(client, entopts)
	}
	core.NewDeletedDataConnectorObjectEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewDeletedDataConnectorObjectEntity(client, entopts)
	}
	core.NewDeletedInternalArticleObjectEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewDeletedInternalArticleObjectEntity(client, entopts)
	}
	core.NewDeletedObjectEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewDeletedObjectEntity(client, entopts)
	}
	core.NewEmailEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewEmailEntity(client, entopts)
	}
	core.NewExternalPageEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewExternalPageEntity(client, entopts)
	}
	core.NewFinAgentEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewFinAgentEntity(client, entopts)
	}
	core.NewHandlingEventEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewHandlingEventEntity(client, entopts)
	}
	core.NewHelpCenterEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewHelpCenterEntity(client, entopts)
	}
	core.NewInternalArticleEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewInternalArticleEntity(client, entopts)
	}
	core.NewInternalArticleSearchEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewInternalArticleSearchEntity(client, entopts)
	}
	core.NewIpAllowlistEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewIpAllowlistEntity(client, entopts)
	}
	core.NewJobEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewJobEntity(client, entopts)
	}
	core.NewMacroEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewMacroEntity(client, entopts)
	}
	core.NewMergeHistoryEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewMergeHistoryEntity(client, entopts)
	}
	core.NewMessageEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewMessageEntity(client, entopts)
	}
	core.NewNewsItemEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewNewsItemEntity(client, entopts)
	}
	core.NewNewsfeedEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewNewsfeedEntity(client, entopts)
	}
	core.NewNoteEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewNoteEntity(client, entopts)
	}
	core.NewOfficeHourEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewOfficeHourEntity(client, entopts)
	}
	core.NewOfficeHoursExceptionEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewOfficeHoursExceptionEntity(client, entopts)
	}
	core.NewOfficeHoursScheduleEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewOfficeHoursScheduleEntity(client, entopts)
	}
	core.NewPaginatedEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewPaginatedEntity(client, entopts)
	}
	core.NewPhoneSwitchEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewPhoneSwitchEntity(client, entopts)
	}
	core.NewReportingDataEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewReportingDataEntity(client, entopts)
	}
	core.NewReportingDataExportEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewReportingDataExportEntity(client, entopts)
	}
	core.NewSegmentEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewSegmentEntity(client, entopts)
	}
	core.NewSideConversationEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewSideConversationEntity(client, entopts)
	}
	core.NewSubscriptionEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewSubscriptionEntity(client, entopts)
	}
	core.NewSubscriptionTypeEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewSubscriptionTypeEntity(client, entopts)
	}
	core.NewTagEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewTagEntity(client, entopts)
	}
	core.NewTeamEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewTeamEntity(client, entopts)
	}
	core.NewTeamMetricListEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewTeamMetricListEntity(client, entopts)
	}
	core.NewTicketEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewTicketEntity(client, entopts)
	}
	core.NewTicketListEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewTicketListEntity(client, entopts)
	}
	core.NewTicketReplyEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewTicketReplyEntity(client, entopts)
	}
	core.NewTicketStateEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewTicketStateEntity(client, entopts)
	}
	core.NewTicketTypeEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewTicketTypeEntity(client, entopts)
	}
	core.NewTicketTypeAttributeEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewTicketTypeAttributeEntity(client, entopts)
	}
	core.NewVisitorEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewVisitorEntity(client, entopts)
	}
	core.NewWhatsappMessageStatusEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewWhatsappMessageStatusEntity(client, entopts)
	}
	core.NewWhatsappMessageStatusListEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewWhatsappMessageStatusListEntity(client, entopts)
	}
	core.NewWorkflowEntityFunc = func(client *core.IntercomSDK, entopts map[string]any) core.IntercomEntity {
		return entity.NewWorkflowEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewIntercomSDK = core.NewIntercomSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewIntercomSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *IntercomSDK  { return NewIntercomSDK(nil) }
func Test() *IntercomSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
