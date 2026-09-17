package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Intercom",
			"slug": "intercom",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.intercom.io",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"activity_log": map[string]any{},
				"activity_log_event_type": map[string]any{},
				"activity_log_list": map[string]any{},
				"admin": map[string]any{},
				"admin_with_app": map[string]any{},
				"ai_call": map[string]any{},
				"ai_content": map[string]any{},
				"article": map[string]any{},
				"article_search": map[string]any{},
				"article_version": map[string]any{},
				"article_version_list": map[string]any{},
				"audience": map[string]any{},
				"away_status_reason": map[string]any{},
				"banner": map[string]any{},
				"banner_dismiss": map[string]any{},
				"brand": map[string]any{},
				"call": map[string]any{},
				"company": map[string]any{},
				"company_attached_contact": map[string]any{},
				"company_attached_segment": map[string]any{},
				"company_list": map[string]any{},
				"company_scroll": map[string]any{},
				"contact": map[string]any{},
				"contact_attached_company": map[string]any{},
				"contact_list": map[string]any{},
				"contact_segment": map[string]any{},
				"content": map[string]any{},
				"content_import_source": map[string]any{},
				"content_search": map[string]any{},
				"content_snippet": map[string]any{},
				"conversation": map[string]any{},
				"conversation_attribute": map[string]any{},
				"conversation_attribute_list": map[string]any{},
				"conversation_list": map[string]any{},
				"conversation_participant": map[string]any{},
				"custom_object_instance": map[string]any{},
				"data": map[string]any{},
				"data_attribute": map[string]any{},
				"data_connector": map[string]any{},
				"data_connector_execution_result": map[string]any{},
				"data_connector_execution_result_list": map[string]any{},
				"data_event": map[string]any{},
				"data_event_summary": map[string]any{},
				"data_export": map[string]any{},
				"deleted": map[string]any{},
				"deleted_article_object": map[string]any{},
				"deleted_company_object": map[string]any{},
				"deleted_data_connector_object": map[string]any{},
				"deleted_internal_article_object": map[string]any{},
				"deleted_object": map[string]any{},
				"email": map[string]any{},
				"external_page": map[string]any{},
				"fin_agent": map[string]any{},
				"handling_event": map[string]any{},
				"help_center": map[string]any{},
				"internal_article": map[string]any{},
				"internal_article_search": map[string]any{},
				"ip_allowlist": map[string]any{},
				"job": map[string]any{},
				"macro": map[string]any{},
				"merge_history": map[string]any{},
				"message": map[string]any{},
				"news_item": map[string]any{},
				"newsfeed": map[string]any{},
				"note": map[string]any{},
				"office_hour": map[string]any{},
				"office_hours_exception": map[string]any{},
				"office_hours_schedule": map[string]any{},
				"paginated": map[string]any{},
				"phone_switch": map[string]any{},
				"reporting_data": map[string]any{},
				"reporting_data_export": map[string]any{},
				"segment": map[string]any{},
				"side_conversation": map[string]any{},
				"subscription": map[string]any{},
				"subscription_type": map[string]any{},
				"tag": map[string]any{},
				"team": map[string]any{},
				"team_metric_list": map[string]any{},
				"ticket": map[string]any{},
				"ticket_list": map[string]any{},
				"ticket_reply": map[string]any{},
				"ticket_state": map[string]any{},
				"ticket_type": map[string]any{},
				"ticket_type_attribute": map[string]any{},
				"visitor": map[string]any{},
				"whatsapp_message_status": map[string]any{},
				"whatsapp_message_status_list": map[string]any{},
				"workflow": map[string]any{},
			},
		},
		"entity": map[string]any{
			"activity_log": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "activity_description",
						"short": "A sentence or two describing the activity.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "activity_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "The time the activity was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The id representing the activity.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metadata",
						"short": "Additional data provided about Admin activity.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "performed_by",
						"short": "Details about the Admin involved in the activity.",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "activity_log",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "1677253093",
											"kind": "query",
											"name": "created_at_after",
											"orig": "created_at_after",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "1677861493",
											"kind": "query",
											"name": "created_at_before",
											"orig": "created_at_before",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admins/activity_logs",
								"segments": []any{
									map[string]any{
										"lit": "admins",
									},
									map[string]any{
										"lit": "activity_logs",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"created_at_after",
										"created_at_before",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admins",
									"activity_logs",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"activity_log_event_type": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "event_types",
						"short": "An array of activity log event type strings.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"short": "String representing the object's type.",
						"type": "`$STRING`",
					},
				},
				"name": "activity_log_event_type",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admins/activity_log_event_types",
								"segments": []any{
									map[string]any{
										"lit": "admins",
									},
									map[string]any{
										"lit": "activity_log_event_types",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.event_types`",
								},
								"parts": []any{
									"admins",
									"activity_log_event_types",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"activity_log_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "activity_logs",
						"short": "An array of activity logs",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at_after",
						"req": true,
						"short": "The start date that you request data for.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at_before",
						"short": "The end date that you request data for.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "event_types",
						"short": "An optional list of event types to filter activity logs by.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "page",
						"short": "The page number of results to return.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pages",
						"short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "per_page",
						"short": "The number of results per page.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"short": "String representing the object's type.",
						"type": "`$STRING`",
					},
				},
				"name": "activity_log_list",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admins/activity_logs/search",
								"segments": []any{
									map[string]any{
										"lit": "admins",
									},
									map[string]any{
										"lit": "activity_logs",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admins",
									"activity_logs",
									"search",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"admin": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "uri",
						"name": "avatar",
						"short": "Image for the associated team or teammate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "away_mode_enabled",
						"short": "Identifies if this admin is currently set in away mode.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "away_mode_reassign",
						"short": "Identifies if this admin is set to automatically reassign new conversations to the apps default inbox.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "away_status_reason_id",
						"short": "The unique identifier of the away status reason",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "email",
						"short": "The email of the admin.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "has_inbox_seat",
						"short": "Identifies if this admin has a paid inbox seat to restrict/allow features that require them.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"short": "The id representing the admin.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "job_title",
						"short": "The job title of the admin.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the admin.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"short": "The role assigned to this admin.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "team_ids",
						"short": "This object represents the avatar associated with the admin.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "team_priority_level",
						"short": "Admin priority levels for teams",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"short": "String representing the object's type.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "admin",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "display_avatar",
											"orig": "display_avatar",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admins",
								"segments": []any{
									map[string]any{
										"lit": "admins",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"display_avatar",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.admins`",
								},
								"parts": []any{
									"admins",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "id",
											"orig": "admin_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admins/{admin_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"admin_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "admins",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admins",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "admin_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/admins/{admin_id}/away",
								"rename": map[string]any{
									"param": map[string]any{
										"admin_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "admins",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "away",
									},
								},
								"select": map[string]any{
									"$action": "away",
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admins",
									"{id}",
									"away",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"admin_with_app": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app",
						"short": "App that the admin belongs to.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "avatar",
						"short": "This object represents the avatar associated with the admin.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "away_mode_enabled",
						"short": "Identifies if this admin is currently set in away mode.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "away_mode_reassign",
						"short": "Identifies if this admin is set to automatically reassign new conversations to the apps default inbox.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "email",
						"short": "The email of the admin.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "email_verified",
						"short": "Identifies if this admin's email is verified.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "has_inbox_seat",
						"short": "Identifies if this admin has a paid inbox seat to restrict/allow features that require them.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"short": "The id representing the admin.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "job_title",
						"short": "The job title of the admin.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the admin.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "team_ids",
						"short": "This is a list of ids of the teams that this admin is part of.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"short": "String representing the object's type.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "admin_with_app",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/me",
								"segments": []any{
									map[string]any{
										"lit": "me",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"me",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ai_call": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_id",
						"short": "The workspace identifier",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "call_id",
						"req": true,
						"short": "External call identifier from the call provider",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "call_summary",
						"short": "Summary of the call conversation, truncated to 256 characters.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "call_transcript",
						"short": "Array of transcript entries for the call",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "data",
						"short": "Additional metadata about the call",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "external_call_id",
						"short": "The external call identifier from the call provider",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the external reference",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "intent",
						"short": "Array of intent classifications for the call",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "intercom_call_id",
						"short": "The Intercom call identifier, if the call has been matched",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "intercom_conversation_id",
						"short": "The Intercom conversation identifier, if a conversation has been created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "phone_number",
						"req": true,
						"short": "Phone number in E.164 format for the call",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source",
						"short": "Source of the call.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "Status of the call.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_phone_number",
						"short": "Phone number in E.164 format for the call",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ai_call",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/fin_voice/register",
								"segments": []any{
									map[string]any{
										"lit": "fin_voice",
									},
									map[string]any{
										"lit": "register",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"fin_voice",
									"register",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "conversation_id",
											"orig": "conversation_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/fin_voice/conversation/{conversation_id}",
								"segments": []any{
									map[string]any{
										"lit": "fin_voice",
									},
									map[string]any{
										"lit": "conversation",
									},
									map[string]any{
										"var": "conversation_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"conversation_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"fin_voice",
									"conversation",
									"{conversation_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "external_id",
											"orig": "external_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/fin_voice/external_id/{external_id}",
								"segments": []any{
									map[string]any{
										"lit": "fin_voice",
									},
									map[string]any{
										"lit": "external_id",
									},
									map[string]any{
										"var": "external_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"external_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"fin_voice",
									"external_id",
									"{external_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/fin_voice/collect/{id}",
								"segments": []any{
									map[string]any{
										"lit": "fin_voice",
									},
									map[string]any{
										"lit": "collect",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"fin_voice",
									"collect",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"conversation",
						},
						[]any{
							"external_id",
						},
					},
				},
			},
			"ai_content": map[string]any{
				"fields": []any{},
				"name": "ai_content",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "source_id",
											"orig": "source_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/ai/content_import_sources/{source_id}",
								"segments": []any{
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "content_import_sources",
									},
									map[string]any{
										"var": "source_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"source_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ai",
									"content_import_sources",
									"{source_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"content_import_source",
						},
					},
				},
			},
			"article": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ai_chatbot_availability",
						"short": "Whether the article should be available for AI Chatbot (Fin).",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ai_copilot_availability",
						"short": "Whether the article should be available for AI Copilot.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ai_sales_agent_availability",
						"short": "Whether the article should be available for AI Sales Agent.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "audience_ids",
						"short": "The list of audience IDs to assign to this article for Fin AI Agent targeting.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "author_id",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The id of the author of the article.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "body",
						"short": "The content of the article in HTML.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "body_markdown",
						"short": "The content of the article in markdown.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "conversions",
						"short": "The number of conversations started from the article.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "The time when the article was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_by_id",
						"readOnly": true,
						"short": "The ID of the teammate who created the article.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "default_locale",
						"short": "The default locale of the help center.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "The description of the article.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "draft_updated_at",
						"short": "The time, in seconds, when the staged draft was last edited, or `null` when there is no staged draft.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "exclude_from_article_suggestions",
						"readOnly": true,
						"short": "Whether the article is excluded from Fin AI Agent article suggestions.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "fin_involvements",
						"readOnly": true,
						"short": "The number of conversations in which Fin AI Agent used this article, summed across all of the article's locales.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "float",
						"name": "fin_resolution_rate",
						"readOnly": true,
						"short": "The percentage of Fin AI Agent involvements that resulted in a resolution (fin_resolutions / fin_involvements * 100).",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fin_resolutions",
						"readOnly": true,
						"short": "The number of conversations Fin AI Agent resolved using this article, summed across all of the article's locales.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "float",
						"name": "happy_reaction_percentage",
						"short": "The percentage of happy reactions the article has received against other types of reaction.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "has_unpublished_changes",
						"short": "Whether the published article has unpublished changes staged as a draft on top of its live content.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "help_center_audience",
						"readOnly": true,
						"short": "The audience that can view this article in the Help Center.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the article which is given by Intercom.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "float",
						"name": "neutral_reaction_percentage",
						"short": "The percentage of neutral reactions the article has received against other types of reaction.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "parent_id",
						"short": "The id of the article's parent collection or section.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "parent_ids",
						"short": "The ids of the article's parent collections or sections.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "parent_type",
						"short": "The type of parent, which can either be a `collection` or `section`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reactions",
						"short": "The number of total reactions the article has received.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "float",
						"name": "sad_reaction_percentage",
						"short": "The percentage of sad reactions the article has received against",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "scheduled_publish_at",
						"readOnly": true,
						"short": "ISO 8601 timestamp at which to schedule a future publish of the article.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "scheduled_unpublish_at",
						"readOnly": true,
						"short": "ISO 8601 timestamp at which to schedule a future unpublish of the article.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"short": "Whether the article will be `published` or will be a `draft`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"short": "A list of tags objects associated with a conversation",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "title",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The title of the article.For multilingual articles, this will be the title of the default language's content.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "translated_content",
						"short": "The Translated Content of an Article.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object - `article_statistics`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "The time when the article was last updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "updated_by_id",
						"readOnly": true,
						"short": "The ID of the teammate who last updated the article.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "url",
						"short": "The URL of the article.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "views",
						"short": "The number of total views the article has received.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "workspace_id",
						"short": "The id of the workspace which the article belongs to.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "article",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/articles/{id}/draft/publish",
								"segments": []any{
									map[string]any{
										"lit": "articles",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "draft",
									},
									map[string]any{
										"lit": "publish",
									},
								},
								"select": map[string]any{
									"$action": "draft_publish",
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.statistics`",
								},
								"parts": []any{
									"articles",
									"{id}",
									"draft",
									"publish",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/articles",
								"segments": []any{
									map[string]any{
										"lit": "articles",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.statistics`",
								},
								"parts": []any{
									"articles",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/articles/{id}/draft",
								"segments": []any{
									map[string]any{
										"lit": "articles",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "draft",
									},
								},
								"select": map[string]any{
									"$action": "draft",
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"articles",
									"{id}",
									"draft",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/articles",
								"segments": []any{
									map[string]any{
										"lit": "articles",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"articles",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "id",
											"orig": "article_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/articles/{article_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"article_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "articles",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.statistics`",
								},
								"parts": []any{
									"articles",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "id",
											"orig": "article_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/articles/{article_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"article_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "articles",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.statistics`",
								},
								"parts": []any{
									"articles",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/articles/{id}/draft",
								"segments": []any{
									map[string]any{
										"lit": "articles",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "draft",
									},
								},
								"select": map[string]any{
									"$action": "draft",
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.statistics`",
								},
								"parts": []any{
									"articles",
									"{id}",
									"draft",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"article_search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"short": "An object containing the results of the search.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "pages",
						"short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total_count",
						"short": "The total number of Articles matching the search query",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of the object - `list`.",
						"type": "`$STRING`",
					},
				},
				"name": "article_search",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 123,
											"kind": "query",
											"name": "help_center_id",
											"orig": "help_center_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "highlight",
											"orig": "highlight",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "Getting started",
											"kind": "query",
											"name": "phrase",
											"orig": "phrase",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "published",
											"kind": "query",
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/articles/search",
								"segments": []any{
									map[string]any{
										"lit": "articles",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"help_center_id",
										"highlight",
										"intercom_version",
										"phrase",
										"state",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"articles",
									"search",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"article_version": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "article_id",
						"short": "The unique identifier of the article this version belongs to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "author_id",
						"short": "The id of the teammate listed as the article's author at this version.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "body",
						"short": "The HTML body of the article at this version.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "body_markdown",
						"short": "The Markdown body of the article at this version.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "The time the version was created, as a UTC Unix timestamp.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_by_id",
						"short": "The id of the teammate who created this version.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_via",
						"short": "How this version was created (for example `web`, `api`).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "The description of the article at this version.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "from_version_id",
						"short": "The id of the version this version was created from, or `null` if this is the first version.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the version.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"short": "Whether this version is the currently published version of the article (`published`) or an earlier non-live version (`draft`).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "The title of the article at this version.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "String representing the object's type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "The time the version was last updated, as a UTC Unix timestamp.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "article_version",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "article_id",
											"orig": "article_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "301",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "locale",
											"orig": "locale",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/articles/{article_id}/versions/{id}",
								"segments": []any{
									map[string]any{
										"lit": "articles",
									},
									map[string]any{
										"var": "article_id",
									},
									map[string]any{
										"lit": "versions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"article_id",
										"id",
										"intercom_version",
										"locale",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"articles",
									"{article_id}",
									"versions",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"article",
						},
					},
				},
			},
			"article_version_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "article_version_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "id",
											"orig": "article_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "locale",
											"orig": "locale",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 25,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/articles/{article_id}/versions",
								"rename": map[string]any{
									"param": map[string]any{
										"article_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "articles",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "versions",
									},
								},
								"select": map[string]any{
									"$action": "versions",
									"exist": []any{
										"id",
										"intercom_version",
										"locale",
										"page",
										"per_page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"articles",
									"{id}",
									"versions",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"audience": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"readOnly": true,
						"short": "The time the audience was created as a Unix timestamp.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"readOnly": true,
						"short": "The unique identifier representing the audience.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The name of the audience.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "predicates",
						"short": "The predicates that define which contacts belong to the audience.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "role_predicates",
						"short": "Role-based predicates that further filter audience membership by contact role.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"readOnly": true,
						"short": "The type of object.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"readOnly": true,
						"short": "The time the audience was last updated as a Unix timestamp.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "audience",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/audiences",
								"segments": []any{
									map[string]any{
										"lit": "audiences",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"audiences",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/audiences",
								"segments": []any{
									map[string]any{
										"lit": "audiences",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"page",
										"per_page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"audiences",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/audiences/{id}",
								"segments": []any{
									map[string]any{
										"lit": "audiences",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"audiences",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/audiences/{id}",
								"segments": []any{
									map[string]any{
										"lit": "audiences",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"audiences",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/audiences/{id}",
								"segments": []any{
									map[string]any{
										"lit": "audiences",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"audiences",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"away_status_reason": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"short": "The Unix timestamp when the status reason was created",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "deleted",
						"short": "Whether the status reason has been soft deleted",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "emoji",
						"short": "The emoji associated with the status reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the away status reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "label",
						"short": "The display text for the away status reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "order",
						"short": "The display order of the status reason",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"short": "The Unix timestamp when the status reason was last updated",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "away_status_reason",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/away_status_reasons",
								"segments": []any{
									map[string]any{
										"lit": "away_status_reasons",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"away_status_reasons",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"banner": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action",
						"short": "The action a contact can take on the banner, or `null` when the banner has no action.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "body",
						"short": "The banner's body content as HTML.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "client_targeting",
						"short": "Reserved for future use.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "timestamp",
						"name": "created_at",
						"short": "The time the contact's view of this banner was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The id of the banner.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "position",
						"short": "Where the banner is positioned.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "show_dismiss_button",
						"short": "Whether the banner should display a dismiss control.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "style",
						"short": "How the banner is displayed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "The banner's title.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "String representing the object's type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "view_id",
						"short": "The id of the contact's view of this banner.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "banner",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "contact_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/contacts/{id}/banners",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "contact_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "contact_id",
									},
									map[string]any{
										"lit": "banners",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contact_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"contacts",
									"{contact_id}",
									"banners",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"contact",
						},
					},
				},
			},
			"banner_dismiss": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dismissed",
						"short": "Whether the banner view is dismissed.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "String representing the object's type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "view_id",
						"short": "The id of the dismissed banner view.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "banner_dismiss",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "contact_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "view_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/contacts/{id}/banners/{view_id}/dismiss",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "contact_id",
										"view_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "contact_id",
									},
									map[string]any{
										"lit": "banners",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "dismiss",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contact_id",
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"{contact_id}",
									"banners",
									"{id}",
									"dismiss",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"contact",
						},
					},
				},
			},
			"brand": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "Unix timestamp of brand creation",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "default_address_settings_id",
						"short": "Default email settings ID for this brand",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "help_center_id",
						"short": "Associated help center identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique brand identifier.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_default",
						"short": "Whether this is the workspace's default brand",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"short": "Display name of the brand",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "Unix timestamp of last modification",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "brand",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/brands",
								"segments": []any{
									map[string]any{
										"lit": "brands",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"brands",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/brands/{id}",
								"segments": []any{
									map[string]any{
										"lit": "brands",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"brands",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"call": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "admin_id",
						"short": "The id of the admin associated with the call, if any.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "answered_at",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "call_type",
						"short": "The type of call.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "contact_id",
						"short": "The id of the contact associated with the call, if any.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "conversation_id",
						"short": "The id of the conversation associated with the call, if any.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "direction",
						"short": "The direction of the call.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ended_at",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "ended_reason",
						"short": "The reason for the call end, if applicable.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "fin_recording_url",
						"short": "API URL to the AI Agent (Fin) call recording if available.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "fin_transcription_url",
						"short": "API URL to the AI Agent (Fin) call transcript if available.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The id of the call.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "initiated_at",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "phone",
						"short": "The phone number involved in the call, in E.164 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "recording_url",
						"short": "API URL to download or redirect to the call recording if available.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"short": "The current state of the call.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "transcription_url",
						"short": "API URL to download or redirect to the call transcript if available.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "String representing the object's type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "call",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/calls/search",
								"segments": []any{
									map[string]any{
										"lit": "calls",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"select": map[string]any{
									"$action": "search",
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"calls",
									"search",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 25,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/calls",
								"segments": []any{
									map[string]any{
										"lit": "calls",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"page",
										"per_page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"calls",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "call_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/calls/{call_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"call_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "calls",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"calls",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "call_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/calls/{call_id}/recording",
								"rename": map[string]any{
									"param": map[string]any{
										"call_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "calls",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "recording",
									},
								},
								"select": map[string]any{
									"$action": "recording",
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"calls",
									"{id}",
									"recording",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "call_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/calls/{call_id}/transcript",
								"rename": map[string]any{
									"param": map[string]any{
										"call_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "calls",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "transcript",
									},
								},
								"select": map[string]any{
									"$action": "transcript",
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"calls",
									"{id}",
									"transcript",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "phone_number",
											"orig": "phone_number",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/fin_voice/phone_number/{phone_number}",
								"segments": []any{
									map[string]any{
										"lit": "fin_voice",
									},
									map[string]any{
										"lit": "phone_number",
									},
									map[string]any{
										"var": "phone_number",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"phone_number",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"fin_voice",
									"phone_number",
									"{phone_number}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"phone_number",
						},
					},
				},
			},
			"company": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_id",
						"short": "The Intercom defined code of the workspace the company is associated to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "company_id",
						"short": "The company id you have defined for the company.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"short": "The time the company was added in Intercom.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "custom_attributes",
						"short": "The custom attributes you have set on the company.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The Intercom defined id representing the company.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "industry",
						"short": "The industry that the company operates in.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_request_at",
						"short": "The time the company last recorded making a request.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "monthly_spend",
						"short": "How much revenue the company generates for your business.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the company.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "notes",
						"short": "The list of notes associated with the company",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "plan",
						"short": "The name of the plan you have associated with the company.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "remote_created_at",
						"short": "The time the company was created by you.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "segments",
						"short": "The list of segments associated with the company",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "session_count",
						"short": "How many sessions the company has recorded.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "size",
						"short": "The number of employees in the company.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tags",
						"short": "The list of tags associated with the company",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"short": "Value is `company`",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "update_last_request_at",
						"short": "Set to true to update the company's last seen time to now.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "updated_at",
						"short": "The last time the company was updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "user_count",
						"short": "The number of users in the company.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "website",
						"short": "The URL for the company website.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "company",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "contact_id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/contacts/{contact_id}/companies",
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "contact_id",
									},
									map[string]any{
										"lit": "companies",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contact_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"{contact_id}",
									"companies",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/companies",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"companies",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "12345",
											"kind": "query",
											"name": "company_id",
											"orig": "company_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "my company",
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 15,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "98765",
											"kind": "query",
											"name": "segment_id",
											"orig": "segment_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "678910",
											"kind": "query",
											"name": "tag_id",
											"orig": "tag_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"intercom_version",
										"name",
										"page",
										"per_page",
										"segment_id",
										"tag_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"companies",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{company_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"company_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"companies",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "58a430d35458202d41b1e65b",
											"kind": "param",
											"name": "contact_id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "58a430d35458202d41b1e65b",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/contacts/{contact_id}/companies/{company_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"company_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "contact_id",
									},
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contact_id",
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"{contact_id}",
									"companies",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/companies/{company_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"company_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"companies",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"contact",
						},
					},
				},
			},
			"company_attached_contact": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "android_app_name",
						"short": "The name of the Android app which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "android_app_version",
						"short": "The version of the Android app which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "android_device",
						"short": "The Android device which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "android_last_seen_at",
						"short": "(Unix timestamp in seconds) The time when the contact was last seen on an Android device.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "android_os_version",
						"short": "The version of the Android OS which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "android_sdk_version",
						"short": "The version of the Android SDK which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "avatar",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "browser",
						"short": "The name of the browser which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "browser_language",
						"short": "The language set by the browser which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "browser_version",
						"short": "The version of the browser which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "companies",
						"short": "An object with metadata about companies attached to a contact .",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "(Unix timestamp in seconds) The time when the contact was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "custom_attributes",
						"short": "The custom attributes which are set for the contact.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "email",
						"short": "The contact's email.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "email_domain",
						"short": "The contact's email domain.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_id",
						"short": "The unique identifier for the contact which is provided by the Client.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "has_hard_bounced",
						"short": "Whether the contact has had an email sent to them hard bounce.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the contact which is given by Intercom.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ios_app_name",
						"short": "The name of the iOS app which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ios_app_version",
						"short": "The version of the iOS app which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ios_device",
						"short": "The iOS device which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "ios_last_seen_at",
						"short": "(Unix timestamp in seconds) The last time the contact used the iOS app.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ios_os_version",
						"short": "The version of iOS which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ios_sdk_version",
						"short": "The version of the iOS SDK which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language_override",
						"short": "A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "last_contacted_at",
						"short": "(Unix timestamp in seconds) The time when the contact was last messaged.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "last_email_clicked_at",
						"short": "(Unix timestamp in seconds) The time when the contact last clicked a link in an email.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "last_email_opened_at",
						"short": "(Unix timestamp in seconds) The time when the contact last opened an email.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "last_replied_at",
						"short": "(Unix timestamp in seconds) The time when the contact last messaged in.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "last_seen_at",
						"short": "(Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually).",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "location",
						"short": "An object containing location meta data about a Intercom contact.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "marked_email_as_spam",
						"short": "Whether the contact has marked an email sent to them as spam.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "merge_history",
						"short": "A list of contacts that were merged into this contact.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"short": "The contacts name.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "notes",
						"short": "An object containing notes meta data about the notes that a contact has.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "os",
						"short": "The operating system which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "owner_id",
						"short": "The id of an admin that has been assigned account ownership of the contact.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "phone",
						"short": "The contacts phone.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"short": "The role of the contact.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "signed_up_at",
						"short": "(Unix timestamp in seconds) The time specified for when a contact signed up.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "social_profiles",
						"short": "An object containing social profiles that a contact has.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tags",
						"short": "An object containing tags meta data about the tags that a contact has.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unsubscribed_from_emails",
						"short": "Whether the contact is unsubscribed from emails.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "(Unix timestamp in seconds) The time when the contact was last updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "workspace_id",
						"short": "The id of the workspace which the contact belongs to.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "company_attached_contact",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{company_id}/contacts",
								"rename": map[string]any{
									"param": map[string]any{
										"company_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "contacts",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"companies",
									"{id}",
									"contacts",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"company_attached_segment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"short": "The number of items in the user segment.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_at",
						"short": "The time the segment was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier representing the segment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the segment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "person_type",
						"short": "Type of the contact: contact (lead) or user.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"short": "The time the segment was updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "company_attached_segment",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
											"kind": "param",
											"name": "id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{company_id}/segments",
								"rename": map[string]any{
									"param": map[string]any{
										"company_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "segments",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"companies",
									"{id}",
									"segments",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"company_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"short": "An array containing Company Objects.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pages",
						"short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total_count",
						"short": "The total number of companies.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object - `list`.",
						"type": "`$STRING`",
					},
				},
				"name": "company_list",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "desc",
											"kind": "query",
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 15,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/companies/list",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"lit": "list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"order",
										"page",
										"per_page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"companies",
									"list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"company_scroll": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_id",
						"short": "The Intercom defined code of the workspace the company is associated to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "company_id",
						"short": "The company id you have defined for the company.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"short": "The time the company was added in Intercom.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "custom_attributes",
						"short": "The custom attributes you have set on the company.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"short": "The Intercom defined id representing the company.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "industry",
						"short": "The industry that the company operates in.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_request_at",
						"short": "The time the company last recorded making a request.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "monthly_spend",
						"short": "How much revenue the company generates for your business.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the company.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "notes",
						"short": "The list of notes associated with the company",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "plan",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "remote_created_at",
						"short": "The time the company was created by you.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "segments",
						"short": "The list of segments associated with the company",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "session_count",
						"short": "How many sessions the company has recorded.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "size",
						"short": "The number of employees in the company.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tags",
						"short": "The list of tags associated with the company",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"short": "Value is `company`",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"short": "The last time the company was updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "user_count",
						"short": "The number of users in the company.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "website",
						"short": "The URL for the company website.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "company_scroll",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "scroll_param",
											"orig": "scroll_param",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/scroll",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"lit": "scroll",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"scroll_param",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"companies",
									"scroll",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"contact": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "android_app_name",
						"short": "The name of the Android app which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "android_app_version",
						"short": "The version of the Android app which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "android_device",
						"short": "The Android device which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "android_last_seen_at",
						"short": "(Unix timestamp in seconds) The time when the contact was last seen on an Android device.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "android_os_version",
						"short": "The version of the Android OS which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "android_sdk_version",
						"short": "The version of the Android SDK which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "avatar",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "browser",
						"short": "The name of the browser which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "browser_language",
						"short": "The language set by the browser which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "browser_version",
						"short": "The version of the browser which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "companies",
						"short": "An object with metadata about companies attached to a contact .",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "(Unix timestamp in seconds) The time when the contact was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "custom_attributes",
						"short": "The custom attributes which are set for the contact.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "email",
						"short": "The contact's email.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "email_domain",
						"short": "The contact's email domain.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enabled_push_messaging",
						"short": "If the user has enabled push messaging.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "external_id",
						"short": "The unique identifier for the contact which is provided by the Client.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "has_hard_bounced",
						"short": "Whether the contact has had an email sent to them hard bounce.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the contact which is given by Intercom.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ios_app_name",
						"short": "The name of the iOS app which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ios_app_version",
						"short": "The version of the iOS app which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ios_device",
						"short": "The iOS device which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "ios_last_seen_at",
						"short": "(Unix timestamp in seconds) The last time the contact used the iOS app.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ios_os_version",
						"short": "The version of iOS which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ios_sdk_version",
						"short": "The version of the iOS SDK which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language_override",
						"short": "A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "last_contacted_at",
						"short": "(Unix timestamp in seconds) The time when the contact was last messaged.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "last_email_clicked_at",
						"short": "(Unix timestamp in seconds) The time when the contact last clicked a link in an email.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "last_email_opened_at",
						"short": "(Unix timestamp in seconds) The time when the contact last opened an email.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "last_replied_at",
						"short": "(Unix timestamp in seconds) The time when the contact last messaged in.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "last_seen_at",
						"short": "(Unix timestamp in seconds) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually).",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "location",
						"short": "An object containing location meta data about a Intercom contact.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "marked_email_as_spam",
						"short": "Whether the contact has marked an email sent to them as spam.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "merge_history",
						"short": "A list of contacts that were merged into this contact.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"short": "The contacts name.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "notes",
						"short": "An object containing notes meta data about the notes that a contact has.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "os",
						"short": "The operating system which the contact is using.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "owner_id",
						"short": "The id of an admin that has been assigned account ownership of the contact.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "phone",
						"short": "The contacts phone.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"short": "The role of the contact.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "signed_up_at",
						"short": "(Unix timestamp in seconds) The time specified for when a contact signed up.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "social_profiles",
						"short": "An object containing social profiles that a contact has.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tags",
						"short": "An object containing tags meta data about the tags that a contact has.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The type of object.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unsubscribed_from_emails",
						"short": "Whether the contact is unsubscribed from emails.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "(Unix timestamp in seconds) The time when the contact was last updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "user",
						"req": true,
						"short": "The unique identifiers retained after converting or merging.",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "visitor",
						"req": true,
						"short": "The unique identifiers to convert a single Visitor.",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 3,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "workspace_id",
						"short": "The id of the workspace which the contact belongs to.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "contact",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "63a07ddf05a32042dffac965",
											"kind": "param",
											"name": "id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/contacts/{contact_id}/archive",
								"rename": map[string]any{
									"param": map[string]any{
										"contact_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "archive",
									},
								},
								"select": map[string]any{
									"$action": "archive",
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"{id}",
									"archive",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "63a07ddf05a32042dffac965",
											"kind": "param",
											"name": "id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/contacts/{contact_id}/block",
								"rename": map[string]any{
									"param": map[string]any{
										"contact_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "block",
									},
								},
								"select": map[string]any{
									"$action": "block",
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"{id}",
									"block",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "include_merge_history",
											"orig": "include_merge_history",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/contacts/merge",
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"lit": "merge",
									},
								},
								"select": map[string]any{
									"$action": "merge",
									"exist": []any{
										"include_merge_history",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"merge",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "63a07ddf05a32042dffac965",
											"kind": "param",
											"name": "id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/contacts/{contact_id}/unarchive",
								"rename": map[string]any{
									"param": map[string]any{
										"contact_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "unarchive",
									},
								},
								"select": map[string]any{
									"$action": "unarchive",
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"{id}",
									"unarchive",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/contacts",
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/visitors/convert",
								"segments": []any{
									map[string]any{
										"lit": "visitors",
									},
									map[string]any{
										"lit": "convert",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"visitors",
									"convert",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "include_merge_history",
											"orig": "include_merge_history",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/contacts",
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_merge_history",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "cdd29344-5e0c-4ef0-ac56-f9ba2979bc27",
											"kind": "param",
											"name": "external_id",
											"orig": "external_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "include_merge_history",
											"orig": "include_merge_history",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/contacts/find_by_external_id/{external_id}",
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"lit": "find_by_external_id",
									},
									map[string]any{
										"var": "external_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"external_id",
										"include_merge_history",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"find_by_external_id",
									"{external_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "63a07ddf05a32042dffac965",
											"kind": "param",
											"name": "id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "include_merge_history",
											"orig": "include_merge_history",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/contacts/{contact_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"contact_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"include_merge_history",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/contacts/{contact_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"contact_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "63a07ddf05a32042dffac965",
											"kind": "param",
											"name": "id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "include_merge_history",
											"orig": "include_merge_history",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/contacts/{contact_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"contact_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"include_merge_history",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"find_by_external_id",
						},
					},
				},
			},
			"contact_attached_company": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_id",
						"short": "The Intercom defined code of the workspace the company is associated to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "company_id",
						"short": "The company id you have defined for the company.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"short": "The time the company was added in Intercom.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "custom_attributes",
						"short": "The custom attributes you have set on the company.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"short": "The Intercom defined id representing the company.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "industry",
						"short": "The industry that the company operates in.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_request_at",
						"short": "The time the company last recorded making a request.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "monthly_spend",
						"short": "How much revenue the company generates for your business.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the company.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "notes",
						"short": "The list of notes associated with the company",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "plan",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "remote_created_at",
						"short": "The time the company was created by you.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "segments",
						"short": "The list of segments associated with the company",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "session_count",
						"short": "How many sessions the company has recorded.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "size",
						"short": "The number of employees in the company.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tags",
						"short": "The list of tags associated with the company",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"short": "Value is `company`",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"short": "The last time the company was updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "user_count",
						"short": "The number of users in the company.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "website",
						"short": "The URL for the company website.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "contact_attached_company",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "63a07ddf05a32042dffac965",
											"kind": "param",
											"name": "id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/contacts/{contact_id}/companies",
								"rename": map[string]any{
									"param": map[string]any{
										"contact_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "companies",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"{id}",
									"companies",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"contact_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"short": "The list of contact objects",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pages",
						"short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "query",
						"req": true,
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 4,
							"count": 4,
							"depth": 7,
						},
					},
					map[string]any{
						"name": "sort",
						"short": "An optional object to sort the results by.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total_count",
						"short": "A count of the total number of objects.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"short": "Always list",
						"type": "`$STRING`",
					},
				},
				"name": "contact_list",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "include_merge_history",
											"orig": "include_merge_history",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/contacts/search",
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_merge_history",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"search",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"contact_segment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"short": "The number of items in the user segment.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_at",
						"short": "The time the segment was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier representing the segment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the segment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "person_type",
						"short": "Type of the contact: contact (lead) or user.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"short": "The time the segment was updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "contact_segment",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "63a07ddf05a32042dffac965",
											"kind": "param",
											"name": "id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/contacts/{contact_id}/segments",
								"rename": map[string]any{
									"param": map[string]any{
										"contact_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "segments",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"contacts",
									"{id}",
									"segments",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"content": map[string]any{
				"fields": []any{},
				"name": "content",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/content/bulk_actions",
								"segments": []any{
									map[string]any{
										"lit": "content",
									},
									map[string]any{
										"lit": "bulk_actions",
									},
								},
								"select": map[string]any{
									"$action": "bulk_action",
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"content",
									"bulk_actions",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"content_import_source": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apply_audience_to_existing_content",
						"short": "When true, the audience will be applied to all existing external pages belonging to this content import source.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "audience_ids",
						"short": "The unique identifiers for the audiences associated with this content import source.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"req": true,
						"short": "The time when the content import source was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the content import source which is given by Intercom.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "last_synced_at",
						"req": true,
						"short": "The time when the content import source was last synced.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "status",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The status of the content import source.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sync_behavior",
						"req": true,
						"short": "If you intend to create or update External Pages via the API, this should be set to `api`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "Always external_page",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"req": true,
						"short": "The time when the content import source was last updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "url",
						"req": true,
						"short": "The URL of the root of the external source.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "content_import_source",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/ai/content_import_sources",
								"segments": []any{
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "content_import_sources",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ai",
									"content_import_sources",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/ai/content_import_sources",
								"segments": []any{
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "content_import_sources",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ai",
									"content_import_sources",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "source_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/ai/content_import_sources/{source_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"source_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "content_import_sources",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ai",
									"content_import_sources",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "source_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/ai/content_import_sources/{source_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"source_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "content_import_sources",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ai",
									"content_import_sources",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"content_search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"short": "The list of matched content items.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pages",
						"short": "Pagination metadata, including links to neighbouring pages.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total_count",
						"short": "Total number of results matching the query.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"short": "Always `list`.",
						"type": "`$STRING`",
					},
				},
				"name": "content_search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "1,2,3",
											"kind": "query",
											"name": "any_tag_id",
											"orig": "any_tag_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "article,snippet",
											"kind": "query",
											"name": "content_type",
											"orig": "content_type",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "on",
											"kind": "query",
											"name": "copilot_state",
											"orig": "copilot_state",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1677253093,
											"kind": "query",
											"name": "created_at_after",
											"orig": "created_at_after",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1677861493,
											"kind": "query",
											"name": "created_at_before",
											"orig": "created_at_before",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "991267464,991267465",
											"kind": "query",
											"name": "created_by_id",
											"orig": "created_by_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "on",
											"kind": "query",
											"name": "fin_sales_state",
											"orig": "fin_sales_state",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "on",
											"kind": "query",
											"name": "fin_service_state",
											"orig": "fin_service_state",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "folder",
											"kind": "query",
											"name": "folder_entity_type",
											"orig": "folder_entity_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "10,20",
											"kind": "query",
											"name": "folder_id",
											"orig": "folder_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "991267464,991267465",
											"kind": "query",
											"name": "last_updated_by_id",
											"orig": "last_updated_by_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "en,fr",
											"kind": "query",
											"name": "locale",
											"orig": "locale",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "billing",
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "published,draft",
											"kind": "query",
											"name": "state",
											"orig": "state",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "1,2,3",
											"kind": "query",
											"name": "tag_id",
											"orig": "tag_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "IN",
											"kind": "query",
											"name": "tag_operator",
											"orig": "tag_operator",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1677253093,
											"kind": "query",
											"name": "updated_at_after",
											"orig": "updated_at_after",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1677861493,
											"kind": "query",
											"name": "updated_at_before",
											"orig": "updated_at_before",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/content/search",
								"segments": []any{
									map[string]any{
										"lit": "content",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"any_tag_id",
										"content_type",
										"copilot_state",
										"created_at_after",
										"created_at_before",
										"created_by_id",
										"fin_sales_state",
										"fin_service_state",
										"folder_entity_type",
										"folder_id",
										"intercom_version",
										"last_updated_by_id",
										"locale",
										"page",
										"per_page",
										"query",
										"state",
										"tag_id",
										"tag_operator",
										"updated_at_after",
										"updated_at_before",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"content",
									"search",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"content_snippet": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ai_chatbot_availability",
						"short": "Whether the content snippet is available for AI Chatbot (Fin).",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ai_copilot_availability",
						"short": "Whether the content snippet is available for AI Copilot.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ai_sales_agent_availability",
						"short": "Whether the content snippet is available for AI Sales Agent.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "audience_ids",
						"short": "The list of audience IDs this content snippet is targeted to for Fin AI Agent.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "body_markdown",
						"short": "The body of the content snippet in markdown.",
						"type": "`$STRING`",
					},
					map[string]any{
						"deprecated": true,
						"name": "chatbot_availability",
						"short": "Deprecated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"deprecated": true,
						"name": "copilot_availability",
						"short": "Deprecated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_at",
						"short": "The time the snippet was created as a UNIX timestamp.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the content snippet.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "json_blocks",
						"short": "The content blocks that make up the body of the snippet.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "locale",
						"short": "The locale of the content snippet.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The title of the content snippet.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "String representing the object's type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"short": "The time the snippet was last updated as a UNIX timestamp.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "content_snippet",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/content_snippets",
								"segments": []any{
									map[string]any{
										"lit": "content_snippets",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"content_snippets",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/content_snippets",
								"segments": []any{
									map[string]any{
										"lit": "content_snippets",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"page",
										"per_page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"content_snippets",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/content_snippets/{id}",
								"segments": []any{
									map[string]any{
										"lit": "content_snippets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"content_snippets",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/content_snippets/{id}",
								"segments": []any{
									map[string]any{
										"lit": "content_snippets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"content_snippets",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/content_snippets/{id}",
								"segments": []any{
									map[string]any{
										"lit": "content_snippets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"content_snippets",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "admin_assignee_id",
						"short": "The id of the admin assigned to the conversation.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ai_agent",
						"short": "Data related to AI Agent involvement in the conversation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ai_agent_participated",
						"short": "Indicates whether the AI Agent participated in the conversation.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "attachment_urls",
						"short": "A list of image URLs that will be added as attachments.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "body",
						"req": true,
						"short": "The content of the message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "brand_id",
						"short": "The unique identifier of the brand to associate with this conversation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "channel",
						"short": "The channel through which the conversation was initiated and its current channel.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "company",
						"short": "The company associated with the conversation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "company_id",
						"short": "The ID of the company that the conversation is associated with.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "contacts",
						"short": "The list of contacts (users or leads) involved in this conversation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "conversation_id",
						"req": true,
						"short": "The unique identifier (given by Intercom) for the conversation or customer ticket to link to the tracker ticket.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "conversation_parts",
						"short": "A list of Conversation Part objects for each part message in the conversation.",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 6,
							"count": 1,
							"depth": 5,
						},
					},
					map[string]any{
						"name": "conversation_rating",
						"short": "The Conversation Rating object which contains information on the rating and/or remark added by a Contact and the Admin assigned to the conversation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "The time the conversation was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "custom_attributes",
						"short": "An object containing the different custom attributes associated to the conversation as key-value pairs.",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 4,
							"count": 2,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "external_references",
						"short": "References linking this conversation to records in an external helpdesk or CRM system.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "first_contact_reply",
						"short": "An object containing information on the first users message.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "from",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"short": "The id representing the conversation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "linked_objects",
						"short": "An object containing metadata about linked conversations and linked tickets.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "monitor_evaluations",
						"short": "QA monitor evaluations that flagged this conversation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "open",
						"short": "Indicates whether a conversation is open (true) or closed (false).",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "priority",
						"short": "The priority level of the conversation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "read",
						"short": "Indicates whether a conversation has been read.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "sales_agent",
						"short": "Data related to Sales Agent involvement in the conversation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sales_agent_participated",
						"short": "Indicates whether the Sales Agent participated in the conversation.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "scorecards",
						"short": "QA scorecard results for this conversation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sla_applied",
						"short": "The SLA Applied object contains the details for which SLA has been applied to this conversation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "snoozed_until",
						"short": "If set this is the time in the future when this conversation will be marked as open.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "source",
						"short": "The type of the conversation part that started this conversation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "state",
						"short": "Can be set to \"open\", \"closed\" or \"snoozed\".",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "statistics",
						"short": "A Statistics object containing all information required for reporting, with timestamps and calculated metrics.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "subject",
						"short": "The title of the email.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"short": "A list of tags objects associated with a conversation",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "team_assignee_id",
						"short": "The id of the team assigned to the conversation.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "teammates",
						"short": "The list of teammates who participated in the conversation (wrote at least one conversation part).",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "title",
						"short": "The title given to the conversation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Always conversation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "The last time the conversation was updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "waiting_since",
						"short": "The last time a Contact responded to an Admin.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/{id}/merge",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "merge",
									},
								},
								"select": map[string]any{
									"$action": "merge",
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"{id}",
									"merge",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "conversation_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/{conversation_id}/parts",
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "parts",
									},
								},
								"select": map[string]any{
									"$action": "part",
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"{id}",
									"parts",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123 or \"last\"",
											"kind": "param",
											"name": "id",
											"orig": "conversation_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/{conversation_id}/reply",
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "reply",
									},
								},
								"select": map[string]any{
									"$action": "reply",
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"{id}",
									"reply",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "64619700005694",
											"kind": "param",
											"name": "ticket_id",
											"orig": "ticket_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/tickets/{ticket_id}/linked_conversations",
								"segments": []any{
									map[string]any{
										"lit": "tickets",
									},
									map[string]any{
										"var": "ticket_id",
									},
									map[string]any{
										"lit": "linked_conversations",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"ticket_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tickets",
									"{ticket_id}",
									"linked_conversations",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/redact",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "redact",
									},
								},
								"select": map[string]any{
									"$action": "redact",
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"redact",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "starting_after",
											"orig": "starting_after",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"per_page",
										"starting_after",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "id",
											"orig": "conversation_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "plaintext",
											"kind": "query",
											"name": "display_a",
											"orig": "display_a",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "include_translation",
											"orig": "include_translation",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/{conversation_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"display_a",
										"id",
										"include_translation",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "conversation_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "retain_metric",
											"orig": "retain_metric",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/conversations/{conversation_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
										"retain_metric",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "204",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "64619700005694",
											"kind": "param",
											"name": "ticket_id",
											"orig": "ticket_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/tickets/{ticket_id}/linked_conversations/{id}",
								"segments": []any{
									map[string]any{
										"lit": "tickets",
									},
									map[string]any{
										"var": "ticket_id",
									},
									map[string]any{
										"lit": "linked_conversations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
										"ticket_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tickets",
									"{ticket_id}",
									"linked_conversations",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "id",
											"orig": "conversation_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "plaintext",
											"kind": "query",
											"name": "display_a",
											"orig": "display_a",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/conversations/{conversation_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"display_a",
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"ticket",
						},
					},
				},
			},
			"conversation_attribute": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "admin_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "archived",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "data_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Readable description of the attribute.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "label",
						"req": true,
						"short": "The label for the new option.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "multiline",
						"short": "(String data type only) Whether this string attribute is multiline.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the attribute.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reference",
						"req": true,
						"short": "(Relationship data type only) Reference configuration for related objects.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "required",
						"short": "Whether this attribute is required.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "visible_to_team_ids",
						"short": "Team IDs that can see this attribute.",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversation_attribute",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 2,
											"kind": "param",
											"name": "attribute_id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/attributes/{id}/options",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "attribute_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "attributes",
									},
									map[string]any{
										"var": "attribute_id",
									},
									map[string]any{
										"lit": "options",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"attribute_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"attributes",
									"{attribute_id}",
									"options",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/attributes",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "attributes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"attributes",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/attributes/{id}",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "attributes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"attributes",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 2,
											"kind": "param",
											"name": "attribute_id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
											"kind": "param",
											"name": "option_id",
											"orig": "option_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/conversations/attributes/{id}/options/{option_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "attribute_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "attributes",
									},
									map[string]any{
										"var": "attribute_id",
									},
									map[string]any{
										"lit": "options",
									},
									map[string]any{
										"var": "option_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"attribute_id",
										"intercom_version",
										"option_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"attributes",
									"{attribute_id}",
									"options",
									"{option_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 8,
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/conversations/attributes/{id}",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "attributes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"attributes",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 2,
											"kind": "param",
											"name": "attribute_id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
											"kind": "param",
											"name": "option_id",
											"orig": "option_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/conversations/attributes/{id}/options/{option_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "attribute_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "attributes",
									},
									map[string]any{
										"var": "attribute_id",
									},
									map[string]any{
										"lit": "options",
									},
									map[string]any{
										"var": "option_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"attribute_id",
										"intercom_version",
										"option_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"attributes",
									"{attribute_id}",
									"options",
									"{option_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 8,
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/conversations/attributes/{id}",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "attributes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"attributes",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"attribute",
						},
						[]any{
							"attribute",
							"option",
						},
					},
				},
			},
			"conversation_attribute_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"short": "A list of conversation attributes.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of the object.",
						"type": "`$STRING`",
					},
				},
				"name": "conversation_attribute_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "include_archived",
											"orig": "include_archived",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/attributes",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "attributes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_archived",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"conversations",
									"attributes",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversation_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "conversations",
						"short": "The list of conversation objects",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 4,
							"count": 2,
							"depth": 6,
						},
					},
					map[string]any{
						"name": "pages",
						"short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "query",
						"req": true,
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 4,
							"count": 4,
							"depth": 7,
						},
					},
					map[string]any{
						"name": "total_count",
						"short": "A count of the total number of objects.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"short": "Always conversation.list",
						"type": "`$STRING`",
					},
				},
				"name": "conversation_list",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "include_monitor",
											"orig": "include_monitor",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "include_scorecard",
											"orig": "include_scorecard",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/search",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_monitor",
										"include_scorecard",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"search",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversation_participant": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversation_participant",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "conversation_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/{conversation_id}/customers",
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "customers",
									},
								},
								"select": map[string]any{
									"$action": "customers",
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"{id}",
									"customers",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "contact_id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "conversation_id",
											"orig": "conversation_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/conversations/{conversation_id}/customers/{contact_id}",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "conversation_id",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "contact_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contact_id",
										"conversation_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"{conversation_id}",
									"customers",
									"{contact_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"conversation",
							"customer",
						},
					},
				},
			},
			"custom_object_instance": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "custom_attributes",
						"short": "The custom attributes which are set for the Custom Object instance.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"short": "An array of Custom Object Instance objects.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "external_created_at",
						"short": "The time when the Custom Object instance was created in the external system it originated from.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_id",
						"short": "A unique identifier for the Custom Object instance in the external system it originated from.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "external_updated_at",
						"short": "The time when the Custom Object instance was last updated in the external system it originated from.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pages",
						"short": "The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total_count",
						"short": "A count of the total number of custom object instances.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of the object - `list`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
					"parts": []any{
						"custom_object_type_identifier",
						"custom_object_instance_id",
					},
					"sep": "/",
				},
				"name": "custom_object_instance",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "Order",
											"kind": "param",
											"name": "id",
											"orig": "custom_object_type_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/custom_object_instances/{custom_object_type_identifier}",
								"rename": map[string]any{
									"param": map[string]any{
										"custom_object_type_identifier": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "custom_object_instances",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.custom_attributes`",
								},
								"parts": []any{
									"custom_object_instances",
									"{id}",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "Order",
											"kind": "param",
											"name": "id",
											"orig": "custom_object_type_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "external_id",
											"orig": "external_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "references_contact_id",
											"orig": "references_contact_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "references_conversation_id",
											"orig": "references_conversation_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/custom_object_instances/{custom_object_type_identifier}",
								"rename": map[string]any{
									"param": map[string]any{
										"custom_object_type_identifier": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "custom_object_instances",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"external_id",
										"id",
										"intercom_version",
										"page",
										"per_page",
										"references_contact_id",
										"references_conversation_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"custom_object_instances",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "custom_object_instance_id",
											"orig": "custom_object_instance_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "Order",
											"kind": "param",
											"name": "custom_object_type_identifier",
											"orig": "custom_object_type_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/custom_object_instances/{custom_object_type_identifier}/{custom_object_instance_id}",
								"segments": []any{
									map[string]any{
										"lit": "custom_object_instances",
									},
									map[string]any{
										"var": "custom_object_type_identifier",
									},
									map[string]any{
										"var": "custom_object_instance_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_object_instance_id",
										"custom_object_type_identifier",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.custom_attributes`",
								},
								"parts": []any{
									"custom_object_instances",
									"{custom_object_type_identifier}",
									"{custom_object_instance_id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "custom_object_instance_id",
											"orig": "custom_object_instance_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "Order",
											"kind": "param",
											"name": "custom_object_type_identifier",
											"orig": "custom_object_type_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/custom_object_instances/{custom_object_type_identifier}/{custom_object_instance_id}",
								"segments": []any{
									map[string]any{
										"lit": "custom_object_instances",
									},
									map[string]any{
										"var": "custom_object_type_identifier",
									},
									map[string]any{
										"var": "custom_object_instance_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_object_instance_id",
										"custom_object_type_identifier",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"custom_object_instances",
									"{custom_object_type_identifier}",
									"{custom_object_instance_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "Order",
											"kind": "param",
											"name": "id",
											"orig": "custom_object_type_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "external_id",
											"orig": "external_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/custom_object_instances/{custom_object_type_identifier}",
								"rename": map[string]any{
									"param": map[string]any{
										"custom_object_type_identifier": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "custom_object_instances",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"external_id",
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"custom_object_instances",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"custom_object_instance",
						},
					},
				},
			},
			"data": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at_after",
						"req": true,
						"short": "The start date that you request data for.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_at_before",
						"req": true,
						"short": "The end date that you request data for.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "download_expires_at",
						"short": "The time after which you will not be able to access the data.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "download_url",
						"short": "The location where you can download your data.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "job_identifier",
						"short": "The identifier for your job.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "The current state of your job.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "data",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/export/content/data",
								"segments": []any{
									map[string]any{
										"lit": "export",
									},
									map[string]any{
										"lit": "content",
									},
									map[string]any{
										"lit": "data",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"export",
									"content",
									"data",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "job_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/download/content/data/{job_identifier}",
								"rename": map[string]any{
									"param": map[string]any{
										"job_identifier": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "download",
									},
									map[string]any{
										"lit": "content",
									},
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"download",
									"content",
									"data",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "job_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/export/content/data/{job_identifier}",
								"rename": map[string]any{
									"param": map[string]any{
										"job_identifier": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "export",
									},
									map[string]any{
										"lit": "content",
									},
									map[string]any{
										"lit": "data",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"export",
									"content",
									"data",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"data_attribute": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "admin_id",
						"short": "Teammate who created the attribute.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "api_writable",
						"short": "Can this attribute be updated through API",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "archived",
						"short": "Is this attribute archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "The time the attribute was created as a UTC Unix timestamp",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "custom",
						"short": "Set to true if this is a CDA",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "data_type",
						"short": "The data type of the attribute.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Readable description of the attribute.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "full_name",
						"short": "Full name of the attribute.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the data attribute which is given by Intercom.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "label",
						"short": "Readable name of the attribute (i.e.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messenger_writable",
						"short": "Can this attribute be updated by the Messenger",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "model",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Value is `contact` for user/lead attributes and `company` for company attributes.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Name of the attribute.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "options",
						"short": "List of predefined options for attribute value.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"short": "Value is `data_attribute`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ui_writable",
						"short": "Can this attribute be updated in the UI",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "The time the attribute was last updated as a UTC Unix timestamp",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "data_attribute",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/data_attributes",
								"segments": []any{
									map[string]any{
										"lit": "data_attributes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"data_attributes",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "include_archived",
											"orig": "include_archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "company",
											"kind": "query",
											"name": "model",
											"orig": "model",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/data_attributes",
								"segments": []any{
									map[string]any{
										"lit": "data_attributes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_archived",
										"intercom_version",
										"model",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"data_attributes",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 1,
											"kind": "param",
											"name": "id",
											"orig": "data_attribute_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/data_attributes/{data_attribute_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"data_attribute_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "data_attributes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"data_attributes",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"data_connector": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "audiences",
						"short": "The audience types this connector targets.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "body",
						"short": "The request body template.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bypass_authentication",
						"short": "Whether authentication is bypassed for this connector.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "client_function_name",
						"short": "The name of the client-side function, if applicable.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "client_function_timeout_ms",
						"short": "Timeout in milliseconds for the client function, if applicable.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "configuration_response_type",
						"short": "The expected response format from the connector.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "The time the data connector was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_by_admin_id",
						"short": "The ID of the admin who created this connector.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customer_authentication",
						"short": "Whether OTP authentication is enabled for this connector.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "data_inputs",
						"short": "The input parameters accepted by this data connector.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "data_transformation_type",
						"short": "The type of data transformation applied to the response.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "A description of what this data connector does.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "direct_fin_usage",
						"short": "Whether this connector is used directly by Fin.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "execution_results_url",
						"short": "The URL path to fetch execution results for this connector.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "execution_type",
						"short": "How the connector executes.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "headers",
						"short": "HTTP headers for the request.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "http_method",
						"short": "The HTTP method used by the data connector.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the data connector.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mock_response",
						"short": "A sample JSON response from the external API.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The name of the data connector.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_mappings",
						"short": "Mappings from connector response objects to Intercom objects.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "response_fields",
						"short": "The fields returned in the connector response.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "state",
						"short": "The current state of the data connector.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "token_ids",
						"short": "IDs of authentication tokens associated with this connector.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object - `data_connector`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "The time the data connector was last updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_by_admin_id",
						"short": "The ID of the admin who last updated this connector.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "The URL of the external API endpoint.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "validate_missing_attributes",
						"short": "Whether to validate missing attributes before execution.",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "data_connector",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/data_connectors",
								"segments": []any{
									map[string]any{
										"lit": "data_connectors",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"data_connectors",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "starting_after",
											"orig": "starting_after",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/data_connectors",
								"segments": []any{
									map[string]any{
										"lit": "data_connectors",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"per_page",
										"starting_after",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"data_connectors",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "12345",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "live",
											"kind": "query",
											"name": "state_version",
											"orig": "state_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/data_connectors/{id}",
								"segments": []any{
									map[string]any{
										"lit": "data_connectors",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
										"state_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"data_connectors",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "12345",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/data_connectors/{id}",
								"segments": []any{
									map[string]any{
										"lit": "data_connectors",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"data_connectors",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"data_connector_execution_result": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "conversation_id",
						"short": "The conversation associated with this execution, if any.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "The time the execution occurred.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "data_connector_id",
						"short": "The unique identifier of the data connector that produced this result.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "error_message",
						"short": "A human-readable error message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "error_type",
						"short": "The type of error that occurred, if any.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "execution_time_ms",
						"short": "The execution time in milliseconds.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "http_method",
						"short": "The HTTP method used for the request.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "http_status",
						"short": "The HTTP status code returned by the external API.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the execution result.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "raw_response_body",
						"short": "The raw (unmapped) response body.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "request_body",
						"short": "The request body sent to the external API.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "request_url",
						"short": "The request URL.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "response_body",
						"short": "The response body from the external API.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source_id",
						"short": "The identifier of the source that triggered this execution.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source_type",
						"short": "The type of source that triggered this execution.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "success",
						"short": "Whether the execution was successful.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object - `data_connector.execution`.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "data_connector_execution_result",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "12345",
											"kind": "param",
											"name": "data_connector_id",
											"orig": "data_connector_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "99001",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/data_connectors/{data_connector_id}/execution_results/{id}",
								"segments": []any{
									map[string]any{
										"lit": "data_connectors",
									},
									map[string]any{
										"var": "data_connector_id",
									},
									map[string]any{
										"lit": "execution_results",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data_connector_id",
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"data_connectors",
									"{data_connector_id}",
									"execution_results",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"data_connector",
						},
					},
				},
			},
			"data_connector_execution_result_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "data_connector_execution_result_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "12345",
											"kind": "param",
											"name": "id",
											"orig": "data_connector_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "end_t",
											"orig": "end_t",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "error_type",
											"orig": "error_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "include_body",
											"orig": "include_body",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_t",
											"orig": "start_t",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "starting_after",
											"orig": "starting_after",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "success",
											"orig": "success",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/data_connectors/{data_connector_id}/execution_results",
								"rename": map[string]any{
									"param": map[string]any{
										"data_connector_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "data_connectors",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "execution_results",
									},
								},
								"select": map[string]any{
									"$action": "execution_results",
									"exist": []any{
										"end_t",
										"error_type",
										"id",
										"include_body",
										"intercom_version",
										"per_page",
										"start_t",
										"starting_after",
										"success",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"data_connectors",
									"{id}",
									"execution_results",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"data_event": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "The time the event occurred as a UTC Unix timestamp",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "email",
						"short": "An email address for your user.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "event_name",
						"short": "The name of the event that occurred.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "event_summaries",
						"short": "A list of event summaries for the user.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the contact (lead or user) which is given by Intercom.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metadata",
						"short": "Optional metadata about the event.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "user_id",
						"short": "Your identifier for the user.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "data_event",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/events",
								"segments": []any{
									map[string]any{
										"lit": "events",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"events",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/events/summaries",
								"segments": []any{
									map[string]any{
										"lit": "events",
									},
									map[string]any{
										"lit": "summaries",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"events",
									"summaries",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"data_event_summary": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"short": "The number of times the event was sent",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "description",
						"short": "The description of the event",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "first",
						"short": "The first time the event was sent",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last",
						"short": "The last time the event was sent",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the event",
						"type": "`$STRING`",
					},
				},
				"name": "data_event_summary",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"reqd": true,
											"type": "`$OBJECT`",
										},
										map[string]any{
											"kind": "query",
											"name": "summary",
											"orig": "summary",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/events",
								"segments": []any{
									map[string]any{
										"lit": "events",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"intercom_version",
										"summary",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.events`",
								},
								"parts": []any{
									"events",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"data_export": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "download_expires_at",
						"short": "The time after which you will not be able to access the data.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "download_url",
						"short": "The location where you can download your data.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "job_identifier",
						"short": "The identifier for your job.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "The current state of your job.",
						"type": "`$STRING`",
					},
				},
				"name": "data_export",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "job_identifier",
											"orig": "job_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/export/cancel/{job_identifier}",
								"segments": []any{
									map[string]any{
										"lit": "export",
									},
									map[string]any{
										"lit": "cancel",
									},
									map[string]any{
										"var": "job_identifier",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"job_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"export",
									"cancel",
									"{job_identifier}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"cancel",
						},
					},
				},
			},
			"deleted": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "deleted_at",
						"short": "The time when the conversation was deleted.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The ID of the deleted conversation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metrics_retained",
						"short": "Whether reporting metrics are retained for this conversation ID",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "type",
						"short": "String representing the object's type.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "deleted",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "desc",
											"kind": "query",
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/deleted",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"lit": "deleted",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"order",
										"page",
										"per_page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"deleted",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"deleted_article_object": map[string]any{
				"fields": []any{},
				"name": "deleted_article_object",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "article_id",
											"orig": "article_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/articles/{article_id}",
								"segments": []any{
									map[string]any{
										"lit": "articles",
									},
									map[string]any{
										"var": "article_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"article_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"articles",
									"{article_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"article",
						},
					},
				},
			},
			"deleted_company_object": map[string]any{
				"fields": []any{},
				"name": "deleted_company_object",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/companies/{company_id}",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"companies",
									"{company_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
						},
					},
				},
			},
			"deleted_data_connector_object": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "deleted_data_connector_object",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "12345",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/data_connectors/{id}",
								"segments": []any{
									map[string]any{
										"lit": "data_connectors",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"data_connectors",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"deleted_internal_article_object": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ai_chatbot_availability",
						"short": "Whether the internal article should be available for AI Chatbot (Fin).",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ai_copilot_availability",
						"short": "Whether the internal article should be available for AI Copilot.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ai_sales_agent_availability",
						"short": "Whether the internal article should be available for AI Sales Agent.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "audience_ids",
						"short": "The list of audience IDs to target this internal article to for Fin AI Agent.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "author_id",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The id of the author of the article.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "body",
						"short": "The content of the article in HTML.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "body_markdown",
						"short": "The content of the article in markdown.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "The time when the article was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the article which is given by Intercom.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "locale",
						"short": "The default locale of the article.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "owner_id",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The id of the owner of the article.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "title",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The title of the article.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object - `internal_article`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "The time when the article was last updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "deleted_internal_article_object",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/internal_articles",
								"segments": []any{
									map[string]any{
										"lit": "internal_articles",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"internal_articles",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/internal_articles",
								"segments": []any{
									map[string]any{
										"lit": "internal_articles",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"internal_articles",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "internal_article_id",
											"orig": "internal_article_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/internal_articles/{internal_article_id}",
								"segments": []any{
									map[string]any{
										"lit": "internal_articles",
									},
									map[string]any{
										"var": "internal_article_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"internal_article_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"internal_articles",
									"{internal_article_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"internal_article",
						},
					},
				},
			},
			"deleted_object": map[string]any{
				"fields": []any{},
				"name": "deleted_object",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "news_item_id",
											"orig": "news_item_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/news/news_items/{news_item_id}",
								"segments": []any{
									map[string]any{
										"lit": "news",
									},
									map[string]any{
										"lit": "news_items",
									},
									map[string]any{
										"var": "news_item_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"news_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"news",
									"news_items",
									"{news_item_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"news_item",
						},
					},
				},
			},
			"email": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "brand_id",
						"short": "Associated brand identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "Unix timestamp of creation",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "domain",
						"short": "Domain portion of the email address",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "email",
						"short": "Full sender email address",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "forwarded_email_last_received_at",
						"short": "Unix timestamp of last forwarded email received (null if never)",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "forwarding_enabled",
						"short": "Whether email forwarding is active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique email setting identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "Unix timestamp of last modification",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "verified",
						"short": "Whether the email address has been verified",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "email",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/emails",
								"segments": []any{
									map[string]any{
										"lit": "emails",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"emails",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/emails/{id}",
								"segments": []any{
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"emails",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"external_page": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ai_agent_availability",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Whether the external page should be used to answer questions by AI Agent.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ai_copilot_availability",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Whether the external page should be used to answer questions by AI Copilot.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ai_sales_agent_availability",
						"short": "Whether the external page should be used to answer questions by AI Sales Agent.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"req": true,
						"short": "The time when the external page was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "external_id",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The identifier for the external page which was given by the source.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fin_availability",
						"short": "Deprecated.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "html",
						"req": true,
						"short": "The body of the external page in HTML.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the external page which is given by Intercom.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "last_ingested_at",
						"req": true,
						"short": "The time when the external page was last ingested.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "locale",
						"req": true,
						"short": "Always en",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source_id",
						"req": true,
						"short": "The unique identifier for the source of the external page which was given by Intercom.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"short": "The title of the external page.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "Always external_page",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"req": true,
						"short": "The time when the external page was last updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "url",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The URL of the external page.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "external_page",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/ai/external_pages",
								"segments": []any{
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "external_pages",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ai",
									"external_pages",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/ai/external_pages",
								"segments": []any{
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "external_pages",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ai",
									"external_pages",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "page_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/ai/external_pages/{page_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"page_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "external_pages",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ai",
									"external_pages",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "page_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/ai/external_pages/{page_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"page_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "external_pages",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ai",
									"external_pages",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "page_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/ai/external_pages/{page_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"page_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "ai",
									},
									map[string]any{
										"lit": "external_pages",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ai",
									"external_pages",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"fin_agent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attachments",
						"short": "An array of attachments to include with the message.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "conversation",
						"short": "Conversation-related attribute errors.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "conversation_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The external ID of the rated conversation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "conversation_metadata",
						"short": "Metadata about the conversation, including history and attributes.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "message",
						"req": true,
						"short": "A message exchanged within a Fin Agent conversation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "rating",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The rating now recorded on the conversation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "remark",
						"short": "Optional free-text comment the user left alongside the rating.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "The result of the submission.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "User-related attribute errors.",
						"type": "`$OBJECT`",
					},
				},
				"name": "fin_agent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/fin/csat",
								"segments": []any{
									map[string]any{
										"lit": "fin",
									},
									map[string]any{
										"lit": "csat",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"fin",
									"csat",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/fin/reply",
								"segments": []any{
									map[string]any{
										"lit": "fin",
									},
									map[string]any{
										"lit": "reply",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.errors`",
								},
								"parts": []any{
									"fin",
									"reply",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/fin/start",
								"segments": []any{
									map[string]any{
										"lit": "fin",
									},
									map[string]any{
										"lit": "start",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.errors`",
								},
								"parts": []any{
									"fin",
									"start",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"handling_event": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "reason",
						"short": "Optional reason for the event (e.g., \"Paused\", \"Away\")",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "teammate",
						"req": true,
						"short": "A reference to a teammate",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "timestamp",
						"req": true,
						"short": "ISO8601 timestamp when the event occurred",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of handling event",
						"type": "`$STRING`",
					},
				},
				"name": "handling_event",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "conversation_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/{id}/handling_events",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "conversation_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "conversation_id",
									},
									map[string]any{
										"lit": "handling_events",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"conversation_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.handling_events`",
								},
								"parts": []any{
									"conversations",
									"{conversation_id}",
									"handling_events",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"conversation",
						},
					},
				},
			},
			"help_center": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ar",
						"short": "The content of the group in Arabic",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "bg",
						"short": "The content of the group in Bulgarian",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "bs",
						"short": "The content of the group in Bosnian",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ca",
						"short": "The content of the group in Catalan",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "The time when the Help Center was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "cs",
						"short": "The content of the group in Czech",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "custom_domain",
						"short": "Custom domain configured for the help center",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "da",
						"short": "The content of the group in Danish",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "de",
						"short": "The content of the group in German",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "default",
						"short": "Whether this help center is the default for the workspace.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "description",
						"short": "The description of the collection.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "display_name",
						"short": "The display name of the Help Center only seen by teammates.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "el",
						"short": "The content of the group in Greek",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "en",
						"short": "The content of the group in English",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "es",
						"short": "The content of the group in Spanish",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "et",
						"short": "The content of the group in Estonian",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "fi",
						"short": "The content of the group in Finnish",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "fr",
						"short": "The content of the group in French",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "from_url",
						"short": "The source URL that is redirected.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "he",
						"short": "The content of the group in Hebrew",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "help_center_id",
						"short": "The unique identifier for the help center the redirect belongs to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hr",
						"short": "The content of the group in Croatian",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "hu",
						"short": "The content of the group in Hungarian",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"short": "The content of the group in Indonesian",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "identifier",
						"short": "The identifier of the Help Center.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "it",
						"short": "The content of the group in Italian",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ja",
						"short": "The content of the group in Japanese",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ko",
						"short": "The content of the group in Korean",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "locale",
						"short": "The locale of the redirect's target.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "locales",
						"short": "The locales in which the help center is available.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "lt",
						"short": "The content of the group in Lithuanian",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "lv",
						"short": "The content of the group in Latvian",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mn",
						"short": "The content of the group in Mongolian",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the collection.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nb",
						"short": "The content of the group in Norwegian",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "nl",
						"short": "The content of the group in Dutch",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "parent_id",
						"short": "The id of the parent collection.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pl",
						"short": "The content of the group in Polish",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "pt",
						"short": "The content of the group in Portuguese (Portugal)",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ptBR",
						"short": "The content of the group in Portuguese (Brazil)",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ro",
						"short": "The content of the group in Romanian",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ru",
						"short": "The content of the group in Russian",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sl",
						"short": "The content of the group in Slovenian",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sr",
						"short": "The content of the group in Serbian",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sv",
						"short": "The content of the group in Swedish",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "target_id",
						"short": "The unique identifier of the target article or collection.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "target_type",
						"short": "The type of the redirect target.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tr",
						"short": "The content of the group in Turkish",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "translated_content",
						"short": "The Translated Content of an Group.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object - group_translated_content.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "The time when the Help Center was last updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "url",
						"short": "The URL for the help center, if you have a custom domain then this will show the URL using the custom domain.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "vi",
						"short": "The content of the group in Vietnamese",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "website_turned_on",
						"short": "Whether the Help Center is turned on or not.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "workspace_id",
						"short": "The id of the workspace which the Help Center belongs to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "zhCN",
						"short": "The content of the group in Chinese (China)",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "zhTW",
						"short": "The content of the group in Chinese (Taiwan)",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "help_center",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "help_center_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/help_center/help_centers/{help_center_id}/redirects",
								"rename": map[string]any{
									"param": map[string]any{
										"help_center_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "help_center",
									},
									map[string]any{
										"lit": "help_centers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "redirects",
									},
								},
								"select": map[string]any{
									"$action": "redirect",
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"help_center",
									"help_centers",
									"{id}",
									"redirects",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/help_center/collections",
								"segments": []any{
									map[string]any{
										"lit": "help_center",
									},
									map[string]any{
										"lit": "collections",
									},
								},
								"select": map[string]any{
									"$action": "collection",
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.translated_content`",
								},
								"parts": []any{
									"help_center",
									"collections",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "help_center_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/help_center/help_centers/{help_center_id}/redirects",
								"rename": map[string]any{
									"param": map[string]any{
										"help_center_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "help_center",
									},
									map[string]any{
										"lit": "help_centers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "redirects",
									},
								},
								"select": map[string]any{
									"$action": "redirect",
									"exist": []any{
										"id",
										"intercom_version",
										"page",
										"per_page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"help_center",
									"help_centers",
									"{id}",
									"redirects",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/help_center/collections",
								"segments": []any{
									map[string]any{
										"lit": "help_center",
									},
									map[string]any{
										"lit": "collections",
									},
								},
								"select": map[string]any{
									"$action": "collection",
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"help_center",
									"collections",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/help_center/help_centers",
								"segments": []any{
									map[string]any{
										"lit": "help_center",
									},
									map[string]any{
										"lit": "help_centers",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"help_center",
									"help_centers",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "collection_id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/help_center/collections/{collection_id}",
								"segments": []any{
									map[string]any{
										"lit": "help_center",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "collection_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.translated_content`",
								},
								"parts": []any{
									"help_center",
									"collections",
									"{collection_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "id",
											"orig": "help_center_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/help_center/help_centers/{help_center_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"help_center_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "help_center",
									},
									map[string]any{
										"lit": "help_centers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"help_center",
									"help_centers",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "help_center_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "26",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/help_center/help_centers/{help_center_id}/redirects/{id}",
								"rename": map[string]any{
									"param": map[string]any{
										"help_center_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "help_center",
									},
									map[string]any{
										"lit": "help_centers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "redirects",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"help_center",
									"help_centers",
									"{id}",
									"redirects",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "collection_id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/help_center/collections/{collection_id}",
								"segments": []any{
									map[string]any{
										"lit": "help_center",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "collection_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"help_center",
									"collections",
									"{collection_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "help_center_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "26",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/help_center/help_centers/{help_center_id}/redirects/{id}",
								"rename": map[string]any{
									"param": map[string]any{
										"help_center_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "help_center",
									},
									map[string]any{
										"lit": "help_centers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "redirects",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"help_center",
									"help_centers",
									"{id}",
									"redirects",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "collection_id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/help_center/collections/{collection_id}",
								"segments": []any{
									map[string]any{
										"lit": "help_center",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "collection_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.translated_content`",
								},
								"parts": []any{
									"help_center",
									"collections",
									"{collection_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"collection",
						},
					},
				},
			},
			"internal_article": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ai_chatbot_availability",
						"short": "Whether the internal article is available for AI Chatbot (Fin).",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ai_copilot_availability",
						"short": "Whether the internal article is available for AI Copilot.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ai_sales_agent_availability",
						"short": "Whether the internal article is available for AI Sales Agent.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "audience_ids",
						"short": "The list of audience IDs this internal article is targeted to for Fin AI Agent.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "author_id",
						"short": "The id of the author of the article.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "body",
						"short": "The body of the article in HTML.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "body_markdown",
						"short": "The body of the article in markdown.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "The time when the article was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the article which is given by Intercom.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "locale",
						"short": "The default locale of the article.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "owner_id",
						"short": "The id of the owner of the article.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "title",
						"short": "The title of the article.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object - `internal_article`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "The time when the article was last updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "internal_article",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "id",
											"orig": "internal_article_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/internal_articles/{internal_article_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"internal_article_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "internal_articles",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"internal_articles",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "id",
											"orig": "internal_article_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/internal_articles/{internal_article_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"internal_article_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "internal_articles",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"internal_articles",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"internal_article_search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"short": "An object containing the results of the search.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "pages",
						"short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total_count",
						"short": "The total number of Internal Articles matching the search query",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of the object - `list`.",
						"type": "`$STRING`",
					},
				},
				"name": "internal_article_search",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 123,
											"kind": "query",
											"name": "folder_id",
											"orig": "folder_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/internal_articles/search",
								"segments": []any{
									map[string]any{
										"lit": "internal_articles",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"folder_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"internal_articles",
									"search",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ip_allowlist": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "enabled",
						"short": "Whether the IP allowlist is enabled for the workspace.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ip_allowlist",
						"short": "List of allowed IP addresses and/or IP ranges in CIDR notation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"short": "String representing the object's type.",
						"type": "`$STRING`",
					},
				},
				"name": "ip_allowlist",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/ip_allowlist",
								"segments": []any{
									map[string]any{
										"lit": "ip_allowlist",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.ip_allowlist`",
								},
								"parts": []any{
									"ip_allowlist",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/ip_allowlist",
								"segments": []any{
									map[string]any{
										"lit": "ip_allowlist",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"ip_allowlist": "`reqdata`",
									},
									"res": "`body.ip_allowlist`",
								},
								"parts": []any{
									"ip_allowlist",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"job": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The id of the job that's currently being processed or has completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "resource_id",
						"short": "The id of the resource created during job execution (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "resource_type",
						"short": "The type of resource created during job execution.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "resource_url",
						"short": "The url of the resource created during job exeuction.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "skip_notifications",
						"short": "Option to disable notifications when a Ticket is created.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "status",
						"short": "The status of the job execution.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of the object",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "API endpoint URL to check the job status.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "job",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/tickets/enqueue",
								"segments": []any{
									map[string]any{
										"lit": "tickets",
									},
									map[string]any{
										"lit": "enqueue",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tickets",
									"enqueue",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "job_id",
											"orig": "job_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/jobs/status/{job_id}",
								"segments": []any{
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "status",
									},
									map[string]any{
										"var": "job_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"job_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"jobs",
									"status",
									"{job_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"status",
						},
					},
				},
			},
			"macro": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "available_on",
						"short": "Where the macro is available for use.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "body",
						"short": "The body of the macro in HTML format with placeholders transformed to XML-like format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "body_text",
						"short": "The plain text version of the macro body with original Intercom placeholder format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "The time the macro was created in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the macro.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the macro.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "String representing the object's type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "The time the macro was last updated in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visible_to",
						"short": "Who can view this macro.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visible_to_team_ids",
						"short": "The team IDs that can view this macro when visible_to is set to specific_teams.",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "macro",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "WzE3MTk0OTM3NTcuMCwgIjEyMyJd",
											"kind": "query",
											"name": "starting_after",
											"orig": "starting_after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1719474966,
											"kind": "query",
											"name": "updated_since",
											"orig": "updated_since",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/macros",
								"segments": []any{
									map[string]any{
										"lit": "macros",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"per_page",
										"starting_after",
										"updated_since",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"macros",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/macros/{id}",
								"segments": []any{
									map[string]any{
										"lit": "macros",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"macros",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"merge_history": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "merged_at",
						"short": "(Unix timestamp in seconds) The time when the merge occurred.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "source_contact_id",
						"short": "The Intercom ID of the contact that was merged into this contact.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source_contact_role",
						"short": "The role of the contact that was merged in.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object.",
						"type": "`$STRING`",
					},
				},
				"name": "merge_history",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "63a07ddf05a32042dffac965",
											"kind": "param",
											"name": "contact_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/contacts/{id}/merge_history",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "contact_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "contact_id",
									},
									map[string]any{
										"lit": "merge_history",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contact_id",
										"cursor",
										"intercom_version",
										"order",
										"per_page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"contacts",
									"{contact_id}",
									"merge_history",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"contact",
						},
					},
				},
			},
			"message": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bcc",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "body",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The message body, which may contain HTML.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cc",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "conversation_id",
						"short": "The associated conversation_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "create_conversation_without_contact_reply",
						"short": "Whether a conversation should be opened in the inbox for the message without the contact replying.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The time the conversation was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "from",
						"req": true,
						"short": "The sender of the message.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The id representing the message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message_type",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The type of message that was sent.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subject",
						"short": "The subject of the message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "template",
						"short": "The style of the outgoing message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "to",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of the message",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "message",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/messages",
								"segments": []any{
									map[string]any{
										"lit": "messages",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"messages",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"news_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "body",
						"short": "The news item body, which may contain HTML.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "cover_image_url",
						"short": "URL of the image used as cover.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "timestamp",
						"name": "created_at",
						"short": "Timestamp for when the news item was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "deliver_silently",
						"short": "When set to true, the news item will appear in the messenger newsfeed without showing a notification badge.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the news item which is given by Intercom.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "labels",
						"short": "Label names displayed to users to categorize the news item.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "newsfeed_assignments",
						"short": "A list of newsfeed_assignments to assign to the specified newsfeed.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "reactions",
						"short": "Ordered list of emoji reactions to the news item.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sender_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$INTEGER`",
							},
						},
						"short": "The id of the sender of the news item.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "state",
						"short": "News items will not be visible to your users in the assigned newsfeeds until they are set live.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The title of the news item.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "timestamp",
						"name": "updated_at",
						"short": "Timestamp for when the news item was last updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "workspace_id",
						"short": "The id of the workspace which the news item belongs to.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "news_item",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/news/news_items",
								"segments": []any{
									map[string]any{
										"lit": "news",
									},
									map[string]any{
										"lit": "news_items",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"news",
									"news_items",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "id",
											"orig": "news_item_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/news/news_items/{news_item_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"news_item_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "news",
									},
									map[string]any{
										"lit": "news_items",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"news",
									"news_items",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "id",
											"orig": "news_item_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/news/news_items/{news_item_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"news_item_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "news",
									},
									map[string]any{
										"lit": "news_items",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"news",
									"news_items",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"newsfeed": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "timestamp",
						"name": "created_at",
						"short": "Timestamp for when the newsfeed was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the newsfeed which is given by Intercom.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the newsfeed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "timestamp",
						"name": "updated_at",
						"short": "Timestamp for when the newsfeed was last updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "newsfeed",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "newsfeed_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/news/newsfeeds/{newsfeed_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"newsfeed_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "news",
									},
									map[string]any{
										"lit": "newsfeeds",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"news",
									"newsfeeds",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"note": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "admin_id",
						"short": "The unique identifier of the admin creating the note.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "author",
						"short": "Optional.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "body",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The body text of the note.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "company",
						"short": "Represents the company that the note was created about.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "contact",
						"short": "Represents the contact that the note was created about.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "timestamp",
						"name": "created_at",
						"short": "The time the note was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The id of the note.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "String representing the object's type.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "note",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/companies/{company_id}/notes",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "notes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"companies",
									"{company_id}",
									"notes",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "contact_id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/contacts/{contact_id}/notes",
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "contact_id",
									},
									map[string]any{
										"lit": "notes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contact_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"{contact_id}",
									"notes",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
											"kind": "param",
											"name": "company_id",
											"orig": "company_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/companies/{company_id}/notes",
								"segments": []any{
									map[string]any{
										"lit": "companies",
									},
									map[string]any{
										"var": "company_id",
									},
									map[string]any{
										"lit": "notes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"company_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"companies",
									"{company_id}",
									"notes",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "contact_id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/contacts/{contact_id}/notes",
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "contact_id",
									},
									map[string]any{
										"lit": "notes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contact_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"{contact_id}",
									"notes",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 1,
											"kind": "param",
											"name": "id",
											"orig": "note_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/notes/{note_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"note_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "notes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"notes",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"company",
						},
						[]any{
							"contact",
						},
					},
				},
			},
			"office_hour": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"short": "The time the schedule was created as a Unix timestamp.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the office hours schedule.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the office hours schedule.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "time_intervals",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "The open intervals for the schedule.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "time_zone_name",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The IANA time zone the schedule's hours are evaluated in.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "twenty_four_seven",
						"short": "Whether the schedule is open 24/7.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of the object - always `office_hours_schedule`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"short": "The time the schedule was last updated as a Unix timestamp.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "office_hour",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/office_hours_schedules",
								"segments": []any{
									map[string]any{
										"lit": "office_hours_schedules",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"office_hours_schedules",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/office_hours_schedules",
								"segments": []any{
									map[string]any{
										"lit": "office_hours_schedules",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"office_hours_schedules",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "456",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "office_hours_schedule_id",
											"orig": "office_hours_schedule_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}",
								"segments": []any{
									map[string]any{
										"lit": "office_hours_schedules",
									},
									map[string]any{
										"var": "office_hours_schedule_id",
									},
									map[string]any{
										"lit": "office_hours_exceptions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
										"office_hours_schedule_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"office_hours_schedules",
									"{office_hours_schedule_id}",
									"office_hours_exceptions",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/office_hours_schedules/{id}",
								"segments": []any{
									map[string]any{
										"lit": "office_hours_schedules",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"office_hours_schedules",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"office_hours_schedule",
						},
					},
				},
			},
			"office_hours_exception": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"short": "The time the exception was created as a Unix timestamp.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date",
						"name": "exception_date",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The date the exception applies to, in `YYYY-MM-DD` format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "exception_type",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "`closed` means the workspace is closed all day; `custom_hours` replaces the regular hours with `time_intervals`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the office hours exception.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "An optional name for the exception.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "office_hours_schedule_id",
						"short": "The unique identifier for the schedule this exception belongs to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "recurring_annually",
						"short": "Whether the exception repeats every year on the same date.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "time_intervals",
						"short": "The open intervals for the exception date.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of the object - always `office_hours_exception`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"short": "The time the exception was last updated as a Unix timestamp.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "office_hours_exception",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "office_hours_schedule_id",
											"orig": "office_hours_schedule_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions",
								"segments": []any{
									map[string]any{
										"lit": "office_hours_schedules",
									},
									map[string]any{
										"var": "office_hours_schedule_id",
									},
									map[string]any{
										"lit": "office_hours_exceptions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"office_hours_schedule_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"office_hours_schedules",
									"{office_hours_schedule_id}",
									"office_hours_exceptions",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "office_hours_schedule_id",
											"orig": "office_hours_schedule_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions",
								"segments": []any{
									map[string]any{
										"lit": "office_hours_schedules",
									},
									map[string]any{
										"var": "office_hours_schedule_id",
									},
									map[string]any{
										"lit": "office_hours_exceptions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"office_hours_schedule_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"office_hours_schedules",
									"{office_hours_schedule_id}",
									"office_hours_exceptions",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "456",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "office_hours_schedule_id",
											"orig": "office_hours_schedule_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}",
								"segments": []any{
									map[string]any{
										"lit": "office_hours_schedules",
									},
									map[string]any{
										"var": "office_hours_schedule_id",
									},
									map[string]any{
										"lit": "office_hours_exceptions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
										"office_hours_schedule_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"office_hours_schedules",
									"{office_hours_schedule_id}",
									"office_hours_exceptions",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "456",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "office_hours_schedule_id",
											"orig": "office_hours_schedule_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/office_hours_schedules/{office_hours_schedule_id}/office_hours_exceptions/{id}",
								"segments": []any{
									map[string]any{
										"lit": "office_hours_schedules",
									},
									map[string]any{
										"var": "office_hours_schedule_id",
									},
									map[string]any{
										"lit": "office_hours_exceptions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
										"office_hours_schedule_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"office_hours_schedules",
									"{office_hours_schedule_id}",
									"office_hours_exceptions",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"office_hours_schedule",
						},
					},
				},
			},
			"office_hours_schedule": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"short": "The time the schedule was created as a Unix timestamp.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the office hours schedule.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the office hours schedule.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "time_intervals",
						"short": "The open intervals that make up the weekly schedule.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "time_zone_name",
						"short": "The IANA time zone the schedule's hours are evaluated in.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "twenty_four_seven",
						"short": "Whether the schedule is open 24/7.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of the object - always `office_hours_schedule`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"short": "The time the schedule was last updated as a Unix timestamp.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "office_hours_schedule",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/office_hours_schedules/{id}",
								"segments": []any{
									map[string]any{
										"lit": "office_hours_schedules",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"office_hours_schedules",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/office_hours_schedules/{id}",
								"segments": []any{
									map[string]any{
										"lit": "office_hours_schedules",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"office_hours_schedules",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"paginated": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"short": "An array of Objects",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "pages",
						"short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total_count",
						"short": "A count of the total number of objects.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object",
						"type": "`$STRING`",
					},
				},
				"name": "paginated",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "newsfeed_id",
											"orig": "newsfeed_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/news/newsfeeds/{newsfeed_id}/items",
								"segments": []any{
									map[string]any{
										"lit": "news",
									},
									map[string]any{
										"lit": "newsfeeds",
									},
									map[string]any{
										"var": "newsfeed_id",
									},
									map[string]any{
										"lit": "items",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"newsfeed_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"news",
									"newsfeeds",
									"{newsfeed_id}",
									"items",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/news/news_items",
								"segments": []any{
									map[string]any{
										"lit": "news",
									},
									map[string]any{
										"lit": "news_items",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"news",
									"news_items",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/news/newsfeeds",
								"segments": []any{
									map[string]any{
										"lit": "news",
									},
									map[string]any{
										"lit": "newsfeeds",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"news",
									"newsfeeds",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"newsfeed",
						},
					},
				},
			},
			"phone_switch": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "custom_attributes",
						"short": "An object containing the different custom attributes associated to the conversation as key-value pairs.",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 4,
							"count": 2,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "phone",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
				},
				"name": "phone_switch",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/phone_call_redirects",
								"segments": []any{
									map[string]any{
										"lit": "phone_call_redirects",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"phone_call_redirects",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"reporting_data": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "download_expires_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "download_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "job_identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
				},
				"name": "reporting_data",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "application/octet-stream",
											"kind": "header",
											"name": "accept",
											"orig": "accept",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "job_identifier",
											"orig": "job_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/download/reporting_data/{job_identifier}",
								"rename": map[string]any{
									"param": map[string]any{
										"job_identifier": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "download",
									},
									map[string]any{
										"lit": "reporting_data",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"accept",
										"app_id",
										"intercom_version",
										"job_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"download",
									"reporting_data",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "client_id",
											"orig": "client_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "job_identifier",
											"orig": "job_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/export/reporting_data/{job_identifier}",
								"rename": map[string]any{
									"param": map[string]any{
										"job_identifier": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "export",
									},
									map[string]any{
										"lit": "reporting_data",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"client_id",
										"intercom_version",
										"job_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"export",
									"reporting_data",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"reporting_data_export": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attribute_ids",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "attributes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "dataset_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "default_time_attribute_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "download_expires_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "download_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "end_time",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "job_identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "start_time",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "reporting_data_export",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/export/reporting_data/enqueue",
								"segments": []any{
									map[string]any{
										"lit": "export",
									},
									map[string]any{
										"lit": "reporting_data",
									},
									map[string]any{
										"lit": "enqueue",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"export",
									"reporting_data",
									"enqueue",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/export/reporting_data/get_datasets",
								"segments": []any{
									map[string]any{
										"lit": "export",
									},
									map[string]any{
										"lit": "reporting_data",
									},
									map[string]any{
										"lit": "get_datasets",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"export",
									"reporting_data",
									"get_datasets",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"segment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"short": "The number of items in the user segment.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_at",
						"short": "The time the segment was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier representing the segment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the segment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "person_type",
						"short": "Type of the contact: contact (lead) or user.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of object.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"short": "The time the segment was updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "segment",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "include_count",
											"orig": "include_count",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/segments",
								"segments": []any{
									map[string]any{
										"lit": "segments",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_count",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"segments",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "segment_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/segments/{segment_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"segment_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "segments",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"segments",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"side_conversation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "conversation_parts",
						"short": "The conversation parts (messages) in this side conversation.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 6,
							"count": 1,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "side_conversation_id",
						"short": "The unique identifier for the side conversation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "total_count",
						"short": "The total number of conversation parts in this side conversation.",
						"type": "`$INTEGER`",
					},
				},
				"name": "side_conversation",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "conversation_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 25,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations/{id}/side_conversations",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "conversation_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "conversation_id",
									},
									map[string]any{
										"lit": "side_conversations",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"conversation_id",
										"intercom_version",
										"page",
										"per_page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"{conversation_id}",
									"side_conversations",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"conversation",
						},
					},
				},
			},
			"subscription": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "consent_type",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Describes the type of consent.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content_types",
						"short": "The message types that this subscription supports - can contain `email` or `sms_message`.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "default_translation",
						"short": "A translation object contains the localised details of a subscription type.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The unique identifier representing the subscription type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"short": "The state of the subscription type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "translations",
						"short": "An array of translations objects with the localised version of the subscription type in each available locale within your translation settings.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of the object - subscription",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscription",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "63a07ddf05a32042dffac965",
											"kind": "param",
											"name": "contact_id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/contacts/{contact_id}/subscriptions",
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "contact_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contact_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"{contact_id}",
									"subscriptions",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "63a07ddf05a32042dffac965",
											"kind": "param",
											"name": "contact_id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/contacts/{contact_id}/subscriptions",
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "contact_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contact_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"contacts",
									"{contact_id}",
									"subscriptions",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "63a07ddf05a32042dffac965",
											"kind": "param",
											"name": "contact_id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "37846",
											"kind": "param",
											"name": "id",
											"orig": "subscription_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/contacts/{contact_id}/subscriptions/{subscription_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "contact_id",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contact_id",
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"contacts",
									"{contact_id}",
									"subscriptions",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"contact",
						},
					},
				},
			},
			"subscription_type": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "consent_type",
						"short": "Describes the type of consent.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content_types",
						"short": "The message types that this subscription supports - can contain `email` or `sms_message`.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "default_translation",
						"short": "A translation object contains the localised details of a subscription type.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier representing the subscription type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"short": "The state of the subscription type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "translations",
						"short": "An array of translations objects with the localised version of the subscription type in each available locale within your translation settings.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of the object - subscription",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscription_type",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/subscription_types",
								"segments": []any{
									map[string]any{
										"lit": "subscription_types",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"subscription_types",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tag": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "admin_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Optional id of the teammate to attribute the tagging to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "applied_at",
						"short": "The time when the tag was applied to the object.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "applied_by",
						"short": "The admin who applied the tag.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "companies",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The id of the tag",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the tag",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "value is \"tag\"",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "users",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "tag",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "article_id",
											"orig": "article_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/articles/{article_id}/tags",
								"segments": []any{
									map[string]any{
										"lit": "articles",
									},
									map[string]any{
										"var": "article_id",
									},
									map[string]any{
										"lit": "tags",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"article_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.applied_by`",
								},
								"parts": []any{
									"articles",
									"{article_id}",
									"tags",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "63a07ddf05a32042dffac965",
											"kind": "param",
											"name": "contact_id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/contacts/{contact_id}/tags",
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "contact_id",
									},
									map[string]any{
										"lit": "tags",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contact_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.applied_by`",
								},
								"parts": []any{
									"contacts",
									"{contact_id}",
									"tags",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "content_snippet_id",
											"orig": "content_snippet_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/content_snippets/{content_snippet_id}/tags",
								"segments": []any{
									map[string]any{
										"lit": "content_snippets",
									},
									map[string]any{
										"var": "content_snippet_id",
									},
									map[string]any{
										"lit": "tags",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"content_snippet_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.applied_by`",
								},
								"parts": []any{
									"content_snippets",
									"{content_snippet_id}",
									"tags",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "64619700005694",
											"kind": "param",
											"name": "conversation_id",
											"orig": "conversation_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/{conversation_id}/tags",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "conversation_id",
									},
									map[string]any{
										"lit": "tags",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"conversation_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.applied_by`",
								},
								"parts": []any{
									"conversations",
									"{conversation_id}",
									"tags",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "internal_article_id",
											"orig": "internal_article_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/internal_articles/{internal_article_id}/tags",
								"segments": []any{
									map[string]any{
										"lit": "internal_articles",
									},
									map[string]any{
										"var": "internal_article_id",
									},
									map[string]any{
										"lit": "tags",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"internal_article_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.applied_by`",
								},
								"parts": []any{
									"internal_articles",
									"{internal_article_id}",
									"tags",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "64619700005694",
											"kind": "param",
											"name": "ticket_id",
											"orig": "ticket_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/tickets/{ticket_id}/tags",
								"segments": []any{
									map[string]any{
										"lit": "tickets",
									},
									map[string]any{
										"var": "ticket_id",
									},
									map[string]any{
										"lit": "tags",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"ticket_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.applied_by`",
								},
								"parts": []any{
									"tickets",
									"{ticket_id}",
									"tags",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/tags",
								"segments": []any{
									map[string]any{
										"lit": "tags",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tags",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "63a07ddf05a32042dffac965",
											"kind": "param",
											"name": "contact_id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/contacts/{contact_id}/tags",
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "contact_id",
									},
									map[string]any{
										"lit": "tags",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contact_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"contacts",
									"{contact_id}",
									"tags",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/tags",
								"segments": []any{
									map[string]any{
										"lit": "tags",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"tags",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "tag_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/tags/{tag_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"tag_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tags",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tags",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "article_id",
											"orig": "article_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "7522907",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/articles/{article_id}/tags/{id}",
								"segments": []any{
									map[string]any{
										"lit": "articles",
									},
									map[string]any{
										"var": "article_id",
									},
									map[string]any{
										"lit": "tags",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"article_id",
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.applied_by`",
								},
								"parts": []any{
									"articles",
									"{article_id}",
									"tags",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "63a07ddf05a32042dffac965",
											"kind": "param",
											"name": "contact_id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "7522907",
											"kind": "param",
											"name": "id",
											"orig": "tag_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/contacts/{contact_id}/tags/{tag_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"tag_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "contacts",
									},
									map[string]any{
										"var": "contact_id",
									},
									map[string]any{
										"lit": "tags",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contact_id",
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.applied_by`",
								},
								"parts": []any{
									"contacts",
									"{contact_id}",
									"tags",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "content_snippet_id",
											"orig": "content_snippet_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "7522907",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/content_snippets/{content_snippet_id}/tags/{id}",
								"segments": []any{
									map[string]any{
										"lit": "content_snippets",
									},
									map[string]any{
										"var": "content_snippet_id",
									},
									map[string]any{
										"lit": "tags",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"content_snippet_id",
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.applied_by`",
								},
								"parts": []any{
									"content_snippets",
									"{content_snippet_id}",
									"tags",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "64619700005694",
											"kind": "param",
											"name": "conversation_id",
											"orig": "conversation_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "7522907",
											"kind": "param",
											"name": "id",
											"orig": "tag_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/conversations/{conversation_id}/tags/{tag_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"tag_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "conversation_id",
									},
									map[string]any{
										"lit": "tags",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"conversation_id",
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.applied_by`",
								},
								"parts": []any{
									"conversations",
									"{conversation_id}",
									"tags",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "7522907",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "internal_article_id",
											"orig": "internal_article_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/internal_articles/{internal_article_id}/tags/{id}",
								"segments": []any{
									map[string]any{
										"lit": "internal_articles",
									},
									map[string]any{
										"var": "internal_article_id",
									},
									map[string]any{
										"lit": "tags",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
										"internal_article_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.applied_by`",
								},
								"parts": []any{
									"internal_articles",
									"{internal_article_id}",
									"tags",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "7522907",
											"kind": "param",
											"name": "id",
											"orig": "tag_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "64619700005694",
											"kind": "param",
											"name": "ticket_id",
											"orig": "ticket_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/tickets/{ticket_id}/tags/{tag_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"tag_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tickets",
									},
									map[string]any{
										"var": "ticket_id",
									},
									map[string]any{
										"lit": "tags",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
										"ticket_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.applied_by`",
								},
								"parts": []any{
									"tickets",
									"{ticket_id}",
									"tags",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "tag_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/tags/{tag_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"tag_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tags",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tags",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"article",
						},
						[]any{
							"contact",
						},
						[]any{
							"content_snippet",
						},
						[]any{
							"conversation",
						},
						[]any{
							"internal_article",
						},
						[]any{
							"ticket",
						},
					},
				},
			},
			"team": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "admin_ids",
						"short": "The list of admin IDs that are a part of the team.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "admin_priority_level",
						"short": "Admin priority levels for the team",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "assignment_limit",
						"short": "The assignment limit for the team.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "distribution_method",
						"short": "Describes how assignments are distributed among the team members",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The id of the team",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the team",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Value is always \"team\"",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "team",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/teams",
								"segments": []any{
									map[string]any{
										"lit": "teams",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.teams`",
								},
								"parts": []any{
									"teams",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/teams/{team_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"team_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "teams",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"teams",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"team_metric_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "team_metric_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "42",
											"kind": "param",
											"name": "id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 1800,
											"kind": "query",
											"name": "idle_threshold",
											"orig": "idle_threshold",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/teams/{team_id}/metrics",
								"rename": map[string]any{
									"param": map[string]any{
										"team_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "teams",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "metrics",
									},
								},
								"select": map[string]any{
									"$action": "metrics",
									"exist": []any{
										"id",
										"idle_threshold",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"teams",
									"{id}",
									"metrics",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ticket": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "admin_assignee_id",
						"short": "The id representing the admin assigned to the ticket.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "attributes",
						"short": "The attributes set on the ticket.",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 4,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "category",
						"short": "Category of the Ticket.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "contacts",
						"short": "The list of contacts affected by a ticket.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "The time the ticket was created as a UTC Unix timestamp.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the ticket which is given by Intercom.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_shared",
						"short": "Whether or not the ticket is shared with the customer.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "linked_objects",
						"short": "An object containing metadata about linked conversations and linked tickets.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "open",
						"short": "Whether or not the ticket is open.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "previous_ticket_state_id",
						"short": "The ID of the previous ticket state from the most recent state change.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "skip_notifications",
						"short": "Option to disable notifications when a Ticket is created.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "snoozed_until",
						"short": "The time the ticket will be snoozed until as a UTC Unix timestamp.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "team_assignee_id",
						"short": "The id representing the team assigned to the ticket.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ticket_attributes",
						"short": "An object containing the different attributes associated to the ticket as key-value pairs.",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 5,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "ticket_id",
						"short": "The ID of the Ticket used in the Intercom Inbox and Messenger.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ticket_parts",
						"short": "A list of Ticket Part objects for each note and event in the ticket.",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 2,
							"count": 2,
							"depth": 9,
						},
					},
					map[string]any{
						"name": "ticket_state",
						"short": "A ticket state, used to define the state of a ticket.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ticket_state_id",
						"short": "The ID of the ticket state associated with the ticket type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ticket_type",
						"short": "A ticket type, used to define the data fields to be captured in a ticket.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ticket_type_id",
						"req": true,
						"short": "The ID of the type of ticket you want to convert the conversation to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Always ticket",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "The last time the ticket was updated as a UTC Unix timestamp.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ticket",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 123,
											"kind": "param",
											"name": "conversation_id",
											"orig": "conversation_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations/{conversation_id}/convert",
								"segments": []any{
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "conversation_id",
									},
									map[string]any{
										"lit": "convert",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"conversation_id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations",
									"{conversation_id}",
									"convert",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "ticket_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/tickets/{ticket_id}/change_type",
								"rename": map[string]any{
									"param": map[string]any{
										"ticket_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tickets",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "change_type",
									},
								},
								"select": map[string]any{
									"$action": "change_type",
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tickets",
									"{id}",
									"change_type",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/tickets",
								"segments": []any{
									map[string]any{
										"lit": "tickets",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tickets",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "ticket_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/tickets/{ticket_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"ticket_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tickets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tickets",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "ticket_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/tickets/{ticket_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"ticket_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tickets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tickets",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "ticket_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/tickets/{ticket_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"ticket_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tickets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tickets",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"conversation",
						},
					},
				},
			},
			"ticket_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "pages",
						"short": "Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "query",
						"req": true,
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 4,
							"count": 4,
							"depth": 7,
						},
					},
					map[string]any{
						"name": "tickets",
						"short": "The list of ticket objects",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 5,
							"count": 3,
							"depth": 12,
						},
					},
					map[string]any{
						"name": "total_count",
						"short": "A count of the total number of objects.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"short": "Always ticket.list",
						"type": "`$STRING`",
					},
				},
				"name": "ticket_list",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/tickets/search",
								"segments": []any{
									map[string]any{
										"lit": "tickets",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tickets",
									"search",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ticket_reply": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attachments",
						"short": "A list of attachments for the part.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "author",
						"short": "The author that wrote or triggered the part.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "body",
						"short": "The message body, which may contain HTML.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "The time the note was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The id representing the part.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "part_type",
						"short": "Type of the part",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "redacted",
						"short": "Whether or not the ticket part has been redacted.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "skip_notifications",
						"short": "Option to disable notifications when replying to a Ticket.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "type",
						"short": "Always ticket_part",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "The last time the note was updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ticket_reply",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "123",
											"kind": "param",
											"name": "id",
											"orig": "ticket_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/tickets/{ticket_id}/reply",
								"rename": map[string]any{
									"param": map[string]any{
										"ticket_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tickets",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "reply",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tickets",
									"{id}",
									"reply",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ticket_state": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"short": "Whether the ticket state is archived",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "category",
						"short": "The category of the ticket state",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_label",
						"short": "The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The id of the ticket state",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "internal_label",
						"short": "The state the ticket is currently in, in a human readable form - visible in Intercom",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ticket_types",
						"short": "A list of ticket types associated with a given ticket state.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"short": "String representing the object's type.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ticket_state",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/ticket_states",
								"segments": []any{
									map[string]any{
										"lit": "ticket_states",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"ticket_states",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ticket_type": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"short": "Whether the ticket type is archived or not.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "category",
						"short": "Category of the Ticket Type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "timestamp",
						"name": "created_at",
						"short": "The date and time the ticket type was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "description",
						"short": "The description of the ticket type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "icon",
						"short": "The icon of the ticket type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The id representing the ticket type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_internal",
						"short": "Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The name of the ticket type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ticket_states",
						"short": "A list of ticket states associated with a given ticket type.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ticket_type_attributes",
						"short": "A list of attributes associated with a given ticket type.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"short": "String representing the object's type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "timestamp",
						"name": "updated_at",
						"short": "The date and time the ticket type was last updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "workspace_id",
						"short": "The id of the workspace that the ticket type belongs to.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ticket_type",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/ticket_types",
								"segments": []any{
									map[string]any{
										"lit": "ticket_types",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ticket_types",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/ticket_types",
								"segments": []any{
									map[string]any{
										"lit": "ticket_types",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"ticket_types",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "ticket_type_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/ticket_types/{ticket_type_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"ticket_type_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "ticket_types",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ticket_types",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "ticket_type_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/ticket_types/{ticket_type_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"ticket_type_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "ticket_types",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"ticket_types",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ticket_type_attribute": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_multiple_values",
						"short": "Whether the attribute allows multiple files to be attached to it (only applicable to file attributes)",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "archived",
						"short": "Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets)",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "data_type",
						"req": true,
						"short": "The data type of the attribute",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The description of the attribute presented to the teammate or contact",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "list_items",
						"short": "A comma delimited list of items for the attribute value (only applicable to list attributes)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "multiline",
						"short": "Whether the attribute allows multiple lines of text (only applicable to string attributes)",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the ticket type attribute",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "required_to_create",
						"short": "Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "required_to_create_for_contacts",
						"short": "Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "visible_on_create",
						"short": "Whether the attribute is visible to teammates when creating a ticket in Inbox.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "visible_to_contacts",
						"short": "Whether the attribute is visible to contacts when creating a ticket in Messenger.",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ticket_type_attribute",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "ticket_type_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/ticket_types/{ticket_type_id}/attributes",
								"rename": map[string]any{
									"param": map[string]any{
										"ticket_type_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "ticket_types",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "attributes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.input_options`",
								},
								"parts": []any{
									"ticket_types",
									"{id}",
									"attributes",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "attribute_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "ticket_type_id",
											"orig": "ticket_type_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/ticket_types/{ticket_type_id}/attributes/{attribute_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"attribute_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "ticket_types",
									},
									map[string]any{
										"var": "ticket_type_id",
									},
									map[string]any{
										"lit": "attributes",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
										"ticket_type_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.input_options`",
								},
								"parts": []any{
									"ticket_types",
									"{ticket_type_id}",
									"attributes",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"ticket_type",
						},
					},
				},
			},
			"visitor": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "anonymous",
						"short": "Identifies if this visitor is anonymous.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "app_id",
						"short": "The id of the app the visitor is associated with.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "avatar",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "companies",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "created_at",
						"short": "The time the Visitor was added to Intercom.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "custom_attributes",
						"short": "The custom attributes you have set on the Visitor.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "do_not_track",
						"short": "Identifies if this visitor has do not track enabled.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "email",
						"name": "email",
						"short": "The email of the visitor.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "has_hard_bounced",
						"short": "Identifies if this visitor has had a hard bounce.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"short": "The Intercom defined id representing the Visitor.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "las_request_at",
						"short": "The time the Lead last recorded making a request.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "location_data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "marked_email_as_spam",
						"short": "Identifies if this visitor has marked an email as spam.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the visitor.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "owner_id",
						"short": "The id of the admin that owns the Visitor.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "phone",
						"short": "The phone number of the visitor.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pseudonym",
						"short": "The pseudonym of the visitor.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referrer",
						"short": "The referer of the visitor.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "remote_created_at",
						"short": "The time the Visitor was added to Intercom.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "segments",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "session_count",
						"short": "The number of sessions the Visitor has had.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "signed_up_at",
						"short": "The time the Visitor signed up for your product.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "social_profiles",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tags",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"short": "Value is 'visitor'",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unsubscribed_from_emails",
						"short": "Whether the Visitor is unsubscribed from emails.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "updated_at",
						"short": "The last time the Visitor was updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "user_id",
						"short": "Automatically generated identifier for the Visitor.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "utm_campaign",
						"short": "The utm_campaign of the visitor.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "utm_content",
						"short": "The utm_content of the visitor.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "utm_medium",
						"short": "The utm_medium of the visitor.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "utm_source",
						"short": "The utm_source of the visitor.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "utm_term",
						"short": "The utm_term of the visitor.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "visitor",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/visitors",
								"segments": []any{
									map[string]any{
										"lit": "visitors",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"visitors",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/visitors",
								"segments": []any{
									map[string]any{
										"lit": "visitors",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"visitors",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"whatsapp_message_status": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "details",
						"short": "Detailed error information",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message",
						"short": "Error message",
						"type": "`$STRING`",
					},
				},
				"name": "whatsapp_message_status",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "message_id",
											"orig": "message_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/messages/whatsapp/status",
								"segments": []any{
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"lit": "whatsapp",
									},
									map[string]any{
										"lit": "status",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"message_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.error`",
								},
								"parts": []any{
									"messages",
									"whatsapp",
									"status",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"whatsapp_message_status_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "conversation_id",
						"req": true,
						"short": "ID of the conversation",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "Creation timestamp",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Event ID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of the message",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "template_name",
						"short": "Name of the WhatsApp template used",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "Event type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "Last update timestamp",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "whatsapp_message_id",
						"req": true,
						"short": "WhatsApp's message identifier",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "whatsapp_message_status_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "ruleset_id",
											"orig": "ruleset_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "starting_after",
											"orig": "starting_after",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/messages/status",
								"segments": []any{
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"lit": "status",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"intercom_version",
										"per_page",
										"ruleset_id",
										"starting_after",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"messages",
									"status",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"workflow": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attributes",
						"short": "Custom attributes defined for this workflow.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "created_at",
						"short": "When the workflow was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "The description of the workflow.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "embedded_rules",
						"short": "Rules embedded within the workflow steps.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the workflow.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "preferred_devices",
						"short": "The preferred devices for this workflow.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "snapshot",
						"short": "The current snapshot of workflow steps and configuration.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "state",
						"short": "The current state of the workflow.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "target_channels",
						"short": "The channels this workflow targets.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "targeting",
						"short": "The targeting rules for this workflow.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "title",
						"short": "The title of the workflow.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "trigger_type",
						"short": "The type of trigger that starts this workflow.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "When the workflow was last updated.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "workflow",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": "2.16",
											"kind": "header",
											"name": "intercom_version",
											"orig": "intercom_version",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "12345",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/export/workflows/{id}",
								"segments": []any{
									map[string]any{
										"lit": "export",
									},
									map[string]any{
										"lit": "workflows",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"intercom_version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.workflow`",
								},
								"parts": []any{
									"export",
									"workflows",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
